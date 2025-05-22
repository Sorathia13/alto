<template>
    <section id="equipe" class="team">
        <h2 data-aos="fade-up" data-aos-duration="800">Une Équipe Sur Mesure</h2>
        <div class="team-members">
            <div class="member" v-for="(member, index) in team" :key="member.name" data-aos="fade-up"
                :data-aos-delay="index * 100 + 200">
                <img :src="member.image" :alt="member.name" class="member-image" />
                <h3>{{ member.name }}</h3>
                <p>{{ member.role }}</p>
                <div class="social-links">
                    <a v-for="link in member.social" :key="link.platform" :href="link.url" target="_blank">
                        <i :class="link.icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "TeamSection",
    data() {
        return {
            team: [
                {
                    name: "Clara",
                    role: "Chef de Projet",
                    image: "src/assets/images/clara.png",
                    social: [
                        { platform: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
                        { platform: "GitHub", url: "#", icon: "fab fa-github" },
                    ],
                },
                {
                    name: "Nevana",
                    role: "Marketing Manager",
                    image: "src/assets/images/nevana.png",
                    social: [
                        { platform: "Behance", url: "#", icon: "fab fa-behance" },
                        { platform: "Dribbble", url: "#", icon: "fab fa-dribbble" },
                    ],
                },
                {
                    name: "Ethan",
                    role: "Marketing Manager",
                    image: "src/assets/images/ethan.png",
                    social: [
                        { platform: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
                    ],
                },
                {
                    name: "Luca",
                    role: "Directeur Artistique",
                    image: "src/assets/images/luca.png",
                    social: [
                        { platform: "GitHub", url: "#", icon: "fab fa-github" },
                    ],
                },
                {
                    name: "Kimi",
                    role: "Développeur Web",
                    image: "src/assets/images/kimi.png",
                    social: [
                        { platform: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
                        { platform: "Twitter", url: "#", icon: "fab fa-twitter" },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.team {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--color-background);
}

h2 {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
    font-weight: 600;
    /* Semi-bold pour le titre de section */
    letter-spacing: -0.2px;
}

.team-members {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

.member {
    text-align: center;
    width: 160px;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 1rem;
    border-radius: 12px;
}

.member:hover {
    transform: translateY(-8px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.member-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid var(--color-secondary);
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.member:hover .member-image {
    border-color: var(--color-primary);
    transform: scale(1.05) rotate(3deg);
}

h3 {
    font-size: 1.2rem;
    color: var(--color-heading);
    margin-bottom: 0.5rem;
    font-weight: 600;
    /* Semi-bold pour les noms */
}

p {
    font-size: 1rem;
    color: var(--color-text);
    margin-bottom: 1rem;
    font-weight: 300;
    /* Light pour les rôles */
    font-style: italic;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 0.5rem;
}

.social-links a {
    color: var(--color-text);
    font-size: 1rem;
    padding: 5px;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
}

.social-links a:hover {
    color: var(--color-primary);
    transform: translateY(-3px) scale(1.1);
}

@media (max-width: 1024px) {
    h2 {
        font-size: 3.2rem;
    }

    .team-members {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .team {
        padding: 3rem 1rem;
    }

    h2 {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
    }

    .team-members {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .member {
        width: 140px;
    }

    .member-image {
        width: 100px;
        height: 100px;
    }
}

@media (max-width: 480px) {
    h2 {
        font-size: 2.2rem;
    }

    .team-members {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .member {
        width: 80%;
        max-width: 200px;
    }
}

/* Animation classes */
.animate {
    opacity: 0;
    transform: translateY(20px);
    animation-duration: 0.8s;
    animation-fill-mode: both;
}

.fade-in-up {
    animation-name: fadeInUp;
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
</style>