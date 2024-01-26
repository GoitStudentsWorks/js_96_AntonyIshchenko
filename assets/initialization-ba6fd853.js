(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const n={quote:"quoteOfTheDay",favorites:"favoritesExercises"},g={async getQuoteOfTheDay(){const t=u(new Date),e=o(n.quote);if(e&&e.date===t)return e;{const r=d();if(r!=null&&r.quote){const s={...r,date:t};return localStorage.setItem(n.quote,JSON.stringify(s)),s}return r}},getFavorites(){const t=o(n.favorites);return t||c()},addItemToFavorites(t={}){let e=o(n.favorites);e||(e=[]),e.push(t),localStorage.setItem(n.favorites,JSON.stringify(e))},deleteItemFromFavorites(t=""){const e=o(n.favorites);if(e&&t!==""){const r=e.filter(s=>s._id!==t);localStorage.setItem(n.favorites,JSON.stringify(r))}}};function o(t=""){let e=localStorage.getItem(t);if(e)try{e=JSON.parse(e)}catch{e=null}return e}function u(t){const e=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return`${e}-${r}-${s}`}function d(){return{author:"Muhammad Ali",quote:"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'"}}function c(){return[{_id:"64f389465ae26083f39b1af6",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1387.gif",name:"one leg floor calf raise",target:"calves",rating:4.33,description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",burnedCalories:42,time:3,popularity:108},{_id:"64f389465ae26083f39b1af0",bodyPart:"lower legs",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1381.gif",name:"dumbbell seated one leg calf raise - palm up",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:271,time:3,popularity:158},{_id:"64f389465ae26083f39b19e5",bodyPart:"lower legs",equipment:"sled machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0742.gif",name:"sled forward angled calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:192,time:3,popularity:75},{_id:"64f389465ae26083f39b1806",bodyPart:"lower legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0108.gif",name:"barbell standing leg calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:4,burnedCalories:201,time:3,popularity:366},{_id:"64f389465ae26083f39b1af7",bodyPart:"lower legs",equipment:"rope",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1388.gif",name:"peroneals stretch",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:127,time:3,popularity:2},{_id:"64f389465ae26083f39b1b00",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1397.gif",name:"standing calves",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:294,time:3,popularity:3},{_id:"64f389465ae26083f39b1ae3",bodyPart:"lower legs",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1368.gif",name:"ankle circles",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:266,time:3,popularity:74},{_id:"64f389465ae26083f39b1a5d",bodyPart:"lower legs",equipment:"band",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1000.gif",name:"band single leg reverse calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:289,time:3,popularity:111},{_id:"64f389465ae26083f39b1ae4",bodyPart:"lower legs",equipment:"band",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1369.gif",name:"band two legs calf raise - (band under both legs) v. 2",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:292,time:3,popularity:2},{_id:"64f389465ae26083f39b1af3",bodyPart:"lower legs",equipment:"sled machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1384.gif",name:"hack one leg calf raise",target:"calves",description:"Located on the back of the lower leg, the calves include the gastrocnemius and soleus muscles. They're responsible for plantar flexion (raising the heel). Calves are targeted in exercises like calf raises and during running and jumping.",rating:3,burnedCalories:286,time:3,popularity:105}]}(async()=>{let t=await g.getQuoteOfTheDay();console.log(t)})();
//# sourceMappingURL=initialization-ba6fd853.js.map