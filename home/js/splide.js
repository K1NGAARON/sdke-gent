document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#splide-test', {
        type: 'slide',
        width: '100%',
        pagination: false,
        start: 1,
        focus: 1,
        perPage: 3,
        perMove: 1,
        rewind: true,
        breakpoints: {
            640: {
                destroy: true,
            },
        }
    }).mount();
});