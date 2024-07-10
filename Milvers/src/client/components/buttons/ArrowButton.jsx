import { useState } from "react";

export const ArrowButton = (props) => {
  const [hover, setHover] = useState(false);
  const {displayRender} = props

  return (
    <div className={`containerArrow circle centered ${hover ? "bg-milvers-lightblue" : "bg-transparent"}`}>
    <div className={`outter-layer circle centered ${hover ? "bg-white hover" : ""}`}>
      <div className={`middle-layer circle  centered ${hover ? "bg-white" : "bg-milvers-lightblue"}`}>
        <button
          type="button"
          className={`inner-layer circle centered  ${hover ? "pointer bg-white" : "bg-milvers-blue"}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick = {() => displayRender()}
        >
          <i className={`fa-solid fa-arrow-right fa-rotate-90 fa-lg ${hover ? "milvers-blue fa-2xl" : "fa-lg white"}`}></i>
        </button>
      </div>
    </div>
    </div>
  );
};
