! function(e) { var a = {};

    function t(l) { if (a[l]) return a[l].exports; var o = a[l] = { i: l, l: !1, exports: {} }; return e[l].call(o.exports, o, o.exports, t), o.l = !0, o.exports }
    t.m = e, t.c = a, t.d = function(e, a, l) { t.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: l }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, a) { if (1 & a && (e = t(e)), 8 & a) return e; if (4 & a && "object" == typeof e && e && e.__esModule) return e; var l = Object.create(null); if (t.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: e }), 2 & a && "string" != typeof e)
            for (var o in e) t.d(l, o, function(a) { return e[a] }.bind(null, o)); return l }, t.n = function(e) { var a = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(a, "a", a), a }, t.o = function(e, a) { return Object.prototype.hasOwnProperty.call(e, a) }, t.p = "", t(t.s = 0) }([function(e, a, t) { "use strict";
    t.r(a);
    t(1);
    console.log("Hello, SASS"), console.log("Hello, HTML"); const l = [{ fileName: "bat-1.wav", category: "bat" }, { fileName: "bat-2.wav", category: "bat" }, { fileName: "bat-3.wav", category: "bat" }, { fileName: "bat-4.wav", category: "bat" }, { fileName: "bat-5.wav", category: "bat" }, { fileName: "bat-6.wav", category: "bat" }, { fileName: "bat-7.wav", category: "bat" }, { fileName: "hawk-1.wav", category: "hawk" }, { fileName: "hawk-2.wav", category: "hawk" }, { fileName: "hawk-3.wav", category: "hawk" }, { fileName: "hawk-4.wav", category: "hawk" }, { fileName: "owl-1.wav", category: "owl" }, { fileName: "owl-2.wav", category: "owl" }, { fileName: "owl-3.wav", category: "owl" }, { fileName: "owl-4.wav", category: "owl" }, { fileName: "scorpion-1.wav", category: "scorpion" }, { fileName: "scorpion-2.wav", category: "scorpion" }, { fileName: "snake-1.wav", category: "snake" }, { fileName: "snake-2.wav", category: "snake" }, { fileName: "snake-3.wav", category: "snake" }, { fileName: "spider-1.wav", category: "spider" }, { fileName: "spider-2.wav", category: "spider" }, { fileName: "wolf-1.wav", category: "wolf" }, { fileName: "wolf-2.wav", category: "wolf" }, { fileName: "wolf-3.wav", category: "wolf" }, { fileName: "wolf-4.wav", category: "wolf" }, { fileName: "wolf-5.wav", category: "wolf" }, { fileName: "ghost-laugh-1.mp3", category: "evil-laugh" }, { fileName: "ghost-laugh-1.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-2.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-3.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-4.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-5.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-6.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-7.wav", category: "evil-laugh" }, { fileName: "ghost-laugh-8.wav", category: "evil-laugh" }, { fileName: "heartbeat-1.wav", category: "heartbeat" }, { fileName: "heartbeat-2.wav", category: "heartbeat" }, { fileName: "heartbeat-3.wav", category: "heartbeat" }],
        o = [{ eyesFileName: "false", fileName: "1106219.png", category: "bat" }, { eyesFileName: "1294402-eyes.png", fileName: "1294402.png", category: "bat" }, { eyesFileName: "310517-eyes.png", fileName: "310517.png", category: "hawk" }, { eyesFileName: "1298038-eyes.png", fileName: "1298038.png", category: "hawk" }, { eyesFileName: "1529444-eyes.png", fileName: "1529444.png", category: "hawk" }, { eyesFileName: "2944595-eyes.png", fileName: "2944595.png", category: "hawk" }, { eyesFileName: "36097-eyes.png", fileName: "36097.png", category: "owl" }, { eyesFileName: "1280170-eyes.png", fileName: "1280170.png", category: "owl" }, { eyesFileName: "1758772-eyes.png", fileName: "1758772.png", category: "owl" }, { eyesFileName: "false", fileName: "2223092.png", category: "owl" }, { eyesFileName: "2825831-eyes.png", fileName: "2825831.png", category: "owl" }],
        g = [{ eyesFileName: "30695-eyes.png", fileName: "30695.png", category: "wolf" }, { eyesFileName: "31708-eyes.png", fileName: "31708.png", category: "wolf" }, { eyesFileName: "37088-eyes.png", fileName: "37088.png", category: "wolf" }, { eyesFileName: "37089-eyes.png", fileName: "37089.png", category: "wolf" }, { eyesFileName: "47256-eyes.png", fileName: "47256.png", category: "wolf" }, { eyesFileName: "161987-eyes.png", fileName: "161987.png", category: "wolf" }, { eyesFileName: "296748-eyes.png", fileName: "296748.png", category: "wolf" }, { eyesFileName: "false", fileName: "708258.png", category: "wolf" }, { eyesFileName: "false", fileName: "1949437.png", category: "wolf" }, { eyesFileName: "2253209-eyes.png", fileName: "2253209.png", category: "wolf" }, { eyesFileName: "2874776-eyes.png", fileName: "2874776.png", category: "wolf" }, { eyesFileName: "2954968-eyes.png", fileName: "2954968.png", category: "wolf" }, { eyesFileName: "2985555-eyes.png", fileName: "2985555.png", category: "wolf" }, { eyesFileName: "3271475-eyes.png", fileName: "3271475.png", category: "wolf" }, { eyesFileName: "3322007-eyes.png", fileName: "3322007.png", category: "wolf" }],
        i = [{ eyesFileName: "23158-eyes.png", fileName: "23158.png", category: "scorpion" }, { eyesFileName: "2025106-eyes.png", fileName: "2025106.png", category: "scorpion" }, { eyesFileName: "2774272-eyes.png", fileName: "2774272.png", category: "scorpion" }, { eyesFileName: "155814-eyes.png", fileName: "155814.png", category: "spider" }, { eyesFileName: "1615195-eyes.png", fileName: "1615195.png", category: "spider" }, { eyesFileName: "3357489-eyes.png", fileName: "3357489.png", category: "spider" }],
        n = [{ eyesFileName: "44785-eyes.png", fileName: "44785.png", category: "snake" }, { eyesFileName: "44803-eyes.png", fileName: "44803.png", category: "snake" }, { eyesFileName: "47546-eyes.png", fileName: "47546.png", category: "snake" }, { eyesFileName: "159135-eyes.png", fileName: "159135.png", category: "snake" }, { eyesFileName: "1293856-eyes.png", fileName: "1293856.png", category: "snake" }, { eyesFileName: "false", fileName: "1298883.png", category: "snake" }, { eyesFileName: "2082037-eyes.png", fileName: "2082037.png", category: "snake" }, { eyesFileName: "false", fileName: "3066876.png", category: "snake" }],
        s = [".game__cells_top", ".game__cells_middle-left", ".game__cells_middle-right", ".game__cells_bottom"],
        r = e => document.querySelector(e),
        c = e => document.querySelectorAll(e),
        m = r(".game__button-play"),
        y = r(".game__logo-img"),
        f = r(".game__logo-img2"),
        p = (r(".game__logo_wrapper"), r(".game__menu")),
        u = r(".game__button-menu"),
        N = r(".game__difficulty-levels"),
        d = c(".button-close"),
        w = r(".game__mode_buttons"),
        v = r(".flashlight"),
        h = r(".game__story"),
        _ = r(".game__result-victory"),
        b = r(".victory_points"),
        k = r(".game__result-notBad"),
        F = r(".notBad_points"),
        S = r(".game__result-lost"),
        L = r(".lost_points"); let I = 7,
        E = !1,
        M = !1,
        x = new MobileDetect(window.navigator.userAgent);
    console.log("Mobile: " + x.mobile()); const G = e => { if (e.target.classList.contains("game__logo-img")) { h.classList.add("block"); let e = new Audio("sounds/background-sounds/breath.mp3");
                e.volume = .5, e.play(), E = !0, localStorage.setItem("playGame", E) } },
        $ = e => { if (e.target.classList.contains("game__button-menu")) { N.classList.toggle("block"), new Audio("sounds/background-sounds/ghost-laugh-long.wav").play() } },
        A = e => { p.classList.add("hidden"), N.classList.remove("block"), new Audio("sounds/background-sounds/ghost-laugh-long.wav").play() },
        T = e => { for (let a = e.length - 1; a > 0; a--) { let t = Math.floor(Math.random() * (a + 1));
                [e[a], e[t]] = [e[t], e[a]] } },
        j = (e, a) => Math.floor(Math.random() * (a - e + 1)) + e,
        O = () => { let e = (T(a = s), a.slice(0, 1)); var a; let t = c(e + " > .cell"),
                l = Array.from(t).filter(e => "none" != getComputedStyle(e).display),
                o = j(1, l.length); return [e, r(`${e} > .cell${o}`)] },
        P = (e, a) => { let t = 0,
                l = j(500, 2e3); const o = () => { t++, a(), t < e && setTimeout(o, l), t == e && (console.log(t, "вот и все"), setTimeout(() => window.location.href = "result.html", 5e3)) };
            setTimeout(o, l) },
        C = e => { let a = e.map(e => e.category);
            T(a); let t = a.slice(0, 1),
                l = e.filter(e => e.category == t);
            T(l); let o = l.slice(0, 1); for (let e of o) return [e.category, e.fileName, e.eyesFileName] },
        H = e => { let a = e,
                t = l.filter(e => e.category == a);
            T(t); let o = t.slice(0, 1); for (let e of o) return [e.category, e.fileName] },
        q = e => { let a = e,
                t = a[0],
                l = a[1]; return new Audio(`sounds/${t}/${l}`) },
        B = e => { switch (e.target.dataset.modifier) {
                case "more":
                    I++, localStorage.setItem("iterations", I), console.log(I); break;
                case "less":
                    I--, localStorage.setItem("iterations", I), console.log(I); break;
                case "game mode":
                    M = !M }
            A(), P(localStorage.getItem("iterations") || I, X) },
        X = () => { let e, a = j(1500, 3e3),
                t = O(),
                l = t[0],
                s = t[1]; ".game__cells_top" == l ? e = C(o) : ".game__cells_bottom" == l ? e = C(n) : ".game__cells_middle-left" == l ? e = C(g) : ".game__cells_middle-right" == l && (e = C(i)); let r, c = e[0];
            M || (r = e[1]), M && (r = "false" == e[2] ? e[1] : e[2]), q(H(c)).play(); let m = document.createElement("img");
            m.classList.add("creature-pic"), m.src = `./img/animals/${c}/${r}`, s.append(m), setTimeout(() => { m.remove() }, a) }; let Y = 0; const D = e => { console.log(localStorage.getItem("countGame")), console.log(localStorage.getItem("iterations")), e.target.classList.contains("game__logo-img2") && (localStorage.getItem("countGame") == localStorage.getItem("iterations") ? (_.classList.add("block"), b.textContent = localStorage.getItem("countGame")) : localStorage.getItem("countGame") != localStorage.getItem("iterations") && (localStorage.getItem("countGame") >= Math.floor(localStorage.getItem("iterations") / 4 * 3) ? (k.classList.add("block"), F.textContent = localStorage.getItem("countGame")) : localStorage.getItem("countGame") < Math.floor(localStorage.getItem("iterations") / 4 * 3) && (S.classList.add("block"), L.textContent = localStorage.getItem("countGame")))) };
    y && y.addEventListener("click", G), u && u.addEventListener("click", $), d.forEach(e => { e.addEventListener("click", () => { e.parentNode.classList.remove("block") }) }), v && localStorage.getItem("playGame") && (null == x.mobile() ? document.addEventListener("mousemove", e => { let a = e.pageX,
            t = e.pageY;
        v.style.background = `radial-gradient(circle at ${a}px ${t}px, transparent, #000 25%)` }) : null != x.mobile() && document.addEventListener("touchmove", e => { if (1 == e.targetTouches.length) { let a = e.targetTouches[0],
                t = a.pageX,
                l = a.pageY;
            console.log(t, l), v.style.background = `radial-gradient(circle at ${t}px ${l}px, transparent, #000 40%)` } })), w && w.addEventListener("click", B), m && (m.addEventListener("click", A), m.addEventListener("click", () => { localStorage.setItem("countGame", Y) }), m.addEventListener("click", () => { P(localStorage.getItem("iterations") || I, X) })), document.addEventListener("click", e => { let a = new Audio("sounds/background-sounds/sound_fire.mp3");
        a.volume = .4, a.play(); let t = q(H("evil-laugh")),
            l = q(H("heartbeat")); if (e.target.classList.contains("clicked")) return t.play(), void console.log("already found");
        e.target.classList.contains("creature-pic") ? (Y++, localStorage.setItem("countGame", Y), l.play(), e.target.classList.add("clicked")) : e.target.classList.contains("creature-pic") || (t.play(), console.log("you wrong")) }), f && f.addEventListener("click", D) }, function(e, a) {}]);