var today=moment().format(("LLLL") );
$("#currentDay").text(today);
var currentTime=Number(moment().format("hh"));
var amPm=moment().format('A');

var containerForTime=document.querySelector("container");
var divForTime=document.getElementsByClassName("time")
var divTime=document.getElementsByClassName("time")
console.dir(divTime);

for(var i=1;i<25;i++){
     // var textArea = document.createElement("p");
     // textArea.textContent="for "+i;
     // containerForTime.appendChild(textArea);
     if(amPm==='PM'){
          var plus=12;
     }
     else{
          plus=0;
     }
     var id=Number(divForTime[i-1].id);
     var newCurrentTime=currentTime+plus;
     if(id<newCurrentTime){
          divTime[id-1].classList.add("past");
     }
     else if(id===newCurrentTime){
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
