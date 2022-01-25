import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import styles from './Profile.module.css';

import OffersList from "../../components/OffersList/OffersList"

export default function Profile() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useAuthContext()

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('offers').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setError("No products to load")
        setIsPending(false)
      }
      else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })

        function compare(a, b) {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        }

        results.sort(compare);

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
    <>
      <img src={user.photoURL} className={styles["profile_picture"]} alt="Profile" />
      <h1 className={styles["username"]}>{user.displayName}</h1>
      <div className={styles["gallery"]}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading" >Loading...</p>}
        {data && <OffersList offers={data} />}
      </div>
    </>
  )


}

