import "../components/SavedPopup.css";

const SavedPopUp = ({ popUp }: {popUp : Boolean}) => {
  let cName = "";
  popUp === false ? (cName = "popup") : (cName = "displayPopup");

  return (
    <div className={cName}>
      <span className="popupcheck"></span>
    </div>
  );
};

export default SavedPopUp;
