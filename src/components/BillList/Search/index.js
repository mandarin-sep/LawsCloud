import React, {useState} from "react";
import SearchView from "./SearchView";
import {useSetRecoilState} from "recoil";
import {pageState} from "../../../recoil/store";

const Search = ({searchFilter, setSearchFilter, setCategory, category}) => {
  const [searchValue, setSerchValue] = useState(searchFilter);
  const setPage = useSetRecoilState(pageState);

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      setSearchFilter(searchValue);
    }
  };

  const selectHandler = (e) => {
    setPage(1);
    setCategory(e.target.value);
  };

  const clickHandler = () => {
    setSearchFilter(searchValue);
    setPage(1);
  };

  const changeHandler = (e) => {
    setSerchValue(e.target.value);
  };
  return (
    <>
      <SearchView
        category={category}
        changeHandler={changeHandler}
        searchValue={searchValue}
        selectHandler={selectHandler}
        onCheckEnter={onCheckEnter}
        clickHandler={clickHandler}
      />
    </>
  );
};

export default Search;
