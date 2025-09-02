<template>
  <footer class="bg-body2 text-white py-4 px-8">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <p class="text-xs hidden md:block">Made by Anthony Saillard</p>

      <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div class="flex space-x-4">
          <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
          >
            <img :src="social.icon" :alt="social.name"
                 class="w-6 h-6 filter brightness-0 invert opacity-75 hover:opacity-100 transition-opacity duration-200">
          </a>
        </div>

        <p class="text-xs">
          © {{ currentYear }} Anthony Saillard. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import {computed} from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    const socialLinks = [
      {
        name: 'GitHub',
        url: 'https://github.com/anthony-saillard',
        icon: 'src/svg/logo/GitHub.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anthonysaillard/',
        icon: 'src/svg/logo/LinkedIn.svg'
      }
    ]

    return {
      currentYear,
      socialLinks
    }
  }
}
</script>