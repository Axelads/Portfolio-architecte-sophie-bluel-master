// Element Dom sur la Div Gallery
// const ImagesGallery = document.getElementsByClassName("gallery") async () => {
//     var fetchResult = await fetch('http://localhost:5678/api/works')
//     var data = await fetchResult.json()
//     for ()
// }


function Test() {
  const Gallery = document.querySelector(".gallery")
const url = 'http://localhost:5678/api/works';

fetch(url)
  .then(response => response.json())
  .then(datas => {
    for( let data of datas) {
      const p = document.createElement("p");
      p.innerHTML = data.title;
      // let display = ""
      // display += `<p>${data.title}</p>`
      Gallery.appendChild(p)
      // const imgGallery = data.imageUrl;
    }
  })

}

 Test();

//   async function ajoutListenerGallery() {
//      await fetch ('http://localhost:5678/api/works')        


// }

// const ImagesGallery = fetch ('http:"//localhost:5678/api/works')
//     for ( let i = 1; i < ImagesGallery.length ; i++ ) {
//         console.log(id)
//     }  

// //        // creation balise pour la gallery general
// const sectionGallery = document.createElement("article");
// // creation des balises ( img - titre de l'image etc ...)
// const ImgGallery = document.createElement("img");

// const DescriptionImg = document.createElement(p)
// DescriptionImg.innerText = article.description ?? "Pas de descritpion pour le moment"

// // rattacher la balise a la section
// ImgGallery.appendChild(sectionGallery)
// DescriptionImg.appendChild(ImgGallery)



