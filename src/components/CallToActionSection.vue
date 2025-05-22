<template>
    <section id="contact" class="call-to-action">
        <div class="cta-content">
            <h2 data-aos="fade-up" data-aos-duration="800">Prêt à vous lancer
                ?</h2>
            <router-link to="/contact" class="cta-button" data-aos="fade-up" data-aos-delay="300">Kickstart
                Your Future</router-link>
        </div>
    </section>
</template>

<style scoped>
.call-to-action {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--color-primary);
    color: white;
}

.cta-content h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    /* Bold pour le titre CTA */
    letter-spacing: -0.3px;
}

.cta-button {
    background-color: var(--color-secondary);
    color: var(--color-heading);
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.4s ease;
    font-weight: 600;
    /* Semi-bold pour le bouton */
    letter-spacing: 0.2px;
    text-transform: uppercase;
    /* Majuscules pour un style plus fort */
    text-decoration: none;
    display: inline-block;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
}

.cta-button:hover {
    background-color: #0a5d36;
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.cta-button:hover::before {
    left: 100%;
}

@media (max-width: 768px) {
    .call-to-action {
        padding: 3rem 1.5rem;
    }

    .cta-content h2 {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    .call-to-action {
        padding: 2.5rem 1rem;
    }

    .cta-content h2 {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }

    .cta-button {
        padding: 0.7rem 1.2rem;
        font-size: 0.8rem;
    }
}
</style>