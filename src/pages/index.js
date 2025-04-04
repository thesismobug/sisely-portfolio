import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Import the Navbar component
import styles from '../styles/Home.module.css'; // Import the CSS module

const HomePage = () => {
  return (
    <div className={styles.page}> {/* Add this className */}
      <Head>
        <title>Sisely Portfolio</title> {/* Update title */}
        <meta name="description" content="Welcome to Sisely's Portfolio" />
        
      </Head>

      {/* Render the Navbar */}
      <Navbar />

      {/* Main content of the page */}
      <main className={styles.main}> {/* Change from mainContent to main */}
        <p>Hi, I&apos;m Sisely.</p>
        <p>I&apos;m an artist and a student at Stanford.</p>
        <p>You can contact me at delisi [at] stanford [dot] edu</p>
      </main>

    </div>
  );
};


export default HomePage; 