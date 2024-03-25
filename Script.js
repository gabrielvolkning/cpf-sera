function verificarCPF() {
    let cpf = document.getElementById('cpf').value.replace(/[^\d]/g, '');
    if (cpf.length !== 11) {
        document.getElementById('resultado').classList.remove('cpf-valido');
        document.getElementById('resultado').classList.add('cpf-invalido');
        document.getElementById('resultado').innerText = "CPF inválido";
        return;
    }
    let digitoVerificador = cpf.substring(9);
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let primeiroDigito = (resto < 2) ? 0 : 11 - resto;

    if (parseInt(primeiroDigito) !== parseInt(digitoVerificador.charAt(0))) {
        document.getElementById('resultado').classList.remove('cpf-valido');
        document.getElementById('resultado').classList.add('cpf-invalido');
        document.getElementById('resultado').innerText = "CPF inválido";
        return;
        
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let segundoDigito = (resto < 2) ? 0 : 11 - resto;

    if (parseInt(segundoDigito) !== parseInt(digitoVerificador.charAt(1))) {
        document.getElementById('resultado').classList.remove('cpf-valido');
        document.getElementById('resultado').classList.add('cpf-invalido');
        document.getElementById('resultado').innerText = "CPF inválido";
        return;
    }

    document.getElementById('resultado').classList.remove('cpf-invalido');
    document.getElementById('resultado').classList.add('cpf-valido');
    document.getElementById('resultado').innerText = "CPF válido";
}

document.getElementById('verificar').addEventListener('click', verificarCPF);
