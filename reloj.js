const mostrarReloj=()=>{
    let fecha=new Date();
  
    let h=formatoHora(fecha.getHours());
    let min=formatoHora(fecha.getMinutes());
    let seg=formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML=`${h}:${min}:${seg}`
    const meses=['Ene','Feb','Mar','Abr','May','Jun','Ago','Sep','Oct','Nov','Dic']
    const dias=['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
   
    let diaSem=dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let dia=fecha.getDate();
    let year=fecha.getFullYear();
    
    document.getElementById("fecha").innerHTML=`${diaSem},${dia} ${mes} del ${year}`;
    //con el .classList.toggle("estilo"); puedes acceder a los estilos de tu archivo css
    document.getElementById("contenedor").classList.toggle("animar");
}
setInterval(mostrarReloj,1000);
const formatoHora=(hora)=>{
    if (hora<10) {
        hora="0"+hora;
    }
    return hora;
}
// let fechas=new Date();
// console.log(  fechas.getDay)