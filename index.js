/** Google query URL with btnI key which activates I'm Feeling Lucky */
var googleUrl = 'https://google.com/search?btnI&q=';

/** Returns a Google query URL using I'm Feeling Lucky given an unformatted
    query */
function getLucky (query) {
    return [googleUrl, query].join('');
}

/** Opens a url with the query as the search term in the new tab*/
function open_url(query){
    var luckyUrl = getLucky(query);
    chrome.tabs.create({ url: luckyUrl });
}

/** Creates a new item in the context menu to search
 * selected text using the I'm Feeling Lucky Google Search */
chrome.contextMenus.create({
    id: "lucky",
    title: "Search I'm Feeling Lucky for '%s'",
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "lucky") {
        var query = info.selectionText;
        open_url(query);
    }
});