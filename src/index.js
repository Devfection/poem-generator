function displayPoem(response){
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
    })
}


function generatePoem(event) {
  event.preventDefault();
  
  let instructionsInput  =document.querySelector("#user-instructions");
  let apiKey = "61ff3ct11d507f83e0fcob41d8ed7a85"; 
  
  let context = "you are a poem writer. Provide a 4-line long poem with each line separated by <br/>. Make sure to follow the user instructions";
  let prompt = `generate a poem about ${instructionsInput.value}`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink_me">Generating a poem about ${instructionsInput.value}, please wait...</div>`;
  
  console.log("generating poem"); 
  console.log(`prompt is ${prompt}`);
  console.log(`context: ${context}`) 
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

