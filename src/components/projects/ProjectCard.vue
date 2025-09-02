<template>
  <div v-if="project" class="bg-header rounded-3xl shadow-2xl overflow-hidden">
    <div class="flex flex-col lg:flex-row">
      <div
          class="lg:w-2/5 flex items-center justify-center relative object-contain"
          :class="project.image ? '' : 'bg-btnBgHover'"
      >
        <img v-if="project.image" :src="project.image" alt="Image du projet" class="object-cover h-full">
        <div v-else class="font-medium text-sm text-gray-300">
          Aucune image attribuer à ce projet
        </div>
        <img src="../../svg/wave/WaveProjetsLeft.svg" alt="Wave decoration"
             class=" absolute right-0 h-full"/>
      </div>

      <div class="lg:w-3/5 p-8">
        <div class="mb-6">
          <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
          <p class="text-gray-200 font-medium">{{ project.category }}</p>
        </div>

        <p class="mb-6 leading-relaxed">
          {{ project.description }}
        </p>

        <div class="mb-6">
          <div class="flex flex-wrap gap-4">
            <span
                v-for="tech in project.technologies"
                :key="tech"
                class="border-2 px-3 py-1 rounded-md text-sm font-medium hover:bg-white hover:bg-opacity-20"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-4">
          <CardButton
              v-for="link in project.links"
              :key="link.type"
              :link="link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardButton from './CardButton.vue';

defineProps({
  project: {
    type: Object,
    required: false,
    default: null,
  },
});
</script>
