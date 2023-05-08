var olho = document.getElementById('olho');
var input = document.getElementById('senha');

function togglePassword() {
  
    if (input.type === "password") {
      input.type = "text";
      olho.textContent = "visibility_off";
    } else {
      input.type = "password";
      olho.textContent = "visibility";
    }
}