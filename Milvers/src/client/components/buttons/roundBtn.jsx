
export default function RoundBtn(props) {

    const {name,color} = props

  return (
    <button className={`round-btn ${color ? "color-normal" : "color-inverted"}`}>{name}</button>
  )
}
