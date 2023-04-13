const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

function handleGetFormData() {
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const emailInput = document.getElementById('email');
  const zipCodeInput = document.getElementById('zip-code');
  const statusInput = document.getElementById('status');
  
  const formData = {
    name: nameInput.value,
    city: cityInput.value,
    email: emailInput.value,
    zipCode: zipCodeInput.value,
    status: statusInput.checked
  };
  
  return formData;
}

function isNumber(input) {
  return /^\d+$/.test(input);
}

function checkboxIsChecked() {
  const statusInput = document.getElementById('status');
  return statusInput.checked;
}

function validateFormData(formData) {
  if (
    formData != null &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked(formData.status)
  ) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  event.preventDefault();
  const props = handleGetFormData();
  const hasil = validateFormData(props);
  if (hasil == false) {
    document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
  } else {
    return hasil;
  }
}



