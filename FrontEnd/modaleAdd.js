// Creation modale Ajout photo


const addImgButton = document.querySelector('.addImg');
const selectCategorie = document.getElementById('Selection-Categorie');


addImgButton.addEventListener('click', function() {
    const interieurModale = document.querySelector(".modal");

      fetch('http://localhost:5678/api/categories')
      .then(response => response.json())
      .then(categories => {

    interieurModale.innerHTML = `<div class="button-modale">
               <button class="close-modal modal-trigger">X</button>
               <button class="return-modal modal-trigger"><i class="fa-solid fa-arrow-left" style="color: #000000;"></i></button>
        </div>
        <h3>Ajout photo</h3>
        <div class="ajoutPhoto">
           <i class="fa-regular fa-image ImgDefault"></i>
           <div class="AjouterPhoto">
              <label for="input-file">+ Ajouter photo</label>
              <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file">
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
})
});

