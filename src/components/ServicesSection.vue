<template>
    <section id="services" class="services">
        <h2 data-aos="fade-up" data-aos-duration="800">Des Services<br>Personnalisés</h2>
        <p data-aos="fade-up" data-aos-delay="200">
            Notre agence propose des solutions créatives et stratégiques pour aider les jeunes entrepreneurs
            à développer leur présence digitale. Nous combinons expertise technique et vision créative
            pour transformer vos idées en projets concrets et impactants.
        </p>

        <div class="services-container">
            <div class="service-card" v-for="(service, index) in services" :key="index" data-aos="fade-up"
                :data-aos-delay="index * 100 + 300">
                <div class="service-icon">
                    <i :class="service.icon"></i>
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <div class="service-overlay">
                    <span>En savoir plus</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ServicesSection",
    data() {
        return {
            services: [
                {
                    title: "Design Web",
                    description: "Créations web sur mesure adaptées à votre image de marque et à vos besoins spécifiques.",
                    icon: "fas fa-pencil-ruler"
                },
                {
                    title: "Branding",
                    description: "Développement d'une identité visuelle percutante qui vous démarque de la concurrence.",
                    icon: "fas fa-paint-brush"
                },
                {
                    title: "Social Media",
                    description: "Stratégies de médias sociaux pour augmenter votre visibilité et engager votre communauté.",
                    icon: "fab fa-instagram"
                },
                {
                    title: "Marketing Digital",
                    description: "Campagnes digitales ciblées pour atteindre et convertir votre audience idéale.",
                    icon: "fas fa-chart-line"
                }
            ]
        }
    }
}
</script>

<style scoped>
.services {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--color-background-soft);
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h2 {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: -0.2px;
}

p {
    font-size: 1.2rem;
    color: var(--color-text);
    line-height: 1.6;
    font-weight: 300;
    max-width: 800px;
    margin: 0 auto;
}

.services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.service-card {
    background-color: var(--color-background);
    border-radius: 12px;
    padding: 2rem;
    width: 260px;
    text-align: left;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    animation: fadeIn 1s ease forwards;
    opacity: 0;
}

.service-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.service-icon {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.4s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.service-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.service-card:hover .service-icon::before {
    opacity: 1;
}

.service-card:hover .service-icon {
    background-color: var(--color-primary);
    color: white;
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-icon i {
    font-size: 1.8rem;
    transition: all 0.4s ease;
}

.service-card h3 {
    color: var(--color-heading);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.service-card h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 3px;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
}

.service-card:hover h3::after {
    width: 80px;
}

.service-card p {
    text-align: left;
    font-size: 0.95rem;
    color: var(--color-text);
}

.service-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
    cursor: pointer;
}

.service-card:hover .service-overlay {
    opacity: 0.95;
    transform: scale(1);
}

.service-overlay span {
    color: white;
    font-weight: 600;
    letter-spacing: 0.5px;
    border: 2px solid white;
    padding: 0.5rem 1rem;
    border-radius: 30px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 1024px) {
    h2 {
        font-size: 3.2rem;
    }
}

@media (max-width: 768px) {
    .services {
        min-height: 60vh;
        padding: 3rem 1rem;
    }

    h2 {
        font-size: 2.8rem;
    }

    p {
        font-size: 1.1rem;
        max-width: 100%;
        padding: 0 1rem;
    }

    .services-container {
        gap: 1.5rem;
    }

    .service-card {
        width: calc(50% - 1.5rem);
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .services {
        padding: 2rem 1rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1rem;
    }

    .service-card {
        width: 100%;
    }
}
</style>