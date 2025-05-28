function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
}

function validate() {
  let isValid = true;

  document.querySelectorAll(".formData").forEach((sec) => {
    sec.removeAttribute("data-error");
    sec.setAttribute("data-error-visible", "false");
  });

  const sections = document.querySelectorAll(".formData");
  sections.forEach((sec) => {
    sec.removeAttribute("data-error");
    sec.setAttribute("data-error-visible", "false");
  });

  const first = document.getElementById("first");
  if (!first.value || first.value.trim().length < 2) {
    const sec = first.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le prénom."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  const last = document.getElementById("last");
  if (!last.value || last.value.trim().length < 2) {
    const sec = last.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le nom."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  const email = document.getElementById("email");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailRe.test(email.value)) {
    const sec = email.closest(".formData");
    sec.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  const bdate = document.getElementById("birthdate");
  if (!bdate.value) {
    const sec = bdate.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  const qtyField = document.getElementById("quantity");
  const qtyValue = qtyField.value.trim();
  if (qtyValue === "" || isNaN(qtyValue)) {
    const sec = qtyField.closest(".formData");
    sec.setAttribute("data-error", "Veuillez entrer un nombre valide.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  const locs = document.getElementsByName("location");
  if (![...locs].some((r) => r.checked)) {
    const sec = locs[0].closest(".formData");
    sec.setAttribute("data-error", "Vous devez choisir une option.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  const terms = document.getElementById("checkbox1");
  if (!terms.checked) {
    const sec = terms.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  if (isValid) {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML =
      "<p class='thank-you'>Merci ! Votre inscription a bien été reçue.</p>";
    setTimeout(closeModal, 2000);
  }

  return false;
}
