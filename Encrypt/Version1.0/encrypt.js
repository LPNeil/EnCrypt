var cc1 = ["097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122"];
var EC = {
 e: function(id){
  var node = document.getElementById(id).nodeType;
  if(node=="INPUT"){
   var nVal = document.getElementById(id).value;
   encrypt(nVal);
  }
 }
};
