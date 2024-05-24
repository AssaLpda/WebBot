document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    // Simulación de una base de datos de usuarios
    var usuarios = [
        { email: 'carlitosapas23@gmail.com', password: 'Assa12345' },
        { email: '9696antoperez@gmail.com', password: 'Anto96' },
        { email: 'assa@gmail.com', password: 'Assa12345' } // Ejemplo con tu usuario y contraseña
    ];

    // Buscar el usuario por correo electrónico
    var usuario = usuarios.find(user => user.email === email);

    var resultMessage = document.getElementById('resultMessage');
    
    if (usuario) {
        resultMessage.textContent = `Tu contraseña es: ${usuario.password}`;
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = 'Correo electrónico no encontrado.';
        resultMessage.style.color = 'red';
    }
});

