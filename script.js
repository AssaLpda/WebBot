
// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll('.container').forEach(container => {
        container.classList.toggle("dark-mode");
    });
    // Guardar el estado del modo oscuro en el almacenamiento local
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("darkModeToggle").classList.remove("fa-lightbulb");
        document.getElementById("darkModeToggle").classList.add("fa-moon");
    } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("darkModeToggle").classList.remove("fa-moon");
        document.getElementById("darkModeToggle").classList.add("fa-lightbulb");
    }
}

// Evento para el botón del modo oscuro
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Cargar el estado del modo oscuro al iniciar la página
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add("dark-mode");
    });
    document.getElementById("darkModeToggle").classList.remove("fa-lightbulb");
    document.getElementById("darkModeToggle").classList.add("fa-moon");
}

// Funcionalidad para el botón "SALUDO INICIAL"
document.getElementById("btn1").addEventListener("click", function() {
    var saludo = obtenerSaludo();
    copiarAlPortapapeles(saludo);
    mostrarAlerta("Saludo copiado al portapapeles:\n" + saludo);
});



    // Array de saludos posibles
    // Array de saludos posibles
    var saludosDia = [
        "¡Buenos días!",
        "¡Hola, buenos días!",
        "¡Hola, ¿cómo estás?",
        "¡Buen día!"
    ];

    var saludosNoche = [
        "¡Hola, como estas?",
        "¡Holaa, buenas noches! :)",
        "¡Buenas, como va?!",
        "¡Buenas noches!! "
    
    ];

    // Función para obtener el saludo según la hora del día
    function obtenerSaludo() {
        var hora = new Date().getHours();
        if (hora >= 6 && hora < 18) {
            var randomIndex = Math.floor(Math.random() * saludosDia.length);
            return saludosDia[randomIndex];
        } else {
            var randomIndex = Math.floor(Math.random() * saludosNoche.length);
            return saludosNoche[randomIndex];
        }
    }

    // Función para copiar texto al portapapeles
    function copiarAlPortapapeles(texto) {
        var textarea = document.createElement("textarea");
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // Asignar evento al botón "SALUDO INICIAL"
    document.getElementById("btn1").addEventListener("click", function() {
        var saludo = obtenerSaludo();
        copiarAlPortapapeles(saludo);
        alert("Saludo copiado al portapapeles:\n" + saludo);
    });

    // Array de mensajes de retiro
    var mensajesRetiro = [
       
        "Felicitaciones!!!🥳\nCompletame estos datos para pagar tu premio💸\n\nUsuario:\nNombre y Apellido del titular:\nCBU (no aceptamos alias)\nMonto a retirar:\n\nCuando este tu retiro te envió el COMPROBANTE",
        "¡Felicidades por tu premio! 🎉\nPor favor, completa los siguientes datos para procesar el pago:\n\nUsuario:\nNombre y Apellido del titular:\nCBU (no aceptamos alias):\nMonto a retirar:\n\nUna vez procesado tu retiro, te enviaré el comprobante correspondiente. ¡Espero que disfrutes tu premio! 🌟",
        "¡Felicidades! 🎉\nPor favor, proporciona estos datos para realizar tu pago:\n\nUsuario:\nNombre y Apellido del titular:\nCBU (sin alias):\nMonto a retirar:\n\nTe enviaré el comprobante una vez que se procese tu retiro. ¡Gracias!"
    ];

    // Función para obtener un mensaje de retiro único y eliminarlo del array
    function obtenerMensajeRetiro() {
        if (mensajesRetiro.length === 0) {
            // Si no quedan más mensajes, reiniciar el array
            mensajesRetiro = [
                
                "Felicitaciones!!!🥳\nCompletame estos datos para pagar tu premio💸\n\nUsuario:\nNombre y Apellido del titular:\nCBU (no aceptamos alias)\nMonto a retirar:\n\nCuando este tu retiro te envió el COMPROBANTE",
                "¡Felicidades por tu premio! 🎉\nPor favor, completa los siguientes datos para procesar el pago:\n\nUsuario:\nNombre y Apellido del titular:\nCBU (no aceptamos alias):\nMonto a retirar:\n\nUna vez procesado tu retiro, te enviaré el comprobante correspondiente. ¡Espero que disfrutes tu premio! 🌟",
                "¡Felicidades! 🎉\nPor favor, proporciona estos datos para realizar tu pago:\n\nUsuario:\nNombre y Apellido del titular:\nCBU (sin alias):\nMonto a retirar:\n\nTe enviaré el comprobante una vez que se procese tu retiro. ¡Gracias!"
            ];
        }
        var randomIndex = Math.floor(Math.random() * mensajesRetiro.length);
        var mensaje = mensajesRetiro[randomIndex];
        mensajesRetiro.splice(randomIndex, 1); // Eliminar el mensaje seleccionado del array
        return mensaje;
    }

    // Función para copiar texto al portapapeles
    function copiarAlPortapapeles(texto) {
        var textarea = document.createElement("textarea");
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // Asignar evento al botón "DATOS DE RETIRO"
    document.getElementById("btn3").addEventListener("click", function() {
        var mensajeRetiro = obtenerMensajeRetiro();
        copiarAlPortapapeles(mensajeRetiro);
        alert("Mensaje de retiro copiado al portapapeles:\n" + mensajeRetiro);
    });

    // Array de mensajes de pago realizado
    var mensajesPagoRealizado = [
        "El pago ha sido procesado correctamente🤑🤑.",
        "Se ha completado exitosamente su pago🤑.",
        "¡Pago confirmado! Gracias por confiar en nosotros ",
        "El pago ha sido efectuado con éxito, ¡gracias por elegirnos!"
    ];

    // Función para obtener un mensaje de pago realizado único y eliminarlo del array
    function obtenerMensajePagoRealizado() {
        if (mensajesPagoRealizado.length === 0) {
            // Si no quedan más mensajes, reiniciar el array
            mensajesPagoRealizado = [
                "El pago ha sido procesado correctamente🤑🤑.",
                "Se ha completado exitosamente su pago🤑",
                "¡Pago confirmado! Gracias por confiar en nosotros",
                "El pago ha sido efectuado con éxito, ¡gracias por elegirnos"
            ];
        }
        var randomIndex = Math.floor(Math.random() * mensajesPagoRealizado.length);
        var mensaje = mensajesPagoRealizado[randomIndex];
        mensajesPagoRealizado.splice(randomIndex, 1); // Eliminar el mensaje seleccionado del array
        return mensaje;
    }

    // Función para copiar texto al portapapeles
    function copiarAlPortapapeles(texto) {
        var textarea = document.createElement("textarea");
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // Asignar evento al botón "PAGO REALIZADO"
    document.getElementById("btn4").addEventListener("click", function() {
        var mensajePagoRealizado = obtenerMensajePagoRealizado();
        copiarAlPortapapeles(mensajePagoRealizado);
        alert("Mensaje de pago realizado copiado al portapapeles:\n" + mensajePagoRealizado);
    });


    // Array de mensajes para creación de usuario
    var mensajesUsuarioNuevo = [
        "Holaa, ¿cómo estás? 😊 Bienvenid@, decime tu nombre completo para completar el registro de tu cuenta de usuario. 📝",
        "Hola que tal? 😄 Para continuar, necesitaría tu nombre completo para proceder con la creación de tu cuenta. 🛠️",
        "Buenas como va? 😃 Decime tu nombre o cómo deseas llamarte para crearte tu usuario. 🤔"
    ];

    // Función para obtener un mensaje de creación de usuario aleatorio
    function obtenerMensajeUsuarioNuevo() {
        var randomIndex = Math.floor(Math.random() * mensajesUsuarioNuevo.length);
        return mensajesUsuarioNuevo[randomIndex];
    }

    // Función para copiar texto al portapapeles
    function copiarAlPortapapeles(texto) {
        var textarea = document.createElement("textarea");
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // Asignar evento al botón "Usuario nuevo"
    document.getElementById("btnUsuarioNuevo").addEventListener("click", function() {
        var mensajeUsuarioNuevo = obtenerMensajeUsuarioNuevo();
        copiarAlPortapapeles(mensajeUsuarioNuevo);
        alert("Mensaje de usuario nuevo copiado al portapapeles:\n" + mensajeUsuarioNuevo);
    });

    // Función para copiar texto al portapapeles
function copiarAlPortapapeles(texto) {
    var textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

// Obtener el text area de datos CBU
var datosCBUTextArea = document.getElementById("datosCBU");

// Verificar si hay datos CBU guardados en el almacenamiento local al cargar la página
window.addEventListener("DOMContentLoaded", function() {
    // Obtener los datos CBU guardados en el almacenamiento local
    var cbuGuardado = localStorage.getItem("datosCBU");
    // Si se encuentra un valor en el almacenamiento local, establecerlo en el text area
    if (cbuGuardado) {
        datosCBUTextArea.value = cbuGuardado;
    }
});

// Funcionalidad para el botón Copiar CBU
document.getElementById("btnCBU").addEventListener("click", function() {
    var datosCBU = datosCBUTextArea.value;
    copiarAlPortapapeles(datosCBU);
    alert("Datos CBU copiados al portapapeles:\n" + datosCBU);
});

// Asignar evento al botón "Editar"
document.getElementById("btnEditar").addEventListener("click", function() {
    datosCBUTextArea.readOnly = false;
    document.getElementById("btnEditar").style.display = "none";
    document.getElementById("btnGuardar").style.display = "inline-block";
});

// Asignar evento al botón "Guardar"
document.getElementById("btnGuardar").addEventListener("click", function() {
    datosCBUTextArea.readOnly = true;
    document.getElementById("btnEditar").style.display = "inline-block";
    document.getElementById("btnGuardar").style.display = "none";
    
    // Guardar los datos CBU en el almacenamiento local
    localStorage.setItem("datosCBU", datosCBUTextArea.value);
});

// Función para copiar texto al portapapeles
function copiarAlPortapapeles(texto) {
    var textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

// Mensajes aleatorios para el botón Espera de Pago
const mensajesEsperaPago = [
    "¡Genial! Dame un momento. Cuando esté listo tu retiro, te enviaré tu comprobante.",
    "Dalee, dame un momento. Tan pronto esté disponible tu retiro, te enviaré el comprobante.",
    "Perfecto. Dame un momento. En cuanto esté procesado tu retiro, recibirás tu comprobante.",
    "Felicitaciones. Dame un momento. Te enviaré tu comprobante tan pronto como tu retiro esté listo."
];

// Mensajes adicionales para crear usuario
const mensajesUsuario = [
    "Aquí tienes tu usuario y clave (todo junto y en minúscula). Confírmame si puedes acceder para proporcionarte el CBU.\nEn tu primera carga, obtendrás un 10% extra de regalo si es de $1500 o más (si no, el mínimo de carga es $1000) 🎁🎁🎁\n\nPlataforma web: juegasi.com",
    "Tu usuario y clave están listos (la clave es todo junto y en minúscula). Avísame si puedes acceder para darte el CBU.\nRecuerda que en tu primera carga recibirás un 10% extra de regalo si es de $1500 o más (mínimo de carga $1000) 🎁🎁🎁\n\nPlataforma web: juegasi.com",
    "Ese es tu usuario y clave (todo en minúscula y junto). Confírmame que puedes ingresar para darte el CBU.\nEn tu primera carga, obtienes un 10% extra de regalo si es de $1500 o más (mínimo de carga $1000) 🎁🎁🎁\n\nPlataforma web: juegasi.com"
];

// Funcionalidad para el botón Espera de Pago
document.getElementById('btnEsperaPago').addEventListener('click', function() {
    // Generar un número aleatorio entre 0 y 3 para seleccionar un mensaje aleatorio
    let indiceMensaje = Math.floor(Math.random() * mensajesEsperaPago.length);

    // Obtener el mensaje aleatorio
    let mensaje = mensajesEsperaPago[indiceMensaje];

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
        .then(function() {
            // Mostrar una alerta
            alert('Mensaje generado y copiado al portapapeles:\n' + mensaje);

            // Eliminar el mensaje seleccionado para evitar repeticiones
            mensajesEsperaPago.splice(indiceMensaje, 1);

            // Si ya se mostraron los 4 mensajes, reiniciar la lista para permitir repeticiones
            if (mensajesEsperaPago.length === 0) {
                mensajesEsperaPago.push(
                    "¡Claro! Dame un momento. Cuando esté listo tu retiro, te enviaré tu comprobante.",
                    "Entendido. Dame un momento. Tan pronto como esté disponible tu retiro, te enviaré el comprobante.",
                    "Por supuesto. Dame un momento. En cuanto esté procesado tu retiro, recibirás tu comprobante.",
                    "Entiendo. Dame un momento. Te enviaré tu comprobante tan pronto como tu retiro esté listo."
                );
            }
        })
        .catch(function(err) {
            console.error('Error al copiar al portapapeles: ', err);
            // En caso de error, simplemente mostrar la alerta sin copiar al portapapeles
            alert('Error al copiar al portapapeles:\n' + mensaje);
        });
});

// Función para crear un usuario
function crearUsuario() {
    // Obtener el nombre ingresado por el usuario
    let nombre = document.getElementById('nombreUsuario').value.trim();

    // Verificar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre de usuario.');
        return;
    }

    // Limitar la longitud del nombre a un máximo de 10 caracteres
    let nombreCortado = nombre.slice(0, 10);

    // Generar el nombre de usuario con el formato especificado
    let usuario = 'c1' + nombreCortado.replace(/\s+/g, '') + Math.floor(Math.random() * 100);

    // Seleccionar un mensaje adicional aleatorio
    let indiceMensajeUsuario = Math.floor(Math.random() * mensajesUsuario.length);
    let mensajeAdicional = mensajesUsuario[indiceMensajeUsuario];

    // Mensaje de usuario creado
    let mensajeUsuario = `Usuario: ${usuario}\nContraseña: casino1\n\n${mensajeAdicional}`;

    // Copiar el mensaje de usuario al portapapeles
    navigator.clipboard.writeText(mensajeUsuario)
        .then(function() {
            // Mostrar alerta con el mensaje generado
            alert('Este es tu usuario:\n\n' + mensajeUsuario);
        })
        .catch(function(error) {
            console.error('Error al copiar al portapapeles: ', error);
            alert('Error al copiar al portapapeles. Por favor, inténtelo nuevamente.');
        });
}

// Funcionalidad para presionar Enter en el input de nombre de usuario
document.getElementById('nombreUsuario').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Evitar que se envíe el formulario al presionar Enter
        event.preventDefault();

        // Crear el usuario
        crearUsuario();
    }
});

// Funcionalidad para el botón "Crear Usuario"
document.getElementById('btnCrearUsuario').addEventListener('click', function() {
    // Crear el usuario
    crearUsuario();
});

// Asignar evento al botón "Restablecer Usuario"
document.getElementById("btnRestablecerUsuario").addEventListener("click", function() {
    // Obtener el nombre de usuario ingresado
    let nombreUsuario = document.getElementById('nombreUsuario').value.trim();

    // Verificar si se ingresó un nombre de usuario
    if (nombreUsuario === '') {
        alert('No hay un nombre de usuario para restablecer.');
        return;
    }

    // Mensaje de restablecimiento de usuario
    let mensaje = `Tu usuario fue restablecido exitosamente.\n\nUsuario: ${nombreUsuario}\nContraseña: casino1\n\nIngresa nuevamente.`;

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
        .then(function() {
            // Mostrar alerta de éxito
            alert('Mensaje de restablecimiento de usuario copiado al portapapeles:\n' + mensaje);
        })
        .catch(function(err) {
            // Mostrar alerta en caso de error
            console.error('Error al copiar al portapapeles: ', err);
            alert('Error al copiar al portapapeles:\n' + mensaje);
        });
});

// Funcionalidad para el botón "PLATAFORMA WEB"
document.getElementById("btnPlataformaWeb").addEventListener("click", function() {
    var textoPlataforma = "Nuestra plataforma es:\njuegasi.com";
    copiarAlPortapapeles(textoPlataforma);
    alert("Texto de la plataforma copiado al portapapeles:\n" + textoPlataforma);
});

// Funcionalidad para el botón "AGENDAME"
document.getElementById("btnAgendame").addEventListener("click", function() {
    var mensajeAgendame = "Agendame yo soy Cielo! Así te llegan las promociones 🎁 Te cuento que también tenemos un plan de referidos para que ganes fichas gratis! Por cada persona que réferis y que cargue $2000 o mas, te regalamos 2000 fichas en tu próxima carga (vos también debes cargar $2000) solo menciona el usuario que referiste y te las acreditamos🔥";
    
    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensajeAgendame)
        .then(function() {
            // Mostrar una alerta indicando que el mensaje se ha copiado correctamente
            alert("Mensaje AGENDAME copiado al portapapeles:\n" + mensajeAgendame);
        })
        .catch(function(err) {
            // Mostrar una alerta en caso de error
            console.error('Error al copiar al portapapeles: ', err);
            alert('Error al copiar al portapapeles:\n' + mensajeAgendame);
        });
});