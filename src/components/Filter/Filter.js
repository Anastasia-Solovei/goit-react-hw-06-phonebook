import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import s from "./Filter.module.css";

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch(contactsActions.changeFilter);

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
        value={filterValue}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
        id={filterInputId}
      ></input>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
