import NavBar from "./client/components/NavBar";
import TemplateInfo from "./client/components/TemplateInfo";
import LandingTitle from "./client/components/LandingTitle";
import Footer from "./client/components/Footer";
import { ArrowButton } from "./client/components/buttons/ArrowButton";
import { RenderContainer } from "./client/views/product/RenderContainer";


function App() {
  return (
    <div className="wallpaper">

 
    {/* <iframe className="bg-video"
        src="https://www.youtube.com/embed/_qqT9j0rzuk?autoplay=1&mute=1&controls=0&loop=1&playlist=_qqT9j0rzuk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
        </iframe>       */}
      
      <LandingTitle />
      <NavBar />

      <div className="padding">
      <TemplateInfo
        title="Drive your projects to new heights"
        ifBtn={true}
        right={false}
        text="Our approach is based on applying all our experience to be your BIM Partner, saving you time, effort and money."
        />
        <RenderContainer/>
            <TemplateInfo
        title="Welcome to Blend"
        ifBtn={true}
        right={false}
        text="We are an organization founded  by four partners based in the US and Argentina, each one with more than 20 years of international experience in the AEC industry. Meet us in this video."
      />
            <TemplateInfo
        title="Drive your projects to new heights"
        ifBtn={true}
        right = {true}
        text="Our approach is based on applying all our experience to be your BIM Partner, saving you time, effort and money."
      />


    </div>
      <Footer/>
    </div>
  );
}

export default App;
