// Estado del examen
const estadoExamen = {
    preguntaActual: 0,
    respuestasUsuario: new Array(270).fill(null),
    tiempoInicio: null,
    tiempoTranscurrido: 0,
    timerInterval: null,
    examenFinalizado: false,
    modoRevision: false,
    modoPractica: false
};

// Array para almacenar el orden aleatorio de las preguntas
let preguntasAleatorias = [];

// Función para mezclar array (algoritmo Fisher-Yates)
function mezclarArray(array) {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}

// Inicializar el examen al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    inicializarExamen();
});

// Función principal de inicialización
function inicializarExamen() {
    // Mezclar preguntas aleatoriamente al iniciar
    preguntasAleatorias = mezclarArray(preguntasDB);
    estadoExamen.tiempoInicio = new Date();
    generarNavegacion();
    mostrarPregunta(0);
    iniciarTemporizador();
    configurarEventos();
    
    // Mostrar tooltip informativo al inicio
    mostrarInfoModos();
}

// Mostrar información sobre los modos
function mostrarInfoModos() {
    const tooltip = document.createElement('div');
    tooltip.className = 'info-tooltip';
    tooltip.innerHTML = `
        <div class="info-tooltip-content">
            <strong>💡 Elige tu modo:</strong><br>
            <strong>📝 Modo Examen:</strong> Evalúa tu nivel sin feedback hasta el final<br>
            <strong>📚 Modo Práctica:</strong> Aprende con feedback inmediato (verde/rojo)
            <button onclick="this.parentElement.parentElement.remove()" class="btn-cerrar-info">×</button>
        </div>
    `;
    document.body.appendChild(tooltip);
    
    // Auto-cerrar después de 8 segundos
    setTimeout(() => {
        if (tooltip.parentElement) {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }
    }, 8000);
}

// Generar botones de navegación
function generarNavegacion() {
    const contenedorNav = document.getElementById('navegacion-preguntas');
    contenedorNav.innerHTML = '';
    
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    for (let i = 0; i < totalPreguntas; i++) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = i + 1;
        btn.setAttribute('data-pregunta', i);
        btn.addEventListener('click', () => irAPregunta(i));
        contenedorNav.appendChild(btn);
    }
}

// Mostrar una pregunta específica
function mostrarPregunta(indice) {
    estadoExamen.preguntaActual = indice;
    const pregunta = preguntasAleatorias[indice];
    const contenedor = document.getElementById('pregunta-actual');
    
    // Actualizar clase active en navegación
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.classList.remove('active');
        if (i === indice) {
            btn.classList.add('active');
        }
        
        // Mantener colores de modo práctica en navegación
        if (estadoExamen.modoPractica && estadoExamen.respuestasUsuario[i] !== null) {
            const preguntaNav = preguntasAleatorias[i];
            const respuestaNav = estadoExamen.respuestasUsuario[i];
            btn.classList.remove('correcta-practica-nav', 'incorrecta-practica-nav');
            if (respuestaNav === preguntaNav.respuestaCorrecta) {
                btn.classList.add('correcta-practica-nav');
            } else {
                btn.classList.add('incorrecta-practica-nav');
            }
        }
    });
    
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    
    // Generar HTML de la pregunta
    let html = `
        <div class="pregunta-header">
            <span class="pregunta-numero">Pregunta ${indice + 1} de ${totalPreguntas}</span>
        </div>
        <div class="pregunta-texto">${pregunta.pregunta}</div>
        <div class="opciones">
    `;
    
    // Verificar que las opciones existan
    if (pregunta.opciones && pregunta.opciones.length > 0) {
        pregunta.opciones.forEach((opcion, i) => {
            const seleccionada = estadoExamen.respuestasUsuario[indice] === i;
            const claseSeleccionada = seleccionada ? 'seleccionada' : '';
            
            // En modo revisión, mostrar correctas e incorrectas
            let claseRevision = '';
            if (estadoExamen.modoRevision) {
                if (i === pregunta.respuestaCorrecta) {
                    claseRevision = 'correcta';
                } else if (seleccionada && i !== pregunta.respuestaCorrecta) {
                    claseRevision = 'incorrecta';
                }
            }
            
            // En modo práctica, mostrar feedback si ya fue respondida
            let clasePractica = '';
            if (estadoExamen.modoPractica && seleccionada) {
                if (i === pregunta.respuestaCorrecta) {
                    clasePractica = 'correcta-practica';
                } else {
                    clasePractica = 'incorrecta-practica';
                }
            }
            
            // Si en modo práctica y se seleccionó mal, también mostrar la correcta
            const mostrarCorrecta = estadoExamen.modoPractica && 
                                   estadoExamen.respuestasUsuario[indice] !== null && 
                                   estadoExamen.respuestasUsuario[indice] !== pregunta.respuestaCorrecta &&
                                   i === pregunta.respuestaCorrecta;
            if (mostrarCorrecta) {
                clasePractica = 'correcta-practica';
            }
            
            html += `
                <div class="opcion ${claseSeleccionada} ${claseRevision} ${clasePractica}" onclick="seleccionarOpcion(${i})">
                    <input type="radio" 
                           name="respuesta" 
                           id="opcion${i}" 
                           value="${i}" 
                           ${seleccionada ? 'checked' : ''}
                           ${estadoExamen.modoRevision ? 'disabled' : ''}>
                    <label for="opcion${i}">${opcion}</label>
                </div>
            `;
        });
    } else {
        html += '<p style="color: red;">Error: Esta pregunta no tiene opciones disponibles.</p>';
    }
    
    html += '</div>';
    contenedor.innerHTML = html;
    
    // Actualizar botones de navegación
    actualizarBotonesNavegacion();
    actualizarProgreso();
}

