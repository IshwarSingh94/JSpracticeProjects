const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');

// *Manual technique

toggleBtn.addEventListener('click', function() {
    if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    }
    else {
        sidebar.classList.add('show-sidebar');
    }
}); 

closeBtn.addEventListener('click', function() {
    if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    }
});








// // *Shortcut technique

// closeBtn.addEventListener('click', function() {
//     sidebar.classList.toggle('show-sidebar');
// });

// toggleBtn.addEventListener('click', function() {
//     sidebar.classList.toggle('show-sidebar');
// });