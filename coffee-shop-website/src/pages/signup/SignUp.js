import styles from './Signup.module.css'

import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'



export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const { isPending, error, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }

    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }

    if (selected.size > 200000) {
      setThumbnailError('Image file size must be less than 200kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)

  }


  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h1>Sign up</h1>
      <label>
        <div className={styles['star-label']}>
          <p>*</p>
          <span>Username:</span>
        </div>
        <input
          required
          type="displayName"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <div className={styles['star-label']}>
          <p>*</p>
          <span>Email:</span>
        </div>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <div className={styles['star-label']}>
          <p>*</p>
          <span>Password: </span>
        </div>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <div className={styles['star-label']}>
          <span>Profile picture: </span>
        </div>
        <input
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className={styles['error']}>{thumbnailError}</div>}
      </label>

      {!isPending &&
        <button className='btn btn-dark'>
          <h3>Sign up</h3>
        </button>
      }

      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
}
