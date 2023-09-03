
const contactos = [];


function crearContacto(id, nombres, apellidos, telefono, ubicacion) {
  const nuevoContacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicacion: ubicacion,
  };

  contactos.push(nuevoContacto);

  return nuevoContacto;
}


function eliminarContacto(id) {
  const indice = contactos.findIndex((contacto) => contacto.id === id);

  if (indice !== -1) {
    const contactoEliminado = contactos.splice(indice, 1);
    return contactoEliminado[0];
  } else {
    return null; 
  }
}

