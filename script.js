/* ══════════════════════════════════════════════════════
   AfroCares – Site JavaScript
   ══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ── Back to top ── */
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchs = document.querySelectorAll('.nav-links a[href^="#"]');
  const updateActiveNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navAnchs.forEach(a => {
      a.style.background = '';
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) {
        a.style.background = 'var(--primary-light)';
        a.style.color = 'var(--primary)';
      }
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ── Hospital city tabs ── */
  document.querySelectorAll('.city-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.hospital-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panelId = 'panel-' + tab.dataset.city;
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.add('active');
        panel.style.animation = 'none';
        panel.offsetHeight; // reflow
        panel.style.animation = 'fadeIn .4s ease';
      }
    });
  });

  /* ── Testimonial slider ── */
  const cards = document.querySelectorAll('.testimonial-card');
  const dots  = document.querySelectorAll('.dot');
  let current = 0, autoSlideTimer;

  const goTo = (idx) => {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  };

  const startAuto = () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => goTo(current + 1), 5000);
  };

  document.getElementById('nextBtn').addEventListener('click', () => { goTo(current + 1); startAuto(); });
  document.getElementById('prevBtn').addEventListener('click', () => { goTo(current - 1); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));
  startAuto();

  /* ── Scroll-reveal animation ── */
  const revealEls = document.querySelectorAll(
    '.service-card, .value-card, .step, .hosp-card, .india-stat-card, .testimonial-card, .about-pillars, .why-item'
  );
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    revealObs.observe(el);
  });

  /* ── Counter animation for hero stats ── */
  const stats = document.querySelectorAll('.stat strong');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const raw = el.textContent;
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      if (isNaN(num)) return;
      const prefix  = raw.match(/^[^0-9]*/)?.[0] || '';
      const suffix  = raw.match(/[^0-9.]+$/)?.[0] || '';
      let start = 0, duration = 1800, startTime = null;
      const step = (ts) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = ease * num;
        el.textContent = prefix + (Number.isInteger(num) ? Math.round(val) : val.toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(s => counterObs.observe(s));

  /* ── Contact form handling ── */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Simulate send (replace with your backend/formspree endpoint)
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
      success.classList.add('show');
      form.reset();
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Free Enquiry';
      btn.disabled = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1800);
  });

  /* ── Smooth scroll for all # links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 72; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});

