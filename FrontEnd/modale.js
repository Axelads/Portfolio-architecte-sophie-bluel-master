import {PageAdmin} from "./admin.js";

document.addEventListener('DOMContentLoaded', PageAdmin);

//Creation modale
// Appeler la fonction lorsque la page est chargée


// Fonction pour activer le modale
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const urlImage = 'http://localhost:5678/api/works';
const modalGallery = document.querySelector(".modal-Galery");


// creation de la modal

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))
// modalTriggers.addEventListener("click", () => 

function toggleModal(){
    modalContainer.classList.toggle("active");

    if(modalContainer.classList.contains("active")) {
    fetch(urlImage)
     .then(response => response.json())
     .then(datas => {
        for(let data of datas) {
    const figure = document.createElement("figure")
      
    let trashIcon = document.createElement("i");
        trashIcon.className = "fa-regular fa-trash-can";
        trashIcon.style.color = "#FFFFFF";
        trashIcon.id = "TrashPosition";
    // Insertion des images de l'api  
      let dynamiqueimage = document.createElement("img")
      dynamiqueimage.src = data.imageUrl;
          
    figure.appendChild(trashIcon);
    figure.appendChild(dynamiqueimage)
    modalGallery.appendChild(figure)
      
        }
     })
} else {
    modalGallery.innerHTML = "";
   }
};


// Creation modale Ajout photo


const addImgButton = document.querySelector('.addImg');



addImgButton.addEventListener('click', function() {
    const interieurModale = document.querySelector(".modal");
    interieurModale.innerHTML = `<div class="button-modale">
    <button class="close-modal modal-trigger">X</button>
    <button class="return-modal modal-trigger"><i class="fa-solid fa-arrow-left" style="color: #000000;"></i></button>
    </div>
    <h3>Ajout photo</h3>
    <div class="ajoutPhoto">
    <i class="fa-regular fa-image"></i>
    <div class="AjouterPhoto">
    <button>+ Ajouter photo</button>
    </div>
    <p>jpg, png : 4mo max</p>
    </div>
    <form id="AjoutInfos">
                <label for="title">Titre</label>
                <input type="text">
                <label for="categorie">Catégorie</label>
            <div class="select-wrapper">
                <select id="categorie" name="categorie" required>
                     <option value="" disabled selected></option>
                     <option value="categorie1">Catégorie 1</option>
                     <option value="categorie2">Catégorie 2</option>
                </select>
            </div>
                <div class="borderValider">
                <input type="submit" value="Valider">
                </div>`;
});
