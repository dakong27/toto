
 /*
$(document).ready(function($) {  
  var dataArray = "Passing click to Toto";

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	console.log("hi");
  }

// Get
  function sendClicks() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"greeting": dataArray}, function(response) {
        });
    });
  }

  $('#button').click(function(){
	 sendClicks(); 
  });


});*/

var leftFoot = 50;

$(document).ready(function($) {  
  var dataArray = "Passing click to Toto";

  function sendClicks() {
      console.log("popup.js > sendClicks()");

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {"greeting": leftFoot}, function(response) {
              console.log(response.farewell);
          });
          
      });
  }

  $(function() {
      console.log("popup.js > OMD Extension ready");
      $('#button').click(function(){
          sendClicks();
      });
  });

});
