
/* todo cargado */
$(document).ready(function () {

    $("#formdate").submit(function () {
        return validarDatos();
    });
});


function validarDatos() {
    let question = confirm("¿Seguro desea enviar el formulario?");
    if (question) {

        /* obtener campos de los input  */
        let txtname = $("#txtname").val();
        let txtlastname = $("#txtlastname").val();
        let txtDNI = $("#txtDNI").val();
        let txtemail = $("#txtemail").val();
        let txttelf = $("#txttelf").val();
        let txtdirec = $("#txtdirec").val();
        let txtuser = $("#txtuser").val();
        let txtpassword = $("#password").val();
        let repeatpass = $("#repeatpassword").val();

        let correct = "no es aceptado.";

        /* validate name */
        if (txtname.length > 50 || txtname.length < 2) {
            alert("Su nombre " + correct);
            return false;
        }

        /* validate lastname */
        if (txtlastname.length > 50 || txtlastname.length < 4) {
            alert("Su apellido " + correct);
            return false;
        }

        /* validate DNI */
        if (txtDNI.length !== 8 || isNaN(txtDNI)) {
            alert("Su DNI " + correct);
            return false;
        }

        /* validate email */
        if (
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                txtemail
            ) === false
        ) {
            alert("Su correo electrónico no es válido");
            return false;
        }

        /* validate telephone */
        if (txttelf.length !== 9 || isNaN(txttelf)) {
            alert("Su Teléfono " + correct);
            return false;
        }

        /* validate direcction */
        if (txtdirec.length > 50 || txtdirec.length < 9) {
            alert("Escriba su dirección correctamente");
            return false;
        }

        /* validate user */
        if (txtuser.length > 10 || txtuser.length < 5) {
            alert("Su nombre de usuario " + correct);
            return false;
        }

        /* validate password */
        if (txtpassword !== repeatpass) {
            alert("Las contraseñas no coinciden");
            return false;
        }
    } else {
        return false;
    }
}

