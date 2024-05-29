<template>
  <article class="flex flex-1 flex-col shadow-lg rounded-2xl overflow-hidden bg-white border border-neutral-200 transition-all duration-250 hover:shadow-2xl hover:scale-105">
    <a
      :href="url"
      class="flex-1 flex flex-col"
    >
      <header class="flex flex-col text-center">
        <div
          class="h-36 w-full bg-neutral-100 bg-cover bg-center"
          :style="`background-image: url(${header})`"
        />
        <div class="flex flex-col items-center">
          <img
            class="-mt-12 w-24 h-24 rounded-full border-4 border-white bg-neutral-500"
            :src="icon"
          >
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
  icon: string
  header?: string
}
defineProps<Props>()
</script>
