import PancakeImg from "./images/pancakes.jpg";

function loadHomepage() {
  const content = document.getElementById("content");

  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");

  newImg.src = PancakeImg;
  newImg.alt = "pancakes";

  newDiv.appendChild(newImg);

  const boxDiv = document.createElement("div");
  boxDiv.classList.add("box");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome!";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "This is a pancake house that has been around for several decades...";

  boxDiv.appendChild(heading);
  boxDiv.appendChild(paragraph);

  content.appendChild(newDiv);
  content.appendChild(boxDiv);
}

export default loadHomepage;
