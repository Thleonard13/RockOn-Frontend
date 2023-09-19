import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components and pages imports
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/Blog/SingleBlog/SingleBlog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import SProductPage from './pages/SProduct/SProductPage';
import CartPage from './pages/Cart/CartPage';
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/product/:id" element={<SProductPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogpost/:id' element={<SingleBlog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
