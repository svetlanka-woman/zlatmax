// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

const menuBlocks = document.querySelectorAll('.submenu-catalog__block');
if (menuBlocks.length) {
  menuBlocks.forEach(menuBlock => {
    const menuBlockItems = menuBlock.querySelectorAll('.submenu-catalog__category').length;
    menuBlock.classList.add(`submenu-catalog__block_${menuBlockItems}`);
  })
}

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  const activeLink = document.querySelector('._submenu-active'),
        activeBlock = document.querySelector('._submenu-open');

  if (targetElement.closest('[data-parent-submenu]')) {
    const submenuId = targetElement.dataset.parentSubmenu ? targetElement.dataset.parentSubmenu : null,
          submenu = document.querySelector(`[data-submenu="${submenuId}"]`);
    if (submenu) {
      if (activeLink && activeLink !== targetElement) {
          activeLink.classList.remove('_submenu-active');
          activeBlock.classList.remove('_submenu-open');
          document.documentElement.classList.remove('submenu-open');
      }
      document.documentElement.classList.toggle('submenu-open');
      targetElement.classList.toggle('_submenu-active');
      submenu.classList.toggle('_submenu-open');
    } else {
      console.log('Нет такого подменю');
    }
    e.preventDefault();
  } else {
    if (activeLink && activeLink && !targetElement.closest('.menu-catalog__submenu')) {
      activeLink.classList.remove('_submenu-active');
      activeBlock.classList.remove('_submenu-open');
    }
  }

  if (targetElement.closest('.menu-top-header__link_catalog')) {
    document.documentElement.classList.add('catalog-open');
    e.preventDefault();
  }

  if (targetElement.closest('.menu-catalog__back')) {
    document.documentElement.classList.remove('catalog-open');
    activeLink ? activeLink.classList.remove('_submenu-active') : null;
    activeBlock ? activeBlock.classList.remove('_submenu-open') : null;
    e.preventDefault();
  }

  if (targetElement.closest('.submenu-catalog__back')) {
    document.documentElement.classList.remove('submenu-open');
    activeLink ? activeLink.classList.remove('_submenu-active') : null;
    activeBlock ? activeBlock.classList.remove('_submenu-open') : null;
    e.preventDefault();
  }
}
