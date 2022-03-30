$('#slickProductCarousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    centerMode: true,
    centerPadding: '100px',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                centerPadding: '60px',
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '40px',
            }
        }
    ]
})