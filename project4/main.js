// FAQ accordion
document.querySelectorAll('.collapse-title').forEach(title => {
  title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const isOpen = content.style.display === 'block';
        
        // Close all first
        document.querySelectorAll('.collapse-content').forEach(c => {
        c.style.display = 'none';
        });
        document.querySelectorAll('.collapse-title').forEach(t => {
        t.classList.remove ('open');
        });

        // Toggle clicked one
        if (!isOpen) {
            content.style.display = 'block';
            title.classList.add('open');
        }
    });
});