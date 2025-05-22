import './assets/main.css'
import './assets/animations.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Initialisation d'AOS
AOS.init({
  duration: 800,
  easing: 'ease',
  once: true,
  offset: 50,
  delay: 100,
})

const app = createApp(App)

app.use(router)

app.mount('#app')

// Gestion du défilement fluide pour les ancres
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les liens qui commencent par # (mais pas seulement #)
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Récupère la hauteur de la barre de navigation
        const navbar = document.querySelector('.navbar')
        const navbarHeight = navbar ? navbar.offsetHeight : 0

        // Calcule la position de l'élément cible en tenant compte de la navbar
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

        // Défilement fluide jusqu'à la cible
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }
    })
  })

  // Animation au défilement - Observer les éléments avec la classe .animate
  const animateElements = document.querySelectorAll('.animate')

  if (animateElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Activer l'animation quand l'élément est visible
          entry.target.style.opacity = 1
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target) // Arrêter d'observer une fois animé
        }
      })
    }, observerOptions)

    animateElements.forEach((element) => {
      observer.observe(element)
    })
  }
})
