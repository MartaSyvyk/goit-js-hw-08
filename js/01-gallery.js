import { galleryItems } from './gallery-items.js';

// Change code below this line
// import * as basicLightbox from 'basiclightbox';
const refs = 
{
    galleryContainerEl: document.querySelector(".gallery"),
}

function createMarkup (dataArray) {
       const newMarkup = dataArray.map(({preview, original, description}) => {
   return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join("");
       return newMarkup;
};

refs.galleryContainerEl.innerHTML = createMarkup(galleryItems);
refs.galleryContainerEl.addEventListener("click", onImageClick);

function onImageClick(evt) {
    
    evt.preventDefault();

if (!evt.target.classList.contains("gallery__image")){

    return;
}


let largeImageRef = evt.target.dataset.source;

let newModal = basicLightbox.create(`
<img
src="${largeImageRef}"
width="800" height="600"
/>
`)
newModal.show()
let isModalOpen = newModal.visible()


if(!isModalOpen){
    return  
}

document.addEventListener("keydown", onEscPress)
function onEscPress(evt) {

  if (evt.code !== "Escape"){
        return
  }
  
document.removeEventListener("keydown", onEscPress);
newModal.close();


};
}

