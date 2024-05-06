import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onSetFocus = () => {
    console.log(inputRef);
    inputRef.current.value = "Aqui";
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input type="text" placeholder="Ingrese nombre" className="form-control" ref={inputRef}/>
      <button className="btn btn-primary mt-2" onClick={onSetFocus}>Set Focus</button>
    </>
  )
}
