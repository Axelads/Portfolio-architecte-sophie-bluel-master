async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const url = 'http://localhost:5678/api/users/login';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
      
    });

    const data = await response.json();

    if (response.ok) {
      // Connexion réussie
      window.location.href = '../index.html';
    } else {
      const errorParagraph = document.createElement('p');
      errorParagraph.textContent = 'Mot de passe ou E-mail incorrect';
      // Ajout l'ID "Error" à l'élément errorParagraph (qui est le <p>)
      errorParagraph.id = 'Error';
      
      // Verifier si le message d'erreur existe déjà,
      const h2 = document.getElementById('Log').querySelector('h2');
      const existingError = document.getElementById('Error');

      if (existingError) {
        // Si le message d'erreur existe déjà, le remplacer
        h2.replaceChild(errorParagraph, existingError);
      } else {
        // Sinon, l'ajouter
        h2.appendChild(errorParagraph);
      }
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  };
}
login();


// const form = document.querySelector('form');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const errorParagraph = document.createElement('p');
// const Titre = document.querySelector('h2')

// // Evénements pour le formulaire
// form.addEventListener('submit', function (event) {
  
//   event.preventDefault();

//   // Recuperez les valeurs saisies par l'utilisateur
//   const userEmail = emailInput.value;
//   const userPassword = passwordInput.value;

//   // Verification e-mail et mot de passe corrects
//   if (userEmail === 'admin@admin.fr' && userPassword === 'admin') {
//     // Redirigez l'utilisateur vers la page accueil
//     window.location.href = '../index.html';
//   } else {
//     // message d'erreur
//     errorParagraph.textContent = 'Mot de passe ou E-mail incorrect';
//     // Ajout l'ID "Error" à l'élément errorParagraph (qui est le <p>)
//     errorParagraph.id = 'Error';
//     // Verifier si le message d'erreur existe déjà, sinon ajoutez-le
//     if (!Titre.contains(errorParagraph)) {
//       Titre.appendChild(errorParagraph);
//     }
//   }
// });