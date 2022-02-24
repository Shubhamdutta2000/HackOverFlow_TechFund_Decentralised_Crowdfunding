import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechFund</title>
        <meta name='description' content='An evolutionary ecosystem that uses decentralization to connect contributors with innovators, ultimately making new business ideas touch the moon.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='/'>Tech-Fund</a>
        </h1>
      </main>
    </div>
  )
}
