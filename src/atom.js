import { atom } from "recoil";

const item = atom({
  key: "item",
  default: {
    name: "",
    done: false,
  },
});

export { item };
