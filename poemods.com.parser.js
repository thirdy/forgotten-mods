var type = $('div#show-query span').text();
log(type + ":{");

var subtype = null;
var affix = null;
var ctr = 0;
$('div#mod-results tr').each(function(){
  ctr++;
  //if(ctr > 10) return null;
  //log($(this).text());
  var bNode = $(this).find('td > b');
  var str = bNode.text();
  
  if(str != "") {
    
    var tdClass = $(this).find('td').attr('class');
    
    if(tdClass == 'level1') {
      subtype = str;
    } else {
      affix = str;
    }
    
    //log(subtype + ' - ' + affix);
  } else {
      if(affix == null || subtype == null)
         return;
    
      var mod = $(this).find('td:first-child').text();
      if(mod == "") return;
    
      affix_compact = affix == 'Prefix' ? 'p' : 's';
      
    
    log('"' + translatePoeModsToXyzMod(mod) + '":{poemods:"' + mod + '", subtype:"' + subtype + '", affix:"' + affix_compact + '", tiers:[');
    
          var tierLIs = $(this).find('li');
          var totalTier = tierLIs.length;
          var tierCtr = 0;
          
          $(tierLIs).each(function(){
            var ilvl = $(this).find('b:first-child').text().replace('iLvl: ', '').trim();

            // http://stackoverflow.com/questions/3442394/jquery-using-text-to-retrieve-only-text-not-nested-in-child-tags
            var tier_value = $(this)
            .clone()    //clone the element
            .children() //select all the children
            .remove()   //remove all the children
            .end()  //again go back to selected element
            .text();
            tier_value = tier_value.replace(')','').replace('(','').replace('-','').trim();

            affix_magic_name = $(this).find('b:nth-child(2)').text().replace(')','').replace('(','').trim();

            log("{tier:" + (totalTier - tierCtr) + ", ilvl:" + ilvl + ', tier_value:"' + tier_value + '", affix_magic_name:"' + affix_magic_name + '"},');
            tierCtr++;    

          });
        log(']},');
  }
  
});

log("}");

function log(str) {console.log(str);}

function directText(node) {
 $(node)
    .clone()    //clone the element
    .children() //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();
}

function translatePoeModsToXyzMod(poemods_mod) {

        var mod_map = {
                /* Mods are sorted in the same order as the mods compendium */
                /* PREFIXES */
                "Adds #-# Cold Damage":{affix:'Base Min Added Cold Dmg / Base Max Added Cold Dmg', affix2:'Local Min Added Cold Dmg / Local Max Added Cold Dmg'},
                "Adds #-# Fire Damage":{affix:'Base Min Added Fire Dmg / Base Max Added Fire Dmg', affix2:'Local Min Added Fire Dmg / Local Max Added Fire Dmg'},
                "Adds #-# Lightning Damage":{affix:'Base Min Added Lightning Dmg / Base Max Added Lightning Dmg',affix2:'Local Min Added Lightning Dmg / Local Max Added Lightning Dmg'},
                "Adds #-# Physical Damage":{affix:'Base Min Added Physical Dmg / Base Max Added Physical Dmg'},
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

                
                "+# to Level of Socketed Aura Gems":{affix:null},
                "+# to Level of Socketed Bow Gems":{affix:'Local Socketed Bow Gem Level +'},
                "+# to Level of Socketed Cold Gems":{affix:null},
                "+# to Level of Socketed Curse Gems":{affix:null},
                "+# to Level of Socketed Elemental Gems":{affix:null},
                "+# to Level of Socketed Fire Gems":{affix:null},
                "+# to Level of Socketed Gems":{affix:'Local Socketed Gem Level +'},
                "+# to Level of Socketed Lightning Gems":{affix:null},
                "+# to Level of Socketed Melee Gems":{affix:null},
                "+# to Level of Socketed Minion Gems":{affix:null},
                "+# to Level of Socketed Movement Gems":{affix:null},
                "+# to Level of Socketed Spell Gems":{affix:null},
                "+# to Level of Socketed Strength Gems":{affix:null},
                "+# to Level of Socketed Support Gems":{affix:null},
                "+# to Level of Socketed Vaal Gems":{affix:null},
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
        
        for (mod in mod_map){
          
           xyz_mod = mod_map[mod];
           if(xyz_mod.affix != null && xyz_mod.affix == poemods_mod)
             return mod;
           else if(xyz_mod.affix2 != null && xyz_mod.affix2 == poemods_mod)
             return mod;
           
        
        }
}

null
