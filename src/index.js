import "./styles/reset.css";

import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import layout from "./pages/layout";

layout();
home();

const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const contactButton = document.querySelector("#contactButton");

homeButton.addEventListener("click", () => {
  home();
});
menuButton.addEventListener("click", () => {
  menu();
});
contactButton.addEventListener("click", () => {
  contact();
});
