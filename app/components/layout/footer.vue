<template>
  <UFooter>
    <template #left>
      <p class="text-muted">
        local.interloper © {{ new Date().getFullYear() }}
      </p>
    </template>
    <template #right>
      <UButton
        v-for="({ to, icon }, index) of socials"
        :key="index"
        :to="to"
        :icon="icon"
        target="_blank"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
