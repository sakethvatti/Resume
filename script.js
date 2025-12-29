// script.js — small interactive helpers (smooth scroll, print, theme)
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Print button
  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Theme toggle (light/dark) with persistence
  const themeBtn = document.getElementById('themeBtn');
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.setAttribute('aria-pressed', 'true');
  }
  if (themeBtn) themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Sticky nav shadow on scroll for visual depth
  const navInner = document.querySelector('.nav-inner');
  const onScroll = () => {
    if (window.scrollY > 8) navInner.classList.add('scrolled'); else navInner.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
});
