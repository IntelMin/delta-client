module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modal/ConfirmModal.js":
/*!******************************************!*\
  !*** ./components/Modal/ConfirmModal.js ***!
  \******************************************/
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
/* harmony import */ var _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/Modal/ModalProvider */ "./contexts/Modal/ModalProvider.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Modal\\ConfirmModal.js";





const ConfirmModal = () => {
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_3__["ModalContext"]);
  const {
    type,
    title,
    content,
    okContent,
    cancelContent,
    onOk,
    onClose
  } = modalContext;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Confirm,
    onClose: onClose,
    style: {
      visibility: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Confirm ? 'inherit' : 'hidden'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
      className: "text-2xl font-semibold font-wulkan",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "w-full sm:w-auto text-white rounded-none py-4",
        onClick: onOk,
        children: okContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "w-full sm:w-auto text-white rounded-none py-4",
        onClick: onClose,
        children: cancelContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),

/***/ "./components/Modal/ConnectionModal.js":
/*!*********************************************!*\
  !*** ./components/Modal/ConnectionModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @windmill/react-ui */ "@windmill/react-ui");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_metamask_fox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/metamask-fox.svg */ "./public/metamask-fox.svg");
/* harmony import */ var _public_metamask_fox_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_metamask_fox_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_wallet_connect_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/wallet-connect.svg */ "./public/wallet-connect.svg");
/* harmony import */ var _public_wallet_connect_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_wallet_connect_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts */ "./contexts/index.js");
/* harmony import */ var _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/Modal/ModalProvider */ "./contexts/Modal/ModalProvider.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Modal\\ConnectionModal.js";

/* eslint-disable react/no-danger */











const ConnectionModal = () => {
  const wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_3__["useWallet"])();
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('home');
  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_8__["ModalContext"]);
  const {
    type,
    onOk
  } = modalContext;
  const {
    0: showInstructions,
    1: setShowInstructions
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: connectingToMetaMask,
    1: setConnectingToMetaMask
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: selectMetaMask,
    1: setMetaMask
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);

  const close = () => {
    if (onOk) onOk();
    setConnectingToMetaMask(false);
    setShowInstructions(false);
    setMetaMask(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (type !== _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_9__["ModalType"].ConnectWallet) return;

    if (wallet.account) {
      close();
    }

    if (wallet.error && connectingToMetaMask) {
      setConnectingToMetaMask(false);
      setShowInstructions(true);
    }
  }, [type, wallet]);

  const renderContent = () => {
    if (connectingToMetaMask) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        className: "ml-2",
        label: "Connecting..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 14
      }, undefined);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: () => {
            setConnectingToMetaMask(true);
            setMetaMask(true);
            wallet.connect();
          },
          className: "text-black text-xl bg-transparent border-t border-b border-gray-400",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "border-t border-b flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_metamask_fox_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
              alt: "metamask",
              className: "m-auto pt-2 pb-2 pr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-auto",
              children: t('metaMask')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, undefined), showInstructions && selectMetaMask && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "m-auto text-center justify-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "py-4 text-lg font-bold",
          children: "Connection to MetaMask failed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "py-4 text-justify",
          children: "If you're experiencing issues when connecting your wallet, try the following troubleshooting tips."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "list-disc list-inside text-left",
          children: react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Reload the page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Be sure to approve the connection"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Connect your wallet using Walletconnect"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Close all apps that might use Walletconnect"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Update Metamask to the latest version"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Reload the page"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Be sure to approve the connection"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Make sure another wallet is not conflicting with the connection approval"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Connect your wallet using Walletconnect"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), !selectMetaMask && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center text-black mt-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: () => wallet.connect('walletconnect'),
          className: "bg-transparent text-black text-xl  border-t border-b border-gray-400",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "border-t border-b flex",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_wallet_connect_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
              alt: "walletConnect",
              className: "m-auto border-b pb-2 pt-2 pr-2",
              style: {
                width: '35px',
                height: '51px'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "m-auto",
              children: t('walletConnect')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_9__["ModalType"].ConnectWallet,
    onClose: close,
    style: {
      visibility: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_9__["ModalType"].ConnectWallet ? 'inherit' : 'hidden'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
      className: "text-2xl font-semibold font-wulkan",
      children: t('connectToDelta')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
      className: "pt-8 m-auto text-base",
      children: renderContent()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ConnectionModal);

/***/ }),

/***/ "./components/Modal/ErrorModal.js":
/*!****************************************!*\
  !*** ./components/Modal/ErrorModal.js ***!
  \****************************************/
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
/* harmony import */ var _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/Modal/ModalProvider */ "./contexts/Modal/ModalProvider.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Modal\\ErrorModal.js";





const ErrorModal = () => {
  const {
    type,
    title,
    content,
    okContent,
    onOk,
    onClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_3__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Error,
    onClose: onClose,
    style: {
      visibility: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Error ? 'inherit' : 'hidden'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
      className: "text-2xl font-semibold font-wulkan",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "w-full sm:w-auto text-white rounded-none py-4",
        onClick: onOk,
        children: okContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorModal);

/***/ }),

/***/ "./components/Modal/MessageModal.js":
/*!******************************************!*\
  !*** ./components/Modal/MessageModal.js ***!
  \******************************************/
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
/* harmony import */ var _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/Modal/ModalProvider */ "./contexts/Modal/ModalProvider.js");

var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Modal\\MessageModal.js";





const MessageModal = () => {
  const {
    type,
    title,
    content,
    okContent,
    onOk,
    onClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts__WEBPACK_IMPORTED_MODULE_3__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Message,
    onClose: onClose,
    style: {
      visibility: type === _contexts_Modal_ModalProvider__WEBPACK_IMPORTED_MODULE_4__["ModalType"].Message ? 'inherit' : 'hidden'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
      className: "text-2xl font-semibold font-wulkan",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), onOk && okContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "w-full sm:w-auto text-white rounded-none py-4",
        onClick: onOk,
        children: okContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MessageModal);

/***/ }),

/***/ "./components/Modal/ModalContainer.js":
/*!********************************************!*\
  !*** ./components/Modal/ModalContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmModal */ "./components/Modal/ConfirmModal.js");
/* harmony import */ var _ConnectionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectionModal */ "./components/Modal/ConnectionModal.js");
/* harmony import */ var _ErrorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorModal */ "./components/Modal/ErrorModal.js");
/* harmony import */ var _MessageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageModal */ "./components/Modal/MessageModal.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\components\\Modal\\ModalContainer.js";





const ModalContainer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorModal__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConfirmModal__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessageModal__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConnectionModal__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalContainer);

/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: ModalContainer, ConnectionModal, ConfirmModal, ErrorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalContainer */ "./components/Modal/ModalContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return _ModalContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ConnectionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionModal */ "./components/Modal/ConnectionModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionModal", function() { return _ConnectionModal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmModal */ "./components/Modal/ConfirmModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmModal", function() { return _ConfirmModal__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ErrorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorModal */ "./components/Modal/ErrorModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorModal", function() { return _ErrorModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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

/***/ "./config/default.theme.js":
/*!*********************************!*\
  !*** ./config/default.theme.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable max-len */

/**
 * Default theme copied from windmill to ease the configuration.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  // Alert
  alert: {
    base: 'p-4 pl-12 relative rounded-lg leading-5',
    withClose: 'pr-12',
    success: 'bg-green-50 text-green-900 dark:bg-green-600 dark:text-white',
    danger: 'bg-red-50 text-red-900 dark:bg-red-600 dark:text-white',
    warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white',
    neutral: 'bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    info: 'bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white',
    icon: {
      base: 'h-5 w-5',
      success: 'text-green-400 dark:text-green-300',
      danger: 'text-red-400 dark:text-red-300',
      warning: 'text-yellow-400 dark:text-yellow-100',
      neutral: 'text-gray-400 dark:text-gray-500',
      info: 'text-blue-400 dark:text-blue-300'
    }
  },
  // Pagination
  pagination: {
    base: 'flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400'
  },
  // TableFooter
  tableFooter: {
    base: 'px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800'
  },
  // TableRow
  tableRow: {
    base: ''
  },
  // TableHeader
  tableHeader: {
    base: 'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'
  },
  // TableContainer
  tableContainer: {
    base: 'w-full overflow-hidden rounded-lg shadow-xs'
  },
  // TableCell
  tableCell: {
    base: 'px-4 py-3'
  },
  // TableBody
  tableBody: {
    base: 'bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: 'mb-2 last:mb-0'
  },
  // Dropdown
  dropdown: {
    base: 'absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700',
    align: {
      left: 'left-0',
      right: 'right-0'
    }
  },
  // Avatar
  avatar: {
    base: 'relative rounded-full inline-block',
    size: {
      large: 'w-10 h-10',
      regular: 'w-8 h-8',
      small: 'w-6 h-6'
    }
  },
  // Modal
  modal: {
    base: 'w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl'
  },
  // ModalBody
  modalBody: {
    base: 'mb-6 text-sm text-gray-700 dark:text-gray-400'
  },
  // ModalFooter
  modalFooter: {
    base: 'flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-whiteMore border-t border-gray-300 dark:bg-gray-800'
  },
  // ModalHeader
  modalHeader: {
    base: 'mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300'
  },
  // Badge
  badge: {
    base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
    success: 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
    danger: 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
    warning: 'text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600',
    neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
    primary: 'text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600'
  },
  // Backdrop
  backdrop: {
    base: 'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center'
  },
  // Textarea
  textarea: {
    base: 'block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none',
    active: 'focus:border-purple-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-purple',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid: 'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
    invalid: 'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red'
  },
  // Select
  select: {
    base: 'block w-full text-sm dark:text-gray-300 focus:outline-none',
    active: 'focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 focus:shadow-outline-purple dark:focus:shadow-outline-gray dark:focus:border-gray-600',
    select: 'form-select leading-5',
    multiple: 'form-multiselect',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid: 'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
    invalid: 'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red'
  },
  // Label
  label: {
    base: 'block text-sm text-gray-700 dark:text-gray-400',
    // check and radio get this same style
    check: 'inline-flex items-center',
    disabled: 'opacity-50 cursor-not-allowed'
  },
  // Input
  input: {
    base: 'block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5',
    active: 'focus:border-gray-400 dark:border-gray-600 dark:focus:border-gray-600  dark:bg-gray-700',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid: 'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400',
    invalid: 'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400',
    radio: 'text-gray-600 form-radio focus:border-gray-400 focus:outline-none ',
    checkbox: 'text-gray-600 form-checkbox focus:border-gray-400 focus:outline-none '
  },
  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-green-600 dark:text-green-400',
    invalid: 'text-red-600 dark:text-red-400'
  },
  // Card
  card: {
    base: 'min-w-0 rounded-lg shadow-xs overflow-hidden',
    default: 'bg-white dark:bg-gray-800'
  },
  cardBody: {
    base: 'p-4'
  },
  // Button
  button: {
    base: 'align-bottom bg-transparent inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-10 py-4',
      large: 'px-5 py-3',
      regular: 'px-4 py-2 text-sm',
      small: 'px-3 py-1 text-sm',
      icon: {
        larger: 'p-4',
        large: 'p-3',
        regular: 'p-2',
        small: 'p-2'
      },
      pagination: 'px-3 py-1 text-xs'
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1'
    },
    primary: {
      base: 'text-white bg-black border border-transparent uppercase rounded-none',
      active: '',
      disabled: 'opacity-50 cursor-not-allowed'
    },
    outline: {
      base: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
      active: 'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300'
    },
    link: {
      base: 'text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
      active: 'active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed'
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base: 'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
    }
  }
});

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ "./i18n.json");
var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @next-translate-root/i18n */ "./i18n.json", 1);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ "next-translate/appWithI18n");
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @windmill/react-ui */ "@windmill/react-ui");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-wallet */ "use-wallet");
/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_wallet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts */ "./contexts/index.js");
/* harmony import */ var _config_default_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/default.theme */ "./config/default.theme.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.js");


