// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import { toggleClass } from "./functions.js";
import { removeClassForArray } from "./functions.js";
import { addClass } from "./functions.js";

//data-dropdown

document.addEventListener("DOMContentLoaded", event => {
  document.addEventListener("click", docEvents);

  function docEvents(e) {
    const target = e.target;

    if (target.closest('[data-dropdown-btn]')) {
      toggleClass(target.closest('[data-dropdown-btn]').parentElement, '_active');
    }
    if (!target.closest('[data-dropdown]')) {
      removeClassForArray('[data-dropdown]', '_active');
    }

    if (target.closest('[data-click]')) {
      removeClassForArray('[data-click]', '_active');
      addClass(target.closest('[data-click]'), '_active');
    }
  }

});