import backendAPI from './backendAPI';
import messages from './notificationAPI';
import localStorageAPI from './localStorageAPI';
import { openGiveRatingWindow } from './modal-feedback';

let currentExercise = {};
const backdrop = document.querySelector('.backdrop');
const exerciseCloseBnt = document.querySelector('.modal-exercise-btn-close');
const excerciseAddRemoveBtn = document.querySelector('.modal-exercise-btn');
const excerciseGiveRatingBtn = document.querySelector(
  '.modal-exercise-btn-rating'
);
const modalExersise = document.querySelector('.modal-exercise');

const titleName = document.querySelector('.modal-exercise-title');
const valueRating = document.querySelector('.mod-exercise-rating-value');
const modalExerciseList = document.querySelector('.modal-exercise-list');
const instructionText = document.querySelector(
  '.modal-exercise-instruction-text'
);
const addRemoveBtnSpan = document.querySelector('.mod-exercise-span');

const imageContainer = document.getElementById('img');

export function startModalExerciseScenario() {
  exerciseCloseBnt.addEventListener('click', exerciseCloseHandler);
  excerciseAddRemoveBtn.addEventListener('click', exerciseAddRemoveHandler);
  excerciseGiveRatingBtn.addEventListener('click', exerciseGiveRatingHandler);
}

// GET ELEMENT
export async function openModalExercise(id = '') {
  backdrop.classList.add('backdrop-is-open');
  modalExersise.classList.add('is-open-modal');

  const exerciseData = await backendAPI.getExerciseInfo(id);

  if (exerciseData?._id) {
    modalExersise.dataset.id = exerciseData._id;
    currentExercise = exerciseData;
    renderModalExercise(exerciseData);

    const isFavorite = localStorageAPI
      .getFavorites()
      .find(el => el._id === exerciseData._id);

    addRemoveBtnSpan.textContent = isFavorite
      ? addRemoveBtnSpan.dataset.remove
      : addRemoveBtnSpan.dataset.add;

    // додати клавішу Esc
  } else {
    modalExersise.dataset.id = '';
    currentExercise = {};
    messages.showError(exerciseData.message);
    // close window logic + Esc
  }
}

function renderModalExercise(elementModalExercise) {
  getExerciseImage(elementModalExercise.gifUrl);
  titleName.textContent = capitalizeString(elementModalExercise.name);
  valueRating.textContent = elementModalExercise.rating
    .toString()
    .padEnd(3, '.0');
  initRatings();
  instructionText.textContent = elementModalExercise.description;

  modalExerciseList.innerHTML = '';
  let modalExerciseItem = ``;
  const exerciseKeys = Object.keys(elementModalExercise);
  if (exerciseKeys.includes('target')) {
    modalExerciseItem = `<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${capitalizeString(
            elementModalExercise.target
          )}</p>
        </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (exerciseKeys.includes('bodyPart')) {
    modalExerciseItem = ` <li class="modal-exercise-item">
    <p class="modal-exercise-subcategory">Body Part</p>
    <p class="modal-exercise-selected">${capitalizeString(
      elementModalExercise.bodyPart
    )}</p>
  </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (exerciseKeys.includes('equipment')) {
    modalExerciseItem = ` <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${capitalizeString(
            elementModalExercise.equipment
          )}</p>
        </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (exerciseKeys.includes('popularity')) {
    modalExerciseItem = `<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${elementModalExercise.popularity}</p>
        </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
  if (exerciseKeys.includes('burnedCalories' && 'time')) {
    const modalExerciseItem = `<li class="modal-exercise-item">
            <p class="modal-exercise-subcategory">Burned Calories</p>
            <p class="modal-exercise-selected">${elementModalExercise.burnedCalories}/${elementModalExercise.time} min</p>
          </li>`;
    modalExerciseList.insertAdjacentHTML('beforeend', modalExerciseItem);
  }
}

function exerciseAddRemoveHandler() {
  if (addRemoveBtnSpan.textContent === addRemoveBtnSpan.dataset.add) {
    addRemoveBtnSpan.textContent = addRemoveBtnSpan.dataset.remove;
    localStorageAPI.addItemToFavorites(currentExercise);
  } else {
    addRemoveBtnSpan.textContent = addRemoveBtnSpan.dataset.add;
    localStorageAPI.deleteItemFromFavorites(modalExersise.dataset.id);
  }
}

function getExerciseImage(gifUrl) {
  imageContainer.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.2) 0%,
      rgba(27, 27, 27, 0.2) 100%
    ),
    url(${gifUrl})`;
}

function exerciseGiveRatingHandler() {
  openGiveRatingWindow(modalExersise.dataset.id);
}

function exerciseCloseHandler() {
  backdrop.classList.remove('backdrop-is-open');
  modalExersise.classList.remove('is-open-modal');
}

function capitalizeString(string = '') {
  return string[0].toUpperCase() + string.substring(1);
}

//GET RATING
// const ratingsRef = document.querySelectorAll('.mod-exercise-rating');
// if (ratingsRef.length > 0) {
//   initRatings();
// }

function initRatings() {
  const ratingsRef = document.querySelectorAll('.mod-exercise-rating');
  let ratingActive, ratingValue;
  for (let index = 0; index < ratingsRef.length; index++) {
    const rating = ratingsRef[index];
    getRating(rating);
  }

  function getRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
  }

  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.mod-exercise-rating-active');
    ratingValue = rating.querySelector('.mod-exercise-rating-value');
  }
  function setRatingActiveWidth() {
    const ratingActiveWidth = ratingValue.textContent / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
}