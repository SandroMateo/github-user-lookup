var apiKey = require("./../.env").apiKey;

function User() {
 this.repositories;
}

User.prototype.getRepository = function(username, displayFunction) {
  $.get("https://api.github.com/users/" + username + "/repos?access_token=" + apiKey).then(function(response) {
    this.repositories = response;
    displayFunction(this.repositories);
    console.log(this.repositories);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
