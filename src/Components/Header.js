import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function Header(props) {
  return (
    <div className='flex shopping-card'>
         <div onClick={ () => props.handleShow(false)}>Shopping Cart App</div>
         <div onClick={ () => props.handleShow(true)}><FontAwesomeIcon icon={faShoppingCart} />
         <sup>{props.count}</sup>
         </div>
    </div>
  )
}

export default Header