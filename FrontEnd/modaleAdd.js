// Creation modale Ajout photo
const addImgButton = document.querySelector('.addImg')
const interieurModale = document.querySelector(".modal")

addImgButton.addEventListener('click', function() {
    const interieurModale = document.querySelector(".modal");
    

      fetch('http://localhost:5678/api/categories')
      .then(response => response.json())
      .then(categories => {
        
    interieurModale.innerHTML = `<div class="button-modale">
               <button class="close-modal modal-trigger close-add-modal">X</button>
               <button class="return-modal modal-trigger">retour</i></>
        </div>
        <h3>Ajout photo</h3>
        <div class="ajoutPhoto">
           <i class="fa-regular fa-image ImgDefault"></i>
           <div class="AjouterPhoto">
              <label for="input-file">+ Ajouter photo</label>
              <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" max-size="4000" name="imageUrl">
        </div>
        <p>jpg, png : 4mo max</p>
        </div>
        <form id="AjoutInfos">
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
                </div>`;

// Evenement pour fermer la modale en cliquant sur le X
    const closeModalButton = document.querySelector('.close-modal');
    closeModalButton.addEventListener('click', () => {
        const modalContainer = document.querySelector(".modal-container");
        modalContainer.classList.remove("active");
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