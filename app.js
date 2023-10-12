









$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });

  $(".next").click(function(){
    console.log("Next button clicked");
    var scrollWidth=$(".step").width();
    var wrapperPos=$(".step-wraaper").scrollLeft();
    console.log("Scroll Width:" + scrollWidth +"scroll Pos:"+ wrapperPos );
    $(".step-wraaper").animate({
        scrollLeft:wrapperPos+scrollWidth
    },200)
  })
  $(".back").click(function(){
    console.log("Next button clicked");
    var scrollWidth=$(".step").width();
    var wrapperPos=$(".step-wraaper").scrollLeft();
    console.log("Scroll Width:" + scrollWidth +"scroll Pos:"+ wrapperPos );
    $(".step-wraaper").animate({
        scrollLeft:wrapperPos-scrollWidth
    },200)
  })




  $(document).ready(function() {
    // Add a change event handler to all checkboxes within divs
    $('input[type="checkbox"]').change(function() {
        // Find the parent div of the clicked checkbox
        var $parentDiv = $(this).closest('.checkbox_card');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Change the background color and border color of the parent div when checked
            $parentDiv.css('background-color', '#F7FDFF');
            $parentDiv.css('border', '1px solid #7EC8E3');
        } else {
            // Reset the background color and border color of the parent div when unchecked
            $parentDiv.css('background-color', '');
            $parentDiv.css('border', '');
        }
    });
});

