import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Import the Navbar
import styles from '../styles/Painting.module.css'; // Import styles for this page


const paintings = [
  { id: 1, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/1.png`, alt: 'Lucien Freud mastercopy', caption: '16 x 20 in. - oil on canvas' },
  { id: 2, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/2.png`, alt: 'Salman Toor mastercopy', caption: '16 x 20 in. - oil on canvas' },
  { id: 3, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/3.png`, alt: 'Avery portrait', caption: '16 x 20 in. - oil on canvas' },
  { id: 4, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/4.png`, alt: 'Dominic & Doodles portrait', caption: '8 x 10 in. - oil on canvas' },
  { id: 5, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/5.png`, alt: 'Large red self-portrait', caption: '40 x 60 in. - oil on canvas' },
];

const PaintingPage = () => {
  return (
    <div>
      <Head>
        <title>Paintings - Sisely Portfolio</title>
        <meta name="description" content="Sisely's oil paintings" />
      </Head>

      <Navbar />

      <main className={styles.pageContainer}> {/* Add a container for padding */}
        <div className={styles.paintingGrid}>
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className={`${styles.gridItem} ${painting.id === 5 ? styles.gridItemLarge : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.src} // Path relative to /public
                  alt={painting.alt}
                  layout="responsive" // Makes image scale with container
                  width={500} // Provide base width (aspect ratio maintained by layout="responsive")
                  height={painting.id === 5 ? 350 : 600} // Provide base height, adjust aspect for large one if needed
                  objectFit="contain" // Adjust as needed ('cover', 'contain', etc.)
                  unoptimized={true} // Keep if needed for static export compatibility
                />
              </div>
              <p className={styles.caption}>{painting.caption}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaintingPage; 