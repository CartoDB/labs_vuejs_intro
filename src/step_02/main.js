document.addEventListener('DOMContentLoaded', function () {
    // When DOM is loaded start the Vue instance
    loadVue();

    // When the Airship responsive content is ready load the map
    document
        .querySelector('as-responsive-content')
        .addEventListener('ready', () => {
            loadMap();
        });
});