import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {StyledWrap} from "../style/StyledBills";
import BillsList from "../components/BillList/BillsList";
import SearchBar from "../components/BillList/SearchBar";
import PageNationSession from "../components/BillList/PageNationSession";
import {useBillList} from "../hooks/useBillList";

const Bills = () => {
  const location = useLocation();
  if (!location.state) {
    location.state = {
      inputValue: "",
      age: 21,
    };
  }
  const [searchFilter, setSearchFilter] = useState(location.state.inputValue);
  const [category, setCategory] = useState(String(location.state.age));

  useBillList({searchFilter, category});
  return (
    <StyledWrap>
      <main>
        <SearchBar
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          category={category}
          setCategory={setCategory}
        />
        <BillsList />
      </main>
      <footer>
        <PageNationSession searchFilter={searchFilter} category={category} />
      </footer>
    </StyledWrap>
  );
};

export default Bills;
