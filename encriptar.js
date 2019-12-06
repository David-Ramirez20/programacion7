 function SubmitsEncry() {

var txtPassWord = document.getElementById("folio").value.trim();

if (txtPassWord != "") {

var key = CryptoJS.enc.Utf8.parse('8080808080808080');
 var iv = CryptoJS.enc.Utf8.parse('8080808080808080');

var encryptedpassword = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(txtPassWord), key, 
 {
 keySize: 128 / 8,
 iv: iv,
 mode: CryptoJS.mode.CBC,
 padding: CryptoJS.pad.Pkcs7
 });

document.getElementById("folio").value = encryptedpassword;
 }
 } 
