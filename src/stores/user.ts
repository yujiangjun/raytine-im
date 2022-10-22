import { defineStore } from "pinia";

const storeUser = defineStore("user", {
  state: () => ({
    id: 0,
    userName: "",
    password: "",
    sex: 0,
    age: 0,
    avatar: "",
    userCode: "",
    token: "",
  }),
  getters: {},
  actions: {},
});
export default storeUser;