// Seleccionar una opción
function seleccionarOpcion(indice) {
    if (estadoExamen.modoRevision) return;
    
    estadoExamen.respuestasUsuario[estadoExamen.preguntaActual] = indice;
    
    const preguntaActual = preguntasAleatorias[estadoExamen.preguntaActual];
    const esCorrecta = indice === preguntaActual.respuestaCorrecta;
    
    // Actualizar visualmente
    document.querySelectorAll('.opcion').forEach((opcion, i) => {
        opcion.classList.remove('seleccionada', 'correcta-practica', 'incorrecta-practica');
        
        if (i === indice) {
            opcion.classList.add('seleccionada');
            opcion.querySelector('input').checked = true;
            
            // En modo práctica, mostrar si es correcta o incorrecta inmediatamente
            if (estadoExamen.modoPractica) {
                if (esCorrecta) {
                    opcion.classList.add('correcta-practica');
                } else {
                    opcion.classList.add('incorrecta-practica');
                    // También resaltar la respuesta correcta
                    document.querySelectorAll('.opcion').forEach((opt, idx) => {
                        if (idx === preguntaActual.respuestaCorrecta) {
                            opt.classList.add('correcta-practica');
                        }
                    });
                }
            }
        }
    });
    
    // Marcar como respondida en navegación
    const navBtn = document.querySelector(`.nav-btn[data-pregunta="${estadoExamen.preguntaActual}"]`);
    if (navBtn) {
        navBtn.classList.remove('respondida', 'correcta-practica-nav', 'incorrecta-practica-nav');
        navBtn.classList.add('respondida');
        
        // En modo práctica, colorear el botón de navegación
        if (estadoExamen.modoPractica) {
            if (esCorrecta) {
                navBtn.classList.add('correcta-practica-nav');
            } else {
                navBtn.classList.add('incorrecta-practica-nav');
            }
        }
    }
    
    actualizarProgreso();
}

// Ir a una pregunta específica
function irAPregunta(indice) {
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    if (indice >= 0 && indice < totalPreguntas) {
        mostrarPregunta(indice);
    }
}

// Navegar a la pregunta anterior
function irAnterior() {
    if (estadoExamen.preguntaActual > 0) {
        mostrarPregunta(estadoExamen.preguntaActual - 1);
    }
}

// Navegar a la siguiente pregunta
function irSiguiente() {
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    if (estadoExamen.preguntaActual < totalPreguntas - 1) {
        mostrarPregunta(estadoExamen.preguntaActual + 1);
    }
}

// Actualizar botones de navegación
function actualizarBotonesNavegacion() {
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const btnFinalizar = document.getElementById('btn-finalizar');
    
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    
    // Habilitar/deshabilitar botón anterior
    btnAnterior.disabled = estadoExamen.preguntaActual === 0;
    
    // Mostrar botón finalizar en la última pregunta
    if (estadoExamen.preguntaActual === totalPreguntas - 1) {
        btnSiguiente.style.display = 'none';
        btnFinalizar.style.display = 'inline-block';
    } else {
        btnSiguiente.style.display = 'inline-block';
        btnFinalizar.style.display = 'none';
    }
}

// Actualizar progreso
function actualizarProgreso() {
    const respondidas = estadoExamen.respuestasUsuario.filter(r => r !== null).length;
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    document.getElementById('progreso').innerHTML = `Progreso: <strong>${respondidas}/${totalPreguntas}</strong>`;
}

