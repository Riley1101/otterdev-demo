import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
export default function Header() {
  const [active, setActive] = React.useState(false);

  const onScroll = React.useCallback((event) => {
    const { pageYOffset } = window;
    if (pageYOffset > 200) {
      setActive(true);
    } else if (pageYOffset < 200) {
      setActive(false);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () =>
      window.removeEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <header className={`${styles.header} ${active ? styles.active : ""}`}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Otterdev"
          />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__list__item}>About</li>
          <li className={styles.navigation__list__item}>Service</li>
          <li className={styles.navigation__list__item}>
            <Link href="/testimonials">Portfolio</Link>
          </li>
          <li className={styles.navigation__list__item}>
            <button className={styles.navigation__list__item__btn}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <button className={styles.mobile__menu}>
        <Image
          src="/images/icons/burger.svg"
          alt="MENU"
          objectFit="contain"
          width={30}
          height={30}
        />
      </button>
    </header>
  );
}
