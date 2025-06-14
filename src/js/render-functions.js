import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `<li class="gallery-item">
    <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}" />
    </a>
    <div class="gallery-info">
    <p><b>Likes:</b> ${image.likes}</p>
    <p><b>Views:</b> ${image.views}</p>
    <p><b>Comments:</b> ${image.comments}</p>
    <p><b>Downloads:</b> ${image.downloads}</p>
    </div>
    </li>`;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton(h) {
  loadMoreBtn.classList.add('hidden');
}
