import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Import the Navbar
import styles from '../styles/Metalwork.module.css'; // Import styles for this page

// Define the data for your metalwork items, grouped by section
// Ensure filenames match those in public/images/metalwork/
const metalSections = [
  {
    
    images: [
      { id: '1-1', src: '/images/metalwork/metal1-1.png', alt: 'Sterling silver gear ring detail' },
      { id: '1-2', src: '/images/metalwork/metal1-2.png', alt: 'Sterling silver gear ring side view' },
      { id: '1-3', src: '/images/metalwork/metal1-3.png', alt: 'Sterling silver gear earrings' },
    ],
    caption: 'sterling silver',
  },
  {
    caption: 'hammered brass',
    images: [
      { id: '2-1', src: '/images/metalwork/metal2-1.png', alt: 'Hammered brass ribcage detail on black fabric' },
      { id: '2-2', src: '/images/metalwork/metal2-2.png', alt: 'Hammered brass ribcage full view on black fabric' },
      { id: '2-3', src: '/images/metalwork/metal2-3.png', alt: 'Hammered brass spiral necklace' },
      { id: '2-4', src: '/images/metalwork/metal2-4.png', alt: 'Silver clasps on patterned jacket' }, // This section has 4 images
    ]
  },
  {
    caption: 'sterling silver',
    images: [
      { id: '3-1', src: '/images/metalwork/metal3-1.png', alt: 'Sterling silver spiked ear cuff on display' },
      { id: '3-2', src: '/images/metalwork/metal3-2.png', alt: 'Sterling silver minimalist ear cuff set' },
    ] // This section has 2 images
  },
    {
    caption: 'sterling silver',
    images: [
      { id: '4-1', src: '/images/metalwork/metal4-1.png', alt: 'Sterling silver gear stud earrings front view' },
      { id: '4-2', src: '/images/metalwork/metal4-2.png', alt: 'Sterling silver gear stud earrings side view' },
    ] // This section has 2 images
  },
    {
    caption: 'sterling silver',
    images: [
      { id: '5-1', src: '/images/metalwork/metal5-1.png', alt: 'Sterling silver spiral ring front view' },
      { id: '5-2', src: '/images/metalwork/metal5-2.png', alt: 'Sterling silver spiral ring angled view' },
      { id: '5-3', src: '/images/metalwork/metal5-3.png', alt: 'Sterling silver spiral ring side view' },
    ]
  },
    {
    caption: 'sterling silver',
    images: [
      { id: '6-1', src: '/images/metalwork/metal6-1.png', alt: 'Sterling silver star ring front view' },
      { id: '6-2', src: '/images/metalwork/metal6-2.png', alt: 'Sterling silver star ring angled view' },
      { id: '6-3', src: '/images/metalwork/metal6-3.png', alt: 'Sterling silver double spiral ring' },
    ]
  },
  {
    caption: 'leather',
    images: [
      { id: '7-1', src: '/images/metalwork/metal7-1.png', alt: 'Red leather star earrings' },
    ] // This section has 1 image
  },
];

// Helper function to get the grid class based on image count
const getGridClass = (numImages) => {
  switch (numImages) {
    case 1:
      return styles.gridCols1;
    case 2:
      return styles.gridCols2;
    case 4:
      return styles.gridCols4;
    case 3: // Fallthrough for 3 or default
    default:
      return styles.gridCols3;
  }
};

const MetalworkPage = () => {
  return (
    <div>
      <Head>
        <title>Metalwork - Sisely Portfolio</title>
        <meta name="description" content="Sisely's metalwork and jewelry" />
      </Head>

      <Navbar />

      <main className={styles.pageContainer}>
        {metalSections.map((section, sectionIndex) => {
          // Determine the grid class for this section
          const gridClassName = getGridClass(section.images.length);

          return (
            <section key={sectionIndex} className={styles.gridSection}>
              {/* Apply base grid class AND dynamic column class */}
              <div className={`${styles.metalGrid} ${gridClassName}`}>
                {section.images.map((item) => (
                  <div key={item.id} className={styles.gridItem}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        style={{ objectFit: 'cover' }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Render caption below the grid */}
              <h2 className={styles.sectionCaption}>{section.caption}</h2>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default MetalworkPage; 