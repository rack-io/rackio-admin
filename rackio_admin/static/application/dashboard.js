// dashboard.js


var dashboard_app = new Tulipan({
    
    template: {
        url: "/admin/templates/dashboard",
        async: false
    },

    route: "/dashboard",

    data: {
        summary: {}
    },

    methods: {

        after: function(){
            
        },

        retrieveSummary: function(){
            
        }

    }
})
