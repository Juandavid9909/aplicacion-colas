// Comando para establecer la conexión
var socket = io();

var lable = $("#lblNuevoTicket");

socket.on("connect", () => {
    console.log("Conectado al servidor");
});

socket.on("disconnect", () => {
    console.log("Desconectado del servidor");
});

socket.on("estadoActual", function(resp) {
    console.log(resp);
    lable.text(resp.actual);
});

$("button").on("click", function() {
    socket.emit("siguienteTicket", null, function(siguienteTicket) {
        lable.text(siguienteTicket);
    });
});