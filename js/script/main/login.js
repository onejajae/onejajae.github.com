var encryptedHTML = "/P2ou4GmzqUU38WOnNC1Ww==";

function login(){
  var key = document.getElementById("passwordForm").value;
  Cookies.set("loginKey", key, { domain: 'github.onejajae.net' });
  try{
    var decryptedHTML = GibberishAES.aesDecrypt(encryptedHTML, key);
    console.log(decryptedHTML);
  } catch(e) {
    console.log("error");
  }
}

function logout(){

}
