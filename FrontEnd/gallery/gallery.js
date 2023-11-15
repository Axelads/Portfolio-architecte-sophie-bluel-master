function Test() {
  const Gallery = document.querySelector(".gallery")
const url = 'http://localhost:5678/api/works';

fetch(url)
  .then(response => response.json())
  .then(datas => {
    for( let data of datas) {
      const figure = document.createElement("figure")
      
    // Insertion des images de l'api  
      let dynamiqueimage = document.createElement("img")
      dynamiqueimage.src = data.imageUrl;
      dynamiqueimage.alt = data.name;

    // Insertion des titres des images   
      const figcaption = document.createElement("figcaption");
      figcaption.innerHTML = data.title;
    
    // construction des balises  
      figure.appendChild(dynamiqueimage)
      figure.appendChild(figcaption)
      Gallery.appendChild(figure)
    
    }
  })

}

 Test();



