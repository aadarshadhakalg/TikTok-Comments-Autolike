chrome.runtime.onMessage.addListener(function (request) {
    console.log("sg");
    if (request.action === 'executeCode') {
        startLiking();
    }
});


async function startLiking() {
    let content = document.querySelector(".comment-container");
    let temp = 0;
    content.scrollTop = content.scrollHeight - content.clientHeight;
    await sleep(1000);
    while (temp != content.scrollTop) {
        temp = content.scrollTop;
        content.scrollTop = content.scrollHeight - content.clientHeight;
        await sleep(1000);
    }

    let likeButtons = document.querySelectorAll('.like-container > .icon');

    console.log(likeButtons);

    for (elt of likeButtons) {
        await sleep(1000);
        elt.click();
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}