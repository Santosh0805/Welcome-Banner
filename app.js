
const userName = "India";

const currentTime = new Date();
const hours = currentTime.getHours();

let greeting;
if (hours < 12) {
  greeting = "Good Morning";
} else if (hours < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

const greetingMessage = document.getElementById("greeting-message");
greetingMessage.textContent = `${greeting}, ${userName}! `;

const quotes = document.getElementById("quotes");
quotes.textContent =`${quotes}`;

