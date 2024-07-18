import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { FormContext } from "../context/FormContextProvider";
import { IForm } from "../interfaces";
import { v4 as uuidv4 } from "uuid";
import SavedPopUp from "./SavedPopup";

export function FormItem(): ReactElement {
  const { addTodoToList, logSavedUsers } = useContext(FormContext);
  const [value, setValue] = useState("");
  const [authorVal, setAuthorValue] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [popUp, setPopUp] = useState(false);
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
    }, 2000);
  };
  logSavedUsers();

  return (
    <div className="page-container">
      <h1 className="main-heading">TRAINO TRIATHON </h1>
      <p className="text">
        Hej alla tränare och träningsentusiaster! Vi är glada att kunna välkomna
        er till Traino Triathlon den 16 augusti 2025. Oavsett om du är en
        erfaren triathlet eller nybörjare, så finns det något för alla i vårt
        spännande evenemang.
      </p>
      <p className="nowrap" style={{ marginInline: "40px" }}>
        <strong className="smallheading">Datum: </strong>&nbsp; 16 augusti 2025
        (lördag)
      </p>
      <div className="registration-container">
        <SavedPopUp popUp={popUp} />
        <h1
          className=" register"
          style={{ fontSize: "24px", border: "0 transparent" }}
        >
          Registrering{" "}
        </h1>

        <form className="form" onSubmit={handleOnSubmit}>
          <div className="inputs">
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
      <div className="flex-container">
        <div>
          <ul>
            <strong className="smallheading">Tävlingsalternativ:</strong>&nbsp;
            <li className="nowrap">
              <strong className="smallheading">Miniathlon: </strong>&nbsp;4 mil
              cykling, 1 km simning, 1 mil löpning.
            </li>
            <li className="nowrap">
              <strong className="smallheading">Athlon:</strong>&nbsp; 3 km
              simning, 17 mil cykling, 43 km löpning.{" "}
            </li>
            <li className="nowrap">
              Möjlighet att delta i en enskild gren för de som föredrar det.
            </li>
          </ul>

          <ul>
            <strong className="smallheading">Starttider:</strong>&nbsp;
            <li className="nowrap">
              <strong className="smallheading">Simning: </strong>&nbsp; A:
              06:00, B & C: 12:00
            </li>
            <li className="nowrap">
              <strong className="smallheading">Cykling:</strong>&nbsp; A: 06:30
              - 08:00, B: 12:30 - 14:00, D: 13:00{" "}
            </li>
            <li className="nowrap">
              <strong className="smallheading">Löpning:</strong>&nbsp; A: 13:00
              - 17:00, B: 14:30 - 16:00, E: 16:00
            </li>
          </ul>
          <ul>
            <strong className="smallheading">Mat och dryck stationer:</strong>
            &nbsp;
            <li className="nowrap">
              <strong className="smallheading">Simning: </strong>&nbsp;Dryck och
              bars vid målgång
            </li>
            <li className="nowrap">
              <strong className="smallheading">Cykling:</strong>&nbsp;Första
              stationen efter 2 mil, därefter varje 4 mil.
            </li>
            <li className="nowrap">
              <strong className="smallheading">Löpning:</strong>&nbsp;Varje mil
              (1, 2, 3) och vid målet.
            </li>
          </ul>
          <ul>
            <strong className="smallheading" style={{ marginTop: "3rem" }}>
              Voluntärer och logistik:
            </strong>
            &nbsp;
            <li className="nowrap width">
              Vi har 10 volontärer vid matstationer och 4 som kör bilar för att
              hämta upp de som ger upp.
            </li>
            <li className="nowrap">
              4 volontärer kommer att finnas på båtar för att assistera under
              simningen.
            </li>
            <li className="nowrap">
              Vi tillhandahåller armband/nummerlappar och påsar för att förvara
              deltagarnas saker.
            </li>
          </ul>
        </div>
        <div className="image-container">
          <span className="image"></span>
          <span className="image two"></span>
        </div>
      </div>
      <div className="flex-container">
        <p className="empathisetext">
          "Testa din fysiska förmåga på trainos Trainothalon"
        </p>

        <div className="image-container centermobile">
          <span
            className="image-main"
            style={{
              transform: "translateY(-0.25rem)",
              marginBottom: "1.25rem",
            }}
          ></span>
        </div>
      </div>
      <p className="text">
        <em style={{ marginBottom: "1.25rem" }}>
          Vi erbjuder också företagspaket för sponsorer som vill vara en del av
          detta fantastiska evenemang. Kontakta oss för mer information om hur
          ditt företag kan bidra och synas i samband med Traino Triathlon 2025.
        </em>
        Vi ser fram emot att se er där och hoppas på en dag fylld av utmaningar,
        gemenskap och glädje. Låt oss göra Traino Triathlon 2025 till ett
        minnesvärt evenemang!
      </p>
      <p className="nowrap regards">Vänliga hälsningar, </p>
      <p className="nowrap regards padding ">Traino Teamet</p>
    </div>
  );
}
