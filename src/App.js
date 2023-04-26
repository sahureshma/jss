import logo from './logo.svg';
//import ProductCard from './ProductCard/ProductCard';


function App() {
const productDetails =[
 {
  productId : '1',
  productPic : 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  productName : 'shoes',
  Brand : 'Canvas',
  productDescription:'nice shoes' ,
  Price : '₹7,255',
  Rating: '4.8'
},
  {
  productId : '2',
  productPic : 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  productName : 'shoes',
  Brand : 'sneakers',
  productDescription:'Old style sport sneakers shoes hanging stock illustration',
  Price : '₹5,255',
  Rating: '4.4'
},
    {
  productId : '3',
  productPic : 
  'https://th.bing.com/th/id/R.3a0b901d32f2b6425741d3acb2667bf6?rik=%2bdMFGo4r7Tuc7g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f269227-shoes.jpg&ehk=IjvQ5zxMkPZN%2f7u%2fvMWR2%2fUfJROp6VPzNZkZfOR%2b4hE%3d&risl=&pid=ImgRaw&r=0',
  productName : 'shoes',
  Brand : 'Bata',
  productDescription:'This is good in fitting' ,
  Price : '₹1000',
  Rating: '4.5'
}]






  return (
    <>
     
    {
      productDetails.map((data)=>
      <div className='Css'>
      <img style={{width2:'200px',height:'100px'}} src={data.productPic}/>
      <div>{data.productId}</div>
      <h3>{data.productName}</h3>  
      <h4>{data.Brand}</h4>
      <h4>{data.Price}</h4>
      <p>{data.productDescription}</p>
      <h3>{data.Rating}</h3>
      <button style={{backgroundColor:'rgb(25, 186, 30)',width:'200px',height:'60px'}}>ADD TO CART</button>
      </div>
      )
      },
    
  </>
    );
  }
  
  export default App;
  //list