$(document).ready(function() {
    $('.block-carousel').slick({
        dots: true,
        arrows: false
    });
});

$('#NextContent').click(function(e) {
    $('#nextContentList').fadeIn(200);
    $('#NextContent').hide();
});
