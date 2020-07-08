const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    });
    var app = new Vue( {
    // This function is called only once when the directive is bound to the element: 
    bind(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
})