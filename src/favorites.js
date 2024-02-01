import messages from './js/notificationAPI';
import localStorageAPI from './js/localStorageAPI';
import renderAPI from './js/renderMarkup';
import { openModalExercise } from './js/modal-exercise';

import './js/initialization';

const MOBILE_LIMIT = 8;
let isMobileDevice = document.documentElement.scrollWidth < 768;

const emptyListBlock = document.querySelector('.favorites-not-found-exercises');
const favoritesList = document.querySelector('.favorites-exercises-list');
const paginationList = document.querySelector('.pagination-list');
const modalExerciseWindow = document.querySelector('.modal-exercise');

favoritesList.addEventListener('click', favoritesListHandler);
paginationList.addEventListener('click', pageChangeHandler);

modalExerciseWindow.dataset.isFavorites = 'true';

// // прослуховуємо клік на button закриття модального вікна
// window.addEventListener("click", function (e) {
//   const wrap = document.querySelector('.modal-exercise-btn-close');
//   if(!wrap) return;
//     renderFavoritesList(); // видаляємо картку через render Favorites
//   this.close();
// }.bind(this));

window.addEventListener('resize', () => {
  if (isMobileDevice !== document.documentElement.scrollWidth < 768) {
    isMobileDevice = !isMobileDevice;
    renderFavoritesList();
  }
});

renderFavoritesList();

function renderFavoritesList(page = 1) {
  const items = localStorageAPI.getFavorites();

  if (isMobileDevice && items.length > MOBILE_LIMIT) {
    paginationList.classList.remove('visually-hidden');
    paginationList.innerHTML = renderAPI.paginationMarkup(
      Math.ceil(items.length / MOBILE_LIMIT)
    );
    favoritesList.innerHTML = items
      .slice((page - 1) * MOBILE_LIMIT, page * MOBILE_LIMIT)
      .map(item => renderAPI.exerciseCardMarkup(item, true))
      .join('');
  } else {
    paginationList.classList.add('visually-hidden');
    paginationList.innerHTML = '';
    favoritesList.innerHTML = items
      .map(item => renderAPI.exerciseCardMarkup(item, true))
      .join('');
  }

  items.length > 0
    ? emptyListBlock.classList.add('visually-hidden')
    : emptyListBlock.classList.remove('visually-hidden');
}

function pageChangeHandler(event) {
  if (event.target.nodeName === 'A') {
    event.preventDefault();
    renderFavoritesList(Number(event.target.innerText));
    paginationList.innerHTML = renderAPI.paginationMarkup(
      event.currentTarget.children.length,
      Number(event.target.innerText)
    );
  }
}

function favoritesListHandler(event) {
  const isStartButton = event.target.closest('.exercise-card-start-btn');
  if (isStartButton) {
    openModalExercise(isStartButton.getAttribute('data-open-id'));
    return;
  }

  const isRemoveButton = event.target.closest('.exercise-card-remove-btn');
  if (isRemoveButton) {
    localStorageAPI.deleteItemFromFavorites(
      isRemoveButton.getAttribute('data-delete-id')
    );
    renderFavoritesList();
    return;
  }
}

export function modalExerciseWindowCloseEvent() {
  if (modalExerciseWindow.dataset.isChanged) renderFavoritesList();
}
