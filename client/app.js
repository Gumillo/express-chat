// HTML References
const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

// Global variables
let userName = '';

// Login form handler
function login(e) {
  e.preventDefault();
  const name = userNameInput.value.trim();

  if (!name) {
    alert('Please enter your username');
    return;
  }

  userName = name;
  loginForm.classList.remove('show');
  messagesSection.classList.add('show');
}

// Add message helper function
function addMessage(author, content) {
  const message = document.createElement('li');
  message.classList.add('message');
  message.classList.add('message--received');
  if (author === userName) {
    message.classList.add('message--self');
  }

  message.innerHTML = `
    <h3 class="message__author">${author === userName ? 'You' : author}</h3>
    <div class="message__content">
      ${content}
    </div>
  `;

  messagesList.appendChild(message);
}

// Send message handler
function sendMessage(e) {
  e.preventDefault();
  const content = messageContentInput.value.trim();

  if (!content) {
    alert('Please type a message');
    return;
  }

  addMessage(userName, content);
  messageContentInput.value = '';
}

// Event Listeners
loginForm.addEventListener('submit', login);
addMessageForm.addEventListener('submit', sendMessage);
