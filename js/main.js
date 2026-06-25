(function () {
  "use strict";

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const modal = document.getElementById("interestModal");
  const modalClose = document.getElementById("modalClose");
  const interestForm = document.getElementById("interestForm");
  const formSuccess = document.getElementById("formSuccess");

  const closeMenu = () => {
    navLinks.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || anchor.hasAttribute("data-modal-trigger")) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  const openModal = () => {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("[data-modal-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
      openModal();
    });
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  interestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(interestForm).entries());
    console.log("Outcomeering request:", data);

    interestForm.style.display = "none";
    formSuccess.classList.add("active");

    setTimeout(() => {
      closeModal();
      setTimeout(() => {
        interestForm.reset();
        interestForm.style.display = "";
        formSuccess.classList.remove("active");
      }, 220);
    }, 2500);
  });

  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
})();
