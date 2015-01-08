

// Path of Exile Forgotten Mods 0.5 - A simple bookmarklet that will augment poe.trade with more info.
// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
// PM me in game: ManicCompression
// Code prettyfied by http://jsbeautifier.org/
// Data taken from http://www.pathofexile.com/forum/view-thread/54167/page/1
(function() {
  
  
  /* it's probably not worth using the spredsheet,,,, might be best to just build the database here. 1 object per item type*/
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

        /*for hybrid with stun 'Local Armor +% / Base Stun Recovery +%'*/

        "+# to maximum Energy Shield":{affix:'Base Max Energy Shield', affix2:'Local Energy Shield'},
        "#% increased maximum Energy Shield":{affix:'Max Energy Shield +%', affix2:'Local Energy Shield +%'},

        /*hybrid Local Energy Shield +% / Base Stun Recovery +%
        Local Armour And Evasion +% / Base Stun Recovery +%
        Local Evasion And Energy Shield +% / Base Stun Recovery +%
        */


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

        "#% increased Evasion Rating":{affix:null},
        "#% increased Flask Life Recovery rate":{affix:null},
        "#% increased Flask Mana Recovery rate":{affix:null},

        "#% increased Movement Speed":{affix:null},


        "#% reduced Movement Speed":{affix:null},

        "+# to Evasion Rating":{affix:null},
        "+# to Level of Socketed Aura Gems":{affix:null},
        "+# to Level of Socketed Bow Gems":{affix:null},
        "+# to Level of Socketed Cold Gems":{affix:null},
        "+# to Level of Socketed Curse Gems":{affix:null},
        "+# to Level of Socketed Elemental Gems":{affix:null},
        "+# to Level of Socketed Fire Gems":{affix:null},
        "+# to Level of Socketed Gems":{affix:null},
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
        "#% reduced Enemy Stun Threshold":{affix:'Base Stun Threshold Reduction +%'}

        /* TODO "#% reduced Flask Charges used":{affix:'s'},
        "#% increased Light Radius":{affix:'s'},
        "#% reduced Light Radius":{affix:'s'},
        "#% increased Stun Recovery":{affix:'s'},
        */

	}

    // The mods data is located in another js file, we import it first.
    //var mod_data_url = "https://76f193c373fb5126bd1b5ee4fc270e3c6a1833cb.googledrive.com/host/0B4u8zcQBGBwpRll0ZzJxZ09DUUU/forgotten-mods-mod-data.js";

    //$.getScript(mod_data_url, function() {

        //console.log("Script 'forgotten-mods-mod-data.js' sucessfully loaded. Url used is " + mod_data_url);

        //var mods_data = mod_map;

        /* Main code */
        /*
           Target all elements with class 'item', on poe.trade this is the <tbody> which represents one serach result item
        */
        var items = $('.item')

        $.each(items, function() {
          /* Parse Item Name */
            var name = $(this).find('.item-cell > h5 > a').text().trim();
          log(name);
          
          /* Parse image url */
          var image_url = $(this).find('.icon-td > div > img').attr('src');
          log(image_url);
          
          
          var type = parseType(image_url, name);
          log(type);
          
          
          /* Parse Item Requirements */
            var requirements_raw = $(this).find('.item-cell > .requirements').text();
            
            var requirement_raw;
          
          requirement_raw = /Level:\s(\d{1,2})/.exec(requirements_raw);
            var lvl_req = requirement_raw != null && requirement_raw.length == 2 ? requirement_raw[1] : null;
          
          requirement_raw = /Strength:\s(\d{1,2})/.exec(requirements_raw);
            var str_req = requirement_raw != null && requirement_raw.length == 2 ? requirement_raw[1] : null;
          
          requirement_raw = /Dexterity:\s(\d{1,2})/.exec(requirements_raw);
            var dex_req = requirement_raw != null && requirement_raw.length == 2 ? requirement_raw[1] : null;
            
          requirement_raw = /Intelligence:\s(\d{1,2})/.exec(requirements_raw);
            var int_req = requirement_raw != null && requirement_raw.length == 2 ? requirement_raw[1] : null;
            
         /* log('level req: ' + lvl_req);
          log('strength req: ' + str_req);
          log('dexterity req: ' + dex_req);
          log('intelligence req: ' + int_req);*/
          
          /* Parse Mods */
          var explicit_mods = $(this).find('.mods').not('.withline').children();
          explicit_mods = $(explicit_mods).not('.pseudo');
          
          $.each(explicit_mods, function(){
            
              mod = $(this).attr('data-name');
              value = $(this).attr('data-value');

              /* we skip implicit mod here */
              if (mod.lastIndexOf('$', 0) == 0) return;

              /* remove the '#' as the first character
              // For example, this mod from the search result:
              // <li style="" data-value="0" data-name="#Your Spells have Culling Strike" class="sortable ">Your Spells have Culling Strike</li>
              // Here we'll get "#Your Spells have Culling Strike" class="
              // We wanna remove the first character there.
              // I'm not sure why it has that while the mods listed in the explicit combobox (from the search form) doesn't have one.
              */
              if (mod.lastIndexOf('#', 0) == 0) mod = mod.substring(1);

              /* remove the '@' as the last character
              // this character is use to denote if the mod is a master-crafted mod
               */
              if (endsWith(mod, '@')) mod = mod.substring(0, mod.length - 1);
            
              var mod_element = this;

              /* poe.trade lists these mods like this:
              // #% increased Flask Life Recovery rate
              // #% increased Flask Life recovery rate
              // so we'll go case-insensitive
               */
              getAffix(type, mod, lvl_req, str_req != null, dex_req != null, int_req != null, function(affix){
                log(mod);
                log('affixed resolved to: ' + affix);
                if (affix != null) {
                    if (affix == 'p') {
                      $(mod_element).prepend("<b style='color:#4584d3'>" + '[prefix]' + '</b>&nbsp&nbsp');
                    }
                    if (affix == 's') {
                      $(mod_element).prepend("<b style='color:#b60f2e'>" + '[suffix]' + '</b>&nbsp&nbsp');
                    }
                }
              });
              
              
          });

            
        });

    //});
  
    function getAffix(type, mod, lvl_req, is_str_req, is_dex_req, is_int_req, affix_callback) {
      
      /*
       --- Spreadsheet columns ----
      Categories:A
      Description:B
      Value:C
      Min V:D
      Max V:E
      Name :F
      Level:G
      Prefix/Suffix:H
      Rings:I
      Amulets:J
      Belts:K
      Helmets:L
      Gloves:M
      Boots:N
      Chests:O
      Shields:P
      Quivers:Q
      Wands:R
      Daggers:S
      Claws:T
      Sceptres:U
      Staffs:V
      Bows:W
      1h Swords and Axes:X
      2h Swords and Axes:Y
      1h Maces:Z
      2h Maces:AA      
      */
      
      var column_map = {
        "BodyArmours":{column:'O'},
        "Boots":{column:'N'},
        "Helmets":{column:'L'},
        "Gloves":{column:'M'},
        "Belts":{column:'K'},
        "Rings":{column:'I'},
        "Amulets":{column:'J'},
        "Quivers":{column:'Q'},
        "Bows":{column:'W'},
        "Wands":{column:'R'},
        "Scepters":{column:'U'},
        "Shields":{column:'P'},
        "Daggers":{column:'S'},
        "OneHandMaces":{column:'Z'},
        "TwoHandMaces":{column:'AA'},
        "OneHandSwords":{column:'X'},
        "TwoHandSwords":{column:'Y'},
        "OneHandAxes":{column:'X'},
        "TwoHandAxes":{column:'Y'},
        "Staves":{column:'V'},
        "Claws":{column:'T'}
       }
      
      
      
        var param_mod;
      var param_type;
      
      param_type = column_map[type] != null ? column_map[type].column : null;
      
		
       // prop = (prop + "").toLowerCase();
       // for (var p in mods_data) {
      //      if (mod_map.hasOwnProperty(p) && prop == (p + "").toLowerCase()) {
      //          return mods_data[p];
      //      }
       // }
		//if(mod == '+# to maximum Life')  param_mod = 'Base Max Life'
      param_mod = mod_map[mod];
      if(param_mod != null) param_mod = param_mod.affix;
       else return null;
		
    
    //log(param_mod);
     // log(param_type);
      
      var query_callback = function(data){
                data = parse(data); // Call data parser helper function
                console.log(data);
                affix_callback('p');
      }
      
      
    
    // TODO: The spreadsheet should have the tier values, so we request less data
    
		//query('select * where B = "Base Max Life" and O = "Yes"', callback);
		if(param_mod != null && param_type != null)
      sql = 'select * where B = "' + param_mod + '" and ' + param_type + ' = "Yes"';
      log(sql);
      query(sql, query_callback);
    }
  
  function parseType(img_url, name) {
    var matched = /BodyArmours|Boots|Helmets|Gloves|Belts|Rings|Amulets|Quivers|Bows|Wands|Scepters|Shields|Daggers|OneHandMaces|TwoHandMaces|OneHandSwords|TwoHandSwords|OneHandAxes|TwoHandAxes|Staves|Claws/.exec(img_url);
    if(matched != null && matched.length == 1)
      return matched[0];
    
    matched = /Flask/.exec(name);
      if(matched != null && matched.length == 1)
      return matched[0];
    // disabled, well get a lot of alerts on uniques
    //else
    //  alert("Cannot determine item type based on img_url: " + img_url + ". Please post this bug on: www.pathofexile.com/forum/view-thread/1164052");
    return null;
  }

    // Utility functions
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function startWith(str, prefix) {
        return str.lastIndexOf(prefix, 0) == 0;
    }
  
  function log(str){
    console.log(str);
  }
  
  /* Code below mostly taken from https://coderwall.com/p/pluhsg/google-spreadsheet-json-api-sql-filtering */

 function parse(data)
{
    var column_length = data.table.cols.length;
    if (!column_length || !data.table.rows.length)
    {
        return false;
    }
    var columns = [],
        result = [],
        row_length,
        value;
    for (var column_idx in data.table.cols)
    {
        columns.push(data.table.cols[column_idx].label);
    }
    for (var rows_idx in data.table.rows)
    {
        row_length = data.table.rows[rows_idx]['c'].length;
        if (column_length != row_length)
        {
            // Houston, we have a problem!
            return false;
        }
        for (var row_idx in data.table.rows[rows_idx]['c'])
        {
            if (!result[rows_idx])
            {
                result[rows_idx] = {};
            }
            value = !!data.table.rows[rows_idx]['c'][row_idx].v ? data.table.rows[rows_idx]['c'][row_idx].v : null;
            result[rows_idx][columns[row_idx]] = value;
        }
    }
    return result;
};

function query(sql, callback)
{
    var url = 'http://spreadsheets.google.com/a/google.com/tq?',
        params = {
            key: '1FdbgVS3fRTufLJvnKTVGbKEL4gS-asJRVfiRU-TnWDs',
            tq: encodeURIComponent(sql),
            tqx: 'responseHandler:callback=?'
        },
        qs = [];
    for (var key in params)
    {
        qs.push(key + '=' + params[key]);
    }
    url += qs.join('&');
    
	/* http://stackoverflow.com/questions/7167488/use-of-success-jsonpcallback-with-ajax-request
	 i'm not so sure what's exactly the rules here but 'callback=?' is picked up by JQuery and it will handle the callback to the success event.*/
	 $.ajax({
                    url: url,
                    dataType: 'jsonp',
                    success: callback
                });
}


})();
