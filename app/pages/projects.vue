<script setup lang="ts">
const { data } = useAsyncData("projects-content", () =>
  queryCollection("projects").first(),
);

</script>

<template>
  <article v-if="data">
    <LayoutHero title="Projects" :description="data.hero.description" :background="data.hero.background" />
    <UContainer>
      <UPageSection title="Projects" :description="data.projects.description">
        <ProjectsViewer :projects="data.projects.projects" />
      </UPageSection>
    </UContainer>
  </article>
</template>
