// acessibilidade.js

"use strict";

$(document).ready(function() {

    var font = Cookies.get("fonte");
    var contrast = Cookies.get("contraste");

    if(font) {
        $("body").css({ "font-size": font+"px" });
    }

    if(contrast == "1") {
        $("body").addClass("high-contrast");
    }

    $("#font-increase").click(function() {
        var font = Cookies.get("fonte");
        font = parseInt(font);
        font = font || 14;
        font = font < 24 ? font+2 : font;

        $("body").css({ "font-size": font+"px" });
        Cookies.set("fonte", font);

        return false;
    });

    $("#font-decrease").click(function() {
        var font = Cookies.get("fonte");
        font = parseInt(font);
        font = font || 14;
        font = font > 8 ? font-2 : font;

        $("body").css({ "font-size": font+"px" });
        Cookies.set("fonte", font);

        return false;
    });

    $("#font-normal").click(function() {
        $("body").css({ "font-size": "" });
        Cookies.remove("fonte");

        return false;
    });

    $("#high-contrast").click(function() {
        var contrast = Cookies.get("contraste");

        if(contrast == "1") {
            $("body").removeClass("high-contrast");
            Cookies.set("contraste", "0");
        }
        else {
            $("body").addClass("high-contrast");
            Cookies.set("contraste", "1");
        }

        return false;
    });

    $("#scroll-down").click(function() {
        var offset = document.body.scrollHeight;
        $('html,body').animate({ scrollTop: offset }, 400);

        return false;
    });

    $("#scroll-top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    $("#topo").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 400);
        return false;
    });

});
