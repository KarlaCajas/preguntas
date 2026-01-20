// Base de datos de preguntas - 270 preguntas del examen
const preguntasDB = [
    {
        id: 1,
        pregunta: "El cálculo relacional de tuplas se caracteriza por:",
        opciones: ["Ser un lenguaje procedimental", "Indicar cómo obtener los datos", "Ser un lenguaje declarativo", "Trabajar únicamente con valores individuales"],
        respuestaCorrecta: 2
    },
    {
        id: 2,
        pregunta: "¿Cuál JOIN devuelve únicamente las filas con coincidencias en ambas tablas?",
        opciones: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"],
        respuestaCorrecta: 3
    },
    {
        id: 3,
        pregunta: "La sentencia SQL usada para modificar valores en tuplas existentes es:",
        opciones: ["INSERT", "UPDATE", "DELETE", "SELECT"],
        respuestaCorrecta: 1
    },
    {
        id: 4,
        pregunta: "¿Qué es un sistema de información?",
        opciones: ["Un conjunto de documentos físicos para controlar procesos", "Un conjunto de componentes que recolectan, procesan y distribuyen información", "Un programa para gestionar datos únicamente", "Un tipo de software financiero"],
        respuestaCorrecta: 1
    },
    {
        id: 5,
        pregunta: "¿Cuál de los siguientes es un componente de un sistema de información?",
        opciones: ["Diagramas UML", "Hardware", "Motores eléctricos", "Bases de datos gráficas"],
        respuestaCorrecta: 1
    },
    {
        id: 6,
        pregunta: "La propiedad de los datos que indica que deben estar disponibles cuando se necesitan es:",
        opciones: ["Precisión", "Calidad", "Oportunidad", "Seguridad"],
        respuestaCorrecta: 2
    },
    {
        id: 7,
        pregunta: "Un sistema de bases de datos está gestionado por:",
        opciones: ["Un lenguaje de programación", "Un SGBD", "Un entorno de hardware gráfico", "Un software antivirus"],
        respuestaCorrecta: 1
    },
    {
        id: 8,
        pregunta: "En el modelo ER, una entidad se representa mediante:",
        opciones: ["Un rombo", "Un óvalo", "Un rectángulo", "Un triángulo"],
        respuestaCorrecta: 2
    },
    {
        id: 9,
        pregunta: "La cardinalidad 1:N indica que:",
        opciones: ["Una entidad se relaciona con exactamente una de otra", "Muchas entidades se relacionan entre sí sin límites", "Una entidad se relaciona con muchas de otra entidad", "Ninguna entidad debe relacionarse"],
        respuestaCorrecta: 2
    },
    {
        id: 10,
        pregunta: "La normalización busca principalmente:",
        opciones: ["Aumentar la cantidad de tablas", "Disminuir la redundancia de datos", "Eliminar todas las relaciones", "Crear claves compuestas"],
        respuestaCorrecta: 1
    },
    {
        id: 11,
        pregunta: "En un Data Warehouse con modelo estrella, un analista detecta que las consultas son lentas al filtrar por atributos de una dimensión muy granular (por ejemplo, DIM_CLIENTE con millones de filas). ¿Cuál es la acción más adecuada para mejorar el rendimiento sin romper el diseño dimensional?",
        opciones: ["Normalizar completamente la dimensión y convertirla en un copo de nieve", "Convertir la dimensión en una tabla de hechos para reducir tamaño", "Crear jerarquías de atributos e índices específicos sobre dichas jerarquías", "Eliminar atributos de la dimensión para hacerla más pequeña"],
        respuestaCorrecta: 2
    },
    {
        id: 12,
        pregunta: "En una base OLTP altamente transaccional, se observa un incremento de deadlocks entre procesos simultáneos. ¿Cuál es la causa más probable?",
        opciones: ["Índices demasiado grandes que ralentizan el acceso secuencial", "Acceso a tablas en distinto orden entre transacciones concurrentes", "El servidor no tiene suficiente almacenamiento SSD", "Exceso de normalización en tercera forma normal"],
        respuestaCorrecta: 1
    },
    {
        id: 13,
        pregunta: "Durante la implementación de una arquitectura ETL distribuida, un ingeniero define que la extracción debe hacerse desde múltiples fuentes heterogéneas vía ODBC, JDBC y APIs REST. ¿Cuál es la razón clave para separar extracción y transformación en ambientes distribuidos?",
        opciones: ["Evitar el uso de memoria en el servidor de base de datos", "Reducir la latencia de almacenamiento local", "Permitir paralelismo, control de fallos y orquestación por microservicios", "Garantizar normalización en los modelos del DWH"],
        respuestaCorrecta: 2
    },
    {
        id: 14,
        pregunta: "Un Data Mart de ventas se diseñó siguiendo un esquema Copo de Nieve. Sin embargo, los reportes tardan demasiado. ¿Cuál es la desventaja principal que se manifiesta en este caso?",
        opciones: ["La agregación en los hechos se vuelve inconsistente", "Las dimensiones normalizadas obligan a múltiples JOINs aumentando el tiempo de consulta", "Los hechos pierden granularidad", "Disminuye la integridad referencial del modelo"],
        respuestaCorrecta: 1
    },
    {
        id: 15,
        pregunta: "En un sistema de bases de datos distribuidas heterogéneo federado, ¿qué característica es esencial para que los usuarios perciban una visión integrada de los datos?",
        opciones: ["Que todos los nodos ejecuten el mismo DBMS", "La existencia de un esquema global o vista lógica unificada", "Que todos los nodos utilicen el mismo sistema operativo", "Que todos los nodos tengan el mismo hardware y capacidad de almacenamiento"],
        respuestaCorrecta: 1
    },
    {
        id: 16,
        pregunta: "Una organización decide aplicar fragmentación horizontal sobre una tabla de CLIENTES para distribuirla entre dos centros de datos: uno en Quito y otro en Guayaquil. ¿Qué situación describe mejor este tipo de diseño?",
        opciones: ["Cada centro almacena columnas diferentes de la tabla CLIENTES", "Cada centro almacena filas diferentes de la tabla CLIENTES según criterios geográficos", "Cada centro almacena una copia completa de la tabla CLIENTES", "La tabla CLIENTES se divide en múltiples DBMS sin ningún criterio lógico"],
        respuestaCorrecta: 1
    },
    {
        id: 17,
        pregunta: "En un entorno con replicación asincrónica, ¿cuál es el riesgo más crítico desde el punto de vista de consistencia de datos?",
        opciones: ["Los nodos pueden dejar de comunicarse permanentemente", "Los nodos secundarios podrían responder con datos desactualizados respecto al nodo primario", "No es posible ejecutar transacciones distribuidas", "No se pueden ejecutar consultas distribuidas entre nodos"],
        respuestaCorrecta: 1
    },
    {
        id: 18,
        pregunta: "En un ambiente de bases de datos distribuidas heterogéneas múltiples (sin esquema global), se quiere ejecutar consultas analíticas sobre datos repartidos en varios DBMS distintos. ¿Cuál es el componente más importante para hacer posible esta integración sin modificar las bases de datos originales?",
        opciones: ["Un sistema de archivos distribuido que unifique todos los discos", "Un middleware o capa de integración que traduzca y orqueste consultas entre los distintos DBMS", "Un único coordinador de transacciones 2PC", "Replicación sincrónica de todos los datos hacia un solo nodo maestro"],
        respuestaCorrecta: 1
    },
    {
        id: 19,
        pregunta: "En el proceso de abstracción de un modelo de datos para una universidad, se identifican las entidades Persona, Estudiante, Docente y Administrativo. Todas comparten atributos comunes, pero cada una tiene atributos propios. ¿Cuál es el enfoque correcto en un modelo EER?",
        opciones: ["Crear cuatro entidades totalmente independientes sin relación entre sí", "Definir Persona como supertipo y Estudiante, Docente y Administrativo como subtipos en una jerarquía de generalización/especialización", "Definir solo la entidad Persona con todos los atributos (promedio, título, cargo) y dejar algunos en NULL según el caso", "Unir Estudiante y Docente en una sola entidad, y Administrativo en otra, sin supertipo común"],
        respuestaCorrecta: 1
    },
    {
        id: 20,
        pregunta: "Diseñas el backend analítico de una institución financiera con necesidades OLTP, análisis histórico y escalabilidad. ¿Cuál combinación de primitivas es la más adecuada?",
        opciones: ["Solo R: todo en un gran esquema normalizado para evitar redundancia", "R + Di: OLTP normalizado y un Datawarehouse dimensional en un único servidor", "R + Dt: OLTP normalizado replicado geográficamente, sin modelo dimensional", "R + Di + Dt: OLTP normalizado, Datawarehouse dimensional y distribución/replicación entre nodos"],
        respuestaCorrecta: 3
    },
    {
        id: 21,
        pregunta: "¿Qué efecto tiene la llamada al sistema fork() en un proceso en Linux?",
        opciones: ["Termina el proceso actual y lanza uno nuevo sin relación", "Crea un nuevo hilo dentro del mismo proceso", "Crea un proceso hijo duplicado del proceso actual", "Reemplaza el proceso actual con un nuevo programa"],
        respuestaCorrecta: 2
    },
    {
        id: 22,
        pregunta: "¿Qué técnica de planificación de CPU selecciona siempre el proceso con el menor tiempo estimado de ejecución?",
        opciones: ["Round Robin", "Prioridades", "FIFO", "SJF (Shortest Job First)"],
        respuestaCorrecta: 3
    },
    {
        id: 23,
        pregunta: "¿Qué método de sincronización evita que dos procesos accedan simultáneamente a un recurso compartido?",
        opciones: ["Interrupciones de hardware", "Sección crítica y exclusión mutua", "Fragmentación externa", "Segmentación"],
        respuestaCorrecta: 1
    },
    {
        id: 24,
        pregunta: "El bloque de control de procesos (PCB) almacena principalmente…",
        opciones: ["La lista completa de programas instalados", "El estado y la información necesaria para gestionar un proceso", "El tamaño total del disco duro", "El historial de comandos del usuario"],
        respuestaCorrecta: 1
    },
    {
        id: 25,
        pregunta: "¿Qué estado de un proceso indica que está preparado para ejecutarse cuando la CPU esté disponible?",
        opciones: ["Ejecutando", "Listo (Ready)", "Bloqueado", "Finalizado"],
        respuestaCorrecta: 1
    },
    {
        id: 26,
        pregunta: "En un sistema con múltiples hilos de ejecución, un hilo (thread) se define como…",
        opciones: ["Un proceso que contiene otros procesos", "Un programa almacenado en memoria secundaria", "La unidad básica de utilización de CPU dentro de un proceso", "Una interrupción del sistema operativo"],
        respuestaCorrecta: 2
    },
    {
        id: 27,
        pregunta: "¿Qué técnica de gestión de memoria divide los procesos en bloques del mismo tamaño?",
        opciones: ["Segmentación", "Paginación", "Swapping", "Fragmentación externa"],
        respuestaCorrecta: 1
    },
    {
        id: 28,
        pregunta: "En la gestión de entrada y salida, los controladores (drivers) funcionan como…",
        opciones: ["Proveedores de memoria adicional", "Aplicaciones ejecutadas por el usuario", "Interfaces entre el sistema operativo y los dispositivos físicos", "Protocolos de red"],
        respuestaCorrecta: 2
    },
    {
        id: 29,
        pregunta: "¿Cuál de los siguientes es un principio fundamental del software libre?",
        opciones: ["Acceso limitado al código fuente", "Licencias exclusivas de uso comercial", "Libertad para estudiar, modificar y distribuir el código", "Prohibición total de redistribución"],
        respuestaCorrecta: 2
    },
    {
        id: 30,
        pregunta: "¿Qué mecanismo utiliza el sistema operativo para garantizar la seguridad y evitar accesos no autorizados?",
        opciones: ["Compilación dinámica", "Control de permisos y autenticación", "Fragmentación interna", "Multiprogramación"],
        respuestaCorrecta: 1
    },
    {
        id: 31,
        pregunta: "¿Cuál es uno de los principales objetivos de las pruebas de software?",
        opciones: ["Eliminar el código no utilizado.", "Demostrar que el software nunca falla.", "Identificar defectos y mejorar la calidad del producto.", "Sustituir la fase de desarrollo."],
        respuestaCorrecta: 2
    },
    {
        id: 32,
        pregunta: "¿Qué relación existe entre calidad de software y pruebas?",
        opciones: ["Las pruebas disminuyen la calidad del software.", "Las pruebas garantizan una interfaz atractiva.", "Las pruebas son una herramienta para evaluar y asegurar la calidad.", "Las pruebas son innecesarias si el equipo es experimentado."],
        respuestaCorrecta: 2
    },
    {
        id: 33,
        pregunta: "¿Cuál de los siguientes es un principio fundamental de las pruebas de software?",
        opciones: ["Probar todo es posible.", "Las pruebas no deben repetirse.", "La agrupación de errores tiende a concentrarse.", "Si pasa una vez, ya no necesita volver a probarse."],
        respuestaCorrecta: 2
    },
    {
        id: 34,
        pregunta: "¿Cuál es el rol principal del ingeniero de pruebas?",
        opciones: ["Diseñar arquitecturas escalables.", "Gestionar bases de datos.", "Definir, ejecutar y documentar casos de prueba.", "Implementar redes seguras."],
        respuestaCorrecta: 2
    },
    {
        id: 35,
        pregunta: "¿Cuál es una diferencia clave entre verificación y validación?",
        opciones: ["La verificación implica probar el hardware únicamente.", "La validación se realiza solo con el código fuente.", "La verificación comprueba que el producto se construye correctamente.", "La validación se enfoca en fases iniciales del desarrollo."],
        respuestaCorrecta: 2
    },
    {
        id: 36,
        pregunta: "¿Qué representa la técnica de caja blanca?",
        opciones: ["Se basa en la exploración de la interfaz gráfica.", "Se enfoca en los requerimientos sin ver el código.", "Implica el conocimiento del código fuente.", "Se utiliza únicamente para pruebas de rendimiento."],
        respuestaCorrecta: 2
    },
    {
        id: 37,
        pregunta: "¿Cuál es la causa más común de errores en el software?",
        opciones: ["Fallas del sistema operativo.", "Mal uso de la memoria.", "Errores humanos en el desarrollo.", "Actualizaciones automáticas."],
        respuestaCorrecta: 2
    },
    {
        id: 38,
        pregunta: "¿Qué describe mejor a una revisión 'walkthrough'?",
        opciones: ["Una técnica de análisis de rendimiento.", "Una ejecución de código automatizada.", "Una revisión informal guiada por el autor del artefacto.", "Un tipo de prueba de integración."],
        respuestaCorrecta: 2
    },
    {
        id: 39,
        pregunta: "¿Cuál de las siguientes afirmaciones describe una prueba de regresión?",
        opciones: ["Evalúa el rendimiento con muchos usuarios concurrentes.", "Valida que cambios recientes no hayan afectado funciones previas.", "Mide la usabilidad del sistema.", "Es una prueba de aceptación temprana."],
        respuestaCorrecta: 1
    },
    {
        id: 40,
        pregunta: "¿Cuál es una limitación común de las pruebas unitarias?",
        opciones: ["No pueden automatizarse.", "No se pueden ejecutar en proyectos grandes.", "No detectan fallos de integración entre módulos.", "Solo prueban aplicaciones web."],
        respuestaCorrecta: 2
    },
    {
        id: 41,
        pregunta: "¿Qué caracteriza a una prueba de aceptación alfa?",
        opciones: ["Se realiza por usuarios reales en entornos reales.", "Se lleva a cabo por los desarrolladores de manera informal.", "Se ejecuta en paralelo con el desarrollo.", "Se realiza internamente con participación del cliente"],
        respuestaCorrecta: 3
    },
    {
        id: 42,
        pregunta: "¿Qué se entiende por TDD (Test Driven Development)?",
        opciones: ["Un enfoque donde se escribe código y luego se prueba.", "Un enfoque de pruebas no automatizadas.", "Desarrollo dirigido por pruebas, donde se escriben pruebas antes del código.", "Una técnica exclusiva de pruebas manuales."],
        respuestaCorrecta: 2
    },
    {
        id: 43,
        pregunta: "¿Cuál es el propósito del plan de pruebas?",
        opciones: ["Eliminar la necesidad de pruebas.", "Registrar únicamente errores encontrados.", "Definir estrategia, alcance y recursos necesarios para probar.", "Generar el informe final de pruebas."],
        respuestaCorrecta: 2
    },
    {
        id: 44,
        pregunta: "¿Qué herramienta se utiliza para pruebas de carga y rendimiento?",
        opciones: ["JUnit", "Jenkins", "Postman", "JMeter"],
        respuestaCorrecta: 3
    },
    {
        id: 45,
        pregunta: "¿Qué es una herramienta de gestión de pruebas?",
        opciones: ["Un sistema de versionado de código.", "Un entorno para desarrollar aplicaciones móviles.", "Un sistema para organizar y planificar actividades de prueba.", "Una base de datos relacional."],
        respuestaCorrecta: 2
    },
    {
        id: 46,
        pregunta: "¿Cuál es la principal función del atributo aria-label en HTML?",
        opciones: ["Aplicar estilos directamente al texto", "Proporcionar accesibilidad mediante descripciones", "Aumentar el tamaño del campo de entrada", "Enlazar hojas de estilo"],
        respuestaCorrecta: 1
    },
    {
        id: 47,
        pregunta: "¿Qué atributo se usa en un formulario para especificar la URL de destino?",
        opciones: ["target", "action", "href", "method"],
        respuestaCorrecta: 1
    },
    {
        id: 48,
        pregunta: "¿Qué etiqueta HTML permite definir contenido reutilizable sin mostrarlo de inmediato?",
        opciones: ["<article>", "<section>", "<div>", "<template>"],
        respuestaCorrecta: 3
    },
    {
        id: 49,
        pregunta: "¿Qué valor de rel impide que los motores de búsqueda sigan un enlace?",
        opciones: ["nofollow", "noindex", "external", "nofollowing"],
        respuestaCorrecta: 0
    },
    {
        id: 50,
        pregunta: "¿Qué atributo permite validar un campo con expresiones regulares en HTML5?",
        opciones: ["pattern", "regex", "validate", "expresión"],
        respuestaCorrecta: 0
    },
    {
        id: 51,
        pregunta: "¿Cuál es el propósito de la propiedad will-change en CSS?",
        opciones: ["Eliminar transiciones", "Optimizar el rendimiento para cambios futuros", "Ocultar elementos innecesarios", "Alinear contenido automáticamente"],
        respuestaCorrecta: 1
    },
    {
        id: 52,
        pregunta: "¿Qué unidad de medida es relativa al ancho de la ventana del navegador?",
        opciones: ["em", "rem", "vw", "ch"],
        respuestaCorrecta: 2
    },
    {
        id: 53,
        pregunta: "¿Qué propiedad evita el colapso de márgenes y permite encerrar elementos flotantes?",
        opciones: ["display: block", "clear: both", "overflow: hidden", "position: relative"],
        respuestaCorrecta: 2
    },
    {
        id: 54,
        pregunta: "¿Qué valor de position permite que un elemento permanezca visible durante el scroll?",
        opciones: ["static", "absolute", "fixed", "relative"],
        respuestaCorrecta: 2
    },
    {
        id: 55,
        pregunta: "¿Cuál es el efecto de z-index en un elemento posicionado?",
        opciones: ["Cambia el tamaño", "Ajusta la rotación", "Controla el orden de apilamiento", "Ajusta el padding"],
        respuestaCorrecta: 2
    },
    {
        id: 56,
        pregunta: "¿Qué representa una Promise en JavaScript?",
        opciones: ["Una función repetitiva", "Una operación asincrónica que puede completarse o fallar", "Una variable constante", "Una API externa"],
        respuestaCorrecta: 1
    },
    {
        id: 57,
        pregunta: "¿Qué método convierte un objeto en una cadena JSON?",
        opciones: ["JSON.parse()", "JSON.stringify()", "toString()", "Object.toJson()"],
        respuestaCorrecta: 1
    },
    {
        id: 58,
        pregunta: "¿Qué significa 'hoisting' en JavaScript?",
        opciones: ["Eliminar variables duplicadas", "Elevar declaraciones al principio de su contexto", "Separar funciones del código", "Priorizar llamadas AJAX"],
        respuestaCorrecta: 1
    },
    {
        id: 59,
        pregunta: "¿Cuál es el resultado de Array.prototype.map()?",
        opciones: ["Un número", "Un nuevo array con los resultados de la función aplicada", "Un string", "Una copia del array original"],
        respuestaCorrecta: 1
    },
    {
        id: 60,
        pregunta: "¿Qué hace el método bind() en una función?",
        opciones: ["Elimina this", "Ejecuta la función inmediatamente", "Fija el contexto this de la función", "Clona la función"],
        respuestaCorrecta: 2
    },
    {
        id: 61,
        pregunta: "¿Qué sistema utiliza el estilo APA para la citación en el texto?",
        opciones: ["Autor-página", "Autor-año", "Número-página", "Abreviatura-numero"],
        respuestaCorrecta: 1
    },
    {
        id: 62,
        pregunta: "¿Cuál es el formato para una cita textual corta?",
        opciones: ["Menos de 20 palabras y cursiva", "Menos de 30 palabras y negrita", "Menos de 40 palabras y entre comillas", "Más de 50 palabras y con sangría"],
        respuestaCorrecta: 2
    },
    {
        id: 63,
        pregunta: "¿Qué debe incluir una cita textual larga?",
        opciones: ["Comillas y letra cursiva", "Texto separado, sin comillas, con sangría de 1.27 cm", "Texto en negrita con letra más grande", "Texto subrayado y centrado"],
        respuestaCorrecta: 1
    },
    {
        id: 64,
        pregunta: "¿Cuándo se utiliza 'et al.' en una cita?",
        opciones: ["Para citar más de dos autores", "Para citar autores corporativos", "Para citar tres o más autores", "Para todas las citas"],
        respuestaCorrecta: 2
    },
    {
        id: 65,
        pregunta: "¿Qué se debe hacer cuando se citan dos autores con el mismo apellido?",
        opciones: ["Usar solo el apellido", "Incluir las iniciales de sus nombres", "Colocar los apellidos en cursiva", "Usar la palabra 'y' entre los apellidos"],
        respuestaCorrecta: 1
    },
    {
        id: 66,
        pregunta: "¿Qué se utiliza para indicar una fuente sin fecha?",
        opciones: ["(s.f.)", "(n.d.)", "(sin fecha)", "(desconocido)"],
        respuestaCorrecta: 0
    },
    {
        id: 67,
        pregunta: "¿Qué tipo de cita no requiere referencia?",
        opciones: ["Citas de fuentes secundarias", "Citas de obras clásicas", "Citas de publicaciones periódicas", "Citas de sitios web"],
        respuestaCorrecta: 1
    },
    {
        id: 68,
        pregunta: "¿Cuál es la diferencia entre referencias y bibliografía en APA?",
        opciones: ["La bibliografía incluye solo las fuentes citadas", "Las referencias incluyen todas las fuentes investigadas", "La bibliografía incluye fuentes citadas y no citadas", "Las referencias no requieren formato específico"],
        respuestaCorrecta: 2
    },
    {
        id: 69,
        pregunta: "¿Cuál es el formato correcto para una cita narrativa de un solo autor?",
        opciones: ["(López, 2020)", "López (2020)", "(2020, López)", "López - 2020"],
        respuestaCorrecta: 1
    },
    {
        id: 70,
        pregunta: "¿Qué se debe incluir en la referencia de un libro?",
        opciones: ["Año y país de publicación", "Título, autor y ciudad de publicación", "Autor, año, título y editorial", "Solo el autor y título"],
        respuestaCorrecta: 2
    },
    {
        id: 71,
        pregunta: "¿Cómo se ordenan las referencias en la lista?",
        opciones: ["Por fecha de publicación", "Por título de la obra", "Por orden alfabético del apellido del autor", "Por tipo de fuente"],
        respuestaCorrecta: 2
    },
    {
        id: 72,
        pregunta: "¿Cuál es el formato correcto para una cita de un autor corporativo con sigla?",
        opciones: ["(OMS, 2020)", "OMS, 2020", "(Organización Mundial de la Salud, 2020)", "Salud, OMS, 2020"],
        respuestaCorrecta: 0
    },
    {
        id: 73,
        pregunta: "¿En qué casos se utiliza una sangría francesa?",
        opciones: ["En citas largas", "En el formato de referencias", "En títulos de secciones", "En citas parentéticas"],
        respuestaCorrecta: 1
    },
    {
        id: 74,
        pregunta: "¿Qué se hace si una fuente tiene más de 20 autores?",
        opciones: ["Se listan todos los autores", "Se omiten los autores después del 19 y se usa 'et al.'", "Se citan solo los tres primeros", "Se cita solo el primer autor"],
        respuestaCorrecta: 1
    },
    {
        id: 75,
        pregunta: "¿Cómo se cita una obra sin autor?",
        opciones: ["Usando 'Anónimo'", "Usando el título de la obra", "Usando 'Desconocido'", "Usando el nombre del editor"],
        respuestaCorrecta: 1
    },
    {
        id: 76,
        pregunta: "¿Qué elemento no se incluye en las referencias de un libro en APA 7ma edición?",
        opciones: ["Nombre del autor", "Ciudad de publicación", "Título del libro", "Editorial"],
        respuestaCorrecta: 1
    },
    {
        id: 77,
        pregunta: "¿Cuál es el formato correcto para citar un video en línea?",
        opciones: ["Apellido, Año, URL", "Título del video, fecha, autor", "Apellido, título del video, fuente, URL", "URL, fecha, autor"],
        respuestaCorrecta: 2
    },
    {
        id: 78,
        pregunta: "¿Cómo se citan varias obras del mismo autor con igual fecha?",
        opciones: ["Usando números romanos", "Agregando letras al año (a, b, c)", "Usando comillas dobles", "Incluyendo el título de la obra"],
        respuestaCorrecta: 1
    },
    {
        id: 79,
        pregunta: "¿Qué se hace si la cita no tiene número de página?",
        opciones: ["Se omite la cita", "Se usa el número del párrafo", "Se coloca 'sin página'", "Se coloca 'página desconocida'"],
        respuestaCorrecta: 1
    },
    {
        id: 80,
        pregunta: "¿Qué tipo de cita enfatiza el autor?",
        opciones: ["Cita narrativa", "Cita parentética", "Cita directa", "Parafraseo"],
        respuestaCorrecta: 0
    },
    {
        id: 81,
        pregunta: "¿En qué idioma se deben adaptar las normas de citación según el documento?",
        opciones: ["Inglés", "Español", "Francés", "Portugués"],
        respuestaCorrecta: 1
    },
    {
        id: 82,
        pregunta: "¿Qué tipo de fuente se recomienda utilizar para citas textuales?",
        opciones: ["Arial 14 puntos", "Times New Roman 12 puntos", "Calibri 11 puntos", "Georgia 10 puntos"],
        respuestaCorrecta: 1
    },
    {
        id: 83,
        pregunta: "¿Qué palabra se usa para indicar una traducción en la referencia?",
        opciones: ["Traducido por", "[Trad.]", "Translated", "Versión traducida"],
        respuestaCorrecta: 1
    },
    {
        id: 84,
        pregunta: "¿Cómo se indica una cita de material audiovisual?",
        opciones: ["Usando 'p.' para el tiempo", "Usando la marca de tiempo (minuto:segundo)", "Usando el año de la producción", "Usando el nombre del director"],
        respuestaCorrecta: 1
    },
    {
        id: 85,
        pregunta: "¿Qué tipo de citas requieren el uso de 'pp.'?",
        opciones: ["Citas de un solo párrafo", "Citas con más de una página", "Citas de menos de 40 palabras", "Citas sin autor"],
        respuestaCorrecta: 1
    },
    {
        id: 86,
        pregunta: "¿Qué es un abstract en un artículo científico?",
        opciones: ["Un resumen breve y autónomo del manuscrito.", "Una parte opcional del manuscrito.", "Una lista de referencias del estudio.", "Un documento separado del artículo."],
        respuestaCorrecta: 0
    },
    {
        id: 87,
        pregunta: "¿Cuál de los siguientes NO es un tipo de abstract?",
        opciones: ["Descriptivo.", "Informativo.", "Extensivo.", "Destacado."],
        respuestaCorrecta: 2
    },
    {
        id: 88,
        pregunta: "¿Qué estructura suele seguir un abstract estructurado?",
        opciones: ["IMRAD (Introducción, Metodología, Resultados y Discusión).", "Título, Autores, Referencias, Conclusiones.", "Introducción, Resultados, Análisis, Bibliografía.", "Propósito, Métodos, Resultados, Citas."],
        respuestaCorrecta: 0
    },
    {
        id: 89,
        pregunta: "¿Qué característica NO es parte de un buen abstract?",
        opciones: ["Conciso.", "Claro.", "Complejo.", "Crítico."],
        respuestaCorrecta: 2
    },
    {
        id: 90,
        pregunta: "¿Cuál es la principal función de un abstract?",
        opciones: ["Proporcionar una lista detallada de referencias.", "Atraer al lector y proporcionar un resumen del estudio.", "Presentar los resultados en detalle con gráficos.", "Discutir a fondo la metodología utilizada"],
        respuestaCorrecta: 1
    },
    {
        id: 91,
        pregunta: "¿Cuál fue la primera revista en publicar un abstract en formato de un solo párrafo?",
        opciones: ["The Lancet.", "Canadian Medical Association Journal.", "Nature.", "Science."],
        respuestaCorrecta: 1
    },
    {
        id: 92,
        pregunta: "¿Qué debe incluir un abstract estructurado en su sección de 'Resultados'?",
        opciones: ["Solo una descripción general del estudio.", "Los hallazgos más relevantes, incluyendo datos estadísticos clave.", "Un análisis profundo de la literatura previa.", "Comentarios de otros investigadores sobre el tema."],
        respuestaCorrecta: 1
    },
    {
        id: 93,
        pregunta: "¿Por qué un abstract es crucial para la indexación de un artículo?",
        opciones: ["Porque contiene citas de otros trabajos.", "Porque ayuda a los lectores a decidir si leer el artículo completo.", "Porque resume la bibliografía utilizada.", "Porque reemplaza la introducción del artículo."],
        respuestaCorrecta: 1
    },
    {
        id: 94,
        pregunta: "¿Cuál de los siguientes NO debe incluirse en un abstract?",
        opciones: ["Abreviaciones no explicadas.", "Resultados clave del estudio.", "Conclusiones del estudio.", "Recomendaciones basadas en los hallazgos."],
        respuestaCorrecta: 0
    },
    {
        id: 95,
        pregunta: "¿Qué diferencia hay entre un abstract para un congreso y uno para una revista?",
        opciones: ["En los congresos, el abstract puede incluir tablas o figuras.", "No hay diferencia entre ambos formatos.", "En un congreso, el abstract es más extenso que en una revista.", "Los abstracts de congresos no tienen límite de palabras."],
        respuestaCorrecta: 0
    },
    {
        id: 96,
        pregunta: "¿Qué es un dato en estadística?",
        opciones: ["Un número aleatorio sin contexto.", "Un conjunto de información sin procesar.", "Un gráfico que resume información.", "Una medida de centralización."],
        respuestaCorrecta: 1
    },
    {
        id: 97,
        pregunta: "¿Qué tipo de variable es el color de los ojos?",
        opciones: ["Nominal.", "Ordinal.", "Intervalo.", "Ratio."],
        respuestaCorrecta: 0
    },
    {
        id: 98,
        pregunta: "¿Cuál de las siguientes escalas de medición permite operaciones matemáticas como la suma y resta, pero no la multiplicación o división?",
        opciones: ["Nominal.", "Ordinal.", "Intervalo.", "Ratio."],
        respuestaCorrecta: 2
    },
    {
        id: 99,
        pregunta: "¿Qué medida de tendencia central se ve más afectada por valores extremos?",
        opciones: ["Moda.", "Media.", "Mediana.", "Rango intercuartílico."],
        respuestaCorrecta: 1
    },
    {
        id: 100,
        pregunta: "¿Qué medida de dispersión es más resistente a valores extremos?",
        opciones: ["Rango.", "Desviación estándar.", "Mediana absoluta de desviación (MAD).", "Media."],
        respuestaCorrecta: 2
    },
    {
        id: 101,
        pregunta: "Si un conjunto de datos tiene una distribución normal, ¿qué relación hay entre la media, mediana y moda?",
        opciones: ["Media < Mediana < Moda.", "Media > Mediana > Moda.", "Media = Mediana = Moda.", "No hay relación."],
        respuestaCorrecta: 2
    },
    {
        id: 102,
        pregunta: "¿Qué gráfico se usa comúnmente para detectar valores atípicos en un conjunto de datos?",
        opciones: ["Histograma.", "Gráfico de líneas.", "Gráfico de dispersión.", "Boxplot (diagrama de caja y bigotes)."],
        respuestaCorrecta: 3
    },
    {
        id: 103,
        pregunta: "¿Cuál es la principal diferencia entre estadísticas descriptivas e inferenciales?",
        opciones: ["Las estadísticas descriptivas resumen datos, mientras que las inferenciales hacen predicciones basadas en datos muestrales.", "Las estadísticas inferenciales siempre son más precisas que las descriptivas.", "Las estadísticas descriptivas requieren una gran cantidad de datos.", "No hay diferencia."],
        respuestaCorrecta: 0
    },
    {
        id: 104,
        pregunta: "¿Qué prueba estadística se usa para comparar las medias de tres o más grupos?",
        opciones: ["Prueba t de Student.", "ANOVA.", "Prueba de chi-cuadrado.", "Regresión lineal."],
        respuestaCorrecta: 1
    },
    {
        id: 105,
        pregunta: "¿Qué tipo de error cometes si rechazas una hipótesis nula verdadera?",
        opciones: ["Error tipo I.", "Error tipo II.", "Error de estimación.", "Error de muestreo."],
        respuestaCorrecta: 0
    },
    {
        id: 106,
        pregunta: "¿Cuál es el nivel de confianza más comúnmente usado en inferencia estadística?",
        opciones: ["80%.", "90%.", "95%.", "99%."],
        respuestaCorrecta: 2
    },
    {
        id: 107,
        pregunta: "¿Qué representa un p-valor en una prueba de hipótesis?",
        opciones: ["La probabilidad de que la hipótesis nula sea verdadera.", "La probabilidad de obtener resultados iguales o más extremos si la hipótesis nula es cierta.", "La certeza absoluta de que un resultado es significativo.", "La diferencia exacta entre dos grupos."],
        respuestaCorrecta: 1
    },
    {
        id: 108,
        pregunta: "¿Qué método es apropiado si los datos no cumplen con la normalidad?",
        opciones: ["Prueba t de Student.", "ANOVA.", "Pruebas no paramétricas como la de Mann-Whitney U.", "Regresión lineal."],
        respuestaCorrecta: 2
    },
    {
        id: 109,
        pregunta: "¿Qué mide la kurtosis en una distribución de datos?",
        opciones: ["El grado de asimetría de la distribución.", "La dispersión de los datos alrededor de la media.", "La altura y forma de la curva de la distribución.", "La relación entre la media y la mediana."],
        respuestaCorrecta: 2
    },
    {
        id: 110,
        pregunta: "¿Cuál de los siguientes es un método gráfico para evaluar la normalidad de un conjunto de datos?",
        opciones: ["Prueba de Kolmogorov-Smirnov.", "Prueba de Shapiro-Wilk.", "Gráfico Q-Q (Quantile-Quantile).", "Prueba de chi-cuadrado."],
        respuestaCorrecta: 2
    },
    {
        id: 111,
        pregunta: "¿Cuál de las siguientes alternativas estipulan una manera incorrecta de evitar sesgos en el planteamiento de preguntas en una encuesta?",
        opciones: ["Proporcionar categorias de respuestas exhaustiva, imparcial y no excluyentes.", "Haga suficientes preguntas para cubrir adecuadamente el tema.", "Tenga cuidado de usar redacción que influya en la forma en que el encuestado piensa en el problema.", "Escriba instrucciones o comentarios claros e imparciales."],
        respuestaCorrecta: 2
    },
    {
        id: 112,
        pregunta: "¿Cuál de las siguientes opciones corresponde a la definición de una encuesta?",
        opciones: ["Es solo el instrumento (el cuestionario o la lista de verificación) para recopilar información.", "Es un sistema integral de recopilación de información para describir, comparar o explicar conocimientos, actitudes y comportamientos.", "Estudio que se le realiza a un grupo de personas, estas no representan a una población más amplia.", "Es una conversación dirigida, con un propósito especifico y que usa un formato de preguntas y respuestas."],
        respuestaCorrecta: 1
    },
    {
        id: 113,
        pregunta: "¿Cuál de las siguientes opciones representa la actividad que se debe realizar después de diseñar y administrar una encuesta?",
        opciones: ["Hacer la encuesta.", "Realizar un análisis de datos.", "Implementar cuestionarios.", "Investigar sesgos sistemáticos."],
        respuestaCorrecta: 1
    },
    {
        id: 114,
        pregunta: "¿Cuál de las siguientes opciones representa un planteamiento incorrecto en relación con la población objetivo en una encuesta?",
        opciones: ["Es un conjunto representativo de personas que estén en condiciones de responder a las preguntas de la encuesta.", "Se representa como una lista finita de todos sus miembros.", "Su definición surge de los objetivos de la encuesta.", "La población objetivo específica puede ser en sí misma un subconjunto de una población más grande."],
        respuestaCorrecta: 0
    },
    {
        id: 115,
        pregunta: "¿Cuál de las siguientes opciones corresponde al orden de actividades adecuado para realizar una investigación?",
        opciones: ["Idea, problema, estado del arte, reporte, investigación", "Problema, estado del arte, investigación, idea, reporte", "Problema, investigación, estado del arte, idea, reporte", "Problema, idea, estado del arte, investigación, reporte"],
        respuestaCorrecta: 3
    },
    {
        id: 116,
        pregunta: "¿Cuál(es) de las siguientes afirmaciones no corresponden a los criterios por los cuales se clasifica la investigación?",
        opciones: ["De acuerdo al tipo de problema que se aborda", "Según el propósito de carácter teórico o de solución de problemas", "Según el tipo de instrumentos utilizados en la recolección, procesamiento y análisis de los datos", "De acuerdo a la época en la cual se lleva a cabo la investigación"],
        respuestaCorrecta: 3
    },
    {
        id: 117,
        pregunta: "¿Cuál de las siguientes afirmaciones representa el orden adecuado de las actividades a realizarse para la definición de una problemática?",
        opciones: ["Identificación del problema, búsqueda de información, elaboración del problema y formulación del problema", "Identificación del problema, observación del problema, revisión de literatura, estructuración del problema y refinamiento del problema", "Identificación del problema, estructuración del problema, análisis del problema, planteamiento del problema y revisión de literatura", "Identificación del problema, estructuración del problema, análisis del problema, planteamiento del problema y observación del problema"],
        respuestaCorrecta: 1
    },
    {
        id: 118,
        pregunta: "¿Cuál de los siguientes postulados propone la real importancia de una Revisión de Literatura Preliminar (RLP)?",
        opciones: ["A través de un RLP se sintetiza la información relevante de los estudios primarios de una manera razonable, se obtienen resultados con valor científico", "Toda investigación inicia con una RLP, se obtienen importantes resultados de tipo observacional y se minimizan los trabajos existente", "Identifica, evalúa e interpreta toda la información relevante a un área temática, fenómeno de interés o pregunta de investigación", "Un RLP es un estudio secundario a través del cual se pueden generalizar los hallazgos obtenidos"],
        respuestaCorrecta: 2
    },
    {
        id: 119,
        pregunta: "La investigación es:",
        opciones: ["El proceso sistemático de recopilación y análisis de información (datos) para aumentar la comprensión sobre el fenómeno que nos concierne o nos interesa.", "El proceso sincrónico de recopilación y análisis de información (datos) para aumentar la comprensión sobre el fenómeno que nos concierne o nos interesa", "El proceso sistemático de creación y análisis de información (datos) para aumentar la comprensión sobre el fenómeno que nos concierne o nos interesa"],
        respuestaCorrecta: 0
    },
    {
        id: 120,
        pregunta: "¿Cuál es el primer paso del proceso de investigación científica?",
        opciones: ["Diseñar el estudio", "Formular hipótesis", "Definir el problema", "Analizar datos"],
        respuestaCorrecta: 2
    },
    {
        id: 121,
        pregunta: "Uno de los principios de usabilidad y accesibilidad es la visibilidad del estado del sistema, seleccione ejemplos de este principio",
        opciones: ["Botón de deshacer, dar la posibilidad de editar un perfil personal", "FAQs, El icono de la interrogación", "Minitours, comprobación de campos de formularios en tiempo real", "Barras de carga, los Breadcrumbs, Los indicadores de los procesos de compra"],
        respuestaCorrecta: 3
    },
    {
        id: 122,
        pregunta: "La aplicación de editor de textos Word utiliza botones diseñados con iconos que son fácilmente reconocibles, esto es una característica de principio de usabilidad:",
        opciones: ["Recuperación y prevención de errores", "Visibilidad del estado del sistema", "Reconocimiento en vez de recuerdo", "Diseño visual, minimalista y estético"],
        respuestaCorrecta: 2
    },
    {
        id: 123,
        pregunta: "Hace referencia a la parte visual de una aplicación de software, a la disposición de todos los elementos con los que el usuario va a interactuar con la aplicación.",
        opciones: ["diseño IxD (Interaction Design)", "diseño de navegaciòn", "diseño UX (User eXperience)", "diseño UI (User Interface)"],
        respuestaCorrecta: 3
    },
    {
        id: 124,
        pregunta: "Está enérgicamente unido al diseño UX (User eXperience), siendo el estudio de las interacciones que realiza el usuario en una aplicación de software y su dispositivo como por ejemplo: uso de teclado, dispositivo táctil, tiempos invertidos en hacer clic, en ampliar una sección, etc.",
        opciones: ["diseño IxD (Interaction Design)", "diseño de navegaciòn", "diseño UX (User eXperience)", "diseño UI (User Interface)"],
        respuestaCorrecta: 0
    },
    {
        id: 125,
        pregunta: "Uno de los sistemas de evaluación de la usabilidad llamados de 'inspección', se encuentra la evaluación……………… que consiste en que determinados evaluadores revisan la interfaz siguiendo unos principios de usabilidad reconocidos. La revisión se realiza de manera individual y asumiendo el papel de usuario.",
        opciones: ["Cognitiva", "Observación de campo", "Heurística", "Focus group"],
        respuestaCorrecta: 2
    },
    {
        id: 126,
        pregunta: "¿Cuáles de los siguientes son objetivos de la web relacionados con la usabilidad?",
        opciones: ["Conseguir que la información relevante esté colocada en la página principal", "Incrementar los ingresos del usuario", "Facilitar la navegación de los usuarios en la web", "Conseguir que los usuarios puedan comunicarse con el diseñador de la interfaz"],
        respuestaCorrecta: 2
    },
    {
        id: 127,
        pregunta: "¿Cuál de los siguientes son métodos para analizar la usabilidad de una interfaz?",
        opciones: ["La evaluación heurística a cargo de una persona con experiencia en usabilidad", "Un compilador específico para el ámbito visual", "Una encuesta entre la población antes de divulgar la página", "Pensando en voz baja"],
        respuestaCorrecta: 0
    },
    {
        id: 128,
        pregunta: "Son reglas que sirven para limitar las acciones que el sistema o los usuarios deben realizar. Se les conoce como:",
        opciones: ["Inferencias", "Hechos", "Validaciones", "Restricciones"],
        respuestaCorrecta: 3
    },
    {
        id: 129,
        pregunta: "Con el fin de alcanzar la eficiencia en una aplicación web y la satisfacción del usuario se debe tomar en consideración para la evaluación los siguientes atributos:",
        opciones: ["Infraestructura, usabilidad", "Navegabilidad, infraestructura", "Seguridad, usabilidad, navegabilidad", "Usabilidad, diseño, tiempo"],
        respuestaCorrecta: 2
    },
    {
        id: 130,
        pregunta: "¿Qué guía de estilo para la Web explica sobre la navegación con teclado y otras características de las interfaces de usuario a fin de que se beneficien a usuarios con discapacidades?",
        opciones: ["W3C- 'Web Content Accesibility Guidelines (WCAG)'.", "W3C- 'Authoring Tool Accesibility Guidelines (ATAG)'.", "W3C- 'User Agent Accesibility Guidelines (UAAG).", "W3C- 'User Agent Accesibility Guidelines (UAAG)."],
        respuestaCorrecta: 0
    },
    {
        id: 131,
        pregunta: "En el tema de evaluación de usabilidad. Informa el tiempo de renderización de la imagen, el bloque de texto o el video más grandes que se pueden ver en el viewport, en relación con el momento en que el usuario navegó a la página por primera vez.",
        opciones: ["Interaction to Next Paint (INP)", "Largest Contentful Paint (LCP)", "First Contentful Paint (FCP)", "Time to First Byte (TTFB)"],
        respuestaCorrecta: 1
    },
    {
        id: 132,
        pregunta: "Para proporcionar una buena experiencia del usuario, los sitios web deben cumplir por tener una primera pintura de contenido de 1.8 segundos o menos, a fin de alcanzar este objetivo para la mayoría de los usuarios, un buen umbral para medir es el percentil 75 de las cargas de páginas, segmentadas entre los dispositivos móviles y las computadoras de escritorio. Seleccione a qué métrica de sitio web corresponde",
        opciones: ["Interaction to Next Paint (INP)", "Largest Contentful Paint (LCP)", "First Contentful Paint (FCP)", "Time to First Byte (TTFB)"],
        respuestaCorrecta: 2
    },
    {
        id: 133,
        pregunta: "Tomando como referencia el ejemplo: Tres usuarios diferentes realizan la misma tarea. Dos lograron completar en un tiempo considerable (2,3 segundos, respectivamente), mientras que el tercer usuario se demoró 7 segundos y no la terminó, esto es un ejemplo de métrica de:",
        opciones: ["Eficiencia", "Facilidad de uso", "Eficacia", "Eficiencia y Eficacia"],
        respuestaCorrecta: 2
    },
    {
        id: 134,
        pregunta: "El método de evaluación por Inspección de estándares se realiza por medio de un experto en un estándar que puede ser de facto o de iure de la interfaz. El experto realiza una inspección minuciosa a la interfaz para comprobar que cumple en todo momento y globalmente todos los puntos definidos en el estándar. ¿En qué fases se aplica este método?",
        opciones: ["En fases tempranas del desarrollo", "En todas las fases de desarrollo", "En fases avanzadas del desarrollo, pruebas, e implantación.", "En la fase de análisis de requisitos"],
        respuestaCorrecta: 2
    },
    {
        id: 135,
        pregunta: "Seleccione los principios importantes de la experiencia de usuario (UX) en aplicaciones de realidad aumentada (AR)",
        opciones: ["Persistencia espacial, Interacción natural", "Objetos virtuales, escenario virtual", "Objetos reales, escenario real", "Lenguaje natural, manipulación directa"],
        respuestaCorrecta: 0
    },
    {
        id: 136,
        pregunta: "¿Qué componente principal de Metasploit se utiliza para ejecutar acciones en un sistema objetivo tras una intrusión?",
        opciones: ["Payload", "Exploit", "Auxiliary", "Encoder"],
        respuestaCorrecta: 0
    },
    {
        id: 137,
        pregunta: "¿Qué tipo de cifrado utiliza una sola clave compartida entre las partes comunicantes?",
        opciones: ["Cifrado asimétrico", "Cifrado híbrido", "Cifrado simétrico", "Cifrado hash"],
        respuestaCorrecta: 2
    },
    {
        id: 138,
        pregunta: "¿Qué característica define a la criptografía asimétrica?",
        opciones: ["Utiliza claves idénticas", "La clave privada puede compartirse", "Utiliza un par de clave pública y privada", "Genera siempre valores irreversibles"],
        respuestaCorrecta: 2
    },
    {
        id: 139,
        pregunta: "¿Cuál es una característica fundamental de una función hash criptográfica?",
        opciones: ["Es reversible", "Produce una salida de longitud variable", "Produce siempre la misma salida para la misma entrada", "Requiere una clave privada para generar el resultado"],
        respuestaCorrecta: 2
    },
    {
        id: 140,
        pregunta: "¿Cuál es la utilidad principal de OpenSSL en la administración de seguridad?",
        opciones: ["Crear copias de seguridad del sistema", "Realizar auditorías de red", "Gestionar criptografía y certificados digitales", "Implementar sistemas IDS/IPS"],
        respuestaCorrecta: 2
    },
    {
        id: 141,
        pregunta: "¿Qué entidad dentro de un ecosistema de certificados digitales valida la identidad de un solicitante?",
        opciones: ["Servidor DNS", "Autoridad Certificadora (CA)", "Proveedor de antivirus", "Proxy inverso"],
        respuestaCorrecta: 1
    },
    {
        id: 142,
        pregunta: "¿Cómo se denomina el módulo de Metasploit utilizado para realizar tareas como escaneo, captura o enumeración sin explotar vulnerabilidades?",
        opciones: ["Exploit", "Payload", "Auxiliary", "NOP"],
        respuestaCorrecta: 2
    },
    {
        id: 143,
        pregunta: "¿Qué propósito cumple la firma digital dentro de un certificado X.509?",
        opciones: ["Cifrar la clave pública del usuario", "Garantizar que la CA validó el certificado", "Evitar que el usuario modifique su clave privada", "Generar claves para conexiones seguras"],
        respuestaCorrecta: 1
    },
    {
        id: 144,
        pregunta: "En un esquema de cifrado híbrido (por ejemplo, en TLS), ¿qué rol suelen desempeñar los algoritmos simétricos?",
        opciones: ["Intercambiar las claves públicas", "Proteger la integridad de la CA", "Cifrar eficientemente el canal de comunicación", "Firmar digitalmente los certificados"],
        respuestaCorrecta: 2
    },
    {
        id: 145,
        pregunta: "¿Qué propiedad de una función hash evita que dos entradas diferentes produzcan la misma salida?",
        opciones: ["Difusión", "Colisión", "Resistencia a preimagen", "Resistencia a colisiones"],
        respuestaCorrecta: 3
    },
    {
        id: 146,
        pregunta: "¿Cuál de las siguientes afirmaciones describe mejor el propósito de la validación de requisitos en el ciclo de vida del software?",
        opciones: ["Asegurar que los requisitos sean técnicamente implementables.", "Confirmar que los requisitos estén escritos sin errores gramaticales.", "Verificar que los requisitos reflejen correctamente las necesidades del cliente.", "Evaluar el rendimiento del sistema en condiciones reales."],
        respuestaCorrecta: 2
    },
    {
        id: 147,
        pregunta: "¿Cuál de las siguientes técnicas es más efectiva para validar requisitos ambiguos o mal entendidos?",
        opciones: ["Pruebas de integración", "Revisión estructurada con stakeholders", "Análisis de código fuente", "Simulación de procesos"],
        respuestaCorrecta: 1
    },
    {
        id: 148,
        pregunta: "¿Qué característica distingue a un requisito validado de uno simplemente documentado?",
        opciones: ["Está escrito en lenguaje técnico.", "Ha sido aprobado por el equipo de desarrollo.", "Ha sido revisado y aceptado por los stakeholders.", "Tiene una prueba unitaria asociada."],
        respuestaCorrecta: 2
    },
    {
        id: 149,
        pregunta: "¿Cuál de los siguientes riesgos es más probable si no se realiza una validación adecuada de requisitos?",
        opciones: ["Aumento del rendimiento del sistema", "Reducción del tiempo de desarrollo", "Desarrollo de funcionalidades innecesarias", "Mejora en la experiencia del usuario"],
        respuestaCorrecta: 2
    },
    {
        id: 150,
        pregunta: "¿Qué afirmación es más precisa respecto a la trazabilidad en la validación de requisitos?",
        opciones: ["Solo aplica a requisitos funcionales.", "Es útil únicamente en fases de prueba.", "Permite verificar que cada requisito tiene una fuente y una prueba asociada.", "Es responsabilidad exclusiva del equipo de QA."],
        respuestaCorrecta: 2
    },
    {
        id: 151,
        pregunta: "¿Cuál es la forma más adecuada de documentar los requisitos de software en un proyecto profesional?",
        opciones: ["Escribirlos en correos electrónicos entre el cliente y el desarrollador.", "Utilizar un documento estructurado como el SRS (Software Requirements Specification).", "Incluirlos como comentarios dentro del código fuente.", "Discutirlos verbalmente en reuniones sin dejar registro."],
        respuestaCorrecta: 1
    },
    {
        id: 152,
        pregunta: "¿Qué impacto tiene la priorización de requisitos en el desarrollo del software?",
        opciones: ["Reduce la necesidad de pruebas de calidad.", "Permite enfocar los recursos en funcionalidades de mayor valor para el negocio.", "Elimina la necesidad de reuniones con stakeholders.", "Aumenta la complejidad del diseño arquitectónico."],
        respuestaCorrecta: 1
    },
    {
        id: 153,
        pregunta: "¿Cuál es la forma más efectiva de priorizar los requisitos de software en un proyecto con recursos limitados y múltiples stakeholders?",
        opciones: ["Ordenarlos alfabéticamente para facilitar su búsqueda.", "Asignarles un número aleatorio y desarrollarlos en ese orden.", "Aplicar técnicas como MoSCoW o análisis de valor-negocio vs. esfuerzo.", "Priorizar únicamente los requisitos propuestos por el equipo técnico."],
        respuestaCorrecta: 2
    },
    {
        id: 154,
        pregunta: "¿Qué es la trazabilidad de los requisitos y por qué es importante?",
        opciones: ["Es una técnica para medir el rendimiento del software en producción.", "Es el proceso de traducir requisitos a lenguaje de programación.", "Es la capacidad de seguir el rastro de cada requisito desde su origen hasta su implementación y prueba.", "Es una forma de documentar únicamente los requisitos funcionales."],
        respuestaCorrecta: 2
    },
    {
        id: 155,
        pregunta: "¿Cómo se asegura que los requisitos se cumplen durante las pruebas de software?",
        opciones: ["Ejecutando pruebas sin documentación previa.", "Validando únicamente los requisitos funcionales.", "Utilizando una matriz de trazabilidad que vincule requisitos con casos de prueba.", "Esperando a que el cliente detecte errores en producción."],
        respuestaCorrecta: 2
    },
    {
        id: 156,
        pregunta: "¿Cuál es la diferencia principal entre los requisitos funcionales y los no funcionales en el desarrollo de software?",
        opciones: ["Los requisitos funcionales describen como debe comportarse el sistema ante fallos, mientras que los no funcionales son opcionales.", "Los requisitos funcionales indican qué debe hacer el sistema, mientras que los no funcionales definen las funciones principales del sistema.", "Los requisitos funcionales indican qué debe hacer el sistema, mientras que los no funcionales describen cómo debe hacerlo.", "Los requisitos funcionales indican qué debe hacer el sistema, mientras que los no funcionales son opcionales son opcionales y no afectan al producto final"],
        respuestaCorrecta: 2
    },
    {
        id: 157,
        pregunta: "¿Cuál es el objetivo principal del análisis de requisitos en un proyecto de software?",
        opciones: ["Diseñar la interfaz gráfica del sistema", "Codificar los módulos principales", "Identificar y documentar las necesidades del usuario", "Estimar el presupuesto del proyecto"],
        respuestaCorrecta: 2
    },
    {
        id: 158,
        pregunta: "¿Cuál de las siguientes afirmaciones describe mejor un requisito no funcional?",
        opciones: ["El sistema debe permitir registrar nuevos usuarios", "El sistema debe responder en menos de 2 segundos", "El sistema debe calcular el total de ventas", "El sistema debe permitir imprimir facturas"],
        respuestaCorrecta: 1
    },
    {
        id: 159,
        pregunta: "¿Qué técnica es más adecuada para descubrir requisitos tácitos o no expresados directamente por el usuario?",
        opciones: ["Reunión JAD", "Encuestas", "Observación", "Entrevistas"],
        respuestaCorrecta: 2
    },
    {
        id: 160,
        pregunta: "¿Cuál es una ventaja clave del uso de casos de uso en el análisis de requisitos?",
        opciones: ["Permiten estimar el costo del proyecto", "Describen la arquitectura del sistema", "Sustituyen completamente la documentación técnica", "Facilitan la comprensión de las interacciones entre usuarios y sistema."],
        respuestaCorrecta: 3
    },
    {
        id: 161,
        pregunta: "¿Cuál es una característica principal de una Aplicación Web Progresiva (PWA)?",
        opciones: ["Solo funciona en navegadores antiguos", "No requiere conexión a Internet", "Se comporta como una aplicación nativa", "Está escrita exclusivamente en Java"],
        respuestaCorrecta: 2
    },
    {
        id: 162,
        pregunta: "¿Qué tipo de peticiones permite que el navegador se comunique con el servidor sin recargar toda la página?",
        opciones: ["Síncronas", "Paralelas", "Asíncronas (AJAX)", "HTTP estándar"],
        respuestaCorrecta: 2
    },
    {
        id: 163,
        pregunta: "¿Qué tipo de aplicación web se adapta automáticamente a distintos tamaños de pantalla?",
        opciones: ["Web estática", "Web responsive", "Web monolítica", "Web FTP"],
        respuestaCorrecta: 1
    },
    {
        id: 164,
        pregunta: "¿Qué estándar se utiliza comúnmente para autenticar usuarios en aplicaciones web modernas?",
        opciones: ["SMTP", "OAuth", "DNS", "REST"],
        respuestaCorrecta: 1
    },
    {
        id: 165,
        pregunta: "¿Cuál es el principal enfoque del desarrollo Front-End?",
        opciones: ["Manipular bases de datos del servidor", "Administrar el sistema operativo", "Crear la interfaz de usuario en el navegador", "Gestionar redes y puertos de la aplicación"],
        respuestaCorrecta: 2
    },
    {
        id: 166,
        pregunta: "¿Cuál es una característica clave de las plantillas en desarrollo web?",
        opciones: ["Son archivos de respaldo", "Sirven para validar usuarios", "Permiten reutilizar estructuras de código", "Establecen políticas de seguridad"],
        respuestaCorrecta: 2
    },
    {
        id: 167,
        pregunta: "¿Qué paradigma de programación permite representar la lógica web mediante clases y objetos?",
        opciones: ["Procedimental", "Declarativo", "Funcional", "Orientado a Objetos"],
        respuestaCorrecta: 3
    },
    {
        id: 168,
        pregunta: "¿Cuál es una ventaja de utilizar el patrón MVC en aplicaciones Front-End?",
        opciones: ["Mejora la seguridad del servidor", "Aumenta el tamaño de la aplicación", "Permite separar lógica, interfaz y datos", "Requiere menos conocimientos de diseño"],
        respuestaCorrecta: 2
    },
    {
        id: 169,
        pregunta: "¿Cuál es una característica fundamental de las APIs REST?",
        opciones: ["Usan FTP como protocolo principal", "Solo funcionan con aplicaciones móviles", "Siguen principios de arquitectura sin estado (stateless)", "Están limitadas a bases de datos relacionales"],
        respuestaCorrecta: 2
    },
    {
        id: 170,
        pregunta: "¿Cuál es uno de los beneficios de usar servicios web en aplicaciones Back-End?",
        opciones: ["Aumentar el tamaño de los archivos", "Facilitar la integración con otros sistemas", "Eliminar la necesidad de autenticación", "Reducir la seguridad de la aplicación"],
        respuestaCorrecta: 1
    },
    {
        id: 171,
        pregunta: "¿Qué significa ORM?",
        opciones: ["Object Request Mapping", "Object Relational Mapping", "Online Resource Manager", "Object Runtime Manager"],
        respuestaCorrecta: 1
    },
    {
        id: 172,
        pregunta: "¿Cuál es el lenguaje de consulta propio de Hibernate?",
        opciones: ["SQL", "JPQL", "HQL", "JSON"],
        respuestaCorrecta: 2
    },
    {
        id: 173,
        pregunta: "¿Qué anotación se utiliza para indicar la clase persistente en Hibernate?",
        opciones: ["@Service", "@Database", "@Entity", "@Persistence"],
        respuestaCorrecta: 2
    },
    {
        id: 174,
        pregunta: "¿Qué ventaja ofrece Hibernate frente a JDBC tradicional?",
        opciones: ["Mayor velocidad sin conexión", "Mapeo automático entre objetos Java y tablas", "Uso exclusivo de bases de datos NoSQL", "Permite escribir consultas en JavaScript"],
        respuestaCorrecta: 1
    },
    {
        id: 175,
        pregunta: "¿Qué sintaxis permite escribir HTML dentro de JavaScript en React?",
        opciones: ["XML", "JSX", "TSX", "HTML5"],
        respuestaCorrecta: 1
    },
    {
        id: 176,
        pregunta: "¿Qué algoritmo es más utilizado para la navegación de NPCs en mapas?",
        opciones: ["Algoritmo A*", "Redes Neuronales", "Minimax", "Perlin Noises"],
        respuestaCorrecta: 0
    },
    {
        id: 177,
        pregunta: "¿Las etapas del desarrollo de un videojuego son?",
        opciones: ["Espiral, cascada, iterativo, incremental.", "Concepto, Pre-producción, producción, QA y Cierre, Post-Release.", "Concepto, producción, QA y Cierre, Post-Release.", "Explorar, descubrir, competir y ganar."],
        respuestaCorrecta: 1
    },
    {
        id: 178,
        pregunta: "¿Cuál es una de las principales ventajas de Unity?",
        opciones: ["Exclusivo para juegos AAA", "Gratuito sin limitaciones", "Soporte para múltiples plataformas", "No requiere conocimientos de programación"],
        respuestaCorrecta: 2
    },
    {
        id: 179,
        pregunta: "¿Cuál de los siguientes componentes es responsable del rendimiento gráfico en una consola?",
        opciones: ["CPU", "GPU", "RAM", "Disco duro"],
        respuestaCorrecta: 1
    },
    {
        id: 180,
        pregunta: "¿Qué es un motor de videojuegos?",
        opciones: ["Un hardware especializado para ejecutar juegos.", "Una plataforma que unifica programación y elementos creativos.", "Un lenguaje de programación exclusivo para juegos.", "Un sistema para gestionar servidores multijugador."],
        respuestaCorrecta: 1
    },
    {
        id: 181,
        pregunta: "¿Cómo afecta el uso de servidores dedicados a los videojuegos en línea?",
        opciones: ["Reduce la latencia y mejora la estabilidad", "Hace los juegos más baratos", "Permite jugar sin conexión", "No tiene impacto"],
        respuestaCorrecta: 0
    },
    {
        id: 182,
        pregunta: "¿Cuál de las siguientes tareas pertenece a la fase de preproducción?",
        opciones: ["Desarrollo del motor gráfico", "Creación del prototipo", "Testeo final del juego", "Lanzamiento del juego"],
        respuestaCorrecta: 1
    },
    {
        id: 183,
        pregunta: "¿Cuál de los siguientes aspectos se evalúa en las pruebas de jugabilidad?",
        opciones: ["Calidad gráfica", "Equilibrio y experiencia del jugador", "Estrategias de marketing", "Publicidad en redes sociales"],
        respuestaCorrecta: 1
    },
    {
        id: 184,
        pregunta: "¿Qué motor permite gestionar el estado actual del juego mediante guardado y carga?",
        opciones: ["Motor de persistencia.", "Motor de escenas.", "Motor de scripting.", "Motor de entrada."],
        respuestaCorrecta: 0
    },
    {
        id: 185,
        pregunta: "¿Cuál de las siguientes técnicas se basa en reglas predefinidas y respuestas específicas a estímulos?",
        opciones: ["Aprendizaje Profundo", "Redes Neuronales", "Máquinas de Estados Finitos (FSM)", "Algoritmo Genético."],
        respuestaCorrecta: 2
    },
    {
        id: 186,
        pregunta: "¿Qué se recomienda para acelerar el desarrollo de un videojuego?",
        opciones: ["Inventar todas las herramientas desde cero", "Evitar el uso de prototipos", "Usar bibliotecas y motores existentes", "Focalizarse solo en el diseño visual"],
        respuestaCorrecta: 2
    },
    {
        id: 187,
        pregunta: "¿Cuál de estas técnicas permite que un NPC aprenda de la experiencia y mejore su comportamiento con el tiempo?",
        opciones: ["Aprendizaje reforzado", "Árboles de decisión", "Pathfinding", "Shaders gráficos"],
        respuestaCorrecta: 0
    },
    {
        id: 188,
        pregunta: "¿Cuál de los siguientes motores es gratuito y de código abierto con una comunidad activa?",
        opciones: ["Godot Engine.", "Roblox Studio.", "Stencyl.", "Adventure Game Studio."],
        respuestaCorrecta: 0
    },
    {
        id: 189,
        pregunta: "¿Qué representa el gameplay en el diseño del videojuego?",
        opciones: ["La narrativa del juego", "Las mecánicas y experiencia del jugador", "Los efectos visuales y sonoros", "El diseño de los personajes secundarios"],
        respuestaCorrecta: 1
    },
    {
        id: 190,
        pregunta: "¿Qué componente de la arquitectura de juegos en red gestiona la comunicación entre jugadores?",
        opciones: ["El motor gráfico", "El servidor", "La tarjeta de video", "La física del juego"],
        respuestaCorrecta: 1
    },
    {
        id: 191,
        pregunta: "¿Qué es la seguridad del software?",
        opciones: ["La protección del hardware contra daños físicos.", "La protección del software y sus datos contra accesos no autorizados.", "La optimización del rendimiento del software.", "La eliminación de errores en el código."],
        respuestaCorrecta: 1
    },
    {
        id: 192,
        pregunta: "¿Por qué es importante la seguridad en el desarrollo de software?",
        opciones: ["Para reducir los costos de producción.", "Para garantizar que el software sea accesible en cualquier momento.", "Para evitar vulnerabilidades que puedan ser explotadas por atacantes.", "Para mejorar la interfaz de usuario."],
        respuestaCorrecta: 2
    },
    {
        id: 193,
        pregunta: "¿Qué representan las vulnerabilidades en el software?",
        opciones: ["Errores que mejoran el rendimiento.", "Debilidades que pueden ser explotadas por atacantes.", "Características que aumentan la seguridad.", "Funciones que optimizan la compatibilidad."],
        respuestaCorrecta: 1
    },
    {
        id: 194,
        pregunta: "¿Cuál es uno de los costes asociados a las vulnerabilidades del software?",
        opciones: ["Reducción del tiempo de desarrollo.", "Pérdida de datos y daño a la reputación.", "Mejoras en la experiencia del usuario.", "Incremento en la velocidad del sistema."],
        respuestaCorrecta: 1
    },
    {
        id: 195,
        pregunta: "¿Qué implica la gestión de riesgos de seguridad en el software?",
        opciones: ["Identificar, evaluar y mitigar amenazas y vulnerabilidades.", "Mejorar únicamente la interfaz de usuario.", "Incrementar la funcionalidad del software sin considerar la seguridad.", "Reducir los costos de desarrollo a toda costa."],
        respuestaCorrecta: 0
    },
    {
        id: 196,
        pregunta: "¿Cuál de las siguientes propiedades NO es típica de un software seguro y resiliente?",
        opciones: ["Capacidad para recuperarse tras un ataque.", "Vulnerabilidad a ataques conocidos.", "Capacidad para detectar y responder a amenazas.", "Mínimos errores de seguridad."],
        respuestaCorrecta: 1
    },
    {
        id: 197,
        pregunta: "¿Qué nivel de amenazas incluye riesgos a nivel de hardware?",
        opciones: ["Solo amenazas físicas, como robos o daños.", "Amenazas relacionadas con la manipulación del hardware.", "Solo amenazas de software malicioso.", "Solo amenazas a la red."],
        respuestaCorrecta: 1
    },
    {
        id: 198,
        pregunta: "¿Cuál de las siguientes es una amenaza a nivel de código?",
        opciones: ["Ataques de denegación de servicio.", "Manipulación de datos en la base de datos.", "Inserción de código malicioso como SQL Injection.", "Fallos en la alimentación eléctrica."],
        respuestaCorrecta: 2
    },
    {
        id: 199,
        pregunta: "¿Qué aspecto de las amenazas abarca el nivel de diseño?",
        opciones: ["La fabricación de componentes físicos.", "La estructura y lógica del software que puede ser explotada.", "La velocidad de procesamiento del sistema.", "La compatibilidad con otros sistemas."],
        respuestaCorrecta: 1
    },
    {
        id: 200,
        pregunta: "¿Qué se busca con un plan estratégico de seguridad en el ciclo de vida del desarrollo del software (SDLC)?",
        opciones: ["Reducir los costos de desarrollo únicamente.", "Integrar la seguridad en todas las fases del desarrollo.", "Limitar la seguridad solo en la etapa de diseño.", "Acelerar la publicación del software sin considerar la seguridad."],
        respuestaCorrecta: 1
    },
    {
        id: 201,
        pregunta: "¿Qué son las soluciones o frameworks de seguridad existentes?",
        opciones: ["Conjuntos de herramientas y buenas prácticas para proteger el software.", "Programas que eliminan todas las vulnerabilidades automáticamente.", "Sistemas operativos específicos para seguridad.", "Hardware especializado para protección física."],
        respuestaCorrecta: 0
    },
    {
        id: 202,
        pregunta: "¿Qué se entiende por puntos de ataque en seguridad?",
        opciones: ["Los lugares donde el software puede ser actualizado.", "Los lugares o vulnerabilidades por donde un atacante puede ingresar o causar daño.", "Las áreas donde se almacenan los datos del usuario.", "Los componentes de hardware que protegen el sistema."],
        respuestaCorrecta: 1
    },
    {
        id: 203,
        pregunta: "¿Cuál es una de las amenazas a nivel de arquitectura en el software?",
        opciones: ["Fallos de hardware en el servidor.", "Diseño de la estructura que permite ataques o fallos de seguridad.", "Mal funcionamiento del sistema operativo.", "Problemas en la red eléctrica."],
        respuestaCorrecta: 1
    },
    {
        id: 204,
        pregunta: "¿Por qué es importante considerar la seguridad en todas las fases del ciclo de vida del desarrollo de software?",
        opciones: ["Porque reduce la necesidad de pruebas de seguridad.", "Porque permite detectar y corregir vulnerabilidades antes de que sean explotadas.", "Porque hace que el software sea más barato de mantener.", "Porque elimina la necesidad de gestionar riesgos."],
        respuestaCorrecta: 1
    },
    {
        id: 205,
        pregunta: "¿Qué papel cumplen las directrices de seguridad adicionales en el desarrollo de software?",
        opciones: ["Mejoran la interfaz gráfica del software.", "Proveen recomendaciones para ampliar la protección contra amenazas específicas.", "Eliminar los requisitos funcionales del sistema.", "Reducir el tamaño del código."],
        respuestaCorrecta: 1
    },
    {
        id: 206,
        pregunta: "¿Qué clase se utiliza para crear widgets que pueden cambiar su contenido dinámicamente?",
        opciones: ["StatelessWidget", "Column", "StatefulWidget", "MaterialApp"],
        respuestaCorrecta: 2
    },
    {
        id: 207,
        pregunta: "¿Qué clase en Flutter implementa Listenable y permite notificar cambios a la UI?",
        opciones: ["TextEditingController", "ChangeNotifier", "Future", "Navigator"],
        respuestaCorrecta: 1
    },
    {
        id: 208,
        pregunta: "¿Qué función debe llamarse para actualizar a los listeners en un ChangeNotifier?",
        opciones: ["notify()", "updateUI()", "notifyListeners()", "rebuild()"],
        respuestaCorrecta: 2
    },
    {
        id: 209,
        pregunta: "¿Qué tipo de lista muestra separadores entre los elementos?",
        opciones: ["ListView.separated", "ListView.builder", "Column", "ReorderableListView"],
        respuestaCorrecta: 0
    },
    {
        id: 210,
        pregunta: "¿Qué propiedad en Flutter indica el número de columnas en un GridView.count?",
        opciones: ["columnCount", "crossAxisCount", "axisCount", "numColumns"],
        respuestaCorrecta: 1
    },
    {
        id: 211,
        pregunta: "¿Qué widget se recomienda para construir listas dinámicas en Flutter?",
        opciones: ["ListView", "Column", "ListView.builder", "ListTile"],
        respuestaCorrecta: 2
    },
    {
        id: 212,
        pregunta: "¿Cuál es un ejemplo válido de endpoint REST?",
        opciones: ["/getUsers", "/users/:id", "get/users", "/user.get()"],
        respuestaCorrecta: 1
    },
    {
        id: 213,
        pregunta: "¿Qué función se usa para convertir un JSON en un objeto en Dart?",
        opciones: ["fromMap()", "jsonDecode()", "parse()", "toString()"],
        respuestaCorrecta: 1
    },
    {
        id: 214,
        pregunta: "¿Qué ventaja ofrece el patrón MVVM?",
        opciones: ["Aumenta el acoplamiento", "Dificulta pruebas", "Mejora testabilidad y separación de capas", "Evita el uso de widgets"],
        respuestaCorrecta: 2
    },
    {
        id: 215,
        pregunta: "¿Qué tipo de gestor de estado se considera más adecuado para apps grandes y testeables?",
        opciones: ["setState", "Provider", "Riverpod", "StatefulWidget"],
        respuestaCorrecta: 2
    },
    {
        id: 216,
        pregunta: "¿Qué nombre tiene la convención de crear un objeto desde un JSON?",
        opciones: ["toJson", "jsonDecode", "fromJson", "constructor"],
        respuestaCorrecta: 2
    },
    {
        id: 217,
        pregunta: "¿Cuál es el propósito de jsonEncode(contact.toJson())?",
        opciones: ["Convertir JSON a objeto", "Leer un archivo", "Codificar un objeto Dart a JSON", "Enviar una imagen"],
        respuestaCorrecta: 2
    },
    {
        id: 218,
        pregunta: "¿Dónde se define la interfaz de repositorio en arquitectura limpia?",
        opciones: ["data/", "application/", "domain/", "presentation/"],
        respuestaCorrecta: 2
    },
    {
        id: 219,
        pregunta: "¿Qué tipo de archivo se recomienda usar para separar los modelos que vienen de la API?",
        opciones: ["widgets/", "entities/", "models/", "providers/"],
        respuestaCorrecta: 2
    },
    {
        id: 220,
        pregunta: "¿Qué propiedad del Container permite aplicar un fondo degradado?",
        opciones: ["backgroundGradient", "GradientColor", "BoxDecoration.gradient", "Decoration"],
        respuestaCorrecta: 2
    },
    {
        id: 221,
        pregunta: "Dado el código que define estos tres puntos para un triángulo: new Point(posX + ancho, posY), new Point(posX + ancho, posY + alto), new Point(posX, posY + alto / 2) ¿hacia qué lado apunta el triángulo?",
        opciones: ["derecho", "izquierdo", "arriba", "abajo"],
        respuestaCorrecta: 1
    },
    {
        id: 222,
        pregunta: "¿Cuál de los siguientes fragmentos genera una órbita en sentido horario?",
        opciones: ["angulo += velocidadAngular;", "angulo -= velocidadAngular;", "angulo = velocidadAngular * velocidadAngular;", "velocidadAngular = angulo *2;"],
        respuestaCorrecta: 0
    },
    {
        id: 223,
        pregunta: "¿Cuál es la ventaja de usar un 'double buffering' en animaciones implementadas en C#?",
        opciones: ["Mejora el contraste del color", "Reduce la memoria utilizada", "Evita parpadeos y mejora la fluidez", "Incrementa el tamaño de la ventana"],
        respuestaCorrecta: 2
    },
    {
        id: 224,
        pregunta: "En una escena 2D con transformaciones aplicadas en C#, el punto (x, y) se representa internamente como un vector:",
        opciones: ["(x, y, 0)", "(x, y, 1)", "(x, y, z, w)", "(x, y, w)"],
        respuestaCorrecta: 1
    },
    {
        id: 225,
        pregunta: "Para rotar una figura alrededor de un punto específico en C#, primero se debe:",
        opciones: ["Dibujar la figura y luego aplicar la rotación", "Aplicar escalamiento y luego rotar", "Trasladar el origen al punto, rotar y regresar la traslación", "Cambiar el viewport"],
        respuestaCorrecta: 2
    },
    {
        id: 226,
        pregunta: "En un proyecto de gráficos 2D con C#, el patrón habitual para evitar bloqueos en la interfaz mientras se animan objetos es utilizar:",
        opciones: ["Un hilo principal estático", "Clases parciales", "Un hilo separado para la lógica, mientras la UI repinta", "Un dataset gráfico"],
        respuestaCorrecta: 2
    },
    {
        id: 227,
        pregunta: "¿Qué curva fractal tiene una estructura triangular?",
        opciones: ["Curva de Koch", "Conjunto de Mandelbrot", "Curva de Bézier", "Conjunto de Julia"],
        respuestaCorrecta: 0
    },
    {
        id: 228,
        pregunta: "¿Qué algoritmo se utiliza para eliminar caras ocultas en un modelo 3D?",
        opciones: ["Algoritmo de Z-Buffer", "Algoritmo de Bresenham", "Transformación de perspectiva", "Ajuste de curvas Bézier"],
        respuestaCorrecta: 0
    },
    {
        id: 229,
        pregunta: "¿Qué técnica se utiliza para recortar líneas fuera de una ventana de visualización?",
        opciones: ["Transformación de perspectiva", "Recorte de línea de Cohen-Sutherland", "Algoritmo de Z-Buffer", "Ajuste de curva B-Spline"],
        respuestaCorrecta: 1
    },
    {
        id: 230,
        pregunta: "¿Qué operación vectorial se utiliza para calcular la proyección de un punto sobre una línea?",
        opciones: ["Producto interno", "Producto cruzado", "Determinante", "Transformación lineal"],
        respuestaCorrecta: 0
    },
    {
        id: 231,
        pregunta: "¿Qué es REST?",
        opciones: ["Es una manera de almacenar e intercambiar datos de una manera estructurada.", "Es un estilo arquitectónico para diseñar aplicaciones de servicio web.", "Es un protocolo que permite que los administradores manejen los nodos en una red IP.", "Es un formato legible para humanos, usado por aplicaciones para almacenar, transferir y leer información."],
        respuestaCorrecta: 1
    },
    {
        id: 232,
        pregunta: "¿Qué código de estado de respuesta HTTP indica que se ha completado la solicitud para actualizar la base de datos?",
        opciones: ["404", "201", "400", "200"],
        respuestaCorrecta: 3
    },
    {
        id: 233,
        pregunta: "¿Qué tipo de codificación se usa en la autenticación básica para las API REST?",
        opciones: ["Base64", "UTF-8", "Base32", "UTF-16"],
        respuestaCorrecta: 0
    },
    {
        id: 234,
        pregunta: "¿Qué operación RESTful corresponde al método HTTP GET?",
        opciones: ["update", "post", "patch", "read"],
        respuestaCorrecta: 3
    },
    {
        id: 235,
        pregunta: "¿Qué código de estado de respuesta HTTP indica que el usuario no está autenticado para acceder al sitio?",
        opciones: ["400", "401", "403", "404"],
        respuestaCorrecta: 1
    },
    {
        id: 236,
        pregunta: "¿Qué estilo arquitectónico de API utiliza un protocolo de mensajería basado en XML para comunicarse entre aplicaciones?",
        opciones: ["SOAP", "NFS", "XML-RPC", "REST"],
        respuestaCorrecta: 0
    },
    {
        id: 237,
        pregunta: "¿Qué elemento raíz de mensaje SOAP define el documento XML como un mensaje SOAP?",
        opciones: ["Meta tag", "Body", "Envelope", "Header"],
        respuestaCorrecta: 2
    },
    {
        id: 238,
        pregunta: "¿Cuál es una característica de una API RESTful?",
        opciones: ["Facilita los cambios de configuración de un controlador de red a los dispositivos finales.", "Utiliza métodos HTTP para recopilar y manipular datos.", "Admite una transmisión segura de datos entre un usuario remoto y una red empresarial.", "Es una API en dirección sur."],
        respuestaCorrecta: 1
    },
    {
        id: 239,
        pregunta: "¿Qué tipo de información de credenciales se utiliza para la autenticación al portador en las API REST?",
        opciones: ["Un nombre de usuario y contraseña establecidos por el cliente", "Una cadena generada por un servidor de autenticación", "Una contraseña codificada usando Base64", "Una cadena hash MD5 generada por la aplicación cliente"],
        respuestaCorrecta: 1
    },
    {
        id: 240,
        pregunta: "¿Qué ataque implica la inserción de código malicioso en sentencias SQL?",
        opciones: ["Fuerza bruta", "Inyección SQL", "inclusión de archivos locales", "Scripts entre sitios"],
        respuestaCorrecta: 1
    },
    {
        id: 241,
        pregunta: "En el contexto de las aplicaciones distribuidas, la comunicación entre procesos es fundamental para el funcionamiento del sistema. ¿Cuál de los siguientes es un protocolo común utilizado para la comunicación entre procesos?",
        opciones: ["HTTP", "FTP", "RPC", "SMTP"],
        respuestaCorrecta: 2
    },
    {
        id: 242,
        pregunta: "Las aplicaciones distribuidas tienen características específicas que las diferencian de las aplicaciones tradicionales. ¿Cuál de las siguientes es una característica clave de las aplicaciones distribuidas?",
        opciones: ["Centralización de recursos", "Alta dependencia de un único servidor", "Escalabilidad horizontal", "Bajo nivel de tolerancia a fallos"],
        respuestaCorrecta: 2
    },
    {
        id: 243,
        pregunta: "La sincronización en sistemas distribuidos es un desafío debido a la falta de un reloj global. ¿Cuál de los siguientes algoritmos se utiliza para sincronizar relojes en sistemas distribuidos?",
        opciones: ["Algoritmo de Dijkstra", "Algoritmo de Lamport", "Algoritmo de Huffman", "Algoritmo de Bubble Sort"],
        respuestaCorrecta: 1
    },
    {
        id: 244,
        pregunta: "La computación en la nube ofrece diversas ventajas para las aplicaciones distribuidas. ¿Cuál de las siguientes es una característica de la computación en la nube?",
        opciones: ["Requiere una inversión inicial alta en infraestructura física", "Ofrece escalabilidad bajo demanda", "Limita el acceso a los recursos a una ubicación geográfica específica", "No permite el uso de virtualización"],
        respuestaCorrecta: 1
    },
    {
        id: 245,
        pregunta: "La orquestación de contenedores es esencial para gestionar aplicaciones distribuidas complejas. ¿Cuál de las siguientes herramientas se utiliza comúnmente para orquestar contenedores?",
        opciones: ["Docker Compose", "Kubernetes", "Apache HTTP Server", "MySQL"],
        respuestaCorrecta: 1
    },
    {
        id: 246,
        pregunta: "En las bases de datos distribuidas, la metodología de configuración es crucial para el rendimiento. ¿Cuál de las siguientes opciones es un enfoque común para configurar bases de datos distribuidas?",
        opciones: ["Replicación de datos", "Eliminación de copias de seguridad", "Centralización de todas las consultas en un único nodo", "Desactivación de la tolerancia a fallos"],
        respuestaCorrecta: 0
    },
    {
        id: 247,
        pregunta: "En el modelo cliente-servidor, el ______ solicita recursos mientras que el ______ los proporciona. Este enfoque es fundamental en las aplicaciones distribuidas.",
        opciones: ["cliente, servidor", "servidor, middleware", "nodo, API", "contenedor, microservicio"],
        respuestaCorrecta: 0
    },
    {
        id: 248,
        pregunta: "Para garantizar la coherencia en sistemas distribuidos, se utilizan algoritmos como la ______ de relojes y la ______ mutua, que evitan conflictos en el acceso a recursos compartidos.",
        opciones: ["virtualización, replicación", "sincronización, exclusión", "autenticación, autorización", "encriptación, compresión"],
        respuestaCorrecta: 1
    },
    {
        id: 249,
        pregunta: "En la computación en la nube, ______ permite empaquetar aplicaciones en entornos aislados, mientras que ______ gestiona la escalabilidad y despliegue de esos contenedores.",
        opciones: ["Docker, Kubernetes", "OAuth, API", "SOA, RPC", "Thrift, gRPC"],
        respuestaCorrecta: 0
    },
    {
        id: 250,
        pregunta: "Las bases de datos distribuidas utilizan ______ para mantener copias de datos en múltiples nodos y ______ para coordinar transacciones entre ellos, asegurando consistencia.",
        opciones: ["replicación, consenso", "virtualización, sincronización", "autenticación, encriptación", "APIs, WebSockets"],
        respuestaCorrecta: 0
    },
    {
        id: 251,
        pregunta: "En sistemas distribuidos, el problema de la ___________ requiere algoritmos como Paxos o Raft para garantizar que todos los nodos acuerden un valor, mientras que la ___________ asegura que solo un proceso acceda a un recurso compartido a la vez.",
        opciones: ["sincronización de relojes, replicación", "tolerancia a fallos, consistencia eventual", "exclusión mutua, elección de líder", "acuerdo distribuido, exclusión mutua"],
        respuestaCorrecta: 3
    },
    {
        id: 252,
        pregunta: "En arquitecturas de microservicios, el patrón ___________ permite gestionar fallos en cascada mediante reintentos inteligentes, mientras que el ___________ facilita la comunicación asíncrona entre servicios desacoplados.",
        opciones: ["Circuit Breaker, Message Broker", "API Gateway, Service Mesh", "Load Balancer, Event Sourcing", "CQRS, Saga Pattern"],
        respuestaCorrecta: 0
    },
    {
        id: 253,
        pregunta: "Para garantizar consistencia en bases de datos distribuidas, el teorema ___________ establece que es imposible lograr simultáneamente consistencia, disponibilidad y tolerancia a particiones, mientras que la ___________ permite replicar datos con garantías de atomicidad.",
        opciones: ["CAP, transacción distribuida", "PACELC, sharding", "ACID, replicación multimaestro", "BASE, consistencia eventual"],
        respuestaCorrecta: 0
    },
    {
        id: 254,
        pregunta: "En seguridad distribuida, ___________ delega autorización mediante tokens de acceso, mientras que ___________ cifra datos en tránsito para evitar interceptaciones.",
        opciones: ["OAuth 2.0, TLS/SSL", "JWT, API Key", "SAML, HTTPS", "OpenID Connect, IPsec"],
        respuestaCorrecta: 0
    },
    {
        id: 255,
        pregunta: "Para sincronizar relojes en sistemas distribuidos, el algoritmo ___________ utiliza marcas lógicas para ordenar eventos, mientras que ___________ corrige desviaciones basado en servidores de tiempo externos.",
        opciones: ["Lamport, NTP", "Vectorial, PTP", "Cristian, Berkeley", "Paxos, Raft"],
        respuestaCorrecta: 0
    },
    {
        id: 256,
        pregunta: "¿Cuál es el objetivo principal del patrón Flyweight en el sistema desarrollado?",
        opciones: ["Almacenar los datos de los estudiantes en la nube.", "Optimizar el uso de memoria compartiendo datos comunes.", "Automatizar la creación de interfaces gráficas.", "Gestionar los estados anteriores de los objetos."],
        respuestaCorrecta: 1
    },
    {
        id: 257,
        pregunta: "¿Qué componente del patrón Memento se encarga de almacenar el historial de cambios?",
        opciones: ["Originator", "FlyweightFactory", "Caretaker", "Editor"],
        respuestaCorrecta: 2
    },
    {
        id: 258,
        pregunta: "¿Cuál es el propósito del patrón Memento en la aplicación desarrollada?",
        opciones: ["Encapsular datos para el modelo.", "Permitir deshacer cambios realizados por el usuario.", "Centralizar la lógica de presentación.", "Dividir responsabilidades entre clases."],
        respuestaCorrecta: 1
    },
    {
        id: 259,
        pregunta: "¿Qué mejora se propone en relación al patrón Memento para versiones futuras del sistema?",
        opciones: ["Implementar validaciones lógicas.", "Añadir función de rehacer.", "Usar árboles binarios para búsqueda.", "Migrar a arquitectura MVC."],
        respuestaCorrecta: 1
    },
    {
        id: 260,
        pregunta: "¿Cómo contribuyen los patrones Flyweight y Memento al sistema en conjunto?",
        opciones: ["Reducen el número de líneas de código y aumentan acoplamiento.", "Permiten una estructura de base de datos más compleja.", "Mejoran eficiencia de memoria y experiencia de usuario mediante deshacer.", "Aumentan la redundancia de datos por eficiencia computacional."],
        respuestaCorrecta: 2
    },
    {
        id: 261,
        pregunta: "¿Cuál es el objetivo principal del patrón de diseño Facade?",
        opciones: ["Facilitar la creación de objetos complejos mediante constructores", "Simplificar el acceso a funcionalidades complejas de un subsistema", "Permitir la reutilización de componentes en distintos contextos", "Establecer comunicación directa entre clases"],
        respuestaCorrecta: 1
    },
    {
        id: 262,
        pregunta: "¿En qué clase del proyecto se aplica el patrón Mediator según el documento?",
        opciones: ["EstudianteUI.java", "EstudianteRepositorio.java", "EstudianteServicio.java", "Main.java"],
        respuestaCorrecta: 2
    },
    {
        id: 263,
        pregunta: "¿Qué ventaja principal proporciona el uso del patrón Mediator?",
        opciones: ["Aumenta la dependencia entre componentes", "Permite que los componentes se comuniquen directamente", "Facilita la reutilización de componentes desacoplándolos", "Simplifica la interfaz de usuario"],
        respuestaCorrecta: 2
    },
    {
        id: 264,
        pregunta: "¿Cuál es una de las responsabilidades clave de la clase EstudianteFacade.java?",
        opciones: ["Validar los datos de entrada directamente", "Gestionar la base de datos", "Servir como única interfaz entre la UI y la lógica del sistema", "Implementar la lógica de negocio"],
        respuestaCorrecta: 2
    },
    {
        id: 265,
        pregunta: "¿Qué sucede si se implementa mal el patrón Facade y se agregan muchas funciones no relacionadas en una sola fachada?",
        opciones: ["El sistema se vuelve más desacoplado", "Se pierde la utilidad del patrón Mediator", "La fachada se convierte en una estructura compleja difícil de mantener", "Mejora el rendimiento del sistema"],
        respuestaCorrecta: 2
    },
    {
        id: 266,
        pregunta: "¿Cuál es el propósito principal del patrón Adapter?",
        opciones: ["Encapsular múltiples acciones dentro de una sola clase.", "Permitir que dos clases incompatibles trabajen juntas.", "Reducir el número de clases dentro del sistema.", "Establecer relaciones de herencia entre clases."],
        respuestaCorrecta: 1
    },
    {
        id: 267,
        pregunta: "¿Qué componente del patrón Adapter traduce la interfaz de una clase a otra compatible?",
        opciones: ["Target", "Adaptee", "Adapter", "Cliente"],
        respuestaCorrecta: 2
    },
    {
        id: 268,
        pregunta: "¿Cuál de las siguientes es una ventaja del patrón Command?",
        opciones: ["Aumenta la dependencia entre las clases.", "Permite encapsular una solicitud como un objeto.", "Reduce la legibilidad del sistema.", "Obliga a heredar múltiples clases."],
        respuestaCorrecta: 1
    },
    {
        id: 269,
        pregunta: "¿Qué desventaja se puede presentar al usar excesivamente el patrón Command?",
        opciones: ["Reducción de extensibilidad del sistema.", "Necesidad de modificar el cliente constantemente.", "Incremento en la cantidad de clases.", "Incapacidad de programar acciones futuras."],
        respuestaCorrecta: 2
    },
    {
        id: 270,
        pregunta: "¿En qué situación se recomienda aplicar el patrón Adapter?",
        opciones: ["Cuando se desea agrupar comandos relacionados.", "Al procesar eventos gráficos complejos.", "Cuando se necesita usar una clase existente cuya interfaz no coincide con la esperada.", "Al definir algoritmos recursivos complejos."],
        respuestaCorrecta: 1
    }
];
