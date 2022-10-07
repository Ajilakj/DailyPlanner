// DEPENDENCIES

var today=moment().format(("LLLL") );
$("#currentDay").text(today);
var currentTime=Number(moment().format("hh"));
var amPm=moment().format('A');
var containerForTime=document.querySelector("container");
var divForTime=document.getElementsByClassName("time")
var divTime=document.getElementsByClassName("time")

//CHECKING BASED ON THE CURRENT TIME THE SCEDULED ITEM IS PAST /PRESENT OR FUTURE
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


//EVENT LISTNER FOR BUTTONS
$(document).on('click','button', function(event){
     var parentDiv=$(event.target).parent();
     var textContent=(parentDiv.children().eq(1)).val();
     var time=Number($(event.target).parent()[0].id);
     var schedule={
          index:time,
          Content:textContent,
     };
     localStorage.setItem("Schedule",JSON.stringify(schedule));
});


// TO GET BACK FROM THE LOCAL STORAGE
function init(){
     var storedSchedule = JSON.parse(localStorage.getItem("Schedule"));
     var t=storedSchedule.index;
     var text=storedSchedule.Content;
     for(var i=1;i<25;i++){
          if(t===i){
               var idForDiv=Number(divForTime[i-1].id);
               (divForTime[idForDiv]).children[1].textContent=text;
          }
     }
}
init();