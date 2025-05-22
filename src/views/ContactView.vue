<template>
    <div class="contact">
        <Navbar />
        <section class="contact-hero">
            <h1>Contactez-nous</h1>
            <p>Parlez-nous de votre projet et voyons comment nous pouvons vous aider à le concrétiser.</p>
        </section>

        <section class="contact-form-section">
            <div class="contact-container">
                <div class="form-info">
                    <h2>Prêt à transformer votre vision en réalité ?</h2>
                    <p>Remplissez le formulaire et nous vous répondrons sous 24h.</p>

                    <div class="contact-info">
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <p>contact@alto-agency.com</p>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-phone"></i>
                            <p>+33 6 12 34 56 78</p>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>12 rue de l'Innovation, 75001 Paris</p>
                        </div>
                    </div>
                </div>

                <form class="contact-form" @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Nom complet</label>
                        <input type="text" id="name" v-model="formData.name" required placeholder="Votre nom">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="formData.email" required placeholder="votre@email.com">
                    </div>

                    <div class="form-group">
                        <label for="phone">Téléphone (optionnel)</label>
                        <input type="tel" id="phone" v-model="formData.phone" placeholder="Votre numéro">
                    </div>

                    <div class="form-group">
                        <label for="subject">Sujet</label>
                        <select id="subject" v-model="formData.subject" required>
                            <option value="" disabled selected>Sélectionnez un sujet</option>
                            <option value="projet">Nouveau projet</option>
                            <option value="devis">Demande de devis</option>
                            <option value="info">Plus d'informations</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>

                    <div class="form-group full-width">
                        <label for="message">Message</label>
                        <textarea id="message" v-model="formData.message" required
                            placeholder="Décrivez votre projet ou votre demande" rows="5"></textarea>
                    </div>

                    <div class="form-group full-width">
                        <button type="submit" class="submit-button" :disabled="isSubmitting">
                            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
                        </button>
                    </div>

                    <div v-if="formSubmitted" class="submission-message">
                        <p>Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                </form>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'ContactView',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            },
            isSubmitting: false,
            formSubmitted: false
        }
    },
    methods: {
        submitForm() {
            this.isSubmitting = true;

            // Simuler un délai d'envoi du formulaire
            setTimeout(() => {
                // En production, remplacer par un vrai appel API
                console.log('Formulaire soumis:', this.formData);

                // Réinitialiser le formulaire
                this.formData = {
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                };

                this.isSubmitting = false;
                this.formSubmitted = true;

                // Cacher le message de confirmation après 5 secondes
                setTimeout(() => {
                    this.formSubmitted = false;
                }, 5000);
            }, 1500);
        }
    }
}
</script>

<style scoped>
.contact {
    min-height: 100vh;
    background-color: var(--color-background);
}

.contact-hero {
    background-color: var(--color-primary);
    color: white;
    padding: 8rem 2rem 4rem;
    text-align: center;
    margin-top: 70px;
    /* Espace pour la navbar fixe */
}

.contact-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.contact-hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

.contact-form-section {
    padding: 5rem 2rem;
    background-color: var(--color-background);
}

.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
}

.form-info {
    flex: 1;
    min-width: 300px;
}

.form-info h2 {
    font-size: 2rem;
    color: var(--color-heading);
    margin-bottom: 1rem;
}

.form-info p {
    font-size: 1.1rem;
    color: var(--color-text);
    margin-bottom: 2.5rem;
    line-height: 1.6;
}

.contact-info {
    margin-top: 3rem;
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.info-item i {
    font-size: 1.2rem;
    color: var(--color-primary);
    margin-right: 1rem;
    width: 24px;
}

.contact-form {
    flex: 2;
    min-width: 400px;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    background-color: var(--color-background-soft);
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.form-group {
    flex: 1 0 calc(50% - 0.75rem);
}

.full-width {
    flex: 1 0 100%;
}

label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--color-heading);
}

input,
select,
textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 1rem;
    background-color: var(--color-background);
    color: var(--color-text);
    transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

textarea {
    resize: vertical;
}

.submit-button {
    background-color: var(--color-primary);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
}

.submit-button:hover {
    background-color: var(--color-secondary);
}

.submit-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.submission-message {
    flex: 1 0 100%;
    background-color: #e7f6e7;
    color: #2a6b2a;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    text-align: center;
}

@media (max-width: 768px) {
    .contact-hero {
        padding: 7rem 1rem 3rem;
        margin-top: 60px;
    }

    .contact-hero h1 {
        font-size: 2.5rem;
    }

    .contact-container {
        flex-direction: column;
        gap: 2rem;
    }

    .contact-form {
        min-width: 100%;
        padding: 1.5rem;
    }

    .form-group {
        flex: 1 0 100%;
    }
}

@media (max-width: 480px) {
    .contact-hero h1 {
        font-size: 2rem;
    }

    .contact-hero p {
        font-size: 1rem;
    }

    .contact-form-section {
        padding: 3rem 1rem;
    }
}
</style>