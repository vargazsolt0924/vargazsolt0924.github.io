function $(id){
    return document.getElementById(id);
}

var tipus1 = {
    mercedes: true,
    nev: "C220d limousine",
    kep: 'images/tesztvezetes+580x400/c220d.png',
}

var tipus2 = {
    mercedes: true,
    nev: "E300de 4MATIC Plug-in hybrid T-modell",
    kep: 'images/tesztvezetes+580x400/e300de.png',
}

var tipus3 = {
    mercedes: true,
    nev: "GLE400d 4MATIC",
    kep: 'images/tesztvezetes+580x400/gl400d.png',
}

var tipus4 = {
    mercedes: true,
    nev: "S450 4MATIC Mild hybrid",
    kep: 'images/tesztvezetes+580x400/s450.png',
}

var tipus5 = {
    mercedes: true,
    nev: "AMG GT63 4MATIC+",
    kep: 'images/tesztvezetes+580x400/gt63.png',
}

var tipus6 = {
    mercedes: false,
    nev: "A3 SE 35 TDI limousine",
    kep: 'images/tesztvezetes+580x400/a3.png',
}

var tipus7 = {
    mercedes: false,
    nev: "A6 allroad quattro 55 TFSI S tronic",
    kep: 'images/tesztvezetes+580x400/a6.png',
}

var tipus8 = {
    mercedes: false,
    nev: "A8L 50 TDI quattro tiptronic",
    kep: 'images/tesztvezetes+580x400/a8l.png',
}

var tipus9 = {
    mercedes: false,
    nev: "Q7 50 TDI quattro tiptronic",
    kep: 'images/tesztvezetes+580x400/q7.png',
}

var tipus10 = {
    mercedes: false,
    nev: "R8 coupé V10 quattro S tronic",
    kep: 'images/tesztvezetes+580x400/r8.png',
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
    for (let i = document.forms['urlap']['tipus'].length - 1; i >= 1; i--) {
        document.forms['urlap']['tipus'].remove(i);
    }
    for(let i = 0; i < tipusok.length; i++){
        var newOption = document.createElement('OPTION');
        var newOptionValue = document.createTextNode(tipusok[i].nev);
        newOption.appendChild(newOptionValue);
        document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
        /*https://www.youtube.com/watch?v=GBDMr24O_rs*/
    }
}

function markaBeallit(){
    let merci = document.forms['urlap']['marka'].value == 'Mercedes-Benz';
    for (let i = document.forms['urlap']['tipus'].length - 1; i >= 1; i--) {
        document.forms['urlap']['tipus'].remove(i);
    }
    if(merci){
        for(let i = 0; i < tipusok.length; i++){
            if(tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
            }
        }
    }else{
        for(let i = 0; i < tipusok.length; i++){
            if(!tipusok[i].mercedes){
                var newOption = document.createElement('OPTION');
                var newOptionValue = document.createTextNode(tipusok[i].nev);
                newOption.appendChild(newOptionValue);
                document.forms['urlap']['tipus'].insertBefore(newOption,document.forms['urlap']['tipus'].lastChild);
            }
        }
    }
}
let validAll = true;
function controllName(){
    let name = document.forms['urlap']['nev'].value;
    let spaces = 0;
    let valid = true;
    for(let i = 0; i < name.length; i++){
        if(name.charAt(i) == ' '){
            spaces++;
        }
    }
    if(spaces > 0){
        let firstIndex = 0;
        for(let i = 0; i < name.length; i++){
            if(name.charAt(i) == ' '){
                firstIndex = i;
                break;
            }
        }
        if(firstIndex == 0){
            valid = false;
        }
        if(firstIndex == name.length-1){
            valid = false;
        }
    }else{
        valid = false;
    }
    if(!valid){
        window.alert('Helytelen nevet adott meg!');
        validAll = false;
    }
}

function controllEMail(){
    let name = document.forms['urlap']['email'].value;
    let domains = ['.com','.hu','.uk','.ro','.ar','.eu'];
    let numbers = '0123456789';
    let parts = ['','',''];
    let index = 0;
    for(let i = 0; i < name.length; i++){
        if(name.charAt(i) == '@'){
            index = 1;
        }
        if(name.charAt(i) == '.' && index == 1){
            index = 2;
        }
        parts[index] += name.charAt(i);
    }
    let err = false;
    if(parts[0].length < 1){
        err = true;
    }
    let part2hasNumber = false;
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < parts[1].length; j++){
            if(numbers.charAt(i) == parts[1].charAt(j)){
                part2hasNumber = true;
                break;
            }
        }
    }
    if(!err && (parts[1].length < 2 || part2hasNumber)){
        err = true;
    }
    let part3hasDomain = false;
    for(let i = 0; i < domains.length; i++){
        if(domains[i] == parts[2]){
            part3hasDomain = true;
            break;
        }
    }
    if(!err && (parts[2].length < 2 || !part3hasDomain)){
        err = true;
    }
    if(err){
        window.alert('Helytelen e-mailcímet adott meg!');
        validAll = false;
    }
}

function controllNumber(){
    let phnum = document.forms['urlap']['telefonszam'].value;
    let copy = '';
    let numbers = '0123456789';
    for(let i = 0; i < phnum.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(phnum.charAt(i) == numbers.charAt(j)){
                copy += phnum.charAt(i);
            }
        }
    }
    if(copy.length != phnum.length || phnum.length != 11){
        window.alert('Helytelen telefonszámot adott meg!');
        validAll = false;
    }
}

function controllLicence(){
    let jogos = document.forms['urlap']['vanejogsi'].value == 'Igen';
    if(!jogos){
        window.alert('Ön nem vezethet jogosítvány nélkül!');
        validAll = false;
    }
}

function kiir(){
    let tipus = document.forms['urlap']['tipus'].value;
    if(validAll){
        for(let i = 0; i < tipusok.length; i++){
            if(tipusok[i].nev == tipus){
                $('kep').src = tipusok[i].kep;
                $('kocsika').innerHTML = 'Sikeres foglalás';
                $('vegszoveg').innerHTML = 'A további információkat emailben elküldtük.';
            }
        }
    }
}

function controllTobbi(){
    let marka = document.forms['urlap']['marka'].value;
    let tipus = document.forms['urlap']['tipus'].value;
    let ido = document.forms['urlap']['idopont'].value;
    let jogszam = document.forms['urlap']['jogositvany'].value;
    let szalon = document.forms['urlap']['autoszalon'].value;
    if(marka == '' || tipus == '' || ido == '' || jogszam == '' || szalon == ''){
        window.alert('Ne hagyjon üresen mezőt!');
        validAll = false;
    }
}

function ellenoriz(){
    validAll = true;
    controllName();
    controllEMail();
    controllNumber();
    controllLicence();
    controllTobbi();
    kiir();
}

function init(){
    beallit();
    $('gomb').addEventListener('click',ellenoriz,false);
    document.forms['urlap']['marka'].addEventListener('click',markaBeallit,false);
}

window.addEventListener("load", init, false);