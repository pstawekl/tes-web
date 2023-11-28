import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuNavbar from './Components/MenuNavbar';
import ScrollButton from './Components/ScrollButton';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Offer from './Views/Offer';
import Certificates from './Views/Certificates';
import Contact from './Views/Contact';

const App = () => {
    return (
        <div className="tes-app">
            <MenuNavbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
            <Footer />
            <ScrollButton />
        </div>
    )
}

export default App;