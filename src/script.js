function generateCreative(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let creativeFormElement = document.querySelector("#creative-generator-form");
creativeFormElement.addEventListener("submit", generateCreative);
