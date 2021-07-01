"use strict";

$(document).ready(function() {

    var contrast = Cookies.get("contraste");
    
    if(contrast == "1") {
        $("body").addClass("dark-skin");
    }

    $("#contraste").click(function() {
        var contrast = Cookies.get("contraste");

        if(contrast == "1") {
            $("body").removeClass("dark-skin");
            Cookies.set("contraste", "0");
        }
        else {
            $("body").addClass("dark-skin");
            Cookies.set("contraste", "1");
        }

        return false;
    });
});