// Temporizador
function iniciarTemporizador() {
    estadoExamen.timerInterval = setInterval(() => {
        const ahora = new Date();
        const diferencia = ahora - estadoExamen.tiempoInicio;
        
        const horas = Math.floor(diferencia / 3600000);
        const minutos = Math.floor((diferencia % 3600000) / 60000);
        const segundos = Math.floor((diferencia % 60000) / 1000);
        
        const tiempoFormateado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        document.getElementById('tiempo').innerHTML = `Tiempo: <strong>${tiempoFormateado}</strong>`;
        
        estadoExamen.tiempoTranscurrido = diferencia;
    }, 1000);
}

// Detener temporizador
function detenerTemporizador() {
    if (estadoExamen.timerInterval) {
        clearInterval(estadoExamen.timerInterval);
    }
}

// Finalizar examen
function finalizarExamen() {
    // Verificar si hay preguntas sin responder
    const sinResponder = estadoExamen.respuestasUsuario.filter(r => r === null).length;
    
    if (sinResponder > 0) {
        const confirmar = confirm(`Tienes ${sinResponder} pregunta(s) sin responder. ¿Estás seguro de que quieres finalizar el examen?`);
        if (!confirmar) return;
    }
    
    estadoExamen.examenFinalizado = true;
    detenerTemporizador();
    calcularResultados();
}

// Calcular resultados
function calcularResultados() {
    let correctas = 0;
    let incorrectas = 0;
    let sinResponder = 0;
    
    preguntasAleatorias.forEach((pregunta, i) => {
        const respuesta = estadoExamen.respuestasUsuario[i];
        
        if (respuesta === null) {
            sinResponder++;
        } else if (respuesta === pregunta.respuestaCorrecta) {
            correctas++;
        } else {
            incorrectas++;
        }
    });
    
    const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
    const porcentaje = ((correctas / totalPreguntas) * 100).toFixed(2);
    const aprobado = porcentaje >= 60;
    
    mostrarResultados(correctas, incorrectas, sinResponder, porcentaje, aprobado);
}

// Mostrar resultados
function mostrarResultados(correctas, incorrectas, sinResponder, porcentaje, aprobado) {
    const modal = document.getElementById('modal-resultados');
    const contenido = document.getElementById('resultados-contenido');
    
    const tiempoTotal = formatearTiempo(estadoExamen.tiempoTranscurrido);
    
    let html = `
        <div class="resultado-score ${aprobado ? 'aprobado' : 'reprobado'}">
            ${porcentaje}%
        </div>
        
        <h3 style="text-align: center; color: ${aprobado ? 'var(--success-color)' : 'var(--danger-color)'};">
            ${aprobado ? '¡APROBADO!' : 'REPROBADO'}
        </h3>
        
        <div class="estadisticas">
            <div class="estadistica">
                <span class="estadistica-valor" style="color: var(--success-color);">${correctas}</span>
                <span class="estadistica-label">Correctas</span>
            </div>
            <div class="estadistica">
                <span class="estadistica-valor" style="color: var(--danger-color);">${incorrectas}</span>
                <span class="estadistica-label">Incorrectas</span>
            </div>
            <div class="estadistica">
                <span class="estadistica-valor" style="color: var(--warning-color);">${sinResponder}</span>
                <span class="estadistica-label">Sin Responder</span>
            </div>
        </div>
        
        <div class="resultado-item">
            <strong>Tiempo total:</strong> ${tiempoTotal}
        </div>
        <div class="resultado-item">
            <strong>Total de preguntas:</strong> ${preguntasDB.length}
        </div>
        <div class="resultado-item">
            <strong>Nota mínima para aprobar:</strong> 60%
        </div>
    `;
    
    contenido.innerHTML = html;
    modal.classList.add('show');
    
    // Actualizar navegación con resultados
    actualizarNavegacionConResultados();
}

// Actualizar navegación con resultados
function actualizarNavegacionConResultados() {
    preguntasAleatorias.forEach((pregunta, i) => {
        const navBtn = document.querySelector(`.nav-btn[data-pregunta="${i}"]`);
        const respuesta = estadoExamen.respuestasUsuario[i];
        
        if (navBtn) {
            navBtn.classList.remove('respondida');
            
            if (respuesta === null) {
                // Sin responder
            } else if (respuesta === pregunta.respuestaCorrecta) {
                navBtn.classList.add('correcta');
            } else {
                navBtn.classList.add('incorrecta');
            }
        }
    });
}

