(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://bit-ml.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components-breakpoint");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//


var siteTitle = 'https://bit-ml.github.io';
var siteTwitter = '@Bitdefender';

exports.default = function (_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      tagline = _ref.tagline,
      image = _ref.image,
      path = _ref.path,
      tags = _ref.tags;
  return _react2.default.createElement(
    _reactStatic.Head,
    null,
    children,
    path && _react2.default.createElement('link', { rel: 'canonical', href: path }),
    title && _react2.default.createElement(
      'title',
      null,
      title
    ),
    description && _react2.default.createElement('meta', { name: 'description', content: description }),
    tags && _react2.default.createElement('meta', { name: 'keywords', content: tags.join(',') }),
    title && _react2.default.createElement('meta', { property: 'og:title', content: title }),
    description && _react2.default.createElement('meta', { property: 'og:description', content: description }),
    siteTitle && _react2.default.createElement('meta', { property: 'og:site_name', content: siteTitle }),
    tags && tags.slice(0, 6).map(function (tag) {
      return _react2.default.createElement('meta', { key: tag, property: 'article:tag', content: tag });
    }),
    image && _react2.default.createElement('meta', { property: 'og:image', content: '' + siteTitle + image }),
    _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
    siteTwitter && _react2.default.createElement('meta', { name: 'twitter:site', content: siteTwitter }),
    title && _react2.default.createElement('meta', { name: 'twitter:title', content: title }),
    description && _react2.default.createElement('meta', { name: 'twitter:description', content: description }),
    image && _react2.default.createElement('meta', { name: 'twitter:image', content: '' + siteTitle + image }),
    description && _react2.default.createElement('meta', { itemProp: 'description', content: description }),
    tags && _react2.default.createElement('meta', { itemProp: 'keywords', content: tags.join(',') }),
    image && _react2.default.createElement('meta', { itemProp: 'image', content: '' + siteTitle + image })
  );
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0 5rem;\n    justify-content: flex-end;\n    a {\n      padding: 0.5rem 1rem 0.25rem 1rem;\n    }\n  '], ['\n    padding: 0 5rem;\n    justify-content: flex-end;\n    a {\n      padding: 0.5rem 1rem 0.25rem 1rem;\n    }\n  ']);

var _reactStatic = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents2.default.nav.withConfig({
  displayName: 'Navigation__Nav',
  componentId: 'qabwmo-0'
})(['width:100%;background:', ';padding:0 1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;display:flex;justify-content:space-between;a{padding:0.5rem 0 0.25rem 0;font-style:normal;font-weight:500;line-height:23px;font-size:14px;text-align:right;text-transform:uppercase;color:', ';}a:last-child{padding:0.5rem;padding-right:0;}', ''], function (props) {
  return props.bgColor;
}, function (props) {
  return props.fontColor;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject));

exports.default = function (_ref) {
  var pageName = _ref.pageName;

  var bgColor = pageName === 'home' ? '#020100' : 'transparent';
  var fontColor = pageName === 'home' ? '#A8A8A8' : '#333';

  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      Nav,
      { bgColor: bgColor, fontColor: fontColor },
      _react2.default.createElement(
        _reactStatic.Link,
        { exact: true, to: '/' },
        'Home'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/#research' },
        'Research'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/#teams' },
        'Team'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/teaching/lectures-and-courses' },
        'Teaching'
      )
    )
  );
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      padding: 10rem 10rem;\n    }\n  '], ['\n    padding: 10rem 5rem;\n\n    @media screen and (orientation:portrait) {\n      padding: 10rem 10rem;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 10rem 5rem;\n  '], ['\n    padding: 10rem 5rem;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = __webpack_require__(4);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _Head = __webpack_require__(5);

var _Head2 = _interopRequireDefault(_Head);

var _Navigation = __webpack_require__(6);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Page = __webpack_require__(11);

var _Page2 = _interopRequireDefault(_Page);

var _Hero = __webpack_require__(31);

var _Hero2 = _interopRequireDefault(_Hero);

var _Specialty = __webpack_require__(35);

var _Specialty2 = _interopRequireDefault(_Specialty);

var _Project = __webpack_require__(36);

var _Project2 = _interopRequireDefault(_Project);

var _Bio = __webpack_require__(37);

var _Bio2 = _interopRequireDefault(_Bio);

var _PeopleGrid = __webpack_require__(38);

var _PeopleGrid2 = _interopRequireDefault(_PeopleGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//

// import logoImg from '../logo.png'


var SpecialtyContainer = _styledComponents2.default.div.withConfig({
  displayName: 'Home__SpecialtyContainer',
  componentId: 'sc-1ffwrsf-0'
})(['']);

var TeamsContainer = _styledComponents2.default.div.withConfig({
  displayName: 'Home__TeamsContainer',
  componentId: 'sc-1ffwrsf-1'
})(['background:#F5F2F2;padding:6rem 1rem;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject2));

var TeamHeading = _styledComponents2.default.h3.withConfig({
  displayName: 'Home__TeamHeading',
  componentId: 'sc-1ffwrsf-2'
})(['', ' ', ' letter-spacing:0.03em;text-transform:uppercase;'], _styledSystem.typography, _styledSystem.color);
TeamHeading.defaultProps = {
  mt: 2,
  mb: 1,
  p: 0
};

var SubTeamHeading = _styledComponents2.default.h5.withConfig({
  displayName: 'Home__SubTeamHeading',
  componentId: 'sc-1ffwrsf-3'
})(['', ' ', ' letter-spacing:0.03em;text-transform:uppercase;'], _styledSystem.typography, _styledSystem.color);
SubTeamHeading.defaultProps = {
  mt: 2,
  mb: 1,
  p: 0,
  color: 'midContrast'
};

exports.default = (0, _reactStatic.withRouteData)((0, _reactStatic.withSiteData)(function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Head2.default, {
      title: props.title + ' | ' + props.tagline,
      description: props.description,
      tagline: props.tagline,
      tags: props.tags,
      image: 'https://bit-ml.github.io/tile.png' }),
    _react2.default.createElement(_Navigation2.default, { pageName: 'home' }),
    _react2.default.createElement(
      _Page2.default,
      null,
      _react2.default.createElement(_Hero2.default, { props: props }),
      _react2.default.createElement(
        SpecialtyContainer,
        { id: 'research' },
        props.specialties.map(function (specialty, i) {
          return _react2.default.createElement(
            _Specialty2.default,
            { props: specialty, key: i, bgIdx: i },
            specialty.projects.map(_Project2.default)
          );
        })
      ),
      _react2.default.createElement(
        TeamsContainer,
        { id: 'teams' },
        props.teams.map(function (team) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              TeamHeading,
              null,
              team.direction
            ),
            Object.entries(team.subteams).map(function (_ref, i) {
              var _ref2 = _slicedToArray(_ref, 2),
                  subteamName = _ref2[0],
                  people = _ref2[1];

              return _react2.default.createElement(
                'div',
                { key: i },
                _react2.default.createElement(
                  SubTeamHeading,
                  null,
                  subteamName
                ),
                _react2.default.createElement(
                  _PeopleGrid2.default,
                  { id: subteamName },
                  people.map(_Bio2.default)
                )
              );
            })
          );
        })
      )
    )
  );
}));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'main',
    null,
    children
  );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding-left: 0 0 0 100px;\n  '], ['\n    padding-left: 0 0 0 100px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _Head = __webpack_require__(5);

var _Head2 = _interopRequireDefault(_Head);

var _Navigation = __webpack_require__(6);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Page = __webpack_require__(11);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//


var BlogWrapper = _styledComponents2.default.section.withConfig({
  displayName: 'Blog__BlogWrapper',
  componentId: 'sc-1owziq9-0'
})(['margin:0 auto;max-width:720px;padding:0 1rem;', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject));

var Heading = _styledComponents2.default.h1.withConfig({
  displayName: 'Blog__Heading',
  componentId: 'sc-1owziq9-1'
})(['font-family:\'Exo 2\',sans-serif;margin:4rem 0;font-style:normal;font-weight:700;line-height:3rem;font-size:2.2rem;letter-spacing:0.03em;color:#333333;']);

