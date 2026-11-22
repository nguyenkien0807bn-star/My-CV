const form = document.getElementById("contact-form");
const fields = form.querySelectorAll("input, textarea");

function validateField(field) {
  const valid = field.checkValidity();

  field.classList.remove("is-valid", "is-invalid");

  if (valid) {
    field.classList.add("is-valid");
  } else {
    field.classList.add("is-invalid");
  }

  return valid;
}

// Kiểm tra khi nhập
fields.forEach(field => {
  field.addEventListener("input", () => {
    validateField(field);
  });
});

// Kiểm tra khi gửi
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let allValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      allValid = false;
    }
  });

  const status = document.getElementById("form-status");

  if (allValid) {
    status.textContent = "Thông tin hợp lệ! Cảm ơn bạn.";
    status.style.color = "#16a34a";
  } else {
    status.textContent = "Vui lòng kiểm tra lại thông tin!";
    status.style.color = "#dc2626";
  }
});