// if (!navigator.userAgent.includes("ArtisBrowser")) {
//     window.location.replace("http://www.facebook.com");
// }

  // Your whitelist of allowed IP addresses
  var whitelist = ["87.149.156.70", "192.168.1.101", "192.168.1.102"];

  // Get the user's IP address
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      // Check if the user's IP address is in the whitelist
      if (!whitelist.includes(data.ip)) {
        // If the IP address is not in the whitelist, block access
        window.location.replace("http://example.com/restricted");
      }
    });


var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        grabCursor: true,
        preventClicks: true,
        spaceBetween: 30,
        keyboardControl: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        mousewheel: {
            enable: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                scrollbar: {
                    hide: true
                },
                spaceBetween: 0,
                autoHeight: true,
                centeredSlides: false,
                slidesOffsetAfter: 85
            }
        },
        on: {
            resize: function () {
                var windowWidth = $(window).width();
                if(windowWidth <= 767){
                        swiperBottomScrollbarFull.direction('vertical');
                        swiperBottomScrollbarFull.detachEvents();
                }else{
                        swiperBottomScrollbarFull.direction('horizontal');
                        swiperBottomScrollbarFull.attachEvents();
                }
                swiperBottomScrollbarFull.update();
            }
        }
    });
