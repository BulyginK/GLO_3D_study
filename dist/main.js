(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let o;o=setInterval((()=>{let e=(()=>{let e=(new Date("29 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours<10?"0"+e.hours:e.hours,n.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&(clearInterval(o),t.textContent="00",n.textContent="00",r.textContent="00")}),500)})(),(()=>{const e=document.querySelector("body"),t=document.querySelector(".menu"),n=document.querySelector("menu"),r=n.querySelector(".close-btn"),o=()=>{n.classList.toggle("active-menu")};e.addEventListener("click",(e=>{n.classList.contains("active-menu")&&e.target.closest("button")&&(e.preventDefault(),o()),n.classList.contains("active-menu")&&!e.target.closest("menu")&&o(),(t.contains(e.target)||e.target===r)&&(e.preventDefault(),o()),e.target.matches("menu>ul>li>a")&&o()}))})(),document.querySelector("menu").querySelectorAll("ul>li>a").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(e.hash).scrollIntoView(top)}))})),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content");let r,o=-750;const a=()=>{r=requestAnimationFrame(a),o<-400?(o+=25,n.style.transform="translateX("+o+"px)"):o<-200?(o+=20,n.style.transform="translateX("+o+"px)"):o<-50?(o+=15,n.style.transform="translateX("+o+"px)"):cancelAnimationFrame(r)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&a()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",o=-750)}))})(),(()=>{const e=document.querySelectorAll("#calc input");for(let t=0;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelectorAll('[name="user_name"]'),t=document.querySelectorAll('[name="user_email"]'),n=document.querySelectorAll('[name="user_phone"]'),r=document.querySelectorAll('[name="user_message"]');for(let t=0;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/,"")}));for(let e=0;e<t.length;e++)t[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^-\w\d_\.\!~\*\'@]/i,"")}));for(let e=0;e<n.length;e++)n[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d)(-]/,"")}));for(let e=0;e<r.length;e++)r[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),n=document.querySelectorAll(".dot");let r,o=0;const a=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},c=()=>{a(t,o,"portfolio-item-active"),a(n,o,"dot-active"),o++,o>=t.length&&(o=0),l(t,o,"portfolio-item-active"),l(n,o,"dot-active")},s=(e=1500)=>{r=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,o,"portfolio-item-active"),a(n,o,"dot-active"),e.target.matches("#arrow-right")?o++:e.target.matches("#arrow-left")?o--:e.target.classList.contains("dot")&&n.forEach(((t,n)=>{e.target===t&&(o=n)})),o>=t.length&&(o=0),o<0&&(o=t.length-1),l(t,o,"portfolio-item-active"),l(n,o,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})()})();