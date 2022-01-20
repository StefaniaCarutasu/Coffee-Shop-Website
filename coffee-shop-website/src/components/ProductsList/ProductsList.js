import styles from './ProductsList.module.css'


export default function ProductsList({ products }) {

  if (products.length === 0) {
    return <div className={styles["error"]}>No products to load...</div>
  }

  const getPicturePath = (picture_name) => {
    let picture_path = "./products/" + picture_name + ".jpg"
    return picture_path 
  }

    return(
      <div className={styles["products-list"]}>
        {products.map(product => ( 
          <div key={product.id} className={styles["card"]}>
            <h2>{product.name}</h2>
            <img src={getPicturePath(product.picture_name)} alt={product.name} width="200" height="120"/>
            <p>{product.description}</p>
            <h3>{product.price} RON</h3>
          </div>
        ))}  
      </div>
    ); 
  }
  