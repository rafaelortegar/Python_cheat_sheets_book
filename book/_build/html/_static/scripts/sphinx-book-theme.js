(()=>{"use strict";var e=e=>{"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&e()}))};window.initThebeSBT=()=>{var e=document.querySelector("section h1");e.nextElementSibling.classList.contains("thebe-launch-button")||e.insertAdjacentHTML("afterend","<button class='thebe-launch-button'></button>"),initThebe()},window.toggleFullScreen=()=>{var e=document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement;let t=document.documentElement;e?(console.log("[SBT]: Exiting full screen"),document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()):(console.log("[SBT]: Entering full screen"),t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen())},e((()=>{var e=[];let t=new IntersectionObserver(((t,n)=>{t.forEach((t=>{if(t.isIntersecting)e.push(t.target);else for(let n=0;n<e.length;n++)if(e[n]===t.target){e.splice(n,1);break}})),e.length>0?document.querySelector("div.bd-sidebar-secondary").classList.add("hide"):document.querySelector("div.bd-sidebar-secondary").classList.remove("hide")}),{rootMargin:"0px 0px -33% 0px"}),n=[];["marginnote","sidenote","margin","margin-caption","full-width","sidebar","popout"].forEach((e=>{n.push(`.${e}`,`.tag_${e}`,`.${e.replace("-","_")}`,`.tag_${e.replace("-","_")}`)})),document.querySelectorAll(n.join(", ")).forEach((e=>{t.observe(e)})),new IntersectionObserver(((e,t)=>{e[0].boundingClientRect.y<0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")})).observe(document.querySelector(".sbt-scroll-pixel-helper"))})),e((function(){var e=[".bd-header-announcement",".bd-header",".bd-header-article",".bd-sidebar-primary",".bd-sidebar-secondary",".bd-footer-article",".bd-footer-content",".bd-footer"].join(",");document.querySelectorAll(e).forEach((e=>{e.classList.add("noprint")}))}))})();
//# sourceMappingURL=sphinx-book-theme.js.map
