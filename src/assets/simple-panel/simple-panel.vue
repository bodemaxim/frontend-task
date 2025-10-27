<script setup lang="ts">
import Panel from 'primevue/panel'
</script>

<template>
  <Panel
    v-bind="$attrs"
    :pt="{
      root: 'panel-root',
      content: 'panel-content',
      header: 'panel-header',
    }"
  >
    <template #header>
      <slot name="header" />
    </template>
    <slot />
  </Panel>
</template>

<style scoped>
:deep(.panel-content) {
  padding: 0 var(--x4) var(--x4);
}

:deep(.panel-header) {
  padding: var(--x4) var(--x4) 0;

  background-color: transparent;
  border: none;
}
</style>
