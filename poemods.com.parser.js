var type = $('div#show-query span').text();
log(type);

var subtype = null;
var affix = null;

$('div#mod-results tr').each(function(){
  //log($(this).text());
  var bNode = $(this).find('td > b');
  var str = bNode.text();
  
  if(str != "") {
    
    var tdClass = $(this).find('td').attr('class');
    
    if(tdClass == 'level1') {
      affix = str;
    } else {
       subtype = str;
    }
    
    log(affix + ' - ' + subtype);
    
  }
  
  var mod = $(this).find('td:first-child').text();
  log(mod);
  
  $(this).find('li').each(function(){
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
    
    log("ilvl: " + ilvl + " tier_value: " + tier_value + " affix_magic_name: " + affix_magic_name);
    
  });
  
  
  
});

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
