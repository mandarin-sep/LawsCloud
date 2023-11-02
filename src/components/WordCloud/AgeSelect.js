import React from "react";
import PropTypes from "prop-types";
import StyledWrapper from "../../style/StyledAgeSelect";

const AgeSelect = ({age, setAge, setYear, agesAndYears, size = 100}) => {
  const handleChange = ({target: {value}}) => {
    setAge(Number(value));
    setYear(Number(agesAndYears[value].firstYear));
  };
  const ages = [];
  for (const key in agesAndYears) {
    if (Object.hasOwnProperty.call(agesAndYears, key)) {
      ages.push(key);
    }
  }

  return (
    <StyledWrapper className="age-select" size={size}>
      <div className="text">제</div>
      <select value={age} onChange={handleChange} aria-label="기수 선택">
        {ages.map((elem) => (
          <option value={elem} key={`${elem}th`}>
            {elem}
          </option>
        ))}
      </select>
      <div>대 국회의원들의 생각은?</div>
    </StyledWrapper>
  );
};

AgeSelect.propTypes = {
  age: PropTypes.number.isRequired,
  setAge: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  agesAndYears: PropTypes.object.isRequired,
  size: PropTypes.number,
};

export default AgeSelect;
