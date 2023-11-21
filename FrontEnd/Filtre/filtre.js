// Tableau de filtres
const BtnFiltre = ["Tous", "Objets", "Appartements", "Hôtels & restaurants"];

// Fonction pour créer les boutons et les ajouter au formulaire
function creerBoutons() {
  // Sélectionnez le formulaire avec la classe "btnS"
  const formulaire = document.querySelector(".btnS");

  if (formulaire) {
    for (let i = 0; i < BtnFiltre.length; i++) {
      // Créez un bouton pour chaque élément du tableau
      const bouton = document.createElement("button");
      bouton.textContent = BtnFiltre[i];



  // Appel a l'api Catégorie pour trouver les "name"
  const UrlCategorie = 'http://localhost:5678/api/categories';
    fetch(UrlCategorie)
    .then(reponse => reponse.json())
    .then(categories => {
      const categorieName = categories[i - 1].name;
      bouton.id = categorieName;

      bouton.addEventListener('click', function () {
        
      });
    });
    
      formulaire.appendChild(bouton);
    }
  } else {
    console.error("Formulaire non trouvé.");
  }
}


creerBoutons();


// function filtreObjet() {
//      // Ajoutez un événement au bouton "Objet" pour déclencher la fonction de filtrage
// const boutonObjet = document.querySelector(".btn-Objets");
// if (boutonObjet) {
//   boutonObjet.addEventListener("click", filtreObjet);
// }
//     // Remplacez ".gallery" par le sélecteur de votre galerie
//   const gallery = document.querySelector(".gallery");
//   const url = 'http://localhost:5678/api/works';

//   fetch(url)
//     .then(response => response.json())
//     .then(datas => {
//       // Supprime tous les éléments enfants de la galerie actuelle
//       while (gallery.firstChild) {
//         gallery.removeChild(gallery.firstChild);
//       }

//         // Filtre données  "Objet"
//       const objets = datas.filter(data => data.name === "Objet");

//       // Création éléments HTML pour chaque objet et galerie
//       objets.forEach(data => {
//         const figure = document.createElement("figure");
//         let dynamiqueimage = document.createElement("img");
//         dynamiqueimage.src = data.imageUrl;
//         dynamiqueimage.alt = data.title;
//         const figcaption = document.createElement("figcaption");
//         figcaption.innerHTML = data.title;

//         figure.appendChild(dynamiqueimage);
//         figure.appendChild(figcaption);
//         gallery.appendChild(figure);
    
//       });
     
//     })
    
// }



// filtreObjet();

//innerHTML = ""