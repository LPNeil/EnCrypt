var ecc = ["097"]
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
  if(string[i]=="l"){}
  if(string[i]=="m"){}
  if(string[i]=="n"){}
  if(string[i]=="o"){}
  if(string[i]=="p"){}
  if(string[i]=="q"){}
  if(string[i]=="r"){}
  if(string[i]=="s"){}
  if(string[i]=="t"){}
  if(string[i]=="u"){}
  if(string[i]=="v"){}
  if(string[i]=="w"){}
  if(string[i]=="x"){}
  if(string[i]=="y"){}
  if(string[i]=="z"){}
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
