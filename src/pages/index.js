import React from 'react'
import Helmet from 'react-helmet'
import '../style/tailwind.css'

import Card from '../components/card.js'
import Section from '../components/section.js'

export default () => (
  <div>
    <Helmet>
      <title>kyo5884.com</title>
    </Helmet>
    <Section style={{ marginBottom: '-15vh' }}>
      <header className="flex flex-col items-center justify-center w-screen">
        <h1 className="text-5xl sm:text-6xl antialiased">
          <span className="font-light">kyo5884</span>
          <span className="font-hairline text-gray-700">.com</span>
        </h1>
        <p className="-mt-5 mb-4 text-xs">メンヘラポエムコンポーザー</p>
        <div>
          <ul className="flex">
            <li className="mx-1">
              <a href="https://blog.kyo5884.tk/">Blog</a>
            </li>
            <li className="mx-1">
              <a href="https://twitter.com/kyo5884">Twitter</a>
            </li>
          </ul>
        </div>
      </header>
    </Section>
    <Section title="Projects">
      <div>
        <Card
          title="kyo5884"
          description="It's me."
          url="https://kyo5884.com/"
          img="/kyo5884.png"
        >
          <ul>
            <li>
              <a href="https://music.apple.com/jp/artist/kyo5884/1460641098">
                Apple Music
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/music/artist?id=Avqsttosoifehgzahttnx77dfwy">
                Google Play Music
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/artist/6ujwIitifvO4HUTeyVJH5E">
                Spotify
              </a>
            </li>
          </ul>
        </Card>
        <Card
          title="最高に幸せな私たちの世界。"
          description="Depressive Suicidal Black Kawaii Future Progressive Emotional Electro Death Metalcore J-Pop Idol"
          linkTitle="saikou.world"
          url="https://saikou.world/"
          img="/saikou.jpg"
        >
          <ul>
            <li>
              <a href="https://music.apple.com/jp/artist/%E6%9C%80%E9%AB%98%E3%81%AB%E5%B9%B8%E3%81%9B%E3%81%AA%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AE%E4%B8%96%E7%95%8C/1488287586">
                iTunes
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/music/artist?id=A2ddvtx5gmpy3jlad7gofn53fye">
                Google Play
              </a>
            </li>
            <li>
              <a href="https://saikou-world.bandcamp.com/">Bandcamp</a>
            </li>
          </ul>
        </Card>
        <Card
          title="月面避行"
          description="SynthPop works by kyo5884 and harumurakuro"
          linkTitle="www.getsumenhikou.com"
          url="https://www.getsumenhikou.com/"
          img="/getsumenhikou.png"
        >
          <ul>
            <li>
              <a href="https://getsumenhikou.bandcamp.com/">Bandcamp</a>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  </div>
)
