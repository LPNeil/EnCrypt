var cc1 = ["097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122"];
var result = "":
function encrypt(data){
 for(var i = 0;i<data.length;i++){
  if(data[i]=="A"){result += cc1[0];}
 }
 return result;
}
var EC = {
 e: function(id,out){
  var node = document.getElementById(id).nodeType;
  if(node=="INPUT"){
   var nVal = document.getElementById(id).value;
   encrypt(nVal);
   document.getElementById(out).innerHTML = result;
  }
 }
};
