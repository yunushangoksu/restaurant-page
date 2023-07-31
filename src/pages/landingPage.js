const landingPage = () => {
  const body = document.querySelector("#content");

  const topRow = document.createElement("div");
  topRow.textContent = "annen";
  body.appendChild(topRow);
  const homeButton = document.createElement("div");
  const menuButton = document.createElement("div");
  const contactButton = document.createElement("div");
  topRow.appendChild(homeButton, menuButton, contactButton);
};

export default landingPage;
