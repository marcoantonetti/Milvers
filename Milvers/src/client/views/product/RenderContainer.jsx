import { useState } from "react";
import { RenderArrows } from "./RenderArrows";
import { RenderDetail } from "./RenderDetail";
import { ExitArrow } from "../../components/buttons/ExitArrow";

export const RenderContainer = () => {

  const [display, setDisplay] = useState(true)

  const displayToggle = () => {
    console.log("hola")
    setDisplay(!display)
  }

  return (
    <div className=" pos-relative render-container width-100">      
      <div className="render-wallpaper pos-relative width-100">
        { display ? <RenderArrows display={displayToggle}/> : <></>}
      </div>
       :
       <div className={display ? "hide" :"pos-abs full-screen render-detail-container" }  >
        <ExitArrow close={displayToggle}/>
        <RenderDetail/>
        </div>
    </div>
  );
};
