$(window).on('load', function() {
    setTimeout(function() {
        $('#welcome').fadeIn()
        $('.loading-bar').fadeIn()
        setTimeout(function() {
            $('.loading-container').fadeOut('slow');
            $('.index-container').show();
        }, 2450)
    }, 800)
});

$('.nameB').on('click', function() {
    let name = $('#name').val();
    if(name !== "") {
        $('#wt-H').html("Welcome to my site, " + name)
        $('.nameI').fadeOut('slow');
        setTimeout(function() {
            $('.welcomeT').css("display", "flex");
        }, 800)
    } else {
        $('.nameI').fadeOut('slow');
        setTimeout(function() {
            $('.welcomeT').css("display", "flex");
        }, 800)
    }
})