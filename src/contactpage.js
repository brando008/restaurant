import PancakeImg from "./images/chef.jpg";

function loadContactpage() {
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
  paragraph.textContent = "Meet the chef...";

  const contact = document.createElement("p");
  contact.textContent = "Email: chefpancake@yahoo.com";

  boxDiv.appendChild(heading);
  boxDiv.appendChild(paragraph);
  boxDiv.appendChild(contact);

  content.appendChild(newDiv);
  content.appendChild(boxDiv);
}

export default loadContactpage;
