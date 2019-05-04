(function(t) {
    function e(e) {
        for (var a, r, o = e[0], c = e[1], l = e[2], u = 0, h = []; u < o.length; u++) r = o[u], i[r] && h.push(i[r][0]), i[r] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        d && d(e);
        while (h.length) h.shift()();
        return s.push.apply(s, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < s.length; e++) {
            for (var n = s[e], a = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== i[c] && (a = !1)
            }
            a && (s.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }
    var a = {},
        i = {
            app: 0
        },
        s = [];

    function r(t) {
        return o.p + "js/" + ({} [t] || t) + ".js";
    }

    function o(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.e = function(t) {
        var e = [],
            n = i[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var a = new Promise(function(e, a) {
                    n = i[t] = [e, a]
                });
                e.push(n[2] = a);
                var s, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = r(t), s = function(e) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var n = i[t];
                    if (0 !== n) {
                        if (n) {
                            var a = e && ("load" === e.type ? "missing" : e.type),
                                s = e && e.target && e.target.src,
                                r = new Error("Loading chunk " + t + " failed.\n(" + a + ": " + s + ")");
                            r.type = a, r.request = s, n[1](r)
                        }
                        i[t] = void 0
                    }
                };
                var l = setTimeout(function() {
                    s({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = s, document.head.appendChild(c)
            } return Promise.all(e)
    }, o.m = t, o.c = a, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var a in t) o.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var d = l;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "02a4": function(t, e, n) {},
    "05c5": function(t, e, n) {},
    1054: function(t, e, n) {},
    "1e17": function(t, e, n) {},
    "201a": function(t, e, n) {
        "use strict";
        var a = n("02a4"),
            i = n.n(a);
        i.a
    },
    "20d0": function(t, e, n) {
        "use strict";
        var a = n("d2d4"),
            i = n.n(a);
        i.a
    },
    "28ab": function(t, e, n) {
        "use strict";
        var a = n("2f7a"),
            i = n.n(a);
        i.a
    },
    "28f2": function(t, e, n) {
        "use strict";
        var a = n("f911"),
            i = n.n(a);
        i.a
    },
    "2f7a": function(t, e, n) {},
    3174: function(t, e, n) {},
    "34d0": function(t, e, n) {},
    "38c3": function(t, e, n) {},
    4250: function(t, e, n) {
        "use strict";
        var a = n("34d0"),
            i = n.n(a);
        i.a
    },
    "4a7d": function(t, e, n) {},
    "514a": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("57e7"), n("1c01"), n("cadf"), n("551c"), n("f751"), n("097d");
        var a = n("2ef0"),
            i = n.n(a),
            s = n("2b0e"),
            r = n("8c4f"),
            o = n("a925"),
            c = n("283e"),
            l = n.n(c),
            u = n("7707"),
            d = n.n(u),
            h = n("3652"),
            m = n.n(h),
            f = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    key: t.initCount,
                    class: [{
                        open: t.open
                    }, t.app, t.test],
                    attrs: {
                        id: "app"
                    }
                }, [n("notification"), n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.bounce ? t._e() : n("page-header")], 1), n("div", {
                    on: {
                        click: t.closeMenu
                    }
                }, [n("router-view", {
                    staticClass: "main"
                })], 1), n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.loading ? n("loading", {
                    staticClass: "overlay"
                }) : t._e()], 1), t.bounce ? n("bounce") : t._e()], 1)
            },
            g = [],
            p = (n("7f7f"), n("cebc")),
            v = n("2f62"),
            T = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "drop",
                        mode: "out-in"
                    }
                }, [t.notification ? n("div", {
                    staticClass: "notification"
                }, [t._v("\n    " + t._s(t.notification) + "\n  ")]) : t._e()])
            },
            E = [],
            b = {
                computed: Object(v["d"])(["notification"])
            },
            y = b,
            S = (n("28ab"), n("2877")),
            w = Object(S["a"])(y, T, E, !1, null, null, null),
            O = w.exports,
            N = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page-header"
                }, [n("div", {
                    staticClass: "header"
                }, [n("div", {
                    staticClass: "btn-menu",
                    on: {
                        click: t.toggleMenu
                    }
                }), n("div", {
                    staticClass: "logo",
                    on: {
                        click: t.goTop
                    }
                })]), t.open ? n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("div", {
                    staticClass: "menu"
                }, [n("div", [n("div", {
                    staticClass: "language"
                }, [n("ul", t._l(t.languages, function(e, a) {
                    return n("li", {
                        key: e.value,
                        class: {
                            selected: e.value === t.language, last: a === t.languages.length - 1
                        },
                        on: {
                            click: function(n) {
                                return t.select(e.value)
                            }
                        }
                    }, [t._v("\n              " + t._s(e.label) + "\n            ")])
                }), 0)]), n("div", {
                    staticClass: "footer"
                }, ["home" !== t.$route.name ? n("router-link", {
                    staticClass: "btn-footer",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("HOME")]) : t._e(), n("router-link", {
                    staticClass: "btn-footer",
                    attrs: {
                        to: "/policy"
                    }
                }, [t._v("PRIVACY POLICY")]), n("br"), n("router-link", {
                    staticClass: "btn-footer",
                    attrs: {
                        to: "/terms"
                    }
                }, [t._v("TERMS OF SERVICE")]), n("p", [t._v(t._s(t.$t("disclaimer")))])], 1)])])]) : t._e()], 1)
            },
            C = [],
            I = {
                computed: Object(p["a"])({}, Object(v["d"])(["languages", "language", "open", "contents", "content"])),
                methods: Object(p["a"])({
                    toggleMenu: function() {
                        this.SET_OPEN(!this.open)
                    },
                    goTop: function() {
                        this.open ? this.toggleMenu() : (this.$router.push({
                            name: "home"
                        }), window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }))
                    },
                    select: function(t) {
                        this.language !== t && (this.toggleMenu(), window.scrollTo(0, 0), this.SET_LANGUAGE(t))
                    }
                }, Object(v["b"])(["SET_LANGUAGE"]), Object(v["c"])(["SET_OPEN"]))
            },
            A = I,
            x = (n("201a"), Object(S["a"])(A, N, C, !1, null, null, null)),
            j = x.exports,
            $ = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            M = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "loading"
                }, [n("div", {
                    staticClass: "spinner"
                })])
            }],
            q = (n("cb13"), {}),
            D = Object(S["a"])(q, $, M, !1, null, null, null),
            k = D.exports,
            z = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            R = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "bounce"
                }, [n("div", {
                    staticClass: "omg"
                })])
            }],
            P = (n("4250"), {}),
            B = Object(S["a"])(P, z, R, !1, null, null, null),
            F = B.exports,
            G = 864e5,
            U = {
                2265717693480945: 5945,
                2504362989577371: 5778,
                2006683636095963: 4620
            },
            H = {
                data: function() {
                    return {
                        game: !1,
                        initCount: 0
                    }
                },
                computed: Object(p["a"])({}, Object(v["d"])(["status", "loading", "bounce", "contents", "content", "reload", "open", "language", "init", "app", "test"])),
                created: function() {
                    this.inititalize()
                },
                watch: {
                    $route: function() {
                        if (window.scrollTo(0, 0), this.SET_OPEN(!1), "content" !== this.$route.name) {
                            if ("home" === this.$route.name && (this.game = !1, !this.init)) return;
                            ga("send", "pageview", this.language + "/" + this.$route.name)
                        }
                    }
                },
                methods: Object(p["a"])({
                    inititalize: function() {
                        var t = this;
                        if (this.initCount += 1, ga("create", "UA-126885965-1", {
                            sampleRate: 1
                        }), this.reload) this.$router.push({
                            name: "home",
                            replace: !0
                        });
                        else {
                            var e = FBInstant.getEntryPointData(),
                                n = FBInstant.context.getID();
                            if (e) {
                                var a = e.id || e.data;
                                this.$router.push({
                                    name: "game" === e.content_type ? "game" : "content",
                                    params: {
                                        id: a
                                    },
                                    replace: !0
                                }), "post" === e.type && e.timestamp > (new Date).getTime() - G ? this.ADD_REFERER(i.a.pick(e, ["id", "result"])) : "chatbot" === e.type && this.SET_SESSION_DATA({
                                    no_chatbot: !0
                                })
                            } else U[n] && this.$router.push({
                                name: "content",
                                params: {
                                    id: U[n]
                                },
                                replace: !0
                            });
                            this.SET_ME(), this.$Lazyload.$on("loaded", function(t) {
                                var e = t.el;
                                i.a.delay(function() {
                                    e.parentElement.style.background = "none"
                                }, 500)
                            }), EventBus.$on("set:language", function(e) {
                                t.$root.$i18n.locale = e
                            }), EventBus.$on("reload", this.inititalize)
                        }
                        this.INIT(function() {
                            t.SET_CONTENTS()
                        })
                    },
                    closeMenu: function() {
                        this.open && this.SET_OPEN(!1)
                    }
                }, Object(v["b"])(["INIT", "SET_CONTENTS", "ADD_REFERER", "SET_RECOMMEND"]), Object(v["c"])(["SET_STATUS", "SET_ME", "SET_LANGUAGE", "SET_SESSION_DATA", "SET_OPEN", "SET_OPEN", "SET_BOUNCE", "RESET_CONTENTS", "SET_LOADING", "SET_NOTIFICATION"])),
                components: {
                    Notification: O,
                    PageHeader: j,
                    Loading: k,
                    Bounce: F
                }
            },
            L = H,
            W = (n("5c0b"), Object(S["a"])(L, f, g, !1, null, null, null)),
            V = W.exports,
            Q = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "top",
                    staticClass: "page-detail",
                    class: {
                        ads: t.ads
                    }
                }, [n("div", [t.content.title ? n("div", {
                    staticClass: "detail"
                }, [n("div", {
                    staticClass: "padding-detail"
                }, [n("p", {
                    staticClass: "text-tag"
                }, [t._v("\n          " + t._s(t.tags) + "\n        ")]), n("p", {
                    staticClass: "text-title"
                }, [t._v("\n          " + t._s(t.content.title.text) + "\n        ")]), t.content.title.sub_text ? n("p", {
                    staticClass: "text-description"
                }, [t._v("\n          " + t._s(t.content.title.sub_text) + "\n        ")]) : t._e()]), "game" === t.content.type ? [n("game")] : [t.hasSelectFriend ? n("friend-list", {
                    ref: "friends",
                    attrs: {
                        question: t.hasSelectFriend
                    }
                }) : t._e(), t.content.detail.questions ? n("question-list", {
                    ref: "questions",
                    attrs: {
                        questions: t.content.detail.questions
                    }
                }) : t._e(), n("div", {
                    ref: "result_top"
                }, [n("result", {
                    ref: "result"
                })], 1)]], 2) : t._e(), t.loadingAndMore ? n("h3", {
                    ref: "more"
                }, [t._v("\n      " + t._s(t.$t("more_quizzes")) + "\n    ")]) : t._e(), n("content-list", {
                    attrs: {
                        contents: t.contents
                    }
                })], 1)])
            },
            J = [],
            K = (n("55dd"), n("6d67"), n("7514"), n("71f1")),
            Y = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showResult,
                        expression: "showResult"
                    }],
                    staticClass: "result"
                }, [n("div", {
                    staticClass: "btn btn-share",
                    class: {
                        disabled: t.loading > 0
                    },
                    on: {
                        click: t.share
                    }
                }, [n("i"), t._v(t._s(t.$t("share")))]), n("div", {
                    ref: "wrap",
                    staticClass: "wrap-canvas",
                    class: {
                        show: t.loading <= 0
                    },
                    style: t.height,
                    on: {
                        click: t.share
                    }
                }, [n("async-canvas", {
                    key: t.reload,
                    ref: "canvas"
                }), t.loading > 0 ? n("div", {
                    ref: "loading",
                    staticClass: "loading"
                }, [t._e()]) : t._e()], 1), n("div", {
                    staticClass: "btn btn-share",
                    class: {
                        disabled: t.loading > 0
                    },
                    on: {
                        click: t.share
                    }
                }, [n("i"), t._v(t._s(t.$t("share")))]), n("div", {
                    staticClass: "btn small btn-again",
                    on: {
                        click: t.tryAgain
                    }
                }, [n("i"), t._v(t._s(t.$t("try_again")))]), t.hide_shortcut ? t._e() : n("div", {
                    staticClass: "align-center"
                }, [n("div", {
                    staticClass: "btn-app",
                    on: {
                        click: t.installApp
                    }
                })])])
            },
            X = [],
            Z = (n("6c7b"), n("20d6"), n("d25f"), n("10b3")),
            tt = n.n(Z),
            et = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "canvas"
                }, ["video" === t.type ? n("video", {
                    ref: "video",
                    attrs: {
                        width: "600",
                        height: t.height,
                        autoplay: "",
                        playsinline: "",
                        loop: ""
                    }
                }, [n("source", {
                    attrs: {
                        src: t.media,
                        type: "video/mp4"
                    }
                })]) : n("canvas", {
                    ref: "canvas",
                    attrs: {
                        width: "600",
                        height: t.height
                    }
                }), n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.error ? n("div", {
                    staticClass: "error"
                }, [n("p", [t._v("\n        " + t._s(t.$t("error_message")) + "\n      ")])]) : t._e()])], 1)
            },
            nt = [],
            at = n("bf48"),
            it = at["a"],
            st = (n("6070"), Object(S["a"])(it, et, nt, !1, null, null, null)),
            rt = st.exports,
            ot = [],
            ct = {
                data: function() {
                    return {
                        loading: 0,
                        error: !1,
                        showResult: !1,
                        result: null,
                        preloaded: null,
                        reload: 0
                    }
                },
                computed: Object(p["a"])({}, Object(v["d"])(["content", "me", "hide_shortcut", "app", "pageview"]), {
                    withoutQuestion: function() {
                        return !this.$parent.hasSelectFriend && i.a.isEmpty(this.content.detail.questions)
                    },
                    height: function() {
                        return this.result ? "height: " + window.innerWidth * (this.result.media.height / this.result.media.width) + "px" : ""
                    }
                }),
                watch: {
                    content: function() {
                        ot = []
                    }
                },
                mounted: function() {
                    var t = this;
                    this.refresh(), this.$on("loaded:result", function() {
                        t.loading -= 1, t.focus()
                    })
                },
                methods: Object(p["a"])({
                    refresh: function() {
                        clearTimeout(this.delay), this.withoutQuestion ? (this.showResult = !0, this.$nextTick(this.show)) : (this.showResult = !1, this.SET_FRIEND(null), this.content.detail.questions = i.a.map(this.content.detail.questions, function(t) {
                            return i.a.omit(t, ["selected", "answer"])
                        }))
                    },
                    show: function() {
                        var t = this;
                        this.ADD_PAGEVIEW();
                        var e = function(e) {
                            t.loading = 2;
                            var n = t;
                            clearTimeout(n.delay);
                            var a = function(t) {
                                    var e = i.a.filter(t, function(t) {
                                        return -1 === i.a.indexOf(ot, t.id)
                                    });
                                    return e.length ? e : (ot = [], t)
                                },
                                s = function(t) {
                                    var e = i.a.reverse(n.content.detail.s),
                                        a = [];
                                    i.a.each(t, function(t, n) {
                                        a.push((a[n - 1] || 0) + e[t.id - 1])
                                    });
                                    var s = i.a.random(0, i.a.last(a));
                                    return t[i.a.findIndex(a, function(t) {
                                        return t >= s
                                    })]
                                };
                            if (n.showResult = !0, n.content.detail.questions) {
                                var r = i.a.map(n.content.detail.questions, function(t) {
                                        return t.answer ? t.answer : t.answers[t.selected]
                                    }),
                                    o = i.a.fill(Array(n.content.detail.results.length + 1), 0),
                                    c = null;
                                i.a.each(r, function(t) {
                                    i.a.isEmpty(t.results) ? c = t : i.a.each(t.results, function(t) {
                                        o[t] += 1
                                    })
                                });
                                var l = i.a.max(o);
                                n.result = s(a(i.a.filter(n.content.detail.results, function(t) {
                                    return o[t.id] === l
                                }))), c && (n.result.answer = c)
                            } else n.result = s(a(n.content.detail.results));
                            n.$refs.canvas.show(n.result), "OMG" === n.app && n.$nextTick(function() {
                                new tt.a(n.$refs.loading, {
                                    strings: n.$t("loading_messages"),
                                    showCursor: !1,
                                    typeSpeed: 8
                                })
                            }), n.delay = i.a.delay(function() {
                                n.loading -= 1, e && e(), n.focus()
                            }, 1500)
                        };
                        this.loading > 0 && (this.reload += 1), i.a.defer(function() {
                            t.$parent.$emit("show:ads", e)
                        })
                    },
                    focus: function() {},
                    share: function() {
                        if (!(this.loading > 0 || this.$refs.canvas.error)) {
                            var t = this.$refs.wrap.querySelector("canvas");
                            t && this.$parent.$emit("share", t.toDataURL("image/jpeg", .9), this.content.title.text + " #omg", {
                                id: this.content.id,
                                result: this.result.id,
                                user: this.me.id,
                                locale: this.content.language,
                                timestamp: (new Date).getTime(),
                                type: "post"
                            })
                        }
                    },
                    tryAgain: function() {
                        this.result && ot.push(this.result.id), this.withoutQuestion ? (window.scrollToHere(this.$el), this.refresh()) : (window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), this.content.detail.questions = i.a.map(this.content.detail.questions, function(t) {
                            return i.a.omit(t, ["selected"])
                        }), this.showResult = !1)
                    },
                    installApp: function() {
                        var t = this;
                        FBInstant.createShortcutAsync().then(function() {
                            t.SET_SHORTCUT(!0)
                        }).catch(function(e) {
                            t.SET_NOTIFICATION(e.message)
                        })
                    }
                }, Object(v["c"])(["SET_NOTIFICATION", "ADD_PAGEVIEW", "SET_LOADING", "SET_FRIEND"]), Object(v["b"])(["SET_HIDE_SHORTCUT"])),
                components: {
                    AsyncCanvas: rt
                }
            },
            lt = ct,
            ut = (n("aada"), Object(S["a"])(lt, Y, X, !1, null, null, null)),
            dt = ut.exports,
            ht = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("iframe", {
                    staticClass: "game-detail",
                    attrs: {
                        src: "games/" + t.$route.params.id + "/index.html",
                        scrolling: "no"
                    }
                })])
            },
            mt = [],
            ft = {
                mounted: function() {
                    var t = this;
                    EventBus.$on("close:game", function() {
                        t.$router.go(-1)
                    })
                },
                destroyed: function() {
                    EventBus.$off("close:game")
                }
            },
            gt = ft,
            pt = (n("bb9a"), Object(S["a"])(gt, ht, mt, !1, null, null, null)),
            _t = pt.exports,
            vt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "infinite-scroll",
                        rawName: "v-infinite-scroll",
                        value: t.loadMore,
                        expression: "loadMore"
                    }],
                    staticClass: "wrap-list-content",
                    attrs: {
                        "infinite-scroll-distance": "200",
                        "infinite-scroll-throttle-delay": "500",
                        "infinite-scroll-listen-for-event": !0
                    }
                }, [n("ul", {
                    ref: "list",
                    staticClass: "list-content",
                    attrs: {
                        "data-grid": ""
                    }
                }, [t._l(t.contents.slice(0, 2), function(t) {
                    return n("content-item", {
                        key: t.id + (t.recommend ? "r" : ""),
                        attrs: {
                            content: t
                        }
                    })
                }), t.contents.length > 0 && t.canPromo ? n("promo-item") : t._e(), t._l(t.contents.slice(2), function(t) {
                    return n("content-item", {
                        key: t.id + (t.recommend ? "r" : ""),
                        attrs: {
                            content: t
                        }
                    })
                })], 2), n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.loading ? n("div", {
                    staticClass: "align-center loading-more"
                }, [n("div", {
                    staticClass: "lds-ellipsis"
                }, [n("div"), n("div"), n("div"), n("div")])]) : t._e()])], 1)
            },
            Tt = [],
            Et = n("487a"),
            bt = n.n(Et),
            yt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("li", {
                    staticClass: "item-content",
                    class: [{
                        disabled: t.content.id === t._content.id
                    }, t.type]
                }, [n("div", {
                    class: {
                        recommend: t.content.recommend, trending: t.content.trending
                    },
                    on: {
                        click: t.goDetail
                    }
                }, [n("div", {
                    ref: "wrap",
                    staticClass: "img-fix-ratio"
                }, [t.content.recommend ? n("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.media,
                        expression: "media"
                    }],
                    ref: "img",
                    attrs: {
                        src: t.media
                    }
                }) : n("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.media,
                        expression: "media"
                    }],
                    ref: "img"
                }), t.label ? n("span", {
                    staticClass: "label"
                }, [t._v("\n          " + t._s(t.label) + "\n        ")]) : t._e(), "cover" === t.type || "b" === t.test ? n("div", {
                    staticClass: "text-title"
                }, [t._v("\n          " + t._s(t.content.title.text) + "\n        ")]) : t._e()]), "banner" === t.type ? n("div", {
                    staticClass: "text-title"
                }, [t._v("\n        " + t._s(t.content.title.text) + "\n        "), "game" === t.content.type ? n("span", {
                    staticClass: "btn-play"
                }, [t._v("\n          Play\n        ")]) : t._e()]) : t._e()])])])
            },
            St = [],
            wt = {
                props: {
                    content: {
                        type: Object,
                        required: !0
                    },
                    banner: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: Object(p["a"])({
                    label: function() {
                        return "promo" === this.content.type ? "🎮Game" : this.content.recommend ? "👍" + this.$t("recommend") : this.content.is_new || this.content.pick ? "😍" + this.$t("hot") : this.content.trending ? "🔥" + this.$t("trending") : null
                    },
                    type: function() {
                        return "banner";
                    },
                    media: function() {
                        return this.content.title.media.src
                    }
                }, Object(v["d"])({
                    _content: "content",
                    language: "language",
                    app: "app",
                    test: "test",
                    id: "id"
                })),
                mounted: function() {
                    var t = this.content.title.media,
                        e = t.height / t.width * 100;
                    this.$refs.wrap.style.paddingTop = e + "%"
                },
                methods: Object(p["a"])({
                    goDetail: function() {
                        var t = this;
                        "promo" === this.content.type ? FBInstant.switchGameAsync(this.content.detail.id, {
                            data: this.content.detail.data,
                            from: this.id
                        }).catch(function(e) {
                            "USER_INPUT" !== e.code && t.SET_NOTIFICATION(e.message)
                        }) : this._content.id !== this.content.id && this.$router.push({
                            name: "content",
                            params: {
                                id: this.content.id
                            },
                            replace: !0
                        })
                    }
                }, Object(v["b"])(["SET_CONTENT"]), Object(v["c"])(["SET_NOTIFICATION"]))
            },
            Ot = wt,
            Nt = (n("d769"), Object(S["a"])(Ot, yt, St, !1, null, null, null)),
            Ct = Nt.exports,
            It = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [a("li", {
                    staticClass: "item-promo item-content"
                }, [a("div", {
                    on: {
                        click: t.play
                    }
                }, [a("div", {
                    staticClass: "img-fix-ratio"
                }, [a("img", {
                    attrs: {
                        src: n("9184")
                    }
                }), a("span", {
                    staticClass: "label"
                }, [t._v("\n          🎮Game\n        ")])]), a("div", {
                    staticClass: "text-title"
                }, [a("img", {
                    attrs: {
                        src: n("d353")
                    }
                }), t._v("\n        Lightning Slot\n        "), a("button", [t._v("Play")])])])])])
            },
            At = [],
            xt = {
                methods: {
                    play: function() {
                        FBInstant.switchGameAsync("369180963635208", {
                            referer: "OMG"
                        }).then(function() {
                            FBInstant.logEvent("lightning_slot_promo_success", 1)
                        }).catch(function() {
                            FBInstant.logEvent("lightning_slot_promo_fail", 1)
                        })
                    }
                }
            },
            jt = xt,
            $t = (n("20d0"), Object(S["a"])(jt, It, At, !1, null, null, null)),
            Mt = $t.exports,
            qt = {
                data: function() {
                    return {
                        loading: !1
                    }
                },
                props: {
                    contents: {
                        type: Array,
                        required: !0
                    }
                },
                computed: Object(p["a"])({}, Object(v["d"])(["more_contents", "content", "reset", "app", "language"]), {
                    canPromo: function() {
                        return "IOS" !== FBInstant.getPlatform() && "ANDROID" !== FBInstant.getPlatform()
                    }
                }),
                methods: Object(p["a"])({
                    loadMore: function() {
                        var t = this;
                        this.more_contents && (this.loading = !0, this.SET_CONTENTS(function() {
                            t.loading = !1
                        }))
                    }
                }, Object(v["b"])(["SET_CONTENTS"]), Object(v["c"])(["SET_RESET"])),
                components: {
                    ContentItem: Ct,
                    PromoItem: Mt
                },
                directives: {
                    infiniteScroll: bt.a
                }
            },
            Dt = qt,
            kt = (n("e4cc"), Object(S["a"])(Dt, vt, Tt, !1, null, null, null)),
            zt = kt.exports,
            Rt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("ul", {
                    staticClass: "list-question"
                }, t._l(t.questions, function(t, e) {
                    return n("question-item", {
                        key: e,
                        ref: "question-" + e,
                        refInFor: !0,
                        attrs: {
                            question: t
                        }
                    })
                }), 1)
            },
            Pt = [],
            Bt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("li", {
                    staticClass: "item-question"
                }, [n("p", {
                    staticClass: "text-question"
                }, [t._v("\n    " + t._s(t.question.text) + "\n  ")]), t._.isEmpty(t.question.answers) ? n("div", [n("div", {
                    staticClass: "input-text"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.question.answer,
                        expression: "question.answer"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: t.question.placeholder || ""
                    },
                    domProps: {
                        value: t.question.answer
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.question, "answer", e.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "btn btn-start",
                    on: {
                        click: t.next
                    }
                }, [t._v(t._s(t.$t("start")))])]) : n("answer-list", {
                    attrs: {
                        question: t.question
                    }
                })], 1)
            },
            Ft = [],
            Gt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("ul", {
                    staticClass: "list-answer",
                    class: [{
                        answered: t._.isNumber(t.selected)
                    }, t.type]
                }, t._l(t.question.answers, function(e, a) {
                    return n("answer-item", {
                        key: a,
                        class: {
                            highlight: t.selected === a
                        },
                        attrs: {
                            index: a,
                            answer: e
                        }
                    })
                }), 1)
            },
            Ut = [],
            Ht = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("li", {
                    ref: "answer",
                    staticClass: "item-answer",
                    on: {
                        click: t.select
                    }
                }, [t._.isEmpty(t.answer.media) ? t._e() : n("div", {
                    staticClass: "img-fix-ratio ratio-1-1"
                }, [n("img", {
                    attrs: {
                        crossorigin: "anonymous",
                        src: t.answer.media.src
                    }
                })]), t._.isEmpty(t.answer.text) ? t._e() : n("p", {
                    staticClass: "text-answer"
                }, [t._v("\n    " + t._s(t.answer.text) + "\n  ")])])
            },
            Lt = [],
            Wt = (n("c5f6"), {
                props: {
                    answer: {
                        type: Object,
                        required: !0
                    },
                    index: {
                        type: Number,
                        required: !0
                    }
                },
                methods: {
                    select: function() {
                        this.$parent.$emit("select", this.index)
                    }
                }
            }),
            Vt = Wt,
            Qt = (n("9da7"), Object(S["a"])(Vt, Ht, Lt, !1, null, null, null)),
            Jt = Qt.exports,
            Kt = {
                data: function() {
                    return {
                        selected: void 0
                    }
                },
                props: {
                    question: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    type: function() {
                        return i.a.isEmpty(this.question.answers[0].media) ? "text" : this.question.answers.length % 3 ? "image-2" : "image-3"
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$on("select", function(e) {
                        t.selected = e, t.question.selected = e, t.$parent.$parent.$emit("next")
                    })
                },
                updated: function() {
                    this.selected = this.question.selected
                },
                components: {
                    AnswerItem: Jt
                }
            },
            Yt = Kt,
            Xt = (n("28f2"), Object(S["a"])(Yt, Gt, Ut, !1, null, null, null)),
            Zt = Xt.exports,
            te = {
                props: {
                    question: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    type: function() {
                        return this.question.answers[0].media ? this.question.answers.length % 3 ? "image-2" : "image-3" : "text"
                    }
                },
                methods: {
                    focus: function() {
                        window.scrollToHere(this.$el)
                    },
                    next: function() {
                        _.isEmpty(this.question.answer) || (this.question.answer = this.question.answer.charAt(0).toUpperCase() + this.question.answer.slice(1), this.$parent.$emit("next"))
                    }
                },
                components: {
                    AnswerList: Zt
                }
            },
            ee = te,
            ne = (n("7912"), Object(S["a"])(ee, Bt, Ft, !1, null, null, null)),
            ae = ne.exports,
            ie = {
                props: {
                    questions: {
                        type: Array,
                        required: !0
                    }
                },
                mounted: function() {
                    var t = this,
                        e = this;
                    this.$on("next", function() {
                        var n = i.a.findIndex(e.questions, function(t) {
                            return void 0 === t.selected && !t.answer
                        }); - 1 !== n ? e.$refs["question-" + n][0].focus() : t.$parent.$emit("go:result")
                    })
                },
                methods: {},
                components: {
                    QuestionItem: ae
                }
            },
            se = ie,
            re = (n("e0b6"), Object(S["a"])(se, Rt, Pt, !1, null, null, null)),
            oe = re.exports,
            ce = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "item-question friend-list"
                }, [n("p", {
                    staticClass: "text-question"
                }, [t._v("\n    " + t._s(t.question) + "\n  ")]), n("ul", {
                    staticClass: "list-friend",
                    class: {
                        touch: t.touch
                    }
                }, t._l(t.friends, function(e, a) {
                    return n("li", {
                        key: a,
                        staticClass: "item-friend",
                        class: {
                            highlight: t.selected === a
                        },
                        attrs: {
                            index: a,
                            friend: e
                        },
                        on: {
                            click: function(n) {
                                return t.selectFriend(e, a)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: e.photo
                        }
                    }), n("p", [t._v(t._s(e.name.split(" ")[0]))])])
                }), 0)])
            },
            le = [],
            ue = {
                data: function() {
                    return {
                        selected: void 0
                    }
                },
                props: {
                    question: {
                        type: String,
                        required: !0
                    }
                },
                computed: Object(p["a"])({
                    touch: function() {
                        return "WEB" !== FBInstant.getPlatform()
                    }
                }, Object(v["d"])(["friends"])),
                methods: Object(p["a"])({
                    selectFriend: function(t, e) {
                        this.SET_FRIEND(t), this.selected = e, this.$parent.$emit("go:result", !0)
                    }
                }, Object(v["c"])(["SET_FRIEND"]))
            },
            de = ue,
            he = (n("ed7b"), Object(S["a"])(de, ce, le, !1, null, null, null)),
            me = he.exports,
            fe = null,
            ge = null,
            pe = 4e4,
            _e = null,
            ve = !1,
            Te = 6048e5,
            Ee = function() {
                clearTimeout(fe)
            },
            be = {
                data: function() {
                    return {
                        adsTimeout: !0,
                        ads: !1
                    }
                },
                computed: Object(p["a"])({
                    hasSelectFriend: function() {
                        var t = i.a.find(i.a.get(this.content, "detail.composes"), function(t) {
                            return "select_friend_photo" === t.type
                        });
                        return !!t && (t.question || "Pick a Friend")
                    },
                    tags: function() {
                        return i.a.map(this.content.tags, function(t) {
                            return "#" + t
                        }).join(" ")
                    },
                    loadingAndMore: function() {
                        return this.contents.length > 0 && "home" !== this.$route.name
                    }
                }, Object(v["d"])(["content", "contents", "interstitial", "pageview", "friend", "reject_bot_at", "language"])),
                created: function() {
                    window.addEventListener("scroll", Ee), document.addEventListener("touchstart", Ee)
                },
                mounted: function() {
                    var t = this;
                    this.$on("go:result", function(e) {
                        if (e && !i.a.isEmpty(t.content.detail.questions)) t.$refs.questions.$emit("next");
                        else {
                            if (t.hasSelectFriend && !t.friend) return void window.scrollToHere(t.$refs.friends.$el);
                            t.$refs.result.show(), t.$nextTick(function() {
                                window.scrollToHere(t.$refs.result_top)
                            })
                        }
                    }), this.$on("share", this.share), this.$on("show:ads", this.showAds)
                },
                watch: {
                    $route: {
                        handler: function() {
                            "home" === this.$route.name && (this.M_SET_CONTENT({}), this.sort())
                        },
                        immediate: !0
                    },
                    "$route.params.id": {
                        handler: function(t) {
                            t && this.SET_CONTENT(t)
                        },
                        immediate: !0
                    },
                    content: function() {
                        /*!_.isEmpty(this.content) */
                        this.content.title && (this.$refs.result && this.$refs.result.refresh(), this.SET_BOUNCE(!1), ga("send", "pageview", this.content.language + "/" + (this.content.title.origin || this.content.title.text) + "_" + this.content.id), this.sort(), this.ADD_VIEW(this.content.id), this.SET_RECOMMEND())
                    },
                    contents: function(t, e) {
                        this.contents.length && this.SET_BOUNCE(!1), t.length > 0 && 0 === e.length && (console.log(e.length), this.sort())
                    }
                },
                methods: Object(p["a"])({
                    sort: function() {
                        0 !== this.contents.length && ("home" === this.$route.name ? this.RESET_CONTENTS(i.a.orderBy(this.contents, ["read", "is_new", "idx"], ["asc", "desc", "asc"])) : this.RESET_CONTENTS(i.a.orderBy(this.contents, ["read", "idx"], ["asc", "asc"])))
                    },
                    share: function(t, e, n) {
                        var a = this,
                            s = this;
                        "WEB" === FBInstant.getPlatform() && this.SET_LOADING(!0), FBInstant.shareAsync({
                            intent: "REQUEST",
                            image: t,
                            text: e,
                            data: n
                        }).then(function() {
                            a.SET_LOADING(!1), fe = i.a.delay(function() {
                                window.scrollToHere(a.$refs.more)
                            }, 800), ve || i.a.delay(function() {
                                FBInstant.player.canSubscribeBotAsync().then(function(t) {
                                    t && (s.reject_bot_at && s.reject_bot_at < (new Date).getTime() - Te || !s.reject_bot_at) && FBInstant.player.subscribeBotAsync().then(function() {
                                        FBInstant.player.setDataAsync({
                                            reject_bot_at: !1
                                        })
                                    }).catch(function() {
                                        FBInstant.player.setDataAsync({
                                            reject_bot_at: (new Date).getTime()
                                        })
                                    })
                                })
                            }, 1200), a.PUT_SHARE(a.content.id)
                        }).catch(function(t) {
                            a.SET_LOADING(!1), a.SET_NOTIFICATION(t.message)
                        })
                    },
                    showAds: function(t) {
                        var e = this;
                        this.interstitial.played < Math.ceil(this.pageview / this.interstitial.interval) && this.adsTimeout ? Object(K["parallel"])([function(t) {
                            _e ? "load" === _e.stage ? _e.ads.loadAsync().then(function() {
                                t(null)
                            }).catch(function(e) {
                                t(e)
                            }) : t(null) : FBInstant.getInterstitialAdAsync(e.interstitial.first).then(function(t) {
                                return _e = {
                                    ads: t,
                                    stage: "load"
                                }, t.loadAsync()
                            }).then(function() {
                                _e.stage = "show", t(null)
                            }).catch(function(e) {
                                t(e)
                            })
                        }, function(e) {
                            t(e)
                        }], function(t) {
                            t || (e.ads = !0, _e.ads.showAsync().then(function() {
                                e.adsTimeout = !1, e.interstitial.played += 1, _e = null, clearTimeout(ge), ge = i.a.delay(function() {
                                    e.adsTimeout = !0, pe += 2e4
                                }, pe)
                            }).catch(function(t) {}).finally(function() {
                                e.ads = !1
                            }))
                        }) : t()
                    }
                }, Object(v["b"])(["SET_CONTENT", "PUT_SHARE", "SET_RECOMMEND", "ADD_VIEW"]), Object(v["c"])(["SET_BOUNCE", "RESET_CONTENTS", "SET_LOADING"]), Object(v["c"])({
                    M_SET_CONTENT: "SET_CONTENT"
                })),
                destroyed: function() {
                    window.removeEventListener("scroll", Ee), document.removeEventListener("touchstart", Ee)
                },
                components: {
                    Result: dt,
                    Game: _t,
                    ContentList: zt,
                    QuestionList: oe,
                    FriendList: me,
                    Loading: k
                }
            },
            ye = be,
            Se = (n("620c"), Object(S["a"])(ye, Q, J, !1, null, null, null)),
            we = Se.exports,
            Oe = new r["a"]({
                routes: [{
                    name: "home",
                    path: "/",
                    component: we
                }, {
                    name: "content",
                    path: "/content/:id",
                    component: we
                }, {
                    name: "game",
                    path: "/game/:id",
                    component: _t
                }, {
                    name: "policy",
                    path: "/policy",
                    component: function() {
                        return n.e("chunk-privacy-policy").then(n.bind(null, "8815"))
                    }
                }, {
                    name: "terms",
                    path: "/terms",
                    component: function() {
                        return n.e("chunk-terms-of-service").then(n.bind(null, "d5d2"))
                    }
                }]
            }),
            Ne = Oe,
            Ce = (n("28a5"), n("f559"), n("bc3a")),
            Ie = n.n(Ce),
            Ae = "production",
            xe = "http://localhost:4000/api/";
        location.hostname.startsWith("localhost") ? Ae = "local" : location.hostname.startsWith("apps-2182009512040623") && (Ae = "test"), "local" !== Ae && (xe = "https://omg-server.herokuapp.com/api/");
        var je = Ie.a.create({
            baseURL: xe,
            timeout: 5e3
        });
        xe = "local" === Ae ? "http://localhost:4000/api/" : "test" === Ae ? "https://omg-server.herokuapp.com/api/" : "https://d1ckjhze1wxie3.cloudfront.net/";
        var $e = Ie.a.create({
                baseURL: xe,
                timeout: 8e3
            }),
            Me = function(t, e) {
                return -1 !== i.a.findIndex(t.state.languages, {
                    value: e
                }) ? e : "en"
            },
            qe = {},
            De = 0,
            ke = function(t) {
                De += 1, 2 === De && (t.dispatch("SET_RECOMMEND"), De = 0)
            };
        window.router = Ne;
        var ze = {
                INIT: function(t, e) {
                    FBInstant.player.getDataAsync(["language", "shortcut", "reject_bot_at", "contents"]).then(function(n) {
                        FBInstant.player.getConnectedPlayersAsync().then(function(e) {
                            t.commit("SET_FRIENDS", i.a.map(e, function(t) {
                                return {
                                    id: t.getID(),
                                    name: t.getName(),
                                    photo: t.getPhoto()
                                }
                            })), je.get("content/recommend", {
                                params: {
                                    ids: i.a.map(t.state.friends.slice(0, 80), "id")
                                }
                            }).then(function(e) {
                                t.commit("SET_RECOMMENDS", e.data), ke(t)
                            })
                        });
                        var a = "en",
                            s = function(n) {
                                "home" === Ne.currentRoute.name && ga("send", "pageview", a + "/home"), t.state.init = !0, n && FBInstant.player.setDataAsync({
                                    language: a
                                }), t.commit("SET_LANGUAGE", a), t.commit("SET_SESSION_DATA", {
                                    language: a
                                }), e()
                            };
                        if (n.language) a = n.language, s();
                        else {
                            var r = FBInstant.getEntryPointData(),
                                o = FBInstant.getLocale().split("_")[0];
                            a = Me(t, o), "en" === a && r && "post" === r.type && r.locale && "en" !== r.locale && (a = r.locale), "en" === a ? je.get("country").then(function(e) {
                                "PH" === e.data.country && (a = Me(t, "tl")), s(!0)
                            }).catch(function(e) {
                                t.commit("SET_NOTIFICATION", e.message), s(!0)
                            }) : s(!0)
                        }
                        n.shortcut ? t.commit("SET_HIDE_SHORTCUT", !0) : FBInstant.canCreateShortcutAsync().then(function(e) {
                            e || t.commit("SET_HIDE_SHORTCUT", !0)
                        }), n.reject_bot_at && t.commit("SET_REJECT_BOT_AT", n.reject_bot_at), n.contents && t.commit("SET_READ_CONTENTS", n.contents)
                    }).catch(function(e) {
                        t.commit("SET_NOTIFICATION", e.message)
                    })
                },
                SET_LANGUAGE: function(t, e) {
                    FBInstant.player.setDataAsync({
                        language: e
                    }).then(function() {
                        t.commit("RESET_CONTENTS", []), t.commit("SET_CONTENT", {}), t.commit("SET_MORE_CONTENTS", !1), t.commit("SET_BOUNCE", !0), t.state.reload = !0, EventBus.$emit("reload")
                    }).catch(function(e) {
                        t.commit("SET_NOTIFICATION", e.message)
                    })
                },
                SET_CONTENTS: function(t, e) {
                    var n = 0,
                        a = t.state.page,
                        s = function s() {
                            $e.get("content", {
                                params: {
                                    language: t.state.language,
                                    page: a,
                                    domain: t.state.app
                                }
                            }).then(function(n) {
                                n.data.length ? (t.commit("SET_MORE_CONTENTS", !0), t.commit("SET_CONTENTS", n.data)) : t.commit("SET_MORE_CONTENTS", !1), 1 === a && i.a.delay(function() {
                                    ke(t)
                                }, 10), e && e()
                            }).catch(function(e) {
                                if (n < 2) return n += 1, void i.a.delay(s, 500);
                                t.commit("SET_MORE_CONTENTS", !0), t.commit("SET_NOTIFICATION", e.message)
                            })
                        };
                    s()
                },
                SET_CONTENT: function(t, e) {
                    var n = i.a.find(t.state.contents, {
                            id: e
                        }),
                        a = function(e) {
                            "game" === e.type && Ne.push({
                                path: "/game/" + e.title.name
                            }), t.commit("SET_CONTENT", e)
                        };
                    if (n) a(n);
                    else {
                        var s = 0,
                            r = function n() {
                                $e.get("content/" + e).then(function(t) {
                                    a(t.data)
                                }).catch(function(e) {
                                    if (s < 2) return s += 1, void i.a.delay(n, 500);
                                    t.commit("SET_NOTIFICATION", e.message), Ne.push({
                                        name: "home",
                                        replace: !0
                                    })
                                })
                            };
                        r()
                    }
                },
                SET_RECOMMEND: function(t) {
                    var e = i.a.head(i.a.pullAll(t.state.recommends, t.state.read_contents)),
                        n = function(e) {
                            t.commit("SET_RECOMMEND", e)
                        };
                    if (e) {
                        var a = i.a.find(t.state.contents, {
                            id: e
                        });
                        a ? (a.recommend = !0, n(a)) : $e.get("content/" + e).then(function(t) {
                            t.data.recommend = !0, n(t.data)
                        })
                    }
                },
                SET_HIDE_SHORTCUT: function(t, e) {
                    FBInstant.player.setDataAsync({
                        hide_shortcut: e
                    }), t.commit("SET_HIDE_SHORTCUT", e)
                },
                ADD_VIEW: function(t, e) {
                    qe[e] || je.get("content/" + e + "/view ").catch(function() {
                        m.a.captureMessage("View Count Error:" + e)
                    }), qe[e] = !0
                },
                ADD_REFERER: function(t, e) {
                    je.get("content/" + e.id + "/" + (e.result || "result")).catch(function() {
                        m.a.captureMessage("Referer Count Error:" + e.id)
                    }), qe[e.id] = !0
                },
                PUT_SHARE: function(t, e) {
                    je.get("user/" + t.state.me.id + "/" + e).catch(function() {
                        m.a.captureMessage("Share Count Error:" + e)
                    })
                }
            },
            Re = n("e814"),
            Pe = n.n(Re),
            Be = null,
            Fe = function(t, e) {
                t.read_contents = i.a.union([e.id], t.read_contents), FBInstant.player.setDataAsync({
                    contents: i.a.compact(t.read_contents).slice(0, 25)
                })
            },
            Ge = {
                SET_STATUS: function(t, e) {
                    var n = e.split(":");
                    t.status = n[0], t.sub_status = n[1]
                },
                SET_CONTENTS: function(t, e) {
                    "IOS" === FBInstant.getPlatform() && (e = i.a.filter(e, function(t) {
                        return "promo" !== t.type
                    })), i.a.each(e, function(e) {
                        e.read = -1 !== i.a.indexOf(t.read_contents, e.id)
                    }), 0 === t.contents.length && (e = i.a.map(i.a.orderBy(e, ["read"], ["asc"]), function(t, e) {
                        return t.idx = e, t
                    }));
                    var n = i.a.unionBy(t.contents, e, "id");
                    n.length > t.contents.length && (t.contents = n, t.page += 1)
                },
                SET_RECOMMENDS: function(t, e) {
                    t.recommends = i.a.map(i.a.orderBy(e, ["score"], ["desc"]), function(t) {
                        return Pe()(t.id || t, 10)
                    }) || []
                },
                SET_RECOMMEND: function(t, e) {
                    e.language === t.language ? t.contents = i.a.unionBy([e], t.contents, "id") : Fe(t, e)
                },
                SET_READ_CONTENTS: function(t, e) {
                    t.read_contents = e || []
                },
                SET_GAME: function(t, e) {
                    t.game = e
                },
                RESET_CONTENTS: function(t, e) {
                    0 === e.length && (t.page = 1), t.contents = e, t.reset = !0
                },
                SET_FRIENDS: function(t, e) {
                    t.friends = e || []
                },
                SET_FRIEND: function(t, e) {
                    t.friend = e
                },
                SET_RESET: function(t, e) {
                    t.reset = e
                },
                SET_MORE_CONTENTS: function(t, e) {
                    t.more_contents = e
                },
                SET_CONTENT: function(t, e) {
                    e.read = !0, t.content = e, e.id && Fe(t, e)
                },
                SET_ME: function(t) {
                    t.me = {
                        id: FBInstant.player.getID(),
                        name: FBInstant.player.getName(),
                        photo: FBInstant.player.getPhoto()
                    }
                },
                SET_LOADING: function(t, e) {
                    t.loading = e
                },
                SET_BOUNCE: function(t, e) {
                    t.bounce = e
                },
                SET_LANGUAGE: function(t, e) {
                    t.language = e, EventBus.$emit("set:language", e)
                },
                ADD_PAGEVIEW: function(t) {
                    t.pageview += 1
                },
                SET_SESSION_DATA: function(t, e) {
                    t.session_data = i.a.extend(t.session_data, e), FBInstant.setSessionData(t.session_data)
                },
                SET_HIDE_SHORTCUT: function(t, e) {
                    t.hide_shortcut = e
                },
                SET_NOTIFICATION: function(t, e) {
                    t.notification = e, m.a.captureMessage("FB:" + e), clearTimeout(Be), Be = setTimeout(function() {
                        t.notification = null
                    }, 2e3)
                },
                SET_OPEN: function(t, e) {
                    t.open = e
                },
                SET_RESULT: function(t, e) {
                    t.result = e
                },
                SET_REJECT_BOT_AT: function(t, e) {
                    t.reject_bot_at = e
                }
            },
            Ue = {
                games: function(t) {
                    return t.games[t.language] || t.games.en
                }
            };
        s["a"].use(v["a"]);
        var He = new v["a"].Store({
                state: {
                    id: 455676461606571,
                    app: "OMG",
                    test: "a",
                    language: "en",
                    contents: [],
                    page: 1,
                    read_contents: [],
                    recommends: [],
                    more_contents: !1,
                    content: {},
                    result: null,
                    friends: [],
                    friend: null,
                    me: null,
                    loading: !1,
                    bounce: !0,
                    pageview: 0,
                    interstitial: {
                        first: "455676461606571_484205228753694",
                        second: "455676461606571_534312573742959",
                        interval: 2,
                        played: 0,
                        placements: {}
                    },
                    reward: {
                        id: "455676461606571_471636000010617",
                        interval: 3,
                        played: 0
                    },
                    languages: [{
                        label: "English",
                        value: "en"
                    }, {
                        label: "Español",
                        value: "es"
                    }, {
                        label: "Português",
                        value: "pt"
                    }, {
                        label: "Français",
                        value: "fr"
                    }, {
                        label: "ภาษาไทย",
                        value: "th"
                    }, {
                        label: "Bahasa Indonesia",
                        value: "id"
                    }, {
                        label: "Bahasa Melayu",
                        value: "ms"
                    }, {
                        label: "Deutsch",
                        value: "de"
                    }, {
                        label: "Italiano",
                        value: "it"
                    }, {
                        label: "Tiếng Việt",
                        value: "vi"
                    }, {
                        label: "Tagalog",
                        value: "tl"
                    }, {
                        label: "日本語",
                        value: "ja"
                    }, {
                        label: "Türkçe",
                        value: "tr"
                    }, {
                        label: "繁體中文",
                        value: "zh"
                    }, {
                        label: "Nederlands",
                        value: "nl"
                    }, {
                        label: "Pусский",
                        value: "ru"
                    }, {
                        label: "România",
                        value: "ro"
                    }, {
                        label: "Polski",
                        value: "pl"
                    }, {
                        label: "ქართული",
                        value: "ka"
                    }, {
                        label: "українська",
                        value: "uk"
                    }, {
                        label: "हिन्दी",
                        value: "hi"
                    }, {
                        label: "မြန်မာဘာသာ",
                        value: "my"
                    }, {
                        label: "Български",
                        value: "bg"
                    }, {
                        label: "Svenska",
                        value: "sv"
                    }],
                    session_data: {},
                    hide_shortcut: !1,
                    reject_bot_at: null,
                    notification: null,
                    reload: !1,
                    init: !1,
                    reset: !1,
                    open: !1
                },
                actions: ze,
                mutations: Ge,
                getters: Ue
            }),
            Le = He;
        s["a"].use(v["a"]);
        var Qe = {
                en: {
                    share: "Share",
                    disclaimer: "Disclaimer: All content is provided for fun and entertainment purposes only.",
                    try_again: "Try Again",
                    loading_messages: ["Hang on...", "The results will shock you..."],
                    error_message: "OMG! Please try again.",
                    more_quizzes: "Popular among friends",
                    ad_notice: "The result will show after this ad.",
                    trending: "Trending",
                    hot: "Hot",
                    recommend: "Best",
                    start: "Start"
                },
                es: {
                    share: "Compartelo",
                    disclaimer: "Aviso: El contenido total de la página no tiene otro fin que la diversión y el entretenimiento.",
                    try_again: "Inténtalo de nuevo",
                    loading_messages: ["Por favor espera...", "Los resultados te sorprenderán..."],
                    error_message: "¡Caramba! Por favor intenta de nuevo.",
                    more_quizzes: "Popular entre amigos",
                    ad_notice: "El resultado se mostrará después de la publicidad.",
                    trending: "Tendencias",
                    hot: "Caliente",
                    recommend: "Mejor",
                    start: "Start"
                },
                pt: {
                    share: "Compartilhê-lo",
                    disclaimer: "Aviso: Todo o conteúdo é provido somente para fins de diversão e entretenimento.",
                    try_again: "Tente novamente",
                    loading_messages: ["Por favor aguarde...", "Os resultados vão surpreendê-lo..."],
                    error_message: "Meu Deus! Tenta de novo",
                    more_quizzes: "Popular entre amigos",
                    ad_notice: "O resultado será exibido após este anúncio.",
                    trending: "Tendência",
                    hot: "Populares",
                    recommend: "Melhores",
                    start: "Start"
                },
                fr: {
                    share: "Partagez-le",
                    disclaimer: "Clause de non-responsabilité: Tout le contenu est fourni uniquement à des fins d'amusement et de divertissement.",
                    try_again: "Réessayer",
                    loading_messages: ["Attend...", "Les résultats vont vous choquer..."],
                    error_message: "Meu Deus! Tenta de novo",
                    more_quizzes: "Populaire parmi des amis",
                    ad_notice: "Le résultat s'affichera après cette annonce.",
                    trending: "Tendance",
                    hot: "Hot",
                    recommend: "Recommandé",
                    start: "Start"
                },
                it: {
                    share: "Condividi",
                    disclaimer: "Nota: Il contenuto di questa pagina è finalizzato solo per puro divertimento e intrattenimento.",
                    try_again: "Riprova",
                    loading_messages: ["Attendere prego...", "I risultati ti sorprenderanno..."],
                    error_message: "Accipicchia! Prova di nuovo.",
                    more_quizzes: "Popolare tra amici",
                    ad_notice: "Il risultato verrà mostrato subito dopo questo annuncio.",
                    trending: "Trend",
                    hot: "Hot",
                    recommend: "Consigliabile",
                    start: "Start"
                },
                th: {
                    share: "แชร์",
                    disclaimer: "้อตกลงและเงื่อนไข : เนื้อหาทั้งหมดนี้วัตถุประสงค์เพื่อความสนุกและบันเทิงเท่านั้น.",
                    try_again: "ลองอีกครั้ง",
                    loading_messages: ["รอก่อน...", "อุ๊ย ตายแล้ว! ผลลัพธ์จะทำให้คุณประหลาดใจ..."],
                    error_message: "โอ้พระเจ้า! กรุณาลองอีกครั้ง.",
                    more_quizzes: "ป๊อปในหมู่เพื่อน",
                    ad_notice: "The result will show after this ad.",
                    trending: "อินเทรนด์",
                    hot: "ฮอต",
                    recommend: "ดีที่สุด",
                    start: "Start"
                },
                vi: {
                    share: "Chia sẻ",
                    disclaimer: "Cảnh báo: Tất cả nội dung được cung cấp chỉ với mục đích vui nhộn và giải trí.",
                    try_again: "Thử lại",
                    loading_messages: ["Chờ chút...", "Kết quả sẽ làm bạn kinh ngạc đó..."],
                    error_message: "Ối giời ơi! Thử lại đi!",
                    more_quizzes: "Được bạn bè yêu thích",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Xu Hướng",
                    hot: "Hot",
                    recommend: "đề nghị",
                    start: "Start"
                },
                id: {
                    share: "Bagikan",
                    disclaimer: "Catatan: Semua konten yang tersedia hanya bertujuan sebagai hiburan semata.",
                    try_again: "Coba lagi",
                    loading_messages: ["Tunggu sebentar...", "Hasilnya akan membuatmu terkejut..."],
                    error_message: "OH TUHAN! Silakan coba lagi.",
                    more_quizzes: "Populer di kalangan teman-teman",
                    ad_notice: "The result will show after this ad.",
                    trending: "Sedang Ngetren",
                    hot: "Baru",
                    recommend: "Terbaik",
                    start: "Start"
                },
                de: {
                    share: "Teilen",
                    disclaimer: "Hinweis: Der Inhalt dieser Seite ist nur für Spaß und Unterhaltungszwecke.",
                    try_again: "Versuchen Sie es nochmal",
                    loading_messages: ["Abwarten...", "Die Ergebnisse werden Sie überraschen...."],
                    error_message: "OH MEIN GOTT! Bitte versuche es erneut.",
                    more_quizzes: "Beliebt unter Freunden",
                    ad_notice: "The result will show after this ad.",
                    trending: "Trending",
                    hot: "Hot",
                    recommend: "Beste",
                    start: "Start"
                },
                zh: {
                    share: "分享",
                    disclaimer: "聲明：所有遊戲與其內容皆是作為娛樂與有趣的用途",
                    try_again: "再試一次",
                    loading_messages: ["等一下...", "結果會令你震驚..."],
                    error_message: "我的天啊。請再試一次。",
                    more_quizzes: "在朋友中人氣很高",
                    ad_notice: "The result will show after this ad.",
                    trending: "趨勢",
                    hot: "熱门",
                    recommend: "最好",
                    start: "Start"
                },
                ms: {
                    share: "Kongsi",
                    disclaimer: "Disclaimer: All content is provided for fun and entertainment purposes only.",
                    try_again: "Cuba Lagi",
                    loading_messages: ["Bertahan...", "Keputusan akan mengejutkan anda..."],
                    error_message: "OH TUHAN! Sila cuba lagi.",
                    more_quizzes: "Popular di kalangan rakan-rakan",
                    ad_notice: "The result will show after this ad.",
                    trending: "Sohor kini",
                    hot: "Hangat",
                    recommend: "Terbaik",
                    start: "Start"
                },
                tr: {
                    share: "Paylaş",
                    disclaimer: "Yasal Uyarı: Tüm içerik sadece eğlence amaçlı sağlanmaktadır.",
                    try_again: "Tekrar Deneyin",
                    loading_messages: ["Dayan...", "Sonuçlar sizi şaşırtacak ..."],
                    error_message: "AMAN TANRIM! Lütfen tekrar deneyin.",
                    more_quizzes: "Arkadaşlar arasında popüler",
                    ad_notice: "The result will show after this ad.",
                    trending: "Trend",
                    hot: "Ani",
                    recommend: "En Iyi",
                    start: "Start"
                },
                ja: {
                    share: "シェア",
                    disclaimer: "全てのコンテンツは娯楽とエンターテイメントの目的のみで提供しております。",
                    try_again: "再試行",
                    loading_messages: ["ちょっとお待ちください...", "あなたに結果に驚かれるでしょう..."],
                    error_message: "ああ、神様！もう一度お試しください。",
                    more_quizzes: "友達の間で人気",
                    ad_notice: "The result will show after this ad.",
                    trending: "トレンディング",
                    hot: "人気の",
                    recommend: "あなたにぴったり",
                    start: "Start"
                },
                nl: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Delen",
                    disclaimer: "Disclaimer: Alle inhoud wordt alleen verstrekt voor plezier- en amusementsdoeleinden.",
                    try_again: "Probeer opnieuw",
                    loading_messages: ["Ho...", "Je zult van de resultaten schrikken..."],
                    error_message: "OMG! Probeer het opnieuw.",
                    more_quizzes: "Populair onder je vrienden",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Trendy",
                    hot: "Heftige",
                    recommend: "Meest Populaire",
                    start: "Start"
                },
                ru: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Поделиться",
                    disclaimer: "Отказ от ответственности: весь контент предоставляется исключительно в развлекательных целях.",
                    try_again: "Повторить попытку",
                    loading_messages: ["Подождите...", "Результат вас сильно удивит..."],
                    error_message: "О, МОЙ БОГ! Пожалуйста, попробуйте еще раз.",
                    more_quizzes: "Популярны среди друзей",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "В тренде",
                    hot: "Популярные",
                    recommend: "Лучший",
                    start: "Start"
                },
                ro: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Distribuie",
                    disclaimer: "Tot conținutul este furnizat numai pentru distracție și divertisment.",
                    try_again: "Încearcă din nou",
                    loading_messages: ["Așteaptă...", "Rzultatele te vor șoca..."],
                    error_message: "NU-MI VINE SĂ CRED! Vă rugăm să încercați din nou.",
                    more_quizzes: "E posibil de asemenea să-ți placă...",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Ultimele Tendințe",
                    hot: "Super Tare",
                    recommend: "Cel mai bun",
                    start: "Start"
                },
                pl: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Udostępnij",
                    disclaimer: "Wyłączenie odpowiedzialności: cała zawartość jest udostępniana tylko w celach rozrywkowych!",
                    try_again: "Spróbuj ponownie.",
                    loading_messages: ["Wytrzymać...", "Rezultaty cię zaszokują..."],
                    error_message: "O MÓJ BOŻE! Proszę spróbuj ponownie.",
                    more_quizzes: "Popularne wśród znajomych",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Najpopularniejsze",
                    hot: "Najgorętsze",
                    recommend: "Najlepsze",
                    start: "Start"
                },
                ka: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "გაზიარება",
                    disclaimer: "უარყოფა: მოცემული კონტენტი მიზანმიმართულია მხოლოდ გართობისათვის.",
                    try_again: "თავიდან სცადეთ",
                    loading_messages: ["გთხოვთ, დაიცადოთ...", "რეზულტატი გაგაოცებთ..."],
                    error_message: "ღმერთო ჩემო! გთხოვთ, თავიდან სცადოთ!",
                    more_quizzes: "პოპულარული მეგობრებს შორის",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "ტრენდული",
                    hot: "ცხელ-ცხელი",
                    recommend: "საუკეთესო",
                    start: "Start"
                },
                hi: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "साझा करें",
                    disclaimer: "अस्वीकरण: सभी सामग्री केवल मज़ाक और मनोरंजन के उद्देश्यों के लिए प्रदान की गई हैं।",
                    try_again: "फिर से कोशिश करें",
                    loading_messages: ["ठहरो...", "नतीजों से आपको सदमा लगेगा..."],
                    error_message: "हे भगवान! कृपया पुन: प्रयास करें!",
                    more_quizzes: "आप यह भी पसंद कर सकते हैं",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "चलन में",
                    hot: "ताज़ी",
                    recommend: "श्रेष्ठ",
                    start: "Start"
                },
                my: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "ဝေမျှရန်",
                    disclaimer: "မသက်ဆိုင်ကြောင်း ရှင်းလင်းချက်- အကြောင်းအရာများ အားလုံးသည် အပျော်သက်သက် ဖျော်ဖြေမှုအတွက်သာ ဖြစ်ပါသည်။",
                    try_again: "ထပ်ကြိုးစားရန်",
                    loading_messages: ["ခဏ...", "ရလဒ်များသည် သင့်ကို အံ့အားသင့်စေပါလိမ့်မည်..."],
                    error_message: "ဘုရားရေ! ထပ်ကြိုးစားပါ!",
                    more_quizzes: "သင်နှစ်သက်နိုင်သည်များ",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "ခေတ်စားနေသည်များ",
                    hot: "ရေပန်းစားနေသည်များ",
                    recommend: "အကောင်းဆုံး",
                    start: "Start"
                },
                uk: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Поділитися",
                    disclaimer: "Відмова від відповідальності: Увесь вміст передбачено лише для розваги.",
                    try_again: "Повторити спробу",
                    loading_messages: ["Стривайте...", "Результати вас просто вразять..."],
                    error_message: "О, ГОСПОДИ! Повторіть спробу!",
                    more_quizzes: "Популярне серед друзів",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Популярне",
                    hot: "Гаряче",
                    recommend: "Найкраще",
                    start: "Start"
                },
                bg: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Сподели",
                    disclaimer: "Отказ от отговорност: Цялото съдържание се предоставя само за забавни и развлекателни цели.",
                    try_again: "Опитай отново",
                    loading_messages: ["Момент...", "Резултатите ще те шокират..."],
                    error_message: "О, БОЖЕ МОЙ! Моля, опитайте отново!",
                    more_quizzes: "популярен сред приятели",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Тенденции",
                    hot: "Горещи",
                    recommend: "Най-добрият",
                    start: "Start"
                },
                sv: {
                    title: "OMG",
                    description: "It's all that's trending!",
                    share: "Dela",
                    disclaimer: "Ansvarsfriskrivning: Allt innehåll tillhandahålls endast för underhållning.",
                    try_again: "Försök igen",
                    loading_messages: ["Vänta...", "Resultatet kommer att chockera dig..."],
                    error_message: "Hoppsan! Var god försök igen!",
                    more_quizzes: "Populär bland dina vänner",
                    eight: "8Personalities",
                    ad_notice: "The result will show after this ad.",
                    see_more: "See More",
                    trending: "Trendar just nu",
                    hot: "Heta",
                    recommend: "Bästa",
                    start: "Start"
                }
            };
        m.a.config("https://dc26f08f3d8d423bb4b5ef757cc207d5@sentry.io/1338606", {
            sampleRate: .02
        }).install(), Object.defineProperty(s["a"].prototype, "_", {
            value: i.a
        }), s["a"].use(l.a, {
            preLoad: 5
        }), s["a"].use(o["a"]), s["a"].use(r["a"]), d.a.polyfill();
        var Je = new o["a"]({
            messages: Qe,
            fallbackLocale: "en"
        });
        (function(t, e, n, a, i, s, r) {
            t["GoogleAnalyticsObject"] = i, t[i] = t[i] || function() {
                (t[i].q = t[i].q || []).push(arguments)
            }, t[i].l = 1 * new Date, s = e.createElement(n), r = e.getElementsByTagName(n)[0], s.async = 1, s.src = a, r.parentNode.insertBefore(s, r)
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), s["a"].config.productionTip = !1, window.EventBus = new s["a"], window.scrollToHere = function(t) {
            window.scrollTo({
                top: t.offsetTop,
                behavior: "smooth"
            })
        };
        window.onload = function() {
            FBInstant.initializeAsync().then(function() {
                FBInstant.startGameAsync().then(function() {
                    FBInstant.setLoadingProgress(100), m.a.context(function() {
                        new s["a"]({
                            i18n: Je,
                            router: Ne,
                            store: Le,
                            el: "#app",
                            render: function(t) {
                                return t(V)
                            }
                        })
                    })
                })
            })
        }
    },
    "5c0b": function(t, e, n) {
        "use strict";
        var a = n("5e27"),
            i = n.n(a);
        i.a
    },
    "5e27": function(t, e, n) {},
    6070: function(t, e, n) {
        "use strict";
        var a = n("3174"),
            i = n.n(a);
        i.a
    },
    "620c": function(t, e, n) {
        "use strict";
        var a = n("ed95"),
            i = n.n(a);
        i.a
    },
    7912: function(t, e, n) {
        "use strict";
        var a = n("d305"),
            i = n.n(a);
        i.a
    },
    9184: function(t, e, n) {
        t.exports = n.p + "img/slot_banner.e36bc377.jpg"
    },
    "9da7": function(t, e, n) {
        "use strict";
        var a = n("ec97"),
            i = n.n(a);
        i.a
    },
    aada: function(t, e, n) {
        "use strict";
        var a = n("1e17"),
            i = n.n(a);
        i.a
    },
    bb9a: function(t, e, n) {
        "use strict";
        var a = n("be05"),
            i = n.n(a);
        i.a
    },
    be05: function(t, e, n) {},
    bf48: function(t, e, n) {
        "use strict";
        (function(t) {
            n("57e7"), n("28a5"), n("7f7f"), n("6d67"), n("d25f"), n("6b54"), n("87b3"), n("f559");
            var a = n("cebc"),
                i = (n("3b2b"), n("a481"), n("2ef0")),
                s = n.n(i),
                r = n("27d6"),
                o = n.n(r),
                c = n("71f1"),
                l = n("3652"),
                u = n.n(l),
                d = n("bc3a"),
                h = n.n(d),
                m = n("2f62"),
                f = function(t, e, n) {
                    return s.a.each(e, function(e, a) {
                        t = s.a.replace(t, new RegExp(e, "g"), n[a])
                    }), t
                };
            e["a"] = {
                data: function() {
                    return {
                        result: null,
                        media: null,
                        error: !1,
                        type: "image"
                    }
                },
                mounted: function() {
                    this.canvas = this.$refs.canvas, this.ctx = this.canvas.getContext("2d")
                },
                computed: Object(a["a"])({}, Object(m["d"])(["content", "me", "friends", "friend"]), {
                    height: function() {
                        return this.result ? this.result.media.height / this.result.media.width * 600 : 0
                    }
                }),
                methods: Object(a["a"])({
                    show: function(t) {
                        var e = this;
                        this.result = t, this.error = !1, this.result.morph ? h.a.post("https://16personalities.io/api/face_morph/", {
                            sources: [{
                                image_url: this.me.photo,
                                alpha: this.result.morph.alpha
                            }],
                            dest: {
                                image_url: this.result.media.src,
                                bounds: [this.result.morph.bound]
                            },
                            code: ""
                        }, {
                            timeout: 15e3
                        }).then(function(t) {
                            e.media = t.data.image_url[0]
                        }).catch(function() {
                            e.error = !0, u.a.captureMessage("Fail:Image Server:" + e.content.title.text)
                        }).finally(function() {
                            e.draw()
                        }) : this.content.detail.code ? s.a.startsWith(this.content.detail.code, "video:") ? h.a.post("https://16personalities.io/api/generate_movie/", {
                            image_url: this.me.photo,
                            dest_url: this.result.media.src,
                            code: this.content.detail.code,
                            result_id: this.result.id
                        }, {
                            timeout: 15e3
                        }).then(function(t) {
                            e.media = t.data, e.play()
                        }).catch(function() {
                            e.error = !0, e.draw(), u.a.captureMessage("Fail:Image Server:" + e.content.title.text)
                        }) : h.a.post("https://16personalities.io/api/multi_morph/", {
                            image_url: this.me.photo,
                            dest_url: this.result.media.src,
                            code: this.content.detail.code,
                            result_id: this.result.id
                        }, {
                            timeout: 15e3
                        }).then(function(t) {
                            e.media = t.data
                        }).catch(function() {
                            e.error = !0, u.a.captureMessage("Fail:Image Server:" + e.content.title.text)
                        }).finally(function() {
                            e.draw()
                        }) : (this.media = this.result.media.src, this.draw())
                    },
                    draw: function() {
                        var e = this,
                            n = this,
                            a = [],
                            i = 0;
                        this.clear(), this.type = "image";
                        var r = function(n, a, i, s, r, o, c, l) {
                                var u = function() {
                                        if ("greyscale" === c) {
                                            for (var t = e.ctx.getImageData(a, i, s, r), n = 0; n < t.height; n += 1)
                                                for (var o = 0; o < t.width; o += 1) {
                                                    var l = 4 * n * t.width + 4 * o,
                                                        u = (t.data[l] + t.data[l + 1] + t.data[l + 2]) / 3;
                                                    t.data[l] = u, t.data[l + 1] = u, t.data[l + 2] = u
                                                }
                                            e.ctx.putImageData(t, a, i)
                                        }
                                    },
                                    d = new Image;
                                d.onload = function() {
                                    e.ctx.save(), e.ctx.translate(a, i), o && e.ctx.rotate(o / 180 * Math.PI), e.ctx.drawImage(d, 0, 0, s, r), u(), e.ctx.restore(), l()
                                }, d.onerror = l;
                                try {
                                    h.a.get(n, {
                                        responseType: "arraybuffer"
                                    }).then(function(e) {
                                        d.src = "data:image/png;base64," + t.from(e.data, "binary").toString("base64")
                                    }).catch(l)
                                } catch (m) {
                                    d.crossOrigin = "Anonymous", d.src = n
                                }
                            },
                            l = function(t, n, i) {
                                var o = s.a.sampleSize(e.friends, s.a.filter(t, function(t) {
                                        return "friend_photo" === t.type
                                    }).length),
                                    l = 0;
                                Object(c["parallel"])(s.a.map(t, function(t) {
                                    return function(n) {
                                        var i = null;
                                        if ("my_photo" === t.type) i = e.me.photo;
                                        else {
                                            var s = null;
                                            "select_friend_photo" === t.type ? s = e.friend : o.length > 0 ? (s = o[l], l = (l + 1) % o.length) : s = e.me, a.push(s.name), i = s.photo
                                        }
                                        r(i, t.x, t.y, t.size, t.size, t.rotate, t.filter, n)
                                    }
                                }), function(t) {
                                    t ? i(t) : r(n, 0, 0, 600, e.height, 0, null, i)
                                })
                            },
                            d = s.a.groupBy(n.content.detail.composes, function(t) {
                                return "text" === t.type
                            });
                        Object(c["parallel"])([function(t) {
                            l(d.false, e.media, t)
                        }, function(t) {
                            var e = s.a.groupBy(s.a.filter(s.a.map(d.true, "font"), function(t) {
                                return t && "arial" !== t
                            }), function(t) {
                                return s.a.startsWith(t, "GF:")
                            });
                            if (s.a.isEmpty(e)) t();
                            else {
                                var n = {
                                    active: t,
                                    inactive: t
                                };
                                e.false && (n.custom = {
                                    families: e.false
                                }), e.true && (n.google = {
                                    families: s.a.map(e.true, function(t) {
                                        return t.slice(3)
                                    })
                                }), o.a.load(n)
                            }
                        }], function(t) {
                            if (t) return u.a.captureMessage("Load Image: " + e.content.title.text), e.error = !0, void e.$parent.$emit("loaded:result");
                            s.a.each(d.true, function(t) {
                                var s = function(e) {
                                        return (t.style ? t.style + " " : "") + e + "px " + (t.font ? t.font.replace("GF:", "") : "Arial")
                                    },
                                    r = f(t.text, ["{{result}}", "{{me:name}}", "{{me:first_name}}", "{{me:initial}}", "{{input}}"], [n.result.text, n.me.name, n.me.name.split(" ")[0], n.me.name.charAt(0).toUpperCase(), n.result.answer]);
                                if (-1 !== r.indexOf("{{friend:")) {
                                    var o = a[i] || "";
                                    i = (i + 1) % a.length, r = f(r, ["{{friend:name}}", "{{friend:first_name}}", "{{friend:initial}}"], [o, o.split(" ")[0], o.charAt(0).toUpperCase()])
                                }
                                t.transform && (r = "uppercase" === t.transform ? r.toUpperCase() : r.toLowerCase()), e.ctx.save(), e.ctx.fillStyle = t.color, e.ctx.textAlign = t.align, e.ctx.font = s(t.size), e.ctx.translate(t.x, t.y), t.rotate && e.ctx.rotate(t.rotate / 180 * Math.PI), t.stroke_color && (e.ctx.strokeStyle = t.stroke_color, e.ctx.lineWidth = t.stroke_width || 3, e.ctx.strokeText(r, 0, 0));
                                try {
                                    var c = e.ctx.measureText(r).width;
                                    if (c && (t.width = t.width || 600, c > t.width)) {
                                        var l = Math.floor(t.size * t.width / (c || 1));
                                        e.ctx.font = s(l)
                                    }
                                } catch (u) {}
                                e.ctx.fillText(r, 0, 0), e.ctx.restore()
                            }), e.$parent.$emit("loaded:result")
                        })
                    },
                    play: function() {
                        var t = this;
                        this.type = "video", s.a.defer(function() {
                            t.$refs.video.oncanplay = function() {
                                t.$parent.$emit("loaded:result")
                            }
                        })
                    },
                    clear: function() {
                        this.ctx && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                }, Object(m["c"])(["SET_NOTIFICATION"])),
                destroyed: function() {
                    this.clear()
                }
            }
        }).call(this, n("b639").Buffer)
    },
    cb13: function(t, e, n) {
        "use strict";
        var a = n("1054"),
            i = n.n(a);
        i.a
    },
    d2d4: function(t, e, n) {},
    d305: function(t, e, n) {},
    d353: function(t, e, n) {
        t.exports = n.p + "img/slot_icon.e7e41c02.png"
    },
    d769: function(t, e, n) {
        "use strict";
        var a = n("38c3"),
            i = n.n(a);
        i.a
    },
    e0b6: function(t, e, n) {
        "use strict";
        var a = n("4a7d"),
            i = n.n(a);
        i.a
    },
    e4cc: function(t, e, n) {
        "use strict";
        var a = n("514a"),
            i = n.n(a);
        i.a
    },
    ec97: function(t, e, n) {},
    ed7b: function(t, e, n) {
        "use strict";
        var a = n("05c5"),
            i = n.n(a);
        i.a
    },
    ed95: function(t, e, n) {},
    f911: function(t, e, n) {}
});