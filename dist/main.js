(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let r;r=setInterval((()=>{let e=(()=>{let e=(new Date("25 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours<10?"0"+e.hours:e.hours,n.textContent=e.minutes<10?"0"+e.minutes:e.minutes,o.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&(clearInterval(r),t.textContent="00",n.textContent="00",o.textContent="00")}),500)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=e=>{e.target==n&&e.preventDefault(),t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");let r,s=-750;const l=()=>{r=requestAnimationFrame(l),s<-400?(s+=25,o.style.transform="translateX("+s+"px)"):s<-200?(s+=20,o.style.transform="translateX("+s+"px)"):s<-50?(s+=15,o.style.transform="translateX("+s+"px)"):cancelAnimationFrame(r)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",screen.width>768&&(l(),console.log(screen.width))}))})),n.addEventListener("click",(()=>{e.style.display="none",s=-750}))})()})();