let boton = document.getElementById("boton")

const convertir = () => {
    let valor = parseInt(document.getElementById("cantidad").value);
    let resultado = 0;
    let dolar = 831.32;
    let euro = 895.26;
    let real = 5.33;

    if(document.getElementById("moneda1").checked){
        resultado = valor * dolar;
        localStorage.setItem("resultado", resultado);
        Swal.fire("El cambio de Pesos a Dolares es: $"+ resultado);
    }
    else if(document.getElementById("moneda2").checked){
        resultado = valor * euro;
        localStorage.setItem("resultado", resultado);
        Swal.fire("El cambio de Pesos a Euros: $"+ resultado);
    }
    else if(document.getElementById("moneda3").checked){
        resultado = valor * real;
        localStorage.setItem("resultado", resultado);
        Swal.fire("El cambio de Pesos a Reales: $"+ resultado);
    }
    else{
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Imposible de convertir",
            footer: "Por favor, coloque un valor real"
        });
    }
}

boton.addEventListener("click", convertir);

window.addEventListener('DOMContentLoaded', () => {
    let resultadoGuardado = localStorage.getItem('resultado');
    if (resultadoGuardado) {
    document.getElementById('resultado').textContent = "Resultado almacenado: $" + resultadoGuardado;
    }
    });