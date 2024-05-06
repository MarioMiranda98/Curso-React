import { useEffect, useState } from "react"

export const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    console.log("Message Mounted");
     const onMouseMove = (event) => {
      console.log(event);
      const x = event.x;
      const y = event.y;

      setCoords({x, y});
    }
     
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("Message unmounted");
      window.removeEventListener("mousemove", onMouseMove);
      setCoords({x: 0, y: 0});
    }
  }, []);

  return (
    <>
      <h3>Usuario Ya Existe</h3>
      { JSON.stringify(coords)   }
    </>
  )
}
