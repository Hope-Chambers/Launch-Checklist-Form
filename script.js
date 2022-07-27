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
      event.preventdefault();

   let pilotInput=document.querySelector("input[name=pilotName)");   
   let copilotInput= document.querySelector("input[name=copilotName]");
   let fuelLevelInput= document.querySelector("input[name=fuelLevel]");
   let cargoMassInput= document.querySelector("input[name=cargoMadd]"); 
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