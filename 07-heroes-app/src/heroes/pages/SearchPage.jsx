import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { useMemo } from "react";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchText.length <= 0) {
      navigate("");
      return;
    }

    navigate(`?q=${searchText}`);
  };

  const heroes = useMemo(() => getHeroesByName(q), [q]);

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q.length === 0 && (
            <div className="alert alert-primary">Search a Hero</div>
          )}
          {q.length > 0 && heroes.length === 0 && (
            <div className="alert alert-danger">
              No hero found with value: {q}
            </div>
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
