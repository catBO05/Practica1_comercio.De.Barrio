const container = document.querySelector('.cont');
const registerbtn = document.querySelector('.register-boton');
const loginbtn = document.querySelector('.login-boton');

if (container && registerbtn && loginbtn) {
    registerbtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginbtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
}

// Ir a home
document.addEventListener("DOMContentLoaded", () => {

  // LOGIN
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input");
    let valido = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valido = false;
      }
    });

    if (valido) {
      window.location.href = "home.html";
    } else {
      alert("Completa todos los campos correctamente");
    }
  });

  // REGISTER
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input");
    let valido = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valido = false;
      }
    });

    if (valido) {
      window.location.href = "home.html";
    } else {
      alert("Completa todos los campos correctamente");
    }
  });

});