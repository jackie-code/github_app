//for the apikey we are using BasicAuth in the Authorization Type in Postman



function watchForm() {
    $('form').submit(event => {
      $("#results-list").empty();
      event.preventDefault();
      let username = $("#js-search-term").val();
      fetchAndDisplayRepos(username);
    });
  }
  function fetchAndDisplayRepos(username) {
    let searchURL = `https://api.github.com/users/${username}/repos`;
    fetch(searchURL)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $("#js-error-message").text(`Something went wrong: ${err.message}`);
      });
  }
  function displayResults(responseJson) {
    console.log(responseJson);
    for(let i=0; i< responseJson.length; i++){
    $("#results-list").append(`<li><a href="${responseJson[i].html_url}"><h2>${responseJson[i].name}</h2><br>${responseJson[i].html_url}</a></li>`);
    $('#results').show();
    }
  
  }
  watchForm();
  
  