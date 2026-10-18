const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");

menuButton?.addEventListener("click", () => {
  const open = !globalNav.classList.contains("is-open");
  globalNav.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

globalNav?.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  globalNav.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  }
}, { rootMargin: "0px 0px -8%", threshold: .08 });

for (const element of document.querySelectorAll(".reveal")) observer.observe(element);

const copyrightYear = document.querySelector("#copyright-year");
if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());
