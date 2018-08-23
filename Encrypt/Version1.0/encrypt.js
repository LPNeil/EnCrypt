var ecc = ["097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","122","065","066","067","068","069","070","071","072","073","074","075","076","077","078","079","080","081","082","83","84","85","86","87","88","89","90","048","049","050","051","052","053","054","055","056","057"];
var result = "";
function encrypt{string){
 for(var i = 0;i < string.length;i++){
  if(string[i]=="a"){result += ecc[0];}
  if(string[i]=="b"){result += ecc[1];}
  if(string[i]=="c"){result += ecc[2];}
  if(string[i]=="d"){result += ecc[3];}
  if(string[i]=="e"){result += ecc[4];}
  if(string[i]=="f"){result += ecc[5];}
  if(string[i]=="g"){result += ecc[6];}
  if(string[i]=="h"){result += ecc[7];}
  if(string[i]=="i"){result += ecc[8];}
  if(string[i]=="j"){result += ecc[9];}
  if(string[i]=="k"){result += ecc[10];}
  if(string[i]=="l"){result += ecc[11];}
  if(string[i]=="m"){result += ecc[12];}
  if(string[i]=="n"){result += ecc[13];}
  if(string[i]=="o"){result += ecc[14];}
  if(string[i]=="p"){result += ecc[15];}
  if(string[i]=="q"){result += ecc[16];}
  if(string[i]=="r"){result += ecc[17];}
  if(string[i]=="s"){result += ecc[18];}
  if(string[i]=="t"){result += ecc[19];}
  if(string[i]=="u"){result += ecc[20];}
  if(string[i]=="v"){result += ecc[21];}
  if(string[i]=="w"){result += ecc[22];}
  if(string[i]=="x"){result += ecc[23];}
  if(string[i]=="y"){result += ecc[24];}
  if(string[i]=="z"){result += ecc[25];}
 }
}
var EC = {
 e: function(id){
  if(document.getElementById(id).nodeName=="INPUT"){
   encrypt(document.getElementById(id).value);
  }else{
   if(document.getElementById(id.nodeType==1){
    encrypt(document.getElementById(id).innerHTML);
   }
  }
 },
 d: function(id){ encrypt(document.getElementById(id).value); }
}
