import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({id, name, sprites = []}) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });
  
  useLayoutEffect(() => {
    // console.log(h2Ref.current);
    // console.log(h2Ref.current.getBoundingClientRect());

    const {width, height} = h2Ref.current.getBoundingClientRect();
    setBoxSize({width, height})
  }, [id, name]);

  return (
    <section style={{ height: 200 }}>
      <h2 ref={h2Ref} className="text-capitalize">#{id} - { name }</h2>
      <div>
        {
          sprites.map(item => item ? 
            <img key={item} src={item} alt={item}/>
            : null)
        }
      </div>
      {/* <code>{JSON.stringify(boxSize)}</code> */}
    </section>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired
};