const ingresa = document.getElementById("Ingresa");
ingresa.addEventListener('click', validarAlumno);

function Materia(nombre, semestre, puntajeParcial, puntajeFinal, calificacion) {
    this.nombre = nombre;
    this.semestre = semestre;
    this.puntajeParcial = puntajeParcial;
    this.puntajeFinal = puntajeFinal;
    this.calificacion = calificacion;
}

function Alumno(nombre, apellido, correo, contraseña, materias) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contraseña = contraseña;
    this.materias = materias;
}

var materia1 = new Materia("Matemáticas", 1, 80, 90, "A");
var materia2 = new Materia("Historia", 2, 75, 85, "B");
var materia3 = new Materia("Ciencias", 1, 90, 88, "A-");
var materia4 = new Materia("Inglés", 2, 88, 92, "A");
var materia5 = new Materia("Programación", 3, 95, 94, "A+");

var alumno1 = new Alumno("Juan", "Pérez", "juan@email.com", "clave123", [materia1, materia2, materia3, materia4, materia5]);
let alumnos = [alumno1];

function validarAlumno() {
    let correo = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;
    const mensaje = document.getElementById("mensaje");
    for (let i = 0; i < alumnos.length; i++) {
        if (correo === alumnos[i].correo && contraseña === alumnos[i].contraseña) {
            console.log("Se encontró el alumno");
            fnActualizarTabla(i);
            mensaje.style.display = "none";
            const contenedor = document.getElementById("cajita");
            contenedor.style.display = "none";
            return;
        }
    }
    console.log("Verificar correo y/o contraseña");
    mensaje.innerHTML = "Verificar correo y/o contraseña";
    mensaje.style.display = "block";
}

function fnActualizarTabla(indice) {
    const divTabla = document.getElementById("table");
    const materias = alumnos[indice].materias;

    if (materias.length === 0) {
        divTabla.innerHTML = 'No existen materias registradas';
        return;
    }

    const buff = [];
    buff.push('<tr>');
    buff.push('<th>Materia</th>');
    buff.push('<th>Semestre</th>');
    buff.push('<th>Puntaje Parcial</th>');
    buff.push('<th>Puntaje Final</th>');
    buff.push('<th>Calificacion</th>');
    buff.push('</tr>');

    for (let i = 0; i < materias.length; i++) {
        buff.push('<tr>');
        buff.push('<td>' + materias[i].nombre + '</td>');
        buff.push('<td>' + materias[i].semestre + '</td>');
        buff.push('<td>' + materias[i].puntajeParcial + '</td>');
        buff.push('<td>' + materias[i].puntajeFinal + '</td>');
        buff.push('<td>' + materias[i].calificacion + '</td>');
        buff.push('</tr>');
    }

    divTabla.innerHTML = buff.join('\n');
}

