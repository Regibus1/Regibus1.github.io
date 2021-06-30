var miOpcion;
var miOpcionAnterior = "main__user--option";
var userWinCount = 0;
var opcionRival;  
var opcionRivalAnterior = "main__cpu--option";
var cpuWinCount = 0;
var estaEsMiOpcion = 0;
var piedra = "fa-hand-rock";
var papel = "fa-hand-paper";
var tijeras = "fa-hand-scissors";
var spock = "fa-hand-spock";
var lizard = "fa-hand-lizard";
var id;
var idAnterior;

var btn = document.getElementById('boton');
btn.addEventListener("click", juegoPiedraPapelOTijera);


function enClic(option) {
    miOpcion = option;
    estaEsMiOpcion = miOpcion;

    miOpcion == 1 ? (miOpcion = piedra, id  = "piedra") :
    miOpcion == 2 ? (miOpcion = papel, id = "papel") :
    miOpcion == 3 ? (miOpcion = tijeras, id = "tijeras") : 
    miOpcion == 4 ? (miOpcion = spock, id = "spock") :
    miOpcion == 5 ? (miOpcion = lizard, id = "lizard") : miOpcionAnterior;

    idAnterior ? document.getElementById(idAnterior).classList.toggle("state-selected") : idAnterior ;
    document.getElementById(id).classList.toggle("state-selected");
    idAnterior = id;
}
function winUSER() {
    userWinCount++;
    document.querySelector(".main__user--win-count").innerHTML = userWinCount;
}
function winCPU() {
    cpuWinCount++;
    document.querySelector(".main__cpu--win-count").innerHTML = cpuWinCount;
}
function esEmpate() {
    document.querySelector(".main__user--win-count").innerHTML = userWinCount;
    document.querySelector(".main__cpu--win-count").innerHTML = cpuWinCount;
}
function juegoPiedraPapelOTijera() {
    
    !estaEsMiOpcion ? opcionRival : opcionRival = Math.floor(Math.random() * (6 - 1)) + 1; 
    var suma = estaEsMiOpcion + opcionRival;
    var resta = estaEsMiOpcion - opcionRival;

    resta == 0 ? esEmpate() : 
    (suma == 3) && (estaEsMiOpcion > opcionRival) ? winUSER() : suma == 3 ? winCPU() : esEmpate();
    (suma == 4) && (estaEsMiOpcion < opcionRival) ? winUSER() : suma == 4 ? winCPU() : esEmpate();
    (suma == 5) && (estaEsMiOpcion > opcionRival) ? winUSER() : suma == 5 ? winCPU() : esEmpate();
    (suma == 6) && (estaEsMiOpcion < opcionRival) ? winUSER() : suma == 6 ? winCPU() : esEmpate();
    (suma == 7) && (estaEsMiOpcion > opcionRival) ? winUSER() : suma == 7 ? winCPU() : esEmpate();
    (suma == 8) && (estaEsMiOpcion < opcionRival) ? winUSER() : suma == 8 ? winCPU() : esEmpate();
    (suma == 9) && (estaEsMiOpcion > opcionRival) ? winUSER() : suma == 9 ? winCPU() : esEmpate();

    opcionRival == 1 ? opcionRival = piedra :
    opcionRival == 2 ? opcionRival = papel :
    opcionRival == 3 ? opcionRival = tijeras :
    opcionRival == 4 ? opcionRival = spock : 
    opcionRival == 5 ? opcionRival = lizard : opcionRivalAnterior;

    document.getElementById("user").classList.toggle(miOpcionAnterior);
    document.getElementById("user").classList.toggle(miOpcion);
    miOpcionAnterior = miOpcion;
    
    document.getElementById("cpu").classList.toggle(opcionRivalAnterior);
    document.getElementById("cpu").classList.toggle(opcionRival);
    opcionRivalAnterior = opcionRival;

    document.getElementById(idAnterior).classList.toggle("state-selected");
    document.getElementById(id).classList.toggle("state-selected");
    idAnterior = id;    
}