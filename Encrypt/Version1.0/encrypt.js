var cc1 = ["097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122"];
var dcc1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var result = "";
function encrypt(data){
 for(var i = 0;i<data.length;i++){
  if(data[i]=="A"){result += cc1[0];}
  if(data[i]=="B"){result += cc1[1];}
  if(data[i]=="C"){result += cc1[2];}
  if(data[i]=="D"){result += cc1[3];}
  if(data[i]=="E"){result += cc1[4];}
  if(data[i]=="F"){result += cc1[5];}
  if(data[i]=="G"){result += cc1[6];}
  if(data[i]=="H"){result += cc1[7];}
  if(data[i]=="I"){result += cc1[8];}
  if(data[i]=="J"){result += cc1[9];}
  if(data[i]=="K"){result += cc1[10];}
  if(data[i]=="L"){result += cc1[11];}
  if(data[i]=="M"){result += cc1[12];}
  if(data[i]=="N"){result += cc1[13];}
  if(data[i]=="O"){result += cc1[14];}
  if(data[i]=="P"){result += cc1[15];}
  if(data[i]=="Q"){result += cc1[16];}
  if(data[i]=="R"){result += cc1[17];}
  if(data[i]=="S"){result += cc1[18];}
  if(data[i]=="T"){result += cc1[19];}
  if(data[i]=="U"){result += cc1[20];}
  if(data[i]=="V"){result += cc1[21];}
  if(data[i]=="W"){result += cc1[22];}
  if(data[i]=="X"){result += cc1[23];}
  if(data[i]=="Y"){result += cc1[24];}
  if(data[i]=="Z"){result += cc1[25];}
 }
 return result;
}
function decrypt(data){
 for(var i = 0;i<data.length;i++){
  var code = i / 3;
  result = code;
 }
 return result;
}
var ec = new Object;
ec.e = function(id){
 var node = document.getElementById(id).nodeName;
 if(node=="INPUT"){
  encrypt(document.getElementById(id).value);
  decrypt(result);
 }
};
ec  function(id){
 var node = document.getElementById(id).nodeName;
 if(node=="INPUT"){
  decrypt(document.getElementById(id).value);
  alert("Decryption equals "+ result);
 }else{
  decrypt(document.getElementById(id).innerHTML);
  alert("Decryption equals "+ result);
 }
};
