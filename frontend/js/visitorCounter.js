window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
  });
  
  
  const functionApi = 'https://anoel-azure-function-resume-ps.azurewebsites.net/api/HttpTrigger1?code=dldr_bEbzUDqP3RPyFOunN7OrcCxfKxvZBP4lu05LEvLAzFuqNwfzQ==';
  
  const getVisitorCount = () => {
    let count = 7;
    fetch(functionApi)
      .then(response => {
        return response.json()
      })
      .then(response => {
        count = response;
        console.log("Function succeeded.  You are visitor number " + count);
        document.getElementById('counter').innerText = count;
      }).catch(function (error) {
        console.log(error);
      });
    return count;
  }
  