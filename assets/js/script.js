// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner-izquierdo');
    const detector = document.querySelector('.detector-borde');
    
    // Mostrar banner al entrar al detector
    detector.addEventListener('mouseenter', () => {
        banner.classList.add('visible');
    });
    
    // Ocultar banner cuando el mouse sale del banner
    banner.addEventListener('mouseleave', () => {
        banner.classList.remove('visible');
    });
    
    // mantener visible si el mouse está en el detector o en el banner
    detector.addEventListener('mouseleave', () => {
        // Pequeño retraso para permitir ir al banner sin que desaparezca
        setTimeout(() => {
            if (!banner.matches(':hover')) {
                banner.classList.remove('visible');
            }
        }, 100);
    });
});

// Crear cursor personalizado (pico)
const picotaCursor = document.createElement('div');
    picotaCursor.className = 'picota-cursor';
    picotaCursor.innerHTML = `⛏️`; // ingresar imagen de picota del mc
    picotaCursor.style.fontSize = '28px';
    document.body.appendChild(picotaCursor);
// Seguir al mouse
document.addEventListener('mousemove', (e) => {
    picotaCursor.style.left = (e.clientX - 18) + 'px';
    picotaCursor.style.top = (e.clientY - 18) + 'px';
});