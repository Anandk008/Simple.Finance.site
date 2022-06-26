//Sticky Menu 
window.addEventListener('scroll',function() {
    if (window.scrollY > 150 ) {
        this.document.querySelector('#top-nav').style.opacity = 0.9;
    } else {
        this.document.querySelector('#top-nav').style.opacity = 1;
    }

})

//Smooth Scrolling 

// $('#top-nav .scroll, .btn').on('click',function(event) {
//     if(this.hash !== '') {
//         event.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate(
//             {
//                 scrollTop: $(hash).offset().top - 100
//             },
//             800
//         );
//     }
// });

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top-110
        }, 1500, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
