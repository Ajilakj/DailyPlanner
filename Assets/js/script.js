// DEPENDENCIES

var today=moment().format(("LLLL") );
$("#currentDay").text(today);
var currentTime=Number(moment().format("hh"));
var amPm=moment().format('A');
var i;
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
var btnCollection = document. getElementsByClassName("saveBtn");

for (var i = 0; i <btnCollection. length ; i++) {
     btnCollection[i]. addEventListener("click", saveLocalStorage
     );
}    


//TO STORE IN THE LOCAL STORAGE
function saveLocalStorage(event){
     var parentDiv=$(event.target).parent();
     console.log(parentDiv.val());
     //var textContent=parentDiv.children(i).eq(1).text();
     var textContent=parentDiv.children(i).eq(1).val();

     var schedule={
          index:i,
          textContent:textContent
     };
     localStorage.setItem("Schedule",JSON.stringify(schedule));
}


// TO GET BACK FROM THE LOCAL STORAGE
function init(){
     var storedSchedule = JSON.parse(localStorage.getItem("Schedule"));
     var i=storedSchedule.index;
     textContent=storedSchedule.textContent;
}