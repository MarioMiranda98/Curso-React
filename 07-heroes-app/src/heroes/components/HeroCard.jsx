import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  const CharactesByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return <></>;
    return <p>{characters}</p>;
  };

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutter">
          <div className="col-4 animate__animated animate__fadeIn">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactesByHero characters={characters} alter_ego={alter_ego} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <p className="card-text">{publisher}</p>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
