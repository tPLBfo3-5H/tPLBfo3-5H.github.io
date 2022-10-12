window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  
  const functionApi = 'https://azure-function-resume.azurewebsites.net/api/HttpTrigger1?code=90SQnCIx4EIpPnyjOmLYNz8cGHopCUlSU4oo9Lb3zz71AzFuX9xQiA==';
  
  const getVisitCount = () => {
    let count = 7;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response.count;
        console.log("Fetch to function succeeded.");
        document.getElementById('counter').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }
  