<template>
  <article class="flex flex-1 shadow-lg rounded-2xl overflow-hidden bg-white border border-neutral-200 transition-all duration-250 hover:shadow-2xl hover:scale-105">
    <a
      :href="url"
      :alt="name"
    >
      <img
        :src="coverUrl"
        class="aspect-square"
      >
    </a>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  name: string
  url: string
  coverUrl: string
}
defineProps<Props>()
</script>
