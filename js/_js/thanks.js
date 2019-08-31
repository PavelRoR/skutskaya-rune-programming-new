//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js

$(document).ready(function () {
    $(function () {
        var e = new Date,
            t = e.getDate(),
            n = $(".switch-date");
        switch (t) {
            case 20:
                n.text("20 сентября");
                break;
            default:
                n.text("19 сентября")
        }
    }), $(function () {
        var e = $(".check", this),
            t = $(".input-mail", this),
            n = $(".alert-message", this);
        t.keypress(function (e) {
            if ((e.keyCode < 48 || e.keyCode > 57) && 43 != e.keyCode) return n.text("Только цифры!").slideDown(500), !1;
            n.slideUp(500)
        }), $(".form").on("submit", function () {
            var e = $(".check", this),
                t = $(".alert-message", this),
                n = $(".input-mail", this),
                i = $(".button-form", this);
            return n.val().match(/.+/) ? n.val().match(/^([0-9])+$/) ? e.prop("checked") ? void(n.val() && e && (i.text("Отправляем..."), setTimeout(function () {
                i.text("Отправлено!")
            }, 500))) : (e.next().css("color", "#000"), e.next().children().css("color", "#000"), t.text("Подтвердите соглашение").slideDown(500), !1) : (n.css("border", "1px solid red").val(""), t.text("Только цифры!").slideDown(500), !1) : (n.css("border", "1px solid red"),
                t.text("Введите телефон").slideDown(500), !1)
        }), t.click(function () {
            t.css("border", "none"), n.slideUp(500)
        }), e.click(function () {
            e.next().css("color", "rgba(255,255,255,0.9)"), e.next().children().css("color", "rgba(255,255,255,0.9)"), n.slideUp(500)
        })
    })
});