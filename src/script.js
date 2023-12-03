function generateCreative(event) {
  event.preventDefault();

  let topic = document.querySelector('input[type="text"]').value;
  let poemElement = document.getElementById("poem");

  let poem = `
    My life closed twice before its close—
    It yet remains to see
    If Immortality unveil
    A third event to me

    So huge, so hopeless to conceive
    As these that twice befell.
    Parting is all we know of heaven,
    And all we need of hell.
  `;

  poemElement.innerHTML = poem;
}

let creativeFormElement = document.querySelector("#creative-generator-form");
creativeFormElement.addEventListener("submit", generateCreative);
