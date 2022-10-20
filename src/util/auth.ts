function getBaseUrl() {
  return "http://localhost:8889/";
}

function getToken() {
  return localStorage.getItem("token");
}
function setToken(token: string) {
  localStorage.setItem("token", token);
}

export { getBaseUrl, getToken, setToken };
