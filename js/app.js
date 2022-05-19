
//Query the all sections and store the list in variable.
const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('ul');



// build the nav
// Use forEach on the list Variable.
sections.forEach(function(section) {
    // Extract the data-nav value from the section and store it in variable.
    const dataNav = section.getAttribute('data-nav');

    // create (1 <li> and 1 <a> and 1 textNode) for each section in the list
    const li = document.createElement('li');
   
    // add this variable whiich contains the text to the link as (text Content, ID or data-nav value)
    li.innerHTML=`<a class="menu__link">${dataNav}</a>`; //appear sections
    li.addEventListener('click', function() {
        // Scroll to anchor ID using scrollTO event
        section.scrollIntoView({behavior: "smooth"});
    });

    // append to ul
    navMenu.appendChild(li);
});


// Active Section
// addEventListener 
 window.addEventListener('scroll', () => {
    let links = document.querySelectorAll('a');

    sections.forEach( (section) => {
        // use getBoundingClientRect to return some props about sections
        let ClientRect = section.getBoundingClientRect();

        // Add class 'active' to section when near top of viewport
        if(ClientRect.top >= 0 && ClientRect.bottom <= window.innerHeight) {
            sections.forEach( (sec) => {
                // remove all sections
                sec.classList.remove('your-active-class');
            })
            section.classList.add('your-active-class');


            // Active links
            links.forEach(function(link){
            //each link should have data-nav
             if(link.textContent === section.getAttribute('data-nav')) {
                 links.forEach((li) => {
                     // remove active classes from all links
                     li.removeAttribute('style', 'background');
                 })
                    link.style.background = "blue";
              }
           })
        }
    })
})




