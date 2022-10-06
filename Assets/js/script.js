var today=moment().format(("LLLL") );
$("#currentDay").text(today);
var currentTime=moment().format("hh");
//alert(currentTime);

var containerForTime=document.querySelector("container");

for(var i=1;i<25;i++){
     var textArea = document.createElement("p");
     console.log(textArea);
     textArea.textContent="for "+i;
     //alert(textArea.textContent);
     body.appendChild(textArea);
}
