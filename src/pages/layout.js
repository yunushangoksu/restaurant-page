import "../styles/layout.css";

const layout = () => {
  const body = document.querySelector("#content");

  // Nav Bar

  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");
  body.appendChild(navbar);

  const homeButton = document.createElement("div");
  homeButton.setAttribute("class", "navButton");
  homeButton.setAttribute("id", "homeButton");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("div");
  menuButton.setAttribute("class", "navButton");
  menuButton.setAttribute("id", "menuButton");
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("div");
  contactButton.setAttribute("class", "navButton");
  contactButton.setAttribute("id", "contactButton");
  contactButton.textContent = "Contact";

  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);

  // Content Screen

  const contentScreen = document.createElement("div");
  contentScreen.setAttribute("id", "contentScreen");
  body.appendChild(contentScreen);

  // Footer

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  footer.textContent = "Yunushan Göksu";
  body.appendChild(footer);
};

export default layout;
