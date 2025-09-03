<template>
  <section id="skills" class="bg-body1 text-white">
    <img src="../../svg/wave/WaveAboutBottom.svg" class="w-full" alt="Wave decoration"/>

    <div class="container mx-auto px-4 py-40">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-16">
        Compétences
      </h1>

      <div class="space-y-16 px-5 sm:px-20 lg:px-40">
        <!-- Languages -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-8">
            Langages
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Skill
                v-for="(skill, idx) in visibleLanguages"
                :key="skill.name"
                :name="skill.name"
                :icon="skill.icon"
                :alt="skill.alt"
                :level="skill.level"
            />
          </div>
          <div v-if="skills.languages.length > initialVisible.languages" class="mt-6 text-center">
            <button
                class="px-4 py-2 rounded-lg bg-header shadow hover:shadow-md transition text-sm font-regular"
                @click.stop="toggles.languages = !toggles.languages"
            >
              {{ toggles.languages ? 'Afficher moins' : 'Afficher plus' }}
            </button>
          </div>
        </div>

        <!-- Framework -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-8">
            Frameworks & librairies
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Skill
                v-for="(skill, idx) in visibleFrameworks"
                :key="skill.name"
                :name="skill.name"
                :icon="skill.icon"
                :alt="skill.alt"
                :level="skill.level"
            />
          </div>
          <div v-if="skills.frameworks.length > initialVisible.frameworks" class="mt-6 text-center">
            <button
                class="px-4 py-2 rounded-lg bg-header shadow hover:shadow-md transition text-sm font-regular"
                @click.stop="toggles.frameworks = !toggles.frameworks"
            >
              {{ toggles.frameworks ? 'Afficher moins' : 'Afficher plus' }}
            </button>
          </div>
        </div>

        <!-- Software -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-8">
            Logiciels
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Skill
                v-for="(skill, idx) in visibleSoftware"
                :key="skill.name"
                :name="skill.name"
                :icon="skill.icon"
                :alt="skill.alt"
                :level="skill.level"
            />
          </div>
          <div v-if="skills.software.length > initialVisible.software" class="mt-6 text-center">
            <button
                class="px-4 py-2 rounded-lg bg-header shadow hover:shadow-md transition text-sm font-regular cursor-pointer"
                @click.stop="toggles.software = !toggles.software"
            >
              {{ toggles.software ? 'Afficher moins' : 'Afficher plus' }}
            </button>
          </div>
        </div>

        <!-- Operating Systems -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-8">
            Systèmes d'exploitation
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Skill
                v-for="(skill, idx) in skills.operatingSystems"
                :key="skill.name"
                :name="skill.name"
                :icon="skill.icon"
                :alt="skill.alt"
                :level="skill.level"
            />
          </div>
        </div>
      </div>
    </div>

    <img src="../../svg/wave/WaveProjectsTop.svg" class="w-full" alt="Wave decoration"/>
  </section>
</template>

<script setup>
import {computed, reactive} from 'vue'
import {skills} from '../../data/skills.js'
import Skill from './Skill.vue'

const initialVisible = reactive({
  frameworks: 8,
  languages: 8,
  software: 8
})

const toggles = reactive({
  frameworks: false,
  languages: false,
  software: false,
})

const visibleFrameworks = computed(() =>
    toggles.frameworks ? skills.frameworks : skills.frameworks.slice(0, initialVisible.frameworks)
)
const visibleLanguages = computed(() =>
    toggles.languages ? skills.languages : skills.languages.slice(0, initialVisible.languages)
)
const visibleSoftware = computed(() =>
    toggles.software ? skills.software : skills.software.slice(0, initialVisible.software)
)
</script>