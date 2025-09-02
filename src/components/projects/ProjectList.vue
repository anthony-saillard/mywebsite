<template>
  <div class="mb-16">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl md:text-3xl font-semibold">{{ title }}</h2>
      <div v-if="props.items.length > 1" class="flex items-center space-x-4">
        <button
            @click.stop="previous"
            :disabled="items.length === 0 || currentIndex === 0"
            class="p-1 border-2 border-white rounded-full hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <img src="../../svg/icon/Chevron Left.svg" alt="Précédent" class="w-5 h-5"/>
        </button>
        <span class="text-lg font-medium">
          {{ items.length === 0 ? 0 : (currentIndex + 1) }} / {{ items.length }}
        </span>
        <button
            @click.stop="next"
            :disabled="items.length === 0 || currentIndex === items.length - 1"
            class="p-1 border-2 border-white rounded-full hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <img src="../../svg/icon/Chevron Right.svg" alt="Suivant" class="w-5 h-5"/>
        </button>
      </div>
    </div>

    <ProjectCard :project="currentItem"/>

    <div v-if="props.items.length > 1" class="flex justify-center mt-8 space-x-2">
      <button
          v-for="(project, index) in items"
          :key="project.id ?? index"
          @click.stop="currentIndex = index"
          :class="[
          'w-3 h-3 bg-white rounded-full transition-colors duration-200',
          index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-40'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import ProjectCard from './ProjectCard.vue';

const props = defineProps({
  title: {type: String, required: true},
  items: {type: Array, required: true},
});

const currentIndex = ref(0);
const currentItem = computed(() => props.items[currentIndex.value] || null);

const next = () => {
  if (currentIndex.value < props.items.length - 1) currentIndex.value++;
};
const previous = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};
</script>
