import{l}from"./assets/initialization-9dc8d04a.js";import"./assets/vendor-b9992e9a.js";function x(e={},r=!1){const{name:s,burnedCalories:a,time:p,bodyPart:m,target:v,rating:g,_id:i}=e;let c="";return r?c=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${i}">
       <svg class="exercise-card-remove-icon">
           <use href="./img/sprite.svg#icon-trash-black"></use>
       </svg>
    </button>`:c=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${g}</span>
         <svg class="exercise-card-rating-star">
           <use href="./img/sprite.svg#icon-Star-gold"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${i}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${c}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${i}">
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
      >${s}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${a} / ${p} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${m}Waist</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${v}</p>
    </li>
  </ul>
  </li>`}function f(e=1,r=1){let s="";for(let a=1;a<=e;a++)a!==r?s+=`<li class="pagination-item"><a href="">${a}</a></li>`:s+=`<li class="pagination-item pagination-item-active">
    <a href="">${a}</a>
  </li>`;return s}const n=document.querySelector(".favorites-not-found-exercises"),h=document.querySelector(".favorites-exercises-list"),t=document.querySelector(".pagination-list"),o=l.getFavorites().length,d=8;t.classList.contains("visually-hidden")||t.classList.add("visually-hidden");window.screen.width<768&&o>d&&(t.classList.remove("visually-hidden"),t.innerHTML=f(Math.ceil(o/d)));u();document.querySelector(".favorites-exercises-list").addEventListener("click",e=>{e.target.closest(".exercise-card-start-btn")&&console.log(e.target.closest(".exercise-card-start-btn").getAttribute("data-open-id")),e.target.closest(".exercise-card-remove-btn")&&(l.deleteItemFromFavorites(e.target.closest(".exercise-card-remove-btn").getAttribute("data-delete-id")),u())});function u(){const e=l.getFavorites(),r=e.map(s=>x(s,!0)).join("");h.innerHTML=r,e.length>0?n.classList.contains("visually-hidden")||n.classList.add("visually-hidden"):n.classList.remove("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
