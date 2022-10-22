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

export { getBaseUrl, getToken, setToken, getWsUrl };
