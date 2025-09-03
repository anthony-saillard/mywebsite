<template>
  <div
      class="rounded-xl px-8 py-6 bg-header bg-opacity-35 shadow-md flex items-center text-center group relative overflow-hidden">
    <img
        :src="icon"
        :alt="alt || name"
        class="w-12 h-12 mr-4"
    />
    <p class="text-sm font-medium">{{ name }}</p>

    <div v-if="props.level" class="absolute bottom-0 left-0 flex gap-1" :aria-label="`Niveau ${levelLabel}`">
      <span class="w-40 h-4 bg-gradient-to-r text-xs text-left pl-3 font-medium flex items-center"
            :class="levelClass">{{
          levelLabel
        }}</span>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  alt: String,
  level: Number
})

const levelClass = computed(() => {
  const lvl = props.level ?? 1
  switch (lvl) {
    case 4:
      return 'from-purple-900'
    case 3:
      return 'from-blue-900'
    case 2:
      return 'from-green-900'
    default:
      return 'from-yellow-900'
  }
})

const levelLabel = computed(() => {
  const lvl = props.level ?? 1
  switch (lvl) {
    case 4:
      return 'Expert'
    case 3:
      return 'Avancé'
    case 2:
      return 'Intermédiaire'
    default:
      return 'Débutant'
  }
})
</script>