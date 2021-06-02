function $(id){
    return document.getElementById(id);
}

var tipus1 = {
    mercedes: true,
    nev: "C220d limousine",
    motor: "2.0 TDI",
    teljesitmeny: "194Le(143kw)",
    gyorsulas: "0-100: 7,7s",
    vegsebesseg: "228 km/h",
    fogyasztas: "6,2 l/100km",
    kep: 'images/3_kepek/c220d.jpg',
}

var tipus2 = {
    mercedes: true,
    nev: "E300de 4MATIC Plug-in hybrid T-modell",
    motor: "2.0 TDI",
    teljesitmeny: "194Le(143kw)",
    gyorsulas: "0-100: 5,9s",
    vegsebesseg: "250 km/h",
    fogyasztas: "8,5 l/100km",
    kep: 'images/3_kepek/e300de.jpg',
}

var tipus3 = {
    mercedes: true,
    nev: "GLE400d 4MATIC",
    motor: "3.0 TDI",
    teljesitmeny: "333Le(245kw)",
    gyorsulas: "0-100: 5,7s",
    vegsebesseg: "245 km/h",
    fogyasztas: "8,7 l/100km",
    kep: 'images/3_kepek/gl400d.jpg',
}

var tipus4 = {
    mercedes: true,
    nev: "S450 4MATIC Mild hybrid",
    motor: "5.0 (V8)",
    teljesitmeny: "340Le(250kw)",
    gyorsulas: "0-100: 5,9s",
    vegsebesseg: "250 km/h",
    fogyasztas: "11,1 l/100km",
    kep: 'images/3_kepek/s450.jpg',
}

var tipus5 = {
    mercedes: true,
    nev: "AMG GT63 4MATIC+",
    motor: "4.0 (V8)",
    teljesitmeny: "639Le(470kw)",
    gyorsulas: "0-100: 3,2s",
    vegsebesseg: "315 km/h",
    fogyasztas: "11,3 l/100km",
    kep: 'images/3_kepek/gt63.jpg',
}

var tipus6 = {
    mercedes: false,
    nev: "A3 SE 35 TDI limousine",
    motor: "1.5 TFSI",
    teljesitmeny: "150Le(110kw)",
    gyorsulas: "0-100: 8,2s",
    vegsebesseg: "224 km/h",
    fogyasztas: "5,5 l/100km",
    kep: 'images/3_kepek/a3.jpg',
}

var tipus7 = {
    mercedes: false,
    nev: "A6 allroad quattro 55 TFSI S tronic",
    motor: "3.0 TDI",
    teljesitmeny: "340Le(250kw)",
    gyorsulas: "0-100: 5,5s",
    vegsebesseg: "250 km/h",
    fogyasztas: "7,6 l/100km",
    kep: 'images/3_kepek/a6.jpg',
}

var tipus8 = {
    mercedes: false,
    nev: "A8L 50 TDI quattro tiptronic",
    motor: "3.0 TDI",
    teljesitmeny: "286Le(210kw)",
    gyorsulas: "0-100: 5,9s",
    vegsebesseg: "250 km/h",
    fogyasztas: "5,8 l/100km",
    kep: 'images/3_kepek/a8l.jpg',
}

var tipus9 = {
    mercedes: false,
    nev: "Q7 50 TDI quattro tiptronic",
    motor: "3.0 TDI",
    teljesitmeny: "286Le(210kw)",
    gyorsulas: "0-100: 6,3s",
    vegsebesseg: "241 km/h",
    fogyasztas: "6,5 l/100km",
    kep: 'images/3_kepek/q7.jpg',
}

var tipus10 = {
    mercedes: false,
    nev: "R8 coupé V10 quattro S tronic",
    motor: "5.2 TFSI",
    teljesitmeny: "610Le(455kw)",
    gyorsulas: "0-100: 3,2s",
    vegsebesseg: "330 km/h",
    fogyasztas: "12,3 l/100km",
    kep: 'images/3_kepek/r8.jpg',
}

