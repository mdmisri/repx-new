import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import PrivacyPolicy from './policies/PrivacyPolicy';
import RefundPolicy from './policies/RefundPolicy';
import TermsOfService from './policies/TermsServices';
import ShippingPolicy from './policies/ShippingPolicy';
import FAQ from './pages/Faq';
import About from './pages/About';
import { RouteIcon } from 'lucide-react';
import LoginPage from './pages/LoginPage';




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/policies/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/policies/TermsServices" element={<TermsOfService />} />
        <Route path="/policies/ShippingPolicy" element={<ShippingPolicy />} />
        <Route path="/policies/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;