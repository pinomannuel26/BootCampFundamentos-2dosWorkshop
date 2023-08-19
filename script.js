const limpiarDatos =() =>{
  
  document.getElementById("firsName").value = '';
  document.getElementById("LastName").value = '';
  document.getElementById("email").value= '';
  document.getElementById("password").value= '';


};

/*CAPTURAR DATOS*/
const formularios = document.querySelector("form");
let usuarios= [];

const capturarDatos =() => {
  const nombre = document.getElementById("firsName").value;
  const apellidos = document.getElementById("LastName").value;
  const email = document.getElementById("email").value;
  const contraseñia = document.getElementById("password").value;

  let registro = {nombre, apellidos, email, contraseñia};
  usuarios.push(registro);
  localStorage.setItem("usuarios", JSON.stringify(usuarios)); /*stringify parse de obj json a string y asi se pueda trabajar en js */
  Swal.fire({
    title: "Registro exitoso",
    icon: 'success'
  });
 
 
};

/*VALIDACIONES */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')
      }
     else{
        event.preventDefault();
        event.stopPropagation();
        capturarDatos();
        formularios.reset();
        form.classList.remove('was-validated')
      }
      
      
    }, false)
  })
})()




