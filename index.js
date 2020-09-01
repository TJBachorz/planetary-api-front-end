fetch("http://localhost:3000/planets")
    .then(response => response.json())
    .then(planets => makePlanetCard(planets))

function makePlanetCard(planets) {
    planets.forEach(planet => {
        planetCard = makeCardSection()
        planetName(planet, planetCard)
        displayPlanetImage(planet, planetCard)
        planetMoons(planet, planetCard)
        planetGravity(planet, planetCard)
        planetDiameter(planet, planetCard)
        planetDistance(planet,planetCard) 
    })
}

function makeCardSection() {
    const body = document.querySelector('.test-card')
    const planetCard = document.createElement('p')
    planetCard.classList.add('planet-card')
    body.appendChild(planetCard)
    return planetCard
}

function planetName(planet, planetCard) {
    const name = document.createElement('h2')
    name.textContent = planet.name
    planetCard.appendChild(name)
}

function planetMoons(planet, planetCard) {
    const moons = document.createElement('p')
    moons.innerHTML = `Number of Moons: <span class='result'><strong>${planet.moons}</strong></span>`
    planetCard.appendChild(moons)
}

function planetGravity(planet, planetCard) {
    const gravity = document.createElement('p')
    gravity.innerHTML = `Gravity relative to Earth: <span class='result'><strong>${planet.gravity}</strong></span>`
    planetCard.appendChild(gravity)
}

function planetDiameter(planet, planetCard) {
    const diameter = document.createElement('p')
    diameter.innerHTML = `Diameter: <span class='result'><strong>${planet.diameter} km</strong></span>`
    planetCard.appendChild(diameter)
}

function displayPlanetImage(planet, planetCard) {
    const image = document.createElement('img')
    image.classList.add('planet-image')
    image.src = `./img/svg/${planet.name}.svg`
    image.innerHTML = `<a href='./img/svg/${planet.name}.svg'></a>`
    planetCard.appendChild(image)
}

function planetDistance(planet, planetCard) {
    const distance = document.createElement('p')
    distance.innerHTML = `Distance from the Sun: <span class='result'><strong>${planet.perihelion} km</strong></span>`
    planetCard.appendChild(distance)
}


