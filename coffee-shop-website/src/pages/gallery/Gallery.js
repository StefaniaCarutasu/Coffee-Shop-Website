import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList/ProductsList"
import { projectFirestore } from "../../firebase/config";

// styles
import styles from './Gallery.module.css';

export default function Gallery () {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub =projectFirestore.collection('products').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError("No products to load")
        setIsPending(false)
      }
      else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })

        setData(results)
        setIsPending(false)
      }
    }, (err) => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()
  }, [])


  return (
    <div className={styles["gallery"]}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading" >Loading...</p>}
      {data && <ProductsList products={data} />}
    </div>
  )


}
