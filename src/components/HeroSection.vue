<template>
    <section id="accueil" class="hero">
        <div class="hero-content">
            <h1 data-aos="fade-right" data-aos-duration="1000">Alto., Élevons les voix de demain</h1>
            <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                Plus qu’une simple agence parmi tant d’autres... nous sommes de véritables architectes
                d’opportunités, des amplificateurs des voix. Notre mission ? Permettre à la jeunesse
                entreprenante de notre époque de transformer leurs visions en réalités.
            </p>
            <button class="cta-button" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">Nous
                découvrir</button>
        </div>
        <div class="hero-image" data-aos="fade-up" data-aos-duration="1200">
            <div class="image-container">
                <img src="@/assets/images/rond_marron.png" alt="Cercle décoratif" class="background-circle" />
                <img src="@/assets/images/illustration.png" alt="Illustration" class="main-illustration" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    background-color: var(--color-background-soft);
    background-image: url('@/assets/images/lines.png');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.hero-content {
    max-width: 50%;
    padding: 2rem;
    color: white;
}

h1 {
    font-size: 3rem;
    color: var(--color-heading);
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: -0.5px;
}

p {
    font-size: 1.2rem;
    color: var(--color-text);
    margin-bottom: 2rem;
    line-height: 1.6;
    font-weight: 400;
}

.cta-button {
    background-color: var(--color-primary);
    color: white;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 0.5px;
}

.hero-image {
    max-width: 55%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0;
}

.image-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.background-circle {
    position: absolute;
    width: 110%;
    height: auto;
    z-index: 1;
    right: -5%;
}

.main-illustration {
    position: relative;
    width: 75%;
    z-index: 2;
    border-radius: 8px;
}

.hero-image img {
    max-width: 100%;
}

@media (max-width: 1024px) {
    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 1rem;
        background-position: bottom;
    }

    .hero-content {
        max-width: 100%;
        padding: 2rem 1rem;
        margin-top: 2rem;
    }

    h1 {
        font-size: 2rem;
    }

    .hero-image {
        display: none;
        /* Cacher complètement l'image sur mobile */
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.8rem;
    }

    .hero-content {
        padding: 1rem;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0px);
    }
}

.hero-content h1 {
    animation: fadeInRight 1s ease forwards;
}

.hero-content p {
    animation: fadeInRight 1s ease 0.3s forwards;
    opacity: 0;
}

.hero-content .cta-button {
    animation: fadeInRight 1s ease 0.6s forwards;
    opacity: 0;
}

.hero-image .image-container {
    animation: fadeInUp 1.2s ease forwards;
}

.background-circle {
    animation: float 6s ease-in-out infinite;
}

.main-illustration {
    animation: float 4s ease-in-out 0.5s infinite;
}
</style>