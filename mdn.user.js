// ==UserScript==
// @name        Prideless MDN
// @match       https://developer.mozilla.org/*
// @version     1.0
// @author      Whoever but not LGBTQIA+
// @description Remove the pride from MDN
// @homepageURL https://github.com/ZeroAurora/UserJS-Prideless
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

const pridelessCSS = `
.logo .logo-m {
  fill: var(--text-link) !important;
}

.logo .logo-_ {
  fill: var(--text-link) !important;
}

.homepage-hero section p > span::after {
	height: 0 !important;
}
`;

function removePride() {
  const manifestoParent = document.querySelector(
    ".homepage-hero > section:nth-child(1) > p:nth-child(2)"
  );
  const mandala = document.querySelector(".mandala-container");
  if (mandala && mandala.classList.contains("pride")) {
    manifestoParent.innerHTML = `Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.`;
    mandala.classList.remove("animate-colors");
    mandala.classList.remove("pride");
  }
}

GM_addStyle(pridelessCSS);
document.addEventListener("DOMContentLoaded", removePride);
