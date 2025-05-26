import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar'; // Import the Navbar
import styles from '../styles/Painting.module.css'; // Import styles for this page


const paintings = [
  { id: 1, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/1.png`, alt: 'Lucien Freud mastercopy', caption: '16 x 20 in. - oil on canvas', row: 3},
  { id: 2, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/2.png`, alt: 'Salman Toor mastercopy', caption: '16 x 20 in. - oil on canvas', row:3},
  { id: 3, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/3.png`, alt: 'Avery portrait', caption: '16 x 20 in. - oil on canvas', row:3},
  { id: 4, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/4.png`, alt: 'Dominic & Doodles portrait', caption: '8 x 10 in. - oil on canvas', row: 4 },
  { id: 5, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/5.png`, alt: 'Large red self-portrait', caption: '40 x 60 in. - oil on canvas', row: 5 },
  { id: 6, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/Doni.png`, alt: 'Doni portrait', caption: '8 x 10 in. - oil on canvas', row: 4 },
  { id: 7, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/sterlyn.png`, alt: 'Sterlyn portrait', caption: '16 x 20 in. - oil on canvas', row: 2 },
  { id: 8, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/indigo.png`, alt: 'Indigo Menace', caption: '24 x 36 in. - oil on canvas', row: 1 },
  { id: 9, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/indigo_close.png`, alt: 'Indigo Menace close up', caption: 'close up', row: 1 },
  { id: 10, src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/paintings/self_portrait.png`, alt: 'Self Portrait', caption: '16 x 20 in. - oil on canvas', row: 2},
];

const PaintingPage = () => {
  // Group paintings by row
  const firstRow = paintings.filter(p => p.row === 1);
  const secondRow = paintings.filter(p => p.row === 2);
  const thirdRow = paintings.filter(p => p.row === 3);
  const fourthRow = paintings.filter(p => p.row === 4);
  const fifthRow = paintings.filter(p => p.row === 5);

  return (
    <div>
      <Head>
        <title>Paintings - Sisely Portfolio</title>
        <meta name="description" content="Sisely's oil paintings" />
      </Head>

      <Navbar />

      <main className={styles.pageContainer}>

        {/* first row - 2 smaller paintings */}
        <div className={`${styles.paintingGrid} ${styles.secondRowGrid}`}>
          {firstRow.map((painting) => (
            <div key={painting.id} className={`${styles.gridItem} ${styles.smallerGridItem}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  layout="responsive"
                  width={400}
                  height={500}
                  objectFit="contain"
                  unoptimized={true}
                />
              </div>
              <p className={styles.caption}>{painting.caption}</p>
            </div>
          ))}
        </div>


        {/* second row - 2 smaller paintings */}
        <div className={`${styles.paintingGrid} ${styles.secondRowGrid}`}>
          {secondRow.map((painting) => (
            <div key={painting.id} className={`${styles.gridItem} ${styles.smallerGridItem}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  layout="responsive"
                  width={400}
                  height={500}
                  objectFit="contain"
                  unoptimized={true}
                />
              </div>
              <p className={styles.caption}>{painting.caption}</p>
            </div>
          ))}
        </div>



        {/* Third row - 3 paintings */}
        <div className={styles.paintingGrid}>
          {thirdRow.map((painting) => (
            <div key={painting.id} className={styles.gridItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  layout="responsive"
                  width={500}
                  height={600}
                  objectFit="contain"
                  unoptimized={true}
                />
              </div>
              <p className={styles.caption}>{painting.caption}</p>
            </div>
          ))}
        </div>


        {/* Fourth row - 2 smaller paintings */}
        <div className={`${styles.paintingGrid} ${styles.secondRowGrid}`}>
          {fourthRow.map((painting) => (
            <div key={painting.id} className={`${styles.gridItem} ${styles.smallerGridItem}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  layout="responsive"
                  width={400}
                  height={500}
                  objectFit="contain"
                  unoptimized={true}
                />
              </div>
              <p className={styles.caption}>{painting.caption}</p>
            </div>
          ))}
        </div>



        {/* Fifth row - large painting */}
        <div className={styles.paintingGrid}>
          {fifthRowRow.map((painting) => (
            <div
              key={painting.id}
              className={`${styles.gridItem} ${styles.gridItemLarge}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={painting.src}
                  alt={painting.alt}
                  layout="responsive"
                  width={500}
                  height={350}
                  objectFit="contain"
                  unoptimized={true}
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