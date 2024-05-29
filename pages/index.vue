<template>
  <div>
    <header class="w-full min-h-screen flex flex-col justify-center items-center text-center">
      <div class="py-2 border-b border-b-neutral-300">
        <h1 class="text-6xl antialiased">
          <span class="font-light">kyo5884</span><span class="font-thin">.com</span>
        </h1>
        <p class="-mt-4">
          Trackmaker, Lyricist, Designer
        </p>
      </div>
      <ul class="py-3 flex gap-3 text-2xl text-neutral-700">
        <li>
          <a href="https://x.com/kyo5884">
            <FontAwesome :icon="['fab', 'x-twitter']" />
          </a>
        </li>
        <li>
          <a href="https://blog.kyo5884.tk/">
            <FontAwesome :icon="['fab', 'wordpress']" />
          </a>
        </li>
        <li>
          <a href="https://music.apple.com/jp/artist/kyo5884/1460641098">
            <FontAwesome :icon="['fab', 'itunes']" />
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/intl-ja/artist/6ujwIitifvO4HUTeyVJH5E">
            <FontAwesome :icon="['fab', 'spotify']" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@kyo5884">
            <FontAwesome :icon="['fab', 'youtube']" />
          </a>
        </li>
      </ul>
    </header>
  </div>
</template>
