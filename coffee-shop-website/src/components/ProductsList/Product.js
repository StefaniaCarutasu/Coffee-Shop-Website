import styles from './Product.module.css'

export default function Product({ product }) {
    const getPicturePath = (picture_name) => {
        let picture_path = "./images/products/" + picture_name + ".jpg"
        return picture_path 
    }
  return (
        <div key={product.id} className={styles["card"]}>
            <h2>{product.name}</h2>
            <img src={getPicturePath(product.picture_name)} alt={product.name} width="250" height="150"/>
            <p>{product.description}</p>
            <h3>{product.price} RON</h3>
        </div>
  );
}
