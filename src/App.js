import logo from './logo.svg';
import ProductCard from './ProductCard/ProductCard';


function App() {
const productDetails1 =
 {
  productId : '1',
  productPic : 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  productName : 'shoes',
  Brand : 'Canvas',
  productDescription:'nice shoes' ,
  Price : '₹7,255',
  Rating: '4.8'
}
const productDetails2= {
  productId : '2',
  productPic : 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  productName : 'shoes',
  Brand : 'sneakers',
  productDescription:'Old style sport sneakers shoes hanging stock illustration',
  Price : '₹5,255',
  Rating: '4.4'
}
const productDetails3= {
  productId : '3',
  productPic : 
  'https://th.bing.com/th/id/R.3a0b901d32f2b6425741d3acb2667bf6?rik=%2bdMFGo4r7Tuc7g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f269227-shoes.jpg&ehk=IjvQ5zxMkPZN%2f7u%2fvMWR2%2fUfJROp6VPzNZkZfOR%2b4hE%3d&risl=&pid=ImgRaw&r=0',
  productName : 'shoes',
  Brand : 'Bata',
  productDescription:'This is good in fitting' ,
  Price : '₹1000',
  Rating: '4.5'
}
const productDetails4 = {
  productId : '4',
  productPic : 'https://rukminim1.flixcart.com/image/312/312/xif0q/computer/y/u/w/15iah7-gaming-laptop-lenovo-original-imagkwgynhhrynkc.jpeg?q=70',
  productName : 'Laptop',
  Brand : 'Lenovo',
  productDescription:'Lenovo IdeaPad Gaming 3 Intel Core i5' ,
  Price : '₹38,990',
  Rating: '5'
}
const productDetails5 = {
  productId : '5',
  productPic : 'https://rukminim1.flixcart.com/image/832/832/xif0q/jean/i/q/r/-original-imaghgxzjkc5pfx3.jpeg?q=70',
  productName : 'Jense',
  Brand : 'KILLER',
  productDescription:'Men Slim Fit Dark Blue Jeans' ,
  Price : '₹5,000',
  Rating: '4.6'
}






  return (
    <>
    <div className="App">
      <ProductCard 
      {...productDetails1}
      
      />
      <ProductCard 
      {...productDetails2}
     
      />
      <ProductCard 
      {...productDetails3}
      
      />
  
      <ProductCard 
      {...productDetails4}
      />
      <ProductCard 
      {...productDetails5}
      />
      </div>
    </>
  );
}

export default App;
     
   
      