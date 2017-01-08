chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://newbie-dev.net/";
    chrome.tabs.create({ url: newURL });
});