var BlogList = _styledComponents2.default.ul.withConfig({
  displayName: 'Blog__BlogList',
  componentId: 'sc-1owziq9-2'
})(['padding-left:0;&>li{font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:500;font-size:1.2rem;letter-spacing:0.03em;list-style:none;margin-bottom:1rem;&> a{color:#333;&:hover{color:#E6212B;}}}']);

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Head2.default, {
      title: 'Latest Blog Posts | Bitdefender Research',
      description: 'List of all the recent blog posts by Bitdefender\'s Machine Learning & Crypto Research Unit.',
      tags: ['machine-learning', 'research', 'bitdefender', 'posts'],
      image: 'https://bit-ml.github.io/tile.png' }),
    _react2.default.createElement(_Navigation2.default, { pageName: 'blog' }),
    _react2.default.createElement(
      _Page2.default,
      null,
      _react2.default.createElement(
        BlogWrapper,
        null,
        _react2.default.createElement(
          Heading,
          null,
          'Recent Posts'
        ),
        _react2.default.createElement(
          BlogList,
          null,
          posts.map(function (post, id) {
            return _react2.default.createElement(
              'li',
              { key: id },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/blog/post/' + post.data.slug + '/' },
                post.data.title
              )
            );
          })
        )
      )
    )
  );
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: space-between;\n\n    nav {\n      padding: 0;\n    }\n  '], ['\n    display: flex;\n    justify-content: space-between;\n\n    nav {\n      padding: 0;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: space-between;\n  '], ['\n    display: flex;\n    justify-content: space-between;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    max-width: 62%;\n    padding: 0 2rem;\n  '], ['\n    max-width: 62%;\n    padding: 0 2rem;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    max-width: 62%;\n    padding: 0 5rem;\n  '], ['\n    max-width: 62%;\n    padding: 0 5rem;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      font-size: ', ';\n      line-height: ', ';\n      > span {\n        font-size: ', ';\n      }\n    '], ['\n      font-size: ', ';\n      line-height: ', ';\n      > span {\n        font-size: ', ';\n      }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      font-size: ', ';\n      line-height: ', ';\n    '], ['\n      font-size: ', ';\n      line-height: ', ';\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      font-size: ', ';\n    '], ['\n      font-size: ', ';\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n      width: 920px;\n      margin-left: -100px;\n    '], ['\n      width: 920px;\n      margin-left: -100px;\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    padding-left: 0 0 0 100px;\n  '], ['\n    padding-left: 0 0 0 100px;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    background: #fff url(', ') no-repeat bottom;\n    background-size: cover;\n    position: sticky;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 38%;\n  '], ['\n    background: #fff url(', ') no-repeat bottom;\n    background-size: cover;\n    position: sticky;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 38%;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _htmr = __webpack_require__(14);

var _htmr2 = _interopRequireDefault(_htmr);

var _striptags = __webpack_require__(15);

var _striptags2 = _interopRequireDefault(_striptags);

var _Head = __webpack_require__(5);

var _Head2 = _interopRequireDefault(_Head);

var _Navigation = __webpack_require__(6);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _LightboxGallery = __webpack_require__(16);

var _LightboxGallery2 = _interopRequireDefault(_LightboxGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var PageWithCoverImg = _styledComponents2.default.div.withConfig({
  displayName: 'Post__PageWithCoverImg',
  componentId: 'oyq0rs-0'
})(['', ' ', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject), (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject2));

var Post = _styledComponents2.default.div.withConfig({
  displayName: 'Post',
  componentId: 'oyq0rs-1'
})(['margin:0 auto;padding:0 1rem;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject3), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject4));

var PostContent = _styledComponents2.default.section.withConfig({
  displayName: 'Post__PostContent',
  componentId: 'oyq0rs-2'
})(['margin:0 auto;max-width:720px;> h1{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';> span{display:block;font-size:', ';line-height:', ';}', '}> h2{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';', '}> h3{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';', '}> h4{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';', '}> h5{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';}p{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:0;font-style:normal;letter-spacing:0.03em;color:', ';> strong{font-weight:', ';}}>table{font-family:', ';font-size:', ';font-weight:', ';> strong{font-weight:', ';}margin-bottom:', ';}div.wide-content+table{', '}a{text-decoration:underline;color:', ';&:hover{color:', ';}}ul,ol{margin-top:', ';margin-bottom:', ';font-weight:', ';line-height:', ';> li ul{margin-bottom:', ';}}> img,> p img{margin:0 auto;display:block;}> blockquote{font-size:1.1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:italic;font-weight:300;line-height:1.8rem;letter-spacing:0.03em;text-align:right;margin-right:0;padding:24px;quotes:"\\201E""\\201C";&:before{display:inline-block;transform:translate(-15px,-15px);content:open-quote;color:#edebeb;font-size:5rem;font-weight:400;}> footer{margin-top:10px;font-style:normal;font-weight:400;}}> details summary{cursor:pointer;}'], function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[7];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.mobileTitle;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.lineHeights.mobileTitle;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject5, function (props) {
  return props.theme.fontSizes[8];
}, function (props) {
  return props.theme.lineHeights.title;
}, function (props) {
  return props.theme.fontSizes[5];
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[6];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.mobileTitle;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject6, function (props) {
  return props.theme.fontSizes[7];
}, function (props) {
  return props.theme.lineHeights.title;
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[5];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.copy;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject7, function (props) {
  return props.theme.fontSizes[6];
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.copy;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject7, function (props) {
  return props.theme.fontSizes[5];
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.copy;
}, function (props) {
  return props.theme.fonts.body;
}, function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.theme.fontWeights.bodyNormal;
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.colors.highContrast;
}, function (props) {
  return props.theme.fontWeights.bodyBold;
}, function (props) {
  return props.theme.fonts.body;
}, function (props) {
  return props.theme.fontSizes[1];
}, function (props) {
  return props.theme.fontWeights.bodyNormal;
}, function (props) {
  return props.theme.fontWeights.bodyBold;
}, function (props) {
  return props.theme.space[1];
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject8), function (props) {
  return props.theme.colors.highContrast;
}, function (props) {
  return props.theme.colors.brandRed;
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.fontWeights.bodyNormal;
}, function (props) {
  return props.theme.lineHeights.copy;
}, function (props) {
  return props.theme.space[0];
});

var PostWithGalleryWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Post__PostWithGalleryWrapper',
  componentId: 'oyq0rs-3'
})(['']);

var Author = _styledComponents2.default.p.withConfig({
  displayName: 'Post__Author',
  componentId: 'oyq0rs-4'
})(['']);

var PostHeader = _styledComponents2.default.div.withConfig({
  displayName: 'Post__PostHeader',
  componentId: 'oyq0rs-5'
})(['display:flex;font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.8rem;letter-spacing:0.03em;']);

var BackLink = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Post__BackLink',
  componentId: 'oyq0rs-6'
})(['flex-grow:1;color:#828282;&:hover{color:#e6212b;}']);

var Date = _styledComponents2.default.small.withConfig({
  displayName: 'Post__Date',
  componentId: 'oyq0rs-7'
})(['flex-grow:1;font-size:1rem;text-align:right;color:#828282;']);

var PostFooter = _styledComponents2.default.div.withConfig({
  displayName: 'Post__PostFooter',
  componentId: 'oyq0rs-8'
})(['display:inline-block;background:#edebeb;width:100%;']);

var PostFooterWraper = _styledComponents2.default.div.withConfig({
  displayName: 'Post__PostFooterWraper',
  componentId: 'oyq0rs-9'
})(['display:flex;max-width:720px;padding:0 1rem;margin:0 auto;& > p{flex-grow:1;color:#828282;}', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject9));

var CoverImg = _styledComponents2.default.div.withConfig({
  displayName: 'Post__CoverImg',
  componentId: 'oyq0rs-10'
})(['', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject10, function (props) {
  return props.featured_img;
}), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject10, function (props) {
  return props.featured_img;
}));

function SimplePost(_ref) {
  var post = _ref.post;

  var date = post.data.date.replace('-', ' ').replace('-', ', ');
  return _react2.default.createElement(
    PostContent,
    null,
    _react2.default.createElement(
      PostHeader,
      null,
      _react2.default.createElement(
        BackLink,
        { to: '/' },
        '<',
        ' Back Home'
      ),
      _react2.default.createElement(
        Date,
        null,
        'published on ',
        date
      )
    ),
    (0, _htmr2.default)(post.contents)
  );
}

var Footer = function Footer(_ref2) {
  var post = _ref2.post;
  return _react2.default.createElement(
    PostFooter,
    null,
    _react2.default.createElement(
      PostFooterWraper,
      null,
      post.data.authors && _react2.default.createElement(
        Author,
        null,
        'written by ',
        post.data.authors
      )
    )
  );
};

function PostWithGallery(_ref3) {
  var post = _ref3.post,
      galleries = _ref3.galleries;

  var gallery_names = post.data.galleries.replace(/ /g, '').split(',');
  var names_columns = gallery_names.map(function (x) {
    return x.split(':');
  });
  gallery_names = names_columns.map(function (x) {
    return x[0];
  });
  var columns = names_columns.map(function (x) {
    return Number.parseInt(x[1], 10);
  });

  return _react2.default.createElement(
    PostWithGalleryWrapper,
    null,
    _react2.default.createElement(SimplePost, { post: post }),
    gallery_names.map(function (key, index) {
      return _react2.default.createElement(_LightboxGallery2.default, {
        key: index,
        photo_set: galleries[key],
        columns: columns[index]
      });
    })
  );
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref4) {
  var post = _ref4.post,
      galleries = _ref4.galleries;

  var hasGallery = Object.hasOwnProperty.call(post.data, 'galleries');
  var keywords = post.data.categories.replace(/ /g, '').split(',');
  var synopsis = (0, _striptags2.default)(post.contents).substring(0, 350).replace(/\n/g, '');

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Head2.default, {
      title: post.data.title + ' | Bitdefender Research',
      description: synopsis + '...',
      tags: keywords,
      image: post.data.featured_img
    }),
    _react2.default.createElement(
      PageWithCoverImg,
      null,
      _react2.default.createElement(CoverImg, { featured_img: post.data.featured_img }),
      _react2.default.createElement(
        Post,
        null,
        _react2.default.createElement(_Navigation2.default, { pageName: 'post' }),
        hasGallery ? _react2.default.createElement(PostWithGallery, { post: post, galleries: galleries }) : _react2.default.createElement(SimplePost, { post: post }),
        _react2.default.createElement(Footer, { post: post })
      )
    )
  );
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("htmr");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("striptags");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPhotoGallery = __webpack_require__(39);

var _reactPhotoGallery2 = _interopRequireDefault(_reactPhotoGallery);

var _reactImages = __webpack_require__(40);

var _reactImages2 = _interopRequireDefault(_reactImages);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LightboxGalleryWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'LightboxGallery__LightboxGalleryWrapper',
  componentId: 'i6rccf-0'
})(['background-color:', ';padding:1rem;margin:1rem 0;'], function (props) {
  return props.theme.colors.tintedBackground;
});

