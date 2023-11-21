const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorParagraph = document.createElement('p');
const Titre = document.querySelector('h2')

// Evénements pour le formulaire
form.addEventListener('submit', function (event) {
  
  event.preventDefault();

  // Recuperez les valeurs saisies par l'utilisateur
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  // Verification e-mail et mot de passe corrects
  if (userEmail === 'admin@admin.fr' && userPassword === 'admin') {
    // Redirigez l'utilisateur vers la page accueil
    window.location.href = '../index.html';
  } else {
    // message d'erreur
    errorParagraph.textContent = 'Mot de passe ou E-mail incorrect';
    // Ajout l'ID "Error" à l'élément errorParagraph (qui est le <p>)
    errorParagraph.id = 'Error';
    // Verifier si le message d'erreur existe déjà, sinon ajoutez-le
    if (!Titre.contains(errorParagraph)) {
      Titre.appendChild(errorParagraph);
    }
  }
});