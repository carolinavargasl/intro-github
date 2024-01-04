document.addEventListener('DOMContentLoaded', function () {
    // Cargar la animación
    var animacion = bodymovin.loadAnimation({
        container: document.getElementById('animacion'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'RS/build/js/home/stars.json' // Ruta al archivo JSON
    });
});


//# sourceMappingURL=stars.js.map