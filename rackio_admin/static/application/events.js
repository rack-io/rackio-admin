// events.js

var alarms_app = new Tulipan({
    template: {
        url: "/admin/templates/alarms",
        async: false
    },

    route: "/alarms",

    data: {
        alarms: []
    },

    methods: {

        after: function(){
            
        },

        retrieveAlarms: function(){
            
        }
    }
})
