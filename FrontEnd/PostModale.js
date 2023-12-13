const ajoutInfosForm = document.querySelector('#AjourInfos');
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
    }
});