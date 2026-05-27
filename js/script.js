document.addEventListener('DOMContentLoaded', async () => {
    const mdContainer = document.getElementById('markdown-content');
    if (mdContainer) {
        try {
            const response = await fetch('DESIGN.md');
            if (response.ok) {
                const markdownText = await response.text();
                // Strip YAML frontmatter if present
                const cleanMarkdown = markdownText.replace(/^---[\s\S]*?---/, '');
                mdContainer.innerHTML = marked.parse(cleanMarkdown);
            } else {
                mdContainer.innerHTML = '<p class="text-error">Error al cargar DESIGN.md</p>';
            }
        } catch (error) {
            console.error('Error loading Markdown:', error);
            mdContainer.innerHTML = '<p class="text-error">Error de conexión al cargar el contenido.</p>';
        }
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('menu-close');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    // Contact Form WhatsApp Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            const nombre = document.getElementById('form-nombre').value;
            const email = document.getElementById('form-email').value;
            const mensaje = document.getElementById('form-mensaje').value;

            const telefono = '573508485527';
            const texto = `¡Hola Kli Sándwich! 🔥\n\nSoy *${nombre}* (${email}).\n\n${mensaje}`;
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

            window.open(url, '_blank');
        });
    }
});
