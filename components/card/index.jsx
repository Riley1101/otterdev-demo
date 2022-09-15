import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ data: item }) => {
  return (
    <div className={styles.card}>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className={styles.card__preview}>
          <Image
            src={item?.image?.url}
            objectFit="cover"
            layout="fill"
            alt={item.title}
          ></Image>
        </div>
      </a>
      <div className={styles.card__contents}>
        <h2 className={styles.card__title}>{item.title}</h2>
        <p className={styles.card__description}>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
