export const ExitArrow = (props) => {
  const { close } = props;

  return (
    <button
      type="button"
      className="exit-button transparent pos-abs top-right"
      onClick={() => close()}
    >
      <i className="fa-solid fa-circle-xmark fa-2xl milvers-blue"></i>
    </button>
  );
};
