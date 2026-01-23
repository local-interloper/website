<script setup lang="ts">
import type { CommandPaletteGroup, CommandPaletteItem } from "@nuxt/ui";

const isOpen = ref(false);

defineShortcuts({
  meta_k: {
    handler: () => {
      isOpen.value = true;
    },
  },
});

const groups = ref<CommandPaletteGroup[]>([
  {
    id: "options",
    items: navigation
  },
]);

const onSelect = (_item: CommandPaletteItem) => {
  isOpen.value = false;
};
</script>

<template>
  <div class="hidden lg:flex items-center gap-2">
    <div class="hidden lg:flex gap-0.5">
      <UKbd value="meta" />
      <UKbd value="K" />
    </div>
    <UModal v-model:open="isOpen">
      <UButton
        icon="tabler:search"
        variant="ghost"
        size="lg"
        class="cursor-pointer"
      />
      <template #content>
        <UCommandPalette
          class="h-72"
          placeholder="Search"
          :groups="groups"
          :close="true"
          @update:model-value="onSelect"
        />
      </template>
    </UModal>
  </div>
</template>
