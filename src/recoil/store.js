import {atom} from "recoil";

export const userIp = atom({
  key: "userIp",
  default: "",
});

export const userLikeState = atom({
  key: "userLikeState",
  default: "false",
});

export const billListState = atom({
  key: "billList",
  default: [],
});
export const pageState = atom({
  key: "page",
  default: 1,
});
export const excelFilterState = atom({
  key: "excelFilter",
  default: "전체",
});
export const billSizeState = atom({
  key: "billSize",
  default: 0,
});

export const modalState = atom({
  key: "modalState",
  default: false,
});
