var active_tab_id=0;

chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id=tab.tabId;
         if(/^https:\/\/www\.google/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file: './mystyles.css'})
            chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=>console.log('i injected the foreground console!'))
         }
    })
})

chrome.runtime.onMessage((requrest, sender, sendResponse)=>{
    if(request.message === 'check the storage'){
        chome.tabs.sendMessage(active_tab_id, {message: 'i got your message'})
        sendResponse({message: 'i got your message'});
        chome.storage.local.get("password", value=>{
            console.log(value)
        });
    }
})