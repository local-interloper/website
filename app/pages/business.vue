<script setup lang="ts">
import type { TreeItem } from "@nuxt/ui";

const { data } = await useAsyncData("business-content", () =>
  queryCollection("business").first(),
);

const hardSkills = ref<TreeItem[]>([
  {
    label: "hard-skills/",
    defaultExpanded: true,
    icon: "tabler:tool",
    children: data.value!.skills.hard.map((skill) => ({
      label: skill,
      icon: "tabler:file",
    })),
  },
]);

const softSkills = ref<TreeItem[]>([
  {
    label: "soft-skills/",
    defaultExpanded: true,
    icon: "tabler:message-circle",
    children: data.value!.skills.soft.map((skill) => ({
      label: skill,
      icon: "tabler:file",
    })),
  },
]);
</script>

<template>
  <article v-if="data">
    <LayoutHero title="Business" :description="data.hero.description" background="business.png" />

    <UContainer>
      <UPageSection
        orientation="horizontal"
        title="Skills"
        :description="data.skills.description"
      >
        <article class="flex flex-col lg:flex-row gap-2">
          <UTree
            disabled
            class="bg-elevated p-2 rounded-lg shadow w-full"
            :items="hardSkills"
          />
          <UTree
            disabled
            class="bg-elevated p-2 rounded-lg shadow w-full"
            :items="softSkills"
          />
        </article>
      </UPageSection>

      <UPageSection title="Works" :description="data.works.description">
        <UTimeline :items="data.works.works" />
      </UPageSection>
    </UContainer>
  </article>
</template>
