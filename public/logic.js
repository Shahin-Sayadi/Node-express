async function getApi() {
    const textToDisplay = await makeRequest(
        "http://localhost:3000/catInfo",
        "GET"
    );
    
    const catFact = document.getElementById("catFact")
    catFact.innerHTML = textToDisplay.fact
}
getApi();

async function getWeather() {
    const textToDisplay = await makeRequest(
        "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/71420/period/latest-hour/data.json",
        "GET"
    );
    
    const weather = document.getElementById("weather")
    weather.innerHTML = textToDisplay.value[0].value
}
getWeather();

async function deleteItem(task){
    
    const status = await makeRequest("http://localhost:3000/api/" + task.id, "DELETE")
    
    const header = document.getElementById("text")
    header.innerHTML= status
    
    collectText()
}

async function collectText() {
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET");
    const header = document.getElementById("text")
    header.innerHTML = "";
    let btnContainer = document.getElementById("btn")
    btnContainer.innerHTML = ""

    function renderTasks() {
        for (let index = 0; index < textToDisplay.length; index++) {
            const task = textToDisplay[index];

            let taskContainer = document.createElement("div");
            taskContainer.id = "taskContainer";
            taskContainer.innerHTML = task.title;
            

            let removeBtn = document.createElement("button")
            removeBtn.style.width= "80px"
            removeBtn.id = "removeBtn"
            removeBtn.innerText = "ta bort"
            removeBtn.addEventListener("click",() => {
                deleteItem(task)

            })
            

            btnContainer.appendChild(removeBtn)
            header.appendChild(taskContainer);
        }
    }

    renderTasks();
}

async function saveNew() {
    let title = document.getElementById("taskInput").value;
    let id = Math.floor(Math.random() * 100)
    const status = await makeRequest(
        "http://localhost:3000/api",
        "POST",
        { "Content-type": "Application/json" },
        {
            title,
            id,
        }
        
    );

    
}





async function makeRequest(url, method, headers,body) {
    try {
        const response = await fetch(url, {
            
            headers,
            method,
            body: JSON.stringify(body),
        });
        
        const result = await response.json();

        return result;
    } catch (err) {
        console.error(err);
    }
}
