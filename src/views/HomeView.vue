<template>
  <div>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <div class="animate fade-in-up">
      <TeamSection />
    </div>
    <div class="animate fade-in-up delay-200">
      <TrustedSection />
    </div>
    <div class="animate fade-in-up delay-300">
      <CallToActionSection />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/components/HeroSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import TrustedSection from "@/components/TrustedSection.vue";
import CallToActionSection from "@/components/CallToActionSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    HeroSection,
    ServicesSection,
    TeamSection,
    TrustedSection,
    CallToActionSection,
    Footer,
  },
};
</script>

<style>
/* Ajoutez des styles globaux ou spécifiques à la vue ici si nécessaire */
</style>
