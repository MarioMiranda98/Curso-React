import PropTypes from "prop-types";
import { useGetHeroes } from "../hooks/useGetHeroes";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const { heroes, isLoading } = useGetHeroes(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)
      )}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
