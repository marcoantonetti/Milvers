import { Link } from "react-router-dom"
import { RenderContainer } from "../../views/product/RenderContainer"
import TemplateInfo from "../TemplateInfo"

export const Services = () => {
  return (
    <div>        
        {/* <RenderContainer/> */}
        <TemplateInfo
        title="Services"
        ifBtn={true}
        right = {true}
        text="Services"
      />
      <div className="services-container">
        <Link to={`/services/apc`}>
        <div className="div-service">
          <p>apc</p>
        </div>
        </Link>
        <Link to={`/services/bim`}>
        <div className="div-service">
          <p>bim</p>
        </div>
        </Link>
        <Link to={`/services/hev`}>
        <div className="div-service">
          <p>hev</p>
        </div>
        </Link>
      </div>
</div>

  )
}
