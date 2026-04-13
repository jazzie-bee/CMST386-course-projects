// Open window when icon is clicked
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();  // stops the <a href=""> from reloading the page
        const targetId = icon.dataset.target;
        const win = document.getElementById(targetId);
        if (win) win.classList.add('active');
    });
  });

  // Close window when X is clicked
  document.querySelectorAll('.controls').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.container').classList.remove('active');
    });
  });