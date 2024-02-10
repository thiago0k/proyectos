function agregar() {
    let input = document.getElementById('resultado');
    let textoTarea = input.value.trim();

    if(textoTarea !== '') {
        let ol = document.getElementById('tareas');
        let li = document.createElement('li')
        li.innerHTML = `<input type="checkbox" onclick="tacharTarea(this)"> ${textoTarea} <button onclick="eliminarTarea(this)" id="boton">eliminar</button>`;
        ol.appendChild(li);
        input.value = '';
    }
}

function tacharTarea(checkbox) {
    let textoTareas = checkbox.nextSibling;
    if(checkbox.checked) {
        textoTareas.style.textDecoration = "line-through";
    } else {
        textoTareas.style.textDecoration = "none";
    }
}

function eliminarTarea(button) {
    let li = button.parentNode;
    let ol = li.parentNode;
    ol.removeChild(li)
}


