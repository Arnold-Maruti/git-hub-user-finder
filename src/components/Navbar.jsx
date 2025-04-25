import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <Link to="/app"><FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "40px" }}/></Link>
        
        </nav>
    </div>
  )
}

export default Navbar