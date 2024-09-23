export const Validate = (email, password) => {
  let isEmailValid = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
  let isPasswordValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
