
var currentURL;

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, 
		function(tabs){
		getCurrentURL(tabs[0].url);
		// alert(currentURL);
		// var page_lang = currentURL.substring(8,11);

		// Sayfa wikipedia'ya ait degil.
		if(currentURL.search("wikipedia") == -1)
		{
			return;
		}

		// Sayfa 0Wikipedia adresine bagli. degistirmeye gerek yok.
		if(currentURL.search("0wikipedia") != -1)
		{
			return;
		}

		if(currentURL.search("https://www.") != -1){
			chrome.tabs.update({
				"url": currentURL.substring(0,20) + '0' + currentURL.substring(21)
			});
		}
		else {
			chrome.tabs.update({
				"url": currentURL.substring(0,19) + '0' + currentURL.substring(20)
			});
		}
	});
});

function getCurrentURL(tab){
	currentURL = tab;
}
