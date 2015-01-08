// Path of Exile Forgotten Mods 0.4 - A simple bookmarklet that will augment poe.trade with more info.
// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
// PM me in game: ManicCompression
// Code prettyfied by http://jsbeautifier.org/
(function() {

    // The mods data is located in another js file, we import it first.
    var mod_data_url = "https://76f193c373fb5126bd1b5ee4fc270e3c6a1833cb.googledrive.com/host/0B4u8zcQBGBwpRll0ZzJxZ09DUUU/forgotten-mods-mod-data.js";

    $.getScript(mod_data_url, function() {

        console.log("Script 'forgotten-mods-mod-data.js' sucessfully loaded. Url used is " + mod_data_url);

        var mods_data = mod_map;

        // Main code
        // Target all HTML elements with class 'mods', but not those with class 'withline' and 'psuedo'
        explicit_mods = $('.mods').not('.withline').children();
        explicit_mods = $(explicit_mods).not('.pseudo');

        $.each(explicit_mods, function() {

            mod = $(this).attr('data-name');
            value = $(this).attr('data-value');

            // we skip implicit mod here
            if (mod.lastIndexOf('$', 0) == 0) return;

            // remove the '#' as the first character
            // For example, this mod from the search result:
            // <li style="" data-value="0" data-name="#Your Spells have Culling Strike" class="sortable ">Your Spells have Culling Strike</li>
            // Here we'll get "#Your Spells have Culling Strike" class="
            // We wanna remove the first character there.
            // I'm not sure why it has that while the mods listed in the explicit combobox (from the search form) doesn't have one.
            if (mod.lastIndexOf('#', 0) == 0) mod = mod.substring(1);

            // remove the '@' as the last character
            // this character is use to denote if the mod is a master-crafted mod
            if (endsWith(mod, '@')) mod = mod.substring(0, mod.length - 1);

	    // poe.trade lists these mods like this:
	    // #% increased Flask Life Recovery rate
	    // #% increased Flask Life recovery rate
	    // so we'll go case-insensitive
            affix = getModObjCaseInsensitive(mod, mods_data);
            if (affix) {
                affix = affix.affix;
                if (affix == 'p') {
                    $(this).prepend("<b style='color:#4584d3'>" + '[prefix]' + '</b>&nbsp&nbsp');
                }
                if (affix == 's') {
                    $(this).prepend("<b style='color:#b60f2e'>" + '[suffix]' + '</b>&nbsp&nbsp');
                }
            }
        });

    });

    // Utility functions
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function startWith(str, prefix) {
        return str.lastIndexOf(prefix, 0) == 0;
    }

    function getModObjCaseInsensitive(prop, mods_data) {
        prop = (prop + "").toLowerCase();
        for (var p in mods_data) {
            if (mod_map.hasOwnProperty(p) && prop == (p + "").toLowerCase()) {
                return mods_data[p];
            }
        }
        return null;
    }

})();
