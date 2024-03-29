<?php
$dates = array(strtotime("16 July 2019"),strtotime("17 July 2019"));

$switchDate = $currDate = strtotime("now");

if ($currDate < $dates[0]) {
	
	header('location: https://start.bizon365.ru/room/6538/metaphysics_3_steps_day1');
	
}

elseif (($currDate >= $dates[0]) && ($currDate < $dates[1])) {
	
	header('location: https://start.bizon365.ru/room/6538/metaphysics_3_steps_day2');
	
}

else {
	
	header('location: https://skutskaya.mastervision.su/rune-programming/course/');
	
}

?>

<!DOCTYPE html>
<html lang="ru">
    
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device=width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="«Программирование событий на языке рун»" />
    <meta property="og:description" content="Анна Скуцкая" />
    <title>«Программирование событий на языке рун». Анна Скуцкая</title>
    <link rel="icon" type="image/x-icon" href="../favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.png" />
    <script type="text/javascript">
        ! function () {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = "https://vk.com/js/api/openapi.js?160", t.onload =
                function () {
                    VK.Retargeting.Init("VK-RTRG-350620-gJCgg"), VK.Retargeting.Hit()
                }, document.head.appendChild(t)
        }();
    </script><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-350620-gJCgg" style="position:fixed; left:-999px;"
            alt="" /></noscript><!-- Global site tag (gtag.js) - Google Analytics -->
    <script async="async" src="https://www.googletagmanager.com/gtag/js?id=UA-130434463-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-130434463-1');
    </script><!-- Facebook Pixel Code -->
    <script>
        ! function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2406475009380573');
        fbq('track', 'PageView');
    </script><noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=2406475009380573&amp;ev=PageView&amp;noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->
    <script type="text/javascript">
        ! function () {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = "https://vk.com/js/api/openapi.js?160", t.onload =
                function () {
                    VK.Retargeting.Init("VK-RTRG-350620-gJCgg"), VK.Retargeting.Hit()
                }, document.head.appendChild(t)
        }();
    </script>
</head>
<body>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
                try {
                    w.yaCounter35450015 = new Ya.Metrika({
                        id: 35450015,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true
                    });
                } catch (e) {}
            });
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () {
                    n.parentNode.insertBefore(s, n);
                };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
    </script><noscript>
        <div><img src="https://mc.yandex.ru/watch/35450015" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript><!-- /Yandex.Metrika counter -->
    <!-- Rating@Mail.ru counter -->
    <script type="text/javascript">
        var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({
            id: "3089960",
            type: "pageView",
            start: (new Date()).getTime(),
            pid: "USER_ID"
        });
        (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script");
            ts.type = "text/javascript";
            ts.async = true;
            ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {
                var s = d.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(ts, s);
            };
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "topmailru-code");
    </script><noscript>
        <div><img src="https://top-fwz1.mail.ru/counter?id=3089960;js=na"
                style="border:0;position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div>
    </noscript><!-- //Rating@Mail.ru counter -->
 
    <!-- AutoWebOffice: UTM or OpenStat Counter -->
    <script type="text/javascript">
        var url = "https://shop.mastervision.su/?r=api/utmopenstat";
    </script>
    <script type="text/javascript" src="https://shop.mastervision.su/js/utm_openstat.js" defer="defer"></script>
    <!-- /AutoWebOffice: UTM or OpenStat Counter -->
</body>
</html>