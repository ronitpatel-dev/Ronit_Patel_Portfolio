

// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop form from reloading the page

    const email = form.querySelector('input[type="email"]').value.trim();
    const name = form.querySelector('input[type="text"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Simple validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (name.length < 2) {
      alert("Name must be at least 2 characters long.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    // Simulate sending message
    alert("✅ Thank you, your message has been sent!");
    form.reset(); // Clear the form
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
