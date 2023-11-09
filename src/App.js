
      
import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';

function App() {
  const[product] = useState([
    {
    url:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=70',
    name:'Amplified runner M Running Shoes For Men',
    seller:'Reebok',
    price: 9999
  },
  {
    url:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/w/b/6-la7458-6-layasa-white-original-imaghk9hwxbzejdw.jpeg?q=70',
    name:'Energy streak M Casuals For Men',
    seller:'Nike',
    price:29999
  },
  {
  url:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/f/e/n/9-white-leaf-urbanbox-white-black-original-imagp8qhhpydntgx.jpeg?q=70',
  name:'Trendy & Stylish Loafers For Men',
  seller:'Wild-craft',
  price:3999
  },
  {
    url:'https://rukminim2.flixcart.com/image/832/832/kd4uj680/shoe/n/w/r/mrj1438-7-aadi-black-original-imafu459ysxtxkxs.jpeg?q=70',
    name:'Volga NX Hiking & Trekking Shoes For Men',
    seller:'Bata',
    price:5999
    },
    {
    url:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/c/h/w/-original-imagtbtfzuvn6ucv.jpeg?q=70',
    name:'Synthetic Leather |Lightweight|Comfort',
    seller:'SparX',
    price:4999
    },
    {
      url:'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/0/2/m/-original-imagtbtevhkhz259.jpeg?q=70',
      name:'Birde Casual Loafers And Sneakers For Men Loafers For Men',
      seller:'Puma',
      price:5000
      },
      {
        url:'https://assets.ajio.com/medias/sys_master/root/20230215/wk56/63ecff42f997dde6f4aa9b99/-473Wx593H-464836810-black-MODEL.jpg',
        name:'Chronograph Watch with Metal Strap',
        seller:'CIGA DESIGN',
        price:33150
        },
        {
          url:'https://assets.ajio.com/medias/sys_master/root/20231019/l8C2/65303e45afa4cf41f54e9796/-473Wx593H-466723389-black-MODEL.jpg',
          name:'Analogue Watch with Metallic Strap-U12604G1',
          seller:'GUESS',
          price:50089
          },
])
const[cart,setcart]=useState([])
const[showcart,setshowcart] = useState(false)


const addtocart = (data) =>{
  setcart([...cart,{...data,quantity: 1}])

}

const handleShow = (value) => {
  setshowcart(value)

}
    
  return (
    
    <div >
     <Header count={cart.length}
     handleShow={handleShow}></Header>
     {
      showcart ?
      <CartList cart={cart}></CartList> :
      <ProductList product={product} addtocart={addtocart}></ProductList>   
      
     }
    </div>
  );
}

export default App;

  