<script setup lang="ts">
const { data } = useAsyncData("projects-content", () =>
  queryCollection("projects").first(),
);

const search = useState("search", () => "");

const filteredProjects = computed(() => {
  if (!data.value) {
    return [];
  }

  if (search.value === "") {
    return data!.value.projects.projects;
  }

  return data.value!.projects.projects.filter((p) =>
    p.title.toLowerCase().includes(search.value.toLowerCase()),
  );
});
</script>

<template>
  <article>
    <LayoutHero title="Projects" :background="data!.hero.background" />
    <UContainer>
      <UPageSection title="Projects" :description="data!.projects.description">
        <UInput v-model="search" placeholder="Search" icon="tabler:search" />
        <article class="grid grid-cols-3 gap-2">
          <section
            v-for="({ title, description, tech }, i) in filteredProjects"
            :key="i"
            class="flex flex-col gap-2 bg-elevated rounded-lg shadow p-3 h-52"
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
      </UPageSection>
    </UContainer>
  </article>
</template>
