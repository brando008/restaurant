import PancakeImg from "./images/pancakes2.jpg";

function loadMenupage() {
  const content = document.getElementById("content");

  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");

  newImg.src = PancakeImg;
  newImg.alt = "pancakes";

  newDiv.appendChild(newImg);

  const boxDiv = document.createElement("div");
  boxDiv.classList.add("box");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const paragraph = document.createElement("p");
  paragraph.textContent = "We only serve pancakes, but here is another pancake";

  boxDiv.appendChild(heading);
  boxDiv.appendChild(paragraph);

  content.appendChild(newDiv);
  content.appendChild(boxDiv);
}

export default loadMenupage;
