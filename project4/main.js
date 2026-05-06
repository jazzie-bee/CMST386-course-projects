// FAQ accordion
document.querySelectorAll('.collapse-title').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const isOpen = content.style.display === 'block';
    
    // Close all first
    document.querySelectorAll('.collapse-content').forEach(c => {
      c.style.display = 'none';
    });

    // Toggle clicked one
    content.style.display = isOpen ? 'none' : 'block';
  });
});