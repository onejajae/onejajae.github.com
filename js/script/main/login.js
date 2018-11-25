function login(){
  var key = document.getElementById("passwordForm").value;
  Cookies.set("loginKey", CryptoJS.SHA256(key).toString(), {domain: location.hostname});
  location.href = "/"
}

function logout(){
  Cookies.remove("loginKey", {domain: location.hostname});
  location.href = "/login"
}
