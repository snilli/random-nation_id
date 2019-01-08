webpackHotUpdate("static/development/pages/index.js",{

/***/ "./libraries/randomNationId.js":
/*!*************************************!*\
  !*** ./libraries/randomNationId.js ***!
  \*************************************/
/*! exports provided: randomNationId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNationId", function() { return randomNationId; });
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var status = false;
var badNationid = [];
var goodNationid = [];

var randomNationId = function randomNationId(times) {
  while (goodNationid.length !== times) {
    var currentGood = '';

    var _loop = function _loop() {
      var currentNationId = getRandomInt(1212121212121, 9999999999999).toString();
      var sameNationId = badNationid.filter(function (item) {
        return item === currentNationId;
      });

      if (sameNationId.length >= 1) {
        return "continue";
      }

      var reducer = function reducer(accumulator, currentValue, currentIndex) {
        return currentIndex < currentNationId.length - 1 ? accumulator + parseFloat(currentValue) * (13 - currentIndex) : accumulator;
      };

      var sum = Array.from(currentNationId).reduce(reducer, 0);
      var ok = (11 - sum % 11) % 10 === parseFloat(currentNationId.charAt(12));

      if (ok) {
        status = true;
        currentGood = currentNationId;
      } else {
        badNationid.push(currentNationId);
      }
    };

    while (status === false) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }

    status = false;
    goodNationid.push(currentGood);
  }
};

 // console.log('counter random ', badNationid.length, ' times')
// console.log('You can use \n', goodNationid)

/***/ })

})
//# sourceMappingURL=index.js.50991a972807c3360220.hot-update.js.map