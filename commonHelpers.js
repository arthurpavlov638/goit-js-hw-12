import{a as S,S as q,i as c}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function x(){let e=1;const r=15;async function a(t){const s=new URLSearchParams({key:"45523690-8d1bfda1291a3399214d9e199",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:r}),o=await S.get(`https://pixabay.com/api/?${s}`);e++;const{hits:g,totalHits:p}=o.data,f=Math.ceil(p/r),v=e>f;return{hits:g,isLastPage:v}}function n(){e=1}return{fetchingGalleryPage:a,resetNextPageNum:n}}function m(e,r){let a="";e.forEach(({webformatURL:n,largeImageURL:t,tags:s,likes:o,views:g,comments:p,downloads:f})=>{a+=`<li class="gallery-item">
    <a class="gallery-item__link" href="${t}">
    <img
    src="${n}"
    alt="${s}"
    /></a>
    <ul class="image-descr">
    <li>
      <span>Likes</span>
      <span>${o}</span>
    </li>
    <li>
      <span>Views</span>
      <span>${g}</span>
    </li>
    <li>
      <span>Comments</span>
      <span>${p}</span>
    </li>
    <li>
      <span>Downloads</span>
      <span>${f}</span>
    </li>
  </ul>
  </li>`}),r.insertAdjacentHTML("beforeend",a)}const h=document.querySelector(".search-form"),u=document.querySelector(".gallery"),d=document.querySelector("button[data-load]"),{fetchingGalleryPage:y,resetNextPageNum:M}=x();let l="";const L=new q(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.requestValue.value.trim(),!!l){M(),O(),P(h),b();try{const{hits:r,isLastPage:a}=await y(l);if(!r.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i();return}m(r,u),L.refresh(),i(),w(a)}catch(r){console.error(r),c.error({message:"Ooops! Something went wrong. Try again later",position:"topRight"}),i()}h.reset()}});d.addEventListener("click",async()=>{P(u),b();const{height:e}=document.querySelector(".gallery-item").getBoundingClientRect();try{const{hits:r,isLastPage:a}=await y(l);i(),m(r,u),L.refresh(),window.scrollBy(0,e*2),w(a)}catch(r){console.error(r),c.error({message:"Ooops! Something went wrong. Try again later",position:"topRight"}),i()}});function P(e){e.insertAdjacentHTML("afterend","<span class='loader'></span>")}function i(e=document.querySelector(".loader")){e&&e.remove()}function w(e){d.classList.contains("visually-hidden")&&(e?c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):d.classList.remove("visually-hidden"))}function b(){d.classList.add("visually-hidden")}function O(){u.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
