var statusMenu= "fechado";

function menu(){
    var iconBurguer = document.getElementById('icon-burguer');
    var iconX = document.getElementById('icon-x');
    var menuMobile = document.getElementById('menu-mobile');

    if(statusMenu == "fechado"){
        iconBurguer.style.display="none";
        iconX.style.display="block";
        menuMobile.style.left="0";

        statusMenu= "aberto";
    }else{
        iconBurguer.style.display="block";
        iconX.style.display="none";
        menuMobile.style.left="-100%";

        statusMenu= "fechado";
    }
}