// Definir las calificaciones de los alumnos
const calificaciones = {
    Juan: 7,
    Pedro: 5,
    Ana: 8,
    Lucia: 4,
    Jorge: 6,
  };
  
  // Función para determinar si un alumno está aprobado o desaprobado
  function determinarEstado(calificacion) {
    if (calificacion <= 5) {
      return "Desaprobado";
    } else {
      return "Aprobado";
    }
  }
  
  // Solicitar al usuario que ingrese el nombre del alumno
  const nombreAlumno = prompt("Ingresa el nombre del alumno:");
  
  // Verificar si el nombre ingresado existe en el objeto calificaciones
  if (calificaciones.hasOwnProperty(nombreAlumno)) {
    // Obtener la calificación y estado del alumno
    const calificacion = calificaciones[nombreAlumno];
    const estado = determinarEstado(calificacion);
  
    // Mostrar un alert con la calificación y el estado
    alert(`${nombreAlumno}: Calificación ${calificacion} - ${estado}`);
  } else {
    // Mostrar un alert si el nombre ingresado no existe en las calificaciones
    alert(`No se encontró al alumno con el nombre ${nombreAlumno}`);
  }