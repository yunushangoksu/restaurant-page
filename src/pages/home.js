import "../styles/home.css";

const home = () => {
  const contentScreen = document.querySelector("#contentScreen");

  contentScreen.innerHTML = "";

  const home = document.createElement("div");
  home.setAttribute("id", "home");
  contentScreen.appendChild(home);

  const homeCard = document.createElement("div");
  homeCard.setAttribute("id", "homeCard");
  homeCard.innerHTML = `
  <p>Best pizza in your country</p>
  <p>Made with passion since 1908</p>
  <img width='300' height='300'>
  <p>Order online or visit us!</p>
  `;
  home.appendChild(homeCard);
};

export default home;
