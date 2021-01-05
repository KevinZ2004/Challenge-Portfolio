//voornaam
var voornaam = prompt("Wat is uw naam?");
var element = document.getElementById("id01");
element.innerHTML = voornaam;

//leeftijd
var leeftijd = prompt("hoe oud ben je");
var element = document.getElementById("id02");

if(leeftijd > 18){
    document.querySelector("table").style.backgroundColor = 'red';
    document.querySelector("table").style.color = 'red';
    document.querySelector("#kopje1").style.color = 'red';
}

if(leeftijd <= 18){
    document.querySelector("table").style.backgroundColor = 'green';
    document.querySelector("table").style.color = 'green';
    document.querySelector("#kopje1").style.color = 'green';
}



var element = document.getElementById("id02");
element.innerHTML = leeftijd;

document.querySelector("#kopje1").innerHTML = "Welkom," + " " + voornaam + " " + leeftijd;