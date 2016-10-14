var apiKey = request("./../.env").apiKey;

function User() {

}

User.prototype.getRepository = function() {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}
