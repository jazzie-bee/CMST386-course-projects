// Open window when icon is clicked
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const targetId = icon.dataset.target;
      const window = document.getElementById(targetId);
      if (window) window.classList.add('active');
    });
  });

  // Close window when X is clicked
  document.querySelectorAll('.controls').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.container').classList.remove('active');
    });
  });