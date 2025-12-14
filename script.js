// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CONTACT FORM VALIDATION
  ========================== */
  const form = document.querySelector("#contact form");
  const button = form.querySelector("button");

  // Inline message
  const msgBox = document.createElement("p");
  msgBox.style.marginTop = "15px";
  msgBox.style.fontWeight = "600";
  form.appendChild(msgBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const message = form.message.value.trim();

    msgBox.textContent = "";
    msgBox.style.color = "red";

    // Validation
    if (!validateEmail(email)) {
      msgBox.textContent = "❌ Enter a valid email address";
      return;
    }
    if (name.length < 2) {
      msgBox.textContent = "❌ Name must be at least 2 characters";
      return;
    }
    if (message.length < 10) {
      msgBox.textContent = "❌ Message must be at least 10 characters";
      return;
    }

    // Loading state
    button.textContent = "Sending...";
    button.disabled = true;

    // Simulate sending (replace with real API later)
    setTimeout(() => {
      msgBox.style.color = "green";
      msgBox.textContent = "✅ Message sent successfully!";
      form.reset();
      button.textContent = "Send";
      button.disabled = false;
    }, 1200);
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================== */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load

  /* =========================
     ACTIVE NAV LINK ON SCROLL
  ========================== */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const updateActiveNav = () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(a => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) a.classList.add("active");
    });
  };
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav(); // Trigger on load
});
