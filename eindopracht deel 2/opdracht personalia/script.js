//voornaam
var voornaam = prompt("wat is je voornaam");
var element = document.getElementById("id01");
element.innerHTML = voornaam;

//achternaam.
var achternaam = prompt("wat is je achternaam");
var element = document.getElementById("id02");
element.innerHTML = achternaam;

//email
var email = prompt("wat is je email");
var element = document.getElementById("id03");
element.innerHTML = email;

//woonplaats
var woonplaats = prompt("waar woon je ");
var element = document.getElementById("id04");
element.innerHTML = woonplaats;

//leeftijd
var leeftijd = prompt("hoe oud ben je");
var element = document.getElementById("id05");
element.innerHTML = leeftijd;

if(leeftijd == 16){
    document.querySelector("table").style.backgroundColor = 'orange';
    document.querySelector("table").style.color = 'white';
    document.querySelector("#kopje1").style.color = 'orange';
}
if(leeftijd == 17){
    document.querySelector("table").style.backgroundColor = 'blue';
    document.querySelector("table").style.color = 'white';
    document.querySelector("#kopje1").style.color = 'blue';
}
if(leeftijd == 18){
    document.querySelector("table").style.backgroundColor = 'gold';
    document.querySelector("table").style.color = 'white';
    document.querySelector("#kopje1").style.color = 'gold';
}
if(leeftijd == 19){
    document.querySelector("table").style.backgroundColor = 'green';
    document.querySelector("table").style.color = 'white';
    document.querySelector("#kopje1").style.color = 'green';
}
if(leeftijd == null){
    document.querySelector("table").style.backgroundColor = 'red';
    document.querySelector("table").style.color = 'white';
    document.querySelector("#kopje1").style.color = 'red';
}

document.querySelector("#kopje1").innerHTML = "Hallo meneer," + " " + voornaam + " " + achternaam;