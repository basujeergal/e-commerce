import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const handleIncreaseQuantity = (cartIndex) => {
    const updatedCart = CART.map((item, index) => {
      return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item;
    });
    setCART(updatedCart);
  };

  const handleDecreaseQuantity = (cartIndex) => {
    const updatedCart = CART.map((item, index) => {
      if (cartIndex === index && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCART(updatedCart);
  };

  return (
    <div>
      {CART.map((cartItem, cartIndex) => {
        return (
          <div  key={cartItem.id}>
           <div className='flex'> <img src={cartItem.url} width={300} alt={cartItem.name} />
            <span>{cartItem.name}</span>
            </div>
            <div className='flex'>
            <button onClick={() => handleDecreaseQuantity(cartIndex)}>
                <FontAwesomeIcon icon={faMinus} />
                </button>
                
              <span>{cartItem.quantity}</span>
              
            <button onClick={() => handleIncreaseQuantity(cartIndex)}>
            <FontAwesomeIcon icon={faPlus} />
            </button>
            </div>
            <div className='flex'><span>Rs. {cartItem.price * cartItem.quantity}/-</span></div>
          </div>
        );
      })}
      <p className='flex'>
        Total: <span></span>{' '}
        <span>
          {CART.reduce((total, item) => total + item.price * item.quantity, 0)}
        </span>
      </p>
    </div>
  );
}

export default CartList;
