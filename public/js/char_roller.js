/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/char_roller.js":
/*!*************************************!*\
  !*** ./resources/js/char_roller.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var planeMachine = document.querySelector('#planeMachine');
$(document).ready(function () {
  var race = new EZSlots("elementid", {
    reelCount: 1,
    symbols: ['Aarakocra', 'Aasimar', 'Aasimar (Fallen)', 'Aasimar (Protector)', 'Aasimar (Scourge)', 'Bugbear', 'Centaur', 'Dragonborn', 'Dwarf (Duergar)', 'Dwarf (Hill)', 'Dwarf (Mountain)', 'Elf (Drow)', 'Elf (Eladrin)', 'Elf (Eladrin)', 'Elf (High)', 'Elf (Sea)', 'Elf (Shadar-kai)', 'Elf (Wood)', 'Firbolg', 'Genasi (Air)', 'Genasi (Earth)', 'Genasi (Fire)', 'Genasi (Water)', 'Gith (Githyanki)', 'Gith (Githzerai)', 'Gnome (Deep)', 'Gnome (Deep/Svirfneblin)', 'Gnome (Forest)', 'Gnome (Rock)', 'Goblin', 'Goblin', 'Goliath', 'Half-Elf', 'Half-Elf (Aquatic Elf Descent)', 'Half-Elf (Drow Descent)', 'Half-Elf (Moon Elf Sun Elf Descent)', 'Half-Elf (Wood Elf Descent)', 'Half-Orc', 'Halfling (Ghostwise)', 'Halfling (Lightfoot)', 'Halfling (Stout)', 'Hobgoblin', 'Human (Variant)', 'Kenku', 'Kobold', 'Lizardfolk', 'Loxodon', 'Minotaur', 'Orc', 'Simic Hybrid', 'Tabaxi', 'Tiefling', 'Tiefling (Asmodeus)', 'Tiefling (Baalzebul)', 'Tiefling (Dispater)', 'Tiefling (Fierna)', 'Tiefling (Glasya)', 'Tiefling (Levistus)', 'Tiefling (Mammon)', 'Tiefling (Mephistopheles)', 'Tiefling (Variant)', 'Tiefling (Zariel)', 'Tortle', 'Triton', 'Vedalken', 'Yuan-ti Pureblood']
  });
  var dd_class = new EZSlots("elementid", {
    reelCount: 1,
    symbols: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
  });
  var background = new EZSlots("elementid", {
    reelCount: 1,
    symbols: ['Acolyte', 'Anthropologist', 'Archaeologist', 'Azius Functionary', 'Black Fist Double Agent', 'Bos Legionnaire', 'Caravan Specialist', 'Charlatan', 'City Watch', 'City Watch (Investigat)', 'Clan Crafter', 'Cloistered Scholar', 'Cmanth Refugee', 'Courtier', 'Criminal', 'Criminal (Spy)', 'Dimir Operative', 'Dragon Casualty', 'Earthspur Miner', 'Entertainer', 'Entertainer (Gladiat)', 'Faction Agent', 'Far Traveler', 'Folk Hero', 'Gate Urchin', 'Golgari Agent', 'Gruul Anarch', 'Guild Artisan', 'Guild Artisan (Guild Merchant)', 'Harbfolk', 'Haunted One', 'Hermit', 'Hillsfar Merchant', 'Hillsfar Smuggler', 'Inherit', 'Iron Route Bandit', 'Izzet Engineer', 'Knight of the Order', 'Mercenary Veteran', 'Mulmaster Aristocrat', 'Noble', 'Noble (Knight)', 'Orzhov Representative', 'Outlander', 'Phlan Insurgent', 'Phlan Refugee', 'Rakdos Cultist', 'Sage', 'Sail', 'Sail (Pirate)', 'Secret Identity', 'Selesnya Initiate', 'Shade Fanatic', 'Simic Scientist', 'Soldier', 'Stojanow Prisoner', 'Ticklebelly Nomad', 'Trade Sheriff', 'Urban Bounty Hunter', 'Urchin', 'Uthgardt Tribe Member', 'Waterdhavian Noble']
  });
  $("#spin").click(function () {
    console.log(race.spin());
    setTimeout(function () {
      console.log(dd_class.spin());
    }, 2000);
    setTimeout(function () {
      console.log(background.spin());
    }, 4000);
    setTimeout(function () {
      console.log(theme.spin());
    }, 6000);
  });
});
new SlotMachine(planeMachine, {
  active: 1,
  delay: 450,
  auto: 1500,
  randomize: function randomize() {
    return this.nextIndex;
  }
}); // Using jQuery

$('#planeMachine2').slotMachine({
  active: 1,
  delay: 450,
  auto: 1500,
  randomize: function randomize() {
    return this.nextIndex;
  }
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/char_roller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repos\roll_a_character\resources\js\char_roller.js */"./resources/js/char_roller.js");


/***/ })

/******/ });