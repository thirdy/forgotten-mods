// Saves options to chrome.storage
function save_options() {
	
  var wtbpm_template = document.getElementById('wtbpm_template').value;
  var wtbpmwoprice_template = document.getElementById('wtbpmwoprice_template').value;
  
  var item_notes_enabled = document.getElementById('item_notes_enabled').checked;
  var seller_notes_enabled = document.getElementById('seller_notes_enabled').checked;
  
  chrome.storage.sync.set({
    wtbpm_template: wtbpm_template,
    wtbpmwoprice_template: wtbpmwoprice_template,
	item_notes_enabled: item_notes_enabled,
	seller_notes_enabled: seller_notes_enabled
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
	{'wtbpm_template':'@{ign} Hi, WTB your {item} for {price} in {league}. You can invite me to party whenever you are free. Thanks!',
  	 'wtbpmwoprice_template':'@{ign} Hi, WTB your {item} in {league}. You can invite me to party whenever you are free. Thanks!',
	 'item_notes_enabled':false,
	 'seller_notes_enabled':false}, 
  
  function(items) {

  document.getElementById('wtbpm_template').value = items.wtbpm_template;
  document.getElementById('wtbpmwoprice_template').value = items.wtbpmwoprice_template;
  
  document.getElementById('item_notes_enabled').checked = items.item_notes_enabled;
  document.getElementById('seller_notes_enabled').checked = items.seller_notes_enabled;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
