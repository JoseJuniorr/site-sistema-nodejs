const ADMIN_PROFILE = "2";

function isAdmin(profile) {
  return profile === ADMIN_PROFILE;
}

module.exports = (req) => {
  const user = req.user;
  if (!user) return false;

  const profile = user.profile;
  const originalUrl = req.originalUrl;
  const method = req.method; //GET, POST, EDIT

  //   switch (originalUrl) {
  //     case "/":
  //       return true;
  //   }
};
