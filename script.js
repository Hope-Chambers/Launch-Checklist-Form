// Write your JavaScript code here!
window.addEventListener("load", function(){

   let statusCheck = document.getElementById("launchStatusCheck");
   let form = document.getElementById("launchForm");
   
   let pilotStatus= document.getElementById("pilotStatus");
   let copilotStatus= document.getElementById("copilotStatus");
   let fuelStatus= document.getElementById("fuelStatus")
   let cargoStatus= document.getElementById("cargoStatus")
   let launchStatus= document.getElementById("launchStatus")
   
   form.addEventListener("submit", function(event){
      event.preventDefault();
      
      let pilotInput=document.querySelector("input[name=pilotName]");
      let pilotName=pilotInput.value;   
      let copilotInput= document.querySelector("input[name=copilotName]");
      let copilotName=copilotInput.value;
      let fuelLevelInput= document.querySelector("input[name=fuelLevel]");
      let cargoMassInput= document.querySelector("input[name=cargoMass]");
      

   if(pilotInput.value==="" || copilotInput.value==="" ||fuelLevelInput.value===""|| cargoMassInput==="" ){
      alert("Field empty please provide information.");
   }else if(isNaN(pilotInput.value)=== false || isNaN(copilotInput.value)=== false|| isNaN(fuelLevelInput.value)|| isNaN(cargoMassInput.value)){
      alert("Please enter correct format.")
   }else{
      itemStatus.style.visibility="visible"
      pilotStatus.innerHTML=`Pilot: ${pilotName} is ready for Launch!`;
      copilotStatus.innerHTML=`Copilot: ${copilotName} is ready Launch!`;
     
      if(fuelLevelInput.value< 10000 && cargoMassInput.value >= 10000 ){   
         launchStatus.style.color="red"
         launchStatus.innerHTML=`Shuttle not ready for launch`;
         fuelStatus.innerHTML=`Not enough fuel for the journey`;
         cargoStatus.innerHTML=`too much mass for the shuttle to take off`;
      
      }else if(fuelLevelInput.value< 10000 && cargoMassInput.value <10000){
         launchStatus.innerHTML=`Shuttle not ready for launch`;
         fuelStatus.innerHTML=`Not enough fuel for the journey. `;
         cargoStatus.innerHTML=`Cargo Mass Check Passesed.`;
         launchStatus.style.color="red"

      }else if(cargoMassInput.value >= 10000 && fuelLevelInput.value >10000){
         launchStatus.style.color="red"
         launchStatus.innerHTML=`Shuttle not ready for launch`;
         fuelStatus.innerHTML=`Passed Fuel Check`;
         cargoStatus.innerHTML=`too much mass for the shuttle to take off.`;

      }else if(fuelLevelInput.value>= 10000 && cargoMassInput.value <= 10000 ){   
         launchStatus.style.color="green"
         launchStatus.innerHTML=`Shuttle ready for launch`;
         fuelStatus.innerHTML=`Passed Fuel Check`;
         cargoStatus.innerHTML=`Cargo Mass Check Passesed.`;
       }
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