var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        window.plugins.insomnia.keepAwake(); // sleep mode off
        window.plugin.backgroundMode.enable();


    }
};
