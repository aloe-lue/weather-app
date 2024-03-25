/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/searchIcon.js":
/*!******************************!*\
  !*** ./src/js/searchIcon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_magnifying_glass_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/magnifying-glass-left.svg */ "./src/img/magnifying-glass-left.svg");


const searchIcon = (parent) => {
  const icon = new Image();
  icon.src = _img_magnifying_glass_left_svg__WEBPACK_IMPORTED_MODULE_0__;

  parent.appendChild(icon);

  return parent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchIcon);


/***/ }),

/***/ "./src/js/weatherInfo.js":
/*!*******************************!*\
  !*** ./src/js/weatherInfo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weatherAPI: () => (/* binding */ weatherAPI),
/* harmony export */   weatherInfo: () => (/* binding */ weatherInfo)
/* harmony export */ });
const weatherAPI = ({ location  }) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=53a730f3a4b74aefa2144040241703&q=${location}`;
  
  const getWeather = async () => {
    const resources = await fetch(url, { mode: 'cors' });
    const resolve = await resources.json();

    return resolve;
  }
  
  return { getWeather };
};

const weatherInfo = ({
    location, 
    weatherApi, 
  }, {
    locationNameStr,
    locationDateStr,
    tempCStr,
    conditionStr, 
    conditionImg,
    uvStr, 
    feelsLikeStr, 
    humidityStr, 
    windDirStr, 
    windKphStr, 
    pressureMbStr, 
    visKmStr
  }) => {
  const locationName = document.querySelector(locationNameStr);
  const locationDate = document.querySelector(locationDateStr);
  const tempC = document.querySelector(tempCStr);
  const conditionText = document.querySelector(conditionStr);
  const conditionImage = document.querySelector(conditionImg);

  const uvText = document.querySelector(uvStr);
  const feelsLikeText = document.querySelector(feelsLikeStr);
  const humidityText = document.querySelector(humidityStr);
  const windDirText = document.querySelector(windDirStr);
  const windKphText = document.querySelector(windKphStr);
  const pressureMbText = document.querySelector(pressureMbStr);
  const visKmText = document.querySelector(visKmStr);
 
  const getInfo = () => {
    const weatherInfoGetter = weatherApi({ location }).getWeather()
      .then((resolve) => {
        const current = resolve['current'];
        const locationInfo = resolve['location'];

        locationName.innerText = `${locationInfo.name}, ${locationInfo.country}`;
        tempC.innerText = `${current.temp_c} °C`;
        conditionText.innerText = `${current.condition.text}`; 
        conditionImage.setAttribute('src', `https:${current.condition.icon}`);
        locationDate.innerText = `Last Updated: ${current.last_updated}`;

        uvText.innerText = `${current.uv}`; 
        feelsLikeText.innerText = `${current.feelslike_c} °C`;
        humidityText.innerText = `${current.humidity}%`;
        windDirText.innerText = `${current.wind_dir}`;
        windKphText.innerText = `${current.wind_kph}`;
        pressureMbText.innerText = `${current.pressure_mb}`;
        visKmText.innerText = `${current.vis_km}`;
      })
      .catch((err) => err); 

    return weatherInfoGetter;
  };

  return { getInfo };
};

 
   


/***/ }),

/***/ "./src/img/magnifying-glass-left.svg":
/*!*******************************************!*\
  !*** ./src/img/magnifying-glass-left.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "555641a04ca30ba392fc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_searchIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/searchIcon */ "./src/js/searchIcon.js");
/* harmony import */ var _js_weatherInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/weatherInfo */ "./src/js/weatherInfo.js");




window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector(
    'input[id="search-weather-location"]',
  );

  const searchLocationInput = document.querySelector('input[id="search-weather-location"]');
  const searchBtn = document.querySelector('button[id="search-location"]');
  (0,_js_searchIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(searchBtn);

  (0,_js_weatherInfo__WEBPACK_IMPORTED_MODULE_2__.weatherInfo)({ location: 'london', weatherApi: _js_weatherInfo__WEBPACK_IMPORTED_MODULE_2__.weatherAPI }, {
    locationNameStr: "div[class='location-name-and-country']",
    locationDateStr: "div[class='location-date']",
    tempCStr: "div[class='temp-c']",
    conditionStr: "div[class='condition-text']",
    conditionImg: "img[class='condition-img']",
    uvStr: "div[class='uv']",
    feelsLikeStr: "div[class='feelslike-c']",
    humidityStr: "div[class='humidity']",
    windDirStr: "div[class='wind-dir']",
    windKphStr: "div[class='wind-kph']",
    pressureMbStr: "div[class='pressure-mb']",
    visKmStr: "div[class='vis-km']"
 }).getInfo();

  searchBtn.addEventListener('click', (e) => {
    if (searchLocationInput.value.length === 0) {
      searchLocationInput.reportValidity();
    } else {
      e.preventDefault();
      (0,_js_weatherInfo__WEBPACK_IMPORTED_MODULE_2__.weatherInfo)({ location: searchLocationInput.value , weatherApi: _js_weatherInfo__WEBPACK_IMPORTED_MODULE_2__.weatherAPI }, {
        locationNameStr: "div[class='location-name-and-country']",
        locationDateStr: "div[class='location-date']",
        tempCStr: "div[class='temp-c']",
        conditionStr: "div[class='condition-text']",
        conditionImg: "img[class='condition-img']",
        uvStr: "div[class='uv']",
        feelsLikeStr: "div[class='feelslike-c']",
        humidityStr: "div[class='humidity']",
        windDirStr: "div[class='wind-dir']",                                        
        windKphStr: "div[class='wind-kph']",
        pressureMbStr: "div[class='pressure-mb']",
        visKmStr: "div[class='vis-km']"
     }).getInfo();

    }
  });
 
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW1FOztBQUVuRTtBQUNBO0FBQ0EsYUFBYSwyREFBbUI7O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWDFCLHNCQUFzQixXQUFXO0FBQ2pDLGlHQUFpRyxTQUFTO0FBQzFHO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msa0JBQWtCLElBQUkscUJBQXFCO0FBQy9FLDZCQUE2QixnQkFBZ0I7QUFDN0MscUNBQXFDLHVCQUF1QjtBQUM1RCxvREFBb0QsdUJBQXVCO0FBQzNFLGtEQUFrRCxxQkFBcUI7O0FBRXZFLDhCQUE4QixXQUFXO0FBQ3pDLHFDQUFxQyxxQkFBcUI7QUFDMUQsb0NBQW9DLGlCQUFpQjtBQUNyRCxtQ0FBbUMsaUJBQWlCO0FBQ3BELG1DQUFtQyxpQkFBaUI7QUFDcEQsc0NBQXNDLG9CQUFvQjtBQUMxRCxpQ0FBaUMsZUFBZTtBQUNoRCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsQ0FBb0M7QUFDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCeUI7QUFDZ0I7QUFDbUI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDBEQUFVOztBQUVaLEVBQUUsNERBQVcsR0FBRyxnQ0FBZ0MsdURBQVUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU0sNERBQVcsR0FBRyxrREFBa0QsdURBQVUsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/NmI3YiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9zZWFyY2hJY29uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3dlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgTWFnbmlmeWluZ0dsYXNzTGVmdCBmcm9tICcuLi9pbWcvbWFnbmlmeWluZy1nbGFzcy1sZWZ0LnN2Zyc7XG5cbmNvbnN0IHNlYXJjaEljb24gPSAocGFyZW50KSA9PiB7XG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaWNvbi5zcmMgPSBNYWduaWZ5aW5nR2xhc3NMZWZ0O1xuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gcGFyZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoSWNvbjtcbiIsImNvbnN0IHdlYXRoZXJBUEkgPSAoeyBsb2NhdGlvbiAgfSkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01M2E3MzBmM2E0Yjc0YWVmYTIxNDQwNDAyNDE3MDMmcT0ke2xvY2F0aW9ufWA7XG4gIFxuICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgcmVzb2x2ZSA9IGF3YWl0IHJlc291cmNlcy5qc29uKCk7XG5cbiAgICByZXR1cm4gcmVzb2x2ZTtcbiAgfVxuICBcbiAgcmV0dXJuIHsgZ2V0V2VhdGhlciB9O1xufTtcblxuY29uc3Qgd2VhdGhlckluZm8gPSAoe1xuICAgIGxvY2F0aW9uLCBcbiAgICB3ZWF0aGVyQXBpLCBcbiAgfSwge1xuICAgIGxvY2F0aW9uTmFtZVN0cixcbiAgICBsb2NhdGlvbkRhdGVTdHIsXG4gICAgdGVtcENTdHIsXG4gICAgY29uZGl0aW9uU3RyLCBcbiAgICBjb25kaXRpb25JbWcsXG4gICAgdXZTdHIsIFxuICAgIGZlZWxzTGlrZVN0ciwgXG4gICAgaHVtaWRpdHlTdHIsIFxuICAgIHdpbmREaXJTdHIsIFxuICAgIHdpbmRLcGhTdHIsIFxuICAgIHByZXNzdXJlTWJTdHIsIFxuICAgIHZpc0ttU3RyXG4gIH0pID0+IHtcbiAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihsb2NhdGlvbk5hbWVTdHIpO1xuICBjb25zdCBsb2NhdGlvbkRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvY2F0aW9uRGF0ZVN0cik7XG4gIGNvbnN0IHRlbXBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZW1wQ1N0cik7XG4gIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmRpdGlvblN0cik7XG4gIGNvbnN0IGNvbmRpdGlvbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25kaXRpb25JbWcpO1xuXG4gIGNvbnN0IHV2VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXZTdHIpO1xuICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmZWVsc0xpa2VTdHIpO1xuICBjb25zdCBodW1pZGl0eVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGh1bWlkaXR5U3RyKTtcbiAgY29uc3Qgd2luZERpclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdpbmREaXJTdHIpO1xuICBjb25zdCB3aW5kS3BoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iod2luZEtwaFN0cik7XG4gIGNvbnN0IHByZXNzdXJlTWJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwcmVzc3VyZU1iU3RyKTtcbiAgY29uc3QgdmlzS21UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2aXNLbVN0cik7XG4gXG4gIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckluZm9HZXR0ZXIgPSB3ZWF0aGVyQXBpKHsgbG9jYXRpb24gfSkuZ2V0V2VhdGhlcigpXG4gICAgICAudGhlbigocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gcmVzb2x2ZVsnY3VycmVudCddO1xuICAgICAgICBjb25zdCBsb2NhdGlvbkluZm8gPSByZXNvbHZlWydsb2NhdGlvbiddO1xuXG4gICAgICAgIGxvY2F0aW9uTmFtZS5pbm5lclRleHQgPSBgJHtsb2NhdGlvbkluZm8ubmFtZX0sICR7bG9jYXRpb25JbmZvLmNvdW50cnl9YDtcbiAgICAgICAgdGVtcEMuaW5uZXJUZXh0ID0gYCR7Y3VycmVudC50ZW1wX2N9IMKwQ2A7XG4gICAgICAgIGNvbmRpdGlvblRleHQuaW5uZXJUZXh0ID0gYCR7Y3VycmVudC5jb25kaXRpb24udGV4dH1gOyBcbiAgICAgICAgY29uZGl0aW9uSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cHM6JHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWApO1xuICAgICAgICBsb2NhdGlvbkRhdGUuaW5uZXJUZXh0ID0gYExhc3QgVXBkYXRlZDogJHtjdXJyZW50Lmxhc3RfdXBkYXRlZH1gO1xuXG4gICAgICAgIHV2VGV4dC5pbm5lclRleHQgPSBgJHtjdXJyZW50LnV2fWA7IFxuICAgICAgICBmZWVsc0xpa2VUZXh0LmlubmVyVGV4dCA9IGAke2N1cnJlbnQuZmVlbHNsaWtlX2N9IMKwQ2A7XG4gICAgICAgIGh1bWlkaXR5VGV4dC5pbm5lclRleHQgPSBgJHtjdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICB3aW5kRGlyVGV4dC5pbm5lclRleHQgPSBgJHtjdXJyZW50LndpbmRfZGlyfWA7XG4gICAgICAgIHdpbmRLcGhUZXh0LmlubmVyVGV4dCA9IGAke2N1cnJlbnQud2luZF9rcGh9YDtcbiAgICAgICAgcHJlc3N1cmVNYlRleHQuaW5uZXJUZXh0ID0gYCR7Y3VycmVudC5wcmVzc3VyZV9tYn1gO1xuICAgICAgICB2aXNLbVRleHQuaW5uZXJUZXh0ID0gYCR7Y3VycmVudC52aXNfa219YDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gZXJyKTsgXG5cbiAgICByZXR1cm4gd2VhdGhlckluZm9HZXR0ZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0SW5mbyB9O1xufTtcblxuIGV4cG9ydCB7IHdlYXRoZXJBUEksIHdlYXRoZXJJbmZvIH07XG4gICBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2pzL3NlYXJjaEljb24nO1xuaW1wb3J0IHsgd2VhdGhlckluZm8sIHdlYXRoZXJBUEksIH0gZnJvbSAnLi9qcy93ZWF0aGVySW5mbyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJ2lucHV0W2lkPVwic2VhcmNoLXdlYXRoZXItbG9jYXRpb25cIl0nLFxuICApO1xuXG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInNlYXJjaC13ZWF0aGVyLWxvY2F0aW9uXCJdJyk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cInNlYXJjaC1sb2NhdGlvblwiXScpO1xuICBzZWFyY2hJY29uKHNlYXJjaEJ0bik7XG5cbiAgd2VhdGhlckluZm8oeyBsb2NhdGlvbjogJ2xvbmRvbicsIHdlYXRoZXJBcGk6IHdlYXRoZXJBUEkgfSwge1xuICAgIGxvY2F0aW9uTmFtZVN0cjogXCJkaXZbY2xhc3M9J2xvY2F0aW9uLW5hbWUtYW5kLWNvdW50cnknXVwiLFxuICAgIGxvY2F0aW9uRGF0ZVN0cjogXCJkaXZbY2xhc3M9J2xvY2F0aW9uLWRhdGUnXVwiLFxuICAgIHRlbXBDU3RyOiBcImRpdltjbGFzcz0ndGVtcC1jJ11cIixcbiAgICBjb25kaXRpb25TdHI6IFwiZGl2W2NsYXNzPSdjb25kaXRpb24tdGV4dCddXCIsXG4gICAgY29uZGl0aW9uSW1nOiBcImltZ1tjbGFzcz0nY29uZGl0aW9uLWltZyddXCIsXG4gICAgdXZTdHI6IFwiZGl2W2NsYXNzPSd1diddXCIsXG4gICAgZmVlbHNMaWtlU3RyOiBcImRpdltjbGFzcz0nZmVlbHNsaWtlLWMnXVwiLFxuICAgIGh1bWlkaXR5U3RyOiBcImRpdltjbGFzcz0naHVtaWRpdHknXVwiLFxuICAgIHdpbmREaXJTdHI6IFwiZGl2W2NsYXNzPSd3aW5kLWRpciddXCIsXG4gICAgd2luZEtwaFN0cjogXCJkaXZbY2xhc3M9J3dpbmQta3BoJ11cIixcbiAgICBwcmVzc3VyZU1iU3RyOiBcImRpdltjbGFzcz0ncHJlc3N1cmUtbWInXVwiLFxuICAgIHZpc0ttU3RyOiBcImRpdltjbGFzcz0ndmlzLWttJ11cIlxuIH0pLmdldEluZm8oKTtcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChzZWFyY2hMb2NhdGlvbklucHV0LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VhcmNoTG9jYXRpb25JbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3ZWF0aGVySW5mbyh7IGxvY2F0aW9uOiBzZWFyY2hMb2NhdGlvbklucHV0LnZhbHVlICwgd2VhdGhlckFwaTogd2VhdGhlckFQSSB9LCB7XG4gICAgICAgIGxvY2F0aW9uTmFtZVN0cjogXCJkaXZbY2xhc3M9J2xvY2F0aW9uLW5hbWUtYW5kLWNvdW50cnknXVwiLFxuICAgICAgICBsb2NhdGlvbkRhdGVTdHI6IFwiZGl2W2NsYXNzPSdsb2NhdGlvbi1kYXRlJ11cIixcbiAgICAgICAgdGVtcENTdHI6IFwiZGl2W2NsYXNzPSd0ZW1wLWMnXVwiLFxuICAgICAgICBjb25kaXRpb25TdHI6IFwiZGl2W2NsYXNzPSdjb25kaXRpb24tdGV4dCddXCIsXG4gICAgICAgIGNvbmRpdGlvbkltZzogXCJpbWdbY2xhc3M9J2NvbmRpdGlvbi1pbWcnXVwiLFxuICAgICAgICB1dlN0cjogXCJkaXZbY2xhc3M9J3V2J11cIixcbiAgICAgICAgZmVlbHNMaWtlU3RyOiBcImRpdltjbGFzcz0nZmVlbHNsaWtlLWMnXVwiLFxuICAgICAgICBodW1pZGl0eVN0cjogXCJkaXZbY2xhc3M9J2h1bWlkaXR5J11cIixcbiAgICAgICAgd2luZERpclN0cjogXCJkaXZbY2xhc3M9J3dpbmQtZGlyJ11cIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHdpbmRLcGhTdHI6IFwiZGl2W2NsYXNzPSd3aW5kLWtwaCddXCIsXG4gICAgICAgIHByZXNzdXJlTWJTdHI6IFwiZGl2W2NsYXNzPSdwcmVzc3VyZS1tYiddXCIsXG4gICAgICAgIHZpc0ttU3RyOiBcImRpdltjbGFzcz0ndmlzLWttJ11cIlxuICAgICB9KS5nZXRJbmZvKCk7XG5cbiAgICB9XG4gIH0pO1xuIFxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=