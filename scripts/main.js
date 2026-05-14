// Scroll para o topo ao clicar no logo
document.querySelector(".logo-text").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// SCROLL SUAVE DOS LINKS

const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// EXEMPLO FUTURO DE REQUISIÇÃO API

const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

async function loadSectionsSteps() {
  const stepsContainer = document.getElementById("steps-container");
  const response = await fetch("./sections/steps.html");
  const html = await response.text();
  stepsContainer.innerHTML = html;
}

async function loadCreateAccountSection() {
  const container = document.getElementById("create-account-container");
  const response = await fetch("./sections/create-account.html");
  const html = await response.text();
  container.innerHTML = html;
  if (typeof initializeCreateAccountForm === "function") {
    initializeCreateAccountForm();
  }
}

async function loadFaqSection() {
  const container = document.getElementById("faq-container");
  const response = await fetch("./sections/faq.html");
  const html = await response.text();
  container.innerHTML = html;
  if (typeof initializeFaq === "function") {
    initializeFaq();
  }
}

// Carregar ambas as seções ao iniciar
loadSectionsSteps();
loadFaqSection();
loadCreateAccountSection();
