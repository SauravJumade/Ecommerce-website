import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/sign/Signin';
import Signup from './components/sign/Signup';
import Cart from './components/shopping_cart/Cart';
import Buy from './components/buynow.js/Buy';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Newnav />
    <Routes>
      <Route path='/' element={<Maincomp />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/getproductsone/:id' element={<Cart />} />
      <Route path='/buynow' element={<Buy />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
