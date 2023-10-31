import React from "react";
import searchImg from "../../../assests/images/search-icon.svg";

import {StyledSearchArea} from "../../../style/StyledSearchBar";

const congressman_nums = [16, 17, 18, 19, 20, 21];

const SearchView = ({category, changeHandler, searchValue, selectHandler, onCheckEnter, clickHandler}) => {
  return (
    <>
      <StyledSearchArea>
        <select value={category} onChange={(e) => selectHandler(e)}>
          {congressman_nums.map((val) => (
            <option key={val} value={val}>
              {val}대{" "}
            </option>
          ))}
        </select>
        <input
          placeholder="의안명 검색"
          value={searchValue}
          onChange={(e) => changeHandler(e)}
          onKeyPress={onCheckEnter}
        />
        <button onClick={clickHandler}>
          <img src={searchImg} alt="검색 이미지" />
        </button>
      </StyledSearchArea>
    </>
  );
};

export default SearchView;
