const ajoutInfosForm = document.querySelector('.borderValider input[type="submit"]');
ajoutInfosForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const title = document.querySelector('#AjoutInfos input[type="text"]').value;
    const categorie = document.querySelector('#Selection-Categorie').value;
    const imageUrl = document.querySelector('#input-file').files[0];

    
    if (title && categorie && imageUrl) {
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', categorie);
        formData.append('imageUrl', imageUrl);

        
        fetch('http://localhost:5678/api/works', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Image ajoutée avec succès:', data);
            // Fermer la modale ou effectuer d'autres actions si nécessaire
            const modalContainer = document.querySelector(".modal-container");
            modalContainer.classList.remove("active");
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout de l\'image:', error);
            // Gérer les erreurs ici
        });
    } else {
        console.error('Veuillez remplir tous les champs du formulaire.');
        // Gérer le cas où des informations manquent
    }
});