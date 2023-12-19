import {PageAdmin} from "./admin.js";

document.addEventListener('DOMContentLoaded', PageAdmin);
let ValeurIcone = 1;
let ValeurImg = 1;

function toggleModalContainer() {
    const modalContainer = document.querySelector('.modal-container');
    const closeBtn = document.querySelector('.close-modal');
    const overlay = document.querySelector('.overlay');
    const modalGallery = document.querySelector('.modal-Galery');

    modalContainer.classList.toggle('active');

    

    if (modalContainer.classList.contains('active')) {
        fetch('http://localhost:5678/api/works')
            .then(response => response.json())
            .then(datas => {
                const modalGallery = document.querySelector('.modal-Galery');
                modalGallery.innerHTML = "";

                for (let data of datas) {
                    const figure = document.createElement("figure");
                    const btnIcone = document.createElement("button");
                    btnIcone.id = "TrashPosition";
                    btnIcone.setAttribute('value', ValeurIcone++);

                    let trashIcon = document.createElement("i");
                    trashIcon.className = "fa-regular fa-trash-can";
                    trashIcon.style.color = "#FFFFFF";
                    // trashIcon.id = "TrashPosition";
                    

                    // Insertion des images de l'api  
                    let dynamiqueimage = document.createElement("img");
                    dynamiqueimage.src = data.imageUrl;
                    dynamiqueimage.setAttribute('value', ValeurImg++);

                
                    figure.appendChild(btnIcone);
                    btnIcone.appendChild(trashIcon);
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
            modalGallery.innerHTML=""
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function () {
            modalContainer.classList.remove('active');
            modalGallery.innerHTML=""
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const modalBtn = document.querySelector('.modalbtn');
    if (modalBtn) {
        modalBtn.addEventListener('click', function (event) {
            event.preventDefault();
            toggleModalContainer();
    });
}
});

import { PostModale } from "./PostModale.js";
const addImgButton = document.querySelector('.addImg');
const interieurModale = document.querySelector(".modal");
addImgButton.addEventListener('click', function() {
    
      fetch('http://localhost:5678/api/categories')
      .then(response => response.json())
      .then(categories => {
        
    interieurModale.innerHTML = `<div class="button-modale">
               <button class="close-add-modal">X</button>
               <button class="return-modal"><img src="../Backend/images/arraw-left.png" class="arraw-left" alt="arraw-left"></button>
        </div>
        <div class="Ajout-Photo"><h3>Ajout photo</h3></div>
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
                <input id="desact" type="submit" value="Valider">
                <input id="prete" type="submit" value="Valider">
        </div>
    </form>
</div>`;
CloseModalButton();
ReturnModal();
ChangeImg();
PostModale ();
btnValider ();
})
});



// Evenement pour fermer la modale en cliquant sur le X
function CloseModalButton() {
    const closeModalButton = document.querySelector('.close-add-modal');
    closeModalButton.addEventListener('click', () => {
        const ModalContainer = document.querySelector('.modal-container');
        
        // Vider le contenu de la modal
        ModalContainer.classList.remove('active');
        
    });
}

function ReturnModal() {
    const returnModalButton = document.querySelector('.return-modal');
    const modalGallery = document.querySelector('.modal-Galery');

    returnModalButton.addEventListener('click', () => { 
        toggleModalContainer();
    });
}

function ChangeImg() {
    // remplacement de l'icone par le file (img) charger 
    const fileInput = document.getElementById('input-file');
    
    fileInput.addEventListener('change', function (event) {
        const selectedFile = event.target.files[0];

        // Vérification si un fichier est sélectionné
        if (selectedFile) {
            const divImg = document.createElement('span');
            divImg.classList.add('spanImg');

            const imgElement = document.createElement('img');
            imgElement.classList.add('ImgDefault');
            imgElement.src = URL.createObjectURL(selectedFile);
            const ajoutPhotoDiv = document.querySelector('.ajoutPhoto');
            ajoutPhotoDiv.innerHTML = '';
            ajoutPhotoDiv.appendChild(divImg);
            divImg.appendChild(imgElement);
            btnValider();
        }
    });
}



function btnValider() {
    const formDesactive = document.querySelector("#desact");
    const formActive = document.querySelector("#prete");

    const fileInput = document.getElementById('input-file');
    const titleInput = document.querySelector('.form-AjoutPhoto input[type="text"]');
    const categorySelect = document.getElementById('Selection-Categorie');

    if (fileInput && titleInput && categorySelect) {
        formDesactive.style.display = 'flex';
        formActive.style.display = 'none';
    } else {
        formDesactive.style.display = 'none';
        formActive.style.display = 'flex';
    }
}
