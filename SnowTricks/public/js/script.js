$( document ).ready(function() {
    $('.trash-trick').click(function(){
        if(confirm('Vous êtes sûr de vouloir supprimer ce Trick ?')) {
            location.reload();
        }
    })
});
$(document).ready(function() {
    $(".down").click(function() {
         $('html, body').animate({
             scrollTop: $(".up").offset().top
         }, 1500);
     });
});
    
$(document).ready(function() {
    $(".up").click(function() {
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000);
    });
});