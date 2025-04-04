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
        <p>My name is Sisely DeLisi and I am an undergraduate student at Stanford University. My coursework has consisted of a chaotic amalgamation of subjects stuffed into something resembling Symbolic Systems. I have autism - i.e. beautifully crippling obsessive interests - and in the business of questionings, I have a tendency to fall quickly in love. I live for rabbit-holes and I love the library, but I don&apos;t go there to work - only to explore (my favorite find is Maps And Wander Lines by Fernand Deligny). Many would say I&apos;m a wanderer and I would agree… I&apos;ve tried my hand at many crafts and taken up numerous passions in the search of something the nature of which is completely unknown to me. I&apos;ve done research in neuroscience and in astrophysics on supermassive black holes; I&apos;ve made a mechanical wooden clock with a scroll saw; I&apos;ve designed for two large-scale fashion shows; I&apos;ve apprenticed in metalworking; I play the cello and piano religiously; and I&apos;m learning Russian because I love Shostakovich. I am nothing if not absolutely passionate about the things that I love, but it&apos;s not until three months ago that I discovered how to best channel that. Having never painted before, I took an intro to oil painting class, and something inside me clicked. Immediately, I knew this is the thing I had been searching for - or at least, the medium through which I must continue. Every day since, I have woken up with a newfound certainty in myself, and an overwhelming excitement to be alive - simply because I get to paint. Without a doubt this is my life&apos;s passion, as I know few things with certainty other than that I love, and that I am a painter. I&apos;m currently working on building a portfolio of works: so that I may further find my voice, and then figure out how to give it away.</p>
      </main>
    </div>
  );
};

export default HomePage; 
