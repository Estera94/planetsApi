"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getApiUrl() {
  return _getApiUrl.apply(this, arguments);
}

function _getApiUrl() {
  _getApiUrl = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.le-systeme-solaire.net/rest/bodies/?filter%5B%5D=isPlanet,neq,true");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getApiUrl.apply(this, arguments);
}

function borderAndActiveclass(link) {
  document.querySelector('.navbar-nav').querySelector('.nav-border').classList.remove('nav-border');
  link.classList.add('nav-border');
  var temp = document.querySelector('#planet-container');

  if (document.querySelectorAll('.active').length > 0) {
    document.querySelector('.active').classList.remove('active');
  } else if (temp) {
    temp.remove();
  }
}

function planetDescription(url) {
  var planetDescriptions = {
    "uranus": 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).',
    "mercure": 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals.',
    "venus": 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth\'s night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. Venus lies within Earth\'s orbit, and so never venture far from the Sun.',
    "terre": 'Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth\'s surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies.',
    "mars": 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    "jupiter": 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.',
    "saturne": 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',
    "neptune": 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.'
  };
  url.bodies.forEach(function (planet) {
    planet.description = planetDescriptions[planet.id];
  });
}

function getPlanets() {
  return _getPlanets.apply(this, arguments);
}

function _getPlanets() {
  _getPlanets = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var planets, source, template, target;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getApiUrl();

          case 2:
            planets = _context2.sent;
            planetDescription(planets);
            source = document.querySelector('#planetsInfo').innerHTML;
            template = Handlebars.compile(source);
            target = document.querySelector('#info');
            target.innerHTML += template(planets);
            document.querySelectorAll('.navbar-nav li').forEach(function (link) {
              link.addEventListener('click', function (e) {
                borderAndActiveclass(link);
                document.querySelector('#' + link.dataset.id).classList.add('active');
              });
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPlanets.apply(this, arguments);
}

getPlanets();
//# sourceMappingURL=app.js.map
