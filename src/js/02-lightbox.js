import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);
const galleryHtml = document.querySelector('.gallery');
let gallery;  

//Генерую зображення
galleryHtml.innerHTML = ImgItemsGenerate(galleryItems)
gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function ImgItemsGenerate(array) {
  return galleryItems.map((el) => {
    const {preview, original, description} = el;
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}" 
          alt="${description}" 
          data-source="${original}"
        >
      </a>
    </li>
    `
  }).join("")
}


galleryHtml.addEventListener('click', onGalleryClick)

function onGalleryClick(evt) {
  evt.preventDefault();  
  gallery.open(evt.target);
  
}

