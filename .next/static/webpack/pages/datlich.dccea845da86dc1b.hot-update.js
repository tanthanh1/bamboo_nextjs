"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/datlich",{

/***/ "./pages/datlich.js":
/*!**************************!*\
  !*** ./pages/datlich.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DatLich; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_doctor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/doctor */ \"./components/doctor.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// function Header({title}){\n//     return (<h1>{title ? title : 'Default Title '}</h1>)\n// }\nfunction DatLich() {\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showNavbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    // console.log('shownav',showNavbar.current)\n    // showNavbar.current=true\n    // console.log('shownav2',showNavbar.current)\n    // const navbar= document.getElementById('navbar')\n    // document.addEventListener('click', (event)=>{\n    //     if(showMenu  && !event.target.isEqualNode(navbar) && !navbar.contains(event.target) ){\n    //         console.log('Dang co menu')\n    //         setShowMenu(false)\n    //     }      \n    // })\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            showMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isActive: showMenu,\n                id: \"navbar\",\n                onShow: ()=>setShowMenu(false)\n            }, void 0, false, {\n                fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                lineNumber: 41,\n                columnNumber: 25\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: showMenu ? \"web_wrapper transform\" : \"web_wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        isActive: showMenu,\n                        onShow: ()=>setShowMenu(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_doctor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        name: \"CONTACT US\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Ready to schedule an appointment? Have questions about chiropractic care? Get in touch with us!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"Phone:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"037-915-1714\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"Zalo:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"037-915-1714\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"Email:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"holisticbamboo@gmail.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"Fanpage:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 29\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"https://www.facebook.com/people/Bamboo-Healthcare/100078737023605\",\n                                                        children: \"Cick Me -\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 33\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {}, void 0, false, {\n                                fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dougkringle/Documents/bamboo-healthcare-nextjs/pages/datlich.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DatLich, \"R20x1TmSGRDrZuVPOGP9s9Uc0q0=\");\n_c = DatLich;\nvar _c;\n$RefreshReg$(_c, \"DatLich\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXRsaWNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNUO0FBS2hDLDRCQUE0QjtBQUU1QiwyREFBMkQ7QUFFM0QsSUFBSTtBQUdZLFNBQVNPOztJQUVyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBRVQsK0NBQVFBLENBQUM7SUFFeEMsTUFBTVUsYUFBYVQsNkNBQU1BLENBQUM7SUFDMUIsNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQiw2Q0FBNkM7SUFDN0Msa0RBQWtEO0lBQ2xELGdEQUFnRDtJQUNoRCw2RkFBNkY7SUFDN0Ysc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsS0FBSztJQUNMLFNBQVNVO1FBQ0xDLFNBQVNDLFFBQU07SUFDbkI7SUFFQSxxQkFFSTs7WUFFS0wseUJBQVcsOERBQUNKLDBEQUFNQTtnQkFBQ1UsVUFBVU47Z0JBQVVPLElBQUc7Z0JBQVNDLFFBQVEsSUFBSVAsWUFBWTs7Ozs7dUJBQVk7MEJBSXhGLDhEQUFDUTtnQkFBSUMsV0FBV1YsV0FBVywwQkFBeUI7O2tDQU1wRCw4REFBQ0wsMERBQU1BO3dCQUFDVyxVQUFXTjt3QkFBVVEsUUFBUSxJQUFJUCxZQUFZOzs7Ozs7a0NBQ3JELDhEQUFDSiwwREFBTUE7d0JBQUNjLE1BQUs7OzBDQUNiLDhEQUFDQzswQ0FBRTs7Ozs7OzBDQUdDLDhEQUFDQzswQ0FDRyw0RUFBQ0M7O3NEQUNHLDhEQUFDQzs7OERBQ0csOERBQUNDOzhEQUFHOzs7Ozs7OERBQ0osOERBQUNBOzhEQUFHOzs7Ozs7Ozs7Ozs7c0RBRVIsOERBQUNEOzs4REFDRyw4REFBQ0M7OERBQUc7Ozs7Ozs4REFDSiw4REFBQ0E7OERBQUc7Ozs7Ozs7Ozs7OztzREFFUiw4REFBQ0Q7OzhEQUNHLDhEQUFDQzs4REFBRzs7Ozs7OzhEQUNKLDhEQUFDQTs4REFBRzs7Ozs7Ozs7Ozs7O3NEQUVSLDhEQUFDRDs7OERBQ0csOERBQUNDOzhEQUFHOzs7Ozs7OERBQ0osOERBQUNBOzhEQUFHLDRFQUFDQzt3REFBRUMsTUFBSztrRUFBb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTzVGLDhEQUFDQzs7Ozs7Ozs7Ozs7a0NBVUwsOERBQUN6QiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7QUFLbkI7R0E1RXlCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXRsaWNoLmpzP2ZiMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSx1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xuaW1wb3J0IERvY3RvciBmcm9tICcuLi9jb21wb25lbnRzL2RvY3RvcidcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5cblxuXG5cbi8vIGZ1bmN0aW9uIEhlYWRlcih7dGl0bGV9KXtcbiAgIFxuLy8gICAgIHJldHVybiAoPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgVGl0bGUgJ308L2gxPilcblxuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBEYXRMaWNoKCl7XG5cbiAgICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XT0gdXNlU3RhdGUoZmFsc2UpICAgXG5cbiAgICBjb25zdCBzaG93TmF2YmFyID0gdXNlUmVmKGZhbHNlKSBcbiAgICAvLyBjb25zb2xlLmxvZygnc2hvd25hdicsc2hvd05hdmJhci5jdXJyZW50KVxuICAgIC8vIHNob3dOYXZiYXIuY3VycmVudD10cnVlXG4gICAgLy8gY29uc29sZS5sb2coJ3Nob3duYXYyJyxzaG93TmF2YmFyLmN1cnJlbnQpXG4gICAgLy8gY29uc3QgbmF2YmFyPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJylcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcbiAgICAvLyAgICAgaWYoc2hvd01lbnUgICYmICFldmVudC50YXJnZXQuaXNFcXVhbE5vZGUobmF2YmFyKSAmJiAhbmF2YmFyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdEYW5nIGNvIG1lbnUnKVxuICAgIC8vICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpXG4gICAgLy8gICAgIH0gICAgICBcbiAgICAvLyB9KVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHNldExpa2VzKGxpa2VzKzEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7c2hvd01lbnUgPyA8TmF2YmFyIGlzQWN0aXZlPXtzaG93TWVudX0gaWQ9XCJuYXZiYXJcIiBvblNob3c9eygpPT5zZXRTaG93TWVudShmYWxzZSl9Lz4gOiBudWxsfVxuXG4gICAgICAgICAgICB7LyogPE5hdmJhciBpc0FjdGl2ZT17c2hvd01lbnV9IGlkPVwibmF2YmFyXCIvPiAqL31cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Nob3dNZW51ID8gXCJ3ZWJfd3JhcHBlciB0cmFuc2Zvcm1cIjogXCJ3ZWJfd3JhcHBlclwiICB9PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwid2ViX3dyYXBwZXIgdHJhbnNmb3JtXCI+ICovfVxuXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3ZWJfd3JhcHBlciB0cmFuc2Zvcm1cIj4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxIZWFkZXIgaXNBY3RpdmU9IHtzaG93TWVudX0gb25TaG93PXsoKT0+c2V0U2hvd01lbnUodHJ1ZSl9Lz5cbiAgICAgICAgICAgIDxEb2N0b3IgbmFtZT1cIkNPTlRBQ1QgVVNcIj5cbiAgICAgICAgICAgIDxwPlJlYWR5IHRvIHNjaGVkdWxlIGFuIGFwcG9pbnRtZW50PyBIYXZlIHF1ZXN0aW9ucyBhYm91dCBjaGlyb3ByYWN0aWMgY2FyZT8gR2V0IGluIHRvdWNoIHdpdGggdXMhPC9wPlxuXG5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGhvbmU6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+MDM3LTkxNS0xNzE0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlphbG86PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+MDM3LTkxNS0xNzE0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsOjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmhvbGlzdGljYmFtYm9vQGdtYWlsLmNvbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GYW5wYWdlOjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGVvcGxlL0JhbWJvby1IZWFsdGhjYXJlLzEwMDA3ODczNzAyMzYwNVwiPkNpY2sgTWUgLTwvYT48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Zm9ybT5cblxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvRG9jdG9yPiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIDx1bD5cbiAgICAgICAgICAgICAgICB7bmFtZXMubWFwKChuYW1lKT0+KFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD4gKi99ICAgICAgICAgXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIkZvb3RlciIsIkhlYWRlciIsIk5hdmJhciIsIkRvY3RvciIsIlNjcmlwdCIsIkRhdExpY2giLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic2hvd05hdmJhciIsImhhbmRsZUNsaWNrIiwic2V0TGlrZXMiLCJsaWtlcyIsImlzQWN0aXZlIiwiaWQiLCJvblNob3ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwicCIsInRhYmxlIiwidGJvZHkiLCJ0ciIsInRoIiwiYSIsImhyZWYiLCJmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/datlich.js\n"));

/***/ })

});