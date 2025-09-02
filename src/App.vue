<template>
  <Header/>
  <main>
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
  </main>
  <Footer/>
</template>

<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/skills/SkillsSection.vue'
import ProjectsSection from './components/projects/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

defineOptions({
  name: 'App'
})
</script>