chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    width: 1,
    height: 1,
    left: screen.availLeft - 1000,
    top: screen.availTop - 1000
  });

  // Set badge text to a small dot
  chrome.browserAction.setBadgeText({ text: "." });
});
