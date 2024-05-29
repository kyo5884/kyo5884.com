<template>
  <div>
    <header class="-mb-24 w-full h-screen flex flex-col justify-center items-center text-center">
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
    <section class="p-4 flex flex-col md:flex-row items-stretch gap-4">
      <ArtistCard
        :name="{ ja: 'kyo5884' }"
        description="It's me."
        :links="[
          {
            faIcon: ['fab', 'x-twitter'],
            url: 'https://x.com/kyo5884',
          },
          {
            faIcon: ['fab', 'itunes'],
            url: 'https://music.apple.com/jp/artist/kyo5884/1460641098',
          },
          {
            faIcon: ['fab', 'spotify'],
            url: 'https://open.spotify.com/intl-ja/artist/6ujwIitifvO4HUTeyVJH5E',
          },
          {
            faIcon: ['fab', 'youtube'],
            url: 'https://www.youtube.com/@kyo5884',
          },
        ]"
        url="https://kyo5884.com/"
        icon="img/kyo5884.png"
        header="img/kyo5884-header.jpg"
      />
      <ArtistCard
        :name="{ ja: '最高に幸せな私たちの世界。', en: 'Saikou World' }"
        description="Depressive Suicidal Black Kawaii Future Progressive Emotional Electro Death Metalcore J-Pop Idol"
        :links="[
          {
            faIcon: ['fab', 'x-twitter'],
            url: 'https://x.com/saikou_world_',
          },
          {
            faIcon: ['fab', 'itunes'],
            url: 'https://music.apple.com/jp/artist/%E6%9C%80%E9%AB%98%E3%81%AB%E5%B9%B8%E3%81%9B%E3%81%AA%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AE%E4%B8%96%E7%95%8C/1488287586',
          },
          {
            faIcon: ['fab', 'spotify'],
            url: 'https://open.spotify.com/artist/15Kup6atFe9iqKfisDe6Fx',
          },
          {
            faIcon: ['fab', 'youtube'],
            url: 'https://www.youtube.com/@saikou_world',
          },
          {
            faIcon: ['fab', 'bandcamp'],
            url: 'https://saikou-world.bandcamp.com/',
          },
        ]"
        url="https://saikou.world/"
        icon="img/saikou.jpg"
        header="img/saikou-header.jpg"
      />
      <ArtistCard
        :name="{ ja: '月面避行', en: 'GetsumenHikou' }"
        description="SynthPop works by kyo5884 and harumurakuro"
        :links="[
          {
            faIcon: ['fab', 'bandcamp'],
            url: 'https://getsumenhikou.bandcamp.com/',
          },
        ]"
        url="https://www.getsumenhikou.com/"
        icon="img/getsumenhikou.png"
        header="img/getsumenhikou-header.png"
      />
    </section>
    <section class="p-4">
      <iframe
        class="block rounded-2xl shadow-lg w-full h-full aspect-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?si=WtDcfl3r6TtNhE-Y&amp;list=PLo7fOBiov9NmHZMjffmmJoHq8GSZUimkP"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </section>
    <section class="p-4">
      <iframe
        class="block rounded-2xl shadow-lg"
        src="https://open.spotify.com/embed/playlist/6W70afvS8q5x1KlITJ48GY?utm_source=generator"
        width="100%"
        height="480"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </section>
  </div>
</template>
