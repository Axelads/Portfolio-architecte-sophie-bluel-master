import {PageAdmin} from "./admin.js";

document.addEventListener('DOMContentLoaded', PageAdmin);

//Creation modale
// Appeler la fonction lorsque la page est chargée


// Fonction pour activer le modale
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const urlImage = 'http://localhost:5678/api/works';
const modalGallery = document.querySelector(".modal-Galery")

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
}
