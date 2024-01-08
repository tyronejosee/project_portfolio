document.addEventListener('DOMContentLoaded', function () {
    const toggleModeButton = document.getElementById('toggleModeButton');
    const htmlElement = document.documentElement;
    const darkModeStyles = document.getElementById('darkModeStyles');
    let isDarkMode = true;

    toggleModeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            htmlElement.classList.add('dark');
            darkModeStyles.href = "/static/css/dark-mode.css";
        } else {
            htmlElement.classList.remove('dark');
            darkModeStyles.href = "/static/css/light-mode.css";
        }
    });
});

const projectsSection = document.getElementById('projects-section');
let animationExecuted = false;

window.addEventListener('scroll', () => {
  if (!animationExecuted) {
    const rect = projectsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      projectsSection.classList.remove('opacity-0', 'translate-y-20');
      projectsSection.classList.add('opacity-100', 'translate-y-0');
      
      // Marcar la animación como ejecutada
      animationExecuted = true;
    }
  }
});