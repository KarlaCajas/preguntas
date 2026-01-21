const fs = require('fs');
const content = fs.readFileSync('js/preguntas.js', 'utf8');
// Ejecutar el contenido en el contexto actual
const vm = require('vm');
const context = { preguntasDB: null };
vm.createContext(context);
vm.runInContext(content, context);

let problemasEncontrados = [];
const preguntasDB = context.preguntasDB;

if (!preguntasDB) {
    console.log('❌ No se pudo cargar preguntasDB del archivo');
    process.exit(1);
}

preguntasDB.forEach((p, idx) => {
    if (!p || !p.pregunta || !Array.isArray(p.opciones) || p.opciones.length === 0) {
        problemasEncontrados.push(`Pregunta ${idx + 1} (ID: ${p?.id}): Sin opciones o formato incorrecto`);
    } else {
        p.opciones.forEach((op, opIdx) => {
            if (!op || typeof op !== 'string' || op.trim() === '') {
                problemasEncontrados.push(`Pregunta ${idx + 1} (ID: ${p.id}): Opción ${opIdx + 1} vacía o inválida`);
            }
        });
    }
    
    if (typeof p.respuestaCorrecta !== 'number' || p.respuestaCorrecta < 0 || p.respuestaCorrecta >= (p.opciones?.length || 0)) {
        problemasEncontrados.push(`Pregunta ${idx + 1} (ID: ${p.id}): respuestaCorrecta inválida (${p.respuestaCorrecta})`);
    }
});

if (problemasEncontrados.length > 0) {
    console.log('\n⚠️  PROBLEMAS ENCONTRADOS:\n');
    problemasEncontrados.forEach(p => console.log('  ❌ ' + p));
    console.log(`\n📊 Total problemas: ${problemasEncontrados.length}\n`);
} else {
    console.log('\n✅ Todas las preguntas están correctamente formadas');
    console.log(`📊 Total de preguntas: ${preguntasDB.length}\n`);
}
