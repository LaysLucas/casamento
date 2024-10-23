$(document).ready(function() {
    var cabecalho = $('#cabecalho');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            cabecalho.addClass('cabecalho-rolagem');
        } else {
            cabecalho.removeClass('cabecalho-rolagem');
        }
    });
});