var app = new Vue({

    el: '#app',
    data: {
        myData: [],
        projects: [],
        sectionAbout: document.getElementById('aboutSection'),
        windowScrolledToIntroduction: false
    },


    // fetching data from JSON when page loads:
    created: function () {
        this.getLocalData('data.json', 'myData');
        this.getLocalData('projects.json', 'projects');


    },
    mounted: function () {
        window.addEventListener('scroll', this.setScrolledIntroduction);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.setScrolledIntroduction);
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

        setScrolledIntroduction: function () {
            this.windowScrolledToIntroduction = true;
            // console.log("You scrolled to Introduction part.")
        }

    },


})