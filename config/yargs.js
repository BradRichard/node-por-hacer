const opts=[{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de la tarea por Hacer'
    }
},{
    descripcion:{
        demand:true,
        alias:'d',
        desc:'Descripcion de la tarea por Hacer'
    },
    completado:{
        demand:true,
        alias:'c',
        desc:'Marca como completado o pendiente la tarea'
    }
},{
    completado:{
        alias:'c',
        desc:'Marca como completado o pendiente la tarea'
    }    
}];
const argv=require('yargs')
    .command('crear','Crear un elemento por hacer',opts[0])
    .command('actualizar','Actualiza el estado completado de una tarea',opts[1])
    .command('borrar','Borra una tarea',opts[0])
    .command('listar','Muestra las listas de las tareas',opts[3])
    .help()
    .argv;
module.exports={
    argv
};
