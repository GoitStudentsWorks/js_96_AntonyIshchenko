import{i as ce,a as d}from"./vendor-cb82152a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const q={showInfo:e=>{H(e)&&D(e,"info")},showSuccess:e=>{H(e)&&D(e,"success")},showError:e=>{H(e)&&D(e,"error")}},H=e=>e.trim().length<=300,D=(e,t="")=>{const r=[];for(;e.length>200;)r.push(e.slice(0,200)),e=e.slice(200);r.push(e),r.forEach((a,i)=>{ce[t]({title:i===0?a:"",message:i===0?"":a,position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,timeout:5e3,messageLineHeight:"12px"})})};d.defaults.baseURL="https://energyflow.b.goit.study/api";const N={getFilterData:async function({page:e=1,limit:t=8,filter:s="Muscles"}){try{return(await d.get("/filters",{params:{filter:s,page:e,limit:t}})).data}catch(r){return console.log(r),{page:0,totalPages:0,results:[]}}},getExercisesData:async function(e){try{return(await d.get("/exercises",{params:e})).data}catch{return{page:0,totalPages:0,results:[]}}},getQuoteOfTheDay:async function(){try{return(await d.get("/quote")).data}catch{return{author:"",quote:""}}},getExerciseInfo:async function(e=""){try{return(await d.get(`exercises/${e}`)).data}catch(t){return{_id:"",message:t.response.data.message}}},updateExerciseRating:async function({id:e="",rate:t,email:s="",review:r=""}){try{const a=await d.patch(`exercises/${e}/rating`,{rate:t,email:s,review:r});return{result:!0}}catch(a){return{result:!1,message:a.response.data.message}}},subscription:async function(e=""){try{const t=await d.post("/subscription",{email:e});return{result:!0,message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being."}}catch(t){return console.log(t),{result:!1,message:t.response.data.message}}}},l={quote:"quoteOfTheDay",favorites:"favoritesExercises"},f={async getQuoteOfTheDay(){const e=le(new Date),t=L(l.quote);if(t&&t.date===e)return t;{const s=await N.getQuoteOfTheDay();if(s!=null&&s.quote){const r={...s,date:e};return localStorage.setItem(l.quote,JSON.stringify(r)),r}return s}},getFavorites(){const e=L(l.favorites);return e||[]},addItemToFavorites(e={}){let t=L(l.favorites);t||(t=[]),t.push(e),localStorage.setItem(l.favorites,JSON.stringify(t))},deleteItemFromFavorites(e=""){const t=L(l.favorites);if(t&&e!==""){const s=t.filter(r=>r._id!==e);localStorage.setItem(l.favorites,JSON.stringify(s))}}};function L(e=""){let t=localStorage.getItem(e);if(t)try{t=JSON.parse(t)}catch{t=null}return t}function le(e){const t=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");return`${t}-${s}-${r}`}const S="/b12efjstp/assets/sprite-7989babe.svg",w={exerciseCardMarkup:function(e={},t=!1){const{name:s,burnedCalories:r,time:a,bodyPart:i,target:n,rating:A,_id:O}=e;let M="";return t?M=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${O}" aria-label="Remove exercise from favorites button">
       <svg class="exercise-card-remove-icon" width="16" height="16">
           <use href="${S}#icon-trash-black"></use>
       </svg>
    </button>`:M=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${A}</span>
         <svg class="exercise-card-rating-star" width="18" height="18">
           <use href="${S}#icon-star"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${O}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${M}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${O}" aria-label="Open exercises details window button">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon" width="16" height="16">
        <use href="${S}#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon" width="24" height="24">
      <use href="${S}#icon-icon-run"></use>
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
  </li>`;return s}};function de(e=""){return e[0].toUpperCase()+e.substring(1)}let p=0;const P=document.querySelector(".backdrop"),y=document.querySelectorAll(".feedback-rating-stars-svg"),I=document.querySelector(".feedback-form-rating-value"),C=document.querySelector(".modal-exercise"),g=document.querySelector(".feedback-container"),ue=document.querySelector(".modal-exercise-btn-rating"),me=document.querySelector(".feedback-close-button"),se=document.querySelector(".feedback-form");function ge(){ue.addEventListener("click",re),me.addEventListener("click",R),se.addEventListener("submit",fe),pe()}function re(e=""){typeof e=="string"&&(g.dataset.id=e,C.classList.toggle("visually-hidden"),C.classList.toggle("is-open-modal"),g.classList.toggle("visually-hidden"),g.classList.toggle("is-open-modal"),ie())}function R(){se.reset(),ae(),ie(!0),g.classList.toggle("visually-hidden"),g.classList.toggle("is-open-modal"),C.classList.toggle("visually-hidden"),C.classList.toggle("is-open-modal"),F()}async function fe(e){e.preventDefault();const t=g.dataset.id,s=parseFloat(I.textContent),r=document.querySelector(".feedback-form-input").value,a=document.querySelector(".feedback-form-textarea").value.trim();if(!t||!s||!r||!a){q.showError("Please fill in all fields!");return}const i={id:t,rate:s,email:r,review:a},n=await N.updateExerciseRating(i);n.result?(q.showSuccess("Thank you! Your opinion is important to us!"),R()):q.showError(n.message)}function pe(){y.forEach(e=>{e.addEventListener("mouseenter",()=>{const t=Array.from(y).indexOf(e);B(t),_(t+1)}),e.addEventListener("mouseleave",()=>{p===0?ae():(B(p-1),_(p))}),e.addEventListener("click",()=>{const t=Array.from(y).indexOf(e)+1;p=t,I.textContent=`${p}.0`,B(t-1)})})}function B(e){y.forEach((t,s)=>{s<=e?t.classList.add("feedback-rating-stars-svg-highlight"):t.classList.remove("feedback-rating-stars-svg-highlight")})}function ae(){y.forEach(e=>{e.classList.remove("feedback-rating-stars-svg-highlight")}),I.textContent="0.0"}function _(e){I.textContent=`${e}.0`}function ie(e=!1){e?(document.removeEventListener("keyup",z),P.removeEventListener("click",G)):(P.addEventListener("click",G),document.addEventListener("keyup",z))}function G(e){e.target===P&&R()}function z(e){e.code==="Escape"&&R()}let W={};const x=document.querySelector(".backdrop");document.querySelector(".modal-exercise-btn-close");document.querySelector(".modal-exercise-btn");document.querySelector(".modal-exercise-btn-rating");const o=document.querySelector(".modal-exercise"),ve=document.querySelector(".modal-exercise-title"),he=document.querySelector(".mod-exercise-rating-value"),u=document.querySelector(".modal-exercise-list"),ye=document.querySelector(".modal-exercise-instruction-text"),c=document.querySelector(".mod-exercise-span"),xe=document.getElementById("img");function be(){document.querySelector(".modal-exercise-btn-close").addEventListener("click",we),document.querySelector(".modal-exercise-btn").addEventListener("click",Ee),document.querySelector(".modal-exercise-btn-rating").addEventListener("click",qe)}async function Le(e=""){x.classList.add("backdrop-is-open"),o.classList.add("is-open-modal"),o.dataset.isChanged="";const t=await N.getExerciseInfo(e);if(t!=null&&t._id){o.dataset.id=t._id,W=t,Se(t);const s=f.getFavorites().find(r=>r._id===t._id);c.textContent=s?c.dataset.remove:c.dataset.add,F()}else o.dataset.id="",W={},q.showError(t.message)}function Se(e){ke(e.gifUrl),ve.textContent=E(e.name),he.textContent=e.rating.toString().padEnd(3,".0"),$e(),ye.textContent=e.description,u.innerHTML="";let t="";const s=Object.keys(e);if(s.includes("target")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${E(e.target)}</p>
        </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("bodyPart")&&(t=` <li class="modal-exercise-item">
    <p class="modal-exercise-subcategory">Body Part</p>
    <p class="modal-exercise-selected">${E(e.bodyPart)}</p>
  </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("equipment")&&(t=` <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${E(e.equipment)}</p>
        </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("popularity")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${e.popularity}</p>
        </li>`,u.insertAdjacentHTML("beforeend",t)),s.includes("time")){const r=`<li class="modal-exercise-item">
            <p class="modal-exercise-subcategory">Burned Calories</p>
            <p class="modal-exercise-selected">${e.burnedCalories}/${e.time} min</p>
          </li>`;u.insertAdjacentHTML("beforeend",r)}}function Ee(){c.textContent===c.dataset.add?(c.textContent=c.dataset.remove,f.addItemToFavorites(W)):(c.textContent=c.dataset.add,f.deleteItemFromFavorites(o.dataset.id)),o.dataset.isFavorites&&(o.dataset.isChanged="true")}function ke(e){xe.style.backgroundImage=`linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.2) 0%,
      rgba(27, 27, 27, 0.2) 100%
    ),
    url(${e})`}function qe(){F(!0),re(o.dataset.id)}function we(){j()}function V(e){e.target===x&&j()}function J(e){e.code==="Escape"&&j()}function j(){F(!0),x.classList.remove("backdrop-is-open"),o.classList.remove("is-open-modal"),o.dataset.isFavorites&&Fe()}function E(e=""){return e[0].toUpperCase()+e.substring(1)}function $e(){const e=document.querySelectorAll(".mod-exercise-rating");let t,s;for(let n=0;n<e.length;n++){const A=e[n];r(A)}function r(n){a(n),i()}function a(n){t=n.querySelector(".mod-exercise-rating-active"),s=n.querySelector(".mod-exercise-rating-value")}function i(){const n=s.textContent/.05;t.style.width=`${n}%`}}function F(e=!1){e?(document.removeEventListener("keyup",J),x.removeEventListener("click",V)):(x.addEventListener("click",V),document.addEventListener("keyup",J))}const Ce=document.querySelector(".mob-menu-close-nav-button"),Te=document.querySelector(".header-button-nav"),T=document.querySelector(".mobile-menu");Te.addEventListener("click",()=>T.classList.add("is-open"));Ce.addEventListener("click",()=>T.classList.remove("is-open"));T.addEventListener("click",()=>T.classList.remove("is-open"));const Q=document.querySelector(".header-home"),U=document.querySelector(".header-favorites"),Y=document.querySelector(".header");window.location.pathname.endsWith("/favorites.html")?(U.classList.add("active"),Q.classList.remove("active"),Y.classList.remove("header-hero")):(Q.classList.add("active"),U.classList.remove("active"),Y.classList.add("header-hero"));const K=document.querySelector(".mob-menu-home"),X=document.querySelector(".mob-menu-favorites");window.location.pathname.endsWith("/favorites.html")?(X.classList.add("active"),K.classList.remove("active")):(K.classList.add("active"),X.classList.remove("active"));const v=document.querySelector(".scroll-button"),Z=document.querySelector(".scroll-mini"),ee=document.querySelector(".scroll-big");ne();v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{document.documentElement.scrollTop>=300&&v.classList.contains("is-hidden")&&v.classList.remove("is-hidden"),document.documentElement.scrollTop<300&&!v.classList.contains("is-hidden")&&v.classList.add("is-hidden")});window.addEventListener("resize",()=>{ne()});function ne(){document.documentElement.scrollWidth>=1440?(ee.classList.remove("is-undisplayed"),Z.classList.add("is-undisplayed")):(ee.classList.add("is-undisplayed"),Z.classList.remove("is-undisplayed"))}(async()=>{let e=await f.getQuoteOfTheDay();document.querySelector(".quote-author").textContent=e.author,document.querySelector(".quote-text").textContent=e.quote})();be();ge();const k=8;let $=document.documentElement.scrollWidth<768;const te=document.querySelector(".favorites-not-found-exercises"),h=document.querySelector(".favorites-exercises-list"),m=document.querySelector(".pagination-list"),oe=document.querySelector(".modal-exercise");h.addEventListener("click",Re);m.addEventListener("click",Ie);oe.dataset.isFavorites="true";window.addEventListener("resize",()=>{$!==document.documentElement.scrollWidth<768&&($=!$,b())});b();function b(e=1){const t=f.getFavorites();$&&t.length>k?(m.classList.remove("visually-hidden"),m.innerHTML=w.paginationMarkup(Math.ceil(t.length/k)),h.innerHTML=t.slice((e-1)*k,e*k).map(s=>w.exerciseCardMarkup(s,!0)).join("")):(m.classList.add("visually-hidden"),m.innerHTML="",h.innerHTML=t.map(s=>w.exerciseCardMarkup(s,!0)).join("")),t.length>0?(te.classList.add("visually-hidden"),h.classList.remove("visually-hidden")):(te.classList.remove("visually-hidden"),h.classList.add("visually-hidden"))}function Ie(e){e.target.nodeName==="A"&&(e.preventDefault(),b(Number(e.target.innerText)),m.innerHTML=w.paginationMarkup(e.currentTarget.children.length,Number(e.target.innerText)))}function Re(e){const t=e.target.closest(".exercise-card-start-btn");if(t){Le(t.getAttribute("data-open-id"));return}const s=e.target.closest(".exercise-card-remove-btn");if(s){f.deleteItemFromFavorites(s.getAttribute("data-delete-id")),b();return}}function Fe(){oe.dataset.isChanged&&b()}export{N as b,q as m,Le as o,w as r};
//# sourceMappingURL=favorites-96f5174a.js.map