var LightboxGallery = function (_React$Component) {
  _inherits(LightboxGallery, _React$Component);

  function LightboxGallery() {
    _classCallCheck(this, LightboxGallery);

    var _this = _possibleConstructorReturn(this, (LightboxGallery.__proto__ || Object.getPrototypeOf(LightboxGallery)).call(this));

    _this.state = { currentImage: 0 };
    _this.closeLightbox = _this.closeLightbox.bind(_this);
    _this.openLightbox = _this.openLightbox.bind(_this);
    _this.gotoNext = _this.gotoNext.bind(_this);
    _this.gotoPrevious = _this.gotoPrevious.bind(_this);
    return _this;
  }

  _createClass(LightboxGallery, [{
    key: 'openLightbox',
    value: function openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'gotoPrevious',
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactPhotoGallery2.default, {
          photos: this.props.photos,
          columns: this.props.columns,
          onClick: this.openLightbox }),
        _react2.default.createElement(_reactImages2.default, {
          theme: this.props.theme,
          images: this.props.photos.map(function (x) {
            return _extends({}, x, { srcset: x.srcSet, caption: x.title });
          }),
          backdropClosesModal: true,
          onClose: this.closeLightbox,
          onClickPrev: this.gotoPrevious,
          onClickNext: this.gotoNext,
          currentImage: this.state.currentImage,
          isOpen: this.state.lightboxIsOpen,
          width: 1600
        })
      );
    }
  }]);

  return LightboxGallery;
}(_react2.default.Component);

var theme = {
  // container
  container: {
    background: 'rgba(255, 255, 255, 0.9)'
  },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1
    }
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15
    }
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1
    }
  },

  // footer
  footer: {
    color: 'black'
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)'
  },

  // thumbnails
  thumbnail: {},
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF'
  }
};

exports.default = function (_ref) {
  var photo_set = _ref.photo_set,
      columns = _ref.columns;
  return _react2.default.createElement(
    LightboxGalleryWrapper,
    null,
    _react2.default.createElement(LightboxGallery, { photos: photo_set, columns: columns, theme: theme })
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: space-between;\n\n    nav {\n      padding: 0;\n    }\n  '], ['\n    display: flex;\n    justify-content: space-between;\n\n    nav {\n      padding: 0;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: space-between;\n  '], ['\n    display: flex;\n    justify-content: space-between;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    max-width: 62%;\n    padding: 0 2rem;\n  '], ['\n    max-width: 62%;\n    padding: 0 2rem;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    max-width: 62%;\n    padding: 0 5rem;\n  '], ['\n    max-width: 62%;\n    padding: 0 5rem;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      font-size: ', ';\n      line-height: ', ';\n      > span {\n        font-size: ', ';\n      }\n    '], ['\n      font-size: ', ';\n      line-height: ', ';\n      > span {\n        font-size: ', ';\n      }\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      font-size: ', ';\n      line-height: ', ';\n    '], ['\n      font-size: ', ';\n      line-height: ', ';\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      font-size: ', ';\n    '], ['\n      font-size: ', ';\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n      justify-content: flex-end;\n    '], ['\n      justify-content: flex-end;\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n      width: 100px;\n      height: 100px;\n    '], ['\n      width: 100px;\n      height: 100px;\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n      width: calc(100% - (100px + 1rem));\n    '], ['\n      width: calc(100% - (100px + 1rem));\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    padding-left: 0 0 0 100px;\n  '], ['\n    padding-left: 0 0 0 100px;\n  ']),
    _templateObject12 = _taggedTemplateLiteral(['\n    background: #fff url(', ') no-repeat bottom;\n    background-size: cover;\n    position: sticky;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 38%;\n  '], ['\n    background: #fff url(', ') no-repeat bottom;\n    background-size: cover;\n    position: sticky;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 38%;\n  ']);

var _styledSystem = __webpack_require__(4);

var _Head = __webpack_require__(5);

var _Head2 = _interopRequireDefault(_Head);

var _LightboxGallery = __webpack_require__(16);

var _LightboxGallery2 = _interopRequireDefault(_LightboxGallery);

var _Navigation = __webpack_require__(6);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _htmr = __webpack_require__(14);

var _htmr2 = _interopRequireDefault(_htmr);

var _striptags = __webpack_require__(15);

var _striptags2 = _interopRequireDefault(_striptags);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var PageWithCoverImg = _styledComponents2.default.div.withConfig({
  displayName: 'Page__PageWithCoverImg',
  componentId: 'sc-16gl3c1-0'
})(['background-color:', ';', ' ', ';'], function (props) {
  return props.theme.colors.background;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject), (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject2));

var Post = _styledComponents2.default.div.withConfig({
  displayName: 'Page__Post',
  componentId: 'sc-16gl3c1-1'
})(['margin:0 auto;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject3), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject4));

var PostContent = _styledComponents2.default.section.withConfig({
  displayName: 'Page__PostContent',
  componentId: 'sc-16gl3c1-2'
})(['margin:0 auto;padding:0 1rem;max-width:720px;> h1{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';> span{display:block;font-size:', ';line-height:', ';}', '}> h2{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';', '}> h3{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';', '}> h4{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';', '}> h5{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:', ';line-height:', ';}p{font-family:', ';font-size:', ';font-weight:', ';margin-top:', ';margin-bottom:', ';padding:0;font-style:normal;letter-spacing:0.03em;color:', ';> strong{font-weight:', ';}}a{text-decoration:underline;color:', ';&:hover{color:', ';}}ul,ol{margin-top:', ';margin-bottom:', ';font-weight:', ';line-height:', ';> li ul{margin-bottom:', ';}}> img,> p img{margin:0 auto;display:block;}.title--separator{text-align:right;border-bottom:1px solid ', ';}> hr{border:0;border-top:1px solid ', ';}.mo{margin:0;&:hover{background-color:', ';}padding:5px;}.mo__link{display:flex;align-items:flex-start;flex-direction:row;padding:0;color:', ';&:hover{color:', ';}flex-wrap:wrap;text-decoration:none;', '}.mo__img{flex-basis:auto;margin:0 1rem 0 0;border-radius:50%;width:64px;height:64px;', '}.mo__header{flex-grow:1;flex-basis:100px;}.mo__title{font-weight:500;font-size:', ';margin:', ';line-height:', ';', '}.mo__body{font-size:', ';font-weight:', ';line-height:', ';flex-grow:0;', '}> blockquote{font-size:1.1rem;font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:italic;font-weight:300;line-height:1.8rem;letter-spacing:0.03em;text-align:right;margin-right:0;padding:24px;quotes:"\\201E""\\201C";&:before{display:inline-block;transform:translate(-15px,-15px);content:open-quote;color:', ';font-size:5rem;font-weight:400;}> footer{margin-top:10px;font-style:normal;font-weight:400;}}> details summary{cursor:pointer;}'], function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[7];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.mobileTitle;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.lineHeights.mobileTitle;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject5, function (props) {
  return props.theme.fontSizes[8];
}, function (props) {
  return props.theme.lineHeights.title;
}, function (props) {
  return props.theme.fontSizes[5];
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[6];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.mobileTitle;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject6, function (props) {
  return props.theme.fontSizes[7];
}, function (props) {
  return props.theme.lineHeights.title;
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[5];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.copy;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject7, function (props) {
  return props.theme.fontSizes[6];
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.copy;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject7, function (props) {
  return props.theme.fontSizes[5];
}), function (props) {
  return props.theme.fonts.title;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.fontWeights.titleSemi;
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.copy;
}, function (props) {
  return props.theme.fonts.body;
}, function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.theme.fontWeights.bodyNormal;
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.colors.highContrast;
}, function (props) {
  return props.theme.fontWeights.bodyBold;
}, function (props) {
  return props.theme.colors.highContrast;
}, function (props) {
  return props.theme.colors.brandRed;
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.theme.fontWeights.bodyNormal;
}, function (props) {
  return props.theme.lineHeights.copy;
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.colors.lowContrast;
}, function (props) {
  return props.theme.colors.lowContrast;
}, function (props) {
  return props.theme.colors.tintedBackground;
}, function (props) {
  return props.theme.colors.highContrast;
}, function (props) {
  return props.theme.colors.highContrast;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject8), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject9), function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.theme.space[0];
}, function (props) {
  return props.theme.lineHeights.small;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject6, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.lineHeights.copy;
}), function (props) {
  return props.theme.fontSizes[2];
}, function (props) {
  return props.theme.fontWeights.bodyNormal;
}, function (props) {
  return props.theme.lineHeights.small;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject10), function (props) {
  return props.theme.colors.lowContrast;
});

var PostWithGalleryWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Page__PostWithGalleryWrapper',
  componentId: 'sc-16gl3c1-3'
})(['']);

var Author = _styledComponents2.default.p.withConfig({
  displayName: 'Page__Author',
  componentId: 'sc-16gl3c1-4'
})(['']);

var PostFooter = _styledComponents2.default.div.withConfig({
  displayName: 'Page__PostFooter',
  componentId: 'sc-16gl3c1-5'
})(['display:inline-block;background:#edebeb;width:100%;']);

var PostFooterWraper = _styledComponents2.default.div.withConfig({
  displayName: 'Page__PostFooterWraper',
  componentId: 'sc-16gl3c1-6'
})(['display:flex;max-width:720px;padding:0 1rem;margin:0 auto;& > p{flex-grow:1;color:#828282;}', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject11));

var CoverImg = _styledComponents2.default.div.withConfig({
  displayName: 'Page__CoverImg',
  componentId: 'sc-16gl3c1-7'
})(['', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject12, function (props) {
  return props.featured_img;
}), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject12, function (props) {
  return props.featured_img;
}));

