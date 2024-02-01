import{i as ce,a as d}from"./vendor-cb82152a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const k={showInfo:e=>{M(e)&&H(e,"info")},showSuccess:e=>{M(e)&&H(e,"success")},showError:e=>{M(e)&&H(e,"error")}},M=e=>e.trim().length<=300,H=(e,t="")=>{const r=[];for(;e.length>200;)r.push(e.slice(0,200)),e=e.slice(200);r.push(e),r.forEach((a,i)=>{ce[t]({title:i===0?a:"",message:i===0?"":a,position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,timeout:5e3,messageLineHeight:"12px"})})};d.defaults.baseURL="https://energyflow.b.goit.study/api";const N={getFilterData:async function({page:e=1,limit:t=8,filter:s="Muscles"}){try{return(await d.get("/filters",{params:{filter:s,page:e,limit:t}})).data}catch(r){return console.log(r),{page:0,totalPages:0,results:[]}}},getExercisesData:async function(e){try{return(await d.get("/exercises",{params:e})).data}catch{return{page:0,totalPages:0,results:[]}}},getQuoteOfTheDay:async function(){try{return(await d.get("/quote")).data}catch{return{author:"",quote:""}}},getExerciseInfo:async function(e=""){try{return(await d.get(`exercises/${e}`)).data}catch(t){return{_id:"",message:t.response.data.message}}},updateExerciseRating:async function({id:e="",rate:t,email:s="",review:r=""}){try{const a=await d.patch(`exercises/${e}/rating`,{rate:t,email:s,review:r});return{result:!0}}catch(a){return{result:!1,message:a.response.data.message}}},subscription:async function(e=""){try{const t=await d.post("/subscription",{email:e});return{result:!0,message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being."}}catch(t){return console.log(t),{result:!1,message:t.response.data.message}}}},l={quote:"quoteOfTheDay",favorites:"favoritesExercises"},f={async getQuoteOfTheDay(){const e=le(new Date),t=b(l.quote);if(t&&t.date===e)return t;{const s=await N.getQuoteOfTheDay();if(s!=null&&s.quote){const r={...s,date:e};return localStorage.setItem(l.quote,JSON.stringify(r)),r}return s}},getFavorites(){const e=b(l.favorites);return e||[]},addItemToFavorites(e={}){let t=b(l.favorites);t||(t=[]),t.push(e),localStorage.setItem(l.favorites,JSON.stringify(t))},deleteItemFromFavorites(e=""){const t=b(l.favorites);if(t&&e!==""){const s=t.filter(r=>r._id!==e);localStorage.setItem(l.favorites,JSON.stringify(s))}}};function b(e=""){let t=localStorage.getItem(e);if(t)try{t=JSON.parse(t)}catch{t=null}return t}function le(e){const t=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");return`${t}-${s}-${r}`}const L="/b12efjstp/assets/sprite-7989babe.svg",q={exerciseCardMarkup:function(e={},t=!1){const{name:s,burnedCalories:r,time:a,bodyPart:i,target:n,rating:F,_id:A}=e;let O="";return t?O=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${A}" aria-label="Remove exercise from favorites button">
       <svg class="exercise-card-remove-icon" width="16" height="16">
           <use href="${L}#icon-trash-black"></use>
       </svg>
    </button>`:O=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${F}</span>
         <svg class="exercise-card-rating-star" width="18" height="18">
           <use href="${L}#icon-star"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${A}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${O}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${A}" aria-label="Open exercises details window button">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon" width="16" height="16">
        <use href="${L}#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon" width="24" height="24">
      <use href="${L}#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${de(s)}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${r} / ${a} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${i}</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${n}</p>
    </li>
  </ul>
  </li>`},filterGroupsMarkup:function({name:e="",filter:t="",imgUrl:s=""}){return`<li class="exercises-gallery-item" style="${`background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${s}');`}">
    <a href="" class="exercises-gallery-link" data-name="${e}" aria-label="Select exercises by ${e}">
      <h3 class="exercises-gallery-item-title">${e}</h3>
      <p class="exercises-gallery-item-description">${t}</p>
    </a>
  </li>`},paginationMarkup:function(e=1,t=1){let s="";for(let r=1;r<=e;r++)r!==t-0?s+=`<li class="pagination-item"><a href="" aria-label="Adress to page number ${r}">${r}</a></li>`:s+=`<li class="pagination-item pagination-item-active">
    <a href="" "Adress to currently active page number ${r}">${r}</a>
  </li>`;return s}};function de(e=""){return e[0].toUpperCase()+e.substring(1)}let p=0;const B=document.querySelector(".backdrop"),h=document.querySelectorAll(".feedback-rating-stars-svg"),T=document.querySelector(".feedback-form-rating-value"),$=document.querySelector(".modal-exercise"),g=document.querySelector(".feedback-container"),ue=document.querySelector(".modal-exercise-btn-rating"),me=document.querySelector(".feedback-close-button"),se=document.querySelector(".feedback-form");function ge(){ue.addEventListener("click",re),me.addEventListener("click",I),se.addEventListener("submit",fe),pe()}function re(e=""){typeof e=="string"&&(g.dataset.id=e,$.classList.toggle("visually-hidden"),$.classList.toggle("is-open-modal"),g.classList.toggle("visually-hidden"),g.classList.toggle("is-open-modal"),ie())}function I(){se.reset(),ae(),ie(!0),g.classList.toggle("visually-hidden"),g.classList.toggle("is-open-modal"),$.classList.toggle("visually-hidden"),$.classList.toggle("is-open-modal"),R()}async function fe(e){e.preventDefault();const t=g.dataset.id,s=parseFloat(T.textContent),r=document.querySelector(".feedback-form-input").value,a=document.querySelector(".feedback-form-textarea").value.trim();if(!t||!s||!r||!a){k.showError("Please fill in all fields!");return}const i={id:t,rate:s,email:r,review:a},n=await N.updateExerciseRating(i);n.result?(k.showSuccess("Thank you! Your opinion is important to us!"),I()):k.showError(n.message)}function pe(){h.forEach(e=>{e.addEventListener("mouseenter",()=>{const t=Array.from(h).indexOf(e);D(t),_(t+1)}),e.addEventListener("mouseleave",()=>{p===0?ae():(D(p-1),_(p))}),e.addEventListener("click",()=>{const t=Array.from(h).indexOf(e)+1;p=t,T.textContent=`${p}.0`,D(t-1)})})}function D(e){h.forEach((t,s)=>{s<=e?t.classList.add("feedback-rating-stars-svg-highlight"):t.classList.remove("feedback-rating-stars-svg-highlight")})}function ae(){h.forEach(e=>{e.classList.remove("feedback-rating-stars-svg-highlight")}),T.textContent="0.0"}function _(e){T.textContent=`${e}.0`}function ie(e=!1){e?(document.removeEventListener("keyup",z),B.removeEventListener("click",G)):(B.addEventListener("click",G),document.addEventListener("keyup",z))}function G(e){e.target===B&&I()}function z(e){e.code==="Escape"&&I()}let P={};const y=document.querySelector(".backdrop");document.querySelector(".modal-exercise-btn-close");document.querySelector(".modal-exercise-btn");document.querySelector(".modal-exercise-btn-rating");const o=document.querySelector(".modal-exercise"),ve=document.querySelector(".modal-exercise-title"),he=document.querySelector(".mod-exercise-rating-value"),u=document.querySelector(".modal-exercise-list"),ye=document.querySelector(".modal-exercise-instruction-text"),c=document.querySelector(".mod-exercise-span"),xe=document.getElementById("img");function be(){document.querySelector(".modal-exercise-btn-close").addEventListener("click",we),document.querySelector(".modal-exercise-btn").addEventListener("click",Ee),document.querySelector(".modal-exercise-btn-rating").addEventListener("click",qe)}async function Le(e=""){y.classList.add("backdrop-is-open"),o.classList.add("is-open-modal"),o.dataset.isChanged="";const t=await N.getExerciseInfo(e);if(t!=null&&t._id){o.dataset.id=t._id,P=t,Se(t);const s=f.getFavorites().find(r=>r._id===t._id);c.textContent=s?c.dataset.remove:c.dataset.add,R()}else o.dataset.id="",P={},k.showError(t.message)}function Se(e){ke(e.gifUrl),ve.textContent=S(e.name),he.textContent=e.rating.toString().padEnd(3,".0"),$e(),ye.textContent=e.description,u.innerHTML="";let t="";const s=Object.keys(e);if(s.includes("target")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${S(e.target)}</p>
        </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("bodyPart")&&(t=` <li class="modal-exercise-item">
    <p class="modal-exercise-subcategory">Body Part</p>
    <p class="modal-exercise-selected">${S(e.bodyPart)}</p>
  </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("equipment")&&(t=` <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${S(e.equipment)}</p>
        </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("popularity")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${e.popularity}</p>
        </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("time")){const r=`<li class="modal-exercise-item">
            <p class="modal-exercise-subcategory">Burned Calories</p>
            <p class="modal-exercise-selected">${e.burnedCalories}/${e.time} min</p>
          </li>`;u.insertAdjacentHTML("beforeend",r)}}function Ee(){c.textContent===c.dataset.add?(c.textContent=c.dataset.remove,f.addItemToFavorites(P)):(c.textContent=c.dataset.add,f.deleteItemFromFavorites(o.dataset.id)),o.dataset.isFavorites&&(o.dataset.isChanged="true")}function ke(e){xe.style.backgroundImage=`linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.2) 0%,
      rgba(27, 27, 27, 0.2) 100%
    ),
    url(${e})`}function qe(){R(!0),re(o.dataset.id)}function we(){j()}function V(e){e.target===y&&j()}function J(e){e.code==="Escape"&&j()}function j(){R(!0),y.classList.remove("backdrop-is-open"),o.classList.remove("is-open-modal"),o.dataset.isFavorites&&Fe()}function S(e=""){return e[0].toUpperCase()+e.substring(1)}function $e(){const e=document.querySelectorAll(".mod-exercise-rating");let t,s;for(let n=0;n<e.length;n++){const F=e[n];r(F)}function r(n){a(n),i()}function a(n){t=n.querySelector(".mod-exercise-rating-active"),s=n.querySelector(".mod-exercise-rating-value")}function i(){const n=s.textContent/.05;t.style.width=`${n}%`}}function R(e=!1){e?(document.removeEventListener("keyup",J),y.removeEventListener("click",V)):(y.addEventListener("click",V),document.addEventListener("keyup",J))}const Ce=document.querySelector(".mob-menu-close-nav-button"),Te=document.querySelector(".header-button-nav"),C=document.querySelector(".mobile-menu");Te.addEventListener("click",()=>C.classList.add("is-open"));Ce.addEventListener("click",()=>C.classList.remove("is-open"));C.addEventListener("click",()=>C.classList.remove("is-open"));const Q=document.querySelector(".header-home"),U=document.querySelector(".header-favorites"),Y=document.querySelector(".header");window.location.pathname.endsWith("/favorites.html")?(U.classList.add("active"),Q.classList.remove("active"),Y.classList.remove("header-hero")):(Q.classList.add("active"),U.classList.remove("active"),Y.classList.add("header-hero"));const K=document.querySelector(".mob-menu-home"),X=document.querySelector(".mob-menu-favorites");window.location.pathname.endsWith("/favorites.html")?(X.classList.add("active"),K.classList.remove("active")):(K.classList.add("active"),X.classList.remove("active"));const v=document.querySelector(".scroll-button"),Z=document.querySelector(".scroll-mini"),ee=document.querySelector(".scroll-big");ne();v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{document.documentElement.scrollTop>=300&&v.classList.contains("is-hidden")&&v.classList.remove("is-hidden"),document.documentElement.scrollTop<300&&!v.classList.contains("is-hidden")&&v.classList.add("is-hidden")});window.addEventListener("resize",()=>{ne()});function ne(){document.documentElement.scrollWidth>=1440?(ee.classList.remove("is-undisplayed"),Z.classList.add("is-undisplayed")):(ee.classList.add("is-undisplayed"),Z.classList.remove("is-undisplayed"))}(async()=>{let e=await f.getQuoteOfTheDay();document.querySelector(".quote-author").textContent=e.author,document.querySelector(".quote-text").textContent=e.quote})();be();ge();const E=8;let w=document.documentElement.scrollWidth<768;const te=document.querySelector(".favorites-not-found-exercises"),W=document.querySelector(".favorites-exercises-list"),m=document.querySelector(".pagination-list"),oe=document.querySelector(".modal-exercise");W.addEventListener("click",Re);m.addEventListener("click",Ie);oe.dataset.isFavorites="true";window.addEventListener("resize",()=>{w!==document.documentElement.scrollWidth<768&&(w=!w,x())});x();function x(e=1){const t=f.getFavorites();w&&t.length>E?(m.classList.remove("visually-hidden"),m.innerHTML=q.paginationMarkup(Math.ceil(t.length/E)),W.innerHTML=t.slice((e-1)*E,e*E).map(s=>q.exerciseCardMarkup(s,!0)).join("")):(m.classList.add("visually-hidden"),m.innerHTML="",W.innerHTML=t.map(s=>q.exerciseCardMarkup(s,!0)).join("")),t.length>0?te.classList.add("visually-hidden"):te.classList.remove("visually-hidden")}function Ie(e){e.target.nodeName==="A"&&(e.preventDefault(),x(Number(e.target.innerText)),m.innerHTML=q.paginationMarkup(e.currentTarget.children.length,Number(e.target.innerText)))}function Re(e){const t=e.target.closest(".exercise-card-start-btn");if(t){Le(t.getAttribute("data-open-id"));return}const s=e.target.closest(".exercise-card-remove-btn");if(s){f.deleteItemFromFavorites(s.getAttribute("data-delete-id")),x();return}}function Fe(){oe.dataset.isChanged&&x()}export{N as b,k as m,Le as o,q as r};
//# sourceMappingURL=favorites-4271ca2a.js.map
