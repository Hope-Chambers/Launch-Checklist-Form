// Write your JavaScript code here!
window.addEventListener("load", function(){

   let statusCheck = document.getElementById("launchStatusCheck");
   statusCheck.style.visability="hidden"
   let form = document.getElementById("launchForm");
   
   let pilotStatus= document.getElementById("pilotStatus");
   let copilotStatus= document.getElementById("copilotStatus");
   let fuelStatus= document.getElementById("fuelStatus")
   let cargotStatus= document.getElementById("cargoStatus")
   
   form.addEventListener("submit", function(event){
      event.preventDefault();

   let pilotInput=document.querySelector("input[name=pilotName]");   
   let copilotInput= document.querySelector("input[name=copilotName]");
   let fuelLevelInput= document.querySelector("input[name=fuelLevel]");
   let cargoMassInput= document.querySelector("input[name=cargoMadd]"); 

   if(pilotInput.value==="" || copilotInput.value==="" ||fuelLevelInput.value===""|| cargoMassInput==="" ){
      alert("Field empty please provide information.");
   }else if(isNaN(pilotInput.value)|| isNaN(copilotInput.value)|| !isNaN(fuelLevelInput.value) || !isNaN(cargoMassInput.value)){
      alert("Please enter correct format.")
   }

    
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
//TODO 1: set up an window load handler(done)

//TODO 2:  set up a submit handler for the form(done)

//TODO 3: Cancel submission using event.preventDefault()(done)

//TODO 4 validate that all inputs have data
 
//TODO 5 check fuel level and cargo Mass, and report launch status 

//TODO 6 make the list visible 

//TODO 7 fetch planet data