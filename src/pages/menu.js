import "../styles/menu.css";
import salsiccia from "../assets/salsiccia.png";
import pomodoro from "../assets/pomodoro.png";
import pepe from "../assets/pepe.png";
import gamberi from "../assets/gamberi.png";
import disgustoso from "../assets/disgustoso.png";
import crema from "../assets/crema.png";
import colorato from "../assets/colorato.png";
import carne from "../assets/carne.png";

const pizzas = [
  {
    name: "Salsiccia",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
  },
  {
    name: "Gamberi",
    description: "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
  },
  {
    name: "Pepe",
    description: "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
  },
  {
    name: "Disgustoso",
    description: "Tomato sauce, Bacon, Pineapple, Olives, Basil",
  },
  {
    name: "Colorato",
    description: "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil",
  },
  {
    name: "Pomodoro",
    description: "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli",
  },
  {
    name: "Crema",
    description:
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil",
  },
  {
    name: "Carne",
    description:
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli",
  },
];

const menu = () => {
  const contentScreen = document.querySelector("#contentScreen");

  contentScreen.innerHTML = "";

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  contentScreen.appendChild(menu);

  const menuCard = document.createElement("div");
  menuCard.setAttribute("class", "menuCard");

  for (let i = 0; i < pizzas.length; i++) {
    menuCard.innerHTML = `
    <img id='pizza${i}' width='122' height='80'>
    <p>${pizzas[i].name}</p>
    <p>${pizzas[i].description}</p>
    `;
    menu.appendChild(menuCard.cloneNode(true));
  }

  const pizza0 = document.querySelector("#pizza0");
  pizza0.src = salsiccia;
  const pizza1 = document.querySelector("#pizza1");
  pizza1.src = gamberi;
  const pizza2 = document.querySelector("#pizza2");
  pizza2.src = pepe;
  const pizza3 = document.querySelector("#pizza3");
  pizza3.src = disgustoso;
  const pizza4 = document.querySelector("#pizza4");
  pizza4.src = colorato;
  const pizza5 = document.querySelector("#pizza5");
  pizza5.src = pomodoro;
  const pizza6 = document.querySelector("#pizza6");
  pizza6.src = crema;
  const pizza7 = document.querySelector("#pizza7");
  pizza7.src = carne;
};

export default menu;
