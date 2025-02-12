window.addEventListener("load", function(){

  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json) {
      const missionTarget= document.getElementById ("missionTarget")
       let index = Math.floor(Math.random()*json.length);
      missionTarget.innerHTML = 
      `<h2>Mission Destination</h2>
         <ul>
         <li>Name: ${json[index].name}</li>
          <li>Diameter: ${json[index].diameter}</li>
          <li>Star: ${json[index].star}</li>
          <li>Distance from Earth: ${json[index].distance}</li>
         <li>Number of Moons: ${json[index].moons}</li>
         </ul>
         <img class avatar src="${json[index].image}"></img>`

      });


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
      

      if(pilotInput.value==="" || copilotInput.value==="" ||fuelLevelInput.value===""|| cargoMassInput.value===""){
         alert("Field empty please provide information."); 
         itemStatus.style.visibility="hidden"
         launchStatus.style.color="black"
         launchStatus.innerHTML=`Awaiting information before Launch`
      }else if(isNaN(pilotInput.value)=== false || isNaN(copilotInput.value)=== false|| isNaN(fuelLevelInput.value)|| isNaN(cargoMassInput.value)){
         alert("Please enter correct format.")
         itemStatus.style.visibility="hidden"
         launchStatus.style.color="black"
         launchStatus.innerHTML=`Awaiting information before Launch`
      }else{
         itemStatus.style.visibility="visible"
         pilotStatus.innerHTML=`Pilot: ${pilotName} is ready for Launch!`;
         copilotStatus.innerHTML=`Copilot: ${copilotName} is ready Launch!`;
         launchStatus.innerHTML=`Shuttle ready for launch`;
         fuelStatus.innerHTML=`Passed Fuel Check`;
         cargoStatus.innerHTML=`Cargo Mass Check Passed.`;
         launchStatus.style.color="green"
         
         if(fuelLevelInput.value< 10000){   
             launchStatus.innerHTML=`Shuttle not ready for launch`;
             fuelStatus.innerHTML=`Not enough fuel for the journey`;
             launchStatus.style.color="red"
             }
   
         if(cargoMassInput.value >10000){ 
            launchStatus.innerHTML=`Shuttle not ready for launch`;
            cargoStatus.innerHTML=`too much mass for the shuttle to take off.`;
            launchStatus.style.color="red" 
            };
         };
       });
   });
});