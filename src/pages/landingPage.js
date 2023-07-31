const landingPage = () => {
  console.log("works");

  const body = document.querySelector("#content");
  let yazi = document.createElement("p");
  yazi.textContent = "Yunushan";
  body.appendChild(yazi);
};

export default landingPage;
