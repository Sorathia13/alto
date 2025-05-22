<template>
    <footer class="footer">
        <p>© 2025 Alto. Tous droits réservés.</p>
    </footer>
</template>

<style scoped>
.footer {
    text-align: center;
    padding: 1.5rem;
    background-color: var(--color-background);
    color: var(--color-text-secondary);
    font-size: 0.9rem;
}

.footer p {
    font-weight: 300;
    /* Light pour le texte du footer */
    letter-spacing: 0.2px;
}

@media (max-width: 768px) {
    .footer {
        padding: 1.2rem;
    }
}

@media (max-width: 480px) {
    .footer {
        padding: 1rem;
        font-size: 0.8rem;
    }
}
</style>