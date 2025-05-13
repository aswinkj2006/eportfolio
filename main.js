document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;

      // Optional: close all other accordions
      document.querySelectorAll('.accordion').forEach(acc => {
        if (acc !== accordion) acc.classList.remove('expanded');
      });

      accordion.classList.toggle('expanded');
    });
  });
});
