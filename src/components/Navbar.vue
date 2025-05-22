<template>
    <nav class="navbar"
        :class="{ 'navbar-hidden': !menuActive && isHidden, 'scrolled': hasScrolled, 'menuActive': menuActive }">
        <div class="navbar-container">
            <div class="logo">
                <router-link to="/" @click="closeMenu">
                    <img src="@/assets/logo_alto.svg" alt="Logo Alto" />
                </router-link>
            </div>
            <div class="menu-icon" :class="{ 'active': menuActive }" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" :class="{ 'active': menuActive }">
                <li><router-link v-if="$route.path !== '/'" to="/#services" @click="closeMenu">Services</router-link><a
                        v-else href="#services" @click="closeMenu">Services</a></li>
                <li><router-link v-if="$route.path !== '/'" to="/#equipe" @click="closeMenu">Notre
                        Équipe</router-link><a v-else href="#equipe" @click="closeMenu">Notre Équipe</a></li>
                <li><router-link v-if="$route.path !== '/'" to="/#realisations"
                        @click="closeMenu">Réalisations</router-link><a v-else href="#realisations"
                        @click="closeMenu">Réalisations</a></li>
                <li><router-link v-if="$route.path !== '/'" to="/#contact" @click="closeMenu">Contact</router-link><a
                        v-else href="#contact" @click="closeMenu">Contact</a></li>
                <li class="mobile-only"><router-link to="/contact" class="contact-button" @click="closeMenu">Nous
                        contacter</router-link></li>
            </ul>
            <router-link to="/contact" class="contact-button desktop-only">Nous contacter</router-link>
        </div>
        <div class="overlay" :class="{ 'active': menuActive }" @click="closeMenu"></div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isHidden: false,
            lastScrollY: 0,
            hasScrolled: false,
            scrollThreshold: 10,
            menuActive: false,
            scrollPosition: 0 // Nouvelle propriété pour stocker la position de défilement
        };
    },
    mounted() {
        this.lastScrollY = window.scrollY;
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        // S'assurer que la classe no-scroll est supprimée
        document.body.classList.remove('no-scroll');
    },
    methods: {
        handleScroll() {
            // Ne pas permettre le défilement si le menu est ouvert
            if (this.menuActive) return;

            const currentScrollY = window.scrollY;
            const scrollDifference = Math.abs(currentScrollY - this.lastScrollY);

            if (scrollDifference > this.scrollThreshold) {
                if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
                    this.isHidden = true;
                }
                else if (currentScrollY < this.lastScrollY) {
                    this.isHidden = false;
                }

                this.lastScrollY = currentScrollY;
            }

            this.hasScrolled = window.scrollY > 0;
        },
        toggleMenu() {
            if (!this.menuActive) {
                // Ouverture du menu
                this.scrollPosition = window.pageYOffset;
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = `-${this.scrollPosition}px`;
                document.body.style.width = '100%';
                this.menuActive = true;
            } else {
                // Fermeture du menu
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('position');
                document.body.style.removeProperty('top');
                document.body.style.removeProperty('width');
                this.menuActive = false;
                window.scrollTo({
                    top: this.scrollPosition,
                    behavior: 'instant' // Comportement instantané pour éviter l'animation
                });
            }
        },
        closeMenu() {
            if (this.menuActive) {
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('position');
                document.body.style.removeProperty('top');
                document.body.style.removeProperty('width');
                this.menuActive = false;
                window.scrollTo({
                    top: this.scrollPosition,
                    behavior: 'instant' // Comportement instantané pour éviter l'animation
                });
            }
        }
    },
};
</script>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 0;
    background-color: var(--color-background);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.3s ease-in-out, opacity 0.4s ease;
    transform: translateY(0);
}

.navbar-hidden {
    transform: translateY(-100%);
    box-shadow: none;
    opacity: 0;
}

.navbar.scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /* S'assure que le conteneur prend toute la hauteur de la navbar */
    box-sizing: border-box;
    /* Inclut le padding dans la hauteur totale */
}

/* Version ordinateur avec les éléments correctement positionnés */
@media (min-width: 769px) {
    .navbar-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .logo {
        /* Logo tout à gauche */
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
    }

    .nav-links {
        /* Liens au milieu */
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: center;
        position: relative;
        width: fit-content;
        left: 0;
        right: 0;
    }

    .contact-button.desktop-only {
        /* CTA tout à droite */
        position: absolute;
        right: 0;
    }
}

.logo {
    display: flex;
    align-items: center;
}

.logo a {
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
}

.logo a:hover {
    background-color: transparent;
    transform: none;
    box-shadow: none;
}

.logo img {
    height: 40px;
    width: auto;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
    position: relative;
    transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-links a:hover {
    color: white;
    background-color: var(--color-primary);
}

.contact-button {
    background-color: var(--color-primary);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    /* Semi-bold pour le bouton de contact */
    letter-spacing: 0.5px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    transition: all 0.3s ease;
}

.contact-button:hover {
    background-color: var(--color-primary);
    /* Version plus foncée de la couleur primaire */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.mobile-only {
    display: none;
}

.menu-icon {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
    z-index: 100;
    position: relative;
}

.menu-icon span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: var(--color-primary);
    border-radius: 3px;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
    position: absolute;
}

.menu-icon span:nth-child(1) {
    top: 0;
}

.menu-icon span:nth-child(2) {
    top: 8px;
}

.menu-icon span:nth-child(3) {
    top: 16px;
}

/* Animation de l'icône du menu */
.menu-icon.active span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
}

.menu-icon.active span:nth-child(2) {
    opacity: 0;
}

.menu-icon.active span:nth-child(3) {
    transform: rotate(-45deg);
    top: 8px;
}

@media (max-width: 768px) {
    .navbar {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        padding: 0;
    }

    .navbar-container {
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .logo {
        position: static;
        /* Annuler la position absolute de la version desktop */
        display: flex;
        align-items: center;
        margin-right: auto;
        /* Pousse les autres éléments vers la droite */
    }

    .menu-icon {
        display: flex;
        margin-left: auto;
        /* Pousse le menu tout à droite */
        position: relative;
    }

    /* Lorsque le menu est actif, s'assurer que la barre reste visible */
    .navbar.navbar-hidden.menuActive {
        transform: translateY(0);
        opacity: 1;
    }

    .menu-icon {
        display: flex;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        flex-direction: column;
        background-color: var(--color-background);
        width: 80%;
        height: 100vh;
        padding: 80px 0 30px 0;
        transition: right 0.3s ease;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        z-index: 90;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .nav-links.active {
        right: 0;
    }

    .nav-links li {
        margin: 1.5rem 0;
        width: 100%;
        /* Occuper toute la largeur disponible */
    }

    .nav-links a {
        font-size: 1.2rem;
        /* Augmenter légèrement la taille de police */
        padding: 0.5rem 0;
        /* Ajouter un peu de padding vertical */
        display: inline-block;
        /* Pour que le padding fonctionne correctement */
    }

    .desktop-only {
        display: none;
    }

    .mobile-only {
        display: block;
        margin-top: 2rem;
        width: 80%;
        /* Largeur définie pour le bouton */
        max-width: 200px;
        /* Largeur maximale */
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 80;
    }

    .overlay.active {
        opacity: 1;
        pointer-events: auto;
    }
}

/* Style pour empêcher le défilement - retiré :global car non supporté */
.no-scroll {
    overflow: hidden !important;
    height: 100% !important;
}
</style>