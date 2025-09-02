<template>
  <section id="projects" class="py-20 bg-body2 text-white">
    <div class="container mx-auto px-20">
      <h1 class="text-4xl md:text-5xl font-bold text-center mb-16">
        Projets
      </h1>

      <ProjectList
          v-for="section in projectSections"
          :key="section.key"
          :title="section.title"
          :items="section.items"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectList from './ProjectList.vue';
import {projectSections} from '../../data/projects.js';
</script>