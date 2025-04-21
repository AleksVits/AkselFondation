// Очікуємо повне завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  // ======= Перемикання мови (кнопки та тумблери) =======
  const langButton = document.getElementById('langButton');
  const langButtonMobile = document.getElementById('langButtonMobile');
  const langToggle = document.getElementById('langToggle');
  const langToggleMobile = document.getElementById('langToggleMobile');

  function switchToUA() {
    window.location.href = 'index-en.html';
  }

  // Кнопки перемикання мови
  if (langButton) langButton.addEventListener('click', switchToUA);
  if (langButtonMobile) langButtonMobile.addEventListener('click', switchToUA);

  // Тумблери перемикання мови (на англійській сторінці активовані)
  if (langToggle) {
    langToggle.checked = true;
    langToggle.addEventListener('change', (e) => {
      if (!e.target.checked) switchToUA();
    });
  }

  if (langToggleMobile) {
    langToggleMobile.checked = true;
    langToggleMobile.addEventListener('change', (e) => {
      if (!e.target.checked) switchToUA();
    });
  }

  // ======= Анімація появи зображень в галереї при скролі =======
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.gallery-scroll img').forEach(img => {
    observer.observe(img);
  });

  // ======= Модальне вікно (відкриття/закриття) =======
  const openModalBtns = document.querySelectorAll('.zbir, .btnZbir1');
  const modal = document.getElementById('donationModal');
  const closeModalBtn = modal?.querySelector('.close-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal?.classList.add('show');
    });
  });

  closeModalBtn?.addEventListener('click', () => {
    modal?.classList.remove('show');
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // ======= Вкладки в модалці =======
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Прибрати активні класи
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Додати активні класи
      btn.classList.add('active');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // ======= Копіювання IBAN у буфер обміну =======
  const copyBtn = modal?.querySelector('.iban-copy button');
  const ibanInput = modal?.querySelector('.iban-copy input');

  copyBtn?.addEventListener('click', () => {
    ibanInput?.select();
    document.execCommand('copy');
    copyBtn.textContent = '✓';
    setTimeout(() => copyBtn.textContent = '📋', 1500);
  });

  // ======= Кнопки швидкого поповнення суми у input =======
  const amountInput = document.querySelector('.modal-left input[type="number"]');
  const addButtons = document.querySelectorAll('.quick-buttons button');

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const addValue = parseInt(btn.dataset.amount, 10);
      const currentValue = parseInt(amountInput?.value || '0', 10);
      if (amountInput) amountInput.value = currentValue + addValue;
    });
  });

  // ======= Бургер-меню для мобільної версії =======
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  const mobileLinks = document.querySelectorAll('#mobileMenu a');

  burgerBtn?.addEventListener('click', () => {
    mobileMenu?.classList.add('open');
  });

  closeMenu?.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
  });

  // Закриття при кліку поза меню
  window.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu?.classList.remove('open');
    }
  });

  // Закриття меню при виборі пункту
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
    });
  });

});


  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach((section, index) => {
      // Додаємо left/right по черзі, якщо ще не задано
      if (!section.classList.contains('left') && !section.classList.contains('right')) {
        section.classList.add(index % 2 === 0 ? 'left' : 'right');
      }
      observer.observe(section);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-animate');
    if (hero) {
      hero.style.opacity = '1'; // fallback
      hero.classList.add('hero-animate'); // якщо додається динамічно
    }
  });


  ///////////////////////////////Black Секція поява анімація

  const blackSection = document.querySelector('.textBlack');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 1 // відсоток появи елемента у вікні (можеш змінити)
  });

  observer.observe(blackSection);

  window.addEventListener("scroll", function() {
    var section = document.querySelector(".black");
    var rect = section.getBoundingClientRect();
  
    // Кілька пікселів до і після секції для плавної зміни фону
    var offset = 150;  // можна змінювати для більш раннього/пізнього ефекту
  
    if (rect.top <= window.innerHeight - offset && rect.bottom >= offset) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  });
  