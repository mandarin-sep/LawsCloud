import React, {useEffect, useState} from "react";
import axios from "axios";
import {useRecoilValue, useRecoilState} from "recoil";
import {excelFilterState, pageState} from "../../../recoil/store";
import PageNationview from "./PageNationView";
const KEY = process.env.REACT_APP_API_KEY;
const BaseURL = `https://open.assembly.go.kr/portal/openapi/nzmimeepazxkubdpn?KEY=${KEY}&`;

const PageNationSession = ({searchFilter, category}) => {
  const [billSize, setBillSize] = useState(200);
  const [pageArray, setPageArray] = useState(0);
  const [addPage, setAddPage] = useState(0);
  const [page, setPage] = useRecoilState(pageState);
  const excelFilter = useRecoilValue(excelFilterState);
  const fetchData = async (page) => {
    let data = await axios
      .get(
        `${BaseURL}AGE=${category}&Type=json&pIndex=${page}&pSize=1000&BILL_NAME=${searchFilter}&&COMMITTEE=${excelFilter}`,
      )
      .then((res) => {
        let data = Math.ceil(res.data.nzmimeepazxkubdpn[1].row.length / 7);
        return data;
      })
      .catch((err) => console.error("호출 fail -", err.name));
    return data;
  };

  const getBillsData = (page = 1, dataSize = 0) => {
    fetchData(page).then((data) => {
      dataSize += data ? data : 0;
      if (!data) {
        setBillSize(dataSize);
        return data;
      } else if (400 < dataSize && dataSize < 500) {
        setBillSize(dataSize);
      }
      page += 1;
      getBillsData(page, dataSize);
    });
  };

  useEffect(() => {
    setPage(1);
    getBillsData();
  }, [searchFilter, category, excelFilter]);
  useEffect(() => {
    if (Math.ceil(billSize / 10) === Math.ceil(page / 10)) {
      setPageArray(billSize % 10 == 0 ? 10 : billSize % 10);
    } else {
      setPageArray(10);
    }
    setAddPage(parseInt((page - 1) / 10) * 10);
  }, [page, billSize]);
  return (
    <>
      <PageNationview page={page} pageArray={pageArray} addPage={addPage} setPage={setPage} billSize={billSize} />
    </>
  );
};

export default PageNationSession;
