function login(){
  var key = document.getElementById("passwordForm").value;

  Cookies.set("loginKey", key, { domain: 'github.onejajae.net' });
}

function logout(){
  Cookies.remove("loginKey");
  location.href = "/login"
}
