const formulaire = document.querySelector(".btnS");
const urlImage = 'http://localhost:5678/api/works';
import { GeneratGallery } from "../gallery/gallery.js";
// function AjoutBouton () {

// //api /categories  
//   const UrlCategorie = 'http://localhost:5678/api/categories';
//   let Valeurbtn = 1;
//  // Appel de mon API 
//   fetch(UrlCategorie)
//     .then(reponse => reponse.json())
//     .then(datas => {
// for ( let data of datas ) {
//       const bouton = document.createElement('button');
//            bouton.innerText = data.name;
//            bouton.value = Valeurbtn;
//            Valeurbtn ++;
//            bouton.id = data.name;
//            bouton.classList.add('btn');
//   formulaire.appendChild(bouton);
//         }
//     })
//   }
// AjoutBouton()
async function GeneratFiltre() {
  const response = await fetch('http://localhost:5678/api/categories')
  const categories = await response.json()

  categories.forEach(categorie => {
    const filtre = document.createElement('button')
    filtre.innerText = categorie.name
    filtre.setAttribute('id', categorie.name)
    filtre.classList.add('btn')
    formulaire.appendChild(filtre)
  
  });
}

await GeneratFiltre()

async function fetchWorks() {
  const response = await fetch('http://localhost:5678/api/works')
  return await response.json()
}
const travaux = await fetchWorks()
const bouton = document.querySelectorAll('.btn')
console.log(bouton);
const gallery = document.querySelector('.gallery')
// Fonction click sur les boutons
function filtre () {
  const filtres = document.querySelectorAll('.btn')
  
  for ( let filtre of filtres) {
    filtre.addEventListener('click', (e) => {
      let value = filtre.id;
      if (value == 'tous'){
        gallery.innerHTML = ''
        GeneratGallery()
      } else {
        gallery.innerHTML =''
        
        console.log(travaux);
        const filtreImage = travaux.filter(image => image.category.name == value);
        console.log(filtreImage);
        console.log(filtre.id);
        
      }

      

          // fetch(urlImage)
          // .then(response => response.json)
          // .then (images =>{
          //   console.log(images);
          //     if (value == 'tous'){
          //        console.log("TOUS");
          //        gallery.innerHTML = ''
          //        GeneratGallery()

          //       } else {
          //           const filtreImage = images.filter(image => images.category.name === button.id);
          //           console.log(filtreimage);
      // }
    });
  };
}

filtre();