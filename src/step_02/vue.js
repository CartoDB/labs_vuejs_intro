const loadVue = function(){
    console.log('Loading vue instance...');

    // Ignore airship tags
    Vue.config.ignoredElements = [/as-\w+/];

    // Vue instance
    const app = new Vue({
        el: '#app',
        data: {
            'step': 2
        }
    });


    console.log('Vue instance loaded!');
    return app;
};