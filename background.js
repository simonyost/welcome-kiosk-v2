/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */

chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

/**
 * Listens for the app restarting then re-creates the window.
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 */

// chrome.app.runtime.onRestarted.addListener(function() {
//   runApp();
// });


chrome.app.window.onClosed.addListener(function() {
  chrome.power.releaseKeepAwake();
})

// chrome.app.window.unresponsive.addListener(function() {
//   window.reload();
// })



/**
 * Creates the window for the application.
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
function runApp() {
  chrome.app.window.create(
    "window.html",
    {
    state: "fullscreen",
    frame: "none"
    }
  );
  chrome.power.requestKeepAwake('display');

}