var transferUserInfo = function() {
    var textarea = document.getElementById('transfer-dom-area');
    textarea.value = JSON.stringify(Globals.user.programs);
};

var textarea = document.createElement('textarea');
textarea.setAttribute('id', 'transfer-dom-area');
textarea.style.display = 'none';
document.body.appendChild(textarea);

var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + transferUserInfo + ')();'));
document.body.appendChild(script);

chrome.extension.sendRequest({internalVariable: textarea.value});
document.body.removeChild(textarea);