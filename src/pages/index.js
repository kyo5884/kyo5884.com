import React from 'react'
import '../style/tailwind.css'

import Card from '../components/card.js'
import Section from '../components/section.js'

export default () => (
  <div>
    <Section style={{ marginBottom: '-15vh' }}>
      <header className="flex flex-col items-center justify-center w-screen">
        <h1 className="text-5xl sm:text-6xl antialiased">
          <span className="font-light">kyo5884</span>
          <span className="font-hairline text-gray-700">.com</span>
        </h1>
        <p className="-mt-5 mb-4 text-sm">メンヘラポエムコンポーザー</p>
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
    <Section>
      <div>
        <Card title="kyo5884" description="It's me." url="https://kyo5884.com/">
          <ul>
            <li>Apple Music</li>
            <li>Google Play Music</li>
            <li>Spotify</li>
          </ul>
        </Card>
        <Card
          title="最高に幸せな私たちの世界。"
          linkTitle="saikou.world"
          url="https://saikou.world/"
          description="Depressive Suicidal Black Kawaii Future Progressive Emotional Electro Death Metalcore J-Pop Idol"
        >
          <ul>
            <li>iTunes</li>
            <li>Google Play</li>
            <li>Bandcamp</li>
          </ul>
        </Card>
        <Card
          title="月面避行"
          linkTitle="www.getsumenhikou.com"
          url="https://www.getsumenhikou.com/"
          description="SynthPop works by kyo5884 and harumurakuro"
        >
          <ul>
            <li>Bandcamp</li>
          </ul>
        </Card>
      </div>
    </Section>
  </div>
)
