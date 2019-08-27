// saving the API Key ---------------------------
const apiKey = 'nUT3pXgTT8JuRHnl2o3Pv6aYDfhTH8cJ';
const apiURL = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=5`;
// -----------------------------------------------

let topics = ['Tennessee', 'Florida', 'Colorado', 'North Carolina'];


function queryTheAPI() {
  let options = {
    url: apiURL,
    method: 'GET'
  }
  $.ajax(options).then(response)
    console.log(response);
}