let tipusok = new Array();
tipusok.push(tipus1);
tipusok.push(tipus2);
tipusok.push(tipus3);
tipusok.push(tipus4);
tipusok.push(tipus5);
tipusok.push(tipus6);
tipusok.push(tipus7);
tipusok.push(tipus8);
tipusok.push(tipus9);
tipusok.push(tipus10);

function beallit(){
    for (let i = document.forms['urlap1']['tipus1'].length - 1; i >= 1; i--) {
        document.forms['urlap1']['tipus1'].remove(i);
    }
    for(let i = 0; i < tipusok.length; i++){
        var newOption = document.createElement('OPTION');
        var newOptionValue = document.createTextNode(tipusok[i].nev);
        newOption.appendChild(newOptionValue);
        document.forms['urlap1']['tipus1'].insertBefore(newOption,document.forms['urlap1']['tipus1'].lastChild);
    }
}

function marka1Beallit(){
    let merci = document.forms['urlap1']['marka1'].value == 'Mercedes-Benz';
    for (let i = document.forms['urlap1']['tipus1'].length - 1; i >= 1; i--) {
        document.forms['urlap1']['tipus1'].remove(i);
    }
    if(merci){
        for(let i = 0; i < tipusok.length; i++){
            if(tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap1']['tipus1'].insertBefore(newOption,document.forms['urlap1']['tipus1'].lastChild);
            }
        }
    }else{
        for(let i = 0; i < tipusok.length; i++){
            if(!tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap1']['tipus1'].insertBefore(newOption,document.forms['urlap1']['tipus1'].lastChild);
            }
        }
    }
}

function marka2Beallit(){
    let merci = document.forms['urlap2']['marka2'].value == 'Mercedes-Benz';
    for (let i = document.forms['urlap2']['tipus2'].length - 1; i >= 1; i--) {
        document.forms['urlap2']['tipus2'].remove(i);
    }
    if(merci){
        for(let i = 0; i < tipusok.length; i++){
            if(tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap2']['tipus2'].insertBefore(newOption,document.forms['urlap2']['tipus2'].lastChild);
            }
        }
    }else{
        for(let i = 0; i < tipusok.length; i++){
            if(!tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap2']['tipus2'].insertBefore(newOption,document.forms['urlap2']['tipus2'].lastChild);
            }
        }
    }
}

function kiir(){
    let type1 = document.forms['urlap1']['tipus1'].value;
    let type2 = document.forms['urlap2']['tipus2'].value;
    for(let i = 0; i < tipusok.length; i++){
        if(tipusok[i].nev == type1){
            $('kep1').src = tipusok[i].kep;
            $('motor1'). innerHTML = 'Motor: '+tipusok[i].motor;
            $('teljesitmeny1'). innerHTML = 'Teljesítmény: '+tipusok[i].teljesitmeny;
            $('gyorsulas1'). innerHTML = 'Gyorsulás: '+tipusok[i].gyorsulas;
            $('vegsebesseg1'). innerHTML = 'Végsevesség: '+tipusok[i].vegsebesseg;
            $('fogyasztas1'). innerHTML = 'Fogyasztás: '+tipusok[i].fogyasztas;
            break;
        }
    }
    for(let i = 0; i < tipusok.length; i++){
        if(tipusok[i].nev == type2){
            $('kep2').src = tipusok[i].kep;
            $('motor2'). innerHTML = 'Motor: '+tipusok[i].motor;
            $('teljesitmeny2'). innerHTML = 'Teljesítmény: '+tipusok[i].teljesitmeny;
            $('gyorsulas2'). innerHTML = 'Gyorsulás: '+tipusok[i].gyorsulas;
            $('vegsebesseg2'). innerHTML = 'Végsevesség: '+tipusok[i].vegsebesseg;
            $('fogyasztas2'). innerHTML = 'Fogyasztás: '+tipusok[i].fogyasztas;
            break;
        }
    }
}

function init(){
    beallit();
    $('marka1').addEventListener('click',marka1Beallit,false);
    $('marka2').addEventListener('click',marka2Beallit,false);
    $('gomb').addEventListener('click',kiir,false);
}

window.addEventListener("load", init, false);