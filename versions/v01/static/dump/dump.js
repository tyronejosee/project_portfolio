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