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
     // console.dir(parentDiv);
     var textContent=(parentDiv.children().eq(1)).val();
     var time=Number($(event.target).parent()[0].id);
     // alert(time);
     // alert(textContent);
     var schedule=[
          time,
          textContent
     ];
     var retrieveArray = localStorage.getItem("Schedule");
    var stored = JSON.parse(retrieveArray);
if(stored!==null){
     // stored.push(time);
     // stored.push(textContent);
     stored.push(schedule);
//alert(stored);
localStorage.setItem("Schedule",JSON.stringify(stored));}
else{
     localStorage.setItem("Schedule",JSON.stringify(schedule));
}
     //let storedSchedule = JSON.parse(localStorage.getItem("Schedule"));
    // if(storedSchedule!==null){
          //alert("inside if");
          // storedSchedule.push(schedule);
          // localStorage.setItem("Schedule",JSON.stringify(storedSchedule)); 
    // }
   //  else{
          //alert("inside else");
         // localStorage.setItem("Schedule",JSON.stringify(stored));
   //  }
    
});


// TO GET BACK FROM THE LOCAL STORAGE
// function init(){
//      let storedSchedule = JSON.parse(localStorage.getItem("Schedule"));
//      alert(storedSchedule.length);
//      for(var j=0;j<storedSchedule.length;j++){

//      }
//      let time=storedSchedule.index;
//      let text=storedSchedule.Content;
//      for(let i=1;i<25;i++){
//           if(time===i){
//                var idForDiv=Number(divForTime[i-1].id);
//                //alert(idForDiv);
//                (divForTime[idForDiv-1]).children[1].textContent=text;
//           }
//      }
// }
// init();