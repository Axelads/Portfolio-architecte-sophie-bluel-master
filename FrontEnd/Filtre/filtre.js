function filtreObjet() {
    // Remplacez ".gallery" par le sélecteur de votre galerie
  const gallery = document.querySelector(".gallery");
  const url = 'http://localhost:5678/api/works';

  fetch(url)
    .then(response => response.json())
    .then(datas => {
      // Supprime tous les éléments enfants de la galerie actuelle
      while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
      }

      // Filtre données  "Objet"
      const objets = datas.filter(data => data.name === "Objet");

      // Création éléments HTML pour chaque objet et galerie
      objets.forEach(data => {
        const figure = document.createElement("figure");
        let dynamiqueimage = document.createElement("img");
        dynamiqueimage.src = data.imageUrl;
        dynamiqueimage.alt = data.title;
        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = data.title;

        figure.appendChild(dynamiqueimage);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    
      });
     
    })
    
}

// Ajoutez un événement au bouton "Objet" pour déclencher la fonction de filtrage
const boutonObjet = document.querySelector(".btn-Objets");
if (boutonObjet) {
  boutonObjet.addEventListener("click", filtreObjet);
}

filtreObjet();