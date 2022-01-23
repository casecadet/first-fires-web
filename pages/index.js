import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>First Fires has a website?</title>
        <link rel="icon" href="/favifire.ico" />
        {/* Favicon Copyright 2020 Twitter, Inc and other contributors: https://twemoji.twitter.com/ */}
      </Head>

      <main>
        <Header title="Welcome to First Fires!" />
        <p className="description">
          Home of the <code>first fires</code> .
        </p>
        <p>More to come soon(<span class="blink">?</span>)</p>
      </main>

      <Footer />
    </div>
  )
}
