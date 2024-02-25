const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const VOL = document.getElementById('vol');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO <= 30) {
        if (DATO > 0) {
            ERROR.style.display = 'none'
            let flujo = calcFlujo(DATO);
            let mantenimiento = Math.ceil((flujo / 24) * 1.5);
            VOL.innerHTML = flujo + " cc";
            FLU.innerHTML = Math.ceil(flujo / 24) + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            VOL.style.display = 'block';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } else {
            ERROR.style.display = 'block';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
        }
    }
    else {
        console.log("Mayor que 30")
        const SC = ((DATO * 4) + 7) / (DATO * 1 + 90)
        let m1500 = Math.ceil(SC * 1500)
        let m2000 = Math.ceil(SC * 2000)

        VOL.innerHTML = "VOLUMEN DIARIO (POR SUPERFICIE CORPORAL)"
        FLU.innerHTML = "Multiplicado por 1500 = " + m1500 + ' cc';
        MAN.innerHTML = "Multiplicado por 2000 = " + m2000 + ' cc';
        VOL.style.display = 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    }
})

function calcFlujo(peso) {
    let flujo
    if (peso <= 10) {
        flujo = peso * 100
    }
    else if (peso <= 20) {
        flujo = (peso - 10) * 50 + 1000
    }
    else if (peso <= 30) {
        flujo = (peso - 20) * 20 + 1500
    }

    return flujo
}