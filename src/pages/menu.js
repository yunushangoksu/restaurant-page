import "../styles/menu.css";

const pizzas = [
  {
    name: "Salsiccia",
    description:
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
    img: "../asset/salsiccia.png",
  },
  {
    name: "Gamberi",
    description: "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
    img: "../asset/gamberi.png",
  },
  {
    name: "Pepe",
    description: "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
    img: "../asset/pepe.png",
  },
  {
    name: "Disgustoso",
    description: "Tomato sauce, Bacon, Pineapple, Olives, Basil",
    img: "../asset/disgustoso.png",
  },
  {
    name: "Colorato",
    description: "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil",
    img: "../asset/colorato.png",
  },
  {
    name: "Pomodoro",
    description: "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli",
    img: "../asset/pomodoro.png",
  },
  {
    name: "Crema",
    description:
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil",
    img: "../asset/crema.png",
  },
  {
    name: "Carne",
    description:
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli",
    img: "../asset/carne.png",
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
    <img href='${pizzas[i].img}' width='122' height='80'>
    <p>${pizzas[i].name}</p>
    <p>${pizzas[i].description}</p>
    `;
    menu.appendChild(menuCard.cloneNode(true));
  }
};

export default menu;
