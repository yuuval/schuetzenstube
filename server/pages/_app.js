(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 484:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__l1qoc",
	"headerDiv": "Header_headerDiv__vpmEs"
};


/***/ }),

/***/ 6005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Header.module.css
var Header_module = __webpack_require__(484);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-bootstrap/Button"
const Button_namespaceObject = require("react-bootstrap/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Offcanvas"
const Offcanvas_namespaceObject = require("react-bootstrap/Offcanvas");
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.js







function Header({ children , props  }) {
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: (Header_module_default()).header,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "outline-dark",
                            onClick: handleShow,
                            className: "me-2",
                            children: "☰"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Offcanvas_default()), {
                            show: show,
                            onHide: handleClose,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                                    closeButton: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Title, {
                                        children: "Offcanvas"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Offcanvas_default()).Body, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            id: "link",
                                            href: "/impressum",
                                            passHref: true,
                                            className: (Header_module_default()).standort,
                                            children: "Impressum"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            id: "link",
                                            href: "/aboutUs",
                                            passHref: true,
                                            className: (Header_module_default()).standort,
                                            children: "\xdcber mich"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            id: "link",
                                            href: "/kontakt",
                                            passHref: true,
                                            className: (Header_module_default()).standort,
                                            children: "Kontakt"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                children,
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default()).headerDiv,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            id: "link",
                            href: "/",
                            passHref: true,
                            className: (Header_module_default()).standort,
                            children: "Standort"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: (Header_module_default()).locationImg,
                            src: "/location_on_FILL0_wght400_GRAD0_opsz48.png",
                            width: 30,
                            height: 30
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "jwt-decode"
const external_jwt_decode_namespaceObject = require("jwt-decode");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./lib/session.js



const STORAGE_KEY = "session";
const defaultModel = {
    user: null,
    accessToken: null
};
function useSession() {
    const { 0: session , 1: setSession  } = (0,external_react_.useState)(defaultModel);
    const { 0: ready , 1: setReady  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const savedSession = localStorage.getItem(STORAGE_KEY);
        if (savedSession) {
            try {
                const value = JSON.parse(savedSession);
                const { exp  } = external_jwt_decode_default()(value.accessToken);
                const expirationDate = new Date(0);
                expirationDate.setUTCSeconds(exp);
                const now = new Date();
                setSession(now >= expirationDate ? defaultModel : value);
            } catch (e) {
                console.log(e);
            }
        }
        setReady(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (session.user) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, [
        session
    ]);
    return {
        ...session,
        ready,
        login (value) {
            setSession(value);
        },
        logout () {
            setSession(defaultModel);
        }
    };
}
function useRedirectToLogin(session) {
    const router = useRouter();
    useEffect(()=>{
        if (session.ready && !session.user) router.push("/login");
    }, [
        session,
        router
    ]);
}
function useRedirectToHome(session) {
    const router = useRouter();
    useEffect(()=>{
        if (session.ready && session.user) router.push("/");
    }, [
        session,
        router
    ]);
}

;// CONCATENATED MODULE: external "react-bootstrap/SSRProvider"
const SSRProvider_namespaceObject = require("react-bootstrap/SSRProvider");
var SSRProvider_default = /*#__PURE__*/__webpack_require__.n(SSRProvider_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js







function App({ Component , pageProps  }) {
    const session = useSession();
    const newPageProps = {
        ...pageProps,
        session
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "link",
                    href: "/",
                    passHref: true,
                    children: "Sch\xfctzenstube Platten"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "page",
                children: /*#__PURE__*/ jsx_runtime_.jsx((SSRProvider_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...newPageProps
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(6005)));
module.exports = __webpack_exports__;

})();