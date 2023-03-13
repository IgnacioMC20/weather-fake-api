const weatherArray = ['Despejado', 'Nublado', 'Lluvioso'];
export const tiempoArray = ['Mañana', 'Tarde', 'Noche']
const maxTemp = 30;
const minTemp = 5;

const weatherApi = {
  verClima: () => {
    const diff = maxTemp - minTemp;
    const randomInRange = minTemp + (Math.random() * diff);
    const clima = weatherArray[Math.floor(Math.random() * 3)]
    return [Math.floor(randomInRange), clima]
  },
  formatearFecha: (fecha) => {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear().toString();
    return `${anio}-${mes}-${dia}`;
  },
  validarFecha: (fecha) => /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(fecha),

}

export default weatherApi;