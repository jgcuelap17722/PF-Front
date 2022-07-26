import React from "react";
import s from '../../css/Spinner.module.css'

const Spinner = () => {
  return (
    <div className={s.spinnerContainer}>
      <div className={s.spinner}>
      </div>
    </div>
  );
};

export default Spinner;