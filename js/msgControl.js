// Executando a manipulação dos objetos em local storage.
if (!localStorage.messages) {
  localStorage.messages = [];
}

const msgToast = document.getElementById("msgToast");
const clearToast = document.getElementById("clearToast");
const toastBootstrapMsg = bootstrap.Toast.getOrCreateInstance(msgToast);
const toastBootstrapClear = bootstrap.Toast.getOrCreateInstance(clearToast);

function clearForm() {
  // Limpa o formulário.
  document.forms["contactForm"]["nameInput"].value = "";
  document.forms["contactForm"]["emailInput"].value = "";
  document.forms["contactForm"]["textInput"].value = "";
}

document.getElementById("myContactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let formName = document.forms["contactForm"]["nameInput"].value;
  let formEmail = document.forms["contactForm"]["emailInput"].value;
  let formText = document.forms["contactForm"]["textInput"].value;

  let localMsg = [];
  if (localStorage.messages) {
    localMsg = JSON.parse(localStorage.messages);
  }
  localMsg.push({
    name: formName,
    email: formEmail,
    text: formText,
  });

  // Salva em local storage.
  localStorage.messages = JSON.stringify(localMsg);

  clearForm();
  toastBootstrapMsg.show();
});

// Lida com a exclusão das mensagens.
document.getElementById("myCleanBtn").addEventListener("click", () => {
  localStorage.messages = [];
  clearForm();
  toastBootstrapClear.show();
});

document.getElementById("myMsgModalBtn").addEventListener("click", () => {
  let modalBody = document.getElementById("myMsgModalBody");
  modalBody.innerHTML = "";

  let msgData = [];
  if (localStorage.messages) {
    msgData = JSON.parse(localStorage.messages);
  }

  if (msgData.length === 0) {
    modalBody.innerHTML = `<p class="mb-0 pt-3">Nenhuma mensagem salva.`;
  } else {
    for (let i = 0; i < msgData.length; i++) {
      let msgCard =
        `<div class="card w-100 mt-3"><div class="card-body"><figure class="mb-0"><blockquote class="blockquote"><p>` +
        msgData[i]["text"] +
        `</p></blockquote><figcaption class="blockquote-footer mb-0">` +
        msgData[i]["name"] +
        ", " +
        msgData[i]["email"] +
        `</figcaption></figure></div></div>`;
      
      // Insere cards dentro do modal.
      modalBody.innerHTML += msgCard;
    }
  }
});
