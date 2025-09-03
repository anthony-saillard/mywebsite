<template>
  <section id="about" class="bg-body2 text-white py-20 flex flex-col items-center">
    <h1 class="text-4xl text-center md:text-5xl font-bold mb-12">
      À propos de moi
    </h1>

    <div class="space-y-6 px-6 max-w-6xl">
      <p class="text-md md:text-lg">
        <span class="font-semibold">Développeur front-end</span> passionné par l’<span
          class="font-semibold">UI/UX</span>, je conçois et intègre des interfaces <span class="font-semibold">ergonomiques
        et accessibles</span>.<br><br>
        Diplômé d’un <span class="font-semibold">BUT Informatique</span>, j’ai travaillé sur des projets variés,
        allant d’<span class="font-semibold">applications web de gestion</span> à des <span class="font-semibold">solutions
        de télésurveillance médicale</span>.<br><br>
        Mon objectif est de <span class="font-semibold">transformer les besoins des utilisateurs en expériences fluides, esthétiques et performantes</span>.<br>
        À travers mon travail, je souhaite aider les autres en créant des outils numériques qui améliorent leur
        quotidien et leur confort d’utilisation.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 bg-header/40 rounded-xl p-6">
        <div>
          <span class="text-gray-300">Né le</span><br>
          <span class="font-semibold">27 novembre 2004 ({{ age }} ans)</span>
        </div>
        <div>
          <span class="text-gray-300">Mobilité</span><br>
          <span class="font-semibold">Permis B - Véhiculée</span>
        </div>
      </div>

      <div class="bg-header/40 rounded-xl p-6 space-y-3">
        <span class="font-bold text-lg">Diplômes</span><br>
        <div class="space-y-3">
          <div class="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <div>
              <p class="font-semibold text-white">2025 - BUT Informatique</p>
              <p class="text-gray-300 text-sm">IUT de Valence (26)</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <div>
              <p class="font-semibold text-white">2022 - Baccalauréat STI2D</p>
              <p class="text-gray-300 text-sm">Lycée Galilée, Vienne (38)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-header/40 rounded-xl p-6 space-y-3">
        <span class="font-bold text-lg">Centres d’intérêt</span><br>
        <ul class="list-disc list-inside space-y-1 font-semibold">
          <li>Sport d’eau vive</li>
          <li>Cyclisme</li>
          <li>Bénévolat - Ancien bénévole du Secours populaire</li>
          <li>Secourisme - Titulaire du PSC1 (2018)</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed} from 'vue'

defineOptions({
  name: 'AboutSection'
})

const birthDate = new Date(2004, 10, 27)

const age = computed(() => {
  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()

  const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

  if (!hasBirthdayPassed) {
    years--
  }

  return years
})
</script>