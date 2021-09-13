import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  const filterInputId = uuidv4();

  return (
    <div className={s.InputOverlay}>
      <label htmlFor={filterInputId} className={s.FilterLabel}>
        Find contacts by name
      </label>
      <input
        className={s.FilterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        id={filterInputId}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
