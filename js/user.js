var apiKey = require("./../.env").apiKey;

function User() {
 this.gitName;
}

User.prototype.getRepository = function(username, displayFunction) {
  $.get("https://api.github.com/users/" + username + "?access_token=" + apiKey).then(function(response) {
    this.gitName = response.name;
    displayFunction(this.gitName);
    console.log(response);
    console.log(this.gitName);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
