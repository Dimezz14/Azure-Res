window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCounter();
})


const functionApiUrl = 'https://getrescounter.azurewebsites.net/api/GetResumeCounter?code=JTFanCypVcQPGOtJeo4Qp0lvckG9sqzE_jCGg4yI9QsIAzFuB8TwKg=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCounter = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}