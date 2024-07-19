var compteur = document.getElementById("compteur");
var bouton = document.getElementById("bouton");
var bouton_1 = document.getElementById("bouton_1");
var bouton_2 = document.getElementById("bouton_2")
var nombre = 0;

bouton.addEventListener('click', ajouter);
bouton_1.addEventListener('click', extract);
bouton_2.addEventListener('click', switching)

function ajouter() {
    nombre = nombre + 1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == 10) {
        compteur.style.color = "red";
        compteur.style.fontSize = "50px";
    }
}

function extract() {
    nombre = nombre - 1;
    compteur.innerText = nombre;
    console.log(nombre);
}

function switching() {
    compteur.classList.toggle("dark");
  }
