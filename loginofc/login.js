function validarEmail(email) {
    const emailField = document.getElementById(email);
    const emailValue = emailField.value;

    // Verifica se o e-mail contém o caractere "@"
    if (emailValue.indexOf('@') === -1) {
        alert('O e-mail precisa conter o caractere "@".');
        return false;
    }

    // Verifica se o e-mail contém o caractere "." após o "@"
    if (emailValue.split('@')[1].indexOf('.') === -1) {
        alert('O e-mail precisa conter um ponto "."');
        return false;
    }

    // Se tudo estiver válido, retorna true para permitir o envio do formulário
    return true;
}