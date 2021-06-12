import { atom } from "recoil";

const itemState = atom({
  key: "items",
  default: [],
});

const btnState = atom({
  key: "btn",
  default: "all",
});

export { itemState, btnState };
