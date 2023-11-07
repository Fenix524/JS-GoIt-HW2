import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

//Генерую зображення
gallery.innerHTML = ImgItemsGenerate(galleryItems)

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

// Додаю обробник подій
gallery.addEventListener('click', onGalleryClick)

function onGalleryClick(evt) {
  evt.preventDefault();
  // console.log(evt.target.dataset);
  basicLightboxImgCreate(evt.target.dataset.source).show();  
}

function basicLightboxImgCreate(src) {
  return basicLightbox.create(`
    <img src="${src}" width="800" height="600">
`)
}

// Закриття на ESC
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    const imgIsOpen = document.querySelector(".basicLightbox");
    if (imgIsOpen) {
      imgIsOpen.outerHTML = "";
      // imgIsOpen.classList.remove("basicLightbox--visible") <-- Цим методом залипає
      // imgIsOpen.close();
    }
  }
});