/* 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function i() {
        return "undefined" != typeof window
    }

    function j() {
        return t || i() && (t = window.gsap) && t.registerPlugin && t
    }

    function m(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function n(e) {
        return parseFloat(e || 0)
    }

    function o(e, t) {
        return n(e.getAttribute(t))
    }

    function q(e, t, i, r, s, o) {
        return P(Math.pow((n(i) - n(e)) * s, 2) + Math.pow((n(r) - n(t)) * o, 2))
    }

    function r(e) {
        return console.warn(e)
    }

    function s(e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect")
    }

    function v() {
        return String.fromCharCode.apply(null, arguments)
    }

    function z(e) {
        if (!(e = y(e)[0])) return 0;
        var t, n, i, a, f, h, d, l = e.tagName.toLowerCase(),
            u = e.style,
            c = 1,
            g = 1;
        s(e) && (g = e.getScreenCTM(), c = P(g.a * g.a + g.b * g.b), g = P(g.d * g.d + g.c * g.c));
        try {
            n = e.getBBox()
        } catch (e) {
            r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var v = n || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            p = v.x,
            _ = v.y,
            w = v.width,
            x = v.height;
        if (n && (w || x) || !b[l] || (w = o(e, b[l][0]), x = o(e, b[l][1]), "rect" !== l && "line" !== l && (w *= 2, x *= 2), "line" === l && (p = o(e, "x1"), _ = o(e, "y1"), w = Math.abs(w - p), x = Math.abs(x - _))), "path" === l) a = u.strokeDasharray, u.strokeDasharray = "none", t = e.getTotalLength() || 0, c !== g && r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (c + g) / 2, u.strokeDasharray = a;
        else if ("rect" === l) t = 2 * w * c + 2 * x * g;
        else if ("line" === l) t = q(p, _, p + w, _ + x, c, g);
        else if ("polyline" === l || "polygon" === l)
            for (i = e.getAttribute("points").match(k) || [], "polygon" === l && i.push(i[0], i[1]), t = 0, f = 2; f < i.length; f += 2) t += q(i[f - 2], i[f - 1], i[f], i[f + 1], c, g) || 0;
        else "circle" !== l && "ellipse" !== l || (h = w / 2 * c, d = x / 2 * g, t = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d))));
        return t || 0
    }

    function A(e, t) {
        if (!(e = y(e)[0])) return [0, 0];
        t = t || z(e) + 1;
        var i = h.getComputedStyle(e),
            r = i.strokeDasharray || "",
            s = n(i.strokeDashoffset),
            o = r.indexOf(",");
        return o < 0 && (o = r.indexOf(" ")), t < (r = o < 0 ? t : n(r.substr(0, o)) || 1e-5) && (r = t), [Math.max(0, -s), Math.max(0, r - s)]
    }

    function B() {
        i() && (h = window, l = t = j(), y = t.utils.toArray, d = -1 !== ((h.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    var t, y, h, d, l, k = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        b = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        P = Math.sqrt,
        a = "DrawSVGPlugin",
        f = v(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        u = function (e) {
            return e;
            // for (var t = 0 === (window ? window.location.href : "").indexOf(v(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(v(108, 111, 99, 97, 108, 104, 111, 115, 116)) || -1 !== e.indexOf(v(49, 50, 55, 46, 48, 32, 48, 46, 49)), n = [f, v(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), v(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), v(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), v(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), v(99, 100, 112, 110, 46, 105, 111), v(103, 97, 110, 110, 111, 110, 46, 116, 118), v(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), v(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), v(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), v(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), v(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), v(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), v(112, 108, 110, 107, 114, 46, 99, 111), v(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), v(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), v(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), v(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), v(99, 115, 98, 46, 97, 112, 112), v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), v(99, 111, 100, 105, 101, 114, 46, 105, 111), v(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), v(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], i = n.length; - 1 < --i;)
            //     if (-1 !== e.indexOf(n[i])) return !0;
            // return t && window && window.console && console.log(v(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + a + v(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t || !(window.location.href = "https://" + f + v(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + a + "&source=codepen")
        }(window ? window.location.host : ""),
        c = {
            version: "3.3.0",
            name: "drawSVG",
            register: function register(e) {
                t = e, B()
            },
            init: function init(e, t) {
                if (!e.getBBox) return !1;
                l || B();
                var i, r, o, a, f = z(e) + 1;
                return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", r = function _parse(e, t, i) {
                    var r, s, o = e.indexOf(" ");
                    return s = o < 0 ? (r = void 0 !== i ? i + "" : e, e) : (r = e.substr(0, o), e.substr(o + 1)), r = ~r.indexOf("%") ? n(r) / 100 * t : n(r), (s = ~s.indexOf("%") ? n(s) / 100 * t : n(s)) < r ? [s, r] : [r, s]
                }(t, f, (i = A(e, f))[0]), this._length = m(f + 10), 0 === i[0] && 0 === r[0] ? (o = Math.max(1e-5, r[1] - f), this._dash = m(f + o), this._offset = m(f - i[1] + o), this._offsetPT = this.add(this, "_offset", this._offset, m(f - r[1] + o))) : (this._dash = m(i[1] - i[0]) || 1e-6, this._offset = m(-i[0]), this._dashPT = this.add(this, "_dash", this._dash, m(r[1] - r[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, m(-r[0]))), d && (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin && (r = n(a.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", r, r + .01)), this._live = s(e) || ~(t + "").indexOf("live"), this._props.push("drawSVG"), u
            },
            render: function render(e, t) {
                var n, i, r, s, o = t._pt,
                    a = t._style;
                if (o) {
                    for (t._live && (n = z(t._target) + 11) !== t._length && (i = n / t._length, t._length = n, t._offsetPT.s *= i, t._offsetPT.c *= i, t._dashPT ? (t._dashPT.s *= i, t._dashPT.c *= i) : t._dash *= i); o;) o.r(e, o.d), o = o._next;
                    r = t._dash, s = t._offset, n = t._length, a.strokeDashoffset = t._offset, 1 !== e && e ? a.strokeDasharray = r + "px," + n + "px" : (r - s < .001 && n - r <= 10 && (a.strokeDashoffset = s + 1), a.strokeDasharray = s < .001 && n - r <= 10 ? "none" : s === r ? "0px, 999999px" : r + "px," + n + "px")
                }
            },
            getLength: z,
            getPosition: A
        };
    j() && t.registerPlugin(c), e.DrawSVGPlugin = c, e.default = c;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});