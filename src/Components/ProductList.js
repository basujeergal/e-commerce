import React from 'react'
import '../App.css';




function ProductList({product , addtocart}) {
  return (
    <div className='flex'>
        {
           product.map((productItem,productIndex)=> {
            return(
            <div style={{ width:'50%'}}>
                <div className='product-item'>
                    
                    <img src={productItem.url} width="60%"/>
                    <p>{productItem.name}  | {productItem.seller}</p>
                    <p>Rs.{productItem.price}/-</p>
                    <div className='btn bn2'>
                    <a onClick={ () => addtocart(productItem)}>Add to cart</a>
                    </div>
                </div>
            </div>
            )
        })
    }
    </div>
  )
}

export default ProductList