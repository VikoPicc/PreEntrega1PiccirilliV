// Definir las calificaciones de los alumnos

let personas = [
  {
    Nombre: 'JUAN',
    Calificacion: 7
  },
  {
    Nombre: 'CAROLINA',
    Calificacion: 8
  },
  {
    Nombre: 'PEDRO',
    Calificacion: 5
  }, 
  {
    Nombre: 'SARA',
    Calificacion: 9
  }, 
  {
    Nombre: 'LUIS',
    Calificacion: 3
  }
]
  

  // Función para determinar si un alumno está aprobado o desaprobado
  function determinarEstado(calificacion) {
    if (calificacion <= 5) {
      return "Desaprobado";
    } else {
      return "Aprobado";
    }
  }

  while(true) {

    // Solicitar al usuario que ingrese el nombre del alumno
    const nombreAlumno = prompt("Ingresa el nombre del alumno:").toUpperCase();

    let encontrado = false; 
    for(let i = 0; i < personas.length; i++) {
      if(personas[i].Nombre === nombreAlumno) {
          const calificacion = personas[i].Calificacion;
          const estado = determinarEstado(calificacion);
          encontrado = true;
          alert(`${nombreAlumno}: Calificación ${calificacion} - ${estado}`);
       }
    }
  
    if(encontrado === false) {
      alert(`No se encontró al alumno con el nombre ${nombreAlumno}`);
    }


  }



