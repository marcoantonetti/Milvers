import { useEffect } from "react";
import animationEnd from "../scripts/animationEnd";

const LandingTitle = () => {
  useEffect(() => {
    animationEnd();
  }, []);
  return (
    <>
      <div className="container retract more-delay bg-black">
        <h1 className="title2 white abs-center">
          Milvers - Luxury Arquitecture
        </h1>
      </div>
      <div className="container retract delay bg-gray">
      </div>
      <h1 className="title white abs-center">Milvers - Luxury Arquitecture</h1>
    </>
  );
};

export default LandingTitle;
