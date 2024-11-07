$(document).ready(function() {
    // Fixar menu ao topo
    var cabecalho = $('#cabecalho');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            cabecalho.addClass('cabecalho-rolagem');
        } else {
            cabecalho.removeClass('cabecalho-rolagem');
        }
    });

    // Bloquear o botão direito e atalhos Ctrl+U e Ctrl+S
    $(document).on('contextmenu', function(event) {
        event.preventDefault();
    });
    
    $(document).on('keydown', function(event) {
        if (event.ctrlKey && (event.key === 'u' || event.key === 's')) {
            event.preventDefault();
        }
    });
});
