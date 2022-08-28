import { ConnectButton } from "@rainbow-me/rainbowkit"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
const { ethers } = require("ethers")

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unfold22</title>
        <meta name="description" content="unfold22" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="front">
          <div className="frontpage">
            <div className="introtext">
              <ul>Redeem your</ul>
              <ul>DAO Tokens</ul>
              <div className="subheading">
                Perform Tasks, Earn Rewards and Redeem with Merch or Tickets!
              </div>
              <div className="button">Visit Marketplace</div>
            </div>
            <div className="imghe">
              <img src="https://firebasestorage.googleapis.com/v0/b/logpro-f2137.appspot.com/o/1.png?alt=media&token=2b17acaa-947c-4851-a55c-306d0d5ee56c" />
            </div>
          </div>
          <div className="rear">
            <div className="re">
              <ul>Making your community </ul>
              <ul>active is now easier with</ul>
              <ul>TokenTribe</ul>
            </div>
            <div className="button2">Create your token</div>
          </div>
        </div>

        {/* <h1 className={styles.title}>
          Welcome to <a href="">RainbowKit</a> + <a href="">wagmi</a> +{" "}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://rainbowkit.com" className={styles.card}>
            <h2>RainbowKit Documentation &rarr;</h2>
            <p>Learn how to customize your wallet connection flow.</p>
          </a>

          <a href="https://wagmi.sh" className={styles.card}>
            <h2>wagmi Documentation &rarr;</h2>
            <p>Learn how to interact with Ethereum.</p>
          </a>

          <a
            href="https://github.com/rainbow-me/rainbowkit/tree/main/examples"
            className={styles.card}
          >
            <h2>RainbowKit Examples &rarr;</h2>
            <p>Discover boilerplate example RainbowKit projects.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Next.js Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Next.js Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
       */}
      </main>
    </div>
  )
}

export default Home
