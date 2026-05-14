function initializeFaq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");

    const body = item.querySelector(".faq-body");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((currentItem) => {
        currentItem.classList.remove("active");

        currentItem.querySelector(".faq-body").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");

        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}
