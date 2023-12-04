const typewriter = new Typewriter("#creative", {
  strings: [],
  autoStart: false,
  delay: 1,
  cursor: "",
});

function displayCreative(response) {
  document.getElementById("loader").style.display = "none";
  document.getElementById("creative").style.display = "block";

  typewriter.strings = [response.data.answer];
  typewriter.start();
}

function generateCreative(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(
    "#creative-generator-form input[type='text']"
  );
  let userInput = instructionsInput.value.trim();

  if (userInput === "") {
    console.error("User input is empty.");
    return;
  }
  document.getElementById("loader").style.display = "block";
  document.getElementById("creative").style.display = "none";

  typewriter.stop();

  let apiKey = "cao1cb110f2cb023f87a82357a1c4tea";
  let prompt = `User Instructions: Generate a quote about ${userInput}`;
  let context =
    "You are an intelligent expert and able to provide quotes from famous people on any subject in basic HTML. Make sure to follow the user prompts";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios
    .get(apiURL)
    .then(displayCreative)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

let creativeFormElement = document.querySelector("#creative-generator-form");
creativeFormElement.addEventListener("submit", generateCreative);
