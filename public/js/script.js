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
        }
    }














})