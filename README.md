# Simulador de Examen - Estilo Moodle

## 📋 Descripción

Simulador de examen interactivo con 270 preguntas de opción múltiple, diseñado con una interfaz tipo Moodle. El sistema permite:

- ✅ Responder 270 preguntas de cultura general
- ⏱️ Temporizador automático
- 📊 Calificación automática
- 📈 Estadísticas detalladas
- 🔍 Revisión de respuestas
- 💯 Puntaje final con porcentaje

## 🚀 Cómo usar

1. **Abrir el examen:**
   - Abre el archivo `html/examen.html` en tu navegador web

2. **Responder preguntas:**
   - Lee cada pregunta cuidadosamente
   - Selecciona una de las 4 opciones disponibles
   - Usa los botones "Anterior" y "Siguiente" para navegar
   - También puedes usar las teclas de flecha ← →
   - Presiona las teclas 1, 2, 3 o 4 para seleccionar opciones rápidamente

3. **Navegación:**
   - Panel lateral: Muestra los 270 números de preguntas
   - Verde: Preguntas respondidas
   - Azul: Pregunta actual
   - Blanco: Sin responder

4. **Finalizar:**
   - Responde todas las preguntas (o las que puedas)
   - Haz clic en "Finalizar Examen"
   - El sistema te avisará si hay preguntas sin responder

5. **Resultados:**
   - Verás tu porcentaje final
   - Estadísticas completas (correctas, incorrectas, sin responder)
   - Tiempo total empleado
   - Aprobado: 60% o más
   - Reprobado: Menos de 60%

6. **Revisar respuestas:**
   - Haz clic en "Ver Respuestas Detalladas"
   - Verde: Respuestas correctas
   - Rojo: Respuestas incorrectas
   - Navega por todas las preguntas para ver tus errores

7. **Reintentar:**
   - Haz clic en "Reiniciar Examen" para empezar de nuevo

## 📁 Estructura de archivos

```
preguntas/
│
├── html/
│   └── examen.html          # Página principal del examen
│
├── css/
│   └── estilo.css           # Estilos tipo Moodle
│
└── js/
    ├── preguntas.js         # Base de datos con 270 preguntas
    └── examen.js            # Lógica del examen
```

## 🎯 Características

### Interfaz tipo Moodle
- Diseño limpio y profesional
- Navegación intuitiva
- Panel lateral con todas las preguntas
- Barra de progreso en tiempo real

### Sistema de calificación
- Calificación automática
- Porcentaje de aciertos
- Estadísticas detalladas
- Clasificación aprobado/reprobado (60% mínimo)

### Funcionalidades adicionales
- ⏱️ Temporizador cronológico
- 📊 Indicador de progreso
- 🎨 Códigos de color para estado de preguntas
- ⌨️ Atajos de teclado
- ⚠️ Advertencia antes de cerrar la página
- 🔍 Modo revisión con respuestas correctas

## 🎨 Códigos de color

### En navegación lateral:
- **Blanco**: Sin responder
- **Verde claro**: Respondida (durante el examen)
- **Azul**: Pregunta actual
- **Verde oscuro**: Respuesta correcta (después de finalizar)
- **Rojo**: Respuesta incorrecta (después de finalizar)

### En opciones de respuesta:
- **Azul claro**: Opción seleccionada
- **Verde**: Respuesta correcta (modo revisión)
- **Rojo**: Respuesta incorrecta (modo revisión)

## ⌨️ Atajos de teclado

- **Flecha izquierda (←)**: Pregunta anterior
- **Flecha derecha (→)**: Pregunta siguiente
- **Teclas 1-4**: Seleccionar opciones A, B, C, D

## 📊 Criterios de evaluación

- **Total de preguntas**: 270
- **Nota mínima para aprobar**: 60%
- **Puntos por pregunta**: Todas valen igual
- **Preguntas sin responder**: Cuentan como incorrectas

## 💡 Consejos

1. Lee cuidadosamente cada pregunta antes de responder
2. Usa el panel lateral para ver tu progreso
3. No te apresures, el tiempo es solo informativo
4. Puedes cambiar tus respuestas antes de finalizar
5. Revisa las preguntas sin responder antes de finalizar
6. Usa el modo revisión para aprender de tus errores

## 🔧 Requisitos técnicos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- No requiere conexión a internet (funciona offline)

## 📝 Notas

- Las preguntas están en español
- El examen se puede reiniciar las veces que quieras
- Los resultados no se guardan (solo durante la sesión actual)
- Cierra el navegador para empezar desde cero

## 🎓 ¡Buena suerte!

¡Éxito en tu examen! 🍀
