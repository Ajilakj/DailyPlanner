var today=moment().format(("LLLL") );
$("#currentDay").text(today);
var currentTime=Number(moment().format("hh"));
var amPm=moment().format('A');

var containerForTime=document.querySelector("container");
var divForTime=document.getElementsByClassName("time")
var divTime=document.getElementsByClassName("time")
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
//btnCollection. length
var btnCollection = document. getElementsByClassName("saveBtn");
for (var i = 0; i <btnCollection. length ; i++) {
     btnCollection[i]. addEventListener("click", function (event) {
     var parentDiv=$(event.target).parent();
     //var textContent=parentDiv.children(i).eq(1).text();
     var textContent=parentDiv.children(i).eq(1).val();
     console.log(textContent);
     var schedule={
          index:i,
          textContent:textContent
     };
     localStorage.setItem("Schedule",JSON.stringify(schedule));
     });
}
function init(){
     var storedSchedule = JSON.parse(localStorage.getItem("Schedule"));
     var i=storedSchedule.index;
     textContent=storedSchedule.textContent;
     // if (lastGrade !== null) {
     //      document.getElementById("saved-name").innerHTML = lastGrade.student;
     //      document.getElementById("saved-grade").innerHTML = lastGrade.grade;
     //      document.getElementById("saved-comment").innerHTML = lastGrade.comment;
     //      } else {
     //        return;
     //      }
}