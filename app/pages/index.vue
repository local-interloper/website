<script setup lang="ts">
const splash = useState("splash", () => pickRandom(splashes));
</script>

<template>
  <LayoutHero hide-scroll hide-shadow>
    <article class="flex flex-col justify-center items-center gap-2">
      <NuxtImg class="avatar" src="/img/avatar.png" />
      <article class="text-toned relative mb-10">
        <h1 class="font-title text-neutral-50">local.interloper</h1>
        <span
          class="absolute -bottom-6 -right-5 z-10 -rotate-6 font-minecraft animate-pulse"
          >{{ splash }}</span
        >
      </article>
      <section>
        <p class="text-dimmed">
          A website for everything "me" related. Be it my works, my contacts or
          some info about me, you can find all of it right here.
        </p>
      </section>
    </article>
  </LayoutHero>
</template>
