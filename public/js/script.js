var app = new Vue({
    el: '#app',
    data: {
        myData: [],
        projects: [],
        linearGradient: "linear-gradient(to bottom,       rgba(#4F4F78, 1.5),rgba(#4F4F78, .9)),"
    },


    // fetching data from JSON when page loads:
    created: function () {
        this.getLocalData('data.json', 'myData');
        this.getLocalData('projects.json', 'projects');

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

    },
    computed: {
        gradient() {
            let colors = "linear-gradient(to bottom,rgba(#4F4F78, .7),rgba(#4F4F78, .5))";

            return colors;
        }
    }










})