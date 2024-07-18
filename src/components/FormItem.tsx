import {
  FormEventHandler,
  MutableRefObject,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { FormContext } from "../context/FormContextProvider";
import { IForm } from "../interfaces";
import { v4 as uuidv4 } from "uuid";
import { useRef, useCallback } from "react";
import SavedPopUp from "./SavedPopup";

export function FormItem(): ReactElement {
  const { addTodoToList, logSavedUsers } = useContext(FormContext);
  const [value, setValue] = useState("");
  const [authorVal, setAuthorValue] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newItem: IForm = {
      id: uuidv4(),
      firstname: value,
      lastname: authorVal,
      email: email,
      details: details,
      timeStamp: new Date().toLocaleTimeString(),
    };
    addTodoToList(newItem);
    setValue("");
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
  };
  logSavedUsers();

  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current.play()) {
      playerRef.current.play();
    }
     playerRef.current.play();

  }, []);
 
  return (
    <div className="page-container">
      <div className="video">
        <video
          width="100%"
          height="100%"
          ref={playerRef}
          autoPlay={true}
          muted={true}
          onPause={() => setIsPlaying(true)}
          loop={true}
          playsInline={true}
        >
          <source
            src="https://traino.nu/app/assets/bg800.mp4"
            type="video/mp4"
          />
          <source
            src="https://traino.nu/app/assets/bg800.webp"
            type="video/webp"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="main-heading">TRAINO TRIATHON </h1>
      <p className="text">
        Hej alla tränare och träningsentusiaster! Vi är glada att kunna välkomna
        er till Traino Triathlon den 16 augusti 2025. Oavsett om du är en
        erfaren triathlet eller nybörjare, så finns det något för alla i vårt
        spännande evenemang.
      </p>
      <p
        className="nowrap"
        style={{ marginInline: "1.25rem", transform: "translateY(-1.25rem)" }}
      >
        <strong className="smallheading">Datum: </strong>&nbsp; 16 augusti 2025
        (lördag)
      </p>
      <div className="flex-container">
        <div className="registration-container">
          <SavedPopUp popUp={popUp} />
          <h1
            className="register"
            style={{ fontSize: "24px", border: "0 transparent" }}
          >
            Registrering
          </h1>

          <form className="form" onSubmit={handleOnSubmit}>
            <div className="inputs">
              <div
                className="row-inputs"
                style={{ display: "flex", gap: "1.25rem" }}
              >
                <input
                  onChange={(event) => setValue(event.target.value)}
                  className="author"
                  type="text"
                  placeholder="Förnamn"
                />
                <input
                  onChange={(event) => setAuthorValue(event.target.value)}
                  className=" author"
                  type="text"
                  placeholder="Efternamn"
                />
              </div>
              <input
                onChange={(event) => setEmail(event.target.value)}
                className="author"
                type="text"
                placeholder="Email"
              />
              <textarea
                onChange={(event) => setDetails(event.target.value)}
                className="addItem author"
                placeholder="Övrig information"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary"
              onClick={() => handleOnSubmit}
            >
              Spara
            </button>
          </form>
        </div>
      </div>
      <div className="flex-container">
        <p className="empathisetext">
          "Testa din fysiska förmåga på Traino Triathalon!"
        </p>
      </div>
      <strong className="smallheading" style={{ marginInline: "1.25rem" }}>
        Sponsorer
      </strong>
      <p className="text">
        <em style={{ marginBottom: "1.25rem" }}>
          Vi erbjuder också företagspaket för sponsorer som vill vara en del av
          detta fantastiska evenemang. Kontakta oss för mer information om hur
          ditt företag kan bidra och synas i samband med Traino Triathlon 2025.
        </em>
        <strong className="smallheading">Traino Triathlon 2025</strong>
        Vi ser fram emot att se er där och hoppas på en dag fylld av utmaningar,
        gemenskap och glädje. Låt oss göra Traino Triathlon 2025 till ett
        minnesvärt evenemang!
      </p>
      <p
        className="nowrap regards"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Vänliga hälsningar,{" "}
      </p>
      <p
        className="nowrap regards padding "
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Traino Teamet
      </p>
    </div>
  );
}
