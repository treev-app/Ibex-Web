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

const tableLinks = [...document.querySelectorAll(".table-of-contents a")];
const sectionById = new Map(
  tableLinks
    .map((link) => [link.getAttribute("href")?.slice(1), link])
    .filter(([id]) => id),
);

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
  if (!visible) return;
  for (const link of tableLinks) link.classList.remove("is-active");
  const activeLink = sectionById.get(visible.target.id);
  activeLink?.classList.add("is-active");
}, { rootMargin: "-18% 0px -68%", threshold: [0, .1] });

for (const id of sectionById.keys()) {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
}
