import{b as g,r as p,o as S,m as E}from"./assets/favorites-aa332cd3.js";import"./assets/vendor-cb82152a.js";let a,r;const N=document.querySelector(".exercises-type-list"),s=document.querySelector(".exercises-gallery-list"),l=document.querySelector(".pagination-list"),n=document.querySelector(".exercises-type-form"),y=document.querySelector(".exercises-form-input"),L=document.querySelector(".exercises-form-btn-clear"),x=document.querySelector(".exercises-empty-message"),f=document.querySelector(".exercises-section-title-span");function q(){a=document.documentElement.scrollWidth<768,r=document.documentElement.scrollWidth>=1440,N.addEventListener("click",F),s.addEventListener("click",A),l.addEventListener("click",G),n.addEventListener("submit",D),y.addEventListener("input",H),L.addEventListener("click",M),window.addEventListener("resize",w),d()}function w(){let e=!1;a!==document.documentElement.scrollWidth<768&&(e=!0,a=!a),r!==document.documentElement.scrollWidth>=1440&&(e=!0,r=!r),e&&(s.dataset.isGroups?d():c())}function D(e){e.preventDefault(),c()}function H(){const e=y.value.trim();L.style.display=e.length>0?"block":"none"}function M(){n.reset(),L.style.display="none",c()}async function d(e=1){s.dataset.isGroups="true",s.dataset.groupName="";const t={filter:v().dataset.filter,limit:a?8:12,page:e},i=await g.getFilterData(t);h(i)}async function c(e=1){const t={[v().dataset.exerciseFilter]:s.dataset.groupName,limit:r?9:8,page:e},i=y.value.trim();i&&(t.keyword=i),f.firstElementChild.textContent=s.dataset.groupName;const u=await g.getExercisesData(t);h(u,!0)}function h(e={},t=!1){const{results:i=[],totalPages:u=1,page:b=1}=e;if(i.length===0)x.classList.remove("visually-hidden"),s.classList.add("visually-hidden"),l.classList.add("visually-hidden");else{x.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),l.classList.remove("visually-hidden");const k=t?i.map(m=>p.exerciseCardMarkup(m)).join(""):i.map(m=>p.filterGroupsMarkup(m)).join("");t?f.classList.remove("visually-hidden"):f.classList.add("visually-hidden"),s.innerHTML=k,l.innerHTML=p.paginationMarkup(u,b)}}function A(e){if(e.target.nodeName==="A"||e.target.nodeName==="P"||e.target.nodeName==="H3"){e.preventDefault();const t=e.target.nodeName==="A"?e.target:e.target.closest("a");s.dataset.isGroups="",s.dataset.groupName=t.dataset.name,c(),n.classList.remove("visually-hidden")}else if(s.dataset.groupName){const t=e.target.closest(".exercise-card-start-btn");t&&S(t.getAttribute("data-open-id"))}}function F(e){e.target.nodeName==="BUTTON"&&(v().classList.toggle("exercises-type-item-active"),e.target.classList.toggle("exercises-type-item-active"),d(),n.reset(),n.classList.add("visually-hidden"))}function G(e){if(e.target.nodeName==="A"){e.preventDefault();const t=Number(e.target.innerText);s.dataset.isGroups?d(t):c(t)}}function v(){return document.querySelector(".exercises-type-item-active")}q();const o=document.querySelector(".footer-subscription-form");o.addEventListener("submit",async e=>{e.preventDefault();const t=o.elements.email.value,i=await g.subscription(t);i.result?(E.showSuccess(i.message),o.elements.email.classList.remove("is-glowing")):E.showError(i.message),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
