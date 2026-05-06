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

// Date/time

const dattime = document.getElementById('datetime');

if (datetime) {
    const now = new Date();
    datetime.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}