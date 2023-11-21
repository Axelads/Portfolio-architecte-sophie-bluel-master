const formulaire = document.querySelector(".btnS");

function AjoutBouton () {

//api /categories  
  const UrlCategorie = 'http://localhost:5678/api/categories';
  
 // Appel de mon API 
  fetch(UrlCategorie)
    .then(reponse => reponse.json())
    .then(datas => {
      console.log(datas);
for ( let data of datas ) {
  const bouton = document.createElement ('button');
  bouton.innerText = data.name
  bouton.id = data.name;
  formulaire.appendChild(bouton);
}


    })
  }

AjoutBouton()