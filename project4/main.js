let topZ = 100;
let openCount = 0;

// Open window when icon is clicked
const icons = document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        const targetId = icon.dataset.target;

        if (targetId) {
            e.preventDefault();
            const win = document.getElementById(targetId);
            if (win) win.classList.add('active');
        }
    });
});

// Close window when X is clicked
const controls = document.querySelectorAll('.controls').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.window').classList.remove('active');
    });
});

// Bring window to front on click
const wins = document.querySelectorAll('.window')
wins.forEach(win => {
    win.addEventListener('click', () => {
        // wins.forEach(w => w.style.zIndex = 50);
        win.style.zIndex = ++topZ;
    });
});