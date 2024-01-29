const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // Manual way to toggle the nav bar menu
//     // console.log(links.classList);
//     // console.log(links.classList.contains('random'));
//     // console.log(links.classList.contains('links'))
//     if(links.classList.contains('show-links')) {
//         links.classList.remove('show-links');
//     }
//     else {
//         links.classList.add('show-links');
//     }

// One liner toggle method to toggle the nav bar menu
    links.classList.toggle('show-links');

});


