document.addEventListener("DOMContentLoaded", function() {
    $(window).scroll(function() {
        if ( $(window).scrollTop() >= 150) {
            $('body').addClass('onScroll');
        } else {
            $('body').removeClass('onScroll');
        }
    });
    $('.jsMenu').on('click', function() {
        $('body').toggleClass('menuOpen');
    });
    
    $('.product-add .main-btn').on('click', function() {
        $(this).parent().parent().parent().toggleClass('on-cart');
    });
    $('.delivery-hide').on('click', function() {
        $(this).parent().parent().toggleClass('hidden');
    });
    $('.advantage-header').on('click', function() {
        $(this).parent().parent().find('.active').removeClass('active')
        $(this).parent().addClass('active');
    });
    var height = $('.advantages-item.active .advantage-content').innerHeight()
    $( ".advantage-content" ).css('min-height', height);
    $( ".advantages-wrapper" ).css('padding-bottom', height);
    $( window ).resize(function() {
        var height = $('.advantages-item.active .advantage-content').innerHeight()
        $( ".advantage-content" ).css('min-height', height);
        $( ".advantages-wrapper" ).css('padding-bottom', height);
      });
    $('.product-add .minus-btn').on('click', function() {
       var value = Number($(this).parent().find('input').val())
       if (value >= 1) {
            value--;
            $(this).parent().find('input').val(value)
       }

    });
    $('.product-add .plus-btn').on('click', function() {
        var value = Number($(this).parent().find('input').val())
        value++;
        $(this).parent().find('input').val(value)
    });
    $('.card-info__nav-title').on('click', function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        var index = $(this).index()
        $('.card-info__panel').find('.card-info__box.active').removeClass('active');
        $('.card-info__panel').find('.card-info__box').eq(index).addClass('active');
    });
    if ( $('.card-slider').length > 0) {
        $('.card-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }).on('afterChange', function(event, slick, currentSlide, nextSlide){
            $('.card-select').find('.active').removeClass('active');
            $('.card-select').find('.card-select__image').eq(currentSlide).addClass('active');
        });
    }

    $('.card-select__image').click(function(e) {
        e.preventDefault();
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        var slideno = $(this).index()
        $('.card-slider').slick('slickGoTo', slideno );
      });
      $('.card-taste__col').on('click', function() {
        $(this).toggleClass('active');
    });
    $('.card-taste__row').on('click', function() {
        $(this).toggleClass('active');
    });
    $(".rate-yo:not(.advantage-rating)").each(function() {
        $(this).starRating({
            totalStars: 5,
            emptyColor: 'white',
            activeColor: '#E88368',
            readOnly: true,
            useGradient: false,
          });
      });
      $('.advantage-rating.rate-yo').starRating({
        totalStars: 5,
        emptyColor: 'white',
        activeColor: '#6697CD',
        readOnly: true,
        useGradient: false,
      });
});
