import { atom } from "recoil";

const itemState = atom({
  key: "items",
  default: [],
});

export { itemState };
