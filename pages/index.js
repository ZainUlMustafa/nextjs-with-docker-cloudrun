import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from "swr";
import Link from 'next/link';

export default function Home() {
  const { data, error } = useSWR("/api/hello", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/ConTact">Contact</Link></li>
          <li><Link href="/tEaM">Team</Link></li>
          <li><Link href="/bLogs">Blogs</Link></li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://sciengit.ejaarat.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://4.bp.blogspot.com/-KbVdJ3GrzGo/WnbuKilBBPI/AAAAAAAAEm8/n99G9DqSTrQZDQ30DcEaxtK2YZRrxqKOQCK4BGAYYCw/s786/slogo.jpg" alt="Sciengit Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
