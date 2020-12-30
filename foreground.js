//document.querySelector('#hplogo img').classList.add('spinspinspin');

const first=document.createElement('button');
first.innerText = "SET DATA";
first.id="first";

const second=document.createElement('button');
second.innerText = "Shout";
second.id="second";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', ()=>{
    chrome.storage.local.set({"password": "123"});
    console.log("I set the data");
})

second.addEventListener('click', ()=>{
    chrome.runtime.sendMessage({message: 'check the storage'});
    console.log("I sent the message");
})

chrome.runtime.onMessage.addListener((resquest, sender, onRequest)=>{
    console.log(request.message);
})