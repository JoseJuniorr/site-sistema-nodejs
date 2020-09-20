function generateRandomPassword() {
  const chars = "abcdefghijklmnopqrstuvxz@123456789ABCDEFGHIJKLMNOPQRSTUVXZ";
  var pass = "";

  for (var i = 0; i < 10; i++) pass += chars.charAt(Math.random() * 61);
  return pass;
}

module.exports = { generateRandomPassword };
