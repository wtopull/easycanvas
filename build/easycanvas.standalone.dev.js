(function t(e, r) {
    if (typeof exports === "object" && typeof module === "object") module.exports = r(); else if (typeof define === "function" && define.amd) define([], r); else {
        var n = r();
        for (var a in n) (typeof exports === "object" ? exports : e)[a] = n[a];
    }
})(this, function() {
    return function(t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var a = e[n] = {
                exports: {},
                id: n,
                loaded: false
            };
            t[n].call(a.exports, a, a.exports, r);
            a.loaded = true;
            return a.exports;
        }
        r.m = t;
        r.c = e;
        r.p = "";
        return r(0);
    }([ function(t, e, r) {
        t.exports = r(38);
    }, function(t, e) {
        "use strict";
        var r = {
            isArray: Array.isArray || function(t) {
                return Object.prototype.toString.call(t) === "[object Array]";
            },
            funcOrValue: function t(e, r) {
                if (typeof e === "function") {
                    return e.call(r);
                }
                return e;
            },
            execFuncs: function t(e, n, a) {
                if (e) {
                    if (!r.isArray(a)) {
                        a = [ a ];
                    }
                }
                if (typeof e === "function") {
                    e.apply(n, a);
                } else if (r.isArray(e)) {
                    e.length && e.forEach(function(t) {
                        t && t.apply(n, a);
                    });
                }
            },
            blend: [ "source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "copy", "xor", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity" ],
            pointInRect: function t(e, r, n, a, i, o) {
                return !(e < n || e > a || r < i || r > o);
            },
            firstValuable: function t(e, r, n) {
                return typeof e === "undefined" ? typeof r === "undefined" ? n : r : e;
            }
        };
        t.exports = r;
    }, function(t, e) {
        "use strict";
        var r = 3.141593;
        t.exports = function(t, e, n, a, i, o) {
            var s = i ? -i / 180 * r : 0;
            var l = t, f = e;
            if (i) {
                l = (t - n) * Math.cos(s) - (e - a) * Math.sin(s) + n;
                f = (t - n) * Math.sin(s) + (e - a) * Math.cos(s) + a;
            }
            if (o) {
                return [ l, f ];
            }
            return {
                x: l,
                y: f
            };
        };
    }, , function(t, e) {
        "use strict";
        t.exports = {
            xywh: [ "sx", "sy", "sw", "sh", "tx", "ty", "tw", "th" ],
            txywh: [ "tx", "ty", "tw", "th" ],
            sxywh: [ "sx", "sy", "sw", "sh" ],
            devFlag: "__EASYCANVAS_DEVTOOL__",
            version: "0.6.2"
        };
    }, , , , , function(t, e) {
        "use strict";
        var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        var n = {};
        var a = [];
        var i = "processing";
        var o = 0;
        var s = function t(e, i, s) {
            var l = s || {};
            var f = t.cacheCanvas;
            if ((typeof e === "undefined" ? "undefined" : r(e)) === "object") {
                var u = e;
                l.callbackArgs = l.callbackArgs || [];
                t(u.shift(), function(e) {
                    l.callbackArgs.push(e);
                    if (u.length > 1) {
                        t(u, i, l);
                    } else {
                        t(u[0], function(t) {
                            l.callbackArgs.push(t);
                            i(l.callbackArgs);
                        }, l);
                    }
                }, s);
                return;
            }
            var c = e + "_" + JSON.stringify(s) + "_" + f;
            if (n[c]) {
                if (i) {
                    if (n[c].width && i) {
                        i(n[c]);
                    } else {
                        setTimeout(function() {
                            t(e, i, s);
                        }, 100);
                    }
                    return;
                } else {
                    return n[c];
                }
            }
            var d = new Image();
            if (l.block) {
                d.src = e;
                o++;
            } else if (o === 0) {
                d.src = e;
            } else {
                a.push({
                    imgObj: d,
                    src: e
                });
            }
            n[c] = d;
            var h = void 0;
            if (l.canvas || l.alphaColor || f) {
                h = document.createElement("canvas");
                h.width = h.height || 0;
                n[c] = h;
            }
            d.onload = function() {
                if (d.src.substr(-3) === "jpg" || d.src.substr(-3) === "jpeg" || d.src.substr(-3) === "bmp") {
                    d.$noAlpha = true;
                } else if (d.src.indexOf("data:image/jpg;") === 0) {
                    d.$noAlpha = true;
                }
                if (l.block) {
                    o--;
                    if (o === 0) {
                        a.forEach(function(t) {
                            t.imgObj.src = t.src;
                        });
                        a.splice(0);
                    }
                }
                if (h && (l.canvas || l.alphaColor || f)) {
                    var t = h.getContext("2d");
                    h.width = d.width;
                    h.height = d.height;
                    h.$noAlpha = d.$noAlpha;
                    t.drawImage(d, 0, 0);
                    if (l.alphaColor) {
                        var e = t.getImageData(0, 0, d.width, d.height);
                        var r = [];
                        for (var n = 0; n < e.data.length; n += 4) {
                            var s = e.data[n] + e.data[n + 1] + e.data[n + 2];
                            var u = 1;
                            if (e.data[n] < u && e.data[n + 1] < u && e.data[n + 2] < u) {
                                e.data[n + 3] = Math.floor(s / 255);
                            }
                        }
                        t.putImageData(e, 0, 0);
                        h.$noAlpha = false;
                    }
                    d = h;
                }
                if (i) {
                    i(d);
                }
            };
            d.onerror = function() {
                n[c] = d;
            };
            return h || d;
        };
        s.cacheCanvas = false;
        t.exports = s;
    }, function(t, e) {
        "use strict";
        var r = "processing";
        var n = {};
        function a(t, e) {
            if (t && t.match(/^data:/)) {
                e && e(t);
                return;
            }
            if (n[t]) {
                if (n[t] !== r) {
                    e(n[t]);
                } else {
                    setTimeout(function() {
                        a(t, e);
                    }, 100);
                }
                return;
            }
            n[t] = r;
            var i = new XMLHttpRequest();
            i.onload = function() {
                var r = new FileReader();
                r.onloadend = function() {
                    n[t] = r.result;
                    e && e(r.result);
                };
                r.readAsDataURL(i.response);
            };
            i.open("GET", t);
            i.responseType = "blob";
            i.send();
        }
        t.exports = a;
    }, function(t, e, r) {
        "use strict";
        var n = r(2);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = 3.141593;
        t.exports = function(t, e, r, n, a, i, s, l, f) {
            var u = f ? -f / 180 * o : 0;
            if (f) {
                t = (t - s) * Math.cos(f) - (e - l) * Math.sin(f) + s;
                e = (t - s) * Math.sin(f) + (e - l) * Math.cos(f) + l;
            }
            return t >= r && t <= r + a && e >= n && e <= n + i;
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(2);
        var a = s(n);
        var i = r(11);
        var o = s(i);
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t, e, r, n, a, i, s, l, f, u, c) {
            if (!c) {
                if (e > i + l) return false;
                if (i > e + n) return false;
                if (t > a + s) return false;
                if (a > t + r) return false;
            }
            var d = (0, o.default)(t, e, a, i, s, l, f, u, c) || (0, o.default)(t + r, e, a, i, s, l, f, u, c) || (0, 
            o.default)(t, e + n, a, i, s, l, f, u, c) || (0, o.default)(t + r, e + n, a, i, s, l, f, u, c);
            if (d) return true;
            var h = (0, o.default)(a, i, t, e, r, n, f, u, -c) || (0, o.default)(a + s, i, t, e, r, n, f, u, -c) || (0, 
            o.default)(a, i + l, t, e, r, n, f, u, -c) || (0, o.default)(a + s, i + l, t, e, r, n, f, u, -c);
            if (h) return true;
            if (e > i && e + n < i + l && t < a && t + r > a + s) return true;
            if (t > a && t + r < a + s && e < i && e + n > i + l) return true;
            return false;
        };
    }, function(t, e, r) {
        "use strict";
        var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
            return typeof t;
        } : function(t) {
            return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        var a = r(1);
        var i = A(a);
        var o = r(4);
        var s = A(o);
        var l = r(19);
        var f = A(l);
        var u = r(18);
        var c = A(u);
        var d = r(16);
        var h = A(d);
        var v = r(17);
        var p = A(v);
        var g = r(20);
        var y = A(g);
        var $ = r(15);
        var x = A($);
        var m = r(32);
        var w = A(m);
        var b = r(31);
        var k = A(b);
        var S = r(33);
        var T = A(S);
        function A(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var O = 0;
        var F = function t(e) {
            if (e.children) {
                e.children.forEach(function(r, n) {
                    if (!r.$id) {
                        e.children[n] = new V(r);
                    }
                    if (e.$id && !e.$dom) {
                        e.children[n].$canvas = e.$canvas;
                        e.children[n].$parent = e;
                    } else {
                        e.children[n].$canvas = e;
                    }
                    t(e.children[n]);
                });
            }
        };
        var M = function t(e) {
            var r = e || {};
            if (!r.$id) {
                r.$id = Math.random().toString(36).substr(2);
            }
            r.$tickedTimes = r.$tickedTimes || 0;
            r.content = r.content || {};
            r.style = r.style || {};
            r.style.tx = r.style.tx || 0;
            r.style.ty = r.style.ty || 0;
            r.style.scale = i.default.firstValuable(r.style.scale, 1);
            r.style.opacity = i.default.firstValuable(r.style.opacity, 1);
            r.style.zIndex = r.style.zIndex || 0;
            r.style.locate = r.style.locate || "center";
            var n = i.default.funcOrValue(r.content.img);
            s.default.xywh.forEach(function(t) {
                r.style[t] = r.style[t] || 0;
            });
            r.events = r.events || {};
            if (true) {
                for (var a in r.events) {
                    if (typeof r.events[a] !== "function" && a !== "eIndex") {
                        console.warn("[Easycanvas] Handler " + a + " is not a function.", r.events[a]);
                    }
                }
            }
            if (true) {
                r.$addIndex = O++;
            }
            r.events.eIndex = r.events.eIndex;
            r.hooks = r.hooks || {};
            if (true) {
                r.$perf = {};
            }
            if (true) {
                if (!r.name && r.content.img && r.content.img.src) {
                    var o = r.content.img.src.match(/.*\/([^\/]*)$/);
                    if (o && o[1]) {
                        r.name = o[1];
                    }
                }
                r.name = r.name || "Unnamed Sprite";
            }
            r.children = r.children || [];
            F(r);
            r.$cache = {};
            r.$styleCacheTime = {};
            return r;
        };
        var R = function t(e) {
            var r = this;
            this.$extendList.forEach(function(t) {
                t.call(r, e);
            });
        };
        var V = function t(e) {
            var r = M(e);
            for (var n in r) {
                if (Object.prototype.hasOwnProperty.call(r, n)) {
                    this[n] = r[n];
                }
            }
            R.call(this, r);
            return this;
        };
        V.prototype.$extendList = [];
        V.prototype.add = function(t) {
            if (!t) {
                return;
            }
            this.children.push(t);
            F(this);
            return this.children[this.children.length - 1];
        };
        V.prototype.getRect = function(t) {
            var e = this;
            var r = {};
            s.default.txywh.forEach(function(t) {
                r[t] = e.getStyle(t);
            });
            if (r.tw === 0 && this.content.img && !t) {
                var n = i.default.funcOrValue(this.content.img, this);
                r.tw = n.width;
                r.th = n.height;
            }
            var a = this.getStyle("locate");
            if (a === "lt") {} else if (a === "ld") {
                r.ty -= r.th;
            } else if (a === "rt") {
                r.tx -= r.tw;
            } else if (a === "rd") {
                r.tx -= r.tw;
                r.ty -= r.th;
            } else {
                r.tx -= r.tw >> 1;
                r.ty -= r.th >> 1;
            }
            return r;
        };
        V.prototype.getSelfStyle = function(t) {
            var e = {};
            if (t) {
                return i.default.funcOrValue(this.style[t], this);
            }
            for (var r in this.style) {
                e[r] = i.default.funcOrValue(this.style[r], this);
            }
            return e;
        };
        V.prototype.getStyle = function(t) {
            var e = this;
            var r = e.$canvas.$lastPaintTime;
            if (e.$cache[t] !== undefined) {
                return e.$cache[t];
            }
            var n = i.default.funcOrValue(e.style[t], e);
            if (e.$parent) {
                var a = void 0;
                a = t === "tx" || t === "ty" || t === "scale" || t === "opacity";
                if (a) {
                    var o = e.$parent.getStyle(t);
                    if (t === "opacity" || t === "scale") {
                        o = i.default.firstValuable(o, 1);
                        return o * i.default.firstValuable(n, 1);
                    } else {
                        o = i.default.firstValuable(o, 0);
                        return o + i.default.firstValuable(n, 0);
                    }
                }
            }
            return n;
        };
        V.prototype.remove = function(t) {
            if (t) {
                this.$canvas.remove(t);
                i.default.execFuncs(t.hooks.removed, t);
                return;
            }
            if (this.$parent) {
                this.$parent.remove(this);
            } else {
                this.$canvas.remove(this);
            }
            i.default.execFuncs(this.hooks.removed, this);
        };
        V.prototype.update = function(t) {
            if (!t) return;
            for (var e in t) {
                if (n(t[e]) === "object") {
                    for (var r in t[e]) {
                        this[e][r] = t[e][r];
                    }
                } else {
                    this[e] = t[e];
                }
            }
        };
        V.prototype.getAllChildren = function(t) {
            var e = this;
            var r = t ? [ e ] : [];
            e.children.forEach(function(t) {
                r = r.concat(t.getAllChildren(true));
            });
            return r;
        };
        V.prototype.getOuterRect = w.default;
        V.prototype.combine = k.default;
        V.prototype.uncombine = T.default;
        V.prototype.combineAsync = function() {
            this.on("ticked", this.combine, 100);
            return this;
        };
        V.prototype.nextTick = p.default;
        V.prototype.on = f.default;
        V.prototype.off = c.default;
        V.prototype.clear = h.default;
        V.prototype.trigger = y.default;
        V.prototype.broadcast = x.default;
        t.exports = V;
    }, , function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function() {
            var t = Array.prototype.slice.call(arguments);
            var e = t.shift();
            if (this.hooks[e]) {
                a.default.execFuncs(this.hooks[e], this, t);
            }
            t.unshift(e);
            this.children && this.children.forEach(function(e) {
                e.broadcast.apply(e, t);
            });
        };
    }, function(t, e) {
        "use strict";
        t.exports = function() {
            this.children.forEach(function(t) {
                t.remove();
            });
            this.children = [];
        };
    }, function(t, e) {
        "use strict";
        t.exports = function(t) {
            var e = function e() {
                t.apply(this, arguments);
                this.off("ticked", e);
            };
            this.on("ticked", e);
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t, e) {
            if (!this.hooks[t]) return;
            if (this.hooks[t] === e || this.hooks[t].$handle === e || !e) {
                delete this.hooks[t];
            } else if (a.default.isArray(this.hooks[t])) {
                if (this.hooks[t].indexOf(e) >= 0) {
                    this.hooks[t][this.hooks[t].indexOf(e)] = undefined;
                } else if (this.hooks[t].indexOf(e.$handle) >= 0) {
                    this.hooks[t][this.hooks[t].indexOf(e.$handle)] = undefined;
                }
            }
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t, e, r) {
            var n = e;
            if (r) {
                var i = this;
                n = function t() {
                    var a = Date.now();
                    if (a > n.$lastTriggerTime + r) {
                        n.$lastTriggerTime = a;
                        var o = Array.prototype.slice.call(arguments);
                        e.apply(i, o);
                    }
                };
                n.$lastTriggerTime = -1;
                n.$handle = e;
            }
            if (!this.hooks[t]) {
                this.hooks[t] = n;
            } else if (a.default.isArray(this.hooks[t])) {
                this.hooks[t].push(n);
            } else {
                this.hooks[t] = [ this.hooks[t], n ];
            }
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function() {
            var t = Array.prototype.slice.call(arguments);
            var e = t.shift();
            if (this.hooks[e]) {
                return a.default.execFuncs(this.hooks[e], this, t);
            }
        };
    }, , , , , , , , function(t, e) {
        "use strict";
        var r = function t(e) {
            setTimeout(e, 1e3 / 60);
        };
        var n = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || r : r;
        t.exports = n;
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = 3.141593;
        var i = function t(e) {
            return e.$lastPaintTime || Date.now();
        };
        var o = {
            linear: function t(e, r, n) {
                var a = i(this);
                var o = false;
                var s = void 0;
                var l = function() {
                    var t = this.$lastPaintTime;
                    var i = (t - a) / n;
                    var f = (r - e) * i + e;
                    if (o) {
                        if (r > e) {
                            while (f > r) {
                                f -= r - e;
                            }
                        } else {
                            while (f < r) {
                                f += e - r;
                            }
                        }
                    } else {
                        if (r > e && f > r) {
                            l.$done = true;
                            f = r;
                        } else if (r < e && f < r) {
                            l.$done = true;
                            f = r;
                        }
                    }
                    if (i >= 1 && s) {
                        s.call(this, f);
                        s = null;
                    }
                    return f;
                }.bind(this);
                l.loop = function() {
                    o = true;
                    return l;
                };
                l.restart = function() {
                    a = i(this);
                    return l;
                };
                l.then = function(t) {
                    s = t;
                    return l;
                };
                return l;
            },
            pendulum: function t(e, r, n, o) {
                var s = i(this);
                var l = o || {};
                l.start = l.start || 0;
                var f = false;
                var u = void 0;
                var c = l.cycle || 1;
                var d = function() {
                    var t = i(this);
                    var o = (t - s) / n;
                    if (!f) {
                        if (c) {
                            if (o > c) {
                                o = c;
                                d.$done = true;
                                o = c;
                            }
                        } else if (o > 1) {
                            d.$done = true;
                            o = 1;
                        }
                    } else {
                        if (c) {
                            o %= c;
                        }
                    }
                    var h = o * a * 2 - a / 2 + l.start / 360 * a;
                    var v = (r - e) * (Math.sin(h) + 1) / 2 + e;
                    if (o >= c && u) {
                        u.call(this, v);
                        u = null;
                    }
                    return v;
                }.bind(this);
                d.loop = function() {
                    f = true;
                    return d;
                };
                d.restart = function() {
                    s = i(this);
                    return d;
                };
                d.then = function(t) {
                    u = t;
                    return d;
                };
                return d;
            },
            ease: function t(e, r, n) {
                return this.pendulum(e, r, n * 2, {
                    cycle: .5
                });
            },
            oneByOne: function t(e) {
                var r = e;
                var n = false;
                var a = function t() {
                    for (var e = 0; e < r.length; e++) {
                        if (!r[e].$done) {
                            return r[e]();
                        } else if (!r[e].$nextRestart) {
                            r[e].$nextRestart = true;
                            if (r[e + 1]) {
                                r[e + 1].restart();
                                return r[e + 1]();
                            }
                        }
                    }
                    if (n) {
                        for (var a = 0; a < r.length; a++) {
                            r[a].$done = false;
                            r[a].$nextRestart = false;
                            r[a].restart();
                        }
                        return r[0]();
                    }
                    return r[r.length - 1]();
                };
                a.loop = function() {
                    n = true;
                    return a;
                };
                return a;
            }
        };
        var s = function t(e, r, a, i, s) {
            var l = (0, n.funcOrValue)(e[r]);
            if (true) {
                if (typeof l === "undefined") {
                    console.warn("[Easycanvas] start value in transition is undefined, using 0 instead.");
                }
            }
            l = l || 0;
            e[r] = o[a].bind(t)(l, i, s);
        };
        for (var l in o) {
            s[l] = o[l];
        }
        t.exports = s;
    }, function(t, e, r) {
        "use strict";
        var n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        t[n] = r[n];
                    }
                }
            }
            return t;
        };
        var a = r(4);
        var i = l(a);
        var o = r(1);
        var s = l(o);
        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        if (true) {
            if (!window[i.default.devFlag]) {
                var f = window[i.default.devFlag] = {
                    isPaintRecording: false,
                    selectMode: false,
                    current: {},
                    version: i.default.version,
                    $canvas: {},
                    $plugin: null
                };
                var u = {
                    getSprite: function t(e) {
                        if (!f.isPaintRecording) return [];
                        var r = {};
                        if (e) {
                            var a = f.$canvas[e].children;
                            var o = f.$canvas[e].$children;
                            var l = function t(e) {
                                if (e.name === i.default.devFlag) return;
                                r[e.$id] = {
                                    name: e.name,
                                    $addIndex: e.$addIndex,
                                    parent: e.$parent && e.$parent.$id,
                                    style: {},
                                    children: e.children.filter(function(t) {
                                        return t.name !== i.default.devFlag;
                                    }).map(function(t) {
                                        return t.$id;
                                    }),
                                    rendered: e.$rendered
                                };
                                for (var n in e.style) {
                                    r[e.$id].style[n] = s.default.funcOrValue(e.style[n], e);
                                }
                                i.default.xywh.forEach(function(t) {
                                    r[e.$id].style[t] = Math.round(r[e.$id].style[t]);
                                });
                                [ "physics", "$perf" ].forEach(function(t) {
                                    r[e.$id][t] = e[t];
                                });
                                if (e.webgl) {
                                    r[e.$id].webgl = {};
                                    [ "rx", "ry", "rz", "tx", "ty", "tz" ].forEach(function(t) {
                                        r[e.$id].webgl[t] = s.default.funcOrValue(e.webgl[t], e);
                                    });
                                }
                                if (e.children) {
                                    e.children.sort(function(t, e) {
                                        return t.$addIndex < e.$addIndex ? -1 : 1;
                                    }).forEach(t);
                                }
                            };
                            a.sort(function(t, e) {
                                return t.$addIndex < e.$addIndex ? -1 : 1;
                            }).forEach(l);
                        } else {
                            for (var u in f.$canvas) {
                                r = n(r, f.$plugin.getSprite(u));
                            }
                        }
                        return r;
                    },
                    selectSpriteById: function t(e, r) {
                        if (!r) {
                            for (var n in f.$canvas) {
                                var a = u.selectSpriteById(e, n);
                                if (a) {
                                    return {
                                        $sprite: a.$sprite || a,
                                        $canvas: f.$canvas[n]
                                    };
                                }
                            }
                            return false;
                        }
                        var i = function t(n) {
                            for (var a = 0; a < n.length; a++) {
                                if (n[a].$id === e) return n[a];
                                var i = t(n[a].children);
                                if (i) {
                                    return {
                                        $sprite: i.$sprite || i,
                                        $canvas: f.$canvas[r]
                                    };
                                }
                            }
                            return false;
                        };
                        var o = f.$canvas[r].children;
                        var s = i(o);
                        if (s) {
                            return {
                                $sprite: s.$sprite || s,
                                $canvas: f.$canvas[r]
                            };
                        }
                    },
                    updateSprite: function t(e) {
                        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "style";
                        var a = arguments[2];
                        var i = arguments[3];
                        var o = u.selectSpriteById(e, i).$sprite;
                        if (!o) console.warn("Sprite " + spriteId + " Not Found.");
                        n(o[r], a);
                    },
                    highlightSprite: function t(e, r, n) {
                        f.selectMode = Boolean(r);
                        var a = u.selectSpriteById(e, n);
                        var i = a.$sprite;
                        var o = a.$canvas;
                        if (r && o && i) {
                            o.$plugin.selectSprite(false, o, i);
                        } else if (o) {
                            o.$plugin.cancelSelectSprite(o);
                        }
                    },
                    sendGlobalHook: function t(e, r) {
                        var n = u.selectSpriteById(e, r);
                        var a = n.$sprite;
                        var i = n.$canvas;
                        console.log("%c window.$0 = %c Current Sprite(" + a.name + ") %c ", "background:#4086f4 ; padding: 2px 0; border-radius: 2px 0 0 2px;  color: #fff", "background:#41b883 ; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff", "background:transparent");
                        window.$0 = a;
                        window.$1 = i;
                    },
                    pause: function t(e, r) {
                        var n = f.$canvas[e];
                        n.$pausing = typeof r !== "undefined" ? r : !n.$pausing;
                    },
                    getPerf: function t() {
                        var e = {
                            canvas: [],
                            navigator: {
                                clientWidth: document.body.clientWidth,
                                clientHeight: document.body.clientHeight,
                                devicePixelRatio: window.devicePixelRatio
                            }
                        };
                        if (!f.isPaintRecording) return e;
                        for (var r in f.$canvas) {
                            e.canvas.push({
                                $id: r,
                                name: f.$canvas[r].name,
                                perf: f.$canvas[r].$perf,
                                fps: f.$canvas[r].lastFps,
                                size: {
                                    styleWidth: f.$canvas[r].$dom.getBoundingClientRect().width || parseInt(f.$canvas[r].$dom.style.width) || f.$canvas[r].$dom.width,
                                    styleHeight: f.$canvas[r].$dom.getBoundingClientRect().height || parseInt(f.$canvas[r].$dom.style.height) || f.$canvas[r].$dom.height,
                                    canvasWidth: f.$canvas[r].$dom.width,
                                    canvasHeight: f.$canvas[r].$dom.height
                                }
                            });
                        }
                        return e;
                    }
                };
                f.$plugin = u;
            }
        }
    }, function(t, e, r) {
        "use strict";
        var n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        t[n] = r[n];
                    }
                }
            }
            return t;
        };
        var a = r(1);
        var i = o(a);
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var s = 1;
        var l = 2;
        var f = 3;
        t.exports = function() {
            var t = this;
            setTimeout(function() {
                var e = t;
                if (e.$combine) return s;
                if (i.default.funcOrValue(e.style.visible, e) === false) return f;
                var r = t.$canvas;
                var a = e.getRect();
                if (a.tx < 0 || a.tr > r.width) return l;
                if (a.ty < 0 || a.tb > r.height) return l;
                var o = e.getAllChildren(true);
                for (var u = 0; u < o.length; u++) {
                    var c = o[u];
                    var d = c.content.img;
                    if (d && d.src) {
                        if (!d.$painted || d.width === 0 || d.complete === false || d.naturalHeight === 0) {
                            return f;
                        }
                    }
                    if (c.getStyle("scale") !== 1) {
                        return f;
                    }
                }
                var h = e.getOuterRect();
                h.tx = Math.floor(h.tx);
                h.ty = Math.floor(h.ty);
                h.tw = Math.round(h.tw);
                h.th = Math.round(h.th);
                h.tr = Math.round(h.tr);
                h.tb = Math.round(h.tb);
                if (h.tx < 0 || h.tr > r.width) return l;
                if (h.ty < 0 || h.tb > r.height) return l;
                var v = r.$children.filter(function(t) {
                    for (var e = 0; e < o.length; e++) {
                        if (o[e].$id === t.$id) return true;
                    }
                });
                var p = r.$children;
                var g = e.getStyle("opacity");
                v.forEach(function(t) {
                    t.settings.$combineGlobalAlpha = t.settings.globalAlpha;
                    t.settings.globalAlpha = g > 0 ? t.settings.globalAlpha / g : 1;
                });
                r.$children = v;
                r.$paintContext.clearRect(0, 0, r.width, r.height);
                r.$lastTickChildren = false;
                r.$render();
                v.forEach(function(t) {
                    t.settings.globalAlpha = t.settings.$combineGlobalAlpha;
                });
                var y = document.createElement("canvas");
                y.width = h.tw;
                y.height = h.th;
                var $ = y.getContext("2d");
                $.drawImage(r.$dom, h.tx, h.ty, h.tw, h.th, 0, 0, h.tw, h.th);
                e.children.forEach(function(t) {
                    t.$cache = {};
                });
                e.$combine = {
                    content: e.content,
                    children: e.children,
                    style: e.style
                };
                e.children = [];
                e.content = {
                    img: y
                };
                var x = e.getSelfStyle("tx") - (Math.floor(a.tx) - h.tx);
                var m = e.getSelfStyle("ty") - (Math.floor(a.ty) - h.ty);
                e.style = n({}, e.style, {
                    scale: 1,
                    tx: x,
                    ty: m,
                    tw: y.width,
                    th: y.height
                });
                r.$children = p;
                r.$lastTickChildren = false;
                r.paint();
                e.off("ticked", t.combine);
                return s;
            });
        };
    }, function(t, e) {
        "use strict";
        t.exports = function() {
            var t = this;
            var e = t.getRect();
            e.tr = e.tx + e.tw;
            e.tb = e.ty + e.th;
            this.children.forEach(function(t) {
                var r = t.getOuterRect();
                if (r.tx < e.tx) e.tx = r.tx;
                if (r.ty < e.ty) e.ty = r.ty;
                if (r.tr > e.tr) e.tr = r.tr;
                if (r.tb > e.tb) e.tb = r.tb;
                e.tw = e.tr - e.tx;
                e.th = e.tb - e.ty;
            });
            return e;
        };
    }, function(t, e) {
        "use strict";
        var r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) {
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        t[n] = r[n];
                    }
                }
            }
            return t;
        };
        t.exports = function() {
            r(this, this.$combine);
            this.$combine = false;
        };
    }, , , , , function(t, e, r) {
        "use strict";
        var n = r(4);
        var a = T(n);
        var i = r(59);
        var o = T(i);
        var s = r(28);
        var l = T(s);
        var f = r(101);
        var u = T(f);
        var c = r(1);
        var d = T(c);
        var h = r(29);
        var v = T(h);
        var p = r(9);
        var g = T(p);
        var y = r(100);
        var $ = T(y);
        var x = r(102);
        var m = T(x);
        var w = r(13);
        var b = T(w);
        var k = r(30);
        var S = T(k);
        function T(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var A = {
            painter: o.default,
            imgLoader: g.default,
            imgPretreat: $.default,
            multlineText: m.default,
            transition: v.default,
            tick: l.default,
            utils: d.default,
            mirror: u.default,
            class: {
                sprite: b.default
            },
            sprite: b.default,
            $version: a.default.version,
            env: "develop"
        };
        A.extend = function(t) {
            var e = A.sprite.prototype.$extendList;
            if (e.indexOf(t) >= 0) return;
            e.push(t);
        };
        A.use = function(t) {
            var e = A.painter.prototype.$extendList;
            if (e.indexOf(t) >= 0) return;
            if (t.onUse) {
                t.onUse(A);
            }
            e.push(t);
        };
        A.component = function(t, e) {
            t(A, e);
        };
        var O = typeof window !== "undefined";
        if (O) {
            if (window.Easycanvas) {
                console.warn("[Easycanvas] already loaded, it should be loaded only once.");
            } else {
                if (true) {
                    setTimeout(function() {
                        console.log("%c Easycanvas %c You are using the develop version " + a.default.version + " %c", "background:#4086f4; padding: 2px 0; border-radius: 2px 0 0 2px;  color: #fff", "background:#41b883; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff", "background:transparent");
                    }, 500);
                }
                if (true) {
                    window.Easycanvas = A;
                }
            }
        }
        t.exports = A;
    }, , , , function(t, e, r) {
        "use strict";
        var n = r(46);
        var a = h(n);
        var i = r(48);
        var o = h(i);
        var s = r(43);
        var l = h(s);
        var f = r(47);
        var u = h(f);
        var c = r(58);
        var d = h(c);
        function h(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var v = {
            $render: o.default,
            $eventHandler: l.default,
            $perPaint: a.default,
            $rAFer: u.default
        };
        if (true) {
            v.$plugin = (0, d.default)();
        }
        t.exports = v;
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = s(n);
        var i = r(4);
        var o = s(i);
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var l = typeof wx !== "undefined" || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var f = function t(e) {
            return e.sort(function(t, e) {
                if (true) {
                    if (window[o.default.devFlag] && window[o.default.devFlag].selectMode) {
                        return a.default.funcOrValue(t.style.zIndex, t) < a.default.funcOrValue(e.style.zIndex, e) ? 1 : -1;
                    }
                }
                return a.default.funcOrValue(a.default.firstValuable(t.events.eIndex, t.style.zIndex), t) < a.default.funcOrValue(a.default.firstValuable(e.events.eIndex, e.style.zIndex), e) ? 1 : -1;
            });
        };
        var u = function t(e, r) {
            var n = e.getRect();
            return a.default.pointInRect(r.canvasX, r.canvasY, n.tx, n.tx + n.tw, n.ty, n.ty + n.th);
        };
        var c = function t(e, r, n) {
            if (!e || !e.length) return;
            if (r.$stopPropagation) return;
            var i = e.length;
            for (var s = 0; s < i; s++) {
                var l = e[s];
                if (a.default.funcOrValue(l.style.visible, l) === false) continue;
                if (u(l, r)) {
                    if (l.events.interceptor) {
                        var c = a.default.firstValuable(l.events.interceptor.call(l, r), r);
                        if (!c || c.$stopPropagation) continue;
                    }
                }
                var d = l.$combine ? l.$combine.children : l.children;
                if (d.length) {
                    t(f(d.filter(function(t) {
                        if (true) {
                            if (window[o.default.devFlag] && window[o.default.devFlag].selectMode) {
                                return a.default.funcOrValue(t.style.zIndex, t) >= 0;
                            }
                        }
                        return a.default.funcOrValue(a.default.firstValuable(t.events.eIndex, t.style.zIndex), t) >= 0;
                    })), r, n);
                }
                if (r.$stopPropagation) break;
                var v = l.events && l.events[r.type];
                if ((v || "develop" !== "production") && u(l, r)) {
                    if (true) {
                        if (window[o.default.devFlag] && window[o.default.devFlag].selectMode) {
                            var p = 0;
                            if (l.name !== o.default.devFlag) {
                                r.stopPropagation();
                                if (l.$canvas.$plugin.selectSprite(r.type === "click" || r.type === "touchend", l.$canvas, l)) {
                                    break;
                                }
                            }
                        }
                    }
                    if (v) {
                        n.push(l);
                        var g = h(l, r);
                        if (r.$stopPropagation) break;
                    }
                }
                if (d.length) {
                    t(f(d.filter(function(t) {
                        if (true) {
                            if (window[o.default.devFlag] && window[o.default.devFlag].selectMode) {
                                return a.default.funcOrValue(t.style.zIndex, t) < 0;
                            }
                        }
                        return !(a.default.funcOrValue(a.default.firstValuable(t.events.eIndex, t.style.zIndex), t) >= 0);
                    })), r, n);
                }
            }
        };
        var d = function t(e, r) {
            var n = this;
            this.$extendList.forEach(function(t) {
                if (t.onEvent) {
                    t.onEvent.call(n, e, r);
                }
            });
        };
        var h = function t(e, r) {
            if (true) {
                if (window[o.default.devFlag] && window[o.default.devFlag].selectMode) {
                    return false;
                }
            }
            if (r.$stopPropagation) return;
            var n = e.events[r.type].call(e, r);
            if (n === true) {
                return true;
            }
            if (e.events.stopPropagation) {
                return true;
            }
        };
        var v = {
            x: 0,
            y: 0,
            timeStamp: 0
        };
        var p;
        p = function t(e, r) {
            var n = this;
            var i = void 0;
            var o = void 0;
            var s = 1;
            var u = 1;
            if (!r) {
                if (!e.layerX && e.targetTouches && e.targetTouches[0]) {
                    i = e.targetTouches[0].pageX - e.currentTarget.offsetLeft;
                    o = e.targetTouches[0].pageY - e.currentTarget.offsetTop;
                } else if (!e.layerX && e.changedTouches && e.changedTouches[0]) {
                    i = e.changedTouches[0].pageX - e.currentTarget.offsetLeft;
                    o = e.changedTouches[0].pageY - e.currentTarget.offsetTop;
                } else {
                    i = e.layerX;
                    o = e.layerY;
                }
                var h = false;
                if (this.$dom.getBoundingClientRect) {
                    var g = this.$dom.getBoundingClientRect();
                    g.width > g.height !== this.width > this.height;
                    s = Math.floor(g[h ? "height" : "width"]) / this.width;
                    u = Math.floor(g[h ? "width" : "height"]) / this.height;
                }
            }
            var y = r || {
                type: e.type,
                canvasX: i / s,
                canvasY: o / u,
                event: e
            };
            if (l && n.fastclick) {
                if (y.type === "click" && !y.$fakeClick) {
                    return;
                } else if (y.type === "touchstart") {
                    v.x = y.canvasX;
                    v.y = y.canvasY;
                    v.timeStamp = Date.now();
                } else if (y.type === "touchend") {
                    if (Math.abs(v.x - y.canvasX) < 30 && Math.abs(v.y - y.canvasY) < 30 && Date.now() - v.timeStamp < 200) {
                        p.call(this, null, {
                            $fakeClick: true,
                            type: "click",
                            canvasX: v.x,
                            canvasY: v.y,
                            event: e
                        });
                    }
                }
            }
            y.stopPropagation = function() {
                y.$stopPropagation = true;
            };
            if (n.events.interceptor) {
                y = a.default.firstValuable(n.events.interceptor.call(n, y), y);
                if (!y || y.$stopPropagation) return;
            }
            var $ = [];
            c(f(n.children), y, $);
            d.call(n, y, $);
            if ((y.type === "mousemove" || y.type === "touchmove") && n.eLastMouseHover && $.indexOf(n.eLastMouseHover) === -1) {
                var x = n.eLastMouseHover["events"]["mouseout"] || n.eLastMouseHover["events"]["touchout"];
                if (x) {
                    x.call(n.eLastMouseHover, y);
                }
            }
            n.eLastMouseHover = $[0];
            if (!$.length && n.eLastMouseHover) {
                var m = n.eLastMouseHover["events"]["mouseout"];
                if (m) {
                    m.call(n.eLastMouseHover, y);
                }
                n.eLastMouseHover = null;
            }
            var w = n.events[y.type];
            if (w) {
                if (w.call(n, y)) {
                    n.eHoldingFlag = false;
                    return true;
                }
            }
        };
        t.exports = p;
    }, function(t, e) {
        "use strict";
        t.exports = function(t, e, r, n) {
            if (e.sx < 0 && e.sw) {
                var a = -e.sx / e.sw;
                e.tx += e.tw * a;
                e.sx = 0;
            }
            if (e.sy < 0 && e.sh) {
                var i = -e.sy / e.sh;
                e.ty += e.th * i;
                e.sy = 0;
            }
            if (r && e.sx + e.sw > r) {
                var o = (e.sx + e.sw - r) / e.sw;
                e.sw -= e.sw * o;
                e.tw -= e.tw * o;
            }
            if (n && e.sy + e.sh > n) {
                var s = (e.sy + e.sh - n) / e.sh;
                e.sh -= e.sh * s;
                e.th -= e.th * s;
            }
            if (e.tx < 0 && e.tw > -e.tx) {
                var l = -e.tx / e.tw;
                e.sx += e.sw * l;
                e.sw -= e.sw * l;
                e.tw = e.tw + e.tx;
                e.tx = 0;
            }
            if (e.ty < 0 && e.th > -e.ty) {
                var f = -e.ty / e.th;
                e.sy += e.sh * f;
                e.sh -= e.sh * f;
                e.th = e.th + e.ty;
                e.ty = 0;
            }
            if (e.tw && e.tx + e.tw > t.width) {
                var u = (e.tx + e.tw - t.width) / e.tw;
                e.tw -= e.tw * u;
                e.sw -= e.sw * u;
            }
            if (e.th && e.ty + e.th > t.height) {
                var c = (e.ty + e.th - t.height) / e.th;
                e.th -= e.th * c;
                e.sh -= e.sh * c;
            }
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t, e, r) {
            e.filter(function(t) {
                var e = a.default.funcOrValue(t.style.zIndex, t);
                if (r < 0) {
                    return e < 0;
                }
                return e >= 0;
            }).sort(function(t, e) {
                var r = a.default.funcOrValue(t.style.zIndex, t);
                var n = a.default.funcOrValue(e.style.zIndex, e);
                if (r === n) return 0;
                return r > n ? 1 : -1;
            }).forEach(function(e, r) {
                t.$perPaint.call(t, e, r);
            });
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = h(n);
        var i = r(4);
        var o = h(i);
        var s = r(44);
        var l = h(s);
        var f = r(45);
        var u = h(f);
        var c = r(12);
        var d = h(c);
        function h(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var v = a.default.blend;
        var p = function t(e) {
            var r = /[^\u4e00-\u9fa5]/;
            return !r.test(e);
        };
        var g = function t() {
            var e = this;
            this.$canvas.$extendList.forEach(function(t) {
                if (t.onPaint) {
                    t.onPaint.call(e);
                }
            });
        };
        var y = function t(e) {
            if (!e || !e.style) return;
            var r = a.default.funcOrValue(e.style.scale, e);
            if (r !== 1) return e;
            return t(e.$parent);
        };
        t.exports = function(t, e) {
            t.$rendered = false;
            a.default.execFuncs(t.hooks.beforeTick, t, t.$tickedTimes);
            if (a.default.funcOrValue(t.style.visible, t) === false) {
                a.default.execFuncs(t.hooks.ticked, t, ++t.$tickedTimes);
                return;
            }
            var r = this;
            g.call(t);
            var n = t.$props = {};
            n.img = a.default.funcOrValue(t.content.img, t);
            n.text = a.default.funcOrValue(t.content.text, t);
            if (typeof n.img === "string") {
                n.img = t.content.img = r.imgLoader(n.img);
            }
            var i = n.text;
            var o = n.img;
            n.tx = a.default.funcOrValue(t.style.tx, t) || 0;
            if (t.$parent) {
                n.tx += a.default.firstValuable(t.$parent.$cache.tx, 0);
            }
            t.$cache.tx = n.tx;
            n.ty = a.default.funcOrValue(t.style.ty, t) || 0;
            if (t.$parent) {
                n.ty += a.default.firstValuable(t.$parent.$cache.ty, 0);
            }
            t.$cache.ty = n.ty;
            var s = 0;
            var f = 0;
            if (o) {
                s = o.width || 0;
                f = o.height || 0;
                n.sx = a.default.funcOrValue(t.style.sx, t) || 0;
                n.sy = a.default.funcOrValue(t.style.sy, t) || 0;
                n.sw = a.default.funcOrValue(t.style.sw, t) || s;
                n.sh = a.default.funcOrValue(t.style.sh, t) || f;
            }
            n.tw = a.default.funcOrValue(t.style.tw, t) || n.sw || 0;
            n.th = a.default.funcOrValue(t.style.th, t) || n.sh || 0;
            n.locate = a.default.funcOrValue(t.style.locate, t);
            n.rotate = a.default.funcOrValue(t.style.rotate, t) || 0;
            n.overflow = a.default.funcOrValue(t.style.overflow, t) || 0;
            n.overflowX = a.default.funcOrValue(t.style.overflowX, t) || 0;
            n.overflowY = a.default.funcOrValue(t.style.overflowY, t) || 0;
            n.scale = a.default.funcOrValue(t.style.scale, t) || 1;
            if (t.$parent) {
                n.scale *= a.default.firstValuable(t.$parent.$cache.scale, 1);
            }
            t.$cache.scale = n.scale;
            var c = t.children;
            if (n.scale !== 1) {
                var h = n.scale;
                var $ = y(t);
                if ($) {
                    var x = $.getRect(t === $ ? false : true);
                    var m = x.tx + x.tw / 2;
                    var w = x.ty + x.th / 2;
                    n.tx -= (m - n.tx) * (h - 1);
                    n.ty -= (w - n.ty) * (h - 1);
                    n.tw *= h;
                    n.th *= h;
                }
            }
            if (n.locate === "lt") {} else if (n.locate === "ld") {
                n.ty -= n.th;
            } else if (n.locate === "rt") {
                n.tx -= n.tw;
            } else if (n.locate === "rd") {
                n.tx -= n.tw;
                n.ty -= n.th;
            } else {
                n.tx -= n.tw >> 1;
                n.ty -= n.th >> 1;
            }
            var b = {};
            if (n.rotate) {
                var k = a.default.firstValuable(n.rx, n.tx + .5 * n.tw);
                var S = a.default.firstValuable(n.ry, n.ty + .5 * n.th);
                b.beforeRotate = [ k, S ];
                b.rotate = -n.rotate * Math.PI / 180;
                b.rotate = Number(b.rotate.toFixed(4));
                b.afterRotate = [ -k, -S ];
            }
            var T = (0, d.default)(n.tx, n.ty, n.tw, n.th, 0, 0, r.width, r.height, b.beforeRotate && b.beforeRotate[0], b.beforeRotate && b.beforeRotate[1], n.rotate);
            var A = (n.overflow || n.overflowX || n.overflowY) && n.overflow !== "visible";
            if (!T && !i) {
                if (!A) {
                    t.$rendered = undefined;
                    c.length && (0, u.default)(r, c, -1);
                    c.length && (0, u.default)(r, c, 1);
                }
                a.default.execFuncs(t.hooks.ticked, t, ++t.$tickedTimes);
            } else {
                n.opacity = a.default.funcOrValue(t.style.opacity, t) || 0;
                if (t.$parent) {
                    n.opacity *= a.default.firstValuable(t.$parent.$cache.opacity, 1);
                }
                t.$cache.opacity = n.opacity;
                for (var O in t.style) {
                    if (typeof n[O] !== "undefined") continue;
                    n[O] = a.default.funcOrValue(t.style[O], t);
                }
                b.globalAlpha = a.default.firstValuable(n.opacity, 1);
                if (n.fh || n.fv) {
                    n.fh = n.fh || 0;
                    n.fv = n.fv || 0;
                    n.fx = n.fx || 0;
                    n.fy = n.fy || 0;
                    b.transform = {
                        fh: n.fh,
                        fv: n.fv,
                        fx: -(n.ty + (n.th >> 1)) * n.fv + n.fx,
                        fy: -(n.tx + (n.tw >> 1)) * n.fh + n.fy
                    };
                }
                if (n.blend) {
                    if (typeof n.blend === "string") {
                        b.globalCompositeOperation = n.blend;
                    } else {
                        b.globalCompositeOperation = v[n.blend];
                    }
                }
                if (n.backgroundColor) {
                    b.fillRect = n.backgroundColor;
                }
                if (n.border) {
                    b.line = n.border;
                }
                if (n.mirrX) {
                    b.translate = [ r.width, 0 ];
                    b.scale = [ -1, 1 ];
                    n.tx = r.width - n.tx - n.tw;
                    if (n.mirrY) {
                        b.translate = [ r.width, r.height ];
                        b.scale = [ -1, -1 ];
                        n.ty = r.height - n.ty - n.th;
                    }
                } else if (n.mirrY) {
                    b.translate = [ 0, r.height ];
                    b.scale = [ 1, -1 ];
                    n.ty = r.height - n.ty - n.th;
                }
                if (A) {
                    b.clip = true;
                }
                if (true) {
                    if (s && f) {
                        var F = n.tw * n.th / (n.sw * n.sh);
                        if (!t.$perf.paintRate || F > t.$perf.paintRate) {
                            t.$perf.paintRate = F;
                        }
                    }
                }
                if (b.clip) {
                    if (T) {
                        var M = {
                            $id: t.$id,
                            type: "clip",
                            settings: b,
                            img: o,
                            props: n
                        };
                        M.$origin = t;
                        r.$children.push(M);
                    }
                }
                c.length && (0, u.default)(r, c, -1);
                if (b.fillRect) {
                    if (T) {
                        t.$rendered = true;
                        var R = {
                            $id: t.$id,
                            type: "fillRect",
                            settings: b,
                            img: o,
                            props: n
                        };
                        R.$origin = t;
                        r.$children.push(R);
                    }
                }
                if (s && n.opacity !== 0 && n.sw && n.sh) {
                    if (!n.rotate && !i) {
                        (0, l.default)(r, n, s, f);
                    }
                    var V = (0, d.default)(n.tx, n.ty, n.tw, n.th, 0, 0, r.width - 1, r.height - 1, b.beforeRotate && b.beforeRotate[0], b.beforeRotate && b.beforeRotate[1], n.rotate);
                    if (V) {
                        t.$rendered = true;
                        var E = {
                            $id: t.$id,
                            type: "img",
                            settings: b,
                            img: o,
                            props: n
                        };
                        o.$painted = true;
                        E.$origin = t;
                        r.$children.push(E);
                    }
                }
                if (i) {
                    t.$rendered = true;
                    var C = n.tx;
                    var I = n.ty;
                    var _ = n.align || n.textAlign || "left";
                    var P = n.textFont || "14px Arial";
                    var H = parseInt(P);
                    var z = void 0;
                    var L = n.lineHeight || H;
                    if (_ === "center") {
                        C += n.tw / 2;
                    } else if (_ === "right") {
                        C += n.tw;
                    }
                    if (n.textVerticalAlign === "top") {
                        z = "top";
                    } else if (n.textVerticalAlign === "bottom") {
                        z = "bottom";
                        I += n.th;
                    } else if (n.textVerticalAlign === "middle") {
                        I += n.th >> 1;
                        z = "middle";
                    }
                    if (typeof i === "string" || typeof i === "number") {
                        if (I + H * 2 > 0 && I - H * 2 < r.height) {
                            r.$children.push({
                                $id: t.$id,
                                type: "text",
                                settings: b,
                                props: {
                                    tx: C,
                                    ty: I,
                                    content: String(i),
                                    fontsize: H,
                                    align: _,
                                    baseline: z,
                                    font: P,
                                    color: n.color,
                                    type: n.textType
                                },
                                $origin: t
                            });
                        }
                    } else if (i.length) {
                        i.forEach(function(e) {
                            r.$children.push({
                                $id: t.$id,
                                type: "text",
                                settings: b,
                                props: {
                                    tx: C + a.default.funcOrValue(e.tx, t),
                                    ty: I + a.default.funcOrValue(e.ty, t),
                                    content: a.default.funcOrValue(e.content, t),
                                    fontsize: H,
                                    baseline: z,
                                    align: _,
                                    font: P,
                                    color: n.color,
                                    type: n.textType
                                },
                                $origin: t
                            });
                        });
                    } else if (i.type === "multline-text") {
                        var j = i.text.split(/\t|\n/);
                        var N = [];
                        j.forEach(function(t, e) {
                            t = String.prototype.trim.apply(t);
                            if (i.config.start) {
                                t = t.replace(i.config.start, "");
                            }
                            var r = 0;
                            var a = n.tw;
                            while (t.length && r < t.length) {
                                if (a <= 0) {
                                    a = n.tw;
                                    N.push(t.substr(0, r));
                                    t = t.substr(r);
                                    r = 0;
                                }
                                r++;
                                a -= H * (p(t[r]) ? 1.05 : .6);
                            }
                            if (t || e) {
                                N.push(t);
                            }
                        });
                        N.forEach(function(e) {
                            r.$children.push({
                                $id: t.$id,
                                type: "text",
                                settings: b,
                                props: {
                                    tx: C,
                                    ty: I,
                                    fontsize: H,
                                    content: e,
                                    baseline: z,
                                    align: _,
                                    font: P,
                                    color: n.color,
                                    type: n.textType
                                },
                                $origin: t
                            });
                            I += L || H;
                        });
                    }
                }
                if (!o && !i) {
                    t.$rendered = undefined;
                }
                c.length && (0, u.default)(r, c, 1);
                if (b.clip) {
                    if (T) {
                        var B = {
                            $id: t.$id,
                            type: "clipOver",
                            settings: b,
                            img: o,
                            props: n
                        };
                        B.$origin = t;
                        r.$children.push(B);
                    }
                }
                if (b.line) {
                    if (T) {
                        t.$rendered = true;
                        var D = {
                            $id: t.$id,
                            type: "line",
                            settings: b,
                            img: o,
                            props: n
                        };
                        D.$origin = t;
                        r.$children.push(D);
                    }
                }
                a.default.execFuncs(t.hooks.ticked, t, ++t.$tickedTimes);
            }
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(28);
        var a = s(n);
        var i = r(29);
        var o = s(i);
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t) {
            var e = this;
            var r = Date.now();
            o.default.$lastPaintTime = this.$nextTickTime = r;
            if (r - this.fpsCalculateTime >= 1e3) {
                this.fpsCalculateTime = r;
                if (this.fpsHandler) {
                    this.fpsHandler.call(this, this.fps);
                }
                this.lastFps = this.fps;
                this.fps = 0;
            }
            (0, a.default)(function(n) {
                e.$rafTime = n;
                e.$rAFer(t);
                if (e.maxFps > 0 && e.maxFps < 60) {
                    if (r - e.$lastPaintTime <= 1e3 / e.maxFps) {
                        return;
                    }
                    e.$lastPaintTime = r - (r - e.$lastPaintTime) % (1e3 / e.maxFps);
                } else {
                    e.$lastPaintTime = Date.now();
                }
                e.fps++;
                t();
            });
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = function t(e, r) {
            var n = this;
            var a = false;
            this.$extendList.forEach(function(t) {
                if (t.onRender) {
                    var i = t.onRender.call(n, e, r);
                    if (i) {
                        a = i;
                    }
                }
            });
            return a;
        };
        var s = function t(e, r) {
            var n = this;
            var i = e.props;
            var s = void 0;
            var l = e.type === "text";
            if (i && e.type !== "clip" && e.type !== "clipOver" && e.type !== "line") {
                if (l) {
                    var f = i.content.length;
                    s = i.fontsize * i.fontsize * 9 * f;
                    i[5] = i.tx - i.fontsize * 1.5 * f;
                    if (i[5] < 0) i[5] = 0;
                    i[6] = i.ty - i.fontsize * 1.5;
                    if (i[6] < 0) i[6] = 0;
                    i[7] = i.fontsize * 3 * f;
                    if (i[5] + i[7] > n.width) i[7] = n.width - i[5];
                    i[8] = i.fontsize * 3;
                    if (i[6] + i[8] > n.height) i[8] = n.height - i[6];
                } else {
                    s = i.tw * i.th;
                }
                if ((s > 200 * 200 || l) && !e.settings.transform && !e.settings.rotate) {
                    var u = n.$children;
                    for (var c = u.length - 1; c > r; c--) {
                        var d = u[c];
                        if (d.$cannotCover) {
                            continue;
                        }
                        var h = d.settings;
                        if (!d.type || d.type !== "img") {
                            if (!(d.type === "fillRect" && h.fillRect.indexOf("rgba") === -1)) {
                                d.$cannotCover = true;
                                continue;
                            }
                        }
                        var v = d.props;
                        if (v.tw * v.th < 200 * 200) {
                            d.$cannotCover = true;
                            continue;
                        }
                        if (v.tw * v.th < s) {
                            continue;
                        }
                        if (d.img && !d.img.$noAlpha) {
                            d.$cannotCover = true;
                            continue;
                        }
                        if (h.globalAlpha !== 1 || h.globalCompositeOperation || h.transform || h.rotate) {
                            d.$cannotCover = true;
                            continue;
                        }
                        if (a.default.pointInRect(i.tx, i.ty, v.tx, v.tx + v.tw, v.ty, v.ty + v.th) && a.default.pointInRect(i.tx + i.tw, i.ty + i.th, v.tx, v.tx + v.tw, v.ty, v.ty + v.th)) {
                            if (true) {
                                e.$origin.$useless = true;
                            }
                            return;
                        }
                    }
                }
            }
            var p = e.settings || {};
            if (o.call(n, e, p)) {
                return;
            }
            if (true) {
                if (e.$origin) {
                    e.$origin.$useless = false;
                }
            }
            var g = n.$paintContext;
            if (e.type === "clip") {
                g.save();
                g.beginPath();
                g.moveTo(i.tx, i.ty);
                g.lineTo(i.tx + i.tw, i.ty);
                g.lineTo(i.tx + i.tw, i.ty + i.th);
                g.lineTo(i.tx, i.ty + i.th);
                g.lineTo(i.tx, i.ty);
                g.closePath();
                g.clip();
            }
            var y = false;
            if (p.globalCompositeOperation) {
                if (!y) {
                    g.save();
                    y = true;
                }
                g.globalCompositeOperation = p.globalCompositeOperation;
            }
            if (p.globalAlpha !== 1 && !isNaN(p.globalAlpha)) {
                if (!y) {
                    g.save();
                    y = true;
                }
                g.globalAlpha = p.globalAlpha;
            }
            if (p.translate) {
                if (!y) {
                    g.save();
                    y = true;
                }
                g.translate(p.translate[0] || 0, p.translate[1] || 0);
            }
            if (p.rotate) {
                if (!y) {
                    g.save();
                    y = true;
                }
                g.translate(p.beforeRotate[0] || 0, p.beforeRotate[1] || 0);
                g.rotate(p.rotate || 0);
                g.translate(p.afterRotate[0] || 0, p.afterRotate[1] || 0);
            }
            if (p.scale) {
                if (!y) {
                    g.save();
                    y = true;
                }
                g.scale(p.scale[0] || 1, p.scale[1] || 1);
            }
            if (p.transform) {
                if (!y) {
                    g.save();
                    y = true;
                }
                g.transform(1, p.transform.fh, p.transform.fv, 1, p.transform.fx, p.transform.fy);
            }
            if (e.type === "img") {
                g.drawImage(e.img, i.sx, i.sy, i.sw, i.sh, i.tx, i.ty, i.tw, i.th);
                if (true) {
                    n.$plugin.drawImage(n, i);
                }
            } else if (e.type === "text" && i.content) {
                g.font = i.font;
                g.fillStyle = i.color || "white";
                g.textAlign = i.align;
                g.textBaseline = i.baseline;
                g[i.type || "fillText"](i.content, i.tx, i.ty);
            } else if (e.type === "fillRect") {
                g.fillStyle = p.fillRect;
                g.fillRect(i.tx, i.ty, i.tw, i.th);
            } else if (e.type === "line") {
                g.beginPath();
                g.strokeStyle = i.border.substr(i.border.indexOf(" ")) || "black";
                g.lineWidth = i.border.split(" ")[0] || 1;
                g.moveTo(i.tx, i.ty);
                g.lineTo(i.tx + i.tw, i.ty);
                g.lineTo(i.tx + i.tw, i.ty + i.th);
                g.lineTo(i.tx, i.ty + i.th);
                g.closePath();
                g.stroke();
            } else if (e.type === "clipOver") {
                g.restore();
            }
            if (y) {
                g.restore();
            }
        };
        t.exports = function() {
            var t = this;
            t.$children.forEach(s.bind(t));
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(50);
        var a = V(n);
        var i = r(54);
        var o = V(i);
        var s = r(57);
        var l = V(s);
        var f = r(51);
        var u = V(f);
        var c = r(16);
        var d = V(c);
        var h = r(52);
        var v = V(h);
        var p = r(19);
        var g = V(p);
        var y = r(18);
        var $ = V(y);
        var x = r(20);
        var m = V(x);
        var w = r(15);
        var b = V(w);
        var k = r(17);
        var S = V(k);
        var T = r(53);
        var A = V(T);
        var O = r(55);
        var F = V(O);
        var M = r(56);
        var R = V(M);
        function V(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var E = {
            start: l.default,
            paint: u.default,
            add: a.default,
            remove: o.default,
            register: A.default,
            clear: d.default,
            setFpsHandler: F.default,
            setMaxFps: R.default,
            pause: v.default,
            on: g.default,
            off: $.default,
            trigger: m.default,
            broadcast: b.default,
            nextTick: S.default
        };
        t.exports = E;
    }, function(t, e, r) {
        "use strict";
        var n = r(13);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = a.default.prototype.add;
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = function t(e, r) {
            if (!e || e.length !== r.length) {
                return r;
            }
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                var i = r[n];
                if (a.$id !== i.$id || a.img !== i.img) return r;
                if (a.props && i.props) {
                    for (var o in i.props) {
                        if (i.props[o] !== a.props[o]) return r;
                    }
                }
            }
            return false;
        };
        t.exports = function() {
            if (this.$pausing || this.$inBrowser && document.hidden) return;
            var t = this;
            a.default.execFuncs(t.hooks.beforeTick, t, [ t.$rafTime ]);
            if (!t.$freezing) {
                t.$lastTickChildren = t.$children;
                t.$children = [];
                if (true) {
                    t.$plugin.timeCollect(t, "preprocessTimeSpend", "START");
                }
                this.children.sort(function(t, e) {
                    var r = a.default.funcOrValue(t.style.zIndex, t);
                    var n = a.default.funcOrValue(e.style.zIndex, e);
                    if (r === n) return 0;
                    return r > n ? 1 : -1;
                }).forEach(function(e, r) {
                    t.$perPaint(e, r);
                });
                if (true) {
                    t.$plugin.timeCollect(t, "preprocessTimeSpend", "END");
                }
            }
            if (true) {
                t.$plugin.timeCollect(t, "paintTimeSpend", "START");
            }
            if (t.$paintContext.clearRect) {
                var e = o(t.$lastTickChildren, t.$children);
                if (e) {
                    t.$paintContext.clearRect(0, 0, this.width, this.height);
                    t.$render();
                }
            } else {
                t.$render();
            }
            if (true) {
                t.$plugin.timeCollect(t, "paintTimeSpend", "END");
            }
            a.default.execFuncs(t.hooks.ticked, t, [ t.$rafTime ]);
            if (t.hooks.nextTick) {
                a.default.execFuncs(t.hooks.nextTick, t, [ t.$rafTime ]);
                delete t.hooks.nextTick;
            }
        };
    }, function(t, e) {
        "use strict";
        t.exports = function(t) {
            this.$pausing = t === undefined ? true : t;
        };
    }, function(t, e, r) {
        "use strict";
        var n = function t(e) {
            var r = this;
            this.$extendList.forEach(function(t) {
                if (t.onCreate) {
                    t.onCreate.call(r, e);
                }
            });
        };
        t.exports = function(t, e) {
            var r = this;
            if (true) {
                this.fpsHandler = this.fpsHandler || function(t) {
                    if (this.maxFps > 0 && t < this.maxFps - 5 && t < 40) {
                        console.warn("[Easycanvas] Low FPS detected (" + t + "/" + this.maxFps + ").");
                    }
                };
            }
            var a = e || {};
            t = this.$dom = t || this.$dom;
            for (var i in a) {
                this[i] = a[i];
            }
            this.name = a.name || t.id || t.classList && t.classList[0] || "Unnamed";
            this.$inBrowser = typeof window !== "undefined";
            if (a.fullScreen && typeof document !== "undefined") {
                t.width = t.style.width = document.body.clientWidth || document.documentElement.clientWidth;
                t.height = t.style.height = document.body.clientHeight || document.documentElement.clientHeight;
            }
            if (true) {
                if (a.width && t.attributes.width && a.width !== t.width || a.height && t.attributes.height && a.height !== t.height) {
                    console.warn('[Easycanvas] Canvas size mismatched in "register" function.');
                }
            }
            t.width = this.width = this.width || a.width || t.width;
            t.height = this.height = this.height || a.height || t.height;
            if (true) {
                this.$plugin.register(this);
            }
            this.events = a.events || {};
            this.hooks = a.hooks || {};
            if (this.$inBrowser) {
                var o = [ "contextmenu", "mousewheel", "click", "dblclick", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove" ];
                o.forEach(function(e) {
                    t.addEventListener(e, r.$eventHandler.bind(r));
                });
            }
            if (true) {
                if (this.$paintContext) {
                    console.error("[Easycanvas] Current instance is already registered.");
                }
            }
            n.call(this, a);
            this.$paintContext = this.$paintContext || t.getContext("2d");
            return this;
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = i(n);
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t, e) {
            var r = this;
            a.default.execFuncs(t.hooks.beforeRemove, t, t.$tickedTimes++);
            t.style.visible = false;
            t.$removing = true;
            setTimeout(function() {
                if (t.$parent) {
                    t.$parent.children = t.$parent.children.filter(function(t) {
                        return t.$removing !== true;
                    });
                } else {
                    r.children = r.children.filter(function(t) {
                        return t.$removing !== true;
                    });
                }
                if (t.$canvas) {
                    t.$canvas = undefined;
                    t.$parent = undefined;
                    t.$tickedTimes = undefined;
                    t.$cache = undefined;
                    t.$rendered = false;
                    if (true) {
                        t.$perf = undefined;
                    }
                    a.default.execFuncs(t.hooks.removed, t, t.$tickedTimes);
                }
            });
            if (e) {
                this.children.splice(this.children.indexOf(t), 1);
            }
        };
    }, function(t, e) {
        "use strict";
        t.exports = function(t) {
            this.fpsHandler = t;
        };
    }, function(t, e) {
        "use strict";
        t.exports = function(t) {
            this.maxFps = t || -1;
        };
    }, function(t, e) {
        "use strict";
        t.exports = function() {
            var t = this;
            this.fpsCalculateTime = Date.now();
            this.$rAFer(this.paint.bind(this));
            setInterval(function() {
                if (t.eHoldingFlag) {
                    var e = t.eHoldingFlag;
                    e.type = "hold";
                    t.$eventHandler.call(t, null, e);
                }
            }, 100);
            return this;
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(1);
        var a = s(n);
        var i = r(4);
        var o = s(i);
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function() {
            if (true) {
                var t = "__EASYCANVAS_BRIDGE_TOPANEL__";
                var e = function e(r) {
                    r.tabId = window[o.default.devFlag].tabId;
                    window.document.dispatchEvent(new CustomEvent(t, {
                        detail: JSON.parse(JSON.stringify(r))
                    }));
                };
                var r = "24px san-serif";
                var n = "18px san-serif";
                var a = function t(e, n) {
                    var a = document.createElement("canvas");
                    var i = a.getContext("2d");
                    i.font = n || r;
                    return i.measureText(e).width;
                };
                setTimeout(function() {
                    e({
                        name: "init"
                    });
                });
                var i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2OYePb/fwAHrQNdl+exzgAAAABJRU5ErkJggg==";
                var s = function() {
                    var t = document.createElement("canvas");
                    t.width = 40;
                    t.height = 20;
                    var e = t.getContext("2d");
                    e.beginPath();
                    e.moveTo(0, 20);
                    e.lineTo(40, 20);
                    e.lineTo(20, 0);
                    e.closePath();
                    e.fill();
                    return t;
                }();
                var l = null;
                var f = null;
                var u = [ "paintArea", "paintTimes", "paintTimeSpend", "preprocessTimeSpend", "loadArea", "jumpArea" ];
                var c = {
                    drawImage: function t(e, r) {
                        if (!window[o.default.devFlag].isPaintRecording) return;
                        if (r) {
                            e.$perf.$paintArea += r[7] * r[8];
                            e.$perf.$loadArea += r[3] * r[4];
                        }
                        e.$perf.$paintTimes++;
                    },
                    jumpRender: function t(e, r) {
                        e.$perf.$jumpArea += r[7] * r[8];
                    },
                    register: function t(e) {
                        e.$id = Math.random().toString(36).substr(2);
                        e.$perf = {};
                        u.forEach(function(t) {
                            e.$perf[t] = 0;
                            e.$perf["$" + t] = 0;
                        });
                        setInterval(function() {
                            u.forEach(function(t) {
                                e.$perf[t] = e.$perf["$" + t];
                                e.$perf["$" + t] = 0;
                            });
                        }, 1e3);
                        if (!e.$flags.devtoolHanged) {
                            window[o.default.devFlag].$canvas[e.$id] = e;
                            e.$flags.devtoolHanged = true;
                        }
                    },
                    timeCollect: function t(e, r, n) {
                        e.$perf["$" + r] += (n === "START" || n === "PAUSE" ? -1 : 1) * Date.now();
                    },
                    selectSprite: function t(u, d, h) {
                        window[o.default.devFlag].MaskCanvasBase64 = i;
                        if (!h || !window[o.default.devFlag].selectMode) {
                            c.cancelSelectSprite(d);
                            return false;
                        }
                        if (!l) {
                            var v = 0;
                            var p = {};
                            var g = {};
                            l = d.add({
                                name: o.default.devFlag,
                                content: {
                                    img: d.imgLoader(i)
                                },
                                style: {
                                    border: function t() {
                                        if (this.getStyle("tw") < 2 && this.getStyle("th") < 2) {
                                            return "10 rgba(0, 0, 255, 0.5)";
                                        }
                                        return "1 blue";
                                    }
                                },
                                webgl: undefined,
                                children: !d.$paintContext.clearRect ? [] : [ {
                                    name: o.default.devFlag,
                                    data: {},
                                    style: {
                                        locate: "center",
                                        tx: function t() {
                                            var e = p.tx + p.tw / 2;
                                            if (e - v / 2 < 10) {
                                                e = v / 2 + 10;
                                            } else if (e + v / 2 > this.$canvas.width - 10) {
                                                e = this.$canvas.width - v / 2 - 10;
                                            }
                                            return e - this.$parent.$cache.tx;
                                        },
                                        ty: function t() {
                                            var e = p.ty + p.th + 30;
                                            if (this.data.above = e + 30 > this.$canvas.height) {
                                                e = p.ty - 32;
                                            }
                                            return e - this.$parent.$cache.ty;
                                        },
                                        tw: function t() {
                                            return v;
                                        },
                                        th: 32,
                                        color: "orange",
                                        backgroundColor: "black",
                                        textVerticalAlign: "top",
                                        textAlign: "center",
                                        textFont: r
                                    },
                                    hooks: {
                                        beforeTick: function t() {
                                            p = this.$parent.getRect();
                                            this.content.text = "<" + h.name + "> | " + Math.round(this.$parent.getStyle("tw")) + "×" + Math.round(this.$parent.getStyle("th"));
                                            v = a(this.content.text) + 20;
                                        }
                                    },
                                    children: [ {
                                        name: o.default.devFlag,
                                        content: {
                                            img: s
                                        },
                                        style: {
                                            tx: function t() {
                                                return p.tx + p.tw / 2 - this.$parent.$cache.tx;
                                            },
                                            ty: function t() {
                                                return this.$parent.data.above ? 5 + 16 : -5 - 16;
                                            },
                                            tw: 20,
                                            th: 10,
                                            rotate: function t() {
                                                return this.$parent.data.above ? 180 : 0;
                                            }
                                        }
                                    } ]
                                }, {
                                    name: o.default.devFlag,
                                    style: {
                                        visible: function t() {
                                            return this.getStyle("tw") < this.data.value;
                                        },
                                        locate: "center",
                                        tx: function t() {
                                            var e = g.tx + (l.getSelfStyle("tx") - f.getSelfStyle("tx")) / 2;
                                            return e - this.$parent.$cache.tx;
                                        },
                                        ty: function t() {
                                            var e = l.getSelfStyle("ty");
                                            return e - this.$parent.$cache.ty;
                                        },
                                        tw: function t() {
                                            return a(this.content.text, n) + 10;
                                        },
                                        th: 20,
                                        backgroundColor: "#ddd",
                                        color: "black",
                                        textVerticalAlign: "middle",
                                        textAlign: "center",
                                        textFont: n
                                    },
                                    data: {},
                                    hooks: {
                                        beforeTick: function t() {
                                            g = f.getRect();
                                            this.data.value = Math.round(l.getSelfStyle("tx") - f.getSelfStyle("tx"));
                                            this.content.text = "left: " + String(this.data.value);
                                        }
                                    }
                                }, {
                                    name: o.default.devFlag,
                                    style: {
                                        visible: function t() {
                                            return this.getStyle("th") < this.data.value;
                                        },
                                        locate: "center",
                                        tx: function t() {
                                            var e = l.getSelfStyle("tx");
                                            return e - this.$parent.$cache.tx;
                                        },
                                        ty: function t() {
                                            var e = g.ty + (l.getSelfStyle("ty") - f.getSelfStyle("ty")) / 2;
                                            return e - this.$parent.$cache.ty;
                                        },
                                        tw: function t() {
                                            return a(this.content.text, n) + 10;
                                        },
                                        th: 20,
                                        backgroundColor: "#ddd",
                                        color: "black",
                                        textVerticalAlign: "middle",
                                        textAlign: "center",
                                        textFont: n
                                    },
                                    data: {},
                                    hooks: {
                                        beforeTick: function t() {
                                            g = f.getRect();
                                            this.data.value = Math.round(l.getSelfStyle("ty") - f.getSelfStyle("ty"));
                                            this.content.text = "top: " + String(this.data.value);
                                        }
                                    }
                                } ]
                            });
                            f = d.add({
                                name: o.default.devFlag,
                                style: {
                                    locate: "lt"
                                },
                                children: [ {
                                    name: o.default.devFlag,
                                    style: {
                                        locate: "lt",
                                        tx: 0,
                                        ty: 0,
                                        tw: function t() {
                                            return l.getSelfStyle("tx") - this.$parent.getStyle("tx");
                                        },
                                        th: function t() {
                                            return l.getSelfStyle("ty") - this.$parent.getStyle("ty");
                                        },
                                        backgroundColor: "rgba(140, 205, 255, 0.1)",
                                        border: "1 rgba(80, 120, 200, 0.9)"
                                    }
                                } ]
                            });
                        }
                        [ "tx", "ty", "rotate", "rx", "ry", "scale", "tw", "th", "locate" ].forEach(function(t) {
                            (function(t) {
                                l.style[t] = function() {
                                    if (t === "tw" || t === "th") {
                                        return h.getStyle(t) || h.getRect()[t] || .1;
                                    }
                                    return h.getStyle(t);
                                };
                            })(t);
                        });
                        [ "tx", "ty" ].forEach(function(t) {
                            (function(t) {
                                f.style[t] = function() {
                                    if (!h.$parent) return 0;
                                    return h.$parent.getStyle(t);
                                };
                            })(t);
                        });
                        l.style.zIndex = Number.MAX_SAFE_INTEGER;
                        f.style.zIndex = Number.MAX_SAFE_INTEGER - 1;
                        l.style.visible = function() {
                            return window[o.default.devFlag].selectMode;
                        };
                        f.style.visible = function() {
                            return window[o.default.devFlag].selectMode && h.$parent;
                        };
                        l.style.opacity = .8;
                        l.webgl = h.webgl ? {} : undefined;
                        if (l.webgl) {
                            for (var y in h.webgl) {
                                (function(t) {
                                    l.webgl[t] = function() {
                                        if (typeof h.webgl[t] === "function") {
                                            return h.webgl[t].call(h);
                                        }
                                        return h.webgl[t];
                                    };
                                })(y);
                            }
                            l.webgl.img = d.imgLoader(i);
                            l.webgl.colors = false;
                            l.style.zIndex = Number.MIN_SAFE_INTEGER;
                        }
                        if (u) {
                            d.remove(l);
                            d.remove(f);
                            l = null;
                            e({
                                name: "selectSprite",
                                id: d.$id,
                                value: {
                                    sprite: h.$id,
                                    canvas: d.$id
                                }
                            });
                            window[o.default.devFlag].current = {
                                $sprite: h,
                                $canvas: d
                            };
                            window[o.default.devFlag].selectMode = false;
                        }
                        return true;
                    },
                    cancelSelectSprite: function t(e) {
                        if (!l) return;
                        e.remove(l);
                        e.remove(f);
                        l = null;
                    }
                };
                return c;
            }
        };
    }, function(t, e, r) {
        "use strict";
        var n = r(49);
        var a = c(n);
        var i = r(42);
        var o = c(i);
        var s = r(60);
        var l = c(s);
        var f = r(9);
        var u = c(f);
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var d = function t(e) {
            this.imgLoader = u.default;
            for (var r in l.default) {
                this[r] = this[r] || JSON.parse(JSON.stringify(l.default[r]));
            }
            if (!e) {
                return;
            }
            if (!e.el) {
                e = {
                    el: e
                };
            }
            if (e.el) {
                this.register(typeof e.el === "string" ? document.querySelector(e.el) : e.el, e);
            }
        };
        d.prototype.$extendList = [];
        for (var h in o.default) {
            if (Object.prototype.hasOwnProperty.call(o.default, h)) {
                d.prototype[h] = o.default[h];
            }
        }
        for (var v in a.default) {
            if (Object.prototype.hasOwnProperty.call(a.default, v)) {
                d.prototype[v] = a.default[v];
            }
        }
        t.exports = d;
    }, function(t, e) {
        "use strict";
        var r = {
            $dom: null,
            $paintContext: null,
            $nextTickTime: 0,
            $lastPaintTime: 0,
            $pausing: false,
            $freezing: false,
            name: "",
            fps: 0,
            lastFps: 0,
            fpsCalculateTime: 0,
            fpsHandler: null,
            width: 0,
            height: 0,
            events: {
                click: null
            },
            children: [],
            eHoldingFlag: false,
            eLastMouseHover: null,
            maxFps: -1,
            $flags: {}
        };
        t.exports = r;
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        "use strict";
        var n = r(9);
        var a = s(n);
        var i = r(10);
        var o = s(i);
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        t.exports = function(t, e) {
            var r;
            (0, o.default)(t, function(t) {
                return (0, a.default)(t, function(t) {
                    var n = t.width, a = t.height;
                    var i = t.getContext("2d").getImageData(0, 0, n, a);
                    var o = i.data;
                    for (var s = o.length - 1; s >= 0; s -= 4) {
                        if (e && e.conversion) {
                            var l = e.conversion({
                                r: o[s - 3],
                                g: o[s - 2],
                                b: o[s - 1],
                                a: o[s]
                            }, (s + 1 >> 2) % n, Math.floor((s + 1 >> 2) / n));
                            o[s - 3] = l.r;
                            o[s - 2] = l.g;
                            o[s - 1] = l.b;
                            o[s - 0] = l.a;
                        }
                    }
                    t.getContext("2d").clearRect(0, 0, n, a);
                    t.getContext("2d").putImageData(i, 0, 0);
                    r = t;
                }, {
                    canvas: true,
                    cacheFlag: Math.random()
                });
            });
            return function() {
                return r;
            };
        };
    }, function(t, e) {
        "use strict";
        t.exports = function t(e) {
            var r = e.width;
            var n = e.height;
            var a = document.createElement("canvas");
            a.width = r;
            a.height = n;
            var i = a.getContext("2d");
            i.scale(1, -1);
            i.translate(0, -n);
            i.drawImage(e, 0, 0);
            var o = i.getImageData(0, 0, r, n);
            return {
                canvas: i,
                img: o
            };
        };
    }, function(t, e) {
        "use strict";
        t.exports = function(t, e) {
            return {
                type: "multline-text",
                text: t,
                config: e
            };
        };
    } ]);
});

