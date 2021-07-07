
async function getApiUrl() {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/?filter%5B%5D=isPlanet,neq,true`)
    let data = await response.json()
    return data
}

function borderAndActiveclass(link) {
    document.querySelector('.navbar-nav').querySelector('.nav-border').classList.remove('nav-border')
    link.classList.add('nav-border')
    const temp = document.querySelector('#planet-container')
    if (document.querySelectorAll('.active').length > 0) {
        document.querySelector('.active').classList.remove('active')
    } else if (temp) {
        temp.remove()
    }
}

function planetDescription(url) {
    const planetDescriptions = {
        "uranus": 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).',
        "mercure": 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals.',
        "venus": 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth\'s night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. Venus lies within Earth\'s orbit, and so never venture far from the Sun.',
        "terre": 'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth\'s surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies.',
        "mars": 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        "jupiter": 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.',
        "saturne": 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',
        "neptune": 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.',
    }

    url.bodies.forEach(planet => {
        planet.description = planetDescriptions[planet.id]
    })
}

async function getPlanets() {
    let planets = await getApiUrl()
    planetDescription(planets)
    const source = document.querySelector('#planetsInfo').innerHTML
    const template = Handlebars.compile(source)
    const target = document.querySelector('#info')
    target.innerHTML += template(planets)

    document.querySelectorAll('.navbar-nav li').forEach(link => {
        link.addEventListener('click', () =>{
            borderAndActiveclass(link)
            document.querySelector('#' + link.dataset.id).classList.add('active')
        })
    })
}
getPlanets()



