import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Mario",
    email: "mario@correo.com",
  });

  const { username, email } = formState;

  const onInputChange = (event) => {
    const value = event.target.value;
    const inputName = event.target.name;

    // switch(inputName) {
    //   case "username":
    //     setFormState({ ...formState, username: value });
    //     break;
    //   case "email":
    //     setFormState({ ...formState, email: value });
    //     break;
    //   default:
    //     return;
    // }

    setFormState({
      ...formState,
      [inputName]: value
    });
  } 

  useEffect(() => {
    console.log("Use effect");
  }, []);

  useEffect(() => {
    console.log("Form State Changed");
  }, [formState]);
  
  useEffect(() => {
    console.log("Email Changed");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input 
        type="text" 
        className="form-control" 
        placeholder="User Name" 
        name="username" 
        value={username}
        onChange={onInputChange}
      />
      { username == "Mario2" && <Message /> }
      <input 
        type="email" 
        className="form-control mt-3" 
        placeholder="mario@correo.com" 
        name="email" 
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}
