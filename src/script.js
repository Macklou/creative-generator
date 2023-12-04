function displayCreative(response) {
  new Typewriter("#creative", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCreative(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructionsInput");

  let apiKey = "cao1cb110f2cb023f87a82357a1c4tea";
  let prompt = `User Instructions: Generate a quote about ${instructionsInput.value}`;
  let context =
    "You are an intelligent expert and able to provide quotes from famous people on any subject in basic HTML. Make sure to follow the user prompts";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayCreative);
}

let creativeFormElement = document.querySelector("#creative-generator-form");
creativeFormElement.addEventListener("submit", generateCreative);
