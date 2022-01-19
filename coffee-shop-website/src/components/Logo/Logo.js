import './Logo.css'
import { Link } from 'react-router-dom'



export default function Logo() {

    const logo_src="./logo1.png";

  return (
        <Link to="/" className='me-auto'>
            <img src={logo_src} alt = "Logo" className='logo'/>
        </Link>
  );
}
