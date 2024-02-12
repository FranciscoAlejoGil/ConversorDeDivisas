let boton = document.getElementById("boton")

const convertir = () => {
    let valor = parseInt(document.getElementById("cantidad").value);
    let resultado = 0;
    let dolar = 831.32;
    let euro = 895.26;
    let real = 5.33;

    if(document.getElementById("moneda1").checked){
        resultado = valor * dolar;
        alert("El cambio de Pesos a Dolares es de : $"+ resultado);
    }
    else if(document.getElementById("moneda2").checked){
        resultado = valor * euro;
        alert("El cambio de Pesos a Euros es de : $"+ resultado);
    }
    else if(document.getElementById("moneda3").checked){
        resultado = valor * real;
        alert("El cambio de Pesos a Reales es de : $"+ resultado);
    }
    else{
        alert("Imposible de convertir")
    }
}

boton.addEventListener("click", convertir);