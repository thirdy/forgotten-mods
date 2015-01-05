javascript:(function(){
	// Path of Exile Forgotten Mods 0.1 - A simple bookmarklet that will augment poe.trade with more info.
	// Check out the forum thread - 
	var mod_map = {
	 "#+# to Armour":{affix:'p'},
	 "#+# to maximum Life":{affix:'p'},
	 "##% increased Flask Life Recovery rate":{affix:'p'},
	 "##% increased Flask Life Recovery rate@":{affix:'p'},
	 "#+# to maximum Energy Shield":{affix:'p'},
	 "##% increased Flask Mana Recovery rate":{affix:'p'},
	 "##% increased Elemental Damage with Weapons":{affix:'p'},
	 "##% increased Elemental Damage with Weapons@":{affix:'p'},
	 "#Reflects # Physical Damage to Melee Attackers":{affix:'p'},	 
	 
	 "#+# to Strength":{affix:'s'},
	 "#+#% to Cold Resistance":{affix:'s'},
	 "#+#% to Lightning Resistance":{affix:'s'},
	 "#+#% to Fire Resistance":{affix:'s'},
	 "#+#% to Fire Resistance@":{affix:'s'},
	 "##% increased Stun Duration on Enemies":{affix:'s'},
	 "##% reduced Enemy Stun Threshold":{affix:'s'},
	 "##% increased Stun Recovery":{affix:'s'}
	};

	explicit_mods = $('.mods').not('.withline').children(); 
	explicit_mods = $(explicit_mods).not('.pseudo');

	$.each(explicit_mods, function(){ 
	  
	  mod   = $(this).attr('data-name'); 
	  value = $(this).attr('data-value');
	  
	  // we skip implicit mod here
	  if(mod.startsWith('$')) return;
	  
	  affix = mod_map[mod];
	  if(affix) {
		  affix = affix.affix;
		  affix = affix == 'p' ? 'prefix' : 'suffix';
		  $(this).prepend("<i style='color:#FFFFFF'>" + affix + '</i>&nbsp&nbsp');
	  } else {
		  console.log(mod);
	  }
	});
	
})();
