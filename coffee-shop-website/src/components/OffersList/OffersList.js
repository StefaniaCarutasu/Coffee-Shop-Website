import styles from './OffersList.module.css'
import Product from './Offer'

export default function OffersList({ offers }) {

  if (offers.length === 0) {
    return <div className={styles["error"]}>No products to load...</div>
  }

    return(
      <div className={styles["products-list"]}>
        {offers.map(offer => ( 
         <Product offer={offer} />
        ))}  
      </div>
    ); 
  }
  