import RoundBtn from "./buttons/roundBtn";

export default function TemplateInfo(props) {
  const { title, ifBtn, text, right } = props;

  return (
    
    <div className={`templateContainer width-100 ${right ? "flex-end" : "flex-start"}`}>
    <div className={"templateInfo width-40  height-80  flex-col center"}>
      <h2 className="template-title">{title}</h2>

      <div className="flex-col md-gap">
        <p>{text}</p>
        {ifBtn ? <RoundBtn name="Learn More" color={false} /> : null}
      </div>
    </div>
    </div>
  );
}
