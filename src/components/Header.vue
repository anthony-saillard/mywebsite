<template>
  <div class="absolute top-14 left-0 right-0 z-10">
    <img src="../svg/wave/WaveHeader.svg" class="w-full" alt="Wave decoration"/>
  </div>

  <header class="fixed top-0 left-0 right-0 z-50 bg-header text-white">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="text-xl font-bold text-white">
        Anthony Saillard
      </div>

      <nav class="hidden lg:flex space-x-8">
        <a
            v-for="item in navigationItems"
            :key="item.id"
            :href="item.href"
            :class="['font-semibold py-0.5 hover:border-b-2', { 'border-b-2': activeSection === item.id }]"
            @click.stop="setActiveSection(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <a
          href="../CV Anthony Saillard.pdf"
          target="_blank"
          class="hidden lg:flex bg-primary px-6 py-1.5 rounded-full font-semibold hover:opacity-90"
      >
        Mon CV
      </a>

      <!-- mobile navbar -->
      <button
          class="lg:hidden flex flex-col space-y-1"
          @click.stop="toggleMobileMenu"
      >
        <span class="w-6 h-0.5 bg-white"></span>
        <span class="w-6 h-0.5 bg-white"></span>
        <span class="w-6 h-0.5 bg-white"></span>
      </button>
    </div>

    <div v-if="isMobileMenuOpen" class="lg:hidden bg-body2 drop-shadow-xl border-t-2 border-body2">
      <nav class="flex flex-col">
        <a
            v-for="item in navigationItems"
            :key="item.id"
            :href="item.href"
            :class="['px-4 py-3 hover:bg-header hover:font-semibold', { 'font-semibold bg-header' : activeSection === item.id }]"
            @click.stop="setActiveSection(item.id); toggleMobileMenu()"
        >
          {{ item.label }}
        </a>
        <a
            href="../CV Anthony Saillard.pdf"
            target="_blank"
            class="px-4 py-3 bg-primary bg-opacity-50 font-semibold hover:bg-opacity-70"
        >
          Télécharger mon CV
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

defineOptions({
  name: 'Header'
})

const activeSection = ref('hero')
const isMobileMenuOpen = ref(false)

const navigationItems = [
  {id: 'hero', label: 'Accueil', href: '#hero'},
  {id: 'about', label: 'À propos', href: '#about'},
  {id: 'skills', label: 'Compétences', href: '#skills'},
  {id: 'projects', label: 'Projets', href: '#projects'},
  {id: 'contact', label: 'Contact', href: '#contact'}
]

const setActiveSection = (sectionId) => {
  activeSection.value = sectionId
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact']

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>