const accordion = document.getElementsByClassName('content-container');

for (const item of accordion) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}