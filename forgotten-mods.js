
// Path of Exile Forgotten Mods 0.5 - A simple bookmarklet that will augment poe.trade with more info.
// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
// PM me in game: ManicCompression
// Code prettyfied by http://jsbeautifier.org/
(function() {

    // The mods data is located in another js file, we import it first.
    //var mod_data_url = "https://76f193c373fb5126bd1b5ee4fc270e3c6a1833cb.googledrive.com/host/0B4u8zcQBGBwpRll0ZzJxZ09DUUU/forgotten-mods-mod-data.js";
  
  
  var mods_data = {
    'gloves':{
        "Adds #-# Cold Damage":{poemods:"Base Min Added Cold Dmg / Base Max Added Cold Dmg", subtype:"Armor", affix:"p", tiers:[
        {tier:5, ilvl:2, tier_value:"1 / 2", affix_magic_name:"Frosted"},
        {tier:4, ilvl:13, tier_value:"3 to 4 / 7 to 8", affix_magic_name:"Chilled"},
        {tier:3, ilvl:21, tier_value:"5 to 7 / 10 to 12", affix_magic_name:"Icy"},
        {tier:2, ilvl:29, tier_value:"6 to 9 / 13 to 16", affix_magic_name:"Frigid"},
        {tier:1, ilvl:37, tier_value:"8 to 11 / 16 to 19", affix_magic_name:"Freezing"},
        ]},
        "Adds #-# Fire Damage":{poemods:"Base Min Added Fire Dmg / Base Max Added Fire Dmg", subtype:"Armor", affix:"p", tiers:[
        {tier:5, ilvl:1, tier_value:"1 / 2", affix_magic_name:"Heated"},
        {tier:4, ilvl:12, tier_value:"3 to 5 / 7 to 8", affix_magic_name:"Smoldering"},
        {tier:3, ilvl:20, tier_value:"5 to 7 / 11 to 13", affix_magic_name:"Smoking"},
        {tier:2, ilvl:28, tier_value:"7 to 10 / 15 to 18", affix_magic_name:"Burning"},
        {tier:1, ilvl:36, tier_value:"9 to 12 / 19 to 22", affix_magic_name:"Flaming"},
        ]},
        "Adds #-# Lightning Damage":{poemods:"Base Min Added Lightning Dmg / Base Max Added Lightning Dmg", subtype:"Armor", affix:"p", tiers:[
        {tier:5, ilvl:3, tier_value:"1 / 5", affix_magic_name:"Humming"},
        {tier:4, ilvl:13, tier_value:"1 / 14 to 15", affix_magic_name:"Buzzing"},
        {tier:3, ilvl:22, tier_value:"1 to 2 / 22 to 23", affix_magic_name:"Snapping"},
        {tier:2, ilvl:30, tier_value:"1 to 2 / 27 to 28", affix_magic_name:"Crackling"},
        {tier:1, ilvl:38, tier_value:"1 to 3 / 33 to 34", affix_magic_name:"Sparking"},
        ]},
        "Adds #-# Physical Damage":{poemods:"Base Min Added Physical Dmg / Base Max Added Physical Dmg", subtype:"Armor", affix:"p", tiers:[
        {tier:5, ilvl:5, tier_value:"1 / 2", affix_magic_name:"Glinting"},
        {tier:4, ilvl:13, tier_value:"2 to 3 / 4 to 5", affix_magic_name:"Burnished"},
        {tier:3, ilvl:19, tier_value:"3 to 4 / 6 to 7", affix_magic_name:"Polished"},
        {tier:2, ilvl:28, tier_value:"4 to 6 / 9 to 10", affix_magic_name:"Honed"},
        {tier:1, ilvl:35, tier_value:"5 to 7 / 11 to 12", affix_magic_name:"Gleaming"},
        ]},
        "+# to Armour":{poemods:"Local Armor Rating", subtype:"Armor", affix:"p", tiers:[
        {tier:3, ilvl:1, tier_value:"3 to 10", affix_magic_name:"Lacquered"},
        {tier:2, ilvl:18, tier_value:"11 to 35", affix_magic_name:"Studded"},
        {tier:1, ilvl:30, tier_value:"36 to 60", affix_magic_name:"Ribbed"},
        ]},
        "#% increased Armour":{poemods:"Local Armor +%", subtype:"Armor", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"11 to 28", affix_magic_name:"Reinforced"},
        {tier:5, ilvl:17, tier_value:"29 to 46", affix_magic_name:"Layered"},
        {tier:4, ilvl:29, tier_value:"47 to 64", affix_magic_name:"Lobstered"},
        {tier:3, ilvl:42, tier_value:"65 to 82", affix_magic_name:"Buttressed"},
        {tier:2, ilvl:60, tier_value:"83 to 100", affix_magic_name:"Thickened"},
        {tier:1, ilvl:72, tier_value:"101 to 120", affix_magic_name:"Girded"},
        ]},
        "undefined":{poemods:"Local Armor +% / Base Stun Recovery +%", subtype:"Armor", affix:"p", tiers:[
        {tier:6, ilvl:1, tier_value:"6 to 14 / 6 to 7", affix_magic_name:"Beetle's"},
        {tier:5, ilvl:17, tier_value:"15 to 23 / 8 to 9", affix_magic_name:"Crab's"},
        {tier:4, ilvl:29, tier_value:"24 to 32 / 10 to 11", affix_magic_name:"Armadillo's"},
        {tier:3, ilvl:42, tier_value:"33 to 41 / 12 to 13", affix_magic_name:"Rhino's"},
        {tier:2, ilvl:60, tier_value:"42 to 50 / 14 to 15", affix_magic_name:"Elephant's"},
        {tier:1, ilvl:78, tier_value:"51 to 56 / 16 to 17", affix_magic_name:"Mammoth's"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Armor", affix:"p", tiers:[
        {tier:2, ilvl:20, tier_value:"8 to 12", affix_magic_name:"Magpie's"},
        {tier:1, ilvl:39, tier_value:"13 to 18", affix_magic_name:"Pirate's"},
        ]},
        "+# to maximum Life":{poemods:"Base Max Life", subtype:"Armor", affix:"p", tiers:[
        {tier:8, ilvl:1, tier_value:"10 to 19", affix_magic_name:"Healthy"},
        {tier:7, ilvl:11, tier_value:"20 to 29", affix_magic_name:"Sanguine"},
        {tier:6, ilvl:18, tier_value:"30 to 39", affix_magic_name:"Stalwart"},
        {tier:5, ilvl:24, tier_value:"40 to 49", affix_magic_name:"Stout"},
        {tier:4, ilvl:30, tier_value:"50 to 59", affix_magic_name:"Robust"},
        {tier:3, ilvl:36, tier_value:"60 to 69", affix_magic_name:"Rotund"},
        {tier:2, ilvl:44, tier_value:"70 to 79", affix_magic_name:"Virile"},
        {tier:1, ilvl:54, tier_value:"80 to 89", affix_magic_name:"Athlete's"},
        ]},
        "#% of Physical Attack Damage Leeched as Life":{poemods:"Life Leech From Physical Dmg %", subtype:"Armor", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Remora's"},
        ]},
        "#% of Physical Attack Damage Leeched as Mana":{poemods:"Mana Leech From Physical Dmg %", subtype:"Armor", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Thirsty"},
        ]},
        "+# to Accuracy Rating":{poemods:"Accuracy Rating", subtype:"Armor", affix:"s", tiers:[
        {tier:9, ilvl:1, tier_value:"5 to 15", affix_magic_name:"of Calm"},
        {tier:8, ilvl:12, tier_value:"16 to 60", affix_magic_name:"of Steadiness"},
        {tier:7, ilvl:20, tier_value:"61 to 100", affix_magic_name:"of Accuracy"},
        {tier:6, ilvl:26, tier_value:"101 to 130", affix_magic_name:"of Precision"},
        {tier:5, ilvl:33, tier_value:"131 to 165", affix_magic_name:"of the Sniper"},
        {tier:4, ilvl:41, tier_value:"166 to 200", affix_magic_name:"of the Marksman"},
        {tier:3, ilvl:50, tier_value:"201 to 250", affix_magic_name:"of the Deadeye"},
        {tier:2, ilvl:63, tier_value:"251 to 320", affix_magic_name:"of the Ranger"},
        {tier:1, ilvl:76, tier_value:"321 to 400", affix_magic_name:"of the Assassin"},
        ]},
        "#% increased Attack Speed":{poemods:"Attack Speed +%", subtype:"Armor", affix:"s", tiers:[
        {tier:4, ilvl:1, tier_value:"5 to 7", affix_magic_name:"of Skill"},
        {tier:3, ilvl:11, tier_value:"8 to 10", affix_magic_name:"of Ease"},
        {tier:2, ilvl:22, tier_value:"11 to 13", affix_magic_name:"of Mastery"},
        {tier:1, ilvl:76, tier_value:"14 to 16", affix_magic_name:"of Grandmastery"},
        ]},
        "+# to Dexterity":{poemods:"Additional Dexterity", subtype:"Armor", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Mongoose"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Lynx"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Fox"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Falcon"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Panther"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Leopard"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Jaguar"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Phantasm"},
        ]},
        "+# to Strength":{poemods:"Additional Strength", subtype:"Armor", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Brute"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Wrestler"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Bear"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Lion"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Gorilla"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Goliath"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Leviathan"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Titan"},
        ]},
        "#% increased Quantity of Items found":{poemods:"Base Item Found Quantity +%", subtype:"Armor", affix:"s", tiers:[
        {tier:4, ilvl:2, tier_value:"4 to 8", affix_magic_name:"of Collecting"},
        {tier:3, ilvl:32, tier_value:"9 to 12", affix_magic_name:"of Gathering"},
        {tier:2, ilvl:55, tier_value:"13 to 16", affix_magic_name:"of Hoarding"},
        {tier:1, ilvl:77, tier_value:"17 to 20", affix_magic_name:"of Amassment"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Armor", affix:"s", tiers:[
        {tier:2, ilvl:3, tier_value:"6 to 10", affix_magic_name:"of Plunder"},
        {tier:1, ilvl:30, tier_value:"11 to 14", affix_magic_name:"of Raiding"},
        ]},
        "+# Life gained for each Ignited Enemy hit by your Attacks":{poemods:"Life Gain Per Target", subtype:"Armor", affix:"s", tiers:[
        {tier:1, ilvl:8, tier_value:"2", affix_magic_name:"of Rejuvenation"},
        ]},
        "+# Life gained on Kill":{poemods:"Life Gained On Enemy Death", subtype:"Armor", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"2 to 4", affix_magic_name:"of Success"},
        {tier:2, ilvl:23, tier_value:"5 to 7", affix_magic_name:"of Victory"},
        {tier:1, ilvl:40, tier_value:"8 to 11", affix_magic_name:"of Triumph"},
        ]},
        "# Life Regenerated per second":{poemods:"Base Life Regeneration Rate Per Second", subtype:"Armor", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"0.7 to 1.1", affix_magic_name:"of the Newt"},
        {tier:5, ilvl:18, tier_value:"1.6 to 2.4", affix_magic_name:"of the Lizard"},
        {tier:4, ilvl:30, tier_value:"2.2 to 3.3", affix_magic_name:"of the Starfish"},
        {tier:3, ilvl:44, tier_value:"2.9 to 4.3", affix_magic_name:"of the Hydra"},
        {tier:2, ilvl:59, tier_value:"3.6 to 5.5", affix_magic_name:"of the Troll"},
        {tier:1, ilvl:78, tier_value:"6.0 to 7.0", affix_magic_name:"of the Phoenix"},
        ]},
        "+# Mana Gained on Kill":{poemods:"Mana Gained On Enemy Death", subtype:"Armor", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"1", affix_magic_name:"of Absorption"},
        {tier:2, ilvl:24, tier_value:"2 to 3", affix_magic_name:"of Osmosis"},
        {tier:1, ilvl:40, tier_value:"4 to 6", affix_magic_name:"of Consumption"},
        ]},
        "+#% to Cold Resistance":{poemods:"Base Cold Dmg Resistance %", subtype:"Armor", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Inuit"},
        {tier:6, ilvl:14, tier_value:"12 to 17", affix_magic_name:"of the Seal"},
        {tier:5, ilvl:26, tier_value:"18 to 23", affix_magic_name:"of the Penguin"},
        {tier:4, ilvl:38, tier_value:"24 to 29", affix_magic_name:"of the Yeti"},
        {tier:3, ilvl:50, tier_value:"30 to 35", affix_magic_name:"of the Walrus"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Polar Bear"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Ice"},
        ]},
        "+#% to Fire Resistance":{poemods:"Base Fire Dmg Resistance %", subtype:"Armor", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Whelpling"},
        {tier:6, ilvl:12, tier_value:"12 to 17", affix_magic_name:"of the Salamander"},
        {tier:5, ilvl:24, tier_value:"18 to 23", affix_magic_name:"of the Drake"},
        {tier:4, ilvl:36, tier_value:"24 to 29", affix_magic_name:"of the Kiln"},
        {tier:3, ilvl:48, tier_value:"30 to 35", affix_magic_name:"of the Furnace"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Volcano"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Magma"},
        ]},
        "+#% to Lightning Resistance":{poemods:"Base Lightning Dmg Resistance %", subtype:"Armor", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Cloud"},
        {tier:6, ilvl:13, tier_value:"12 to 17", affix_magic_name:"of the Squall"},
        {tier:5, ilvl:25, tier_value:"18 to 23", affix_magic_name:"of the Storm"},
        {tier:4, ilvl:37, tier_value:"24 to 29", affix_magic_name:"of the Thunderhead"},
        {tier:3, ilvl:49, tier_value:"30 to 35", affix_magic_name:"of the Tempest"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Maelstrom"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Lightning"},
        ]},
        "+#% to Chaos Resistance":{poemods:"Base Chaos Dmg Resistance %", subtype:"Armor", affix:"s", tiers:[
        {tier:5, ilvl:16, tier_value:"5 to 10", affix_magic_name:"of the Lost"},
        {tier:4, ilvl:30, tier_value:"11 to 15", affix_magic_name:"of Banishment"},
        {tier:3, ilvl:44, tier_value:"16 to 20", affix_magic_name:"of Eviction"},
        {tier:2, ilvl:56, tier_value:"21 to 25", affix_magic_name:"of Expulsion"},
        {tier:1, ilvl:65, tier_value:"26 to 30", affix_magic_name:"of Exile"},
        ]},
        "#% reduced Attribute Requirements":{poemods:"Local Attribute Requirements -%", subtype:"Armor", affix:"s", tiers:[
        {tier:2, ilvl:36, tier_value:"-18", affix_magic_name:"of the Worthy"},
        {tier:1, ilvl:60, tier_value:"-32", affix_magic_name:"of the Apt"},
        ]},
        "#% increased Stun Recovery":{poemods:"Base Stun Recovery +%", subtype:"Armor", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"11 to 13", affix_magic_name:"of Thick Skin"},
        {tier:5, ilvl:17, tier_value:"14 to 16", affix_magic_name:"of Stone Skin"},
        {tier:4, ilvl:28, tier_value:"17 to 19", affix_magic_name:"of Iron Skin"},
        {tier:3, ilvl:42, tier_value:"20 to 22", affix_magic_name:"of Steel Skin"},
        {tier:2, ilvl:56, tier_value:"23 to 25", affix_magic_name:"of Adamantite Skin"},
        {tier:1, ilvl:79, tier_value:"26 to 28", affix_magic_name:"of Corundum Skin"},
        ]},
        "Adds #-# Cold Damage":{poemods:"Base Min Added Cold Dmg / Base Max Added Cold Dmg", subtype:"Evasion", affix:"p", tiers:[
        {tier:5, ilvl:2, tier_value:"1 / 2", affix_magic_name:"Frosted"},
        {tier:4, ilvl:13, tier_value:"3 to 4 / 7 to 8", affix_magic_name:"Chilled"},
        {tier:3, ilvl:21, tier_value:"5 to 7 / 10 to 12", affix_magic_name:"Icy"},
        {tier:2, ilvl:29, tier_value:"6 to 9 / 13 to 16", affix_magic_name:"Frigid"},
        {tier:1, ilvl:37, tier_value:"8 to 11 / 16 to 19", affix_magic_name:"Freezing"},
        ]},
        "Adds #-# Fire Damage":{poemods:"Base Min Added Fire Dmg / Base Max Added Fire Dmg", subtype:"Evasion", affix:"p", tiers:[
        {tier:5, ilvl:1, tier_value:"1 / 2", affix_magic_name:"Heated"},
        {tier:4, ilvl:12, tier_value:"3 to 5 / 7 to 8", affix_magic_name:"Smoldering"},
        {tier:3, ilvl:20, tier_value:"5 to 7 / 11 to 13", affix_magic_name:"Smoking"},
        {tier:2, ilvl:28, tier_value:"7 to 10 / 15 to 18", affix_magic_name:"Burning"},
        {tier:1, ilvl:36, tier_value:"9 to 12 / 19 to 22", affix_magic_name:"Flaming"},
        ]},
        "Adds #-# Lightning Damage":{poemods:"Base Min Added Lightning Dmg / Base Max Added Lightning Dmg", subtype:"Evasion", affix:"p", tiers:[
        {tier:5, ilvl:3, tier_value:"1 / 5", affix_magic_name:"Humming"},
        {tier:4, ilvl:13, tier_value:"1 / 14 to 15", affix_magic_name:"Buzzing"},
        {tier:3, ilvl:22, tier_value:"1 to 2 / 22 to 23", affix_magic_name:"Snapping"},
        {tier:2, ilvl:30, tier_value:"1 to 2 / 27 to 28", affix_magic_name:"Crackling"},
        {tier:1, ilvl:38, tier_value:"1 to 3 / 33 to 34", affix_magic_name:"Sparking"},
        ]},
        "Adds #-# Physical Damage":{poemods:"Base Min Added Physical Dmg / Base Max Added Physical Dmg", subtype:"Evasion", affix:"p", tiers:[
        {tier:5, ilvl:5, tier_value:"1 / 2", affix_magic_name:"Glinting"},
        {tier:4, ilvl:13, tier_value:"2 to 3 / 4 to 5", affix_magic_name:"Burnished"},
        {tier:3, ilvl:19, tier_value:"3 to 4 / 6 to 7", affix_magic_name:"Polished"},
        {tier:2, ilvl:28, tier_value:"4 to 6 / 9 to 10", affix_magic_name:"Honed"},
        {tier:1, ilvl:35, tier_value:"5 to 7 / 11 to 12", affix_magic_name:"Gleaming"},
        ]},
        "undefined":{poemods:"Local Evasion Rating", subtype:"Evasion", affix:"p", tiers:[
        {tier:3, ilvl:1, tier_value:"3 to 10", affix_magic_name:"Agile"},
        {tier:2, ilvl:18, tier_value:"11 to 35", affix_magic_name:"Dancer's"},
        {tier:1, ilvl:29, tier_value:"36 to 60", affix_magic_name:"Acrobat's"},
        ]},
        "+# to Evasion Rating":{poemods:"Local Evasion Rating +%", subtype:"Evasion", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"11 to 28", affix_magic_name:"Shade's"},
        {tier:5, ilvl:19, tier_value:"29 to 46", affix_magic_name:"Ghost's"},
        {tier:4, ilvl:30, tier_value:"47 to 64", affix_magic_name:"Spectre's"},
        {tier:3, ilvl:44, tier_value:"65 to 82", affix_magic_name:"Wraith's"},
        {tier:2, ilvl:60, tier_value:"83 to 100", affix_magic_name:"Phantasm's"},
        {tier:1, ilvl:72, tier_value:"101 to 120", affix_magic_name:"Nightmare's"},
        ]},
        "undefined":{poemods:"Local Evasion Rating +% / Base Stun Recovery +%", subtype:"Evasion", affix:"p", tiers:[
        {tier:6, ilvl:2, tier_value:"6 to 14 / 6 to 7", affix_magic_name:"Mosquito's"},
        {tier:5, ilvl:19, tier_value:"15 to 23 / 8 to 9", affix_magic_name:"Moth's"},
        {tier:4, ilvl:30, tier_value:"24 to 32 / 10 to 11", affix_magic_name:"Butterfly's"},
        {tier:3, ilvl:44, tier_value:"33 to 41 / 12 to 13", affix_magic_name:"Wasp's"},
        {tier:2, ilvl:60, tier_value:"42 to 50 / 14 to 15", affix_magic_name:"Dragonfly's"},
        {tier:1, ilvl:78, tier_value:"51 to 56 / 16 to 17", affix_magic_name:"Hummingbird's"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Evasion", affix:"p", tiers:[
        {tier:2, ilvl:20, tier_value:"8 to 12", affix_magic_name:"Magpie's"},
        {tier:1, ilvl:39, tier_value:"13 to 18", affix_magic_name:"Pirate's"},
        ]},
        "+# to maximum Life":{poemods:"Base Max Life", subtype:"Evasion", affix:"p", tiers:[
        {tier:8, ilvl:1, tier_value:"10 to 19", affix_magic_name:"Healthy"},
        {tier:7, ilvl:11, tier_value:"20 to 29", affix_magic_name:"Sanguine"},
        {tier:6, ilvl:18, tier_value:"30 to 39", affix_magic_name:"Stalwart"},
        {tier:5, ilvl:24, tier_value:"40 to 49", affix_magic_name:"Stout"},
        {tier:4, ilvl:30, tier_value:"50 to 59", affix_magic_name:"Robust"},
        {tier:3, ilvl:36, tier_value:"60 to 69", affix_magic_name:"Rotund"},
        {tier:2, ilvl:44, tier_value:"70 to 79", affix_magic_name:"Virile"},
        {tier:1, ilvl:54, tier_value:"80 to 89", affix_magic_name:"Athlete's"},
        ]},
        "#% of Physical Attack Damage Leeched as Life":{poemods:"Life Leech From Physical Dmg %", subtype:"Evasion", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Remora's"},
        ]},
        "#% of Physical Attack Damage Leeched as Mana":{poemods:"Mana Leech From Physical Dmg %", subtype:"Evasion", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Thirsty"},
        ]},
        "+# to Accuracy Rating":{poemods:"Accuracy Rating", subtype:"Evasion", affix:"s", tiers:[
        {tier:9, ilvl:1, tier_value:"5 to 15", affix_magic_name:"of Calm"},
        {tier:8, ilvl:12, tier_value:"16 to 60", affix_magic_name:"of Steadiness"},
        {tier:7, ilvl:20, tier_value:"61 to 100", affix_magic_name:"of Accuracy"},
        {tier:6, ilvl:26, tier_value:"101 to 130", affix_magic_name:"of Precision"},
        {tier:5, ilvl:33, tier_value:"131 to 165", affix_magic_name:"of the Sniper"},
        {tier:4, ilvl:41, tier_value:"166 to 200", affix_magic_name:"of the Marksman"},
        {tier:3, ilvl:50, tier_value:"201 to 250", affix_magic_name:"of the Deadeye"},
        {tier:2, ilvl:63, tier_value:"251 to 320", affix_magic_name:"of the Ranger"},
        {tier:1, ilvl:76, tier_value:"321 to 400", affix_magic_name:"of the Assassin"},
        ]},
        "#% increased Attack Speed":{poemods:"Attack Speed +%", subtype:"Evasion", affix:"s", tiers:[
        {tier:4, ilvl:1, tier_value:"5 to 7", affix_magic_name:"of Skill"},
        {tier:3, ilvl:11, tier_value:"8 to 10", affix_magic_name:"of Ease"},
        {tier:2, ilvl:22, tier_value:"11 to 13", affix_magic_name:"of Mastery"},
        {tier:1, ilvl:76, tier_value:"14 to 16", affix_magic_name:"of Grandmastery"},
        ]},
        "+# to Dexterity":{poemods:"Additional Dexterity", subtype:"Evasion", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Mongoose"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Lynx"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Fox"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Falcon"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Panther"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Leopard"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Jaguar"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Phantasm"},
        ]},
        "#% increased Quantity of Items found":{poemods:"Base Item Found Quantity +%", subtype:"Evasion", affix:"s", tiers:[
        {tier:4, ilvl:2, tier_value:"4 to 8", affix_magic_name:"of Collecting"},
        {tier:3, ilvl:32, tier_value:"9 to 12", affix_magic_name:"of Gathering"},
        {tier:2, ilvl:55, tier_value:"13 to 16", affix_magic_name:"of Hoarding"},
        {tier:1, ilvl:77, tier_value:"17 to 20", affix_magic_name:"of Amassment"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Evasion", affix:"s", tiers:[
        {tier:2, ilvl:3, tier_value:"6 to 10", affix_magic_name:"of Plunder"},
        {tier:1, ilvl:30, tier_value:"11 to 14", affix_magic_name:"of Raiding"},
        ]},
        "+# Life gained for each Ignited Enemy hit by your Attacks":{poemods:"Life Gain Per Target", subtype:"Evasion", affix:"s", tiers:[
        {tier:1, ilvl:8, tier_value:"2", affix_magic_name:"of Rejuvenation"},
        ]},
        "+# Life gained on Kill":{poemods:"Life Gained On Enemy Death", subtype:"Evasion", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"2 to 4", affix_magic_name:"of Success"},
        {tier:2, ilvl:23, tier_value:"5 to 7", affix_magic_name:"of Victory"},
        {tier:1, ilvl:40, tier_value:"8 to 11", affix_magic_name:"of Triumph"},
        ]},
        "# Life Regenerated per second":{poemods:"Base Life Regeneration Rate Per Second", subtype:"Evasion", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"0.7 to 1.1", affix_magic_name:"of the Newt"},
        {tier:5, ilvl:18, tier_value:"1.6 to 2.4", affix_magic_name:"of the Lizard"},
        {tier:4, ilvl:30, tier_value:"2.2 to 3.3", affix_magic_name:"of the Starfish"},
        {tier:3, ilvl:44, tier_value:"2.9 to 4.3", affix_magic_name:"of the Hydra"},
        {tier:2, ilvl:59, tier_value:"3.6 to 5.5", affix_magic_name:"of the Troll"},
        {tier:1, ilvl:78, tier_value:"6.0 to 7.0", affix_magic_name:"of the Phoenix"},
        ]},
        "+# Mana Gained on Kill":{poemods:"Mana Gained On Enemy Death", subtype:"Evasion", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"1", affix_magic_name:"of Absorption"},
        {tier:2, ilvl:24, tier_value:"2 to 3", affix_magic_name:"of Osmosis"},
        {tier:1, ilvl:40, tier_value:"4 to 6", affix_magic_name:"of Consumption"},
        ]},
        "+#% to Cold Resistance":{poemods:"Base Cold Dmg Resistance %", subtype:"Evasion", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Inuit"},
        {tier:6, ilvl:14, tier_value:"12 to 17", affix_magic_name:"of the Seal"},
        {tier:5, ilvl:26, tier_value:"18 to 23", affix_magic_name:"of the Penguin"},
        {tier:4, ilvl:38, tier_value:"24 to 29", affix_magic_name:"of the Yeti"},
        {tier:3, ilvl:50, tier_value:"30 to 35", affix_magic_name:"of the Walrus"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Polar Bear"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Ice"},
        ]},
        "+#% to Fire Resistance":{poemods:"Base Fire Dmg Resistance %", subtype:"Evasion", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Whelpling"},
        {tier:6, ilvl:12, tier_value:"12 to 17", affix_magic_name:"of the Salamander"},
        {tier:5, ilvl:24, tier_value:"18 to 23", affix_magic_name:"of the Drake"},
        {tier:4, ilvl:36, tier_value:"24 to 29", affix_magic_name:"of the Kiln"},
        {tier:3, ilvl:48, tier_value:"30 to 35", affix_magic_name:"of the Furnace"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Volcano"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Magma"},
        ]},
        "+#% to Lightning Resistance":{poemods:"Base Lightning Dmg Resistance %", subtype:"Evasion", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Cloud"},
        {tier:6, ilvl:13, tier_value:"12 to 17", affix_magic_name:"of the Squall"},
        {tier:5, ilvl:25, tier_value:"18 to 23", affix_magic_name:"of the Storm"},
        {tier:4, ilvl:37, tier_value:"24 to 29", affix_magic_name:"of the Thunderhead"},
        {tier:3, ilvl:49, tier_value:"30 to 35", affix_magic_name:"of the Tempest"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Maelstrom"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Lightning"},
        ]},
        "+#% to Chaos Resistance":{poemods:"Base Chaos Dmg Resistance %", subtype:"Evasion", affix:"s", tiers:[
        {tier:5, ilvl:16, tier_value:"5 to 10", affix_magic_name:"of the Lost"},
        {tier:4, ilvl:30, tier_value:"11 to 15", affix_magic_name:"of Banishment"},
        {tier:3, ilvl:44, tier_value:"16 to 20", affix_magic_name:"of Eviction"},
        {tier:2, ilvl:56, tier_value:"21 to 25", affix_magic_name:"of Expulsion"},
        {tier:1, ilvl:65, tier_value:"26 to 30", affix_magic_name:"of Exile"},
        ]},
        "#% reduced Attribute Requirements":{poemods:"Local Attribute Requirements -%", subtype:"Evasion", affix:"s", tiers:[
        {tier:2, ilvl:36, tier_value:"-18", affix_magic_name:"of the Worthy"},
        {tier:1, ilvl:60, tier_value:"-32", affix_magic_name:"of the Apt"},
        ]},
        "#% increased Stun Recovery":{poemods:"Base Stun Recovery +%", subtype:"Evasion", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"11 to 13", affix_magic_name:"of Thick Skin"},
        {tier:5, ilvl:17, tier_value:"14 to 16", affix_magic_name:"of Stone Skin"},
        {tier:4, ilvl:28, tier_value:"17 to 19", affix_magic_name:"of Iron Skin"},
        {tier:3, ilvl:42, tier_value:"20 to 22", affix_magic_name:"of Steel Skin"},
        {tier:2, ilvl:56, tier_value:"23 to 25", affix_magic_name:"of Adamantite Skin"},
        {tier:1, ilvl:79, tier_value:"26 to 28", affix_magic_name:"of Corundum Skin"},
        ]},
        "Adds #-# Cold Damage":{poemods:"Base Min Added Cold Dmg / Base Max Added Cold Dmg", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:2, tier_value:"1 / 2", affix_magic_name:"Frosted"},
        {tier:4, ilvl:13, tier_value:"3 to 4 / 7 to 8", affix_magic_name:"Chilled"},
        {tier:3, ilvl:21, tier_value:"5 to 7 / 10 to 12", affix_magic_name:"Icy"},
        {tier:2, ilvl:29, tier_value:"6 to 9 / 13 to 16", affix_magic_name:"Frigid"},
        {tier:1, ilvl:37, tier_value:"8 to 11 / 16 to 19", affix_magic_name:"Freezing"},
        ]},
        "Adds #-# Fire Damage":{poemods:"Base Min Added Fire Dmg / Base Max Added Fire Dmg", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:1, tier_value:"1 / 2", affix_magic_name:"Heated"},
        {tier:4, ilvl:12, tier_value:"3 to 5 / 7 to 8", affix_magic_name:"Smoldering"},
        {tier:3, ilvl:20, tier_value:"5 to 7 / 11 to 13", affix_magic_name:"Smoking"},
        {tier:2, ilvl:28, tier_value:"7 to 10 / 15 to 18", affix_magic_name:"Burning"},
        {tier:1, ilvl:36, tier_value:"9 to 12 / 19 to 22", affix_magic_name:"Flaming"},
        ]},
        "Adds #-# Lightning Damage":{poemods:"Base Min Added Lightning Dmg / Base Max Added Lightning Dmg", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:3, tier_value:"1 / 5", affix_magic_name:"Humming"},
        {tier:4, ilvl:13, tier_value:"1 / 14 to 15", affix_magic_name:"Buzzing"},
        {tier:3, ilvl:22, tier_value:"1 to 2 / 22 to 23", affix_magic_name:"Snapping"},
        {tier:2, ilvl:30, tier_value:"1 to 2 / 27 to 28", affix_magic_name:"Crackling"},
        {tier:1, ilvl:38, tier_value:"1 to 3 / 33 to 34", affix_magic_name:"Sparking"},
        ]},
        "Adds #-# Physical Damage":{poemods:"Base Min Added Physical Dmg / Base Max Added Physical Dmg", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:5, tier_value:"1 / 2", affix_magic_name:"Glinting"},
        {tier:4, ilvl:13, tier_value:"2 to 3 / 4 to 5", affix_magic_name:"Burnished"},
        {tier:3, ilvl:19, tier_value:"3 to 4 / 6 to 7", affix_magic_name:"Polished"},
        {tier:2, ilvl:28, tier_value:"4 to 6 / 9 to 10", affix_magic_name:"Honed"},
        {tier:1, ilvl:35, tier_value:"5 to 7 / 11 to 12", affix_magic_name:"Gleaming"},
        ]},
        "+# to maximum Energy Shield":{poemods:"Local Energy Shield", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:7, ilvl:3, tier_value:"3 to 5", affix_magic_name:"Shining"},
        {tier:6, ilvl:11, tier_value:"6 to 8", affix_magic_name:"Glimmering"},
        {tier:5, ilvl:17, tier_value:"9 to 12", affix_magic_name:"Glittering"},
        {tier:4, ilvl:23, tier_value:"13 to 15", affix_magic_name:"Glowing"},
        {tier:3, ilvl:29, tier_value:"16 to 19", affix_magic_name:"Radiating"},
        {tier:2, ilvl:35, tier_value:"20 to 29", affix_magic_name:"Pulsing"},
        {tier:1, ilvl:43, tier_value:"30 to 48", affix_magic_name:"Seething"},
        ]},
        "#% increased maximum Energy Shield":{poemods:"Local Energy Shield +%", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"11 to 28", affix_magic_name:"Protective"},
        {tier:5, ilvl:18, tier_value:"29 to 46", affix_magic_name:"Strong-Willed"},
        {tier:4, ilvl:30, tier_value:"47 to 64", affix_magic_name:"Resolute"},
        {tier:3, ilvl:44, tier_value:"65 to 82", affix_magic_name:"Fearless"},
        {tier:2, ilvl:60, tier_value:"83 to 100", affix_magic_name:"Dauntless"},
        {tier:1, ilvl:72, tier_value:"101 to 120", affix_magic_name:"Unconquerable"},
        ]},
        "undefined":{poemods:"Local Energy Shield +% / Base Stun Recovery +%", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"6 to 14 / 6 to 7", affix_magic_name:"Pixie's"},
        {tier:5, ilvl:18, tier_value:"15 to 23 / 8 to 9", affix_magic_name:"Gremlin's"},
        {tier:4, ilvl:30, tier_value:"24 to 32 / 10 to 11", affix_magic_name:"Boggart's"},
        {tier:3, ilvl:44, tier_value:"33 to 41 / 12 to 13", affix_magic_name:"Naga's"},
        {tier:2, ilvl:60, tier_value:"42 to 50 / 14 to 15", affix_magic_name:"Djinn's"},
        {tier:1, ilvl:78, tier_value:"51 to 56 / 16 to 17", affix_magic_name:"Seraphin's"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:2, ilvl:20, tier_value:"8 to 12", affix_magic_name:"Magpie's"},
        {tier:1, ilvl:39, tier_value:"13 to 18", affix_magic_name:"Pirate's"},
        ]},
        "+# to maximum Life":{poemods:"Base Max Life", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:8, ilvl:1, tier_value:"10 to 19", affix_magic_name:"Healthy"},
        {tier:7, ilvl:11, tier_value:"20 to 29", affix_magic_name:"Sanguine"},
        {tier:6, ilvl:18, tier_value:"30 to 39", affix_magic_name:"Stalwart"},
        {tier:5, ilvl:24, tier_value:"40 to 49", affix_magic_name:"Stout"},
        {tier:4, ilvl:30, tier_value:"50 to 59", affix_magic_name:"Robust"},
        {tier:3, ilvl:36, tier_value:"60 to 69", affix_magic_name:"Rotund"},
        {tier:2, ilvl:44, tier_value:"70 to 79", affix_magic_name:"Virile"},
        {tier:1, ilvl:54, tier_value:"80 to 89", affix_magic_name:"Athlete's"},
        ]},
        "#% of Physical Attack Damage Leeched as Life":{poemods:"Life Leech From Physical Dmg %", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Remora's"},
        ]},
        "+# to maximum Mana":{poemods:"Base Max Mana", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:11, ilvl:1, tier_value:"15 to 19", affix_magic_name:"Beryl"},
        {tier:10, ilvl:11, tier_value:"20 to 24", affix_magic_name:"Cobalt"},
        {tier:9, ilvl:17, tier_value:"25 to 29", affix_magic_name:"Azure"},
        {tier:8, ilvl:23, tier_value:"30 to 34", affix_magic_name:"Sapphire"},
        {tier:7, ilvl:29, tier_value:"35 to 39", affix_magic_name:"Cerulean"},
        {tier:6, ilvl:35, tier_value:"40 to 44", affix_magic_name:"Aqua"},
        {tier:5, ilvl:42, tier_value:"45 to 49", affix_magic_name:"Opalescent"},
        {tier:4, ilvl:51, tier_value:"50 to 54", affix_magic_name:"Gentian"},
        {tier:3, ilvl:60, tier_value:"55 to 59", affix_magic_name:"Chalybeous"},
        {tier:2, ilvl:69, tier_value:"60 to 64", affix_magic_name:"Mazarine"},
        {tier:1, ilvl:75, tier_value:"65 to 68", affix_magic_name:"Blue"},
        ]},
        "#% of Physical Attack Damage Leeched as Mana":{poemods:"Mana Leech From Physical Dmg %", subtype:"Energy Shield", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Thirsty"},
        ]},
        "+# to Accuracy Rating":{poemods:"Accuracy Rating", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:9, ilvl:1, tier_value:"5 to 15", affix_magic_name:"of Calm"},
        {tier:8, ilvl:12, tier_value:"16 to 60", affix_magic_name:"of Steadiness"},
        {tier:7, ilvl:20, tier_value:"61 to 100", affix_magic_name:"of Accuracy"},
        {tier:6, ilvl:26, tier_value:"101 to 130", affix_magic_name:"of Precision"},
        {tier:5, ilvl:33, tier_value:"131 to 165", affix_magic_name:"of the Sniper"},
        {tier:4, ilvl:41, tier_value:"166 to 200", affix_magic_name:"of the Marksman"},
        {tier:3, ilvl:50, tier_value:"201 to 250", affix_magic_name:"of the Deadeye"},
        {tier:2, ilvl:63, tier_value:"251 to 320", affix_magic_name:"of the Ranger"},
        {tier:1, ilvl:76, tier_value:"321 to 400", affix_magic_name:"of the Assassin"},
        ]},
        "#% increased Attack Speed":{poemods:"Attack Speed +%", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:4, ilvl:1, tier_value:"5 to 7", affix_magic_name:"of Skill"},
        {tier:3, ilvl:11, tier_value:"8 to 10", affix_magic_name:"of Ease"},
        {tier:2, ilvl:22, tier_value:"11 to 13", affix_magic_name:"of Mastery"},
        {tier:1, ilvl:76, tier_value:"14 to 16", affix_magic_name:"of Grandmastery"},
        ]},
        "+# to Dexterity":{poemods:"Additional Dexterity", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Mongoose"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Lynx"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Fox"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Falcon"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Panther"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Leopard"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Jaguar"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Phantasm"},
        ]},
        "+# to Intelligence":{poemods:"Additional Intelligence", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Pupil"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Student"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Prodigy"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Augur"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Philosopher"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Sage"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Savant"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Virtuoso"},
        ]},
        "#% increased Quantity of Items found":{poemods:"Base Item Found Quantity +%", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:4, ilvl:2, tier_value:"4 to 8", affix_magic_name:"of Collecting"},
        {tier:3, ilvl:32, tier_value:"9 to 12", affix_magic_name:"of Gathering"},
        {tier:2, ilvl:55, tier_value:"13 to 16", affix_magic_name:"of Hoarding"},
        {tier:1, ilvl:77, tier_value:"17 to 20", affix_magic_name:"of Amassment"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:2, ilvl:3, tier_value:"6 to 10", affix_magic_name:"of Plunder"},
        {tier:1, ilvl:30, tier_value:"11 to 14", affix_magic_name:"of Raiding"},
        ]},
        "+# Life gained for each Ignited Enemy hit by your Attacks":{poemods:"Life Gain Per Target", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:1, ilvl:8, tier_value:"2", affix_magic_name:"of Rejuvenation"},
        ]},
        "+# Life gained on Kill":{poemods:"Life Gained On Enemy Death", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"2 to 4", affix_magic_name:"of Success"},
        {tier:2, ilvl:23, tier_value:"5 to 7", affix_magic_name:"of Victory"},
        {tier:1, ilvl:40, tier_value:"8 to 11", affix_magic_name:"of Triumph"},
        ]},
        "# Life Regenerated per second":{poemods:"Base Life Regeneration Rate Per Second", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"0.7 to 1.1", affix_magic_name:"of the Newt"},
        {tier:5, ilvl:18, tier_value:"1.6 to 2.4", affix_magic_name:"of the Lizard"},
        {tier:4, ilvl:30, tier_value:"2.2 to 3.3", affix_magic_name:"of the Starfish"},
        {tier:3, ilvl:44, tier_value:"2.9 to 4.3", affix_magic_name:"of the Hydra"},
        {tier:2, ilvl:59, tier_value:"3.6 to 5.5", affix_magic_name:"of the Troll"},
        {tier:1, ilvl:78, tier_value:"6.0 to 7.0", affix_magic_name:"of the Phoenix"},
        ]},
        "+# Mana Gained on Kill":{poemods:"Mana Gained On Enemy Death", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"1", affix_magic_name:"of Absorption"},
        {tier:2, ilvl:24, tier_value:"2 to 3", affix_magic_name:"of Osmosis"},
        {tier:1, ilvl:40, tier_value:"4 to 6", affix_magic_name:"of Consumption"},
        ]},
        "+#% to Cold Resistance":{poemods:"Base Cold Dmg Resistance %", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Inuit"},
        {tier:6, ilvl:14, tier_value:"12 to 17", affix_magic_name:"of the Seal"},
        {tier:5, ilvl:26, tier_value:"18 to 23", affix_magic_name:"of the Penguin"},
        {tier:4, ilvl:38, tier_value:"24 to 29", affix_magic_name:"of the Yeti"},
        {tier:3, ilvl:50, tier_value:"30 to 35", affix_magic_name:"of the Walrus"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Polar Bear"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Ice"},
        ]},
        "+#% to Fire Resistance":{poemods:"Base Fire Dmg Resistance %", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Whelpling"},
        {tier:6, ilvl:12, tier_value:"12 to 17", affix_magic_name:"of the Salamander"},
        {tier:5, ilvl:24, tier_value:"18 to 23", affix_magic_name:"of the Drake"},
        {tier:4, ilvl:36, tier_value:"24 to 29", affix_magic_name:"of the Kiln"},
        {tier:3, ilvl:48, tier_value:"30 to 35", affix_magic_name:"of the Furnace"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Volcano"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Magma"},
        ]},
        "+#% to Lightning Resistance":{poemods:"Base Lightning Dmg Resistance %", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Cloud"},
        {tier:6, ilvl:13, tier_value:"12 to 17", affix_magic_name:"of the Squall"},
        {tier:5, ilvl:25, tier_value:"18 to 23", affix_magic_name:"of the Storm"},
        {tier:4, ilvl:37, tier_value:"24 to 29", affix_magic_name:"of the Thunderhead"},
        {tier:3, ilvl:49, tier_value:"30 to 35", affix_magic_name:"of the Tempest"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Maelstrom"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Lightning"},
        ]},
        "+#% to Chaos Resistance":{poemods:"Base Chaos Dmg Resistance %", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:5, ilvl:16, tier_value:"5 to 10", affix_magic_name:"of the Lost"},
        {tier:4, ilvl:30, tier_value:"11 to 15", affix_magic_name:"of Banishment"},
        {tier:3, ilvl:44, tier_value:"16 to 20", affix_magic_name:"of Eviction"},
        {tier:2, ilvl:56, tier_value:"21 to 25", affix_magic_name:"of Expulsion"},
        {tier:1, ilvl:65, tier_value:"26 to 30", affix_magic_name:"of Exile"},
        ]},
        "#% reduced Attribute Requirements":{poemods:"Local Attribute Requirements -%", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:2, ilvl:36, tier_value:"-18", affix_magic_name:"of the Worthy"},
        {tier:1, ilvl:60, tier_value:"-32", affix_magic_name:"of the Apt"},
        ]},
        "#% increased Stun Recovery":{poemods:"Base Stun Recovery +%", subtype:"Energy Shield", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"11 to 13", affix_magic_name:"of Thick Skin"},
        {tier:5, ilvl:17, tier_value:"14 to 16", affix_magic_name:"of Stone Skin"},
        {tier:4, ilvl:28, tier_value:"17 to 19", affix_magic_name:"of Iron Skin"},
        {tier:3, ilvl:42, tier_value:"20 to 22", affix_magic_name:"of Steel Skin"},
        {tier:2, ilvl:56, tier_value:"23 to 25", affix_magic_name:"of Adamantite Skin"},
        {tier:1, ilvl:79, tier_value:"26 to 28", affix_magic_name:"of Corundum Skin"},
        ]},
        "Adds #-# Cold Damage":{poemods:"Base Min Added Cold Dmg / Base Max Added Cold Dmg", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:5, ilvl:2, tier_value:"1 / 2", affix_magic_name:"Frosted"},
        {tier:4, ilvl:13, tier_value:"3 to 4 / 7 to 8", affix_magic_name:"Chilled"},
        {tier:3, ilvl:21, tier_value:"5 to 7 / 10 to 12", affix_magic_name:"Icy"},
        {tier:2, ilvl:29, tier_value:"6 to 9 / 13 to 16", affix_magic_name:"Frigid"},
        {tier:1, ilvl:37, tier_value:"8 to 11 / 16 to 19", affix_magic_name:"Freezing"},
        ]},
        "Adds #-# Fire Damage":{poemods:"Base Min Added Fire Dmg / Base Max Added Fire Dmg", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:5, ilvl:1, tier_value:"1 / 2", affix_magic_name:"Heated"},
        {tier:4, ilvl:12, tier_value:"3 to 5 / 7 to 8", affix_magic_name:"Smoldering"},
        {tier:3, ilvl:20, tier_value:"5 to 7 / 11 to 13", affix_magic_name:"Smoking"},
        {tier:2, ilvl:28, tier_value:"7 to 10 / 15 to 18", affix_magic_name:"Burning"},
        {tier:1, ilvl:36, tier_value:"9 to 12 / 19 to 22", affix_magic_name:"Flaming"},
        ]},
        "Adds #-# Lightning Damage":{poemods:"Base Min Added Lightning Dmg / Base Max Added Lightning Dmg", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:5, ilvl:3, tier_value:"1 / 5", affix_magic_name:"Humming"},
        {tier:4, ilvl:13, tier_value:"1 / 14 to 15", affix_magic_name:"Buzzing"},
        {tier:3, ilvl:22, tier_value:"1 to 2 / 22 to 23", affix_magic_name:"Snapping"},
        {tier:2, ilvl:30, tier_value:"1 to 2 / 27 to 28", affix_magic_name:"Crackling"},
        {tier:1, ilvl:38, tier_value:"1 to 3 / 33 to 34", affix_magic_name:"Sparking"},
        ]},
        "Adds #-# Physical Damage":{poemods:"Base Min Added Physical Dmg / Base Max Added Physical Dmg", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:5, ilvl:5, tier_value:"1 / 2", affix_magic_name:"Glinting"},
        {tier:4, ilvl:13, tier_value:"2 to 3 / 4 to 5", affix_magic_name:"Burnished"},
        {tier:3, ilvl:19, tier_value:"3 to 4 / 6 to 7", affix_magic_name:"Polished"},
        {tier:2, ilvl:28, tier_value:"4 to 6 / 9 to 10", affix_magic_name:"Honed"},
        {tier:1, ilvl:35, tier_value:"5 to 7 / 11 to 12", affix_magic_name:"Gleaming"},
        ]},
        "+# to Armour":{poemods:"Local Armor Rating", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:3, ilvl:1, tier_value:"3 to 10", affix_magic_name:"Lacquered"},
        {tier:2, ilvl:18, tier_value:"11 to 35", affix_magic_name:"Studded"},
        {tier:1, ilvl:30, tier_value:"36 to 60", affix_magic_name:"Ribbed"},
        ]},
        "undefined":{poemods:"Local Evasion Rating", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:3, ilvl:1, tier_value:"3 to 10", affix_magic_name:"Agile"},
        {tier:2, ilvl:18, tier_value:"11 to 35", affix_magic_name:"Dancer's"},
        {tier:1, ilvl:29, tier_value:"36 to 60", affix_magic_name:"Acrobat's"},
        ]},
        "undefined":{poemods:"Local Armour And Evasion +%", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"11 to 28", affix_magic_name:"Scrapper's"},
        {tier:5, ilvl:19, tier_value:"29 to 46", affix_magic_name:"Brawler's"},
        {tier:4, ilvl:30, tier_value:"47 to 64", affix_magic_name:"Fencer's"},
        {tier:3, ilvl:44, tier_value:"65 to 82", affix_magic_name:"Gladiator's"},
        {tier:2, ilvl:60, tier_value:"83 to 100", affix_magic_name:"Duelist's"},
        {tier:1, ilvl:72, tier_value:"100 to 120", affix_magic_name:"Hero's"},
        ]},
        "undefined":{poemods:"Local Armour And Evasion +% / Base Stun Recovery +%", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:6, ilvl:2, tier_value:"6 to 14 / 6 to 7", affix_magic_name:"Beetle's"},
        {tier:5, ilvl:19, tier_value:"15 to 23 / 8 to 9", affix_magic_name:"Crab's"},
        {tier:4, ilvl:30, tier_value:"24 to 32 / 10 to 11", affix_magic_name:"Armadillo's"},
        {tier:3, ilvl:44, tier_value:"33 to 41 / 12 to 13", affix_magic_name:"Rhino's"},
        {tier:2, ilvl:60, tier_value:"42 to 50 / 14 to 15", affix_magic_name:"Elephant's"},
        {tier:1, ilvl:78, tier_value:"51 to 56 / 16 to 17", affix_magic_name:"Mammoth's"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:2, ilvl:20, tier_value:"8 to 12", affix_magic_name:"Magpie's"},
        {tier:1, ilvl:39, tier_value:"13 to 18", affix_magic_name:"Pirate's"},
        ]},
        "+# to maximum Life":{poemods:"Base Max Life", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:8, ilvl:1, tier_value:"10 to 19", affix_magic_name:"Healthy"},
        {tier:7, ilvl:11, tier_value:"20 to 29", affix_magic_name:"Sanguine"},
        {tier:6, ilvl:18, tier_value:"30 to 39", affix_magic_name:"Stalwart"},
        {tier:5, ilvl:24, tier_value:"40 to 49", affix_magic_name:"Stout"},
        {tier:4, ilvl:30, tier_value:"50 to 59", affix_magic_name:"Robust"},
        {tier:3, ilvl:36, tier_value:"60 to 69", affix_magic_name:"Rotund"},
        {tier:2, ilvl:44, tier_value:"70 to 79", affix_magic_name:"Virile"},
        {tier:1, ilvl:54, tier_value:"80 to 89", affix_magic_name:"Athlete's"},
        ]},
        "#% of Physical Attack Damage Leeched as Life":{poemods:"Life Leech From Physical Dmg %", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Remora's"},
        ]},
        "#% of Physical Attack Damage Leeched as Mana":{poemods:"Mana Leech From Physical Dmg %", subtype:"Armor / Evasion", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Thirsty"},
        ]},
        "+# to Accuracy Rating":{poemods:"Accuracy Rating", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:9, ilvl:1, tier_value:"5 to 15", affix_magic_name:"of Calm"},
        {tier:8, ilvl:12, tier_value:"16 to 60", affix_magic_name:"of Steadiness"},
        {tier:7, ilvl:20, tier_value:"61 to 100", affix_magic_name:"of Accuracy"},
        {tier:6, ilvl:26, tier_value:"101 to 130", affix_magic_name:"of Precision"},
        {tier:5, ilvl:33, tier_value:"131 to 165", affix_magic_name:"of the Sniper"},
        {tier:4, ilvl:41, tier_value:"166 to 200", affix_magic_name:"of the Marksman"},
        {tier:3, ilvl:50, tier_value:"201 to 250", affix_magic_name:"of the Deadeye"},
        {tier:2, ilvl:63, tier_value:"251 to 320", affix_magic_name:"of the Ranger"},
        {tier:1, ilvl:76, tier_value:"321 to 400", affix_magic_name:"of the Assassin"},
        ]},
        "#% increased Attack Speed":{poemods:"Attack Speed +%", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:4, ilvl:1, tier_value:"5 to 7", affix_magic_name:"of Skill"},
        {tier:3, ilvl:11, tier_value:"8 to 10", affix_magic_name:"of Ease"},
        {tier:2, ilvl:22, tier_value:"11 to 13", affix_magic_name:"of Mastery"},
        {tier:1, ilvl:76, tier_value:"14 to 16", affix_magic_name:"of Grandmastery"},
        ]},
        "+# to Dexterity":{poemods:"Additional Dexterity", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Mongoose"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Lynx"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Fox"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Falcon"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Panther"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Leopard"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Jaguar"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Phantasm"},
        ]},
        "+# to Strength":{poemods:"Additional Strength", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Brute"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Wrestler"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Bear"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Lion"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Gorilla"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Goliath"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Leviathan"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Titan"},
        ]},
        "#% increased Quantity of Items found":{poemods:"Base Item Found Quantity +%", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:4, ilvl:2, tier_value:"4 to 8", affix_magic_name:"of Collecting"},
        {tier:3, ilvl:32, tier_value:"9 to 12", affix_magic_name:"of Gathering"},
        {tier:2, ilvl:55, tier_value:"13 to 16", affix_magic_name:"of Hoarding"},
        {tier:1, ilvl:77, tier_value:"17 to 20", affix_magic_name:"of Amassment"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:2, ilvl:3, tier_value:"6 to 10", affix_magic_name:"of Plunder"},
        {tier:1, ilvl:30, tier_value:"11 to 14", affix_magic_name:"of Raiding"},
        ]},
        "+# Life gained for each Ignited Enemy hit by your Attacks":{poemods:"Life Gain Per Target", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:1, ilvl:8, tier_value:"2", affix_magic_name:"of Rejuvenation"},
        ]},
        "+# Life gained on Kill":{poemods:"Life Gained On Enemy Death", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"2 to 4", affix_magic_name:"of Success"},
        {tier:2, ilvl:23, tier_value:"5 to 7", affix_magic_name:"of Victory"},
        {tier:1, ilvl:40, tier_value:"8 to 11", affix_magic_name:"of Triumph"},
        ]},
        "# Life Regenerated per second":{poemods:"Base Life Regeneration Rate Per Second", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"0.7 to 1.1", affix_magic_name:"of the Newt"},
        {tier:5, ilvl:18, tier_value:"1.6 to 2.4", affix_magic_name:"of the Lizard"},
        {tier:4, ilvl:30, tier_value:"2.2 to 3.3", affix_magic_name:"of the Starfish"},
        {tier:3, ilvl:44, tier_value:"2.9 to 4.3", affix_magic_name:"of the Hydra"},
        {tier:2, ilvl:59, tier_value:"3.6 to 5.5", affix_magic_name:"of the Troll"},
        {tier:1, ilvl:78, tier_value:"6.0 to 7.0", affix_magic_name:"of the Phoenix"},
        ]},
        "+# Mana Gained on Kill":{poemods:"Mana Gained On Enemy Death", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"1", affix_magic_name:"of Absorption"},
        {tier:2, ilvl:24, tier_value:"2 to 3", affix_magic_name:"of Osmosis"},
        {tier:1, ilvl:40, tier_value:"4 to 6", affix_magic_name:"of Consumption"},
        ]},
        "+#% to Cold Resistance":{poemods:"Base Cold Dmg Resistance %", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Inuit"},
        {tier:6, ilvl:14, tier_value:"12 to 17", affix_magic_name:"of the Seal"},
        {tier:5, ilvl:26, tier_value:"18 to 23", affix_magic_name:"of the Penguin"},
        {tier:4, ilvl:38, tier_value:"24 to 29", affix_magic_name:"of the Yeti"},
        {tier:3, ilvl:50, tier_value:"30 to 35", affix_magic_name:"of the Walrus"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Polar Bear"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Ice"},
        ]},
        "+#% to Fire Resistance":{poemods:"Base Fire Dmg Resistance %", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Whelpling"},
        {tier:6, ilvl:12, tier_value:"12 to 17", affix_magic_name:"of the Salamander"},
        {tier:5, ilvl:24, tier_value:"18 to 23", affix_magic_name:"of the Drake"},
        {tier:4, ilvl:36, tier_value:"24 to 29", affix_magic_name:"of the Kiln"},
        {tier:3, ilvl:48, tier_value:"30 to 35", affix_magic_name:"of the Furnace"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Volcano"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Magma"},
        ]},
        "+#% to Lightning Resistance":{poemods:"Base Lightning Dmg Resistance %", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Cloud"},
        {tier:6, ilvl:13, tier_value:"12 to 17", affix_magic_name:"of the Squall"},
        {tier:5, ilvl:25, tier_value:"18 to 23", affix_magic_name:"of the Storm"},
        {tier:4, ilvl:37, tier_value:"24 to 29", affix_magic_name:"of the Thunderhead"},
        {tier:3, ilvl:49, tier_value:"30 to 35", affix_magic_name:"of the Tempest"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Maelstrom"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Lightning"},
        ]},
        "+#% to Chaos Resistance":{poemods:"Base Chaos Dmg Resistance %", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:5, ilvl:16, tier_value:"5 to 10", affix_magic_name:"of the Lost"},
        {tier:4, ilvl:30, tier_value:"11 to 15", affix_magic_name:"of Banishment"},
        {tier:3, ilvl:44, tier_value:"16 to 20", affix_magic_name:"of Eviction"},
        {tier:2, ilvl:56, tier_value:"21 to 25", affix_magic_name:"of Expulsion"},
        {tier:1, ilvl:65, tier_value:"26 to 30", affix_magic_name:"of Exile"},
        ]},
        "#% reduced Attribute Requirements":{poemods:"Local Attribute Requirements -%", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:2, ilvl:36, tier_value:"-18", affix_magic_name:"of the Worthy"},
        {tier:1, ilvl:60, tier_value:"-32", affix_magic_name:"of the Apt"},
        ]},
        "#% increased Stun Recovery":{poemods:"Base Stun Recovery +%", subtype:"Armor / Evasion", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"11 to 13", affix_magic_name:"of Thick Skin"},
        {tier:5, ilvl:17, tier_value:"14 to 16", affix_magic_name:"of Stone Skin"},
        {tier:4, ilvl:28, tier_value:"17 to 19", affix_magic_name:"of Iron Skin"},
        {tier:3, ilvl:42, tier_value:"20 to 22", affix_magic_name:"of Steel Skin"},
        {tier:2, ilvl:56, tier_value:"23 to 25", affix_magic_name:"of Adamantite Skin"},
        {tier:1, ilvl:79, tier_value:"26 to 28", affix_magic_name:"of Corundum Skin"},
        ]},
        "Adds #-# Cold Damage":{poemods:"Base Min Added Cold Dmg / Base Max Added Cold Dmg", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:2, tier_value:"1 / 2", affix_magic_name:"Frosted"},
        {tier:4, ilvl:13, tier_value:"3 to 4 / 7 to 8", affix_magic_name:"Chilled"},
        {tier:3, ilvl:21, tier_value:"5 to 7 / 10 to 12", affix_magic_name:"Icy"},
        {tier:2, ilvl:29, tier_value:"6 to 9 / 13 to 16", affix_magic_name:"Frigid"},
        {tier:1, ilvl:37, tier_value:"8 to 11 / 16 to 19", affix_magic_name:"Freezing"},
        ]},
        "Adds #-# Fire Damage":{poemods:"Base Min Added Fire Dmg / Base Max Added Fire Dmg", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:1, tier_value:"1 / 2", affix_magic_name:"Heated"},
        {tier:4, ilvl:12, tier_value:"3 to 5 / 7 to 8", affix_magic_name:"Smoldering"},
        {tier:3, ilvl:20, tier_value:"5 to 7 / 11 to 13", affix_magic_name:"Smoking"},
        {tier:2, ilvl:28, tier_value:"7 to 10 / 15 to 18", affix_magic_name:"Burning"},
        {tier:1, ilvl:36, tier_value:"9 to 12 / 19 to 22", affix_magic_name:"Flaming"},
        ]},
        "Adds #-# Lightning Damage":{poemods:"Base Min Added Lightning Dmg / Base Max Added Lightning Dmg", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:3, tier_value:"1 / 5", affix_magic_name:"Humming"},
        {tier:4, ilvl:13, tier_value:"1 / 14 to 15", affix_magic_name:"Buzzing"},
        {tier:3, ilvl:22, tier_value:"1 to 2 / 22 to 23", affix_magic_name:"Snapping"},
        {tier:2, ilvl:30, tier_value:"1 to 2 / 27 to 28", affix_magic_name:"Crackling"},
        {tier:1, ilvl:38, tier_value:"1 to 3 / 33 to 34", affix_magic_name:"Sparking"},
        ]},
        "Adds #-# Physical Damage":{poemods:"Base Min Added Physical Dmg / Base Max Added Physical Dmg", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:5, tier_value:"1 / 2", affix_magic_name:"Glinting"},
        {tier:4, ilvl:13, tier_value:"2 to 3 / 4 to 5", affix_magic_name:"Burnished"},
        {tier:3, ilvl:19, tier_value:"3 to 4 / 6 to 7", affix_magic_name:"Polished"},
        {tier:2, ilvl:28, tier_value:"4 to 6 / 9 to 10", affix_magic_name:"Honed"},
        {tier:1, ilvl:35, tier_value:"5 to 7 / 11 to 12", affix_magic_name:"Gleaming"},
        ]},
        "+# to Armour":{poemods:"Local Armor Rating", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:3, ilvl:1, tier_value:"3 to 10", affix_magic_name:"Lacquered"},
        {tier:2, ilvl:18, tier_value:"11 to 35", affix_magic_name:"Studded"},
        {tier:1, ilvl:30, tier_value:"36 to 60", affix_magic_name:"Ribbed"},
        ]},
        "+# to maximum Energy Shield":{poemods:"Local Energy Shield", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:7, ilvl:3, tier_value:"3 to 5", affix_magic_name:"Shining"},
        {tier:6, ilvl:11, tier_value:"6 to 8", affix_magic_name:"Glimmering"},
        {tier:5, ilvl:17, tier_value:"9 to 12", affix_magic_name:"Glittering"},
        {tier:4, ilvl:23, tier_value:"13 to 15", affix_magic_name:"Glowing"},
        {tier:3, ilvl:29, tier_value:"16 to 19", affix_magic_name:"Radiating"},
        {tier:2, ilvl:35, tier_value:"20 to 29", affix_magic_name:"Pulsing"},
        {tier:1, ilvl:43, tier_value:"30 to 48", affix_magic_name:"Seething"},
        ]},
        "#% increased Evasion and Energy Shield":{poemods:"Local Armour And Energy Shield +%", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"11 to 28", affix_magic_name:"Infixed"},
        {tier:5, ilvl:19, tier_value:"29 to 46", affix_magic_name:"Ingrained"},
        {tier:4, ilvl:30, tier_value:"47 to 64", affix_magic_name:"Instilled"},
        {tier:3, ilvl:44, tier_value:"65 to 82", affix_magic_name:"Infused"},
        {tier:2, ilvl:60, tier_value:"83 to 100", affix_magic_name:"Inculcated"},
        {tier:1, ilvl:72, tier_value:"100 to 120", affix_magic_name:"Interpolated"},
        ]},
        "undefined":{poemods:"Local Armour And Energy Shield +% / Base Stun Recovery +%", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:6, ilvl:2, tier_value:"6 to 14 / 6 to 7", affix_magic_name:"Pixie's"},
        {tier:5, ilvl:19, tier_value:"15 to 23 / 8 to 9", affix_magic_name:"Gremlin's"},
        {tier:4, ilvl:30, tier_value:"24 to 32 / 10 to 11", affix_magic_name:"Boggart's"},
        {tier:3, ilvl:44, tier_value:"33 to 41 / 12 to 13", affix_magic_name:"Naga's"},
        {tier:2, ilvl:60, tier_value:"42 to 50 / 14 to 15", affix_magic_name:"Djinn's"},
        {tier:1, ilvl:78, tier_value:"51 to 56 / 16 to 17", affix_magic_name:"Seraphim's"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:2, ilvl:20, tier_value:"8 to 12", affix_magic_name:"Magpie's"},
        {tier:1, ilvl:39, tier_value:"13 to 18", affix_magic_name:"Pirate's"},
        ]},
        "+# to maximum Life":{poemods:"Base Max Life", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:8, ilvl:1, tier_value:"10 to 19", affix_magic_name:"Healthy"},
        {tier:7, ilvl:11, tier_value:"20 to 29", affix_magic_name:"Sanguine"},
        {tier:6, ilvl:18, tier_value:"30 to 39", affix_magic_name:"Stalwart"},
        {tier:5, ilvl:24, tier_value:"40 to 49", affix_magic_name:"Stout"},
        {tier:4, ilvl:30, tier_value:"50 to 59", affix_magic_name:"Robust"},
        {tier:3, ilvl:36, tier_value:"60 to 69", affix_magic_name:"Rotund"},
        {tier:2, ilvl:44, tier_value:"70 to 79", affix_magic_name:"Virile"},
        {tier:1, ilvl:54, tier_value:"80 to 89", affix_magic_name:"Athlete's"},
        ]},
        "#% of Physical Attack Damage Leeched as Life":{poemods:"Life Leech From Physical Dmg %", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Remora's"},
        ]},
        "+# to maximum Mana":{poemods:"Base Max Mana", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:11, ilvl:1, tier_value:"15 to 19", affix_magic_name:"Beryl"},
        {tier:10, ilvl:11, tier_value:"20 to 24", affix_magic_name:"Cobalt"},
        {tier:9, ilvl:17, tier_value:"25 to 29", affix_magic_name:"Azure"},
        {tier:8, ilvl:23, tier_value:"30 to 34", affix_magic_name:"Sapphire"},
        {tier:7, ilvl:29, tier_value:"35 to 39", affix_magic_name:"Cerulean"},
        {tier:6, ilvl:35, tier_value:"40 to 44", affix_magic_name:"Aqua"},
        {tier:5, ilvl:42, tier_value:"45 to 49", affix_magic_name:"Opalescent"},
        {tier:4, ilvl:51, tier_value:"50 to 54", affix_magic_name:"Gentian"},
        {tier:3, ilvl:60, tier_value:"55 to 59", affix_magic_name:"Chalybeous"},
        {tier:2, ilvl:69, tier_value:"60 to 64", affix_magic_name:"Mazarine"},
        {tier:1, ilvl:75, tier_value:"65 to 68", affix_magic_name:"Blue"},
        ]},
        "#% of Physical Attack Damage Leeched as Mana":{poemods:"Mana Leech From Physical Dmg %", subtype:"Armor / Energy Shield", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Thirsty"},
        ]},
        "+# to Accuracy Rating":{poemods:"Accuracy Rating", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:9, ilvl:1, tier_value:"5 to 15", affix_magic_name:"of Calm"},
        {tier:8, ilvl:12, tier_value:"16 to 60", affix_magic_name:"of Steadiness"},
        {tier:7, ilvl:20, tier_value:"61 to 100", affix_magic_name:"of Accuracy"},
        {tier:6, ilvl:26, tier_value:"101 to 130", affix_magic_name:"of Precision"},
        {tier:5, ilvl:33, tier_value:"131 to 165", affix_magic_name:"of the Sniper"},
        {tier:4, ilvl:41, tier_value:"166 to 200", affix_magic_name:"of the Marksman"},
        {tier:3, ilvl:50, tier_value:"201 to 250", affix_magic_name:"of the Deadeye"},
        {tier:2, ilvl:63, tier_value:"251 to 320", affix_magic_name:"of the Ranger"},
        {tier:1, ilvl:76, tier_value:"321 to 400", affix_magic_name:"of the Assassin"},
        ]},
        "#% increased Attack Speed":{poemods:"Attack Speed +%", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:4, ilvl:1, tier_value:"5 to 7", affix_magic_name:"of Skill"},
        {tier:3, ilvl:11, tier_value:"8 to 10", affix_magic_name:"of Ease"},
        {tier:2, ilvl:22, tier_value:"11 to 13", affix_magic_name:"of Mastery"},
        {tier:1, ilvl:76, tier_value:"14 to 16", affix_magic_name:"of Grandmastery"},
        ]},
        "+# to Dexterity":{poemods:"Additional Dexterity", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Mongoose"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Lynx"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Fox"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Falcon"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Panther"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Leopard"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Jaguar"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Phantasm"},
        ]},
        "+# to Intelligence":{poemods:"Additional Intelligence", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Pupil"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Student"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Prodigy"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Augur"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Philosopher"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Sage"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Savant"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Virtuoso"},
        ]},
        "+# to Strength":{poemods:"Additional Strength", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Brute"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Wrestler"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Bear"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Lion"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Gorilla"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Goliath"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Leviathan"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Titan"},
        ]},
        "#% increased Quantity of Items found":{poemods:"Base Item Found Quantity +%", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:4, ilvl:2, tier_value:"4 to 8", affix_magic_name:"of Collecting"},
        {tier:3, ilvl:32, tier_value:"9 to 12", affix_magic_name:"of Gathering"},
        {tier:2, ilvl:55, tier_value:"13 to 16", affix_magic_name:"of Hoarding"},
        {tier:1, ilvl:77, tier_value:"17 to 20", affix_magic_name:"of Amassment"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:2, ilvl:3, tier_value:"6 to 10", affix_magic_name:"of Plunder"},
        {tier:1, ilvl:30, tier_value:"11 to 14", affix_magic_name:"of Raiding"},
        ]},
        "+# Life gained for each Ignited Enemy hit by your Attacks":{poemods:"Life Gain Per Target", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:1, ilvl:8, tier_value:"2", affix_magic_name:"of Rejuvenation"},
        ]},
        "+# Life gained on Kill":{poemods:"Life Gained On Enemy Death", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"2 to 4", affix_magic_name:"of Success"},
        {tier:2, ilvl:23, tier_value:"5 to 7", affix_magic_name:"of Victory"},
        {tier:1, ilvl:40, tier_value:"8 to 11", affix_magic_name:"of Triumph"},
        ]},
        "# Life Regenerated per second":{poemods:"Base Life Regeneration Rate Per Second", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"0.7 to 1.1", affix_magic_name:"of the Newt"},
        {tier:5, ilvl:18, tier_value:"1.6 to 2.4", affix_magic_name:"of the Lizard"},
        {tier:4, ilvl:30, tier_value:"2.2 to 3.3", affix_magic_name:"of the Starfish"},
        {tier:3, ilvl:44, tier_value:"2.9 to 4.3", affix_magic_name:"of the Hydra"},
        {tier:2, ilvl:59, tier_value:"3.6 to 5.5", affix_magic_name:"of the Troll"},
        {tier:1, ilvl:78, tier_value:"6.0 to 7.0", affix_magic_name:"of the Phoenix"},
        ]},
        "+# Mana Gained on Kill":{poemods:"Mana Gained On Enemy Death", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"1", affix_magic_name:"of Absorption"},
        {tier:2, ilvl:24, tier_value:"2 to 3", affix_magic_name:"of Osmosis"},
        {tier:1, ilvl:40, tier_value:"4 to 6", affix_magic_name:"of Consumption"},
        ]},
        "+#% to Cold Resistance":{poemods:"Base Cold Dmg Resistance %", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Inuit"},
        {tier:6, ilvl:14, tier_value:"12 to 17", affix_magic_name:"of the Seal"},
        {tier:5, ilvl:26, tier_value:"18 to 23", affix_magic_name:"of the Penguin"},
        {tier:4, ilvl:38, tier_value:"24 to 29", affix_magic_name:"of the Yeti"},
        {tier:3, ilvl:50, tier_value:"30 to 35", affix_magic_name:"of the Walrus"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Polar Bear"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Ice"},
        ]},
        "+#% to Fire Resistance":{poemods:"Base Fire Dmg Resistance %", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Whelpling"},
        {tier:6, ilvl:12, tier_value:"12 to 17", affix_magic_name:"of the Salamander"},
        {tier:5, ilvl:24, tier_value:"18 to 23", affix_magic_name:"of the Drake"},
        {tier:4, ilvl:36, tier_value:"24 to 29", affix_magic_name:"of the Kiln"},
        {tier:3, ilvl:48, tier_value:"30 to 35", affix_magic_name:"of the Furnace"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Volcano"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Magma"},
        ]},
        "+#% to Lightning Resistance":{poemods:"Base Lightning Dmg Resistance %", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Cloud"},
        {tier:6, ilvl:13, tier_value:"12 to 17", affix_magic_name:"of the Squall"},
        {tier:5, ilvl:25, tier_value:"18 to 23", affix_magic_name:"of the Storm"},
        {tier:4, ilvl:37, tier_value:"24 to 29", affix_magic_name:"of the Thunderhead"},
        {tier:3, ilvl:49, tier_value:"30 to 35", affix_magic_name:"of the Tempest"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Maelstrom"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Lightning"},
        ]},
        "+#% to Chaos Resistance":{poemods:"Base Chaos Dmg Resistance %", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:5, ilvl:16, tier_value:"5 to 10", affix_magic_name:"of the Lost"},
        {tier:4, ilvl:30, tier_value:"11 to 15", affix_magic_name:"of Banishment"},
        {tier:3, ilvl:44, tier_value:"16 to 20", affix_magic_name:"of Eviction"},
        {tier:2, ilvl:56, tier_value:"21 to 25", affix_magic_name:"of Expulsion"},
        {tier:1, ilvl:65, tier_value:"26 to 30", affix_magic_name:"of Exile"},
        ]},
        "#% reduced Attribute Requirements":{poemods:"Local Attribute Requirements -%", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:2, ilvl:36, tier_value:"-18", affix_magic_name:"of the Worthy"},
        {tier:1, ilvl:60, tier_value:"-32", affix_magic_name:"of the Apt"},
        ]},
        "#% increased Stun Recovery":{poemods:"Base Stun Recovery +%", subtype:"Armor / Energy Shield", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"11 to 13", affix_magic_name:"of Thick Skin"},
        {tier:5, ilvl:17, tier_value:"14 to 16", affix_magic_name:"of Stone Skin"},
        {tier:4, ilvl:28, tier_value:"17 to 19", affix_magic_name:"of Iron Skin"},
        {tier:3, ilvl:42, tier_value:"20 to 22", affix_magic_name:"of Steel Skin"},
        {tier:2, ilvl:56, tier_value:"23 to 25", affix_magic_name:"of Adamantite Skin"},
        {tier:1, ilvl:79, tier_value:"26 to 28", affix_magic_name:"of Corundum Skin"},
        ]},
        "Adds #-# Cold Damage":{poemods:"Base Min Added Cold Dmg / Base Max Added Cold Dmg", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:2, tier_value:"1 / 2", affix_magic_name:"Frosted"},
        {tier:4, ilvl:13, tier_value:"3 to 4 / 7 to 8", affix_magic_name:"Chilled"},
        {tier:3, ilvl:21, tier_value:"5 to 7 / 10 to 12", affix_magic_name:"Icy"},
        {tier:2, ilvl:29, tier_value:"6 to 9 / 13 to 16", affix_magic_name:"Frigid"},
        {tier:1, ilvl:37, tier_value:"8 to 11 / 16 to 19", affix_magic_name:"Freezing"},
        ]},
        "Adds #-# Fire Damage":{poemods:"Base Min Added Fire Dmg / Base Max Added Fire Dmg", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:1, tier_value:"1 / 2", affix_magic_name:"Heated"},
        {tier:4, ilvl:12, tier_value:"3 to 5 / 7 to 8", affix_magic_name:"Smoldering"},
        {tier:3, ilvl:20, tier_value:"5 to 7 / 11 to 13", affix_magic_name:"Smoking"},
        {tier:2, ilvl:28, tier_value:"7 to 10 / 15 to 18", affix_magic_name:"Burning"},
        {tier:1, ilvl:36, tier_value:"9 to 12 / 19 to 22", affix_magic_name:"Flaming"},
        ]},
        "Adds #-# Lightning Damage":{poemods:"Base Min Added Lightning Dmg / Base Max Added Lightning Dmg", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:3, tier_value:"1 / 5", affix_magic_name:"Humming"},
        {tier:4, ilvl:13, tier_value:"1 / 14 to 15", affix_magic_name:"Buzzing"},
        {tier:3, ilvl:22, tier_value:"1 to 2 / 22 to 23", affix_magic_name:"Snapping"},
        {tier:2, ilvl:30, tier_value:"1 to 2 / 27 to 28", affix_magic_name:"Crackling"},
        {tier:1, ilvl:38, tier_value:"1 to 3 / 33 to 34", affix_magic_name:"Sparking"},
        ]},
        "Adds #-# Physical Damage":{poemods:"Base Min Added Physical Dmg / Base Max Added Physical Dmg", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:5, ilvl:5, tier_value:"1 / 2", affix_magic_name:"Glinting"},
        {tier:4, ilvl:13, tier_value:"2 to 3 / 4 to 5", affix_magic_name:"Burnished"},
        {tier:3, ilvl:19, tier_value:"3 to 4 / 6 to 7", affix_magic_name:"Polished"},
        {tier:2, ilvl:28, tier_value:"4 to 6 / 9 to 10", affix_magic_name:"Honed"},
        {tier:1, ilvl:35, tier_value:"5 to 7 / 11 to 12", affix_magic_name:"Gleaming"},
        ]},
        "+# to maximum Energy Shield":{poemods:"Local Energy Shield", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:7, ilvl:3, tier_value:"3 to 5", affix_magic_name:"Shining"},
        {tier:6, ilvl:11, tier_value:"6 to 8", affix_magic_name:"Glimmering"},
        {tier:5, ilvl:17, tier_value:"9 to 12", affix_magic_name:"Glittering"},
        {tier:4, ilvl:23, tier_value:"13 to 15", affix_magic_name:"Glowing"},
        {tier:3, ilvl:29, tier_value:"16 to 19", affix_magic_name:"Radiating"},
        {tier:2, ilvl:35, tier_value:"20 to 29", affix_magic_name:"Pulsing"},
        {tier:1, ilvl:43, tier_value:"30 to 48", affix_magic_name:"Seething"},
        ]},
        "undefined":{poemods:"Local Evasion Rating", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:3, ilvl:1, tier_value:"3 to 10", affix_magic_name:"Agile"},
        {tier:2, ilvl:18, tier_value:"11 to 35", affix_magic_name:"Dancer's"},
        {tier:1, ilvl:29, tier_value:"36 to 60", affix_magic_name:"Acrobat's"},
        ]},
        "undefined":{poemods:"Local Evasion And Energy Shield +%", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:6, ilvl:3, tier_value:"11 to 28", affix_magic_name:"Shadowy"},
        {tier:5, ilvl:19, tier_value:"29 to 46", affix_magic_name:"Ethereal"},
        {tier:4, ilvl:30, tier_value:"47 to 64", affix_magic_name:"Unworldly"},
        {tier:3, ilvl:44, tier_value:"65 to 82", affix_magic_name:"Ephemeral"},
        {tier:2, ilvl:60, tier_value:"83 to 100", affix_magic_name:"Evanescent"},
        {tier:1, ilvl:72, tier_value:"100 to 120", affix_magic_name:"Unreal"},
        ]},
        "undefined":{poemods:"Local Evasion And Energy Shield +% / Base Stun Recovery +%", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:6, ilvl:2, tier_value:"6 to 14 / 6 to 7", affix_magic_name:"Mosquito's"},
        {tier:5, ilvl:19, tier_value:"15 to 23 / 8 to 9", affix_magic_name:"Moth's"},
        {tier:4, ilvl:30, tier_value:"24 to 32 / 10 to 11", affix_magic_name:"Butterfly's"},
        {tier:3, ilvl:44, tier_value:"33 to 41 / 12 to 13", affix_magic_name:"Wasp's"},
        {tier:2, ilvl:60, tier_value:"42 to 50 / 14 to 15", affix_magic_name:"Dragonfly's"},
        {tier:1, ilvl:78, tier_value:"51 to 56 / 16 to 17", affix_magic_name:"Hummingbird's"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:2, ilvl:20, tier_value:"8 to 12", affix_magic_name:"Magpie's"},
        {tier:1, ilvl:39, tier_value:"13 to 18", affix_magic_name:"Pirate's"},
        ]},
        "+# to maximum Life":{poemods:"Base Max Life", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:8, ilvl:1, tier_value:"10 to 19", affix_magic_name:"Healthy"},
        {tier:7, ilvl:11, tier_value:"20 to 29", affix_magic_name:"Sanguine"},
        {tier:6, ilvl:18, tier_value:"30 to 39", affix_magic_name:"Stalwart"},
        {tier:5, ilvl:24, tier_value:"40 to 49", affix_magic_name:"Stout"},
        {tier:4, ilvl:30, tier_value:"50 to 59", affix_magic_name:"Robust"},
        {tier:3, ilvl:36, tier_value:"60 to 69", affix_magic_name:"Rotund"},
        {tier:2, ilvl:44, tier_value:"70 to 79", affix_magic_name:"Virile"},
        {tier:1, ilvl:54, tier_value:"80 to 89", affix_magic_name:"Athlete's"},
        ]},
        "#% of Physical Attack Damage Leeched as Life":{poemods:"Life Leech From Physical Dmg %", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Remora's"},
        ]},
        "+# to maximum Mana":{poemods:"Base Max Mana", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:11, ilvl:1, tier_value:"15 to 19", affix_magic_name:"Beryl"},
        {tier:10, ilvl:11, tier_value:"20 to 24", affix_magic_name:"Cobalt"},
        {tier:9, ilvl:17, tier_value:"25 to 29", affix_magic_name:"Azure"},
        {tier:8, ilvl:23, tier_value:"30 to 34", affix_magic_name:"Sapphire"},
        {tier:7, ilvl:29, tier_value:"35 to 39", affix_magic_name:"Cerulean"},
        {tier:6, ilvl:35, tier_value:"40 to 44", affix_magic_name:"Aqua"},
        {tier:5, ilvl:42, tier_value:"45 to 49", affix_magic_name:"Opalescent"},
        {tier:4, ilvl:51, tier_value:"50 to 54", affix_magic_name:"Gentian"},
        {tier:3, ilvl:60, tier_value:"55 to 59", affix_magic_name:"Chalybeous"},
        {tier:2, ilvl:69, tier_value:"60 to 64", affix_magic_name:"Mazarine"},
        {tier:1, ilvl:75, tier_value:"65 to 68", affix_magic_name:"Blue"},
        ]},
        "#% of Physical Attack Damage Leeched as Mana":{poemods:"Mana Leech From Physical Dmg %", subtype:"Evasion / Energy Shield", affix:"p", tiers:[
        {tier:1, ilvl:9, tier_value:"1 to 2", affix_magic_name:"Thirsty"},
        ]},
        "+# to Accuracy Rating":{poemods:"Accuracy Rating", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:9, ilvl:1, tier_value:"5 to 15", affix_magic_name:"of Calm"},
        {tier:8, ilvl:12, tier_value:"16 to 60", affix_magic_name:"of Steadiness"},
        {tier:7, ilvl:20, tier_value:"61 to 100", affix_magic_name:"of Accuracy"},
        {tier:6, ilvl:26, tier_value:"101 to 130", affix_magic_name:"of Precision"},
        {tier:5, ilvl:33, tier_value:"131 to 165", affix_magic_name:"of the Sniper"},
        {tier:4, ilvl:41, tier_value:"166 to 200", affix_magic_name:"of the Marksman"},
        {tier:3, ilvl:50, tier_value:"201 to 250", affix_magic_name:"of the Deadeye"},
        {tier:2, ilvl:63, tier_value:"251 to 320", affix_magic_name:"of the Ranger"},
        {tier:1, ilvl:76, tier_value:"321 to 400", affix_magic_name:"of the Assassin"},
        ]},
        "#% increased Attack Speed":{poemods:"Attack Speed +%", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:4, ilvl:1, tier_value:"5 to 7", affix_magic_name:"of Skill"},
        {tier:3, ilvl:11, tier_value:"8 to 10", affix_magic_name:"of Ease"},
        {tier:2, ilvl:22, tier_value:"11 to 13", affix_magic_name:"of Mastery"},
        {tier:1, ilvl:76, tier_value:"14 to 16", affix_magic_name:"of Grandmastery"},
        ]},
        "+# to Dexterity":{poemods:"Additional Dexterity", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Mongoose"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Lynx"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Fox"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Falcon"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Panther"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Leopard"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Jaguar"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Phantasm"},
        ]},
        "+# to Intelligence":{poemods:"Additional Intelligence", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:8, ilvl:1, tier_value:"8 to 12", affix_magic_name:"of the Pupil"},
        {tier:7, ilvl:11, tier_value:"13 to 17", affix_magic_name:"of the Student"},
        {tier:6, ilvl:22, tier_value:"18 to 22", affix_magic_name:"of the Prodigy"},
        {tier:5, ilvl:33, tier_value:"23 to 27", affix_magic_name:"of the Augur"},
        {tier:4, ilvl:44, tier_value:"28 to 32", affix_magic_name:"of the Philosopher"},
        {tier:3, ilvl:55, tier_value:"33 to 37", affix_magic_name:"of the Sage"},
        {tier:2, ilvl:66, tier_value:"38 to 42", affix_magic_name:"of the Savant"},
        {tier:1, ilvl:74, tier_value:"43 to 50", affix_magic_name:"of the Virtuoso"},
        ]},
        "#% increased Quantity of Items found":{poemods:"Base Item Found Quantity +%", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:4, ilvl:2, tier_value:"4 to 8", affix_magic_name:"of Collecting"},
        {tier:3, ilvl:32, tier_value:"9 to 12", affix_magic_name:"of Gathering"},
        {tier:2, ilvl:55, tier_value:"13 to 16", affix_magic_name:"of Hoarding"},
        {tier:1, ilvl:77, tier_value:"17 to 20", affix_magic_name:"of Amassment"},
        ]},
        "#% increased Rarity of Items found":{poemods:"Base Item Found Rarity +%", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:2, ilvl:3, tier_value:"6 to 10", affix_magic_name:"of Plunder"},
        {tier:1, ilvl:30, tier_value:"11 to 14", affix_magic_name:"of Raiding"},
        ]},
        "+# Life gained for each Ignited Enemy hit by your Attacks":{poemods:"Life Gain Per Target", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:1, ilvl:8, tier_value:"2", affix_magic_name:"of Rejuvenation"},
        ]},
        "+# Life gained on Kill":{poemods:"Life Gained On Enemy Death", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"2 to 4", affix_magic_name:"of Success"},
        {tier:2, ilvl:23, tier_value:"5 to 7", affix_magic_name:"of Victory"},
        {tier:1, ilvl:40, tier_value:"8 to 11", affix_magic_name:"of Triumph"},
        ]},
        "# Life Regenerated per second":{poemods:"Base Life Regeneration Rate Per Second", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"0.7 to 1.1", affix_magic_name:"of the Newt"},
        {tier:5, ilvl:18, tier_value:"1.6 to 2.4", affix_magic_name:"of the Lizard"},
        {tier:4, ilvl:30, tier_value:"2.2 to 3.3", affix_magic_name:"of the Starfish"},
        {tier:3, ilvl:44, tier_value:"2.9 to 4.3", affix_magic_name:"of the Hydra"},
        {tier:2, ilvl:59, tier_value:"3.6 to 5.5", affix_magic_name:"of the Troll"},
        {tier:1, ilvl:78, tier_value:"6.0 to 7.0", affix_magic_name:"of the Phoenix"},
        ]},
        "+# Mana Gained on Kill":{poemods:"Mana Gained On Enemy Death", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:3, ilvl:1, tier_value:"1", affix_magic_name:"of Absorption"},
        {tier:2, ilvl:24, tier_value:"2 to 3", affix_magic_name:"of Osmosis"},
        {tier:1, ilvl:40, tier_value:"4 to 6", affix_magic_name:"of Consumption"},
        ]},
        "+#% to Cold Resistance":{poemods:"Base Cold Dmg Resistance %", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Inuit"},
        {tier:6, ilvl:14, tier_value:"12 to 17", affix_magic_name:"of the Seal"},
        {tier:5, ilvl:26, tier_value:"18 to 23", affix_magic_name:"of the Penguin"},
        {tier:4, ilvl:38, tier_value:"24 to 29", affix_magic_name:"of the Yeti"},
        {tier:3, ilvl:50, tier_value:"30 to 35", affix_magic_name:"of the Walrus"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Polar Bear"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Ice"},
        ]},
        "+#% to Fire Resistance":{poemods:"Base Fire Dmg Resistance %", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Whelpling"},
        {tier:6, ilvl:12, tier_value:"12 to 17", affix_magic_name:"of the Salamander"},
        {tier:5, ilvl:24, tier_value:"18 to 23", affix_magic_name:"of the Drake"},
        {tier:4, ilvl:36, tier_value:"24 to 29", affix_magic_name:"of the Kiln"},
        {tier:3, ilvl:48, tier_value:"30 to 35", affix_magic_name:"of the Furnace"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Volcano"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Magma"},
        ]},
        "+#% to Lightning Resistance":{poemods:"Base Lightning Dmg Resistance %", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:7, ilvl:1, tier_value:"6 to 11", affix_magic_name:"of the Cloud"},
        {tier:6, ilvl:13, tier_value:"12 to 17", affix_magic_name:"of the Squall"},
        {tier:5, ilvl:25, tier_value:"18 to 23", affix_magic_name:"of the Storm"},
        {tier:4, ilvl:37, tier_value:"24 to 29", affix_magic_name:"of the Thunderhead"},
        {tier:3, ilvl:49, tier_value:"30 to 35", affix_magic_name:"of the Tempest"},
        {tier:2, ilvl:60, tier_value:"36 to 41", affix_magic_name:"of the Maelstrom"},
        {tier:1, ilvl:72, tier_value:"42 to 45", affix_magic_name:"of the Lightning"},
        ]},
        "+#% to Chaos Resistance":{poemods:"Base Chaos Dmg Resistance %", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:5, ilvl:16, tier_value:"5 to 10", affix_magic_name:"of the Lost"},
        {tier:4, ilvl:30, tier_value:"11 to 15", affix_magic_name:"of Banishment"},
        {tier:3, ilvl:44, tier_value:"16 to 20", affix_magic_name:"of Eviction"},
        {tier:2, ilvl:56, tier_value:"21 to 25", affix_magic_name:"of Expulsion"},
        {tier:1, ilvl:65, tier_value:"26 to 30", affix_magic_name:"of Exile"},
        ]},
        "#% reduced Attribute Requirements":{poemods:"Local Attribute Requirements -%", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:2, ilvl:36, tier_value:"-18", affix_magic_name:"of the Worthy"},
        {tier:1, ilvl:60, tier_value:"-32", affix_magic_name:"of the Apt"},
        ]},
        "#% increased Stun Recovery":{poemods:"Base Stun Recovery +%", subtype:"Evasion / Energy Shield", affix:"s", tiers:[
        {tier:6, ilvl:1, tier_value:"11 to 13", affix_magic_name:"of Thick Skin"},
        {tier:5, ilvl:17, tier_value:"14 to 16", affix_magic_name:"of Stone Skin"},
        {tier:4, ilvl:28, tier_value:"17 to 19", affix_magic_name:"of Iron Skin"},
        {tier:3, ilvl:42, tier_value:"20 to 22", affix_magic_name:"of Steel Skin"},
        {tier:2, ilvl:56, tier_value:"23 to 25", affix_magic_name:"of Adamantite Skin"},
        {tier:1, ilvl:79, tier_value:"26 to 28", affix_magic_name:"of Corundum Skin"},
        ]},
       } /* gloves_closing curly */
    } /* mod_data closing curly */
  
  

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
            
          log('level req: ' + lvl_req);
          log('strength req: ' + str_req);
          log('dexterity req: ' + dex_req);
          log('intelligence req: ' + int_req);
          
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
            
              log(mod);
            
              var mod_element = this;

              /* poe.trade lists these mods like this:
              // #% increased Flask Life Recovery rate
              // #% increased Flask Life recovery rate
              // so we'll go case-insensitive
               */
              getAffix(type, mod, lvl_req, str_req != null, dex_req != null, int_req != null, function(affix){
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
      
      var param_mod;
		
    
     // log(param_mod);
     // log(param_type);
      var result = '?';
      var mod_data = mods_data[type.toLowerCase()][mod];
      if(mod_data != null) result = mod_data.affix;
      affix_callback(result);

      
       // prop = (prop + "").toLowerCase();
       // for (var p in mods_data) {
      //      if (mod_map.hasOwnProperty(p) && prop == (p + "").toLowerCase()) {
      //          return mods_data[p];
      //      }
       // }
      

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
  
       
  

})();
