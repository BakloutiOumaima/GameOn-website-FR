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
// affiche la boîte modale quand on clique sur “je m’inscris”

function closeModal() {
  modalbg.style.display = "none";
}
// masque la boîte modale quand on clique sur la croix ou “Fermer”

function validate() {
  let isValid = true;

  // on efface d’abord tous les messages d’erreur visibles
  document.querySelectorAll(".formData").forEach((sec) => {
    sec.removeAttribute("data-error");
    sec.setAttribute("data-error-visible", "false");
  });

  // Prénom (min 2 caractères)
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

  // Nom (min 2 caractères)
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

  // Email (format standard)
  const email = document.getElementById("email");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailRe.test(email.value)) {
    const sec = email.closest(".formData");
    sec.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Date de naissance (non vide)
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

  // Nombre de concours (doit être un nombre)
  const qtyField = document.getElementById("quantity");
  const qtyValue = qtyField.value.trim();
  if (qtyValue === "" || isNaN(qtyValue)) {
    const sec = qtyField.closest(".formData");
    sec.setAttribute("data-error", "Veuillez entrer un nombre valide.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Radio localisation (au moins une coche)
  const locs = document.getElementsByName("location");
  if (![...locs].some((r) => r.checked)) {
    const sec = locs[0].closest(".formData");
    sec.setAttribute("data-error", "Vous devez choisir une option.");
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // CGU (case requise)
  const terms = document.getElementById("checkbox1");
  if (!terms.checked) {
    const sec = terms.closest(".formData");
    sec.setAttribute(
      "data-error",
      "Vous devez accepter les conditions d'utilisation."
    );
    sec.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Si tout est validé, on affiche le message de succès
  if (isValid) {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = `
      <p class="thank-you">Merci pour votre inscription</p>
      <button id="btn-close" class="btn-submit">Fermer</button>
    `;
    // ajoute le bouton Fermer et son événement après validation
    document.getElementById("btn-close").addEventListener("click", closeModal);
  }

  return false; // empêche le navigateur de recharger la page
}
