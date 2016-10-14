var User = require("./../js/user.js").userModule;

function displayInfo(_username) {
  $("#output").text("name: " + _username);
}

$(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var user = new User();
    var username = $("#username-input").val();
    user.getRepository(username, displayInfo);
  });
});
