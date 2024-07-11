import NavBar from "./client/components/NavBar";
import TemplateInfo from "./client/components/TemplateInfo";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingTitle from "./client/components/LandingTitle";
import Footer from "./client/components/Footer";
import { RenderContainer } from "./client/views/product/RenderContainer";
import { LandingPage } from "./client/components/landingPage/LandingPage";
import { AboutUs } from "./client/components/aboutUs/AboutUs";
import { Services } from "./client/components/services/Services";
import { Apc } from "./client/components/services/APC/Apc";
import { Bim } from "./client/components/services/bim/Bim";
import { Hev } from "./client/components/services/hev/Hev";
import { Contact } from "./client/components/contact/Contact";


function App() {
  return (
    
    <Router>
    <div className="wallpaper">

      

 
    {/* <iframe className="bg-video"
        src="https://www.youtube.com/embed/_qqT9j0rzuk?autoplay=1&mute=1&controls=0&loop=1&playlist=_qqT9j0rzuk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
        </iframe>       */}
      
      {/* <LandingTitle /> */}
      <NavBar />
      <LandingTitle/>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services/apc" element={<Apc/>}/>
        <Route path="/services/bim" element={<Bim/>}/>
        <Route path="/services/hev" element={<Hev/>}/>
      </Routes>

      <div className="padding">
 


    </div>
      {/* <Footer/> */}
    </div>
    </Router>

  );
}

export default App;