function SimplePost(_ref) {
  var post = _ref.post;

  return _react2.default.createElement(
    PostContent,
    null,
    (0, _htmr2.default)(post.contents)
  );
}

var Footer = function Footer(_ref2) {
  var post = _ref2.post;
  return _react2.default.createElement(
    PostFooter,
    null,
    _react2.default.createElement(
      PostFooterWraper,
      null,
      post.authors && _react2.default.createElement(
        Author,
        null,
        'written by ',
        post.authors
      )
    )
  );
};

function PostWithGallery(_ref3) {
  var post = _ref3.post,
      galleries = _ref3.galleries;

  var gallery_names = post.data.galleries.replace(/ /g, '').split(',');
  var names_columns = gallery_names.map(function (x) {
    return x.split(':');
  });
  gallery_names = names_columns.map(function (x) {
    return x[0];
  });
  var columns = names_columns.map(function (x) {
    return Number.parseInt(x[1], 10);
  });

  return _react2.default.createElement(
    PostWithGalleryWrapper,
    null,
    _react2.default.createElement(SimplePost, { post: post }),
    gallery_names.map(function (key, index) {
      return _react2.default.createElement(_LightboxGallery2.default, {
        key: index,
        photo_set: galleries[key],
        columns: columns[index]
      });
    })
  );
}

function checkGallery(post) {

  var hasGallery = Object.hasOwnProperty.call(post.data, 'galleries');

  if (hasGallery === true) {
    if (post.data.galleries == null) {
      console.log('Warning, you have a gallery field in your markdown ' + 'but it has no value.', post.data.galleries);
      hasGallery = false;
    }
  }
  return hasGallery;
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref4) {
  var post = _ref4.post,
      galleries = _ref4.galleries;

  var hasGallery = checkGallery(post);
  var keywords = post.data.categories.replace(/ /g, '').split(',');
  var synopsis = (0, _striptags2.default)(post.contents).substring(0, 350).replace(/\n/g, '');

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Head2.default, {
      title: post.data.title + ' | Bitdefender Research',
      description: synopsis + '...',
      tags: keywords,
      image: post.data.featured_img
    }),
    _react2.default.createElement(
      PageWithCoverImg,
      null,
      _react2.default.createElement(CoverImg, { featured_img: post.data.featured_img }),
      _react2.default.createElement(
        Post,
        null,
        _react2.default.createElement(_Navigation2.default, { pageName: 'post' }),
        hasGallery ? _react2.default.createElement(PostWithGallery, { post: post, galleries: galleries }) : _react2.default.createElement(SimplePost, { post: post }),
        _react2.default.createElement(Footer, { post: post })
      )
    )
  );
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'RuntimeError: CUDA runtime error (2) : out of memory.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Joking, this is a 404, we simply couldn\'t find the page.'
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load fonts in a non-blocking way.
// This will make sure WebFont.load is only used in the browser.
if (typeof window !== 'undefined') {
  var WebFont = __webpack_require__(49);

  WebFont.load({
    google: {
      families: ['Roboto:300,400,500', 'Exo+2:400,600']
    }
  });
}

// Export your top level component as JSX (for static rendering)


// Your top level component
exports.default = _App2.default;

