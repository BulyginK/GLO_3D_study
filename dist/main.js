(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n;n=setInterval((()=>{let e=(()=>{let e=(new Date("04 may 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours<10?"0"+e.hours:e.hours,o.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&(clearInterval(n),t.textContent="00",o.textContent="00",r.textContent="00")}),500)})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".menu"),o=document.querySelector("menu"),r=o.querySelector(".close-btn");e.addEventListener("click",(e=>{(t.contains(e.target)||e.target===r||e.target.matches("menu>ul>li>a")||o.classList.contains("active-menu")&&!e.target.closest("menu"))&&(e.preventDefault(),o.classList.toggle("active-menu"))}))})(),(()=>{const e=document.querySelectorAll("menu>ul>li>a"),t=document.querySelector("main>a");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(e.hash).scrollIntoView({behavior:"smooth",block:"start"})}))})),t.addEventListener("click",(e=>{e.preventDefault(),document.querySelector(t.hash).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-content");let r,n=-750;const a=()=>{r=requestAnimationFrame(a),n<-400?(n+=25,o.style.transform="translateX("+n+"px)"):n<-200?(n+=20,o.style.transform="translateX("+n+"px)"):n<-50?(n+=15,o.style.transform="translateX("+n+"px)"):cancelAnimationFrame(r)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&a()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",n=-750)}))})(),(()=>{const e=document.querySelectorAll("#calc input");for(let t=0;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelectorAll('[name="user_name"]'),t=document.querySelectorAll('[name="user_email"]'),o=document.querySelectorAll('[name="user_phone"]'),r=document.querySelectorAll('[name="user_message"]');for(let t=0;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/,"")}));for(let e=0;e<t.length;e++)t[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^-\w\d_\.\!~\*\'@]/i,"")}));for(let e=0;e<o.length;e++)o[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d)(-]/,"")}));for(let e=0;e<r.length;e++)r[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let r,n,a=0;for(let e=0;e<t.length;e++){let t=document.createElement("li");o.appendChild(t),t.classList.add("dot"),0==e&&t.classList.add("dot-active"),n=document.querySelectorAll(".dot")}const l=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),a++,a>=t.length&&(a=0),c(t,a,"portfolio-item-active"),c(n,a,"dot-active")},i=(e=1500)=>{r=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&n.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a,"portfolio-item-active"),c(n,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})()})();