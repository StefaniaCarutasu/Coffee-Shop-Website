import styles from './Mosaic.module.css'

export default function Mosaic() {
  return (
        <div className={styles["row"]}>
            <div className={styles["col"]}>
                <img src='./images/tiles/P1.jpg' alt='coffee' width="250" height="450" />
                <img src='./images/tiles/L1.jpg' alt='coffee' width="250" height="171"/>
            </div>
            <div className={styles["col"]}>
                <img src='./images/tiles/L2.jpg' alt='coffee' width="250" height="171"/>    
                <img src='./images/tiles/P2.jpg' alt='coffee' width="250" height="450" />
            </div>
            <div className={styles["col"]}>
                <img src='./images/tiles/P3.jpg' alt='coffee' width="250" height="450"/>
                <img src='./images/tiles/L3.jpg' alt='coffee' width="250" height="171" />
            </div>
        </div>
  );
}
