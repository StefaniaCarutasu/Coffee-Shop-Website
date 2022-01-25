import styles from './Contact.module.css'
import { useState } from 'react'

import { useFirestore } from '../../hooks/useFirestore'

import { useHistory } from 'react-router-dom'

import { useAuthContext } from '../../hooks/useAuthContext'

export default function Contact() {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [resume, setResume] = useState(null)
  const [resumeError, setResumeError] = useState(null)

  const history = useHistory()

  const { addDocument, response } = useFirestore("applications")

  const { user } = useAuthContext()


  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({ fullName, phoneNumber, uid: user.uid }, resume)
    history.push('/');
  }

  const handleFileChange = (e) => {
    setResume(null)
    let selected = e.target.files[0]

    if (!selected) {
      setResumeError('Please select a file')
      return
    }

    if (!selected.type.includes('pdf')) {
      setResumeError('Selected file must be a pdf file')
      return
    }

    if (selected.size > 200000) {
      setResumeError('File size must be less than 200kb')
      return
    }

    setResumeError(null)
    setResume(selected)

  }

  return (
    <>
      <span className={styles.intro_text}>
        <h1>Join us!</h1>
        <p>Are you looking for a cool place to start you career? Look no further! Tell us why you'd be fit to pe part of our team!</p>
      </span>

      <form className={styles['join_form']} onSubmit={handleSubmit}>

        <label>
          <div className={styles['star-label']}>
            <p>*</p>
            <span>Full name</span>
          </div>
          <input
            required
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </label>
        <label>
          <div className={styles['star-label']}>
            <p>*</p>
            <span>Phone number</span>
          </div>
          <input
            required
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </label>
        <label>
          <div className={styles['star-label']}>
            <span>Resume</span>
          </div>
          <input
            required
            type="file"
            onChange={handleFileChange}
          />
          {resumeError && <div className={styles['error']}>{resumeError}</div>}
        </label>
        <button className='btn btn-dark'>
          <h3>Join!</h3>
        </button>
      </form>
    </>

  );
}
