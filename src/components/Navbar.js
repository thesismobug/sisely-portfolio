import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/SisSpiral.png`}
            alt="Sisely Portfolio Logo"
            width={50}
            height={50}
            className={styles.logoImage}
            unoptimized={true}
          />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/painting">painting</Link></li>
        <li><Link href="/clothing">clothing</Link></li>
        <li><Link href="/metalwork">metalwork</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 