let boton = document.getElementById("boton")

const convertir = () => {
    let valor = parseInt(document.getElementById("cantidad").value);
    let resultado = 0;
    const API_KEY = 'd8ad3d99cd404a2bbb599aaaf20bad75';
    const API_URL = `https://openexchangerates.org/api/latest.json?app_id=d8ad3d99cd404a2bbb599aaaf20bad75`;

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        let rates = data.rates;
            if(document.getElementById("moneda1").checked){
                resultado = (valor * rates.ARS) * rates.USD; 
                localStorage.setItem("resultado", resultado);
                Swal.fire("La cantidad de Dolares seleccionados son: $"+ resultado.toFixed(2),"(El precio esta reflejado en Pesos Argentinos)"); 
            }
            else if(document.getElementById("moneda2").checked){
                resultado = (valor * rates.ARS) * rates.EUR; 
                localStorage.setItem("resultado", resultado);
                Swal.fire("La cantidad de Euros seleccionados son: $"+ resultado.toFixed(2),"(El precio esta reflejado en Pesos Argentinos)"); 
            }
            else if(document.getElementById("moneda3").checked){
                resultado = (valor * rates.ARS) / rates.BRL; 
                localStorage.setItem("resultado", resultado);
                Swal.fire("La cantidad de Reales seleccionados son: $"+ resultado.toFixed(2),"(El precio esta reflejado en Pesos Argentinos)"); 
            }
            else if(document.getElementById("moneda4").checked){
                resultado = (valor * rates.ARS) * rates.GBP; 
                localStorage.setItem("resultado", resultado);
                Swal.fire("La cantidad de Libras Esterlinas seleccionadas son: $"+ resultado.toFixed(2),"(El precio esta reflejado en Pesos Argentinos)"); 
            }
        else{
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Imposible de convertir",
                footer: "Por favor, coloque un valor real"
            });
        }
    })
    .catch(error => {
        console.error('Error al obtener las tasas de cambio:', error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al obtener las tasas de cambio. Por favor, intenta nuevamente."
        });
    });
}

boton.addEventListener("click", convertir);

window.addEventListener('DOMContentLoaded', () => {
    let resultadoGuardado = localStorage.getItem('resultado');
    if (resultadoGuardado) {
    document.getElementById('resultado').textContent = "Resultado almacenado: $" + resultadoGuardado;
    }
    });