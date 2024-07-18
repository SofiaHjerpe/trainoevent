import { createContext, ReactElement, useEffect, useState } from "react";
import { IForm } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

interface IContext {
  allPerticipators: IForm[];
  deleteTodo: (todoId: string) => void;
  addTodoToList: (newItem: IForm) => void;
  logSavedUsers: () => void;
}

interface IFormContextProviderProps {
  children: ReactElement;
}

export const FormContext = createContext({} as IContext);

export function FormContextProvider({
  children,
}: IFormContextProviderProps): ReactElement {
  const [allPerticipators, setPerticipator] = useState<IForm[]>([
    {
      id: uuidv4(),
      firstname: "send product",
      lastname: "Sofia",
      email: "test@live.se",
      details: "lorem ipsum dolor sit amet",
      timeStamp: "2024-03-04 14:39",
    },
    {
      id: uuidv4(),
      firstname: "send product",
      lastname: "Sofia",
      email: "test@live.se",
      details: "lorem ipsum dolor sit amet",
      timeStamp: "2024-03-04 14:39",
    },
  ]);

  const addTodoToList = (newItem: IForm): void => {
    const updatedallPerticipators = [newItem, ...allPerticipators];
    setPerticipator(updatedallPerticipators);
    localStorage.setItem(
      "allRegisterdUsers",
      JSON.stringify([newItem, ...allPerticipators])
    );
  };
  function processFormData(data: string) {
    if (data) {
      try {
        const formsArray: IForm[] = JSON.parse(data);
        formsArray.forEach((form) => {
          console.log(
            `Id: ${form.id}, Name: ${form.firstname}, Second name: ${form.lastname}, Email: ${form.email}, Time: ${form.timeStamp}, Details: ${form.details}`
          );
        });
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    } else {
      console.log("No data found in localStorage");
    }
  }
  // Använd useEffect för att läsa från localStorage när allPerticipators ändras
  useEffect(() => {
    const storedData = localStorage.getItem("allRegisterdUsers");
    if (storedData) {
      processFormData(storedData);
    }
  }, [allPerticipators]);

  const logSavedUsers = () => {
    console.log(localStorage.getItem("allRegisterdUsers"));
  };
  localStorage.setItem;
  const deleteTodo = (todoId: string): void => {
    const updatedArray = allPerticipators.filter((todo) => todo.id !== todoId);
    setPerticipator(updatedArray);
  };

  const values: IContext = {
    deleteTodo,
    allPerticipators,
    addTodoToList,
    logSavedUsers,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
