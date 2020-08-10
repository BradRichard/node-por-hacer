const fs=require('fs');
const colors=require('colors');
const { describe } = require('yargs');
let listadoPorHacer=[];
const guardarDB=()=>{
    let data=JSON.stringify(listadoPorHacer);
    fs.writeFile('dataBase/data.json',data,e=>{
        if(e){throw(`No se guardo en la base de datos`)};
    })
};
const cargarDB=()=>{
    try{
        listadoPorHacer=require('../dataBase/data.json');
    }catch(e){
        listadoPorHacer=[];
    }
};
const getListado=()=>{
    cargarDB();
    return listadoPorHacer;
};
const actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index=listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else{return false;}
};
const borrar=(descripcion)=>{
    cargarDB();
    let nuevoListado=listadoPorHacer.filter(tarea=>tarea.descripcion!==descripcion);
    if(listadoPorHacer.length===nuevoListado.length){
        return false;
    }else{
        listadoPorHacer=nuevoListado;
        guardarDB();
        return true;
    }
}
const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};
module.exports={
    crear,
    getListado,
    actualizar,
    borrar
};