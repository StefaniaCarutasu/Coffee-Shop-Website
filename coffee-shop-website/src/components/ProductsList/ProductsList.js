import styles from './ProductsList.module.css'
import Product from './Product'

export default function ProductsList({ products }) {

  if (products.length === 0) {
    return <div className={styles["error"]}>No products to load...</div>
  }

    return(
      <div className={styles["products-list"]}>
        {products.map(product => ( 
         <Product product={product} />
        ))}  
      </div>
    ); 
  }
  