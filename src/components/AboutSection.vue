<template>
  <section id="about" class="bg-body2 text-white py-20 flex flex-col items-center">
    <h1 class="text-4xl text-center md:text-5xl font-bold mb-12">
      À propos de moi
    </h1>

    <div class="space-y-6 px-6 max-w-6xl">
      <p class="text-md md:text-lg">
        <strong class="font-semibold">Développeur front-end</strong> passionné par l’<strong
          class="font-semibold">UI/UX</strong>, je conçois et intègre des interfaces <strong class="font-semibold">ergonomiques
        et accessibles</strong>.<br><br>
        Diplômé d’un <strong class="font-semibold">BUT Informatique</strong>, j’ai travaillé sur des projets allant
        d’<strong class="font-semibold">applications web de gestion</strong> à des <strong class="font-semibold">solutions
        de télésurveillance médicale</strong>, en transformant les besoins des utilisateurs en expériences fluides et
        esthétiques, alliant performance technique et design réfléchi.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 bg-header/40 rounded-xl p-6">
        <div>
          <span class="text-gray-300">Âge</span><br>
          <span class="font-semibold">{{ age }} ans</span>
        </div>
        <div>
          <span class="text-gray-300">Permis</span><br>
          <span class="font-semibold">Permis B</span>
        </div>
      </div>

      <div class="bg-header/40 rounded-xl p-6">
        <span class="text-gray-300">Diplômes</span><br>
        <ul class="list-disc list-inside space-y-1 font-semibold">
          <li>2025 - BUT Informatique - IUT de Valence (26)</li>
          <li>2022 - Baccalauréat STI2D - Lycée Galilée, Vienne (38)</li>
        </ul>
      </div>

      <div class="bg-header/40 rounded-xl p-6">
        <span class="text-gray-300">Langues</span><br>
        <ul class="list-disc list-inside space-y-1 font-semibold">
          <li>Anglais - Intermédiaire (A2)</li>
          <li>Espagnol - Notions (A1)</li>
        </ul>
      </div>

      <div class="bg-header/40 rounded-xl p-6">
        <span class="text-gray-300">Centres d’intérêt</span><br>
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