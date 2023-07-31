import "../styles/contact.css";

const contact = () => {
  const contentScreen = document.querySelector("#contentScreen");

  contentScreen.innerHTML = "";

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contentScreen.appendChild(contact);

  const contactCard = document.createElement("div");
  contactCard.setAttribute("id", "contactCard");
  contactCard.innerHTML = `
  <p>📞 123 456 789</p>
  <p>🏠 Hollywood Boulevard 42, Los Angeles, USA</p>
  <img width='600' height='400'>
  `;
  contact.appendChild(contactCard);
};

export default contact;
