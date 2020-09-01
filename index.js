fetch("http://localhost:3000/planets")
    .then(response => response.json())
    .then(planets => makePlanetCard(planets))


function makePlanetCard(planets) {
    planetCard = makeCardSection()
    planets.forEach(planet => {
        planetName(planet, planetCard)
        planetMoons(planet, planetCard)
        planetGravity(planet, planetCard)
        planetDiameter(planet, planetCard)
    })
}

function makeCardSection() {
    const body = document.querySelector('body')
    const planetCard = document.createElement('section')
    planetCard.classList.add('planet-card')
    body.appendChild(planetCard)
    return planetCard
}

function planetName(planet, planetCard) {
    const name = document.createElement('h3')
    name.textContent = `${planet.name}`
    planetCard.appendChild(name)
}

function planetMoons(planet, planetCard) {
    const moons = document.createElement('p')
    moons.textContent = planet.moons
    planetCard.appendChild(moons)
}

function planetGravity(planet, planetCard) {
    const gravity = document.createElement('p')
    gravity.textContent = planet.gravity
    planetCard.appendChild(gravity)
}

function planetDiameter(planet, planetCard) {
    const diameter = document.createElement('p')
    diameter.textContent = planet.diameter
    planetCard.appendChild(diameter)
}


