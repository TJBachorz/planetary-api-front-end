# Planetary-API

> Hackathon solar system visualization

![Planetary GIF](https://media4.giphy.com/media/drpYCTRAjkM8AVMWJ2/giphy.gif)

![Planetary Image](https://i.imgur.com/ITMBORH.png)

## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Examples](#code-examples)
- [Features](#features)

## General Info

We built this project for a half-day hackathon. The project includes a fun visualization of the solar system along with cards displaying planet-specific data fetched from an API.

## Technologies

- HTML5
- CSS
- Flaticon
- JavaScript
- Ruby
- Rails
- OpenData of the Solar System API

## Setup

- Clone down the Backend (https://github.com/boyloe/Planetary-API-Rails-Backend), run `rails db:migrate`, run `rails:db seed`, and start the server by running `rails s` (must be on port 3000).
- Clone down the Frontend (https://github.com/TJBachorz/planetary-api-front-end) and start a server (we recommend lite-server).

## Code Examples

```javascript
function makeCardSection() {
	const body = document.querySelector(".test-card");
	const planetCard = document.createElement("p");
	planetCard.classList.add("planet-card");
	body.appendChild(planetCard);
	return planetCard;
}
```

```javascript
function displayPlanetImage(planet, planetCard) {
	const image = document.createElement("img");
	image.classList.add("planet-image");
	image.src = `./img/svg/${planet.name}.svg`;
	image.innerHTML = `<a href='./img/svg/${planet.name}.svg'></a>`;
	planetCard.appendChild(image);
}
```

## Features

- View a fun visualization of the solar system
- View cards with planet-specific data
