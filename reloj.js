const mostrarReloj=()=>{
    let fecha=new Date();
    let h=formatoNumero(fecha.getHours());
    let min=formatoNumero(fecha.getMinutes());
    let seg=formatoNumero(fecha.getSeconds());
    // document.getElementById("hora").innerHTML=`${h}:${min}:${seg}`
    // const meses=['Ene','Feb','Mar','Abr','May','Jun','Ago','Sep','Oct','Nov','Dic']
    // const dias=['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
    // let diaSem=dias[fecha.getDay()];
    // let mes = meses[fecha.getMonth()]; 
    let dia=formatoNumero(fecha.getDate());
    // let year=fecha.getFullYear();
    document.getElementById("day").innerHTML=`${dia}`;
    document.getElementById("hour").innerHTML=`${h}`;
    document.getElementById("min").innerHTML=`${min}`;
    document.getElementById("seg").innerHTML=`${seg}`;
}
setInterval(mostrarReloj,1000);
const formatoNumero=(num)=>{
    if (num<10) {
        num="0"+num;
    }
    return num;
}