// Render your app

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  html {\n    font-size: 19px;\n    box-sizing: border-box;\n  }\n  *,*::before,*::after {\n    box-sizing:inherit;\n  }\n\n  body {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.78rem;\n    padding: 0;\n    background: #FFF;\n  }\n\n  h1 {\n    display: block;\n    margin: 0.67em 0;\n  }\n\n  .math-display {\n    overflow-x: auto;\n    @media (min-width: 74.6875em) {\n      overflow-x: initial;\n    }\n  }\n\n  .remark-highlight {\n    font-size: 14px;\n\n    @media (min-width: 74.6875em) {\n      font-size: 16px;\n    }\n  }\n\n  p.hint.tip,\n  p.hint.error,\n  p.hint.warn {\n    letter-spacing: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    line-height: 1.6rem;\n    word-spacing: 0.05rem;\n    background-color: rgba(238, 238, 238, 0.5);\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px;\n    padding: 8px 12px 8px 24px;\n    margin-bottom: 16px;\n    position: relative;\n  }\n\n  p.hint.tip:before,\n  p.hint.error:before,\n  p.hint.warn:before {\n    border-radius: 100%;\n    color: #fff;\n    content: \'!\';\n    font-size: 14px;\n    font-weight: 700;\n    left: -12px;\n    line-height: 20px;\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    text-align: center;\n    top: 12px;\n  }\n\n  p.hint.tip {\n    border-left: 4px solid #27ab83;\n  }\n\n  p.hint.tip:before {\n    // background-color: #27ab83;\n    display: none;\n  }\n\n  p.hint.warn {\n    border-left: 4px solid #f0b429;\n  }\n\n  p.hint.warn:before {\n    background-color: #f0b429;\n  }\n\n  p.hint.error {\n    border-left: 4px solid #ef4e4e;\n  }\n\n  p.hint.error:before {\n    background-color: #ef4e4e;\n    content: \'\xD7\';\n  }\n\n\n  .content table {\n    /* Remove spacing between table cells (from Normalize.css) */\n    border-collapse: collapse;\n    border-spacing: 0;\n    empty-cells: show;\n    border: 1px solid #cbcbcb;\n    font-size: 12px;\n    line-height: 1.0rem;\n\n    @media (min-width: 74.6875em) {\n      font-size: 19px;\n      line-height: 1.78rem;\n    }\n  }\n\n  .content caption {\n      color: #000;\n      font: italic 85%/1 arial, sans-serif;\n      padding: 1em 0;\n      text-align: center;\n  }\n\n  .content td,\n  .content th {\n      border-left: 1px solid #cbcbcb;/*  inner column border */\n      border-width: 0 0 0 1px;\n      font-size: inherit;\n      margin: 0;\n      overflow: visible; /*to make ths where the title is really long work*/\n      padding: 0.5em 1em; /* cell padding */\n  }\n\n  .content thead {\n      background-color: #e0e0e0;\n      color: #000;\n      text-align: left;\n      vertical-align: bottom;\n  }\n\n  /*\n  striping:\n    even - #fff (white)\n    odd  - #f2f2f2 (light gray)\n  */\n  .content td {\n      background-color: #f2f2f2;\n  }\n\n  /* nth-child selector for modern browsers */\n  .content tr:nth-child(2n-1) td {\n      background-color: transparent;\n  }\n\n  /* BORDERED TABLES */\n  .content td {\n      border-bottom: 1px solid #cbcbcb;\n  }\n  .content tbody > tr:last-child > td {\n      border-bottom-width: 0;\n  }\n\n\n  /* HORIZONTAL BORDERED TABLES */\n\n  .content td,\n  .content th {\n      border-width: 0 0 1px 0;\n      border-bottom: 1px solid #cbcbcb;\n  }\n  .content tbody > tr:last-child > td {\n      border-bottom-width: 0;\n  }\n'], ['\n  ', '\n\n  html {\n    font-size: 19px;\n    box-sizing: border-box;\n  }\n  *,*::before,*::after {\n    box-sizing:inherit;\n  }\n\n  body {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.78rem;\n    padding: 0;\n    background: #FFF;\n  }\n\n  h1 {\n    display: block;\n    margin: 0.67em 0;\n  }\n\n  .math-display {\n    overflow-x: auto;\n    @media (min-width: 74.6875em) {\n      overflow-x: initial;\n    }\n  }\n\n  .remark-highlight {\n    font-size: 14px;\n\n    @media (min-width: 74.6875em) {\n      font-size: 16px;\n    }\n  }\n\n  p.hint.tip,\n  p.hint.error,\n  p.hint.warn {\n    letter-spacing: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    line-height: 1.6rem;\n    word-spacing: 0.05rem;\n    background-color: rgba(238, 238, 238, 0.5);\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px;\n    padding: 8px 12px 8px 24px;\n    margin-bottom: 16px;\n    position: relative;\n  }\n\n  p.hint.tip:before,\n  p.hint.error:before,\n  p.hint.warn:before {\n    border-radius: 100%;\n    color: #fff;\n    content: \'!\';\n    font-size: 14px;\n    font-weight: 700;\n    left: -12px;\n    line-height: 20px;\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    text-align: center;\n    top: 12px;\n  }\n\n  p.hint.tip {\n    border-left: 4px solid #27ab83;\n  }\n\n  p.hint.tip:before {\n    // background-color: #27ab83;\n    display: none;\n  }\n\n  p.hint.warn {\n    border-left: 4px solid #f0b429;\n  }\n\n  p.hint.warn:before {\n    background-color: #f0b429;\n  }\n\n  p.hint.error {\n    border-left: 4px solid #ef4e4e;\n  }\n\n  p.hint.error:before {\n    background-color: #ef4e4e;\n    content: \'\\u00D7\';\n  }\n\n\n  .content table {\n    /* Remove spacing between table cells (from Normalize.css) */\n    border-collapse: collapse;\n    border-spacing: 0;\n    empty-cells: show;\n    border: 1px solid #cbcbcb;\n    font-size: 12px;\n    line-height: 1.0rem;\n\n    @media (min-width: 74.6875em) {\n      font-size: 19px;\n      line-height: 1.78rem;\n    }\n  }\n\n  .content caption {\n      color: #000;\n      font: italic 85%/1 arial, sans-serif;\n      padding: 1em 0;\n      text-align: center;\n  }\n\n  .content td,\n  .content th {\n      border-left: 1px solid #cbcbcb;/*  inner column border */\n      border-width: 0 0 0 1px;\n      font-size: inherit;\n      margin: 0;\n      overflow: visible; /*to make ths where the title is really long work*/\n      padding: 0.5em 1em; /* cell padding */\n  }\n\n  .content thead {\n      background-color: #e0e0e0;\n      color: #000;\n      text-align: left;\n      vertical-align: bottom;\n  }\n\n  /*\n  striping:\n    even - #fff (white)\n    odd  - #f2f2f2 (light gray)\n  */\n  .content td {\n      background-color: #f2f2f2;\n  }\n\n  /* nth-child selector for modern browsers */\n  .content tr:nth-child(2n-1) td {\n      background-color: transparent;\n  }\n\n  /* BORDERED TABLES */\n  .content td {\n      border-bottom: 1px solid #cbcbcb;\n  }\n  .content tbody > tr:last-child > td {\n      border-bottom-width: 0;\n  }\n\n\n  /* HORIZONTAL BORDERED TABLES */\n\n  .content td,\n  .content th {\n      border-width: 0 0 1px 0;\n      border-bottom: 1px solid #cbcbcb;\n  }\n  .content tbody > tr:last-child > td {\n      border-bottom-width: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactStaticRoutes = __webpack_require__(22);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactHotLoader = __webpack_require__(41);

var _reactGa = __webpack_require__(42);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactCookieConsent = __webpack_require__(43);

var _reactCookieConsent2 = _interopRequireDefault(_reactCookieConsent);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _Normalize = __webpack_require__(44);

var _Normalize2 = _interopRequireDefault(_Normalize);

var _theme = __webpack_require__(45);

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


// import 'highlight.js/styles/github.css'
// import 'prism-themes/themes/prism-material-light.css'


// Initialize the Google Analytics script.
_reactGa2.default.initialize('UA-11226891-6');
// ReactGA.set({ anonymizeIp: true, cookieExpires: 0 })

(0, _styledComponents.injectGlobal)(_templateObject, _Normalize2.default);

var VerticalRythm = _styledComponents2.default.div.withConfig({
  displayName: 'App__VerticalRythm',
  componentId: 'sc-14cqgfn-0'
})(['display:block;position:absolute;left:0px;right:0px;pointer-events:none;user-select:none;top:0px;height:1670px;background:rgba(0,0,0,0) linear-gradient(rgba(0,119,179,0.2) 1px,transparent 1px) repeat scroll left top / 34px 34px;']);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      return _reactGa2.default.pageview(window.location.pathname + window.location.search);
    }, _this.componentDidUpdate = function () {
      return _reactGa2.default.pageview(window.location.pathname + window.location.search);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: _theme.theme },
        _react2.default.createElement(
          _reactStatic.Router,
          null,
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(_reactStaticRoutes2.default, null),
            _react2.default.createElement(
              _reactCookieConsent2.default,
              {
                location: 'bottom',
                cookieName: 'gdpr_consent',
                expires: 150,
                buttonText: 'Accept',
                onAccept: function onAccept() {},
                style: { background: 'rgba(24,27,42, 1)' },
                buttonStyle: {
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '16px',
                  border: '1px solid #fff'
                }
              },
              'This website uses cookies for traffic analysis.'
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(23);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(24);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(25);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

var _reactUniversalComponent = __webpack_require__(27);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/fgogianu/Code/web/bit-ml/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Blog',
  file: '/Users/fgogianu/Code/web/bit-ml/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/pages/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/pages/Blog';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Post',
  file: '/Users/fgogianu/Code/web/bit-ml/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/pages/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/pages/Post';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Page',
  file: '/Users/fgogianu/Code/web/bit-ml/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/Page';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/fgogianu/Code/web/bit-ml/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(28);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(29);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(30);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(8);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  '], ['\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n    @media screen and (orientation:portrait) {\n      background-size: 1512px;\n      background-position: -700px bottom;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  '], ['\n    padding: 0 5rem;\n    height: 95vh;\n    background-size: contain;\n    background-position: bottom;\n\n    @media screen and (orientation:portrait) {\n      background-size: 2048px;\n      background-position: -700px bottom;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 64px;\n    line-height: 92px;\n  '], ['\n    font-size: 64px;\n    line-height: 92px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _Featured = __webpack_require__(32);

var _Featured2 = _interopRequireDefault(_Featured);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = exports.Hero = _styledComponents2.default.div.withConfig({
  displayName: 'Hero',
  componentId: 'ajom9h-0'
})(['display:inline-block;width:100%;margin:0 auto;padding:0 1rem;background:#020100 url(\'/hero_avatar.webp\') no-repeat bottom;background-size:1024px;background-position:-600px bottom;min-height:92vh;@supports (-webkit-appearance:none){min-height:calc(92vh - 56px);}', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject2));

var Heading = _styledComponents2.default.h1.withConfig({
  displayName: 'Hero__Heading',
  componentId: 'ajom9h-1'
})(['max-width:800px;font-family:\'Exo 2\',sans-serif;font-style:normal;font-weight:500;font-size:32px;line-height:2.7rem;color:#E4E4E4;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject3), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject3));

exports.default = function (_ref) {
  var props = _ref.props;
  return _react2.default.createElement(
    Hero,
    null,
    _react2.default.createElement(
      Heading,
      null,
      props.tagline,
      ' '
    ),
    _react2.default.createElement(_Featured2.default, { props: props })
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0 5rem;\n  '], ['\n    padding: 0 5rem;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 0 5rem;\n\n    .carousel {\n      height: 33vh;\n    }\n  '], ['\n    padding: 0 5rem;\n\n    .carousel {\n      height: 33vh;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    padding: 2rem 3rem;\n  '], ['\n    padding: 2rem 3rem;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 1.4rem;\n    line-height: 2rem;\n  '], ['\n    font-size: 1.4rem;\n    line-height: 2rem;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 1rem;\n    line-height: 1.4;\n  '], ['\n    font-size: 1rem;\n    line-height: 1.4;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    left: 10px;\n    width: 70px;\n    height: 70px;\n    padding: 15px;\n  '], ['\n    left: 10px;\n    width: 70px;\n    height: 70px;\n    padding: 15px;\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    right: 10px;\n    width: 70px;\n    height: 70px;\n    padding: 15px;\n  '], ['\n    right: 10px;\n    width: 70px;\n    height: 70px;\n    padding: 15px;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _pureReactCarousel = __webpack_require__(33);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeaturedContainer = _styledComponents2.default.div.withConfig({
  displayName: 'Featured__FeaturedContainer',
  componentId: 'xm4c49-0'
})(['background:rgba(24,27,42,0.8);left:0;bottom:0;position:absolute;width:100%;']);

var FeaturedWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Featured__FeaturedWrapper',
  componentId: 'xm4c49-1'
})(['margin:0 auto;padding:0 2.2rem;padding-bottom:0.5rem;color:#fff;.carousel{height:35vh;}', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject2));

var FeaturedLink = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Featured__FeaturedLink',
  componentId: 'xm4c49-2'
})(['display:block;width:100%;height:100%;background:rgba(98,118,207,0);transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);color:#e4e4e4;&:hover{color:#fff;background:rgba(98,118,207,0.3);}', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject3));

var FeaturedHeading = _styledComponents2.default.h2.withConfig({
  displayName: 'Featured__FeaturedHeading',
  componentId: 'xm4c49-3'
})(['font-family:"Exo 2",sans-serif;font-style:normal;font-weight:500;font-size:1rem;line-height:1.32rem;margin:0.4rem 0 0 0;color:#89cdf0;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject4), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject4));

var FeaturedSynopsis = _styledComponents2.default.p.withConfig({
  displayName: 'Featured__FeaturedSynopsis',
  componentId: 'xm4c49-4'
})(['font-size:0.833rem;font-weight:300;line-height:1.4;color:#fff;line-height:1rem;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject5), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject5));

var StyledButtonBack = (0, _styledComponents2.default)(_pureReactCarousel.ButtonBack).withConfig({
  displayName: 'Featured__StyledButtonBack',
  componentId: 'xm4c49-5'
})(['position:absolute;top:50%;left:-5px;margin-left:10px;margin-top:-20px;width:40px;height:40px;padding:10px;background:none;border:none;outline:none;border-radius:40px;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject6), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject6));
var StyledButtonNext = (0, _styledComponents2.default)(_pureReactCarousel.ButtonNext).withConfig({
  displayName: 'Featured__StyledButtonNext',
  componentId: 'xm4c49-6'
})(['position:absolute;top:50%;right:-5px;margin-right:10px;margin-top:-20px;width:40px;height:40px;padding:10px;background:none;border:none;outline:none;border-radius:40px;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject7), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject7));

exports.default = function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    FeaturedContainer,
    null,
    _react2.default.createElement(
      FeaturedWrapper,
      null,
      _react2.default.createElement(
        _pureReactCarousel.CarouselProvider,
        {
          naturalSlideWidth: 100,
          naturalSlideHeight: 125,
          totalSlides: 7
        },
        _react2.default.createElement(
          _pureReactCarousel.Slider,
          null,
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 0 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/blog/post/fused-swiglu-kernel/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'Towards Fused Kernels for Gated MLP'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'Fusing the upscaling and gating in the Gated MLP.'
              )
            )
          ),
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 1 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/blog/post/large-language-models-for-malware-analysis/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'Large Language Models for Malware Analysis'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'Leveraging Large Language Models to understand and generate assembly code.'
              )
            )
          ),
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 2 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/blog/post/bgv-fully-homomorphic-encryption-scheme-in-python/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'The BGV fully homomorphic encryption scheme'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'The encryption, decryption, relinearization and the noise analysis of the Brakerski, Gentry, Vaikuntanathan (BGV) fully homomorphic encryption scheme.'
              )
            )
          ),
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 3 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/blog/post/pretrained-atari-agents/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'Over 25,000 Atari trained agents published'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'We are making available trained models on 60 games in the Arcade Learning Environment.'
              )
            )
          ),
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 4 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/blog/post/private-set-intersection-an-implementation-in-python/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'Private Set Intersection from Homomorphic Encryption: A Python Implementation'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'In which we discuss how to implement the PSI protocol using a HE encryption scheme, we introduce our new python library and describe various applications of PSI.'
              )
            )
          ),
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 5 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/blog/post/homomorphic-encryption-toy-implementation-in-python/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'Homomorphic Encryption: a Toy Implementation in Python'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'Curious about how to work with data you can\'t see? In the this blog post we are going to broadly explain what Homomorphic Encryption is and how to implement a particular scheme.'
              )
            )
          ),
          _react2.default.createElement(
            _pureReactCarousel.Slide,
            { index: 6 },
            _react2.default.createElement(
              FeaturedLink,
              { to: '/teaching/lectures-and-courses/' },
              _react2.default.createElement(
                FeaturedHeading,
                null,
                'Bitdefender courses in Deep Learning and Crypto'
              ),
              _react2.default.createElement(
                FeaturedSynopsis,
                null,
                'Check out some of the courses delivered by our team in collaboration with top Universities in Bucharest. Includes slides and notebooks.'
              )
            )
          )
        ),
        _react2.default.createElement(
          StyledButtonBack,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'svg',
              {
                fill: '#fff',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                xlink: 'http://www.w3.org/1999/xlink',
                x: '0px',
                y: '0px',
                width: '100%',
                height: '100%',
                viewBox: '0 0 512 512',
                space: 'preserve'
              },
              _react2.default.createElement('path', { d: 'M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z' })
            )
          )
        ),
        _react2.default.createElement(
          StyledButtonNext,
          null,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'svg',
              {
                fill: '#fff',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                xlink: 'http://www.w3.org/1999/xlink',
                x: '0px',
                y: '0px',
                width: '100%',
                height: '100%',
                viewBox: '0 0 512 512',
                space: 'preserve'
              },
              _react2.default.createElement('path', { d: 'M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z' })
            )
          )
        )
      )
    )
  );
};

