
document.querySelectorAll(
    '.sidebar-email-toggle, .sidebar-detail-toggle'
).forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
        const toggles = document.querySelectorAll(
            '.sidebar-email-toggle, .sidebar-detail-toggle'
        );

        toggles.forEach((other) => {
            other.setAttribute('aria-expanded', 'false');
            const details = document.getElementById(
                other.getAttribute('aria-controls')
            );
            if (details) details.hidden = true;
        });

        if (!wasOpen) {
            toggle.setAttribute('aria-expanded', 'true');
            const details = document.getElementById(
                toggle.getAttribute('aria-controls')
            );
            if (details) details.hidden = false;
        }
    });
});
