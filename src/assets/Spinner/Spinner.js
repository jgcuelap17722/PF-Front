import React, { useEffect, useState } from "react";
import s from '../../css/Spinner.module.css'

const Spinner = ({ message }) => {

  const [display, setDisplay] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setDisplay(false)
    }, 5000)
  }, [])


  return (
    <div className={s.spinnerContainer}>
      {
        display
          ? <div className={s.spinner}></div>
          : <p>{message}</p>
      }
    </div>
  );
};

export default Spinner;