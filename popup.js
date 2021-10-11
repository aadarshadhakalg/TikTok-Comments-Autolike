document.getElementById("like-button").addEventListener("click", likeAllComments);

function likeAllComments() {
    console.log("FSDF");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currTab = tabs[0];
        if (currTab) {
            chrome.tabs.sendMessage(currTab.id, { action: 'executeCode' });
        }
    });
}