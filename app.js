const{crear,getListado,actualizar,borrar}=require('./dist/por-hacer');
const{argv}=require('./config/yargs');
const colors=require('colors');
let comando=argv._[0];

switch(comando){
    case 'crear':
        console.log('Crear por hacer'.red);
        let tarea=crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        console.log('=============================================='.red);
        console.log('======Mostrar todas las tareas por hacer======'.red);
        console.log('=============================================='.red);
        let listado=getListado();
        if(argv.c==='true' || argv.c==='false'){listado=listado.filter(lista=>lista.completado!==argv.c);}
        console.log(`\t\tLISTADO ${listado.length}`.red);
        listado.forEach(lista=>{
            console.log(lista)
            console.log('=============================================='.red);
            console.log(`${lista.descripcion}\nEstado: ${lista.completado}`.green)
            console.log('==============================================\n'.red);
        });
    break;
    case 'actualizar':
        console.log('================================================='.red);
        console.log('==========Actualiza una tarea por hacer=========='.red);
        console.log('================================================='.red);
        let actualizado=actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrado=borrar(argv.descripcion);
        console.log(borrado);
    break;
    default:
        console.log('Comando no es reconocido');
}

console.log(argv.c);