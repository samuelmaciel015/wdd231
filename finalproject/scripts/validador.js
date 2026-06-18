const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  value = value.substring(0, 10);

  if (value.length > 6) {
    value = value.replace(
      /^(\d{3})(\d{3})(\d{1,4})$/,
      "($1) $2-$3"
    );
  } else if (value.length > 3) {
    value = value.replace(
      /^(\d{3})(\d{1,3})$/,
      "($1) $2"
    );
  } else if (value.length > 0) {
    value = value.replace(
      /^(\d{1,3})$/,
      "($1"
    );
  }

  e.target.value = value;
});