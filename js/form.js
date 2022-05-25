/* Validación de un formulario con Javascript */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form").addEventListener('submit', validarForm);
});

function validarForm(e) {
  e.preventDefault();
  /* Valido el nombre */
  var name = document.getElementById('name').value;
  if (name.length == 0) {
    alert('Debe escribir su nombre para continuar.');
    return;
  }
  /* Valido el mail */
  var mail = document.getElementById('mail').value;
  if (mail.length == 0) {
    alert('Debe escribir su mail para continuar.');
    return;
  }
  /* Envío un alert de confirmación*/
  alert("Gracias por enviar el formulario. Nos contactaremos a la brevedad.");
  this.submit();
}
