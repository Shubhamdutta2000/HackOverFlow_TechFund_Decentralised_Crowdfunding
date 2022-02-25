import Head from "next/head";

//Components
import Navbar from "../components/Navbar.js";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechFund</title>
        <meta
          name="description"
          content="An evolutionary ecosystem that uses decentralization to connect contributors with innovators, ultimately making new business ideas touch the moon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        {/* <img src="assets/desktop/HeroBlackBg.png" alt="m" /> */}
      </main>
    </div>
  );
}
