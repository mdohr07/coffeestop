
/* Takes callback function into its constructor, can obersve multipe elements 
or entries at the same time and runs every time the visibility of one of the 
elements changes */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) { //Is it intersectiong the viewport?
            entry.target.classList.add('show'); //If it is intersecting, add class "show"
        } else {
            entry.target.classList.remove('show'); //removes class when not intersecting
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); //Grabs all the elements with the "hidden" class
hiddenElements.forEach((el) => observer.observe(el)); //observes all hidden elements