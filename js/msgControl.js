// Executando a manipulação dos objetos em local storage.
if (!localStorage.messages) {
  localStorage.messages = [];
}

const msgToast = document.getElementById("msgToast");
const clearToast = document.getElementById("clearToast");
const toastBootstrapMsg = bootstrap.Toast.getOrCreateInstance(msgToast);
const toastBootstrapClear = bootstrap.Toast.getOrCreateInstance(clearToast);

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

  // Limpa o formulário.
  document.forms["contactForm"]["nameInput"].value = "";
  document.forms["contactForm"]["emailInput"].value = "";
  document.forms["contactForm"]["textInput"].value = "";

  toastBootstrapMsg.show();
});

// Lida com a exclusão das mensagens.
document.getElementById("myCleanBtn").addEventListener("click", () => {
  localStorage.messages = [];
  toastBootstrapClear.show();
});
