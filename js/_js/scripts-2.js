//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function () {
    $(function () {
        var isIE = false || !!document.documentMode;

        if (isIE) {
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "../css/ie.min.css";
            head.appendChild(link);
        }
    });
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            button = $('.button-form', this);

        $(".form").on("submit", function () {
            var check = $('.check', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                button.css({
                    'fontSize': '16px',
                    'color': 'red'
                }).text('Введите email');
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                button.css({
                    'fontSize': '16px',
                    'color': 'red'
                }).text('Подтвердите соглашение');
                return false;
            }
            if (email.val() && check) {

                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            button.css({
                'fontSize': '25px',
                'color': 'white'
            }).text('Записаться');
            // message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#eee",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#eee",
                'transition': 'all .4s ease'
            });
            button.css({
                'fontSize': '25px',
                'color': 'white'
            }).text('Записаться');
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $(function () {
        $(".video-wrapper-revs .video-rev-img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });

    $(function () {
        $('#video-revs').on('slide.bs.carousel', function () {
            $('.video-wrapper-revs iframe').each(function () {
                // var v =$('.video_rev_img');
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img class="video_rev_img" src="' + l + '" alt="Видео отзыв">');
                console.log(l);
            });
            $(".video-wrapper-revs .video-rev-img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>');
                console.log(a);
            });
        });
    });
    /*Конец документа*/
});