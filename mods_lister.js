mods = $('div#explicit-template optgroup[label="all"] option').map(function() {
  return $(this).text();
}).get();

var uniqueMods = [];
$.each(mods, function(i, el){
    if($.inArray(el, uniqueMods) === -1) uniqueMods.push(el);
});

console.log(uniqueMods.length)

$(uniqueMods).each(function() {
  console.log('"' + this + '":{affix:\'x\'},\r\n');
})

"done"
