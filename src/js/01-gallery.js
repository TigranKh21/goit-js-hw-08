import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.style.listStyleType = 'none';
const imageArray = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}"
            alt="${description}"
          />
      </a>
    </li>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', imageArray);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(gallery);
