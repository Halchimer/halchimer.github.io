<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioItem from '@/components/PortfolioItem.vue';
import {projects, categories, type ProjectCategory } from '@/data/projects';

const selectedCategory = ref<'all' | ProjectCategory>('all')

const filteredProjects = computed(() => {
  const category = selectedCategory.value
  const query = search.value.toLowerCase().trim();

  if (category === 'all') {
    return projects.filter(
      project => project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.skills?.some(skill => skill.toLowerCase().includes(query))
    )
  }

  return projects.filter(
    project => project.categories.includes(category) && (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.skills?.some(skill => skill.toLowerCase().includes(query))
    )
  )
});

const search = ref('')

</script>

<template>
  <main>

    <div class="category_selection">
      <button 
        :class="{ active : 'all' === selectedCategory}"
        @click="selectedCategory = 'all'"
      >
        ALL
      </button>
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active : category === selectedCategory}"
        @click="selectedCategory = category"
      >
        {{ category.toUpperCase() }}
      </button>

      <input 
      type="text"
      v-model="search"
      placeholder="Search..."
      >
      </input>
    </div>

  <PortfolioItem
    v-for="(project, index) in filteredProjects"
    :title="project.title"
    :desc="project.description"
    :right="index%2 === 1"
    :skills="project.skills"
    :to="project.link"
    :media="project.image != null"
  >
    <img v-if="project.image" :src="project.image" :alt="project.title">
  </PortfolioItem>

  <PortfolioItem
    v-if="search.toLowerCase().includes('who') && search.toLowerCase().includes('you')"
    title="I am god."
    desc="I will ascend to the heavens;
          I will raise my throne above the stars of God;
          I will sit enthroned on the mount of assembly, on the utmost heights of Mount Zaphon.
          I will ascend above the tops of the clouds;
          I will make myself like the Most High."
    :skills="['Omniscience', 'Omnipotence']"
    to="/"
    :media="false"
    :right="false"
  ></PortfolioItem>

  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  padding: 1rem;
}

.category_selection {
  display: flex;
  justify-content: center;
  gap : 1rem;
  width : 100%;
  margin-bottom : 1rem;
}

.category_selection button {
  width : 5rem;
  background: none;
  box-shadow: none;
  border : none;
  outline : none;
  color : grey;
  text-decoration: none;
  cursor : cell;
  font-family: "Jersey 10";
  font-size: 1.2rem;
}

.category_selection input {
  font-family: "Jersey 10";
  font-size: 1.2rem;
  border : none;
  outline : none;
  mix-blend-mode: difference;
  text-align: center;
  animation : logoPulse 3s infinite;
}

.category_selection .active {
  color : white;
  animation : logoPulse 3s infinite;
  margin-bottom : 1rem;
  text-decoration: underline;
}

</style>