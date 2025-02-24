import "./styles.css";
import loadHomepage from "./homepage";
import loadMenupage from "./menupage";
import loadContactpage from "./contactpage";

loadHomepage();

const content = document.getElementById("content");
document.body.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    switch (event.target.id) {
      case "home":
        document.getElementById("content").innerHTML = "";
        loadHomepage();
        break;
      case "menu":
        document.getElementById("content").innerHTML = "";
        loadMenupage();
        break;
      case "contact":
        document.getElementById("content").innerHTML = "";
        loadContactpage();
        break;
      default:
        console.log("something else...");
        break;
    }
  }
});

console.log("Starting...");
