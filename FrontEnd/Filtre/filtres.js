const formulaire = document.querySelector(".btnS");
const urlImage = 'http://localhost:5678/api/works';




function AjoutBouton () {

//api /categories  
  const UrlCategorie = 'http://localhost:5678/api/categories';
  let Valeurbtn = 1;
 // Appel de mon API 
  fetch(UrlCategorie)
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
    console.log(bouton.length);
  formulaire.appendChild(bouton);
        }
    })
  }
AjoutBouton()


// Fonction click sur les boutons
function filtre () {
  let filtres = document.querySelectorAll('.btn')
  console.log(filtres.length);

  for ( let filtre of filtres) {
    filtre.addEventListener('click', () => {
      let value = filtre.value;

          // fetch(urlImage)
          // .then(response => response.json)
          // .then (images =>{
              if (value === 0){
                 console.log("TOUS");
                } else {
                    // const filtreImage = images.flitre(image => images.id === button.value);
                    console.log("autres");
      }
    });
  };
}
filtre();