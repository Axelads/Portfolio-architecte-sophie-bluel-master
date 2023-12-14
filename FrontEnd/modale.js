import {PageAdmin} from "./admin.js";

document.addEventListener('DOMContentLoaded', PageAdmin);
let ValeurIcone = 1;
let ValeurImg = 1;

function toggleModalContainer() {
    const modalContainer = document.querySelector('.modal-container');
    const closeBtn = document.querySelector('.close-modal');
    const overlay = document.querySelector('.overlay');

    modalContainer.classList.toggle('active');

    if (modalContainer.classList.contains('active')) {
        fetch('http://localhost:5678/api/works')
            .then(response => response.json())
            .then(datas => {
                const modalGallery = document.querySelector('.modal-Galery');
                modalGallery.innerHTML = "";

                for (let data of datas) {
                    const figure = document.createElement("figure");

                    let trashIcon = document.createElement("i");
                    trashIcon.className = "fa-regular fa-trash-can";
                    trashIcon.style.color = "#FFFFFF";
                    trashIcon.id = "TrashPosition";
                    trashIcon.setAttribute('value', ValeurIcone++);

                    // Insertion des images de l'api  
                    let dynamiqueimage = document.createElement("img");
                    dynamiqueimage.src = data.imageUrl;
                    dynamiqueimage.setAttribute('value', ValeurImg++);

                    figure.appendChild(trashIcon);
                    figure.appendChild(dynamiqueimage);
                    modalGallery.appendChild(figure);
                }
            });
    } else {
        const modalGallery = document.querySelector('.modal-Galery');
        modalGallery.innerHTML = ""; // Vide la galerie si la modal n'est pas active
        ValeurIcone = 1;  
        ValeurImg = 1;
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modalContainer.classList.remove('active');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function () {
            modalContainer.classList.remove('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const modalBtn = document.querySelector('.modalbtn');
    if (modalBtn) {
        modalBtn.addEventListener('click', toggleModalContainer);
    }
});


const addImgButton = document.querySelector('.addImg');
const interieurModale = document.querySelector(".modal");
addImgButton.addEventListener('click', function() {
    
      fetch('http://localhost:5678/api/categories')
      .then(response => response.json())
      .then(categories => {
        
    interieurModale.innerHTML = `<div class="button-modale">
               <button class="close-add-modal">X</button>
               <button class="return-modal">retour</i></button>
        </div>
        <h3>Ajout photo</h3>
    <form action="" class="form-AjoutPhoto">
        <div class="ajoutPhoto">
           <i class="fa-regular fa-image ImgDefault"></i>
           <div class="AjouterPhoto">
              <label for="input-file">+ Ajouter photo</label>
              <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" max-size="4000" name="imageUrl">
            </div>
            <p>jpg, png : 4mo max</p>
        </div>
        <div id="AjoutInfos">
                <label for="title">Titre</label>
                <input type="text">
                <label for="categorie">Catégorie</label>
            <div class="select-wrapper">
                    <select id="Selection-Categorie" name="categorie" required>
                     <option value="" disabled selected></option>
                     ${categories.map(category => `<option value="${category.id}">${category.name}</option>`).join('')}
                    </select>
            </div>
                <div class="borderValider">
                <input type="submit" value="Valider">
        </div>
    </form>
</div>`;


// function resetModalState() {
//     const modal = document.querySelector('.modal');
//     ValeurIcone = 1;
//     ValeurImg = 1;

//     // Vider le contenu de la modal
//     modal.innerHTML = '';
// }

// Evenement pour fermer la modale en cliquant sur le X
const closeModalButton = document.querySelector('.close-add-modal');
closeModalButton.addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal-container');
    const modalGallery = document.querySelector('.modal-Galery');

    // Vider le contenu de la modal
    modalContainer.classList.remove('active');
    modalGallery.innerHTML = '';
});


//apppliquer le retour sur le button
const returnModalButton = document.querySelector('.return-modal');
    returnModalButton.addEventListener('click', function () {
            toggleModalContainer(); // Activer la fonction toggleModalContainer
    });

// remplacement de l'icone par le file (img) charger 
    const fileInput = document.getElementById('input-file');
fileInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];

    // verification si fichier selectionné
    if (selectedFile) {
    // creation objet FileReader
        const reader = new FileReader();

        reader.onload = function(e) {
            const divImg = document.createElement('span');
            divImg.classList.add('spanImg');
            
            const imgElement = document.createElement('img');
            imgElement.classList.add('ImgDefault');
            imgElement.src = e.target.result;

            const ajoutPhotoDiv = document.querySelector('.ajoutPhoto');
            ajoutPhotoDiv.innerHTML = '';
            ajoutPhotoDiv.appendChild(divImg);
            divImg.appendChild(imgElement);
        };

        reader.readAsDataURL(selectedFile);
    }
});
});
});

// // appel au bouton reour
// const retourModale = document.querySelector('.return-modal');
// retourModale.addEventListener('click', () => {
//     toggleModal()
// })