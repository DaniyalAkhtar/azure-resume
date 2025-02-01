window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterdaniyal.azurewebsites.net/api/GetResumeCounter?code=d5LSnl4IEqS1-3HqA_l6GQYepqwIbX_2m8yceuc8Iab8AzFuLpf7Aw%3D%3D';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
} 