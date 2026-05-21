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

  addUserMessage(userMessage);

  chatInput.value = "";

  showTypingMessage();

  setTimeout(() => {
    removeTypingMessage();

    const randomReply =
      botReplies[Math.floor(Math.random() * botReplies.length)];

    addBotMessage(randomReply);
  }, 900);
});

function addUserMessage(text) {
  const messageRow = document.createElement("article");

  messageRow.className = "message-row user-row";

  messageRow.innerHTML = `
    <div class="message user-message">
      <p>${text}</p>
    </div>
  `;

  chatMessages.appendChild(messageRow);
  scrollToLatestMessage();
}

function addBotMessage(text) {
  const messageRow = document.createElement("article");

  messageRow.className = "message-row bot-row";

  messageRow.innerHTML = `
    <span class="message-name">FRAM</span>

    <div class="message bot-message">
      <p>${text}</p>
    </div>
  `;

  chatMessages.appendChild(messageRow);
  scrollToLatestMessage();
}

function showTypingMessage() {
  const typingMessage = document.createElement("article");

  typingMessage.className = "message-row bot-row";
  typingMessage.id = "typingMessage";

  typingMessage.innerHTML = `
    <span class="message-name">FRAM</span>

    <div class="message bot-message">
      <p>...</p>
    </div>
  `;

  chatMessages.appendChild(typingMessage);
  scrollToLatestMessage();
}

function removeTypingMessage() {
  const typingMessage = document.getElementById("typingMessage");

  if (typingMessage) {
    typingMessage.remove();
  }
}

function scrollToLatestMessage() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}