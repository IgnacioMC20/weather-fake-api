import weatherApi, { tiempoArray } from "./weatherApi.js";

const $ = (selector) => document.querySelector(selector)
const tabla = $('#tabla')
const climahoy = $('#climahoy')
const climafecha = $('#climafecha')
const fechaspan = $('#fechaspan')

climahoy.addEventListener('click', function () {

    const date = weatherApi.formatearFecha(new Date())
    if (weatherApi.validarFecha(date)) {
        clearTable()
        mostrarLoader()
        setTimeout(() => {
            const [grados, clima] = weatherApi.verClima()
            fechaspan.innerText = date;
            addRow({ temperatura: grados, clima, tiempo: tiempoArray[0] })
        }, 1000)
        
    } else alert('fecha invalida')
});

climafecha.addEventListener('click', function () {
    const date = $('#dateInput').value
    if (weatherApi.validarFecha(date)) {
        clearTable()
        mostrarLoader()
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const [grados, clima] = weatherApi.verClima()
                fechaspan.innerText = date;
                addRow({ temperatura: grados, clima, tiempo: tiempoArray[i] })
            }, 1000)
        }
    } else alert('fecha invalida')
});

function mostrarLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; // Mostrar el elemento

    setTimeout(() => {
        loader.style.display = 'none'; // Ocultar el elemento después de 2 segundos
    }, 1000);
}

const clearTable = () => {
    let rowCount = tabla.rows.length;
    while (rowCount > 1) {
        tabla.deleteRow(rowCount - 1);
        rowCount--;
    }
}



const addRow = ({ temperatura, clima, tiempo }) => {
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell();
    let celda2 = fila.insertCell();
    let celda2clima = fila.insertCell();
    let celda3 = fila.insertCell();

    celda1.innerText = tiempo;
    celda2.innerHTML = `<img src='./${clima}.jpeg' style='width: 50px;' >`
    celda2clima.innerText = clima;
    celda3.innerText = `${temperatura} °C`;
}