var cc1 = ["097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122"];
var result = "";
function encrypt(data){
 for(var i = 0;i<data.length;i++){
  if(data[i]=="a"){result += cc1[0];}
  if(data[i]=="b"){result += cc1[1];}
  if(data[i]=="c"){result += cc1[2];}
  if(data[i]=="d"){result += cc1[3];}
  if(data[i]=="e"){result += cc1[4];}
  if(data[i]=="f"){result += cc1[5];}
  if(data[i]=="g"){result += cc1[6];}
  if(data[i]=="h"){result += cc1[7];}
  if(data[i]=="i"){result += cc1[8];}
  if(data[i]=="j"){result += cc1[9];}
  if(data[i]=="k"){result += cc1[10];}
  if(data[i]=="l"){result += cc1[11];}
  if(data[i]=="m"){result += cc1[12];}
  if(data[i]=="n"){result += cc1[13];}
  if(data[i]=="o"){result += cc1[14];}
  if(data[i]=="p"){result += cc1[15];}
  if(data[i]=="q"){result += cc1[16];}
  if(data[i]=="r"){result += cc1[17];}
  if(data[i]=="s"){result += cc1[18];}
  if(data[i]=="t"){result += cc1[19];}
  if(data[i]=="u"){result += cc1[20];}
  if(data[i]=="v"){result += cc1[21];}
  if(data[i]=="w"){result += cc1[22];}
  if(data[i]=="x"){result += cc1[23];}
  if(data[i]=="y"){result += cc1[24];}
  if(data[i]=="z"){result += cc1[25];}
 }
 return result;
}
function decrypt(data){
 for(var i = 0;i<data.length;i++){
  if(data[0]=="0"){
   if(data[1]=="9"){
    if(data[2]=="7"){result += "a";}
    if(data[2]=="8"){result += "b";}
    if(data[2]=="9"){result += "c";}
   }
  }else{
   if(data[0]=="1"){
   }
  }
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
ec.d = function(id){
 var node = document.getElementById(id).nodeName;
 if(node=="INPUT"){
  decrypt(document.getElementById(id).value);
  alert("Decryption equals "+ result);
 }else{
  decrypt(document.getElementById(id).innerHTML);
  alert("Decryption equals "+ result);
 }
};
