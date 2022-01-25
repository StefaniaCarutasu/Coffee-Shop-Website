import styles from './Offer.module.css'

export default function Offer({ offer }) {
  return (
        <div key={offer.id} className={styles["card"]}>
            <h2>{offer.name}</h2>
            <h3>{offer.price} RON</h3>
            <p>Availability period: {offer.availability}</p>
        </div>
  );
}
