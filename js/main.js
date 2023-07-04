// Atualiza o ano do footer da página.
$("#current-year").text(new Date().getFullYear());

// Referente ao Scrollspy, do Bootstrap.
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example3",
});
