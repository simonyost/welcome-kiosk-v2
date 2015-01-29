window.onload = function() {
  var home = 'http://thejourney.org/node/21877'
    , webview = document.querySelector("webview")
    , backToHomBtn = document.querySelector("#backToHomBtn");

  // Set the initial src of webview.
  webview.src = home;

  /**
   * Event handler for loadredirect.
   *
   * Checks to see if webview has navigated "off-site". If so, show backHomeBtn.
   */
  webview.addEventListener('loadredirect', function() {
    if(webview.src !== home) {
      jQuery(backToHomBtn).show();
    } else {
      jQuery(backToHomBtn).hide();
    }
  });

  /**
   * Event handler for newwindow.
   *
   * Catches any attempts to launch a new window (target="_blank") and sets
   * the webview's src instead.
   */
  webview.addEventListener('newwindow', function(e) {
    webview.src = e.targetUrl;
  });

  /**
   * Click handler for "back to home button".
   */
  backToHomBtn.onclick = function() {
    webview.clearData({since:0}, {cookies: true}, function() {
      webview.src = home;
    });
  }
}