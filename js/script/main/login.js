function login(){
  var key = document.getElementById("passwordForm").value;
  Cookies.set("loginKey", key, {domain: location.hostname});
  location.href = "/"
}

function logout(){
  Cookies.remove("loginKey", {domain: location.hostname});
  location.href = "/login"
}
