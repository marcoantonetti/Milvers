import { ArrowButton } from "../../components/buttons/ArrowButton"

export const RenderArrows = (props) => {

  const {display} = props

  return (
          <ul className="arrow-button-list">
            <li className="pos-abs pos1"><ArrowButton displayRender = {display}/></li>
            <li className="pos-abs pos2"><ArrowButton displayRender = {display}/></li>
            <li className="pos-abs pos3"><ArrowButton displayRender = {display}/></li>
            <li className="pos-abs pos4"><ArrowButton displayRender = {display}/></li>
            <li className="pos-abs pos5"><ArrowButton displayRender = {display}/></li>
            </ul>            
  )
}
