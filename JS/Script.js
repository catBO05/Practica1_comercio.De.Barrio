// MENU RESPONSIVE

$(document).ready(function () { 
    $("#menu-toggle").on("click", function () { 
        $("#nav-links").toggleClass("active"); 
    }); 

    $("#nav-links a").on("click", function () { 
        $("#nav-links").removeClass("active"); 
    }); 
});

// MENU COLOR

$(document).ready(function () {
    var $menu = $("#menu");

    function actualizarMenu() {
        var pasado = $(window).scrollTop() > $(window).height() * 0.5;
        $menu.toggleClass("scrolled", pasado);
    }

    $(window).on("scroll", actualizarMenu);
    actualizarMenu();
});
