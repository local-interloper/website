<script setup lang="ts">
const { data } = await useAsyncData("about-me-content", async () =>
  queryCollection("aboutMe").first(),
);
</script>

<template>
  <article v-if="data">
    <LayoutHero
      title="About Me"
      background="about-me.png"
      description="Your one stop shop for basic info on me"
    />

    <UContainer class="flex flex-col gap-10">
      <UPageSection
        title="Who am I?"
        orientation="horizontal"
        :description="data.aboutMe"
      >
        <NuxtImg src="/img/avatar.png" class="rounded-xl" />
      </UPageSection>

      <UPageSection
        title="What do I do?"
        :description="data.hobbies.description"
        orientation="horizontal"
        reverse
      >
        <article class="flex flex-col gap-2">
          <section
            v-for="({ title, background }, index) in data.hobbies.hobbies"
            :key="index"
            variant="subtle"
            class="relative h-20 flex items-center px-5 overflow-clip bg-elevated/60 rounded-lg shadow"
          >
            <article class="flex items-center gap-2">
              <h1 class="text-2xl font-bold text-nowrap">{{ title }}</h1>
            </article>
            <NuxtImg
              :src="`/img/hobbies/${background}`"
              class="absolute flex top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
            />
          </section>
        </article>
      </UPageSection>

      <UPageSection
        title="What tools do I use?"
        :description="data.tools.description"
        orientation="horizontal"
      >
        <article class="flex justify-center items-center">
          <article class="grid grid-cols-3 lg:grid-cols-4 gap-2">
            <section
              v-for="({ label, icon }, index) of data.tools.tools"
              :key="index"
              class="flex items-center justify-center bg-elevated w-24 h-24 rounded-lg shadow"
            >
              <section class="flex flex-col items-center gap-1">
                <UIcon class="text-5xl" :name="icon" />
                <span class="font-semibold text-sm">{{ label }}</span>
              </section>
            </section>
          </article>
        </article>
      </UPageSection>
    </UContainer>
  </article>
</template>
