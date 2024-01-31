import{a as d}from"./vendor-a65214f2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();d.defaults.baseURL="https://energyflow.b.goit.study/api";const y={getFilterData:async function({page:e=1,limit:t=8,filter:a="Muscles"}){try{return(await d.get("/filters",{params:{filter:a,page:e,limit:t}})).data}catch(s){return console.log(s),{page:0,totalPages:0,results:[]}}},getExercisesData:async function(e){try{return(await d.get("/exercises",{params:e})).data}catch{return{page:0,totalPages:0,results:[]}}},getQuoteOfTheDay:async function(){try{return(await d.get("/quote")).data}catch{return{author:"",quote:""}}},getExerciseInfo:async function(e=""){try{return(await d.get(`exercises/${e}`)).data}catch{return{_id:""}}},updateExerciseRating:async function({id:e="",rate:t,email:a="",review:s=""}){try{const r=await d.patch(`exercises/${e}/rating`,{rate:t,email:a,review:s});return{result:!0}}catch(r){return{result:!1,message:r.response.data.message}}},subscription:async function(e=""){try{const t=await d.post("/subscription",{email:e});return{result:!0,message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being."}}catch(t){return console.log(t),{result:!1,message:t.response.data.message}}}},n={quote:"quoteOfTheDay",favorites:"favoritesExercises"},x={async getQuoteOfTheDay(){const e=w(new Date),t=g(n.quote);if(t&&t.date===e)return t;{const a=await y.getQuoteOfTheDay();if(a!=null&&a.quote){const s={...a,date:e};return localStorage.setItem(n.quote,JSON.stringify(s)),s}return a}},getFavorites(){const e=g(n.favorites);return e||k()},addItemToFavorites(e={}){let t=g(n.favorites);t||(t=[]),t.push(e),localStorage.setItem(n.favorites,JSON.stringify(t))},deleteItemFromFavorites(e=""){const t=g(n.favorites);if(t&&e!==""){const a=t.filter(s=>s._id!==e);localStorage.setItem(n.favorites,JSON.stringify(a))}}};function g(e=""){let t=localStorage.getItem(e);if(t)try{t=JSON.parse(t)}catch{t=null}return t}function w(e){const t=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");return`${t}-${a}-${s}`}function k(){const e=[{_id:"64f389465ae26083f39b1af6",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1387.gif",name:"one leg floor calf raise",target:"calves",rating:4.33,description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",burnedCalories:42,time:3,popularity:108},{_id:"64f389465ae26083f39b1af0",bodyPart:"lower legs",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1381.gif",name:"dumbbell seated one leg calf raise - palm up",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:271,time:3,popularity:158},{_id:"64f389465ae26083f39b19e5",bodyPart:"lower legs",equipment:"sled machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0742.gif",name:"sled forward angled calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:192,time:3,popularity:75},{_id:"64f389465ae26083f39b1806",bodyPart:"lower legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0108.gif",name:"barbell standing leg calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:4,burnedCalories:201,time:3,popularity:366},{_id:"64f389465ae26083f39b1af7",bodyPart:"lower legs",equipment:"rope",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1388.gif",name:"peroneals stretch",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:127,time:3,popularity:2},{_id:"64f389465ae26083f39b1b00",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1397.gif",name:"standing calves",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:294,time:3,popularity:3},{_id:"64f389465ae26083f39b1ae3",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1368.gif",name:"ankle circles",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:266,time:3,popularity:74},{_id:"64f389465ae26083f39b1a5d",bodyPart:"lower legs",equipment:"band",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1000.gif",name:"band single leg reverse calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:289,time:3,popularity:111},{_id:"64f389465ae26083f39b1ae4",bodyPart:"lower legs",equipment:"band",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1369.gif",name:"band two legs calf raise - (band under both legs) v. 2",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:292,time:3,popularity:2},{_id:"64f389465ae26083f39b1af3",bodyPart:"lower legs",equipment:"sled machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1384.gif",name:"hack one leg calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:286,time:3,popularity:105}];return localStorage.setItem(n.favorites,JSON.stringify(e)),e}new URL("./img/icons/star.svg",self.location).href,new URL("./img/icons/arrow-right.svg",self.location).href;const p="./img/sprite.svg",P={exerciseCardMarkup:function(e={},t=!1){const{name:a,burnedCalories:s,time:r,bodyPart:i,target:o,rating:m,_id:l}=e;let c="";return t?c=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${l}">
       <svg class="exercise-card-remove-icon">
           <use href="${p}#icon-trash-black"></use>
       </svg>
    </button>`:c=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${m}</span>
         <svg class="exercise-card-rating-star" width="18" height="18">
           <use href="${p}#icon-star-gold"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${l}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${c}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${l}">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon" width="16" height="16">
        <use href="${p}#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon">
      <use href="${p}#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${a}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${s} / ${r} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${i}Waist</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${o}</p>
    </li>
  </ul>
  </li>`},filterGroupsMarkup:function({name:e="",filter:t="",imgUrl:a=""}){return`<li class="exercises-gallery-item" style="${`background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${a}');`}">
    <a href="" class="exercises-gallery-link" data-name="${e}">
      <h3 class="exercises-gallery-item-title">${e}</h3>
      <p class="exercises-gallery-item-description">${t}</p>
    </a>
  </li>`},paginationMarkup:function(e=1,t=1){let a="";for(let s=1;s<=e;s++)s!==t-0?a+=`<li class="pagination-item"><a href="">${s}</a></li>`:a+=`<li class="pagination-item pagination-item-active">
    <a href="">${s}</a>
  </li>`;return a}};function D(e={},t=!1){const{name:a,burnedCalories:s,time:r,bodyPart:i,target:o,rating:m,_id:l}=e;let c="";return t?c=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${l}">
       <svg class="exercise-card-remove-icon">
           <use href="./img/sprite.svg#icon-trash-black"></use>
       </svg>
    </button>`:c=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${m}</span>
         <svg class="exercise-card-rating-star">
           <use href="./img/sprite.svg#icon-Star-gold"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${l}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${c}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${l}">
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
      <p class="exercise-card-parameter-value">${s} / ${r} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${i}Waist</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${o}</p>
    </li>
  </ul>
  </li>`}function O(e=1,t=1){let a="";for(let s=1;s<=e;s++)s!==t?a+=`<li class="pagination-item"><a href="">${s}</a></li>`:a+=`<li class="pagination-item pagination-item-active">
    <a href="">${s}</a>
  </li>`;return a}const L=document.querySelector(".mob-menu-close-nav-button"),S=document.querySelector(".header-button-nav"),f=document.querySelector(".mobile-menu");S.addEventListener("click",()=>f.classList.add("is-open"));L.addEventListener("click",()=>f.classList.remove("is-open"));f.addEventListener("click",()=>f.classList.remove("is-open"));const $=document.querySelector(".mob-menu-home"),q=document.querySelector(".mob-menu-favorites");window.location.pathname.endsWith("/favorites.html")&&(q.classList.add("active"),$.classList.remove("active"));const T=document.querySelector(".header-home"),C=document.querySelector(".header-favorites");window.location.pathname.endsWith("/favorites.html")&&(C.classList.add("active"),T.classList.remove("active"));const u=document.querySelector(".scroll-button"),h=document.querySelector(".scroll-mini"),v=document.querySelector(".scroll-big");b();u.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{document.documentElement.scrollTop>=300&&u.classList.contains("is-hidden")&&u.classList.remove("is-hidden"),document.documentElement.scrollTop<300&&!u.classList.contains("is-hidden")&&u.classList.add("is-hidden")});window.addEventListener("resize",()=>{b()});function b(){document.documentElement.scrollWidth>=1440?(v.classList.remove("is-undisplayed"),h.classList.add("is-undisplayed")):(v.classList.add("is-undisplayed"),h.classList.remove("is-undisplayed"))}(async()=>{let e=await x.getQuoteOfTheDay();document.querySelector(".quote-author").textContent=e.author,document.querySelector(".quote-text").textContent=e.quote})();export{y as b,D as e,x as l,O as p,P as r};
//# sourceMappingURL=initialization-3ae5a062.js.map
