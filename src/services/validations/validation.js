const validatePassword = (password) => {
  const validator = new RegExp('((?=.*\\d)(?=.*[a-zA-Z])(?=.*[@#$%*!]))');
  return validator.test(password);
};

export default validatePassword;
