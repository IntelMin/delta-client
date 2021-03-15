module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/DeltaButton.js":
/*!******************************************!*\
  !*** ./components/Button/DeltaButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @windmill/react-ui */ "@windmill/react-ui");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/plus.svg */ "./public/plus.svg");
/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_plus_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_plus_gray_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/plus-gray.svg */ "./public/plus-gray.svg");
/* harmony import */ var _public_plus_gray_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_plus_gray_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_plus_black_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/plus-black.svg */ "./public/plus-black.svg");
/* harmony import */ var _public_plus_black_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_plus_black_svg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Button\\DeltaButton.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DeltaButton = (_ref) => {
  let {
    children,
    className = '',
    labelBottom,
    hidePlus,
    secondaryLook,
    grayLook
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "labelBottom", "hidePlus", "secondaryLook", "grayLook"]);

  if (secondaryLook) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: className,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "border border-black w-full md:w-max text-black p-0.5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], _objectSpread(_objectSpread({
          className: "w-full md:w-max bg-gray-300 text-black p-5 rounded-none py-4 flex-grow"
        }, props), {}, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-left flex-grow",
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, undefined), !hidePlus && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "+",
            src: _public_plus_black_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
            className: "m-auto ml-0 md:ml-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["HelperText"], {
        className: `${!labelBottom ? 'hidden' : ''} text-sm text-left text-gray-400 block mt-0.5`,
        children: labelBottom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], _objectSpread(_objectSpread({
      className: `w-full md:w-max ${grayLook ? 'bg-gray-300 text-gray-500' : 'bg-black text-white'} p-5 rounded-none py-4 flex-grow`
    }, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-left flex-grow",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, undefined), !hidePlus && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: "+",
        src: grayLook ? _public_plus_gray_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _public_plus_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
        className: "m-auto ml-0 md:ml-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["HelperText"], {
      className: `${!labelBottom ? 'hidden' : ''} text-sm text-left text-gray-400 block mt-0.5`,
      children: labelBottom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaButton);

/***/ }),

/***/ "./components/Button/TransactionButton.js":
/*!************************************************!*\
  !*** ./components/Button/TransactionButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _DeltaButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeltaButton */ "./components/Button/DeltaButton.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Button\\TransactionButton.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/**
 * A button that supports sending a transaction and keeping track of allowance/approval
 * if allowanceRequiredFor is specified with the contract and token name.
 */

const TransactionButton = (_ref) => {
  let {
    onClick,
    allowanceRequiredFor,
    icon,
    text,
    textLoading,
    textApprove,
    textApproving,
    secondaryLooks,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onClick", "allowanceRequiredFor", "icon", "text", "textLoading", "textApprove", "textApproving", "secondaryLooks", "className"]);

  textApprove = textApprove || 'Approve';
  textLoading = textLoading || 'Loading...';
  textApproving = textApproving || 'Approving...';
  allowanceRequiredFor = allowanceRequiredFor || {
    contract: undefined,
    token: undefined
  };
  const yam = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useYam"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_2__["useWallet"])();
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_7__["ModalContext"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const tokenBalance = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useTokenBalance"])(allowanceRequiredFor.token);
  const approval = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useUserApprovalOfContract"])(allowanceRequiredFor.contract, allowanceRequiredFor.token);
  const {
    0: allowanceSatisfied,
    1: setAlowanceSatisfied
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(allowanceRequiredFor.contract === undefined);
  const {
    0: initialized,
    1: setInitialized
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(allowanceRequiredFor.contract === undefined);
  /*
   * TODO: This is not bullet proof has the approval balance can be evaluated
   * before or after the token balancer is updated.
   */

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setAlowanceSatisfied(!allowanceRequiredFor.contract || approval.amount !== _config__WEBPACK_IMPORTED_MODULE_6__["DATA_UNAVAILABLE"] && tokenBalance.balance !== _config__WEBPACK_IMPORTED_MODULE_6__["DATA_UNAVAILABLE"] && approval.amount.gte(tokenBalance.balance));
    setInitialized(true);
  }, [approval.amount, tokenBalance.balance]);

  const isDisabled = () => {
    return !yam || !initialized || loading || props.disabled === true ? 'disabled' : '';
  };

  const handleApproval = async () => {
    setLoading(true);

    try {
      const contract = yam.contracts[allowanceRequiredFor.contract]._address;
      const transaction = yam.contracts[allowanceRequiredFor.token].methods.approve(contract, ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].constants.MaxUint256);
      const gasEstimation = await transaction.estimateGas({
        from: wallet.account
      });
      await transaction.send({
        from: wallet.account,
        gasEstimation
      });
    } catch (error) {
      const transactionError = _helpers__WEBPACK_IMPORTED_MODULE_4__["errors"].getTransactionError(error);
      modalContext.showError('Error while approving', transactionError.message);
    } finally {
      setLoading(false);
      tokenBalance.update();
      approval.update();
    }
  };

  const handleTransaction = async () => {
    if (!onClick) {
      throw new Error('An onClick property must be provided.');
    }

    setLoading(true);

    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  const renderButtonText = () => {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: allowanceSatisfied ? textLoading : textApproving
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 14
      }, undefined);
    }

    if (icon) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: icon,
          alt: "icon",
          style: {
            marginRight: '0.5em'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined), allowanceSatisfied ? text : textApprove]
      }, void 0, true);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: allowanceSatisfied ? text : textApprove
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeltaButton__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, props), {}, {
    className: className,
    disabled: isDisabled(),
    onClick: () => {
      if (allowanceSatisfied) {
        handleTransaction();
      } else {
        handleApproval();
      }
    },
    children: renderButtonText()
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TransactionButton);

/***/ }),

/***/ "./components/Buttons/ConnectWalletButton.js":
/*!***************************************************!*\
  !*** ./components/Buttons/ConnectWalletButton.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @windmill/react-ui */ "@windmill/react-ui");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/plus.svg */ "./public/plus.svg");
/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_plus_svg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Buttons\\ConnectWalletButton.js";





const ConnectWalletButton = ({
  className
}) => {
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_3__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: className,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: modalContext.showConnectWallet,
      className: "bg-black text-white rounded-none uppercase flex py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Connect Wallet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: "+",
        src: _public_plus_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        className: "m-auto pl-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectWalletButton);

/***/ }),

/***/ "./components/Buttons/FancyButton.js":
/*!*******************************************!*\
  !*** ./components/Buttons/FancyButton.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/plus.svg */ "./public/plus.svg");
/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_plus_svg__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Buttons\\FancyButton.js";


const FancyButton = ({
  text,
  image,
  url
}) => {
  function gourl() {
    window.open(url);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mt-1 w-72 md:w-96 flex text-xs md:text-base",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      onClick: gourl,
      className: "shadow-xl bg-black p-4 h-14 rounded-none inline-block text-white uppercase flex mr-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: "gourl",
        src: image,
        className: "m-auto w-4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      onClick: gourl,
      className: "flex justify-between rounded-none bg-black hover:bg-gray-900 shadow-xl flex-grow p-4 h-14 inline-block text-white text-center uppercase flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center self-center",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          alt: "+",
          src: _public_plus_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
          className: "m-auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FancyButton);

/***/ }),

/***/ "./components/Buttons/index.js":
/*!*************************************!*\
  !*** ./components/Buttons/index.js ***!
  \*************************************/
/*! exports provided: FancyButton, ConnectWalletButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FancyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FancyButton */ "./components/Buttons/FancyButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FancyButton", function() { return _FancyButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ConnectWalletButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectWalletButton */ "./components/Buttons/ConnectWalletButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectWalletButton", function() { return _ConnectWalletButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/Community/Community.js":
/*!*******************************************!*\
  !*** ./components/Community/Community.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_Github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/Github.svg */ "./public/Github.svg");
/* harmony import */ var _public_Github_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_Github_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_Telegram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Telegram.svg */ "./public/Telegram.svg");
/* harmony import */ var _public_Telegram_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_Telegram_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_Twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/Twitter.svg */ "./public/Twitter.svg");
/* harmony import */ var _public_Twitter_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_Twitter_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_MediumJoin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/MediumJoin.svg */ "./public/MediumJoin.svg");
/* harmony import */ var _public_MediumJoin_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_MediumJoin_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Community\\Community.js";







const JoinButton = ({
  logo,
  url,
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "m-1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: url,
      title: title,
      className: "bg-backgroundButton tracking-wide text-gray-800 hover:bg-gray-800 font-bold py-4 px-4 inline-flex items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: logo,
        alt: "logo",
        className: "mx-auto w-6 h-6 md:w-12 md:h-12 min-h-full min-w-full max-w-full max-h-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

const Community = () => {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('home');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center justify-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-5 md:p-8 mx-2 sm:p-5 text-center mt-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_6__["DeltaTitleH1"], {
          children: t('joinTheCommunity')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap mt-2 md:mt-4 justify-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinButton, {
            url: "https://twitter.com/Delta_Token",
            title: "Twitter",
            logo: _public_Twitter_svg__WEBPACK_IMPORTED_MODULE_4___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinButton, {
            url: "https://t.me/Delta_Financial",
            title: "Telegram",
            logo: _public_Telegram_svg__WEBPACK_IMPORTED_MODULE_3___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinButton, {
            url: "https://medium.com/delta-financial",
            title: "Medium",
            logo: _public_MediumJoin_svg__WEBPACK_IMPORTED_MODULE_5___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoinButton, {
            url: "https://github.com/Delta-Financial",
            title: "Github",
            logo: _public_Github_svg__WEBPACK_IMPORTED_MODULE_2___default.a
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Community);

/***/ }),

/***/ "./components/Community/index.js":
/*!***************************************!*\
  !*** ./components/Community/index.js ***!
  \***************************************/
/*! exports provided: Community */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Community */ "./components/Community/Community.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Community", function() { return _Community__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Hero/Hero.js":
/*!*********************************!*\
  !*** ./components/Hero/Hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Hero\\Hero.js";

const Hero = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pt-10 pb-10 mt-3 md:mt-20 text-gray-900 leading-none",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-6xl font-wulkan",
      children: "Delta Has Launched!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-8 text-lg text-left w-full md:w-6/12",
      children: "The Limited Staking Window has successfully come to an end. Delta is now tradable on Uniswap, the rLP tokens are claimable and the Deep Farming Vault is producing yield! Make sure to claim and stake your rLP to earn yield from the Deep Farming Vault."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Hero/index.js":
/*!**********************************!*\
  !*** ./components/Hero/index.js ***!
  \**********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./components/Hero/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Input/TokenInput.js":
/*!****************************************!*\
  !*** ./components/Input/TokenInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @windmill/react-ui */ "@windmill/react-ui");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _Button_TransactionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/TransactionButton */ "./components/Button/TransactionButton.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Input\\TokenInput.js";








const TokenInput = ({
  token,
  allowanceRequiredFor,
  buttonText,
  buttonTextLoading,
  labelBottom,
  labelBottomClassName = '',
  onOk,
  className,
  transactionButtonUnder,
  transactionButtonNoBorders,
  disableTransactionWhenInvalid,
  disabled = false
}) => {
  const {
    0: amountText,
    1: setAmountText
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: amount,
    1: setAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: validAmount,
    1: setValidAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);
  const {
    balance
  } = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useTokenBalance"])(token);
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_7__["ModalContext"]);
  const tokenAddress = _config__WEBPACK_IMPORTED_MODULE_4__["addressMap"][token];
  const tokenInfo = _config__WEBPACK_IMPORTED_MODULE_4__["tokenMap"][tokenAddress];

  if (!tokenInfo) {
    throw new Error(`${token} doesn't exist within tokenMap`);
  }

  const onBeforeOk = async () => {
    let amountBN;

    if (amount) {
      try {
        amountBN = ethers__WEBPACK_IMPORTED_MODULE_1__["ethers"].utils.parseUnits(amount.toString(), tokenInfo.decimals);
      } catch (e) {
        throw new Error(`Error converting float number to bignumber, ${e.message}`);
      }
    }

    const valid = validAmount && amount;

    if (!valid) {
      await modalContext.showError('Invalid Amount', 'The specified token amount is invalid');
    } else {
      onOk(amount, amountBN);
    }
  };

  const setValidatedAmount = amount => {
    if (amount > balance || amount < 0 || Number.isNaN(amount) || amount === 0) {
      setValidAmount(false);
    } else if (amount > 0) {
      setValidAmount(true);
      setAmount(amount);
    }
  };

  const onMaxAmount = () => {
    setAmountText(balance);
    setValidatedAmount(balance);
  };

  const onAmountChanged = e => {
    const text = e.target.value.trim();
    setAmountText(text);
    setValidAmount(true);

    if (text.trim() === '') {
      setAmount(false);
      return;
    }

    const potentialAmount = parseFloat(e.target.value);
    setValidatedAmount(potentialAmount);
  };

  const renderInput = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-white flex border border-black",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            disabled: disabled,
            type: "number",
            value: amountText,
            placeholder: "0.00",
            onChange: onAmountChanged,
            valid: validAmount,
            className: "border-transparent text-xl border-b border-black flex-grow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pr-3 text-sm self-end mb-3",
          children: tokenInfo.friendlyName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined)
    }, void 0, false);
  };

  const renderHelpers = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["HelperText"], {
        className: `${validAmount ? 'hidden' : ''} text-sm block`,
        valid: false,
        children: "The amount is not valid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["HelperText"], {
        className: `text-sm block ${labelBottomClassName}`,
        children: labelBottom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined)]
    }, void 0, true);
  };

  const renderMaxButton = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-1 border border-black ml-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: disabled,
        onClick: () => onMaxAmount(),
        className: "bg-gray-400 h-full ring-pink-300 ring-inset focus:bg-gray-400",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "uppercase",
          children: "max"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 12
    }, undefined);
  };

  const renderTransactionButton = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_TransactionButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: `flex ${!transactionButtonNoBorders ? 'md:p-1 md:border md:border-black' : ''} flex-grow ${transactionButtonUnder ? 'md:block text-right' : ''}`,
      allowanceRequiredFor: allowanceRequiredFor,
      text: buttonText,
      textLoading: buttonTextLoading,
      secondaryLooks: true,
      disabled: disabled || disableTransactionWhenInvalid && !(validAmount && amount),
      onClick: onBeforeOk
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: className,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex",
            children: [renderInput(), renderMaxButton(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `ml-1 hidden ${!transactionButtonUnder ? 'md:flex' : ''}`,
              children: renderTransactionButton()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, undefined), renderHelpers()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `mt-4 ${!transactionButtonUnder ? 'md:hidden' : ''}`,
      children: renderTransactionButton()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TokenInput);

/***/ }),

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: TokenInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokenInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokenInput */ "./components/Input/TokenInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenInput", function() { return _TokenInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/LSWStaking/LSWStaking.js":
/*!*********************************************!*\
  !*** ./components/LSWStaking/LSWStaking.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProgressBar */ "./components/ProgressBar/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _Button_TransactionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/TransactionButton */ "./components/Button/TransactionButton.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/GlobalHooks */ "./contexts/GlobalHooks/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\LSWStaking\\LSWStaking.js";

/* eslint-disable react/no-danger */











const LSWStaking = () => {
  const yam = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useYam"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])();
  const globalHooks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_10__["GlobalHooksContext"]);
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_8__["ModalContext"]);

  const onClaim = async stake => {
    const claimToWallet = !stake;
    const transaction = await yam.contracts.LSW.methods.claimOrStakeAndClaimLP(claimToWallet);
    const transactionTitle = stake ? 'Claiming and staking...' : 'Claiming...';
    const successMessage = stake ? 'Your rLP tokens have been claimed and staked. You can see them displayed on the main page' : 'Your rLP tokens have been claimed and there are now available in your wallet';
    await _helpers__WEBPACK_IMPORTED_MODULE_4__["transactions"].executeTransaction(modalContext, transaction, {
      from: wallet.account
    }, successMessage, 'Success', 'Claiming Error', transactionTitle);
    globalHooks.lswStats.update();
    return Promise.resolve();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaSection"], {
    title: "Limited Staking Window is closed",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaPanel"], {
      className: "mt-2 md:mt-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["ProgressBarCountDown"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center mt-6 text-2xl",
        children: [Math.round(globalHooks.lswStats.data.totalEthContributed).toFixed(0).toLocaleString(), " ETH contributed!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaPanel"], {
      requiresConnectedWallet: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "list-disc list-inside pt-6 pb-4 md:pb-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["You Contributed: ", _helpers__WEBPACK_IMPORTED_MODULE_4__["formatting"].getTokenAmount(globalHooks.lswStats.data.accountContributedEth, 0, 6), " ETH"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["rLP to be claimed: ", _helpers__WEBPACK_IMPORTED_MODULE_4__["formatting"].getTokenAmount(globalHooks.lswStats.data.claimableRlp, 0, 6), " rLP"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaPanel"], {
        className: "flex items-center text-center flex-wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_TransactionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "flex-1 mr-2 md:mr-0 md:flex-grow-0",
          text: "Claim & Stake",
          textLoading: "Staking...",
          onClick: () => onClaim(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_TransactionButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "flex-1 ml-2 md:ml-4 md:flex-grow-0",
          text: "Claim",
          textLoading: "Claiming...",
          onClick: () => onClaim(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LSWStaking);

/***/ }),

/***/ "./components/LSWStaking/index.js":
/*!****************************************!*\
  !*** ./components/LSWStaking/index.js ***!
  \****************************************/
/*! exports provided: LSWStaking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LSWStaking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LSWStaking */ "./components/LSWStaking/LSWStaking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LSWStaking", function() { return _LSWStaking__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Layout/MainLayout.js":
/*!*****************************************!*\
  !*** ./components/Layout/MainLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Community */ "./components/Community/index.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBar */ "./components/NavBar/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Layout\\MainLayout.js";





const MainLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
      title: "DELTA Financial",
      description: "Deep DeFi Derivatives.",
      canonical: "https://www.delta.financial/",
      openGraph: {
        url: 'https://www.delta.financial/',
        title: 'DELTA Financial',
        description: 'Deep DeFi Derivatives.',
        // images: [
        //   {
        //     url: 'https://www.example.ie/og-image-01.jpg',
        //     width: 800,
        //     height: 600,
        //     alt: 'Og Image Alt',
        //   },
        //   {
        //     url: 'https://www.example.ie/og-image-02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //   },
        //   { url: 'https://www.example.ie/og-image-03.jpg' },
        //   { url: 'https://www.example.ie/og-image-04.jpg' },
        // ],
        site_name: 'DELTA'
      },
      twitter: {
        handle: '@Delta_Token',
        site: '@Delta_Token',
        cardType: 'summary_large_image'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#000000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/android-chrome-192x192.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "msapplication-TileColor",
        content: "#000000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#ffffff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preload",
        href: "/fonts/Wulkan/Wulkan-Display-Medium.woff",
        as: "font",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preload",
        href: "/fonts/Wulkan/Wulkan-Display-Medium.woff",
        as: "font",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preload",
        href: "/fonts/GT-America/GT-America-Standard-Regular.woff",
        as: "font",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preload",
        href: "/fonts/GT-America/GT-America-Standard-Regular.woff2",
        as: "font",
        crossOrigin: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavBar__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full flex justify-center flex-col",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full flex flex-col max-w-6xl self-center p-2 md:p-6",
        children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Community__WEBPACK_IMPORTED_MODULE_3__["Community"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainLayout */ "./components/Layout/MainLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return _MainLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/NavBar/NavBar.js":
/*!*************************************!*\
  !*** ./components/NavBar/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _public_HeaderLogo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/HeaderLogo.svg */ "./public/HeaderLogo.svg");
/* harmony import */ var _public_HeaderLogo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_HeaderLogo_svg__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\NavBar\\NavBar.js";







const NavBar = () => {
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_3__["useWallet"])();
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_5__["ModalContext"]);
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('home');
  const {
    0: menuVisible,
    1: setMenuVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const renderMenuItems = () => {
    const getStyle = href => {
      const baseStyle = 'block px-3 py-2 rounded-none text-small font-medium ';

      if (router.pathname === href) {
        return `${baseStyle} bg-gray-700 text-white`;
      }

      return `${baseStyle} text-gray-300 block  hover:text-white hover:bg-gray-700`;
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/",
        className: getStyle('/'),
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/vaults",
        className: getStyle('/vaults'),
        children: "Vaults"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/contracts",
        className: getStyle('/contracts'),
        children: "Withdrawal Contracts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, undefined)]
    }, void 0, true);
  };

  const renderConnectWalletButton = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: () => {
          if (!(wallet === null || wallet === void 0 ? void 0 : wallet.account)) {
            modalContext.showConnectWallet();
          } else {
            wallet.reset();
          }
        },
        className: "uppercase text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-none text-small font-medium",
        children: (wallet === null || wallet === void 0 ? void 0 : wallet.account) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: t('disconnect')
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: t('connectWallet')
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, undefined)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "bg-black uppercase",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center justify-between h-16",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  alt: "logo",
                  src: _public_HeaderLogo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
                  height: "150",
                  width: "150",
                  className: "w-8/12 md:w-full"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hidden md:block",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-10 flex items-baseline space-x-4",
                children: renderMenuItems()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-4 flex items-center md:ml-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ml-3 relative",
                children: renderConnectWalletButton()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "-mr-2 flex md:hidden",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: () => setMenuVisible(m => !m),
              type: "button",
              className: "bg-black inline-flex items-center justify-center p-2 rounded-none text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-black",
              "aria-controls": "mobile-menu",
              "aria-expanded": "false",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Open main menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "block h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                className: "hidden h-6 w-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `md:hidden ${!menuVisible ? 'hidden' : ''}`,
        id: "mobile-menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
          children: renderMenuItems()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-4 pb-3 border-t border-gray-700",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-2",
              children: renderConnectWalletButton()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/NavBar/index.js":
/*!************************************!*\
  !*** ./components/NavBar/index.js ***!
  \************************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar/NavBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ProgressBar/ProgressBarCountDown.js":
/*!********************************************************!*\
  !*** ./components/ProgressBar/ProgressBarCountDown.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\ProgressBar\\ProgressBarCountDown.js";

const ProgressBarCountDown = ({
  progress = 100
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "m-auto",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " border border-black p-1 md:p-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full bg-backgroundLightPurple min-h-8 md:min-h-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gradient-to-r from-gradiantBlue to-gradiantPurple leading-none h-8 md:h-12",
          style: {
            width: `${progress}%`
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBarCountDown);

/***/ }),

/***/ "./components/ProgressBar/ProgressBarDiamonds.js":
/*!*******************************************************!*\
  !*** ./components/ProgressBar/ProgressBarDiamonds.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\ProgressBar\\ProgressBarDiamonds.js";


const ProgressBarDiamonds = ({
  className,
  small,
  value,
  minValue = 1,
  maxValue = 10
}) => {
  const {
    0: rightDiamongPositionStyle,
    1: setRightDiamongPositionStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const limitedValue = Math.min(Math.max(minValue, value), maxValue);
    const percent = 1 - limitedValue / maxValue;
    setRightDiamongPositionStyle({
      marginRight: `calc(0.75rem + ${percent * 100}%)`,
      visibility: limitedValue === minValue ? 'hidden' : 'visible'
    });
  }, [value]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `m-auto text-center ${className}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full flex border border-black p-1.5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `flex w-full bg-gradient-to-r from-gradiantGreen1 to-gradiantGreen2 leading-none h-12 ${!small ? 'md:h-16' : ''}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `ml-4 flex bg-white border border-diamondGreen m-auto transform -rotate-45 min-max-wh-px32 ${!small ? 'md:min-max-wh-px45' : ''}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "transform rotate-45 text-xs self-center m-auto",
            children: [minValue, "x"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "border-t w-full border-white border-dashed self-center mt-px flex-grow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `flex bg-diamondGreen border border-white m-auto transform -rotate-45 min-max-wh-px32 ${!small ? 'md:min-max-wh-px45' : ''}`,
          style: rightDiamongPositionStyle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "transform rotate-45 text-xs self-center m-auto text-white",
            children: [Math.min(Math.max(minValue, value), maxValue), "x"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBarDiamonds);

/***/ }),

/***/ "./components/ProgressBar/VestingTransactionProgressBar.js":
/*!*****************************************************************!*\
  !*** ./components/ProgressBar/VestingTransactionProgressBar.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\ProgressBar\\VestingTransactionProgressBar.js";

const VestingTransactionProgressBar = ({
  transaction
}) => {
  const percentMature = transaction.percentVested * 100;
  const percentImmature = (1 - transaction.percentVested) * 100;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full flex min-h-6 border border-black p-1 text-xs",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex bg-gradiantBlue leading-none h-6 w-full mr-0.5 text-left text-white",
      style: {
        width: `${percentMature}%`
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-1 md:ml-1 self-center",
        children: [percentMature.toFixed(0), "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, undefined), percentMature < 100 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex bg-gradient-to-r from-gradientPink to-gradientPink2 leading-none h-6 w-full text-left text-white",
      style: {
        width: `${percentImmature}%`
      },
      children: percentMature <= 90 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-1 md:ml-1 self-center",
        children: [percentImmature.toFixed(0), "%"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 31
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 29
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (VestingTransactionProgressBar);

/***/ }),

/***/ "./components/ProgressBar/index.js":
/*!*****************************************!*\
  !*** ./components/ProgressBar/index.js ***!
  \*****************************************/
/*! exports provided: VestingTransactionProgressBar, ProgressBarCountDown, ProgressBarDiamonds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VestingTransactionProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VestingTransactionProgressBar */ "./components/ProgressBar/VestingTransactionProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VestingTransactionProgressBar", function() { return _VestingTransactionProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProgressBarCountDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBarCountDown */ "./components/ProgressBar/ProgressBarCountDown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarCountDown", function() { return _ProgressBarCountDown__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProgressBarDiamonds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBarDiamonds */ "./components/ProgressBar/ProgressBarDiamonds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDiamonds", function() { return _ProgressBarDiamonds__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/Rebasing/Rebasing.js":
/*!*****************************************!*\
  !*** ./components/Rebasing/Rebasing.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProgressBar */ "./components/ProgressBar/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _Button_TransactionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button/TransactionButton */ "./components/Button/TransactionButton.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/GlobalHooks */ "./contexts/GlobalHooks/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Rebasing\\Rebasing.js";

/* eslint-disable react/no-danger */










const REFRESH_RATE = 1 * 60 * 1000;

const Rebasing = () => {
  const yam = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useYam"])();
  const globalHooks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_8__["GlobalHooksContext"]);
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_7__["ModalContext"]);
  const {
    0: timeLeftUntilNextRebase,
    1: setTimeLeftUntilNextRebase
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    days: _config__WEBPACK_IMPORTED_MODULE_9__["DATA_UNAVAILABLE"],
    hours: _config__WEBPACK_IMPORTED_MODULE_9__["DATA_UNAVAILABLE"],
    minutes: _config__WEBPACK_IMPORTED_MODULE_9__["DATA_UNAVAILABLE"]
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const update = () => {
      setTimeLeftUntilNextRebase(_helpers__WEBPACK_IMPORTED_MODULE_10__["time"].getTimeLeft(globalHooks.rebasing.rebasingInfo.nextRebaseTimestamp));
    };

    if (globalHooks.rebasing.rebasingInfo.nextRebaseTimestamp !== _config__WEBPACK_IMPORTED_MODULE_9__["DATA_UNAVAILABLE"]) {
      update();
    }

    const interval = setInterval(update, REFRESH_RATE);
    return () => clearInterval(interval);
  }, [globalHooks.rebasing.rebasingInfo.nextRebaseTimestamp]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaSection"], {
    requiresConnectedWallet: true,
    title: "Rebasing is Soon",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["ProgressBarCountDown"], {
        progress: 70
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center mt-2 md:mt-4 text-lg",
        children: [timeLeftUntilNextRebase.days, " Day(s) ", timeLeftUntilNextRebase.hours, " Hour(s) ", timeLeftUntilNextRebase.minutes, " Minute(s)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-4 md:w-6/12",
      children: ["Liquidity Rebasing happens daily,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 40
      }, undefined), "increasing the mint price of rLP by 10%."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Rebasing);

/***/ }),

/***/ "./components/Rebasing/index.js":
/*!**************************************!*\
  !*** ./components/Rebasing/index.js ***!
  \**************************************/
/*! exports provided: Rebasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rebasing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rebasing */ "./components/Rebasing/Rebasing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rebasing", function() { return _Rebasing__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ReferralProgram/ReferralProgram.js":
/*!*******************************************************!*\
  !*** ./components/ReferralProgram/ReferralProgram.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! victory */ "victory");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Buttons */ "./components/Buttons/index.js");
/* harmony import */ var _hooks_useReferralRewardsChartData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useReferralRewardsChartData */ "./hooks/useReferralRewardsChartData.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _Button_TransactionButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button/TransactionButton */ "./components/Button/TransactionButton.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");
/* harmony import */ var _contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../contexts/GlobalHooks */ "./contexts/GlobalHooks/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\ReferralProgram\\ReferralProgram.js";

/* eslint-disable react/no-danger */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
















const ReferralProgram = () => {
  const yam = Object(_hooks__WEBPACK_IMPORTED_MODULE_12__["useYam"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_3__["useWallet"])();
  const globalHooks = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_15__["GlobalHooksContext"]);
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_13__["ModalContext"]);
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('home');
  const chartData = Object(_hooks_useReferralRewardsChartData__WEBPACK_IMPORTED_MODULE_9__["default"])();

  const onClaim = async () => {
    const transaction = await yam.contracts.LSW.methods.getWETHBonusForReferrals();

    try {
      const transactionGasEstimate = await transaction.estimateGas({
        from: wallet.account
      });
      const transactionMessage = modalContext.showControlledMessage('Claiming...', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_14__["Spinner"], {
        label: "Transaction in progress..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 84
      }, undefined));
      await transaction.send({
        from: wallet.account,
        gas: transactionGasEstimate
      });
      transactionMessage.close();
      globalHooks.lswStats.update();
      await modalContext.showMessage('Success', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-lg",
          children: "Your bonus has been claimed and is now available in your wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }, undefined)
      }, void 0, false));
    } catch (error) {
      const decodedError = _helpers__WEBPACK_IMPORTED_MODULE_7__["errors"].getTransactionError(error, 'An error occured while claiming');
      console.log(decodedError);
      return modalContext.showError('Claiming Error', decodedError.message);
    }

    return Promise.resolve();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaSection"], {
    requiresConnectedWallet: true,
    title: "Delta Referral Program",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaPanel"], {
      className: "md:mt-0",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:mt-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:hidden",
          children: ["The Delta Referral Program has ended.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 48
          }, undefined), "You can claim your rewards below."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col md:flex-row-reverse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_6__["DeltaTitleH3"], {
              className: "mt-8 md:mt-0",
              children: "Your Referral Rewards"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, undefined), globalHooks.lswStats.data.referralBonusWETH !== _config__WEBPACK_IMPORTED_MODULE_10__["DATA_UNAVAILABLE"] && globalHooks.lswStats.data.referralBonusWETH > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                style: {
                  height: 0
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
                    id: "chartGradient",
                    x1: "0%",
                    x2: "0%",
                    y1: "0%",
                    y2: "100%",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                      offset: "0%",
                      stopColor: "#2F45C5",
                      stopOpacity: "1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                      offset: "100%",
                      stopColor: "#2F45C5",
                      stopOpacity: "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(victory__WEBPACK_IMPORTED_MODULE_4__["VictoryChart"], {
                padding: 34,
                width: 400,
                height: 300,
                scale: {
                  x: "time",
                  y: "linear"
                },
                minDomain: {
                  y: 0
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(victory__WEBPACK_IMPORTED_MODULE_4__["VictoryGroup"], {
                  style: {
                    data: {
                      strokeWidth: 1,
                      fillOpacity: 0.5
                    }
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(victory__WEBPACK_IMPORTED_MODULE_4__["VictoryArea"], {
                    style: {
                      data: {
                        fill: "url(#chartGradient)",
                        stroke: "#2F45C5"
                      }
                    },
                    x: d => new Date(d.date),
                    y: "referralBonusWETH",
                    data: chartData.data
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaPanel"], {
            className: "mt-8 md:mt-0",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "hidden md:block",
              children: ["The Delta Referral Program has ended.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 52
              }, undefined), "You can claim your rewards below."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-0 md:mt-8",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_6__["DeltaTitleH3"], {
                children: "Your Referral Bonus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: "list-disc list-inside py-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: ["ETH earned: ", _helpers__WEBPACK_IMPORTED_MODULE_7__["formatting"].getTokenAmount(globalHooks.lswStats.data.referralBonusWETH, 0, 8)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: ["Credit earned: ", _helpers__WEBPACK_IMPORTED_MODULE_7__["formatting"].getTokenAmount(globalHooks.lswStats.data.referralBonusWETH, 0, 8)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_5__["DeltaPanel"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_TransactionButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  text: "Claim Bonus",
                  textLoading: "Claiming...",
                  onClick: () => onClaim()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReferralProgram);

/***/ }),

/***/ "./components/ReferralProgram/index.js":
/*!*********************************************!*\
  !*** ./components/ReferralProgram/index.js ***!
  \*********************************************/
/*! exports provided: ReferralProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReferralProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReferralProgram */ "./components/ReferralProgram/ReferralProgram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferralProgram", function() { return _ReferralProgram__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Section/DeltaPanel.js":
/*!******************************************!*\
  !*** ./components/Section/DeltaPanel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Buttons */ "./components/Buttons/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Section\\DeltaPanel.js";



const DeltaPanel = ({
  children,
  className,
  requiresConnectedWallet
}) => {
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])();

  const renderContent = () => {
    if (requiresConnectedWallet && !(wallet === null || wallet === void 0 ? void 0 : wallet.account)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_2__["ConnectWalletButton"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 14
      }, undefined);
    }

    return children;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `${className || ''} w-full`,
    children: renderContent()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaPanel);

/***/ }),

/***/ "./components/Section/DeltaSection.js":
/*!********************************************!*\
  !*** ./components/Section/DeltaSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_chevron_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/chevron.svg */ "./public/chevron.svg");
/* harmony import */ var _public_chevron_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_chevron_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Buttons */ "./components/Buttons/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Section\\DeltaSection.js";





const DeltaSection = ({
  title,
  children,
  showConnectWalletButton,
  requiresConnectedWallet,
  center
}) => {
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])();

  const renderContent = () => {
    if (requiresConnectedWallet && !(wallet === null || wallet === void 0 ? void 0 : wallet.account)) {
      if (showConnectWalletButton) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons__WEBPACK_IMPORTED_MODULE_4__["ConnectWalletButton"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 16
        }, undefined);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
    }

    return children;
  };

  if (requiresConnectedWallet && !(wallet === null || wallet === void 0 ? void 0 : wallet.account) && !showConnectWalletButton) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full border-2 mt-4 border-black py-4 px-3 md:py-8 md:px-12 m-auto",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex py-2 md:py-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_3__["DeltaTitleH1"], {
          className: `${center && "md:text-center"}`,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "ml-4 self-start",
          src: _public_chevron_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
          alt: "chevron"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, undefined), renderContent()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaSection);

/***/ }),

/***/ "./components/Section/DeltaSectionBox.js":
/*!***********************************************!*\
  !*** ./components/Section/DeltaSectionBox.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeltaPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeltaPanel */ "./components/Section/DeltaPanel.js");
/* harmony import */ var _public_chevron_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/chevron.svg */ "./public/chevron.svg");
/* harmony import */ var _public_chevron_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_chevron_svg__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Section\\DeltaSectionBox.js";




const DeltaSectionBox = ({
  index,
  indexFormatter,
  showIndex,
  opened,
  title,
  className = '',
  children,
  onOpen
}) => {
  indexFormatter = indexFormatter || (i => i);

  if (opened === undefined) {
    opened = true;
  }

  const {
    0: isOpened,
    1: setIsOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(opened);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsOpened(opened);
  }, [opened]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (onOpen && isOpened) {
      onOpen(index);
    }
  }, [isOpened]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: className,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeltaPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "border text-sm border-black",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row cursor-pointer",
        onClick: () => setIsOpened(o => !o),
        "aria-hidden": "true",
        children: [index !== undefined && showIndex && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex px-4 border-r border-white bg-gray-300 self-stretch",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex self-center",
            children: ["#", indexFormatter(index)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 46
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-grow p-2 md:p-4 bg-gray-300",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "uppercase flex-grow",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: `ml-4 self-center ${!isOpened ? 'transform rotate-180' : ''}`,
            src: _public_chevron_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
            alt: "chevron",
            width: "16px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `p-1 md:p-4 ${!isOpened ? 'hidden' : ''}`,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaSectionBox);

/***/ }),

/***/ "./components/Section/index.js":
/*!*************************************!*\
  !*** ./components/Section/index.js ***!
  \*************************************/
/*! exports provided: DeltaSection, DeltaPanel, DeltaSectionBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeltaSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeltaSection */ "./components/Section/DeltaSection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaSection", function() { return _DeltaSection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DeltaPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeltaPanel */ "./components/Section/DeltaPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaPanel", function() { return _DeltaPanel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DeltaSectionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeltaSectionBox */ "./components/Section/DeltaSectionBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaSectionBox", function() { return _DeltaSectionBox__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/Spinner/Spinner.js":
/*!***************************************!*\
  !*** ./components/Spinner/Spinner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Spinner\\Spinner.js";

const Spinner = ({
  label,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `inline-block ${className || ''}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      className: "animate-spin -ml-1 h-5 w-5 mr-2 text-gray-500 inline-block",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inline-block relative top-px text-lg",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Spinner/index.js":
/*!*************************************!*\
  !*** ./components/Spinner/index.js ***!
  \*************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner/Spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Title/DeltaTitle.js":
/*!****************************************!*\
  !*** ./components/Title/DeltaTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Title\\DeltaTitle.js";

const DeltaTitle = ({
  children,
  className,
  center
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `${center && "text-center"} flex-grow font-wulkan ${className || ''}`,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaTitle);

/***/ }),

/***/ "./components/Title/DeltaTitleH1.js":
/*!******************************************!*\
  !*** ./components/Title/DeltaTitleH1.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeltaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeltaTitle */ "./components/Title/DeltaTitle.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Title\\DeltaTitleH1.js";


const DeltaTitleH1 = ({
  children,
  className,
  center
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeltaTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    center: center,
    className: `text-2xl md:text-4xl ${className || ''}`,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaTitleH1);

/***/ }),

/***/ "./components/Title/DeltaTitleH2.js":
/*!******************************************!*\
  !*** ./components/Title/DeltaTitleH2.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeltaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeltaTitle */ "./components/Title/DeltaTitle.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Title\\DeltaTitleH2.js";


const DeltaTitleH2 = ({
  children,
  className,
  center,
  lineunder
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeltaTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    center: center,
    className: `text-xl md:text-3xl ${lineunder ? 'border-b border-black pb-2' : ''} ${className || ''}`,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaTitleH2);

/***/ }),

/***/ "./components/Title/DeltaTitleH3.js":
/*!******************************************!*\
  !*** ./components/Title/DeltaTitleH3.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeltaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeltaTitle */ "./components/Title/DeltaTitle.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Title\\DeltaTitleH3.js";


const DeltaTitleH3 = ({
  children,
  className,
  center
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeltaTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    center: center,
    className: `text-xl md:text-2xl ${className || ''}`,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaTitleH3);

/***/ }),

/***/ "./components/Title/DeltaTitleH4.js":
/*!******************************************!*\
  !*** ./components/Title/DeltaTitleH4.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeltaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeltaTitle */ "./components/Title/DeltaTitle.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Title\\DeltaTitleH4.js";


const DeltaTitleH4 = ({
  children,
  className,
  center
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeltaTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    center: center,
    className: `text-lg md:text-xl ${className || ''}`,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeltaTitleH4);

/***/ }),

/***/ "./components/Title/index.js":
/*!***********************************!*\
  !*** ./components/Title/index.js ***!
  \***********************************/
/*! exports provided: DeltaTitle, DeltaTitleH1, DeltaTitleH2, DeltaTitleH3, DeltaTitleH4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeltaTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeltaTitle */ "./components/Title/DeltaTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaTitle", function() { return _DeltaTitle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DeltaTitleH1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeltaTitleH1 */ "./components/Title/DeltaTitleH1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaTitleH1", function() { return _DeltaTitleH1__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DeltaTitleH2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeltaTitleH2 */ "./components/Title/DeltaTitleH2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaTitleH2", function() { return _DeltaTitleH2__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DeltaTitleH3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeltaTitleH3 */ "./components/Title/DeltaTitleH3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaTitleH3", function() { return _DeltaTitleH3__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DeltaTitleH4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeltaTitleH4 */ "./components/Title/DeltaTitleH4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeltaTitleH4", function() { return _DeltaTitleH4__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./components/Vesting/Vesting.js":
/*!***************************************!*\
  !*** ./components/Vesting/Vesting.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! victory */ "victory");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(victory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @windmill/react-ui */ "@windmill/react-ui");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProgressBar */ "./components/ProgressBar/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/GlobalHooks */ "./contexts/GlobalHooks/index.js");
/* harmony import */ var _Button_DeltaButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button/DeltaButton */ "./components/Button/DeltaButton.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Input */ "./components/Input/index.js");
/* harmony import */ var _Button_TransactionButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Button/TransactionButton */ "./components/Button/TransactionButton.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Vesting\\Vesting.js";













const FULLY_VESTING_REFRESH_RATE = 1 * 60 * 1000;

const Vesting = () => {
  const {
    0: fullyVestedAtInfo,
    1: setFullyVestedAtInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_config__WEBPACK_IMPORTED_MODULE_8__["DATA_UNAVAILABLE"]);
  const {
    0: transactionDetailsVisible,
    1: setTransactionDetailsVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_13__["ModalContext"]);
  const chartWidth = 400;
  const globalHooks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_9__["GlobalHooksContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const update = () => {
      if (globalHooks.delta.data.vestingInProgress) {
        const timeLeft = _helpers__WEBPACK_IMPORTED_MODULE_6__["time"].getTimeLeft(globalHooks.delta.data.fullyVestedAt);
        setFullyVestedAtInfo(timeLeft);
      } else {
        setFullyVestedAtInfo(_config__WEBPACK_IMPORTED_MODULE_8__["DATA_UNAVAILABLE"]);
      }
    };

    if (globalHooks.delta.data.fullyVestedAt !== _config__WEBPACK_IMPORTED_MODULE_8__["DATA_UNAVAILABLE"]) {
      update();
    }

    const interval = setInterval(update, FULLY_VESTING_REFRESH_RATE);
    return () => clearInterval(interval);
  }, [globalHooks.delta.data.fullyVestedAt]);

  const onToggleTransactionDetails = () => {
    setTransactionDetailsVisible(transactionDetailsVisible => !transactionDetailsVisible);
  };

  const renderVestingTransactions = () => {
    const {
      0: currentOpened,
      1: setCurrentOpened
    } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);

    const renderTransaction = (tx, index, opened) => {
      tx.index = index;
      const vestingTimeLeft = _helpers__WEBPACK_IMPORTED_MODULE_6__["time"].getTimeLeft(tx.fullVestingTimestamp);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-left mt-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaSectionBox"], {
          opened: opened,
          onOpen: i => setCurrentOpened(i),
          index: index,
          title: `Transaction ${index + 1}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Time until fully matured:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [vestingTimeLeft.days, " Day(s) ", vestingTimeLeft.hours, " Hour(s) ", vestingTimeLeft.minutes, " Minute(s)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProgressBar__WEBPACK_IMPORTED_MODULE_7__["VestingTransactionProgressBar"], {
            transaction: tx
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ml-1 mt-1",
            children: [_helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(tx.mature, 18, 4), " / ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(tx.immature, 18, 4), " mature"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, undefined)
      }, `tx-${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 14
      }, undefined);
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: globalHooks.delta.data.vestingTransactions.filter(tx => tx.amount !== 0).map((tx, index) => renderTransaction(tx, index, index === currentOpened))
    }, void 0, false);
  };

  const renderMyWallet = () => {
    const globalHooks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_9__["GlobalHooksContext"]);

    const onStakeDialog = async () => {
      const onStake = async (amount, amountBN, valid) => {
        if (!valid) {
          await modalContext.showError('Error', 'Invalid input');
        } else {
          const confirmed = await modalContext.showConfirm('Staking', `Are you sure you wanna stake ${amount} delta?`);

          if (confirmed) {
            // TODO: add web3 call, be sure to use amountBN
            // TODO: - MAX Update delta balance using delta hook update function
            globalHooks.delta.update();
          }
        }
      };

      const content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_11__["TokenInput"], {
          className: "mt-4",
          token: "delta",
          buttonText: "Stake",
          buttonTextLoading: "Staking...",
          onOk: onStake
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 23
      }, undefined);

      await modalContext.showMessage('Staking', content, false);
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "list-disc list-inside py-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["Total DELTA: ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(globalHooks.delta.data.total, 0, 4), " DELTA"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["Mature DELTA: ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(globalHooks.delta.data.mature, 0, 4), " DELTA"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["Immature DELTA: ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(globalHooks.delta.data.immature, 0, 4), " DELTA"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
        className: "flex items-center text-center flex-wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_DeltaButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "flex-1 mr-4 md:flex-grow-0",
          labelBottom: "Earn Yield",
          onClick: () => onStakeDialog(),
          children: "Stake in vault"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_DeltaButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "flex-1 md:flex-grow-0",
          labelBottom: "Earn Yield",
          onClick: () => {},
          children: "Trade Delta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 12
    }, undefined);
  };

  const renderRLPStats = () => {
    const globalHooks = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_GlobalHooks__WEBPACK_IMPORTED_MODULE_9__["GlobalHooksContext"]);

    const onStake = async (amount, amountBN, valid) => {
      if (!valid) {
        await modalContext.showError('Error', 'Invalid input');
      } else {
        const confirmed = await modalContext.showConfirm('Staking', `Are you sure you wanna stake ${amount} rLP?`);

        if (confirmed) {
          // TODO: add web3 call
          // TODO: - MAX call the staking update method and user rLP balance
          globalHooks.staking.update();
          globalHooks.delta.update();
        }
      }
    };

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "list-disc list-inside py-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["Total rLP: ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(globalHooks.rlpInfo.balance + globalHooks.staking.rlpInfo.amountStaked, 0, 4), " rLP"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["Unstaked rLP: ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(globalHooks.rlpInfo.balance, 0, 4), " rLP"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["Staked rLP: ", _helpers__WEBPACK_IMPORTED_MODULE_6__["formatting"].getTokenAmount(globalHooks.staking.rlpInfo.amountStaked, 0, 4), " rLP"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_11__["TokenInput"], {
        className: "mt-4",
        token: "rLP",
        buttonText: "Stake",
        buttonTextLoading: "Staking...",
        onOk: onStake
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 12
    }, undefined);
  };

  const renderChart = () => {
    if (globalHooks.lswStats.data.referralBonusWETH === _config__WEBPACK_IMPORTED_MODULE_8__["DATA_UNAVAILABLE"] || globalHooks.lswStats.data.referralBonusWETH <= 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        viewBox: "0 40 400 370",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
            id: "chartGradient2",
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "100%",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
              offset: "0%",
              stopColor: "#DB77EB",
              stopOpacity: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
              offset: "100%",
              stopColor: "#DBC9D6",
              stopOpacity: "0.5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryPie"], {
          standalone: false,
          width: chartWidth,
          height: 400,
          style: {
            labels: {
              fill: f => f.datum.x === "mature" ? 'white' : 'black'
            },
            data: {
              fill: f => f.datum.x === "mature" ? '#4315C7' : "url(#chartGradient2)",
              fillOpacity: 1,
              stroke: "black",
              strokeWidth: 0
            }
          },
          colorScale: ["#4315C7", "#9E9E9E"],
          categories: {
            x: ["mature", "immature"]
          },
          innerRadius: 115,
          labelRadius: 123,
          labels: ({
            datum
          }) => `${(datum.y * 100).toFixed(0)}%`,
          data: [{
            x: "mature",
            y: globalHooks.delta.data.percentVested
          }, {
            x: "immature",
            y: 1.0 - globalHooks.delta.data.percentVested
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryLabel"], {
          className: fullyVestedAtInfo === _config__WEBPACK_IMPORTED_MODULE_8__["DATA_UNAVAILABLE"] ? 'invisible' : 'visible',
          textAnchor: "middle",
          standalone: false,
          x: chartWidth / 2,
          y: 200,
          lineHeight: [1, 1.5, 1.5, 1.5, 1.5],
          style: [{
            fontSize: 18,
            fill: 'black'
          }, {
            fontSize: 18,
            fill: 'black'
          }, {
            fontSize: 14,
            fill: 'black'
          }, {
            fontSize: 14,
            fill: 'black'
          }, {
            fontSize: 14,
            fill: 'black'
          }],
          text: ['Time Until', 'Fully Matured', `${fullyVestedAtInfo.days} days`, `${fullyVestedAtInfo.hours} hours`, `${fullyVestedAtInfo.minutes} minutes`]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(victory__WEBPACK_IMPORTED_MODULE_1__["VictoryLegend"], {
          x: 115,
          y: 380,
          standalone: false,
          title: "",
          centerTitle: true,
          orientation: "horizontal",
          itemsPerRow: 2,
          data: [{
            name: "Mature",
            symbol: {
              type: 'square',
              fill: "#4315C7"
            }
          }, {
            name: "Immature",
            symbol: {
              type: 'square',
              fill: "#DBC9D6"
            }
          }]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 12
    }, undefined);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaSection"], {
    requiresConnectedWallet: true,
    title: "Delta Vesting Schedule",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
      className: "md:mt-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:mt-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col-reverse md:flex-row-reverse",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
            className: "w-full mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_5__["DeltaTitleH3"], {
              children: "Total Delta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 13
            }, undefined), renderChart()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
            className: "mt-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_5__["DeltaTitleH3"], {
              children: "My Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 13
            }, undefined), renderMyWallet(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Title__WEBPACK_IMPORTED_MODULE_5__["DeltaTitleH3"], {
              className: "mt-6",
              children: "rLP Stats"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 13
            }, undefined), renderRLPStats()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
        className: "flex items-center text-center flex-wrap mt-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button_DeltaButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          hidePlus: true,
          lassName: "flex-1 md:flex-none",
          onClick: onToggleTransactionDetails,
          children: !transactionDetailsVisible ? 'See All Transactions ▼' : 'Hide All Transactions ▲'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Section__WEBPACK_IMPORTED_MODULE_4__["DeltaPanel"], {
        className: `${!transactionDetailsVisible ? 'hidden' : ''}`,
        children: renderVestingTransactions()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Vesting);

/***/ }),

/***/ "./components/Vesting/index.js":
/*!*************************************!*\
  !*** ./components/Vesting/index.js ***!
  \*************************************/
/*! exports provided: Vesting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vesting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vesting */ "./components/Vesting/Vesting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vesting", function() { return _Vesting__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: TEMP_ENABLE_END_LSW_WEB3, SUBTRACT_GAS_LIMIT, DEFAULT_CONFIRMATIONS, DEFAULT_GAS, DEFAULT_GAS_PRICE, DATA_UNAVAILABLE, WEB3_PROVIDER_URL, pairNames, addressMap, addressDecimalsMap, tokenMap, pairInfoMap, ethereumStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMP_ENABLE_END_LSW_WEB3", function() { return TEMP_ENABLE_END_LSW_WEB3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBTRACT_GAS_LIMIT", function() { return SUBTRACT_GAS_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIRMATIONS", function() { return DEFAULT_CONFIRMATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GAS", function() { return DEFAULT_GAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GAS_PRICE", function() { return DEFAULT_GAS_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_UNAVAILABLE", function() { return DATA_UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_PROVIDER_URL", function() { return WEB3_PROVIDER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairNames", function() { return pairNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressMap", function() { return addressMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addressDecimalsMap", function() { return addressDecimalsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenMap", function() { return tokenMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairInfoMap", function() { return pairInfoMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ethereumStats", function() { return ethereumStats; });
/* harmony import */ var bignumber_js_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js/bignumber */ "bignumber.js/bignumber");
/* harmony import */ var bignumber_js_bignumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js_bignumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



bignumber_js_bignumber__WEBPACK_IMPORTED_MODULE_0___default.a.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
}); // Temp flag, set to true to use the hardhat node and end_lsw operation.

const TEMP_ENABLE_END_LSW_WEB3 = false;
const SUBTRACT_GAS_LIMIT = 100000;
const DEFAULT_CONFIRMATIONS = 1;
const DEFAULT_GAS = '6000000';
const DEFAULT_GAS_PRICE = '1000000000000';
const DATA_UNAVAILABLE = '--'; // This provider is no longer working and fails with CORS.
// export const WEB3_PROVIDER_URL = 'https://mainnet.eth.aragon.network/';
// Notes:
// - If one endpoint stop working here is a list of endpoint that can be used: https://ethereumnodes.com/
// - Endpoint found from inspecting XHR request from metamask dev mode in google chrome.Could change in
//   the futur and break: https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161

const WEB3_PROVIDER_URL = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const pairNames = {
  deltaWeth: 'deltaWeth',
  coreCbtc: 'coreCbtc',
  coreWeth: 'coreWeth',
  cDaiWcore: 'cDaiWcore',
  ethUsdt: 'ethUsdt',
  wbtcWeth: 'wbtcWeth'
};
const addressMap = {
  // Uniswap
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  uniswapRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  // Pairs
  deltaWeth: '0x169f31b4452aF181Ca8d802cE18b62FCAd8B1b9b',
  coreCbtc: '0x6fad7d44640c5cd0120deec0301e8cf850becb68',
  coreWeth: '0x32ce7e48debdccbfe0cd037cc89526e4382cb81b',
  cDaiWcore: '0x01AC08E821185b6d87E68c67F9dc79A8988688EB',
  ethUsdt: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
  wbtcWeth: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
  // Tokens
  delta: '0x6f08c0b805695C4ea1cfC4673c6CC317B124f833',
  rLP: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  core: '0x62359ed7505efc61ff1d56fef82158ccaffa23d7',
  wCORE: '0x17b8c1a92b66b1cf3092c5d223cb3a129023b669',
  wETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  wBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  cBTC: '0x7b5982dcAB054C377517759d0D2a3a5D02615AB8',
  cDAI: '0x00a66189143279b6db9b77294688f47959f37642',
  LSW: '0xdaFCE5670d3F67da9A3A44FE6bc36992e5E2beaB'
};
const addressDecimalsMap = {};
addressDecimalsMap[addressMap.wETH] = 18;
addressDecimalsMap[addressMap.core] = 18;
addressDecimalsMap[addressMap.wCORE] = 18;
addressDecimalsMap[addressMap.wbtcWeth] = 18;
addressDecimalsMap[addressMap.wBTC] = 8;
addressDecimalsMap[addressMap.cDAI] = 18;
addressDecimalsMap[addressMap.delta] = 18;
const tokenMap = {};
tokenMap[addressMap.wETH] = {
  name: 'WETH',
  friendlyName: 'ETH',
  decimals: addressDecimalsMap[addressMap.wETH]
};
tokenMap[addressMap.rLP] = {
  name: 'rLP',
  friendlyName: 'rLP',
  decimals: addressDecimalsMap[addressMap.rLP]
};
tokenMap[addressMap.delta] = {
  name: 'DELTA',
  friendlyName: 'DELTA',
  decimals: addressDecimalsMap[addressMap.delta]
};
tokenMap[addressMap.wBTC] = {
  name: 'WBTC',
  friendlyName: 'BTC',
  decimals: addressDecimalsMap[addressMap.wBTC]
};
tokenMap[addressMap.cBTC] = _objectSpread({
  name: 'CBTC'
}, tokenMap[addressMap.wBTC]);
tokenMap[addressMap.cDAI] = {
  name: 'cDAI',
  friendlyName: 'DAI',
  decimals: addressDecimalsMap[addressMap.cDAI]
};
tokenMap[addressMap.wCORE] = {
  name: 'wCORE',
  friendlyName: 'CORE',
  decimals: addressDecimalsMap[addressMap.wCORE]
};
tokenMap[addressMap.core] = {
  name: 'CORE',
  friendlyName: 'CORE',
  decimals: addressDecimalsMap[addressMap.core]
};
tokenMap[addressMap.wbtcWeth] = {
  name: 'WBTC-WETH LP',
  friendlyName: 'WBTC-WETH LP',
  decimals: addressDecimalsMap[addressMap.wbtcWeth]
};
const pairInfoMap = {};
pairInfoMap[pairNames.coreWeth] = {
  name: 'CORE/WETH',
  reserve0: tokenMap[addressMap.core],
  reserve1: tokenMap[addressMap.WETH],
  supplyScale: 1,
  unit: 'LP',
  tokenName: 'WETH',
  friendlyTokenName: 'ETH',
  address: addressMap.coreWeth,
  pid: 0
};
const ethereumStats = {};
ethereumStats.approximatedBlockPerDay = 6650;
ethereumStats.approximatedBlockPerYear = ethereumStats.approximatedBlockPerDay * 365; // TODO: Enable back
// verifyAddressMap(addressMap);

/***/ }),

/***/ "./contexts/GlobalHooks/GlobalHooksContext.js":
/*!****************************************************!*\
  !*** ./contexts/GlobalHooks/GlobalHooksContext.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GlobalHooksContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (GlobalHooksContext);

/***/ }),

/***/ "./contexts/GlobalHooks/GlobalHooksProvider.js":
/*!*****************************************************!*\
  !*** ./contexts/GlobalHooks/GlobalHooksProvider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.js");
/* harmony import */ var _GlobalHooksContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalHooksContext */ "./contexts/GlobalHooks/GlobalHooksContext.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\contexts\\GlobalHooks\\GlobalHooksProvider.js";



const GlobalHooksProvider = ({
  children
}) => {
  const delta = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useDelta"])();
  const lswStats = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useLSWStats"])();
  const staking = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useStaking"])();
  const rebasing = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useRebasing"])(); // TODO: change to rlp

  const rlpInfo = Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useTokenBalance"])('delta');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GlobalHooksContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      delta,
      lswStats,
      rlpInfo,
      staking,
      rebasing
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalHooksProvider);

/***/ }),

/***/ "./contexts/GlobalHooks/index.js":
/*!***************************************!*\
  !*** ./contexts/GlobalHooks/index.js ***!
  \***************************************/
/*! exports provided: GlobalHooksContext, GlobalHooksProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalHooksContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalHooksContext */ "./contexts/GlobalHooks/GlobalHooksContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHooksContext", function() { return _GlobalHooksContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GlobalHooksProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalHooksProvider */ "./contexts/GlobalHooks/GlobalHooksProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHooksProvider", function() { return _GlobalHooksProvider__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./contexts/Modal/ModalContext.js":
/*!****************************************!*\
  !*** ./contexts/Modal/ModalContext.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (ModalContext);

/***/ }),

/***/ "./contexts/Modal/ModalProvider.js":
/*!*****************************************!*\
  !*** ./contexts/Modal/ModalProvider.js ***!
  \*****************************************/
/*! exports provided: ModalType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalType", function() { return ModalType; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalContext */ "./contexts/Modal/ModalContext.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\contexts\\Modal\\ModalProvider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ModalType = Object.freeze({
  Message: 'message',
  Error: 'error',
  Confirm: 'confirm',
  ConnectWallet: 'connect-wallet'
});

const ModalProvider = ({
  children
}) => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  const _showModal = async (modalType, props) => {
    return new Promise(resolve => {
      setModal(_objectSpread(_objectSpread({}, props), {}, {
        type: modalType,
        onOk: () => {
          setModal();
          resolve(true);
        },
        onClose: () => {
          setModal();
          resolve(false);
        }
      }));
    });
  };

  const showControlledMessage = (title, content) => {
    const props = {
      title,
      content
    };
    setModal(_objectSpread(_objectSpread({}, props), {}, {
      type: ModalType.Message,
      onOk: undefined,
      onClose: () => false
    }));
    return {
      close: () => {
        setModal();
      }
    };
  };

  const showMessage = async (title, content, okContent = 'Ok') => {
    return _showModal(ModalType.Message, {
      title,
      content,
      okContent
    });
  };

  const showConnectWallet = async () => {
    return _showModal(ModalType.ConnectWallet, {});
  };

  const showError = async (title, content, okContent = 'Ok') => {
    return _showModal(ModalType.Error, {
      title,
      content,
      okContent
    });
  };

  const showConfirm = async (title, content, okContent = 'Ok', cancelContent = 'Cancel') => {
    return _showModal(ModalType.Confirm, {
      title,
      content,
      okContent,
      cancelContent
    });
  };

  const closeModal = () => {
    setModal();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ModalContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, modal), {}, {
      showMessage,
      showError,
      showConfirm,
      showControlledMessage,
      showConnectWallet,
      closeModal
    }),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalProvider);

/***/ }),

/***/ "./contexts/Settings/SettingsContext.js":
/*!**********************************************!*\
  !*** ./contexts/Settings/SettingsContext.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (SettingsContext);

/***/ }),

/***/ "./contexts/Settings/SettingsProvider.js":
/*!***********************************************!*\
  !*** ./contexts/Settings/SettingsProvider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsContext */ "./contexts/Settings/SettingsContext.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\contexts\\Settings\\SettingsProvider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SettingsProviders = ({
  children
}) => {
  const store = {};
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    store
  });

  const get = key => {
    return store[key];
  };

  const set = (key, value) => {
    setState(state => {
      const newState = _objectSpread({}, state);

      newState.store[key] = value;
      return newState;
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SettingsContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      get,
      set
    }),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsProviders);

/***/ }),

/***/ "./contexts/Wallet/WalletContext.js":
/*!******************************************!*\
  !*** ./contexts/Wallet/WalletContext.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (WalletContext);

/***/ }),

/***/ "./contexts/Wallet/WalletProvider.js":
/*!*******************************************!*\
  !*** ./contexts/Wallet/WalletProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WalletContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletContext */ "./contexts/Wallet/WalletContext.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\contexts\\Wallet\\WalletProvider.js";



const CHECK_WALLET_STATUS_REFRESH_RATE = 2 * 1000;

const WalletProvider = ({
  children
}) => {
  const {
    account,
    connector,
    status,
    connect
  } = Object(use_wallet__WEBPACK_IMPORTED_MODULE_2__["useWallet"])();
  const {
    0: userAccount,
    1: setUserAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const checkLocalUserAccount = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    if (!localStorage.getItem('account')) {
      setUserAccount(null);
    }
  }, []);
  const fetchConnection = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    if (status === 'disconnected') {
      setUserAccount(null);
      localStorage.removeItem('account');
    }
  }, [status, setUserAccount]);
  const handleConnectMetamask = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    connect('injected');
  }, [connect]);
  const handleConnectWalletConnect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    connect('walletconnect');
  }, [connect]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    checkLocalUserAccount();
    const localAccount = (account ? account.toString() : false) || localStorage.getItem('account');

    if (account) {
      localStorage.setItem('account', localAccount);
      setUserAccount(localAccount);
    }

    if (connector) {
      localStorage.setItem('walletProvider', connector);
    }
  }, [account, userAccount]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const checkConnection = setTimeout(() => {
      fetchConnection();
    }, CHECK_WALLET_STATUS_REFRESH_RATE);
    return () => clearTimeout(checkConnection);
  }, [status, fetchConnection]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const localAccount = localStorage.getItem('account');
    const walletProvider = localStorage.getItem('walletProvider');

    if (!account && localAccount) {
      setUserAccount(localAccount);

      if (localAccount && (walletProvider === 'metamask' || walletProvider === 'injected')) {
        handleConnectMetamask();
      }

      if (localAccount && walletProvider === 'walletconnect') {
        handleConnectWalletConnect();
      }
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WalletContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {},
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WalletProvider);

/***/ }),

/***/ "./contexts/Web3/Web3Context.js":
/*!**************************************!*\
  !*** ./contexts/Web3/Web3Context.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Web3Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  web3: undefined
});
/* harmony default export */ __webpack_exports__["default"] = (Web3Context);

/***/ }),

/***/ "./contexts/Web3/Web3Provider.js":
/*!***************************************!*\
  !*** ./contexts/Web3/Web3Provider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Web3Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Web3Context */ "./contexts/Web3/Web3Context.js");
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../web3 */ "./web3/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\contexts\\Web3\\Web3Provider.js";





const Web3Provider = ({
  children
}) => {
  const {
    0: web3,
    1: setWeb3
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const web3 = new _web3__WEBPACK_IMPORTED_MODULE_3__["Web3Client"](_config__WEBPACK_IMPORTED_MODULE_4__["WEB3_PROVIDER_URL"]);
    setWeb3(web3);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Web3Context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      web3
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Web3Provider);

/***/ }),

/***/ "./contexts/Yam/YamContext.js":
/*!************************************!*\
  !*** ./contexts/Yam/YamContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const YamContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  yam: undefined
});
/* harmony default export */ __webpack_exports__["default"] = (YamContext);

/***/ }),

/***/ "./contexts/Yam/YamProvider.js":
/*!*************************************!*\
  !*** ./contexts/Yam/YamProvider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../yam */ "./yam/index.js");
/* harmony import */ var _YamContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./YamContext */ "./contexts/Yam/YamContext.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\contexts\\Yam\\YamProvider.js";





const YamProvider = ({
  children
}) => {
  const {
    ethereum
  } = Object(use_wallet__WEBPACK_IMPORTED_MODULE_2__["useWallet"])();
  const {
    0: yam,
    1: setYam
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (ethereum) {
      const yam = new _yam__WEBPACK_IMPORTED_MODULE_3__["Yam"](ethereum, {
        defaultAccount: '',
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000
      });
      setYam(yam); // Useful for testing using chrome devtools.

      window.yam = yam;
    }
  }, [ethereum]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_YamContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      yam
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (YamProvider);

/***/ }),

/***/ "./contexts/index.js":
/*!***************************!*\
  !*** ./contexts/index.js ***!
  \***************************/
/*! exports provided: Web3Context, Web3Provider, SettingsProvider, GlobalHooksProvider, WalletContext, WalletProvider, YamProvider, ModalContext, ModalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Web3_Web3Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Web3/Web3Context */ "./contexts/Web3/Web3Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Web3Context", function() { return _Web3_Web3Context__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Web3_Web3Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Web3/Web3Provider */ "./contexts/Web3/Web3Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Web3Provider", function() { return _Web3_Web3Provider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Settings_SettingsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings/SettingsProvider */ "./contexts/Settings/SettingsProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsProvider", function() { return _Settings_SettingsProvider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _GlobalHooks_GlobalHooksProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalHooks/GlobalHooksProvider */ "./contexts/GlobalHooks/GlobalHooksProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHooksProvider", function() { return _GlobalHooks_GlobalHooksProvider__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Wallet_WalletContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Wallet/WalletContext */ "./contexts/Wallet/WalletContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalletContext", function() { return _Wallet_WalletContext__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Wallet_WalletProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wallet/WalletProvider */ "./contexts/Wallet/WalletProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalletProvider", function() { return _Wallet_WalletProvider__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Yam_YamProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Yam/YamProvider */ "./contexts/Yam/YamProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YamProvider", function() { return _Yam_YamProvider__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Modal_ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal/ModalContext */ "./contexts/Modal/ModalContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalContext", function() { return _Modal_ModalContext__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal/ModalProvider */ "./contexts/Modal/ModalProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalProvider", function() { return _Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./contracts/CORE.json":
/*!*****************************!*\
  !*** ./contracts/CORE.json ***!
  \*****************************/
/*! exports provided: contractName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"CORE\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"router\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"factory\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"fromDelegate\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"toDelegate\",\"type\":\"address\"}],\"name\":\"DelegateChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegate\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"previousBalance\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newBalance\",\"type\":\"uint256\"}],\"name\":\"DelegateVotesChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LPTokenClaimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"LiquidityAddition\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"log\",\"type\":\"string\"}],\"name\":\"Log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DELEGATION_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DOMAIN_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LPGenerationCompleted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LPperETHUnit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"agreesToTermsOutlinedInLiquidityGenerationParticipationAgreement\",\"type\":\"bool\"}],\"name\":\"addLiquidity\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"addLiquidityToUniswapCORExWETHPair\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"name\":\"checkpoints\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"fromBlock\",\"type\":\"uint32\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimLPTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractStartTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"createUniswapPairMainnet\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"delegatee\",\"type\":\"address\"}],\"name\":\"delegate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"delegatee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"expiry\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"delegateBySig\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"}],\"name\":\"delegates\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"emergencyDrain24hAfterLiquidityGenerationEventIsDone\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"ethContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeDistributor\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getCurrentVotes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"getPriorVotes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getSecondsLeftInLiquidityGenerationEvent\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initialSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationOngoing\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationParticipationAgreement\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"numCheckpoints\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeDistributor\",\"type\":\"address\"}],\"name\":\"setFeeDistributor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_transferCheckerAddress\",\"type\":\"address\"}],\"name\":\"setShouldTransferChecker\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenUniswapPair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalETHContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalLPTokensMinted\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"transferCheckerAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapFactory\",\"outputs\":[{\"internalType\":\"contract IUniswapV2Factory\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapRouterV2\",\"outputs\":[{\"internalType\":\"contract IUniswapV2Router02\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./contracts/DELTA.json":
/*!******************************!*\
  !*** ./contracts/DELTA.json ***!
  \******************************/
/*! exports provided: contractName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"DELTAToken\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"lswAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"QTY_EPOCHS\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"SECONDS_PER_EPOCH\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint112\",\"name\":\"amount\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"fullVestingTimestamp\",\"type\":\"uint112\"}],\"internalType\":\"struct DELTAToken.VestingTransaction\",\"name\":\"_tx\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"_blockTimestamp\",\"type\":\"uint256\"}],\"name\":\"_getTransactionDetail\",\"outputs\":[{\"components\":[{\"internalType\":\"uint112\",\"name\":\"amount\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"fullVestingTimestamp\",\"type\":\"uint112\"},{\"internalType\":\"uint256\",\"name\":\"percentVestedE4\",\"type\":\"uint256\"},{\"internalType\":\"uint112\",\"name\":\"mature\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"immature\",\"type\":\"uint112\"}],\"internalType\":\"struct DELTAToken.VestingTransactionDetailed\",\"name\":\"dtx\",\"type\":\"tuple\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint112\",\"name\":\"amount\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"fullVestingTimestamp\",\"type\":\"uint112\"},{\"internalType\":\"uint256\",\"name\":\"percentVestedE4\",\"type\":\"uint256\"},{\"internalType\":\"uint112\",\"name\":\"mature\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"immature\",\"type\":\"uint112\"}],\"internalType\":\"struct DELTAToken.VestingTransactionDetailed\",\"name\":\"dtx\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"matureAmountNeeded\",\"type\":\"uint256\"}],\"name\":\"calculateMaturityCredits\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"transactionCredit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"outputDebit\",\"type\":\"uint256\"}],\"internalType\":\"struct DELTAToken.MaturityInfo\",\"name\":\"info\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deploymentTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"uint112\",\"name\":\"amount\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"fullVestingTimestamp\",\"type\":\"uint112\"}],\"internalType\":\"struct DELTAToken.VestingTransaction\",\"name\":\"_tx\",\"type\":\"tuple\"}],\"name\":\"getTransactionDetail\",\"outputs\":[{\"components\":[{\"internalType\":\"uint112\",\"name\":\"amount\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"fullVestingTimestamp\",\"type\":\"uint112\"},{\"internalType\":\"uint256\",\"name\":\"percentVestedE4\",\"type\":\"uint256\"},{\"internalType\":\"uint112\",\"name\":\"mature\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"immature\",\"type\":\"uint112\"}],\"internalType\":\"struct DELTAToken.VestingTransactionDetailed\",\"name\":\"dtx\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"printDebugInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"canSendToMatureBalances\",\"type\":\"bool\"}],\"name\":\"setFullSenderWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"canRecieveImmatureBalances\",\"type\":\"bool\"}],\"name\":\"setImmatureRecipentWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"recievesBalancesWithoutVestingProcess\",\"type\":\"bool\"}],\"name\":\"setNoVestingWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IDELTATransferHandler\",\"name\":\"_newHandler\",\"type\":\"address\"}],\"name\":\"setTokenTransferEventHandler\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"canSendToMatureBalances\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"canRecieveImmatureBalances\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"recievesBalancesWithoutVestingProcess\",\"type\":\"bool\"}],\"name\":\"setWhitelists\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"totalsForWallet\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"mature\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"immature\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"total\",\"type\":\"uint256\"}],\"internalType\":\"struct DELTAToken.WalletTotals\",\"name\":\"totals\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapDELTAxWETHPair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userInformation\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"mostMatureTxIndex\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"lastInTxIndex\",\"type\":\"uint8\"},{\"internalType\":\"uint112\",\"name\":\"maturedBalance\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"maxBalance\",\"type\":\"uint112\"},{\"internalType\":\"bool\",\"name\":\"fullSenderWhitelisted\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"immatureRecieverWhiteslited\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"noVestingWhitelisted\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"vestingTransactions\",\"outputs\":[{\"internalType\":\"uint112\",\"name\":\"amount\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"fullVestingTimestamp\",\"type\":\"uint112\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wETH\",\"outputs\":[{\"internalType\":\"contract IWETH\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./contracts/IERC20.json":
/*!*******************************!*\
  !*** ./contracts/IERC20.json ***!
  \*******************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, immutableReferences, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"IERC20\",\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.6.12+commit.27d51765\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Approval\\\",\\\"type\\\":\\\"event\\\"},{\\\"anonymous\\\":false,\\\"inputs\\\":[{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"from\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":true,\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"to\\\",\\\"type\\\":\\\"address\\\"},{\\\"indexed\\\":false,\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"value\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"Transfer\\\",\\\"type\\\":\\\"event\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"owner\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"allowance\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"spender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"approve\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"account\\\",\\\"type\\\":\\\"address\\\"}],\\\"name\\\":\\\"balanceOf\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[],\\\"name\\\":\\\"totalSupply\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transfer\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"inputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"sender\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"recipient\\\",\\\"type\\\":\\\"address\\\"},{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"amount\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"transferFrom\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"bool\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"bool\\\"}],\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"details\\\":\\\"Interface of the ERC20 standard as defined in the EIP.\\\",\\\"events\\\":{\\\"Approval(address,address,uint256)\\\":{\\\"details\\\":\\\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\\\"},\\\"Transfer(address,address,uint256)\\\":{\\\"details\\\":\\\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\\\"}},\\\"kind\\\":\\\"dev\\\",\\\"methods\\\":{\\\"allowance(address,address)\\\":{\\\"details\\\":\\\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\\\"},\\\"approve(address,uint256)\\\":{\\\"details\\\":\\\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\\\"},\\\"balanceOf(address)\\\":{\\\"details\\\":\\\"Returns the amount of tokens owned by `account`.\\\"},\\\"totalSupply()\\\":{\\\"details\\\":\\\"Returns the amount of tokens in existence.\\\"},\\\"transfer(address,uint256)\\\":{\\\"details\\\":\\\"Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\\\"},\\\"transferFrom(address,address,uint256)\\\":{\\\"details\\\":\\\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\\\"}},\\\"version\\\":1},\\\"userdoc\\\":{\\\"kind\\\":\\\"user\\\",\\\"methods\\\":{},\\\"version\\\":1}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\":\\\"IERC20\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"metadata\\\":{\\\"bytecodeHash\\\":\\\"ipfs\\\"},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\":{\\\"keccak256\\\":\\\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\\\",\\\"license\\\":\\\"MIT\\\",\\\"urls\\\":[\\\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\\\",\\\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x\",\"deployedBytecode\":\"0x\",\"immutableReferences\":{},\"sourceMap\":\"\",\"deployedSourceMap\":\"\",\"source\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.6.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"sourcePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"ast\":{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"exportedSymbols\":{\"IERC20\":[7492]},\"id\":7493,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":7416,\"literals\":[\"solidity\",\"^\",\"0.6\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"33:23:24\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"interface\",\"documentation\":{\"id\":7417,\"nodeType\":\"StructuredDocumentation\",\"src\":\"58:70:24\",\"text\":\" @dev Interface of the ERC20 standard as defined in the EIP.\"},\"fullyImplemented\":false,\"id\":7492,\"linearizedBaseContracts\":[7492],\"name\":\"IERC20\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"body\":null,\"documentation\":{\"id\":7418,\"nodeType\":\"StructuredDocumentation\",\"src\":\"152:66:24\",\"text\":\" @dev Returns the amount of tokens in existence.\"},\"functionSelector\":\"18160ddd\",\"id\":7423,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"totalSupply\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7419,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"243:2:24\"},\"returnParameters\":{\"id\":7422,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7421,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7423,\"src\":\"269:7:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7420,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"269:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"268:9:24\"},\"scope\":7492,\"src\":\"223:55:24\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7424,\"nodeType\":\"StructuredDocumentation\",\"src\":\"284:72:24\",\"text\":\" @dev Returns the amount of tokens owned by `account`.\"},\"functionSelector\":\"70a08231\",\"id\":7431,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"balanceOf\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7427,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7426,\"mutability\":\"mutable\",\"name\":\"account\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7431,\"src\":\"380:15:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7425,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"380:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"379:17:24\"},\"returnParameters\":{\"id\":7430,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7429,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7431,\"src\":\"420:7:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7428,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"420:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"419:9:24\"},\"scope\":7492,\"src\":\"361:68:24\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7432,\"nodeType\":\"StructuredDocumentation\",\"src\":\"435:209:24\",\"text\":\" @dev Moves `amount` tokens from the caller's account to `recipient`.\\n Returns a boolean value indicating whether the operation succeeded.\\n Emits a {Transfer} event.\"},\"functionSelector\":\"a9059cbb\",\"id\":7441,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transfer\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7437,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7434,\"mutability\":\"mutable\",\"name\":\"recipient\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7441,\"src\":\"667:17:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7433,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"667:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7436,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7441,\"src\":\"686:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7435,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"686:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"666:35:24\"},\"returnParameters\":{\"id\":7440,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7439,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7441,\"src\":\"720:4:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":7438,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"720:4:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"719:6:24\"},\"scope\":7492,\"src\":\"649:77:24\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7442,\"nodeType\":\"StructuredDocumentation\",\"src\":\"732:264:24\",\"text\":\" @dev Returns the remaining number of tokens that `spender` will be\\n allowed to spend on behalf of `owner` through {transferFrom}. This is\\n zero by default.\\n This value changes when {approve} or {transferFrom} are called.\"},\"functionSelector\":\"dd62ed3e\",\"id\":7451,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"allowance\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7447,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7444,\"mutability\":\"mutable\",\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7451,\"src\":\"1020:13:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7443,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1020:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7446,\"mutability\":\"mutable\",\"name\":\"spender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7451,\"src\":\"1035:15:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7445,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1035:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1019:32:24\"},\"returnParameters\":{\"id\":7450,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7449,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7451,\"src\":\"1075:7:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7448,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1075:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1074:9:24\"},\"scope\":7492,\"src\":\"1001:83:24\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7452,\"nodeType\":\"StructuredDocumentation\",\"src\":\"1090:642:24\",\"text\":\" @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n Returns a boolean value indicating whether the operation succeeded.\\n IMPORTANT: Beware that changing an allowance with this method brings the risk\\n that someone may use both the old and the new allowance by unfortunate\\n transaction ordering. One possible solution to mitigate this race\\n condition is to first reduce the spender's allowance to 0 and set the\\n desired value afterwards:\\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n Emits an {Approval} event.\"},\"functionSelector\":\"095ea7b3\",\"id\":7461,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"approve\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7457,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7454,\"mutability\":\"mutable\",\"name\":\"spender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7461,\"src\":\"1754:15:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7453,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1754:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7456,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7461,\"src\":\"1771:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7455,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1771:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1753:33:24\"},\"returnParameters\":{\"id\":7460,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7459,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7461,\"src\":\"1805:4:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":7458,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1805:4:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1804:6:24\"},\"scope\":7492,\"src\":\"1737:74:24\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7462,\"nodeType\":\"StructuredDocumentation\",\"src\":\"1817:296:24\",\"text\":\" @dev Moves `amount` tokens from `sender` to `recipient` using the\\n allowance mechanism. `amount` is then deducted from the caller's\\n allowance.\\n Returns a boolean value indicating whether the operation succeeded.\\n Emits a {Transfer} event.\"},\"functionSelector\":\"23b872dd\",\"id\":7473,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transferFrom\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7469,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7464,\"mutability\":\"mutable\",\"name\":\"sender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2140:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7463,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2140:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7466,\"mutability\":\"mutable\",\"name\":\"recipient\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2156:17:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7465,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2156:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7468,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2175:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7467,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2175:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2139:51:24\"},\"returnParameters\":{\"id\":7472,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7471,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2209:4:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":7470,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2209:4:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2208:6:24\"},\"scope\":7492,\"src\":\"2118:97:24\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"anonymous\":false,\"documentation\":{\"id\":7474,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2221:158:24\",\"text\":\" @dev Emitted when `value` tokens are moved from one account (`from`) to\\n another (`to`).\\n Note that `value` may be zero.\"},\"id\":7482,\"name\":\"Transfer\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":7481,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7476,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"from\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7482,\"src\":\"2399:20:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7475,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2399:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7478,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"to\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7482,\"src\":\"2421:18:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7477,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2421:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7480,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7482,\"src\":\"2441:13:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7479,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2441:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2398:57:24\"},\"src\":\"2384:72:24\"},{\"anonymous\":false,\"documentation\":{\"id\":7483,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2462:148:24\",\"text\":\" @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n a call to {approve}. `value` is the new allowance.\"},\"id\":7491,\"name\":\"Approval\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":7490,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7485,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7491,\"src\":\"2630:21:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7484,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2630:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7487,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"spender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7491,\"src\":\"2653:23:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7486,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2653:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7489,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7491,\"src\":\"2678:13:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7488,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2678:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2629:63:24\"},\"src\":\"2615:78:24\"}],\"scope\":7493,\"src\":\"129:2566:24\"}],\"src\":\"33:2663:24\"},\"legacyAST\":{\"absolutePath\":\"@openzeppelin/contracts/token/ERC20/IERC20.sol\",\"exportedSymbols\":{\"IERC20\":[7492]},\"id\":7493,\"license\":\"MIT\",\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":7416,\"literals\":[\"solidity\",\"^\",\"0.6\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"33:23:24\"},{\"abstract\":false,\"baseContracts\":[],\"contractDependencies\":[],\"contractKind\":\"interface\",\"documentation\":{\"id\":7417,\"nodeType\":\"StructuredDocumentation\",\"src\":\"58:70:24\",\"text\":\" @dev Interface of the ERC20 standard as defined in the EIP.\"},\"fullyImplemented\":false,\"id\":7492,\"linearizedBaseContracts\":[7492],\"name\":\"IERC20\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"body\":null,\"documentation\":{\"id\":7418,\"nodeType\":\"StructuredDocumentation\",\"src\":\"152:66:24\",\"text\":\" @dev Returns the amount of tokens in existence.\"},\"functionSelector\":\"18160ddd\",\"id\":7423,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"totalSupply\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7419,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"243:2:24\"},\"returnParameters\":{\"id\":7422,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7421,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7423,\"src\":\"269:7:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7420,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"269:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"268:9:24\"},\"scope\":7492,\"src\":\"223:55:24\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7424,\"nodeType\":\"StructuredDocumentation\",\"src\":\"284:72:24\",\"text\":\" @dev Returns the amount of tokens owned by `account`.\"},\"functionSelector\":\"70a08231\",\"id\":7431,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"balanceOf\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7427,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7426,\"mutability\":\"mutable\",\"name\":\"account\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7431,\"src\":\"380:15:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7425,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"380:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"379:17:24\"},\"returnParameters\":{\"id\":7430,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7429,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7431,\"src\":\"420:7:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7428,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"420:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"419:9:24\"},\"scope\":7492,\"src\":\"361:68:24\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7432,\"nodeType\":\"StructuredDocumentation\",\"src\":\"435:209:24\",\"text\":\" @dev Moves `amount` tokens from the caller's account to `recipient`.\\n Returns a boolean value indicating whether the operation succeeded.\\n Emits a {Transfer} event.\"},\"functionSelector\":\"a9059cbb\",\"id\":7441,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transfer\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7437,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7434,\"mutability\":\"mutable\",\"name\":\"recipient\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7441,\"src\":\"667:17:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7433,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"667:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7436,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7441,\"src\":\"686:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7435,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"686:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"666:35:24\"},\"returnParameters\":{\"id\":7440,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7439,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7441,\"src\":\"720:4:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":7438,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"720:4:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"719:6:24\"},\"scope\":7492,\"src\":\"649:77:24\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7442,\"nodeType\":\"StructuredDocumentation\",\"src\":\"732:264:24\",\"text\":\" @dev Returns the remaining number of tokens that `spender` will be\\n allowed to spend on behalf of `owner` through {transferFrom}. This is\\n zero by default.\\n This value changes when {approve} or {transferFrom} are called.\"},\"functionSelector\":\"dd62ed3e\",\"id\":7451,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"allowance\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7447,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7444,\"mutability\":\"mutable\",\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7451,\"src\":\"1020:13:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7443,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1020:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7446,\"mutability\":\"mutable\",\"name\":\"spender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7451,\"src\":\"1035:15:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7445,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1035:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1019:32:24\"},\"returnParameters\":{\"id\":7450,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7449,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7451,\"src\":\"1075:7:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7448,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1075:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1074:9:24\"},\"scope\":7492,\"src\":\"1001:83:24\",\"stateMutability\":\"view\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7452,\"nodeType\":\"StructuredDocumentation\",\"src\":\"1090:642:24\",\"text\":\" @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n Returns a boolean value indicating whether the operation succeeded.\\n IMPORTANT: Beware that changing an allowance with this method brings the risk\\n that someone may use both the old and the new allowance by unfortunate\\n transaction ordering. One possible solution to mitigate this race\\n condition is to first reduce the spender's allowance to 0 and set the\\n desired value afterwards:\\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n Emits an {Approval} event.\"},\"functionSelector\":\"095ea7b3\",\"id\":7461,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"approve\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7457,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7454,\"mutability\":\"mutable\",\"name\":\"spender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7461,\"src\":\"1754:15:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7453,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1754:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7456,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7461,\"src\":\"1771:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7455,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1771:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1753:33:24\"},\"returnParameters\":{\"id\":7460,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7459,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7461,\"src\":\"1805:4:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":7458,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"1805:4:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"1804:6:24\"},\"scope\":7492,\"src\":\"1737:74:24\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"body\":null,\"documentation\":{\"id\":7462,\"nodeType\":\"StructuredDocumentation\",\"src\":\"1817:296:24\",\"text\":\" @dev Moves `amount` tokens from `sender` to `recipient` using the\\n allowance mechanism. `amount` is then deducted from the caller's\\n allowance.\\n Returns a boolean value indicating whether the operation succeeded.\\n Emits a {Transfer} event.\"},\"functionSelector\":\"23b872dd\",\"id\":7473,\"implemented\":false,\"kind\":\"function\",\"modifiers\":[],\"name\":\"transferFrom\",\"nodeType\":\"FunctionDefinition\",\"overrides\":null,\"parameters\":{\"id\":7469,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7464,\"mutability\":\"mutable\",\"name\":\"sender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2140:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7463,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2140:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7466,\"mutability\":\"mutable\",\"name\":\"recipient\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2156:17:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7465,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2156:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7468,\"mutability\":\"mutable\",\"name\":\"amount\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2175:14:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7467,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2175:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2139:51:24\"},\"returnParameters\":{\"id\":7472,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7471,\"mutability\":\"mutable\",\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7473,\"src\":\"2209:4:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"},\"typeName\":{\"id\":7470,\"name\":\"bool\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2209:4:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_bool\",\"typeString\":\"bool\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2208:6:24\"},\"scope\":7492,\"src\":\"2118:97:24\",\"stateMutability\":\"nonpayable\",\"virtual\":false,\"visibility\":\"external\"},{\"anonymous\":false,\"documentation\":{\"id\":7474,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2221:158:24\",\"text\":\" @dev Emitted when `value` tokens are moved from one account (`from`) to\\n another (`to`).\\n Note that `value` may be zero.\"},\"id\":7482,\"name\":\"Transfer\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":7481,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7476,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"from\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7482,\"src\":\"2399:20:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7475,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2399:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7478,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"to\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7482,\"src\":\"2421:18:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7477,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2421:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7480,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7482,\"src\":\"2441:13:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7479,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2441:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2398:57:24\"},\"src\":\"2384:72:24\"},{\"anonymous\":false,\"documentation\":{\"id\":7483,\"nodeType\":\"StructuredDocumentation\",\"src\":\"2462:148:24\",\"text\":\" @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n a call to {approve}. `value` is the new allowance.\"},\"id\":7491,\"name\":\"Approval\",\"nodeType\":\"EventDefinition\",\"parameters\":{\"id\":7490,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":7485,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"owner\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7491,\"src\":\"2630:21:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7484,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2630:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7487,\"indexed\":true,\"mutability\":\"mutable\",\"name\":\"spender\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7491,\"src\":\"2653:23:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"},\"typeName\":{\"id\":7486,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2653:7:24\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"value\":null,\"visibility\":\"internal\"},{\"constant\":false,\"id\":7489,\"indexed\":false,\"mutability\":\"mutable\",\"name\":\"value\",\"nodeType\":\"VariableDeclaration\",\"overrides\":null,\"scope\":7491,\"src\":\"2678:13:24\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":7488,\"name\":\"uint256\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"2678:7:24\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"2629:63:24\"},\"src\":\"2615:78:24\"}],\"scope\":7493,\"src\":\"129:2566:24\"}],\"src\":\"33:2663:24\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.6.12+commit.27d51765.Emscripten.clang\"},\"networks\":{},\"schemaVersion\":\"3.2.3\",\"updatedAt\":\"2020-09-01T05:50:30.999Z\",\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}}");

/***/ }),

/***/ "./contracts/LSW.json":
/*!****************************!*\
  !*** ./contracts/LSW.json ***!
  \****************************/
/*! exports provided: _format, contractName, sourceName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"DELTA_Limited_Staking_Window\",\"sourceName\":\"contracts/v612/DELTA/Periphery/DELTA_Limited_Staking_Window.sol\",\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"CLAIMING_PERIOD\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DELTA_FINANCIAL_MULTISIG\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"INTERIM_ADMIN\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"LSW_RUN_TIME\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_ETH_POOL_SEED\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MAX_TIME_BONUS_PERCENT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"adminEndLSWAndRefundEveryone\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"person\",\"type\":\"address\"}],\"name\":\"allLiquidityContributionsOfAnAddress\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"byWho\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"howMuchETHUnits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"contributionTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"creditsAdded\",\"type\":\"uint256\"}],\"internalType\":\"struct DELTA_Limited_Staking_Window.LiquidityContribution[]\",\"name\":\"liquidityContributionsOfPerson\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"claimToWalletInstead\",\"type\":\"bool\"}],\"name\":\"claimOrStakeAndClaimLP\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"claimedLP\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"readAndAgreedToLiquidityProviderAgreement\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"referrerAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"referralID\",\"type\":\"uint256\"}],\"name\":\"contributeLiquidity\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deltaDeepFarmingVaultAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deltaTokenAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"endLiquidityDeployment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"numberSeconds\",\"type\":\"uint256\"}],\"name\":\"extendLSWEndTime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"finalizeLSW\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRefund\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWETHBonusForReferrals\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"liquidityContributedInETHUnitsMapping\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"liquidityContributionsArray\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"byWho\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"howMuchETHUnits\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"contributionTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"creditsAdded\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"liquidityCreditsMapping\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationEndTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationHasEnded\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationHasStarted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationParticipationAgreement\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"liquidityGenerationStartTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"makeRefCode\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"onlyInterimAdmin\",\"outputs\":[],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"onlyMultisig\",\"outputs\":[],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"openRefunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rebasingLP\",\"outputs\":[{\"internalType\":\"contract IRLP\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"referralBonusWETH\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"referralBonusWETHClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"referralCodeMappingIndexedByAddress\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"referralCodeMappingIndexedByID\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"refundClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"refundsOpen\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"reserveVaultAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rlpPerCredit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"secondsLeftInLiquidityGenerationEvent\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"deltaToken\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"delegateCall\",\"type\":\"bool\"}],\"name\":\"setDELTAToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"farmingVault\",\"type\":\"address\"}],\"name\":\"setFarmingVaultAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"multisig\",\"type\":\"address\"}],\"name\":\"setMultisig\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"rlpAddress\",\"type\":\"address\"}],\"name\":\"setRLPWrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"reserveVault\",\"type\":\"address\"}],\"name\":\"setReserveVault\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startLiquidityGeneration\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalCreditValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalWETHEarmarkedForReferrers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wETH\",\"outputs\":[{\"internalType\":\"contract IWETH\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]}");

/***/ }),

/***/ "./contracts/WBTC.json":
/*!*****************************!*\
  !*** ./contracts/WBTC.json ***!
  \*****************************/
/*! exports provided: contractName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"WBTC\",\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"mintingFinished\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"reclaimToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"claimOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finishMinting\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"pendingOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Pause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Unpause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"burner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintFinished\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"}],\"name\":\"OwnershipRenounced\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]}");

/***/ }),

/***/ "./contracts/cBTC.json":
/*!*****************************!*\
  !*** ./contracts/cBTC.json ***!
  \*****************************/
/*! exports provided: _format, contractName, sourceName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"cBTC\",\"sourceName\":\"contracts/v612/cBTC.sol\",\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Unwrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Wrapped\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint8[]\",\"name\":\"_percent\",\"type\":\"uint8[]\"},{\"internalType\":\"uint8[]\",\"name\":\"tokenDecimals\",\"type\":\"uint8[]\"}],\"name\":\"__ERC95_init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_numTokensWrapped\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_wrappedTokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_reserve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountWrapperPerUnit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"changeWrapTokenName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getTokenInfo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint8[]\",\"name\":\"_percent\",\"type\":\"uint8[]\"},{\"internalType\":\"uint8[]\",\"name\":\"tokenDecimals\",\"type\":\"uint8[]\"},{\"internalType\":\"address\",\"name\":\"_coreGlobals\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_LGEAddress\",\"type\":\"address\"}],\"name\":\"setLGEAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"skim\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpauseTransfers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"unwrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unwrapAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"unwrapFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"wrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"wrapAtomic\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./contracts/cDAI.json":
/*!*****************************!*\
  !*** ./contracts/cDAI.json ***!
  \*****************************/
/*! exports provided: _format, contractName, sourceName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"cDAI\",\"sourceName\":\"contracts/v612/coreDAI.sol\",\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Unwrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Wrapped\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint8[]\",\"name\":\"_percent\",\"type\":\"uint8[]\"},{\"internalType\":\"uint8[]\",\"name\":\"tokenDecimals\",\"type\":\"uint8[]\"}],\"name\":\"__ERC95_init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"_numTokensWrapped\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_wrappedTokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_reserve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountWrapperPerUnit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"changeWrapTokenName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getTokenInfo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint8[]\",\"name\":\"_percent\",\"type\":\"uint8[]\"},{\"internalType\":\"uint8[]\",\"name\":\"tokenDecimals\",\"type\":\"uint8[]\"},{\"internalType\":\"address\",\"name\":\"_coreGlobals\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_LGEAddress\",\"type\":\"address\"}],\"name\":\"setLGEAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"skim\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpauseTransfers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"unwrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unwrapAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"unwrapFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"wrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"wrapAtomic\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./contracts/rLP.json":
/*!****************************!*\
  !*** ./contracts/rLP.json ***!
  \****************************/
/*! exports provided: _format, contractName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"DELTA_Rebasing_Liquidity_Token\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_deltaRouterAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_deltaTokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"LGE\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseLPToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseTokenSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deltaRouterAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deltaTokenAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"initialRebasingsLeft\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newContract\",\"type\":\"address\"}],\"name\":\"migrate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"migratedContract\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nextPositiveLPRebase\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"onlyNewContract\",\"outputs\":[],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"openRebasing\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rebase\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_baseLPToken\",\"type\":\"address\"}],\"name\":\"setBaseLPToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_lsw\",\"type\":\"address\"}],\"name\":\"setLSWAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setupRebase\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"skimLPToNewContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wETHAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"person\",\"type\":\"address\"}],\"name\":\"wrapAtomic\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./contracts/uni2.json":
/*!*****************************!*\
  !*** ./contracts/uni2.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount0In\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount1In\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount0Out\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount1Out\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"Swap\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint112\",\"name\":\"reserve0\",\"type\":\"uint112\"},{\"indexed\":false,\"internalType\":\"uint112\",\"name\":\"reserve1\",\"type\":\"uint112\"}],\"name\":\"Sync\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"MINIMUM_LIQUIDITY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token0\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token1\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getReserves\",\"outputs\":[{\"internalType\":\"uint112\",\"name\":\"reserve0\",\"type\":\"uint112\"},{\"internalType\":\"uint112\",\"name\":\"reserve1\",\"type\":\"uint112\"},{\"internalType\":\"uint32\",\"name\":\"blockTimestampLast\",\"type\":\"uint32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"price0CumulativeLast\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"price1CumulativeLast\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"kLast\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount0\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount0Out\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount1Out\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"swap\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"skim\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"sync\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./contracts/uniR.json":
/*!*****************************!*\
  !*** ./contracts/uniR.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_factory\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_WETH\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"WETH\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenB\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amountADesired\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountBDesired\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountAMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountBMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountB\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amountTokenDesired\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountTokenMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETHMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"addLiquidityETH\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountToken\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETH\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"factory\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"reserveIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"reserveOut\",\"type\":\"uint256\"}],\"name\":\"getAmountIn\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"reserveIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"reserveOut\",\"type\":\"uint256\"}],\"name\":\"getAmountOut\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"}],\"name\":\"getAmountsIn\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"}],\"name\":\"getAmountsOut\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"reserveA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"reserveB\",\"type\":\"uint256\"}],\"name\":\"quote\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountB\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenB\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountAMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountBMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountB\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountTokenMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETHMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"removeLiquidityETH\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountToken\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETH\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountTokenMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETHMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"removeLiquidityETHSupportingFeeOnTransferTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountETH\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountTokenMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETHMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"approveMax\",\"type\":\"bool\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"removeLiquidityETHWithPermit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountToken\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETH\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountTokenMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountETHMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"approveMax\",\"type\":\"bool\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountETH\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenB\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"liquidity\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountAMin\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountBMin\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"approveMax\",\"type\":\"bool\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"removeLiquidityWithPermit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amountA\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountB\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapETHForExactTokens\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapExactETHForTokens\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapExactETHForTokensSupportingFeeOnTransferTokens\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapExactTokensForETH\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapExactTokensForETHSupportingFeeOnTransferTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapExactTokensForTokens\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountIn\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountOutMin\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapExactTokensForTokensSupportingFeeOnTransferTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountInMax\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapTokensForExactETH\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amountOut\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amountInMax\",\"type\":\"uint256\"},{\"internalType\":\"address[]\",\"name\":\"path\",\"type\":\"address[]\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"}],\"name\":\"swapTokensForExactTokens\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]");

/***/ }),

/***/ "./contracts/unifact2.json":
/*!*********************************!*\
  !*** ./contracts/unifact2.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeToSetter\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token0\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token1\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"pair\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"PairCreated\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"allPairs\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"allPairsLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenA\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenB\",\"type\":\"address\"}],\"name\":\"createPair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"pair\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"feeTo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"feeToSetter\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getPair\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeTo\",\"type\":\"address\"}],\"name\":\"setFeeTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_feeToSetter\",\"type\":\"address\"}],\"name\":\"setFeeToSetter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./contracts/wCORE.json":
/*!******************************!*\
  !*** ./contracts/wCORE.json ***!
  \******************************/
/*! exports provided: _format, contractName, sourceName, abi, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"wCORE\",\"sourceName\":\"contracts/v612/wCORE.sol\",\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Unwrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Wrapped\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"_numTokensWrapped\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_wrappedTokens\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_reserve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amountWrapperPerUnit\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"changeWrapTokenName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feeDistributor\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"getTokenInfo\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_addresses\",\"type\":\"address[]\"},{\"internalType\":\"uint8[]\",\"name\":\"_percent\",\"type\":\"uint8[]\"},{\"internalType\":\"uint8[]\",\"name\":\"tokenDecimals\",\"type\":\"uint8[]\"},{\"internalType\":\"address\",\"name\":\"_coreGlobals\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_LGEAddress\",\"type\":\"address\"}],\"name\":\"setLGEAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"skim\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpauseTransfers\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"unwrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unwrapAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"unwrapFor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amt\",\"type\":\"uint256\"}],\"name\":\"wrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"wrapAtomic\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./contracts/weth.json":
/*!*****************************!*\
  !*** ./contracts/weth.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./helpers/errors.js":
/*!***************************!*\
  !*** ./helpers/errors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getTransactionError = (error, defaultErrorMessage = 'An unexpected error occurred') => {
  if (!error.message || error.message.indexOf(':') === -1) {
    return new Error(defaultErrorMessage);
  }

  let message = (error.message.split(':')[1] || '') + (error.message.split(':')[2] || '');
  message = message.split('{')[0] || '';
  return new Error(message);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getTransactionError
});

/***/ }),

/***/ "./helpers/formatting.js":
/*!*******************************!*\
  !*** ./helpers/formatting.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");



const getTokenAmount = (amount, decimals = 18, precision = 4, toLocaleString = true) => {
  if (amount === _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"]) {
    return amount;
  }

  if (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a.isBigNumber(amount)) {
    amount = decimals ? amount.div(new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(10).pow(decimals)) : amount;
  }

  if (typeof amount === 'string') {
    amount /= 10 ** decimals;
  }

  if (precision) {
    amount = parseFloat(amount).toFixed(precision);
  } else {
    amount = parseInt(amount);
  }

  if (toLocaleString) {
    amount = amount.toLocaleString();
  }

  if (Number.isNaN(amount) || bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a.isBigNumber(amount) && amount.isNaN() || amount === "NaN") {
    return _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"];
  }

  return amount;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getTokenAmount
});

/***/ }),

/***/ "./helpers/hooks.js":
/*!**************************!*\
  !*** ./helpers/hooks.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const setWalletAwareInterval = (wallet, fn, timeout, ...fnPrams) => {
  if (!('status' in wallet)) {
    throw new Error('wallet parameter must be a valid use-wallet instance');
  }

  const isWalletConnected = () => {
    return wallet && wallet.account && wallet.status === 'connected';
  };

  if (isWalletConnected()) {
    fn(fnPrams);
  }

  const interval = setInterval(() => {
    if (isWalletConnected()) {
      fn(fnPrams);
    }
  }, timeout);
  return interval;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setWalletAwareInterval
});

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: formatting, hooks, errors, transactions, time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./helpers/formatting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatting", function() { return _formatting__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./helpers/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./helpers/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transactions */ "./helpers/transactions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transactions", function() { return _transactions__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time */ "./helpers/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _time__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./helpers/time.js":
/*!*************************!*\
  !*** ./helpers/time.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);


const getTimeLeft = endTimeInMillis => {
  const now = moment__WEBPACK_IMPORTED_MODULE_0___default.a.now();
  const fullyVestedAt = moment__WEBPACK_IMPORTED_MODULE_0___default()(endTimeInMillis);
  const diffTime = fullyVestedAt - now;
  const duration = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(diffTime, 'milliseconds');
  return {
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes()
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getTimeLeft
});

/***/ }),

/***/ "./helpers/transactions.js":
/*!*********************************!*\
  !*** ./helpers/transactions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./helpers/errors.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\helpers\\transactions.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const executeTransaction = async (modalContext, transaction, transactionParameters = {}, successMessage, successTitle = 'Success', errorTitle = 'Error', transactionTitle = 'Transaction', transactionLoadingMessage = 'Transaction in progress...') => {
  try {
    const transactionGasEstimate = await transaction.estimateGas(transactionParameters, transactionParameters);
    const transactionMessage = modalContext.showControlledMessage(transactionTitle, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      label: transactionLoadingMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 85
    }, undefined));
    await transaction.send(_objectSpread(_objectSpread({}, transactionParameters), {}, {
      gas: transactionGasEstimate
    }));
    transactionMessage.close();
    await modalContext.showMessage(successTitle, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-lg",
      children: successMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 50
    }, undefined));
  } catch (error) {
    const decodedError = _errors__WEBPACK_IMPORTED_MODULE_1__["default"].getTransactionError(error, 'An unexpected error occured');
    console.log(decodedError);
    await modalContext.showError(errorTitle, decodedError.message);
    return Promise.reject();
  }

  return Promise.resolve();
};

/* harmony default export */ __webpack_exports__["default"] = ({
  executeTransaction
});

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: useWeb3, useYam, useETHPrice, useWBTCPrice, useTokenBalance, useUserApprovalOfContract, useCorePairBalances, useLSWStats, useDelta, useStaking, useRebasing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWeb3", function() { return _useWeb3__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useYam", function() { return _useYam__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useETHPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useETHPrice */ "./hooks/useETHPrice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useETHPrice", function() { return _useETHPrice__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useWBTCPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWBTCPrice */ "./hooks/useWBTCPrice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWBTCPrice", function() { return _useWBTCPrice__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useTokenBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTokenBalance */ "./hooks/useTokenBalance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTokenBalance", function() { return _useTokenBalance__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _useUserApprovalOfContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useUserApprovalOfContract */ "./hooks/useUserApprovalOfContract.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUserApprovalOfContract", function() { return _useUserApprovalOfContract__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useCorePairBalances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useCorePairBalances */ "./hooks/useCorePairBalances.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCorePairBalances", function() { return _useCorePairBalances__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _useLSWStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useLSWStats */ "./hooks/useLSWStats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLSWStats", function() { return _useLSWStats__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _useDelta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useDelta */ "./hooks/useDelta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDelta", function() { return _useDelta__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _useStaking__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useStaking */ "./hooks/useStaking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaking", function() { return _useStaking__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _useRebasing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useRebasing */ "./hooks/useRebasing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRebasing", function() { return _useRebasing__WEBPACK_IMPORTED_MODULE_10__["default"]; });













/***/ }),

/***/ "./hooks/useCorePairBalances.js":
/*!**************************************!*\
  !*** ./hooks/useCorePairBalances.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");



const REFRESH_RATE = 60 * 1000;
/**
 * Retrieves the reserve amount of a given core pair.
 */

const useCorePairBalances = pairName => {
  const pairInfo = _config__WEBPACK_IMPORTED_MODULE_1__["pairInfoMap"][pairName];
  const yam = Object(_useYam__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: balances,
    1: setBalances
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    balanceToken: _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"],
    balanceCore: _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"]
  });

  async function update() {
    const pair = yam.contracts[pairName];
    const balances = await pair.methods.getReserves().call();
    let balanceCore;
    let balanceToken;

    if (pairInfo.reserve1.friendlyName === 'CORE') {
      balanceCore = balances.reserve1 / 10 ** pairInfo.reserve1.decimals;
      balanceToken = balances.reserve0 / 10 ** pairInfo.reserve0.decimals;
    } else {
      balanceCore = balances.reserve0 / 10 ** pairInfo.reserve0.decimals;
      balanceToken = balances.reserve1 / 10 ** pairInfo.reserve1.decimals;
    }

    setBalances({
      balanceToken,
      balanceCore
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let interval;

    if (yam) {
      update();
      interval = setInterval(update, REFRESH_RATE);
    }

    return () => clearInterval(interval);
  }, [yam]);
  return balances;
};

/* harmony default export */ __webpack_exports__["default"] = (useCorePairBalances);

/***/ }),

/***/ "./hooks/useDelta.js":
/*!***************************!*\
  !*** ./hooks/useDelta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-await-in-loop */






const REFRESH_RATE = 1 * 60 * 1000;
const NUM_EPOCH = 14;

const useDelta = () => {
  const yam = Object(_useYam__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])();
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    balance: _config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"],
    total: _config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"],
    mature: _config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"],
    immature: _config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"],
    fullyVestedAt: _config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"],
    vestingInProgress: false,
    percentVested: _config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"],
    vestingTransactions: []
  });

  const update = async () => {
    console.log("yam: ", yam);
    if (!yam || !(wallet === null || wallet === void 0 ? void 0 : wallet.account)) return;
    const totalsForWallet = await yam.contracts.delta.methods.totalsForWallet(wallet.account).call();
    const total = totalsForWallet.total.toString() / 1e18;
    const mature = totalsForWallet.mature.toString() / 1e18;
    const immature = totalsForWallet.immature.toString() / 1e18;
    const vestingTransactions = [];
    let fullyVestedAt = 0;

    for (let i = 0; i < NUM_EPOCH; i++) {
      const vestingTransaction = await yam.contracts.delta.methods.vestingTransactions(wallet.account, i).call();
      const vestingTransactionDetails = await yam.contracts.delta.methods.getTransactionDetail(vestingTransaction).call();

      if (vestingTransactionDetails.fullVestingTimestamp > fullyVestedAt) {
        fullyVestedAt = vestingTransactionDetails.fullVestingTimestamp;
      }

      vestingTransactions.push({
        amount: vestingTransactionDetails.amount / 1e18,
        fullVestingTimestamp: vestingTransactionDetails.fullVestingTimestamp * 1000,
        immature: vestingTransactionDetails.immature / 1e18,
        mature: vestingTransactionDetails.mature / 1e18,
        percentVested: vestingTransactionDetails.percentVestedE4 / 1e4
      });
    }

    setData(data => _objectSpread(_objectSpread({}, data), {}, {
      total,
      mature,
      immature,
      percentVested: mature / total,
      fullyVestedAt: fullyVestedAt * 1000,
      vestingInProgress: fullyVestedAt * 1000 > moment__WEBPACK_IMPORTED_MODULE_2___default.a.now(),
      vestingTransactions
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_config__WEBPACK_IMPORTED_MODULE_3__["TEMP_ENABLE_END_LSW_WEB3"]) {
      update();
      const interval = _helpers__WEBPACK_IMPORTED_MODULE_4__["hooks"].setWalletAwareInterval(wallet, update, REFRESH_RATE);
      return () => clearInterval(interval);
    }
  }, [yam]);
  return {
    update,
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useDelta);

/***/ }),

/***/ "./hooks/useETHPrice.js":
/*!******************************!*\
  !*** ./hooks/useETHPrice.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");



const PRICE_REFRESH_INTERVAL = 30 * 1000;
const initialState = _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"];

const useETHPrice = () => {
  const web3 = Object(_useWeb3__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: ETHprice,
    1: setETHPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);

  async function update() {
    const priceOfUSDTinETH = await web3.contracts.ethUsdtPair.methods.getReserves().call();
    setETHPrice(parseFloat(priceOfUSDTinETH.reserve1 / 1e6 / (priceOfUSDTinETH.reserve0 / 1e18)));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let interval;

    if (web3) {
      update();
      interval = setInterval(update, PRICE_REFRESH_INTERVAL);
    }

    return () => clearInterval(interval);
  }, [web3]);
  return ETHprice;
};

/* harmony default export */ __webpack_exports__["default"] = (useETHPrice);

/***/ }),

/***/ "./hooks/useLSWStats.js":
/*!******************************!*\
  !*** ./hooks/useLSWStats.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const initialState = {
  totalEthContributed: _config__WEBPACK_IMPORTED_MODULE_4__["DATA_UNAVAILABLE"],
  accountContributedEth: _config__WEBPACK_IMPORTED_MODULE_4__["DATA_UNAVAILABLE"],
  totalWETHEarmarkedForReferrers: _config__WEBPACK_IMPORTED_MODULE_4__["DATA_UNAVAILABLE"],
  referralBonusWETH: _config__WEBPACK_IMPORTED_MODULE_4__["DATA_UNAVAILABLE"],
  liquidityCredits: _config__WEBPACK_IMPORTED_MODULE_4__["DATA_UNAVAILABLE"]
};

const useLSWStats = () => {
  const yam = Object(_useYam__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const web3 = Object(_useWeb3__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_2__["useWallet"])();
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);

  const update = async () => {
    /**
     * This doesn't need to be connect to the account's wallet
     */
    if (web3) {
      const totalEthContributed = (await web3.contracts.wETH.methods.balanceOf(web3.contracts.LSW._address).call()) / 1e18;
      setData(data => _objectSpread(_objectSpread({}, data), {}, {
        totalEthContributed
      }));
    }
    /**
     * This section require the user to be connected to its wallet
     */


    if (yam && (wallet === null || wallet === void 0 ? void 0 : wallet.account)) {
      const {
        account
      } = wallet;
      const accountContributedEth = (await yam.contracts.LSW.methods.liquidityContributedInETHUnitsMapping(account).call()) / 1e18;
      const referralBonusWETH = (await yam.contracts.LSW.methods.referralBonusWETH(account).call()) / 1e18;
      const totalWETHEarmarkedForReferrers = (await yam.contracts.LSW.methods.totalWETHEarmarkedForReferrers().call()) / 1e18;
      const liquidityCreditsBN = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(await yam.contracts.LSW.methods.liquidityCreditsMapping(account).call());
      const rlpPerCreditBN = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(await yam.contracts.LSW.methods.rlpPerCredit().call());
      const claimableRlpBN = liquidityCreditsBN.multipliedBy(rlpPerCreditBN).shiftedBy(-12);
      const liquidityCredits = liquidityCreditsBN.toString() / 1e18;
      const claimableRlp = claimableRlpBN.toString() / 1e18;
      setData(data => _objectSpread(_objectSpread({}, data), {}, {
        referralBonusWETH,
        liquidityCredits,
        accountContributedEth,
        totalWETHEarmarkedForReferrers,
        claimableRlp
      }));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    update();
  }, [yam, web3]);
  return {
    update,
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useLSWStats);

/***/ }),

/***/ "./hooks/useRebasing.js":
/*!******************************!*\
  !*** ./hooks/useRebasing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config/index.js");



const REFRESH_RATE = 30 * 1000;

const useRebasing = () => {
  const web3 = Object(_useWeb3__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Here are the global vault's information, doesn't depend on connected wallet

  const {
    0: rebasingInfo,
    1: setRebasingInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nextRebaseTimestamp: _config__WEBPACK_IMPORTED_MODULE_2__["DATA_UNAVAILABLE"]
  });

  const update = async () => {
    if (!web3) return; // TODO: Update global vault infos, doesn't require connected wallet
    // Call web3 vault to get the infos.

    setRebasingInfo({
      nextRebaseTimestamp: Date.now() + 123456789
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    update();
    const interval = setTimeout(update, REFRESH_RATE);
    return () => clearInterval(interval);
  }, [web3]);
  return {
    update,
    rebasingInfo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useRebasing);

/***/ }),

/***/ "./hooks/useReferralRewardsChartData.js":
/*!**********************************************!*\
  !*** ./hooks/useReferralRewardsChartData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethereum_block_by_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethereum-block-by-date */ "ethereum-block-by-date");
/* harmony import */ var ethereum_block_by_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethereum_block_by_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LSW_STARTDATE_IN_MILLIS = 1614011341 * 1000;
const REFRESH_RATE = 1 * 60 * 60 * 1000; // once per minute

const getLocalStorageKey = address => `chart_refrewards_${address}`;

const useReferralRewardsChartData = () => {
  const web3 = Object(_useWeb3__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    account
  } = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])();
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const update = async () => {
    if (!web3 || !account) return;
    let currentData = data; // TODO: Remove before shipping

    const address = '0x3AC618DCb800E733B0C390a23DE4aA796927A9B7'; // account;

    console.log('Updating useReferralRewardsChartData...');

    if (currentData.length === 0) {
      const key = getLocalStorageKey(address);
      const storedData = localStorage.getItem(key);

      if (storedData) {
        try {
          currentData = JSON.parse(storedData);
          setData(currentData);
        } catch {
          localStorage.removeItem(key);
        }
      }
    }

    let lastBlockTimestamp = Date.now() - 3 * 24 * 60 * 60 * 1000; // LSW_STARTDATE_IN_MILLIS;

    if (currentData.length > 0) {
      const lastSample = currentData[currentData.length - 1];
      lastBlockTimestamp = new Date(lastSample.date).valueOf();
    }

    const dater = new ethereum_block_by_date__WEBPACK_IMPORTED_MODULE_2___default.a(web3.web3); // Only fetch the missing new blocks

    const newBlockInfo = await dater.getEvery('hours', lastBlockTimestamp, Date.now()); // Fetch the new information for these blocks

    const newChartData = await Promise.all(newBlockInfo.map(async blockInfo => {
      const referralBonusWETH = (await web3.contracts.LSW.methods.referralBonusWETH(address).call({}, blockInfo.block)) / 1e18;
      return _objectSpread(_objectSpread({}, blockInfo), {}, {
        referralBonusWETH
      });
    }));
    setData(data => {
      const previousLength = data.length; // Concatenate and remove duplicated block entries

      const newData = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.uniqBy([...data, ...newChartData], 'date');

      console.log(`useReferralRewardsChartData: fetched ${newData.length - previousLength} new datablocks.`);
      localStorage.setItem(getLocalStorageKey(address), JSON.stringify(newData));
      return newData;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    update();
    const interval = setInterval(update, REFRESH_RATE);
    return () => clearInterval(interval);
  }, [web3, account]);
  return {
    update,
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useReferralRewardsChartData);

/***/ }),

/***/ "./hooks/useStaking.js":
/*!*****************************!*\
  !*** ./hooks/useStaking.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config/index.js");






const REFRESH_RATE = 30 * 1000;

const useStaking = () => {
  const yam = Object(_useYam__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const web3 = Object(_useWeb3__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])(); // Here are the global vault's information, doesn't depend on connected wallet

  const {
    0: vaultStats,
    1: setVaultStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    amountTotal: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    apy: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"]
  }); // TODO: Enter the information about the user's rLP staking

  const {
    0: rlpInfo,
    1: setRlpInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    amountStaked: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    claimableEth: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    claimableDelta: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    rewardMultiplier: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"]
  }); // TODO: Enter the information about the user's Delta staking

  const {
    0: deltaInfo,
    1: setDeltaInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    amountStaked: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    claimableEth: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    claimableDelta: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    rewardMultiplier: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"],
    timeUntilDowngrade: _config__WEBPACK_IMPORTED_MODULE_5__["DATA_UNAVAILABLE"]
  });
  const {
    0: withdrawalContracts,
    1: setWithdrawalContracts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    decimals
  } = _config__WEBPACK_IMPORTED_MODULE_5__["tokenMap"][_config__WEBPACK_IMPORTED_MODULE_5__["addressMap"].delta];

  const update = async () => {
    if (!web3) return; // TODO: Update global vault infos, doesn't require connected wallet
    // Call web3 vault to get the infos.

    setVaultStats({
      delta: {
        amountTotal: 123,
        apy: 999
      },
      rLP: {
        amountTotal: 654,
        apy: 635
      }
    });
    /**
     * This section requires a connected wallet
     */

    if (!yam || !(wallet === null || wallet === void 0 ? void 0 : wallet.account)) return; // TODO: Replace using DFV contract
    // const balance = (await yam.contracts.delta.methods.balanceOf(wallet.account).call()) / 10 ** decimals;

    setRlpInfo({
      amountStaked: 123,
      claimableEth: 456,
      claimableDelta: 567,
      rewardMultiplier: 20
    });
    setDeltaInfo({
      amountStaked: 123,
      claimableEth: 456,
      claimableDelta: 888,
      rewardMultiplier: 8,
      timeUntilDowngrade: Date.now() + 8888898
    }); // TODO: remove mock data and use real contract

    setWithdrawalContracts([{
      amount: 110,
      fullVestingTimestamp: Date.now() * 1000,
      immature: 100,
      mature: 10,
      percentVested: 0.1
    }, {
      amount: 220,
      fullVestingTimestamp: Date.now() * 1000 - 99999,
      immature: 0.8 * 220,
      mature: 0.2 * 220,
      percentVested: 0.2
    }, {
      amount: 3568,
      fullVestingTimestamp: Date.now() * 1000 - 12323,
      immature: 0.5 * 3568,
      mature: 0.5 * 3568,
      percentVested: 0.5
    }]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    update(); // NEED DELETE @midas

    if (_config__WEBPACK_IMPORTED_MODULE_5__["TEMP_ENABLE_END_LSW_WEB3"]) {
      update();
      const interval = setTimeout(update, REFRESH_RATE);
      return () => clearInterval(interval);
    } // TODO: REMOVE when the mocks are no lonmger needed


    setVaultStats({
      delta: {
        amountTotal: 123,
        apy: 999
      },
      rLP: {
        amountTotal: 654,
        apy: 635
      }
    }); // TODO: REMOVE when the mocks are no lonmger needed

    setWithdrawalContracts([{
      amount: 110,
      fullVestingTimestamp: Date.now() * 1000,
      immature: 100,
      mature: 10,
      percentVested: 0.1
    }, {
      amount: 220,
      fullVestingTimestamp: Date.now() * 1000 - 99999,
      immature: 0.8 * 220,
      mature: 0.2 * 220,
      percentVested: 0.2
    }, {
      amount: 3568,
      fullVestingTimestamp: Date.now() * 1000 - 12323,
      immature: 0.5 * 3568,
      mature: 0.5 * 3568,
      percentVested: 0.5
    }]);
  }, [yam, web3, wallet]);
  return {
    update,
    rlpInfo,
    deltaInfo,
    vaultStats,
    withdrawalContracts
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useStaking);

/***/ }),

/***/ "./hooks/useTokenBalance.js":
/*!**********************************!*\
  !*** ./hooks/useTokenBalance.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config/index.js");





const REFRESH_RATE = 30 * 1000;

const useTokenBalance = tokenName => {
  var _tokenMap$tokenAddres;

  const yam = Object(_useYam__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_1__["useWallet"])();
  const {
    0: balance,
    1: setBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_4__["DATA_UNAVAILABLE"]);
  const tokenAddress = _config__WEBPACK_IMPORTED_MODULE_4__["addressMap"][tokenName];
  const decimals = ((_tokenMap$tokenAddres = _config__WEBPACK_IMPORTED_MODULE_4__["tokenMap"][tokenAddress]) === null || _tokenMap$tokenAddres === void 0 ? void 0 : _tokenMap$tokenAddres.decimals) || 18;

  const update = async () => {
    if (!yam || !(wallet === null || wallet === void 0 ? void 0 : wallet.account)) return;

    if ((tokenName === null || tokenName === void 0 ? void 0 : tokenName.toUpperCase()) === 'ETH') {
      const balance = (await yam.web3.eth.getBalance(wallet.account)).toString() / 10 ** decimals;
      setBalance(balance);
      return;
    }

    if (!(tokenName in yam.contracts)) {
      return;
    }

    const balance = (await yam.contracts[tokenName].methods.balanceOf(wallet.account).call()) / 10 ** decimals;
    setBalance(balance);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let interval;

    if (yam) {
      update();
      interval = _helpers__WEBPACK_IMPORTED_MODULE_3__["hooks"].setWalletAwareInterval(wallet, update, REFRESH_RATE);
    }

    return () => clearInterval(interval);
  }, [yam, wallet]);
  return {
    update,
    balance
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTokenBalance);

/***/ }),

/***/ "./hooks/useUserApprovalOfContract.js":
/*!********************************************!*\
  !*** ./hooks/useUserApprovalOfContract.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _useYam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useYam */ "./hooks/useYam.js");






const REFRESH_RATE = 10 * 1000;

const useUserApprovalOfContract = (contract, token) => {
  const yam = Object(_useYam__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_2__["useWallet"])();
  const {
    0: amount,
    1: setAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_config__WEBPACK_IMPORTED_MODULE_3__["DATA_UNAVAILABLE"]);

  const update = async () => {
    if (!yam || !(wallet === null || wallet === void 0 ? void 0 : wallet.account)) return;
    if (!contract || !token) return;
    const amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a(await yam.contracts[token].methods.allowance(wallet.account, yam.contracts[contract]._address).call());
    setAmount(amount);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let interval;

    if (yam) {
      update();
      interval = _helpers__WEBPACK_IMPORTED_MODULE_4__["hooks"].setWalletAwareInterval(wallet, update, REFRESH_RATE);
    }

    return () => clearInterval(interval);
  }, [yam, wallet]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    amount,
    update
  }), [amount]);
};

/* harmony default export */ __webpack_exports__["default"] = (useUserApprovalOfContract);

/***/ }),

/***/ "./hooks/useWBTCPrice.js":
/*!*******************************!*\
  !*** ./hooks/useWBTCPrice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _useETHPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useETHPrice */ "./hooks/useETHPrice.js");
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWeb3 */ "./hooks/useWeb3.js");




const initialState = _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"];

const useWBTCPrice = () => {
  const web3 = Object(_useWeb3__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const ethPrice = Object(_useETHPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    0: WBTCPrice,
    1: setWBTCPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const updateWBTCPrice = async () => {
      if (ethPrice !== _config__WEBPACK_IMPORTED_MODULE_1__["DATA_UNAVAILABLE"]) {
        const pairReserves = await web3.contracts.WBTCxWETH.methods.getReserves().call();
        const priceOfWBTCinWETH = parseFloat(pairReserves.reserve1 / 1e18 / (pairReserves.reserve0 / 1e8));
        const priceOfWBTCinUSDT = priceOfWBTCinWETH * ethPrice;
        setWBTCPrice(priceOfWBTCinUSDT);
      }
    };

    updateWBTCPrice();
  }, [ethPrice]);
  return WBTCPrice;
};

/* harmony default export */ __webpack_exports__["default"] = (useWBTCPrice);

/***/ }),

/***/ "./hooks/useWeb3.js":
/*!**************************!*\
  !*** ./hooks/useWeb3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts */ "./contexts/index.js");



const useWeb3 = () => {
  const {
    web3
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_1__["Web3Context"]);
  return web3;
};

/* harmony default export */ __webpack_exports__["default"] = (useWeb3);

/***/ }),

/***/ "./hooks/useYam.js":
/*!*************************!*\
  !*** ./hooks/useYam.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_Yam_YamContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/Yam/YamContext */ "./contexts/Yam/YamContext.js");



const useYam = () => {
  const {
    yam
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_Yam_YamContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return yam;
};

/* harmony default export */ __webpack_exports__["default"] = (useYam);

/***/ }),

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/*! exports provided: locales, defaultLocale, pages, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"locales\":[\"en\"],\"defaultLocale\":\"en\",\"pages\":{\"*\":[\"common\",\"home\"]}}");

/***/ }),

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!****************************************************!*\
  !*** ./locales lazy ^\.\/.*\/.*$ namespace object ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/common": [
		"./locales/en/common.json",
		0
	],
	"./en/common.json": [
		"./locales/en/common.json",
		0
	],
	"./en/home": [
		"./locales/en/home.json",
		1
	],
	"./en/home.json": [
		"./locales/en/home.json",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ "./i18n.json");
var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @next-translate-root/i18n */ "./i18n.json", 1);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ "next-translate/loadNamespaces");
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero/index.js");
/* harmony import */ var _components_ReferralProgram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ReferralProgram */ "./components/ReferralProgram/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Vesting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Vesting */ "./components/Vesting/index.js");
/* harmony import */ var _components_Rebasing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Rebasing */ "./components/Rebasing/index.js");
/* harmony import */ var _components_LSWStaking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LSWStaking */ "./components/LSWStaking/index.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Main() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hero__WEBPACK_IMPORTED_MODULE_3__["Hero"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LSWStaking__WEBPACK_IMPORTED_MODULE_8__["LSWStaking"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ReferralProgram__WEBPACK_IMPORTED_MODULE_4__["ReferralProgram"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Vesting__WEBPACK_IMPORTED_MODULE_6__["Vesting"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rebasing__WEBPACK_IMPORTED_MODULE_7__["Rebasing"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, this);
}
async function getStaticProps(ctx) {
  return {
    props: _objectSpread({}, await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread(_objectSpread(_objectSpread({}, ctx), {}, {
      pathname: '/index',
      loaderName: 'getStaticProps'
    }, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
      loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
    })))
  };
}

/***/ }),

/***/ "./public/Github.svg":
/*!***************************!*\
  !*** ./public/Github.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyNiAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNjI5NjUgMjcuMjY2NUwxOS4wMTg3IDI3LjI2NDJDMTguNTEwMSAyNy4yNDI2IDE4LjIxODcgMjYuODczOCAxOC4yMTkxIDI2LjIwNjJDMTguMjE5OCAyNC44Mjc4IDE4LjIxNDkgMjMuNDQ5MyAxOC4yMzM0IDIyLjA3MTNDMTguMjUxMSAyMC43MzU0IDE4LjA5NDIgMTkuNDU5OSAxNy4wOTM3IDE4LjQxNDdDMTcuODU3MiAxOC4yNjQ4IDE4LjU4MjMgMTguMTU2IDE5LjI5IDE3Ljk3NzJDMjEuMzg1NSAxNy40NDcyIDIzLjE1NTggMTYuNDE5OCAyNC4xMTAzIDE0LjM5MjNDMjUuMTUyIDEyLjE4MDQgMjUuNDMwOSA5Ljg0OTgzIDI0LjY2NTYgNy40OTYzNEMyNC40MTQ2IDYuNzI0MjEgMjMuODYwNyA2LjA1MjQ0IDIzLjQ2MzkgNS4zMjQ1MUMyMy4zODQxIDUuMTc4MTEgMjMuMzIwMyA0Ljk2NjUgMjMuMzYzMiA0LjgxNzk5QzIzLjc2NTIgMy40MjcwMSAyMy42NTg4IDIuMDY0OTYgMjMuMTU0MyAwLjcyODM3OUMyMy4xMDUyIDAuNTk4Njc0IDIyLjg3ODIgMC40NTg1NDQgMjIuNzMxNSAwLjQ1NTc1M0MyMS44OTMxIDAuNDQwNzcyIDIxLjExNDMgMC43MTI3MTQgMjAuMzc0OSAxLjA3NDJDMTkuNzM5MyAxLjM4NTIyIDE5LjEzODcgMS43NjY1OSAxOC41MTEyIDIuMDk0NjRDMTguMzU4MiAyLjE3NDc5IDE4LjE0NDQgMi4yMjk4NyAxNy45ODQ0IDIuMTkxMTlDMTUuMjI3OSAxLjUyMjU2IDEyLjQ3NjMgMS41MTk3NyA5LjcxOTQ3IDIuMTg4NzRDOS41NDg5NyAyLjIzMDIxIDkuMzEyNjMgMi4xNzA5NyA5LjE1NzQ3IDIuMDc1NzlDOC4wMDMyMiAxLjM2ODA4IDYuODMxNDkgMC43MDg4OTggNS40NzAxOSAwLjQ4MzY2NUM1LjQyOSAwLjQ3NjY1OSA1LjM4ODYxIDAuNDY2MjM1IDUuMzQ3MDkgMC40NjA2NTJDNC42Njc5NyAwLjM2NzkxNiA0LjYxMTE4IDAuNDAxMDY5IDQuNDA3MiAxLjA2NjU3QzQuMDE4NDggMi4zMzM3NyAzLjk1ODU1IDMuNjA0NTEgNC4zNTA3NCA0Ljg4NjAxQzQuMzg1OTUgNS4wMDA2NyA0LjM0MzA1IDUuMTg5MjggNC4yNjM5MyA1LjI4MTMzQzIuNjk3OTYgNy4xMDM1OCAyLjQyNDMxIDkuMjM4MSAyLjczMDAzIDExLjUxODRDMi45MjUyNCAxMi45NzQzIDMuMzQ5OSAxNC4zNDIyIDQuMjc4NTcgMTUuNTEwN0M1LjQxNjgxIDE2Ljk0MzIgNi45NzMzMyAxNy42NjQ1IDguNzA1OTggMTguMDY1NEM5LjMwNzY4IDE4LjIwNDkgOS45MjEyMyAxOC4yOTUyIDEwLjU4MzYgMTguNDE3OUM5Ljk4NzgyIDE5LjA1MDIgOS42OTIxOCAxOS43NzE1IDkuNTMzOTQgMjAuNTYyNkM5LjUxMzMyIDIwLjY2NDMgOS4zNzQyMSAyMC43NzU5IDkuMjY0NzkgMjAuODIxOUM3LjMwMjEyIDIxLjY0NzEgNS41NTc2MiAyMS4xMDAxIDQuNDI0MjggMTkuMzEzMUMzLjg1MTEyIDE4LjQwOTkgMy4xMDIzNCAxNy43MzA3IDIuMDE5NTMgMTcuNTI3NUMxLjc0MzgzIDE3LjQ3NTkgMS40MzgzOSAxNy41MTU2IDEuMTU4ODEgMTcuNTcyNUMwLjg4MTY4OCAxNy42Mjg3IDAuODQ4ODc3IDE3LjgzODkgMS4wMjQyNyAxOC4wNDM1QzEuMTU4NDcgMTguMjAwMyAxLjMxMTgyIDE4LjM1NDggMS40ODcyMSAxOC40NTk4QzIuNDI2NDIgMTkuMDIxMSAzLjAyOTQ4IDE5Ljg2MjIgMy40Mjk3MSAyMC44NDU3QzQuMTA1MzUgMjIuNTA1OCA1LjQwODEgMjMuMjI5MiA3LjEwMzQzIDIzLjMyNjhDNy44NzIwOSAyMy4zNzExIDguNjQ5NTMgMjMuMjY4MiA5LjQ2Mzg3IDIzLjIzMDJDOS40NjM4NyAyNC4zMTY1IDkuNDkzMTUgMjUuNDQyNSA5LjQ1MTY4IDI2LjU2NjFDOS40MzU2MiAyNi45OTg0IDkuMDg1OTggMjcuMjUzOSA4LjYyOTY1IDI3LjI1OTFWMjcuMjY2NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/HeaderLogo.svg":
/*!*******************************!*\
  !*** ./public/HeaderLogo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTQ1IDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTYxLjM4NzIgMTQuMzExOEM2MS4zODcyIDIxLjcyODQgNTcuMDE2NyAyOC4zMDQ4IDUwLjAyOTggMjguMzA0OEgzOC45MzEzVjI3Ljg0MTJDMzkuOTA4OSAyNy43NTQzIDQxLjExNjUgMjYuODg1MiA0MS4xMTY1IDI0LjcxMjRWNC41MTk1N0M0MS4xMTY1IDIuMDg2MDEgNDAuMDUyNiAxLjQ3NzYxIDM4LjkzMTMgMS4zOTA3VjAuODk4MTkzSDQ4LjMwNDdDNTUuNDY0MSAwLjg5ODE5MyA2MS4zODcyIDcuMDk3OTkgNjEuMzg3MiAxNC4zMTE4Wk01Ny41MzQzIDE2LjU3MTVDNTcuNTM0MyAxMC4yODQ4IDU2LjUyOCAzLjQ0NzY0IDQ5LjkxNDggMS44NTQyNEM0OC42Nzg1IDEuNTY0NTMgNDYuNjk0NSAxLjQ3NzYxIDQ0LjczOTMgMS40Nzc2MVYyNy4wMzAxQzQ2LjIwNTcgMjcuNDA2NyA0OC4zMzM0IDI3LjcyNTQgNDkuOTQzNiAyNy43MjU0QzU0Ljg2MDMgMjcuNzI1NCA1Ny41MzQzIDIzLjQ5NTYgNTcuNTM0MyAxNi41NzE1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTgzLjUyNyAyMC44ODgxTDgxLjE5OCAyOS4wMjlDODAuMzM1NSAyOC42MjM0IDc5LjQ3MjkgMjguMzA0NyA3Ni4zOTYzIDI4LjMwNDdINjIuOTk3NlYyNy44MTIyQzY0LjE3NjQgMjcuNzI1MyA2NS4xODI4IDI2Ljg4NTEgNjUuMTgyOCAyNC45MTUxVjQuMzQ1NjVDNjUuMTgyOCAyLjI4ODcxIDY0LjExODkgMS41MDY0OSA2Mi45OTc2IDEuMzkwNjFWMC44OTgxMDJINzUuNjJDNzguODk3OCAwLjg5ODEwMiA4MC4xOTE3IDAuMjg5NzEgODAuNjgwNSAwTDgyLjg5NDQgNy4zODc2MUg4Mi4zMTk0QzgwLjc2NjcgMy41OTI0MSA3OS4yNzE2IDEuNTA2NDkgNzIuMzQyMiAxLjUwNjQ5SDY4LjgwNTZWMTIuMzEyN0g3My4wNjFDNzYuMTA4OCAxMi4zMTI3IDc3LjE3MjcgMTEuMjk4NyA3Ny4yODc3IDkuMTU0ODVINzcuNzc2NVYxNi4wNzg5SDc3LjI4NzdDNzcuMDg2NCAxMy44NDgyIDc2LjEwODggMTIuODkyMSA3My4wNjEgMTIuODkyMUg2OC44MDU2VjI2Ljk3MkM2OS45MjcgMjcuNDY0NSA3MS40MjIxIDI3Ljc4MzIgNzMuNDkyMyAyNy43ODMyQzc4LjUyNCAyNy43ODMyIDgxLjE5OCAyNi4xMDI5IDgyLjk1MiAyMC45NDYxSDgzLjUyN1YyMC44ODgxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwNC42MDMgMjAuMTA2TDEwMi40MTcgMjkuMDAwMUMxMDEuNDExIDI4LjUzNjUgMTAwLjIwMyAyOC4yNzU4IDk3Ljk2MDYgMjguMjc1OEg4NC42NzY5VjI3Ljc4MzNDODUuNjU0NSAyNy42OTY0IDg2Ljg2MjEgMjcuMDU5IDg2Ljg2MjEgMjQuNzEyNFY0LjUxOTU3Qzg2Ljg2MjEgMi4wODYwMSA4NS43OTgyIDEuNDQ4NjQgODQuNjc2OSAxLjM2MTczVjAuODk4MTkzSDkyLjY0MTRWMS4zNjE3M0M5MS40MzM4IDEuNDQ4NjQgOTAuNDg0OSAyLjA4NjAxIDkwLjQ4NDkgNC41MTk1N1YyNi45NDMxQzkxLjU3NzUgMjcuNDA2NyA5My4wNDM5IDI3LjY5NjQgOTUuMDU2NiAyNy42OTY0Qzk5Ljc3MjEgMjcuNjk2NCAxMDIuMzAyIDI2LjU5NTUgMTA0LjAyNyAyMC4wNzdIMTA0LjYwM1YyMC4xMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIzLjc1MiA4LjU0NjQ1SDEyMy4yMzRDMTIyLjE3IDQuNDAzNiAxMjAuOTYzIDEuMzkwNjEgMTE1LjY0NCAxLjM5MDYxSDExNC4xNDhWMjQuNzEyM0MxMTQuMTQ4IDI3LjAwMSAxMTUuMzU2IDI3LjcyNTMgMTE2LjMwNSAyNy43ODMyVjI4LjI3NTdIMTA4LjM0VjI3LjgxMjJDMTA5LjMxOCAyNy43MjUzIDExMC40OTcgMjYuOTcyIDExMC40OTcgMjQuNjgzM1YxLjQxOTU4SDEwOC45NDRDMTAzLjYyNSAxLjQxOTU4IDEwMi4zMzEgNC40MzI1NyAxMDEuMzgyIDguNTc1NDJIMTAwLjgwN0wxMDIuNDc1IDBDMTAzLjM5NSAwLjQwNTU5NCAxMDQuNjAyIDAuODk4MTAyIDEwNy4xNjEgMC44OTgxMDJIMTE3LjQyNkMxMTkuODQxIDAuODk4MTAyIDEyMS4zMDggMC40MDU1OTQgMTIyLjExMyAwTDEyMy43NTIgOC41NDY0NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNDUgMjcuNzgzM1YyOC4yNzU4SDEzNi4wODdWMjcuNzgzM0MxMzcuMDA3IDI3LjU4MDUgMTM3Ljg5OCAyNy4yOTA4IDEzOC4wMTMgMjUuOTI5MUMxMzguMTU3IDI1LjA2IDEzNy44MTIgMjMuNzg1MyAxMzcuMjk0IDIyLjE2MjlMMTM2LjE3MyAxOC43NDQzSDEyNi45NzJDMTI1LjkwOCAyMS45MzExIDEyNS4xNjEgMjQuNDIyNyAxMjUuMjQ3IDI1LjUyMzZDMTI1LjM2MiAyNy4zNDg3IDEyNi43NzEgMjcuNzU0MyAxMjcuNzQ5IDI3LjgxMjNWMjguMzA0OEgxMjAuMzg4VjI3LjgxMjNDMTIxLjg4MyAyNy43ODMzIDEyMy4xNzcgMjcuMTc0OSAxMjQuMTI2IDI0Ljc0MTNDMTI1LjA3NSAyMi4xNjI5IDEyNi42NTYgMTcuNzg4MyAxMjcuNDYxIDE1LjM4MzdDMTI5LjkwNSA3LjgyMjI2IDEzMC45NjkgNC45NTQxMyAxMzAuOTY5IDMuMjQ0ODRDMTMwLjk2OSAyLjYzNjQ0IDEzMC45NCAyLjA1NzAyIDEzMC43NjggMS41MDY1N0MxMzEuNzc0IDEuMjQ1ODQgMTMyLjk1MyAwLjYzNzQ0NCAxMzMuOTAyIDAuMDI5MDUyN0wxNDAuNzczIDIxLjM1MTdDMTQxLjg2NiAyNC44NTcyIDE0Mi40NDEgMjcuNDA2NyAxNDUgMjcuNzgzM1pNMTM2LjAwMSAxOC4xNjQ5TDEzMS40NTggNC4yODc3OUMxMzAuOTk4IDYuNjkyMzkgMTI5LjUwMiAxMS4wNjcgMTI4LjA2NSAxNS40NDE2QzEyNy43NzcgMTYuMzk3NyAxMjcuNDYxIDE3LjI5NTggMTI3LjE0NSAxOC4xOTM5SDEzNi4wMDFWMTguMTY0OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMC4wNDA2IDI4LjMwNDhIMzEuNjg1NUwxNS44NDI4IDAuNjM3NDUxTDAgMjguMzA0OEgxMS42NDQ5TDYuMTI0MzMgMjQuOTQ0MUw5Ljk3NzE5IDE4LjIyMjlDMTQuMzE4OSAyMC40ODI2IDE1Ljg0MjggMjguMzA0OCAxNS44NDI4IDI4LjMwNDhDMTUuODQyOCAyOC4zMDQ4IDE3LjI1MTYgMjAuNDUzNiAyMS42Nzk2IDE4LjIyMjlMMjUuNTMyNCAyNC45NzMxTDIwLjA0MDYgMjguMzA0OFpNMTAuMDYzNSAxOC4xMDdMMTUuODcxNSA3Ljk2NzEyTDIxLjY1MDggMTguMTA3SDEwLjA2MzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0NSIgaGVpZ2h0PSIyOSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/MediumJoin.svg":
/*!*******************************!*\
  !*** ./public/MediumJoin.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0Ljg0NTYgMi41ODU1OEwyNyAwLjQ2NDMxNlYwSDE5LjUzNjdMMTQuMjE3NyAxMy42MjYxTDguMTY2MzggMEgwLjM0MDg3NVYwLjQ2NDMxNkwyLjg1NzUgMy41ODI1M0MzLjEwMjc1IDMuODEyOTUgMy4yMzEgNC4xNDk4OSAzLjE5ODM3IDQuNDg5MTZWMTYuNzQzMkMzLjI3NiAxNy4xODQzIDMuMTM2NSAxNy42MzgyIDIuODM1IDE3Ljk1ODlMMCAyMS40OTUyVjIxLjk1MzdIOC4wMzgxM1YyMS40ODk0TDUuMjAzMTIgMTcuOTU4OUM0Ljg5NiAxNy42MzcxIDQuNzUwODcgMTcuMTkxMyA0LjgxMjc1IDE2Ljc0MzJWNi4xNDM3OUwxMS44Njg4IDIxLjk1OTVIMTIuNjg4OUwxOC43NTYgNi4xNDM3OVYxOC43NDI4QzE4Ljc1NiAxOS4wNzUyIDE4Ljc1NiAxOS4xNDM1IDE4LjU0NDUgMTkuMzYxMkwxNi4zNjIgMjEuNTM0NVYyMkgyNi45NTA1VjIxLjUzNTdMMjQuODQ2OCAxOS40MTU2QzI0LjY2MjMgMTkuMjcyIDI0LjU2NjYgMTkuMDMxMiAyNC42MDYgMTguNzk3M1YzLjIwMzg5QzI0LjU2NjYgMi45Njg4NCAyNC42NjExIDIuNzI4IDI0Ljg0NTYgMi41ODU1OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/Telegram.svg":
/*!*****************************!*\
  !*** ./public/Telegram.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAzNCAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjM0MTMgMTcuNzk0OEwxMi43Nzg5IDI1LjMzMzJDMTMuNTgzNiAyNS4zMzMyIDEzLjkzMjEgMjUuMDAzOCAxNC4zNSAyNC42MDgyTDE4LjEyMjcgMjEuMTcyNUwyNS45NCAyNi42Mjc4QzI3LjM3MzcgMjcuMzg5MiAyOC4zODM5IDI2Ljk4ODMgMjguNzcwNiAyNS4zNzFMMzMuOTAxOSAyLjQ1ODg4TDMzLjkwMzMgMi40NTc1M0MzNC4zNTgxIDAuNDM3OTQ1IDMzLjEzNjkgLTAuMzUxODAxIDMxLjc0IDAuMTQzNjQ3TDEuNTc4NDYgMTEuMTQ3NEMtMC40ODAwMSAxMS45MDg4IC0wLjQ0ODg0MiAxMy4wMDIzIDEuMjI4NTMgMTMuNDk3OEw4LjkzOTYzIDE1Ljc4MzNMMjYuODUxIDUuMTAzNTJDMjcuNjkzOSA0LjU3MTYyIDI4LjQ2MDQgNC44NjU5MiAyNy44Mjk5IDUuMzk3ODJMMTMuMzQxMyAxNy43OTQ4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/Twitter.svg":
/*!****************************!*\
  !*** ./public/Twitter.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAzMyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjcyNzEgMy4yOTIzM0MzMS41MTc4IDMuODIyODIgMzAuMjI5MiA0LjE3NDQ0IDI4Ljg4NTcgNC4zNDUxN0MzMC4yNjc4IDMuNTE5OTcgMzEuMzIyNyAyLjIyMzIzIDMxLjgxODYgMC42NjAyMzhDMzAuNTMgMS40Mjg1MiAyOS4xMDcyIDEuOTcxMiAyNy41OTEgMi4yNzQwNUMyNi4zNjc0IDAuOTcxMjExIDI0LjYyMzUgMC4xNjQzMDcgMjIuNzIxMSAwLjE2NDMwN0MxOS4wMzAxIDAuMTY0MzA3IDE2LjA1ODUgMy4xNjAyMiAxNi4wNTg1IDYuODMyOTZDMTYuMDU4NSA3LjM2MTQxIDE2LjEwMzMgNy44Njk1MyAxNi4yMTMgOC4zNTMyN0MxMC42NzA0IDguMDgyOTUgNS43NjU5MyA1LjQyNjQ2IDIuNDcxMjQgMS4zNzk3NEMxLjg5NjA0IDIuMzc3NyAxLjU1ODY1IDMuNTE5OTcgMS41NTg2NSA0Ljc0OTY0QzEuNTU4NjUgNy4wNTg1NiAyLjc0NzY2IDkuMTA1MyA0LjUyMDAxIDEwLjI5MDJDMy40NDg4OCAxMC4yNjk5IDIuMzk4MDcgOS45NTg5NSAxLjUwNzgzIDkuNDY5MTJDMS41MDc4MyA5LjQ4OTQ0IDEuNTA3ODMgOS41MTU4NiAxLjUwNzgzIDkuNTQyMjlDMS41MDc4MyAxMi43ODIxIDMuODE4NzkgMTUuNDczMSA2Ljg0OTI2IDE2LjA5MzFDNi4zMDY1OCAxNi4yNDE0IDUuNzE1MTIgMTYuMzEyNiA1LjEwMTMgMTYuMzEyNkM0LjY3NDQ4IDE2LjMxMjYgNC4yNDM1OSAxNi4yODgyIDMuODM5MTIgMTYuMTk4N0M0LjcwMjkzIDE4LjgzOSA3LjE1NDEzIDIwLjc4IDEwLjA2ODcgMjAuODQzQzcuODAwNDcgMjIuNjE3NCA0LjkyMDQxIDIzLjY4NjUgMS44MDI1NSAyMy42ODY1QzEuMjU1OCAyMy42ODY1IDAuNzMxNDE4IDIzLjY2MjEgMC4yMDcwMzEgMjMuNTk1QzMuMTYwMjYgMjUuNDk5NSA2LjY2MDI0IDI2LjU4NjkgMTAuNDM0NiAyNi41ODY5QzIyLjcwMjggMjYuNTg2OSAyOS40MTAxIDE2LjQyNDMgMjkuNDEwMSA3LjYxNTQ3QzI5LjQxMDEgNy4zMjA3NiAyOS4zOTk5IDcuMDM2MjEgMjkuMzg1NyA2Ljc1MzY5QzMwLjcwODggNS44MTQ2NyAzMS44MjA2IDQuNjQxOTIgMzIuNzI3MSAzLjI5MjMzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/chevron.svg":
/*!****************************!*\
  !*** ./public/chevron.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUwxNiAxOC41TDMxIDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/plus-black.svg":
/*!*******************************!*\
  !*** ./public/plus-black.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjUuNSIgeDI9IjExIiB5Mj0iNS41IiBzdHJva2U9IiMwMDAwMDAiLz4KPGxpbmUgeDE9IjUuNSIgeTE9IjExIiB4Mj0iNS41IiBzdHJva2U9IiMwMDAwMDAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/plus-gray.svg":
/*!******************************!*\
  !*** ./public/plus-gray.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjUuNSIgeDI9IjExIiB5Mj0iNS41IiBzdHJva2U9IiM3MDcyNzUiLz4KPGxpbmUgeDE9IjUuNSIgeTE9IjExIiB4Mj0iNS41IiBzdHJva2U9IiM3MDcyNzUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/plus.svg":
/*!*************************!*\
  !*** ./public/plus.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeTE9IjUuNSIgeDI9IjExIiB5Mj0iNS41IiBzdHJva2U9IndoaXRlIi8+CjxsaW5lIHgxPSI1LjUiIHkxPSIxMSIgeDI9IjUuNSIgc3Ryb2tlPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: verifyAddressMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyAddressMap", function() { return verifyAddressMap; });
/**
 * Make sure there's no duplicated address in the address map.
 */
const verifyAddressMap = addressMap => {
  const values = Object.values(addressMap);

  const findDuplicated = values => values.filter((item, index) => values.indexOf(item) !== index);

  const duplicatedAddress = findDuplicated(values);

  if (duplicatedAddress.length !== 0) {
    throw new Error(`Duplicates found in the address map: ${duplicatedAddress.join(', ')}`);
  }
};

/***/ }),

/***/ "./web3/Web3Client.js":
/*!****************************!*\
  !*** ./web3/Web3Client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Web3Client; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yam_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yam/contracts */ "./yam/contracts.js");


class Web3Client {
  constructor(apiUrl, options) {
    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(apiUrl);
    this.contracts = new _yam_contracts__WEBPACK_IMPORTED_MODULE_1__["Contracts"](this.web3, options);
  }

}

/***/ }),

/***/ "./web3/index.js":
/*!***********************!*\
  !*** ./web3/index.js ***!
  \***********************/
/*! exports provided: Web3Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Web3Client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Web3Client */ "./web3/Web3Client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Web3Client", function() { return _Web3Client__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./yam/Yam.js":
/*!********************!*\
  !*** ./yam/Yam.js ***!
  \********************/
/*! exports provided: Yam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Yam", function() { return Yam; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts */ "./yam/contracts.js");


class Yam {
  constructor(provider, options) {
    let realProvider;

    if (typeof provider === 'string') {
      if (provider.includes('wss')) {
        realProvider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.WebsocketProvider(provider, options.ethereumNodeTimeout || 10000);
      } else {
        realProvider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider(provider, options.ethereumNodeTimeout || 10000);
      }
    } else {
      realProvider = provider;
    }

    this.web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(realProvider);
    this.contracts = new _contracts__WEBPACK_IMPORTED_MODULE_1__["Contracts"](this.web3, options);
  }

}

/***/ }),

/***/ "./yam/contracts.js":
/*!**************************!*\
  !*** ./yam/contracts.js ***!
  \**************************/
/*! exports provided: Contracts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contracts", function() { return Contracts; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _contracts_IERC20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/IERC20.json */ "./contracts/IERC20.json");
var _contracts_IERC20_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/IERC20.json */ "./contracts/IERC20.json", 1);
/* harmony import */ var _contracts_weth_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/weth.json */ "./contracts/weth.json");
var _contracts_weth_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/weth.json */ "./contracts/weth.json", 1);
/* harmony import */ var _contracts_unifact2_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contracts/unifact2.json */ "./contracts/unifact2.json");
var _contracts_unifact2_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/unifact2.json */ "./contracts/unifact2.json", 1);
/* harmony import */ var _contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/uni2.json */ "./contracts/uni2.json");
var _contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/uni2.json */ "./contracts/uni2.json", 1);
/* harmony import */ var _contracts_uniR_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/uniR.json */ "./contracts/uniR.json");
var _contracts_uniR_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/uniR.json */ "./contracts/uniR.json", 1);
/* harmony import */ var _contracts_CORE_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/CORE.json */ "./contracts/CORE.json");
var _contracts_CORE_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/CORE.json */ "./contracts/CORE.json", 1);
/* harmony import */ var _contracts_WBTC_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contracts/WBTC.json */ "./contracts/WBTC.json");
var _contracts_WBTC_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/WBTC.json */ "./contracts/WBTC.json", 1);
/* harmony import */ var _contracts_cBTC_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contracts/cBTC.json */ "./contracts/cBTC.json");
var _contracts_cBTC_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/cBTC.json */ "./contracts/cBTC.json", 1);
/* harmony import */ var _contracts_cDAI_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contracts/cDAI.json */ "./contracts/cDAI.json");
var _contracts_cDAI_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/cDAI.json */ "./contracts/cDAI.json", 1);
/* harmony import */ var _contracts_wCORE_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contracts/wCORE.json */ "./contracts/wCORE.json");
var _contracts_wCORE_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/wCORE.json */ "./contracts/wCORE.json", 1);
/* harmony import */ var _contracts_LSW_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contracts/LSW.json */ "./contracts/LSW.json");
var _contracts_LSW_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/LSW.json */ "./contracts/LSW.json", 1);
/* harmony import */ var _contracts_DELTA_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contracts/DELTA.json */ "./contracts/DELTA.json");
var _contracts_DELTA_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/DELTA.json */ "./contracts/DELTA.json", 1);
/* harmony import */ var _contracts_rLP_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contracts/rLP.json */ "./contracts/rLP.json");
var _contracts_rLP_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../contracts/rLP.json */ "./contracts/rLP.json", 1);














class Contracts {
  constructor(web3) {
    this.web3 = web3; // Uniswap

    this.uniswapRouter = new web3.eth.Contract(_contracts_uniR_json__WEBPACK_IMPORTED_MODULE_5__);
    this.uniswapFactory = new web3.eth.Contract(_contracts_unifact2_json__WEBPACK_IMPORTED_MODULE_3__); // Tokens

    this.core = new web3.eth.Contract(_contracts_CORE_json__WEBPACK_IMPORTED_MODULE_6__.abi);

    if (_config__WEBPACK_IMPORTED_MODULE_0__["TEMP_ENABLE_END_LSW_WEB3"]) {
      this.delta = new web3.eth.Contract(_contracts_DELTA_json__WEBPACK_IMPORTED_MODULE_12__.abi);
    }

    this.rLP = new web3.eth.Contract(_contracts_rLP_json__WEBPACK_IMPORTED_MODULE_13__.abi);
    this.wCORE = new web3.eth.Contract(_contracts_wCORE_json__WEBPACK_IMPORTED_MODULE_10__.abi);
    this.cDAI = new web3.eth.Contract(_contracts_cDAI_json__WEBPACK_IMPORTED_MODULE_9__.abi);
    this.wBTC = new web3.eth.Contract(_contracts_WBTC_json__WEBPACK_IMPORTED_MODULE_7__.abi);
    this.wETH = new web3.eth.Contract(_contracts_weth_json__WEBPACK_IMPORTED_MODULE_2__);
    this.cBTC = new web3.eth.Contract(_contracts_cBTC_json__WEBPACK_IMPORTED_MODULE_8__.abi);
    this.erc20 = new web3.eth.Contract(_contracts_IERC20_json__WEBPACK_IMPORTED_MODULE_1__.abi);
    this.genericErc20 = new web3.eth.Contract(_contracts_CORE_json__WEBPACK_IMPORTED_MODULE_6__.abi); // CORE ABI has decimals ERC20 doesn't...
    // Pairs

    this.genericUniswapPair = new web3.eth.Contract(_contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__);
    this.coreCbtcPair = new web3.eth.Contract(_contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__);
    this.coreWethPair = new web3.eth.Contract(_contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__);
    this.cDaiWcorePair = new web3.eth.Contract(_contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__);
    this.wBtcWethPair = new web3.eth.Contract(_contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__);
    this.ethUsdtPair = new web3.eth.Contract(_contracts_uni2_json__WEBPACK_IMPORTED_MODULE_4__);
    this.LSW = new web3.eth.Contract(_contracts_LSW_json__WEBPACK_IMPORTED_MODULE_11__.abi);

    this._updateContractAddresses();
  }

  _updateContractAddresses() {
    // Tokens
    this.wBTC.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].wBTC;
    this.wETH.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].wETH;
    this.core.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].core;

    if (_config__WEBPACK_IMPORTED_MODULE_0__["TEMP_ENABLE_END_LSW_WEB3"]) {
      this.delta.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].delta;
    }

    this.rLP.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].rLP;
    this.cBTC.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].cBTC;
    this.cDAI.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].cDAI; // Pairs

    this.uniswapFactory.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].uniswapFactoryV2;
    this.uniswapRouter.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].uniswapRouter;
    this.coreCbtcPair.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].coreCbtc;
    this.coreWethPair.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].coreWeth;
    this.cDaiWcorePair.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].cDaiWcore;
    this.wBtcWethPair.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].wbtcWeth;
    this.ethUsdtPair.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].ethUsdt;
    this.LSW.options.address = _config__WEBPACK_IMPORTED_MODULE_0__["addressMap"].LSW;
  }

}

/***/ }),

/***/ "./yam/index.js":
/*!**********************!*\
  !*** ./yam/index.js ***!
  \**********************/
/*! exports provided: Yam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Yam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Yam */ "./yam/Yam.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Yam", function() { return _Yam__WEBPACK_IMPORTED_MODULE_0__["Yam"]; });



/***/ }),

/***/ "@windmill/react-ui":
/*!*************************************!*\
  !*** external "@windmill/react-ui" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@windmill/react-ui");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),

/***/ "bignumber.js/bignumber":
/*!*****************************************!*\
  !*** external "bignumber.js/bignumber" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bignumber.js/bignumber");

/***/ }),

/***/ "ethereum-block-by-date":
/*!*****************************************!*\
  !*** external "ethereum-block-by-date" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethereum-block-by-date");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-wallet":
/*!*****************************!*\
  !*** external "use-wallet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-wallet");

/***/ }),

/***/ "victory":
/*!**************************!*\
  !*** external "victory" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("victory");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vRGVsdGFCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vVHJhbnNhY3Rpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zL0Nvbm5lY3RXYWxsZXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25zL0ZhbmN5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW11bml0eS9Db21tdW5pdHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tdW5pdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXQvVG9rZW5JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTFNXU3Rha2luZy9MU1dTdGFraW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTFNXU3Rha2luZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9NYWluTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyQ291bnREb3duLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXJEaWFtb25kcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Zlc3RpbmdUcmFuc2FjdGlvblByb2dyZXNzQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWJhc2luZy9SZWJhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlYmFzaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVmZXJyYWxQcm9ncmFtL1JlZmVycmFsUHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZmVycmFsUHJvZ3JhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb24vRGVsdGFQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb24vRGVsdGFTZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdGlvbi9EZWx0YVNlY3Rpb25Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3Bpbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL0RlbHRhVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9EZWx0YVRpdGxlSDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9EZWx0YVRpdGxlSDIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9EZWx0YVRpdGxlSDMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9EZWx0YVRpdGxlSDQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Zlc3RpbmcvVmVzdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Zlc3RpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0dsb2JhbEhvb2tzL0dsb2JhbEhvb2tzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9HbG9iYWxIb29rcy9HbG9iYWxIb29rc1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0dsb2JhbEhvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL01vZGFsL01vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Nb2RhbC9Nb2RhbFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1NldHRpbmdzL1NldHRpbmdzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9TZXR0aW5ncy9TZXR0aW5nc1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1dhbGxldC9XYWxsZXRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1dhbGxldC9XYWxsZXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9XZWIzL1dlYjNDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1dlYjMvV2ViM1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1lhbS9ZYW1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1lhbS9ZYW1Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2Zvcm1hdHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3RyYW5zYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VDb3JlUGFpckJhbGFuY2VzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZURlbHRhLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUVUSFByaWNlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUxTV1N0YXRzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVJlYmFzaW5nLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVJlZmVycmFsUmV3YXJkc0NoYXJ0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VTdGFraW5nLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVRva2VuQmFsYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VVc2VyQXBwcm92YWxPZkNvbnRyYWN0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVdCVENQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VXZWIzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVlhbS5qcyIsIndlYnBhY2s6Ly8vLi9sb2NhbGVzIGxhenkgXlxcLlxcLy4qXFwvLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL0hlYWRlckxvZ28uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9NZWRpdW1Kb2luLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvVGVsZWdyYW0uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9Ud2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY2hldnJvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3BsdXMtYmxhY2suc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9wbHVzLWdyYXkuc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy9wbHVzLnN2ZyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93ZWIzL1dlYjNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi95YW0vWWFtLmpzIiwid2VicGFjazovLy8uL3lhbS9jb250cmFjdHMuanMiLCJ3ZWJwYWNrOi8vLy4veWFtL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3aW5kbWlsbC9yZWFjdC11aVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJpZ251bWJlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJpZ251bWJlci5qcy9iaWdudW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldGhlcmV1bS1ibG9jay1ieS1kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXRoZXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVzZS13YWxsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2aWN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkRlbHRhQnV0dG9uIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsYWJlbEJvdHRvbSIsImhpZGVQbHVzIiwic2Vjb25kYXJ5TG9vayIsImdyYXlMb29rIiwicHJvcHMiLCJwbHVzQmxhY2siLCJwbHVzR3JheSIsInBsdXMiLCJUcmFuc2FjdGlvbkJ1dHRvbiIsIm9uQ2xpY2siLCJhbGxvd2FuY2VSZXF1aXJlZEZvciIsImljb24iLCJ0ZXh0IiwidGV4dExvYWRpbmciLCJ0ZXh0QXBwcm92ZSIsInRleHRBcHByb3ZpbmciLCJzZWNvbmRhcnlMb29rcyIsImNvbnRyYWN0IiwidW5kZWZpbmVkIiwidG9rZW4iLCJ5YW0iLCJ1c2VZYW0iLCJ3YWxsZXQiLCJ1c2VXYWxsZXQiLCJtb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInRva2VuQmFsYW5jZSIsInVzZVRva2VuQmFsYW5jZSIsImFwcHJvdmFsIiwidXNlVXNlckFwcHJvdmFsT2ZDb250cmFjdCIsImFsbG93YW5jZVNhdGlzZmllZCIsInNldEFsb3dhbmNlU2F0aXNmaWVkIiwiaW5pdGlhbGl6ZWQiLCJzZXRJbml0aWFsaXplZCIsInVzZUVmZmVjdCIsImFtb3VudCIsIkRBVEFfVU5BVkFJTEFCTEUiLCJiYWxhbmNlIiwiZ3RlIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiaGFuZGxlQXBwcm92YWwiLCJjb250cmFjdHMiLCJfYWRkcmVzcyIsInRyYW5zYWN0aW9uIiwibWV0aG9kcyIsImFwcHJvdmUiLCJldGhlcnMiLCJjb25zdGFudHMiLCJNYXhVaW50MjU2IiwiZ2FzRXN0aW1hdGlvbiIsImVzdGltYXRlR2FzIiwiZnJvbSIsImFjY291bnQiLCJzZW5kIiwiZXJyb3IiLCJ0cmFuc2FjdGlvbkVycm9yIiwiZXJyb3JzIiwiZ2V0VHJhbnNhY3Rpb25FcnJvciIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJ1cGRhdGUiLCJoYW5kbGVUcmFuc2FjdGlvbiIsIkVycm9yIiwicmVuZGVyQnV0dG9uVGV4dCIsIm1hcmdpblJpZ2h0IiwiQ29ubmVjdFdhbGxldEJ1dHRvbiIsInNob3dDb25uZWN0V2FsbGV0IiwiRmFuY3lCdXR0b24iLCJpbWFnZSIsInVybCIsImdvdXJsIiwid2luZG93Iiwib3BlbiIsIkpvaW5CdXR0b24iLCJsb2dvIiwidGl0bGUiLCJDb21tdW5pdHkiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ0d2l0dGVyIiwidGVsZWdyYW0iLCJtZWRpdW0iLCJnaXRodWIiLCJIZXJvIiwiVG9rZW5JbnB1dCIsImJ1dHRvblRleHQiLCJidXR0b25UZXh0TG9hZGluZyIsImxhYmVsQm90dG9tQ2xhc3NOYW1lIiwib25PayIsInRyYW5zYWN0aW9uQnV0dG9uVW5kZXIiLCJ0cmFuc2FjdGlvbkJ1dHRvbk5vQm9yZGVycyIsImRpc2FibGVUcmFuc2FjdGlvbldoZW5JbnZhbGlkIiwiYW1vdW50VGV4dCIsInNldEFtb3VudFRleHQiLCJzZXRBbW91bnQiLCJ2YWxpZEFtb3VudCIsInNldFZhbGlkQW1vdW50IiwidG9rZW5BZGRyZXNzIiwiYWRkcmVzc01hcCIsInRva2VuSW5mbyIsInRva2VuTWFwIiwib25CZWZvcmVPayIsImFtb3VudEJOIiwidXRpbHMiLCJwYXJzZVVuaXRzIiwidG9TdHJpbmciLCJkZWNpbWFscyIsImUiLCJ2YWxpZCIsInNldFZhbGlkYXRlZEFtb3VudCIsIk51bWJlciIsImlzTmFOIiwib25NYXhBbW91bnQiLCJvbkFtb3VudENoYW5nZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJwb3RlbnRpYWxBbW91bnQiLCJwYXJzZUZsb2F0IiwicmVuZGVySW5wdXQiLCJmcmllbmRseU5hbWUiLCJyZW5kZXJIZWxwZXJzIiwicmVuZGVyTWF4QnV0dG9uIiwicmVuZGVyVHJhbnNhY3Rpb25CdXR0b24iLCJMU1dTdGFraW5nIiwiZ2xvYmFsSG9va3MiLCJHbG9iYWxIb29rc0NvbnRleHQiLCJvbkNsYWltIiwic3Rha2UiLCJjbGFpbVRvV2FsbGV0IiwiTFNXIiwiY2xhaW1PclN0YWtlQW5kQ2xhaW1MUCIsInRyYW5zYWN0aW9uVGl0bGUiLCJzdWNjZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9ucyIsImV4ZWN1dGVUcmFuc2FjdGlvbiIsImxzd1N0YXRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJNYXRoIiwicm91bmQiLCJkYXRhIiwidG90YWxFdGhDb250cmlidXRlZCIsInRvRml4ZWQiLCJ0b0xvY2FsZVN0cmluZyIsImZvcm1hdHRpbmciLCJnZXRUb2tlbkFtb3VudCIsImFjY291bnRDb250cmlidXRlZEV0aCIsImNsYWltYWJsZVJscCIsIk1haW5MYXlvdXQiLCJkZXNjcmlwdGlvbiIsInNpdGVfbmFtZSIsImhhbmRsZSIsInNpdGUiLCJjYXJkVHlwZSIsIk5hdkJhciIsIm1lbnVWaXNpYmxlIiwic2V0TWVudVZpc2libGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZW5kZXJNZW51SXRlbXMiLCJnZXRTdHlsZSIsImhyZWYiLCJiYXNlU3R5bGUiLCJwYXRobmFtZSIsInJlbmRlckNvbm5lY3RXYWxsZXRCdXR0b24iLCJyZXNldCIsIm0iLCJQcm9ncmVzc0JhckNvdW50RG93biIsInByb2dyZXNzIiwid2lkdGgiLCJQcm9ncmVzc0JhckRpYW1vbmRzIiwic21hbGwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwicmlnaHREaWFtb25nUG9zaXRpb25TdHlsZSIsInNldFJpZ2h0RGlhbW9uZ1Bvc2l0aW9uU3R5bGUiLCJsaW1pdGVkVmFsdWUiLCJtaW4iLCJtYXgiLCJwZXJjZW50IiwidmlzaWJpbGl0eSIsIlZlc3RpbmdUcmFuc2FjdGlvblByb2dyZXNzQmFyIiwicGVyY2VudE1hdHVyZSIsInBlcmNlbnRWZXN0ZWQiLCJwZXJjZW50SW1tYXR1cmUiLCJSRUZSRVNIX1JBVEUiLCJSZWJhc2luZyIsInRpbWVMZWZ0VW50aWxOZXh0UmViYXNlIiwic2V0VGltZUxlZnRVbnRpbE5leHRSZWJhc2UiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwidGltZSIsImdldFRpbWVMZWZ0IiwicmViYXNpbmciLCJyZWJhc2luZ0luZm8iLCJuZXh0UmViYXNlVGltZXN0YW1wIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJSZWZlcnJhbFByb2dyYW0iLCJjaGFydERhdGEiLCJ1c2VSZWZlcnJhbFJld2FyZHNDaGFydERhdGEiLCJnZXRXRVRIQm9udXNGb3JSZWZlcnJhbHMiLCJ0cmFuc2FjdGlvbkdhc0VzdGltYXRlIiwidHJhbnNhY3Rpb25NZXNzYWdlIiwic2hvd0NvbnRyb2xsZWRNZXNzYWdlIiwiZ2FzIiwiY2xvc2UiLCJzaG93TWVzc2FnZSIsImRlY29kZWRFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWZlcnJhbEJvbnVzV0VUSCIsImhlaWdodCIsIngiLCJ5Iiwic3Ryb2tlV2lkdGgiLCJmaWxsT3BhY2l0eSIsImZpbGwiLCJzdHJva2UiLCJkIiwiRGF0ZSIsImRhdGUiLCJEZWx0YVBhbmVsIiwicmVxdWlyZXNDb25uZWN0ZWRXYWxsZXQiLCJyZW5kZXJDb250ZW50IiwiRGVsdGFTZWN0aW9uIiwic2hvd0Nvbm5lY3RXYWxsZXRCdXR0b24iLCJjZW50ZXIiLCJjaGV2cm9uIiwiRGVsdGFTZWN0aW9uQm94IiwiaW5kZXgiLCJpbmRleEZvcm1hdHRlciIsInNob3dJbmRleCIsIm9wZW5lZCIsIm9uT3BlbiIsImkiLCJpc09wZW5lZCIsInNldElzT3BlbmVkIiwibyIsIlNwaW5uZXIiLCJsYWJlbCIsIkRlbHRhVGl0bGUiLCJEZWx0YVRpdGxlSDEiLCJEZWx0YVRpdGxlSDIiLCJsaW5ldW5kZXIiLCJEZWx0YVRpdGxlSDMiLCJEZWx0YVRpdGxlSDQiLCJGVUxMWV9WRVNUSU5HX1JFRlJFU0hfUkFURSIsIlZlc3RpbmciLCJmdWxseVZlc3RlZEF0SW5mbyIsInNldEZ1bGx5VmVzdGVkQXRJbmZvIiwidHJhbnNhY3Rpb25EZXRhaWxzVmlzaWJsZSIsInNldFRyYW5zYWN0aW9uRGV0YWlsc1Zpc2libGUiLCJjaGFydFdpZHRoIiwiZGVsdGEiLCJ2ZXN0aW5nSW5Qcm9ncmVzcyIsInRpbWVMZWZ0IiwiZnVsbHlWZXN0ZWRBdCIsIm9uVG9nZ2xlVHJhbnNhY3Rpb25EZXRhaWxzIiwicmVuZGVyVmVzdGluZ1RyYW5zYWN0aW9ucyIsImN1cnJlbnRPcGVuZWQiLCJzZXRDdXJyZW50T3BlbmVkIiwicmVuZGVyVHJhbnNhY3Rpb24iLCJ0eCIsInZlc3RpbmdUaW1lTGVmdCIsImZ1bGxWZXN0aW5nVGltZXN0YW1wIiwibWF0dXJlIiwiaW1tYXR1cmUiLCJ2ZXN0aW5nVHJhbnNhY3Rpb25zIiwiZmlsdGVyIiwibWFwIiwicmVuZGVyTXlXYWxsZXQiLCJvblN0YWtlRGlhbG9nIiwib25TdGFrZSIsImNvbmZpcm1lZCIsInNob3dDb25maXJtIiwiY29udGVudCIsInRvdGFsIiwicmVuZGVyUkxQU3RhdHMiLCJzdGFraW5nIiwicmxwSW5mbyIsImFtb3VudFN0YWtlZCIsInJlbmRlckNoYXJ0IiwibGFiZWxzIiwiZiIsImRhdHVtIiwiZm9udFNpemUiLCJuYW1lIiwic3ltYm9sIiwidHlwZSIsIkJpZ051bWJlciIsImNvbmZpZyIsIkVYUE9ORU5USUFMX0FUIiwiREVDSU1BTF9QTEFDRVMiLCJURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMiLCJTVUJUUkFDVF9HQVNfTElNSVQiLCJERUZBVUxUX0NPTkZJUk1BVElPTlMiLCJERUZBVUxUX0dBUyIsIkRFRkFVTFRfR0FTX1BSSUNFIiwiV0VCM19QUk9WSURFUl9VUkwiLCJwYWlyTmFtZXMiLCJkZWx0YVdldGgiLCJjb3JlQ2J0YyIsImNvcmVXZXRoIiwiY0RhaVdjb3JlIiwiZXRoVXNkdCIsIndidGNXZXRoIiwidW5pc3dhcEZhY3RvcnkiLCJ1bmlzd2FwRmFjdG9yeVYyIiwidW5pc3dhcFJvdXRlciIsInJMUCIsImNvcmUiLCJ3Q09SRSIsIndFVEgiLCJ3QlRDIiwiY0JUQyIsImNEQUkiLCJhZGRyZXNzRGVjaW1hbHNNYXAiLCJwYWlySW5mb01hcCIsInJlc2VydmUwIiwicmVzZXJ2ZTEiLCJXRVRIIiwic3VwcGx5U2NhbGUiLCJ1bml0IiwidG9rZW5OYW1lIiwiZnJpZW5kbHlUb2tlbk5hbWUiLCJhZGRyZXNzIiwicGlkIiwiZXRoZXJldW1TdGF0cyIsImFwcHJveGltYXRlZEJsb2NrUGVyRGF5IiwiYXBwcm94aW1hdGVkQmxvY2tQZXJZZWFyIiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbEhvb2tzUHJvdmlkZXIiLCJ1c2VEZWx0YSIsInVzZUxTV1N0YXRzIiwidXNlU3Rha2luZyIsInVzZVJlYmFzaW5nIiwiTW9kYWxUeXBlIiwiT2JqZWN0IiwiZnJlZXplIiwiTWVzc2FnZSIsIkNvbmZpcm0iLCJDb25uZWN0V2FsbGV0IiwiTW9kYWxQcm92aWRlciIsIm1vZGFsIiwic2V0TW9kYWwiLCJfc2hvd01vZGFsIiwibW9kYWxUeXBlIiwib25DbG9zZSIsIm9rQ29udGVudCIsImNhbmNlbENvbnRlbnQiLCJjbG9zZU1vZGFsIiwiU2V0dGluZ3NDb250ZXh0IiwiU2V0dGluZ3NQcm92aWRlcnMiLCJzdG9yZSIsInN0YXRlIiwic2V0U3RhdGUiLCJnZXQiLCJrZXkiLCJzZXQiLCJuZXdTdGF0ZSIsIldhbGxldENvbnRleHQiLCJDSEVDS19XQUxMRVRfU1RBVFVTX1JFRlJFU0hfUkFURSIsIldhbGxldFByb3ZpZGVyIiwiY29ubmVjdG9yIiwic3RhdHVzIiwiY29ubmVjdCIsInVzZXJBY2NvdW50Iiwic2V0VXNlckFjY291bnQiLCJjaGVja0xvY2FsVXNlckFjY291bnQiLCJ1c2VDYWxsYmFjayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaENvbm5lY3Rpb24iLCJyZW1vdmVJdGVtIiwiaGFuZGxlQ29ubmVjdE1ldGFtYXNrIiwiaGFuZGxlQ29ubmVjdFdhbGxldENvbm5lY3QiLCJsb2NhbEFjY291bnQiLCJzZXRJdGVtIiwiY2hlY2tDb25uZWN0aW9uIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIndhbGxldFByb3ZpZGVyIiwiV2ViM0NvbnRleHQiLCJ3ZWIzIiwiV2ViM1Byb3ZpZGVyIiwic2V0V2ViMyIsIldlYjNDbGllbnQiLCJZYW1Db250ZXh0IiwiWWFtUHJvdmlkZXIiLCJldGhlcmV1bSIsInNldFlhbSIsIllhbSIsImRlZmF1bHRBY2NvdW50IiwiZGVmYXVsdENvbmZpcm1hdGlvbnMiLCJhdXRvR2FzTXVsdGlwbGllciIsInRlc3RpbmciLCJkZWZhdWx0R2FzIiwiZGVmYXVsdEdhc1ByaWNlIiwiYWNjb3VudHMiLCJldGhlcmV1bU5vZGVUaW1lb3V0IiwiZGVmYXVsdEVycm9yTWVzc2FnZSIsImluZGV4T2YiLCJzcGxpdCIsInByZWNpc2lvbiIsImlzQmlnTnVtYmVyIiwiZGl2IiwicG93IiwicGFyc2VJbnQiLCJzZXRXYWxsZXRBd2FyZUludGVydmFsIiwiZm4iLCJ0aW1lb3V0IiwiZm5QcmFtcyIsImlzV2FsbGV0Q29ubmVjdGVkIiwiZW5kVGltZUluTWlsbGlzIiwibm93IiwibW9tZW50IiwiZGlmZlRpbWUiLCJkdXJhdGlvbiIsInRyYW5zYWN0aW9uUGFyYW1ldGVycyIsInN1Y2Nlc3NUaXRsZSIsImVycm9yVGl0bGUiLCJ0cmFuc2FjdGlvbkxvYWRpbmdNZXNzYWdlIiwicmVqZWN0IiwidXNlQ29yZVBhaXJCYWxhbmNlcyIsInBhaXJOYW1lIiwicGFpckluZm8iLCJiYWxhbmNlcyIsInNldEJhbGFuY2VzIiwiYmFsYW5jZVRva2VuIiwiYmFsYW5jZUNvcmUiLCJwYWlyIiwiZ2V0UmVzZXJ2ZXMiLCJjYWxsIiwiTlVNX0VQT0NIIiwic2V0RGF0YSIsInRvdGFsc0ZvcldhbGxldCIsInZlc3RpbmdUcmFuc2FjdGlvbiIsInZlc3RpbmdUcmFuc2FjdGlvbkRldGFpbHMiLCJnZXRUcmFuc2FjdGlvbkRldGFpbCIsInB1c2giLCJwZXJjZW50VmVzdGVkRTQiLCJob29rcyIsIlBSSUNFX1JFRlJFU0hfSU5URVJWQUwiLCJpbml0aWFsU3RhdGUiLCJ1c2VFVEhQcmljZSIsInVzZVdlYjMiLCJFVEhwcmljZSIsInNldEVUSFByaWNlIiwicHJpY2VPZlVTRFRpbkVUSCIsImV0aFVzZHRQYWlyIiwidG90YWxXRVRIRWFybWFya2VkRm9yUmVmZXJyZXJzIiwibGlxdWlkaXR5Q3JlZGl0cyIsImJhbGFuY2VPZiIsImxpcXVpZGl0eUNvbnRyaWJ1dGVkSW5FVEhVbml0c01hcHBpbmciLCJsaXF1aWRpdHlDcmVkaXRzQk4iLCJsaXF1aWRpdHlDcmVkaXRzTWFwcGluZyIsInJscFBlckNyZWRpdEJOIiwicmxwUGVyQ3JlZGl0IiwiY2xhaW1hYmxlUmxwQk4iLCJtdWx0aXBsaWVkQnkiLCJzaGlmdGVkQnkiLCJzZXRSZWJhc2luZ0luZm8iLCJMU1dfU1RBUlREQVRFX0lOX01JTExJUyIsImdldExvY2FsU3RvcmFnZUtleSIsImN1cnJlbnREYXRhIiwibGVuZ3RoIiwic3RvcmVkRGF0YSIsIkpTT04iLCJwYXJzZSIsImxhc3RCbG9ja1RpbWVzdGFtcCIsImxhc3RTYW1wbGUiLCJ2YWx1ZU9mIiwiZGF0ZXIiLCJFdGhEYXRlciIsIm5ld0Jsb2NrSW5mbyIsImdldEV2ZXJ5IiwibmV3Q2hhcnREYXRhIiwiYWxsIiwiYmxvY2tJbmZvIiwiYmxvY2siLCJwcmV2aW91c0xlbmd0aCIsIm5ld0RhdGEiLCJfIiwidW5pcUJ5Iiwic3RyaW5naWZ5IiwidmF1bHRTdGF0cyIsInNldFZhdWx0U3RhdHMiLCJhbW91bnRUb3RhbCIsImFweSIsInNldFJscEluZm8iLCJjbGFpbWFibGVFdGgiLCJjbGFpbWFibGVEZWx0YSIsInJld2FyZE11bHRpcGxpZXIiLCJkZWx0YUluZm8iLCJzZXREZWx0YUluZm8iLCJ0aW1lVW50aWxEb3duZ3JhZGUiLCJ3aXRoZHJhd2FsQ29udHJhY3RzIiwic2V0V2l0aGRyYXdhbENvbnRyYWN0cyIsInNldEJhbGFuY2UiLCJ0b1VwcGVyQ2FzZSIsImV0aCIsImdldEJhbGFuY2UiLCJhbGxvd2FuY2UiLCJ1c2VNZW1vIiwidXNlV0JUQ1ByaWNlIiwiZXRoUHJpY2UiLCJXQlRDUHJpY2UiLCJzZXRXQlRDUHJpY2UiLCJ1cGRhdGVXQlRDUHJpY2UiLCJwYWlyUmVzZXJ2ZXMiLCJXQlRDeFdFVEgiLCJwcmljZU9mV0JUQ2luV0VUSCIsInByaWNlT2ZXQlRDaW5VU0RUIiwiTWFpbiIsImdldFN0YXRpY1Byb3BzIiwiY3R4IiwiX19sb2FkTmFtZXNwYWNlcyIsImxvYWRlck5hbWUiLCJfX2kxOG5Db25maWciLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidGhlbiIsImRlZmF1bHQiLCJ2ZXJpZnlBZGRyZXNzTWFwIiwidmFsdWVzIiwiZmluZER1cGxpY2F0ZWQiLCJpdGVtIiwiZHVwbGljYXRlZEFkZHJlc3MiLCJqb2luIiwiY29uc3RydWN0b3IiLCJhcGlVcmwiLCJvcHRpb25zIiwiV2ViMyIsIkNvbnRyYWN0cyIsInByb3ZpZGVyIiwicmVhbFByb3ZpZGVyIiwiaW5jbHVkZXMiLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsIkh0dHBQcm92aWRlciIsIkNvbnRyYWN0IiwiVU5JUm91dGVySnNvbiIsIlVOSUZhY3RKc29uIiwiQ09SRSIsImFiaSIsIkRFTFRBIiwiUkxQIiwiV0JUQyIsIldFVEhKc29uIiwiQ0JUQyIsImVyYzIwIiwiRVJDMjBKc29uIiwiZ2VuZXJpY0VyYzIwIiwiZ2VuZXJpY1VuaXN3YXBQYWlyIiwiVU5JUGFpckpzb24iLCJjb3JlQ2J0Y1BhaXIiLCJjb3JlV2V0aFBhaXIiLCJjRGFpV2NvcmVQYWlyIiwid0J0Y1dldGhQYWlyIiwiX3VwZGF0ZUNvbnRyYWN0QWRkcmVzc2VzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVB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Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEJ1dHRvbiwgSGVscGVyVGV4dCB9IGZyb20gJ0B3aW5kbWlsbC9yZWFjdC11aSc7XG5pbXBvcnQgcGx1cyBmcm9tICcuLi8uLi9wdWJsaWMvcGx1cy5zdmcnO1xuaW1wb3J0IHBsdXNHcmF5IGZyb20gJy4uLy4uL3B1YmxpYy9wbHVzLWdyYXkuc3ZnJztcbmltcG9ydCBwbHVzQmxhY2sgZnJvbSAnLi4vLi4vcHVibGljL3BsdXMtYmxhY2suc3ZnJztcblxuY29uc3QgRGVsdGFCdXR0b24gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lID0gJycsIGxhYmVsQm90dG9tLCBoaWRlUGx1cywgc2Vjb25kYXJ5TG9vaywgZ3JheUxvb2ssIC4uLnByb3BzIH0pID0+IHtcbiAgaWYgKHNlY29uZGFyeUxvb2spIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgdy1mdWxsIG1kOnctbWF4IHRleHQtYmxhY2sgcC0wLjVcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LW1heCBiZy1ncmF5LTMwMCB0ZXh0LWJsYWNrIHAtNSByb3VuZGVkLW5vbmUgcHktNCBmbGV4LWdyb3dcIlxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshaGlkZVBsdXMgJiYgPGltZyBhbHQ9XCIrXCIgc3JjPXtwbHVzQmxhY2t9IGNsYXNzTmFtZT1cIm0tYXV0byBtbC0wIG1kOm1sLTRcIiAvPn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxIZWxwZXJUZXh0IGNsYXNzTmFtZT17YCR7IWxhYmVsQm90dG9tID8gJ2hpZGRlbicgOiAnJ30gdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTQwMCBibG9jayBtdC0wLjVgfT57bGFiZWxCb3R0b219PC9IZWxwZXJUZXh0PlxuICAgIDwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIDxCdXR0b25cbiAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBtZDp3LW1heCAke2dyYXlMb29rID8gJ2JnLWdyYXktMzAwIHRleHQtZ3JheS01MDAnIDogJ2JnLWJsYWNrIHRleHQtd2hpdGUnfSBwLTUgcm91bmRlZC1ub25lIHB5LTQgZmxleC1ncm93YH1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBmbGV4LWdyb3dcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICB7IWhpZGVQbHVzICYmIDxpbWcgYWx0PVwiK1wiIHNyYz17Z3JheUxvb2sgPyBwbHVzR3JheSA6IHBsdXN9IGNsYXNzTmFtZT1cIm0tYXV0byBtbC0wIG1kOm1sLTRcIiAvPn1cbiAgICA8L0J1dHRvbj5cbiAgICA8SGVscGVyVGV4dCBjbGFzc05hbWU9e2AkeyFsYWJlbEJvdHRvbSA/ICdoaWRkZW4nIDogJyd9IHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS00MDAgYmxvY2sgbXQtMC41YH0+e2xhYmVsQm90dG9tfTwvSGVscGVyVGV4dD5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbHRhQnV0dG9uOyIsImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICd1c2Utd2FsbGV0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IHVzZVVzZXJBcHByb3ZhbE9mQ29udHJhY3QsIHVzZVRva2VuQmFsYW5jZSwgdXNlWWFtIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgRGVsdGFCdXR0b24gZnJvbSAnLi9EZWx0YUJ1dHRvbic7XG5cbi8qKlxuICogQSBidXR0b24gdGhhdCBzdXBwb3J0cyBzZW5kaW5nIGEgdHJhbnNhY3Rpb24gYW5kIGtlZXBpbmcgdHJhY2sgb2YgYWxsb3dhbmNlL2FwcHJvdmFsXG4gKiBpZiBhbGxvd2FuY2VSZXF1aXJlZEZvciBpcyBzcGVjaWZpZWQgd2l0aCB0aGUgY29udHJhY3QgYW5kIHRva2VuIG5hbWUuXG4gKi9cbmNvbnN0IFRyYW5zYWN0aW9uQnV0dG9uID0gKHtcbiAgb25DbGljayxcbiAgYWxsb3dhbmNlUmVxdWlyZWRGb3IsXG4gIGljb24sXG4gIHRleHQsXG4gIHRleHRMb2FkaW5nLFxuICB0ZXh0QXBwcm92ZSxcbiAgdGV4dEFwcHJvdmluZyxcbiAgc2Vjb25kYXJ5TG9va3MsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHMgfSkgPT4ge1xuXG4gIHRleHRBcHByb3ZlID0gdGV4dEFwcHJvdmUgfHwgJ0FwcHJvdmUnO1xuICB0ZXh0TG9hZGluZyA9IHRleHRMb2FkaW5nIHx8ICdMb2FkaW5nLi4uJztcbiAgdGV4dEFwcHJvdmluZyA9IHRleHRBcHByb3ZpbmcgfHwgJ0FwcHJvdmluZy4uLic7XG4gIGFsbG93YW5jZVJlcXVpcmVkRm9yID0gYWxsb3dhbmNlUmVxdWlyZWRGb3IgfHwge1xuICAgIGNvbnRyYWN0OiB1bmRlZmluZWQsXG4gICAgdG9rZW46IHVuZGVmaW5lZFxuICB9O1xuXG4gIGNvbnN0IHlhbSA9IHVzZVlhbSgpO1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgbW9kYWxDb250ZXh0ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRva2VuQmFsYW5jZSA9IHVzZVRva2VuQmFsYW5jZShhbGxvd2FuY2VSZXF1aXJlZEZvci50b2tlbik7XG4gIGNvbnN0IGFwcHJvdmFsID0gdXNlVXNlckFwcHJvdmFsT2ZDb250cmFjdChhbGxvd2FuY2VSZXF1aXJlZEZvci5jb250cmFjdCwgYWxsb3dhbmNlUmVxdWlyZWRGb3IudG9rZW4pO1xuICBjb25zdCBbYWxsb3dhbmNlU2F0aXNmaWVkLCBzZXRBbG93YW5jZVNhdGlzZmllZF0gPSB1c2VTdGF0ZShhbGxvd2FuY2VSZXF1aXJlZEZvci5jb250cmFjdCA9PT0gdW5kZWZpbmVkKTtcbiAgY29uc3QgW2luaXRpYWxpemVkLCBzZXRJbml0aWFsaXplZF0gPSB1c2VTdGF0ZShhbGxvd2FuY2VSZXF1aXJlZEZvci5jb250cmFjdCA9PT0gdW5kZWZpbmVkKTtcblxuICAvKlxuICAgKiBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YgaGFzIHRoZSBhcHByb3ZhbCBiYWxhbmNlIGNhbiBiZSBldmFsdWF0ZWRcbiAgICogYmVmb3JlIG9yIGFmdGVyIHRoZSB0b2tlbiBiYWxhbmNlciBpcyB1cGRhdGVkLlxuICAgKi9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbG93YW5jZVNhdGlzZmllZChcbiAgICAgICFhbGxvd2FuY2VSZXF1aXJlZEZvci5jb250cmFjdCB8fCAoYXBwcm92YWwuYW1vdW50ICE9PSBEQVRBX1VOQVZBSUxBQkxFICYmIHRva2VuQmFsYW5jZS5iYWxhbmNlICE9PSBEQVRBX1VOQVZBSUxBQkxFICYmIGFwcHJvdmFsLmFtb3VudC5ndGUodG9rZW5CYWxhbmNlLmJhbGFuY2UpKVxuICAgICk7XG5cbiAgICBzZXRJbml0aWFsaXplZCh0cnVlKTtcbiAgfSwgW2FwcHJvdmFsLmFtb3VudCwgdG9rZW5CYWxhbmNlLmJhbGFuY2VdKTtcblxuICBjb25zdCBpc0Rpc2FibGVkID0gKCkgPT4ge1xuICAgIHJldHVybiAoIXlhbSB8fCAhaW5pdGlhbGl6ZWQgfHwgbG9hZGluZyB8fCBwcm9wcy5kaXNhYmxlZCA9PT0gdHJ1ZSkgPyAnZGlzYWJsZWQnIDogJyc7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwcm92YWwgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250cmFjdCA9IHlhbS5jb250cmFjdHNbYWxsb3dhbmNlUmVxdWlyZWRGb3IuY29udHJhY3RdLl9hZGRyZXNzO1xuICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB5YW0uY29udHJhY3RzW2FsbG93YW5jZVJlcXVpcmVkRm9yLnRva2VuXS5tZXRob2RzLmFwcHJvdmUoY29udHJhY3QsIGV0aGVycy5jb25zdGFudHMuTWF4VWludDI1Nik7XG4gICAgICBjb25zdCBnYXNFc3RpbWF0aW9uID0gYXdhaXQgdHJhbnNhY3Rpb24uZXN0aW1hdGVHYXMoe1xuICAgICAgICBmcm9tOiB3YWxsZXQuYWNjb3VudFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnNlbmQoe1xuICAgICAgICBmcm9tOiB3YWxsZXQuYWNjb3VudCxcbiAgICAgICAgZ2FzRXN0aW1hdGlvblxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRXJyb3IgPSBlcnJvcnMuZ2V0VHJhbnNhY3Rpb25FcnJvcihlcnJvcik7XG4gICAgICBtb2RhbENvbnRleHQuc2hvd0Vycm9yKCdFcnJvciB3aGlsZSBhcHByb3ZpbmcnLCB0cmFuc2FjdGlvbkVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRva2VuQmFsYW5jZS51cGRhdGUoKTtcbiAgICAgIGFwcHJvdmFsLnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIW9uQ2xpY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW4gb25DbGljayBwcm9wZXJ0eSBtdXN0IGJlIHByb3ZpZGVkLicpO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgb25DbGljaygpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQnV0dG9uVGV4dCA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxzcGFuPnthbGxvd2FuY2VTYXRpc2ZpZWQgPyB0ZXh0TG9hZGluZyA6IHRleHRBcHByb3Zpbmd9PC9zcGFuPjtcbiAgICB9XG5cbiAgICBpZiAoaWNvbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aW1nIHNyYz17aWNvbn0gYWx0PVwiaWNvblwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC41ZW0nIH19IC8+XG4gICAgICAgICAge2FsbG93YW5jZVNhdGlzZmllZCA/IHRleHQgOiB0ZXh0QXBwcm92ZX1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiA8PnthbGxvd2FuY2VTYXRpc2ZpZWQgPyB0ZXh0IDogdGV4dEFwcHJvdmV9PC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERlbHRhQnV0dG9uXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkKCl9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmIChhbGxvd2FuY2VTYXRpc2ZpZWQpIHtcbiAgICAgICAgICBoYW5kbGVUcmFuc2FjdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZUFwcHJvdmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAge3JlbmRlckJ1dHRvblRleHQoKX1cbiAgICA8L0RlbHRhQnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25CdXR0b247XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd2luZG1pbGwvcmVhY3QtdWknO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzJztcbmltcG9ydCBwbHVzIGZyb20gJy4uLy4uL3B1YmxpYy9wbHVzLnN2Zyc7XG5cbmNvbnN0IENvbm5lY3RXYWxsZXRCdXR0b24gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBtb2RhbENvbnRleHQgPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIDxCdXR0b25cbiAgICAgIG9uQ2xpY2s9e21vZGFsQ29udGV4dC5zaG93Q29ubmVjdFdhbGxldH1cbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgcm91bmRlZC1ub25lIHVwcGVyY2FzZSBmbGV4IHB5LTRcIlxuICAgID5cbiAgICAgIDxzcGFuPkNvbm5lY3QgV2FsbGV0PC9zcGFuPlxuICAgICAgPGltZyBhbHQ9XCIrXCIgc3JjPXtwbHVzfSBjbGFzc05hbWU9XCJtLWF1dG8gcGwtOFwiIC8+XG4gICAgPC9CdXR0b24+XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0V2FsbGV0QnV0dG9uOyIsImltcG9ydCBwbHVzIGZyb20gJy4uLy4uL3B1YmxpYy9wbHVzLnN2Zyc7XG5cbmNvbnN0IEZhbmN5QnV0dG9uID0gKHsgdGV4dCwgaW1hZ2UsIHVybCB9KSA9PiB7XG4gIGZ1bmN0aW9uIGdvdXJsKCkge1xuICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgdy03MiBtZDp3LTk2IGZsZXggdGV4dC14cyBtZDp0ZXh0LWJhc2VcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2dvdXJsfVxuICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cteGwgYmctYmxhY2sgcC00IGgtMTQgcm91bmRlZC1ub25lIGlubGluZS1ibG9jayB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmbGV4IG1yLTFcIlxuICAgICAgPlxuICAgICAgICA8aW1nIGFsdD1cImdvdXJsXCIgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwibS1hdXRvIHctNFwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2dvdXJsfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLW5vbmUgYmctYmxhY2sgaG92ZXI6YmctZ3JheS05MDAgc2hhZG93LXhsIGZsZXgtZ3JvdyBwLTQgaC0xNCBpbmxpbmUtYmxvY2sgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgZmxleFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc2VsZi1jZW50ZXJcIj57dGV4dH08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGFsdD1cIitcIiBzcmM9e3BsdXN9IGNsYXNzTmFtZT1cIm0tYXV0b1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYW5jeUJ1dHRvbjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRmFuY3lCdXR0b24gfSBmcm9tICcuL0ZhbmN5QnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29ubmVjdFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vQ29ubmVjdFdhbGxldEJ1dHRvbic7XG4iLCJpbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IGdpdGh1YiBmcm9tICcuLi8uLi9wdWJsaWMvR2l0aHViLnN2Zyc7XG5pbXBvcnQgdGVsZWdyYW0gZnJvbSAnLi4vLi4vcHVibGljL1RlbGVncmFtLnN2Zyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuLi8uLi9wdWJsaWMvVHdpdHRlci5zdmcnO1xuaW1wb3J0IG1lZGl1bSBmcm9tICcuLi8uLi9wdWJsaWMvTWVkaXVtSm9pbi5zdmcnO1xuaW1wb3J0IHsgRGVsdGFUaXRsZUgxIH0gZnJvbSAnLi4vVGl0bGUnO1xuXG5jb25zdCBKb2luQnV0dG9uID0gKHsgbG9nbywgdXJsLCB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kQnV0dG9uIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTgwMCBmb250LWJvbGQgcHktNCBweC00IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPVwibXgtYXV0byB3LTYgaC02IG1kOnctMTIgbWQ6aC0xMiBtaW4taC1mdWxsIG1pbi13LWZ1bGwgbWF4LXctZnVsbCBtYXgtaC1mdWxsXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENvbW11bml0eSA9ICgpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignaG9tZScpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG1kOnAtOCBteC0yIHNtOnAtNSB0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgPERlbHRhVGl0bGVIMT57dCgnam9pblRoZUNvbW11bml0eScpfTwvRGVsdGFUaXRsZUgxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtMiBtZDptdC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Sm9pbkJ1dHRvbiB1cmw9XCJodHRwczovL3R3aXR0ZXIuY29tL0RlbHRhX1Rva2VuXCIgdGl0bGU9XCJUd2l0dGVyXCIgbG9nbz17dHdpdHRlcn0gLz5cbiAgICAgICAgICAgIDxKb2luQnV0dG9uIHVybD1cImh0dHBzOi8vdC5tZS9EZWx0YV9GaW5hbmNpYWxcIiB0aXRsZT1cIlRlbGVncmFtXCIgbG9nbz17dGVsZWdyYW19IC8+XG4gICAgICAgICAgICA8Sm9pbkJ1dHRvbiB1cmw9XCJodHRwczovL21lZGl1bS5jb20vZGVsdGEtZmluYW5jaWFsXCIgdGl0bGU9XCJNZWRpdW1cIiBsb2dvPXttZWRpdW19IC8+XG4gICAgICAgICAgICA8Sm9pbkJ1dHRvbiB1cmw9XCJodHRwczovL2dpdGh1Yi5jb20vRGVsdGEtRmluYW5jaWFsXCIgdGl0bGU9XCJHaXRodWJcIiBsb2dvPXtnaXRodWJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdHk7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbW11bml0eSB9IGZyb20gJy4vQ29tbXVuaXR5JztcbiIsImNvbnN0IEhlcm8gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBwYi0xMCBtdC0zIG1kOm10LTIwIHRleHQtZ3JheS05MDAgbGVhZGluZy1ub25lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtd3Vsa2FuXCI+XG4gICAgICAgIERlbHRhIEhhcyBMYXVuY2hlZCFcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtbGcgdGV4dC1sZWZ0IHctZnVsbCBtZDp3LTYvMTJcIj5cbiAgICAgICAgVGhlIExpbWl0ZWQgU3Rha2luZyBXaW5kb3cgaGFzIHN1Y2Nlc3NmdWxseSBjb21lIHRvIGFuIGVuZC4gRGVsdGEgaXMgbm93IHRyYWRhYmxlIG9uIFVuaXN3YXAsIHRoZSByTFAgdG9rZW5zIGFyZSBjbGFpbWFibGUgYW5kIHRoZSBEZWVwIEZhcm1pbmcgVmF1bHQgaXMgcHJvZHVjaW5nIHlpZWxkISBNYWtlIHN1cmUgdG8gY2xhaW0gYW5kIHN0YWtlIHlvdXIgckxQIHRvIGVhcm4geWllbGQgZnJvbSB0aGUgRGVlcCBGYXJtaW5nIFZhdWx0LlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvIH0gZnJvbSAnLi9IZXJvJztcbiIsImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBCdXR0b24sIEhlbHBlclRleHQsIElucHV0IH0gZnJvbSAnQHdpbmRtaWxsL3JlYWN0LXVpJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkcmVzc01hcCwgdG9rZW5NYXAgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgdXNlVG9rZW5CYWxhbmNlIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuaW1wb3J0IFRyYW5zYWN0aW9uQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9UcmFuc2FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5cbmNvbnN0IFRva2VuSW5wdXQgPSAoe1xuICB0b2tlbixcbiAgYWxsb3dhbmNlUmVxdWlyZWRGb3IsXG4gIGJ1dHRvblRleHQsXG4gIGJ1dHRvblRleHRMb2FkaW5nLFxuICBsYWJlbEJvdHRvbSxcbiAgbGFiZWxCb3R0b21DbGFzc05hbWUgPSAnJyxcbiAgb25PayxcbiAgY2xhc3NOYW1lLFxuICB0cmFuc2FjdGlvbkJ1dHRvblVuZGVyLFxuICB0cmFuc2FjdGlvbkJ1dHRvbk5vQm9yZGVycyxcbiAgZGlzYWJsZVRyYW5zYWN0aW9uV2hlbkludmFsaWQsXG4gIGRpc2FibGVkID0gZmFsc2UgfSkgPT4ge1xuXG4gIGNvbnN0IFthbW91bnRUZXh0LCBzZXRBbW91bnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZhbGlkQW1vdW50LCBzZXRWYWxpZEFtb3VudF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBiYWxhbmNlIH0gPSB1c2VUb2tlbkJhbGFuY2UodG9rZW4pO1xuICBjb25zdCBtb2RhbENvbnRleHQgPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgdG9rZW5BZGRyZXNzID0gYWRkcmVzc01hcFt0b2tlbl07XG4gIGNvbnN0IHRva2VuSW5mbyA9IHRva2VuTWFwW3Rva2VuQWRkcmVzc107XG5cbiAgaWYgKCF0b2tlbkluZm8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dG9rZW59IGRvZXNuJ3QgZXhpc3Qgd2l0aGluIHRva2VuTWFwYCk7XG4gIH1cblxuICBjb25zdCBvbkJlZm9yZU9rID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBhbW91bnRCTjtcblxuICAgIGlmIChhbW91bnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFtb3VudEJOID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMoYW1vdW50LnRvU3RyaW5nKCksIHRva2VuSW5mby5kZWNpbWFscyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgY29udmVydGluZyBmbG9hdCBudW1iZXIgdG8gYmlnbnVtYmVyLCAke2UubWVzc2FnZX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkQW1vdW50ICYmIGFtb3VudDtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBhd2FpdCBtb2RhbENvbnRleHQuc2hvd0Vycm9yKCdJbnZhbGlkIEFtb3VudCcsICdUaGUgc3BlY2lmaWVkIHRva2VuIGFtb3VudCBpcyBpbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uT2soYW1vdW50LCBhbW91bnRCTik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFZhbGlkYXRlZEFtb3VudCA9IChhbW91bnQpID0+IHtcbiAgICBpZiAoYW1vdW50ID4gYmFsYW5jZSB8fCBhbW91bnQgPCAwIHx8IE51bWJlci5pc05hTihhbW91bnQpIHx8IGFtb3VudCA9PT0gMCkge1xuICAgICAgc2V0VmFsaWRBbW91bnQoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoYW1vdW50ID4gMCkge1xuICAgICAgc2V0VmFsaWRBbW91bnQodHJ1ZSk7XG4gICAgICBzZXRBbW91bnQoYW1vdW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25NYXhBbW91bnQgPSAoKSA9PiB7XG4gICAgc2V0QW1vdW50VGV4dChiYWxhbmNlKTtcbiAgICBzZXRWYWxpZGF0ZWRBbW91bnQoYmFsYW5jZSk7XG4gIH07XG5cbiAgY29uc3Qgb25BbW91bnRDaGFuZ2VkID0gZSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICBzZXRBbW91bnRUZXh0KHRleHQpO1xuICAgIHNldFZhbGlkQW1vdW50KHRydWUpO1xuXG4gICAgaWYgKHRleHQudHJpbSgpID09PSAnJykge1xuICAgICAgc2V0QW1vdW50KGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3RlbnRpYWxBbW91bnQgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRWYWxpZGF0ZWRBbW91bnQocG90ZW50aWFsQW1vdW50KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJJbnB1dCA9ICgpID0+IHtcbiAgICByZXR1cm4gPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCBib3JkZXIgYm9yZGVyLWJsYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXthbW91bnRUZXh0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzAuMDAnXG4gICAgICAgICAgICBvbkNoYW5nZT17b25BbW91bnRDaGFuZ2VkfVxuICAgICAgICAgICAgdmFsaWQ9e3ZhbGlkQW1vdW50fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLXRyYW5zcGFyZW50IHRleHQteGwgYm9yZGVyLWIgYm9yZGVyLWJsYWNrIGZsZXgtZ3Jvd1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItMyB0ZXh0LXNtIHNlbGYtZW5kIG1iLTNcIj57dG9rZW5JbmZvLmZyaWVuZGx5TmFtZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIZWxwZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiA8PlxuICAgICAgPEhlbHBlclRleHQgY2xhc3NOYW1lPXtgJHt2YWxpZEFtb3VudCA/ICdoaWRkZW4nIDogJyd9IHRleHQtc20gYmxvY2tgfSB2YWxpZD17ZmFsc2V9PlRoZSBhbW91bnQgaXMgbm90IHZhbGlkPC9IZWxwZXJUZXh0PlxuICAgICAgPEhlbHBlclRleHQgY2xhc3NOYW1lPXtgdGV4dC1zbSBibG9jayAke2xhYmVsQm90dG9tQ2xhc3NOYW1lfWB9PntsYWJlbEJvdHRvbX08L0hlbHBlclRleHQ+XG4gICAgPC8+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1heEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTEgYm9yZGVyIGJvcmRlci1ibGFjayBtbC0xXCI+XG4gICAgICA8QnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17KCkgPT4gb25NYXhBbW91bnQoKX0gY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgaC1mdWxsIHJpbmctcGluay0zMDAgcmluZy1pbnNldCBmb2N1czpiZy1ncmF5LTQwMFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcIj5tYXg8L3NwYW4+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVHJhbnNhY3Rpb25CdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUcmFuc2FjdGlvbkJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgZmxleCAkeyF0cmFuc2FjdGlvbkJ1dHRvbk5vQm9yZGVycyA/ICdtZDpwLTEgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ibGFjaycgOiAnJ30gZmxleC1ncm93ICR7dHJhbnNhY3Rpb25CdXR0b25VbmRlciA/ICdtZDpibG9jayB0ZXh0LXJpZ2h0JyA6ICcnfWB9XG4gICAgICBhbGxvd2FuY2VSZXF1aXJlZEZvcj17YWxsb3dhbmNlUmVxdWlyZWRGb3J9XG4gICAgICB0ZXh0PXtidXR0b25UZXh0fVxuICAgICAgdGV4dExvYWRpbmc9e2J1dHRvblRleHRMb2FkaW5nfVxuICAgICAgc2Vjb25kYXJ5TG9va3NcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCAoZGlzYWJsZVRyYW5zYWN0aW9uV2hlbkludmFsaWQgJiYgISh2YWxpZEFtb3VudCAmJiBhbW91bnQpKX1cbiAgICAgIG9uQ2xpY2s9e29uQmVmb3JlT2t9XG4gICAgLz47XG4gIH07XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4XCI+XG4gICAgICAgICAgICB7cmVuZGVySW5wdXQoKX1cbiAgICAgICAgICAgIHtyZW5kZXJNYXhCdXR0b24oKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWwtMSBoaWRkZW4gJHshdHJhbnNhY3Rpb25CdXR0b25VbmRlciA/ICdtZDpmbGV4JyA6ICcnfWB9PlxuICAgICAgICAgICAgICB7cmVuZGVyVHJhbnNhY3Rpb25CdXR0b24oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3JlbmRlckhlbHBlcnMoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbXQtNCAkeyF0cmFuc2FjdGlvbkJ1dHRvblVuZGVyID8gJ21kOmhpZGRlbicgOiAnJ31gfT5cbiAgICAgIHtyZW5kZXJUcmFuc2FjdGlvbkJ1dHRvbigpfVxuICAgIDwvZGl2PlxuICA8L2RpdiA+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5JbnB1dDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5JbnB1dCB9IGZyb20gJy4vVG9rZW5JbnB1dCc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb2dyZXNzQmFyQ291bnREb3duIH0gZnJvbSAnLi4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHsgZXJyb3JzLCBmb3JtYXR0aW5nLCB0cmFuc2FjdGlvbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IERlbHRhUGFuZWwsIERlbHRhU2VjdGlvbiB9IGZyb20gJy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgdXNlWWFtIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuaW1wb3J0IFRyYW5zYWN0aW9uQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9UcmFuc2FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lcic7XG5pbXBvcnQgeyBHbG9iYWxIb29rc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9HbG9iYWxIb29rcyc7XG5cbmNvbnN0IExTV1N0YWtpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHlhbSA9IHVzZVlhbSgpO1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgZ2xvYmFsSG9va3MgPSB1c2VDb250ZXh0KEdsb2JhbEhvb2tzQ29udGV4dCk7XG4gIGNvbnN0IG1vZGFsQ29udGV4dCA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCBvbkNsYWltID0gYXN5bmMgc3Rha2UgPT4ge1xuICAgIGNvbnN0IGNsYWltVG9XYWxsZXQgPSAhc3Rha2U7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB5YW0uY29udHJhY3RzLkxTVy5tZXRob2RzLmNsYWltT3JTdGFrZUFuZENsYWltTFAoY2xhaW1Ub1dhbGxldCk7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25UaXRsZSA9IHN0YWtlID8gJ0NsYWltaW5nIGFuZCBzdGFraW5nLi4uJyA6ICdDbGFpbWluZy4uLic7XG4gICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBzdGFrZSA/XG4gICAgICAnWW91ciByTFAgdG9rZW5zIGhhdmUgYmVlbiBjbGFpbWVkIGFuZCBzdGFrZWQuIFlvdSBjYW4gc2VlIHRoZW0gZGlzcGxheWVkIG9uIHRoZSBtYWluIHBhZ2UnIDpcbiAgICAgICdZb3VyIHJMUCB0b2tlbnMgaGF2ZSBiZWVuIGNsYWltZWQgYW5kIHRoZXJlIGFyZSBub3cgYXZhaWxhYmxlIGluIHlvdXIgd2FsbGV0JztcblxuICAgIGF3YWl0IHRyYW5zYWN0aW9ucy5leGVjdXRlVHJhbnNhY3Rpb24oXG4gICAgICBtb2RhbENvbnRleHQsXG4gICAgICB0cmFuc2FjdGlvbixcbiAgICAgIHsgZnJvbTogd2FsbGV0LmFjY291bnQgfSxcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlLFxuICAgICAgJ1N1Y2Nlc3MnLFxuICAgICAgJ0NsYWltaW5nIEVycm9yJyxcbiAgICAgIHRyYW5zYWN0aW9uVGl0bGVcbiAgICApO1xuXG4gICAgZ2xvYmFsSG9va3MubHN3U3RhdHMudXBkYXRlKCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIDxEZWx0YVNlY3Rpb24gdGl0bGU9XCJMaW1pdGVkIFN0YWtpbmcgV2luZG93IGlzIGNsb3NlZFwiPlxuICAgIDxEZWx0YVBhbmVsIGNsYXNzTmFtZT1cIm10LTIgbWQ6bXQtNFwiPlxuICAgICAgPFByb2dyZXNzQmFyQ291bnREb3duIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTYgdGV4dC0yeGxcIj57TWF0aC5yb3VuZChnbG9iYWxIb29rcy5sc3dTdGF0cy5kYXRhLnRvdGFsRXRoQ29udHJpYnV0ZWQpLnRvRml4ZWQoMCkudG9Mb2NhbGVTdHJpbmcoKX0gRVRIIGNvbnRyaWJ1dGVkITwvZGl2PlxuICAgIDwvRGVsdGFQYW5lbD5cbiAgICA8RGVsdGFQYW5lbCByZXF1aXJlc0Nvbm5lY3RlZFdhbGxldD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgcHQtNiBwYi00IG1kOnBiLTZcIj5cbiAgICAgICAgPGxpPllvdSBDb250cmlidXRlZDoge2Zvcm1hdHRpbmcuZ2V0VG9rZW5BbW91bnQoZ2xvYmFsSG9va3MubHN3U3RhdHMuZGF0YS5hY2NvdW50Q29udHJpYnV0ZWRFdGgsIDAsIDYpfSBFVEg8L2xpPlxuICAgICAgICA8bGk+ckxQIHRvIGJlIGNsYWltZWQ6IHtmb3JtYXR0aW5nLmdldFRva2VuQW1vdW50KGdsb2JhbEhvb2tzLmxzd1N0YXRzLmRhdGEuY2xhaW1hYmxlUmxwLCAwLCA2KX0gckxQPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8RGVsdGFQYW5lbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgPFRyYW5zYWN0aW9uQnV0dG9uIGNsYXNzTmFtZT1cImZsZXgtMSBtci0yIG1kOm1yLTAgbWQ6ZmxleC1ncm93LTBcIiB0ZXh0PVwiQ2xhaW0gJmFtcDsgU3Rha2VcIiB0ZXh0TG9hZGluZz1cIlN0YWtpbmcuLi5cIiBvbkNsaWNrPXsoKSA9PiBvbkNsYWltKHRydWUpfSAvPlxuICAgICAgICA8VHJhbnNhY3Rpb25CdXR0b24gY2xhc3NOYW1lPVwiZmxleC0xIG1sLTIgbWQ6bWwtNCBtZDpmbGV4LWdyb3ctMFwiIHRleHQ9XCJDbGFpbVwiIHRleHRMb2FkaW5nPVwiQ2xhaW1pbmcuLi5cIiBvbkNsaWNrPXsoKSA9PiBvbkNsYWltKGZhbHNlKX0gLz5cbiAgICAgIDwvRGVsdGFQYW5lbD5cbiAgICA8L0RlbHRhUGFuZWw+XG4gIDwvRGVsdGFTZWN0aW9uPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTFNXU3Rha2luZztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTFNXU3Rha2luZyB9IGZyb20gJy4vTFNXU3Rha2luZyc7XG4iLCJpbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbW11bml0eSB9IGZyb20gJy4uL0NvbW11bml0eSc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9OYXZCYXInO1xuXG5jb25zdCBNYWluTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPD5cbiAgICA8TmV4dFNlb1xuICAgICAgdGl0bGU9XCJERUxUQSBGaW5hbmNpYWxcIlxuICAgICAgZGVzY3JpcHRpb249XCJEZWVwIERlRmkgRGVyaXZhdGl2ZXMuXCJcbiAgICAgIGNhbm9uaWNhbD1cImh0dHBzOi8vd3d3LmRlbHRhLmZpbmFuY2lhbC9cIlxuICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmRlbHRhLmZpbmFuY2lhbC8nLFxuICAgICAgICB0aXRsZTogJ0RFTFRBIEZpbmFuY2lhbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVlcCBEZUZpIERlcml2YXRpdmVzLicsXG4gICAgICAgIC8vIGltYWdlczogW1xuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIHVybDogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuaWUvb2ctaW1hZ2UtMDEuanBnJyxcbiAgICAgICAgLy8gICAgIHdpZHRoOiA4MDAsXG4gICAgICAgIC8vICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgLy8gICAgIGFsdDogJ09nIEltYWdlIEFsdCcsXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB1cmw6ICdodHRwczovL3d3dy5leGFtcGxlLmllL29nLWltYWdlLTAyLmpwZycsXG4gICAgICAgIC8vICAgICB3aWR0aDogOTAwLFxuICAgICAgICAvLyAgICAgaGVpZ2h0OiA4MDAsXG4gICAgICAgIC8vICAgICBhbHQ6ICdPZyBJbWFnZSBBbHQgU2Vjb25kJyxcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIHsgdXJsOiAnaHR0cHM6Ly93d3cuZXhhbXBsZS5pZS9vZy1pbWFnZS0wMy5qcGcnIH0sXG4gICAgICAgIC8vICAgeyB1cmw6ICdodHRwczovL3d3dy5leGFtcGxlLmllL29nLWltYWdlLTA0LmpwZycgfSxcbiAgICAgICAgLy8gXSxcbiAgICAgICAgc2l0ZV9uYW1lOiAnREVMVEEnXG4gICAgICB9fVxuICAgICAgdHdpdHRlcj17e1xuICAgICAgICBoYW5kbGU6ICdARGVsdGFfVG9rZW4nLFxuICAgICAgICBzaXRlOiAnQERlbHRhX1Rva2VuJyxcbiAgICAgICAgY2FyZFR5cGU6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJ1xuICAgICAgfX1cbiAgICAvPlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjMDAwMDAwXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICBocmVmPVwiL2ZvbnRzL1d1bGthbi9XdWxrYW4tRGlzcGxheS1NZWRpdW0ud29mZlwiXG4gICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgaHJlZj1cIi9mb250cy9XdWxrYW4vV3Vsa2FuLURpc3BsYXktTWVkaXVtLndvZmZcIlxuICAgICAgICBhcz1cImZvbnRcIlxuICAgICAgICBjcm9zc09yaWdpbj1cIlwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgIGhyZWY9XCIvZm9udHMvR1QtQW1lcmljYS9HVC1BbWVyaWNhLVN0YW5kYXJkLVJlZ3VsYXIud29mZlwiXG4gICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgaHJlZj1cIi9mb250cy9HVC1BbWVyaWNhL0dULUFtZXJpY2EtU3RhbmRhcmQtUmVndWxhci53b2ZmMlwiXG4gICAgICAgIGFzPVwiZm9udFwiXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXZCYXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1heC13LTZ4bCBzZWxmLWNlbnRlciBwLTIgbWQ6cC02XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPENvbW11bml0eSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWluTGF5b3V0IH0gZnJvbSAnLi9NYWluTGF5b3V0JztcbiIsImltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9wdWJsaWMvSGVhZGVyTG9nby5zdmcnO1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBtb2RhbENvbnRleHQgPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKTtcbiAgY29uc3QgW21lbnVWaXNpYmxlLCBzZXRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgcmVuZGVyTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldFN0eWxlID0gaHJlZiA9PiB7XG4gICAgICBjb25zdCBiYXNlU3R5bGUgPSAnYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbm9uZSB0ZXh0LXNtYWxsIGZvbnQtbWVkaXVtICc7XG5cbiAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09IGhyZWYpIHtcbiAgICAgICAgcmV0dXJuIGAke2Jhc2VTdHlsZX0gYmctZ3JheS03MDAgdGV4dC13aGl0ZWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgJHtiYXNlU3R5bGV9IHRleHQtZ3JheS0zMDAgYmxvY2sgIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS03MDBgO1xuICAgIH1cbiAgICByZXR1cm4gPD5cbiAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtnZXRTdHlsZSgnLycpfT5Ib21lPC9hPlxuICAgICAgPGEgaHJlZj1cIi92YXVsdHNcIiBjbGFzc05hbWU9e2dldFN0eWxlKCcvdmF1bHRzJyl9PlZhdWx0czwvYT5cbiAgICAgIDxhIGhyZWY9XCIvY29udHJhY3RzXCIgY2xhc3NOYW1lPXtnZXRTdHlsZSgnL2NvbnRyYWN0cycpfT5XaXRoZHJhd2FsIENvbnRyYWN0czwvYT5cbiAgICA8Lz47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ29ubmVjdFdhbGxldEJ1dHRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIXdhbGxldD8uYWNjb3VudCkge1xuICAgICAgICAgICAgbW9kYWxDb250ZXh0LnNob3dDb25uZWN0V2FsbGV0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhbGxldC5yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1ub25lIHRleHQtc21hbGwgZm9udC1tZWRpdW1cIlxuICAgICAgPlxuICAgICAgICB7d2FsbGV0Py5hY2NvdW50ID8gPD57dCgnZGlzY29ubmVjdCcpfTwvPiA6IDw+e3QoJ2Nvbm5lY3RXYWxsZXQnKX08Lz59XG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHVwcGVyY2FzZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgYWx0PVwibG9nb1wiIHNyYz17bG9nb30gaGVpZ2h0PVwiMTUwXCIgd2lkdGg9XCIxNTBcIiBjbGFzc05hbWU9XCJ3LTgvMTIgbWQ6dy1mdWxsXCIgLz48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgZmxleCBpdGVtcy1iYXNlbGluZSBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJNZW51SXRlbXMoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBmbGV4IGl0ZW1zLWNlbnRlciBtZDptbC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyQ29ubmVjdFdhbGxldEJ1dHRvbigpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tci0yIGZsZXggbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TWVudVZpc2libGUobSA9PiAhbSl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiZy1ibGFjayBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbm9uZSB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctYmxhY2sgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWJsYWNrIGZvY3VzOnJpbmctYmxhY2tcIiBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1kOmhpZGRlbiAkeyFtZW51VmlzaWJsZSA/ICdoaWRkZW4nIDogJyd9YH0gaWQ9XCJtb2JpbGUtbWVudVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBwdC0yIHBiLTMgc3BhY2UteS0xIHNtOnB4LTNcIj5cbiAgICAgICAgICAgIHtyZW5kZXJNZW51SXRlbXMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgcGItMyBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgICAge3JlbmRlckNvbm5lY3RXYWxsZXRCdXR0b24oKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2QmFyIH0gZnJvbSAnLi9OYXZCYXInO1xuIiwiY29uc3QgUHJvZ3Jlc3NCYXJDb3VudERvd24gPSAoeyBwcm9ncmVzcyA9IDEwMCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJvcmRlciBib3JkZXItYmxhY2sgcC0xIG1kOnAtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1iYWNrZ3JvdW5kTGlnaHRQdXJwbGUgbWluLWgtOCBtZDptaW4taC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyYWRpYW50Qmx1ZSB0by1ncmFkaWFudFB1cnBsZSBsZWFkaW5nLW5vbmUgaC04IG1kOmgtMTJcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyQ291bnREb3duO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUHJvZ3Jlc3NCYXJEaWFtb25kcyA9ICh7IGNsYXNzTmFtZSwgc21hbGwsIHZhbHVlLCBtaW5WYWx1ZSA9IDEsIG1heFZhbHVlID0gMTAgfSkgPT4ge1xuICBjb25zdCBbcmlnaHREaWFtb25nUG9zaXRpb25TdHlsZSwgc2V0UmlnaHREaWFtb25nUG9zaXRpb25TdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaW1pdGVkVmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heChtaW5WYWx1ZSwgdmFsdWUpLCBtYXhWYWx1ZSk7XG4gICAgY29uc3QgcGVyY2VudCA9IDEgLSAobGltaXRlZFZhbHVlIC8gbWF4VmFsdWUpO1xuXG4gICAgc2V0UmlnaHREaWFtb25nUG9zaXRpb25TdHlsZSh7XG4gICAgICBtYXJnaW5SaWdodDogYGNhbGMoMC43NXJlbSArICR7cGVyY2VudCAqIDEwMH0lKWAsXG4gICAgICB2aXNpYmlsaXR5OiBsaW1pdGVkVmFsdWUgPT09IG1pblZhbHVlID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcbiAgICB9KTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgbS1hdXRvIHRleHQtY2VudGVyICR7Y2xhc3NOYW1lfWB9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggYm9yZGVyIGJvcmRlci1ibGFjayBwLTEuNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IHctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JhZGlhbnRHcmVlbjEgdG8tZ3JhZGlhbnRHcmVlbjIgbGVhZGluZy1ub25lIGgtMTIgJHshc21hbGwgPyAnbWQ6aC0xNicgOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtbC00IGZsZXggYmctd2hpdGUgYm9yZGVyIGJvcmRlci1kaWFtb25kR3JlZW4gbS1hdXRvIHRyYW5zZm9ybSAtcm90YXRlLTQ1IG1pbi1tYXgtd2gtcHgzMiAkeyFzbWFsbCA/ICdtZDptaW4tbWF4LXdoLXB4NDUnIDogJyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gcm90YXRlLTQ1IHRleHQteHMgc2VsZi1jZW50ZXIgbS1hdXRvXCI+e21pblZhbHVlfXg8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgdy1mdWxsIGJvcmRlci13aGl0ZSBib3JkZXItZGFzaGVkIHNlbGYtY2VudGVyIG10LXB4IGZsZXgtZ3Jvd1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBiZy1kaWFtb25kR3JlZW4gYm9yZGVyIGJvcmRlci13aGl0ZSBtLWF1dG8gdHJhbnNmb3JtIC1yb3RhdGUtNDUgbWluLW1heC13aC1weDMyICR7IXNtYWxsID8gJ21kOm1pbi1tYXgtd2gtcHg0NScgOiAnJ31gfSBzdHlsZT17cmlnaHREaWFtb25nUG9zaXRpb25TdHlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gcm90YXRlLTQ1IHRleHQteHMgc2VsZi1jZW50ZXIgbS1hdXRvIHRleHQtd2hpdGVcIj57TWF0aC5taW4oTWF0aC5tYXgobWluVmFsdWUsIHZhbHVlKSwgbWF4VmFsdWUpfXg8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhckRpYW1vbmRzO1xuIiwiY29uc3QgVmVzdGluZ1RyYW5zYWN0aW9uUHJvZ3Jlc3NCYXIgPSAoeyB0cmFuc2FjdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHBlcmNlbnRNYXR1cmUgPSB0cmFuc2FjdGlvbi5wZXJjZW50VmVzdGVkICogMTAwO1xuICBjb25zdCBwZXJjZW50SW1tYXR1cmUgPSAoMSAtIHRyYW5zYWN0aW9uLnBlcmNlbnRWZXN0ZWQpICogMTAwO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IG1pbi1oLTYgYm9yZGVyIGJvcmRlci1ibGFjayBwLTEgdGV4dC14c1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1ncmFkaWFudEJsdWUgbGVhZGluZy1ub25lIGgtNiB3LWZ1bGwgbXItMC41IHRleHQtbGVmdCB0ZXh0LXdoaXRlXCIgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnRNYXR1cmV9JWAgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEgbWQ6bWwtMSBzZWxmLWNlbnRlclwiPntwZXJjZW50TWF0dXJlLnRvRml4ZWQoMCl9JTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHtwZXJjZW50TWF0dXJlIDwgMTAwICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JhZGllbnRQaW5rIHRvLWdyYWRpZW50UGluazIgbGVhZGluZy1ub25lIGgtNiB3LWZ1bGwgdGV4dC1sZWZ0IHRleHQtd2hpdGVcIiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudEltbWF0dXJlfSVgIH19PlxuICAgICAge3BlcmNlbnRNYXR1cmUgPD0gOTAgJiYgPGRpdiBjbGFzc05hbWU9XCJtbC0xIG1kOm1sLTEgc2VsZi1jZW50ZXJcIj57cGVyY2VudEltbWF0dXJlLnRvRml4ZWQoMCl9JTwvZGl2Pn1cbiAgICA8L2Rpdj59XG4gIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVzdGluZ1RyYW5zYWN0aW9uUHJvZ3Jlc3NCYXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFZlc3RpbmdUcmFuc2FjdGlvblByb2dyZXNzQmFyIH0gZnJvbSAnLi9WZXN0aW5nVHJhbnNhY3Rpb25Qcm9ncmVzc0Jhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2dyZXNzQmFyQ291bnREb3duIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXJDb3VudERvd25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZ3Jlc3NCYXJEaWFtb25kcyB9IGZyb20gXCIuL1Byb2dyZXNzQmFyRGlhbW9uZHNcIjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb3VudERvd24gfSBmcm9tICcuLi9Qcm9ncmVzc0Jhcic7XG5pbXBvcnQgeyBEZWx0YVBhbmVsLCBEZWx0YVNlY3Rpb24gfSBmcm9tICcuLi9TZWN0aW9uJztcbmltcG9ydCB7IHVzZVlhbSB9IGZyb20gJy4uLy4uL2hvb2tzJztcbmltcG9ydCBUcmFuc2FjdGlvbkJ1dHRvbiBmcm9tICcuLi9CdXR0b24vVHJhbnNhY3Rpb25CdXR0b24nO1xuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuaW1wb3J0IHsgR2xvYmFsSG9va3NDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvR2xvYmFsSG9va3MnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbmNvbnN0IFJFRlJFU0hfUkFURSA9IDEgKiA2MCAqIDEwMDA7XG5cbmNvbnN0IFJlYmFzaW5nID0gKCkgPT4ge1xuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3QgZ2xvYmFsSG9va3MgPSB1c2VDb250ZXh0KEdsb2JhbEhvb2tzQ29udGV4dCk7XG4gIGNvbnN0IG1vZGFsQ29udGV4dCA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcbiAgY29uc3QgW3RpbWVMZWZ0VW50aWxOZXh0UmViYXNlLCBzZXRUaW1lTGVmdFVudGlsTmV4dFJlYmFzZV0gPSB1c2VTdGF0ZSh7XG4gICAgZGF5czogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBob3VyczogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBtaW51dGVzOiBEQVRBX1VOQVZBSUxBQkxFXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgc2V0VGltZUxlZnRVbnRpbE5leHRSZWJhc2UodGltZS5nZXRUaW1lTGVmdChnbG9iYWxIb29rcy5yZWJhc2luZy5yZWJhc2luZ0luZm8ubmV4dFJlYmFzZVRpbWVzdGFtcCkpO1xuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsSG9va3MucmViYXNpbmcucmViYXNpbmdJbmZvLm5leHRSZWJhc2VUaW1lc3RhbXAgIT09IERBVEFfVU5BVkFJTEFCTEUpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCBSRUZSRVNIX1JBVEUpO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2dsb2JhbEhvb2tzLnJlYmFzaW5nLnJlYmFzaW5nSW5mby5uZXh0UmViYXNlVGltZXN0YW1wXSk7XG5cbiAgcmV0dXJuIDxEZWx0YVNlY3Rpb24gcmVxdWlyZXNDb25uZWN0ZWRXYWxsZXQgdGl0bGU9XCJSZWJhc2luZyBpcyBTb29uXCI+XG4gICAgPERlbHRhUGFuZWw+XG4gICAgICA8UHJvZ3Jlc3NCYXJDb3VudERvd24gcHJvZ3Jlc3M9ezcwfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yIG1kOm10LTQgdGV4dC1sZ1wiPnt0aW1lTGVmdFVudGlsTmV4dFJlYmFzZS5kYXlzfSBEYXkocykge3RpbWVMZWZ0VW50aWxOZXh0UmViYXNlLmhvdXJzfSBIb3VyKHMpIHt0aW1lTGVmdFVudGlsTmV4dFJlYmFzZS5taW51dGVzfSBNaW51dGUocyk8L2Rpdj5cbiAgICA8L0RlbHRhUGFuZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1kOnctNi8xMlwiPlxuICAgICAgTGlxdWlkaXR5IFJlYmFzaW5nIGhhcHBlbnMgZGFpbHksPGJyIC8+aW5jcmVhc2luZyB0aGUgbWludCBwcmljZSBvZiByTFAgYnkgMTAlLlxuICAgIDwvZGl2PlxuICAgIHsvKiBUT0RPOiBTdXBwb3J0IGZvciB0aGVzZSBidXR0b25zXG4gICAgPERlbHRhUGFuZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC13cmFwIG10LTIgbWQ6bXQtNFwiPlxuICAgICAgPFRyYW5zYWN0aW9uQnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT1cImZsZXgtMSBtci0yIG1kOm1yLTAgbWQ6ZmxleC1ncm93LTBcIiB0ZXh0PVwiTWludCByTFBcIiB0ZXh0TG9hZGluZz1cIk1pbnRpbmcuLi5cIiBvbkNsaWNrPXsoKSA9PiB7IH19IC8+XG4gICAgICA8VHJhbnNhY3Rpb25CdXR0b24gY2xhc3NOYW1lPVwiZmxleC0xIG1sLTIgbWQ6bWwtNCBtZDpmbGV4LWdyb3ctMFwiIHRleHQ9XCJTdGFrZSByTFBcIiB0ZXh0TG9hZGluZz1cIlN0YWtpbmcuLi5cIiBvbkNsaWNrPXsoKSA9PiB7IH19IC8+XG4gICAgPC9EZWx0YVBhbmVsPlxuICAgICovfVxuICA8L0RlbHRhU2VjdGlvbiA+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWJhc2luZztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUmViYXNpbmcgfSBmcm9tICcuL1JlYmFzaW5nJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgeyBWaWN0b3J5Q2hhcnQsIFZpY3RvcnlHcm91cCwgVmljdG9yeUFyZWEgfSBmcm9tICd2aWN0b3J5JztcbmltcG9ydCB7IERlbHRhUGFuZWwsIERlbHRhU2VjdGlvbiB9IGZyb20gJy4uL1NlY3Rpb24nO1xuaW1wb3J0IHsgRGVsdGFUaXRsZUgzLCBEZWx0YVRpdGxlSDQgfSBmcm9tICcuLi9UaXRsZSc7XG5pbXBvcnQgeyBlcnJvcnMsIGZvcm1hdHRpbmcgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IENvbm5lY3RXYWxsZXRCdXR0b24gfSBmcm9tICcuLi9CdXR0b25zJztcbmltcG9ydCB1c2VSZWZlcnJhbFJld2FyZHNDaGFydERhdGEgZnJvbSAnLi4vLi4vaG9va3MvdXNlUmVmZXJyYWxSZXdhcmRzQ2hhcnREYXRhJztcbmltcG9ydCB7IERBVEFfVU5BVkFJTEFCTEUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IFRyYW5zYWN0aW9uQnV0dG9uIGZyb20gJy4uL0J1dHRvbi9UcmFuc2FjdGlvbkJ1dHRvbic7XG5pbXBvcnQgeyB1c2VZYW0gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lcic7XG5pbXBvcnQgeyBHbG9iYWxIb29rc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9HbG9iYWxIb29rcyc7XG5cbmNvbnN0IFJlZmVycmFsUHJvZ3JhbSA9ICgpID0+IHtcbiAgY29uc3QgeWFtID0gdXNlWWFtKCk7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBnbG9iYWxIb29rcyA9IHVzZUNvbnRleHQoR2xvYmFsSG9va3NDb250ZXh0KTtcbiAgY29uc3QgbW9kYWxDb250ZXh0ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyk7XG4gIGNvbnN0IGNoYXJ0RGF0YSA9IHVzZVJlZmVycmFsUmV3YXJkc0NoYXJ0RGF0YSgpO1xuXG4gIGNvbnN0IG9uQ2xhaW0gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB5YW0uY29udHJhY3RzLkxTVy5tZXRob2RzLmdldFdFVEhCb251c0ZvclJlZmVycmFscygpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uR2FzRXN0aW1hdGUgPSBhd2FpdCB0cmFuc2FjdGlvbi5lc3RpbWF0ZUdhcyh7IGZyb206IHdhbGxldC5hY2NvdW50IH0pO1xuXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbk1lc3NhZ2UgPSBtb2RhbENvbnRleHQuc2hvd0NvbnRyb2xsZWRNZXNzYWdlKCdDbGFpbWluZy4uLicsIDxTcGlubmVyIGxhYmVsPVwiVHJhbnNhY3Rpb24gaW4gcHJvZ3Jlc3MuLi5cIiAvPik7XG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnNlbmQoe1xuICAgICAgICBmcm9tOiB3YWxsZXQuYWNjb3VudCxcbiAgICAgICAgZ2FzOiB0cmFuc2FjdGlvbkdhc0VzdGltYXRlXG4gICAgICB9KTtcblxuICAgICAgdHJhbnNhY3Rpb25NZXNzYWdlLmNsb3NlKCk7XG4gICAgICBnbG9iYWxIb29rcy5sc3dTdGF0cy51cGRhdGUoKTtcblxuICAgICAgYXdhaXQgbW9kYWxDb250ZXh0LnNob3dNZXNzYWdlKCdTdWNjZXNzJywgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+WW91ciBib251cyBoYXMgYmVlbiBjbGFpbWVkIGFuZCBpcyBub3cgYXZhaWxhYmxlIGluIHlvdXIgd2FsbGV0PC9kaXY+XG4gICAgICA8Lz4pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGRlY29kZWRFcnJvciA9IGVycm9ycy5nZXRUcmFuc2FjdGlvbkVycm9yKGVycm9yLCAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBjbGFpbWluZycpO1xuICAgICAgY29uc29sZS5sb2coZGVjb2RlZEVycm9yKTtcbiAgICAgIHJldHVybiBtb2RhbENvbnRleHQuc2hvd0Vycm9yKCdDbGFpbWluZyBFcnJvcicsIGRlY29kZWRFcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIDxEZWx0YVNlY3Rpb24gcmVxdWlyZXNDb25uZWN0ZWRXYWxsZXQgdGl0bGU9XCJEZWx0YSBSZWZlcnJhbCBQcm9ncmFtXCI+XG4gICAgPERlbHRhUGFuZWwgY2xhc3NOYW1lPVwibWQ6bXQtMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptdC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgICAgVGhlIERlbHRhIFJlZmVycmFsIFByb2dyYW0gaGFzIGVuZGVkLjxiciAvPlxuICAgICAgICAgIFlvdSBjYW4gY2xhaW0geW91ciByZXdhcmRzIGJlbG93LlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3ctcmV2ZXJzZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8RGVsdGFUaXRsZUgzIGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMFwiPllvdXIgUmVmZXJyYWwgUmV3YXJkczwvRGVsdGFUaXRsZUgzPlxuICAgICAgICAgICAge2dsb2JhbEhvb2tzLmxzd1N0YXRzLmRhdGEucmVmZXJyYWxCb251c1dFVEggIT09IERBVEFfVU5BVkFJTEFCTEUgJiYgZ2xvYmFsSG9va3MubHN3U3RhdHMuZGF0YS5yZWZlcnJhbEJvbnVzV0VUSCA+IDAgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9e3sgaGVpZ2h0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImNoYXJ0R3JhZGllbnRcIiB4MT1cIjAlXCIgeDI9XCIwJVwiIHkxPVwiMCVcIiB5Mj1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiMyRjQ1QzVcIiBzdG9wT3BhY2l0eT1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjMkY0NUM1XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8VmljdG9yeUNoYXJ0IHBhZGRpbmc9ezM0fSB3aWR0aD17NDAwfSBoZWlnaHQ9ezMwMH0gc2NhbGU9e3sgeDogXCJ0aW1lXCIsIHk6IFwibGluZWFyXCIgfX0gbWluRG9tYWluPXt7IHk6IDAgfX0+XG4gICAgICAgICAgICAgICAgICA8VmljdG9yeUdyb3VwXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBzdHJva2VXaWR0aDogMSwgZmlsbE9wYWNpdHk6IDAuNSB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxWaWN0b3J5QXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGZpbGw6IFwidXJsKCNjaGFydEdyYWRpZW50KVwiLCBzdHJva2U6IFwiIzJGNDVDNVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHg9e2QgPT4gbmV3IERhdGUoZC5kYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICB5PVwicmVmZXJyYWxCb251c1dFVEhcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJ0RGF0YS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9WaWN0b3J5R3JvdXA+XG4gICAgICAgICAgICAgICAgPC9WaWN0b3J5Q2hhcnQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6IDw+PC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEZWx0YVBhbmVsIGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgIFRoZSBEZWx0YSBSZWZlcnJhbCBQcm9ncmFtIGhhcyBlbmRlZC48YnIgLz5cbiAgICAgICAgICAgICAgWW91IGNhbiBjbGFpbSB5b3VyIHJld2FyZHMgYmVsb3cuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTAgbWQ6bXQtOFwiPlxuICAgICAgICAgICAgICA8RGVsdGFUaXRsZUgzPllvdXIgUmVmZXJyYWwgQm9udXM8L0RlbHRhVGl0bGVIMz5cblxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHB5LTRcIj5cbiAgICAgICAgICAgICAgICA8bGk+RVRIIGVhcm5lZDoge2Zvcm1hdHRpbmcuZ2V0VG9rZW5BbW91bnQoZ2xvYmFsSG9va3MubHN3U3RhdHMuZGF0YS5yZWZlcnJhbEJvbnVzV0VUSCwgMCwgOCl9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q3JlZGl0IGVhcm5lZDoge2Zvcm1hdHRpbmcuZ2V0VG9rZW5BbW91bnQoZ2xvYmFsSG9va3MubHN3U3RhdHMuZGF0YS5yZWZlcnJhbEJvbnVzV0VUSCwgMCwgOCl9PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPERlbHRhUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uQnV0dG9uIHRleHQ9XCJDbGFpbSBCb251c1wiIHRleHRMb2FkaW5nPVwiQ2xhaW1pbmcuLi5cIiBvbkNsaWNrPXsoKSA9PiBvbkNsYWltKCl9IC8+XG4gICAgICAgICAgICAgIDwvRGVsdGFQYW5lbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGVsdGFQYW5lbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RlbHRhUGFuZWw+XG4gIDwvRGVsdGFTZWN0aW9uPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJyYWxQcm9ncmFtO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWZlcnJhbFByb2dyYW0gfSBmcm9tICcuL1JlZmVycmFsUHJvZ3JhbSc7XG4iLCJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICd1c2Utd2FsbGV0JztcbmltcG9ydCB7IENvbm5lY3RXYWxsZXRCdXR0b24gfSBmcm9tICcuLi9CdXR0b25zJztcblxuY29uc3QgRGVsdGFQYW5lbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHJlcXVpcmVzQ29ubmVjdGVkV2FsbGV0IH0pID0+IHtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBpZiAocmVxdWlyZXNDb25uZWN0ZWRXYWxsZXQgJiYgIXdhbGxldD8uYWNjb3VudCkge1xuICAgICAgcmV0dXJuIDxDb25uZWN0V2FsbGV0QnV0dG9uIC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUgfHwgJyd9IHctZnVsbGB9PlxuICAgIHtyZW5kZXJDb250ZW50KCl9XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVsdGFQYW5lbCIsImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IGNoZXZyb24gZnJvbSAnLi4vLi4vcHVibGljL2NoZXZyb24uc3ZnJztcbmltcG9ydCB7IERlbHRhVGl0bGVIMSB9IGZyb20gJy4uL1RpdGxlJztcbmltcG9ydCB7IENvbm5lY3RXYWxsZXRCdXR0b24gfSBmcm9tICcuLi9CdXR0b25zJztcblxuY29uc3QgRGVsdGFTZWN0aW9uID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBzaG93Q29ubmVjdFdhbGxldEJ1dHRvbiwgcmVxdWlyZXNDb25uZWN0ZWRXYWxsZXQsIGNlbnRlciB9KSA9PiB7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuXG4gIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKHJlcXVpcmVzQ29ubmVjdGVkV2FsbGV0ICYmICF3YWxsZXQ/LmFjY291bnQpIHtcbiAgICAgIGlmIChzaG93Q29ubmVjdFdhbGxldEJ1dHRvbikge1xuICAgICAgICByZXR1cm4gPENvbm5lY3RXYWxsZXRCdXR0b24gLz5cbiAgICAgIH1cbiAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVzQ29ubmVjdGVkV2FsbGV0ICYmICF3YWxsZXQ/LmFjY291bnQgJiYgIXNob3dDb25uZWN0V2FsbGV0QnV0dG9uKSB7XG4gICAgcmV0dXJuIDw+PC8+O1xuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci0yIG10LTQgYm9yZGVyLWJsYWNrIHB5LTQgcHgtMyBtZDpweS04IG1kOnB4LTEyIG0tYXV0b1wiPlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMiBtZDpweS00XCI+XG4gICAgICAgIDxEZWx0YVRpdGxlSDEgY2xhc3NOYW1lPXtgJHtjZW50ZXIgJiYgXCJtZDp0ZXh0LWNlbnRlclwifWB9Pnt0aXRsZX08L0RlbHRhVGl0bGVIMT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC00IHNlbGYtc3RhcnRcIiBzcmM9e2NoZXZyb259IGFsdD1cImNoZXZyb25cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7cmVuZGVyQ29udGVudCgpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbHRhU2VjdGlvbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGVsdGFQYW5lbCBmcm9tICcuL0RlbHRhUGFuZWwnO1xuaW1wb3J0IGNoZXZyb24gZnJvbSAnLi4vLi4vcHVibGljL2NoZXZyb24uc3ZnJztcblxuY29uc3QgRGVsdGFTZWN0aW9uQm94ID0gKHsgaW5kZXgsIGluZGV4Rm9ybWF0dGVyLCBzaG93SW5kZXgsIG9wZW5lZCwgdGl0bGUsIGNsYXNzTmFtZSA9ICcnLCBjaGlsZHJlbiwgb25PcGVuIH0pID0+IHtcbiAgaW5kZXhGb3JtYXR0ZXIgPSBpbmRleEZvcm1hdHRlciB8fCAoaSA9PiBpKTtcbiAgaWYgKG9wZW5lZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3BlbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IFtpc09wZW5lZCwgc2V0SXNPcGVuZWRdID0gdXNlU3RhdGUob3BlbmVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbmVkKG9wZW5lZCk7XG4gIH0sIFtvcGVuZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvbk9wZW4gJiYgaXNPcGVuZWQpIHtcbiAgICAgIG9uT3BlbihpbmRleCk7XG4gICAgfVxuICB9LCBbaXNPcGVuZWRdKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPERlbHRhUGFuZWwgY2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtc20gYm9yZGVyLWJsYWNrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW5lZChvID0+ICFvKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHtpbmRleCAhPT0gdW5kZWZpbmVkICYmIHNob3dJbmRleCAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtNCBib3JkZXItciBib3JkZXItd2hpdGUgYmctZ3JheS0zMDAgc2VsZi1zdHJldGNoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNlbGYtY2VudGVyXCI+I3tpbmRleEZvcm1hdHRlcihpbmRleCl9PC9kaXY+XG4gICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBwLTIgbWQ6cC00IGJnLWdyYXktMzAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZmxleC1ncm93XCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgbWwtNCBzZWxmLWNlbnRlciAkeyFpc09wZW5lZCA/ICd0cmFuc2Zvcm0gcm90YXRlLTE4MCcgOiAnJ31gfSBzcmM9e2NoZXZyb259IGFsdD1cImNoZXZyb25cIiB3aWR0aD1cIjE2cHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BwLTEgbWQ6cC00ICR7IWlzT3BlbmVkID8gJ2hpZGRlbicgOiAnJ31gfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9EZWx0YVBhbmVsPlxuICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbHRhU2VjdGlvbkJveDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRGVsdGFTZWN0aW9uIH0gZnJvbSAnLi9EZWx0YVNlY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWx0YVBhbmVsIH0gZnJvbSAnLi9EZWx0YVBhbmVsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVsdGFTZWN0aW9uQm94IH0gZnJvbSAnLi9EZWx0YVNlY3Rpb25Cb3gnOyIsImNvbnN0IFNwaW5uZXIgPSAoeyBsYWJlbCwgY2xhc3NOYW1lIH0pID0+IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrICR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgIDxzdmcgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIC1tbC0xIGgtNSB3LTUgbXItMiB0ZXh0LWdyYXktNTAwIGlubGluZS1ibG9ja1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCI0XCIgLz5cbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiIC8+XG4gICAgPC9zdmc+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmUgdG9wLXB4IHRleHQtbGdcIj5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyJztcbiIsImNvbnN0IERlbHRhVGl0bGUgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjZW50ZXIgfSkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake2NlbnRlciAmJiBcInRleHQtY2VudGVyXCJ9IGZsZXgtZ3JvdyBmb250LXd1bGthbiAke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2ID47XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbHRhVGl0bGUiLCJpbXBvcnQgRGVsdGFUaXRsZSBmcm9tICcuL0RlbHRhVGl0bGUnO1xuXG5jb25zdCBEZWx0YVRpdGxlSDEgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjZW50ZXIgfSkgPT4ge1xuICByZXR1cm4gPERlbHRhVGl0bGUgY2VudGVyPXtjZW50ZXJ9IGNsYXNzTmFtZT17YHRleHQtMnhsIG1kOnRleHQtNHhsICR7Y2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9EZWx0YVRpdGxlPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVsdGFUaXRsZUgxOyIsImltcG9ydCBEZWx0YVRpdGxlIGZyb20gJy4vRGVsdGFUaXRsZSc7XG5cbmNvbnN0IERlbHRhVGl0bGVIMiA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGNlbnRlciwgbGluZXVuZGVyIH0pID0+IHtcbiAgcmV0dXJuIDxEZWx0YVRpdGxlIGNlbnRlcj17Y2VudGVyfSBjbGFzc05hbWU9e2B0ZXh0LXhsIG1kOnRleHQtM3hsICR7bGluZXVuZGVyID8gJ2JvcmRlci1iIGJvcmRlci1ibGFjayBwYi0yJyA6ICcnfSAke2NsYXNzTmFtZSB8fCAnJ31gfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvRGVsdGFUaXRsZT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbHRhVGl0bGVIMjsiLCJpbXBvcnQgRGVsdGFUaXRsZSBmcm9tICcuL0RlbHRhVGl0bGUnO1xuXG5jb25zdCBEZWx0YVRpdGxlSDMgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjZW50ZXIgfSkgPT4ge1xuICByZXR1cm4gPERlbHRhVGl0bGUgY2VudGVyPXtjZW50ZXJ9IGNsYXNzTmFtZT17YHRleHQteGwgbWQ6dGV4dC0yeGwgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAge2NoaWxkcmVufVxuICA8L0RlbHRhVGl0bGU+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWx0YVRpdGxlSDM7IiwiaW1wb3J0IERlbHRhVGl0bGUgZnJvbSAnLi9EZWx0YVRpdGxlJztcblxuY29uc3QgRGVsdGFUaXRsZUg0ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY2VudGVyIH0pID0+IHtcbiAgcmV0dXJuIDxEZWx0YVRpdGxlIGNlbnRlcj17Y2VudGVyfSBjbGFzc05hbWU9e2B0ZXh0LWxnIG1kOnRleHQteGwgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAge2NoaWxkcmVufVxuICA8L0RlbHRhVGl0bGU+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZWx0YVRpdGxlSDQ7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWx0YVRpdGxlIH0gZnJvbSAnLi9EZWx0YVRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVsdGFUaXRsZUgxIH0gZnJvbSAnLi9EZWx0YVRpdGxlSDEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWx0YVRpdGxlSDIgfSBmcm9tICcuL0RlbHRhVGl0bGVIMic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERlbHRhVGl0bGVIMyB9IGZyb20gJy4vRGVsdGFUaXRsZUgzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVsdGFUaXRsZUg0IH0gZnJvbSAnLi9EZWx0YVRpdGxlSDQnO1xuIiwiaW1wb3J0IHsgVmljdG9yeVBpZSwgVmljdG9yeUxhYmVsLCBWaWN0b3J5TGVnZW5kIH0gZnJvbSAndmljdG9yeSc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdpbmRtaWxsL3JlYWN0LXVpJztcbmltcG9ydCB7IERlbHRhUGFuZWwsIERlbHRhU2VjdGlvbiwgRGVsdGFTZWN0aW9uQm94IH0gZnJvbSAnLi4vU2VjdGlvbic7XG5pbXBvcnQgeyBEZWx0YVRpdGxlSDMgfSBmcm9tICcuLi9UaXRsZSc7XG5pbXBvcnQgeyBmb3JtYXR0aW5nLCB0cmFuc2FjdGlvbnMsIHRpbWUgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IFZlc3RpbmdUcmFuc2FjdGlvblByb2dyZXNzQmFyIH0gZnJvbSAnLi4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBHbG9iYWxIb29rc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9HbG9iYWxIb29rcyc7XG5pbXBvcnQgRGVsdGFCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0RlbHRhQnV0dG9uJztcbmltcG9ydCB7IFRva2VuSW5wdXQgfSBmcm9tICcuLi9JbnB1dCc7XG5pbXBvcnQgVHJhbnNhY3Rpb25CdXR0b24gZnJvbSAnLi4vQnV0dG9uL1RyYW5zYWN0aW9uQnV0dG9uJztcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzJztcblxuY29uc3QgRlVMTFlfVkVTVElOR19SRUZSRVNIX1JBVEUgPSAxICogNjAgKiAxMDAwO1xuXG5jb25zdCBWZXN0aW5nID0gKCkgPT4ge1xuICBjb25zdCBbZnVsbHlWZXN0ZWRBdEluZm8sIHNldEZ1bGx5VmVzdGVkQXRJbmZvXSA9IHVzZVN0YXRlKERBVEFfVU5BVkFJTEFCTEUpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25EZXRhaWxzVmlzaWJsZSwgc2V0VHJhbnNhY3Rpb25EZXRhaWxzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG1vZGFsQ29udGV4dCA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICBjb25zdCBjaGFydFdpZHRoID0gNDAwO1xuICBjb25zdCBnbG9iYWxIb29rcyA9IHVzZUNvbnRleHQoR2xvYmFsSG9va3NDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChnbG9iYWxIb29rcy5kZWx0YS5kYXRhLnZlc3RpbmdJblByb2dyZXNzKSB7XG4gICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gdGltZS5nZXRUaW1lTGVmdChnbG9iYWxIb29rcy5kZWx0YS5kYXRhLmZ1bGx5VmVzdGVkQXQpO1xuICAgICAgICBzZXRGdWxseVZlc3RlZEF0SW5mbyh0aW1lTGVmdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGdWxseVZlc3RlZEF0SW5mbyhEQVRBX1VOQVZBSUxBQkxFKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbEhvb2tzLmRlbHRhLmRhdGEuZnVsbHlWZXN0ZWRBdCAhPT0gREFUQV9VTkFWQUlMQUJMRSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGUsIEZVTExZX1ZFU1RJTkdfUkVGUkVTSF9SQVRFKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtnbG9iYWxIb29rcy5kZWx0YS5kYXRhLmZ1bGx5VmVzdGVkQXRdKTtcblxuICBjb25zdCBvblRvZ2dsZVRyYW5zYWN0aW9uRGV0YWlscyA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvbkRldGFpbHNWaXNpYmxlKHRyYW5zYWN0aW9uRGV0YWlsc1Zpc2libGUgPT4gIXRyYW5zYWN0aW9uRGV0YWlsc1Zpc2libGUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclZlc3RpbmdUcmFuc2FjdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRPcGVuZWQsIHNldEN1cnJlbnRPcGVuZWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCByZW5kZXJUcmFuc2FjdGlvbiA9ICh0eCwgaW5kZXgsIG9wZW5lZCkgPT4ge1xuICAgICAgdHguaW5kZXggPSBpbmRleDtcbiAgICAgIGNvbnN0IHZlc3RpbmdUaW1lTGVmdCA9IHRpbWUuZ2V0VGltZUxlZnQodHguZnVsbFZlc3RpbmdUaW1lc3RhbXApO1xuXG4gICAgICByZXR1cm4gPGRpdiBrZXk9e2B0eC0ke2luZGV4fWB9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtdC00XCI+XG4gICAgICAgIDxEZWx0YVNlY3Rpb25Cb3ggb3BlbmVkPXtvcGVuZWR9IG9uT3Blbj17KGkpID0+IHNldEN1cnJlbnRPcGVuZWQoaSl9IGluZGV4PXtpbmRleH0gdGl0bGU9e2BUcmFuc2FjdGlvbiAke2luZGV4ICsgMX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgIDxkaXY+VGltZSB1bnRpbCBmdWxseSBtYXR1cmVkOjwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dmVzdGluZ1RpbWVMZWZ0LmRheXN9IERheShzKSB7dmVzdGluZ1RpbWVMZWZ0LmhvdXJzfSBIb3VyKHMpIHt2ZXN0aW5nVGltZUxlZnQubWludXRlc30gTWludXRlKHMpPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFZlc3RpbmdUcmFuc2FjdGlvblByb2dyZXNzQmFyIHRyYW5zYWN0aW9uPXt0eH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEgbXQtMVwiPntmb3JtYXR0aW5nLmdldFRva2VuQW1vdW50KHR4Lm1hdHVyZSwgMTgsIDQpfSAvIHtmb3JtYXR0aW5nLmdldFRva2VuQW1vdW50KHR4LmltbWF0dXJlLCAxOCwgNCl9IG1hdHVyZTwvZGl2PlxuICAgICAgICA8L0RlbHRhU2VjdGlvbkJveD5cbiAgICAgIDwvZGl2PjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIDw+XG4gICAgICB7Z2xvYmFsSG9va3MuZGVsdGEuZGF0YS52ZXN0aW5nVHJhbnNhY3Rpb25zXG4gICAgICAgIC5maWx0ZXIodHggPT4gdHguYW1vdW50ICE9PSAwKVxuICAgICAgICAubWFwKCh0eCwgaW5kZXgpID0+IHJlbmRlclRyYW5zYWN0aW9uKHR4LCBpbmRleCwgaW5kZXggPT09IGN1cnJlbnRPcGVuZWQpKX1cbiAgICA8Lz47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTXlXYWxsZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2xvYmFsSG9va3MgPSB1c2VDb250ZXh0KEdsb2JhbEhvb2tzQ29udGV4dCk7XG4gICAgY29uc3Qgb25TdGFrZURpYWxvZyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgY29uc3Qgb25TdGFrZSA9IGFzeW5jIChhbW91bnQsIGFtb3VudEJOLCB2YWxpZCkgPT4ge1xuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgYXdhaXQgbW9kYWxDb250ZXh0LnNob3dFcnJvcignRXJyb3InLCAnSW52YWxpZCBpbnB1dCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IGF3YWl0IG1vZGFsQ29udGV4dC5zaG93Q29uZmlybSgnU3Rha2luZycsIGBBcmUgeW91IHN1cmUgeW91IHdhbm5hIHN0YWtlICR7YW1vdW50fSBkZWx0YT9gKTtcblxuICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCB3ZWIzIGNhbGwsIGJlIHN1cmUgdG8gdXNlIGFtb3VudEJOXG4gICAgICAgICAgICAvLyBUT0RPOiAtIE1BWCBVcGRhdGUgZGVsdGEgYmFsYW5jZSB1c2luZyBkZWx0YSBob29rIHVwZGF0ZSBmdW5jdGlvblxuICAgICAgICAgICAgZ2xvYmFsSG9va3MuZGVsdGEudXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gPERlbHRhUGFuZWw+XG4gICAgICAgIDxUb2tlbklucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXG4gICAgICAgICAgdG9rZW49XCJkZWx0YVwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIlN0YWtlXCJcbiAgICAgICAgICBidXR0b25UZXh0TG9hZGluZz1cIlN0YWtpbmcuLi5cIlxuICAgICAgICAgIG9uT2s9e29uU3Rha2V9IC8+XG4gICAgICA8L0RlbHRhUGFuZWwgPjtcblxuICAgICAgYXdhaXQgbW9kYWxDb250ZXh0LnNob3dNZXNzYWdlKCdTdGFraW5nJywgY29udGVudCwgZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gPGRpdiA+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHB5LTRcIj5cbiAgICAgICAgPGxpPlRvdGFsIERFTFRBOiB7Zm9ybWF0dGluZy5nZXRUb2tlbkFtb3VudChnbG9iYWxIb29rcy5kZWx0YS5kYXRhLnRvdGFsLCAwLCA0KX0gREVMVEE8L2xpPlxuICAgICAgICA8bGk+TWF0dXJlIERFTFRBOiB7Zm9ybWF0dGluZy5nZXRUb2tlbkFtb3VudChnbG9iYWxIb29rcy5kZWx0YS5kYXRhLm1hdHVyZSwgMCwgNCl9IERFTFRBPC9saT5cbiAgICAgICAgPGxpPkltbWF0dXJlIERFTFRBOiB7Zm9ybWF0dGluZy5nZXRUb2tlbkFtb3VudChnbG9iYWxIb29rcy5kZWx0YS5kYXRhLmltbWF0dXJlLCAwLCA0KX0gREVMVEE8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxEZWx0YVBhbmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICA8RGVsdGFCdXR0b24gY2xhc3NOYW1lPVwiZmxleC0xIG1yLTQgbWQ6ZmxleC1ncm93LTBcIiBsYWJlbEJvdHRvbT1cIkVhcm4gWWllbGRcIiBvbkNsaWNrPXsoKSA9PiBvblN0YWtlRGlhbG9nKCl9PlN0YWtlIGluIHZhdWx0PC9EZWx0YUJ1dHRvbj5cbiAgICAgICAgPERlbHRhQnV0dG9uIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LWdyb3ctMFwiIGxhYmVsQm90dG9tPVwiRWFybiBZaWVsZFwiIG9uQ2xpY2s9eygpID0+IHsgfX0+VHJhZGUgRGVsdGE8L0RlbHRhQnV0dG9uPlxuICAgICAgPC9EZWx0YVBhbmVsPlxuICAgIDwvZGl2PlxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJMUFN0YXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdsb2JhbEhvb2tzID0gdXNlQ29udGV4dChHbG9iYWxIb29rc0NvbnRleHQpO1xuICAgIGNvbnN0IG9uU3Rha2UgPSBhc3luYyAoYW1vdW50LCBhbW91bnRCTiwgdmFsaWQpID0+IHtcbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgYXdhaXQgbW9kYWxDb250ZXh0LnNob3dFcnJvcignRXJyb3InLCAnSW52YWxpZCBpbnB1dCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgbW9kYWxDb250ZXh0LnNob3dDb25maXJtKCdTdGFraW5nJywgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FubmEgc3Rha2UgJHthbW91bnR9IHJMUD9gKTtcblxuICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgLy8gVE9ETzogYWRkIHdlYjMgY2FsbFxuICAgICAgICAgIC8vIFRPRE86IC0gTUFYIGNhbGwgdGhlIHN0YWtpbmcgdXBkYXRlIG1ldGhvZCBhbmQgdXNlciByTFAgYmFsYW5jZVxuICAgICAgICAgIGdsb2JhbEhvb2tzLnN0YWtpbmcudXBkYXRlKCk7XG4gICAgICAgICAgZ2xvYmFsSG9va3MuZGVsdGEudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHB5LTRcIj5cbiAgICAgICAgPGxpPlRvdGFsIHJMUDoge2Zvcm1hdHRpbmcuZ2V0VG9rZW5BbW91bnQoZ2xvYmFsSG9va3MucmxwSW5mby5iYWxhbmNlICsgZ2xvYmFsSG9va3Muc3Rha2luZy5ybHBJbmZvLmFtb3VudFN0YWtlZCwgMCwgNCl9IHJMUDwvbGk+XG4gICAgICAgIDxsaT5VbnN0YWtlZCByTFA6IHtmb3JtYXR0aW5nLmdldFRva2VuQW1vdW50KGdsb2JhbEhvb2tzLnJscEluZm8uYmFsYW5jZSwgMCwgNCl9IHJMUDwvbGk+XG4gICAgICAgIDxsaT5TdGFrZWQgckxQOiB7Zm9ybWF0dGluZy5nZXRUb2tlbkFtb3VudChnbG9iYWxIb29rcy5zdGFraW5nLnJscEluZm8uYW1vdW50U3Rha2VkLCAwLCA0KX0gckxQPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8VG9rZW5JbnB1dCBjbGFzc05hbWU9XCJtdC00XCIgdG9rZW49XCJyTFBcIiBidXR0b25UZXh0PVwiU3Rha2VcIiBidXR0b25UZXh0TG9hZGluZz1cIlN0YWtpbmcuLi5cIiBvbk9rPXtvblN0YWtlfSAvPlxuICAgIDwvZGl2ID5cbiAgfTtcblxuICBjb25zdCByZW5kZXJDaGFydCA9ICgpID0+IHtcbiAgICBpZiAoZ2xvYmFsSG9va3MubHN3U3RhdHMuZGF0YS5yZWZlcnJhbEJvbnVzV0VUSCA9PT0gREFUQV9VTkFWQUlMQUJMRSB8fCBnbG9iYWxIb29rcy5sc3dTdGF0cy5kYXRhLnJlZmVycmFsQm9udXNXRVRIIDw9IDApIHtcbiAgICAgIHJldHVybiA8PjwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgNDAgNDAwIDM3MFwiPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJjaGFydEdyYWRpZW50MlwiIHgxPVwiMCVcIiB4Mj1cIjAlXCIgeTE9XCIwJVwiIHkyPVwiMTAwJVwiPlxuICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCIjREI3N0VCXCIgc3RvcE9wYWNpdHk9XCIxXCIgLz5cbiAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjREJDOUQ2XCIgc3RvcE9wYWNpdHk9XCIwLjVcIiAvPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPFZpY3RvcnlQaWVcbiAgICAgICAgICBzdGFuZGFsb25lPXtmYWxzZX1cbiAgICAgICAgICB3aWR0aD17Y2hhcnRXaWR0aH0gaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgc3R5bGU9e3sgbGFiZWxzOiB7IGZpbGw6IGYgPT4gZi5kYXR1bS54ID09PSBcIm1hdHVyZVwiID8gJ3doaXRlJyA6ICdibGFjaycgfSwgZGF0YTogeyBmaWxsOiBmID0+IGYuZGF0dW0ueCA9PT0gXCJtYXR1cmVcIiA/ICcjNDMxNUM3JyA6IFwidXJsKCNjaGFydEdyYWRpZW50MilcIiwgZmlsbE9wYWNpdHk6IDEsIHN0cm9rZTogXCJibGFja1wiLCBzdHJva2VXaWR0aDogMCB9IH19XG4gICAgICAgICAgY29sb3JTY2FsZT17W1wiIzQzMTVDN1wiLCBcIiM5RTlFOUVcIl19XG4gICAgICAgICAgY2F0ZWdvcmllcz17eyB4OiBbXCJtYXR1cmVcIiwgXCJpbW1hdHVyZVwiXSB9fVxuICAgICAgICAgIGlubmVyUmFkaXVzPXsxMTV9XG4gICAgICAgICAgbGFiZWxSYWRpdXM9ezEyM31cbiAgICAgICAgICBsYWJlbHM9eyh7IGRhdHVtIH0pID0+IGAkeyhkYXR1bS55ICogMTAwKS50b0ZpeGVkKDApfSVgfVxuICAgICAgICAgIGRhdGE9e1tcbiAgICAgICAgICAgIHsgeDogXCJtYXR1cmVcIiwgeTogZ2xvYmFsSG9va3MuZGVsdGEuZGF0YS5wZXJjZW50VmVzdGVkIH0sXG4gICAgICAgICAgICB7IHg6IFwiaW1tYXR1cmVcIiwgeTogMS4wIC0gZ2xvYmFsSG9va3MuZGVsdGEuZGF0YS5wZXJjZW50VmVzdGVkIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPFZpY3RvcnlMYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT17ZnVsbHlWZXN0ZWRBdEluZm8gPT09IERBVEFfVU5BVkFJTEFCTEUgPyAnaW52aXNpYmxlJyA6ICd2aXNpYmxlJ31cbiAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICBzdGFuZGFsb25lPXtmYWxzZX1cbiAgICAgICAgICB4PXtjaGFydFdpZHRoIC8gMn0geT17MjAwfVxuICAgICAgICAgIGxpbmVIZWlnaHQ9e1sxLCAxLjUsIDEuNSwgMS41LCAxLjVdfVxuICAgICAgICAgIHN0eWxlPXtbeyBmb250U2l6ZTogMTgsIGZpbGw6ICdibGFjaycgfSwgeyBmb250U2l6ZTogMTgsIGZpbGw6ICdibGFjaycgfSwgeyBmb250U2l6ZTogMTQsIGZpbGw6ICdibGFjaycgfSwgeyBmb250U2l6ZTogMTQsIGZpbGw6ICdibGFjaycgfSwgeyBmb250U2l6ZTogMTQsIGZpbGw6ICdibGFjaycgfV19XG4gICAgICAgICAgdGV4dD17WydUaW1lIFVudGlsJywgJ0Z1bGx5IE1hdHVyZWQnLCBgJHtmdWxseVZlc3RlZEF0SW5mby5kYXlzfSBkYXlzYCwgYCR7ZnVsbHlWZXN0ZWRBdEluZm8uaG91cnN9IGhvdXJzYCwgYCR7ZnVsbHlWZXN0ZWRBdEluZm8ubWludXRlc30gbWludXRlc2BdfVxuICAgICAgICAvPlxuICAgICAgICA8VmljdG9yeUxlZ2VuZCB4PXsxMTV9IHk9ezM4MH0gc3RhbmRhbG9uZT17ZmFsc2V9XG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGNlbnRlclRpdGxlXG4gICAgICAgICAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICBpdGVtc1BlclJvdz17Mn1cbiAgICAgICAgICBkYXRhPXtbXG4gICAgICAgICAgICB7IG5hbWU6IFwiTWF0dXJlXCIsIHN5bWJvbDogeyB0eXBlOiAnc3F1YXJlJywgZmlsbDogXCIjNDMxNUM3XCIgfSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkltbWF0dXJlXCIsIHN5bWJvbDogeyB0eXBlOiAnc3F1YXJlJywgZmlsbDogXCIjREJDOUQ2XCIgfSB9XG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICB9O1xuXG4gIHJldHVybiA8RGVsdGFTZWN0aW9uIHJlcXVpcmVzQ29ubmVjdGVkV2FsbGV0IHRpdGxlPVwiRGVsdGEgVmVzdGluZyBTY2hlZHVsZVwiPlxuICAgIDxEZWx0YVBhbmVsIGNsYXNzTmFtZT1cIm1kOm10LTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bXQtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBtZDpmbGV4LXJvdy1yZXZlcnNlXCI+XG4gICAgICAgICAgPERlbHRhUGFuZWwgY2xhc3NOYW1lPVwidy1mdWxsIG10LTRcIj5cbiAgICAgICAgICAgIDxEZWx0YVRpdGxlSDM+VG90YWwgRGVsdGE8L0RlbHRhVGl0bGVIMz5cbiAgICAgICAgICAgIHtyZW5kZXJDaGFydCgpfVxuICAgICAgICAgIDwvRGVsdGFQYW5lbD5cbiAgICAgICAgICA8RGVsdGFQYW5lbCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICA8RGVsdGFUaXRsZUgzPk15IFdhbGxldDwvRGVsdGFUaXRsZUgzPlxuICAgICAgICAgICAge3JlbmRlck15V2FsbGV0KCl9XG4gICAgICAgICAgICA8RGVsdGFUaXRsZUgzIGNsYXNzTmFtZT1cIm10LTZcIj5yTFAgU3RhdHM8L0RlbHRhVGl0bGVIMz5cbiAgICAgICAgICAgIHtyZW5kZXJSTFBTdGF0cygpfVxuICAgICAgICAgIDwvRGVsdGFQYW5lbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEZWx0YVBhbmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGZsZXgtd3JhcCBtdC00XCI+XG4gICAgICAgIDxEZWx0YUJ1dHRvbiBoaWRlUGx1cyBsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmVcIiBvbkNsaWNrPXtvblRvZ2dsZVRyYW5zYWN0aW9uRGV0YWlsc30+eyF0cmFuc2FjdGlvbkRldGFpbHNWaXNpYmxlID8gJ1NlZSBBbGwgVHJhbnNhY3Rpb25zIOKWvCcgOiAnSGlkZSBBbGwgVHJhbnNhY3Rpb25zIOKWsid9PC9EZWx0YUJ1dHRvbj5cbiAgICAgIDwvRGVsdGFQYW5lbD5cbiAgICAgIDxEZWx0YVBhbmVsIGNsYXNzTmFtZT17YCR7IXRyYW5zYWN0aW9uRGV0YWlsc1Zpc2libGUgPyAnaGlkZGVuJyA6ICcnfWB9PlxuICAgICAgICB7cmVuZGVyVmVzdGluZ1RyYW5zYWN0aW9ucygpfVxuICAgICAgPC9EZWx0YVBhbmVsPlxuICAgIDwvRGVsdGFQYW5lbD5cbiAgPC9EZWx0YVNlY3Rpb24+XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFZlc3Rpbmc7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFZlc3RpbmcgfSBmcm9tICcuL1Zlc3RpbmcnO1xuIiwiaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMvYmlnbnVtYmVyJztcbmltcG9ydCB7IHZlcmlmeUFkZHJlc3NNYXAgfSBmcm9tICcuLi91dGlscyc7XG5cbkJpZ051bWJlci5jb25maWcoe1xuICBFWFBPTkVOVElBTF9BVDogMTAwMCxcbiAgREVDSU1BTF9QTEFDRVM6IDgwXG59KTtcblxuLy8gVGVtcCBmbGFnLCBzZXQgdG8gdHJ1ZSB0byB1c2UgdGhlIGhhcmRoYXQgbm9kZSBhbmQgZW5kX2xzdyBvcGVyYXRpb24uXG5leHBvcnQgY29uc3QgVEVNUF9FTkFCTEVfRU5EX0xTV19XRUIzID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBTVUJUUkFDVF9HQVNfTElNSVQgPSAxMDAwMDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSVJNQVRJT05TID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dBUyA9ICc2MDAwMDAwJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dBU19QUklDRSA9ICcxMDAwMDAwMDAwMDAwJztcbmV4cG9ydCBjb25zdCBEQVRBX1VOQVZBSUxBQkxFID0gJy0tJztcblxuLy8gVGhpcyBwcm92aWRlciBpcyBubyBsb25nZXIgd29ya2luZyBhbmQgZmFpbHMgd2l0aCBDT1JTLlxuLy8gZXhwb3J0IGNvbnN0IFdFQjNfUFJPVklERVJfVVJMID0gJ2h0dHBzOi8vbWFpbm5ldC5ldGguYXJhZ29uLm5ldHdvcmsvJztcblxuLy8gTm90ZXM6XG4vLyAtIElmIG9uZSBlbmRwb2ludCBzdG9wIHdvcmtpbmcgaGVyZSBpcyBhIGxpc3Qgb2YgZW5kcG9pbnQgdGhhdCBjYW4gYmUgdXNlZDogaHR0cHM6Ly9ldGhlcmV1bW5vZGVzLmNvbS9cbi8vIC0gRW5kcG9pbnQgZm91bmQgZnJvbSBpbnNwZWN0aW5nIFhIUiByZXF1ZXN0IGZyb20gbWV0YW1hc2sgZGV2IG1vZGUgaW4gZ29vZ2xlIGNocm9tZS5Db3VsZCBjaGFuZ2UgaW5cbi8vICAgdGhlIGZ1dHVyIGFuZCBicmVhazogaHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My85YWEzZDk1YjNiYzQ0MGZhODhlYTEyZWFhNDQ1NjE2MVxuZXhwb3J0IGNvbnN0IFdFQjNfUFJPVklERVJfVVJMID0gJ2h0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8vdjMvOWFhM2Q5NWIzYmM0NDBmYTg4ZWExMmVhYTQ0NTYxNjEnO1xuXG5leHBvcnQgY29uc3QgcGFpck5hbWVzID0ge1xuICBkZWx0YVdldGg6ICdkZWx0YVdldGgnLFxuICBjb3JlQ2J0YzogJ2NvcmVDYnRjJyxcbiAgY29yZVdldGg6ICdjb3JlV2V0aCcsXG4gIGNEYWlXY29yZTogJ2NEYWlXY29yZScsXG4gIGV0aFVzZHQ6ICdldGhVc2R0JyxcbiAgd2J0Y1dldGg6ICd3YnRjV2V0aCdcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRyZXNzTWFwID0ge1xuICAvLyBVbmlzd2FwXG4gIHVuaXN3YXBGYWN0b3J5OiAnMHhjMGE0N2RGZTAzNEI0MDBCNDdiRGFENUZlY0RhMjYyMWRlNmM0ZDk1JyxcbiAgdW5pc3dhcEZhY3RvcnlWMjogJzB4NUM2OWJFZTcwMWVmODE0YTJCNmEzRURENEIxNjUyQ0I5Y2M1YUE2ZicsXG4gIHVuaXN3YXBSb3V0ZXI6ICcweDdhMjUwZDU2MzBCNGNGNTM5NzM5ZEYyQzVkQWNiNGM2NTlGMjQ4OEQnLFxuXG4gIC8vIFBhaXJzXG4gIGRlbHRhV2V0aDogJzB4MTY5ZjMxYjQ0NTJhRjE4MUNhOGQ4MDJjRTE4YjYyRkNBZDhCMWI5YicsXG4gIGNvcmVDYnRjOiAnMHg2ZmFkN2Q0NDY0MGM1Y2QwMTIwZGVlYzAzMDFlOGNmODUwYmVjYjY4JyxcbiAgY29yZVdldGg6ICcweDMyY2U3ZTQ4ZGViZGNjYmZlMGNkMDM3Y2M4OTUyNmU0MzgyY2I4MWInLFxuICBjRGFpV2NvcmU6ICcweDAxQUMwOEU4MjExODViNmQ4N0U2OGM2N0Y5ZGM3OUE4OTg4Njg4RUInLFxuICBldGhVc2R0OiAnMHgwZDRhMTFkNUVFYWFDMjhFQzNGNjFkMTAwZGFGNGQ0MDQ3MWYxODUyJyxcbiAgd2J0Y1dldGg6ICcweGJiMmI4MDM4YTE2NDAxOTZmYmUzZTM4ODE2ZjNlNjdjYmE3MmQ5NDAnLFxuXG4gIC8vIFRva2Vuc1xuICBkZWx0YTogJzB4NmYwOGMwYjgwNTY5NUM0ZWExY2ZDNDY3M2M2Q0MzMTdCMTI0ZjgzMycsXG4gIHJMUDogJzB4N2ZjNjY1MDBjODRhNzZhZDdlOWM5MzQzN2JmYzVhYzMzZTJkZGFlOScsXG4gIGNvcmU6ICcweDYyMzU5ZWQ3NTA1ZWZjNjFmZjFkNTZmZWY4MjE1OGNjYWZmYTIzZDcnLFxuICB3Q09SRTogJzB4MTdiOGMxYTkyYjY2YjFjZjMwOTJjNWQyMjNjYjNhMTI5MDIzYjY2OScsXG4gIHdFVEg6ICcweGMwMmFhYTM5YjIyM2ZlOGQwYTBlNWM0ZjI3ZWFkOTA4M2M3NTZjYzInLFxuICB3QlRDOiAnMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5JyxcbiAgY0JUQzogJzB4N2I1OTgyZGNBQjA1NEMzNzc1MTc3NTlkMEQyYTNhNUQwMjYxNUFCOCcsXG4gIGNEQUk6ICcweDAwYTY2MTg5MTQzMjc5YjZkYjliNzcyOTQ2ODhmNDc5NTlmMzc2NDInLFxuXG4gIExTVzogJzB4ZGFGQ0U1NjcwZDNGNjdkYTlBM0E0NEZFNmJjMzY5OTJlNUUyYmVhQidcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRyZXNzRGVjaW1hbHNNYXAgPSB7fTtcbmFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndFVEhdID0gMTg7XG5hZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC5jb3JlXSA9IDE4O1xuYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAud0NPUkVdID0gMTg7XG5hZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC53YnRjV2V0aF0gPSAxODtcbmFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndCVENdID0gODtcbmFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLmNEQUldID0gMTg7XG5hZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC5kZWx0YV0gPSAxODtcblxuZXhwb3J0IGNvbnN0IHRva2VuTWFwID0ge307XG50b2tlbk1hcFthZGRyZXNzTWFwLndFVEhdID0ge1xuICBuYW1lOiAnV0VUSCcsXG4gIGZyaWVuZGx5TmFtZTogJ0VUSCcsXG4gIGRlY2ltYWxzOiBhZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC53RVRIXVxufTtcbnRva2VuTWFwW2FkZHJlc3NNYXAuckxQXSA9IHtcbiAgbmFtZTogJ3JMUCcsXG4gIGZyaWVuZGx5TmFtZTogJ3JMUCcsXG4gIGRlY2ltYWxzOiBhZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC5yTFBdXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC5kZWx0YV0gPSB7XG4gIG5hbWU6ICdERUxUQScsXG4gIGZyaWVuZGx5TmFtZTogJ0RFTFRBJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLmRlbHRhXVxufTtcbnRva2VuTWFwW2FkZHJlc3NNYXAud0JUQ10gPSB7XG4gIG5hbWU6ICdXQlRDJyxcbiAgZnJpZW5kbHlOYW1lOiAnQlRDJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndCVENdXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC5jQlRDXSA9IHsgbmFtZTogJ0NCVEMnLCAuLi50b2tlbk1hcFthZGRyZXNzTWFwLndCVENdIH07XG50b2tlbk1hcFthZGRyZXNzTWFwLmNEQUldID0ge1xuICBuYW1lOiAnY0RBSScsXG4gIGZyaWVuZGx5TmFtZTogJ0RBSScsXG4gIGRlY2ltYWxzOiBhZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC5jREFJXVxufTtcbnRva2VuTWFwW2FkZHJlc3NNYXAud0NPUkVdID0ge1xuICBuYW1lOiAnd0NPUkUnLFxuICBmcmllbmRseU5hbWU6ICdDT1JFJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndDT1JFXVxufTtcbnRva2VuTWFwW2FkZHJlc3NNYXAuY29yZV0gPSB7XG4gIG5hbWU6ICdDT1JFJyxcbiAgZnJpZW5kbHlOYW1lOiAnQ09SRScsXG4gIGRlY2ltYWxzOiBhZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC5jb3JlXVxufTtcbnRva2VuTWFwW2FkZHJlc3NNYXAud2J0Y1dldGhdID0ge1xuICBuYW1lOiAnV0JUQy1XRVRIIExQJyxcbiAgZnJpZW5kbHlOYW1lOiAnV0JUQy1XRVRIIExQJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndidGNXZXRoXVxufTtcblxuZXhwb3J0IGNvbnN0IHBhaXJJbmZvTWFwID0ge307XG5wYWlySW5mb01hcFtwYWlyTmFtZXMuY29yZVdldGhdID0ge1xuICBuYW1lOiAnQ09SRS9XRVRIJyxcbiAgcmVzZXJ2ZTA6IHRva2VuTWFwW2FkZHJlc3NNYXAuY29yZV0sXG4gIHJlc2VydmUxOiB0b2tlbk1hcFthZGRyZXNzTWFwLldFVEhdLFxuICBzdXBwbHlTY2FsZTogMSxcbiAgdW5pdDogJ0xQJyxcbiAgdG9rZW5OYW1lOiAnV0VUSCcsXG4gIGZyaWVuZGx5VG9rZW5OYW1lOiAnRVRIJyxcbiAgYWRkcmVzczogYWRkcmVzc01hcC5jb3JlV2V0aCxcbiAgcGlkOiAwXG59O1xuXG5leHBvcnQgY29uc3QgZXRoZXJldW1TdGF0cyA9IHt9O1xuZXRoZXJldW1TdGF0cy5hcHByb3hpbWF0ZWRCbG9ja1BlckRheSA9IDY2NTA7XG5ldGhlcmV1bVN0YXRzLmFwcHJveGltYXRlZEJsb2NrUGVyWWVhciA9IGV0aGVyZXVtU3RhdHMuYXBwcm94aW1hdGVkQmxvY2tQZXJEYXkgKiAzNjU7XG5cbi8vIFRPRE86IEVuYWJsZSBiYWNrXG4vLyB2ZXJpZnlBZGRyZXNzTWFwKGFkZHJlc3NNYXApO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR2xvYmFsSG9va3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxIb29rc0NvbnRleHQ7XG4iLCJpbXBvcnQgeyB1c2VEZWx0YSwgdXNlTFNXU3RhdHMsIHVzZVJlYmFzaW5nLCB1c2VTdGFraW5nLCB1c2VUb2tlbkJhbGFuY2UgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBHbG9iYWxIb29rc0NvbnRleHQgZnJvbSAnLi9HbG9iYWxIb29rc0NvbnRleHQnO1xuXG5jb25zdCBHbG9iYWxIb29rc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBkZWx0YSA9IHVzZURlbHRhKCk7XG4gIGNvbnN0IGxzd1N0YXRzID0gdXNlTFNXU3RhdHMoKTtcbiAgY29uc3Qgc3Rha2luZyA9IHVzZVN0YWtpbmcoKTtcbiAgY29uc3QgcmViYXNpbmcgPSB1c2VSZWJhc2luZygpO1xuXG4gIC8vIFRPRE86IGNoYW5nZSB0byBybHBcbiAgY29uc3QgcmxwSW5mbyA9IHVzZVRva2VuQmFsYW5jZSgnZGVsdGEnKTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxIb29rc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGRlbHRhLFxuICAgICAgICBsc3dTdGF0cyxcbiAgICAgICAgcmxwSW5mbyxcbiAgICAgICAgc3Rha2luZyxcbiAgICAgICAgcmViYXNpbmdcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsSG9va3NDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsSG9va3NQcm92aWRlcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgR2xvYmFsSG9va3NDb250ZXh0IH0gZnJvbSAnLi9HbG9iYWxIb29rc0NvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHbG9iYWxIb29rc1Byb3ZpZGVyIH0gZnJvbSAnLi9HbG9iYWxIb29rc1Byb3ZpZGVyJzsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ29udGV4dDtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuL01vZGFsQ29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFR5cGUgPSBPYmplY3QuZnJlZXplKHtcbiAgTWVzc2FnZTogJ21lc3NhZ2UnLFxuICBFcnJvcjogJ2Vycm9yJyxcbiAgQ29uZmlybTogJ2NvbmZpcm0nLFxuICBDb25uZWN0V2FsbGV0OiAnY29ubmVjdC13YWxsZXQnXG59KTtcblxuY29uc3QgTW9kYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IF9zaG93TW9kYWwgPSBhc3luYyAobW9kYWxUeXBlLCBwcm9wcykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHNldE1vZGFsKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHR5cGU6IG1vZGFsVHlwZSxcbiAgICAgICAgb25PazogKCkgPT4ge1xuICAgICAgICAgIHNldE1vZGFsKCk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgIHNldE1vZGFsKCk7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDb250cm9sbGVkTWVzc2FnZSA9ICh0aXRsZSwgY29udGVudCkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0geyB0aXRsZSwgY29udGVudCB9O1xuXG4gICAgc2V0TW9kYWwoe1xuICAgICAgLi4ucHJvcHMsXG4gICAgICB0eXBlOiBNb2RhbFR5cGUuTWVzc2FnZSxcbiAgICAgIG9uT2s6IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xvc2U6ICgpID0+IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNob3dNZXNzYWdlID0gYXN5bmMgKHRpdGxlLCBjb250ZW50LCBva0NvbnRlbnQgPSAnT2snKSA9PiB7XG4gICAgcmV0dXJuIF9zaG93TW9kYWwoTW9kYWxUeXBlLk1lc3NhZ2UsIHsgdGl0bGUsIGNvbnRlbnQsIG9rQ29udGVudCB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93Q29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gX3Nob3dNb2RhbChNb2RhbFR5cGUuQ29ubmVjdFdhbGxldCwge30pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dFcnJvciA9IGFzeW5jICh0aXRsZSwgY29udGVudCwgb2tDb250ZW50ID0gJ09rJykgPT4ge1xuICAgIHJldHVybiBfc2hvd01vZGFsKE1vZGFsVHlwZS5FcnJvciwgeyB0aXRsZSwgY29udGVudCwgb2tDb250ZW50IH0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDb25maXJtID0gYXN5bmMgKHRpdGxlLCBjb250ZW50LCBva0NvbnRlbnQgPSAnT2snLCBjYW5jZWxDb250ZW50ID0gJ0NhbmNlbCcpID0+IHtcbiAgICByZXR1cm4gX3Nob3dNb2RhbChNb2RhbFR5cGUuQ29uZmlybSwgeyB0aXRsZSwgY29udGVudCwgb2tDb250ZW50LCBjYW5jZWxDb250ZW50IH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIC4uLm1vZGFsLFxuICAgICAgICBzaG93TWVzc2FnZSxcbiAgICAgICAgc2hvd0Vycm9yLFxuICAgICAgICBzaG93Q29uZmlybSxcbiAgICAgICAgc2hvd0NvbnRyb2xsZWRNZXNzYWdlLFxuICAgICAgICBzaG93Q29ubmVjdFdhbGxldCxcbiAgICAgICAgY2xvc2VNb2RhbFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Nb2RhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFByb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2V0dGluZ3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc0NvbnRleHQ7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZXR0aW5nc0NvbnRleHQgZnJvbSAnLi9TZXR0aW5nc0NvbnRleHQnO1xuXG5jb25zdCBTZXR0aW5nc1Byb3ZpZGVycyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3RvcmUgPSB7fTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgc3RvcmVcbiAgfSk7XG5cbiAgY29uc3QgZ2V0ID0ga2V5ID0+IHtcbiAgICByZXR1cm4gc3RvcmVba2V5XTtcbiAgfTtcblxuICBjb25zdCBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIHNldFN0YXRlKHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfTtcblxuICAgICAgbmV3U3RhdGUuc3RvcmVba2V5XSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdldCxcbiAgICAgICAgc2V0XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NldHRpbmdzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzUHJvdmlkZXJzO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2FsbGV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0Q29udGV4dDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgV2FsbGV0Q29udGV4dCBmcm9tICcuL1dhbGxldENvbnRleHQnO1xuXG5jb25zdCBDSEVDS19XQUxMRVRfU1RBVFVTX1JFRlJFU0hfUkFURSA9IDIgKiAxMDAwO1xuXG5jb25zdCBXYWxsZXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBhY2NvdW50LCBjb25uZWN0b3IsIHN0YXR1cywgY29ubmVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFt1c2VyQWNjb3VudCwgc2V0VXNlckFjY291bnRdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBjaGVja0xvY2FsVXNlckFjY291bnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjb3VudCcpKSB7XG4gICAgICBzZXRVc2VyQWNjb3VudChudWxsKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaENvbm5lY3Rpb24gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcbiAgICAgIHNldFVzZXJBY2NvdW50KG51bGwpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY291bnQnKTtcbiAgICB9XG4gIH0sIFtzdGF0dXMsIHNldFVzZXJBY2NvdW50XSk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdE1ldGFtYXNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbm5lY3QoJ2luamVjdGVkJyk7XG4gIH0sIFtjb25uZWN0XSk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdFdhbGxldENvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29ubmVjdCgnd2FsbGV0Y29ubmVjdCcpO1xuICB9LCBbY29ubmVjdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tMb2NhbFVzZXJBY2NvdW50KCk7XG4gICAgY29uc3QgbG9jYWxBY2NvdW50ID0gKGFjY291bnQgPyBhY2NvdW50LnRvU3RyaW5nKCkgOiBmYWxzZSkgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnQnKTtcbiAgICBpZiAoYWNjb3VudCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY291bnQnLCBsb2NhbEFjY291bnQpO1xuICAgICAgc2V0VXNlckFjY291bnQobG9jYWxBY2NvdW50KTtcbiAgICB9XG4gICAgaWYgKGNvbm5lY3Rvcikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dhbGxldFByb3ZpZGVyJywgY29ubmVjdG9yKTtcbiAgICB9XG4gIH0sIFthY2NvdW50LCB1c2VyQWNjb3VudF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tDb25uZWN0aW9uID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmZXRjaENvbm5lY3Rpb24oKTtcbiAgICB9LCBDSEVDS19XQUxMRVRfU1RBVFVTX1JFRlJFU0hfUkFURSk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGNoZWNrQ29ubmVjdGlvbik7XG4gIH0sIFtzdGF0dXMsIGZldGNoQ29ubmVjdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9jYWxBY2NvdW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnQnKTtcbiAgICBjb25zdCB3YWxsZXRQcm92aWRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3YWxsZXRQcm92aWRlcicpO1xuICAgIGlmICghYWNjb3VudCAmJiBsb2NhbEFjY291bnQpIHtcbiAgICAgIHNldFVzZXJBY2NvdW50KGxvY2FsQWNjb3VudCk7XG4gICAgICBpZiAobG9jYWxBY2NvdW50ICYmICh3YWxsZXRQcm92aWRlciA9PT0gJ21ldGFtYXNrJyB8fCB3YWxsZXRQcm92aWRlciA9PT0gJ2luamVjdGVkJykpIHtcbiAgICAgICAgaGFuZGxlQ29ubmVjdE1ldGFtYXNrKCk7XG4gICAgICB9XG4gICAgICBpZiAobG9jYWxBY2NvdW50ICYmIHdhbGxldFByb3ZpZGVyID09PSAnd2FsbGV0Y29ubmVjdCcpIHtcbiAgICAgICAgaGFuZGxlQ29ubmVjdFdhbGxldENvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPFdhbGxldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t9fT57Y2hpbGRyZW59PC9XYWxsZXRDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldFByb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2ViM0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgd2ViMzogdW5kZWZpbmVkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViM0NvbnRleHQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYjNDb250ZXh0IGZyb20gJy4vV2ViM0NvbnRleHQnO1xuaW1wb3J0IHsgV2ViM0NsaWVudCB9IGZyb20gJy4uLy4uL3dlYjMnO1xuaW1wb3J0IHsgV0VCM19QUk9WSURFUl9VUkwgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5jb25zdCBXZWIzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjNDbGllbnQoV0VCM19QUk9WSURFUl9VUkwpO1xuICAgIHNldFdlYjMod2ViMyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPFdlYjNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHdlYjMgfX0+e2NoaWxkcmVufTwvV2ViM0NvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViM1Byb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgWWFtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICB5YW06IHVuZGVmaW5lZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFlhbUNvbnRleHQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgeyBZYW0gfSBmcm9tICcuLi8uLi95YW0nO1xuaW1wb3J0IFlhbUNvbnRleHQgZnJvbSAnLi9ZYW1Db250ZXh0JztcblxuY29uc3QgWWFtUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgZXRoZXJldW0gfSA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBbeWFtLCBzZXRZYW1dID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgeWFtID0gbmV3IFlhbShldGhlcmV1bSwge1xuICAgICAgICBkZWZhdWx0QWNjb3VudDogJycsXG4gICAgICAgIGRlZmF1bHRDb25maXJtYXRpb25zOiAxLFxuICAgICAgICBhdXRvR2FzTXVsdGlwbGllcjogMS41LFxuICAgICAgICB0ZXN0aW5nOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdEdhczogJzYwMDAwMDAnLFxuICAgICAgICBkZWZhdWx0R2FzUHJpY2U6ICcxMDAwMDAwMDAwMDAwJyxcbiAgICAgICAgYWNjb3VudHM6IFtdLFxuICAgICAgICBldGhlcmV1bU5vZGVUaW1lb3V0OiAxMDAwMFxuICAgICAgfSk7XG4gICAgICBzZXRZYW0oeWFtKTtcblxuICAgICAgLy8gVXNlZnVsIGZvciB0ZXN0aW5nIHVzaW5nIGNocm9tZSBkZXZ0b29scy5cbiAgICAgIHdpbmRvdy55YW0gPSB5YW07XG4gICAgfVxuICB9LCBbZXRoZXJldW1dKTtcblxuICByZXR1cm4gPFlhbUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgeWFtIH19PntjaGlsZHJlbn08L1lhbUNvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgWWFtUHJvdmlkZXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFdlYjNDb250ZXh0IH0gZnJvbSAnLi9XZWIzL1dlYjNDb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnLi9XZWIzL1dlYjNQcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdzUHJvdmlkZXIgfSBmcm9tICcuL1NldHRpbmdzL1NldHRpbmdzUHJvdmlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHbG9iYWxIb29rc1Byb3ZpZGVyIH0gZnJvbSAnLi9HbG9iYWxIb29rcy9HbG9iYWxIb29rc1Byb3ZpZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2FsbGV0Q29udGV4dCB9IGZyb20gJy4vV2FsbGV0L1dhbGxldENvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXYWxsZXRQcm92aWRlciB9IGZyb20gJy4vV2FsbGV0L1dhbGxldFByb3ZpZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWWFtUHJvdmlkZXIgfSBmcm9tICcuL1lhbS9ZYW1Qcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsQ29udGV4dCB9IGZyb20gJy4vTW9kYWwvTW9kYWxDb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxQcm92aWRlciB9IGZyb20gJy4vTW9kYWwvTW9kYWxQcm92aWRlcic7XG4iLCJjb25zdCBnZXRUcmFuc2FjdGlvbkVycm9yID0gKGVycm9yLCBkZWZhdWx0RXJyb3JNZXNzYWdlID0gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnKSA9PiB7XG4gIGlmICghZXJyb3IubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGRlZmF1bHRFcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgbGV0IG1lc3NhZ2UgPSAoZXJyb3IubWVzc2FnZS5zcGxpdCgnOicpWzFdIHx8ICcnKSArIChlcnJvci5tZXNzYWdlLnNwbGl0KCc6JylbMl0gfHwgJycpO1xuICBtZXNzYWdlID0gbWVzc2FnZS5zcGxpdCgneycpWzBdIHx8ICcnO1xuXG4gIHJldHVybiBuZXcgRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRyYW5zYWN0aW9uRXJyb3Jcbn07XG4iLCJpbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgeyBEQVRBX1VOQVZBSUxBQkxFIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgZ2V0VG9rZW5BbW91bnQgPSAoYW1vdW50LCBkZWNpbWFscyA9IDE4LCBwcmVjaXNpb24gPSA0LCB0b0xvY2FsZVN0cmluZyA9IHRydWUpID0+IHtcbiAgaWYgKGFtb3VudCA9PT0gREFUQV9VTkFWQUlMQUJMRSkge1xuICAgIHJldHVybiBhbW91bnQ7XG4gIH1cblxuICBpZiAoQmlnTnVtYmVyLmlzQmlnTnVtYmVyKGFtb3VudCkpIHtcbiAgICBhbW91bnQgPSBkZWNpbWFscyA/IGFtb3VudC5kaXYobmV3IEJpZ051bWJlcigxMCkucG93KGRlY2ltYWxzKSkgOiBhbW91bnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhbW91bnQgLz0gMTAgKiogZGVjaW1hbHM7XG4gIH1cblxuICBpZiAocHJlY2lzaW9uKSB7XG4gICAgYW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICBhbW91bnQgPSBwYXJzZUludChhbW91bnQpO1xuICB9XG5cbiAgaWYgKHRvTG9jYWxlU3RyaW5nKSB7XG4gICAgYW1vdW50ID0gYW1vdW50LnRvTG9jYWxlU3RyaW5nKCk7XG4gIH1cblxuICBpZiAoTnVtYmVyLmlzTmFOKGFtb3VudCkgfHwgKEJpZ051bWJlci5pc0JpZ051bWJlcihhbW91bnQpICYmIGFtb3VudC5pc05hTigpKSB8fCBhbW91bnQgPT09IFwiTmFOXCIpIHtcbiAgICByZXR1cm4gREFUQV9VTkFWQUlMQUJMRTtcbiAgfVxuXG4gIHJldHVybiBhbW91bnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VG9rZW5BbW91bnRcbn07XG4iLCJjb25zdCBzZXRXYWxsZXRBd2FyZUludGVydmFsID0gKHdhbGxldCwgZm4sIHRpbWVvdXQsIC4uLmZuUHJhbXMpID0+IHtcbiAgaWYgKCEoJ3N0YXR1cycgaW4gd2FsbGV0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignd2FsbGV0IHBhcmFtZXRlciBtdXN0IGJlIGEgdmFsaWQgdXNlLXdhbGxldCBpbnN0YW5jZScpO1xuICB9XG5cbiAgY29uc3QgaXNXYWxsZXRDb25uZWN0ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdhbGxldCAmJiB3YWxsZXQuYWNjb3VudCAmJiB3YWxsZXQuc3RhdHVzID09PSAnY29ubmVjdGVkJztcbiAgfTtcblxuICBpZiAoaXNXYWxsZXRDb25uZWN0ZWQoKSkge1xuICAgIGZuKGZuUHJhbXMpO1xuICB9XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKGlzV2FsbGV0Q29ubmVjdGVkKCkpIHtcbiAgICAgIGZuKGZuUHJhbXMpO1xuICAgIH1cbiAgfSwgdGltZW91dCk7XG5cbiAgcmV0dXJuIGludGVydmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRXYWxsZXRBd2FyZUludGVydmFsXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBmb3JtYXR0aW5nIH0gZnJvbSAnLi9mb3JtYXR0aW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaG9va3MgfSBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXJyb3JzIH0gZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmFuc2FjdGlvbnMgfSBmcm9tICcuL3RyYW5zYWN0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRpbWUgfSBmcm9tICcuL3RpbWUnO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBnZXRUaW1lTGVmdCA9IGVuZFRpbWVJbk1pbGxpcyA9PiB7XG4gIGNvbnN0IG5vdyA9IG1vbWVudC5ub3coKTtcbiAgY29uc3QgZnVsbHlWZXN0ZWRBdCA9IG1vbWVudChlbmRUaW1lSW5NaWxsaXMpO1xuICBjb25zdCBkaWZmVGltZSA9IGZ1bGx5VmVzdGVkQXQgLSBub3c7XG4gIGNvbnN0IGR1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKGRpZmZUaW1lLCAnbWlsbGlzZWNvbmRzJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXlzOiBkdXJhdGlvbi5kYXlzKCksXG4gICAgaG91cnM6IGR1cmF0aW9uLmhvdXJzKCksXG4gICAgbWludXRlczogZHVyYXRpb24ubWludXRlcygpXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VGltZUxlZnRcbn07XG4iLCJpbXBvcnQgZXJyb3JzIGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInO1xuXG5jb25zdCBleGVjdXRlVHJhbnNhY3Rpb24gPSBhc3luYyAoXG4gIG1vZGFsQ29udGV4dCxcbiAgdHJhbnNhY3Rpb24sXG4gIHRyYW5zYWN0aW9uUGFyYW1ldGVycyA9IHt9LFxuICBzdWNjZXNzTWVzc2FnZSxcbiAgc3VjY2Vzc1RpdGxlID0gJ1N1Y2Nlc3MnLFxuICBlcnJvclRpdGxlID0gJ0Vycm9yJyxcbiAgdHJhbnNhY3Rpb25UaXRsZSA9ICdUcmFuc2FjdGlvbicsXG4gIHRyYW5zYWN0aW9uTG9hZGluZ01lc3NhZ2UgPSAnVHJhbnNhY3Rpb24gaW4gcHJvZ3Jlc3MuLi4nKSA9PiB7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkdhc0VzdGltYXRlID0gYXdhaXQgdHJhbnNhY3Rpb24uZXN0aW1hdGVHYXModHJhbnNhY3Rpb25QYXJhbWV0ZXJzLCB0cmFuc2FjdGlvblBhcmFtZXRlcnMpO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uTWVzc2FnZSA9IG1vZGFsQ29udGV4dC5zaG93Q29udHJvbGxlZE1lc3NhZ2UodHJhbnNhY3Rpb25UaXRsZSwgPFNwaW5uZXIgbGFiZWw9e3RyYW5zYWN0aW9uTG9hZGluZ01lc3NhZ2V9IC8+KTtcblxuICAgIGF3YWl0IHRyYW5zYWN0aW9uLnNlbmQoe1xuICAgICAgLi4udHJhbnNhY3Rpb25QYXJhbWV0ZXJzLFxuICAgICAgZ2FzOiB0cmFuc2FjdGlvbkdhc0VzdGltYXRlXG4gICAgfSk7XG5cbiAgICB0cmFuc2FjdGlvbk1lc3NhZ2UuY2xvc2UoKTtcbiAgICBhd2FpdCBtb2RhbENvbnRleHQuc2hvd01lc3NhZ2Uoc3VjY2Vzc1RpdGxlLCA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGdcIj57c3VjY2Vzc01lc3NhZ2V9PC9kaXY+KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGRlY29kZWRFcnJvciA9IGVycm9ycy5nZXRUcmFuc2FjdGlvbkVycm9yKGVycm9yLCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cmVkJyk7XG4gICAgY29uc29sZS5sb2coZGVjb2RlZEVycm9yKTtcbiAgICBhd2FpdCBtb2RhbENvbnRleHQuc2hvd0Vycm9yKGVycm9yVGl0bGUsIGRlY29kZWRFcnJvci5tZXNzYWdlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZXhlY3V0ZVRyYW5zYWN0aW9uXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VXZWIzIH0gZnJvbSAnLi91c2VXZWIzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlWWFtIH0gZnJvbSAnLi91c2VZYW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VFVEhQcmljZSB9IGZyb20gJy4vdXNlRVRIUHJpY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VXQlRDUHJpY2UgfSBmcm9tICcuL3VzZVdCVENQcmljZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRva2VuQmFsYW5jZSB9IGZyb20gJy4vdXNlVG9rZW5CYWxhbmNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVXNlckFwcHJvdmFsT2ZDb250cmFjdCB9IGZyb20gJy4vdXNlVXNlckFwcHJvdmFsT2ZDb250cmFjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNvcmVQYWlyQmFsYW5jZXMgfSBmcm9tICcuL3VzZUNvcmVQYWlyQmFsYW5jZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VMU1dTdGF0cyB9IGZyb20gJy4vdXNlTFNXU3RhdHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VEZWx0YSB9IGZyb20gJy4vdXNlRGVsdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTdGFraW5nIH0gZnJvbSAnLi91c2VTdGFraW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUmViYXNpbmcgfSBmcm9tICcuL3VzZVJlYmFzaW5nJztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEQVRBX1VOQVZBSUxBQkxFLCBwYWlySW5mb01hcCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXNlWWFtIGZyb20gJy4vdXNlWWFtJztcblxuY29uc3QgUkVGUkVTSF9SQVRFID0gNjAgKiAxMDAwO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgcmVzZXJ2ZSBhbW91bnQgb2YgYSBnaXZlbiBjb3JlIHBhaXIuXG4gKi9cbmNvbnN0IHVzZUNvcmVQYWlyQmFsYW5jZXMgPSBwYWlyTmFtZSA9PiB7XG4gIGNvbnN0IHBhaXJJbmZvID0gcGFpckluZm9NYXBbcGFpck5hbWVdO1xuXG4gIGNvbnN0IHlhbSA9IHVzZVlhbSgpO1xuICBjb25zdCBbYmFsYW5jZXMsIHNldEJhbGFuY2VzXSA9IHVzZVN0YXRlKHtcbiAgICBiYWxhbmNlVG9rZW46IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgYmFsYW5jZUNvcmU6IERBVEFfVU5BVkFJTEFCTEVcbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGNvbnN0IHBhaXIgPSB5YW0uY29udHJhY3RzW3BhaXJOYW1lXTtcbiAgICBjb25zdCBiYWxhbmNlcyA9IGF3YWl0IHBhaXIubWV0aG9kcy5nZXRSZXNlcnZlcygpLmNhbGwoKTtcbiAgICBsZXQgYmFsYW5jZUNvcmU7XG4gICAgbGV0IGJhbGFuY2VUb2tlbjtcblxuICAgIGlmIChwYWlySW5mby5yZXNlcnZlMS5mcmllbmRseU5hbWUgPT09ICdDT1JFJykge1xuICAgICAgYmFsYW5jZUNvcmUgPSBiYWxhbmNlcy5yZXNlcnZlMSAvIDEwICoqIHBhaXJJbmZvLnJlc2VydmUxLmRlY2ltYWxzO1xuICAgICAgYmFsYW5jZVRva2VuID0gYmFsYW5jZXMucmVzZXJ2ZTAgLyAxMCAqKiBwYWlySW5mby5yZXNlcnZlMC5kZWNpbWFscztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFsYW5jZUNvcmUgPSBiYWxhbmNlcy5yZXNlcnZlMCAvIDEwICoqIHBhaXJJbmZvLnJlc2VydmUwLmRlY2ltYWxzO1xuICAgICAgYmFsYW5jZVRva2VuID0gYmFsYW5jZXMucmVzZXJ2ZTEgLyAxMCAqKiBwYWlySW5mby5yZXNlcnZlMS5kZWNpbWFscztcbiAgICB9XG5cbiAgICBzZXRCYWxhbmNlcyh7XG4gICAgICBiYWxhbmNlVG9rZW4sXG4gICAgICBiYWxhbmNlQ29yZVxuICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWw7XG5cbiAgICBpZiAoeWFtKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCBSRUZSRVNIX1JBVEUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3lhbV0pO1xuXG4gIHJldHVybiBiYWxhbmNlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvcmVQYWlyQmFsYW5jZXM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBEQVRBX1VOQVZBSUxBQkxFLCBURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB1c2VZYW0gZnJvbSAnLi91c2VZYW0nO1xuXG5jb25zdCBSRUZSRVNIX1JBVEUgPSAxICogNjAgKiAxMDAwO1xuY29uc3QgTlVNX0VQT0NIID0gMTQ7XG5cbmNvbnN0IHVzZURlbHRhID0gKCkgPT4ge1xuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBiYWxhbmNlOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIHRvdGFsOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIG1hdHVyZTogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBpbW1hdHVyZTogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBmdWxseVZlc3RlZEF0OiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIHZlc3RpbmdJblByb2dyZXNzOiBmYWxzZSxcbiAgICBwZXJjZW50VmVzdGVkOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIHZlc3RpbmdUcmFuc2FjdGlvbnM6IFtdXG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInlhbTogXCIsIHlhbSk7XG4gICAgaWYgKCF5YW0gfHwgIXdhbGxldD8uYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdG90YWxzRm9yV2FsbGV0ID0gYXdhaXQgeWFtLmNvbnRyYWN0cy5kZWx0YS5tZXRob2RzLnRvdGFsc0ZvcldhbGxldCh3YWxsZXQuYWNjb3VudCkuY2FsbCgpO1xuICAgIGNvbnN0IHRvdGFsID0gdG90YWxzRm9yV2FsbGV0LnRvdGFsLnRvU3RyaW5nKCkgLyAxZTE4O1xuICAgIGNvbnN0IG1hdHVyZSA9IHRvdGFsc0ZvcldhbGxldC5tYXR1cmUudG9TdHJpbmcoKSAvIDFlMTg7XG4gICAgY29uc3QgaW1tYXR1cmUgPSB0b3RhbHNGb3JXYWxsZXQuaW1tYXR1cmUudG9TdHJpbmcoKSAvIDFlMTg7XG4gICAgY29uc3QgdmVzdGluZ1RyYW5zYWN0aW9ucyA9IFtdO1xuICAgIGxldCBmdWxseVZlc3RlZEF0ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX0VQT0NIOyBpKyspIHtcbiAgICAgIGNvbnN0IHZlc3RpbmdUcmFuc2FjdGlvbiA9IGF3YWl0IHlhbS5jb250cmFjdHMuZGVsdGEubWV0aG9kcy52ZXN0aW5nVHJhbnNhY3Rpb25zKHdhbGxldC5hY2NvdW50LCBpKS5jYWxsKCk7XG4gICAgICBjb25zdCB2ZXN0aW5nVHJhbnNhY3Rpb25EZXRhaWxzID0gYXdhaXQgeWFtLmNvbnRyYWN0cy5kZWx0YS5tZXRob2RzLmdldFRyYW5zYWN0aW9uRGV0YWlsKHZlc3RpbmdUcmFuc2FjdGlvbikuY2FsbCgpO1xuXG4gICAgICBpZiAodmVzdGluZ1RyYW5zYWN0aW9uRGV0YWlscy5mdWxsVmVzdGluZ1RpbWVzdGFtcCA+IGZ1bGx5VmVzdGVkQXQpIHtcbiAgICAgICAgZnVsbHlWZXN0ZWRBdCA9IHZlc3RpbmdUcmFuc2FjdGlvbkRldGFpbHMuZnVsbFZlc3RpbmdUaW1lc3RhbXA7XG4gICAgICB9XG5cbiAgICAgIHZlc3RpbmdUcmFuc2FjdGlvbnMucHVzaCh7XG4gICAgICAgIGFtb3VudDogdmVzdGluZ1RyYW5zYWN0aW9uRGV0YWlscy5hbW91bnQgLyAxZTE4LFxuICAgICAgICBmdWxsVmVzdGluZ1RpbWVzdGFtcDogdmVzdGluZ1RyYW5zYWN0aW9uRGV0YWlscy5mdWxsVmVzdGluZ1RpbWVzdGFtcCAqIDEwMDAsXG4gICAgICAgIGltbWF0dXJlOiB2ZXN0aW5nVHJhbnNhY3Rpb25EZXRhaWxzLmltbWF0dXJlIC8gMWUxOCxcbiAgICAgICAgbWF0dXJlOiB2ZXN0aW5nVHJhbnNhY3Rpb25EZXRhaWxzLm1hdHVyZSAvIDFlMTgsXG4gICAgICAgIHBlcmNlbnRWZXN0ZWQ6IHZlc3RpbmdUcmFuc2FjdGlvbkRldGFpbHMucGVyY2VudFZlc3RlZEU0IC8gMWU0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RGF0YShkYXRhID0+ICh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdG90YWwsXG4gICAgICBtYXR1cmUsXG4gICAgICBpbW1hdHVyZSxcbiAgICAgIHBlcmNlbnRWZXN0ZWQ6IG1hdHVyZSAvIHRvdGFsLFxuICAgICAgZnVsbHlWZXN0ZWRBdDogZnVsbHlWZXN0ZWRBdCAqIDEwMDAsXG4gICAgICB2ZXN0aW5nSW5Qcm9ncmVzczogZnVsbHlWZXN0ZWRBdCAqIDEwMDAgPiBtb21lbnQubm93KCksXG4gICAgICB2ZXN0aW5nVHJhbnNhY3Rpb25zXG4gICAgfSkpXG4gIH07XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBob29rcy5zZXRXYWxsZXRBd2FyZUludGVydmFsKHdhbGxldCwgdXBkYXRlLCBSRUZSRVNIX1JBVEUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9LCBbeWFtXSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgZGF0YVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVsdGE7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXNlV2ViMyBmcm9tICcuL3VzZVdlYjMnO1xuXG5jb25zdCBQUklDRV9SRUZSRVNIX0lOVEVSVkFMID0gMzAgKiAxMDAwO1xuY29uc3QgaW5pdGlhbFN0YXRlID0gREFUQV9VTkFWQUlMQUJMRTtcblxuY29uc3QgdXNlRVRIUHJpY2UgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzKCk7XG4gIGNvbnN0IFtFVEhwcmljZSwgc2V0RVRIUHJpY2VdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgY29uc3QgcHJpY2VPZlVTRFRpbkVUSCA9IGF3YWl0IHdlYjMuY29udHJhY3RzLmV0aFVzZHRQYWlyLm1ldGhvZHMuZ2V0UmVzZXJ2ZXMoKS5jYWxsKCk7XG5cbiAgICBzZXRFVEhQcmljZShwYXJzZUZsb2F0KHByaWNlT2ZVU0RUaW5FVEgucmVzZXJ2ZTEgLyAxZTYgLyAocHJpY2VPZlVTRFRpbkVUSC5yZXNlcnZlMCAvIDFlMTgpKSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpbnRlcnZhbDtcblxuICAgIGlmICh3ZWIzKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCBQUklDRV9SRUZSRVNIX0lOVEVSVkFMKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt3ZWIzXSk7XG5cbiAgcmV0dXJuIEVUSHByaWNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRVRIUHJpY2U7XG4iLCJpbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgdXNlV2ViMyBmcm9tICcuL3VzZVdlYjMnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgdXNlWWFtIGZyb20gJy4vdXNlWWFtJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0b3RhbEV0aENvbnRyaWJ1dGVkOiBEQVRBX1VOQVZBSUxBQkxFLFxuICBhY2NvdW50Q29udHJpYnV0ZWRFdGg6IERBVEFfVU5BVkFJTEFCTEUsXG4gIHRvdGFsV0VUSEVhcm1hcmtlZEZvclJlZmVycmVyczogREFUQV9VTkFWQUlMQUJMRSxcbiAgcmVmZXJyYWxCb251c1dFVEg6IERBVEFfVU5BVkFJTEFCTEUsXG4gIGxpcXVpZGl0eUNyZWRpdHM6IERBVEFfVU5BVkFJTEFCTEVcbn07XG5cbmNvbnN0IHVzZUxTV1N0YXRzID0gKCkgPT4ge1xuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgLyoqXG4gICAgICogVGhpcyBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdCB0byB0aGUgYWNjb3VudCdzIHdhbGxldFxuICAgICAqL1xuICAgIGlmICh3ZWIzKSB7XG4gICAgICBjb25zdCB0b3RhbEV0aENvbnRyaWJ1dGVkID0gKGF3YWl0IHdlYjMuY29udHJhY3RzLndFVEgubWV0aG9kcy5iYWxhbmNlT2Yod2ViMy5jb250cmFjdHMuTFNXLl9hZGRyZXNzKS5jYWxsKCkpIC8gMWUxODtcblxuICAgICAgc2V0RGF0YShkYXRhID0+ICh7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHRvdGFsRXRoQ29udHJpYnV0ZWRcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHNlY3Rpb24gcmVxdWlyZSB0aGUgdXNlciB0byBiZSBjb25uZWN0ZWQgdG8gaXRzIHdhbGxldFxuICAgICAqL1xuICAgIGlmICh5YW0gJiYgd2FsbGV0Py5hY2NvdW50KSB7XG4gICAgICBjb25zdCB7IGFjY291bnQgfSA9IHdhbGxldDtcblxuICAgICAgY29uc3QgYWNjb3VudENvbnRyaWJ1dGVkRXRoID0gKGF3YWl0IHlhbS5jb250cmFjdHMuTFNXLm1ldGhvZHMubGlxdWlkaXR5Q29udHJpYnV0ZWRJbkVUSFVuaXRzTWFwcGluZyhhY2NvdW50KS5jYWxsKCkpIC8gMWUxODtcbiAgICAgIGNvbnN0IHJlZmVycmFsQm9udXNXRVRIID0gKGF3YWl0IHlhbS5jb250cmFjdHMuTFNXLm1ldGhvZHMucmVmZXJyYWxCb251c1dFVEgoYWNjb3VudCkuY2FsbCgpKSAvIDFlMTg7XG4gICAgICBjb25zdCB0b3RhbFdFVEhFYXJtYXJrZWRGb3JSZWZlcnJlcnMgPSAoYXdhaXQgeWFtLmNvbnRyYWN0cy5MU1cubWV0aG9kcy50b3RhbFdFVEhFYXJtYXJrZWRGb3JSZWZlcnJlcnMoKS5jYWxsKCkpIC8gMWUxODtcblxuICAgICAgY29uc3QgbGlxdWlkaXR5Q3JlZGl0c0JOID0gbmV3IEJpZ051bWJlcihhd2FpdCB5YW0uY29udHJhY3RzLkxTVy5tZXRob2RzLmxpcXVpZGl0eUNyZWRpdHNNYXBwaW5nKGFjY291bnQpLmNhbGwoKSk7XG4gICAgICBjb25zdCBybHBQZXJDcmVkaXRCTiA9IG5ldyBCaWdOdW1iZXIoYXdhaXQgeWFtLmNvbnRyYWN0cy5MU1cubWV0aG9kcy5ybHBQZXJDcmVkaXQoKS5jYWxsKCkpO1xuICAgICAgY29uc3QgY2xhaW1hYmxlUmxwQk4gPSBsaXF1aWRpdHlDcmVkaXRzQk4ubXVsdGlwbGllZEJ5KHJscFBlckNyZWRpdEJOKS5zaGlmdGVkQnkoLTEyKTtcblxuICAgICAgY29uc3QgbGlxdWlkaXR5Q3JlZGl0cyA9IGxpcXVpZGl0eUNyZWRpdHNCTi50b1N0cmluZygpIC8gMWUxODtcbiAgICAgIGNvbnN0IGNsYWltYWJsZVJscCA9IGNsYWltYWJsZVJscEJOLnRvU3RyaW5nKCkgLyAxZTE4O1xuXG4gICAgICBzZXREYXRhKGRhdGEgPT4gKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgcmVmZXJyYWxCb251c1dFVEgsXG4gICAgICAgIGxpcXVpZGl0eUNyZWRpdHMsXG4gICAgICAgIGFjY291bnRDb250cmlidXRlZEV0aCxcbiAgICAgICAgdG90YWxXRVRIRWFybWFya2VkRm9yUmVmZXJyZXJzLFxuICAgICAgICBjbGFpbWFibGVSbHBcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgfSwgW3lhbSwgd2ViM10pO1xuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIGRhdGFcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxTV1N0YXRzO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VXZWIzIGZyb20gJy4vdXNlV2ViMyc7XG5pbXBvcnQgeyBEQVRBX1VOQVZBSUxBQkxFIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgUkVGUkVTSF9SQVRFID0gMzAgKiAxMDAwO1xuXG5jb25zdCB1c2VSZWJhc2luZyA9ICgpID0+IHtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKTtcblxuICAvLyBIZXJlIGFyZSB0aGUgZ2xvYmFsIHZhdWx0J3MgaW5mb3JtYXRpb24sIGRvZXNuJ3QgZGVwZW5kIG9uIGNvbm5lY3RlZCB3YWxsZXRcbiAgY29uc3QgW3JlYmFzaW5nSW5mbywgc2V0UmViYXNpbmdJbmZvXSA9IHVzZVN0YXRlKHtcbiAgICBuZXh0UmViYXNlVGltZXN0YW1wOiBEQVRBX1VOQVZBSUxBQkxFLFxuICB9KTtcblxuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF3ZWIzKSByZXR1cm47XG5cbiAgICAvLyBUT0RPOiBVcGRhdGUgZ2xvYmFsIHZhdWx0IGluZm9zLCBkb2Vzbid0IHJlcXVpcmUgY29ubmVjdGVkIHdhbGxldFxuICAgIC8vIENhbGwgd2ViMyB2YXVsdCB0byBnZXQgdGhlIGluZm9zLlxuICAgIHNldFJlYmFzaW5nSW5mbyh7XG4gICAgICBuZXh0UmViYXNlVGltZXN0YW1wOiBEYXRlLm5vdygpICsgMTIzNDU2Nzg5XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldFRpbWVvdXQodXBkYXRlLCBSRUZSRVNIX1JBVEUpO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3dlYjNdKTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICByZWJhc2luZ0luZm9cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlYmFzaW5nO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IEV0aERhdGVyIGZyb20gJ2V0aGVyZXVtLWJsb2NrLWJ5LWRhdGUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1c2VXZWIzIGZyb20gJy4vdXNlV2ViMyc7XG5cbmNvbnN0IExTV19TVEFSVERBVEVfSU5fTUlMTElTID0gMTYxNDAxMTM0MSAqIDEwMDA7XG5jb25zdCBSRUZSRVNIX1JBVEUgPSAxICogNjAgKiA2MCAqIDEwMDA7IC8vIG9uY2UgcGVyIG1pbnV0ZVxuXG5jb25zdCBnZXRMb2NhbFN0b3JhZ2VLZXkgPSBhZGRyZXNzID0+IGBjaGFydF9yZWZyZXdhcmRzXyR7YWRkcmVzc31gO1xuXG5jb25zdCB1c2VSZWZlcnJhbFJld2FyZHNDaGFydERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzKCk7XG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXdlYjMgfHwgIWFjY291bnQpIHJldHVybjtcblxuICAgIGxldCBjdXJyZW50RGF0YSA9IGRhdGE7XG5cbiAgICAvLyBUT0RPOiBSZW1vdmUgYmVmb3JlIHNoaXBwaW5nXG4gICAgY29uc3QgYWRkcmVzcyA9ICcweDNBQzYxOERDYjgwMEU3MzNCMEMzOTBhMjNERTRhQTc5NjkyN0E5QjcnOyAvLyBhY2NvdW50O1xuXG4gICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIHVzZVJlZmVycmFsUmV3YXJkc0NoYXJ0RGF0YS4uLicpO1xuXG4gICAgaWYgKGN1cnJlbnREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qga2V5ID0gZ2V0TG9jYWxTdG9yYWdlS2V5KGFkZHJlc3MpO1xuICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY3VycmVudERhdGEgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICAgIHNldERhdGEoY3VycmVudERhdGEpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGxhc3RCbG9ja1RpbWVzdGFtcCA9IERhdGUubm93KCkgLSAoMyAqIDI0ICogNjAgKiA2MCAqIDEwMDApOy8vIExTV19TVEFSVERBVEVfSU5fTUlMTElTO1xuXG4gICAgaWYgKGN1cnJlbnREYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RTYW1wbGUgPSBjdXJyZW50RGF0YVtjdXJyZW50RGF0YS5sZW5ndGggLSAxXTtcbiAgICAgIGxhc3RCbG9ja1RpbWVzdGFtcCA9IG5ldyBEYXRlKGxhc3RTYW1wbGUuZGF0ZSkudmFsdWVPZigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVyID0gbmV3IEV0aERhdGVyKHdlYjMud2ViMyk7XG5cbiAgICAvLyBPbmx5IGZldGNoIHRoZSBtaXNzaW5nIG5ldyBibG9ja3NcbiAgICBjb25zdCBuZXdCbG9ja0luZm8gPSBhd2FpdCBkYXRlci5nZXRFdmVyeSgnaG91cnMnLCBsYXN0QmxvY2tUaW1lc3RhbXAsIERhdGUubm93KCkpO1xuXG4gICAgLy8gRmV0Y2ggdGhlIG5ldyBpbmZvcm1hdGlvbiBmb3IgdGhlc2UgYmxvY2tzXG4gICAgY29uc3QgbmV3Q2hhcnREYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwobmV3QmxvY2tJbmZvLm1hcChhc3luYyBibG9ja0luZm8gPT4ge1xuICAgICAgY29uc3QgcmVmZXJyYWxCb251c1dFVEggPSAoYXdhaXQgd2ViMy5jb250cmFjdHMuTFNXLm1ldGhvZHMucmVmZXJyYWxCb251c1dFVEgoYWRkcmVzcykuY2FsbCh7fSwgYmxvY2tJbmZvLmJsb2NrKSkgLyAxZTE4O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYmxvY2tJbmZvLFxuICAgICAgICByZWZlcnJhbEJvbnVzV0VUSFxuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHNldERhdGEoZGF0YSA9PiB7XG4gICAgICBjb25zdCBwcmV2aW91c0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAvLyBDb25jYXRlbmF0ZSBhbmQgcmVtb3ZlIGR1cGxpY2F0ZWQgYmxvY2sgZW50cmllc1xuICAgICAgY29uc3QgbmV3RGF0YSA9IF8udW5pcUJ5KFsuLi5kYXRhLCAuLi5uZXdDaGFydERhdGFdLCAnZGF0ZScpO1xuXG4gICAgICBjb25zb2xlLmxvZyhgdXNlUmVmZXJyYWxSZXdhcmRzQ2hhcnREYXRhOiBmZXRjaGVkICR7bmV3RGF0YS5sZW5ndGggLSBwcmV2aW91c0xlbmd0aH0gbmV3IGRhdGFibG9ja3MuYCk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdldExvY2FsU3RvcmFnZUtleShhZGRyZXNzKSwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xuICAgICAgcmV0dXJuIG5ld0RhdGE7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZSwgUkVGUkVTSF9SQVRFKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt3ZWIzLCBhY2NvdW50XSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgZGF0YVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVmZXJyYWxSZXdhcmRzQ2hhcnREYXRhO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IHVzZVlhbSBmcm9tICcuL3VzZVlhbSc7XG5pbXBvcnQgdXNlV2ViMyBmcm9tICcuL3VzZVdlYjMnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGFkZHJlc3NNYXAsIERBVEFfVU5BVkFJTEFCTEUsIFRFTVBfRU5BQkxFX0VORF9MU1dfV0VCMywgdG9rZW5NYXAgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBSRUZSRVNIX1JBVEUgPSAzMCAqIDEwMDA7XG5cbmNvbnN0IHVzZVN0YWtpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHlhbSA9IHVzZVlhbSgpO1xuICBjb25zdCB3ZWIzID0gdXNlV2ViMygpO1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcblxuICAvLyBIZXJlIGFyZSB0aGUgZ2xvYmFsIHZhdWx0J3MgaW5mb3JtYXRpb24sIGRvZXNuJ3QgZGVwZW5kIG9uIGNvbm5lY3RlZCB3YWxsZXRcbiAgY29uc3QgW3ZhdWx0U3RhdHMsIHNldFZhdWx0U3RhdHNdID0gdXNlU3RhdGUoe1xuICAgIGFtb3VudFRvdGFsOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIGFweTogREFUQV9VTkFWQUlMQUJMRVxuICB9KTtcblxuICAvLyBUT0RPOiBFbnRlciB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIncyByTFAgc3Rha2luZ1xuICBjb25zdCBbcmxwSW5mbywgc2V0UmxwSW5mb10gPSB1c2VTdGF0ZSh7XG4gICAgYW1vdW50U3Rha2VkOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIGNsYWltYWJsZUV0aDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBjbGFpbWFibGVEZWx0YTogREFUQV9VTkFWQUlMQUJMRSxcbiAgICByZXdhcmRNdWx0aXBsaWVyOiBEQVRBX1VOQVZBSUxBQkxFXG4gIH0pO1xuXG4gIC8vIFRPRE86IEVudGVyIHRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdXNlcidzIERlbHRhIHN0YWtpbmdcbiAgY29uc3QgW2RlbHRhSW5mbywgc2V0RGVsdGFJbmZvXSA9IHVzZVN0YXRlKHtcbiAgICBhbW91bnRTdGFrZWQ6IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgY2xhaW1hYmxlRXRoOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIGNsYWltYWJsZURlbHRhOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIHJld2FyZE11bHRpcGxpZXI6IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgdGltZVVudGlsRG93bmdyYWRlOiBEQVRBX1VOQVZBSUxBQkxFXG4gIH0pO1xuXG4gIGNvbnN0IFt3aXRoZHJhd2FsQ29udHJhY3RzLCBzZXRXaXRoZHJhd2FsQ29udHJhY3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBkZWNpbWFscyB9ID0gdG9rZW5NYXBbYWRkcmVzc01hcC5kZWx0YV07XG5cbiAgY29uc3QgdXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2ViMykgcmV0dXJuO1xuXG4gICAgLy8gVE9ETzogVXBkYXRlIGdsb2JhbCB2YXVsdCBpbmZvcywgZG9lc24ndCByZXF1aXJlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAvLyBDYWxsIHdlYjMgdmF1bHQgdG8gZ2V0IHRoZSBpbmZvcy5cbiAgICBzZXRWYXVsdFN0YXRzKHtcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIGFtb3VudFRvdGFsOiAxMjMsXG4gICAgICAgIGFweTogOTk5XG4gICAgICB9LFxuICAgICAgckxQOiB7XG4gICAgICAgIGFtb3VudFRvdGFsOiA2NTQsXG4gICAgICAgIGFweTogNjM1XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgc2VjdGlvbiByZXF1aXJlcyBhIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAgKi9cbiAgICBpZiAoIXlhbSB8fCAhd2FsbGV0Py5hY2NvdW50KSByZXR1cm47XG5cbiAgICAvLyBUT0RPOiBSZXBsYWNlIHVzaW5nIERGViBjb250cmFjdFxuICAgIC8vIGNvbnN0IGJhbGFuY2UgPSAoYXdhaXQgeWFtLmNvbnRyYWN0cy5kZWx0YS5tZXRob2RzLmJhbGFuY2VPZih3YWxsZXQuYWNjb3VudCkuY2FsbCgpKSAvIDEwICoqIGRlY2ltYWxzO1xuICAgIHNldFJscEluZm8oe1xuICAgICAgYW1vdW50U3Rha2VkOiAxMjMsXG4gICAgICBjbGFpbWFibGVFdGg6IDQ1NixcbiAgICAgIGNsYWltYWJsZURlbHRhOiA1NjcsXG4gICAgICByZXdhcmRNdWx0aXBsaWVyOiAyMFxuICAgIH0pO1xuXG4gICAgc2V0RGVsdGFJbmZvKHtcbiAgICAgIGFtb3VudFN0YWtlZDogMTIzLFxuICAgICAgY2xhaW1hYmxlRXRoOiA0NTYsXG4gICAgICBjbGFpbWFibGVEZWx0YTogODg4LFxuICAgICAgcmV3YXJkTXVsdGlwbGllcjogOCxcbiAgICAgIHRpbWVVbnRpbERvd25ncmFkZTogRGF0ZS5ub3coKSArIDg4ODg4OThcbiAgICB9KTtcblxuICAgIC8vIFRPRE86IHJlbW92ZSBtb2NrIGRhdGEgYW5kIHVzZSByZWFsIGNvbnRyYWN0XG4gICAgc2V0V2l0aGRyYXdhbENvbnRyYWN0cyhbXG4gICAgICB7XG4gICAgICAgIGFtb3VudDogMTEwLFxuICAgICAgICBmdWxsVmVzdGluZ1RpbWVzdGFtcDogRGF0ZS5ub3coKSAqIDEwMDAsXG4gICAgICAgIGltbWF0dXJlOiAxMDAsXG4gICAgICAgIG1hdHVyZTogMTAsXG4gICAgICAgIHBlcmNlbnRWZXN0ZWQ6IDAuMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW1vdW50OiAyMjAsXG4gICAgICAgIGZ1bGxWZXN0aW5nVGltZXN0YW1wOiAoRGF0ZS5ub3coKSAqIDEwMDApIC0gOTk5OTksXG4gICAgICAgIGltbWF0dXJlOiAwLjggKiAyMjAsXG4gICAgICAgIG1hdHVyZTogMC4yICogMjIwLFxuICAgICAgICBwZXJjZW50VmVzdGVkOiAwLjJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFtb3VudDogMzU2OCxcbiAgICAgICAgZnVsbFZlc3RpbmdUaW1lc3RhbXA6IChEYXRlLm5vdygpICogMTAwMCkgLSAxMjMyMyxcbiAgICAgICAgaW1tYXR1cmU6IDAuNSAqIDM1NjgsXG4gICAgICAgIG1hdHVyZTogMC41ICogMzU2OCxcbiAgICAgICAgcGVyY2VudFZlc3RlZDogMC41XG4gICAgICB9XG4gICAgXSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoKTsgLy8gTkVFRCBERUxFVEUgQG1pZGFzXG4gICAgaWYgKFRFTVBfRU5BQkxFX0VORF9MU1dfV0VCMykge1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldFRpbWVvdXQodXBkYXRlLCBSRUZSRVNIX1JBVEUpO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IFJFTU9WRSB3aGVuIHRoZSBtb2NrcyBhcmUgbm8gbG9ubWdlciBuZWVkZWRcbiAgICBzZXRWYXVsdFN0YXRzKHtcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIGFtb3VudFRvdGFsOiAxMjMsXG4gICAgICAgIGFweTogOTk5XG4gICAgICB9LFxuICAgICAgckxQOiB7XG4gICAgICAgIGFtb3VudFRvdGFsOiA2NTQsXG4gICAgICAgIGFweTogNjM1XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gVE9ETzogUkVNT1ZFIHdoZW4gdGhlIG1vY2tzIGFyZSBubyBsb25tZ2VyIG5lZWRlZFxuICAgIHNldFdpdGhkcmF3YWxDb250cmFjdHMoW1xuICAgICAge1xuICAgICAgICBhbW91bnQ6IDExMCxcbiAgICAgICAgZnVsbFZlc3RpbmdUaW1lc3RhbXA6IERhdGUubm93KCkgKiAxMDAwLFxuICAgICAgICBpbW1hdHVyZTogMTAwLFxuICAgICAgICBtYXR1cmU6IDEwLFxuICAgICAgICBwZXJjZW50VmVzdGVkOiAwLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFtb3VudDogMjIwLFxuICAgICAgICBmdWxsVmVzdGluZ1RpbWVzdGFtcDogKERhdGUubm93KCkgKiAxMDAwKSAtIDk5OTk5LFxuICAgICAgICBpbW1hdHVyZTogMC44ICogMjIwLFxuICAgICAgICBtYXR1cmU6IDAuMiAqIDIyMCxcbiAgICAgICAgcGVyY2VudFZlc3RlZDogMC4yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbW91bnQ6IDM1NjgsXG4gICAgICAgIGZ1bGxWZXN0aW5nVGltZXN0YW1wOiAoRGF0ZS5ub3coKSAqIDEwMDApIC0gMTIzMjMsXG4gICAgICAgIGltbWF0dXJlOiAwLjUgKiAzNTY4LFxuICAgICAgICBtYXR1cmU6IDAuNSAqIDM1NjgsXG4gICAgICAgIHBlcmNlbnRWZXN0ZWQ6IDAuNVxuICAgICAgfVxuICAgIF0pO1xuXG4gIH0sIFt5YW0sIHdlYjMsIHdhbGxldF0pO1xuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIHJscEluZm8sXG4gICAgZGVsdGFJbmZvLFxuICAgIHZhdWx0U3RhdHMsXG4gICAgd2l0aGRyYXdhbENvbnRyYWN0c1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3Rha2luZztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICd1c2Utd2FsbGV0JztcbmltcG9ydCB1c2VZYW0gZnJvbSAnLi91c2VZYW0nO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGFkZHJlc3NNYXAsIERBVEFfVU5BVkFJTEFCTEUsIHRva2VuTWFwIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgUkVGUkVTSF9SQVRFID0gMzAgKiAxMDAwO1xuXG5jb25zdCB1c2VUb2tlbkJhbGFuY2UgPSAodG9rZW5OYW1lKSA9PiB7XG4gIGNvbnN0IHlhbSA9IHVzZVlhbSgpO1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoREFUQV9VTkFWQUlMQUJMRSk7XG4gIGNvbnN0IHRva2VuQWRkcmVzcyA9IGFkZHJlc3NNYXBbdG9rZW5OYW1lXTtcbiAgY29uc3QgZGVjaW1hbHMgPSB0b2tlbk1hcFt0b2tlbkFkZHJlc3NdPy5kZWNpbWFscyB8fCAxODtcblxuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF5YW0gfHwgIXdhbGxldD8uYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgaWYgKHRva2VuTmFtZT8udG9VcHBlckNhc2UoKSA9PT0gJ0VUSCcpIHtcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSAoYXdhaXQgeWFtLndlYjMuZXRoLmdldEJhbGFuY2Uod2FsbGV0LmFjY291bnQpKS50b1N0cmluZygpIC8gMTAgKiogZGVjaW1hbHNcbiAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEodG9rZW5OYW1lIGluIHlhbS5jb250cmFjdHMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYmFsYW5jZSA9IChhd2FpdCB5YW0uY29udHJhY3RzW3Rva2VuTmFtZV0ubWV0aG9kcy5iYWxhbmNlT2Yod2FsbGV0LmFjY291bnQpLmNhbGwoKSkgLyAxMCAqKiBkZWNpbWFscztcbiAgICBzZXRCYWxhbmNlKGJhbGFuY2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWw7XG5cbiAgICBpZiAoeWFtKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGludGVydmFsID0gaG9va3Muc2V0V2FsbGV0QXdhcmVJbnRlcnZhbCh3YWxsZXQsIHVwZGF0ZSwgUkVGUkVTSF9SQVRFKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt5YW0sIHdhbGxldF0pO1xuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIGJhbGFuY2VcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRva2VuQmFsYW5jZTtcbiIsImltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICd1c2Utd2FsbGV0JztcbmltcG9ydCB7IERBVEFfVU5BVkFJTEFCTEUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB1c2VZYW0gZnJvbSAnLi91c2VZYW0nO1xuXG5jb25zdCBSRUZSRVNIX1JBVEUgPSAxMCAqIDEwMDA7XG5cbmNvbnN0IHVzZVVzZXJBcHByb3ZhbE9mQ29udHJhY3QgPSAoY29udHJhY3QsIHRva2VuKSA9PiB7XG4gIGNvbnN0IHlhbSA9IHVzZVlhbSgpO1xuICBjb25zdCB3YWxsZXQgPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKERBVEFfVU5BVkFJTEFCTEUpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXlhbSB8fCAhd2FsbGV0Py5hY2NvdW50KSByZXR1cm47XG4gICAgaWYgKCFjb250cmFjdCB8fCAhdG9rZW4pIHJldHVybjtcblxuICAgIGNvbnN0IGFtb3VudCA9IG5ldyBCaWdOdW1iZXIoXG4gICAgICBhd2FpdCB5YW0uY29udHJhY3RzW3Rva2VuXS5tZXRob2RzLmFsbG93YW5jZSh3YWxsZXQuYWNjb3VudCwgeWFtLmNvbnRyYWN0c1tjb250cmFjdF0uX2FkZHJlc3MpLmNhbGwoKVxuICAgICk7XG4gICAgc2V0QW1vdW50KGFtb3VudCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWw7XG4gICAgaWYgKHlhbSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBpbnRlcnZhbCA9IGhvb2tzLnNldFdhbGxldEF3YXJlSW50ZXJ2YWwod2FsbGV0LCB1cGRhdGUsIFJFRlJFU0hfUkFURSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3lhbSwgd2FsbGV0XSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGFtb3VudCxcbiAgICAgIHVwZGF0ZVxuICAgIH0pLFxuICAgIFthbW91bnRdXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VyQXBwcm92YWxPZkNvbnRyYWN0O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERBVEFfVU5BVkFJTEFCTEUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVzZUVUSFByaWNlIGZyb20gJy4vdXNlRVRIUHJpY2UnO1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gREFUQV9VTkFWQUlMQUJMRTtcblxuY29uc3QgdXNlV0JUQ1ByaWNlID0gKCkgPT4ge1xuICBjb25zdCB3ZWIzID0gdXNlV2ViMygpO1xuICBjb25zdCBldGhQcmljZSA9IHVzZUVUSFByaWNlKCk7XG5cbiAgY29uc3QgW1dCVENQcmljZSwgc2V0V0JUQ1ByaWNlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVXQlRDUHJpY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoZXRoUHJpY2UgIT09IERBVEFfVU5BVkFJTEFCTEUpIHtcbiAgICAgICAgY29uc3QgcGFpclJlc2VydmVzID0gYXdhaXQgd2ViMy5jb250cmFjdHMuV0JUQ3hXRVRILm1ldGhvZHMuZ2V0UmVzZXJ2ZXMoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IHByaWNlT2ZXQlRDaW5XRVRIID0gcGFyc2VGbG9hdChwYWlyUmVzZXJ2ZXMucmVzZXJ2ZTEgLyAxZTE4IC8gKHBhaXJSZXNlcnZlcy5yZXNlcnZlMCAvIDFlOCkpO1xuICAgICAgICBjb25zdCBwcmljZU9mV0JUQ2luVVNEVCA9IHByaWNlT2ZXQlRDaW5XRVRIICogZXRoUHJpY2U7XG4gICAgICAgIHNldFdCVENQcmljZShwcmljZU9mV0JUQ2luVVNEVCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVwZGF0ZVdCVENQcmljZSgpO1xuICB9LCBbZXRoUHJpY2VdKTtcblxuICByZXR1cm4gV0JUQ1ByaWNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV0JUQ1ByaWNlO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdlYjNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMnO1xuXG5jb25zdCB1c2VXZWIzID0gKCkgPT4ge1xuICBjb25zdCB7IHdlYjMgfSA9IHVzZUNvbnRleHQoV2ViM0NvbnRleHQpO1xuICByZXR1cm4gd2ViMztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdlYjM7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlhbUNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvWWFtL1lhbUNvbnRleHQnO1xuXG5jb25zdCB1c2VZYW0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgeWFtIH0gPSB1c2VDb250ZXh0KFlhbUNvbnRleHQpO1xuICByZXR1cm4geWFtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlWWFtO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2VuL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHQwXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHQwXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHQxXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdDFcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgMyk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4gICAgXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJztcbmltcG9ydCB7IFJlZmVycmFsUHJvZ3JhbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUmVmZXJyYWxQcm9ncmFtJztcbmltcG9ydCB7IE1haW5MYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBWZXN0aW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9WZXN0aW5nJztcbmltcG9ydCB7IFJlYmFzaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZWJhc2luZyc7XG5pbXBvcnQgeyBMU1dTdGFraW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MU1dTdGFraW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIDxNYWluTGF5b3V0PlxuICAgIDxIZXJvIC8+XG4gICAgPExTV1N0YWtpbmcgLz5cbiAgICA8UmVmZXJyYWxQcm9ncmFtIC8+XG4gICAgPFZlc3RpbmcgLz5cbiAgICA8UmViYXNpbmcgLz5cbiAgPC9NYWluTGF5b3V0Pjtcbn1cblxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2luZGV4JyxcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFN0YXRpY1Byb3BzJyxcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qWWlJR2hsYVdkb2REMGlNamdpSUhacFpYZENiM2c5SWpBZ01DQXlOaUF5T0NJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ1pEMGlUVGd1TmpJNU5qVWdNamN1TWpZMk5Vd3hPUzR3TVRnM0lESTNMakkyTkRKRE1UZ3VOVEV3TVNBeU55NHlOREkySURFNExqSXhPRGNnTWpZdU9EY3pPQ0F4T0M0eU1Ua3hJREkyTGpJd05qSkRNVGd1TWpFNU9DQXlOQzQ0TWpjNElERTRMakl4TkRrZ01qTXVORFE1TXlBeE9DNHlNek0wSURJeUxqQTNNVE5ETVRndU1qVXhNU0F5TUM0M016VTBJREU0TGpBNU5ESWdNVGt1TkRVNU9TQXhOeTR3T1RNM0lERTRMalF4TkRkRE1UY3VPRFUzTWlBeE9DNHlOalE0SURFNExqVTRNak1nTVRndU1UVTJJREU1TGpJNUlERTNMamszTnpKRE1qRXVNemcxTlNBeE55NDBORGN5SURJekxqRTFOVGdnTVRZdU5ERTVPQ0F5TkM0eE1UQXpJREUwTGpNNU1qTkRNalV1TVRVeUlERXlMakU0TURRZ01qVXVORE13T1NBNUxqZzBPVGd6SURJMExqWTJOVFlnTnk0ME9UWXpORU15TkM0ME1UUTJJRFl1TnpJME1qRWdNak11T0RZd055QTJMakExTWpRMElESXpMalEyTXprZ05TNHpNalExTVVNeU15NHpPRFF4SURVdU1UYzRNVEVnTWpNdU16SXdNeUEwTGprMk5qVWdNak11TXpZek1pQTBMamd4TnprNVF6SXpMamMyTlRJZ015NDBNamN3TVNBeU15NDJOVGc0SURJdU1EWTBPVFlnTWpNdU1UVTBNeUF3TGpjeU9ETTNPVU15TXk0eE1EVXlJREF1TlRrNE5qYzBJREl5TGpnM09ESWdNQzQwTlRnMU5EUWdNakl1TnpNeE5TQXdMalExTlRjMU0wTXlNUzQ0T1RNeElEQXVORFF3TnpjeUlESXhMakV4TkRNZ01DNDNNVEkzTVRRZ01qQXVNemMwT1NBeExqQTNOREpETVRrdU56TTVNeUF4TGpNNE5USXlJREU1TGpFek9EY2dNUzQzTmpZMU9TQXhPQzQxTVRFeUlESXVNRGswTmpSRE1UZ3VNelU0TWlBeUxqRTNORGM1SURFNExqRTBORFFnTWk0eU1qazROeUF4Tnk0NU9EUTBJREl1TVRreE1UbERNVFV1TWpJM09TQXhMalV5TWpVMklERXlMalEzTmpNZ01TNDFNVGszTnlBNUxqY3hPVFEzSURJdU1UZzROelJET1M0MU5EZzVOeUF5TGpJek1ESXhJRGt1TXpFeU5qTWdNaTR4TnpBNU55QTVMakUxTnpRM0lESXVNRGMxTnpsRE9DNHdNRE15TWlBeExqTTJPREE0SURZdU9ETXhORGtnTUM0M01EZzRPVGdnTlM0ME56QXhPU0F3TGpRNE16WTJOVU0xTGpReU9TQXdMalEzTmpZMU9TQTFMak00T0RZeElEQXVORFkyTWpNMUlEVXVNelEzTURrZ01DNDBOakEyTlRKRE5DNDJOamM1TnlBd0xqTTJOemt4TmlBMExqWXhNVEU0SURBdU5EQXhNRFk1SURRdU5EQTNNaUF4TGpBMk5qVTNRelF1TURFNE5EZ2dNaTR6TXpNM055QXpMamsxT0RVMUlETXVOakEwTlRFZ05DNHpOVEEzTkNBMExqZzROakF4UXpRdU16ZzFPVFVnTlM0d01EQTJOeUEwTGpNME16QTFJRFV1TVRnNU1qZ2dOQzR5TmpNNU15QTFMakk0TVRNelF6SXVOamszT1RZZ055NHhNRE0xT0NBeUxqUXlORE14SURrdU1qTTRNU0F5TGpjek1EQXpJREV4TGpVeE9EUkRNaTQ1TWpVeU5DQXhNaTQ1TnpReklETXVNelE1T1NBeE5DNHpOREl5SURRdU1qYzROVGNnTVRVdU5URXdOME0xTGpReE5qZ3hJREUyTGprME16SWdOaTQ1TnpNek15QXhOeTQyTmpRMUlEZ3VOekExT1RnZ01UZ3VNRFkxTkVNNUxqTXdOelk0SURFNExqSXdORGtnT1M0NU1qRXlNeUF4T0M0eU9UVXlJREV3TGpVNE16WWdNVGd1TkRFM09VTTVMams0TnpneUlERTVMakExTURJZ09TNDJPVEl4T0NBeE9TNDNOekUxSURrdU5UTXpPVFFnTWpBdU5UWXlOa001TGpVeE16TXlJREl3TGpZMk5ETWdPUzR6TnpReU1TQXlNQzQzTnpVNUlEa3VNalkwTnprZ01qQXVPREl4T1VNM0xqTXdNakV5SURJeExqWTBOekVnTlM0MU5UYzJNaUF5TVM0eE1EQXhJRFF1TkRJME1qZ2dNVGt1TXpFek1VTXpMamcxTVRFeUlERTRMalF3T1RrZ015NHhNREl6TkNBeE55NDNNekEzSURJdU1ERTVOVE1nTVRjdU5USTNOVU14TGpjME16Z3pJREUzTGpRM05Ua2dNUzQwTXpnek9TQXhOeTQxTVRVMklERXVNVFU0T0RFZ01UY3VOVGN5TlVNd0xqZzRNVFk0T0NBeE55NDJNamczSURBdU9EUTRPRGMzSURFM0xqZ3pPRGtnTVM0d01qUXlOeUF4T0M0d05ETTFRekV1TVRVNE5EY2dNVGd1TWpBd015QXhMak14TVRneUlERTRMak0xTkRnZ01TNDBPRGN5TVNBeE9DNDBOVGs0UXpJdU5ESTJORElnTVRrdU1ESXhNU0F6TGpBeU9UUTRJREU1TGpnMk1qSWdNeTQwTWprM01TQXlNQzQ0TkRVM1F6UXVNVEExTXpVZ01qSXVOVEExT0NBMUxqUXdPREVnTWpNdU1qSTVNaUEzTGpFd016UXpJREl6TGpNeU5qaEROeTQ0TnpJd09TQXlNeTR6TnpFeElEZ3VOalE1TlRNZ01qTXVNalk0TWlBNUxqUTJNemczSURJekxqSXpNREpET1M0ME5qTTROeUF5TkM0ek1UWTFJRGt1TkRrek1UVWdNalV1TkRReU5TQTVMalExTVRZNElESTJMalUyTmpGRE9TNDBNelUyTWlBeU5pNDVPVGcwSURrdU1EZzFPVGdnTWpjdU1qVXpPU0E0TGpZeU9UWTFJREkzTGpJMU9URldNamN1TWpZMk5Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UUTFJaUJvWldsbmFIUTlJakk1SWlCMmFXVjNRbTk0UFNJd0lEQWdNVFExSURJNUlpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284WnlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNEQXBJajRLUEhCaGRHZ2daRDBpVFRZeExqTTROeklnTVRRdU16RXhPRU0yTVM0ek9EY3lJREl4TGpjeU9EUWdOVGN1TURFMk55QXlPQzR6TURRNElEVXdMakF5T1RnZ01qZ3VNekEwT0Vnek9DNDVNekV6VmpJM0xqZzBNVEpETXprdU9UQTRPU0F5Tnk0M05UUXpJRFF4TGpFeE5qVWdNall1T0RnMU1pQTBNUzR4TVRZMUlESTBMamN4TWpSV05DNDFNVGsxTjBNME1TNHhNVFkxSURJdU1EZzJNREVnTkRBdU1EVXlOaUF4TGpRM056WXhJRE00TGprek1UTWdNUzR6T1RBM1ZqQXVPRGs0TVRrelNEUTRMak13TkRkRE5UVXVORFkwTVNBd0xqZzVPREU1TXlBMk1TNHpPRGN5SURjdU1EazNPVGtnTmpFdU16ZzNNaUF4TkM0ek1URTRXazAxTnk0MU16UXpJREUyTGpVM01UVkROVGN1TlRNME15QXhNQzR5T0RRNElEVTJMalV5T0NBekxqUTBOelkwSURRNUxqa3hORGdnTVM0NE5UUXlORU0wT0M0Mk56ZzFJREV1TlRZME5UTWdORFl1TmprME5TQXhMalEzTnpZeElEUTBMamN6T1RNZ01TNDBOemMyTVZZeU55NHdNekF4UXpRMkxqSXdOVGNnTWpjdU5EQTJOeUEwT0M0ek16TTBJREkzTGpjeU5UUWdORGt1T1RRek5pQXlOeTQzTWpVMFF6VTBMamcyTURNZ01qY3VOekkxTkNBMU55NDFNelF6SURJekxqUTVOVFlnTlRjdU5UTTBNeUF4Tmk0MU56RTFXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NEtQSEJoZEdnZ1pEMGlUVGd6TGpVeU55QXlNQzQ0T0RneFREZ3hMakU1T0NBeU9TNHdNamxET0RBdU16TTFOU0F5T0M0Mk1qTTBJRGM1TGpRM01qa2dNamd1TXpBME55QTNOaTR6T1RZeklESTRMak13TkRkSU5qSXVPVGszTmxZeU55NDRNVEl5UXpZMExqRTNOalFnTWpjdU56STFNeUEyTlM0eE9ESTRJREkyTGpnNE5URWdOalV1TVRneU9DQXlOQzQ1TVRVeFZqUXVNelExTmpWRE5qVXVNVGd5T0NBeUxqSTRPRGN4SURZMExqRXhPRGtnTVM0MU1EWTBPU0EyTWk0NU9UYzJJREV1TXprd05qRldNQzQ0T1RneE1ESklOelV1TmpKRE56Z3VPRGszT0NBd0xqZzVPREV3TWlBNE1DNHhPVEUzSURBdU1qZzVOekVnT0RBdU5qZ3dOU0F3VERneUxqZzVORFFnTnk0ek9EYzJNVWc0TWk0ek1UazBRemd3TGpjMk5qY2dNeTQxT1RJME1TQTNPUzR5TnpFMklERXVOVEEyTkRrZ056SXVNelF5TWlBeExqVXdOalE1U0RZNExqZ3dOVFpXTVRJdU16RXlOMGczTXk0d05qRkROell1TVRBNE9DQXhNaTR6TVRJM0lEYzNMakUzTWpjZ01URXVNams0TnlBM055NHlPRGMzSURrdU1UVTBPRFZJTnpjdU56YzJOVll4Tmk0d056ZzVTRGMzTGpJNE56ZEROemN1TURnMk5DQXhNeTQ0TkRneUlEYzJMakV3T0RnZ01USXVPRGt5TVNBM015NHdOakVnTVRJdU9Ea3lNVWcyT0M0NE1EVTJWakkyTGprM01rTTJPUzQ1TWpjZ01qY3VORFkwTlNBM01TNDBNakl4SURJM0xqYzRNeklnTnpNdU5Ea3lNeUF5Tnk0M09ETXlRemM0TGpVeU5DQXlOeTQzT0RNeUlEZ3hMakU1T0NBeU5pNHhNREk1SURneUxqazFNaUF5TUM0NU5EWXhTRGd6TGpVeU4xWXlNQzQ0T0RneFdpSWdabWxzYkQwaWQyaHBkR1VpTHo0S1BIQmhkR2dnWkQwaVRURXdOQzQyTURNZ01qQXVNVEEyVERFd01pNDBNVGNnTWprdU1EQXdNVU14TURFdU5ERXhJREk0TGpVek5qVWdNVEF3TGpJd015QXlPQzR5TnpVNElEazNMamsyTURZZ01qZ3VNamMxT0VnNE5DNDJOelk1VmpJM0xqYzRNek5ET0RVdU5qVTBOU0F5Tnk0Mk9UWTBJRGcyTGpnMk1qRWdNamN1TURVNUlEZzJMamcyTWpFZ01qUXVOekV5TkZZMExqVXhPVFUzUXpnMkxqZzJNakVnTWk0d09EWXdNU0E0TlM0M09UZ3lJREV1TkRRNE5qUWdPRFF1TmpjMk9TQXhMak0yTVRjelZqQXVPRGs0TVRrelNEa3lMalkwTVRSV01TNHpOakUzTTBNNU1TNDBNek00SURFdU5EUTROalFnT1RBdU5EZzBPU0F5TGpBNE5qQXhJRGt3TGpRNE5Ea2dOQzQxTVRrMU4xWXlOaTQ1TkRNeFF6a3hMalUzTnpVZ01qY3VOREEyTnlBNU15NHdORE01SURJM0xqWTVOalFnT1RVdU1EVTJOaUF5Tnk0Mk9UWTBRems1TGpjM01qRWdNamN1TmprMk5DQXhNREl1TXpBeUlESTJMalU1TlRVZ01UQTBMakF5TnlBeU1DNHdOemRJTVRBMExqWXdNMVl5TUM0eE1EWmFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnbzhjR0YwYUNCa1BTSk5NVEl6TGpjMU1pQTRMalUwTmpRMVNERXlNeTR5TXpSRE1USXlMakUzSURRdU5EQXpOaUF4TWpBdU9UWXpJREV1TXprd05qRWdNVEUxTGpZME5DQXhMak01TURZeFNERXhOQzR4TkRoV01qUXVOekV5TTBNeE1UUXVNVFE0SURJM0xqQXdNU0F4TVRVdU16VTJJREkzTGpjeU5UTWdNVEUyTGpNd05TQXlOeTQzT0RNeVZqSTRMakkzTlRkSU1UQTRMak0wVmpJM0xqZ3hNakpETVRBNUxqTXhPQ0F5Tnk0M01qVXpJREV4TUM0ME9UY2dNall1T1RjeUlERXhNQzQwT1RjZ01qUXVOamd6TTFZeExqUXhPVFU0U0RFd09DNDVORFJETVRBekxqWXlOU0F4TGpReE9UVTRJREV3TWk0ek16RWdOQzQwTXpJMU55QXhNREV1TXpneUlEZ3VOVGMxTkRKSU1UQXdMamd3TjB3eE1ESXVORGMxSURCRE1UQXpMak01TlNBd0xqUXdOVFU1TkNBeE1EUXVOakF5SURBdU9EazRNVEF5SURFd055NHhOakVnTUM0NE9UZ3hNREpJTVRFM0xqUXlOa014TVRrdU9EUXhJREF1T0RrNE1UQXlJREV5TVM0ek1EZ2dNQzQwTURVMU9UUWdNVEl5TGpFeE15QXdUREV5TXk0M05USWdPQzQxTkRZME5Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMHhORFVnTWpjdU56Z3pNMVl5T0M0eU56VTRTREV6Tmk0d09EZFdNamN1Tnpnek0wTXhNemN1TURBM0lESTNMalU0TURVZ01UTTNMamc1T0NBeU55NHlPVEE0SURFek9DNHdNVE1nTWpVdU9USTVNVU14TXpndU1UVTNJREkxTGpBMklERXpOeTQ0TVRJZ01qTXVOemcxTXlBeE16Y3VNamswSURJeUxqRTJNamxNTVRNMkxqRTNNeUF4T0M0M05EUXpTREV5Tmk0NU56SkRNVEkxTGprd09DQXlNUzQ1TXpFeElERXlOUzR4TmpFZ01qUXVOREl5TnlBeE1qVXVNalEzSURJMUxqVXlNelpETVRJMUxqTTJNaUF5Tnk0ek5EZzNJREV5Tmk0M056RWdNamN1TnpVME15QXhNamN1TnpRNUlESTNMamd4TWpOV01qZ3VNekEwT0VneE1qQXVNemc0VmpJM0xqZ3hNak5ETVRJeExqZzRNeUF5Tnk0M09ETXpJREV5TXk0eE56Y2dNamN1TVRjME9TQXhNalF1TVRJMklESTBMamMwTVRORE1USTFMakEzTlNBeU1pNHhOakk1SURFeU5pNDJOVFlnTVRjdU56ZzRNeUF4TWpjdU5EWXhJREUxTGpNNE16ZERNVEk1TGprd05TQTNMamd5TWpJMklERXpNQzQ1TmprZ05DNDVOVFF4TXlBeE16QXVPVFk1SURNdU1qUTBPRFJETVRNd0xqazJPU0F5TGpZek5qUTBJREV6TUM0NU5DQXlMakExTnpBeUlERXpNQzQzTmpnZ01TNDFNRFkxTjBNeE16RXVOemMwSURFdU1qUTFPRFFnTVRNeUxqazFNeUF3TGpZek56UTBOQ0F4TXpNdU9UQXlJREF1TURJNU1EVXlOMHd4TkRBdU56Y3pJREl4TGpNMU1UZERNVFF4TGpnMk5pQXlOQzQ0TlRjeUlERTBNaTQwTkRFZ01qY3VOREEyTnlBeE5EVWdNamN1Tnpnek0xcE5NVE0yTGpBd01TQXhPQzR4TmpRNVRERXpNUzQwTlRnZ05DNHlPRGMzT1VNeE16QXVPVGs0SURZdU5qa3lNemtnTVRJNUxqVXdNaUF4TVM0d05qY2dNVEk0TGpBMk5TQXhOUzQwTkRFMlF6RXlOeTQzTnpjZ01UWXVNemszTnlBeE1qY3VORFl4SURFM0xqSTVOVGdnTVRJM0xqRTBOU0F4T0M0eE9UTTVTREV6Tmk0d01ERldNVGd1TVRZME9Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMHlNQzR3TkRBMklESTRMak13TkRoSU16RXVOamcxTlV3eE5TNDROREk0SURBdU5qTTNORFV4VERBZ01qZ3VNekEwT0VneE1TNDJORFE1VERZdU1USTBNek1nTWpRdU9UUTBNVXc1TGprM056RTVJREU0TGpJeU1qbERNVFF1TXpFNE9TQXlNQzQwT0RJMklERTFMamcwTWpnZ01qZ3VNekEwT0NBeE5TNDROREk0SURJNExqTXdORGhETVRVdU9EUXlPQ0F5T0M0ek1EUTRJREUzTGpJMU1UWWdNakF1TkRVek5pQXlNUzQyTnprMklERTRMakl5TWpsTU1qVXVOVE15TkNBeU5DNDVOek14VERJd0xqQTBNRFlnTWpndU16QTBPRnBOTVRBdU1EWXpOU0F4T0M0eE1EZE1NVFV1T0RjeE5TQTNMamsyTnpFeVRESXhMalkxTURnZ01UZ3VNVEEzU0RFd0xqQTJNelZhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZ284TDJjK0NqeGtaV1p6UGdvOFkyeHBjRkJoZEdnZ2FXUTlJbU5zYVhBd0lqNEtQSEpsWTNRZ2QybGtkR2c5SWpFME5TSWdhR1ZwWjJoMFBTSXlPU0lnWm1sc2JEMGlkMmhwZEdVaUx6NEtQQzlqYkdsd1VHRjBhRDRLUEM5a1pXWnpQZ284TDNOMlp6NEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNamNpSUdobGFXZG9kRDBpTWpJaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TnlBeU1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2daRDBpVFRJMExqZzBOVFlnTWk0MU9EVTFPRXd5TnlBd0xqUTJORE14TmxZd1NERTVMalV6TmpkTU1UUXVNakUzTnlBeE15NDJNall4VERndU1UWTJNemdnTUVnd0xqTTBNRGczTlZZd0xqUTJORE14Tmt3eUxqZzFOelVnTXk0MU9ESTFNME16TGpFd01qYzFJRE11T0RFeU9UVWdNeTR5TXpFZ05DNHhORGs0T1NBekxqRTVPRE0zSURRdU5EZzVNVFpXTVRZdU56UXpNa016TGpJM05pQXhOeTR4T0RReklETXVNVE0yTlNBeE55NDJNemd5SURJdU9ETTFJREUzTGprMU9EbE1NQ0F5TVM0ME9UVXlWakl4TGprMU16ZElPQzR3TXpneE0xWXlNUzQwT0RrMFREVXVNakF6TVRJZ01UY3VPVFU0T1VNMExqZzVOaUF4Tnk0Mk16Y3hJRFF1TnpVd09EY2dNVGN1TVRreE15QTBMamd4TWpjMUlERTJMamMwTXpKV05pNHhORE0zT1V3eE1TNDROamc0SURJeExqazFPVFZJTVRJdU5qZzRPVXd4T0M0M05UWWdOaTR4TkRNM09WWXhPQzQzTkRJNFF6RTRMamMxTmlBeE9TNHdOelV5SURFNExqYzFOaUF4T1M0eE5ETTFJREU0TGpVME5EVWdNVGt1TXpZeE1rd3hOaTR6TmpJZ01qRXVOVE0wTlZZeU1rZ3lOaTQ1TlRBMVZqSXhMalV6TlRkTU1qUXVPRFEyT0NBeE9TNDBNVFUyUXpJMExqWTJNak1nTVRrdU1qY3lJREkwTGpVMk5qWWdNVGt1TURNeE1pQXlOQzQyTURZZ01UZ3VOemszTTFZekxqSXdNemc1UXpJMExqVTJOallnTWk0NU5qZzROQ0F5TkM0Mk5qRXhJREl1TnpJNElESTBMamcwTlRZZ01pNDFPRFUxT0ZvaUlHWnBiR3c5SW5kb2FYUmxJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpRaUlHaGxhV2RvZEQwaU1qY2lJSFpwWlhkQ2IzZzlJakFnTUNBek5DQXlOeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRURXpMak0wTVRNZ01UY3VOemswT0V3eE1pNDNOemc1SURJMUxqTXpNekpETVRNdU5UZ3pOaUF5TlM0ek16TXlJREV6TGprek1qRWdNalV1TURBek9DQXhOQzR6TlNBeU5DNDJNRGd5VERFNExqRXlNamNnTWpFdU1UY3lOVXd5TlM0NU5DQXlOaTQyTWpjNFF6STNMak0zTXpjZ01qY3VNemc1TWlBeU9DNHpPRE01SURJMkxqazRPRE1nTWpndU56Y3dOaUF5TlM0ek56Rk1Nek11T1RBeE9TQXlMalExT0RnNFRETXpMamt3TXpNZ01pNDBOVGMxTTBNek5DNHpOVGd4SURBdU5ETTNPVFExSURNekxqRXpOamtnTFRBdU16VXhPREF4SURNeExqYzBJREF1TVRRek5qUTNUREV1TlRjNE5EWWdNVEV1TVRRM05FTXRNQzQwT0RBd01TQXhNUzQ1TURnNElDMHdMalEwT0RnME1pQXhNeTR3TURJeklERXVNakk0TlRNZ01UTXVORGszT0V3NExqa3pPVFl6SURFMUxqYzRNek5NTWpZdU9EVXhJRFV1TVRBek5USkRNamN1Tmprek9TQTBMalUzTVRZeUlESTRMalEyTURRZ05DNDROalU1TWlBeU55NDRNams1SURVdU16azNPREpNTVRNdU16UXhNeUF4Tnk0M09UUTRXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNek1pSUdobGFXZG9kRDBpTWpjaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TXlBeU55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2daRDBpVFRNeUxqY3lOekVnTXk0eU9USXpNME16TVM0MU1UYzRJRE11T0RJeU9ESWdNekF1TWpJNU1pQTBMakUzTkRRMElESTRMamc0TlRjZ05DNHpORFV4TjBNek1DNHlOamM0SURNdU5URTVPVGNnTXpFdU16SXlOeUF5TGpJeU16SXpJRE14TGpneE9EWWdNQzQyTmpBeU16aERNekF1TlRNZ01TNDBNamcxTWlBeU9TNHhNRGN5SURFdU9UY3hNaUF5Tnk0MU9URWdNaTR5TnpRd05VTXlOaTR6TmpjMElEQXVPVGN4TWpFeElESTBMall5TXpVZ01DNHhOalF6TURjZ01qSXVOekl4TVNBd0xqRTJORE13TjBNeE9TNHdNekF4SURBdU1UWTBNekEzSURFMkxqQTFPRFVnTXk0eE5qQXlNaUF4Tmk0d05UZzFJRFl1T0RNeU9UWkRNVFl1TURVNE5TQTNMak0yTVRReElERTJMakV3TXpNZ055NDROamsxTXlBeE5pNHlNVE1nT0M0ek5UTXlOME14TUM0Mk56QTBJRGd1TURneU9UVWdOUzQzTmpVNU15QTFMalF5TmpRMklESXVORGN4TWpRZ01TNHpOemszTkVNeExqZzVOakEwSURJdU16YzNOeUF4TGpVMU9EWTFJRE11TlRFNU9UY2dNUzQxTlRnMk5TQTBMamMwT1RZMFF6RXVOVFU0TmpVZ055NHdOVGcxTmlBeUxqYzBOelkySURrdU1UQTFNeUEwTGpVeU1EQXhJREV3TGpJNU1ESkRNeTQwTkRnNE9DQXhNQzR5TmprNUlESXVNems0TURjZ09TNDVOVGc1TlNBeExqVXdOemd6SURrdU5EWTVNVEpETVM0MU1EYzRNeUE1TGpRNE9UUTBJREV1TlRBM09ETWdPUzQxTVRVNE5pQXhMalV3TnpneklEa3VOVFF5TWpsRE1TNDFNRGM0TXlBeE1pNDNPREl4SURNdU9ERTROemtnTVRVdU5EY3pNU0EyTGpnME9USTJJREUyTGpBNU16RkROaTR6TURZMU9DQXhOaTR5TkRFMElEVXVOekUxTVRJZ01UWXVNekV5TmlBMUxqRXdNVE1nTVRZdU16RXlOa00wTGpZM05EUTRJREUyTGpNeE1qWWdOQzR5TkRNMU9TQXhOaTR5T0RneUlETXVPRE01TVRJZ01UWXVNVGs0TjBNMExqY3dNamt6SURFNExqZ3pPU0EzTGpFMU5ERXpJREl3TGpjNElERXdMakEyT0RjZ01qQXVPRFF6UXpjdU9EQXdORGNnTWpJdU5qRTNOQ0EwTGpreU1EUXhJREl6TGpZNE5qVWdNUzQ0TURJMU5TQXlNeTQyT0RZMVF6RXVNalUxT0NBeU15NDJPRFkxSURBdU56TXhOREU0SURJekxqWTJNakVnTUM0eU1EY3dNekVnTWpNdU5UazFRek11TVRZd01qWWdNalV1TkRrNU5TQTJMalkyTURJMElESTJMalU0TmprZ01UQXVORE0wTmlBeU5pNDFPRFk1UXpJeUxqY3dNamdnTWpZdU5UZzJPU0F5T1M0ME1UQXhJREUyTGpReU5ETWdNamt1TkRFd01TQTNMall4TlRRM1F6STVMalF4TURFZ055NHpNakEzTmlBeU9TNHpPVGs1SURjdU1ETTJNakVnTWprdU16ZzFOeUEyTGpjMU16WTVRek13TGpjd09EZ2dOUzQ0TVRRMk55QXpNUzQ0TWpBMklEUXVOalF4T1RJZ016SXVOekkzTVNBekxqSTVNak16V2lJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpJaUlHaGxhV2RvZEQwaU1qQWlJSFpwWlhkQ2IzZzlJakFnTUNBek1pQXlNQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRURWdNVXd4TmlBeE9DNDFURE14SURFaUlITjBjbTlyWlQwaVlteGhZMnNpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzQxSWk4K0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1URWlJR2hsYVdkb2REMGlNVEVpSUhacFpYZENiM2c5SWpBZ01DQXhNU0F4TVNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQR3hwYm1VZ2VURTlJalV1TlNJZ2VESTlJakV4SWlCNU1qMGlOUzQxSWlCemRISnZhMlU5SWlNd01EQXdNREFpTHo0S1BHeHBibVVnZURFOUlqVXVOU0lnZVRFOUlqRXhJaUI0TWowaU5TNDFJaUJ6ZEhKdmEyVTlJaU13TURBd01EQWlMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRFaUlHaGxhV2RvZEQwaU1URWlJSFpwWlhkQ2IzZzlJakFnTUNBeE1TQXhNU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BHeHBibVVnZVRFOUlqVXVOU0lnZURJOUlqRXhJaUI1TWowaU5TNDFJaUJ6ZEhKdmEyVTlJaU0zTURjeU56VWlMejRLUEd4cGJtVWdlREU5SWpVdU5TSWdlVEU5SWpFeElpQjRNajBpTlM0MUlpQnpkSEp2YTJVOUlpTTNNRGN5TnpVaUx6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEVpSUdobGFXZG9kRDBpTVRFaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TVNBeE1TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEd4cGJtVWdlVEU5SWpVdU5TSWdlREk5SWpFeElpQjVNajBpTlM0MUlpQnpkSEp2YTJVOUluZG9hWFJsSWk4K0NqeHNhVzVsSUhneFBTSTFMalVpSUhreFBTSXhNU0lnZURJOUlqVXVOU0lnYzNSeWIydGxQU0ozYUdsMFpTSXZQZ284TDNOMlp6NEtcIiIsIi8qKlxuICogTWFrZSBzdXJlIHRoZXJlJ3Mgbm8gZHVwbGljYXRlZCBhZGRyZXNzIGluIHRoZSBhZGRyZXNzIG1hcC5cbiAqL1xuZXhwb3J0IGNvbnN0IHZlcmlmeUFkZHJlc3NNYXAgPSBhZGRyZXNzTWFwID0+IHtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhZGRyZXNzTWFwKTtcbiAgY29uc3QgZmluZER1cGxpY2F0ZWQgPSB2YWx1ZXMgPT4gdmFsdWVzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSBpbmRleCk7XG4gIGNvbnN0IGR1cGxpY2F0ZWRBZGRyZXNzID0gZmluZER1cGxpY2F0ZWQodmFsdWVzKTtcblxuICBpZiAoZHVwbGljYXRlZEFkZHJlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGVzIGZvdW5kIGluIHRoZSBhZGRyZXNzIG1hcDogJHtkdXBsaWNhdGVkQWRkcmVzcy5qb2luKCcsICcpfWApO1xuICB9XG59O1xuIiwiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBDb250cmFjdHMgfSBmcm9tICcuLi95YW0vY29udHJhY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViM0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGFwaVVybCwgb3B0aW9ucykge1xuICAgIHRoaXMud2ViMyA9IG5ldyBXZWIzKGFwaVVybCk7XG4gICAgdGhpcy5jb250cmFjdHMgPSBuZXcgQ29udHJhY3RzKHRoaXMud2ViMywgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgV2ViM0NsaWVudCB9IGZyb20gJy4vV2ViM0NsaWVudCc7XG4iLCJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IENvbnRyYWN0cyB9IGZyb20gJy4vY29udHJhY3RzJztcblxuZXhwb3J0IGNsYXNzIFlhbSB7XG4gIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJlYWxQcm92aWRlcjtcblxuICAgIGlmICh0eXBlb2YgcHJvdmlkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAocHJvdmlkZXIuaW5jbHVkZXMoJ3dzcycpKSB7XG4gICAgICAgIHJlYWxQcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5XZWJzb2NrZXRQcm92aWRlcihwcm92aWRlciwgb3B0aW9ucy5ldGhlcmV1bU5vZGVUaW1lb3V0IHx8IDEwMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlYWxQcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIocHJvdmlkZXIsIG9wdGlvbnMuZXRoZXJldW1Ob2RlVGltZW91dCB8fCAxMDAwMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlYWxQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgIH1cblxuICAgIHRoaXMud2ViMyA9IG5ldyBXZWIzKHJlYWxQcm92aWRlcik7XG4gICAgdGhpcy5jb250cmFjdHMgPSBuZXcgQ29udHJhY3RzKHRoaXMud2ViMywgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZHJlc3NNYXAsIFRFTVBfRU5BQkxFX0VORF9MU1dfV0VCMyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgRVJDMjBKc29uIGZyb20gJy4uL2NvbnRyYWN0cy9JRVJDMjAuanNvbic7XG5pbXBvcnQgV0VUSEpzb24gZnJvbSAnLi4vY29udHJhY3RzL3dldGguanNvbic7XG5pbXBvcnQgVU5JRmFjdEpzb24gZnJvbSAnLi4vY29udHJhY3RzL3VuaWZhY3QyLmpzb24nO1xuaW1wb3J0IFVOSVBhaXJKc29uIGZyb20gJy4uL2NvbnRyYWN0cy91bmkyLmpzb24nO1xuaW1wb3J0IFVOSVJvdXRlckpzb24gZnJvbSAnLi4vY29udHJhY3RzL3VuaVIuanNvbic7XG5pbXBvcnQgQ09SRSBmcm9tICcuLi9jb250cmFjdHMvQ09SRS5qc29uJztcbmltcG9ydCBXQlRDIGZyb20gJy4uL2NvbnRyYWN0cy9XQlRDLmpzb24nO1xuaW1wb3J0IENCVEMgZnJvbSAnLi4vY29udHJhY3RzL2NCVEMuanNvbic7XG5pbXBvcnQgY0RBSSBmcm9tICcuLi9jb250cmFjdHMvY0RBSS5qc29uJztcbmltcG9ydCB3Q09SRSBmcm9tICcuLi9jb250cmFjdHMvd0NPUkUuanNvbic7XG5pbXBvcnQgTFNXIGZyb20gJy4uL2NvbnRyYWN0cy9MU1cuanNvbic7XG5pbXBvcnQgREVMVEEgZnJvbSAnLi4vY29udHJhY3RzL0RFTFRBLmpzb24nO1xuaW1wb3J0IFJMUCBmcm9tICcuLi9jb250cmFjdHMvckxQLmpzb24nO1xuXG5leHBvcnQgY2xhc3MgQ29udHJhY3RzIHtcbiAgY29uc3RydWN0b3Iod2ViMykge1xuICAgIHRoaXMud2ViMyA9IHdlYjM7XG5cbiAgICAvLyBVbmlzd2FwXG4gICAgdGhpcy51bmlzd2FwUm91dGVyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFVOSVJvdXRlckpzb24pO1xuICAgIHRoaXMudW5pc3dhcEZhY3RvcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVU5JRmFjdEpzb24pO1xuXG4gICAgLy8gVG9rZW5zXG4gICAgdGhpcy5jb3JlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENPUkUuYWJpKTtcblxuICAgIGlmIChURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMpIHtcbiAgICAgIHRoaXMuZGVsdGEgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoREVMVEEuYWJpKTtcbiAgICB9XG5cbiAgICB0aGlzLnJMUCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChSTFAuYWJpKTtcbiAgICB0aGlzLndDT1JFID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KHdDT1JFLmFiaSk7XG4gICAgdGhpcy5jREFJID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNEQUkuYWJpKTtcbiAgICB0aGlzLndCVEMgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoV0JUQy5hYmkpO1xuICAgIHRoaXMud0VUSCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChXRVRISnNvbik7XG4gICAgdGhpcy5jQlRDID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENCVEMuYWJpKTtcbiAgICB0aGlzLmVyYzIwID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzIwSnNvbi5hYmkpO1xuICAgIHRoaXMuZ2VuZXJpY0VyYzIwID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENPUkUuYWJpKTsgLy8gQ09SRSBBQkkgaGFzIGRlY2ltYWxzIEVSQzIwIGRvZXNuJ3QuLi5cblxuICAgIC8vIFBhaXJzXG4gICAgdGhpcy5nZW5lcmljVW5pc3dhcFBhaXIgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVU5JUGFpckpzb24pO1xuICAgIHRoaXMuY29yZUNidGNQYWlyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFVOSVBhaXJKc29uKTtcbiAgICB0aGlzLmNvcmVXZXRoUGFpciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChVTklQYWlySnNvbik7XG4gICAgdGhpcy5jRGFpV2NvcmVQYWlyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFVOSVBhaXJKc29uKTtcbiAgICB0aGlzLndCdGNXZXRoUGFpciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChVTklQYWlySnNvbik7XG4gICAgdGhpcy5ldGhVc2R0UGFpciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChVTklQYWlySnNvbik7XG5cbiAgICB0aGlzLkxTVyA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChMU1cuYWJpKTtcblxuICAgIHRoaXMuX3VwZGF0ZUNvbnRyYWN0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBfdXBkYXRlQ29udHJhY3RBZGRyZXNzZXMoKSB7XG4gICAgLy8gVG9rZW5zXG4gICAgdGhpcy53QlRDLm9wdGlvbnMuYWRkcmVzcyA9IGFkZHJlc3NNYXAud0JUQztcbiAgICB0aGlzLndFVEgub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC53RVRIO1xuICAgIHRoaXMuY29yZS5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNvcmU7XG4gICAgaWYgKFRFTVBfRU5BQkxFX0VORF9MU1dfV0VCMykge1xuICAgICAgdGhpcy5kZWx0YS5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmRlbHRhO1xuICAgIH1cbiAgICB0aGlzLnJMUC5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLnJMUDtcbiAgICB0aGlzLmNCVEMub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5jQlRDO1xuICAgIHRoaXMuY0RBSS5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNEQUk7XG5cbiAgICAvLyBQYWlyc1xuICAgIHRoaXMudW5pc3dhcEZhY3Rvcnkub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC51bmlzd2FwRmFjdG9yeVYyO1xuICAgIHRoaXMudW5pc3dhcFJvdXRlci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLnVuaXN3YXBSb3V0ZXI7XG4gICAgdGhpcy5jb3JlQ2J0Y1BhaXIub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5jb3JlQ2J0YztcbiAgICB0aGlzLmNvcmVXZXRoUGFpci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNvcmVXZXRoO1xuICAgIHRoaXMuY0RhaVdjb3JlUGFpci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNEYWlXY29yZTtcbiAgICB0aGlzLndCdGNXZXRoUGFpci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLndidGNXZXRoO1xuICAgIHRoaXMuZXRoVXNkdFBhaXIub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5ldGhVc2R0O1xuXG4gICAgdGhpcy5MU1cub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5MU1c7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFlhbSB9IGZyb20gJy4vWWFtJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3aW5kbWlsbC9yZWFjdC11aVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiaWdudW1iZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlnbnVtYmVyLmpzL2JpZ251bWJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldGhlcmV1bS1ibG9jay1ieS1kYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV0aGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXdhbGxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2aWN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==