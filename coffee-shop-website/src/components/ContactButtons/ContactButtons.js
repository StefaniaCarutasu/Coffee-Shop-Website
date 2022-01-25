/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icon from 'react-bootstrap-icons';

import styles from './ContactButtons.module.css'

const ContactButtons = () => {
    return (
        <>
            <div className={styles['text']}>
                <h2>Contact:</h2>
                <address>Str. Aromelor Nr. 75 Bis</address>
                <a href="#" className={styles['button']}><Icon.Facebook /></a>
                <a href="#" className={styles['button']}><Icon.Instagram /></a>
                <a href="mailto:cpluspluscoffe@yahoo.com" className={styles['button']}><Icon.Envelope /></a>
            </div>

        </>
    );
}

export default ContactButtons;