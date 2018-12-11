const toggleOverlay = () => {
    $('#overlay').toggle();
    $('#overlay').toggleClass('animate-menu');
    // $('body').toggleClass('hidden-overflow');
}

$('#open-menu').on('click', toggleOverlay);
