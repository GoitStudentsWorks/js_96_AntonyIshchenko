import{l as n}from"./assets/initialization-b58de053.js";import"./assets/vendor-86291ea8.js";function g(s={},r=!1){const{name:a,burnedCalories:e,time:l,bodyPart:d,target:u,rating:p,id:t}=s;let c="";return r?c=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${t}">
       <svg class="exercise-card-remove-icon">
           <use href="./img/sprite.svg#icon-trash-black"></use>
       </svg>
    </button>`:c=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${p}</span>
         <svg class="exercise-card-rating-star">
           <use href="./img/sprite.svg#icon-Star-gold"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${t}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${c}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${t}">
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
      >${a}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${e} / ${l} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${d}Waist</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${u}</p>
    </li>
  </ul>
  </li>`}const i=document.querySelector(".favorites-not-found-exercises");function o(){const s=document.querySelector(".favorites-exercises-list"),r=n.getFavorites(),a=r.map(e=>g({name:e.name,burnedCalories:e.burnedCalories,time:e.time,bodyPart:e.bodyPart,target:e.target,rating:e.rating,id:e._id},!0)).join("");s.innerHTML=a,r.length>0?i.classList.contains("visually-hidden")||i.classList.all("visually-hidden"):i.classList.remove("visually-hidden")}o();document.querySelector(".favorites-exercises-list").addEventListener("click",s=>{s.target.closest(".exercise-card-start-btn")&&console.log(s.target.closest(".exercise-card-start-btn").getAttribute("data-open-id")),s.target.closest(".exercise-card-remove-btn")&&(n.deleteItemFromFavorites(s.target.closest(".exercise-card-remove-btn").getAttribute("data-delete-id")),o())});
//# sourceMappingURL=commonHelpers.js.map
