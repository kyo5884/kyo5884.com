<template>
  <article class="flex flex-1 flex-col shadow-lg rounded-2xl overflow-hidden bg-white border border-neutral-200">
    <a
      :href="url"
      class="flex-1 flex flex-col"
    >
      <header class="flex flex-col text-center">
        <div class="h-32 w-full bg-neutral-100" />
        <div class="flex flex-col items-center">
          <div class="-mt-12 w-24 h-24 rounded-full bg-neutral-500" />
          <h3 class="mt-4 text-xl font-bold">
            {{ name.ja }}
          </h3>
          <p class="font-light">
            {{ name.en }}
          </p>
        </div>
      </header>
      <p class="py-4 mx-4 flex-1 text-sm border-b border-b-neutral-300">
        {{ description }}
      </p>
    </a>
    <footer class="p-4 text-neutral-700">
      <ul class="flex items-center justify-center gap-3 text-xl">
        <li
          v-for="(link, index) in links"
          :key="index"
        >
          <a :href="link.url">
            <FontAwesome :icon="link.faIcon" />
          </a>
        </li>
        <li>
          <a :href="url">
            <FontAwesome :icon="['fas', 'earth-asia']" />
          </a>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  name: {
    ja: string
    en?: string
  }
  description: string
  links?: {
    faIcon: string[]
    url: string
  }[]
  url: string
}
defineProps<Props>()
</script>
