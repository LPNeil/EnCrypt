var ecc = ["097","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","065","066","067","068","069","070","071","072","073","074","075","076","077","078","079","080","081","082","083","084","085","086","087","088","089","090","048","049","050","051","052","053","054","055","056","057"];
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
  if(string[i]=="A"){result += ecc[26];}
  if(string[i]=="B"){result += ecc[27];}
  if(string[i]=="C"){result += ecc[28];}
  if(string[i]=="D"){result += ecc[29];}
  if(string[i]=="E"){result += ecc[30];}
  if(string[i]=="F"){result += ecc[31];}
  if(string[i]=="G"){result += ecc[32];}
  if(string[i]=="H"){result += ecc[33];}
  if(string[i]=="I"){result += ecc[34];}
  if(string[i]=="J"){result += ecc[35];}
  if(string[i]=="K"){result += ecc[36];}
  if(string[i]=="L"){result += ecc[37];}
  if(string[i]=="M"){result += ecc[38];}
  if(string[i]=="N"){result += ecc[39];}
  if(string[i]=="O"){result += ecc[40];}
  if(string[i]=="P"){result += ecc[41];}
  if(string[i]=="Q"){result += ecc[42];}
  if(string[i]=="R"){result += ecc[43];}
  if(string[i]=="S"){result += ecc[44];}
  if(string[i]=="T"){result += ecc[45];}
  if(string[i]=="U"){result += ecc[46];}
  if(string[i]=="V"){result += ecc[47];}
  if(string[i]=="W"){result += ecc[48];}
  if(string[i]=="X"){result += ecc[49];}
  if(string[i]=="Y"){result += ecc[50];}
  if(string[i]=="Z"){result += ecc[51];}
  if(string[i]=="0"){result += ecc[52];}
  if(string[i]=="1"){result += ecc[53];}
  if(string[i]=="2"){result += ecc[54];}
  if(string[i]=="3"){result += ecc[55];}
  if(string[i]=="4"){result += ecc[56];}
  if(string[i]=="5"){result += ecc[57];}
  if(string[i]=="6"){result += ecc[58];}
  if(string[i]=="7"){result += ecc[59];}
  if(string[i]=="8"){result += ecc[60];}
  if(string[i]=="9"){result += ecc[61];}
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
