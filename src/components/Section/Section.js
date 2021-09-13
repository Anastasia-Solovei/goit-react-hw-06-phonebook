import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={s.Section}>
      <h2 className={s.SectionTitle}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
