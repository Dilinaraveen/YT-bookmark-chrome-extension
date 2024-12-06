chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Ensure the URL is defined and contains "youtube.com/watch"
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        // Extract query parameters
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);

        // Send a message to the content script
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParameters.get("v"),
        });
    }
});
