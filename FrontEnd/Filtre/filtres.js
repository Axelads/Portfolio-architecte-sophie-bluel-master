import { GeneratGallery } from "../gallery/gallery.js";

const Gallery = document.querySelector(".gallery");

function clickbtn() {
  const filtres = document.querySelectorAll('button');

  filtres.forEach(filtre => {
    filtre.addEventListener('click', () => {
      let value = filtre.value;

      if (value === 0) {
        console.log('ok');
        GeneratGallery();
      } else {
        let Delet = document.getElementsByTagName('figure');
        Delete.forEach(element => {
          element.remove();
        });
    }
  });
});
}

clickbtn();