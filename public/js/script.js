var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
                myData: [],
                projects: []
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














            })