export function PostModale () {
const fileInput = document.getElementById('input-file');
const titleInput = document.querySelector('.form-AjoutPhoto input[type="text"]');
const categorySelect = document.getElementById('Selection-Categorie');
const form = document.querySelector('.form-AjoutPhoto');
const token = localStorage.getItem('token');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    // const image = this.files[0];

    // if (selectedFile && titleInput.value && categorySelect.value) {
        const formData = {
           image:fileInput.files[0],
           title:titleInput.value,
           category:categorySelect.value
        }
    // const formData = new FormData();

        // formData.append('title', titleInput.value);
        // formData.append('imageUrl', selectedFile);
        // formData.append('categoryId', categorySelect.value);
        // formData.append('userId', userId);

        // Effectuez la requête POST
        fetch('http://localhost:5678/api/works', {
             method: 'POST',
             headers: {
             'Authorization': `Bearer ${token}`},
             body : JSON.stringify(formData),
        })
               
        // body: JSON.stringify(formData)
                    //  })
        // .then(response => response.json())
        .then(data => {
          console.log("ok")
          data.push(formData);
            
        })
        // .catch(error => {
        //     console.error('Erreur lors de la requête POST:', error);
        // });
    // } else {
    //     const manqueInfo = document.createElement('p');
    // manqueInfo.textContent = "Veuillez remplir la totalité du formulaire";
    // manqueInfo.id = "Error"

    // const DivPhoto = document.querySelector(".Ajout-Photo")
    // const existingError = document.getElementById('Error');
    // if (!existingError) {
    //     DivPhoto.appendChild(manqueInfo);
    //   }

    // }
})
}