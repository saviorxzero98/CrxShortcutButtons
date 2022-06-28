$(function()
{
    let openUrlInNewTab = (url) => {
        chrome.tabs.create({ 
            url: url ?? 'chrome://newtab/'
        });
    }

    let openUrlInNewWindow = (url) => {
        chrome.windows.create({
            url: url ?? 'chrome://newtab/',
            state: 'maximized'
        })
    }

    let openIncognitoWindow = (url) => {
        chrome.windows.create({
            url: url ?? 'chrome://newtab/',
            state: 'maximized',
            incognito: true
        })
    }

    $('.tab-item').click(function()
    {
        if ($(this).data('href'))
        {
            openUrlInNewTab($(this).data('href'));

            window.close();
        }
    });

    $('.window-item').click(function()
    {
        if ($(this).data('href'))
        {
            openUrlInNewWindow($(this).data('href'));

            window.close();
        }
    });

    $('.incognito-item').click(function()
    {
        if ($(this).data('href'))
        {
            openIncognitoWindow($(this).data('href'));

            window.close();
        }
    });
});