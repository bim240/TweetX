const verifySignupData = (name, email, password, repassword) => {
  let newRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  switch (false) {
    case name:
      return "Name can't be empty";
    case name.length > 6:
      return "Name should atleast be 6 character";
    case newRegex.test(email):
      return "Please Enter a valid  email";
    case password.length > 6:
      return "Password should have atleast 6 character";
    case password === repassword:
      return "Entered passowrd doesn't match";
    default:
      return false;
  }
};

export default verifySignupData;
