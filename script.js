function showAlert() {
    alert('Form telah terkirim!');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        showAlert();
    });
});
