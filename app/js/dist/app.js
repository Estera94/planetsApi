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
            source = document.querySelector('#planetsInfo').innerHTML;
            template = Handlebars.compile(source);
            target = document.querySelector('#info');
            target.innerHTML += template(planets);
            document.querySelectorAll('.navbar-nav li').forEach(function (link) {
              link.addEventListener('click', function (e) {
                var temp = document.querySelector('#planet-container');

                if (document.querySelectorAll('.active').length > 0) {
                  document.querySelector('.active').classList.remove('active');
                } else if (temp) {
                  temp.remove();
                }

                document.querySelector('#' + link.dataset.id).classList.add('active');
              });
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPlanets.apply(this, arguments);
}

getPlanets();
document.querySelectorAll('li').forEach(function (el) {
  var nav = document.querySelector('.navbar-nav');
  el.addEventListener('click', function (e) {
    nav.querySelector('.nav-border').classList.remove('nav-border');
    el.classList.add('nav-border');
  });
});
//# sourceMappingURL=app.js.map
