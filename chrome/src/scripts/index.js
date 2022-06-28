$(function () {
	InitialSearchBox({ 
        openType: 'current' 
    });

    $('li').click(function() {
        if ($(this).data('href')) {
            let url = $(this).data('href');
            
            if (url.startsWith('chrome-extension://')) {
                // New Tab
                chrome.tabs.create({ url: url });
            }
            else {
                // Current Tab
                chrome.tabs.getCurrent (function (tab) {
                    chrome.tabs.update(tab.id, { url: url });
                });
            }
        }
    });
});