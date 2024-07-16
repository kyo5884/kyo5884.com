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
    <section class="p-4 grid grid-cols-3 md:grid-cols-6 gap-4">
      <AlbumCard
        name="DTMシンガーソングライターコンピ"
        url="https://lro.sakura.ne.jp/DTM-SSW/"
        cover-url="https://lro.sakura.ne.jp/DTM-SSW/images/DTM-SSW_jk.jpg"
      />
      <AlbumCard
        name="だってあたしたち可愛いし"
        url="https://saikou.world/releases/datte-kawaii/"
        cover-url="https://images.ctfassets.net/7qcqmfuv8a2o/tlXKX7oBf3u8oLD17myI0/4627d86a4ff1ad30d6d5f37d3f3ff34b/cover-v03.png"
      />
      <AlbumCard
        name="地平線の彼方に君がいない"
        url="https://saikou.world/releases/chiheisen-no-kanata/"
        cover-url="https://images.ctfassets.net/7qcqmfuv8a2o/1RAOSnbZ08N0O1niMMYoQx/e6eb0f6c177b2499cf864f9ef95ce62e/cover1600.png"
      />
      <AlbumCard
        name="地獄の果まで連れてって"
        url="https://saikou.world/releases/jigoku-no-hate/"
        cover-url="https://images.ctfassets.net/7qcqmfuv8a2o/e31oFqQgQlnH8AZxA0jcA/34f722f3953fa413df1cf0eae99ddb05/jigokuno-hate-480.jpg"
      />
      <AlbumCard
        name="病的に可愛いって言って"
        url="https://saikou.world/releases/byouteki"
        cover-url="https://images.ctfassets.net/7qcqmfuv8a2o/4xCcvBxv3xyP9JTw8fo7YM/b5ecebf99c7a6b9b9241a92ecbcd36a3/byouteki-jacket.jpg"
      />
      <AlbumCard
        name="crocco"
        url="http://www.getsumenhikou.com/crocco/"
        cover-url="https://www.getsumenhikou.com/content/images/crocco.jpg"
      />
      <AlbumCard
        name="Epic RPG IV"
        url="http://epicrpg4.bmemo.pw/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/epicrpg4.png"
      />
      <AlbumCard
        name="Balboa"
        url="http://www.getsumenhikou.com/balboa/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/jacket.png"
      />
      <AlbumCard
        name="Epic RPG III"
        url="http://epicrpg3.bmemo.pw/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/epicrpg3.jpg"
      />
      <AlbumCard
        name="something mini"
        url="http://www.getsumenhikou.com/something-mini/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/something_mini_jacket.png"
      />
      <AlbumCard
        name="A-Remix Nation 10"
        url="http://youhardcore.web.fc2.com/release/022/index.html"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/ARN10JK.jpg"
      />
      <AlbumCard
        name="A-Remix Nation 9"
        url="http://youhardcore.web.fc2.com/release/020/index.html"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/ARN9JK500.jpg"
      />
      <AlbumCard
        name="Archytas"
        url="http://www.getsumenhikou.com/archytas/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/archytas_jacket.png"
      />
      <AlbumCard
        name="Calm-Remix Nation"
        url="http://youhardcore.web.fc2.com/release/018/index.html"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/Calm-Remix_Nation_jacket.jpg"
      />
      <AlbumCard
        name="耽美主義者マルグリット"
        url="http://www.getsumenhikou.com/marguerite/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/marguerite_jacket.png"
      />
      <AlbumCard
        name="ハジマリの音"
        url="http://milkclip.web.fc2.com/htdocs/index.html"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/hajimari_jacket.jpg"
      />
      <AlbumCard
        name="創作的な活動の時間 E.P."
        url="http://www.getsumenhikou.com/sousaku-time/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/sousaku-time.jpg"
      />
      <AlbumCard
        name="東方長髪娘 〜LongHairGirls〜"
        url="http://fp3.dojin.com/project04/"
        cover-url="https://www.getsumenhikou.com/content/images/jacket/longhairjacket.jpg"
      />
    </section>
  </div>
</template>
