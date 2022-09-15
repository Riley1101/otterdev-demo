import Container from "@/layouts/container";
import styles from "@/styles/Portfolio.module.css";
import { gql } from "@apollo/client";
import Card from "@/components/card";
import client from "@/utils/query/client";
const Testimonials = ({ data }) => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Portfolio</h1>
          <p className={styles.description}>
            To see us in action, explore our works. Our internationally
            acclaimed, award-winning projects lift us above the crowd.
          </p>
        </div>
        <div className={styles.grid}>
          {data.testimonials.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Testimonials;
export async function getStaticProps() {
  const PROJECT_QUERY = gql`
    query PROJECT_QUERY {
      testimonials {
        title
        url
        id
        description
        image {
          url
        }
      }
    }
  `;
  const { data } = await client.query({
    query: PROJECT_QUERY,
  });
  return {
    props: {
      data,
    },
  };
}
