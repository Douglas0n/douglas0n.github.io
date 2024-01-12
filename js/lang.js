window.addEventListener("DOMContentLoaded", (event) => {
  const lang = navigator.language || navigator.userLanguage;

  // Detect language and redirect
  if (lang.startsWith("pt")) {
    window.document.location.href = "/pt-br";
  } else {
    window.document.location.href = "/en-us";
  }
});
