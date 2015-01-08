(function(){
	// Path of Exile Forgotten Mods 0.4 - A simple bookmarklet that will augment poe.trade with more info.
	// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
	// PM me in game: ManicCompression
	
	// List of mods taken from the Serach Form > Explicit Combobox
	// see https://github.com/thirdy/forgotten-mods/blob/master/mods_lister.js which I used to generate these values.
	var mod_map = {
"# Life Regenerated per second":{affix:'s'},
"# Mana Regenerated per second":{affix:'s'},
"#% additional Block Chance":{affix:'s'},
"#% increased Armour":{affix:'p'},
"#% increased Armour and Energy Shield":{affix:'p'},
"#% increased Armour and Evasion":{affix:'p'},
"#% increased Armour, Evasion and Energy Shield":{affix:'p'},
"#% increased Attack Speed":{affix:'s'},
"#% increased Cast Speed":{affix:'s'},
"#% increased Cold Damage":{affix:'s'},
"#% increased Critical Strike Chance for Spells":{affix:'s'},
"#% increased Elemental Damage with Weapons":{affix:'p'},
"#% increased Evasion Rating":{affix:'p'},
"#% increased Fire Damage":{affix:'s'},
"#% increased Flask Charges gained":{affix:'s'},
"#% increased Flask effect duration":{affix:'s'},
"#% increased Flask Life Recovery rate":{affix:'p'},
"#% increased Flask Mana Recovery rate":{affix:'p'},
"#% increased Global Critical Strike Chance":{affix:'s'},
"#% increased Global Critical Strike Multiplier":{affix:'s'},
"#% increased Light Radius":{affix:'s'},
"#% increased Lightning Damage":{affix:'s'},
"#% increased Mana Regeneration Rate":{affix:'s'},
"#% increased maximum Energy Shield":{affix:'p'},
"#% increased Movement Speed":{affix:'p'},
"#% increased Physical Damage":{affix:'p'},
"#% increased Projectile Speed":{affix:'s'},
"#% increased Quantity of Items found":{affix:'s'},
"#% increased Spell Damage":{affix:'s'},
"#% increased Stun Duration on enemies":{affix:'s'},
"#% increased Stun Duration on Enemies":{affix:'s'},
"#% increased Stun Recovery":{affix:'s'},
"#% of Physical Attack Damage Leeched as Life":{affix:'p'},
"#% reduced Attribute Requirements":{affix:'s'},
"#% reduced Enemy Stun Threshold":{affix:'s'},
"#% reduced Flask Charges used":{affix:'s'},
"#% reduced Light Radius":{affix:'s'},
"#% reduced Movement Speed":{affix:'p'},
"+# Life gained for each Ignited Enemy hit by your Attacks":{affix:'s'},
"+# Life gained on Kill":{affix:'s'},
"+# Mana Gained on Kill":{affix:'s'},
"+# to Accuracy Rating":{affix:'s'},
"+# to all Attributes":{affix:'s'},
"+# to Armour":{affix:'p'},
"+# to Dexterity":{affix:'s'},
"+# to Evasion Rating":{affix:'p'},
"+# to Intelligence":{affix:'s'},
"+# to Level of Socketed Aura Gems":{affix:'p'},
"+# to Level of Socketed Bow Gems":{affix:'p'},
"+# to Level of Socketed Cold Gems":{affix:'p'},
"+# to Level of Socketed Curse Gems":{affix:'p'},
"+# to Level of Socketed Elemental Gems":{affix:'p'},
"+# to Level of Socketed Fire Gems":{affix:'p'},
"+# to Level of Socketed Gems":{affix:'p'},
"+# to Level of Socketed Lightning Gems":{affix:'p'},
"+# to Level of Socketed Melee Gems":{affix:'p'},
"+# to Level of Socketed Minion Gems":{affix:'p'},
"+# to Level of Socketed Movement Gems":{affix:'p'},
"+# to Level of Socketed Spell Gems":{affix:'p'},
"+# to Level of Socketed Strength Gems":{affix:'p'},
"+# to Level of Socketed Support Gems":{affix:'p'},
"+# to Level of Socketed Vaal Gems":{affix:'p'},
"+# to Level of Support Gems in this item":{affix:'p'},
"+# to maximum Energy Shield":{affix:'p'},
"+# to maximum Life":{affix:'p'},
"+# to maximum Mana":{affix:'p'},
"+# to Strength":{affix:'s'},
"+#% Monster Cold Resistance":{affix:'s'},
"+#% Monster Fire Resistance":{affix:'s'},
"+#% Monster Lightning Resistance":{affix:'s'},
"+#% to all Elemental Resistances":{affix:'s'},
"+#% to Chaos Resistance":{affix:'s'},
"+#% to Cold Resistance":{affix:'s'},
"+#% to Fire and Cold Resistances":{affix:'s'},
"+#% to Fire and Lightning Resistances@":{affix:'s'},
"+#% to Fire Resistance":{affix:'s'},
"+#% to Lightning Resistance":{affix:'s'},
"+#% to maximum Block Chance":{affix:'s'},
"Adds #-# Chaos Damage":{affix:'p'},
"Adds #-# Cold Damage":{affix:'p'},
"Adds #-# Fire Damage":{affix:'p'},
"Adds #-# Lightning Damage":{affix:'p'},
"Adds #-# Physical Damage":{affix:'p'},
"Reflects # Physical Damage to Melee Attackers":{affix:'p'}
	};
  
 	// Utility functions
	function endsWith(str, suffix) {
             return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
        
	  function startWith(str, prefix) {
	             return str.lastIndexOf(prefix, 0) == 0;
	        }
	  
	  function getModObjCaseInsensitive(prop, mod_map) {
	    prop = (prop + "").toLowerCase();
	    for(var p in mod_map){
	    if(mod_map.hasOwnProperty(p) && prop == (p + "").toLowerCase()){
	           return mod_map[p];
	      }
	    }
	    return null;
	  }

	// Main code
	explicit_mods = $('.mods').not('.withline').children(); 
	explicit_mods = $(explicit_mods).not('.pseudo');

	$.each(explicit_mods, function(){ 
	  
	  mod   = $(this).attr('data-name'); 
	  value = $(this).attr('data-value');
	  
	  // we skip implicit mod here
	  if(mod.lastIndexOf('$', 0) == 0) return;
	  
	  // remove the '#' as the first character
	  // For example, this mod from the search result:
	  // <li style="" data-value="0" data-name="#Your Spells have Culling Strike" class="sortable ">Your Spells have Culling Strike</li>
	  // Here we'll get "#Your Spells have Culling Strike" class="
	  // We wanna remove the first character there.
	  // I'm not sure why it has that while the mods listed in the explicit combobox (from the search form) doesn't have one.
	  if(mod.lastIndexOf('#', 0) == 0) mod = mod.substring(1);
	  
	  // remove the '@' as the last character
	  // this character is use to denote if the mod is a master-crafted mod
	  if(endsWith(mod, '@')) mod = mod.substring(0, mod.length - 1);
	  
	  //affix = mod_map[mod];
    	  affix = getModObjCaseInsensitive(mod, mod_map);
	  if(affix) {
		  affix = affix.affix;
		  if(affix == 'p') {
		     $(this).prepend("<b style='color:#4584d3'>" + '[prefix]' + '</b>&nbsp&nbsp');	
		  }
		  if(affix == 's') {
		     $(this).prepend("<b style='color:#b60f2e'>" + '[suffix]' + '</b>&nbsp&nbsp');	
		  }
	   }
	 });
  
	
})();
