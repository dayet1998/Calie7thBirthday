const envelope = document.getElementById("envelope");
const flower = document.querySelector(".flower");
const names = document.querySelector(".names");

let isOpened = false;

envelope.addEventListener("click", () => {
  if (isOpened) return;
  isOpened = true;

  envelope.classList.add("open");
  flower.classList.add("hide-flower");

  setTimeout(() => {
    names.style.opacity = "1";
    names.style.transform = "translate(-50%, -50%)";
  }, 1000);

  localStorage.setItem("envelopeOpened", "true");

  setTimeout(() => {
    window.location.href = "invitation/index.html";
  }, 2500);
});

window.addEventListener("load", () => {
  envelope.classList.remove("open");
  flower.classList.remove("hide-flower");
  names.style.opacity = "0";
  names.style.transform = "translate(-50%, 20px)";
});