// services/LoadingService.js

export default {
    show() {
        $("#page-loader").addClass("active");
    },
    hide() {
        $("#page-loader").fadeOut(300, function() {
            $(this).removeClass("active").removeAttr("style");
        });
    }
}