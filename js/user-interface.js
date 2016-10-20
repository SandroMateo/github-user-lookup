var User = require("./../js/user.js").userModule;

function displayInfo(_repositories) {
  $("#repos").empty();
  for(var i = 0; i < _repositories.length; i++) {
    $("#repos").append("<li><strong>Name:</strong> " + _repositories[i].name
                    + "<p><strong>Description:</strong> " + _repositories[i].description +"</p>"
                    + "<p><strong>Link:</strong> <a href=" + _repositories[i].html_url + ">" + _repositories[i].html_url + "</a></p></li>");
  }
}

$(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var user = new User();
    var username = $("#username-input").val();
    user.getRepository(username, displayInfo);
    $("#output").slideDown(1500);
  });
});
