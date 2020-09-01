// tags.js

var tags_app = new Tulipan({
    template: {
        url: "/admin/templates/tags",
        async: false
    },

    route: "/tags",

    data: {
        tags: []
    },

    methods: {

        after: function(){
            this.retrieveTags();
        },

        retrieveTags: function(){

            this.$http.get("/api/tags").then(function(res){
                // exito
                console.log(res);
                this.tags = res.data;
            }, function(err){
                // falla
                console.log(err);
            });
        },

        writeTag: function(){
            var payload = {
            };

            this.$http.post("http://localhost:5000/api/auth/login", payload).then(function(res){
                // exito
                console.log(res);
            }, function(err){
                // falla
                console.log(err);
            });
        }

    }
})

setInterval(function(){ tags_app.retrieveTags(); }, 500);
