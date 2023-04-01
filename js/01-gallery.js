import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery');

(function () {
    const marcup = galleryItems.map(({preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" target="_self" href="${original}">
    <img
      class="gallery__image js-target"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
    gallery.insertAdjacentHTML('beforeend', marcup)
})();

gallery.addEventListener('click', onClick)

function onClick(evt) {
   evt.preventDefault();
    if (!evt.target.classList.contains('js-target')) {
        return;
    }
    const currentItem = evt.target.closest('.js-target')
    const source = currentItem.dataset.source
    

    const data = galleryItems.find(({ original }) => original === source);
    console.log(data)
    
    const instance = basicLightbox.create(`
    <img src="${data.original}" width="800" height="600">
`)

instance.show()
}





