let savedPIN = '1724';

function login() {

    let access = false;

    for (let i = 2; i >= 0; i--) {
        let userPIN = prompt('Ingresa tu PIN. Tienes ' + (i + 1) + ' oportunidades.')
        if (userPIN === savedPIN) {
            alert('Ingreso exitoso. Bienvenido/a');
            access = true;
            break;
        } else {
            alert('Error. Te quedan ' + i + ' intentos.')
        }
    }

   return access
}

if (login()) {
    let saldo = 200000;

    let option = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.');

    while (option != 'X' && option != 'x') {
        //opciones de menu de cajero
        switch (option) {
            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;
            case '2':
                let retiro = parseInt(prompt('Ingresa cantidad a retirar'));
                if (retiro <= saldo) {
                    saldo = saldo - retiro;
                    //  saldo -= retiro;
                    alert('Retiro exitoso. Tu nuevo saldo es $ ' + saldo);

                } else {
                    alert('Fondos insuficientes');
                }
                break;
            case '3':
                let deposito = parseInt(prompt('Ingresa monto a depositar'));
                saldo += deposito;
                alert('Depósito exitoso. Tu nuevo saldo es $ ' + saldo);
                break;

            default:
                alert('Elegiste una opción inválida');
                break;
        }

        option = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.');
    }



} else {

    alert('Retendremos tu tarjeta por seguridad');
}

alert('Adiós');