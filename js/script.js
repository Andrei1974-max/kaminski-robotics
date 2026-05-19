const nav = document.querySelector('.main-nav');
let lastScrollTop = 0;

// 1. Отслеживаем колесико мыши (скролл)
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 10) {
    nav.classList.add('nav-hidden'); // Крутим вниз — прячем
  } else {
    nav.classList.remove('nav-hidden'); // Крутим вверх — показываем
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// 2. УМНОЕ СЛЕЖЕНИЕ ЗА МЫШКОЙ (Вместо триггера)
window.addEventListener('mousemove', (e) => {
  // e.clientY — это точное положение курсора от верха экрана в пикселях.
  if (e.clientY < 100) {
    nav.classList.remove('nav-hidden');
  }
});

// 3. Когда мышка уходит с самого меню обратно на сайт — прячем его
nav.addEventListener('mouseleave', () => {
  if (window.scrollY > 10) {
    nav.classList.add('nav-hidden');
  }
});

// 4. Плавный возврат в самое начало при клике на логотип Kaminski Robotics
// Добавлена проверка (if), чтобы код не выдавал ошибку, если логотип еще не загрузился
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  });
}

//// 5. ИСПРАВЛЕНО: Рабочий клик по мобильному гамбургеру
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.onclick = () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  }; // Лишние буквы "VS" удалены, теперь всё чисто!
}