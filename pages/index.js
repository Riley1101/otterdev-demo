import Container from "@/layouts/container";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Home() {
  const [image, setImage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [16, 2]);
  useEffect(
    () =>
      scale.onChange((v) => {
        let path = Math.floor(v);
        setImage(path);
      }),
    [scale, image]
  );

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
          <motion.div className={`${styles.blob} ${styles.one}`}>
            <Image
              priority={true}
              layout="fill"
              objectFit="contain"
              src={`/images/sprites/BLUE_REC/blue_rectangle${image}.webp`}
              alt="BLUE_REC"
            />
          </motion.div>
          <motion.div className={`${styles.blob} ${styles.two}`}>
            <Image
              priority={true}
              layout="fill"
              objectFit="contain"
              src={`/images/sprites/DONUT/donout${image}.webp`}
              alt="DONUT"
            />
          </motion.div>
          <motion.div className={`${styles.blob} ${styles.three}`}>
            <Image
              priority={true}
              layout="fill"
              objectFit="contain"
              src={`/images/sprites/RED_BLOCKS/red_blocks${image}.webp`}
              alt="RED_BLOCKS"
            />
          </motion.div>
          <motion.div className={`${styles.blob} ${styles.four}`}>
            <Image
              priority={true}
              layout="fill"
              objectFit="cover"
              src={`/images/sprites/YELLOW_REC/yellow_rectangle${image}.webp`}
              alt="YELLOW_REC"
            />
          </motion.div>
        </div>
      </section>
      {/* <div className={styles.scroll}></div> */}
    </Container>
  );
}
