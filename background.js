var netflixcode = `
document.getElementById("title").children[0].innerText = "Netflix Party (BBN)"; 
document.getElementById("teleparty-blog-btn").children[0].src = "https://www.bigbotnetwork.com/images/avatar.png";
document.getElementById("teleparty-blog-btn").children[1].innerText = "Join Our Discord";
document.getElementById("teleparty-blog-btn").children[1].style.background = "#7289DA";
document.getElementById("teleparty-blog-btn").href = "https://discord.gg/nPwjaJk";
console.log("[BBN Plugin] Made Teleparty Better");
`

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tab) {
        if (tab[0].url.startsWith('https://www.netflix.com/watch/')) {
            chrome.tabs.executeScript({
                code: netflixcode
            })
        } else {
            chrome.tabs.create({
                "url": "https://bigbotnetwork.com"
            });
        }
    })
});
