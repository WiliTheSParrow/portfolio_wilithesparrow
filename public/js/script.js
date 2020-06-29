var app = new Vue({
    el: '#app',
    data: {
        myData: [],
        projects: []
    },


    // fetching data from JSON when page loads:
    created: function () {
        this.getLocalData('data.json', 'myData');
        this.getLocalData('projects.json', 'projects');
        this.gradient();
    },


    methods: {
        // fetch data from JSON files:
        getLocalData: function (link, destination) {
            fetch(link, {
                    method: "GET",
                })
                .then(response => response.json())
                .then(json => {
                    app[destination] = json;
                })
                .catch(error => error);
        },


        gradient: function () {
            let colors = "linear-gradient(to bottom,rgba(#4F4F78, .7),rgba(#4F4F78, .5))";

            return colors;
        }
    }











})