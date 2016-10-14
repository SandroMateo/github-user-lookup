var User = require("./../js/user.js").userModule;

function displayRepo() {
  $("#user-respository").text()
}

$(function() {
  var user = new User();
  user.getRepository();
});
