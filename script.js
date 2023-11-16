console.log("Connected...");

var sbt = document.getElementById("send");

var data = ["4","13","(","[)","3","|=","6","|-|","|",".]","|<","1","|Y|","/\/","0","|>","O,","|2","5","7","[_]","\/","\v/","}{","`/","2"]
var alpha = ["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var result = "";
var final = document.getElementById(output);


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
    var k = 0;
    do{
        
       
        if(info[i] == alpha[k]){
            result += data[k];
            k++;
            console.log(result);
            console.log(info[k]);
        }
        
    }
    while(alpha[k] !== info[i]);

 
    console.log("you in for loop");
}
}
    

}

