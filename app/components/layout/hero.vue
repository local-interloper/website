<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  background?: string;
  hideScroll?: boolean;
  hideShadow?: boolean,
}

const {
  title = "",
  description = "",
  background = "",
  hideScroll = false,
  hideShadow = false,
} = defineProps<Props>();
</script>

<template>
  <article class="relative flex justify-center items-center h-svh text-dimmed" :class="[!hideShadow && 'shadow-lg']">
    <section class="flex flex-col items-center gap-5">
      <h1 v-if="title" class="font-title">{{ title }}</h1>
      <p v-if="description" class="text-xl">{{ description }}</p>
      <slot />
    </section>

    <NuxtImg
      v-if="background"
      :src="`/img/backgrounds/${background}`"
      class="absolute flex top-0 left-0 w-full h-full object-cover -z-10 opacity-15"
      preload
    />

    <section
      v-if="!hideScroll"
      class="absolute flex items-center flex-col bottom-2 left-1/2 -translate-x-1/2"
    >
      <p class="text-lg">Scroll for more</p>
      <UIcon class="animate-bounce text-2xl" name="tabler:chevrons-down" />
    </section>
  </article>
</template>
