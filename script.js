// CAMBIAR SECCIÓN (MENU)
function cambiarSeccion(id) {
    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}

// MOSTRAR SEMANAS
function mostrarUnidad(unidad) {

    let contenedor = document.getElementById("contenedor-semanas");
    contenedor.innerHTML = "";

    let inicio = 1;

    if (unidad === "unidad01") inicio = 1;
    if (unidad === "unidad02") inicio = 5;
    if (unidad === "unidad03") inicio = 9;
    if (unidad === "unidad04") inicio = 13;

    let html = "<div class='grid'>";

    for (let i = inicio; i < inicio + 4; i++) {
        html += `
            <div class="card-semana">
                <h3>Semana ${i}</h3>
                <p>Pendiente</p>
                <a href="https://github.com/tuusuario/semana${i}" target="_blank">
                    Ver en GitHub
                </a>
            </div>
        `;
    }

    html += "</div>";
    contenedor.innerHTML = html;

    // activar botón
    document.querySelectorAll(".tabs button").forEach(btn => {
        btn.classList.remove("activo");
    });

    event.target.classList.add("activo");
}

// cargar por defecto
mostrarUnidad("u01");