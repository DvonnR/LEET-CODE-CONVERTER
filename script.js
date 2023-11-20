console.log("Connected...");

var sbt = document.getElementById("send");

var data = ["4","13","(","[)","3","|=","6","|-|","|",".]","|<","1","|Y|","/\/","0","|>","O,","|2","5","7","[_]","\/","\v/","}{","`/","2"," ", 1, 2,3,4,5,6,7,8,9,0,"!","@","#","$", "%","^","&","*","(",")","{","}","?","[","]","|",":",";","'","<",",",">",".","+","-","_"]
var alpha = ["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ", 1, 2,3,4,5,6,7,8,9,0,"!","@","#","$", "%","^","&","*","(",")","{","}","?","[","]","|",":",";","'","<",",",">",".","+","-","_"];
var result = "";
var final = document.getElementById(output);
var s1 = 

sbt.addEventListener("click", read );

function read(){

var info = document.getElementById("speak").value;

console.log(info);

if(info == ""){
    console.log("You need an input in the textfield.");
}

else if(info !== ""){

    info = info.toUpperCase()
    console.log(info);
   
for(var i = 0; i < info.length; i++){

    for(var k = 0; k < alpha.length; k++){
        console.log("your in  the right loop");
        
        if(alpha[k] == info[i])
        {
            console.log("youre in the  else if statment");
            result += data[k];
            console.log(result);
            break;
        }
    }
    console.log(info[i]);
    console.log("you in for loop");
}
}
    
}

