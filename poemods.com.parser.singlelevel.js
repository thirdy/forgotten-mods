/* The weapon page is dodgy, so the code here is too, a lot workarounds
   http://poemods.com/index.php?item_type=dagger
*/

var data_raw = "";

var type = $('div#show-query span').text();
writeToDataRaw(type + ":{");

var affix = null;
var affix_compact = null;
var mod = null;

var tierCtr = 0;
var totalTier = -1;



$('div#mod-results tr').each(function(){
  
  var trClass = $(this).attr('class'); 
  
  if(trClass == 'normal' || $(this).text().trim() == 'Suffix'){
    
    if(affix != null) {
        writeToDataRaw(']},'); /* closing for tier */
    }
    
    affix = $(this).text().trim();
    mod = null;
    tierCtr = 0;
  } else if(trClass == 'accordion'){
    
    if(mod != null) {
       writeToDataRaw("]},");
       tierCtr = 0;
    }
   
    mod = $(this).find('td:first-child').text().trim();
    
    affix_compact = affix == 'Prefix' ? 'p' : 's';
    var xyz_mod = translatePoeModsToXyzMod(mod);
    
    writeToDataRaw('"' + xyz_mod + '":{poemods:"' + mod
        + '", subtype:null, affix:"' + affix_compact + '", tiers:[');
    
  } else if(trClass == 'inner-row'){
            if($(this).text().trim() == "") return; /* There are cases where we have an empty TR, see http://poemods.com/index.php?item_type=dagger */
            
            var ilvl = $(this).find('b:first-child').text().replace('iLvl: ', '').trim();
        
            // http://stackoverflow.com/questions/3442394/jquery-using-text-to-retrieve-only-text-not-nested-in-child-tags
            var tier_value = $(this).find('td:first-child')
            .clone()    //clone the element
            .children() //select all the children
            .remove()   //remove all the children
            .end()  //again go back to selected element
            .text();
            
            tier_value = tier_value.replace(')','').replace('(','').replace('-','').replace(':','').trim();
            
            affix_magic_name = $(this).find('b:nth-child(2)').text().replace(')','').replace('(','').trim();

            writeToDataRaw("{tier:" + Math.abs(totalTier - tierCtr) + ", ilvl:" + ilvl + ', tier_value:"' + tier_value + '", affix_magic_name:"' + affix_magic_name + '"},');
            tierCtr++;    

  }
  
});

writeToDataRaw(']},'); /* closing for last tier */
writeToDataRaw("}");

eval("var mod_map = {" + data_raw + "}");

/* re-roll the tier value and we wanna print it in a compact format */
for (final_mod_map_key in mod_map) break;
var final_mod_map = mod_map[final_mod_map_key];

log(final_mod_map_key + ":{");

for (mod_key in final_mod_map) {
  
  log('"' + mod_key + '":{poemods:"' + final_mod_map[mod_key].poemods
        + '", subtype:null, affix:"' + final_mod_map[mod_key].affix + '", tiers:[');
  
  var tier_array = final_mod_map[mod_key].tiers;
  for(i = 0; i < tier_array.length; i++) {
    tier_array[i].tier = tier_array.length - i;
    var str = tier_array[i].toSource();
    log(str.substring(1, str.length - 1) + ',');
  }
  
  
  
  log("]},");
}

log("},");

//log(mod_map.toSource());
//log(data_raw);

function writeToDataRaw(str) {
  data_raw += str;
}

function log(str) {
  console.log(str);
  data_raw += str;
}

function directText(node) {
 $(node)
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();
}

