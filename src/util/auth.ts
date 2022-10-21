function getBaseUrl() {
  return "http://localhost:8080/";
}

function getToken() {
  return localStorage.getItem("token");
}
function setToken(token: string) {
  localStorage.setItem("token", token);
}

export { getBaseUrl, getToken, setToken };
