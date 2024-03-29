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
            link.href = "css/ie.min.css";
            head.appendChild(link);
        }
    });
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this),
            title = $('.mail_section_title'),
            title_2 = $('.last_form_title'),
            currDate = new Date(),
            startDate_1 = new Date("July 15 2019 18:30 UTC+3"),
            endDate_1 = new Date("July 15 2019 21:00 UTC+3"),
            startDate_2 = new Date("July 16 2019 18:30 UTC+3"),
            endDate_2 = new Date("July 16 2019 21:00 UTC+3"),
            rooms = new Array('https://start.bizon365.ru/room/6538/metaphysics_3_steps_day1', 'https://start.bizon365.ru/room/6538/metaphysics_3_steps_day2')

        function roomSwitch() {
            title.html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР? ЖДЕМ ТОЛЬКО ВАС!<br><span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><small>Присоединяйтесь к интенсиву и примите участие в грандиозном розыгрыше с ценным призом! Каждому участнику – денежные подарки! Поймайте удачу за хвост!</small>');
            title_2.html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР? ЖДЕМ ТОЛЬКО ВАС!<br><span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><small>Присоединяйтесь к интенсиву и примите участие в грандиозном розыгрыше с ценным призом! Каждому участнику – денежные подарки! Поймайте удачу за хвост!</small>');
            button.text('Зайти!');
        }
        if (currDate > startDate_1 && currDate < endDate_1) {
            roomSwitch();
        }
        if (currDate > startDate_2 && currDate < endDate_2) {
            roomSwitch();
        }
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
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
                if (currDate > startDate_1 && currDate < endDate_1) {
                    window.open(rooms[0]);
                }
                if (currDate > startDate_2 && currDate < endDate_2) {
                    window.open(rooms[1]);
                }
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