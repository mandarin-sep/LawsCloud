import React from "react";
import PropTypes from "prop-types";
import {StyledWrapper} from "../../style/StyledYearSelect";

const YearSelect = ({year, setYear, firstYear, yearsNumber, size = 100}) => {
  const years = new Array(yearsNumber).fill(0).map((elem) => elem + firstYear++);

  const handleClick = ({target}) => {
    if (target.tagName !== "BUTTON") return;
    setYear(Number(target.value));
    target.parentElement.querySelectorAll("#year-button").forEach((elem) => (elem.className = ""));
    target.classList.add("selectedYear");
  };

  return (
    <StyledWrapper onClick={handleClick} size={size}>
      {years.map((elemYear) => (
        <button
          type="button"
          value={elemYear}
          className={year === elemYear ? "year-button selectedYear" : "year-button"}
          key={`${elemYear}-button`}>
          {elemYear}
        </button>
      ))}
    </StyledWrapper>
  );
};

YearSelect.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
  firstYear: PropTypes.number.isRequired,
  yearsNumber: PropTypes.number.isRequired,
  size: PropTypes.number,
};

export default YearSelect;
