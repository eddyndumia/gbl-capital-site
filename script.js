// Add your Whop checkout URL here when ready.
const WHOP_URL = "";
document.querySelectorAll("[data-whop-link]").forEach(link => {
  if (WHOP_URL) link.href = WHOP_URL;
  else link.addEventListener("click", event => { event.preventDefault(); document.querySelector("#faq")?.scrollIntoView({behavior:"smooth"}); });
});
document.querySelector("#year").textContent = new Date().getFullYear();
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
