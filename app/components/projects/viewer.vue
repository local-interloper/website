<script setup lang="ts">
import type { Project } from "~/shared/types/project";

interface Props {
  projects: Project[];
}

const { projects } = defineProps<Props>();

const search = ref("");

const filteredProjects = computed(() => {
  if (search.value === "") {
    return projects;
  }

  return projects.filter((p) => projectFilter(p, search.value));
});
</script>

<template>
  <ClientOnly>
    <article
      class="flex flex-col gap-2 border rounded-lg border-accented p-2 shadow h-150 lg:h-200"
    >
      <UInput
        v-model="search"
        placeholder="Search"
        icon="tabler:search"
        class="w-full"
        variant="soft"
        size="xl"
      />
      <article class="relative overflow-y-scroll no-scrollbar h-full">
        <article class="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <section
            v-for="({ title, description, tech }, i) in filteredProjects"
            :key="i"
            class="flex flex-col gap-2 bg-elevated rounded-lg shadow p-3 lg:h-52"
          >
            <section class="flex justify-between items-center">
              <h2 class="font-bold text-xl">{{ title }}</h2>
              <UButton
                icon="tabler:external-link"
                :to="`https://github.com/local-interloper/${title}`"
                target="_blank"
                variant="ghost"
              />
            </section>
            <section class="h-full">
              <p>{{ description }}</p>
            </section>
            <section class="flex gap-1 text-lg">
              <UIcon v-for="(icon, j) in tech" :key="j" :name="icon" />
            </section>
          </section>
        </article>
        <section
          v-if="filteredProjects.length === 0"
          class="absolute flex flex-col items-center justify-center w-full h-full text-dimmed"
        >
          <UIcon name="tabler:file-x" class="text-8xl" />
          <p>No projects match the search criteria</p>
        </section>
      </article>
    </article>
  </ClientOnly>
</template>
