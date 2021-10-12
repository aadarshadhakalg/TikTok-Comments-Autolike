// const connectButton = document.querySelector('button');
// const connectButton = document.querySelector('.like-button::before');
// const connectButton = document.querySelector('.like-button::after');
// const connectButton = document.querySelector('.ripple');
// const connectButton = document.querySelector('.heart');
const connectButton = document.querySelector('#comment-like');

connectButton.addEventListener('click', likeAllComments);

function likeAllComments() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currTab = tabs[0];
        if (currTab) {
            chrome.tabs.sendMessage(currTab.id, { action: 'executeCode' });
        }
    });
}