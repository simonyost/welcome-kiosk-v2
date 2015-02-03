window.onload = function() {
    var preChurch = "";

    //returns current church set on last session
    chrome.storage.local.get('currentChurch', function (result) {
        var preChurch = result.currentChurch;
        console.debug("pre storage: " + preChurch);
        // set the select to the currect church set in the last session
        $("#setTheChurch").val(preChurch);
    });



    // sets the current church when select box is changed
    $('#setTheChurch').on('change', function() {
      var church = this.value;
      chrome.storage.local.set({
      	'currentChurch': church,
      }, function() {
      	// Notify that we saved.
      	console.debug('Church saved');
      });
      chrome.storage.local.get('currentChurch', function (result) {
          console.debug(result.currentChurch);
      });
    });

}