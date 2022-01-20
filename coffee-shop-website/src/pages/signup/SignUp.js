import styles from './Signup.module.css'

import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'



export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [dob, setDob] = useState('')

  const { isPending, error, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }


    return(
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h1>Sign up</h1>
        <label>
          <div className={styles['star-label']}> 
            <p>*</p>
            <span>Display name:</span>
          </div>
          <input 
            type = "displayName" 
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
              type = "email" 
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
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        {/*<label>
          <div className={styles['star-label']}>
            <p>*</p>
            <span>Date of birth: </span>
          </div>
          <input 
            type = "date"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
        </label> */}

        
        { !isPending && 
          <button className='btn btn-dark'>
            <h3>Sign up</h3>          
          </button>
        }
       
        { isPending && <button className='btn'disabled>Loading</button>}
        { error && <p>{error}</p>}
      </form>
    ); 
  }
  