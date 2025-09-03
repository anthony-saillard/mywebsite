<template>
  <section id="hero" class="bg-body1 text-white">
    <div
        class="container mx-auto pt-60 md:pt-40 lg:pt-60 pb-40 md:pb-10 lg:pb-40 w-full flex flex-col md:flex-row space-y-6 md:gap-12 justify-center items-center z-20">
      <div class="space-y-8">
        <h1 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold px-4">
          Bonjour,<br>
          Je suis <span class="text-primary">Anthony Saillard</span><br>
          Développeur Front-end - UI/UX
        </h1>

        <div class="flex flex-col sm:flex-row justify-around items-center">
          <a
              v-for="social in socialNetworks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-3 px-6 py-3 transition-all duration-200 hover:scale-105"
          >
            <img :src="social.icon" :alt="social.alt" class="w-10 h-10">
            <p>{{ social.username }}</p>
          </a>
        </div>
      </div>

      <div class="hidden md:flex justify-center">
        <img
            src="../img/me.jpg"
            alt="Photo de Anthony Saillard"
            class="w-auto h-80 object-cover md:w-auto md:h-96 shadow-2xl" style="border-radius: 60px"
        >
      </div>
    </div>

    <img src="../svg/wave/WaveAboutTop.svg" alt="Wave decoration"/>
  </section>
</template>

<script setup>
import {ref} from 'vue'

defineOptions({
  name: 'HeroSection'
})

const socialNetworks = ref([
  {
    name: 'GitHub',
    username: 'anthony-saillard',
    url: 'https://github.com/anthony-saillard',
    icon: 'src/svg/logo/GitHub.svg',
    alt: 'Icône de l\'entreprise GitHub'
  },
  {
    name: 'LinkedIn',
    username: 'in/anthonysaillard',
    url: 'https://www.linkedin.com/in/anthonysaillard/',
    icon: 'src/svg/logo/LinkedIn.svg',
    alt: 'Icône de l\'entreprise LinkedIn'
  }
])
</script>