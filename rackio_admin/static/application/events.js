// events.js

var events_app = new Tulipan({
    template: {
        url: "/admin/templates/events",
        async: false
    },

    route: "/events",

    data: {
        events: []
    },

    methods: {

        after: function(){
            
        },

        retrieveEvents: function(){
            
        }
    }
})
