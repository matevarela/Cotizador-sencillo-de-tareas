
document.addEventListener('DOMContentLoaded', function() {
    listener();
})

const precios = [1.365, 10.804, 10.040, 6.827, 10.040, 2.008, 924, 1.888 ]
const labels = document.querySelectorAll('.precio-caja');
const precio = document.querySelector('.precio');

function listener() {
    const boton = document.querySelector('.button');
    colocarPrecios();

    boton.onclick = function() {
        calcular();
    }

}


function colocarPrecios() {
    for(let i = 0; i < 8 ; i++) {
        labels[i].innerHTML = `$ ${precios[i]} `;

        labels[i].parentElement.onclick = function() {
            if(!labels[i].parentNode.classList.contains("seleccionado")) {
                labels[i].parentNode.classList.add("seleccionado");
            } else {
                labels[i].parentNode.classList.remove("seleccionado");
            }
        }
    }
}

function calcular() {
    let total = 0;

    for(let i = 0; i < 8; i++) {
        if(labels[i].parentElement.classList.contains('seleccionado')) {
            total += precios[i];
        }
    }
    total *= 204;
    precio.innerHTML = `ARS $${total.toFixed(2)}`;
}