var _jsxFileName = "E:\\work\\blockchain\\prex\\source\\delta\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_3__["Windmill"], {
    theme: _config_default_theme__WEBPACK_IMPORTED_MODULE_7__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Providers, _objectSpread(_objectSpread({}, pageProps), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_9__["ModalContainer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 38
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

const Providers = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["SettingsProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(use_wallet__WEBPACK_IMPORTED_MODULE_4__["UseWalletProvider"], {
        chainId: 1,
        connectors: {
          walletconnect: {
            rpcUrl: _config__WEBPACK_IMPORTED_MODULE_5__["WEB3_PROVIDER_URL"]
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["WalletProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["YamProvider"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["Web3Provider"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["ModalProvider"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts__WEBPACK_IMPORTED_MODULE_6__["GlobalHooksProvider"], {
                  children: props.children
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

const __Page_Next_Translate__ = App;
/* harmony default export */ __webpack_exports__["default"] = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, _objectSpread(_objectSpread({}, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
  isLoader: true,
  skipInitialProps: true,
  loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
})));

/***/ }),

/***/ "./public/metamask-fox.svg":
/*!*********************************!*\
  !*** ./public/metamask-fox.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMzUgMzMiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjI1Ij48cGF0aCBkPSJtMzIuOTU4MiAxLTEzLjEzNDEgOS43MTgzIDIuNDQyNC01LjcyNzMxeiIgZmlsbD0iI2UxNzcyNiIgc3Ryb2tlPSIjZTE3NzI2Ii8+PGcgZmlsbD0iI2UyNzYyNSIgc3Ryb2tlPSIjZTI3NjI1Ij48cGF0aCBkPSJtMi42NjI5NiAxIDEzLjAxNzE0IDkuODA5LTIuMzI1NC01LjgxODAyeiIvPjxwYXRoIGQ9Im0yOC4yMjk1IDIzLjUzMzUtMy40OTQ3IDUuMzM4NiA3LjQ4MjkgMi4wNjAzIDIuMTQzNi03LjI4MjN6Ii8+PHBhdGggZD0ibTEuMjcyODEgMjMuNjUwMSAyLjEzMDU1IDcuMjgyMyA3LjQ2OTk0LTIuMDYwMy0zLjQ4MTY2LTUuMzM4NnoiLz48cGF0aCBkPSJtMTAuNDcwNiAxNC41MTQ5LTIuMDc4NiAzLjEzNTggNy40MDUuMzM2OS0uMjQ2OS03Ljk2OXoiLz48cGF0aCBkPSJtMjUuMTUwNSAxNC41MTQ5LTUuMTU3NS00LjU4NzA0LS4xNjg4IDguMDU5NzQgNy40MDQ5LS4zMzY5eiIvPjxwYXRoIGQ9Im0xMC44NzMzIDI4Ljg3MjEgNC40ODE5LTIuMTYzOS0zLjg1ODMtMy4wMDYyeiIvPjxwYXRoIGQ9Im0yMC4yNjU5IDI2LjcwODIgNC40Njg5IDIuMTYzOS0uNjEwNS01LjE3MDF6Ii8+PC9nPjxwYXRoIGQ9Im0yNC43MzQ4IDI4Ljg3MjEtNC40NjktMi4xNjM5LjM2MzggMi45MDI1LS4wMzkgMS4yMzF6IiBmaWxsPSIjZDViZmIyIiBzdHJva2U9IiNkNWJmYjIiLz48cGF0aCBkPSJtMTAuODczMiAyOC44NzIxIDQuMTU3MiAxLjk2OTYtLjAyNi0xLjIzMS4zNTA4LTIuOTAyNXoiIGZpbGw9IiNkNWJmYjIiIHN0cm9rZT0iI2Q1YmZiMiIvPjxwYXRoIGQ9Im0xNS4xMDg0IDIxLjc4NDItMy43MTU1LTEuMDg4NCAyLjYyNDMtMS4yMDUxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTIwLjUxMjYgMjEuNzg0MiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciLz48cGF0aCBkPSJtMTAuODczMyAyOC44NzIxLjY0OTUtNS4zMzg2LTQuMTMxMTcuMTE2N3oiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNC4wOTgyIDIzLjUzMzUuNjM2NiA1LjMzODYgMy40OTQ2LTUuMjIxOXoiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNy4yMjkxIDE3LjY1MDctNy40MDUuMzM2OS42ODg1IDMuNzk2NiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjY2M2MjI4IiBzdHJva2U9IiNjYzYyMjgiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4IDIuNjI0Mi0xLjIwNTEgMS4wOTEzIDIuMjkzNS42ODg1LTMuNzk2Ni03LjQwNDk1LS4zMzY5eiIgZmlsbD0iI2NjNjIyOCIgc3Ryb2tlPSIjY2M2MjI4Ii8+PHBhdGggZD0ibTguMzkyIDE3LjY1MDcgMy4xMDQ5IDYuMDUxMy0uMTAzOS0zLjAwNjJ6IiBmaWxsPSIjZTI3NTI1IiBzdHJva2U9IiNlMjc1MjUiLz48cGF0aCBkPSJtMjQuMjQxMiAyMC42OTU4LS4xMTY5IDMuMDA2MiAzLjEwNDktNi4wNTEzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTE1Ljc5NyAxNy45ODc2LS42ODg2IDMuNzk2Ny44NzA0IDQuNDgzMy4xOTQ5LTUuOTA4N3oiIGZpbGw9IiNlMjc1MjUiIHN0cm9rZT0iI2UyNzUyNSIvPjxwYXRoIGQ9Im0xOS44MjQyIDE3Ljk4NzYtLjM2MzggMi4zNTg0LjE4MTkgNS45MjE2Ljg3MDQtNC40ODMzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTIwLjUxMjcgMjEuNzg0Mi0uODcwNCA0LjQ4MzQuNjIzNi40NDA2IDMuODU4NC0zLjAwNjIuMTE2OS0zLjAwNjJ6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4LjEwNCAzLjAwNjIgMy44NTgzIDMuMDA2Mi42MjM2LS40NDA2LS44NzA0LTQuNDgzNHoiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0yMC41OTA2IDMwLjg0MTcuMDM5LTEuMjMxLS4zMzc4LS4yODUxaC00Ljk2MjZsLS4zMjQ4LjI4NTEuMDI2IDEuMjMxLTQuMTU3Mi0xLjk2OTYgMS40NTUxIDEuMTkyMSAyLjk0ODkgMi4wMzQ0aDUuMDUzNmwyLjk2Mi0yLjAzNDQgMS40NDItMS4xOTIxeiIgZmlsbD0iI2MwYWM5ZCIgc3Ryb2tlPSIjYzBhYzlkIi8+PHBhdGggZD0ibTIwLjI2NTkgMjYuNzA4Mi0uNjIzNi0uNDQwNmgtMy42NjM1bC0uNjIzNi40NDA2LS4zNTA4IDIuOTAyNS4zMjQ4LS4yODUxaDQuOTYyNmwuMzM3OC4yODUxeiIgZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2Ii8+PHBhdGggZD0ibTMzLjUxNjggMTEuMzUzMiAxLjEwNDMtNS4zNjQ0Ny0xLjY2MjktNC45ODg3My0xMi42OTIzIDkuMzk0NCA0Ljg4NDYgNC4xMjA1IDYuODk4MyAyLjAwODUgMS41Mi0xLjc3NTItLjY2MjYtLjQ3OTUgMS4wNTIzLS45NTg4LS44MDU0LS42MjIgMS4wNTIzLS44MDM0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTEgNS45ODg3MyAxLjExNzI0IDUuMzY0NDctLjcxNDUxLjUzMTMgMS4wNjUyNy44MDM0LS44MDU0NS42MjIgMS4wNTIyOC45NTg4LS42NjI1NS40Nzk1IDEuNTE5OTcgMS43NzUyIDYuODk4MzUtMi4wMDg1IDQuODg0Ni00LjEyMDUtMTIuNjkyMzMtOS4zOTQ0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTMyLjA0ODkgMTYuNTIzNC02Ljg5ODMtMi4wMDg1IDIuMDc4NiAzLjEzNTgtMy4xMDQ5IDYuMDUxMyA0LjEwNTItLjA1MTloNi4xMzE4eiIgZmlsbD0iI2Y1ODQxZiIgc3Ryb2tlPSIjZjU4NDFmIi8+PHBhdGggZD0ibTEwLjQ3MDUgMTQuNTE0OS02Ljg5ODI4IDIuMDA4NS0yLjI5OTQ0IDcuMTI2N2g2LjExODgzbDQuMTA1MTkuMDUxOS0zLjEwNDg3LTYuMDUxM3oiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0xOS44MjQxIDE3Ljk4NzYuNDQxNy03LjU5MzIgMi4wMDA3LTUuNDAzNGgtOC45MTE5bDIuMDAwNiA1LjQwMzQuNDQxNyA3LjU5MzIuMTY4OSAyLjM4NDIuMDEzIDUuODk1OGgzLjY2MzVsLjAxMy01Ljg5NTh6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "./public/wallet-connect.svg":
/*!***********************************!*\
  !*** ./public/wallet-connect.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzAwcHgiIGhlaWdodD0iMTg1cHgiIHZpZXdCb3g9IjAgMCAzMDAgMTg1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+V2FsbGV0Q29ubmVjdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ3YWxsZXRjb25uZWN0LWxvZ28tYWx0IiBmaWxsPSIjM0I5OUZDIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNjEuNDM4NTQyOSwzNi4yNTYyNjEyIEMxMTAuMzQ5NzY3LC0xMS42MzE5MDUxIDE4OS42NTA1MywtMTEuNjMxOTA1MSAyMzguNTYxNzUyLDM2LjI1NjI2MTIgTDI0NC40NDgyOTcsNDIuMDE5Njc4NiBDMjQ2Ljg5Mzg1OCw0NC40MTQwODY3IDI0Ni44OTM4NTgsNDguMjk2MTg5OCAyNDQuNDQ4Mjk3LDUwLjY5MDU5OSBMMjI0LjMxMTYwMiw3MC40MDYxMDIgQzIyMy4wODg4MjEsNzEuNjAzMzA3MSAyMjEuMTA2MzAyLDcxLjYwMzMwNzEgMjE5Ljg4MzUyMSw3MC40MDYxMDIgTDIxMS43ODI5MzcsNjIuNDc0OTU0MSBDMTc3LjY2MTI0NSwyOS4wNjY5NzI0IDEyMi4zMzkwNTEsMjkuMDY2OTcyNCA4OC4yMTczNTgyLDYyLjQ3NDk1NDEgTDc5LjU0MjMwMiw3MC45Njg1NTkyIEM3OC4zMTk1MjA0LDcyLjE2NTc2MzMgNzYuMzM3MDAxLDcyLjE2NTc2MzMgNzUuMTE0MjIxNCw3MC45Njg1NTkyIEw1NC45Nzc1MjY1LDUxLjI1MzA1NjEgQzUyLjUzMTk2NTMsNDguODU4NjQ2OSA1Mi41MzE5NjUzLDQ0Ljk3NjU0MzkgNTQuOTc3NTI2NSw0Mi41ODIxMzU3IEw2MS40Mzg1NDI5LDM2LjI1NjI2MTIgWiBNMjgwLjIwNjMzOSw3Ny4wMzAwMDYxIEwyOTguMTI4MDM2LDk0LjU3NjkwMzEgQzMwMC41NzM1ODUsOTYuOTcxMyAzMDAuNTczNTk5LDEwMC44NTMzOCAyOTguMTI4MDY3LDEwMy4yNDc3OTMgTDIxNy4zMTc4OTYsMTgyLjM2ODkyNyBDMjE0Ljg3MjM1MiwxODQuNzYzMzUzIDIxMC45MDczMTQsMTg0Ljc2MzM4IDIwOC40NjE3MzYsMTgyLjM2ODk4OSBDMjA4LjQ2MTcyNiwxODIuMzY4OTc5IDIwOC40NjE3MTQsMTgyLjM2ODk2NyAyMDguNDYxNzA0LDE4Mi4zNjg5NTcgTDE1MS4xMDc1NjEsMTI2LjIxNDM4NSBDMTUwLjQ5NjE3MSwxMjUuNjE1NzgzIDE0OS41MDQ5MTEsMTI1LjYxNTc4MyAxNDguODkzNTIxLDEyNi4yMTQzODUgQzE0OC44OTM1MTcsMTI2LjIxNDM4OSAxNDguODkzNTE0LDEyNi4yMTQzOTMgMTQ4Ljg5MzUxLDEyNi4yMTQzOTYgTDkxLjU0MDU4ODgsMTgyLjM2ODkyNyBDODkuMDk1MDUyLDE4NC43NjMzNTkgODUuMTMwMDEzMywxODQuNzYzMzk5IDgyLjY4NDQyNzYsMTgyLjM2OTAxNCBDODIuNjg0NDEzMywxODIuMzY5IDgyLjY4NDM5OCwxODIuMzY4OTg2IDgyLjY4NDM4MjcsMTgyLjM2ODk3IEwxLjg3MTk2MzI3LDEwMy4yNDY3ODUgQy0wLjU3MzU5NjkzOSwxMDAuODUyMzc3IC0wLjU3MzU5NjkzOSw5Ni45NzAyNzM1IDEuODcxOTYzMjcsOTQuNTc1ODY1MyBMMTkuNzkzNjkyOSw3Ny4wMjg5OTggQzIyLjIzOTI1MzEsNzQuNjM0NTg5OCAyNi4yMDQyOTE4LDc0LjYzNDU4OTggMjguNjQ5ODUzMSw3Ny4wMjg5OTggTDg2LjAwNDgzMDYsMTMzLjE4NDM1NSBDODYuNjE2MjIxNCwxMzMuNzgyOTU3IDg3LjYwNzQ3OTYsMTMzLjc4Mjk1NyA4OC4yMTg4NzA0LDEzMy4xODQzNTUgQzg4LjIxODg3OTYsMTMzLjE4NDM0NiA4OC4yMTg4ODc4LDEzMy4xODQzMzggODguMjE4ODk2OSwxMzMuMTg0MzMxIEwxNDUuNTcxLDc3LjAyODk5OCBDMTQ4LjAxNjUwNSw3NC42MzQ1MzQ3IDE1MS45ODE1NDQsNzQuNjM0NDQ0OSAxNTQuNDI3MTYxLDc3LjAyODc5OCBDMTU0LjQyNzE5NSw3Ny4wMjg4MzE2IDE1NC40MjcyMjksNzcuMDI4ODY1MyAxNTQuNDI3MjYyLDc3LjAyODg5OSBMMjExLjc4MjE2NCwxMzMuMTg0MzMxIEMyMTIuMzkzNTU0LDEzMy43ODI5MzIgMjEzLjM4NDgxNCwxMzMuNzgyOTMyIDIxMy45OTYyMDQsMTMzLjE4NDMzMSBMMjcxLjM1MDE3OSw3Ny4wMzAwMDYxIEMyNzMuNzk1NzQsNzQuNjM1NTk2OSAyNzcuNzYwNzc4LDc0LjYzNTU5NjkgMjgwLjIwNjMzOSw3Ny4wMzAwMDYxIFoiIGlkPSJXYWxsZXRDb25uZWN0Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

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

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Db25maXJtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9Db25uZWN0aW9uTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9FcnJvck1vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwvTWVzc2FnZU1vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwvTW9kYWxDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwaW5uZXIvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwaW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2RlZmF1bHQudGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0dsb2JhbEhvb2tzL0dsb2JhbEhvb2tzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9HbG9iYWxIb29rcy9HbG9iYWxIb29rc1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL01vZGFsL01vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Nb2RhbC9Nb2RhbFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1NldHRpbmdzL1NldHRpbmdzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9TZXR0aW5ncy9TZXR0aW5nc1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1dhbGxldC9XYWxsZXRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1dhbGxldC9XYWxsZXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9XZWIzL1dlYjNDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1dlYjMvV2ViM1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1lhbS9ZYW1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL1lhbS9ZYW1Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2Zvcm1hdHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3RyYW5zYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VDb3JlUGFpckJhbGFuY2VzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZURlbHRhLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUVUSFByaWNlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUxTV1N0YXRzLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVJlYmFzaW5nLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVN0YWtpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVG9rZW5CYWxhbmNlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVVzZXJBcHByb3ZhbE9mQ29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV0JUQ1ByaWNlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVdlYjMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlWWFtLmpzIiwid2VicGFjazovLy8uL2xvY2FsZXMgbGF6eSBeXFwuXFwvLipcXC8uKiQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tZXRhbWFzay1mb3guc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy93YWxsZXQtY29ubmVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2ViMy9XZWIzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3dlYjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4veWFtL1lhbS5qcyIsIndlYnBhY2s6Ly8vLi95YW0vY29udHJhY3RzLmpzIiwid2VicGFjazovLy8uL3lhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2luZG1pbGwvcmVhY3QtdWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiaWdudW1iZXIuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiaWdudW1iZXIuanMvYmlnbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVzZS13YWxsZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiQ29uZmlybU1vZGFsIiwibW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGV4dCIsInR5cGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJva0NvbnRlbnQiLCJjYW5jZWxDb250ZW50Iiwib25PayIsIm9uQ2xvc2UiLCJNb2RhbFR5cGUiLCJDb25maXJtIiwidmlzaWJpbGl0eSIsIkNvbm5lY3Rpb25Nb2RhbCIsIndhbGxldCIsInVzZVdhbGxldCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInNob3dJbnN0cnVjdGlvbnMiLCJzZXRTaG93SW5zdHJ1Y3Rpb25zIiwidXNlU3RhdGUiLCJjb25uZWN0aW5nVG9NZXRhTWFzayIsInNldENvbm5lY3RpbmdUb01ldGFNYXNrIiwic2VsZWN0TWV0YU1hc2siLCJzZXRNZXRhTWFzayIsImNsb3NlIiwidXNlRWZmZWN0IiwiQ29ubmVjdFdhbGxldCIsImFjY291bnQiLCJlcnJvciIsInJlbmRlckNvbnRlbnQiLCJjb25uZWN0IiwibWV0YU1hc2tMb2dvIiwiaXNNb2JpbGUiLCJ3YWxsZXRDb25uZWN0TG9nbyIsIndpZHRoIiwiaGVpZ2h0IiwiRXJyb3JNb2RhbCIsIkVycm9yIiwiTWVzc2FnZU1vZGFsIiwiTWVzc2FnZSIsIk1vZGFsQ29udGFpbmVyIiwiU3Bpbm5lciIsImxhYmVsIiwiY2xhc3NOYW1lIiwiYWxlcnQiLCJiYXNlIiwid2l0aENsb3NlIiwic3VjY2VzcyIsImRhbmdlciIsIndhcm5pbmciLCJuZXV0cmFsIiwiaW5mbyIsImljb24iLCJwYWdpbmF0aW9uIiwidGFibGVGb290ZXIiLCJ0YWJsZVJvdyIsInRhYmxlSGVhZGVyIiwidGFibGVDb250YWluZXIiLCJ0YWJsZUNlbGwiLCJ0YWJsZUJvZHkiLCJkcm9wZG93bkl0ZW0iLCJkcm9wZG93biIsImFsaWduIiwibGVmdCIsInJpZ2h0IiwiYXZhdGFyIiwic2l6ZSIsImxhcmdlIiwicmVndWxhciIsInNtYWxsIiwibW9kYWwiLCJtb2RhbEJvZHkiLCJtb2RhbEZvb3RlciIsIm1vZGFsSGVhZGVyIiwiYmFkZ2UiLCJwcmltYXJ5IiwiYmFja2Ryb3AiLCJ0ZXh0YXJlYSIsImFjdGl2ZSIsImRpc2FibGVkIiwidmFsaWQiLCJpbnZhbGlkIiwic2VsZWN0IiwibXVsdGlwbGUiLCJjaGVjayIsImlucHV0IiwicmFkaW8iLCJjaGVja2JveCIsImhlbHBlclRleHQiLCJjYXJkIiwiZGVmYXVsdCIsImNhcmRCb2R5IiwiYnV0dG9uIiwiYmxvY2siLCJsYXJnZXIiLCJvdXRsaW5lIiwibGluayIsIkJpZ051bWJlciIsImNvbmZpZyIsIkVYUE9ORU5USUFMX0FUIiwiREVDSU1BTF9QTEFDRVMiLCJURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMiLCJTVUJUUkFDVF9HQVNfTElNSVQiLCJERUZBVUxUX0NPTkZJUk1BVElPTlMiLCJERUZBVUxUX0dBUyIsIkRFRkFVTFRfR0FTX1BSSUNFIiwiREFUQV9VTkFWQUlMQUJMRSIsIldFQjNfUFJPVklERVJfVVJMIiwicGFpck5hbWVzIiwiZGVsdGFXZXRoIiwiY29yZUNidGMiLCJjb3JlV2V0aCIsImNEYWlXY29yZSIsImV0aFVzZHQiLCJ3YnRjV2V0aCIsImFkZHJlc3NNYXAiLCJ1bmlzd2FwRmFjdG9yeSIsInVuaXN3YXBGYWN0b3J5VjIiLCJ1bmlzd2FwUm91dGVyIiwiZGVsdGEiLCJyTFAiLCJjb3JlIiwid0NPUkUiLCJ3RVRIIiwid0JUQyIsImNCVEMiLCJjREFJIiwiTFNXIiwiYWRkcmVzc0RlY2ltYWxzTWFwIiwidG9rZW5NYXAiLCJuYW1lIiwiZnJpZW5kbHlOYW1lIiwiZGVjaW1hbHMiLCJwYWlySW5mb01hcCIsInJlc2VydmUwIiwicmVzZXJ2ZTEiLCJXRVRIIiwic3VwcGx5U2NhbGUiLCJ1bml0IiwidG9rZW5OYW1lIiwiZnJpZW5kbHlUb2tlbk5hbWUiLCJhZGRyZXNzIiwicGlkIiwiZXRoZXJldW1TdGF0cyIsImFwcHJveGltYXRlZEJsb2NrUGVyRGF5IiwiYXBwcm94aW1hdGVkQmxvY2tQZXJZZWFyIiwiR2xvYmFsSG9va3NDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbEhvb2tzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZURlbHRhIiwibHN3U3RhdHMiLCJ1c2VMU1dTdGF0cyIsInN0YWtpbmciLCJ1c2VTdGFraW5nIiwicmViYXNpbmciLCJ1c2VSZWJhc2luZyIsInJscEluZm8iLCJ1c2VUb2tlbkJhbGFuY2UiLCJPYmplY3QiLCJmcmVlemUiLCJNb2RhbFByb3ZpZGVyIiwic2V0TW9kYWwiLCJfc2hvd01vZGFsIiwibW9kYWxUeXBlIiwicHJvcHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNob3dDb250cm9sbGVkTWVzc2FnZSIsInVuZGVmaW5lZCIsInNob3dNZXNzYWdlIiwic2hvd0Nvbm5lY3RXYWxsZXQiLCJzaG93RXJyb3IiLCJzaG93Q29uZmlybSIsImNsb3NlTW9kYWwiLCJTZXR0aW5nc0NvbnRleHQiLCJTZXR0aW5nc1Byb3ZpZGVycyIsInN0b3JlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImdldCIsImtleSIsInNldCIsInZhbHVlIiwibmV3U3RhdGUiLCJXYWxsZXRDb250ZXh0IiwiQ0hFQ0tfV0FMTEVUX1NUQVRVU19SRUZSRVNIX1JBVEUiLCJXYWxsZXRQcm92aWRlciIsImNvbm5lY3RvciIsInN0YXR1cyIsInVzZXJBY2NvdW50Iiwic2V0VXNlckFjY291bnQiLCJjaGVja0xvY2FsVXNlckFjY291bnQiLCJ1c2VDYWxsYmFjayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaENvbm5lY3Rpb24iLCJyZW1vdmVJdGVtIiwiaGFuZGxlQ29ubmVjdE1ldGFtYXNrIiwiaGFuZGxlQ29ubmVjdFdhbGxldENvbm5lY3QiLCJsb2NhbEFjY291bnQiLCJ0b1N0cmluZyIsInNldEl0ZW0iLCJjaGVja0Nvbm5lY3Rpb24iLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwid2FsbGV0UHJvdmlkZXIiLCJXZWIzQ29udGV4dCIsIndlYjMiLCJXZWIzUHJvdmlkZXIiLCJzZXRXZWIzIiwiV2ViM0NsaWVudCIsIllhbUNvbnRleHQiLCJ5YW0iLCJZYW1Qcm92aWRlciIsImV0aGVyZXVtIiwic2V0WWFtIiwiWWFtIiwiZGVmYXVsdEFjY291bnQiLCJkZWZhdWx0Q29uZmlybWF0aW9ucyIsImF1dG9HYXNNdWx0aXBsaWVyIiwidGVzdGluZyIsImRlZmF1bHRHYXMiLCJkZWZhdWx0R2FzUHJpY2UiLCJhY2NvdW50cyIsImV0aGVyZXVtTm9kZVRpbWVvdXQiLCJ3aW5kb3ciLCJnZXRUcmFuc2FjdGlvbkVycm9yIiwiZGVmYXVsdEVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJpbmRleE9mIiwic3BsaXQiLCJnZXRUb2tlbkFtb3VudCIsImFtb3VudCIsInByZWNpc2lvbiIsInRvTG9jYWxlU3RyaW5nIiwiaXNCaWdOdW1iZXIiLCJkaXYiLCJwb3ciLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJzZXRXYWxsZXRBd2FyZUludGVydmFsIiwiZm4iLCJ0aW1lb3V0IiwiZm5QcmFtcyIsImlzV2FsbGV0Q29ubmVjdGVkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImdldFRpbWVMZWZ0IiwiZW5kVGltZUluTWlsbGlzIiwibm93IiwibW9tZW50IiwiZnVsbHlWZXN0ZWRBdCIsImRpZmZUaW1lIiwiZHVyYXRpb24iLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwiZXhlY3V0ZVRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvblBhcmFtZXRlcnMiLCJzdWNjZXNzTWVzc2FnZSIsInN1Y2Nlc3NUaXRsZSIsImVycm9yVGl0bGUiLCJ0cmFuc2FjdGlvblRpdGxlIiwidHJhbnNhY3Rpb25Mb2FkaW5nTWVzc2FnZSIsInRyYW5zYWN0aW9uR2FzRXN0aW1hdGUiLCJlc3RpbWF0ZUdhcyIsInRyYW5zYWN0aW9uTWVzc2FnZSIsInNlbmQiLCJnYXMiLCJkZWNvZGVkRXJyb3IiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwicmVqZWN0IiwiUkVGUkVTSF9SQVRFIiwidXNlQ29yZVBhaXJCYWxhbmNlcyIsInBhaXJOYW1lIiwicGFpckluZm8iLCJ1c2VZYW0iLCJiYWxhbmNlcyIsInNldEJhbGFuY2VzIiwiYmFsYW5jZVRva2VuIiwiYmFsYW5jZUNvcmUiLCJ1cGRhdGUiLCJwYWlyIiwiY29udHJhY3RzIiwibWV0aG9kcyIsImdldFJlc2VydmVzIiwiY2FsbCIsImNsZWFySW50ZXJ2YWwiLCJOVU1fRVBPQ0giLCJkYXRhIiwic2V0RGF0YSIsImJhbGFuY2UiLCJ0b3RhbCIsIm1hdHVyZSIsImltbWF0dXJlIiwidmVzdGluZ0luUHJvZ3Jlc3MiLCJwZXJjZW50VmVzdGVkIiwidmVzdGluZ1RyYW5zYWN0aW9ucyIsInRvdGFsc0ZvcldhbGxldCIsImkiLCJ2ZXN0aW5nVHJhbnNhY3Rpb24iLCJ2ZXN0aW5nVHJhbnNhY3Rpb25EZXRhaWxzIiwiZ2V0VHJhbnNhY3Rpb25EZXRhaWwiLCJmdWxsVmVzdGluZ1RpbWVzdGFtcCIsInB1c2giLCJwZXJjZW50VmVzdGVkRTQiLCJob29rcyIsIlBSSUNFX1JFRlJFU0hfSU5URVJWQUwiLCJpbml0aWFsU3RhdGUiLCJ1c2VFVEhQcmljZSIsInVzZVdlYjMiLCJFVEhwcmljZSIsInNldEVUSFByaWNlIiwicHJpY2VPZlVTRFRpbkVUSCIsImV0aFVzZHRQYWlyIiwidG90YWxFdGhDb250cmlidXRlZCIsImFjY291bnRDb250cmlidXRlZEV0aCIsInRvdGFsV0VUSEVhcm1hcmtlZEZvclJlZmVycmVycyIsInJlZmVycmFsQm9udXNXRVRIIiwibGlxdWlkaXR5Q3JlZGl0cyIsImJhbGFuY2VPZiIsIl9hZGRyZXNzIiwibGlxdWlkaXR5Q29udHJpYnV0ZWRJbkVUSFVuaXRzTWFwcGluZyIsImxpcXVpZGl0eUNyZWRpdHNCTiIsImxpcXVpZGl0eUNyZWRpdHNNYXBwaW5nIiwicmxwUGVyQ3JlZGl0Qk4iLCJybHBQZXJDcmVkaXQiLCJjbGFpbWFibGVSbHBCTiIsIm11bHRpcGxpZWRCeSIsInNoaWZ0ZWRCeSIsImNsYWltYWJsZVJscCIsInJlYmFzaW5nSW5mbyIsInNldFJlYmFzaW5nSW5mbyIsIm5leHRSZWJhc2VUaW1lc3RhbXAiLCJEYXRlIiwidmF1bHRTdGF0cyIsInNldFZhdWx0U3RhdHMiLCJhbW91bnRUb3RhbCIsImFweSIsInNldFJscEluZm8iLCJhbW91bnRTdGFrZWQiLCJjbGFpbWFibGVFdGgiLCJjbGFpbWFibGVEZWx0YSIsInJld2FyZE11bHRpcGxpZXIiLCJkZWx0YUluZm8iLCJzZXREZWx0YUluZm8iLCJ0aW1lVW50aWxEb3duZ3JhZGUiLCJ3aXRoZHJhd2FsQ29udHJhY3RzIiwic2V0V2l0aGRyYXdhbENvbnRyYWN0cyIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJ0b1VwcGVyQ2FzZSIsImV0aCIsImdldEJhbGFuY2UiLCJ1c2VVc2VyQXBwcm92YWxPZkNvbnRyYWN0IiwiY29udHJhY3QiLCJ0b2tlbiIsInNldEFtb3VudCIsImFsbG93YW5jZSIsInVzZU1lbW8iLCJ1c2VXQlRDUHJpY2UiLCJldGhQcmljZSIsIldCVENQcmljZSIsInNldFdCVENQcmljZSIsInVwZGF0ZVdCVENQcmljZSIsInBhaXJSZXNlcnZlcyIsIldCVEN4V0VUSCIsInByaWNlT2ZXQlRDaW5XRVRIIiwicHJpY2VPZldCVENpblVTRFQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIlByb3ZpZGVycyIsIndhbGxldGNvbm5lY3QiLCJycGNVcmwiLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsIl9fYXBwV2l0aEkxOG4iLCJfX2kxOG5Db25maWciLCJpc0xvYWRlciIsInNraXBJbml0aWFsUHJvcHMiLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidGhlbiIsIm0iLCJ2ZXJpZnlBZGRyZXNzTWFwIiwidmFsdWVzIiwiZmluZER1cGxpY2F0ZWQiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJkdXBsaWNhdGVkQWRkcmVzcyIsImxlbmd0aCIsImpvaW4iLCJjb25zdHJ1Y3RvciIsImFwaVVybCIsIm9wdGlvbnMiLCJXZWIzIiwiQ29udHJhY3RzIiwicHJvdmlkZXIiLCJyZWFsUHJvdmlkZXIiLCJpbmNsdWRlcyIsInByb3ZpZGVycyIsIldlYnNvY2tldFByb3ZpZGVyIiwiSHR0cFByb3ZpZGVyIiwiQ29udHJhY3QiLCJVTklSb3V0ZXJKc29uIiwiVU5JRmFjdEpzb24iLCJDT1JFIiwiYWJpIiwiREVMVEEiLCJSTFAiLCJXQlRDIiwiV0VUSEpzb24iLCJDQlRDIiwiZXJjMjAiLCJFUkMyMEpzb24iLCJnZW5lcmljRXJjMjAiLCJnZW5lcmljVW5pc3dhcFBhaXIiLCJVTklQYWlySnNvbiIsImNvcmVDYnRjUGFpciIsImNvcmVXZXRoUGFpciIsImNEYWlXY29yZVBhaXIiLCJ3QnRjV2V0aFBhaXIiLCJfdXBkYXRlQ29udHJhY3RBZGRyZXNzZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EsbUNBQW1DO1FBQ25DO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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USxPQUExQixHQUFvQzFCLGtEQUFVLENBQUNKLFFBQS9DO0FBQ0EsU0FBSytULGFBQUwsQ0FBbUIxQixPQUFuQixDQUEyQnZRLE9BQTNCLEdBQXFDMUIsa0RBQVUsQ0FBQ0gsU0FBaEQ7QUFDQSxTQUFLK1QsWUFBTCxDQUFrQjNCLE9BQWxCLENBQTBCdlEsT0FBMUIsR0FBb0MxQixrREFBVSxDQUFDRCxRQUEvQztBQUNBLFNBQUsrTSxXQUFMLENBQWlCbUYsT0FBakIsQ0FBeUJ2USxPQUF6QixHQUFtQzFCLGtEQUFVLENBQUNGLE9BQTlDO0FBRUEsU0FBS2MsR0FBTCxDQUFTcVIsT0FBVCxDQUFpQnZRLE9BQWpCLEdBQTJCMUIsa0RBQVUsQ0FBQ1ksR0FBdEM7QUFDRDs7QUEzRG9CLEM7Ozs7Ozs7Ozs7OztBQ2Z2QjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL19hcHBcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgQnV0dG9uIH0gZnJvbSAnQHdpbmRtaWxsL3JlYWN0LXVpJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgeyBNb2RhbFR5cGUgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Nb2RhbC9Nb2RhbFByb3ZpZGVyJztcblxuY29uc3QgQ29uZmlybU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbENvbnRleHQgPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgY29uc3QgeyB0eXBlLCB0aXRsZSwgY29udGVudCwgb2tDb250ZW50LCBjYW5jZWxDb250ZW50LCBvbk9rLCBvbkNsb3NlIH0gPSBtb2RhbENvbnRleHQ7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17dHlwZSA9PT0gTW9kYWxUeXBlLkNvbmZpcm19XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdmlzaWJpbGl0eTogdHlwZSA9PT0gTW9kYWxUeXBlLkNvbmZpcm0gPyAnaW5oZXJpdCcgOiAnaGlkZGVuJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8TW9kYWxIZWFkZXIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBmb250LXd1bGthblwiPnt0aXRsZX08L01vZGFsSGVhZGVyPlxuICAgICAgPE1vZGFsQm9keT57Y29udGVudH08L01vZGFsQm9keT5cbiAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHRleHQtd2hpdGUgcm91bmRlZC1ub25lIHB5LTRcIiBvbkNsaWNrPXtvbk9rfT5cbiAgICAgICAgICB7b2tDb250ZW50fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHRleHQtd2hpdGUgcm91bmRlZC1ub25lIHB5LTRcIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICB7Y2FuY2VsQ29udGVudH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsRm9vdGVyPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtTW9kYWw7IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdAd2luZG1pbGwvcmVhY3QtdWknO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcbmltcG9ydCBtZXRhTWFza0xvZ28gZnJvbSAnLi4vLi4vcHVibGljL21ldGFtYXNrLWZveC5zdmcnO1xuaW1wb3J0IHdhbGxldENvbm5lY3RMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy93YWxsZXQtY29ubmVjdC5zdmcnO1xuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuaW1wb3J0IHsgTW9kYWxUeXBlIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvTW9kYWwvTW9kYWxQcm92aWRlcic7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vU3Bpbm5lcic7XG5cbmNvbnN0IENvbm5lY3Rpb25Nb2RhbCA9ICgpID0+IHtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKTtcbiAgY29uc3QgbW9kYWxDb250ZXh0ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xuXG4gIGNvbnN0IHsgdHlwZSwgb25PayB9ID0gbW9kYWxDb250ZXh0O1xuXG4gIGNvbnN0IFtzaG93SW5zdHJ1Y3Rpb25zLCBzZXRTaG93SW5zdHJ1Y3Rpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nvbm5lY3RpbmdUb01ldGFNYXNrLCBzZXRDb25uZWN0aW5nVG9NZXRhTWFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RNZXRhTWFzaywgc2V0TWV0YU1hc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgIGlmIChvbk9rKSBvbk9rKCk7XG4gICAgc2V0Q29ubmVjdGluZ1RvTWV0YU1hc2soZmFsc2UpO1xuICAgIHNldFNob3dJbnN0cnVjdGlvbnMoZmFsc2UpO1xuICAgIHNldE1ldGFNYXNrKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlICE9PSBNb2RhbFR5cGUuQ29ubmVjdFdhbGxldCkgcmV0dXJuXG5cbiAgICBpZiAod2FsbGV0LmFjY291bnQpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHdhbGxldC5lcnJvciAmJiBjb25uZWN0aW5nVG9NZXRhTWFzaykge1xuICAgICAgc2V0Q29ubmVjdGluZ1RvTWV0YU1hc2soZmFsc2UpO1xuICAgICAgc2V0U2hvd0luc3RydWN0aW9ucyh0cnVlKTtcbiAgICB9XG4gIH0sIFt0eXBlLCB3YWxsZXRdKTtcbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBpZiAoY29ubmVjdGluZ1RvTWV0YU1hc2spIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciBjbGFzc05hbWU9XCJtbC0yXCIgbGFiZWw9XCJDb25uZWN0aW5nLi4uXCIgLz5cbiAgICB9XG5cbiAgICByZXR1cm4gPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGluZ1RvTWV0YU1hc2sodHJ1ZSk7XG4gICAgICAgICAgICBzZXRNZXRhTWFzayh0cnVlKTtcbiAgICAgICAgICAgIHdhbGxldC5jb25uZWN0KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQteGwgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktNDAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWIgZmxleFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e21ldGFNYXNrTG9nb30gYWx0PVwibWV0YW1hc2tcIiBjbGFzc05hbWU9XCJtLWF1dG8gcHQtMiBwYi0yIHByLTJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG9cIj57dCgnbWV0YU1hc2snKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93SW5zdHJ1Y3Rpb25zICYmIHNlbGVjdE1ldGFNYXNrICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgdGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIENvbm5lY3Rpb24gdG8gTWV0YU1hc2sgZmFpbGVkXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCB0ZXh0LWp1c3RpZnlcIj5cbiAgICAgICAgICAgIElmIHlvdSdyZSBleHBlcmllbmNpbmcgaXNzdWVzIHdoZW4gY29ubmVjdGluZyB5b3VyIHdhbGxldCwgdHJ5IHRoZSBmb2xsb3dpbmcgdHJvdWJsZXNob290aW5nIHRpcHMuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSB0ZXh0LWxlZnRcIiA+XG4gICAgICAgICAgICB7aXNNb2JpbGUgPyA8PlxuICAgICAgICAgICAgICA8bGk+UmVsb2FkIHRoZSBwYWdlPC9saT5cbiAgICAgICAgICAgICAgPGxpPkJlIHN1cmUgdG8gYXBwcm92ZSB0aGUgY29ubmVjdGlvbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Db25uZWN0IHlvdXIgd2FsbGV0IHVzaW5nIFdhbGxldGNvbm5lY3Q8L2xpPlxuICAgICAgICAgICAgICA8bGk+Q2xvc2UgYWxsIGFwcHMgdGhhdCBtaWdodCB1c2UgV2FsbGV0Y29ubmVjdDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5VcGRhdGUgTWV0YW1hc2sgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uPC9saT5cbiAgICAgICAgICAgIDwvPiA6IDw+XG4gICAgICAgICAgICAgIDxsaT5SZWxvYWQgdGhlIHBhZ2U8L2xpPlxuICAgICAgICAgICAgICA8bGk+QmUgc3VyZSB0byBhcHByb3ZlIHRoZSBjb25uZWN0aW9uPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1ha2Ugc3VyZSBhbm90aGVyIHdhbGxldCBpcyBub3QgY29uZmxpY3Rpbmcgd2l0aCB0aGUgY29ubmVjdGlvbiBhcHByb3ZhbDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Db25uZWN0IHlvdXIgd2FsbGV0IHVzaW5nIFdhbGxldGNvbm5lY3Q8L2xpPlxuICAgICAgICAgICAgPC8+fVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshc2VsZWN0TWV0YU1hc2sgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1ibGFjayBtdC00XCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gd2FsbGV0LmNvbm5lY3QoJ3dhbGxldGNvbm5lY3QnKX0gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayB0ZXh0LXhsICBib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS00MDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWIgZmxleFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17d2FsbGV0Q29ubmVjdExvZ299IGFsdD1cIndhbGxldENvbm5lY3RcIiBjbGFzc05hbWU9XCJtLWF1dG8gYm9yZGVyLWIgcGItMiBwdC0yIHByLTJcIiBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBoZWlnaHQ6ICc1MXB4JyB9fSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0b1wiPnt0KCd3YWxsZXRDb25uZWN0Jyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17dHlwZSA9PT0gTW9kYWxUeXBlLkNvbm5lY3RXYWxsZXR9XG4gICAgICBvbkNsb3NlPXtjbG9zZX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHZpc2liaWxpdHk6IHR5cGUgPT09IE1vZGFsVHlwZS5Db25uZWN0V2FsbGV0ID8gJ2luaGVyaXQnIDogJ2hpZGRlbidcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE1vZGFsSGVhZGVyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgZm9udC13dWxrYW5cIj57dCgnY29ubmVjdFRvRGVsdGEnKX08L01vZGFsSGVhZGVyPlxuICAgICAgPE1vZGFsQm9keSBjbGFzc05hbWU9XCJwdC04IG0tYXV0byB0ZXh0LWJhc2VcIj5cbiAgICAgICAge3JlbmRlckNvbnRlbnQoKX1cbiAgICAgIDwvTW9kYWxCb2R5PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uTW9kYWw7XG4iLCJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgQnV0dG9uIH0gZnJvbSAnQHdpbmRtaWxsL3JlYWN0LXVpJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgeyBNb2RhbFR5cGUgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Nb2RhbC9Nb2RhbFByb3ZpZGVyJztcblxuY29uc3QgRXJyb3JNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgeyB0eXBlLCB0aXRsZSwgY29udGVudCwgb2tDb250ZW50LCBvbk9rLCBvbkNsb3NlIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17dHlwZSA9PT0gTW9kYWxUeXBlLkVycm9yfVxuICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHZpc2liaWxpdHk6IHR5cGUgPT09IE1vZGFsVHlwZS5FcnJvciA/ICdpbmhlcml0JyA6ICdoaWRkZW4nXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNb2RhbEhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGZvbnQtd3Vsa2FuXCI+e3RpdGxlfTwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxCb2R5Pntjb250ZW50fTwvTW9kYWxCb2R5PlxuICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gdGV4dC13aGl0ZSByb3VuZGVkLW5vbmUgcHktNFwiIG9uQ2xpY2s9e29uT2t9PlxuICAgICAgICAgIHtva0NvbnRlbnR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JNb2RhbDsiLCJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgQnV0dG9uIH0gZnJvbSAnQHdpbmRtaWxsL3JlYWN0LXVpJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgeyBNb2RhbFR5cGUgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Nb2RhbC9Nb2RhbFByb3ZpZGVyJztcblxuY29uc3QgTWVzc2FnZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCB7IHR5cGUsIHRpdGxlLCBjb250ZW50LCBva0NvbnRlbnQsIG9uT2ssIG9uQ2xvc2UgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgaXNPcGVuPXt0eXBlID09PSBNb2RhbFR5cGUuTWVzc2FnZX1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiB0eXBlID09PSBNb2RhbFR5cGUuTWVzc2FnZSA/ICdpbmhlcml0JyA6ICdoaWRkZW4nXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNb2RhbEhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGZvbnQtd3Vsa2FuXCI+e3RpdGxlfTwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxCb2R5Pntjb250ZW50fTwvTW9kYWxCb2R5PlxuICAgICAge29uT2sgJiYgb2tDb250ZW50ICYmIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvIHRleHQtd2hpdGUgcm91bmRlZC1ub25lIHB5LTRcIiBvbkNsaWNrPXtvbk9rfT5cbiAgICAgICAgICB7b2tDb250ZW50fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWxGb290ZXI+fVxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlTW9kYWw7IiwiaW1wb3J0IENvbmZpcm1Nb2RhbCBmcm9tICcuL0NvbmZpcm1Nb2RhbCc7XG5pbXBvcnQgQ29ubmVjdGlvbk1vZGFsIGZyb20gJy4vQ29ubmVjdGlvbk1vZGFsJztcbmltcG9ydCBFcnJvck1vZGFsIGZyb20gJy4vRXJyb3JNb2RhbCc7XG5pbXBvcnQgTWVzc2FnZU1vZGFsIGZyb20gJy4vTWVzc2FnZU1vZGFsJztcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxFcnJvck1vZGFsIC8+XG4gICAgICA8Q29uZmlybU1vZGFsIC8+XG4gICAgICA8TWVzc2FnZU1vZGFsIC8+XG4gICAgICA8Q29ubmVjdGlvbk1vZGFsIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRhaW5lcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxDb250YWluZXIgfSBmcm9tICcuL01vZGFsQ29udGFpbmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29ubmVjdGlvbk1vZGFsIH0gZnJvbSAnLi9Db25uZWN0aW9uTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb25maXJtTW9kYWwgfSBmcm9tICcuL0NvbmZpcm1Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVycm9yTW9kYWwgfSBmcm9tICcuL0Vycm9yTW9kYWwnO1xuIiwiY29uc3QgU3Bpbm5lciA9ICh7IGxhYmVsLCBjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgPHN2ZyBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gLW1sLTEgaC01IHctNSBtci0yIHRleHQtZ3JheS01MDAgaW5saW5lLWJsb2NrXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjRcIiAvPlxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCIgLz5cbiAgICA8L3N2Zz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZSB0b3AtcHggdGV4dC1sZ1wiPlxuICAgICAge2xhYmVsfVxuICAgIDwvZGl2PlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNwaW5uZXIgfSBmcm9tICcuL1NwaW5uZXInO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyoqXG4gKiBEZWZhdWx0IHRoZW1lIGNvcGllZCBmcm9tIHdpbmRtaWxsIHRvIGVhc2UgdGhlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gQWxlcnRcbiAgYWxlcnQ6IHtcbiAgICBiYXNlOiAncC00IHBsLTEyIHJlbGF0aXZlIHJvdW5kZWQtbGcgbGVhZGluZy01JyxcbiAgICB3aXRoQ2xvc2U6ICdwci0xMicsXG4gICAgc3VjY2VzczogJ2JnLWdyZWVuLTUwIHRleHQtZ3JlZW4tOTAwIGRhcms6YmctZ3JlZW4tNjAwIGRhcms6dGV4dC13aGl0ZScsXG4gICAgZGFuZ2VyOiAnYmctcmVkLTUwIHRleHQtcmVkLTkwMCBkYXJrOmJnLXJlZC02MDAgZGFyazp0ZXh0LXdoaXRlJyxcbiAgICB3YXJuaW5nOiAnYmcteWVsbG93LTUwIHRleHQteWVsbG93LTkwMCBkYXJrOmJnLXllbGxvdy02MDAgZGFyazp0ZXh0LXdoaXRlJyxcbiAgICBuZXV0cmFsOiAnYmctZ3JheS01MCB0ZXh0LWdyYXktODAwIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwJyxcbiAgICBpbmZvOiAnYmctYmx1ZS01MCB0ZXh0LWJsdWUtOTAwIGRhcms6YmctYmx1ZS02MDAgZGFyazp0ZXh0LXdoaXRlJyxcbiAgICBpY29uOiB7XG4gICAgICBiYXNlOiAnaC01IHctNScsXG4gICAgICBzdWNjZXNzOiAndGV4dC1ncmVlbi00MDAgZGFyazp0ZXh0LWdyZWVuLTMwMCcsXG4gICAgICBkYW5nZXI6ICd0ZXh0LXJlZC00MDAgZGFyazp0ZXh0LXJlZC0zMDAnLFxuICAgICAgd2FybmluZzogJ3RleHQteWVsbG93LTQwMCBkYXJrOnRleHQteWVsbG93LTEwMCcsXG4gICAgICBuZXV0cmFsOiAndGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDAnLFxuICAgICAgaW5mbzogJ3RleHQtYmx1ZS00MDAgZGFyazp0ZXh0LWJsdWUtMzAwJ1xuICAgIH1cbiAgfSxcbiAgLy8gUGFnaW5hdGlvblxuICBwYWdpbmF0aW9uOiB7XG4gICAgYmFzZTogJ2ZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgc206ZmxleC1yb3cgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAnXG4gIH0sXG4gIC8vIFRhYmxlRm9vdGVyXG4gIHRhYmxlRm9vdGVyOiB7XG4gICAgYmFzZTogJ3B4LTQgcHktMyBib3JkZXItdCBkYXJrOmJvcmRlci1ncmF5LTcwMCBiZy1ncmF5LTUwIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6YmctZ3JheS04MDAnXG4gIH0sXG4gIC8vIFRhYmxlUm93XG4gIHRhYmxlUm93OiB7XG4gICAgYmFzZTogJydcbiAgfSxcbiAgLy8gVGFibGVIZWFkZXJcbiAgdGFibGVIZWFkZXI6IHtcbiAgICBiYXNlOlxuICAgICAgJ3RleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlIHRleHQtbGVmdCB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBib3JkZXItYiBkYXJrOmJvcmRlci1ncmF5LTcwMCBiZy1ncmF5LTUwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmJnLWdyYXktODAwJ1xuICB9LFxuICAvLyBUYWJsZUNvbnRhaW5lclxuICB0YWJsZUNvbnRhaW5lcjoge1xuICAgIGJhc2U6ICd3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LXhzJ1xuICB9LFxuICAvLyBUYWJsZUNlbGxcbiAgdGFibGVDZWxsOiB7XG4gICAgYmFzZTogJ3B4LTQgcHktMydcbiAgfSxcbiAgLy8gVGFibGVCb2R5XG4gIHRhYmxlQm9keToge1xuICAgIGJhc2U6ICdiZy13aGl0ZSBkaXZpZGUteSBkYXJrOmRpdmlkZS1ncmF5LTcwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICB9LFxuICAvLyBEcm9wZG93bkl0ZW1cbiAgLy8gdGhpcyBpcyB0aGUgPGxpPiB0aGF0IGxpdmVzIGluc2lkZSB0aGUgRHJvcGRvd24gPHVsPlxuICAvLyB5b3UncmUgcHJvYmFibHkgbG9va2luZyBmb3IgdGhlIGRyb3Bkb3duSXRlbSBzdHlsZSBpbnNpZGUgYnV0dG9uXG4gIGRyb3Bkb3duSXRlbToge1xuICAgIGJhc2U6ICdtYi0yIGxhc3Q6bWItMCdcbiAgfSxcbiAgLy8gRHJvcGRvd25cbiAgZHJvcGRvd246IHtcbiAgICBiYXNlOlxuICAgICAgJ2Fic29sdXRlIHctNTYgcC0yIG10LTIgdGV4dC1ncmF5LTYwMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgc2hhZG93LW1kIG1pbi13LW1heC1jb250ZW50IGRhcms6dGV4dC1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBkYXJrOmJnLWdyYXktNzAwJyxcbiAgICBhbGlnbjoge1xuICAgICAgbGVmdDogJ2xlZnQtMCcsXG4gICAgICByaWdodDogJ3JpZ2h0LTAnXG4gICAgfVxuICB9LFxuICAvLyBBdmF0YXJcbiAgYXZhdGFyOiB7XG4gICAgYmFzZTogJ3JlbGF0aXZlIHJvdW5kZWQtZnVsbCBpbmxpbmUtYmxvY2snLFxuICAgIHNpemU6IHtcbiAgICAgIGxhcmdlOiAndy0xMCBoLTEwJyxcbiAgICAgIHJlZ3VsYXI6ICd3LTggaC04JyxcbiAgICAgIHNtYWxsOiAndy02IGgtNidcbiAgICB9XG4gIH0sXG4gIC8vIE1vZGFsXG4gIG1vZGFsOiB7XG4gICAgYmFzZTogJ3ctZnVsbCBweC02IHB5LTQgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtdC1sZyBkYXJrOmJnLWdyYXktODAwIHNtOnJvdW5kZWQtbGcgc206bS00IHNtOm1heC13LXhsJ1xuICB9LFxuICAvLyBNb2RhbEJvZHlcbiAgbW9kYWxCb2R5OiB7XG4gICAgYmFzZTogJ21iLTYgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgfSxcbiAgLy8gTW9kYWxGb290ZXJcbiAgbW9kYWxGb290ZXI6IHtcbiAgICBiYXNlOlxuICAgICAgJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB4LTYgcHktMyAtbXgtNiAtbWItNCBzcGFjZS15LTQgc206c3BhY2UteS0wIHNtOnNwYWNlLXgtNiBzbTpmbGV4LXJvdyBiZy13aGl0ZU1vcmUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIGRhcms6YmctZ3JheS04MDAnXG4gIH0sXG4gIC8vIE1vZGFsSGVhZGVyXG4gIG1vZGFsSGVhZGVyOiB7XG4gICAgYmFzZTogJ210LTQgbWItMiB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAnXG4gIH0sXG4gIC8vIEJhZGdlXG4gIGJhZGdlOiB7XG4gICAgYmFzZTogJ2lubGluZS1mbGV4IHB4LTIgdGV4dC14cyBmb250LW1lZGl1bSBsZWFkaW5nLTUgcm91bmRlZC1mdWxsJyxcbiAgICBzdWNjZXNzOiAndGV4dC1ncmVlbi03MDAgYmctZ3JlZW4tMTAwIGRhcms6YmctZ3JlZW4tNzAwIGRhcms6dGV4dC1ncmVlbi0xMDAnLFxuICAgIGRhbmdlcjogJ3RleHQtcmVkLTcwMCBiZy1yZWQtMTAwIGRhcms6dGV4dC1yZWQtMTAwIGRhcms6YmctcmVkLTcwMCcsXG4gICAgd2FybmluZzogJ3RleHQtb3JhbmdlLTcwMCBiZy1vcmFuZ2UtMTAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmJnLW9yYW5nZS02MDAnLFxuICAgIG5ldXRyYWw6ICd0ZXh0LWdyYXktNzAwIGJnLWdyYXktMTAwIGRhcms6dGV4dC1ncmF5LTEwMCBkYXJrOmJnLWdyYXktNzAwJyxcbiAgICBwcmltYXJ5OiAndGV4dC1wdXJwbGUtNzAwIGJnLXB1cnBsZS0xMDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6YmctcHVycGxlLTYwMCdcbiAgfSxcbiAgLy8gQmFja2Ryb3BcbiAgYmFja2Ryb3A6IHtcbiAgICBiYXNlOiAnZml4ZWQgaW5zZXQtMCB6LTQwIGZsZXggaXRlbXMtZW5kIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgc206aXRlbXMtY2VudGVyIHNtOmp1c3RpZnktY2VudGVyJ1xuICB9LFxuICAvLyBUZXh0YXJlYVxuICB0ZXh0YXJlYToge1xuICAgIGJhc2U6ICdibG9jayB3LWZ1bGwgdGV4dC1zbSBkYXJrOnRleHQtZ3JheS0zMDAgZm9ybS10ZXh0YXJlYSBmb2N1czpvdXRsaW5lLW5vbmUnLFxuICAgIGFjdGl2ZTpcbiAgICAgICdmb2N1czpib3JkZXItcHVycGxlLTQwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOmJvcmRlci1ncmF5LTYwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6c2hhZG93LW91dGxpbmUtZ3JheSBmb2N1czpzaGFkb3ctb3V0bGluZS1wdXJwbGUnLFxuICAgIGRpc2FibGVkOiAnY3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNTAgYmctZ3JheS0zMDAgZGFyazpiZy1ncmF5LTgwMCcsXG4gICAgdmFsaWQ6XG4gICAgICAnYm9yZGVyLWdyZWVuLTYwMCBkYXJrOmJnLWdyYXktNzAwIGZvY3VzOmJvcmRlci1ncmVlbi00MDAgZGFyazpmb2N1czpib3JkZXItZ3JlZW4tNDAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lLWdyZWVuIGRhcms6Zm9jdXM6c2hhZG93LW91dGxpbmUtZ3JlZW4nLFxuICAgIGludmFsaWQ6XG4gICAgICAnYm9yZGVyLXJlZC02MDAgZGFyazpiZy1ncmF5LTcwMCBmb2N1czpib3JkZXItcmVkLTQwMCBkYXJrOmZvY3VzOmJvcmRlci1yZWQtNDAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lLXJlZCBkYXJrOmZvY3VzOnNoYWRvdy1vdXRsaW5lLXJlZCdcbiAgfSxcbiAgLy8gU2VsZWN0XG4gIHNlbGVjdDoge1xuICAgIGJhc2U6ICdibG9jayB3LWZ1bGwgdGV4dC1zbSBkYXJrOnRleHQtZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lJyxcbiAgICBhY3RpdmU6XG4gICAgICAnZm9jdXM6Ym9yZGVyLXB1cnBsZS00MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBmb2N1czpzaGFkb3ctb3V0bGluZS1wdXJwbGUgZGFyazpmb2N1czpzaGFkb3ctb3V0bGluZS1ncmF5IGRhcms6Zm9jdXM6Ym9yZGVyLWdyYXktNjAwJyxcbiAgICBzZWxlY3Q6ICdmb3JtLXNlbGVjdCBsZWFkaW5nLTUnLFxuICAgIG11bHRpcGxlOiAnZm9ybS1tdWx0aXNlbGVjdCcsXG4gICAgZGlzYWJsZWQ6ICdjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS01MCBiZy1ncmF5LTMwMCBkYXJrOmJnLWdyYXktODAwJyxcbiAgICB2YWxpZDpcbiAgICAgICdib3JkZXItZ3JlZW4tNjAwIGRhcms6YmctZ3JheS03MDAgZm9jdXM6Ym9yZGVyLWdyZWVuLTQwMCBkYXJrOmZvY3VzOmJvcmRlci1ncmVlbi00MDAgZm9jdXM6c2hhZG93LW91dGxpbmUtZ3JlZW4gZGFyazpmb2N1czpzaGFkb3ctb3V0bGluZS1ncmVlbicsXG4gICAgaW52YWxpZDpcbiAgICAgICdib3JkZXItcmVkLTYwMCBkYXJrOmJnLWdyYXktNzAwIGZvY3VzOmJvcmRlci1yZWQtNDAwIGRhcms6Zm9jdXM6Ym9yZGVyLXJlZC00MDAgZm9jdXM6c2hhZG93LW91dGxpbmUtcmVkIGRhcms6Zm9jdXM6c2hhZG93LW91dGxpbmUtcmVkJ1xuICB9LFxuICAvLyBMYWJlbFxuICBsYWJlbDoge1xuICAgIGJhc2U6ICdibG9jayB0ZXh0LXNtIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNDAwJyxcbiAgICAvLyBjaGVjayBhbmQgcmFkaW8gZ2V0IHRoaXMgc2FtZSBzdHlsZVxuICAgIGNoZWNrOiAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyJyxcbiAgICBkaXNhYmxlZDogJ29wYWNpdHktNTAgY3Vyc29yLW5vdC1hbGxvd2VkJ1xuICB9LFxuICAvLyBJbnB1dFxuICBpbnB1dDoge1xuICAgIGJhc2U6ICdibG9jayB3LWZ1bGwgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazp0ZXh0LWdyYXktMzAwIGZvcm0taW5wdXQgbGVhZGluZy01JyxcbiAgICBhY3RpdmU6XG4gICAgICAnZm9jdXM6Ym9yZGVyLWdyYXktNDAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6Zm9jdXM6Ym9yZGVyLWdyYXktNjAwICBkYXJrOmJnLWdyYXktNzAwJyxcbiAgICBkaXNhYmxlZDogJ2N1cnNvci1ub3QtYWxsb3dlZCBvcGFjaXR5LTUwIGJnLWdyYXktMzAwIGRhcms6YmctZ3JheS04MDAnLFxuICAgIHZhbGlkOlxuICAgICAgJ2JvcmRlci1ncmVlbi02MDAgZGFyazpiZy1ncmF5LTcwMCBmb2N1czpib3JkZXItZ3JlZW4tNDAwIGRhcms6Zm9jdXM6Ym9yZGVyLWdyZWVuLTQwMCcsXG4gICAgaW52YWxpZDpcbiAgICAgICdib3JkZXItcmVkLTYwMCBkYXJrOmJnLWdyYXktNzAwIGZvY3VzOmJvcmRlci1yZWQtNDAwIGRhcms6Zm9jdXM6Ym9yZGVyLXJlZC00MDAnLFxuICAgIHJhZGlvOlxuICAgICAgJ3RleHQtZ3JheS02MDAgZm9ybS1yYWRpbyBmb2N1czpib3JkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lICcsXG4gICAgY2hlY2tib3g6XG4gICAgICAndGV4dC1ncmF5LTYwMCBmb3JtLWNoZWNrYm94IGZvY3VzOmJvcmRlci1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgJ1xuICB9LFxuICAvLyBIZWxwZXJUZXh0XG4gIGhlbHBlclRleHQ6IHtcbiAgICBiYXNlOiAndGV4dC14cycsXG4gICAgdmFsaWQ6ICd0ZXh0LWdyZWVuLTYwMCBkYXJrOnRleHQtZ3JlZW4tNDAwJyxcbiAgICBpbnZhbGlkOiAndGV4dC1yZWQtNjAwIGRhcms6dGV4dC1yZWQtNDAwJ1xuICB9LFxuICAvLyBDYXJkXG4gIGNhcmQ6IHtcbiAgICBiYXNlOiAnbWluLXctMCByb3VuZGVkLWxnIHNoYWRvdy14cyBvdmVyZmxvdy1oaWRkZW4nLFxuICAgIGRlZmF1bHQ6ICdiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwJ1xuICB9LFxuICBjYXJkQm9keToge1xuICAgIGJhc2U6ICdwLTQnXG4gIH0sXG4gIC8vIEJ1dHRvblxuICBidXR0b246IHtcbiAgICBiYXNlOlxuICAgICAgJ2FsaWduLWJvdHRvbSBiZy10cmFuc3BhcmVudCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbGVhZGluZy01IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBmb250LW1lZGl1bSBmb2N1czpvdXRsaW5lLW5vbmUnLFxuICAgIGJsb2NrOiAndy1mdWxsJyxcbiAgICBzaXplOiB7XG4gICAgICBsYXJnZXI6ICdweC0xMCBweS00JyxcbiAgICAgIGxhcmdlOiAncHgtNSBweS0zJyxcbiAgICAgIHJlZ3VsYXI6ICdweC00IHB5LTIgdGV4dC1zbScsXG4gICAgICBzbWFsbDogJ3B4LTMgcHktMSB0ZXh0LXNtJyxcbiAgICAgIGljb246IHtcbiAgICAgICAgbGFyZ2VyOiAncC00JyxcbiAgICAgICAgbGFyZ2U6ICdwLTMnLFxuICAgICAgICByZWd1bGFyOiAncC0yJyxcbiAgICAgICAgc21hbGw6ICdwLTInXG4gICAgICB9LFxuICAgICAgcGFnaW5hdGlvbjogJ3B4LTMgcHktMSB0ZXh0LXhzJ1xuICAgIH0sXG4gICAgLy8gc3R5bGVzIGFwcGxpZWQgdG8gdGhlIFNWRyBpY29uXG4gICAgaWNvbjoge1xuICAgICAgbGFyZ2VyOiAnaC01IHctNScsXG4gICAgICBsYXJnZTogJ2gtNSB3LTUnLFxuICAgICAgcmVndWxhcjogJ2gtNSB3LTUnLFxuICAgICAgc21hbGw6ICdoLTMgdy0zJyxcbiAgICAgIGxlZnQ6ICdtci0yIC1tbC0xJyxcbiAgICAgIHJpZ2h0OiAnbWwtMiAtbXItMSdcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIGJhc2U6ICd0ZXh0LXdoaXRlIGJnLWJsYWNrIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdXBwZXJjYXNlIHJvdW5kZWQtbm9uZScsXG4gICAgICBhY3RpdmU6ICcnLFxuICAgICAgZGlzYWJsZWQ6ICdvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCdcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGJhc2U6ICd0ZXh0LWdyYXktNjAwIGJvcmRlci1ncmF5LTMwMCBib3JkZXIgZGFyazp0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZScsXG4gICAgICBhY3RpdmU6XG4gICAgICAgICdhY3RpdmU6YmctdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLWdyYXktNTAwIGZvY3VzOmJvcmRlci1ncmF5LTUwMCBhY3RpdmU6dGV4dC1ncmF5LTUwMCBmb2N1czpzaGFkb3ctb3V0bGluZS1ncmF5JyxcbiAgICAgIGRpc2FibGVkOiAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQgYmctZ3JheS0zMDAnXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBiYXNlOiAndGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQnLFxuICAgICAgYWN0aXZlOlxuICAgICAgICAnYWN0aXZlOmJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lLWdyYXkgZGFyazpob3ZlcjpiZy1ncmF5LTUwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDAgZGFyazpob3ZlcjpiZy1vcGFjaXR5LTEwJyxcbiAgICAgIGRpc2FibGVkOiAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgfSxcbiAgICAvLyB0aGlzIGlzIHRoZSBidXR0b24gdGhhdCBsaXZlcyBpbnNpZGUgdGhlIERyb3Bkb3duSXRlbVxuICAgIGRyb3Bkb3duSXRlbToge1xuICAgICAgYmFzZTpcbiAgICAgICAgJ2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgcHgtMiBweS0xIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktODAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTIwMCdcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcy9iaWdudW1iZXInO1xuaW1wb3J0IHsgdmVyaWZ5QWRkcmVzc01hcCB9IGZyb20gJy4uL3V0aWxzJztcblxuQmlnTnVtYmVyLmNvbmZpZyh7XG4gIEVYUE9ORU5USUFMX0FUOiAxMDAwLFxuICBERUNJTUFMX1BMQUNFUzogODBcbn0pO1xuXG4vLyBUZW1wIGZsYWcsIHNldCB0byB0cnVlIHRvIHVzZSB0aGUgaGFyZGhhdCBub2RlIGFuZCBlbmRfbHN3IG9wZXJhdGlvbi5cbmV4cG9ydCBjb25zdCBURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IFNVQlRSQUNUX0dBU19MSU1JVCA9IDEwMDAwMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NPTkZJUk1BVElPTlMgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0FTID0gJzYwMDAwMDAnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0FTX1BSSUNFID0gJzEwMDAwMDAwMDAwMDAnO1xuZXhwb3J0IGNvbnN0IERBVEFfVU5BVkFJTEFCTEUgPSAnLS0nO1xuXG4vLyBUaGlzIHByb3ZpZGVyIGlzIG5vIGxvbmdlciB3b3JraW5nIGFuZCBmYWlscyB3aXRoIENPUlMuXG4vLyBleHBvcnQgY29uc3QgV0VCM19QUk9WSURFUl9VUkwgPSAnaHR0cHM6Ly9tYWlubmV0LmV0aC5hcmFnb24ubmV0d29yay8nO1xuXG4vLyBOb3Rlczpcbi8vIC0gSWYgb25lIGVuZHBvaW50IHN0b3Agd29ya2luZyBoZXJlIGlzIGEgbGlzdCBvZiBlbmRwb2ludCB0aGF0IGNhbiBiZSB1c2VkOiBodHRwczovL2V0aGVyZXVtbm9kZXMuY29tL1xuLy8gLSBFbmRwb2ludCBmb3VuZCBmcm9tIGluc3BlY3RpbmcgWEhSIHJlcXVlc3QgZnJvbSBtZXRhbWFzayBkZXYgbW9kZSBpbiBnb29nbGUgY2hyb21lLkNvdWxkIGNoYW5nZSBpblxuLy8gICB0aGUgZnV0dXIgYW5kIGJyZWFrOiBodHRwczovL21haW5uZXQuaW5mdXJhLmlvL3YzLzlhYTNkOTViM2JjNDQwZmE4OGVhMTJlYWE0NDU2MTYxXG5leHBvcnQgY29uc3QgV0VCM19QUk9WSURFUl9VUkwgPSAnaHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My85YWEzZDk1YjNiYzQ0MGZhODhlYTEyZWFhNDQ1NjE2MSc7XG5cbmV4cG9ydCBjb25zdCBwYWlyTmFtZXMgPSB7XG4gIGRlbHRhV2V0aDogJ2RlbHRhV2V0aCcsXG4gIGNvcmVDYnRjOiAnY29yZUNidGMnLFxuICBjb3JlV2V0aDogJ2NvcmVXZXRoJyxcbiAgY0RhaVdjb3JlOiAnY0RhaVdjb3JlJyxcbiAgZXRoVXNkdDogJ2V0aFVzZHQnLFxuICB3YnRjV2V0aDogJ3didGNXZXRoJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZHJlc3NNYXAgPSB7XG4gIC8vIFVuaXN3YXBcbiAgdW5pc3dhcEZhY3Rvcnk6ICcweGMwYTQ3ZEZlMDM0QjQwMEI0N2JEYUQ1RmVjRGEyNjIxZGU2YzRkOTUnLFxuICB1bmlzd2FwRmFjdG9yeVYyOiAnMHg1QzY5YkVlNzAxZWY4MTRhMkI2YTNFREQ0QjE2NTJDQjljYzVhQTZmJyxcbiAgdW5pc3dhcFJvdXRlcjogJzB4N2EyNTBkNTYzMEI0Y0Y1Mzk3MzlkRjJDNWRBY2I0YzY1OUYyNDg4RCcsXG5cbiAgLy8gUGFpcnNcbiAgZGVsdGFXZXRoOiAnMHgxNjlmMzFiNDQ1MmFGMTgxQ2E4ZDgwMmNFMThiNjJGQ0FkOEIxYjliJyxcbiAgY29yZUNidGM6ICcweDZmYWQ3ZDQ0NjQwYzVjZDAxMjBkZWVjMDMwMWU4Y2Y4NTBiZWNiNjgnLFxuICBjb3JlV2V0aDogJzB4MzJjZTdlNDhkZWJkY2NiZmUwY2QwMzdjYzg5NTI2ZTQzODJjYjgxYicsXG4gIGNEYWlXY29yZTogJzB4MDFBQzA4RTgyMTE4NWI2ZDg3RTY4YzY3RjlkYzc5QTg5ODg2ODhFQicsXG4gIGV0aFVzZHQ6ICcweDBkNGExMWQ1RUVhYUMyOEVDM0Y2MWQxMDBkYUY0ZDQwNDcxZjE4NTInLFxuICB3YnRjV2V0aDogJzB4YmIyYjgwMzhhMTY0MDE5NmZiZTNlMzg4MTZmM2U2N2NiYTcyZDk0MCcsXG5cbiAgLy8gVG9rZW5zXG4gIGRlbHRhOiAnMHg2ZjA4YzBiODA1Njk1QzRlYTFjZkM0NjczYzZDQzMxN0IxMjRmODMzJyxcbiAgckxQOiAnMHg3ZmM2NjUwMGM4NGE3NmFkN2U5YzkzNDM3YmZjNWFjMzNlMmRkYWU5JyxcbiAgY29yZTogJzB4NjIzNTllZDc1MDVlZmM2MWZmMWQ1NmZlZjgyMTU4Y2NhZmZhMjNkNycsXG4gIHdDT1JFOiAnMHgxN2I4YzFhOTJiNjZiMWNmMzA5MmM1ZDIyM2NiM2ExMjkwMjNiNjY5JyxcbiAgd0VUSDogJzB4YzAyYWFhMzliMjIzZmU4ZDBhMGU1YzRmMjdlYWQ5MDgzYzc1NmNjMicsXG4gIHdCVEM6ICcweDIyNjBmYWM1ZTU1NDJhNzczYWE0NGZiY2ZlZGY3YzE5M2JjMmM1OTknLFxuICBjQlRDOiAnMHg3YjU5ODJkY0FCMDU0QzM3NzUxNzc1OWQwRDJhM2E1RDAyNjE1QUI4JyxcbiAgY0RBSTogJzB4MDBhNjYxODkxNDMyNzliNmRiOWI3NzI5NDY4OGY0Nzk1OWYzNzY0MicsXG5cbiAgTFNXOiAnMHhkYUZDRTU2NzBkM0Y2N2RhOUEzQTQ0RkU2YmMzNjk5MmU1RTJiZWFCJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZHJlc3NEZWNpbWFsc01hcCA9IHt9O1xuYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAud0VUSF0gPSAxODtcbmFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLmNvcmVdID0gMTg7XG5hZGRyZXNzRGVjaW1hbHNNYXBbYWRkcmVzc01hcC53Q09SRV0gPSAxODtcbmFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndidGNXZXRoXSA9IDE4O1xuYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAud0JUQ10gPSA4O1xuYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAuY0RBSV0gPSAxODtcbmFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLmRlbHRhXSA9IDE4O1xuXG5leHBvcnQgY29uc3QgdG9rZW5NYXAgPSB7fTtcbnRva2VuTWFwW2FkZHJlc3NNYXAud0VUSF0gPSB7XG4gIG5hbWU6ICdXRVRIJyxcbiAgZnJpZW5kbHlOYW1lOiAnRVRIJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLndFVEhdXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC5yTFBdID0ge1xuICBuYW1lOiAnckxQJyxcbiAgZnJpZW5kbHlOYW1lOiAnckxQJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLnJMUF1cbn07XG50b2tlbk1hcFthZGRyZXNzTWFwLmRlbHRhXSA9IHtcbiAgbmFtZTogJ0RFTFRBJyxcbiAgZnJpZW5kbHlOYW1lOiAnREVMVEEnLFxuICBkZWNpbWFsczogYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAuZGVsdGFdXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC53QlRDXSA9IHtcbiAgbmFtZTogJ1dCVEMnLFxuICBmcmllbmRseU5hbWU6ICdCVEMnLFxuICBkZWNpbWFsczogYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAud0JUQ11cbn07XG50b2tlbk1hcFthZGRyZXNzTWFwLmNCVENdID0geyBuYW1lOiAnQ0JUQycsIC4uLnRva2VuTWFwW2FkZHJlc3NNYXAud0JUQ10gfTtcbnRva2VuTWFwW2FkZHJlc3NNYXAuY0RBSV0gPSB7XG4gIG5hbWU6ICdjREFJJyxcbiAgZnJpZW5kbHlOYW1lOiAnREFJJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLmNEQUldXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC53Q09SRV0gPSB7XG4gIG5hbWU6ICd3Q09SRScsXG4gIGZyaWVuZGx5TmFtZTogJ0NPUkUnLFxuICBkZWNpbWFsczogYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAud0NPUkVdXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC5jb3JlXSA9IHtcbiAgbmFtZTogJ0NPUkUnLFxuICBmcmllbmRseU5hbWU6ICdDT1JFJyxcbiAgZGVjaW1hbHM6IGFkZHJlc3NEZWNpbWFsc01hcFthZGRyZXNzTWFwLmNvcmVdXG59O1xudG9rZW5NYXBbYWRkcmVzc01hcC53YnRjV2V0aF0gPSB7XG4gIG5hbWU6ICdXQlRDLVdFVEggTFAnLFxuICBmcmllbmRseU5hbWU6ICdXQlRDLVdFVEggTFAnLFxuICBkZWNpbWFsczogYWRkcmVzc0RlY2ltYWxzTWFwW2FkZHJlc3NNYXAud2J0Y1dldGhdXG59O1xuXG5leHBvcnQgY29uc3QgcGFpckluZm9NYXAgPSB7fTtcbnBhaXJJbmZvTWFwW3BhaXJOYW1lcy5jb3JlV2V0aF0gPSB7XG4gIG5hbWU6ICdDT1JFL1dFVEgnLFxuICByZXNlcnZlMDogdG9rZW5NYXBbYWRkcmVzc01hcC5jb3JlXSxcbiAgcmVzZXJ2ZTE6IHRva2VuTWFwW2FkZHJlc3NNYXAuV0VUSF0sXG4gIHN1cHBseVNjYWxlOiAxLFxuICB1bml0OiAnTFAnLFxuICB0b2tlbk5hbWU6ICdXRVRIJyxcbiAgZnJpZW5kbHlUb2tlbk5hbWU6ICdFVEgnLFxuICBhZGRyZXNzOiBhZGRyZXNzTWFwLmNvcmVXZXRoLFxuICBwaWQ6IDBcbn07XG5cbmV4cG9ydCBjb25zdCBldGhlcmV1bVN0YXRzID0ge307XG5ldGhlcmV1bVN0YXRzLmFwcHJveGltYXRlZEJsb2NrUGVyRGF5ID0gNjY1MDtcbmV0aGVyZXVtU3RhdHMuYXBwcm94aW1hdGVkQmxvY2tQZXJZZWFyID0gZXRoZXJldW1TdGF0cy5hcHByb3hpbWF0ZWRCbG9ja1BlckRheSAqIDM2NTtcblxuLy8gVE9ETzogRW5hYmxlIGJhY2tcbi8vIHZlcmlmeUFkZHJlc3NNYXAoYWRkcmVzc01hcCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHbG9iYWxIb29rc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEhvb2tzQ29udGV4dDtcbiIsImltcG9ydCB7IHVzZURlbHRhLCB1c2VMU1dTdGF0cywgdXNlUmViYXNpbmcsIHVzZVN0YWtpbmcsIHVzZVRva2VuQmFsYW5jZSB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IEdsb2JhbEhvb2tzQ29udGV4dCBmcm9tICcuL0dsb2JhbEhvb2tzQ29udGV4dCc7XG5cbmNvbnN0IEdsb2JhbEhvb2tzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRlbHRhID0gdXNlRGVsdGEoKTtcbiAgY29uc3QgbHN3U3RhdHMgPSB1c2VMU1dTdGF0cygpO1xuICBjb25zdCBzdGFraW5nID0gdXNlU3Rha2luZygpO1xuICBjb25zdCByZWJhc2luZyA9IHVzZVJlYmFzaW5nKCk7XG5cbiAgLy8gVE9ETzogY2hhbmdlIHRvIHJscFxuICBjb25zdCBybHBJbmZvID0gdXNlVG9rZW5CYWxhbmNlKCdkZWx0YScpO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbEhvb2tzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZGVsdGEsXG4gICAgICAgIGxzd1N0YXRzLFxuICAgICAgICBybHBJbmZvLFxuICAgICAgICBzdGFraW5nLFxuICAgICAgICByZWJhc2luZ1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxIb29rc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxIb29rc1Byb3ZpZGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRleHQ7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi9Nb2RhbENvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgTW9kYWxUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE1lc3NhZ2U6ICdtZXNzYWdlJyxcbiAgRXJyb3I6ICdlcnJvcicsXG4gIENvbmZpcm06ICdjb25maXJtJyxcbiAgQ29ubmVjdFdhbGxldDogJ2Nvbm5lY3Qtd2FsbGV0J1xufSk7XG5cbmNvbnN0IE1vZGFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBfc2hvd01vZGFsID0gYXN5bmMgKG1vZGFsVHlwZSwgcHJvcHMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRNb2RhbCh7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB0eXBlOiBtb2RhbFR5cGUsXG4gICAgICAgIG9uT2s6ICgpID0+IHtcbiAgICAgICAgICBzZXRNb2RhbCgpO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICBzZXRNb2RhbCgpO1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93Q29udHJvbGxlZE1lc3NhZ2UgPSAodGl0bGUsIGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IHsgdGl0bGUsIGNvbnRlbnQgfTtcblxuICAgIHNldE1vZGFsKHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgdHlwZTogTW9kYWxUeXBlLk1lc3NhZ2UsXG4gICAgICBvbk9rOiB1bmRlZmluZWQsXG4gICAgICBvbkNsb3NlOiAoKSA9PiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgICBzZXRNb2RhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaG93TWVzc2FnZSA9IGFzeW5jICh0aXRsZSwgY29udGVudCwgb2tDb250ZW50ID0gJ09rJykgPT4ge1xuICAgIHJldHVybiBfc2hvd01vZGFsKE1vZGFsVHlwZS5NZXNzYWdlLCB7IHRpdGxlLCBjb250ZW50LCBva0NvbnRlbnQgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0Nvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIF9zaG93TW9kYWwoTW9kYWxUeXBlLkNvbm5lY3RXYWxsZXQsIHt9KTtcbiAgfTtcblxuICBjb25zdCBzaG93RXJyb3IgPSBhc3luYyAodGl0bGUsIGNvbnRlbnQsIG9rQ29udGVudCA9ICdPaycpID0+IHtcbiAgICByZXR1cm4gX3Nob3dNb2RhbChNb2RhbFR5cGUuRXJyb3IsIHsgdGl0bGUsIGNvbnRlbnQsIG9rQ29udGVudCB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93Q29uZmlybSA9IGFzeW5jICh0aXRsZSwgY29udGVudCwgb2tDb250ZW50ID0gJ09rJywgY2FuY2VsQ29udGVudCA9ICdDYW5jZWwnKSA9PiB7XG4gICAgcmV0dXJuIF9zaG93TW9kYWwoTW9kYWxUeXBlLkNvbmZpcm0sIHsgdGl0bGUsIGNvbnRlbnQsIG9rQ29udGVudCwgY2FuY2VsQ29udGVudCB9KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICAuLi5tb2RhbCxcbiAgICAgICAgc2hvd01lc3NhZ2UsXG4gICAgICAgIHNob3dFcnJvcixcbiAgICAgICAgc2hvd0NvbmZpcm0sXG4gICAgICAgIHNob3dDb250cm9sbGVkTWVzc2FnZSxcbiAgICAgICAgc2hvd0Nvbm5lY3RXYWxsZXQsXG4gICAgICAgIGNsb3NlTW9kYWxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQcm92aWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNldHRpbmdzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NDb250ZXh0O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2V0dGluZ3NDb250ZXh0IGZyb20gJy4vU2V0dGluZ3NDb250ZXh0JztcblxuY29uc3QgU2V0dGluZ3NQcm92aWRlcnMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHN0b3JlID0ge307XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIHN0b3JlXG4gIH0pO1xuXG4gIGNvbnN0IGdldCA9IGtleSA9PiB7XG4gICAgcmV0dXJuIHN0b3JlW2tleV07XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBzZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH07XG5cbiAgICAgIG5ld1N0YXRlLnN0b3JlW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZXR0aW5nc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnZXQsXG4gICAgICAgIHNldFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TZXR0aW5nc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1Byb3ZpZGVycztcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdhbGxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldENvbnRleHQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IFdhbGxldENvbnRleHQgZnJvbSAnLi9XYWxsZXRDb250ZXh0JztcblxuY29uc3QgQ0hFQ0tfV0FMTEVUX1NUQVRVU19SRUZSRVNIX1JBVEUgPSAyICogMTAwMDtcblxuY29uc3QgV2FsbGV0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgYWNjb3VudCwgY29ubmVjdG9yLCBzdGF0dXMsIGNvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBbdXNlckFjY291bnQsIHNldFVzZXJBY2NvdW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgY2hlY2tMb2NhbFVzZXJBY2NvdW50ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY291bnQnKSkge1xuICAgICAgc2V0VXNlckFjY291bnQobnVsbCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hDb25uZWN0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdkaXNjb25uZWN0ZWQnKSB7XG4gICAgICBzZXRVc2VyQWNjb3VudChudWxsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2NvdW50Jyk7XG4gICAgfVxuICB9LCBbc3RhdHVzLCBzZXRVc2VyQWNjb3VudF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RNZXRhbWFzayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25uZWN0KCdpbmplY3RlZCcpO1xuICB9LCBbY29ubmVjdF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXRDb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbm5lY3QoJ3dhbGxldGNvbm5lY3QnKTtcbiAgfSwgW2Nvbm5lY3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrTG9jYWxVc2VyQWNjb3VudCgpO1xuICAgIGNvbnN0IGxvY2FsQWNjb3VudCA9IChhY2NvdW50ID8gYWNjb3VudC50b1N0cmluZygpIDogZmFsc2UpIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2NvdW50Jyk7XG4gICAgaWYgKGFjY291bnQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2NvdW50JywgbG9jYWxBY2NvdW50KTtcbiAgICAgIHNldFVzZXJBY2NvdW50KGxvY2FsQWNjb3VudCk7XG4gICAgfVxuICAgIGlmIChjb25uZWN0b3IpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3YWxsZXRQcm92aWRlcicsIGNvbm5lY3Rvcik7XG4gICAgfVxuICB9LCBbYWNjb3VudCwgdXNlckFjY291bnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrQ29ubmVjdGlvbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmV0Y2hDb25uZWN0aW9uKCk7XG4gICAgfSwgQ0hFQ0tfV0FMTEVUX1NUQVRVU19SRUZSRVNIX1JBVEUpO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChjaGVja0Nvbm5lY3Rpb24pO1xuICB9LCBbc3RhdHVzLCBmZXRjaENvbm5lY3Rpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWNjb3VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2NvdW50Jyk7XG4gICAgY29uc3Qgd2FsbGV0UHJvdmlkZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2FsbGV0UHJvdmlkZXInKTtcbiAgICBpZiAoIWFjY291bnQgJiYgbG9jYWxBY2NvdW50KSB7XG4gICAgICBzZXRVc2VyQWNjb3VudChsb2NhbEFjY291bnQpO1xuICAgICAgaWYgKGxvY2FsQWNjb3VudCAmJiAod2FsbGV0UHJvdmlkZXIgPT09ICdtZXRhbWFzaycgfHwgd2FsbGV0UHJvdmlkZXIgPT09ICdpbmplY3RlZCcpKSB7XG4gICAgICAgIGhhbmRsZUNvbm5lY3RNZXRhbWFzaygpO1xuICAgICAgfVxuICAgICAgaWYgKGxvY2FsQWNjb3VudCAmJiB3YWxsZXRQcm92aWRlciA9PT0gJ3dhbGxldGNvbm5lY3QnKSB7XG4gICAgICAgIGhhbmRsZUNvbm5lY3RXYWxsZXRDb25uZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxXYWxsZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7fX0+e2NoaWxkcmVufTwvV2FsbGV0Q29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXRQcm92aWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdlYjNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHdlYjM6IHVuZGVmaW5lZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdlYjNDb250ZXh0O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXZWIzQ29udGV4dCBmcm9tICcuL1dlYjNDb250ZXh0JztcbmltcG9ydCB7IFdlYjNDbGllbnQgfSBmcm9tICcuLi8uLi93ZWIzJztcbmltcG9ydCB7IFdFQjNfUFJPVklERVJfVVJMIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuY29uc3QgV2ViM1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzQ2xpZW50KFdFQjNfUFJPVklERVJfVVJMKTtcbiAgICBzZXRXZWIzKHdlYjMpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxXZWIzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB3ZWIzIH19PntjaGlsZHJlbn08L1dlYjNDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYjNQcm92aWRlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFlhbUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgeWFtOiB1bmRlZmluZWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBZYW1Db250ZXh0O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IHsgWWFtIH0gZnJvbSAnLi4vLi4veWFtJztcbmltcG9ydCBZYW1Db250ZXh0IGZyb20gJy4vWWFtQ29udGV4dCc7XG5cbmNvbnN0IFlhbVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGV0aGVyZXVtIH0gPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW3lhbSwgc2V0WWFtXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IHlhbSA9IG5ldyBZYW0oZXRoZXJldW0sIHtcbiAgICAgICAgZGVmYXVsdEFjY291bnQ6ICcnLFxuICAgICAgICBkZWZhdWx0Q29uZmlybWF0aW9uczogMSxcbiAgICAgICAgYXV0b0dhc011bHRpcGxpZXI6IDEuNSxcbiAgICAgICAgdGVzdGluZzogZmFsc2UsXG4gICAgICAgIGRlZmF1bHRHYXM6ICc2MDAwMDAwJyxcbiAgICAgICAgZGVmYXVsdEdhc1ByaWNlOiAnMTAwMDAwMDAwMDAwMCcsXG4gICAgICAgIGFjY291bnRzOiBbXSxcbiAgICAgICAgZXRoZXJldW1Ob2RlVGltZW91dDogMTAwMDBcbiAgICAgIH0pO1xuICAgICAgc2V0WWFtKHlhbSk7XG5cbiAgICAgIC8vIFVzZWZ1bCBmb3IgdGVzdGluZyB1c2luZyBjaHJvbWUgZGV2dG9vbHMuXG4gICAgICB3aW5kb3cueWFtID0geWFtO1xuICAgIH1cbiAgfSwgW2V0aGVyZXVtXSk7XG5cbiAgcmV0dXJuIDxZYW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHlhbSB9fT57Y2hpbGRyZW59PC9ZYW1Db250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFlhbVByb3ZpZGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWIzQ29udGV4dCB9IGZyb20gJy4vV2ViMy9XZWIzQ29udGV4dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdlYjNQcm92aWRlciB9IGZyb20gJy4vV2ViMy9XZWIzUHJvdmlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXR0aW5nc1Byb3ZpZGVyIH0gZnJvbSAnLi9TZXR0aW5ncy9TZXR0aW5nc1Byb3ZpZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2xvYmFsSG9va3NQcm92aWRlciB9IGZyb20gJy4vR2xvYmFsSG9va3MvR2xvYmFsSG9va3NQcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdhbGxldENvbnRleHQgfSBmcm9tICcuL1dhbGxldC9XYWxsZXRDb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICcuL1dhbGxldC9XYWxsZXRQcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFlhbVByb3ZpZGVyIH0gZnJvbSAnLi9ZYW0vWWFtUHJvdmlkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbENvbnRleHQgfSBmcm9tICcuL01vZGFsL01vZGFsQ29udGV4dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsUHJvdmlkZXIgfSBmcm9tICcuL01vZGFsL01vZGFsUHJvdmlkZXInO1xuIiwiY29uc3QgZ2V0VHJhbnNhY3Rpb25FcnJvciA9IChlcnJvciwgZGVmYXVsdEVycm9yTWVzc2FnZSA9ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJykgPT4ge1xuICBpZiAoIWVycm9yLm1lc3NhZ2UgfHwgZXJyb3IubWVzc2FnZS5pbmRleE9mKCc6JykgPT09IC0xKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihkZWZhdWx0RXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIGxldCBtZXNzYWdlID0gKGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzonKVsxXSB8fCAnJykgKyAoZXJyb3IubWVzc2FnZS5zcGxpdCgnOicpWzJdIHx8ICcnKTtcbiAgbWVzc2FnZSA9IG1lc3NhZ2Uuc3BsaXQoJ3snKVswXSB8fCAnJztcblxuICByZXR1cm4gbmV3IEVycm9yKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRUcmFuc2FjdGlvbkVycm9yXG59O1xuIiwiaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IGdldFRva2VuQW1vdW50ID0gKGFtb3VudCwgZGVjaW1hbHMgPSAxOCwgcHJlY2lzaW9uID0gNCwgdG9Mb2NhbGVTdHJpbmcgPSB0cnVlKSA9PiB7XG4gIGlmIChhbW91bnQgPT09IERBVEFfVU5BVkFJTEFCTEUpIHtcbiAgICByZXR1cm4gYW1vdW50O1xuICB9XG5cbiAgaWYgKEJpZ051bWJlci5pc0JpZ051bWJlcihhbW91bnQpKSB7XG4gICAgYW1vdW50ID0gZGVjaW1hbHMgPyBhbW91bnQuZGl2KG5ldyBCaWdOdW1iZXIoMTApLnBvdyhkZWNpbWFscykpIDogYW1vdW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhbW91bnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYW1vdW50IC89IDEwICoqIGRlY2ltYWxzO1xuICB9XG5cbiAgaWYgKHByZWNpc2lvbikge1xuICAgIGFtb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KS50b0ZpeGVkKHByZWNpc2lvbik7XG4gIH0gZWxzZSB7XG4gICAgYW1vdW50ID0gcGFyc2VJbnQoYW1vdW50KTtcbiAgfVxuXG4gIGlmICh0b0xvY2FsZVN0cmluZykge1xuICAgIGFtb3VudCA9IGFtb3VudC50b0xvY2FsZVN0cmluZygpO1xuICB9XG5cbiAgaWYgKE51bWJlci5pc05hTihhbW91bnQpIHx8IChCaWdOdW1iZXIuaXNCaWdOdW1iZXIoYW1vdW50KSAmJiBhbW91bnQuaXNOYU4oKSkgfHwgYW1vdW50ID09PSBcIk5hTlwiKSB7XG4gICAgcmV0dXJuIERBVEFfVU5BVkFJTEFCTEU7XG4gIH1cblxuICByZXR1cm4gYW1vdW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRva2VuQW1vdW50XG59O1xuIiwiY29uc3Qgc2V0V2FsbGV0QXdhcmVJbnRlcnZhbCA9ICh3YWxsZXQsIGZuLCB0aW1lb3V0LCAuLi5mblByYW1zKSA9PiB7XG4gIGlmICghKCdzdGF0dXMnIGluIHdhbGxldCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhbGxldCBwYXJhbWV0ZXIgbXVzdCBiZSBhIHZhbGlkIHVzZS13YWxsZXQgaW5zdGFuY2UnKTtcbiAgfVxuXG4gIGNvbnN0IGlzV2FsbGV0Q29ubmVjdGVkID0gKCkgPT4ge1xuICAgIHJldHVybiB3YWxsZXQgJiYgd2FsbGV0LmFjY291bnQgJiYgd2FsbGV0LnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCc7XG4gIH07XG5cbiAgaWYgKGlzV2FsbGV0Q29ubmVjdGVkKCkpIHtcbiAgICBmbihmblByYW1zKTtcbiAgfVxuXG4gIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChpc1dhbGxldENvbm5lY3RlZCgpKSB7XG4gICAgICBmbihmblByYW1zKTtcbiAgICB9XG4gIH0sIHRpbWVvdXQpO1xuXG4gIHJldHVybiBpbnRlcnZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0V2FsbGV0QXdhcmVJbnRlcnZhbFxufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybWF0dGluZyB9IGZyb20gJy4vZm9ybWF0dGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhvb2tzIH0gZnJvbSAnLi9ob29rcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVycm9ycyB9IGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHJhbnNhY3Rpb25zIH0gZnJvbSAnLi90cmFuc2FjdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0aW1lIH0gZnJvbSAnLi90aW1lJztcbiIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgZ2V0VGltZUxlZnQgPSBlbmRUaW1lSW5NaWxsaXMgPT4ge1xuICBjb25zdCBub3cgPSBtb21lbnQubm93KCk7XG4gIGNvbnN0IGZ1bGx5VmVzdGVkQXQgPSBtb21lbnQoZW5kVGltZUluTWlsbGlzKTtcbiAgY29uc3QgZGlmZlRpbWUgPSBmdWxseVZlc3RlZEF0IC0gbm93O1xuICBjb25zdCBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihkaWZmVGltZSwgJ21pbGxpc2Vjb25kcycpO1xuXG4gIHJldHVybiB7XG4gICAgZGF5czogZHVyYXRpb24uZGF5cygpLFxuICAgIGhvdXJzOiBkdXJhdGlvbi5ob3VycygpLFxuICAgIG1pbnV0ZXM6IGR1cmF0aW9uLm1pbnV0ZXMoKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRpbWVMZWZ0XG59O1xuIiwiaW1wb3J0IGVycm9ycyBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJztcblxuY29uc3QgZXhlY3V0ZVRyYW5zYWN0aW9uID0gYXN5bmMgKFxuICBtb2RhbENvbnRleHQsXG4gIHRyYW5zYWN0aW9uLFxuICB0cmFuc2FjdGlvblBhcmFtZXRlcnMgPSB7fSxcbiAgc3VjY2Vzc01lc3NhZ2UsXG4gIHN1Y2Nlc3NUaXRsZSA9ICdTdWNjZXNzJyxcbiAgZXJyb3JUaXRsZSA9ICdFcnJvcicsXG4gIHRyYW5zYWN0aW9uVGl0bGUgPSAnVHJhbnNhY3Rpb24nLFxuICB0cmFuc2FjdGlvbkxvYWRpbmdNZXNzYWdlID0gJ1RyYW5zYWN0aW9uIGluIHByb2dyZXNzLi4uJykgPT4ge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25HYXNFc3RpbWF0ZSA9IGF3YWl0IHRyYW5zYWN0aW9uLmVzdGltYXRlR2FzKHRyYW5zYWN0aW9uUGFyYW1ldGVycywgdHJhbnNhY3Rpb25QYXJhbWV0ZXJzKTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbk1lc3NhZ2UgPSBtb2RhbENvbnRleHQuc2hvd0NvbnRyb2xsZWRNZXNzYWdlKHRyYW5zYWN0aW9uVGl0bGUsIDxTcGlubmVyIGxhYmVsPXt0cmFuc2FjdGlvbkxvYWRpbmdNZXNzYWdlfSAvPik7XG5cbiAgICBhd2FpdCB0cmFuc2FjdGlvbi5zZW5kKHtcbiAgICAgIC4uLnRyYW5zYWN0aW9uUGFyYW1ldGVycyxcbiAgICAgIGdhczogdHJhbnNhY3Rpb25HYXNFc3RpbWF0ZVxuICAgIH0pO1xuXG4gICAgdHJhbnNhY3Rpb25NZXNzYWdlLmNsb3NlKCk7XG4gICAgYXdhaXQgbW9kYWxDb250ZXh0LnNob3dNZXNzYWdlKHN1Y2Nlc3NUaXRsZSwgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e3N1Y2Nlc3NNZXNzYWdlfTwvZGl2Pik7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBkZWNvZGVkRXJyb3IgPSBlcnJvcnMuZ2V0VHJhbnNhY3Rpb25FcnJvcihlcnJvciwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJlZCcpO1xuICAgIGNvbnNvbGUubG9nKGRlY29kZWRFcnJvcik7XG4gICAgYXdhaXQgbW9kYWxDb250ZXh0LnNob3dFcnJvcihlcnJvclRpdGxlLCBkZWNvZGVkRXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV4ZWN1dGVUcmFuc2FjdGlvblxufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlV2ViMyB9IGZyb20gJy4vdXNlV2ViMyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVlhbSB9IGZyb20gJy4vdXNlWWFtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRVRIUHJpY2UgfSBmcm9tICcuL3VzZUVUSFByaWNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlV0JUQ1ByaWNlIH0gZnJvbSAnLi91c2VXQlRDUHJpY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUb2tlbkJhbGFuY2UgfSBmcm9tICcuL3VzZVRva2VuQmFsYW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVVzZXJBcHByb3ZhbE9mQ29udHJhY3QgfSBmcm9tICcuL3VzZVVzZXJBcHByb3ZhbE9mQ29udHJhY3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDb3JlUGFpckJhbGFuY2VzIH0gZnJvbSAnLi91c2VDb3JlUGFpckJhbGFuY2VzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTFNXU3RhdHMgfSBmcm9tICcuL3VzZUxTV1N0YXRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRGVsdGEgfSBmcm9tICcuL3VzZURlbHRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU3Rha2luZyB9IGZyb20gJy4vdXNlU3Rha2luZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVJlYmFzaW5nIH0gZnJvbSAnLi91c2VSZWJhc2luZyc7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSwgcGFpckluZm9NYXAgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVzZVlhbSBmcm9tICcuL3VzZVlhbSc7XG5cbmNvbnN0IFJFRlJFU0hfUkFURSA9IDYwICogMTAwMDtcblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHJlc2VydmUgYW1vdW50IG9mIGEgZ2l2ZW4gY29yZSBwYWlyLlxuICovXG5jb25zdCB1c2VDb3JlUGFpckJhbGFuY2VzID0gcGFpck5hbWUgPT4ge1xuICBjb25zdCBwYWlySW5mbyA9IHBhaXJJbmZvTWFwW3BhaXJOYW1lXTtcblxuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3QgW2JhbGFuY2VzLCBzZXRCYWxhbmNlc10gPSB1c2VTdGF0ZSh7XG4gICAgYmFsYW5jZVRva2VuOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIGJhbGFuY2VDb3JlOiBEQVRBX1VOQVZBSUxBQkxFXG4gIH0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBwYWlyID0geWFtLmNvbnRyYWN0c1twYWlyTmFtZV07XG4gICAgY29uc3QgYmFsYW5jZXMgPSBhd2FpdCBwYWlyLm1ldGhvZHMuZ2V0UmVzZXJ2ZXMoKS5jYWxsKCk7XG4gICAgbGV0IGJhbGFuY2VDb3JlO1xuICAgIGxldCBiYWxhbmNlVG9rZW47XG5cbiAgICBpZiAocGFpckluZm8ucmVzZXJ2ZTEuZnJpZW5kbHlOYW1lID09PSAnQ09SRScpIHtcbiAgICAgIGJhbGFuY2VDb3JlID0gYmFsYW5jZXMucmVzZXJ2ZTEgLyAxMCAqKiBwYWlySW5mby5yZXNlcnZlMS5kZWNpbWFscztcbiAgICAgIGJhbGFuY2VUb2tlbiA9IGJhbGFuY2VzLnJlc2VydmUwIC8gMTAgKiogcGFpckluZm8ucmVzZXJ2ZTAuZGVjaW1hbHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhbGFuY2VDb3JlID0gYmFsYW5jZXMucmVzZXJ2ZTAgLyAxMCAqKiBwYWlySW5mby5yZXNlcnZlMC5kZWNpbWFscztcbiAgICAgIGJhbGFuY2VUb2tlbiA9IGJhbGFuY2VzLnJlc2VydmUxIC8gMTAgKiogcGFpckluZm8ucmVzZXJ2ZTEuZGVjaW1hbHM7XG4gICAgfVxuXG4gICAgc2V0QmFsYW5jZXMoe1xuICAgICAgYmFsYW5jZVRva2VuLFxuICAgICAgYmFsYW5jZUNvcmVcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsO1xuXG4gICAgaWYgKHlhbSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZSwgUkVGUkVTSF9SQVRFKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt5YW1dKTtcblxuICByZXR1cm4gYmFsYW5jZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDb3JlUGFpckJhbGFuY2VzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSwgVEVNUF9FTkFCTEVfRU5EX0xTV19XRUIzIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgdXNlWWFtIGZyb20gJy4vdXNlWWFtJztcblxuY29uc3QgUkVGUkVTSF9SQVRFID0gMSAqIDYwICogMTAwMDtcbmNvbnN0IE5VTV9FUE9DSCA9IDE0O1xuXG5jb25zdCB1c2VEZWx0YSA9ICgpID0+IHtcbiAgY29uc3QgeWFtID0gdXNlWWFtKCk7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgYmFsYW5jZTogREFUQV9VTkFWQUlMQUJMRSxcbiAgICB0b3RhbDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBtYXR1cmU6IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgaW1tYXR1cmU6IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgZnVsbHlWZXN0ZWRBdDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICB2ZXN0aW5nSW5Qcm9ncmVzczogZmFsc2UsXG4gICAgcGVyY2VudFZlc3RlZDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICB2ZXN0aW5nVHJhbnNhY3Rpb25zOiBbXVxuICB9KTtcblxuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ5YW06IFwiLCB5YW0pO1xuICAgIGlmICgheWFtIHx8ICF3YWxsZXQ/LmFjY291bnQpIHJldHVybjtcblxuICAgIGNvbnN0IHRvdGFsc0ZvcldhbGxldCA9IGF3YWl0IHlhbS5jb250cmFjdHMuZGVsdGEubWV0aG9kcy50b3RhbHNGb3JXYWxsZXQod2FsbGV0LmFjY291bnQpLmNhbGwoKTtcbiAgICBjb25zdCB0b3RhbCA9IHRvdGFsc0ZvcldhbGxldC50b3RhbC50b1N0cmluZygpIC8gMWUxODtcbiAgICBjb25zdCBtYXR1cmUgPSB0b3RhbHNGb3JXYWxsZXQubWF0dXJlLnRvU3RyaW5nKCkgLyAxZTE4O1xuICAgIGNvbnN0IGltbWF0dXJlID0gdG90YWxzRm9yV2FsbGV0LmltbWF0dXJlLnRvU3RyaW5nKCkgLyAxZTE4O1xuICAgIGNvbnN0IHZlc3RpbmdUcmFuc2FjdGlvbnMgPSBbXTtcbiAgICBsZXQgZnVsbHlWZXN0ZWRBdCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9FUE9DSDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXN0aW5nVHJhbnNhY3Rpb24gPSBhd2FpdCB5YW0uY29udHJhY3RzLmRlbHRhLm1ldGhvZHMudmVzdGluZ1RyYW5zYWN0aW9ucyh3YWxsZXQuYWNjb3VudCwgaSkuY2FsbCgpO1xuICAgICAgY29uc3QgdmVzdGluZ1RyYW5zYWN0aW9uRGV0YWlscyA9IGF3YWl0IHlhbS5jb250cmFjdHMuZGVsdGEubWV0aG9kcy5nZXRUcmFuc2FjdGlvbkRldGFpbCh2ZXN0aW5nVHJhbnNhY3Rpb24pLmNhbGwoKTtcblxuICAgICAgaWYgKHZlc3RpbmdUcmFuc2FjdGlvbkRldGFpbHMuZnVsbFZlc3RpbmdUaW1lc3RhbXAgPiBmdWxseVZlc3RlZEF0KSB7XG4gICAgICAgIGZ1bGx5VmVzdGVkQXQgPSB2ZXN0aW5nVHJhbnNhY3Rpb25EZXRhaWxzLmZ1bGxWZXN0aW5nVGltZXN0YW1wO1xuICAgICAgfVxuXG4gICAgICB2ZXN0aW5nVHJhbnNhY3Rpb25zLnB1c2goe1xuICAgICAgICBhbW91bnQ6IHZlc3RpbmdUcmFuc2FjdGlvbkRldGFpbHMuYW1vdW50IC8gMWUxOCxcbiAgICAgICAgZnVsbFZlc3RpbmdUaW1lc3RhbXA6IHZlc3RpbmdUcmFuc2FjdGlvbkRldGFpbHMuZnVsbFZlc3RpbmdUaW1lc3RhbXAgKiAxMDAwLFxuICAgICAgICBpbW1hdHVyZTogdmVzdGluZ1RyYW5zYWN0aW9uRGV0YWlscy5pbW1hdHVyZSAvIDFlMTgsXG4gICAgICAgIG1hdHVyZTogdmVzdGluZ1RyYW5zYWN0aW9uRGV0YWlscy5tYXR1cmUgLyAxZTE4LFxuICAgICAgICBwZXJjZW50VmVzdGVkOiB2ZXN0aW5nVHJhbnNhY3Rpb25EZXRhaWxzLnBlcmNlbnRWZXN0ZWRFNCAvIDFlNCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldERhdGEoZGF0YSA9PiAoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHRvdGFsLFxuICAgICAgbWF0dXJlLFxuICAgICAgaW1tYXR1cmUsXG4gICAgICBwZXJjZW50VmVzdGVkOiBtYXR1cmUgLyB0b3RhbCxcbiAgICAgIGZ1bGx5VmVzdGVkQXQ6IGZ1bGx5VmVzdGVkQXQgKiAxMDAwLFxuICAgICAgdmVzdGluZ0luUHJvZ3Jlc3M6IGZ1bGx5VmVzdGVkQXQgKiAxMDAwID4gbW9tZW50Lm5vdygpLFxuICAgICAgdmVzdGluZ1RyYW5zYWN0aW9uc1xuICAgIH0pKVxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoVEVNUF9FTkFCTEVfRU5EX0xTV19XRUIzKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGNvbnN0IGludGVydmFsID0gaG9va3Muc2V0V2FsbGV0QXdhcmVJbnRlcnZhbCh3YWxsZXQsIHVwZGF0ZSwgUkVGUkVTSF9SQVRFKTtcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfSwgW3lhbV0pO1xuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlLFxuICAgIGRhdGFcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlbHRhO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERBVEFfVU5BVkFJTEFCTEUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJztcblxuY29uc3QgUFJJQ0VfUkVGUkVTSF9JTlRFUlZBTCA9IDMwICogMTAwMDtcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IERBVEFfVU5BVkFJTEFCTEU7XG5cbmNvbnN0IHVzZUVUSFByaWNlID0gKCkgPT4ge1xuICBjb25zdCB3ZWIzID0gdXNlV2ViMygpO1xuICBjb25zdCBbRVRIcHJpY2UsIHNldEVUSFByaWNlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGNvbnN0IHByaWNlT2ZVU0RUaW5FVEggPSBhd2FpdCB3ZWIzLmNvbnRyYWN0cy5ldGhVc2R0UGFpci5tZXRob2RzLmdldFJlc2VydmVzKCkuY2FsbCgpO1xuXG4gICAgc2V0RVRIUHJpY2UocGFyc2VGbG9hdChwcmljZU9mVVNEVGluRVRILnJlc2VydmUxIC8gMWU2IC8gKHByaWNlT2ZVU0RUaW5FVEgucmVzZXJ2ZTAgLyAxZTE4KSkpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWw7XG5cbiAgICBpZiAod2ViMykge1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZSwgUFJJQ0VfUkVGUkVTSF9JTlRFUlZBTCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbd2ViM10pO1xuXG4gIHJldHVybiBFVEhwcmljZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUVUSFByaWNlO1xuIiwiaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ3VzZS13YWxsZXQnO1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJztcbmltcG9ydCB7IERBVEFfVU5BVkFJTEFCTEUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHVzZVlhbSBmcm9tICcuL3VzZVlhbSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdG90YWxFdGhDb250cmlidXRlZDogREFUQV9VTkFWQUlMQUJMRSxcbiAgYWNjb3VudENvbnRyaWJ1dGVkRXRoOiBEQVRBX1VOQVZBSUxBQkxFLFxuICB0b3RhbFdFVEhFYXJtYXJrZWRGb3JSZWZlcnJlcnM6IERBVEFfVU5BVkFJTEFCTEUsXG4gIHJlZmVycmFsQm9udXNXRVRIOiBEQVRBX1VOQVZBSUxBQkxFLFxuICBsaXF1aWRpdHlDcmVkaXRzOiBEQVRBX1VOQVZBSUxBQkxFXG59O1xuXG5jb25zdCB1c2VMU1dTdGF0cyA9ICgpID0+IHtcbiAgY29uc3QgeWFtID0gdXNlWWFtKCk7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzKCk7XG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgdXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgZG9lc24ndCBuZWVkIHRvIGJlIGNvbm5lY3QgdG8gdGhlIGFjY291bnQncyB3YWxsZXRcbiAgICAgKi9cbiAgICBpZiAod2ViMykge1xuICAgICAgY29uc3QgdG90YWxFdGhDb250cmlidXRlZCA9IChhd2FpdCB3ZWIzLmNvbnRyYWN0cy53RVRILm1ldGhvZHMuYmFsYW5jZU9mKHdlYjMuY29udHJhY3RzLkxTVy5fYWRkcmVzcykuY2FsbCgpKSAvIDFlMTg7XG5cbiAgICAgIHNldERhdGEoZGF0YSA9PiAoe1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICB0b3RhbEV0aENvbnRyaWJ1dGVkXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBzZWN0aW9uIHJlcXVpcmUgdGhlIHVzZXIgdG8gYmUgY29ubmVjdGVkIHRvIGl0cyB3YWxsZXRcbiAgICAgKi9cbiAgICBpZiAoeWFtICYmIHdhbGxldD8uYWNjb3VudCkge1xuICAgICAgY29uc3QgeyBhY2NvdW50IH0gPSB3YWxsZXQ7XG5cbiAgICAgIGNvbnN0IGFjY291bnRDb250cmlidXRlZEV0aCA9IChhd2FpdCB5YW0uY29udHJhY3RzLkxTVy5tZXRob2RzLmxpcXVpZGl0eUNvbnRyaWJ1dGVkSW5FVEhVbml0c01hcHBpbmcoYWNjb3VudCkuY2FsbCgpKSAvIDFlMTg7XG4gICAgICBjb25zdCByZWZlcnJhbEJvbnVzV0VUSCA9IChhd2FpdCB5YW0uY29udHJhY3RzLkxTVy5tZXRob2RzLnJlZmVycmFsQm9udXNXRVRIKGFjY291bnQpLmNhbGwoKSkgLyAxZTE4O1xuICAgICAgY29uc3QgdG90YWxXRVRIRWFybWFya2VkRm9yUmVmZXJyZXJzID0gKGF3YWl0IHlhbS5jb250cmFjdHMuTFNXLm1ldGhvZHMudG90YWxXRVRIRWFybWFya2VkRm9yUmVmZXJyZXJzKCkuY2FsbCgpKSAvIDFlMTg7XG5cbiAgICAgIGNvbnN0IGxpcXVpZGl0eUNyZWRpdHNCTiA9IG5ldyBCaWdOdW1iZXIoYXdhaXQgeWFtLmNvbnRyYWN0cy5MU1cubWV0aG9kcy5saXF1aWRpdHlDcmVkaXRzTWFwcGluZyhhY2NvdW50KS5jYWxsKCkpO1xuICAgICAgY29uc3QgcmxwUGVyQ3JlZGl0Qk4gPSBuZXcgQmlnTnVtYmVyKGF3YWl0IHlhbS5jb250cmFjdHMuTFNXLm1ldGhvZHMucmxwUGVyQ3JlZGl0KCkuY2FsbCgpKTtcbiAgICAgIGNvbnN0IGNsYWltYWJsZVJscEJOID0gbGlxdWlkaXR5Q3JlZGl0c0JOLm11bHRpcGxpZWRCeShybHBQZXJDcmVkaXRCTikuc2hpZnRlZEJ5KC0xMik7XG5cbiAgICAgIGNvbnN0IGxpcXVpZGl0eUNyZWRpdHMgPSBsaXF1aWRpdHlDcmVkaXRzQk4udG9TdHJpbmcoKSAvIDFlMTg7XG4gICAgICBjb25zdCBjbGFpbWFibGVSbHAgPSBjbGFpbWFibGVSbHBCTi50b1N0cmluZygpIC8gMWUxODtcblxuICAgICAgc2V0RGF0YShkYXRhID0+ICh7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHJlZmVycmFsQm9udXNXRVRILFxuICAgICAgICBsaXF1aWRpdHlDcmVkaXRzLFxuICAgICAgICBhY2NvdW50Q29udHJpYnV0ZWRFdGgsXG4gICAgICAgIHRvdGFsV0VUSEVhcm1hcmtlZEZvclJlZmVycmVycyxcbiAgICAgICAgY2xhaW1hYmxlUmxwXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0sIFt5YW0sIHdlYjNdKTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBkYXRhXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMU1dTdGF0cztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2ViMyBmcm9tICcuL3VzZVdlYjMnO1xuaW1wb3J0IHsgREFUQV9VTkFWQUlMQUJMRSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IFJFRlJFU0hfUkFURSA9IDMwICogMTAwMDtcblxuY29uc3QgdXNlUmViYXNpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSB1c2VXZWIzKCk7XG5cbiAgLy8gSGVyZSBhcmUgdGhlIGdsb2JhbCB2YXVsdCdzIGluZm9ybWF0aW9uLCBkb2Vzbid0IGRlcGVuZCBvbiBjb25uZWN0ZWQgd2FsbGV0XG4gIGNvbnN0IFtyZWJhc2luZ0luZm8sIHNldFJlYmFzaW5nSW5mb10gPSB1c2VTdGF0ZSh7XG4gICAgbmV4dFJlYmFzZVRpbWVzdGFtcDogREFUQV9VTkFWQUlMQUJMRSxcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2ViMykgcmV0dXJuO1xuXG4gICAgLy8gVE9ETzogVXBkYXRlIGdsb2JhbCB2YXVsdCBpbmZvcywgZG9lc24ndCByZXF1aXJlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICAvLyBDYWxsIHdlYjMgdmF1bHQgdG8gZ2V0IHRoZSBpbmZvcy5cbiAgICBzZXRSZWJhc2luZ0luZm8oe1xuICAgICAgbmV4dFJlYmFzZVRpbWVzdGFtcDogRGF0ZS5ub3coKSArIDEyMzQ1Njc4OVxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRUaW1lb3V0KHVwZGF0ZSwgUkVGUkVTSF9SQVRFKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt3ZWIzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUsXG4gICAgcmViYXNpbmdJbmZvXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWJhc2luZztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICd1c2Utd2FsbGV0JztcbmltcG9ydCB1c2VZYW0gZnJvbSAnLi91c2VZYW0nO1xuaW1wb3J0IHVzZVdlYjMgZnJvbSAnLi91c2VXZWIzJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBhZGRyZXNzTWFwLCBEQVRBX1VOQVZBSUxBQkxFLCBURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMsIHRva2VuTWFwIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgUkVGUkVTSF9SQVRFID0gMzAgKiAxMDAwO1xuXG5jb25zdCB1c2VTdGFraW5nID0gKCkgPT4ge1xuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG5cbiAgLy8gSGVyZSBhcmUgdGhlIGdsb2JhbCB2YXVsdCdzIGluZm9ybWF0aW9uLCBkb2Vzbid0IGRlcGVuZCBvbiBjb25uZWN0ZWQgd2FsbGV0XG4gIGNvbnN0IFt2YXVsdFN0YXRzLCBzZXRWYXVsdFN0YXRzXSA9IHVzZVN0YXRlKHtcbiAgICBhbW91bnRUb3RhbDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBhcHk6IERBVEFfVU5BVkFJTEFCTEVcbiAgfSk7XG5cbiAgLy8gVE9ETzogRW50ZXIgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyJ3MgckxQIHN0YWtpbmdcbiAgY29uc3QgW3JscEluZm8sIHNldFJscEluZm9dID0gdXNlU3RhdGUoe1xuICAgIGFtb3VudFN0YWtlZDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBjbGFpbWFibGVFdGg6IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgY2xhaW1hYmxlRGVsdGE6IERBVEFfVU5BVkFJTEFCTEUsXG4gICAgcmV3YXJkTXVsdGlwbGllcjogREFUQV9VTkFWQUlMQUJMRVxuICB9KTtcblxuICAvLyBUT0RPOiBFbnRlciB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIncyBEZWx0YSBzdGFraW5nXG4gIGNvbnN0IFtkZWx0YUluZm8sIHNldERlbHRhSW5mb10gPSB1c2VTdGF0ZSh7XG4gICAgYW1vdW50U3Rha2VkOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIGNsYWltYWJsZUV0aDogREFUQV9VTkFWQUlMQUJMRSxcbiAgICBjbGFpbWFibGVEZWx0YTogREFUQV9VTkFWQUlMQUJMRSxcbiAgICByZXdhcmRNdWx0aXBsaWVyOiBEQVRBX1VOQVZBSUxBQkxFLFxuICAgIHRpbWVVbnRpbERvd25ncmFkZTogREFUQV9VTkFWQUlMQUJMRVxuICB9KTtcblxuICBjb25zdCBbd2l0aGRyYXdhbENvbnRyYWN0cywgc2V0V2l0aGRyYXdhbENvbnRyYWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgZGVjaW1hbHMgfSA9IHRva2VuTWFwW2FkZHJlc3NNYXAuZGVsdGFdO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXdlYjMpIHJldHVybjtcblxuICAgIC8vIFRPRE86IFVwZGF0ZSBnbG9iYWwgdmF1bHQgaW5mb3MsIGRvZXNuJ3QgcmVxdWlyZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAgLy8gQ2FsbCB3ZWIzIHZhdWx0IHRvIGdldCB0aGUgaW5mb3MuXG4gICAgc2V0VmF1bHRTdGF0cyh7XG4gICAgICBkZWx0YToge1xuICAgICAgICBhbW91bnRUb3RhbDogMTIzLFxuICAgICAgICBhcHk6IDk5OVxuICAgICAgfSxcbiAgICAgIHJMUDoge1xuICAgICAgICBhbW91bnRUb3RhbDogNjU0LFxuICAgICAgICBhcHk6IDYzNVxuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIHNlY3Rpb24gcmVxdWlyZXMgYSBjb25uZWN0ZWQgd2FsbGV0XG4gICAgICovXG4gICAgaWYgKCF5YW0gfHwgIXdhbGxldD8uYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgLy8gVE9ETzogUmVwbGFjZSB1c2luZyBERlYgY29udHJhY3RcbiAgICAvLyBjb25zdCBiYWxhbmNlID0gKGF3YWl0IHlhbS5jb250cmFjdHMuZGVsdGEubWV0aG9kcy5iYWxhbmNlT2Yod2FsbGV0LmFjY291bnQpLmNhbGwoKSkgLyAxMCAqKiBkZWNpbWFscztcbiAgICBzZXRSbHBJbmZvKHtcbiAgICAgIGFtb3VudFN0YWtlZDogMTIzLFxuICAgICAgY2xhaW1hYmxlRXRoOiA0NTYsXG4gICAgICBjbGFpbWFibGVEZWx0YTogNTY3LFxuICAgICAgcmV3YXJkTXVsdGlwbGllcjogMjBcbiAgICB9KTtcblxuICAgIHNldERlbHRhSW5mbyh7XG4gICAgICBhbW91bnRTdGFrZWQ6IDEyMyxcbiAgICAgIGNsYWltYWJsZUV0aDogNDU2LFxuICAgICAgY2xhaW1hYmxlRGVsdGE6IDg4OCxcbiAgICAgIHJld2FyZE11bHRpcGxpZXI6IDgsXG4gICAgICB0aW1lVW50aWxEb3duZ3JhZGU6IERhdGUubm93KCkgKyA4ODg4ODk4XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiByZW1vdmUgbW9jayBkYXRhIGFuZCB1c2UgcmVhbCBjb250cmFjdFxuICAgIHNldFdpdGhkcmF3YWxDb250cmFjdHMoW1xuICAgICAge1xuICAgICAgICBhbW91bnQ6IDExMCxcbiAgICAgICAgZnVsbFZlc3RpbmdUaW1lc3RhbXA6IERhdGUubm93KCkgKiAxMDAwLFxuICAgICAgICBpbW1hdHVyZTogMTAwLFxuICAgICAgICBtYXR1cmU6IDEwLFxuICAgICAgICBwZXJjZW50VmVzdGVkOiAwLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFtb3VudDogMjIwLFxuICAgICAgICBmdWxsVmVzdGluZ1RpbWVzdGFtcDogKERhdGUubm93KCkgKiAxMDAwKSAtIDk5OTk5LFxuICAgICAgICBpbW1hdHVyZTogMC44ICogMjIwLFxuICAgICAgICBtYXR1cmU6IDAuMiAqIDIyMCxcbiAgICAgICAgcGVyY2VudFZlc3RlZDogMC4yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbW91bnQ6IDM1NjgsXG4gICAgICAgIGZ1bGxWZXN0aW5nVGltZXN0YW1wOiAoRGF0ZS5ub3coKSAqIDEwMDApIC0gMTIzMjMsXG4gICAgICAgIGltbWF0dXJlOiAwLjUgKiAzNTY4LFxuICAgICAgICBtYXR1cmU6IDAuNSAqIDM1NjgsXG4gICAgICAgIHBlcmNlbnRWZXN0ZWQ6IDAuNVxuICAgICAgfVxuICAgIF0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKCk7IC8vIE5FRUQgREVMRVRFIEBtaWRhc1xuICAgIGlmIChURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRUaW1lb3V0KHVwZGF0ZSwgUkVGUkVTSF9SQVRFKTtcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBSRU1PVkUgd2hlbiB0aGUgbW9ja3MgYXJlIG5vIGxvbm1nZXIgbmVlZGVkXG4gICAgc2V0VmF1bHRTdGF0cyh7XG4gICAgICBkZWx0YToge1xuICAgICAgICBhbW91bnRUb3RhbDogMTIzLFxuICAgICAgICBhcHk6IDk5OVxuICAgICAgfSxcbiAgICAgIHJMUDoge1xuICAgICAgICBhbW91bnRUb3RhbDogNjU0LFxuICAgICAgICBhcHk6IDYzNVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRPRE86IFJFTU9WRSB3aGVuIHRoZSBtb2NrcyBhcmUgbm8gbG9ubWdlciBuZWVkZWRcbiAgICBzZXRXaXRoZHJhd2FsQ29udHJhY3RzKFtcbiAgICAgIHtcbiAgICAgICAgYW1vdW50OiAxMTAsXG4gICAgICAgIGZ1bGxWZXN0aW5nVGltZXN0YW1wOiBEYXRlLm5vdygpICogMTAwMCxcbiAgICAgICAgaW1tYXR1cmU6IDEwMCxcbiAgICAgICAgbWF0dXJlOiAxMCxcbiAgICAgICAgcGVyY2VudFZlc3RlZDogMC4xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbW91bnQ6IDIyMCxcbiAgICAgICAgZnVsbFZlc3RpbmdUaW1lc3RhbXA6IChEYXRlLm5vdygpICogMTAwMCkgLSA5OTk5OSxcbiAgICAgICAgaW1tYXR1cmU6IDAuOCAqIDIyMCxcbiAgICAgICAgbWF0dXJlOiAwLjIgKiAyMjAsXG4gICAgICAgIHBlcmNlbnRWZXN0ZWQ6IDAuMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYW1vdW50OiAzNTY4LFxuICAgICAgICBmdWxsVmVzdGluZ1RpbWVzdGFtcDogKERhdGUubm93KCkgKiAxMDAwKSAtIDEyMzIzLFxuICAgICAgICBpbW1hdHVyZTogMC41ICogMzU2OCxcbiAgICAgICAgbWF0dXJlOiAwLjUgKiAzNTY4LFxuICAgICAgICBwZXJjZW50VmVzdGVkOiAwLjVcbiAgICAgIH1cbiAgICBdKTtcblxuICB9LCBbeWFtLCB3ZWIzLCB3YWxsZXRdKTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBybHBJbmZvLFxuICAgIGRlbHRhSW5mbyxcbiAgICB2YXVsdFN0YXRzLFxuICAgIHdpdGhkcmF3YWxDb250cmFjdHNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0YWtpbmc7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgdXNlWWFtIGZyb20gJy4vdXNlWWFtJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBhZGRyZXNzTWFwLCBEQVRBX1VOQVZBSUxBQkxFLCB0b2tlbk1hcCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IFJFRlJFU0hfUkFURSA9IDMwICogMTAwMDtcblxuY29uc3QgdXNlVG9rZW5CYWxhbmNlID0gKHRva2VuTmFtZSkgPT4ge1xuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKERBVEFfVU5BVkFJTEFCTEUpO1xuICBjb25zdCB0b2tlbkFkZHJlc3MgPSBhZGRyZXNzTWFwW3Rva2VuTmFtZV07XG4gIGNvbnN0IGRlY2ltYWxzID0gdG9rZW5NYXBbdG9rZW5BZGRyZXNzXT8uZGVjaW1hbHMgfHwgMTg7XG5cbiAgY29uc3QgdXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICgheWFtIHx8ICF3YWxsZXQ/LmFjY291bnQpIHJldHVybjtcblxuICAgIGlmICh0b2tlbk5hbWU/LnRvVXBwZXJDYXNlKCkgPT09ICdFVEgnKSB7XG4gICAgICBjb25zdCBiYWxhbmNlID0gKGF3YWl0IHlhbS53ZWIzLmV0aC5nZXRCYWxhbmNlKHdhbGxldC5hY2NvdW50KSkudG9TdHJpbmcoKSAvIDEwICoqIGRlY2ltYWxzXG4gICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghKHRva2VuTmFtZSBpbiB5YW0uY29udHJhY3RzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJhbGFuY2UgPSAoYXdhaXQgeWFtLmNvbnRyYWN0c1t0b2tlbk5hbWVdLm1ldGhvZHMuYmFsYW5jZU9mKHdhbGxldC5hY2NvdW50KS5jYWxsKCkpIC8gMTAgKiogZGVjaW1hbHM7XG4gICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsO1xuXG4gICAgaWYgKHlhbSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBpbnRlcnZhbCA9IGhvb2tzLnNldFdhbGxldEF3YXJlSW50ZXJ2YWwod2FsbGV0LCB1cGRhdGUsIFJFRlJFU0hfUkFURSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbeWFtLCB3YWxsZXRdKTtcblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZSxcbiAgICBiYWxhbmNlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUb2tlbkJhbGFuY2U7XG4iLCJpbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCc7XG5pbXBvcnQgeyBEQVRBX1VOQVZBSUxBQkxFIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgdXNlWWFtIGZyb20gJy4vdXNlWWFtJztcblxuY29uc3QgUkVGUkVTSF9SQVRFID0gMTAgKiAxMDAwO1xuXG5jb25zdCB1c2VVc2VyQXBwcm92YWxPZkNvbnRyYWN0ID0gKGNvbnRyYWN0LCB0b2tlbikgPT4ge1xuICBjb25zdCB5YW0gPSB1c2VZYW0oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShEQVRBX1VOQVZBSUxBQkxFKTtcblxuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF5YW0gfHwgIXdhbGxldD8uYWNjb3VudCkgcmV0dXJuO1xuICAgIGlmICghY29udHJhY3QgfHwgIXRva2VuKSByZXR1cm47XG5cbiAgICBjb25zdCBhbW91bnQgPSBuZXcgQmlnTnVtYmVyKFxuICAgICAgYXdhaXQgeWFtLmNvbnRyYWN0c1t0b2tlbl0ubWV0aG9kcy5hbGxvd2FuY2Uod2FsbGV0LmFjY291bnQsIHlhbS5jb250cmFjdHNbY29udHJhY3RdLl9hZGRyZXNzKS5jYWxsKClcbiAgICApO1xuICAgIHNldEFtb3VudChhbW91bnQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsO1xuICAgIGlmICh5YW0pIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgaW50ZXJ2YWwgPSBob29rcy5zZXRXYWxsZXRBd2FyZUludGVydmFsKHdhbGxldCwgdXBkYXRlLCBSRUZSRVNIX1JBVEUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt5YW0sIHdhbGxldF0pO1xuXG4gIHJldHVybiB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBhbW91bnQsXG4gICAgICB1cGRhdGVcbiAgICB9KSxcbiAgICBbYW1vdW50XVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVXNlckFwcHJvdmFsT2ZDb250cmFjdDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEQVRBX1VOQVZBSUxBQkxFIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1c2VFVEhQcmljZSBmcm9tICcuL3VzZUVUSFByaWNlJztcbmltcG9ydCB1c2VXZWIzIGZyb20gJy4vdXNlV2ViMyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IERBVEFfVU5BVkFJTEFCTEU7XG5cbmNvbnN0IHVzZVdCVENQcmljZSA9ICgpID0+IHtcbiAgY29uc3Qgd2ViMyA9IHVzZVdlYjMoKTtcbiAgY29uc3QgZXRoUHJpY2UgPSB1c2VFVEhQcmljZSgpO1xuXG4gIGNvbnN0IFtXQlRDUHJpY2UsIHNldFdCVENQcmljZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlV0JUQ1ByaWNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGV0aFByaWNlICE9PSBEQVRBX1VOQVZBSUxBQkxFKSB7XG4gICAgICAgIGNvbnN0IHBhaXJSZXNlcnZlcyA9IGF3YWl0IHdlYjMuY29udHJhY3RzLldCVEN4V0VUSC5tZXRob2RzLmdldFJlc2VydmVzKCkuY2FsbCgpO1xuICAgICAgICBjb25zdCBwcmljZU9mV0JUQ2luV0VUSCA9IHBhcnNlRmxvYXQocGFpclJlc2VydmVzLnJlc2VydmUxIC8gMWUxOCAvIChwYWlyUmVzZXJ2ZXMucmVzZXJ2ZTAgLyAxZTgpKTtcbiAgICAgICAgY29uc3QgcHJpY2VPZldCVENpblVTRFQgPSBwcmljZU9mV0JUQ2luV0VUSCAqIGV0aFByaWNlO1xuICAgICAgICBzZXRXQlRDUHJpY2UocHJpY2VPZldCVENpblVTRFQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVXQlRDUHJpY2UoKTtcbiAgfSwgW2V0aFByaWNlXSk7XG5cbiAgcmV0dXJuIFdCVENQcmljZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdCVENQcmljZTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXZWIzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzJztcblxuY29uc3QgdXNlV2ViMyA9ICgpID0+IHtcbiAgY29uc3QgeyB3ZWIzIH0gPSB1c2VDb250ZXh0KFdlYjNDb250ZXh0KTtcbiAgcmV0dXJuIHdlYjM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VXZWIzO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZYW1Db250ZXh0IGZyb20gJy4uL2NvbnRleHRzL1lhbS9ZYW1Db250ZXh0JztcblxuY29uc3QgdXNlWWFtID0gKCkgPT4ge1xuICBjb25zdCB7IHlhbSB9ID0gdXNlQ29udGV4dChZYW1Db250ZXh0KTtcbiAgcmV0dXJuIHlhbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVlhbTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vZW4vY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0MVxuXHRdLFxuXHRcIi4vZW4vaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHQxXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL2xvY2FsZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2FwcFdpdGhJMThuIGZyb20gJ25leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuJ1xuICAgIFxuaW1wb3J0IHsgV2luZG1pbGwgfSBmcm9tICdAd2luZG1pbGwvcmVhY3QtdWknO1xuaW1wb3J0IHsgVXNlV2FsbGV0UHJvdmlkZXIgfSBmcm9tICd1c2Utd2FsbGV0JztcbmltcG9ydCB7IFdFQjNfUFJPVklERVJfVVJMIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFdhbGxldFByb3ZpZGVyLCBZYW1Qcm92aWRlciwgV2ViM1Byb3ZpZGVyLCBTZXR0aW5nc1Byb3ZpZGVyLCBHbG9iYWxIb29rc1Byb3ZpZGVyLCBNb2RhbFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2NvbmZpZy9kZWZhdWx0LnRoZW1lJztcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5cbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2luZG1pbGwgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxQcm92aWRlcnMgey4uLnBhZ2VQcm9wc30+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4gPE1vZGFsQ29udGFpbmVyIC8+XG4gICAgICA8L1Byb3ZpZGVycz5cbiAgICA8L1dpbmRtaWxsPlxuICApO1xufVxuXG5jb25zdCBQcm92aWRlcnMgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZXR0aW5nc1Byb3ZpZGVyPlxuICAgICAgICA8VXNlV2FsbGV0UHJvdmlkZXJcbiAgICAgICAgICBjaGFpbklkPXsxfVxuICAgICAgICAgIGNvbm5lY3RvcnM9e3tcbiAgICAgICAgICAgIHdhbGxldGNvbm5lY3Q6IHtcbiAgICAgICAgICAgICAgcnBjVXJsOiBXRUIzX1BST1ZJREVSX1VSTFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8V2FsbGV0UHJvdmlkZXI+XG4gICAgICAgICAgICA8WWFtUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxXZWIzUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICA8R2xvYmFsSG9va3NQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgPC9HbG9iYWxIb29rc1Byb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDwvTW9kYWxQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9XZWIzUHJvdmlkZXI+XG4gICAgICAgICAgICA8L1lhbVByb3ZpZGVyPlxuICAgICAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgICAgIDwvVXNlV2FsbGV0UHJvdmlkZXI+XG4gICAgICA8L1NldHRpbmdzUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyA9IEFwcDtcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQgX19hcHBXaXRoSTE4bihfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXywge1xuICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgaXNMb2FkZXI6IHRydWUsXG4gICAgICBza2lwSW5pdGlhbFByb3BzOiB0cnVlLFxuICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgfSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSnViMjVsSWlCb1pXbG5hSFE5SWpNeklpQjJhV1YzUW05NFBTSXdJREFnTXpVZ016TWlJSGRwWkhSb1BTSXpOU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4WnlCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlITjBjbTlyWlMxM2FXUjBhRDBpTGpJMUlqNDhjR0YwYUNCa1BTSnRNekl1T1RVNE1pQXhMVEV6TGpFek5ERWdPUzQzTVRneklESXVORFF5TkMwMUxqY3lOek14ZWlJZ1ptbHNiRDBpSTJVeE56Y3lOaUlnYzNSeWIydGxQU0lqWlRFM056STJJaTgrUEdjZ1ptbHNiRDBpSTJVeU56WXlOU0lnYzNSeWIydGxQU0lqWlRJM05qSTFJajQ4Y0dGMGFDQmtQU0p0TWk0Mk5qSTVOaUF4SURFekxqQXhOekUwSURrdU9EQTVMVEl1TXpJMU5DMDFMamd4T0RBeWVpSXZQanh3WVhSb0lHUTlJbTB5T0M0eU1qazFJREl6TGpVek16VXRNeTQwT1RRM0lEVXVNek00TmlBM0xqUTRNamtnTWk0d05qQXpJREl1TVRRek5pMDNMakk0TWpONklpOCtQSEJoZEdnZ1pEMGliVEV1TWpjeU9ERWdNak11TmpVd01TQXlMakV6TURVMUlEY3VNamd5TXlBM0xqUTJPVGswTFRJdU1EWXdNeTB6TGpRNE1UWTJMVFV1TXpNNE5ub2lMejQ4Y0dGMGFDQmtQU0p0TVRBdU5EY3dOaUF4TkM0MU1UUTVMVEl1TURjNE5pQXpMakV6TlRnZ055NDBNRFV1TXpNMk9TMHVNalEyT1MwM0xqazJPWG9pTHo0OGNHRjBhQ0JrUFNKdE1qVXVNVFV3TlNBeE5DNDFNVFE1TFRVdU1UVTNOUzAwTGpVNE56QTBMUzR4TmpnNElEZ3VNRFU1TnpRZ055NDBNRFE1TFM0ek16WTVlaUl2UGp4d1lYUm9JR1E5SW0weE1DNDROek16SURJNExqZzNNakVnTkM0ME9ERTVMVEl1TVRZek9TMHpMamcxT0RNdE15NHdNRFl5ZWlJdlBqeHdZWFJvSUdROUltMHlNQzR5TmpVNUlESTJMamN3T0RJZ05DNDBOamc1SURJdU1UWXpPUzB1TmpFd05TMDFMakUzTURGNklpOCtQQzluUGp4d1lYUm9JR1E5SW0weU5DNDNNelE0SURJNExqZzNNakV0TkM0ME5qa3RNaTR4TmpNNUxqTTJNemdnTWk0NU1ESTFMUzR3TXprZ01TNHlNekY2SWlCbWFXeHNQU0lqWkRWaVptSXlJaUJ6ZEhKdmEyVTlJaU5rTldKbVlqSWlMejQ4Y0dGMGFDQmtQU0p0TVRBdU9EY3pNaUF5T0M0NE56SXhJRFF1TVRVM01pQXhMamsyT1RZdExqQXlOaTB4TGpJek1TNHpOVEE0TFRJdU9UQXlOWG9pSUdacGJHdzlJaU5rTldKbVlqSWlJSE4wY205clpUMGlJMlExWW1aaU1pSXZQanh3WVhSb0lHUTlJbTB4TlM0eE1EZzBJREl4TGpjNE5ESXRNeTQzTVRVMUxURXVNRGc0TkNBeUxqWXlORE10TVM0eU1EVXhlaUlnWm1sc2JEMGlJekl6TXpRME55SWdjM1J5YjJ0bFBTSWpNak16TkRRM0lpOCtQSEJoZEdnZ1pEMGliVEl3TGpVeE1qWWdNakV1TnpnME1pQXhMakE1TVRNdE1pNHlPVE0xSURJdU5qTTNNaUF4TGpJd05URjZJaUJtYVd4c1BTSWpNak16TkRRM0lpQnpkSEp2YTJVOUlpTXlNek0wTkRjaUx6NDhjR0YwYUNCa1BTSnRNVEF1T0Rjek15QXlPQzQ0TnpJeExqWTBPVFV0TlM0ek16ZzJMVFF1TVRNeE1UY3VNVEUyTjNvaUlHWnBiR3c5SWlOall6WXlNamdpSUhOMGNtOXJaVDBpSTJOak5qSXlPQ0l2UGp4d1lYUm9JR1E5SW0weU5DNHdPVGd5SURJekxqVXpNelV1TmpNMk5pQTFMak16T0RZZ015NDBPVFEyTFRVdU1qSXhPWG9pSUdacGJHdzlJaU5qWXpZeU1qZ2lJSE4wY205clpUMGlJMk5qTmpJeU9DSXZQanh3WVhSb0lHUTlJbTB5Tnk0eU1qa3hJREUzTGpZMU1EY3ROeTQwTURVdU16TTJPUzQyT0RnMUlETXVOemsyTmlBeExqQTVNVE10TWk0eU9UTTFJREl1TmpNM01pQXhMakl3TlRGNklpQm1hV3hzUFNJalkyTTJNakk0SWlCemRISnZhMlU5SWlOall6WXlNamdpTHo0OGNHRjBhQ0JrUFNKdE1URXVNemt5T1NBeU1DNDJPVFU0SURJdU5qSTBNaTB4TGpJd05URWdNUzR3T1RFeklESXVNamt6TlM0Mk9EZzFMVE11TnprMk5pMDNMalF3TkRrMUxTNHpNelk1ZWlJZ1ptbHNiRDBpSTJOak5qSXlPQ0lnYzNSeWIydGxQU0lqWTJNMk1qSTRJaTgrUEhCaGRHZ2daRDBpYlRndU16a3lJREUzTGpZMU1EY2dNeTR4TURRNUlEWXVNRFV4TXkwdU1UQXpPUzB6TGpBd05qSjZJaUJtYVd4c1BTSWpaVEkzTlRJMUlpQnpkSEp2YTJVOUlpTmxNamMxTWpVaUx6NDhjR0YwYUNCa1BTSnRNalF1TWpReE1pQXlNQzQyT1RVNExTNHhNVFk1SURNdU1EQTJNaUF6TGpFd05Ea3ROaTR3TlRFemVpSWdabWxzYkQwaUkyVXlOelV5TlNJZ2MzUnliMnRsUFNJalpUSTNOVEkxSWk4K1BIQmhkR2dnWkQwaWJURTFMamM1TnlBeE55NDVPRGMyTFM0Mk9EZzJJRE11TnprMk55NDROekEwSURRdU5EZ3pNeTR4T1RRNUxUVXVPVEE0TjNvaUlHWnBiR3c5SWlObE1qYzFNalVpSUhOMGNtOXJaVDBpSTJVeU56VXlOU0l2UGp4d1lYUm9JR1E5SW0weE9TNDRNalF5SURFM0xqazROell0TGpNMk16Z2dNaTR6TlRnMExqRTRNVGtnTlM0NU1qRTJMamczTURRdE5DNDBPRE16ZWlJZ1ptbHNiRDBpSTJVeU56VXlOU0lnYzNSeWIydGxQU0lqWlRJM05USTFJaTgrUEhCaGRHZ2daRDBpYlRJd0xqVXhNamNnTWpFdU56ZzBNaTB1T0Rjd05DQTBMalE0TXpRdU5qSXpOaTQwTkRBMklETXVPRFU0TkMwekxqQXdOakl1TVRFMk9TMHpMakF3TmpKNklpQm1hV3hzUFNJalpqVTROREZtSWlCemRISnZhMlU5SWlObU5UZzBNV1lpTHo0OGNHRjBhQ0JrUFNKdE1URXVNemt5T1NBeU1DNDJPVFU0TGpFd05DQXpMakF3TmpJZ015NDROVGd6SURNdU1EQTJNaTQyTWpNMkxTNDBOREEyTFM0NE56QTBMVFF1TkRnek5Ib2lJR1pwYkd3OUlpTm1OVGcwTVdZaUlITjBjbTlyWlQwaUkyWTFPRFF4WmlJdlBqeHdZWFJvSUdROUltMHlNQzQxT1RBMklETXdMamcwTVRjdU1ETTVMVEV1TWpNeExTNHpNemM0TFM0eU9EVXhhQzAwTGprMk1qWnNMUzR6TWpRNExqSTROVEV1TURJMklERXVNak14TFRRdU1UVTNNaTB4TGprMk9UWWdNUzQwTlRVeElERXVNVGt5TVNBeUxqazBPRGtnTWk0d016UTBhRFV1TURVek5td3lMamsyTWkweUxqQXpORFFnTVM0ME5ESXRNUzR4T1RJeGVpSWdabWxzYkQwaUkyTXdZV001WkNJZ2MzUnliMnRsUFNJall6QmhZemxrSWk4K1BIQmhkR2dnWkQwaWJUSXdMakkyTlRrZ01qWXVOekE0TWkwdU5qSXpOaTB1TkRRd05tZ3RNeTQyTmpNMWJDMHVOakl6Tmk0ME5EQTJMUzR6TlRBNElESXVPVEF5TlM0ek1qUTRMUzR5T0RVeGFEUXVPVFl5Tm13dU16TTNPQzR5T0RVeGVpSWdabWxzYkQwaUl6RTJNVFl4TmlJZ2MzUnliMnRsUFNJak1UWXhOakUySWk4K1BIQmhkR2dnWkQwaWJUTXpMalV4TmpnZ01URXVNelV6TWlBeExqRXdORE10TlM0ek5qUTBOeTB4TGpZMk1qa3ROQzQ1T0RnM015MHhNaTQyT1RJeklEa3VNemswTkNBMExqZzRORFlnTkM0eE1qQTFJRFl1T0RrNE15QXlMakF3T0RVZ01TNDFNaTB4TGpjM05USXRMalkyTWpZdExqUTNPVFVnTVM0d05USXpMUzQ1TlRnNExTNDRNRFUwTFM0Mk1qSWdNUzR3TlRJekxTNDRNRE0wZWlJZ1ptbHNiRDBpSXpjMk0yVXhZU0lnYzNSeWIydGxQU0lqTnpZelpURmhJaTgrUEhCaGRHZ2daRDBpYlRFZ05TNDVPRGczTXlBeExqRXhOekkwSURVdU16WTBORGN0TGpjeE5EVXhMalV6TVRNZ01TNHdOalV5Tnk0NE1ETTBMUzQ0TURVME5TNDJNaklnTVM0d05USXlPQzQ1TlRnNExTNDJOakkxTlM0ME56azFJREV1TlRFNU9UY2dNUzQzTnpVeUlEWXVPRGs0TXpVdE1pNHdNRGcxSURRdU9EZzBOaTAwTGpFeU1EVXRNVEl1TmpreU16TXRPUzR6T1RRMGVpSWdabWxzYkQwaUl6YzJNMlV4WVNJZ2MzUnliMnRsUFNJak56WXpaVEZoSWk4K1BIQmhkR2dnWkQwaWJUTXlMakEwT0RrZ01UWXVOVEl6TkMwMkxqZzVPRE10TWk0d01EZzFJREl1TURjNE5pQXpMakV6TlRndE15NHhNRFE1SURZdU1EVXhNeUEwTGpFd05USXRMakExTVRsb05pNHhNekU0ZWlJZ1ptbHNiRDBpSTJZMU9EUXhaaUlnYzNSeWIydGxQU0lqWmpVNE5ERm1JaTgrUEhCaGRHZ2daRDBpYlRFd0xqUTNNRFVnTVRRdU5URTBPUzAyTGpnNU9ESTRJREl1TURBNE5TMHlMakk1T1RRMElEY3VNVEkyTjJnMkxqRXhPRGd6YkRRdU1UQTFNVGt1TURVeE9TMHpMakV3TkRnM0xUWXVNRFV4TTNvaUlHWnBiR3c5SWlObU5UZzBNV1lpSUhOMGNtOXJaVDBpSTJZMU9EUXhaaUl2UGp4d1lYUm9JR1E5SW0weE9TNDRNalF4SURFM0xqazROell1TkRReE55MDNMalU1TXpJZ01pNHdNREEzTFRVdU5EQXpOR2d0T0M0NU1URTViREl1TURBd05pQTFMalF3TXpRdU5EUXhOeUEzTGpVNU16SXVNVFk0T1NBeUxqTTROREl1TURFeklEVXVPRGsxT0dnekxqWTJNelZzTGpBeE15MDFMamc1TlRoNklpQm1hV3hzUFNJalpqVTROREZtSWlCemRISnZhMlU5SWlObU5UZzBNV1lpTHo0OEwyYytQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNekF3Y0hnaUlHaGxhV2RvZEQwaU1UZzFjSGdpSUhacFpYZENiM2c5SWpBZ01DQXpNREFnTVRnMUlpQjJaWEp6YVc5dVBTSXhMakVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZ29nSUNBZ1BDRXRMU0JIWlc1bGNtRjBiM0k2SUZOclpYUmphQ0EwT1M0eklDZzFNVEUyTnlrZ0xTQm9kSFJ3T2k4dmQzZDNMbUp2YUdWdGFXRnVZMjlrYVc1bkxtTnZiUzl6YTJWMFkyZ2dMUzArQ2lBZ0lDQThkR2wwYkdVK1YyRnNiR1YwUTI5dWJtVmpkRHd2ZEdsMGJHVStDaUFnSUNBOFpHVnpZejVEY21WaGRHVmtJSGRwZEdnZ1UydGxkR05vTGp3dlpHVnpZejRLSUNBZ0lEeGtaV1p6UGp3dlpHVm1jejRLSUNBZ0lEeG5JR2xrUFNKUVlXZGxMVEVpSUhOMGNtOXJaVDBpYm05dVpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGdvZ0lDQWdJQ0FnSUR4bklHbGtQU0ozWVd4c1pYUmpiMjV1WldOMExXeHZaMjh0WVd4MElpQm1hV3hzUFNJak0wSTVPVVpESWlCbWFXeHNMWEoxYkdVOUltNXZibnBsY204aVBnb2dJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTmpFdU5ETTROVFF5T1N3ek5pNHlOVFl5TmpFeUlFTXhNVEF1TXpRNU56WTNMQzB4TVM0Mk16RTVNRFV4SURFNE9TNDJOVEExTXl3dE1URXVOak14T1RBMU1TQXlNemd1TlRZeE56VXlMRE0yTGpJMU5qSTJNVElnVERJME5DNDBORGd5T1Rjc05ESXVNREU1TmpjNE5pQkRNalEyTGpnNU16ZzFPQ3cwTkM0ME1UUXdPRFkzSURJME5pNDRPVE00TlRnc05EZ3VNamsyTVRnNU9DQXlORFF1TkRRNE1qazNMRFV3TGpZNU1EVTVPU0JNTWpJMExqTXhNVFl3TWl3M01DNDBNRFl4TURJZ1F6SXlNeTR3T0RnNE1qRXNOekV1TmpBek16QTNNU0F5TWpFdU1UQTJNekF5TERjeExqWXdNek13TnpFZ01qRTVMamc0TXpVeU1TdzNNQzQwTURZeE1ESWdUREl4TVM0M09ESTVNemNzTmpJdU5EYzBPVFUwTVNCRE1UYzNMalkyTVRJME5Td3lPUzR3TmpZNU56STBJREV5TWk0ek16a3dOVEVzTWprdU1EWTJPVGN5TkNBNE9DNHlNVGN6TlRneUxEWXlMalEzTkRrMU5ERWdURGM1TGpVME1qTXdNaXczTUM0NU5qZzFOVGt5SUVNM09DNHpNVGsxTWpBMExEY3lMakUyTlRjMk16TWdOell1TXpNM01EQXhMRGN5TGpFMk5UYzJNek1nTnpVdU1URTBNakl4TkN3M01DNDVOamcxTlRreUlFdzFOQzQ1TnpjMU1qWTFMRFV4TGpJMU16QTFOakVnUXpVeUxqVXpNVGsyTlRNc05EZ3VPRFU0TmpRMk9TQTFNaTQxTXpFNU5qVXpMRFEwTGprM05qVTBNemtnTlRRdU9UYzNOVEkyTlN3ME1pNDFPREl4TXpVM0lFdzJNUzQwTXpnMU5ESTVMRE0yTGpJMU5qSTJNVElnV2lCTk1qZ3dMakl3TmpNek9TdzNOeTR3TXpBd01EWXhJRXd5T1RndU1USTRNRE0yTERrMExqVTNOamt3TXpFZ1F6TXdNQzQxTnpNMU9EVXNPVFl1T1RjeE15QXpNREF1TlRjek5UazVMREV3TUM0NE5UTXpPQ0F5T1RndU1USTRNRFkzTERFd015NHlORGMzT1RNZ1RESXhOeTR6TVRjNE9UWXNNVGd5TGpNMk9Ea3lOeUJETWpFMExqZzNNak0xTWl3eE9EUXVOell6TXpVeklESXhNQzQ1TURjek1UUXNNVGcwTGpjMk16TTRJREl3T0M0ME5qRTNNellzTVRneUxqTTJPRGs0T1NCRE1qQTRMalEyTVRjeU5pd3hPREl1TXpZNE9UYzVJREl3T0M0ME5qRTNNVFFzTVRneUxqTTJPRGsyTnlBeU1EZ3VORFl4TnpBMExERTRNaTR6TmpnNU5UY2dUREUxTVM0eE1EYzFOakVzTVRJMkxqSXhORE00TlNCRE1UVXdMalE1TmpFM01Td3hNalV1TmpFMU56Z3pJREUwT1M0MU1EUTVNVEVzTVRJMUxqWXhOVGM0TXlBeE5EZ3VPRGt6TlRJeExERXlOaTR5TVRRek9EVWdRekUwT0M0NE9UTTFNVGNzTVRJMkxqSXhORE00T1NBeE5EZ3VPRGt6TlRFMExERXlOaTR5TVRRek9UTWdNVFE0TGpnNU16VXhMREV5Tmk0eU1UUXpPVFlnVERreExqVTBNRFU0T0Rnc01UZ3lMak0yT0RreU55QkRPRGt1TURrMU1EVXlMREU0TkM0M05qTXpOVGtnT0RVdU1UTXdNREV6TXl3eE9EUXVOell6TXprNUlEZ3lMalk0TkRReU56WXNNVGd5TGpNMk9UQXhOQ0JET0RJdU5qZzBOREV6TXl3eE9ESXVNelk1SURneUxqWTRORE01T0N3eE9ESXVNelk0T1RnMklEZ3lMalk0TkRNNE1qY3NNVGd5TGpNMk9EazNJRXd4TGpnM01UazJNekkzTERFd015NHlORFkzT0RVZ1F5MHdMalUzTXpVNU5qa3pPU3d4TURBdU9EVXlNemMzSUMwd0xqVTNNelU1Tmprek9TdzVOaTQ1TnpBeU56TTFJREV1T0RjeE9UWXpNamNzT1RRdU5UYzFPRFkxTXlCTU1Ua3VOemt6TmpreU9TdzNOeTR3TWpnNU9UZ2dRekl5TGpJek9USTFNekVzTnpRdU5qTTBOVGc1T0NBeU5pNHlNRFF5T1RFNExEYzBMall6TkRVNE9UZ2dNamd1TmpRNU9EVXpNU3czTnk0d01qZzVPVGdnVERnMkxqQXdORGd6TURZc01UTXpMakU0TkRNMU5TQkRPRFl1TmpFMk1qSXhOQ3d4TXpNdU56Z3lPVFUzSURnM0xqWXdOelEzT1RZc01UTXpMamM0TWprMU55QTRPQzR5TVRnNE56QTBMREV6TXk0eE9EUXpOVFVnUXpnNExqSXhPRGczT1RZc01UTXpMakU0TkRNME5pQTRPQzR5TVRnNE9EYzRMREV6TXk0eE9EUXpNemdnT0RndU1qRTRPRGsyT1N3eE16TXVNVGcwTXpNeElFd3hORFV1TlRjeExEYzNMakF5T0RrNU9DQkRNVFE0TGpBeE5qVXdOU3czTkM0Mk16UTFNelEzSURFMU1TNDVPREUxTkRRc056UXVOak0wTkRRME9TQXhOVFF1TkRJM01UWXhMRGMzTGpBeU9EYzVPQ0JETVRVMExqUXlOekU1TlN3M055NHdNamc0TXpFMklERTFOQzQwTWpjeU1qa3NOemN1TURJNE9EWTFNeUF4TlRRdU5ESTNNall5TERjM0xqQXlPRGc1T1NCTU1qRXhMamM0TWpFMk5Dd3hNek11TVRnME16TXhJRU15TVRJdU16a3pOVFUwTERFek15NDNPREk1TXpJZ01qRXpMak00TkRneE5Dd3hNek11TnpneU9UTXlJREl4TXk0NU9UWXlNRFFzTVRNekxqRTRORE16TVNCTU1qY3hMak0xTURFM09TdzNOeTR3TXpBd01EWXhJRU15TnpNdU56azFOelFzTnpRdU5qTTFOVGsyT1NBeU56Y3VOell3TnpjNExEYzBMall6TlRVNU5qa2dNamd3TGpJd05qTXpPU3czTnk0d016QXdNRFl4SUZvaUlHbGtQU0pYWVd4c1pYUkRiMjV1WldOMElqNDhMM0JoZEdnK0NpQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ1BDOW5QZ284TDNOMlp6ND1cIiIsIi8qKlxuICogTWFrZSBzdXJlIHRoZXJlJ3Mgbm8gZHVwbGljYXRlZCBhZGRyZXNzIGluIHRoZSBhZGRyZXNzIG1hcC5cbiAqL1xuZXhwb3J0IGNvbnN0IHZlcmlmeUFkZHJlc3NNYXAgPSBhZGRyZXNzTWFwID0+IHtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhZGRyZXNzTWFwKTtcbiAgY29uc3QgZmluZER1cGxpY2F0ZWQgPSB2YWx1ZXMgPT4gdmFsdWVzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSBpbmRleCk7XG4gIGNvbnN0IGR1cGxpY2F0ZWRBZGRyZXNzID0gZmluZER1cGxpY2F0ZWQodmFsdWVzKTtcblxuICBpZiAoZHVwbGljYXRlZEFkZHJlc3MubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEdXBsaWNhdGVzIGZvdW5kIGluIHRoZSBhZGRyZXNzIG1hcDogJHtkdXBsaWNhdGVkQWRkcmVzcy5qb2luKCcsICcpfWApO1xuICB9XG59O1xuIiwiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBDb250cmFjdHMgfSBmcm9tICcuLi95YW0vY29udHJhY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViM0NsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGFwaVVybCwgb3B0aW9ucykge1xuICAgIHRoaXMud2ViMyA9IG5ldyBXZWIzKGFwaVVybCk7XG4gICAgdGhpcy5jb250cmFjdHMgPSBuZXcgQ29udHJhY3RzKHRoaXMud2ViMywgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgV2ViM0NsaWVudCB9IGZyb20gJy4vV2ViM0NsaWVudCc7XG4iLCJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IENvbnRyYWN0cyB9IGZyb20gJy4vY29udHJhY3RzJztcblxuZXhwb3J0IGNsYXNzIFlhbSB7XG4gIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJlYWxQcm92aWRlcjtcblxuICAgIGlmICh0eXBlb2YgcHJvdmlkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAocHJvdmlkZXIuaW5jbHVkZXMoJ3dzcycpKSB7XG4gICAgICAgIHJlYWxQcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5XZWJzb2NrZXRQcm92aWRlcihwcm92aWRlciwgb3B0aW9ucy5ldGhlcmV1bU5vZGVUaW1lb3V0IHx8IDEwMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlYWxQcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIocHJvdmlkZXIsIG9wdGlvbnMuZXRoZXJldW1Ob2RlVGltZW91dCB8fCAxMDAwMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlYWxQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgIH1cblxuICAgIHRoaXMud2ViMyA9IG5ldyBXZWIzKHJlYWxQcm92aWRlcik7XG4gICAgdGhpcy5jb250cmFjdHMgPSBuZXcgQ29udHJhY3RzKHRoaXMud2ViMywgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZHJlc3NNYXAsIFRFTVBfRU5BQkxFX0VORF9MU1dfV0VCMyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgRVJDMjBKc29uIGZyb20gJy4uL2NvbnRyYWN0cy9JRVJDMjAuanNvbic7XG5pbXBvcnQgV0VUSEpzb24gZnJvbSAnLi4vY29udHJhY3RzL3dldGguanNvbic7XG5pbXBvcnQgVU5JRmFjdEpzb24gZnJvbSAnLi4vY29udHJhY3RzL3VuaWZhY3QyLmpzb24nO1xuaW1wb3J0IFVOSVBhaXJKc29uIGZyb20gJy4uL2NvbnRyYWN0cy91bmkyLmpzb24nO1xuaW1wb3J0IFVOSVJvdXRlckpzb24gZnJvbSAnLi4vY29udHJhY3RzL3VuaVIuanNvbic7XG5pbXBvcnQgQ09SRSBmcm9tICcuLi9jb250cmFjdHMvQ09SRS5qc29uJztcbmltcG9ydCBXQlRDIGZyb20gJy4uL2NvbnRyYWN0cy9XQlRDLmpzb24nO1xuaW1wb3J0IENCVEMgZnJvbSAnLi4vY29udHJhY3RzL2NCVEMuanNvbic7XG5pbXBvcnQgY0RBSSBmcm9tICcuLi9jb250cmFjdHMvY0RBSS5qc29uJztcbmltcG9ydCB3Q09SRSBmcm9tICcuLi9jb250cmFjdHMvd0NPUkUuanNvbic7XG5pbXBvcnQgTFNXIGZyb20gJy4uL2NvbnRyYWN0cy9MU1cuanNvbic7XG5pbXBvcnQgREVMVEEgZnJvbSAnLi4vY29udHJhY3RzL0RFTFRBLmpzb24nO1xuaW1wb3J0IFJMUCBmcm9tICcuLi9jb250cmFjdHMvckxQLmpzb24nO1xuXG5leHBvcnQgY2xhc3MgQ29udHJhY3RzIHtcbiAgY29uc3RydWN0b3Iod2ViMykge1xuICAgIHRoaXMud2ViMyA9IHdlYjM7XG5cbiAgICAvLyBVbmlzd2FwXG4gICAgdGhpcy51bmlzd2FwUm91dGVyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFVOSVJvdXRlckpzb24pO1xuICAgIHRoaXMudW5pc3dhcEZhY3RvcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVU5JRmFjdEpzb24pO1xuXG4gICAgLy8gVG9rZW5zXG4gICAgdGhpcy5jb3JlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENPUkUuYWJpKTtcblxuICAgIGlmIChURU1QX0VOQUJMRV9FTkRfTFNXX1dFQjMpIHtcbiAgICAgIHRoaXMuZGVsdGEgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoREVMVEEuYWJpKTtcbiAgICB9XG5cbiAgICB0aGlzLnJMUCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChSTFAuYWJpKTtcbiAgICB0aGlzLndDT1JFID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KHdDT1JFLmFiaSk7XG4gICAgdGhpcy5jREFJID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNEQUkuYWJpKTtcbiAgICB0aGlzLndCVEMgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoV0JUQy5hYmkpO1xuICAgIHRoaXMud0VUSCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChXRVRISnNvbik7XG4gICAgdGhpcy5jQlRDID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENCVEMuYWJpKTtcbiAgICB0aGlzLmVyYzIwID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzIwSnNvbi5hYmkpO1xuICAgIHRoaXMuZ2VuZXJpY0VyYzIwID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENPUkUuYWJpKTsgLy8gQ09SRSBBQkkgaGFzIGRlY2ltYWxzIEVSQzIwIGRvZXNuJ3QuLi5cblxuICAgIC8vIFBhaXJzXG4gICAgdGhpcy5nZW5lcmljVW5pc3dhcFBhaXIgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVU5JUGFpckpzb24pO1xuICAgIHRoaXMuY29yZUNidGNQYWlyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFVOSVBhaXJKc29uKTtcbiAgICB0aGlzLmNvcmVXZXRoUGFpciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChVTklQYWlySnNvbik7XG4gICAgdGhpcy5jRGFpV2NvcmVQYWlyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFVOSVBhaXJKc29uKTtcbiAgICB0aGlzLndCdGNXZXRoUGFpciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChVTklQYWlySnNvbik7XG4gICAgdGhpcy5ldGhVc2R0UGFpciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChVTklQYWlySnNvbik7XG5cbiAgICB0aGlzLkxTVyA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChMU1cuYWJpKTtcblxuICAgIHRoaXMuX3VwZGF0ZUNvbnRyYWN0QWRkcmVzc2VzKCk7XG4gIH1cblxuICBfdXBkYXRlQ29udHJhY3RBZGRyZXNzZXMoKSB7XG4gICAgLy8gVG9rZW5zXG4gICAgdGhpcy53QlRDLm9wdGlvbnMuYWRkcmVzcyA9IGFkZHJlc3NNYXAud0JUQztcbiAgICB0aGlzLndFVEgub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC53RVRIO1xuICAgIHRoaXMuY29yZS5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNvcmU7XG4gICAgaWYgKFRFTVBfRU5BQkxFX0VORF9MU1dfV0VCMykge1xuICAgICAgdGhpcy5kZWx0YS5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmRlbHRhO1xuICAgIH1cbiAgICB0aGlzLnJMUC5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLnJMUDtcbiAgICB0aGlzLmNCVEMub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5jQlRDO1xuICAgIHRoaXMuY0RBSS5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNEQUk7XG5cbiAgICAvLyBQYWlyc1xuICAgIHRoaXMudW5pc3dhcEZhY3Rvcnkub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC51bmlzd2FwRmFjdG9yeVYyO1xuICAgIHRoaXMudW5pc3dhcFJvdXRlci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLnVuaXN3YXBSb3V0ZXI7XG4gICAgdGhpcy5jb3JlQ2J0Y1BhaXIub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5jb3JlQ2J0YztcbiAgICB0aGlzLmNvcmVXZXRoUGFpci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNvcmVXZXRoO1xuICAgIHRoaXMuY0RhaVdjb3JlUGFpci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLmNEYWlXY29yZTtcbiAgICB0aGlzLndCdGNXZXRoUGFpci5vcHRpb25zLmFkZHJlc3MgPSBhZGRyZXNzTWFwLndidGNXZXRoO1xuICAgIHRoaXMuZXRoVXNkdFBhaXIub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5ldGhVc2R0O1xuXG4gICAgdGhpcy5MU1cub3B0aW9ucy5hZGRyZXNzID0gYWRkcmVzc01hcC5MU1c7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFlhbSB9IGZyb20gJy4vWWFtJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3aW5kbWlsbC9yZWFjdC11aVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiaWdudW1iZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmlnbnVtYmVyLmpzL2JpZ251bWJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXdhbGxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=