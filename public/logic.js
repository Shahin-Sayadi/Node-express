async function getApi() {
    const textToDisplay = await makeRequest(
        "http://localhost:3000/catInfo",
        "GET"
    );
    console.log(textToDisplay);
}
getApi();

async function getWeather() {
    const textToDisplay = await makeRequest(
        "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/71420/period/latest-hour/data.json",
        "GET"
    );
    console.log(textToDisplay);
}
getWeather();



async function collectText() {
    const textToDisplay = await makeRequest("http://localhost:3000/api", "GET")
    const header = document.getElementsByTagName("h1")[0]
    header.innerHTML = ""
    console.log(textToDisplay)
    
    function renderTasks() {
        for (let index = 0; index < textToDisplay.length; index++) {
            const todo = textToDisplay[index];
            console.log(todo)
            console.log(todo.title)
            

            
            
            
            let taskContainer = document.createElement("div")
            taskContainer.id = "taskContainer"
            
            taskContainer.innerHTML = todo.title

            header.appendChild(taskContainer)
            
            
        }
        
    }
    
    renderTasks()
}

async function saveNew() {

    let title = document.getElementById("taskInput").value



    const status = await makeRequest("http://localhost:3000/api", "POST", { title })
    
}





async function makeRequest(url, method, headers,body) {
    try {
        const response = await fetch(url, {
            
            headers,
            method,
            body: JSON.stringify(body)
        });
        console.log(response)
        const result = await response.json();

        return result;
    } catch (err) {
        console.error(err);
    }
}
