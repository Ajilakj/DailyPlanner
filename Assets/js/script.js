var today=moment().format(("LLLL") );
$("#currentDay").text(today);
var currentTime=Number(moment().format("hh"));
alert(currentTime);

var containerForTime=document.querySelector("container");
var divForTime=document.getElementsByClassName("time")
var divTime=document.getElementsByClassName("time")
console.dir(divTime);
for(var i=1;i<25;i++){
     // var textArea = document.createElement("p");
     // console.log(textArea);
     // textArea.textContent="for "+i;
     // //alert(textArea.textContent);
     // body.appendChild(textArea);
     var id=Number(divForTime[i-1].id);
     // console.log(id);
     if(id<currentTime){
          
          divTime[id-1].classList.add("past");
     }
     else if(id===currentTime){
          console.log(id);
          divTime[id-1].classList.add("present");
     }
     else{

          divTime[id-1].classList.add("future");
     }
}
// var btn=document.querySelector("saveBtn");
// btn.addEventListener("click",function(){
//      alert("testing");
// });
