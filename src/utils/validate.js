export const validateForm = (name, email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(password);

  if (!isEmailValid) return "Please enter a valid email";
  if (!isPasswordValid) return "Please enter a valid password";

  if (name !== null) {
    const isNameValid = /^[A-Za-z]+( [A-Za-z]+)*$/.test(name);
    if (!isNameValid) return "Please enter a valid name";
  }

  return null;
};
