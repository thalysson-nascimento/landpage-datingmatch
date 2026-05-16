function initializeCreateAccountForm() {
  const nameInput = document.getElementById("name");

  const emailInput = document.getElementById("email");

  const passwordInput = document.getElementById("password");

  const createAccountButton = document.getElementById("createAccountButton");

  function validateForm() {
    const isNameValid = nameInput.value.trim() !== "";
    const isEmailValid = emailInput.value.trim() !== "";
    const isPasswordValid = passwordInput.value.trim().length >= 6;
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

      // Coletar informações de idioma do navegador
      const language = navigator.language || navigator.userLanguage || "en";
      let codeLanguage = "en";
      let countryLanguage = "US";
      if (language.includes("-")) {
        [codeLanguage, countryLanguage] = language.split("-");
      } else if (language.includes("_")) {
        [codeLanguage, countryLanguage] = language.split("_");
      } else {
        codeLanguage = language;
      }

      const payload = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        language,
        codeLanguage,
        countryLanguage,
      };

      // Spinner e bloqueio do botão
      createAccountButton.disabled = true;
      const originalContent = createAccountButton.innerHTML;
      createAccountButton.innerHTML = '<span class="spinner"></span>';

      try {
        const response = await fetch(
          "https://api-dropmessage-database-production.up.railway.app/auth/create-account",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );
        const data = await response.json();
        if (response.ok) {
          // Resetar formulário
          document.getElementById("createAccountForm").reset();
          validateForm();
          showNotification();
        } else {
          showNotification("error", data.message || "Error creating account");
        }
      } catch (e) {
        showNotification("error", "Network error. Try again later.");
      } finally {
        createAccountButton.innerHTML = originalContent;
        validateForm();
      }
    });

  // Notificação customizada
  function showNotification(
    type = "success",
    message = "Your account has been created successfully! You can now download the app to continue verification.",
  ) {
    let notification = document.getElementById("customNotification");
    if (!notification) {
      notification = document.createElement("div");
      notification.id = "customNotification";
      notification.className = "custom-notification";
      document.body.appendChild(notification);
    }
    notification.innerHTML = `
      <div class="notification-content">
        <div class="notification-title">Account Created!</div>
        <div class="notification-message">${message}</div>
        <a class="notification-link" href="https://play.google.com/store/apps/details?id=br.com.dropmessage&utm_source=latam_Med" target="_blank">Download on Google Play</a>
      </div>
    `;
    notification.classList.remove("hide");
    notification.classList.add(type === "success" ? "success" : "error");
    setTimeout(() => {
      notification.classList.add("hide");
    }, 10000);
  }
}
