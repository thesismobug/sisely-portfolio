import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Import the Navbar
import styles from '../styles/Clothing.module.css'; // Import styles for this page

// Define the data for your clothing images
// Assuming filenames 1.png, 2.png, etc. in public/images/clothing/
const clothingItems = [
  { id: 1, src: '/images/clothing/clothing1.png', alt: 'Clothing item 1 Alt Text' },
  { id: 2, src: '/images/clothing/clothing2.png', alt: 'Clothing item 2 Alt Text' },
  { id: 3, src: '/images/clothing/clothing3.png', alt: 'Clothing item 3 Alt Text' },
  { id: 4, src: '/images/clothing/clothing4.png', alt: 'Clothing item 4 Alt Text' },
];

const ClothingPage = () => {
  return (
    <div>
      <Head>
        <title>Clothing - Sisely Portfolio</title>
        <meta name="description" content="Sisely's clothing designs" />
      </Head>

      <Navbar />

      <main className={styles.pageContainer}> {/* Add a container for padding */}
        <div className={styles.clothingGrid}>
          {clothingItems.map((item) => (
            <div key={item.id} className={styles.gridItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src} // Path relative to /public
                  alt={item.alt}
                  layout="responsive" // Makes image scale with container
                  width={500} // Provide base width (aspect ratio maintained)
                  height={700} // Provide base height (adjust aspect ratio as needed)
                  objectFit="cover" // Use 'cover' or 'contain' based on preference
                  unoptimized={true} // Keep if needed for static export compatibility
                />
              </div>
              {/* No caption needed for this page */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClothingPage; 