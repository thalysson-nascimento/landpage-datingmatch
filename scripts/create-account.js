function initializeCreateAccountForm() {
  const nameInput = document.getElementById("name");

  const emailInput = document.getElementById("email");

  const passwordInput = document.getElementById("password");

  const createAccountButton = document.getElementById("createAccountButton");

  function validateForm() {
    const isNameValid = nameInput.value.trim() !== "";

    const isEmailValid = emailInput.value.trim() !== "";

    const isPasswordValid = passwordInput.value.trim() !== "";

    const isFormValid = isNameValid && isEmailValid && isPasswordValid;

    createAccountButton.disabled = !isFormValid;
  }

  nameInput.addEventListener("input", validateForm);

  emailInput.addEventListener("input", validateForm);

  passwordInput.addEventListener("input", validateForm);

  document
    .getElementById("createAccountForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const payload = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log(payload);
    });
}
