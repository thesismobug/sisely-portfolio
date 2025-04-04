import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Import the Navbar
import styles from '../styles/Home.module.css'; // Import styles for this page


const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Clothing - Sisely Portfolio</title>
        <meta name="description" content="Sisely's clothing designs" />
      </Head>

      <Navbar />

      <main className={styles.main}> {/* Change from mainContent to main */}
        <p>Hi, I&apos;m Sisely.</p>
        <p>I&apos;m an artist and a student at Stanford.</p>
        <p>You can contact me at delisi [at] stanford [dot] edu</p>
      </main>
    </div>
  );
};

export default HomePage; 
