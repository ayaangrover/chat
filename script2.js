const url = 'https://aero.ayaangrover2.repl.co/';

async function sendMessage() {
  let messageInput = document.getElementById('message-input');
  let nameInput = document.getElementById('name-input');
  let message = messageInput.value;
  let name = nameInput.value;
  let time = Date();
  // $.getJSON("https://api.ipify.org?format=json", function(data) {
        
  //     // $("#gfg").html(data.ip);
  // })
  // let ipAddress = data.ip;
  // console.log(data.ip)
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