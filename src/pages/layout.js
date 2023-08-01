import "../styles/layout.css";
import gitLogo from "../assets/github-mark-white.svg";

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
  const gitLink = document.createElement("a");
  gitLink.textContent = "Yunushan Göksu";
  gitLink.setAttribute("href", "https://github.com/yunushangoksu");
  gitLink.setAttribute("id", "gitLink");
  const githubLogo = document.createElement("img");
  githubLogo.setAttribute("id", "gitLogo");
  githubLogo.src = gitLogo;
  body.appendChild(footer);
  footer.appendChild(gitLink);
  footer.appendChild(githubLogo);
};

export default layout;
