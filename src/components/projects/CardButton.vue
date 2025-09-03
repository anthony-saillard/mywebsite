<template>
  <a
      v-if="link.visible"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full sm:w-auto flex items-center justify-center space-x-2 bg-btnBg text-white px-4 py-2 rounded-lg hover:bg-btnBgHover transition-colors duration-200"
  >
    <span>{{ link.label }}</span>
    <img :src="link.icon" :alt="link.label" class="w-6 h-6 sm:w-4 sm:h-4"/>
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>