// export default ({ posts }) => (
//   <FeaturedContainer>
//     <FeaturedWrapper>
//      {<FeaturedLink to="/blog/post/recurrent-space-time-graph-neural-nets/">
//         <FeaturedHeading>Recurrent Space-time Graph Neural Network</FeaturedHeading>
//         <FeaturedSynopsis>We introduce our recurrent graph model designed for
//         video processing from our new paper that will be presented at NeurIPS
//         2019 in Vancouver.
//         </FeaturedSynopsis>
//       </FeaturedLink>}
//      {<FeaturedLink to="/blog/post/bitdefender_at_eeml2019/">
//         <FeaturedHeading>Bitdefender at EEML 2019</FeaturedHeading>
//         <FeaturedSynopsis>Read about our team's experience of organizing and
//         participating at Eastern European Machine Learning summer school in
//         Bucharest.
//         </FeaturedSynopsis>
//       </FeaturedLink>}
//       <FeaturedLink to="/blog/post/bitdefender_at_tmlss2018/">
//         <FeaturedHeading>Bitdefender at TMLSS 2018</FeaturedHeading>
//         <FeaturedSynopsis>Bitdefender participated at the first edition of
//         the Transylvania Machine Learning Summer School that took place in
//         Cluj-Napoca.
//         </FeaturedSynopsis>
//       </FeaturedLink>
//     </FeaturedWrapper>
//   </FeaturedContainer>
// )

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel/dist/react-carousel.es.css");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialtyPanel = exports.SpecialtyWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  '], ['\n    max-width: 100%;\n    display: flex;\n    justify-content: space-between;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  '], ['\n    position: sticky;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  '], ['\n    position: sticky;\n    top: 0;\n\n    height: 100vh;\n    width: 38%;\n    overflow: hidden;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n\n    .specItem {\n      flex-grow: 1;\n      flex-shrink: 1;\n      flex-basis: auto;\n      justify-content: center;\n\n      &.grows {\n        display: flex;\n        flex-grow: 20;\n        align-items: center;\n      }\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: 7.2vw;\n    margin-top: -3px;\n\n    @media screen and (orientation:landscape) {\n      margin-top: -5px;\n    }\n  '], ['\n    font-size: 7.2vw;\n    margin-top: -3px;\n\n    @media screen and (orientation:landscape) {\n      margin-top: -5px;\n    }\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 7.3vw;\n    margin-top: -8px;\n  '], ['\n    position: initial;\n    top: initial;\n\n    //font-size: 96px;\n    //line-height: 78px;\n    font-size: 7.3vw;\n    margin-top: -8px;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    font-size: 2vh;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      font-size: 2.4vh;\n    }\n  '], ['\n    font-size: 2vh;\n    padding: 0 2rem;\n\n    @media screen and (orientation:landscape) {\n      font-size: 2.4vh;\n    }\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    font-size: 2.8vh;\n    padding: 0 8vh;\n    line-height: 4vh;\n  '], ['\n    font-size: 2.8vh;\n    padding: 0 8vh;\n    line-height: 4vh;\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    padding: 0 2rem;\n  '], ['\n    padding: 0 2rem;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    padding: 0 8vh;\n  '], ['\n    padding: 0 8vh;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    max-width: 62%;\n  '], ['\n    max-width: 62%;\n  ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpecialtyWrapper = exports.SpecialtyWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Specialty__SpecialtyWrapper',
  componentId: 'pq5osx-0'
})(['position:relative;background:#EDEBEB;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject), (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject));

var SpecialtyPanel = exports.SpecialtyPanel = _styledComponents2.default.div.withConfig({
  displayName: 'Specialty__SpecialtyPanel',
  componentId: 'pq5osx-1'
})(['background:', ';overflow:hidden;', ' ', ' .specialtyHeading{}'], function (props) {
  return props.bg;
}, (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject2), (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject3));

var Heading = _styledComponents2.default.h2.withConfig({
  displayName: 'Specialty__Heading',
  componentId: 'pq5osx-2'
})(['margin:0;font-family:\'Exo 2\',sans-serif;font-style:normal;font-weight:700;font-size:19.4vw;line-height:0.75;text-transform:uppercase;color:rgba(255,255,255,0.2);margin-top:-5px;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject4), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject5));

var Description = _styledComponents2.default.p.withConfig({
  displayName: 'Specialty__Description',
  componentId: 'pq5osx-3'
})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.6rem;font-size:1.2rem;color:rgba(255,255,255,0.8);padding:3rem 1rem;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject6), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject7));

var Team = _styledComponents2.default.p.withConfig({
  displayName: 'Specialty__Team',
  componentId: 'pq5osx-4'
})(['font-family:"Roboto",Helvetica,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.4;font-size:1rem;color:rgba(255,255,255,0.5);padding:0 1rem;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject8), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject9));

var ProjectsWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Specialty__ProjectsWrapper',
  componentId: 'pq5osx-5'
})(['', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject10), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject10));

