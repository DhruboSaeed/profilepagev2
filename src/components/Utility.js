export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Requried";
  }

  if (!values.password) {
    errors.password = "Password Requried";
  }
  return errors;
};
