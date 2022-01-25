import Mosaic from "../../components/Mosaic/Mosaic";
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles["grid"]}>
      <section className={styles["left"]}>
        <h3><strong>Cosy atmosphere and good coffee. What more could you ask for?</strong></h3>
        <div><p id="aparitieTreptata"></p></div>
      </section>
      <Mosaic />
      <div className={styles["right"]}>
          <table>
            <tr><th>Oferta zilei</th></tr>
            <tr><td>IA CAFEA</td></tr>
            <tr><td>SURPRAIS</td></tr>
          </table>
      </div>
    </div>
  );
}
