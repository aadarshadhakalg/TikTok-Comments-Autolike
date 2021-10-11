chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === 'executeCode') {
        startLiking();
    }
});


async function startLiking() {

    let content = document.querySelector(".comment-container");

    let temp = 0;

    do {
        content.scrollTop = content.scrollHeight - content.clientHeight;

        temp = content.scrollTop;

    } while (temp != content.scrollTop);

    let likeButtons = document.querySelectorAll('.like-container > .icon');

    console.log(likeButtons);

    for (elt of likeButtons) {
        await sleep(3000);
        elt.click();
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}