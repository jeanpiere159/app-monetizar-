export function calcularTotal(cantidad, plazo) {
  const cantidadInt = parseInt(cantidad);
  const plazoInt = parseInt(plazo);

  let totalCantidad;
  if (cantidadInt <= 1000) {
    totalCantidad = cantidadInt * 0.25;
  } else if (cantidadInt > 1000 && cantidadInt <= 5000) {
    totalCantidad = cantidadInt * 0.2;
  } else if (cantidadInt > 5000 && cantidadInt <= 10000) {
    totalCantidad = cantidadInt * 0.15;
  } else {
    totalCantidad = cantidadInt * 0.1;
  }

  let totalPlazo;
  switch (plazoInt) {
    case 3:
      totalPlazo = cantidadInt * 0.05;
      break;
    case 6:
      totalPlazo = cantidadInt * 0.1;
      break;
    case 12:
      totalPlazo = cantidadInt * 0.15;
      break;
    case 24:
      totalPlazo = cantidadInt * 0.2;
      break;
    default:
      break;
  }
  return totalCantidad + totalPlazo + cantidadInt;
}
