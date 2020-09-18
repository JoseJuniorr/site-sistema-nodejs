const { request } = require("express");

const ADMIN_PROFILE = "2";

function isAdmin(profile) {
  return profile === ADMIN_PROFILE;
}

module.exports = (request) => {
  const user = request.user;
  if (!user) return false;

  const profile = user.profile;
  const originalUrl = request.originalUrl;
  const method = request.method; //GET, POST, EDIT

//   switch (originalUrl) {
//     case "/":
//       return true;
//   }
};
