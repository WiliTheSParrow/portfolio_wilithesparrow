/* import ScrollAnimation from './scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation); */

const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    });

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

    bind(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
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


})