const loadVue = function () {
    console.log('Loading vue instance...');

    // Ignore airship tags
    Vue.config.ignoredElements = [/as-\w+/];

    // Vue instance
    const app = new Vue({
        el: '#app',
        data: {
            step: 4,
            longitude: 73,
            latitude: 1,
            zoomLevel: 3,
            totalCount: null,
            map: null
        }
    });

    console.log('Vue instance loaded!');
    return app;
};