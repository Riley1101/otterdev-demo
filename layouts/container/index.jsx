import Header from "@/components/header";
import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
export default Container;
