var carniContainer = document.getElementById("carn");
var herbiContainer = document.getElementById("herb");


function showCarnivores (carnivores) {
    var buildCarnString = `<ul> <h2>Carnivores</h2>`;
    for (var i = 0; i < carnivores.carnivores.length; i++) {
        buildCarnString += `<li>${carnivores.carnivores[i].name} | Origin: ${carnivores.carnivores[i].origin} </li>`
    };
    buildCarnString += `</ul>`;
    carniContainer.innerHTML = buildCarnString;
}

function showHerbivores (herbivores) {
    var buildHerbString = `<ul> <h2>Herbivores</h2>`;
    for (var i = 0; i < herbivores.herbivores.length; i++) {
        buildHerbString += `<li>${herbivores.herbivores[i].name} | Origin: ${herbivores.herbivores[i].origin} </li>`
    };
    buildHerbString += `</ul>`;
    herbiContainer.innerHTML = buildHerbString;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
