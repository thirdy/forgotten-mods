
var fm_options_elem = document.createElement('fm_options_elem');
	 
chrome.storage.sync.get(
	{'wtbpm_template':'@{ign} Hi, WTB your {item} for {price} in {league}. You can invite me to party whenever you are free. Thanks!',
  	 'wtbpmwoprice_template':'@{ign} Hi, WTB your {item} in {league}. You can invite me to party whenever you are free. Thanks!',
	 'item_notes_enabled':false,
	 'seller_notes_enabled':false},
  function(items) {
	  console.log('loaded options: ', items);
	  fm_options_elem.setAttribute('wtbpm_template'			, items.wtbpm_template);
	  fm_options_elem.setAttribute('wtbpmwoprice_template'	, items.wtbpmwoprice_template);
	  fm_options_elem.setAttribute('item_notes_enabled'		, items.item_notes_enabled);
	  fm_options_elem.setAttribute('seller_notes_enabled'	, items.seller_notes_enabled);
});


var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'https://76f193c373fb5126bd1b5ee4fc270e3c6a1833cb.googledrive.com/host/0B4u8zcQBGBwpRll0ZzJxZ09DUUU/forgotten-mods.js');  document.body.appendChild(jsCode); document.body.appendChild(fm_options_elem);
