// Path of Exile Forgotten Mods - A simple bookmarklet that will augment poe.trade with more info.
	// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
	// PM me in game: ManicCompression

	// List of mods taken from the Serach Form > Explicit Combobox
	// see https://github.com/thirdy/forgotten-mods/blob/master/mods_lister.js which I used to generate these values.
	// Data used: http://pathofexile.gamepedia.com/Item_Affix
	
	var mod_map = {

/* PREFIXES */
"#% increased Armour":{affix:'p', appearsOn:[helmets, gloves, boots, body_armours, amulets]},
"#% increased Armour and Energy Shield":{affix:'p'},
"#% increased Armour and Evasion":{affix:'p'},
"#% increased Armour, Evasion and Energy Shield":{affix:'p'},


"#% increased Elemental Damage with Weapons":{affix:'p'},
"#% increased Evasion Rating":{affix:'p'},

"#% increased Flask Life Recovery rate":{affix:'p'},
"#% increased Flask Mana Recovery rate":{affix:'p'},

"#% increased maximum Energy Shield":{affix:'p'},
"#% increased Movement Speed":{affix:'p'},
"#% increased Physical Damage":{affix:'p'},
"#% increased Projectile Speed":{affix:'s'},

"#% of Physical Attack Damage Leeched as Life":{affix:'p'},

"#% reduced Movement Speed":{affix:'p'},
"+# Life gained for each Ignited Enemy hit by your Attacks":{affix:'s'},

"+# to Armour":{affix:'p'},
"+# to Dexterity":{affix:'s'},
"+# to Evasion Rating":{affix:'p'},

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
"Adds #-# Chaos Damage":{affix:'p'},
"Adds #-# Cold Damage":{affix:'p'},
"Adds #-# Fire Damage":{affix:'p'},
"Adds #-# Lightning Damage":{affix:'p'},
"Adds #-# Physical Damage":{affix:'p'},
"Reflects # Physical Damage to Melee Attackers":{affix:'p'}

/* SUFFIXES */
"+# to Intelligence":{affix:'s'},
"+# Life gained on Kill":{affix:'s'},
"+# Mana Gained on Kill":{affix:'s'},
"+# to Accuracy Rating":{affix:'s'},
"+# to all Attributes":{affix:'s'},
"#% reduced Attribute Requirements":{affix:'s'},
"#% reduced Enemy Stun Threshold":{affix:'s'},
"#% reduced Flask Charges used":{affix:'s'},
"#% reduced Light Radius":{affix:'s'},
"#% increased Quantity of Items found":{affix:'s'},
"#% increased Spell Damage":{affix:'s'},
"#% increased Stun Duration on enemies":{affix:'s'},
"#% increased Stun Duration on Enemies":{affix:'s'},
"#% increased Stun Recovery":{affix:'s'},
"#% increased Global Critical Strike Chance":{affix:'s'},
"#% increased Global Critical Strike Multiplier":{affix:'s'},
"#% increased Light Radius":{affix:'s'},
"#% increased Lightning Damage":{affix:'s'},
"#% increased Mana Regeneration Rate":{affix:'s'},
"#% increased Fire Damage":{affix:'s'},
"#% increased Flask Charges gained":{affix:'s'},
"#% increased Flask effect duration":{affix:'s'},
"#% increased Critical Strike Chance for Spells":{affix:'s'},
"#% increased Attack Speed":{affix:'s'},
"#% increased Cast Speed":{affix:'s'},
"#% increased Cold Damage":{affix:'s'},
"# Life Regenerated per second":{affix:'s'},
"# Mana Regenerated per second":{affix:'s'},
"#% additional Block Chance":{affix:'s'},
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
	};

/* Categories below are based from http://pathofexile.gamepedia.com/Item_Affix */
var ItemCategoryEnum = {
  all: "mod can appear on any item",
  helmets: "helmets",
  gloves: "gloves",
  body_armours: "body armours",
  amulets: "amulets",
  rings: "rings",
  belts: "belts",
  weapon: "weapon of all types",
  two_handed_weapons: "two handed weapons",
  melee_weapons:"melee weapons",
  bows: "bows",
  boots: "boots",
  one_hand_magic_weapon:"one handed magical weapons sceptres, wands, and daggers",
  staff: "staves",
  shields: "shields",
  spirit_shields: "spirit shields",
  quivers: "quivers",
  flasks: "flasks"
};


