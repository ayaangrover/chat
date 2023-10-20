const url = 'https://aero.ayaangrover2.repl.co/';

async function sendMessage() {
  let messageInput = document.getElementById('message-input');
  let nameInput = document.getElementById('name-input');
  let pwd = document.getElementById('pwd-input').value;
  pwd=String(pwd)
  console.log(pwd)
  let message = messageInput.value;
  let name = nameInput.value;
  let time = Date();
  
  let fullUrl = url + 'send/' + message + ' (' + name + ')' + ' (' + time + ')';
  await fetch(fullUrl);
}

async function getMessages() {
  let res = await fetch(url);
  let messages = await res.json();

  let messagesDiv = document.getElementById('message-div');
  messagesDiv.innerHTML = '';

  for (let i = messages.length - 1; i > 0; i--) {
    messagesDiv.innerHTML += '<p>' + messages[i] + '</p>';
  }
}

setInterval(getMessages, 1000);