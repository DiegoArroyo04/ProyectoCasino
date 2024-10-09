function actualizarHora() {
    var miFecha = new Date();
    var texto = document.getElementById('hora');
    texto.innerHTML = miFecha.getHours() + " : " + miFecha.getMinutes();
}
//ACTUALIZAMOS LA HORA CADA MINUTO
setInterval(actualizarHora, 60000);