function translatePoeModsToXyzMod(param_mod) {

        var mod_map = {
                /* Mods are sorted in the same order as the mods compendium */
                /* PREFIXES */
                "Adds #-# Cold Damage":{affix:'Base Min Added Cold Dmg / Base Max Added Cold Dmg', affix2:'Local Min Added Cold Dmg / Local Max Added Cold Dmg'},
                "Adds #-# Fire Damage":{affix:'Base Min Added Fire Dmg / Base Max Added Fire Dmg', affix2:'Local Min Added Fire Dmg / Local Max Added Fire Dmg'},
                "Adds #-# Lightning Damage":{affix:'Base Min Added Lightning Dmg / Base Max Added Lightning Dmg',affix2:'Local Min Added Lightning Dmg / Local Max Added Lightning Dmg'},
                "Adds #-# Physical Damage":{affix:'Base Min Added Physical Dmg / Base Max Added Physical Dmg', affix2:'Local Min Added Physical Dmg / Local Max Added Physical Dmg'},
                "Reflects # Physical Damage to Melee Attackers":{affix:'Physical Dmg To Return To Melee Attacker'},
                "#% increased Physical Damage":{affix:'Local Physical Dmg +%'},
                /* for hybrid phys/accuracy -- 'Local Physical Dmg +% / Local Accuracy Rating' */

                /**/

                /*This mod is for amulets, for STR based (Helmets	Gloves	Boots	Chests	Shields)
                */
                "#% increased Armour":{affix:'Local Armor +%', affix2:'Armor Rating +%'},
                "+# to Armour":{affix:'Armor Rating', affix2:'Local Armor Rating'},
                "+# to Evasion Rating":{affix:'Local Evasion Rating'},
                "#% increased Evasion Rating":{affix:'Local Evasion Rating +%'},

                /*for hybrid with stun 'Local Armor +% / Base Stun Recovery +%'*/

                "+# to maximum Energy Shield":{affix:'Base Max Energy Shield', affix2:'Local Energy Shield'},
                "#% increased maximum Energy Shield":{affix:'Max Energy Shield +%', affix2:'Local Energy Shield +%'},
          
                "#% increased Armour and Evasion":{affix:'Local Armour And Evasion +%'},
                "#% increased Evasion and Energy Shield":{affix:'Local Armour And Energy Shield +%'},
                

                /*hybrid Local Energy Shield +% / Base Stun Recovery +%
                
                
                */
          
                "#% increased Rarity of Items found":{affix:'Base Item Found Rarity +%'},


                "+# to maximum Life":{affix:'Base Max Life'},
                "+# to maximum Mana":{affix:'Base Max Mana'},
                "#% of Physical Attack Damage Leeched as Life":{affix:'Life Leech From Physical Dmg %'},
                "#% of Physical Attack Damage Leeched as Mana":{affix:'Mana Leech From Physical Dmg %'},
                "#% increased Spell Damage":{affix:'Spell Dmg +%'},

                /*hybrid Spell Dmg +% / Base Max Mana*/

                "#% increased Elemental Damage with Weapons":{affix:'Weapon Elemental Dmg +%'},

                "#% increased Armour and Energy Shield":{affix:null},
                "#% increased Armour and Evasion":{affix:null},
                "#% increased Armour, Evasion and Energy Shield":{affix:null},

                
                "#% increased Flask Life Recovery rate":{affix:null},
                "#% increased Flask Mana Recovery rate":{affix:null},

                "#% increased Movement Speed":{affix:'Base Movement Velocity +%'},


                "#% reduced Movement Speed":{affix:null},

          
                "+# to Level of Socketed Minion Gems":{affix:'Local Socketed Minion Gem Level +'},
                "+# to Level of Socketed Bow Gems":{affix:'Local Socketed Bow Gem Level +'},
                "+# to Level of Socketed Gems":{affix:'Local Socketed Gem Level +'},
          
                "+# to Level of Socketed Cold Gems":{affix:'Local Socketed Cold Gem Level +'},
                "+# to Level of Socketed Fire Gems":{affix:'Local Socketed Fire Gem Level +'},
                "+# to Level of Socketed Lightning Gems":{affix:'Local Socketed Lightning Gem Level +'},
          
                 /* melee gems is not yet in poemods.com for shields */
                "+# to Level of Socketed Melee Gems":{affix:'Local Socketed Melee Gem Level +'},
                
                "+# to Level of Socketed Spell Gems":{affix:null},
                "+# to Level of Socketed Strength Gems":{affix:null},
                "+# to Level of Socketed Support Gems":{affix:null},
                
                "+# to Level of Support Gems in this item":{affix:null},

                "Adds #-# Chaos Damage":{affix:null},



                /* SUFFIXES */
                "#% increased Projectile Speed":{affix:'Projectile speed +%'},
                "+# to Accuracy Rating":{affix:'Accuracy Rating', affix2:'Local Accuracy Rating'},
                /*hybrid Light Radius / +Accuracy Rating*/
                "#% increased Attack Speed":{affix:'Attack Speed +%', affix2:'Local Attack Speed +%'},
                "+# to all Attributes":{affix:'Additional All Attributes'},

                "+# to Dexterity":{affix:'Additional Dexterity'},
                "+# to Intelligence":{affix:'Additional Intelligence'},
                "+# to Strength":{affix:'Additional Strength'},
                "#% increased Cast Speed":{affix:'Base Cast Speed +%'},
                "#% increased Global Critical Strike Multiplier":{affix:'Base Critical Strike Multiplier +%', affix2:'Weapon-only Critical Strike Multiplier +%'},

                "#% increased Global Critical Strike Chance":{affix:'Critical Strike Chance +%'},
                "#% increased Critical Strike Chance":{affix:'Local Critical Strike Chance +%'},
                "#% increased Critical Strike Chance for Spells":{affix:'Spell Critical Strike Chance +%'},
                "#% increased Cold Damage":{affix:'Cold Dmg +%'},

                "#% increased Fire Damage":{affix:'Fire Dmg +%'},
                "#% increased Lightning Damage":{affix:'Lightning Dmg +%'},
                /*
                */

                "#% increased Flask Charges gained":{affix:'Charges Gained +%'},
                "#% increased Flask effect duration":{affix:'Flask Duration +%'},

                "#% increased Quantity of Items found":{affix:'Base Item Found Quantity +%'},

                "+# Life gained for each Ignited Enemy hit by your Attacks":{affix:'Life Gain Per Target'},


                "+# Life gained on Kill":{affix:'Life Gained On Enemy Death'},

                "# Life Regenerated per second":{affix:'Base Life Regeneration Rate Per Second'},
                "# Mana Regenerated per second":{affix:'Mana Regeneration Rate +%'},

                "+# Mana Gained on Kill":{affix:'Mana Gained On Enemy Death'},


                "+#% to Chaos Resistance":{affix:'Base Chaos Dmg Resistance %'},
                "+#% to Cold Resistance":{affix:'Base Cold Dmg Resistance %'},
                "+#% to Fire Resistance":{affix:'Base Fire Dmg Resistance %'},
                "+#% to Lightning Resistance":{affix:'Base Lightning Dmg Resistance %'},
                "+#% to all Elemental Resistances":{affix:'Base Resist All Elements %'},


                "#% reduced Attribute Requirements":{affix:'Local Attribute Requirements -%'},
                /*"+#% to maximum Block Chance":{affix:'Local Additional Block Chance %'},*/
                "#% additional Block Chance":{affix:'Local Additional Block Chance %'},
                "#% increased Stun Duration on Enemies":{affix:'Base Stun Duration +%'},
                "#% increased Stun Recovery":{affix:'Base Stun Recovery +%'},
                "#% reduced Enemy Stun Threshold":{affix:'Base Stun Threshold Reduction +%'}
          

                /* TODO "#% reduced Flask Charges used":{affix:'s'},
                "#% increased Light Radius":{affix:'s'},
                "#% reduced Light Radius":{affix:'s'},
                
                */
                
        }
        
        for (key in mod_map){
          
           xyz_mod = mod_map[key];
           if(xyz_mod.affix != null && xyz_mod.affix == param_mod)
             return key;
           else if(xyz_mod.affix2 != null && xyz_mod.affix2 == param_mod)
             return key;
           
        
        }
}

null
