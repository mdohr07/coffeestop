# COFFEE STOP - Your Cycling Café 

Coffee Stop is an imaginary business project for a cycling café, offering a unique blend of coffee and bicycle services. Cyclists can enjoy a refreshing cup of coffee while having their bikes repaired or participate in group cycling events and workshops. This project serves as a platform for improving skills in web development and is built using HTML, CSS, SCSS, and a touch of JavaScript.

<img src="https://github.com/mdohr07/coffeestop/blob/main/images/gallery/coffeestop.png">

## Features

- Clean and cozy user interface.
- Image carousel to showcase the café's menu items and atmosphere.
- Fully responsive design.

## Code Snippets

Here are some code snippets that might be helpful to others:

```html
    <!-- Hero Section -->
       <div class="hero">
        <div class="hero__container">
            <div class="hero__container--left hidden">
                <section class="hero__container--section">

                <h1>your bike café</h1>
                <p>While you enjoy our homemade food, freshly brewed coffee 
                   or a cool tapped beer the bicycle is also being repaired. 
                   Want to fix it yourself? No problem! Learn how by joining 
                   one of our workshops!</p>

                   <button class="hero__container--btn">
                    <a href="#" id="button">find a workshop</a>
                   </button>
                </section>
            </div>

            <div class="hero__container--right hidden">
            </div>
        </div>
       </div>
    <!-- Hero Section End -->
```

```JavaScript
// Loading one by one
/* Takes a callback function into its constructor, can observe multiple elements 
or entries at the same time and runs every time the visibility of one of the 
elements changes */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            // Is it intersecting the viewport?
            entry.target.classList.add('show'); // If it is intersecting, add the class "show"
        } else {
            entry.target.classList.remove('show'); // Removes the class when not intersecting
        }
    });
});
```
