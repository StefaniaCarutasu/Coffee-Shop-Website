import Mosaic from "../../components/Mosaic/Mosaic";
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles["grid"]}>
      <section className={styles["left"]}>
        <h3><strong>Cosy atmosphere and good coffee. What more could you ask for?</strong></h3>
        <br />
        <p>Coffee++ is a start up Bucharest, Romania based coffee roaster that has developed a line of premium coffees and espressos.
          Coffee++ is known for the cosy atmosphere, delicious food and fine coffee selection.
          The friendly staff makes your vizit better every single time!</p>
      </section>
      <Mosaic />
      <div className={styles["right"]}>
        <h1>Special offer!</h1>
        <p>Only during winter months, we offer you a cup of tea on any order greater than 30RON</p>
      </div>
    </div>
  );
}
