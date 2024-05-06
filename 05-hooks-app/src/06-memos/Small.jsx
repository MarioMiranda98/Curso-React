import { memo } from "react";
import PropTypes from "prop-types";

export const Small = memo(({value}) => {
  console.log("Me volví a dibujar :c")

  return (
    <small>{value}</small>
  )
});

Small.propTypes = {
  value: PropTypes.number.isRequired
};

Small.displayName = "Small";