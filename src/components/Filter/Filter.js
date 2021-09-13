import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import * as contactsActions from "../../redux/contacts/contacts-actions";
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) =>
    dispatch(contactsActions.changeFilter(e.target.value.toLowerCase())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
