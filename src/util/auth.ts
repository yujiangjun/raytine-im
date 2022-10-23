import type { Account } from "@/types/friends";

function getBaseUrl() {
  return "http://localhost:8080/";
}

function getWsUrl() {
  return "ws://localhost:9999/websocket";
}
function getToken() {
  return sessionStorage.getItem("token");
}
function setToken(token: string) {
  sessionStorage.setItem("token", token);
}
function saveUserInfo(account: Account) {
  sessionStorage.setItem("user", JSON.stringify(account));
}
function getUserInfo(): Account {
  return JSON.parse(sessionStorage.getItem("user") || "");
}
export { getBaseUrl, getToken, setToken, getWsUrl, saveUserInfo, getUserInfo };
