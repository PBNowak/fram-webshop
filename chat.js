const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const botReplies = [
  "Our produce is sourced from local Norwegian farms.",
  "Deliveries are available every week.",
  "We focus on reusable packaging and sustainability.",
  "You can browse our seasonal selection on the products page.",
  "Most produce arrives within 1–2 days after ordering."
];

chatForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const userMessage = chatInput.value.trim();

  if (!userMessage) {
    return;
  }

  addMessage(userMessage, "user");

  chatInput.value = "";

  setTimeout(() => {

    const randomReply =
      botReplies[Math.floor(Math.random() * botReplies.length)];

    addMessage(randomReply, "bot");

  }, 900);

});

function addMessage(text, sender) {

  const message = document.createElement("article");

  message.classList.add("message");

  if (sender === "user") {
    message.classList.add("user-message");
  } else {
    message.classList.add("bot-message");
  }

  message.innerHTML = `
    <p>${text}</p>
  `;

  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;

}