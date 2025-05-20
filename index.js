import{a as d,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="50283809-fb8098277938dfac7f33d4612";async function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(p,{params:o})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`<li class="gallery-item">
    <a href="${t.largeImageURL}">
    <img src="${t.webformatURL}" alt="${t.tags}" />
    </a>
    <div class="gallery-info">
    <p><b>Likes:</b> ${t.likes}</p>
    <p><b>Views:</b> ${t.views}</p>
    <p><b>Comments:</b> ${t.comments}</p>
    <p><b>Downloads:</b> ${t.downloads}</p>
    </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){u.classList.add("is-visible")}function w(){u.classList.remove("is-visible")}const a=document.querySelector(".form");a.addEventListener("submit",async s=>{s.preventDefault();const o=a.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}b(),L();try{const t=await y(o);t.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",position:"topRight",icon:" ",iconText:"✗",iconColor:"white"}):h(t.hits)}catch{n.error({title:"Error",message:"An error occurred. Please try again later.",position:"topRight"})}finally{w()}a.reset()});
//# sourceMappingURL=index.js.map
