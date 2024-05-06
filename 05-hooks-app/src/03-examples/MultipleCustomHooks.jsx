import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { increment, decrement, counter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Multiple Custom Hooks</h1>
      <hr />

      {isLoading ? <LoadingMessage /> :
        !hasError ?
        <PokemonCard 
          name={data?.name} 
          id={data?.id} 
          sprites={[
            data?.sprites.back_default,
            data?.sprites.back_shiny,
            data?.sprites.front_default,
            data?.sprites.front_shiny,
          ]}
        /> : null
      }
      {/* <pre>Pokemon Info: <br />{JSON.stringify(data, null, 2)}</pre> */}
      <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>
    </>
  );
}
