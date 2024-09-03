document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("fichaMedicaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
        let errorMessage = "";

        
        const rut = document.getElementById("rut").value;
        if (rut.trim() === "") {
            isValid = false;
            errorMessage += "El campo RUT es obligatorio.\n";
        }

        
        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "El correo electrónico no es válido.\n";
        }

        

        if (isValid) {
            alert("Formulario enviado correctamente.");  
            form.submit(); 
        } else {
            alert("Errores encontrados:\n" + errorMessage);
        }
    });
});