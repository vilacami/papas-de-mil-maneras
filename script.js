const imag=[{ruta:"imagenes/papa1.jpg", text:"Papas rellenas con queso gratinado con romero y albaca. " },{ruta:"imagenes/papa2.jpg", text:"Ñoquis caseros de papa y queso"},
{ruta:"imagenes/papa3.jpg",text:"Croquetas de papa con atun"},{ruta:"imagenes/papa4.jpg",text:"Puré de papas cremoso con un toque de manteca"}, {ruta:"imagenes/papa5.jpg",text:"Papas baston fritas o al horno "}];
let i=0;
let img= document.getElementById("imgCarrusel");
let texto=document.getElementById("txt");

img.src=imag[i].ruta;
texto.innerHTML=imag[i].text;


function anterior(){

    if(i>0){
        i--
    }else{
        i=(imag.length-1);
    }

    img.src= imag[i].ruta;
    texto.innerHTML=imag[i].text;
    
}

function siguiente(){

    if(i<imag.length-1){
        i++
    }else{
        i=0;
    }
    
    img.src= imag[i].ruta;
    texto.innerHTML=imag[i].text;
}