import './index.css'
import './App.css';
import { Header } from './components/Header';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const[productDetails,setproductDetails]=useState(JSON.parse(localStorage.getItem("Products")) || [{name:'Sony Wh-Ch510 Bluetooth Wireless',price:'$149',id:1,img:'https://shopmatecr-ul.netlify.app/assets/images/1001.png',cart:true},
    {name:'boAt Rockerz 450',price:'$49',id:2,img:'https://shopmatecr-ul.netlify.app/assets/images/1002.png',cart:true},
    {name:'JBL Tune 760NC',price:'$179',id:3,img:'https://shopmatecr-ul.netlify.app/assets/images/1003.png',cart:true},
    {name:'Logitech H111 Wired',price:'$39',id:4,img:'https://shopmatecr-ul.netlify.app/assets/images/1004.png',cart:true},
    {name:'APPLE Airpods Max Bluetooth Headset',price:'$199',id:5,img:'https://shopmatecr-ul.netlify.app/assets/images/1005.png',cart:true},
    {name:'ZEBRONICS Zeb-Thunder Wired',price:'$29',id:6,img:'https://shopmatecr-ul.netlify.app/assets/images/1006.png',cart:true}])
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('Count'); 
    if (savedCount) {
      try {
        return JSON.parse(savedCount); 
      } catch (error) {
        console.error("Failed to parse count from localStorage:", error);
        localStorage.removeItem('Count'); 
      }
    }
    return 0; 
  });
  useEffect(() => {
    localStorage.setItem("Count", JSON.stringify(count)); 
  }, [count]);
  return (
   <>
      <Header count={count} setCount={setCount}/>
      <div className='dark:bg-darkbg'>
      <main>
      <Routes>
          <Route path="shop/cart" element={<Cart productDetails={productDetails} setproductDetails={setproductDetails}/>}></Route>
          <Route path="*" element={<Home count={count} setCount={setCount} productDetails={productDetails} setproductDetails={setproductDetails}/>}></Route>
      </Routes>
      </main>
      <Footer/>
      </div>
    </>
  );
}

export default App;
