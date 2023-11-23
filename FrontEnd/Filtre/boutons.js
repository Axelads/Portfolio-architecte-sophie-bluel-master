const formulaire = document.querySelector(".btnS");
const filtre = formulaire.querySelectorAll('button')
console.log(filtre);


function AjoutBouton () {

//api /categories  
  const UrlCategorie = 'http://localhost:5678/api/categories';
  let Valeurbtn = 1;
 // Appel de mon API 
  fetch(UrlCategorie, Option)
    .then(reponse => reponse.json())
    .then(datas => {
      console.log(datas);
for ( let data of datas ) {
  const bouton = document.createElement ('button');
  bouton.innerText = data.name;
  bouton.value = Valeurbtn;
  Valeurbtn ++;
  bouton.id = data.name;
  bouton.classList.add('btn');

  formulaire.appendChild(bouton);
        }
    })
  }
AjoutBouton()

filtres.forEach(filtre => {
    filtre.addEventListener('click', () => {
    console.log('ok');

  })
})