// Ver respuestas detalladas
function verRespuestasDetalladas() {
    estadoExamen.modoRevision = true;
    document.getElementById('modal-resultados').classList.remove('show');
    mostrarPregunta(0);
    
    // Cambiar texto de botones
    document.getElementById('btn-finalizar').textContent = 'Volver a Resultados';
    document.getElementById('btn-finalizar').style.display = 'inline-block';
    document.getElementById('btn-siguiente').style.display = 'none';
}

// Reiniciar examen
function reiniciarExamen() {
    if (confirm('¿Estás seguro de que quieres reiniciar el examen? Perderás todo tu progreso.')) {
        // Mezclar preguntas de nuevo para un nuevo orden
        preguntasAleatorias = mezclarArray(preguntasDB);
        
        estadoExamen.preguntaActual = 0;
        estadoExamen.respuestasUsuario = new Array(270).fill(null);
        estadoExamen.tiempoInicio = new Date();
        estadoExamen.tiempoTranscurrido = 0;
        estadoExamen.examenFinalizado = false;
        estadoExamen.modoRevision = false;
        
        document.getElementById('modal-resultados').classList.remove('show');
        
        // Limpiar navegación
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('respondida', 'correcta', 'incorrecta', 'active');
        });
        
        generarNavegacion();
        mostrarPregunta(0);
        iniciarTemporizador();
    }
}

// Formatear tiempo
function formatearTiempo(ms) {
    const horas = Math.floor(ms / 3600000);
    const minutos = Math.floor((ms % 3600000) / 60000);
    const segundos = Math.floor((ms % 60000) / 1000);
    
    let resultado = '';
    if (horas > 0) resultado += `${horas}h `;
    if (minutos > 0) resultado += `${minutos}m `;
    resultado += `${segundos}s`;
    
    return resultado;
}

// Configurar eventos
function configurarEventos() {
    // Toggle modo práctica/examen
    const modoPracticaToggle = document.getElementById('modo-practica');
    modoPracticaToggle.addEventListener('change', (e) => {
        estadoExamen.modoPractica = e.target.checked;
        // Actualizar la pregunta actual para reflejar el cambio de modo
        mostrarPregunta(estadoExamen.preguntaActual);
    });
    
    document.getElementById('btn-anterior').addEventListener('click', irAnterior);
    document.getElementById('btn-siguiente').addEventListener('click', irSiguiente);
    document.getElementById('btn-finalizar').addEventListener('click', () => {
        if (estadoExamen.modoRevision) {
            // Volver a mostrar resultados
            estadoExamen.modoRevision = false;
            const correctas = estadoExamen.respuestasUsuario.filter((r, i) => r === preguntasAleatorias[i].respuestaCorrecta).length;
            const incorrectas = estadoExamen.respuestasUsuario.filter((r, i) => r !== null && r !== preguntasAleatorias[i].respuestaCorrecta).length;
            const sinResponder = estadoExamen.respuestasUsuario.filter(r => r === null).length;
            const totalPreguntas = preguntasAleatorias.length > 0 ? preguntasAleatorias.length : preguntasDB.length;
            const porcentaje = ((correctas / totalPreguntas) * 100).toFixed(2);
            const aprobado = porcentaje >= 60;
            mostrarResultados(correctas, incorrectas, sinResponder, porcentaje, aprobado);
        } else {
            finalizarExamen();
        }
    });
    
    document.getElementById('btn-ver-respuestas').addEventListener('click', verRespuestasDetalladas);
    document.getElementById('btn-reiniciar').addEventListener('click', reiniciarExamen);
    
    // Cerrar modal al hacer clic fuera
    document.getElementById('modal-resultados').addEventListener('click', (e) => {
        if (e.target.id === 'modal-resultados') {
            e.target.classList.remove('show');
        }
    });
    
    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
        if (estadoExamen.examenFinalizado && !estadoExamen.modoRevision) return;
        
        if (e.key === 'ArrowLeft') {
            irAnterior();
        } else if (e.key === 'ArrowRight') {
            irSiguiente();
        } else if (e.key >= '1' && e.key <= '4') {
            const indice = parseInt(e.key) - 1;
            const preguntaActual = preguntasAleatorias[estadoExamen.preguntaActual];
            if (preguntaActual && preguntaActual.opciones && indice < preguntaActual.opciones.length) {
                seleccionarOpcion(indice);
            }
        }
    });
    
    // Advertencia antes de salir
    window.addEventListener('beforeunload', (e) => {
        if (!estadoExamen.examenFinalizado) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
}
