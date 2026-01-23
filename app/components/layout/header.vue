<template>
  <UHeader class="fixed top-0 left-0 z-20 w-full">
    <template #title>
      <NuxtImg src="/img/logo.png" class="h-10 rounded-lg" />
    </template>

    <UNavigationMenu :items="navigation" />

    <template #right>
      <LayoutPalette />
    </template>

    <template #body>
      <UNavigationMenu :items="navigation" orientation="vertical" />
    </template>
  </UHeader>
</template>
