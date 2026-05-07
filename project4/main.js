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

// Form validation
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message  = document.getElementById('message');
    const errorMsg = document.getElementById('form-error');

    // Reset all borders first
    [name, email, message].forEach(field => {
      field.style.borderColor = '';
    });

    if (name.value.trim() === '') {
      valid = false;
      name.style.borderColor = '#d91a4e';
    } else {
      name.style.borderColor = '';
    }

    if (email.value.trim() === '' || !email.value.includes('@')) {
      valid = false;
      email.style.borderColor = '#d91a4e';
    } else {
      email.style.borderColor = '';
    }

    if (!valid) {
      errorMsg.textContent = 'Please fill out all required fields correctly.';
      errorMsg.style.color = '#d91a4e';
    } else {
      errorMsg.textContent = '';
      form.submit();
    }
  });
}