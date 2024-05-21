"use client"

import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/adminUiPics/categories/category1.jpg', alt: 'Image 1' },
  { src: '/adminUiPics/categories/earphones.jpg', alt: 'Image 2' },
  { src: '/adminUiPics/categories/electricals.jpg', alt: 'Image 3' },
];

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.heading}>We supply phone and laptop accessories</div>
        <div className={styles.paragraph}>
          We offer a wide range of accessories for your phones and laptops including cases, chargers, earphones, and more.
        </div>
        <Link href="/categories">
          <button className={styles.exploreButton}>Explore our categories</button>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.imageContainer}>
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className={styles.image} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
