

// Path of Exile Forgotten Mods 0.4 - A simple bookmarklet that will augment poe.trade with more info.
// Check out the forum thread - http://www.pathofexile.com/forum/edit-thread/1164052
// PM me in game: ManicCompression
// Code prettyfied by http://jsbeautifier.org/
(function() {

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
		
		if(mod == '+# to maximum Life')  param_mod = 'Base Max Life'
		if(type == 'BodyArmours') param_type = 'O'
    
    log(param_mod);
      log(param_type);
      
      var query_callback = function(data){
                data = parse(data); // Call data parser helper function
                //console.log(data);
                affix_callback('p');
      }
    
    // TODO: The spreadsheet should have the tier values, so we request less data
    
		//query('select * where B = "Base Max Life" and O = "Yes"', callback);
		if(param_mod != null && param_type != null)
      query('select * where B = "' + param_mod + '" and ' + param_type + ' = "Yes"', query_callback);
      
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
