const verifyLoginData = (email, password) => {
  let newRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  switch (false) {
    case newRegex.test(email):
      return "Please Enter a valid  email";
    case password.length > 6:
      return "Password should have atleast 6 character";
    default:
      return false;
  }
};

export default verifyLoginData;
