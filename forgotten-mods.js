(function(){
	// Path of Exile Forgotten Mods 0.2 - A simple bookmarklet that will augment poe.trade with more info.
	// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
	// PM me in game: ManicCompression
	
	// List of mods taken from the Serach Form > Explicit Combobox
	// see https://github.com/thirdy/forgotten-mods/blob/master/mods_lister.js which I used to generate these values.
	var mod_map = {
	 "# Life Regenerated per second":{affix:'x'},

	"# Mana Regenerated per second":{affix:'x'},
	
	"#% additional Block Chance":{affix:'x'},
	
	"#% additional Block Chance while Dual Wielding":{affix:'x'},
	
	"#% additional chance for slain monsters to drop Scrolls of Wisdom":{affix:'x'},
	
	"#% additional chance for Slain monsters to drop Scrolls of Wisdom":{affix:'x'},
	
	"#% additional Chance to Block while Dual Wielding":{affix:'x'},
	
	"#% additional Chance to Block while Dual Wielding Claws":{affix:'x'},
	
	"#% additional Elemental Resistances during flask effect":{affix:'x'},
	
	"#% chance on Block to create Consecrated Ground":{affix:'x'},
	
	"#% chance on Block to create Desecrated Ground":{affix:'x'},
	
	"#% chance to Blind Enemies on hit":{affix:'x'},
	
	"#% Chance to Block":{affix:'x'},
	
	"#% Chance to Block during flask effect":{affix:'x'},
	
	"#% Chance to Block Spells":{affix:'x'},
	
	"#% Chance to Block Spells during flask effect":{affix:'x'},
	
	"#% chance to Cast Socketed Lightning Spells on Hit":{affix:'x'},
	
	"#% Chance to Cause Monster to Flee on Block":{affix:'x'},
	
	"#% Chance to Cause Monsters to Flee":{affix:'x'},
	
	"#% chance to Cause Monsters to Flee":{affix:'x'},
	
	"#% chance to create a Smoke Cloud when Hit":{affix:'x'},
	
	"#% Chance to Dodge all enemy Attacks":{affix:'x'},
	
	"#% Chance to Dodge Attacks":{affix:'x'},
	
	"#% chance to Dodge Attacks":{affix:'x'},
	
	"#% chance to Dodge Attacks per Frenzy Charge":{affix:'x'},
	
	"#% Chance to Dodge Spell Damage":{affix:'x'},
	
	"#% chance to Dodge Spell Damage":{affix:'x'},
	
	"#% Chance to Dodge Spells":{affix:'x'},
	
	"#% Chance to Freeze":{affix:'x'},
	
	"#% chance to Freeze":{affix:'x'},
	
	"#% Chance to Freeze enemies on hit with Cold Damage":{affix:'x'},
	
	"#% Chance to Freeze, Shock and Ignite":{affix:'x'},
	
	"#% chance to Freeze, Shock and Ignite":{affix:'x'},
	
	"#% Chance to gain a Frenzy Charge on Kill":{affix:'x'},
	
	"#% chance to gain a Frenzy Charge on Kill":{affix:'x'},
	
	"#% Chance to gain a Frenzy Charge when you Kill an enemy":{affix:'x'},
	
	"#% chance to gain a Power Charge if you Knock an enemy Back with Melee Damage":{affix:'x'},
	
	"#% chance to gain a Power Charge if you Knock an Enemy Back with Melee Damage":{affix:'x'},
	
	"#% Chance to gain a Power Charge on Kill":{affix:'x'},
	
	"#% chance to gain a Power Charge on Kill":{affix:'x'},
	
	"#% chance to gain a Power Charge on Throwing a Trap":{affix:'x'},
	
	"#% chance to gain an Endurance Charge when you Block":{affix:'x'},
	
	"#% Chance to Ignite":{affix:'x'},
	
	"#% chance to Ignite":{affix:'x'},
	
	"#% chance to Ignite the enemy on hit with Fire Damage":{affix:'x'},
	
	"#% Chance to Ignite when in Main Hand":{affix:'x'},
	
	"#% chance to Ignite when in Main Hand":{affix:'x'},
	
	"#% chance to Shock":{affix:'x'},
	
	"#% faster start of Energy Shield Recharge":{affix:'x'},
	
	"#% Global chance to Blind enemies on hit":{affix:'x'},
	
	"#% Global chance to Blind Enemies on hit":{affix:'x'},
	
	"#% increased Accuracy Rating":{affix:'x'},
	
	"#% increased Accuracy Rating per Frenzy Charge":{affix:'x'},
	
	"#% increased Amount Recovered":{affix:'x'},
	
	"#% increased Area Damage":{affix:'x'},
	
	"#% increased Area of Effect Radius per 20 Intelligence":{affix:'x'},
	
	"#% increased Armour":{affix:'x'},
	
	"#% increased Armour and Energy Shield":{affix:'x'},
	
	"#% increased Armour and Evasion":{affix:'x'},
	
	"#% increased Armour during flask effect":{affix:'x'},
	
	"#% increased Armour per # Strength when in Off Hand":{affix:'x'},
	
	"#% increased Armour while not Ignited, Frozen or Shocked":{affix:'x'},
	
	"#% increased Armour, Evasion and Energy Shield":{affix:'x'},
	
	"#% increased Attack Speed":{affix:'x'},
	
	"#% increased Attack Speed per 10 Dexterity":{affix:'x'},
	
	"#% increased Attack Speed per Frenzy Charge":{affix:'x'},
	
	"#% increased Attack Speed when on Full Life":{affix:'x'},
	
	"#% increased Attack Speed while Ignited":{affix:'x'},
	
	"#% increased Block and Stun Recovery":{affix:'x'},
	
	"#% increased Burning Damage":{affix:'x'},
	
	"#% increased Cast Speed":{affix:'x'},
	
	"#% increased Cast Speed while Ignited":{affix:'x'},
	
	"#% increased Chaos Damage":{affix:'x'},
	
	"#% increased Chaos Damage per Level":{affix:'x'},
	
	"#% increased Character Size":{affix:'x'},
	
	"#% increased Charge Recovery":{affix:'x'},
	
	"#% increased Charges used":{affix:'x'},
	
	"#% increased Chill Duration on enemies":{affix:'x'},
	
	"#% increased Chill Duration on Enemies":{affix:'x'},
	
	"#% increased Chill Duration on enemies when in Off Hand":{affix:'x'},
	
	"#% increased Chill Duration on Enemies when in Off Hand":{affix:'x'},
	
	"#% increased Cold Damage":{affix:'x'},
	
	"#% increased Critical Strike Chance":{affix:'x'},
	
	"#% increased Critical Strike Chance for Spells":{affix:'x'},
	
	"#% increased Critical Strike Multiplier with Melee Weapons":{affix:'x'},
	
	"#% increased Curse Duration":{affix:'x'},
	
	"#% increased Damage":{affix:'x'},
	
	"#% increased Damage against Blinded Enemies":{affix:'x'},
	
	"#% increased Damage against Enemies on Low Life per Frenzy Charge":{affix:'x'},
	
	"#% increased Damage against Ignited enemies":{affix:'x'},
	
	"#% increased Damage against Ignited Enemies":{affix:'x'},
	
	"#% increased Damage against Rare monsters":{affix:'x'},
	
	"#% increased Damage over Time":{affix:'x'},
	
	"#% increased Damage per # Strength when in Main Hand":{affix:'x'},
	
	"#% increased Damage per Freeze, Shock and Ignite on enemy":{affix:'x'},
	
	"#% increased Damage per Freeze, Shock and Ignite on Enemy":{affix:'x'},
	
	"#% increased Damage taken":{affix:'x'},
	
	"#% increased Damage taken per Frenzy Charge":{affix:'x'},
	
	"#% increased Damage when on Low Life":{affix:'x'},
	
	"#% increased Damage while Ignited":{affix:'x'},
	
	"#% increased Damage while Shocked":{affix:'x'},
	
	"#% increased Dexterity":{affix:'x'},
	
	"#% increased Duration of Curses on you":{affix:'x'},
	
	"#% increased Duration of Shrine Effects on you":{affix:'x'},
	
	"#% increased effect of Auras you Cast":{affix:'x'},
	
	"#% increased Effect of Shrine Buffs on you":{affix:'x'},
	
	"#% increased Elemental Damage":{affix:'x'},
	
	"#% increased Elemental Damage per Level":{affix:'x'},
	
	"#% increased Elemental Damage with Weapons":{affix:'p'},
	
	"#% increased Elemental Damage with Weapons during flask effect":{affix:'x'},
	
	"#% increased Elemental Resistances while on Low Life":{affix:'x'},
	
	"#% increased Energy Shield":{affix:'x'},
	
	"#% increased Energy Shield Cooldown Recovery":{affix:'x'},
	
	"#% increased Evasion and Energy Shield":{affix:'x'},
	
	"#% increased Evasion Rating":{affix:'x'},
	
	"#% increased Evasion Rating during flask effect":{affix:'x'},
	
	"#% increased Experience gain":{affix:'x'},
	
	"#% increased Fire Damage":{affix:'x'},
	
	"#% increased Fire Damage taken":{affix:'x'},
	
	"#% increased Fire Resistance while on Low Life":{affix:'x'},
	
	"#% increased Fishing Line Strength":{affix:'x'},
	
	"#% increased Fishing Range":{affix:'x'},
	
	"#% increased Flask Charges gained":{affix:'x'},
	
	"#% increased Flask effect duration":{affix:'x'},
	
	"#% increased Flask Life recovery rate":{affix:'p'},
	
	"#% increased Flask Life Recovery rate":{affix:'p'},
	
	"#% increased Flask Mana recovery rate":{affix:'p'},
	
	"#% increased Flask Mana Recovery rate":{affix:'p'},
	
	"#% increased Global Attack Speed per Green Socket":{affix:'x'},
	
	"#% increased Global Critical Strike Chance":{affix:'x'},
	
	"#% increased Global Critical Strike Chance per Level":{affix:'x'},
	
	"#% increased Global Critical Strike Multiplier":{affix:'x'},
	
	"#% increased Global Defences":{affix:'x'},
	
	"#% increased Ignite Duration on enemies":{affix:'x'},
	
	"#% increased Ignite Duration on Enemies":{affix:'x'},
	
	"#% increased Ignite Duration on You":{affix:'x'},
	
	"#% increased Intelligence for each Unique Item you have equipped":{affix:'x'},
	
	"#% increased Intelligence Requirement":{affix:'x'},
	
	"#% increased Life Leech rate":{affix:'x'},
	
	"#% increased Life Recovered":{affix:'x'},
	
	"#% increased Light Radius":{affix:'x'},
	
	"#% increased Light Radius during flask effect":{affix:'x'},
	
	"#% increased Lightning Damage":{affix:'x'},
	
	"#% increased Lightning Damage per Frenzy Charge":{affix:'x'},
	
	"#% increased Lightning Damage with Weapons":{affix:'x'},
	
	"#% increased Mana Cost of Skills":{affix:'x'},
	
	"#% increased Mana Recovery from Flasks":{affix:'x'},
	
	"#% increased Mana Regeneration Rate":{affix:'x'},
	
	"#% increased maximum Energy Shield":{affix:'p'},
	
	"#% increased maximum Life":{affix:'x'},
	
	"#% increased maximum Mana":{affix:'x'},
	
	"#% increased Melee Critical Strike Multiplier":{affix:'x'},
	
	"#% increased Melee Damage":{affix:'x'},
	
	"#% increased Melee Damage when on Full Life":{affix:'x'},
	
	"#% increased Mine Damage":{affix:'x'},
	
	"#% increased Monster Attack Speed":{affix:'x'},
	
	"#% increased Monster Cast Speed":{affix:'x'},
	
	"#% increased Monster Damage":{affix:'x'},
	
	"#% increased Monster Life":{affix:'x'},
	
	"#% increased Monster Movement Speed":{affix:'x'},
	
	"#% increased Movement Speed":{affix:'x'},
	
	"#% increased Movement Speed during flask effect":{affix:'x'},
	
	"#% increased Movement Speed per # Evasion Rating":{affix:'x'},
	
	"#% increased Movement Speed when on Full Energy Shield":{affix:'x'},
	
	"#% increased Movement Speed when on Full Life":{affix:'x'},
	
	"#% increased Movement Speed when on Low Life":{affix:'x'},
	
	"#% increased Movement Speed while Shocked":{affix:'x'},
	
	"#% increased Physical Damage":{affix:'x'},
	
	"#% increased Physical Damage taken":{affix:'x'},
	
	"#% increased Physical Damage taken from Attacks":{affix:'x'},
	
	"#% increased Physical Damage with Ranged Weapons":{affix:'x'},
	
	"#% increased Physical Damage with Weapons per Red Socket":{affix:'x'},
	
	"#% increased Physical Weapon Damage per 10 Strength":{affix:'x'},
	
	"#% increased Projectile Damage":{affix:'x'},
	
	"#% increased Projectile Damage per Power Charge":{affix:'x'},
	
	"#% increased Projectile Speed":{affix:'x'},
	
	"#% increased Projectile Speed per Frenzy Charge":{affix:'x'},
	
	"#% increased Quantity of Fish Caught":{affix:'x'},
	
	"#% increased Quantity of Fish found":{affix:'x'},
	
	"#% increased Quantity of Items Dropped by Slain Frozen enemies":{affix:'x'},
	
	"#% increased Quantity of Items Dropped by Slain Frozen Enemies":{affix:'x'},
	
	"#% increased Quantity of Items found":{affix:'x'},
	
	"#% increased Quantity of Items found during flask effect":{affix:'x'},
	
	"#% increased Radius of Area Skills":{affix:'x'},
	
	"#% increased Radius of Auras":{affix:'x'},
	
	"#% increased Radius of Curses":{affix:'x'},
	
	"#% increased Rarity of Fish Caught":{affix:'x'},
	
	"#% increased Rarity of Fish found":{affix:'x'},
	
	"#% increased Rarity of Items Dropped by enemies killed with a Critical Strike":{affix:'x'},
	
	"#% increased Rarity of Items Dropped by Enemies killed with a Critical Strike":{affix:'x'},
	
	"#% increased Rarity of Items Dropped by Slain Shocked enemies":{affix:'x'},
	
	"#% increased Rarity of Items Dropped by Slain Shocked Enemies":{affix:'x'},
	
	"#% increased Rarity of Items found":{affix:'x'},
	
	"#% increased Rarity of Items found during flask effect":{affix:'x'},
	
	"#% increased Rarity of Items found in this Area":{affix:'x'},
	
	"#% increased Rarity of Items found in this Map":{affix:'x'},
	
	"#% increased Rarity of Items found when on Low Life":{affix:'x'},
	
	"#% increased Recovery Speed":{affix:'x'},
	
	"#% increased Shock Duration on Enemies":{affix:'x'},
	
	"#% increased Shock Duration on You":{affix:'x'},
	
	"#% increased Skeleton Duration":{affix:'x'},
	
	"#% increased Spell Damage":{affix:'x'},
	
	"#% increased Spell Damage per 5% Block Chance":{affix:'x'},
	
	"#% increased Spell Damage per Power Charge":{affix:'x'},
	
	"#% increased Spell Damage taken when on Low Mana":{affix:'x'},
	
	"#% increased Strength":{affix:'x'},
	
	"#% increased Strength Requirement":{affix:'x'},
	
	"#% increased Stun Duration on enemies":{affix:'s'},
	
	"#% increased Stun Duration on Enemies":{affix:'s'},
	
	"#% increased Stun Recovery":{affix:'s'},
	
	"#% increased Stun Recovery during flask effect":{affix:'x'},
	
	"#% increased Totem Life":{affix:'x'},
	
	"#% increased Trap Damage":{affix:'x'},
	
	"#% increased Trap Throwing Speed":{affix:'x'},
	
	"#% increased Zombie Resistances":{affix:'x'},
	
	"#% increased Zombie Size":{affix:'x'},
	
	"#% less Critical Strike Chance":{affix:'x'},
	
	"#% less Weapon Damage":{affix:'x'},
	
	"#% more Magic Monsters":{affix:'x'},
	
	"#% more Rare Monsters":{affix:'x'},
	
	"#% more Unarmed Physical Damage":{affix:'x'},
	
	"#% of Block Chance applied to Spells":{affix:'x'},
	
	"#% of Block Chance applied to Spells when on Low Life":{affix:'x'},
	
	"#% of Chaos Damage Leeched as Life during flask effect":{affix:'x'},
	
	"#% of Cold Damage Converted to Fire Damage":{affix:'x'},
	
	"#% of Cold Damage Leeched as Life":{affix:'x'},
	
	"#% of Damage against Frozen enemies Leeched as Life":{affix:'x'},
	
	"#% of Damage against Frozen Enemies Leeched as Life":{affix:'x'},
	
	"#% of Damage against Shocked enemies Leeched as Mana":{affix:'x'},
	
	"#% of Damage against Shocked Enemies Leeched as Mana":{affix:'x'},
	
	"#% of Damage Leeched as Life on Critical Strike":{affix:'x'},
	
	"#% of Damage taken Gained as Mana when Hit":{affix:'x'},
	
	"#% of Elemental Damage Leeched as Life":{affix:'x'},
	
	"#% of Elemental Damage taken as Chaos Damage":{affix:'x'},
	
	"#% of Fire Damage Converted to Chaos Damage":{affix:'x'},
	
	"#% of Fire Damage Leeched as Life":{affix:'x'},
	
	"#% of Life Regenerated per Second per Frenzy Charge":{affix:'x'},
	
	"#% of Life Regenerated per Second while on Low Life":{affix:'x'},
	
	"#% of Lightning Damage Leeched as Life":{affix:'x'},
	
	"#% of maximum Life taken as Chaos Damage per Second":{affix:'x'},
	
	"#% of Melee Physical Damage taken reflected to Attacker":{affix:'x'},
	
	"#% of Physical Attack Damage Leeched as Life":{affix:'x'},
	
	"#% of Physical Attack Damage Leeched as Life during flask effect":{affix:'x'},
	
	"#% of Physical Attack Damage Leeched as Mana":{affix:'x'},
	
	"#% of Physical Attack Damage Leeched as Mana during flask effect":{affix:'x'},
	
	"#% of Physical Attack Damage Leeched as Mana per Blue Socket":{affix:'x'},
	
	"#% of Physical Attack Damage Leeched as Mana per Power Charge":{affix:'x'},
	
	"#% of Physical Damage Converted to Chaos Damage":{affix:'x'},
	
	"#% of Physical Damage Converted to Cold Damage":{affix:'x'},
	
	"#% of Physical Damage Converted to Fire Damage":{affix:'x'},
	
	"#% of Physical Damage Leeched as Life":{affix:'x'},
	
	"#% of Physical Damage taken as Chaos Damage":{affix:'x'},
	
	"#% of Physical Damage taken as Fire Damage":{affix:'x'},
	
	"#% of Physical Damage taken as Lightning Damage":{affix:'x'},
	
	"#% reduced Amount Recovered":{affix:'x'},
	
	"#% reduced Attack Speed":{affix:'x'},
	
	"#% reduced Attribute Requirements":{affix:'x'},
	
	"#% reduced Cast Speed":{affix:'x'},
	
	"#% reduced Chance to Block Attacks and Spells":{affix:'x'},
	
	"#% reduced Chill Duration on You":{affix:'x'},
	
	"#% reduced Effect of Chill on You":{affix:'x'},
	
	"#% reduced Effect of Curses on You":{affix:'x'},
	
	"#% reduced Enemy Stun Threshold":{affix:'s'},
	
	"#% reduced Enemy Stun Threshold with this Weapon":{affix:'x'},
	
	"#% reduced Energy Shield Recharge Rate":{affix:'x'},
	
	"#% reduced Experience gain":{affix:'x'},
	
	"#% reduced Fishing Pool Consumption":{affix:'x'},
	
	"#% reduced Flask Charges used":{affix:'x'},
	
	"#% reduced Freeze Duration on You":{affix:'x'},
	
	"#% reduced Frenzy Charge Duration":{affix:'x'},
	
	"#% reduced Frenzy Charge Duration per Frenzy Charge":{affix:'x'},
	
	"#% reduced Global Critical Strike Multiplier":{affix:'x'},
	
	"#% reduced Light Radius":{affix:'x'},
	
	"#% reduced Mana Cost of Skills when on Low Life":{affix:'x'},
	
	"#% reduced Mana Regeneration Rate":{affix:'x'},
	
	"#% reduced maximum Energy Shield":{affix:'x'},
	
	"#% reduced maximum Life":{affix:'x'},
	
	"#% reduced maximum Mana":{affix:'x'},
	
	"#% reduced Movement Speed":{affix:'x'},
	
	"#% reduced Movement Speed when on Low Life":{affix:'x'},
	
	"#% reduced Physical Damage":{affix:'x'},
	
	"#% reduced Projectile Speed":{affix:'x'},
	
	"#% reduced Quantity of Fish Caught":{affix:'x'},
	
	"#% reduced Radius of Curses":{affix:'x'},
	
	"#% reduced Rarity of Items found":{affix:'x'},
	
	"#% reduced Recovery Speed":{affix:'x'},
	
	"#% reduced Trap Duration":{affix:'x'},
	
	"#% slower start of Energy Shield Recharge":{affix:'x'},
	
	"+# Energy Shield gained on Kill":{affix:'x'},
	
	"+# Energy Shield gained on Kill per Level":{affix:'x'},
	
	"+# Energy Shield gained when you Kill an enemy":{affix:'x'},
	
	"+# Extra Charges":{affix:'x'},
	
	"+# Intelligence Requirement":{affix:'x'},
	
	"+# Life gained for each enemy hit by your Attacks":{affix:'x'},
	
	"+# Life gained for each Enemy hit by your Attacks":{affix:'x'},
	
	"+# Life gained for each enemy hit by your Spells":{affix:'x'},
	
	"+# Life gained for each Enemy hit by your Spells":{affix:'x'},
	
	"+# Life gained for each Ignited Enemy hit by your Attacks":{affix:'x'},
	
	"+# Life gained on Kill":{affix:'x'},
	
	"+# Life gained on Kill per Frenzy Charge":{affix:'x'},
	
	"+# Life gained on Kill per Level":{affix:'x'},
	
	"+# Life gained when you Block":{affix:'x'},
	
	"+# Life gained when you Kill an enemy":{affix:'x'},
	
	"+# Mana gained for each Enemy hit by your Attacks":{affix:'x'},
	
	"+# Mana Gained on Kill":{affix:'x'},
	
	"+# Mana gained on Kill per Level":{affix:'x'},
	
	"+# Mana gained when you Block":{affix:'x'},
	
	"+# Mana Gained when you Kill an enemy":{affix:'x'},
	
	"+# Strength Requirement":{affix:'x'},
	
	"+# to Accuracy Rating":{affix:'x'},
	
	"+# to all Attributes":{affix:'x'},
	
	"+# to Armour":{affix:'p'},
	
	"+# to Armour while Frozen":{affix:'x'},
	
	"+# to Dexterity":{affix:'x'},
	
	"+# to Evasion Rating":{affix:'x'},
	
	"+# to Intelligence":{affix:'x'},
	
	"+# to Level of Active Skill Gems in this item":{affix:'x'},
	
	"+# to Level of Active Socketed Skill Gems":{affix:'x'},
	
	"+# to Level of Curse Gems in this item":{affix:'x'},
	
	"+# to Level of Socketed Aura Gems":{affix:'x'},
	
	"+# to Level of Socketed Bow Gems":{affix:'x'},
	
	"+# to Level of Socketed Cold Gems":{affix:'x'},
	
	"+# to Level of Socketed Curse Gems":{affix:'x'},
	
	"+# to Level of Socketed Elemental Gems":{affix:'x'},
	
	"+# to Level of Socketed Fire Gems":{affix:'x'},
	
	"+# to Level of Socketed Gems":{affix:'x'},
	
	"+# to Level of Socketed Lightning Gems":{affix:'x'},
	
	"+# to Level of Socketed Melee Gems":{affix:'x'},
	
	"+# to Level of Socketed Minion Gems":{affix:'x'},
	
	"+# to Level of Socketed Movement Gems":{affix:'x'},
	
	"+# to Level of Socketed Spell Gems":{affix:'x'},
	
	"+# to Level of Socketed Strength Gems":{affix:'x'},
	
	"+# to Level of Socketed Support Gems":{affix:'x'},
	
	"+# to Level of Socketed Vaal Gems":{affix:'x'},
	
	"+# to Level of Support Gems in this item":{affix:'x'},
	
	"+# to maximum Energy Shield":{affix:'x'},
	
	"+# to maximum Life":{affix:'p'},
	
	"+# to maximum Mana":{affix:'x'},
	
	"+# to maximum number of Skeletons":{affix:'x'},
	
	"+# to maximum number of Spectres":{affix:'x'},
	
	"+# to maximum number of Zombies":{affix:'x'},
	
	"+# to Melee Weapon and Unarmed range":{affix:'x'},
	
	"+# to Melee Weapon Range per White Socket":{affix:'x'},
	
	"+# to Strength":{affix:'s'},
	
	"+# to Weapon range":{affix:'x'},
	
	"+# to Zombie maximum Life":{affix:'x'},
	
	"+#% chance to be Ignited":{affix:'x'},
	
	"+#% Chaos Resistance when on Low Life":{affix:'x'},
	
	"+#% Monster Cold Resistance":{affix:'s'},
	
	"+#% Monster Fire Resistance":{affix:'s'},
	
	"+#% Monster Lightning Resistance":{affix:'s'},
	
	"+#% Monster pack size":{affix:'x'},
	
	"+#% Monster Physical Damage Reduction":{affix:'x'},
	
	"+#% Monster Physical Resistance":{affix:'x'},
	
	"+#% to all Elemental Resistances":{affix:'x'},
	
	"+#% to all maximum Elemental Resistances during flask effect":{affix:'x'},
	
	"+#% to all maximum Resistances":{affix:'x'},
	
	"+#% to Chaos Resistance":{affix:'x'},
	
	"+#% to Cold Resistance":{affix:'x'},
	
	"+#% to Cold Resistance when Socketed with a Green Gem":{affix:'x'},
	
	"+#% to Fire and Cold Resistances":{affix:'x'},
	
	"+#% to Fire and Lightning Resistances@":{affix:'x'},
	
	"+#% to Fire Resistance":{affix:'x'},
	
	"+#% to Fire Resistance when Socketed with a Red Gem":{affix:'x'},
	
	"+#% to Lightning Resistance":{affix:'x'},
	
	"+#% to Lightning Resistance when Socketed with a Blue Gem":{affix:'x'},
	
	"+#% to maximum Block Chance":{affix:'x'},
	
	"+#% to maximum Cold Resistance":{affix:'x'},
	
	"+#% to maximum Fire Resistance":{affix:'x'},
	
	"+#% to Quality of Socketed Support Gems":{affix:'x'},
	
	"+#% to Quality of Support Gems in this item":{affix:'x'},
	
	"+1 maximum Endurance Charge":{affix:'x'},
	
	"+1 maximum Frenzy Charge":{affix:'x'},
	
	"+1 maximum Power Charge":{affix:'x'},
	
	"+1 to Maximum number of Spectres":{affix:'x'},
	
	"+1 to Maximum number of Zombies":{affix:'x'},
	
	"+15 Mana gained for each enemy hit by your Attacks":{affix:'x'},
	
	"+2 to Maximum number of Skeletons":{affix:'x'},
	
	"+25% additional Block Chance against Projectiles":{affix:'x'},
	
	"+5% to all maximum Resistances":{affix:'x'},
	
	"+500 to Zombie maximum Life":{affix:'x'},
	
	"-# Chaos Damage taken":{affix:'x'},
	
	"-# Physical Damage taken from Attacks":{affix:'x'},
	
	"-# Physical Damage taken from Projectile Attacks":{affix:'x'},
	
	"-# Physical Damage taken when hit by Animals":{affix:'x'},
	
	"-# to Mana Cost of Skills":{affix:'x'},
	
	"-#% maximum Player Resistances":{affix:'x'},
	
	"-#% to all Elemental Resistances":{affix:'x'},
	
	"-#% to all maximum Resistances":{affix:'x'},
	
	"-#% to Cold Resistance":{affix:'x'},
	
	"-#% to Fire Resistance":{affix:'x'},
	
	"-#% to Lightning Resistance":{affix:'x'},
	
	"-10 Physical Damage taken from Ranged Attacks":{affix:'x'},
	
	"-100 to Accuracy Rating":{affix:'x'},
	
	"-20% to all Elemental Resistances":{affix:'x'},
	
	"-25 Physical Damage taken from Ranged Attacks":{affix:'x'},
	
	"1% increased Attack Damage per 450 Evasion Rating":{affix:'x'},
	
	"10% additional Block Chance while Dual Wielding Claws":{affix:'x'},
	
	"10% chance to Blind enemies on hit":{affix:'x'},
	
	"10% chance to gain an Endurance Charge when you Block":{affix:'x'},
	
	"10% Chance to Shock":{affix:'x'},
	
	"10% increased Effect of Auras on You":{affix:'x'},
	
	"10% increased Effect of Auras on your Minions":{affix:'x'},
	
	"10% increased Energy Shield Cooldown Recovery":{affix:'x'},
	
	"10% increased Radius of Area Skills":{affix:'x'},
	
	"10% reduced Character Size":{affix:'x'},
	
	"100% increased Accuracy Rating when on Low Life":{affix:'x'},
	
	"100% increased Claw Physical Damage when on Low Life":{affix:'x'},
	
	"100% increased Recovery when on Low Life":{affix:'x'},
	
	"100% increased Shock Duration on enemies":{affix:'x'},
	
	"100% More Bow Damage at Close Range":{affix:'x'},
	
	"100% of Lightning Damage Converted to Chaos Damage":{affix:'x'},
	
	"135% increased Recovery Speed":{affix:'x'},
	
	"15% Block Chance":{affix:'x'},
	
	"15% increased Skill Effect Duration":{affix:'x'},
	
	"2% increased Movement Speed per Frenzy Charge":{affix:'x'},
	
	"20% reduced Strength Requirement":{affix:'x'},
	
	"200% increased Armour against Projectiles":{affix:'x'},
	
	"25% chance to Avoid being Chilled":{affix:'x'},
	
	"25% increased Attack Speed when on Low Life":{affix:'x'},
	
	"25% increased Chill Duration on enemies":{affix:'x'},
	
	"25% increased Light Radius":{affix:'x'},
	
	"25% increased Strength Requirement":{affix:'x'},
	
	"25% increased Totem Life":{affix:'x'},
	
	"25% reduced Enemy Stun Threshold with this Weapon":{affix:'x'},
	
	"3% reduced Attack and Cast Speed per Frenzy Charge":{affix:'x'},
	
	"30% increased Movement Speed for 9 seconds on Throwing a Trap":{affix:'x'},
	
	"30% of Melee Damage taken reflected to Attacker":{affix:'x'},
	
	"30% of Melee Physical Damage taken reflected to Attacker":{affix:'x'},
	
	"30% reduced Damage":{affix:'x'},
	
	"30% reduced Endurance Charge Duration":{affix:'x'},
	
	"30% reduced Power Charge Duration":{affix:'x'},
	
	"33% reduced Recovery Speed":{affix:'x'},
	
	"5% chance to Curse Enemies with Enfeeble on Hit":{affix:'x'},
	
	"5% increased Movement Speed per Frenzy Charge":{affix:'x'},
	
	"50% chance to Avoid being Chilled":{affix:'x'},
	
	"50% chance to Avoid being Frozen":{affix:'x'},
	
	"50% increased Amount Recovered":{affix:'x'},
	
	"50% increased Global Evasion Rating when on Low Life":{affix:'x'},
	
	"50% increased Recovery Speed":{affix:'x'},
	
	"50% of Recovery applied Instantly":{affix:'x'},
	
	"50% reduced Damage when on Low Life":{affix:'x'},
	
	"50% reduced Effect of Curses on You":{affix:'x'},
	
	"50% reduced Energy Shield Cooldown Recovery":{affix:'x'},
	
	"50% reduced number of Zombies allowed":{affix:'x'},
	
	"60% increased Life Recovered":{affix:'x'},
	
	"60% increased Mana Recovered":{affix:'x'},
	
	"60% increased Melee Damage when on Full Life":{affix:'x'},
	
	"8% reduced Mana Reserved":{affix:'x'},
	
	"80% reduced Spell Damage":{affix:'x'},
	
	"Acrobatics":{affix:'x'},
	
	"Adds #% Life Leech to Physical Attack Damage during flask effect":{affix:'x'},
	
	"Adds #% Mana Leech to Physical Attack Damage during flask effect":{affix:'x'},
	
	"Adds #-# Chaos Damage":{affix:'x'},
	
	"Adds #-# Chaos Damage in Off Hand":{affix:'x'},
	
	"Adds #-# Chaos Damage to Spells":{affix:'x'},
	
	"Adds #-# Cold Damage":{affix:'x'},
	
	"Adds #-# Cold Damage in Off Hand":{affix:'x'},
	
	"Adds #-# Fire Damage":{affix:'x'},
	
	"Adds #-# Fire Damage against Ignited Enemies":{affix:'x'},
	
	"Adds #-# Fire Damage in Main Hand":{affix:'x'},
	
	"Adds #-# Lightning Damage":{affix:'x'},
	
	"Adds #-# Physical Damage":{affix:'x'},
	
	"Adds #-# Physical Damage against Frozen Enemies":{affix:'x'},
	
	"Adds #-# Physical Damage to attacks with Bows":{affix:'x'},
	
	"Adds an additional Arrow":{affix:'x'},
	
	"Adds Knockback to Melee Attacks during flask effect":{affix:'x'},
	
	"All Sockets are White":{affix:'x'},
	
	"Applies level # Elemental Weakness on Blocking a Spell":{affix:'x'},
	
	"Applies level # Punishment on Blocking a Melee Attack":{affix:'x'},
	
	"Applies level # Temporal Chains on Blocking a Projectile Attack":{affix:'x'},
	
	"Area becomes fatal after some time":{affix:'x'},
	
	"Area contains a Large Chest":{affix:'x'},
	
	"Area contains many Totems":{affix:'x'},
	
	"Area contains no monsters":{affix:'x'},
	
	"Area contains two Unique Bosses":{affix:'x'},
	
	"Area has # seconds between monster waves":{affix:'x'},
	
	"Area has # waves of monsters":{affix:'x'},
	
	"Area has increased monster variety":{affix:'x'},
	
	"Area has patches of burning ground":{affix:'x'},
	
	"Area has patches of chilled ground":{affix:'x'},
	
	"Area has patches of desecrated ground":{affix:'x'},
	
	"Area has patches of shocking ground":{affix:'x'},
	
	"Area is #% larger":{affix:'x'},
	
	"Area is a large Maze":{affix:'x'},
	
	"Area is a Maze":{affix:'x'},
	
	"Area is inhabited by # additional Invasion Boss":{affix:'x'},
	
	"Area is inhabited by # additional Rogue Exiles":{affix:'x'},
	
	"Area is inhabited by Animals":{affix:'x'},
	
	"Area is inhabited by Bandits":{affix:'x'},
	
	"Area is inhabited by Demons":{affix:'x'},
	
	"Area is inhabited by Goatmen":{affix:'x'},
	
	"Area is inhabited by Humanoids":{affix:'x'},
	
	"Area is inhabited by ranged monsters":{affix:'x'},
	
	"Area is inhabited by Sea Witches and their Spawn":{affix:'x'},
	
	"Area is inhabited by Skeletons":{affix:'x'},
	
	"Area is inhabited by Undead":{affix:'x'},
	
	"Arrows always Pierce":{affix:'x'},
	
	"Attack Projectiles Return to You after hitting targets@":{affix:'x'},
	
	"Attacks with this Weapon have #% increased Elemental Damage":{affix:'x'},
	
	"Blood Magic":{affix:'x'},
	
	"Bow Knockback at Close Range":{affix:'x'},
	
	"Can have multiple Crafted Mods@":{affix:'x'},
	
	"Can summon up to 1 additional totem":{affix:'x'},
	
	"Can't use Chest armour":{affix:'x'},
	
	"Can't use other Rings":{affix:'x'},
	
	"Cannot be Blinded":{affix:'x'},
	
	"Cannot be Chilled":{affix:'x'},
	
	"Cannot be Frozen":{affix:'x'},
	
	"Cannot be Ignited":{affix:'x'},
	
	"Cannot be Ignited while on Low Life":{affix:'x'},
	
	"Cannot be Knocked Back":{affix:'x'},
	
	"Cannot be Shocked":{affix:'x'},
	
	"Cannot be Stunned":{affix:'x'},
	
	"Cannot be Stunned when on Low Life":{affix:'x'},
	
	"Cannot be used with Chaos Inoculation":{affix:'x'},
	
	"Cannot Block Attacks":{affix:'x'},
	
	"Cannot Evade enemy Attacks":{affix:'x'},
	
	"Cannot Evade Enemy Attacks":{affix:'x'},
	
	"Cannot Leech":{affix:'x'},
	
	"Cannot Leech Mana":{affix:'x'},
	
	"Cannot Leech when on Low Life":{affix:'x'},
	
	"Causes Bleeding on Hit":{affix:'x'},
	
	"Chaos Damage does not bypass Energy Shield":{affix:'x'},
	
	"Chests have #% increased Item Rarity":{affix:'x'},
	
	"Chill and Freeze duration on you is based on #% of Energy Shield":{affix:'x'},
	
	"Conduit":{affix:'x'},
	
	"Counts as Dual Wielding":{affix:'x'},
	
	"Creates a Smoke Cloud on Rampage":{affix:'x'},
	
	"Creates Consecrated Ground on Critical Strike":{affix:'x'},
	
	"Culling Strike":{affix:'x'},
	
	"Culling Strike against Burning Enemies":{affix:'x'},
	
	"Curse Enemies with level # Vulnerability on Block":{affix:'x'},
	
	"Curse Enemies with Temporal Chains on Hit":{affix:'x'},
	
	"Curse Reflection":{affix:'x'},
	
	"Curses have #% reduced effect on Monsters":{affix:'x'},
	
	"Curses in this item are reflected back to you":{affix:'x'},
	
	"Curses on Slain enemies are transferred to a nearby enemy":{affix:'x'},
	
	"Curses on Slain Enemies are transferred to a nearby Enemy":{affix:'x'},
	
	"Damage Penetrates #% Lightning Resistance":{affix:'x'},
	
	"Deals # Chaos Damage per second to nearby Enemies":{affix:'x'},
	
	"Deals 450 Chaos Damage per second to nearby enemies":{affix:'x'},
	
	"Dispels Burning":{affix:'x'},
	
	"Dispels Elemental Status Ailments on Rampage":{affix:'x'},
	
	"Dispels Frozen and Chilled":{affix:'x'},
	
	"Dispels Shocked":{affix:'x'},
	
	"Elemental Resistances are Zero":{affix:'x'},
	
	"Enemies can have 1 additional Curse":{affix:'x'},
	
	"Enemies Cannot Leech Life From You":{affix:'x'},
	
	"Enemies Cannot Leech Mana From You":{affix:'x'},
	
	"Enemies Chilled by you take #% increased Burning Damage":{affix:'x'},
	
	"Enemies Frozen by you take 20% increased Damage":{affix:'x'},
	
	"Enemies killed by Zombies explode dealing Fire Damage":{affix:'x'},
	
	"Enemies killed explode dealing 10% of their Life as Fire Damage":{affix:'x'},
	
	"Enemies on Low Life take #% increased Damage per Frenzy Charge":{affix:'x'},
	
	"Eternal Iron Hook":{affix:'x'},
	
	"Extra gore":{affix:'x'},
	
	"Ezomite Shell Hook":{affix:'x'},
	
	"Final Boss drops higher Level Items":{affix:'x'},
	
	"Gain # Souls for Vaal Skills on Rampage":{affix:'x'},
	
	"Gain #% of Bow Physical Damage as Extra Damage of an Element":{affix:'x'},
	
	"Gain #% of Elemental Damage as Extra Chaos Damage during effect":{affix:'x'},
	
	"Gain #% of Physical Damage as Extra Chaos Damage":{affix:'x'},
	
	"Gain #% of Physical Damage as Extra Chaos Damage during effect":{affix:'x'},
	
	"Gain a Frenzy Charge if an Attack Ignites an Enemy":{affix:'x'},
	
	"Gain a Frenzy Charge on Critical Strike":{affix:'x'},
	
	"Gain a Power Charge for each Enemy you hit with a Critical Strike":{affix:'x'},
	
	"Gain a Power Charge on Critical Strike":{affix:'x'},
	
	"Gain a Power Charge on non-Critical Strike":{affix:'x'},
	
	"Gain an Endurance Charge when a Power Charge expires or is consumed":{affix:'x'},
	
	"Gain an Endurance Charge when an enemy Scores a Critical Strike on You":{affix:'x'},
	
	"Gain an Endurance Charge when an Enemy Scores a Critical Strike on You":{affix:'x'},
	
	"Gain Flask Charges when you deal a Critical Strike":{affix:'x'},
	
	"Gain Immunity to Physical Damage for # seconds on Rampage":{affix:'x'},
	
	"Gain Unholy Might for # seconds on Rampage":{affix:'x'},
	
	"Gems in this item are supported by level # Blind":{affix:'x'},
	
	"Gems in this item are supported by level # Chance to Flee":{affix:'x'},
	
	"Gems in this item are Supported by level # Elemental Proliferation":{affix:'x'},
	
	"Gems in this item are Supported by level # Faster Attacks":{affix:'x'},
	
	"Gems in this item are Supported by level # Iron Will":{affix:'x'},
	
	"Gems in this item are supported by level # Melee Splash":{affix:'x'},
	
	"Gems in this item are Supported by level # Spell Echo":{affix:'x'},
	
	"Gems in this item are Supported by level # Spell Totem":{affix:'x'},
	
	"Gems in this item are Supported by level # Trap":{affix:'x'},
	
	"Gems in this item are Supported by level 10 Added Fire Damage":{affix:'x'},
	
	"Gems in this item are Supported by level 10 Cold to Fire":{affix:'x'},
	
	"Gems in this item are Supported by level 10 Fire Penetration":{affix:'x'},
	
	"Gems in this item are Supported by level 15 Added Chaos Damage":{affix:'x'},
	
	"Gems in this item are Supported by level 15 Concentrated Effect":{affix:'x'},
	
	"Gems in this item are Supported by level 15 Increased Area of Effect":{affix:'x'},
	
	"Gems in this item are Supported by level 18 Added Lightning Damage":{affix:'x'},
	
	"Gems in this item are Supported by level 18 Faster Attacks":{affix:'x'},
	
	"Gems in this item are Supported by level 18 Melee Physical Damage":{affix:'x'},
	
	"Gems in this item are Supported by level 20 Increased Area of Effect":{affix:'x'},
	
	"Gems in this item are Supported by level 5 Elemental Proliferation":{affix:'x'},
	
	"Gems in this item have #% reduced Mana Cost":{affix:'x'},
	
	"Gems in this item have 10% Chance to cause Enemies to Flee on Hit":{affix:'x'},
	
	"Gems in this item have 25% reduced Mana Reservation":{affix:'x'},
	
	"Gems in this item have Blood Magic":{affix:'x'},
	
	"Ghost Reaver":{affix:'x'},
	
	"Gore Footprints":{affix:'x'},
	
	"Grants #% of Life Recovery to Minions":{affix:'x'},
	
	"Grants level # Assassin's Mark Skill":{affix:'x'},
	
	"Grants level # Bear Trap Skill":{affix:'x'},
	
	"Has no Sockets":{affix:'x'},
	
	"Hits can't be Evaded":{affix:'x'},
	
	"Ignite a nearby enemy on Killing an Ignited enemy":{affix:'x'},
	
	"Ignite a nearby Enemy on Killing an Ignited Enemy":{affix:'x'},
	
	"Ignited Enemies Burn #% faster":{affix:'x'},
	
	"Ignited enemies you hit are destroyed on Kill":{affix:'x'},
	
	"Ignited Enemies you hit are destroyed on Kill":{affix:'x'},
	
	"Immunity to Curses during flask effect. Removes Curses on use":{affix:'x'},
	
	"Increases and Reductions to Spell Damage also apply to Attacks":{affix:'x'},
	
	"Inflicts a random level 20 Curse on you when your Totems die":{affix:'x'},
	
	"Instant Recovery":{affix:'x'},
	
	"Instant Recovery when on Low Life":{affix:'x'},
	
	"Insufficient Mana doesn't prevent your Melee Attacks":{affix:'x'},
	
	"Items and Gems have 25% reduced Attribute Requirements":{affix:'x'},
	
	"Karui Stone Hook":{affix:'x'},
	
	"Leech applies instantly on Critical Strike":{affix:'x'},
	
	"Leech applies instantly on Critical Strikes at #% effectiveness":{affix:'x'},
	
	"Left ring slot: #% reduced Reflected Elemental Damage taken":{affix:'x'},
	
	"Left ring slot: 100% increased Mana Regeneration Rate":{affix:'x'},
	
	"Left ring slot: You cannot Recharge or Regenerate Energy Shield":{affix:'x'},
	
	"Life Leech from Hits with this Weapon applies instantly":{affix:'x'},
	
	"Light Radius is based on Energy Shield instead of Life":{affix:'x'},
	
	"Lose all Power Charges on Critical Strike":{affix:'x'},
	
	"Melee attacks can't fail based on cost":{affix:'x'},
	
	"Melee Critical Strikes have #% chance to cause Bleeding":{affix:'x'},
	
	"Melee Critical Strikes have #% chance to Poison the enemy":{affix:'x'},
	
	"Melee Critical Strikes have #% chance to Poison the Enemy":{affix:'x'},
	
	"Mercury Footprints":{affix:'x'},
	
	"Mind Over Matter":{affix:'x'},
	
	"Minions deal #% increased Damage":{affix:'x'},
	
	"Minions gain Unholy Might for # seconds on Kill":{affix:'x'},
	
	"Minions have #% Chance to Block":{affix:'x'},
	
	"Minions have #% increased maximum Life":{affix:'x'},
	
	"Minions have #% increased Movement Speed":{affix:'x'},
	
	"Minions have #% reduced maximum Life":{affix:'x'},
	
	"Minions have +# to Armour":{affix:'x'},
	
	"Minions Regenerate #% Life per Second":{affix:'x'},
	
	"Modifiers to Spell Damage also apply to Attack Damage":{affix:'x'},
	
	"Monsters are Immune to Curses":{affix:'x'},
	
	"Monsters are immune to randomly chosen elemental status ailments or stun":{affix:'x'},
	
	"Monsters cannot be Stunned":{affix:'x'},
	
	"Monsters deal #% extra Damage as Cold":{affix:'x'},
	
	"Monsters deal #% extra Damage as Fire":{affix:'x'},
	
	"Monsters deal #% extra Damage as Lightning":{affix:'x'},
	
	"Monsters fire # additional Projectiles":{affix:'x'},
	
	"Monsters Fracture":{affix:'x'},
	
	"Monsters gain # Endurance Charge every # seconds":{affix:'x'},
	
	"Monsters gain # Endurance Charges every # seconds":{affix:'x'},
	
	"Monsters gain # Frenzy Charge every # seconds":{affix:'x'},
	
	"Monsters gain # Frenzy Charges every # seconds":{affix:'x'},
	
	"Monsters gain # Power Charge every # seconds":{affix:'x'},
	
	"Monsters gain # Power Charges every # seconds":{affix:'x'},
	
	"Monsters Poison on Hit":{affix:'x'},
	
	"Monsters reflect #% of Elemental Damage":{affix:'x'},
	
	"Monsters reflect #% of Physical Damage":{affix:'x'},
	
	"Monsters reflect Curses":{affix:'x'},
	
	"Monsters' Melee Attacks apply random Curses on Hit":{affix:'x'},
	
	"Monsters' skills Chain 2 additional times":{affix:'x'},
	
	"Nearby allies gain #% increased Damage":{affix:'x'},
	
	"Nearby allies Recover #% of your maximum Life when you Die":{affix:'x'},
	
	"Nearby enemies have #% increased Effect of Curses on them":{affix:'x'},
	
	"Nearby Enemies have #% increased Effect of Curses on them":{affix:'x'},
	
	"Never deal Critical Strikes":{affix:'x'},
	
	"No Life Recovery Applies during flask effect":{affix:'x'},
	
	"No Physical Damage":{affix:'x'},
	
	"Non-critical strikes deal #% Damage":{affix:'x'},
	
	"On killing a Poisoned enemy, nearby allies Regenerate Life":{affix:'x'},
	
	"On Killing a Poisoned Enemy, nearby Allies Regenerate Life":{affix:'x'},
	
	"On killing a Poisoned enemy, nearby enemies are Poisoned":{affix:'x'},
	
	"On Killing a Poisoned Enemy, nearby Enemies are Poisoned":{affix:'x'},
	
	"Pain Attunement":{affix:'x'},
	
	"Players are cursed with Elemental Weakness":{affix:'x'},
	
	"Players are cursed with Enfeeble":{affix:'x'},
	
	"Players are cursed with Temporal Chains":{affix:'x'},
	
	"Players are cursed with Vulnerability":{affix:'x'},
	
	"Players are cursed with Warlord's Mark":{affix:'x'},
	
	"Players cannot regenerate Life or Mana":{affix:'x'},
	
	"Players have Blood Magic":{affix:'x'},
	
	"Players have Elemental Equilibrium":{affix:'x'},
	
	"Players have no Life or Mana Regeneration":{affix:'x'},
	
	"Players recover Life, Mana and Energy Shield #% slower":{affix:'x'},
	
	"Players Recover Life, Mana and Energy Shield #% slower":{affix:'x'},
	
	"Players take # Chaos Damage per second":{affix:'x'},
	
	"Poisonous Hit":{affix:'x'},
	
	"Power Charge On Critical":{affix:'x'},
	
	"Projectile Damage increased by Arrow Pierce Chance":{affix:'x'},
	
	"Rare Monsters each have a Nemesis Mod":{affix:'x'},
	
	"Recharges 1 Charge when you deal a Critical Strike":{affix:'x'},
	
	"Recharges 3 Charges when you take a Critical Strike":{affix:'x'},
	
	"Recover #% of your Maximum Life on Rampage":{affix:'x'},
	
	"Recover #% of your maximum Life on use":{affix:'x'},
	
	"Recover Full Life at the end of the flask effect":{affix:'x'},
	
	"Reflects # Chaos Damage to Melee Attackers":{affix:'x'},
	
	"Reflects # Cold Damage to Melee Attackers":{affix:'x'},
	
	"Reflects # Fire Damage to Melee Attackers":{affix:'x'},
	
	"Reflects # Physical Damage to Attackers on Block":{affix:'x'},
	
	"Reflects # Physical Damage to Melee Attackers":{affix:'p'},
	
	"Reflects #-# Lightning Damage to Attackers on Block":{affix:'x'},
	
	"Reflects #-# Lightning Damage to Melee Attackers":{affix:'x'},
	
	"Reflects #-# Physical Damage to Attackers on Block":{affix:'x'},
	
	"Reflects 200-250 Physical Damage to Attackers on Block":{affix:'x'},
	
	"Regenerate # Life over # second for each Spell you Cast":{affix:'x'},
	
	"Removes #% of your maximum Energy Shield on use":{affix:'x'},
	
	"Removes 10% of Life Recovered from Mana when used":{affix:'x'},
	
	"Removes 15% of Mana Recovered from Life when used":{affix:'x'},
	
	"Removes Bleeding":{affix:'x'},
	
	"Replenishes Energy Shield by #% of Armour when you Block":{affix:'x'},
	
	"Reserves 30% of Life":{affix:'x'},
	
	"Restless Dead":{affix:'x'},
	
	"Rhoa Feather Lure":{affix:'x'},
	
	"Right ring slot: #% of Energy Shield Regenerated per second":{affix:'x'},
	
	"Right ring slot: #% reduced Reflected Physical Damage taken":{affix:'x'},
	
	"Right ring slot: 4.0% of Energy Shield Regenerated per second":{affix:'x'},
	
	"Right ring slot: You cannot Regenerate Mana":{affix:'x'},
	
	"Share Endurance Charges with nearby party members":{affix:'x'},
	
	"Shock a nearby enemy for # seconds on Killing a Shocked enemy":{affix:'x'},
	
	"Shock a nearby Enemy for # seconds on Killing a Shocked Enemy":{affix:'x'},
	
	"Shocks you cause are reflected back to you":{affix:'x'},
	
	"Siren Worm Bait":{affix:'x'},
	
	"Skill gems in this item are supported by level 5 Blind":{affix:'x'},
	
	"Skills Chain +# times":{affix:'x'},
	
	"Socketed Gems are Supported by level # Added Chaos Damage":{affix:'x'},
	
	"Socketed Gems are Supported by level # Added Fire Damage":{affix:'x'},
	
	"Socketed Gems are Supported by level # Added Lightning Damage":{affix:'x'},
	
	"Socketed Gems are supported by level # Blind":{affix:'x'},
	
	"Socketed Gems are supported by level # Cast On Crit":{affix:'x'},
	
	"Socketed Gems are supported by level # Cast on Death":{affix:'x'},
	
	"Socketed Gems are supported by level # Cast when Stunned":{affix:'x'},
	
	"Socketed Gems are supported by level # Chance to Flee":{affix:'x'},
	
	"Socketed Gems are Supported by level # Cold to Fire":{affix:'x'},
	
	"Socketed Gems are Supported by level # Concentrated Effect":{affix:'x'},
	
	"Socketed Gems are Supported by level # Elemental Proliferation":{affix:'x'},
	
	"Socketed Gems are Supported by level # Faster Attacks":{affix:'x'},
	
	"Socketed Gems are Supported by level # Fire Penetration":{affix:'x'},
	
	"Socketed Gems are supported by level # Fork":{affix:'x'},
	
	"Socketed Gems are Supported by level # Increased Area of Effect":{affix:'x'},
	
	"Socketed Gems are supported by level # Increased Critical Damage":{affix:'x'},
	
	"Socketed Gems are Supported by level # Iron Will":{affix:'x'},
	
	"Socketed Gems are Supported by level # Melee Physical Damage":{affix:'x'},
	
	"Socketed Gems are supported by level # Melee Splash":{affix:'x'},
	
	"Socketed Gems are supported by level # Multistrike":{affix:'x'},
	
	"Socketed Gems are Supported by level # Spell Echo":{affix:'x'},
	
	"Socketed Gems are Supported by level # Spell Totem":{affix:'x'},
	
	"Socketed Gems are Supported by level # Trap":{affix:'x'},
	
	"Socketed Gems have #% chance to cause Enemies to Flee on Hit":{affix:'x'},
	
	"Socketed Gems have #% reduced Elemental Equilibrium effect":{affix:'x'},
	
	"Socketed Gems have #% reduced Mana Cost":{affix:'x'},
	
	"Socketed Gems have #% reduced Mana Reservation":{affix:'x'},
	
	"Socketed Gems have Blood Magic":{affix:'x'},
	
	"Socketed Gems have Elemental Equilibrium":{affix:'x'},
	
	"Socketed Melee Gems have #% increased Area of Effect Radius":{affix:'x'},
	
	"Socketed Red Gems get #% Physical Damage as Extra Fire Damage":{affix:'x'},
	
	"Socketed Skill Gems get a #% Mana Multiplier":{affix:'x'},
	
	"Spreads Tar when you take a Critical Strike":{affix:'x'},
	
	"Take # Physical Damage when hit by Attacks":{affix:'x'},
	
	"Temporal Chains has #% reduced Effect on You":{affix:'x'},
	
	"Totemic Wood Lure":{affix:'x'},
	
	"Traps trigger at the end of their Duration":{affix:'x'},
	
	"Unique Boss deals +#% Damage and attacks #% faster":{affix:'x'},
	
	"Unique Boss drops # additional Rare Amulets":{affix:'x'},
	
	"Unique Boss drops # additional Rare Belts":{affix:'x'},
	
	"Unique Boss drops # additional Rare Body Armours":{affix:'x'},
	
	"Unique Boss drops # additional Rare Boots":{affix:'x'},
	
	"Unique Boss drops # additional Rare Bows":{affix:'x'},
	
	"Unique Boss drops # additional Rare Claws":{affix:'x'},
	
	"Unique Boss drops # additional Rare Daggers":{affix:'x'},
	
	"Unique Boss drops # additional Rare Gloves":{affix:'x'},
	
	"Unique Boss drops # additional Rare Helmets":{affix:'x'},
	
	"Unique Boss drops # additional Rare One Handed Axes":{affix:'x'},
	
	"Unique Boss drops # additional Rare One Handed Maces":{affix:'x'},
	
	"Unique Boss drops # additional Rare One Handed Swords":{affix:'x'},
	
	"Unique Boss drops # additional Rare One Handed Thrusting Swords":{affix:'x'},
	
	"Unique Boss drops # additional Rare Quivers":{affix:'x'},
	
	"Unique Boss drops # additional Rare Rings":{affix:'x'},
	
	"Unique Boss drops # additional Rare Sceptres":{affix:'x'},
	
	"Unique Boss drops # additional Rare Shields":{affix:'x'},
	
	"Unique Boss drops # additional Rare Staves":{affix:'x'},
	
	"Unique Boss drops # additional Rare Two Handed Axes":{affix:'x'},
	
	"Unique Boss drops # additional Rare Two Handed Maces":{affix:'x'},
	
	"Unique Boss drops # additional Rare Two Handed Swords":{affix:'x'},
	
	"Unique Boss drops # additional Rare Wands":{affix:'x'},
	
	"Unique Boss gives #% increased Experience":{affix:'x'},
	
	"Unwavering Stance":{affix:'x'},
	
	"Uses both hand slots":{affix:'x'},
	
	"Vaal Soul Hook":{affix:'x'},
	
	"When at maximum Frenzy Charges, Attacks Poison enemies":{affix:'x'},
	
	"When at maximum Frenzy Charges, Attacks Poison Enemies":{affix:'x'},
	
	"When Hit, #% of Damage is taken from Mana before Life":{affix:'x'},
	
	"When you Kill a Rare monster, you gain its mods for # seconds":{affix:'x'},
	
	"While on Low Life, Enemies are Unlucky when Damaging you":{affix:'x'},
	
	"You and nearby allies gain 15% increased Damage":{affix:'x'},
	
	"You can catch Exotic Fish":{affix:'x'},
	
	"You can only deal Damage with this Weapon":{affix:'x'},
	
	"You can only deal Damage with this Weapon and Ignite":{affix:'x'},
	
	"You cannot be Chilled for # seconds after being Chilled":{affix:'x'},
	
	"You cannot be Frozen for # seconds after being Frozen":{affix:'x'},
	
	"You cannot be Ignited for # seconds after being Ignited":{affix:'x'},
	
	"You cannot be Shocked for # second after being Shocked":{affix:'x'},
	
	"You cannot be Shocked for # seconds after being Shocked":{affix:'x'},
	
	"You gain # Evasion Rating when on Full Life":{affix:'x'},
	
	"You gain # Evasion Rating when on Low Life":{affix:'x'},
	
	"You gain a Frenzy Charge on use":{affix:'x'},
	
	"You gain a Power Charge on use":{affix:'x'},
	
	"You gain an Endurance Charge on Kill":{affix:'x'},
	
	"You gain an Endurance Charge on use":{affix:'x'},
	
	"You gain Onslaught for # second per Endurance Charge when Hit":{affix:'x'},
	
	"You gain Onslaught for # seconds on Critical Strike":{affix:'x'},
	
	"You gain Onslaught for # seconds on using a Vaal Skill":{affix:'x'},
	
	"You gain Onslaught for 2 seconds on Kill":{affix:'x'},
	
	"You gain Onslaught for 2.0 seconds when you Kill an enemy":{affix:'x'},
	
	"You grant # Frenzy Charges to allies on Death":{affix:'x'},
	
	"You lose all Endurance Charges when Hit":{affix:'x'},
	
	"You take #% of your maximum Life as Chaos Damage on use":{affix:'x'},
	
	"You take #% reduced Extra Damage from Critical Strikes":{affix:'x'},
	
	"You take 450 Chaos Damage per second for 10 seconds on Kill":{affix:'x'},
	
	"Your Chaos Damage can Shock":{affix:'x'},
	
	"Your Cold Damage can Ignite":{affix:'x'},
	
	"Your Cold Damage can Ignite but not Freeze or Chill":{affix:'x'},
	
	"Your Cold Damage cannot Chill":{affix:'x'},
	
	"Your Cold Damage cannot Freeze":{affix:'x'},
	
	"Your Critical Strikes do not deal increased Damage":{affix:'x'},
	
	"Your Critical Strikes have Culling Strike":{affix:'x'},
	
	"Your Fire Damage can Shock":{affix:'x'},
	
	"Your Fire Damage can Shock but not Ignite":{affix:'x'},
	
	"Your Fire Damage cannot Ignite":{affix:'x'},
	
	"Your Flasks grant #% chance to Freeze during flask effect":{affix:'x'},
	
	"Your Flasks grant #% chance to Ignite during flask effect":{affix:'x'},
	
	"Your Flasks grant #% chance to Shock during flask effect":{affix:'x'},
	
	"Your Flasks grant #% reduced Enemy Stun Threshold during flask effect":{affix:'x'},
	
	"Your Flasks grant +#% to Chaos Resistance during flask effect":{affix:'x'},
	
	"Your Lightning Damage can Freeze":{affix:'x'},
	
	"Your Lightning Damage can Freeze but not Shock":{affix:'x'},
	
	"Your Lightning Damage cannot Shock":{affix:'x'},
	
	"Your Physical Damage can Chill":{affix:'x'},
	
	"Your Skills have no Mana Cost during flask effect":{affix:'x'},
	
	"Your Spells have Culling Strike":{affix:'x'},
	
	"Zombies deal #% increased Physical Damage":{affix:'x'}
	};

	explicit_mods = $('.mods').not('.withline').children(); 
	explicit_mods = $(explicit_mods).not('.pseudo');

	$.each(explicit_mods, function(){ 
	  
	  mod   = $(this).attr('data-name'); 
	  value = $(this).attr('data-value');
	  
	  // we skip implicit mod here
	  if(mod.startsWith('$')) return;
	  
	  // remove the '#' as the first character
	  // For example, this mod from the search result:
	  // <li style="" data-value="0" data-name="#Your Spells have Culling Strike" class="sortable ">Your Spells have Culling Strike</li>
	  // Here we'll get "#Your Spells have Culling Strike" class="
	  // We wanna remove the first character there.
	  // I'm not sure why it has that while the mods listed in the explicit combobox (from the search form) doesn't have one.
	  if(mod.startsWith('#')) mod = mod.substring(1);
	  
	  affix = mod_map[mod];
	  if(affix) {
		  affix = affix.affix;
		  affix = affix == 'x' ? 'tbd' : affix == 'p' ? 'prefix' : 'suffix';
		  $(this).prepend("<i style='color:#FFFFFF'>" + affix + '</i>&nbsp&nbsp');
	  } else {
	  	  // new mod? just log it for now, later we might make this an alert, or a user-friendly jquery notification
		  console.log(mod);
	  }
	});
	
})();