var SpecialtyBg = ['#F3A712', '#E6212B', '#00B2CB', '#12161E', '#C700CB'];

exports.default = function (_ref) {
  var children = _ref.children,
      props = _ref.props,
      bgIdx = _ref.bgIdx;
  return _react2.default.createElement(
    SpecialtyWrapper,
    null,
    _react2.default.createElement(
      SpecialtyPanel,
      { bg: SpecialtyBg[bgIdx] },
      _react2.default.createElement(
        Heading,
        { className: 'specItem' },
        props.title,
        ' '
      ),
      _react2.default.createElement(
        'div',
        { className: 'specItem grows' },
        _react2.default.createElement(
          Description,
          null,
          props.description,
          ' '
        )
      ),
      _react2.default.createElement(
        Team,
        { className: 'specItem' },
        props.people,
        ' '
      )
    ),
    _react2.default.createElement(
      ProjectsWrapper,
      null,
      children
    )
  );
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  '], ['\n    display: flex;\n    align-items: center;\n    min-height: 100vh;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 0 5rem;\n  '], ['\n    padding: 0 5rem;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  '], ['\n    //padding: 0 15rem;\n    padding: 0 24vmin;\n  ']);

var _styledSystem = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Project = _styledComponents2.default.div.withConfig({
  displayName: 'Project',
  componentId: 'd9zx3a-0'
})(['', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject));

var ProjectContent = _styledComponents2.default.section.withConfig({
  displayName: 'Project__ProjectContent',
  componentId: 'd9zx3a-1'
})(['display:inline-block;padding:0 1rem;', ' ', ''], (0, _styledComponentsBreakpoint2.default)('tablet')(_templateObject2), (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject3));

var Heading = _styledComponents2.default.h3.withConfig({
  displayName: 'Project__Heading',
  componentId: 'd9zx3a-2'
})(['', ' ', ' ', ' letter-spacing:0.03em;text-transform:uppercase;'], _styledSystem.typography, _styledSystem.color, _styledSystem.space);
Heading.defaultProps = {
  mt: 2,
  mb: 1,
  p: 0,
  fontFamily: 'title',
  fontSize: 4,
  fontWeight: 'titleSemi',
  lineHeight: 'copy',
  color: 'highContrast'
};

var Text = _styledComponents2.default.p.withConfig({
  displayName: 'Project__Text',
  componentId: 'd9zx3a-3'
})(['', ' ', ' ', ' letter-spacing:0.03em;'], _styledSystem.typography, _styledSystem.color, _styledSystem.space);
Text.defaultProps = {
  fontFamily: 'body',
  fontSize: 3,
  fontWeight: 'bodyMedium',
  lineHeight: 'small',
  color: 'highContrast'
};

var BibList = _styledComponents2.default.ul.withConfig({
  displayName: 'Project__BibList',
  componentId: 'd9zx3a-4'
})(['margin-top:3rem;padding-left:0;']);

var BibItem = _styledComponents2.default.li.withConfig({
  displayName: 'Project__BibItem',
  componentId: 'd9zx3a-5'
})(['', ' padding:0.5rem;list-style:none;letter-spacing:0.03em;color:#828282;&:hover{background-color:#e0dcdc;transition:background-color 0.2s cubic-bezier(0.25,0.46,0.45,0.94);}'], _styledSystem.typography);
BibItem.defaultProps = {
  lineHeight: 'tiny'
};

var BibLink = _styledComponents2.default.a.withConfig({
  displayName: 'Project__BibLink',
  componentId: 'd9zx3a-6'
})(['', ' ', ' font-style:italic;'], _styledSystem.typography, _styledSystem.color);
BibLink.defaultProps = {
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'bodyMedium',
  lineHeight: 'tiny',
  color: 'midContrast'
};

var BibAuthors = _styledComponents2.default.span.withConfig({
  displayName: 'Project__BibAuthors',
  componentId: 'd9zx3a-7'
})(['font-style:normal;color:#e6212b;']);
var BibYear = _styledComponents2.default.span.withConfig({
  displayName: 'Project__BibYear',
  componentId: 'd9zx3a-8'
})(['font-style:normal;']);

var BibPublished = _styledComponents2.default.span.withConfig({
  displayName: 'Project__BibPublished',
  componentId: 'd9zx3a-9'
})(['font-style:normal;']);

var BibEntry = function BibEntry(_ref, i) {
  var authors = _ref.authors,
      title = _ref.title,
      year = _ref.year,
      link = _ref.link,
      published = _ref.published;
  return _react2.default.createElement(
    BibItem,
    { key: i },
    _react2.default.createElement(
      BibLink,
      { href: link, target: '_blank' },
      _react2.default.createElement(
        BibAuthors,
        null,
        authors
      ),
      ', ' + title + ', ',
      published && _react2.default.createElement(
        BibPublished,
        null,
        published + ', '
      ),
      _react2.default.createElement(
        BibYear,
        null,
        year
      )
    )
  );
};

var Description = function Description(_ref2) {
  var children = _ref2.children;
  return children.split('\n').map(function (line, key) {
    return _react2.default.createElement(
      Text,
      { key: key },
      line
    );
  });
};

exports.default = function (_ref3, i) {
  var title = _ref3.title,
      description = _ref3.description,
      papers = _ref3.papers;
  return _react2.default.createElement(
    Project,
    { key: i },
    _react2.default.createElement(
      ProjectContent,
      null,
      _react2.default.createElement(
        Heading,
        null,
        title
      ),
      _react2.default.createElement(
        Description,
        null,
        description
      ),
      _react2.default.createElement(
        BibList,
        null,
        papers.map(BibEntry)
      )
    )
  );
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BioBox = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  '], ['\n    &:hover {\n      background-color: #fff;\n      box-shadow: 0px 0px 17px -4px rgba(115,108,108,1);\n      transform: scale(1.05);\n      //transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n      div>a {opacity: 1}\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    >a {\n      opacity: 0;\n    }\n  '], ['\n    >a {\n      opacity: 0;\n    }\n  ']);

var _styledSystem = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledComponentsBreakpoint = __webpack_require__(2);

var _styledComponentsBreakpoint2 = _interopRequireDefault(_styledComponentsBreakpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BioBox = exports.BioBox = _styledComponents2.default.div.withConfig({
  displayName: 'Bio__BioBox',
  componentId: 'sc-13auz32-0'
})(['margin-left:5px;margin-right:5px;flex:1 1 350px;padding:0.6rem;@supports (display:grid){margin:0;}display:flex;align-items:flex-start;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject));

var MediaFigure = _styledComponents2.default.figure.withConfig({
  displayName: 'Bio__MediaFigure',
  componentId: 'sc-13auz32-1'
})(['margin-right:1rem;max-width:96px;max-height:96px;border-radius:50%;border:5px solid #fff;overflow:hidden;']);

var MediaBody = _styledComponents2.default.div.withConfig({
  displayName: 'Bio__MediaBody',
  componentId: 'sc-13auz32-2'
})(['flex:1;']);

var Heading = _styledComponents2.default.h4.withConfig({
  displayName: 'Bio__Heading',
  componentId: 'sc-13auz32-3'
})(['font-family:"Exo 2",serif;font-style:normal;font-weight:600;line-height:27px;font-size:1rem;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 1rem 0;']);

var Bio = _styledComponents2.default.p.withConfig({
  displayName: 'Bio',
  componentId: 'sc-13auz32-4'
})(['', ' ', ' ', ''], _styledSystem.typography, _styledSystem.color, _styledSystem.space);
Bio.defaultProps = {
  m: 0,
  p: 0,
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 1,
  lineHeight: 'small',
  color: 'midContrast'
};

var ContactBox = _styledComponents2.default.div.withConfig({
  displayName: 'Bio__ContactBox',
  componentId: 'sc-13auz32-5'
})(['display:flex;align-items:flex-start;flex-wrap:nowrap;margin-bottom:1rem;> a{width:33.33%;text-align:center;font-size:0.833rem;font-weight:normal !important;color:#828282 !important;padding:0.3rem;border:1px solid #edebeb;margin-right:5px;transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94);&:hover{background-color:#edebeb;}}', ''], (0, _styledComponentsBreakpoint2.default)('desktop')(_templateObject2));

exports.default = function (_ref, i) {
  var name = _ref.name,
      bio = _ref.bio,
      img = _ref.img,
      contact = _ref.contact;
  return _react2.default.createElement(
    BioBox,
    { key: i },
    _react2.default.createElement(
      MediaFigure,
      null,
      _react2.default.createElement('img', { src: './bio/' + (img || 'hal_9000.jpg'), alt: img })
    ),
    _react2.default.createElement(
      MediaBody,
      null,
      _react2.default.createElement(
        Heading,
        null,
        name,
        ' '
      ),
      _react2.default.createElement(
        Bio,
        null,
        bio,
        ' '
      ),
      _react2.default.createElement(
        ContactBox,
        null,
        contact.mail && _react2.default.createElement(
          'a',
          { href: 'mailto:' + contact.mail },
          'email'
        ),
        contact.github && _react2.default.createElement(
          'a',
          { href: 'https://github.com/' + contact.github, target: '_blank' },
          'github'
        ),
        contact.twitter && _react2.default.createElement(
          'a',
          { href: 'https://twitter.com/' + contact.twitter, target: '_blank' },
          'twitter'
        ),
        contact.website && _react2.default.createElement(
          'a',
          { href: 'https://' + contact.website, target: '_blank' },
          'website'
        )
      )
    )
  );
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleGrid = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeopleGrid = exports.PeopleGrid = _styledComponents2.default.div.withConfig({
  displayName: 'PeopleGrid',
  componentId: 'lkr7k-0'
})(['display:flex;flex-wrap:wrap;display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-auto-rows:minmax(150px,auto);grid-gap:3rem;']);

exports.default = function (_ref) {
  var children = _ref.children,
      id = _ref.id;
  return _react2.default.createElement(
    PeopleGrid,
    { id: id },
    children
  );
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-photo-gallery");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Normalize = exports.version = undefined;

var _styledComponents = __webpack_require__(1);

var version = exports.version = '8.0.0';

var Normalize = exports.Normalize = (0, _styledComponents.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;text-decoration:none;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}figure{margin:0;}img{border-style:none;max-width:100%;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);

exports.default = Normalize;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var theme = exports.theme = {
  colors: {
    background: '#f5f2f2', // lightly tinted white
    tintedBackground: '#EDEBEB', // for panels, widgets, etc.
    highContrast: '#333', // almost black
    midContrast: '#828282', // darker grey
    lowContrast: '#c6bebe',
    brandRed: '#e6212b' // red
  },
  fonts: {
    title: '"Exo 2", sans-serif',
    body: '"Roboto", Helvetica, Arial, sans-serif'
  },
  fontSizes: ['0.579rem', '0.694rem', '0.833rem', '1.00rem', '1.20rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  fontWeights: [300, 400, 500, 600],
  lineHeights: {
    tiny: '1.00rem',
    small: '1.48rem',
    copy: '1.78947rem',
    mobileTitle: '2.074rem',
    title: '3.57895rem'
  },
  breakpoints: {
    mobile: 0,
    tablet: 737,
    desktop: 1195
  },
  space: [0, '1.78947rem', '3.57895rem', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'],
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid'],
  radii: [0, '3px', '5px', '8px'],
  sizes: ['16px', '32px', '64px', '128px', '256px', '512px', '768px', '1024px', '1536px']
};

theme.fontWeights.bodyNormal = theme.fontWeights[0];
theme.fontWeights.bodyMedium = theme.fontWeights[1];
theme.fontWeights.bodyBold = theme.fontWeights[2];
theme.fontWeights.titleNormal = theme.fontWeights[1];
theme.fontWeights.titleSemi = theme.fontWeights[3];

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("katex/dist/katex.min.css");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("prismjs/themes/prism.css");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("prismjs/plugins/line-numbers/prism-line-numbers.css");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("webfontloader");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.4a445bf5.js.map