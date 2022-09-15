import Container from "@/layouts/container";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [180, 2]);
  useEffect(() => scale.onChange((v) => {}), [scale]);
  return (
    <Container>
      <section className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.hero__title}>
            <span className={styles.hero__title__highlight}>Iconic</span>
            Digital Landscapes
          </h1>
          <p className={styles.hero__description}>
            Are you a startup or SME in need of a digital presence? Whether you
            need a website, web app, mobile app, or UI/UX design – we’ve got you
            covered!
          </p>
        </div>
        <div className={styles.hero__illustration}>
          <video
            className={styles.hero__illustration__video}
            autoPlay
            loop
            muted
            src="/images/hero__illustration.webm"
          ></video>
          <motion.div
            className={`${styles.blob} ${styles.one}`}
            style={{ rotateY: scale }}
          >
            <Image
              layout="fill"
              src="/images/sprites/blue_rectangle0000.webp"
              alt="Sprite"
            />
          </motion.div>
          <motion.div
            className={`${styles.blob} ${styles.two}`}
            style={{ rotateY: scale }}
          >
            <Image
              layout="fill"
              src="/images/sprites/donout0000.webp"
              alt="Sprite"
            />
          </motion.div>
          <motion.div
            className={`${styles.blob} ${styles.three}`}
            style={{ rotateY: scale }}
          >
            <Image
              layout="fill"
              src="/images/sprites/red_blocks0002.webp"
              alt="Sprite"
            />
          </motion.div>
          <motion.div
            className={`${styles.blob} ${styles.four}`}
            style={{ rotateY: scale }}
          >
            <Image
              layout="fill"
              src="/images/sprites/yellow_rectangle0000.webp"
              alt="Sprite"
            />
          </motion.div>
        </div>
      </section>
    </Container>
  );
}
