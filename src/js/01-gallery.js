import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  galleryContainerEl: document.querySelector('.gallery'),
};

function createMarkup(dataArray) {
  const newMarkup = dataArray
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
  return newMarkup;
}

refs.galleryContainerEl.innerHTML = createMarkup(galleryItems);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
