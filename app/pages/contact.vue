<script setup lang="ts">
const toast = useToast();

const copyDiscordUsernameHandler = () => {
  navigator.clipboard.writeText("local.interloper");
  toast.add({
    title: "Discord username copied",
    description:
      "Open Discord > Direct Messages > Add Friend and paste it there.",
    icon: "tabler:check",
    duration: 3000,
  });
};
</script>

<template>
  <article>
    <LayoutHero
      title="Contact"
      description="How and where you can find me"
      background="contact.png"
    />
    <UContainer>
      <UPageSection
        title="How to reach out?"
        description="Discord. If you can use Discord, please use Discord."
      >
        <article class="flex flex-col gap-5 items-center">
          <article>
            <UIcon class="text-8xl" name="simple-icons:discord" />
          </article>
          <article
            class="flex items-center gap-2 bg-elevated p-2 rounded-lg shadow"
          >
            <span class="font-mono">local.interloper</span>
            <UButton
              icon="tabler:copy"
              variant="ghost"
              class="cursor-pointer"
              @click="copyDiscordUsernameHandler"
            />
          </article>
        </article>
      </UPageSection>

      <UPageSection
        title="Alternative ways"
        description="Here are some other ways to reach out to me."
      >
        <article class="flex justify-center items-center gap-2">
          <UButton
            v-for="({ label, icon, to }, index) in socials"
            :key="index"
            :to="to"
            variant="outline"
            class="flex flex-col items-center justify-center gap-2 w-28 h-28"
          >
            <UIcon class="text-6xl" :name="icon" />
            <span class="font-semibold">{{ label }}</span>
          </UButton>
        </article>
      </UPageSection>
    </UContainer>
  </article>
</template>
