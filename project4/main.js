// let topZ = 100;
// let openCount = 0;
// const maxOffset = 3;

// // Open window when icon is clicked
// const icons = document.querySelectorAll('.desktop-icon').forEach(icon => {
//     icon.addEventListener('click', (e) => {
//         const targetId = icon.dataset.target;

//         if (targetId) {
//             e.preventDefault();
//             const win = document.getElementById(targetId);
//             // if (win) win.classList.add('active');
//             if (win && !win.classList.contains('active')) {
//                 const offset = (openCount % maxOffset)* 48;
//                 win.style.top = `calc(50% + ${offset}px)`;
//                 win.style.left = `calc(50% + ${offset}px)`;
//                 win.style.zIndex = ++topZ;
//                 win.classList.add('active');
//                 openCount++;
//             }
//         }
//     });
// });

// // Close window when X is clicked
// const controls = document.querySelectorAll('.controls').forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.closest('.window').classList.remove('active');
//     });
// });

// // Bring window to front on click
// const wins = document.querySelectorAll('.window')
// wins.forEach(win => {
//     win.addEventListener('click', () => {
//         win.style.zIndex = ++topZ;
//     });
// });