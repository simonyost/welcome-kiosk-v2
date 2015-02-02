window.onload = function() {

  console.log('window loaded');
  var theButton = document.querySelector("#theButton");

  theButton.onclick = setChurch;

    function setChurch() {
      // string load testing
      chrome.storage.local["mysetting"] = "myvalue123";
      console.log(chrome.storage.local["mysetting"]);
      console.log("set church is running");
    }

}