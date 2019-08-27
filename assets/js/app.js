// Utilized Variables
let topics = ['Tennessee', 'Florida', 'Colorado', 'North Carolina'];
let limit = 10;
var stateToBeSearched = '';

console.log(stateToBeSearched);
function queryTheAPI() {
  // saving the API Key ---------------------------
  const apiKey = 'nUT3pXgTT8JuRHnl2o3Pv6aYDfhTH8cJ';
  const apiURL = `http://api.giphy.com/v1/gifs/search?q=${stateToBeSearched}&api_key=${apiKey}&limit=${limit}&rating=g`;
  // -----------------------------------------------
  let options = {
    url: apiURL,
    method: 'GET'
  }
  $.ajax(options).then(function (response) {
    console.log(response.data[0].rating);
    for(var i = 0; i < limit; i++) {
      let containerDiv = $('<div>');
      let holderDiv = $('#gif-holder');
      let imageURL = response.data[i].images.fixed_height.url;
      let rating = response.data[i].rating;
      let image = $('<img>');
      let p = $('<p>');
      p.text(`Rating: ${rating}`);
      image.attr('src', `${imageURL}`);
      image.attr('class', 'gif-style');
      containerDiv.prepend(image);
      containerDiv.prepend(p);
      holderDiv.prepend(containerDiv);

    }
  })
}

$(document).on('click', '.btn', function() {
  // console.log($(this).val());
  stateToBeSearched = $(this).val();
  console.log(`State: ${stateToBeSearched}`);
  queryTheAPI()
});


function applicationStart() {
  let btnHolderDiv = $('#button-holder');
  btnHolderDiv.empty();
  for (let i = 0; i < topics.length; i++) {
    let button = $('<button>');
    button.attr('class', 'btn');
    button.attr('value', `${topics[i]}`);
    button.text(`${topics[i]}`);
    btnHolderDiv.append(button);
  }
}


$('#saveBtn').on('click', function() {
  let stateInput = $('#search');
  let state = stateInput.val();
  topics.push(state);
  console.log(topics);
  applicationStart();
})

applicationStart()