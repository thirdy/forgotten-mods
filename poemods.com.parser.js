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
      affix_compact = affix == 'Prefix' ? 'p' : 's';
      
    log('"' + mod + '":{subtype:"' + subtype + '", affix:"' + affix_compact + '", tiers:[');

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

null
