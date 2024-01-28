import{l as i}from"./assets/initialization-b58de053.js";import"./assets/vendor-86291ea8.js";function m(e={},s=!1){const{name:r,burnedCalories:l,time:n,bodyPart:d,target:p,rating:u,_id:a}=e;let t="";return s?t=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${a}">
       <svg class="exercise-card-remove-icon">
           <use href="./img/sprite.svg#icon-trash-black"></use>
       </svg>
    </button>`:t=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${u}</span>
         <svg class="exercise-card-rating-star">
           <use href="./img/sprite.svg#icon-Star-gold"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${a}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${t}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${a}">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon">
        <use href="./img/sprite.svg#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon">
      <use href="./img/sprite.svg#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${r}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${l} / ${n} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${d}Waist</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${p}</p>
    </li>
  </ul>
  </li>`}const c=document.querySelector(".favorites-not-found-exercises"),x=document.querySelector(".favorites-exercises-list");o();document.querySelector(".favorites-exercises-list").addEventListener("click",e=>{e.target.closest(".exercise-card-start-btn")&&console.log(e.target.closest(".exercise-card-start-btn").getAttribute("data-open-id")),e.target.closest(".exercise-card-remove-btn")&&(i.deleteItemFromFavorites(e.target.closest(".exercise-card-remove-btn").getAttribute("data-delete-id")),o())});function o(){const e=i.getFavorites(),s=e.map(r=>m(r,!0)).join("");x.innerHTML=s,e.length>0?c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"):c.classList.remove("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
