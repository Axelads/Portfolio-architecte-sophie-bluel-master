// creation page admin

//Apparition de modes en Admin
async function PageAdmin() {
    // Récupérer le token du local storage
    const token = await localStorage.getItem('token');
    console.log(token);

    // Vérif si le token est présent
    if (token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4') {
        // Le token est présent, afficher la div
        const bandeau = document.getElementsByClassName('bandeau');
        const LogOut = document.getElementsByClassName('logout');
        const modifier = document.getElementsByClassName('visible');
        const bouton = document.getElementsByClassName('btnS')
        
            bandeau.style.display = 'flex';
            LogOut.style.display = 'flex';
            modifier.style.display = 'flex';
            bouton.style.display = 'none';

    }
}
// Appeler la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', PageAdmin);


// Fonction pour activer le modale
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const urlImage = 'http://localhost:5678/api/works';
const modalGallery = document.querySelector(".modal-Galery")

// creation de la modal
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active");

    if(modalContainer.classList.contains("active")) {
    fetch(urlImage)
     .then(response => response.json())
     .then(datas => {
        for(let data of datas) {
    const figure = document.createElement("figure")
      
    // Insertion des images de l'api  
      let dynamiqueimage = document.createElement("img")
      dynamiqueimage.src = data.imageUrl;
          

     figure.appendChild(dynamiqueimage)
     modalGallery.appendChild(figure)
      
        }
     })
} else {
    modalGallery.innerHTML = "";
   }
}
