document.addEventListener('DOMContentLoaded', function () {
    const toggleHidden = document.getElementById('toggleHidden');
    const introSection = document.getElementById('intro-section');

    toggleHidden.addEventListener('click', function (event) {
        event.preventDefault();
        introSection.style.display = 'none';
    });
});

var notification = document.getElementById('pushNotification');
function ocultarDiv() {
  notification.style.opacity = '0';
}

setTimeout(ocultarDiv, 3000);