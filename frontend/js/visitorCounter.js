window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
  });
  
  
  const functionApi = 'https://anoel-azure-function-resume-ps.azurewebsites.net/api/HttpTrigger1?code=dldr_bEbzUDqP3RPyFOunN7OrcCxfKxvZBP4lu05LEvLAzFuqNwfzQ==';
  
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
  