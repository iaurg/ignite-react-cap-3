import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return(
    <>
      <Head>
        <title> Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="$">
            <time>12 de março de </time>
            <strong>Createing a Monorepo with Yarn</strong>
            <p>In this guide we gonna learn how to change the monorepo configs inside your project</p>
          </a>

          <a href="$">
            <time>12 de março de </time>
            <strong>Createing a Monorepo with Yarn</strong>
            <p>In this guide we gonna learn how to change the monorepo configs inside your project</p>
          </a>

          <a href="$">
            <time>12 de março de </time>
            <strong>Createing a Monorepo with Yarn</strong>
            <p>In this guide we gonna learn how to change the monorepo configs inside your project</p>
          </a>
        </div>
      </main>
    </>
  )
}