(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l;l=setInterval((()=>{let e=(()=>{let e=(new Date("29 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours<10?"0"+e.hours:e.hours,n.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&(clearInterval(l),t.textContent="00",n.textContent="00",r.textContent="00")}),500)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn");e.addEventListener("click",(()=>{t.classList.toggle("active-menu")})),t.addEventListener("click",(e=>{e.target===n?(e.preventDefault(),t.classList.toggle("active-menu")):e.target.matches("ul>li>a")&&t.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-content");let r,l=-750;const a=()=>{r=requestAnimationFrame(a),l<-400?(l+=25,n.style.transform="translateX("+l+"px)"):l<-200?(l+=20,n.style.transform="translateX("+l+"px)"):l<-50?(l+=15,n.style.transform="translateX("+l+"px)"):cancelAnimationFrame(r)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&a()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",l=-750)}))})(),(()=>{const e=document.querySelectorAll("#calc input");for(let t=0;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelectorAll('[name="user_name"]'),t=document.querySelectorAll('[name="user_email"]'),n=document.querySelectorAll('[name="user_phone"]'),r=document.querySelectorAll('[name="user_message"]');for(let t=0;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/,"")}));for(let e=0;e<t.length;e++)t[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^-\w\d_\.\!~\*\'\@]/i,"")}));for(let e=0;e<n.length;e++)n[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d)(-]/,"")}));for(let e=0;e<r.length;e++)r[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();