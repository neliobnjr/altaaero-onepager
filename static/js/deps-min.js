var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, s, a, r, n, o, l, h, d, p, u, c, f, m;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    a = function(t, e, i) {
                        var s, a, r = t.cycle;
                        for (s in r) a = r[s], t[s] = "function" == typeof a ? a(i, e[i], e) : a[i % a.length];
                        delete t.cycle
                    },
                    r = function(t) {
                        if ("function" == typeof t) return t;
                        var e = "object" == typeof t ? t : {
                                each: t
                            },
                            i = e.ease,
                            s = e.from || 0,
                            a = e.base || 0,
                            r = {},
                            n = isNaN(s),
                            o = e.axis,
                            l = {
                                center: .5,
                                end: 1
                            }[s] || 0;
                        return function(t, h, d) {
                            var p, u, c, f, m, v, g, _, y, b = (d || e).length,
                                w = r[b];
                            if (!w) {
                                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                    for (g = -1 / 0; g < (g = d[y++].getBoundingClientRect().left) && b > y;);
                                    y--
                                }
                                for (w = r[b] = [], p = n ? Math.min(y, b) * l - .5 : s % y, u = n ? b * l / y - .5 : s / y | 0, g = 0, _ = 1 / 0, v = 0; b > v; v++) c = v % y - p, f = u - (v / y | 0), w[v] = m = o ? Math.abs("y" === o ? f : c) : Math.sqrt(c * c + f * f), m > g && (g = m), _ > m && (_ = m);
                                w.max = g - _, w.min = _, w.v = b = e.amount || e.each * (y > b ? b - 1 : o ? "y" === o ? b / y : y : Math.max(y, b / y)) || 0, w.b = 0 > b ? a - b : a
                            }
                            return b = (w[t] - w.min) / w.max, w.b + (i ? i.getRatio(b) : b) * w.v
                        }
                    },
                    n = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = n.prototype.render
                    },
                    o = 1e-8,
                    l = i._internals,
                    h = l.isSelector,
                    d = l.isArray,
                    p = n.prototype = i.to({}, .1, {}),
                    u = [];
                n.version = "2.1.3", p.constructor = n, p.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, n.distribute = r, p.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, p.updateTo = function(t, e) {
                    var s, a = this,
                        r = a.ratio,
                        n = a.vars.immediateRender || t.immediateRender;
                    for (s in e && a._startTime < a._timeline._time && (a._startTime = a._timeline._time, a._uncache(!1), a._gc ? a._enabled(!0, !1) : a._timeline.insert(a, a._startTime - a._delay)), t) a.vars[s] = t[s];
                    if (a._initted || n)
                        if (e) a._initted = !1, n && a.render(0, !0, !0);
                        else if (a._gc && a._enabled(!0, !1), a._notifyPluginsOfEnabled && a._firstPT && i._onPluginEvent("_onDisable", a), a._time / a._duration > .998) {
                        var o = a._totalTime;
                        a.render(0, !0, !1), a._initted = !1, a.render(o, !0, !1)
                    } else if (a._initted = !1, a._init(), a._time > 0 || n)
                        for (var l, h = 1 / (1 - r), d = a._firstPT; d;) l = d.s + d.c, d.c *= h, d.s = l - d.c, d = d._next;
                    return a
                }, p.render = function(t, e, s) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var a, r, n, h, d, p, u, c, f, m = this,
                        v = m._dirty ? m.totalDuration() : m._totalDuration,
                        g = m._time,
                        _ = m._totalTime,
                        y = m._cycle,
                        b = m._duration,
                        w = m._rawPrevTime;
                    if (t >= v - o && t >= 0 ? (m._totalTime = v, m._cycle = m._repeat, m._yoyo && 0 != (1 & m._cycle) ? (m._time = 0, m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0) : (m._time = b, m.ratio = m._ease._calcEnd ? m._ease.getRatio(1) : 1), m._reversed || (a = !0, r = "onComplete", s = s || m._timeline.autoRemoveChildren), 0 === b && (m._initted || !m.vars.lazy || s) && (m._startTime === m._timeline._duration && (t = 0), (0 > w || 0 >= t && t >= -o || w === o && "isPause" !== m.data) && w !== t && (s = !0, w > o && (r = "onReverseComplete")), m._rawPrevTime = c = !e || t || w === t ? t : o)) : o > t ? (m._totalTime = m._time = m._cycle = 0, m.ratio = m._ease._calcEnd ? m._ease.getRatio(0) : 0, (0 !== _ || 0 === b && w > 0) && (r = "onReverseComplete", a = m._reversed), t > -o ? t = 0 : 0 > t && (m._active = !1, 0 === b && (m._initted || !m.vars.lazy || s) && (w >= 0 && (s = !0), m._rawPrevTime = c = !e || t || w === t ? t : o)), m._initted || (s = !0)) : (m._totalTime = m._time = t, 0 !== m._repeat && (h = b + m._repeatDelay, m._cycle = m._totalTime / h >> 0, 0 !== m._cycle && m._cycle === m._totalTime / h && t >= _ && m._cycle--, m._time = m._totalTime - m._cycle * h, m._yoyo && 0 != (1 & m._cycle) && (m._time = b - m._time, (f = m._yoyoEase || m.vars.yoyoEase) && (m._yoyoEase || (!0 !== f || m._initted ? m._yoyoEase = f = !0 === f ? m._ease : f instanceof Ease ? f : Ease.map[f] : (f = m.vars.ease, m._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, m.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), m.ratio = f ? 1 - f.getRatio((b - m._time) / b) : 0)), m._time > b ? m._time = b : m._time < 0 && (m._time = 0)), m._easeType && !f ? (d = m._time / b, (1 === (p = m._easeType) || 3 === p && d >= .5) && (d = 1 - d), 3 === p && (d *= 2), 1 === (u = m._easePower) ? d *= d : 2 === u ? d *= d * d : 3 === u ? d *= d * d * d : 4 === u && (d *= d * d * d * d), m.ratio = 1 === p ? 1 - d : 2 === p ? d : m._time / b < .5 ? d / 2 : 1 - d / 2) : f || (m.ratio = m._ease.getRatio(m._time / b))), g !== m._time || s || y !== m._cycle) {
                        if (!m._initted) {
                            if (m._init(), !m._initted || m._gc) return;
                            if (!s && m._firstPT && (!1 !== m.vars.lazy && m._duration || m.vars.lazy && !m._duration)) return m._time = g, m._totalTime = _, m._rawPrevTime = w, m._cycle = y, l.lazyTweens.push(m), void(m._lazy = [t, e]);
                            !m._time || a || f ? a && this._ease._calcEnd && !f && (m.ratio = m._ease.getRatio(0 === m._time ? 0 : 1)) : m.ratio = m._ease.getRatio(m._time / b)
                        }
                        for (!1 !== m._lazy && (m._lazy = !1), m._active || !m._paused && m._time !== g && t >= 0 && (m._active = !0), 0 === _ && (2 === m._initted && t > 0 && m._init(), m._startAt && (t >= 0 ? m._startAt.render(t, !0, s) : r || (r = "_dummyGS")), m.vars.onStart && (0 !== m._totalTime || 0 === b) && (e || m._callback("onStart"))), n = m._firstPT; n;) n.f ? n.t[n.p](n.c * m.ratio + n.s) : n.t[n.p] = n.c * m.ratio + n.s, n = n._next;
                        m._onUpdate && (0 > t && m._startAt && m._startTime && m._startAt.render(t, !0, s), e || (m._totalTime !== _ || r) && m._callback("onUpdate")), m._cycle !== y && (e || m._gc || m.vars.onRepeat && m._callback("onRepeat")), r && (!m._gc || s) && (0 > t && m._startAt && !m._onUpdate && m._startTime && m._startAt.render(t, !0, s), a && (m._timeline.autoRemoveChildren && m._enabled(!1, !1), m._active = !1), !e && m.vars[r] && m._callback(r), 0 === b && m._rawPrevTime === o && c !== o && (m._rawPrevTime = 0))
                    } else _ !== m._totalTime && m._onUpdate && (e || m._callback("onUpdate"))
                }, n.to = function(t, e, i) {
                    return new n(t, e, i)
                }, n.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
                }, n.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
                }, n.staggerTo = n.allTo = function(t, e, o, l, p, c, f) {
                    var m, v, g, _, y = [],
                        b = r(o.stagger || l),
                        w = o.cycle,
                        x = (o.startAt || u).cycle;
                    for (d(t) || ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = s(t))), m = (t = t || []).length - 1, g = 0; m >= g; g++) {
                        for (_ in v = {}, o) v[_] = o[_];
                        if (w && (a(v, t, g), null != v.duration && (e = v.duration, delete v.duration)), x) {
                            for (_ in x = v.startAt = {}, o.startAt) x[_] = o.startAt[_];
                            a(v.startAt, t, g)
                        }
                        v.delay = b(g, t[g], t) + (v.delay || 0), g === m && p && (v.onComplete = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), p.apply(f || o.callbackScope || this, c || u)
                        }), y[g] = new n(t[g], e, v)
                    }
                    return y
                }, n.staggerFrom = n.allFrom = function(t, e, i, s, a, r, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, a, r, o)
                }, n.staggerFromTo = n.allFromTo = function(t, e, i, s, a, r, o, l) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, a, r, o, l)
                }, n.delayedCall = function(t, e, i, s, a) {
                    return new n(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: a,
                        overwrite: 0
                    })
                }, n.set = function(t, e) {
                    return new n(t, 0, e)
                }, n.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var c = function(t, e) {
                        for (var s = [], a = 0, r = t._first; r;) r instanceof i ? s[a++] = r : (e && (s[a++] = r), a = (s = s.concat(c(r, e))).length), r = r._next;
                        return s
                    },
                    f = n.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                n.killAll = function(t, i, s, a) {
                    null == i && (i = !0), null == s && (s = !0);
                    var r, n, o, l = f(0 != a),
                        h = l.length,
                        d = i && s && a;
                    for (o = 0; h > o; o++) n = l[o], (d || n instanceof e || (r = n.target === n.vars.onComplete) && s || i && !r) && (t ? n.totalTime(n._reversed ? 0 : n.totalDuration()) : n._enabled(!1, !1))
                }, n.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var a, r, o, p, u, c = l.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = s(t)), d(t))
                            for (p = t.length; --p > -1;) n.killChildTweensOf(t[p], e);
                        else {
                            for (o in a = [], c)
                                for (r = c[o].target.parentNode; r;) r === t && (a = a.concat(c[o].tweens)), r = r.parentNode;
                            for (u = a.length, p = 0; u > p; p++) e && a[p].totalTime(a[p].totalDuration()), a[p]._enabled(!1, !1)
                        }
                    }
                };
                var m = function(t, i, s, a) {
                    i = !1 !== i, s = !1 !== s;
                    for (var r, n, o = f(a = !1 !== a), l = i && s && a, h = o.length; --h > -1;) n = o[h], (l || n instanceof e || (r = n.target === n.vars.onComplete) && s || i && !r) && n.paused(t)
                };
                return n.pauseAll = function(t, e, i) {
                    m(!0, t, e, i)
                }, n.resumeAll = function(t, e, i) {
                    m(!1, t, e, i)
                }, n.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        a = i.ticker.time;
                    return arguments.length ? (e = e || o, s._startTime = a - (a - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, a = i.ticker.frame, s._startTime = a - (a - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, p.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
                }, p.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, p.time = function(t, e) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var i = this._duration,
                        s = this._cycle,
                        a = s * (i + this._repeatDelay);
                    return t > i && (t = i), this.totalTime(this._yoyo && 1 & s ? i - t + a : this._repeat ? t + a : t, e)
                }, p.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, p.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, p.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, p.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, p.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, n
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t);
                        var i, s, a = this,
                            r = a.vars;
                        for (s in a._labels = {}, a.autoRemoveChildren = !!r.autoRemoveChildren, a.smoothChildTiming = !!r.smoothChildTiming, a._sortChildren = !0, a._onUpdate = r.onUpdate, r) i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = a._swapSelfInParams(i));
                        l(r.tweens) && a.add(r.tweens, 0, r.align, r.stagger)
                    },
                    a = 1e-8,
                    r = i._internals,
                    n = s._internals = {},
                    o = r.isSelector,
                    l = r.isArray,
                    h = r.lazyTweens,
                    d = r.lazyRender,
                    p = _gsScope._gsDefine.globals,
                    u = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    c = function(t, e, i) {
                        var s, a, r = t.cycle;
                        for (s in r) a = r[s], t[s] = "function" == typeof a ? a(i, e[i], e) : a[i % a.length];
                        delete t.cycle
                    },
                    f = n.pauseCallback = function() {},
                    m = function(t, e, i, s) {
                        var a = "immediateRender";
                        return a in e || (e[a] = !(i && !1 === i[a] || s)), e
                    },
                    v = function(t) {
                        if ("function" == typeof t) return t;
                        var e = "object" == typeof t ? t : {
                                each: t
                            },
                            i = e.ease,
                            s = e.from || 0,
                            a = e.base || 0,
                            r = {},
                            n = isNaN(s),
                            o = e.axis,
                            l = {
                                center: .5,
                                end: 1
                            }[s] || 0;
                        return function(t, h, d) {
                            var p, u, c, f, m, v, g, _, y, b = (d || e).length,
                                w = r[b];
                            if (!w) {
                                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                    for (g = -1 / 0; g < (g = d[y++].getBoundingClientRect().left) && b > y;);
                                    y--
                                }
                                for (w = r[b] = [], p = n ? Math.min(y, b) * l - .5 : s % y, u = n ? b * l / y - .5 : s / y | 0, g = 0, _ = 1 / 0, v = 0; b > v; v++) c = v % y - p, f = u - (v / y | 0), w[v] = m = o ? Math.abs("y" === o ? f : c) : Math.sqrt(c * c + f * f), m > g && (g = m), _ > m && (_ = m);
                                w.max = g - _, w.min = _, w.v = b = e.amount || e.each * (y > b ? b - 1 : o ? "y" === o ? b / y : y : Math.max(y, b / y)) || 0, w.b = 0 > b ? a - b : a
                            }
                            return b = (w[t] - w.min) / w.max, w.b + (i ? i.getRatio(b) : b) * w.v
                        }
                    },
                    g = s.prototype = new e;
                return s.version = "2.1.3", s.distribute = v, g.constructor = s, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, s, a) {
                    var r = s.repeat && p.TweenMax || i;
                    return e ? this.add(new r(t, e, s), a) : this.set(t, s, a)
                }, g.from = function(t, e, s, a) {
                    return this.add((s.repeat && p.TweenMax || i).from(t, e, m(0, s)), a)
                }, g.fromTo = function(t, e, s, a, r) {
                    var n = a.repeat && p.TweenMax || i;
                    return a = m(0, a, s), e ? this.add(n.fromTo(t, e, s, a), r) : this.set(t, a, r)
                }, g.staggerTo = function(t, e, a, r, n, l, h, d) {
                    var p, f, m = new s({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: d,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = v(a.stagger || r),
                        _ = a.startAt,
                        y = a.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = function(t) {
                            var e, i = [],
                                s = t.length;
                            for (e = 0; e !== s; i.push(t[e++]));
                            return i
                        }(t)), f = 0; f < t.length; f++) p = u(a), _ && (p.startAt = u(_), _.cycle && c(p.startAt, t, f)), y && (c(p, t, f), null != p.duration && (e = p.duration, delete p.duration)), m.to(t[f], e, p, g(f, t[f], t));
                    return this.add(m, n)
                }, g.staggerFrom = function(t, e, i, s, a, r, n, o) {
                    return i.runBackwards = !0, this.staggerTo(t, e, m(0, i), s, a, r, n, o)
                }, g.staggerFromTo = function(t, e, i, s, a, r, n, o, l) {
                    return s.startAt = i, this.staggerTo(t, e, m(0, s, i), a, r, n, o, l)
                }, g.call = function(t, e, s, a) {
                    return this.add(i.delayedCall(0, t, e, s), a)
                }, g.set = function(t, e, s) {
                    return this.add(new i(t, 0, m(0, e, null, !0)), s)
                }, s.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var a, r, n, o, l = new s(t),
                        h = l._timeline;
                    for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, n = h._first; n;) o = n._next, e && n instanceof i && n.target === n.vars.onComplete || (0 > (r = n._startTime - n._delay) && (a = 1), l.add(n, r)), n = o;
                    return h.add(l, 0), a && l.totalDuration(), l
                }, g.add = function(a, r, n, o) {
                    var h, d, p, u, c, f, m = this;
                    if ("number" != typeof r && (r = m._parseTimeOrLabel(r, 0, !0, a)), !(a instanceof t)) {
                        if (a instanceof Array || a && a.push && l(a)) {
                            for (n = n || "normal", o = o || 0, h = r, d = a.length, p = 0; d > p; p++) l(u = a[p]) && (u = new s({
                                tweens: u
                            })), m.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === n ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === n && (u._startTime -= u.delay())), h += o;
                            return m._uncache(!0)
                        }
                        if ("string" == typeof a) return m.addLabel(a, r);
                        if ("function" != typeof a) throw "Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string.";
                        a = i.delayedCall(0, a)
                    }
                    if (e.prototype.add.call(m, a, r), (a._time || !a._duration && a._initted) && (h = (m.rawTime() - a._startTime) * a._timeScale, (!a._duration || Math.abs(Math.max(0, Math.min(a.totalDuration(), h))) - a._totalTime > 1e-5) && a.render(h, !1, !1)), (m._gc || m._time === m._duration) && !m._paused && m._duration < m.duration())
                        for (f = (c = m).rawTime() > a._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return m
                }, g.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, g.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, s, a) {
                    var r = i.delayedCall(0, f, s, a || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, s, a) {
                    var r, n;
                    if (a instanceof t && a.timeline === this) this.remove(a);
                    else if (a && (a instanceof Array || a.push && l(a)))
                        for (n = a.length; --n > -1;) a[n] instanceof t && a[n].timeline === this && this.remove(a[n]);
                    if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - r : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                    else {
                        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = r + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : r
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, n, o, l, p, u, c, f = this,
                        m = f._time,
                        v = f._dirty ? f.totalDuration() : f._totalDuration,
                        g = f._startTime,
                        _ = f._timeScale,
                        y = f._paused;
                    if (m !== f._time && (t += f._time - m), f._hasPause && !f._forcingPlayhead && !e) {
                        if (t > m)
                            for (s = f._first; s && s._startTime <= t && !p;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === f._rawPrevTime || (p = s), s = s._next;
                        else
                            for (s = f._last; s && s._startTime >= t && !p;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (p = s), s = s._prev;
                        p && (f._time = f._totalTime = t = p._startTime, c = f._startTime + (f._reversed ? f._duration - t : t) / f._timeScale)
                    }
                    if (t >= v - a && t >= 0) f._totalTime = f._time = v, f._reversed || f._hasPausedChild() || (r = !0, o = "onComplete", l = !!f._timeline.autoRemoveChildren, 0 === f._duration && (0 >= t && t >= -a || f._rawPrevTime < 0 || f._rawPrevTime === a) && f._rawPrevTime !== t && f._first && (l = !0, f._rawPrevTime > a && (o = "onReverseComplete"))), f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : a, t = v + 1e-4;
                    else if (a > t)
                        if (f._totalTime = f._time = 0, t > -a && (t = 0), (0 !== m || 0 === f._duration && f._rawPrevTime !== a && (f._rawPrevTime > 0 || 0 > t && f._rawPrevTime >= 0)) && (o = "onReverseComplete", r = f._reversed), 0 > t) f._active = !1, f._timeline.autoRemoveChildren && f._reversed ? (l = r = !0, o = "onReverseComplete") : f._rawPrevTime >= 0 && f._first && (l = !0), f._rawPrevTime = t;
                        else {
                            if (f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : a, 0 === t && r)
                                for (s = f._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, f._initted || (l = !0)
                        }
                    else f._totalTime = f._time = f._rawPrevTime = t;
                    if (f._time !== m && f._first || i || l || p) {
                        if (f._initted || (f._initted = !0), f._active || !f._paused && f._time !== m && t > 0 && (f._active = !0), 0 === m && f.vars.onStart && (0 === f._time && f._duration || e || f._callback("onStart")), (u = f._time) >= m)
                            for (s = f._first; s && (n = s._next, u === f._time && (!f._paused || y));)(s._active || s._startTime <= u && !s._paused && !s._gc) && (p === s && (f.pause(), f._pauseTime = c), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
                        else
                            for (s = f._last; s && (n = s._prev, u === f._time && (!f._paused || y));) {
                                if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                                    if (p === s) {
                                        for (p = s._prev; p && p.endTime() > f._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                        p = null, f.pause(), f._pauseTime = c
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = n
                            }
                        f._onUpdate && (e || (h.length && d(), f._callback("onUpdate"))), o && (f._gc || (g === f._startTime || _ !== f._timeScale) && (0 === f._time || v >= f.totalDuration()) && (r && (h.length && d(), f._timeline.autoRemoveChildren && f._enabled(!1, !1), f._active = !1), !e && f.vars[o] && f._callback(o)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, s, a) {
                    a = a || -9999999999;
                    for (var r = [], n = this._first, o = 0; n;) n._startTime < a || (n instanceof i ? !1 !== e && (r[o++] = n) : (!1 !== s && (r[o++] = n), !1 !== t && (o = (r = r.concat(n.getChildren(!0, e, s))).length))), n = n._next;
                    return r
                }, g.getTweensOf = function(t, e) {
                    var s, a, r = this._gc,
                        n = [],
                        o = 0;
                    for (r && this._enabled(!0, !0), a = (s = i.getTweensOf(t)).length; --a > -1;)(s[a].timeline === this || e && this._contains(s[a])) && (n[o++] = s[a]);
                    return r && this._enabled(!1, !0), n
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, a = this._first, r = this._labels; a;) a._startTime >= i && (a._startTime += t), a = a._next;
                    if (e)
                        for (s in r) r[s] >= i && (r[s] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, a = !1; --s > -1;) i[s]._kill(t, e) && (a = !0);
                    return a
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function(e, i, s) {
                    this._forcingPlayhead = !0;
                    var a = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, a
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, a = this, r = a._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && a._sortChildren && !r._paused && !a._calculatingDuration ? (a._calculatingDuration = 1, a.add(r, r._startTime - r._delay), a._calculatingDuration = 0) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, a._timeline.smoothChildTiming && (a._startTime += r._startTime / a._timeScale, a._time -= r._startTime, a._totalTime -= r._startTime, a._rawPrevTime -= r._startTime), a.shiftChildren(-r._startTime, !1, -9999999999), n = 0), (i = r._startTime + r._totalDuration / r._timeScale) > s && (s = i), r = e;
                            a._duration = a._totalDuration = s, a._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function(e) {
                    if (!1 === e && this._paused)
                        for (var i = this._first; i;) i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                    },
                    a = 1e-8,
                    r = e._internals,
                    n = r.lazyTweens,
                    o = r.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    h = new i(null, null, 1, 0),
                    d = s.prototype = new t;
                return d.constructor = s, d.kill()._gc = !1, s.version = "2.1.3", d.invalidate = function() {
                    return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, d.addCallback = function(t, i, s, a) {
                    return this.add(e.delayedCall(0, t, s, a), i)
                }, d.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, a = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === a && i[s]._enabled(!1, !1);
                    return this
                }, d.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, d.tweenTo = function(t, i) {
                    i = i || {};
                    var s, a, r, n = {
                            ease: h,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        o = i.repeat && l.TweenMax || e;
                    for (a in i) n[a] = i[a];
                    return n.time = this._parseTimeOrLabel(t), s = Math.abs(Number(n.time) - this._time) / this._timeScale || .001, r = new o(this, s, n), n.onStart = function() {
                        r.target.paused(!0), r.vars.time === r.target.time() || s !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                    }, r
                }, d.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var s = this.tweenTo(e, i);
                    return s.isFromTo = 1, s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, l, h, d, p, u, c, f, m = this,
                        v = m._time,
                        g = m._dirty ? m.totalDuration() : m._totalDuration,
                        _ = m._duration,
                        y = m._totalTime,
                        b = m._startTime,
                        w = m._timeScale,
                        x = m._rawPrevTime,
                        T = m._paused,
                        S = m._cycle;
                    if (v !== m._time && (t += m._time - v), t >= g - a && t >= 0) m._locked || (m._totalTime = g, m._cycle = m._repeat), m._reversed || m._hasPausedChild() || (r = !0, h = "onComplete", d = !!m._timeline.autoRemoveChildren, 0 === m._duration && (0 >= t && t >= -a || 0 > x || x === a) && x !== t && m._first && (d = !0, x > a && (h = "onReverseComplete"))), m._rawPrevTime = m._duration || !e || t || m._rawPrevTime === t ? t : a, m._yoyo && 1 & m._cycle ? m._time = t = 0 : (m._time = _, t = _ + 1e-4);
                    else if (a > t)
                        if (m._locked || (m._totalTime = m._cycle = 0), m._time = 0, t > -a && (t = 0), (0 !== v || 0 === _ && x !== a && (x > 0 || 0 > t && x >= 0) && !m._locked) && (h = "onReverseComplete", r = m._reversed), 0 > t) m._active = !1, m._timeline.autoRemoveChildren && m._reversed ? (d = r = !0, h = "onReverseComplete") : x >= 0 && m._first && (d = !0), m._rawPrevTime = t;
                        else {
                            if (m._rawPrevTime = _ || !e || t || m._rawPrevTime === t ? t : a, 0 === t && r)
                                for (s = m._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, m._initted || (d = !0)
                        }
                    else 0 === _ && 0 > x && (d = !0), m._time = m._rawPrevTime = t, m._locked || (m._totalTime = t, 0 !== m._repeat && (p = _ + m._repeatDelay, m._cycle = m._totalTime / p >> 0, m._cycle && m._cycle === m._totalTime / p && t >= y && m._cycle--, m._time = m._totalTime - m._cycle * p, m._yoyo && 1 & m._cycle && (m._time = _ - m._time), m._time > _ ? (m._time = _, t = _ + 1e-4) : m._time < 0 ? m._time = t = 0 : t = m._time));
                    if (m._hasPause && !m._forcingPlayhead && !e) {
                        if ((t = m._time) > v || m._repeat && S !== m._cycle)
                            for (s = m._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === m._rawPrevTime || (u = s), s = s._next;
                        else
                            for (s = m._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                        u && (f = m._startTime + (m._reversed ? m._duration - u._startTime : u._startTime) / m._timeScale, u._startTime < _ && (m._time = m._rawPrevTime = t = u._startTime, m._totalTime = t + m._cycle * (m._totalDuration + m._repeatDelay)))
                    }
                    if (m._cycle !== S && !m._locked) {
                        var C = m._yoyo && 0 != (1 & S),
                            E = C === (m._yoyo && 0 != (1 & m._cycle)),
                            P = m._totalTime,
                            M = m._cycle,
                            k = m._rawPrevTime,
                            O = m._time;
                        if (m._totalTime = S * _, m._cycle < S ? C = !C : m._totalTime += _, m._time = v, m._rawPrevTime = 0 === _ ? x - 1e-4 : x, m._cycle = S, m._locked = !0, v = C ? 0 : _, m.render(v, e, 0 === _), e || m._gc || m.vars.onRepeat && (m._cycle = M, m._locked = !1, m._callback("onRepeat")), v !== m._time) return;
                        if (E && (m._cycle = S, m._locked = !0, v = C ? _ + 1e-4 : -1e-4, m.render(v, !0, !1)), m._locked = !1, m._paused && !T) return;
                        m._time = O, m._totalTime = P, m._cycle = M, m._rawPrevTime = k
                    }
                    if (m._time !== v && m._first || i || d || u) {
                        if (m._initted || (m._initted = !0), m._active || !m._paused && m._totalTime !== y && t > 0 && (m._active = !0), 0 === y && m.vars.onStart && (0 === m._totalTime && m._totalDuration || e || m._callback("onStart")), (c = m._time) >= v)
                            for (s = m._first; s && (l = s._next, c === m._time && (!m._paused || T));)(s._active || s._startTime <= m._time && !s._paused && !s._gc) && (u === s && (m.pause(), m._pauseTime = f), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                        else
                            for (s = m._last; s && (l = s._prev, c === m._time && (!m._paused || T));) {
                                if (s._active || s._startTime <= v && !s._paused && !s._gc) {
                                    if (u === s) {
                                        for (u = s._prev; u && u.endTime() > m._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, m.pause(), m._pauseTime = f
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = l
                            }
                        m._onUpdate && (e || (n.length && o(), m._callback("onUpdate"))), h && (m._locked || m._gc || (b === m._startTime || w !== m._timeScale) && (0 === m._time || g >= m.totalDuration()) && (r && (n.length && o(), m._timeline.autoRemoveChildren && m._enabled(!1, !1), m._active = !1), !e && m.vars[h] && m._callback(h)))
                    } else y !== m._totalTime && m._onUpdate && (e || m._callback("onUpdate"))
                }, d.getActive = function(t, e, i) {
                    var s, a, r = [],
                        n = this.getChildren(t || null == t, e || null == t, !!i),
                        o = 0,
                        l = n.length;
                    for (s = 0; l > s; s++)(a = n[s]).isActive() && (r[o++] = a);
                    return r
                }, d.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, d.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, d.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, d.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, d.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, d.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, d.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, d.time = function(t, e) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var i = this._duration,
                        s = this._cycle,
                        a = s * (i + this._repeatDelay);
                    return t > i && (t = i), this.totalTime(this._yoyo && 1 & s ? i - t + a : this._repeat ? t + a : t, e)
                }, d.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, d.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, d.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, d.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + a)
                }, s
            }, !0), t = 180 / Math.PI, e = [], i = [], s = [], a = {}, r = _gsScope._gsDefine.globals, n = function(t, e, i, s) {
                i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
            }, o = function(t, e, i, s) {
                var a = {
                        a: t
                    },
                    r = {},
                    n = {},
                    o = {
                        c: s
                    },
                    l = (t + e) / 2,
                    h = (e + i) / 2,
                    d = (i + s) / 2,
                    p = (l + h) / 2,
                    u = (h + d) / 2,
                    c = (u - p) / 8;
                return a.b = l + (t - l) / 4, r.b = p + c, a.c = r.a = (a.b + r.b) / 2, r.c = n.a = (p + u) / 2, n.b = u - c, o.b = d + (s - d) / 4, n.c = o.a = (n.b + o.b) / 2, [a, r, n, o]
            }, l = function(t, a, r, n, l) {
                var h, d, p, u, c, f, m, v, g, _, y, b, w, x = t.length - 1,
                    T = 0,
                    S = t[0].a;
                for (h = 0; x > h; h++) d = (c = t[T]).a, p = c.d, u = t[T + 1].d, l ? (y = e[h], w = ((b = i[h]) + y) * a * .25 / (n ? .5 : s[h] || .5), v = p - ((f = p - (p - d) * (n ? .5 * a : 0 !== y ? w / y : 0)) + (((m = p + (u - p) * (n ? .5 * a : 0 !== b ? w / b : 0)) - f) * (3 * y / (y + b) + .5) / 4 || 0))) : v = p - ((f = p - (p - d) * a * .5) + (m = p + (u - p) * a * .5)) / 2, f += v, m += v, c.c = g = f, c.b = 0 !== h ? S : S = c.a + .6 * (c.c - c.a), c.da = p - d, c.ca = g - d, c.ba = S - d, r ? (_ = o(d, S, g, p), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, S = m;
                (c = t[T]).b = S, c.c = S + .4 * (c.d - S), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = S - c.a, r && (_ = o(c.a, S, c.c, c.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
            }, h = function(t, s, a, r) {
                var o, l, h, d, p, u, c = [];
                if (r)
                    for (l = (t = [r].concat(t)).length; --l > -1;) "string" == typeof(u = t[l][s]) && "=" === u.charAt(1) && (t[l][s] = r[s] + Number(u.charAt(0) + u.substr(2)));
                if (0 > (o = t.length - 2)) return c[0] = new n(t[0][s], 0, 0, t[0][s]), c;
                for (l = 0; o > l; l++) h = t[l][s], d = t[l + 1][s], c[l] = new n(h, 0, 0, d), a && (p = t[l + 2][s], e[l] = (e[l] || 0) + (d - h) * (d - h), i[l] = (i[l] || 0) + (p - d) * (p - d));
                return c[l] = new n(t[l][s], 0, 0, t[l + 1][s]), c
            }, d = function(t, r, n, o, d, p) {
                var u, c, f, m, v, g, _, y, b = {},
                    w = [],
                    x = p || t[0];
                for (c in d = "string" == typeof d ? "," + d + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == r && (r = 1), t[0]) w.push(c);
                if (t.length > 1) {
                    for (y = t[t.length - 1], _ = !0, u = w.length; --u > -1;)
                        if (c = w[u], Math.abs(x[c] - y[c]) > .05) {
                            _ = !1;
                            break
                        }
                    _ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                }
                for (e.length = i.length = s.length = 0, u = w.length; --u > -1;) c = w[u], a[c] = -1 !== d.indexOf("," + c + ","), b[c] = h(t, c, a[c], p);
                for (u = e.length; --u > -1;) e[u] = Math.sqrt(e[u]), i[u] = Math.sqrt(i[u]);
                if (!o) {
                    for (u = w.length; --u > -1;)
                        if (a[c])
                            for (g = (f = b[w[u]]).length - 1, m = 0; g > m; m++) v = f[m + 1].da / i[m] + f[m].da / e[m] || 0, s[m] = (s[m] || 0) + v * v;
                    for (u = s.length; --u > -1;) s[u] = Math.sqrt(s[u])
                }
                for (u = w.length, m = n ? 4 : 1; --u > -1;) f = b[c = w[u]], l(f, r, n, o, a[c]), _ && (f.splice(0, m), f.splice(f.length - m, m));
                return b
            }, p = function(t, e, i) {
                var s, a, r, o, l, h, d, p, u, c, f, m = {},
                    v = "cubic" === (e = e || "soft") ? 3 : 2,
                    g = "soft" === e,
                    _ = [];
                if (g && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                for (u in t[0]) _.push(u);
                for (h = _.length; --h > -1;) {
                    for (m[u = _[h]] = l = [], c = 0, p = t.length, d = 0; p > d; d++) s = null == i ? t[d][u] : "string" == typeof(f = t[d][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && d > 1 && p - 1 > d && (l[c++] = (s + l[c - 2]) / 2), l[c++] = s;
                    for (p = c - v + 1, c = 0, d = 0; p > d; d += v) s = l[d], a = l[d + 1], r = l[d + 2], o = 2 === v ? 0 : l[d + 3], l[c++] = f = 3 === v ? new n(s, a, r, o) : new n(s, (2 * a + s) / 3, (2 * a + r) / 3, r);
                    l.length = c
                }
                return m
            }, u = function(t, e, i) {
                for (var s, a, r, n, o, l, h, d, p, u, c, f = 1 / i, m = t.length; --m > -1;)
                    for (r = (u = t[m]).a, n = u.d - r, o = u.c - r, l = u.b - r, s = a = 0, d = 1; i >= d; d++) s = a - (a = ((h = f * d) * h * n + 3 * (p = 1 - h) * (h * o + p * l)) * h), e[c = m * i + d - 1] = (e[c] || 0) + s * s
            }, c = function(t, e) {
                var i, s, a, r, n = [],
                    o = [],
                    l = 0,
                    h = 0,
                    d = (e = e >> 0 || 6) - 1,
                    p = [],
                    c = [];
                for (i in t) u(t[i], n, e);
                for (a = n.length, s = 0; a > s; s++) l += Math.sqrt(n[s]), c[r = s % e] = l, r === d && (h += l, p[r = s / e >> 0] = c, o[r] = h, l = 0, c = []);
                return {
                    length: h,
                    lengths: o,
                    segments: p
                }
            }, f = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.9",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var s, a, r, n, o, l = e.values || [],
                        h = {},
                        u = l[0],
                        f = e.autoRotate || i.vars.orientToBezier;
                    for (s in this._autoRotate = f ? f instanceof Array ? f : [
                            ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                        ] : null, u) this._props.push(s);
                    for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), a = this._func[s] = "function" == typeof t[s], h[s] = a ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                        var m = c(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (f = this._autoRotate)
                        for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), r = f.length; --r > -1;) {
                            for (n = 0; 3 > n; n++) s = f[r][n], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            s = f[r][2], this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, s, a, r, n, o, l, h, d, p, u, c = this._segCount,
                        f = this._func,
                        m = this._target,
                        v = e !== this._startRatio;
                    if (this._timeRes) {
                        if (d = this._lengths, p = this._curSeg, u = e * this._length, a = this._li, u > this._l2 && c - 1 > a) {
                            for (h = c - 1; h > a && (this._l2 = d[++a]) <= u;);
                            this._l1 = d[a - 1], this._li = a, this._curSeg = p = this._segments[a], this._s2 = p[this._s1 = this._si = 0]
                        } else if (u < this._l1 && a > 0) {
                            for (; a > 0 && (this._l1 = d[--a]) >= u;);
                            0 === a && u < this._l1 ? this._l1 = 0 : a++, this._l2 = d[a], this._li = a, this._curSeg = p = this._segments[a], this._s1 = p[(this._si = p.length - 1) - 1] || 0, this._s2 = p[this._si]
                        }
                        if (i = a, u -= this._l1, a = this._si, u > this._s2 && a < p.length - 1) {
                            for (h = p.length - 1; h > a && (this._s2 = p[++a]) <= u;);
                            this._s1 = p[a - 1], this._si = a
                        } else if (u < this._s1 && a > 0) {
                            for (; a > 0 && (this._s1 = p[--a]) >= u;);
                            0 === a && u < this._s1 ? this._s1 = 0 : a++, this._s2 = p[a], this._si = a
                        }
                        o = 1 === e ? 1 : (a + (u - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else o = (e - (i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0) * (1 / c)) * c;
                    for (s = 1 - o, a = this._props.length; --a > -1;) r = this._props[a], l = (o * o * (n = this._beziers[r][i]).da + 3 * s * (o * n.ca + s * n.ba)) * o + n.a, this._mod[r] && (l = this._mod[r](l, m)), f[r] ? m[r](l) : m[r] = l;
                    if (this._autoRotate) {
                        var g, _, y, b, w, x, T, S = this._autoRotate;
                        for (a = S.length; --a > -1;) r = S[a][2], x = S[a][3] || 0, T = !0 === S[a][4] ? 1 : t, n = this._beziers[S[a][0]], g = this._beziers[S[a][1]], n && g && (n = n[i], g = g[i], _ = n.a + (n.b - n.a) * o, _ += ((b = n.b + (n.c - n.b) * o) - _) * o, b += (n.c + (n.d - n.c) * o - b) * o, y = g.a + (g.b - g.a) * o, y += ((w = g.b + (g.c - g.b) * o) - y) * o, w += (g.c + (g.d - g.c) * o - w) * o, l = v ? Math.atan2(w - y, b - _) * T + x : this._initialRotations[a], this._mod[r] && (l = this._mod[r](l, m)), f[r] ? m[r](l) : m[r] = l)
                    }
                }
            }), m = f.prototype, f.bezierThrough = d, f.cubicToQuadratic = o, f._autoCSS = !0, f.quadraticToCubic = function(t, e, i) {
                return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, f._cssRegister = function() {
                var t = r.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        s = e._setPluginRatio,
                        a = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, r, n, o, l) {
                            e instanceof Array && (e = {
                                values: e
                            }), l = new f;
                            var h, d, p, u = e.values,
                                c = u.length - 1,
                                m = [],
                                v = {};
                            if (0 > c) return o;
                            for (h = 0; c >= h; h++) p = i(t, u[h], n, o, l, c !== h), m[h] = p.end;
                            for (d in e) v[d] = e[d];
                            return v.values = m, (o = new a(t, "bezier", 0, 0, p.pt, 2)).data = p, o.plugin = l, o.setRatio = s, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (h = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != p.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != p.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), v.autoRotate && (n._transform || n._enableTransforms(!1), p.autoRotate = n._target._gsTransform, p.proxy.rotation = p.autoRotate.rotation || 0, n._overwriteProps.push("rotation")), l._onInitTween(p.proxy, v, n._tween), o
                        }
                    })
                }
            }, m._mod = function(t) {
                for (var e, i = this._overwriteProps, s = i.length; --s > -1;)(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e)
            }, m._kill = function(t) {
                var e, i, s = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                if (s = this._autoRotate)
                    for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
                return this._super._kill.call(this, t)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, a, r, n = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = n.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    h = n.prototype = new t("css");
                h.constructor = n, n.version = "2.1.3", n.API = 2, n.defaultTransformPerspective = 0, n.defaultSkewType = "compensated", n.defaultSmoothOrigin = !0, h = "px", n.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var d, p, u, c, f, m, v, g, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                    x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    S = /opacity *= *([^)]*)/i,
                    C = /opacity:([^;]*)/i,
                    E = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    M = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    z = function(t, e) {
                        return e.toUpperCase()
                    },
                    D = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    R = /[\s,\(]/i,
                    $ = Math.PI / 180,
                    F = 180 / Math.PI,
                    N = {},
                    B = {
                        style: {}
                    },
                    X = _gsScope.document || {
                        createElement: function() {
                            return B
                        }
                    },
                    Y = function(t, e) {
                        var i = X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t);
                        return i.style ? i : X.createElement(t)
                    },
                    G = Y("div"),
                    H = Y("img"),
                    V = n._internals = {
                        _specialProps: l
                    },
                    W = (_gsScope.navigator || {}).userAgent || "",
                    j = function() {
                        var t = W.indexOf("Android"),
                            e = Y("a");
                        return u = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), f = u && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, c = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    q = function(t) {
                        return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    U = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    Z = "",
                    K = "",
                    Q = function(t, e) {
                        var i, s, a = (e = e || G).style;
                        if (void 0 !== a[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === a[i[s] + t];);
                        return s >= 0 ? (Z = "-" + (K = 3 === s ? "ms" : i[s]).toLowerCase() + "-", K + t) : null
                    },
                    J = "undefined" != typeof window ? window : X.defaultView || {
                        getComputedStyle: function() {}
                    },
                    tt = function(t) {
                        return J.getComputedStyle(t)
                    },
                    et = n.getStyle = function(t, e, i, s, a) {
                        var r;
                        return j || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || tt(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(M, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == a || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : a) : q(t)
                    },
                    it = V.convertToPixels = function(t, i, s, a, r) {
                        if ("px" === a || !a && "lineHeight" !== i) return s;
                        if ("auto" === a || !s) return 0;
                        var o, l, h, d = D.test(i),
                            p = t,
                            u = G.style,
                            c = 0 > s,
                            f = 1 === s;
                        if (c && (s = -s), f && (s *= 100), "lineHeight" !== i || a)
                            if ("%" === a && -1 !== i.indexOf("border")) o = s / 100 * (d ? t.clientWidth : t.clientHeight);
                            else {
                                if (u.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== a && p.appendChild && "v" !== a.charAt(0) && "rem" !== a) u[d ? "borderLeftWidth" : "borderTopWidth"] = s + a;
                                else {
                                    if (p = t.parentNode || X.body, -1 !== et(p, "display").indexOf("flex") && (u.position = "absolute"), l = p._gsCache, h = e.ticker.frame, l && d && l.time === h) return l.width * s / 100;
                                    u[d ? "width" : "height"] = s + a
                                }
                                p.appendChild(G), o = parseFloat(G[d ? "offsetWidth" : "offsetHeight"]), p.removeChild(G), d && "%" === a && !1 !== n.cacheWidths && ((l = p._gsCache = p._gsCache || {}).time = h, l.width = o / s * 100), 0 !== o || r || (o = it(t, i, s, a, !0))
                            }
                        else l = tt(t).lineHeight, t.style.lineHeight = s, o = parseFloat(tt(t).lineHeight), t.style.lineHeight = l;
                        return f && (o /= 100), c ? -o : o
                    },
                    st = V.calculateOffset = function(t, e, i) {
                        if ("absolute" !== et(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            a = et(t, "margin" + s, i);
                        return t["offset" + s] - (it(t, e, parseFloat(a), a.replace(T, "")) || 0)
                    },
                    at = function(t, e) {
                        var i, s, a, r = {};
                        if (e = e || tt(t))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (a = e[i]).indexOf("-transform") || zt === a) && (r[a.replace(k, z)] = e.getPropertyValue(a));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Ot === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, z)] = e[i]);
                        return j || (r.opacity = q(t)), s = Ht(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, At && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    rt = function(t, e, i, s, a) {
                        var r, n, o, l = {},
                            h = t.style;
                        for (n in i) "cssText" !== n && "length" !== n && isNaN(n) && (e[n] !== (r = i[n]) || a && a[n]) && -1 === n.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[n] = "auto" !== r || "left" !== n && "top" !== n ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[n] || "" === e[n].replace(x, "") ? r : 0 : st(t, n), void 0 !== h[n] && (o = new bt(h, n, h[n], o)));
                        if (s)
                            for (n in s) "className" !== n && (l[n] = s[n]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    },
                    nt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    lt = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                        if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            a = nt[e],
                            r = a.length;
                        for (i = i || tt(t); --r > -1;) s -= parseFloat(et(t, "padding" + a[r], i, !0)) || 0, s -= parseFloat(et(t, "border" + a[r] + "Width", i, !0)) || 0;
                        return s
                    },
                    ht = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, s = t.split(" "),
                            a = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                        if (s.length > 3 && !e) {
                            for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(ht(s[i]));
                            return t.join(",")
                        }
                        return null == r ? r = "center" === a ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === a || isNaN(parseFloat(a)) && -1 === (a + "").indexOf("=")) && (a = "50%"), t = a + " " + r + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== a.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === a.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(a.replace(x, "")), e.oy = parseFloat(r.replace(x, "")), e.v = t), e || t
                    },
                    dt = function(t, e) {
                        return "function" == typeof t && (t = t(g, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    pt = function(t, e) {
                        "function" == typeof t && (t = t(g, v));
                        var i = "string" == typeof t && "=" === t.charAt(1);
                        return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ut = function(t, e, i, s) {
                        var a, r, n, o, l;
                        return "function" == typeof t && (t = t(g, v)), null == t ? o = e : "number" == typeof t ? o = t : (a = 360, r = t.split("_"), n = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), r.length && (s && (s[i] = e + n), -1 !== t.indexOf("short") && ((n %= a) !== n % 180 && (n = 0 > n ? n + a : n - a)), -1 !== t.indexOf("_cw") && 0 > n ? n = (n + 9999999999 * a) % a - (n / a | 0) * a : -1 !== t.indexOf("ccw") && n > 0 && (n = (n - 9999999999 * a) % a - (n / a | 0) * a)), o = e + n), 1e-6 > o && o > -1e-6 && (o = 0), o
                    },
                    ct = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ft = function(t, e, i) {
                        return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    mt = n.parseColor = function(t, e) {
                        var i, s, a, r, n, o, l, h, d, p, u;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), a = t.charAt(2), r = t.charAt(3), t = "#" + s + s + a + a + r + r), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = u = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else n = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (a = .5 >= l ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(n + 1 / 3, s, a), i[1] = ft(n, s, a), i[2] = ft(n - 1 / 3, s, a);
                                else i = t.match(_) || ct.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ct.black;
                        return e && !u && (s = i[0] / 255, a = i[1] / 255, r = i[2] / 255, l = ((h = Math.max(s, a, r)) + (d = Math.min(s, a, r))) / 2, h === d ? n = o = 0 : (p = h - d, o = l > .5 ? p / (2 - h - d) : p / (h + d), n = h === s ? (a - r) / p + (r > a ? 6 : 0) : h === a ? (r - s) / p + 2 : (s - a) / p + 4, n *= 60), i[0] = n + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    vt = function(t, e) {
                        var i, s, a, r = t.match(gt) || [],
                            n = 0,
                            o = "";
                        if (!r.length) return t;
                        for (i = 0; i < r.length; i++) s = r[i], n += (a = t.substr(n, t.indexOf(s, n) - n)).length + s.length, 3 === (s = mt(s, e)).length && s.push(1), o += a + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return o + t.substr(n)
                    },
                    gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ct) gt += "|" + h + "\\b";
                gt = new RegExp(gt + ")", "gi"), n.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = vt(t[0], e), t[1] = vt(t[1], e)), gt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = n.colorStringFilter);
                var _t = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var a, r = e ? (t.match(gt) || [""])[0] : "",
                            n = t.split(r).join("").match(b) || [],
                            o = t.substr(0, t.indexOf(n[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            d = n.length,
                            p = d > 0 ? n[0].replace(_, "") : "";
                        return d ? a = e ? function(t) {
                            var e, u, c, f;
                            if ("number" == typeof t) t += p;
                            else if (s && I.test(t)) {
                                for (f = t.replace(I, "|").split("|"), c = 0; c < f.length; c++) f[c] = a(f[c]);
                                return f.join(",")
                            }
                            if (e = (t.match(gt) || [r])[0], c = (u = t.split(e).join("").match(b) || []).length, d > c--)
                                for (; ++c < d;) u[c] = i ? u[(c - 1) / 2 | 0] : n[c];
                            return o + u.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, u;
                            if ("number" == typeof t) t += p;
                            else if (s && I.test(t)) {
                                for (r = t.replace(I, "|").split("|"), u = 0; u < r.length; u++) r[u] = a(r[u]);
                                return r.join(",")
                            }
                            if (u = (e = t.match("," === h ? b : w) || []).length, d > u--)
                                for (; ++u < d;) e[u] = i ? e[(u - 1) / 2 | 0] : n[u];
                            return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    yt = function(t) {
                        return t = t.split(","),
                            function(e, i, s, a, r, n, o) {
                                var l, h = (i + "").split(" ");
                                for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return a.parse(e, o, r, n)
                            }
                    },
                    bt = (V._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, a, r, n = this.data, o = n.proxy, l = n.firstMPT; l;) e = o[l.v], l.r ? e = l.r(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (n.autoRotate && (n.autoRotate.rotation = n.mod ? n.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === t || 0 === t)
                            for (l = n.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (a = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) a += i["xn" + s] + i["xs" + (s + 1)];
                                        i[r] = a
                                    }
                                } else i[r] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, s, a) {
                        this.t = t, this.p = e, this.v = i, this.r = a, s && (s._prev = this, this._next = s)
                    }),
                    wt = (V._parseToProxy = function(t, e, i, s, a, r) {
                        var n, o, l, h, d, p = s,
                            u = {},
                            c = {},
                            f = i._transform,
                            m = N;
                        for (i._transform = null, N = e, s = d = i.parse(t, e, s, a), N = m, r && (i._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); s && s !== p;) {
                            if (s.type <= 1 && (c[o = s.p] = s.s + s.c, u[o] = s.s, r || (h = new bt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                                for (n = s.l; --n > 0;) l = "xn" + n, c[o = s.p + "_" + l] = s.data[l], u[o] = s[l], r || (h = new bt(s, l, o, h, s.rxp[l]));
                            s = s._next
                        }
                        return {
                            proxy: u,
                            end: c,
                            firstMPT: h,
                            pt: d
                        }
                    }, V.CSSPropTween = function(t, e, s, a, n, o, l, h, d, p, u) {
                        this.t = t, this.p = e, this.s = s, this.c = a, this.n = l || e, t instanceof wt || r.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = o || 0, d && (this.pr = d, i = !0), this.b = void 0 === p ? s : p, this.e = void 0 === u ? s + a : u, n && (this._next = n, n._prev = this)
                    }),
                    xt = function(t, e, i, s, a, r) {
                        var n = new wt(t, e, i, s - i, a, -1, r);
                        return n.b = i, n.e = n.xs0 = s, n
                    },
                    Tt = n.parseComplex = function(t, e, i, s, a, r, o, l, h, p) {
                        i = i || r || "", "function" == typeof s && (s = s(g, v)), o = new wt(t, e, 0, 0, o, p ? 2 : 1, null, !1, l, i, s), s += "", a && gt.test(s + i) && (s = [i, s], n.colorStringFilter(s), i = s[0], s = s[1]);
                        var u, c, f, m, b, w, x, T, S, C, E, P, M, k = i.split(", ").join(",").split(" "),
                            O = s.split(", ").join(",").split(" "),
                            z = k.length,
                            D = !1 !== d;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl") ? (k = k.join(" ").replace(I, ", ").split(" "), O = O.join(" ").replace(I, ", ").split(" ")) : (k = k.join(" ").split(",").join(", ").split(" "), O = O.join(" ").split(",").join(", ").split(" ")), z = k.length), z !== O.length && (z = (k = (r || "").split(" ")).length), o.plugin = h, o.setRatio = p, gt.lastIndex = 0, u = 0; z > u; u++)
                            if (m = k[u], b = O[u] + "", (T = parseFloat(m)) || 0 === T) o.appendXtra("", T, dt(b, T), b.replace(y, ""), !(!D || -1 === b.indexOf("px")) && Math.round, !0);
                            else if (a && gt.test(m)) P = ")" + ((P = b.indexOf(")") + 1) ? b.substr(P) : ""), M = -1 !== b.indexOf("hsl") && j, C = b, m = mt(m, M), b = mt(b, M), (S = m.length + b.length > 6) && !j && 0 === b[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(O[u]).join("transparent")) : (j || (S = !1), M ? o.appendXtra(C.substr(0, C.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], dt(b[0], m[0]), ",", !1, !0).appendXtra("", m[1], dt(b[1], m[1]), "%,", !1).appendXtra("", m[2], dt(b[2], m[2]), S ? "%," : "%" + P, !1) : o.appendXtra(C.substr(0, C.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], b[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], b[1] - m[1], ",", Math.round).appendXtra("", m[2], b[2] - m[2], S ? "," : P, Math.round), S && (m = m.length < 4 ? 1 : m[3], o.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, P, !1))), gt.lastIndex = 0;
                        else if (w = m.match(_)) {
                            if (!(x = b.match(y)) || x.length !== w.length) return o;
                            for (f = 0, c = 0; c < w.length; c++) E = w[c], C = m.indexOf(E, f), o.appendXtra(m.substr(f, C - f), Number(E), dt(x[c], E), "", !(!D || "px" !== m.substr(C + E.length, 2)) && Math.round, 0 === c), f = C + E.length;
                            o["xs" + o.l] += m.substr(f)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + b : b;
                        if (-1 !== s.indexOf("=") && o.data) {
                            for (P = o.xs0 + o.data.s, u = 1; u < o.l; u++) P += o["xs" + u] + o.data["xn" + u];
                            o.e = P + o["xs" + u]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    St = 9;
                for ((h = wt.prototype).l = h.pr = 0; --St > 0;) h["xn" + St] = 0, h["xs" + St] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, a, r) {
                    var n = this,
                        o = n.l;
                    return n["xs" + o] += r && (o || n["xs" + o]) ? " " + t : t || "", i || 0 === o || n.plugin ? (n.l++, n.type = n.setRatio ? 2 : 1, n["xs" + n.l] = s || "", o > 0 ? (n.data["xn" + o] = e + i, n.rxp["xn" + o] = a, n["xn" + o] = e, n.plugin || (n.xfirst = new wt(n, "xn" + o, e, i, n.xfirst || n, 0, n.n, a, n.pr), n.xfirst.xs0 = 0), n) : (n.data = {
                        s: e + i
                    }, n.rxp = {}, n.s = e, n.c = i, n.r = a, n)) : (n["xs" + o] += e + (s || ""), n)
                };
                var Ct = function(t, e) {
                        e = e || {}, this.p = e.prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
                    },
                    Et = V._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, a = t.split(","),
                            r = e.defaultValue;
                        for (i = i || [r], s = 0; s < a.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || r, new Ct(a[s], e)
                    },
                    Pt = V._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Et(t, {
                                parser: function(t, i, s, a, r, n, h) {
                                    var d = o.com.greensock.plugins[e];
                                    return d ? (d._cssRegister(), l[s].parse(t, i, s, a, r, n, h)) : (U("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                (h = Ct.prototype).parseComplex = function(t, e, i, s, a, r) {
                    var n, o, l, h, d, p, u = this.keyword;
                    if (this.multi && (I.test(i) || I.test(e) ? (o = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : u && (o = [e], l = [i])), l) {
                        for (h = l.length > o.length ? l.length : o.length, n = 0; h > n; n++) e = o[n] = o[n] || this.dflt, i = l[n] = l[n] || this.dflt, u && ((d = e.indexOf(u)) !== (p = i.indexOf(u)) && (-1 === p ? o[n] = o[n].split(u).join("") : -1 === d && (o[n] += " " + u)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return Tt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, a, r)
                }, h.parse = function(t, e, i, s, r, n, o) {
                    return this.parseComplex(t.style, this.format(et(t, this.p, a, !1, this.dflt)), this.format(e), r, n)
                }, n.registerSpecialProp = function(t, e, i) {
                    Et(t, {
                        parser: function(t, s, a, r, n, o, l) {
                            var h = new wt(t, a, 0, 0, n, 2, a, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, r._tween, a), h
                        },
                        priority: i
                    })
                }, n.useSVGTransformAttr = !0;
                var Mt, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ot = Q("transform"),
                    zt = Z + "transform",
                    Dt = Q("transformOrigin"),
                    At = null !== Q("perspective"),
                    Lt = V.Transform = function() {
                        this.perspective = parseFloat(n.defaultTransformPerspective) || 0, this.force3D = !(!1 === n.defaultForce3D || !At) && (n.defaultForce3D || "auto")
                    },
                    It = _gsScope.SVGElement,
                    Rt = function(t, e, i) {
                        var s, a = X.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (s in i) a.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(a), a
                    },
                    $t = X.documentElement || {},
                    Ft = function() {
                        var t, e, i, s = m || /Android/i.test(W) && !_gsScope.chrome;
                        return X.createElementNS && $t.appendChild && !s && (t = Rt("svg", $t), i = (e = Rt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        })).getBoundingClientRect().width, e.style[Dt] = "50% 50%", e.style[Ot] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && At), $t.removeChild(t)), s
                    }(),
                    Nt = function(t, e, i, s, a, r) {
                        var o, l, h, d, p, u, c, f, m, v, g, _, y, b, w = t._gsTransform,
                            x = Gt(t, !0);
                        w && (y = w.xOrigin, b = w.yOrigin), (!s || (o = s.split(" ")).length < 2) && (0 === (c = t.getBBox()).x && 0 === c.y && c.width + c.height === 0 && (c = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), o = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = d = parseFloat(o[0]), i.yOrigin = p = parseFloat(o[1]), s && x !== Yt && (u = x[0], c = x[1], f = x[2], m = x[3], v = x[4], g = x[5], (_ = u * m - c * f) && (l = d * (m / _) + p * (-f / _) + (f * g - m * v) / _, h = d * (-c / _) + p * (u / _) - (u * g - c * v) / _, d = i.xOrigin = o[0] = l, p = i.yOrigin = o[1] = h)), w && (r && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), a || !1 !== a && !1 !== n.defaultSmoothOrigin ? (l = d - y, h = p - b, w.xOffset += l * x[0] + h * x[2] - l, w.yOffset += l * x[1] + h * x[3] - h) : w.xOffset = w.yOffset = 0), r || t.setAttribute("data-svg-origin", o.join(" "))
                    },
                    Bt = function(t) {
                        var e, i = Y("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            s = this.parentNode,
                            a = this.nextSibling,
                            r = this.style.cssText;
                        if ($t.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Bt
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return a ? s.insertBefore(this, a) : s.appendChild(this), $t.removeChild(i), this.style.cssText = r, e
                    },
                    Xt = function(t) {
                        return !(!It || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return Bt.call(t, !0)
                            }
                        }(t))
                    },
                    Yt = [1, 0, 0, 1, 0, 0],
                    Gt = function(t, e) {
                        var i, s, a, r, n, o, l, h = t._gsTransform || new Lt,
                            d = t.style;
                        if (Ot ? s = et(t, zt, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(A)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, Ot && i && !t.offsetParent && t !== $t && (r = d.display, d.display = "block", (l = t.parentNode) && t.offsetParent || (n = 1, o = t.nextSibling, $t.appendChild(t)), i = !(s = et(t, zt, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? d.display = r : qt(d, "display"), n && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : $t.removeChild(t))), (h.svg || t.getCTM && Xt(t)) && (i && -1 !== (d[Ot] + "").indexOf("matrix") && (s = d[Ot], i = 0), a = t.getAttribute("transform"), i && a && (s = "matrix(" + (a = t.transform.baseVal.consolidate().matrix).a + "," + a.b + "," + a.c + "," + a.d + "," + a.e + "," + a.f + ")", i = 0)), i) return Yt;
                        for (a = (s || "").match(_) || [], St = a.length; --St > -1;) r = Number(a[St]), a[St] = (n = r - (r |= 0)) ? (1e5 * n + (0 > n ? -.5 : .5) | 0) / 1e5 + r : r;
                        return e && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a
                    },
                    Ht = V.getTransform = function(t, i, s, a) {
                        if (t._gsTransform && s && !a) return t._gsTransform;
                        var r, o, l, h, d, p, u = s && t._gsTransform || new Lt,
                            c = u.scaleX < 0,
                            f = 2e-5,
                            m = 1e5,
                            v = At && (parseFloat(et(t, Dt, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                            g = parseFloat(n.defaultTransformPerspective) || 0;
                        if (u.svg = !(!t.getCTM || !Xt(t)), u.svg && (Nt(t, et(t, Dt, i, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Mt = n.useSVGTransformAttr || Ft), (r = Gt(t)) !== Yt) {
                            if (16 === r.length) {
                                var _, y, b, w, x, T = r[0],
                                    S = r[1],
                                    C = r[2],
                                    E = r[3],
                                    P = r[4],
                                    M = r[5],
                                    k = r[6],
                                    O = r[7],
                                    z = r[8],
                                    D = r[9],
                                    A = r[10],
                                    L = r[12],
                                    I = r[13],
                                    R = r[14],
                                    $ = r[11],
                                    N = Math.atan2(k, A);
                                u.zOrigin && (L = z * (R = -u.zOrigin) - r[12], I = D * R - r[13], R = A * R + u.zOrigin - r[14]), u.rotationX = N * F, N && (_ = P * (w = Math.cos(-N)) + z * (x = Math.sin(-N)), y = M * w + D * x, b = k * w + A * x, z = P * -x + z * w, D = M * -x + D * w, A = k * -x + A * w, $ = O * -x + $ * w, P = _, M = y, k = b), N = Math.atan2(-C, A), u.rotationY = N * F, N && (y = S * (w = Math.cos(-N)) - D * (x = Math.sin(-N)), b = C * w - A * x, D = S * x + D * w, A = C * x + A * w, $ = E * x + $ * w, T = _ = T * w - z * x, S = y, C = b), N = Math.atan2(S, T), u.rotation = N * F, N && (_ = T * (w = Math.cos(N)) + S * (x = Math.sin(N)), y = P * w + M * x, b = z * w + D * x, S = S * w - T * x, M = M * w - P * x, D = D * w - z * x, T = _, P = y, z = b), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), N = Math.atan2(P, M), u.scaleX = (Math.sqrt(T * T + S * S + C * C) * m + .5 | 0) / m, u.scaleY = (Math.sqrt(M * M + k * k) * m + .5 | 0) / m, u.scaleZ = (Math.sqrt(z * z + D * D + A * A) * m + .5 | 0) / m, T /= u.scaleX, P /= u.scaleY, S /= u.scaleX, M /= u.scaleY, Math.abs(N) > f ? (u.skewX = N * F, P = 0, "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(N))) : u.skewX = 0, u.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, u.x = L, u.y = I, u.z = R, u.svg && (u.x -= u.xOrigin - (u.xOrigin * T - u.yOrigin * P), u.y -= u.yOrigin - (u.yOrigin * S - u.xOrigin * M))
                            } else if (!At || a || !r.length || u.x !== r[4] || u.y !== r[5] || !u.rotationX && !u.rotationY) {
                                var B = r.length >= 6,
                                    X = B ? r[0] : 1,
                                    Y = r[1] || 0,
                                    G = r[2] || 0,
                                    H = B ? r[3] : 1;
                                u.x = r[4] || 0, u.y = r[5] || 0, l = Math.sqrt(X * X + Y * Y), h = Math.sqrt(H * H + G * G), d = X || Y ? Math.atan2(Y, X) * F : u.rotation || 0, p = G || H ? Math.atan2(G, H) * F + d : u.skewX || 0, u.scaleX = l, u.scaleY = h, u.rotation = d, u.skewX = p, At && (u.rotationX = u.rotationY = u.z = 0, u.perspective = g, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * X + u.yOrigin * G), u.y -= u.yOrigin - (u.xOrigin * Y + u.yOrigin * H))
                            }
                            for (o in Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (c ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180)), u.zOrigin = v, u) u[o] < f && u[o] > -f && (u[o] = 0)
                        }
                        return s && (t._gsTransform = u, u.svg && (Mt && t.style[Ot] ? e.delayedCall(.001, function() {
                            qt(t.style, Ot)
                        }) : !Mt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), u
                    },
                    Vt = function(t) {
                        var e, i, s = this.data,
                            a = -s.rotation * $,
                            r = a + s.skewX * $,
                            n = 1e5,
                            o = (Math.cos(a) * s.scaleX * n | 0) / n,
                            l = (Math.sin(a) * s.scaleX * n | 0) / n,
                            h = (Math.sin(r) * -s.scaleY * n | 0) / n,
                            d = (Math.cos(r) * s.scaleY * n | 0) / n,
                            p = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = l, l = -h, h = -i, e = u.filter, p.filter = "";
                            var c, f, v = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                _ = "absolute" !== u.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + d,
                                b = s.x + v * s.xPercent / 100,
                                w = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (b += (c = (s.oxp ? v * s.ox * .01 : s.ox) - v / 2) - (c * o + (f = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2) * l), w += f - (c * h + f * d)), _ ? y += ", Dx=" + ((c = v / 2) - (c * o + (f = g / 2) * l) + b) + ", Dy=" + (f - (c * h + f * d) + w) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? p.filter = e.replace(L, y) : p.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === d && (_ && -1 === y.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !_) {
                                var x, C, E, P = 8 > m ? 1 : -1;
                                for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((v - ((0 > o ? -o : o) * v + (0 > l ? -l : l) * g)) / 2 + b), s.ieOffsetY = Math.round((g - ((0 > d ? -d : d) * g + (0 > h ? -h : h) * v)) / 2 + w), St = 0; 4 > St; St++) E = (i = -1 !== (x = u[C = ot[St]]).indexOf("px") ? parseFloat(x) : it(this.t, C, parseFloat(x), x.replace(T, "")) || 0) !== s[C] ? 2 > St ? -s.ieOffsetX : -s.ieOffsetY : 2 > St ? c - s.ieOffsetX : f - s.ieOffsetY, p[C] = (s[C] = Math.round(i - E * (0 === St || 2 === St ? 1 : P))) + "px"
                            }
                        }
                    },
                    Wt = V.set3DTransformRatio = V.setTransformRatio = function(t) {
                        var e, i, s, a, r, n, o, l, h, d, p, u, f, m, v, g, _, y, b, w, x, T, S, C = this.data,
                            E = this.t.style,
                            P = C.rotation,
                            M = C.rotationX,
                            k = C.rotationY,
                            O = C.scaleX,
                            z = C.scaleY,
                            D = C.scaleZ,
                            A = C.x,
                            L = C.y,
                            I = C.z,
                            R = C.svg,
                            F = C.perspective,
                            N = C.force3D,
                            B = C.skewY,
                            X = C.skewX;
                        if (B && (X += B, P += B), !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || I || F || k || M || 1 !== D) || Mt && R || !At) P || X || R ? (P *= $, T = X * $, S = 1e5, i = Math.cos(P) * O, r = Math.sin(P) * O, s = Math.sin(P - T) * -z, n = Math.cos(P - T) * z, T && "simple" === C.skewType && (e = Math.tan(T - B * $), s *= e = Math.sqrt(1 + e * e), n *= e, B && (e = Math.tan(B * $), i *= e = Math.sqrt(1 + e * e), r *= e)), R && (A += C.xOrigin - (C.xOrigin * i + C.yOrigin * s) + C.xOffset, L += C.yOrigin - (C.xOrigin * r + C.yOrigin * n) + C.yOffset, Mt && (C.xPercent || C.yPercent) && (v = this.t.getBBox(), A += .01 * C.xPercent * v.width, L += .01 * C.yPercent * v.height), (v = 1e-6) > A && A > -v && (A = 0), v > L && L > -v && (L = 0)), b = (i * S | 0) / S + "," + (r * S | 0) / S + "," + (s * S | 0) / S + "," + (n * S | 0) / S + "," + A + "," + L + ")", R && Mt ? this.t.setAttribute("transform", "matrix(" + b) : E[Ot] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b) : E[Ot] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + z + "," + A + "," + L + ")";
                        else {
                            if (c && ((v = 1e-4) > O && O > -v && (O = D = 2e-5), v > z && z > -v && (z = D = 2e-5), !F || C.z || C.rotationX || C.rotationY || (F = 0)), P || X) P *= $, g = i = Math.cos(P), _ = r = Math.sin(P), X && (P -= X * $, g = Math.cos(P), _ = Math.sin(P), "simple" === C.skewType && (e = Math.tan((X - B) * $), g *= e = Math.sqrt(1 + e * e), _ *= e, C.skewY && (e = Math.tan(B * $), i *= e = Math.sqrt(1 + e * e), r *= e))), s = -_, n = g;
                            else {
                                if (!(k || M || 1 !== D || F || R)) return void(E[Ot] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + A + "px," + L + "px," + I + "px)" + (1 !== O || 1 !== z ? " scale(" + O + "," + z + ")" : ""));
                                i = n = 1, s = r = 0
                            }
                            d = 1, a = o = l = h = p = u = 0, f = F ? -1 / F : 0, m = C.zOrigin, v = 1e-6, w = ",", x = "0", (P = k * $) && (g = Math.cos(P), l = -(_ = Math.sin(P)), p = f * -_, a = i * _, o = r * _, d = g, f *= g, i *= g, r *= g), (P = M * $) && (e = s * (g = Math.cos(P)) + a * (_ = Math.sin(P)), y = n * g + o * _, h = d * _, u = f * _, a = s * -_ + a * g, o = n * -_ + o * g, d *= g, f *= g, s = e, n = y), 1 !== D && (a *= D, o *= D, d *= D, f *= D), 1 !== z && (s *= z, n *= z, h *= z, u *= z), 1 !== O && (i *= O, r *= O, l *= O, p *= O), (m || R) && (m && (A += a * -m, L += o * -m, I += d * -m + m), R && (A += C.xOrigin - (C.xOrigin * i + C.yOrigin * s) + C.xOffset, L += C.yOrigin - (C.xOrigin * r + C.yOrigin * n) + C.yOffset), v > A && A > -v && (A = x), v > L && L > -v && (L = x), v > I && I > -v && (I = 0)), b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", b += (v > i && i > -v ? x : i) + w + (v > r && r > -v ? x : r) + w + (v > l && l > -v ? x : l), b += w + (v > p && p > -v ? x : p) + w + (v > s && s > -v ? x : s) + w + (v > n && n > -v ? x : n), M || k || 1 !== D ? (b += w + (v > h && h > -v ? x : h) + w + (v > u && u > -v ? x : u) + w + (v > a && a > -v ? x : a), b += w + (v > o && o > -v ? x : o) + w + (v > d && d > -v ? x : d) + w + (v > f && f > -v ? x : f) + w) : b += ",0,0,0,0,1,0,", b += A + w + L + w + I + w + (F ? 1 + -I / F : 1) + ")", E[Ot] = b
                        }
                    };
                (h = Lt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Et("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, r, o, l) {
                        if (s._lastParsedTransform === l) return r;
                        s._lastParsedTransform = l;
                        var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        h && (l.scale = h(g, t));
                        var d, p, u, c, f, m, _, y, b, w = t._gsTransform,
                            x = t.style,
                            T = kt.length,
                            S = l,
                            C = {},
                            E = "transformOrigin",
                            P = Ht(t, a, !0, S.parseTransform),
                            M = S.transform && ("function" == typeof S.transform ? S.transform(g, v) : S.transform);
                        if (P.skewType = S.skewType || P.skewType || n.defaultSkewType, s._transform = P, "rotationZ" in S && (S.rotation = S.rotationZ), M && "string" == typeof M && Ot)(p = G.style)[Ot] = M, p.display = "block", p.position = "absolute", -1 !== M.indexOf("%") && (p.width = et(t, "width"), p.height = et(t, "height")), X.body.appendChild(G), d = Ht(G, null, !1), "simple" === P.skewType && (d.scaleY *= Math.cos(d.skewX * $)), P.svg && (m = P.xOrigin, _ = P.yOrigin, d.x -= P.xOffset, d.y -= P.yOffset, (S.transformOrigin || S.svgOrigin) && (M = {}, Nt(t, ht(S.transformOrigin), M, S.svgOrigin, S.smoothOrigin, !0), m = M.xOrigin, _ = M.yOrigin, d.x -= M.xOffset - P.xOffset, d.y -= M.yOffset - P.yOffset), (m || _) && (y = Gt(G, !0), d.x -= m - (m * y[0] + _ * y[2]), d.y -= _ - (m * y[1] + _ * y[3]))), X.body.removeChild(G), d.perspective || (d.perspective = P.perspective), null != S.xPercent && (d.xPercent = pt(S.xPercent, P.xPercent)), null != S.yPercent && (d.yPercent = pt(S.yPercent, P.yPercent));
                        else if ("object" == typeof S) {
                            if (d = {
                                    scaleX: pt(null != S.scaleX ? S.scaleX : S.scale, P.scaleX),
                                    scaleY: pt(null != S.scaleY ? S.scaleY : S.scale, P.scaleY),
                                    scaleZ: pt(S.scaleZ, P.scaleZ),
                                    x: pt(S.x, P.x),
                                    y: pt(S.y, P.y),
                                    z: pt(S.z, P.z),
                                    xPercent: pt(S.xPercent, P.xPercent),
                                    yPercent: pt(S.yPercent, P.yPercent),
                                    perspective: pt(S.transformPerspective, P.perspective)
                                }, null != (f = S.directionalRotation))
                                if ("object" == typeof f)
                                    for (p in f) S[p] = f[p];
                                else S.rotation = f;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && (d.x = 0, d.xPercent = pt(S.x, P.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (d.y = 0, d.yPercent = pt(S.y, P.yPercent)), d.rotation = ut("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : P.rotation, P.rotation, "rotation", C), At && (d.rotationX = ut("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", C), d.rotationY = ut("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", C)), d.skewX = ut(S.skewX, P.skewX), d.skewY = ut(S.skewY, P.skewY)
                        }
                        for (At && null != S.force3D && (P.force3D = S.force3D, c = !0), (u = P.force3D || P.z || P.rotationX || P.rotationY || d.z || d.rotationX || d.rotationY || d.perspective) || null == S.scale || (d.scaleZ = 1); --T > -1;)((M = d[b = kt[T]] - P[b]) > 1e-6 || -1e-6 > M || null != S[b] || null != N[b]) && (c = !0, r = new wt(P, b, P[b], M, r), b in C && (r.e = C[b]), r.xs0 = 0, r.plugin = o, s._overwriteProps.push(r.n));
                        return M = "function" == typeof S.transformOrigin ? S.transformOrigin(g, v) : S.transformOrigin, P.svg && (M || S.svgOrigin) && (m = P.xOffset, _ = P.yOffset, Nt(t, ht(M), d, S.svgOrigin, S.smoothOrigin), r = xt(P, "xOrigin", (w ? P : d).xOrigin, d.xOrigin, r, E), r = xt(P, "yOrigin", (w ? P : d).yOrigin, d.yOrigin, r, E), (m !== P.xOffset || _ !== P.yOffset) && (r = xt(P, "xOffset", w ? m : P.xOffset, P.xOffset, r, E), r = xt(P, "yOffset", w ? _ : P.yOffset, P.yOffset, r, E)), M = "0px 0px"), (M || At && u && P.zOrigin) && (Ot ? (c = !0, b = Dt, M || (M = (M = (et(t, b, a, !1, "50% 50%") + "").split(" "))[0] + " " + M[1] + " " + P.zOrigin + "px"), M += "", (r = new wt(x, b, 0, 0, r, -1, E)).b = x[b], r.plugin = o, At ? (p = P.zOrigin, M = M.split(" "), P.zOrigin = (M.length > 2 ? parseFloat(M[2]) : p) || 0, r.xs0 = r.e = M[0] + " " + (M[1] || "50%") + " 0px", (r = new wt(P, "zOrigin", 0, 0, r, -1, r.n)).b = p, r.xs0 = r.e = P.zOrigin) : r.xs0 = r.e = M) : ht(M + "", P)), c && (s._transformType = P.svg && Mt || !u && 3 !== this._transformType ? 2 : 3), h && (l.scale = h), r
                    },
                    allowFunc: !0,
                    prefix: !0
                }), Et("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Et("clipPath", {
                    defaultValue: "inset(0%)",
                    prefix: !0,
                    multi: !0,
                    formatter: _t("inset(0% 0% 0% 0%)", !1, !0)
                }), Et("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, n, o) {
                        e = this.format(e);
                        var l, h, d, p, u, c, f, m, v, g, _, y, b, w, x, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Q(S[h])), -1 !== (u = p = et(t, S[h], a, !1, "0px")).indexOf(" ") && (p = u.split(" "), u = p[0], p = p[1]), c = d = l[h], f = parseFloat(u), y = u.substr((f + "").length), (b = "=" === c.charAt(1)) ? (m = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), m *= parseFloat(c), _ = c.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(c), _ = c.substr((m + "").length)), "" === _ && (_ = s[i] || y), _ !== y && (w = it(t, "borderLeft", f, y), x = it(t, "borderTop", f, y), "%" === _ ? (u = w / v * 100 + "%", p = x / g * 100 + "%") : "em" === _ ? (u = w / (T = it(t, "borderLeft", 1, "em")) + "em", p = x / T + "em") : (u = w + "px", p = x + "px"), b && (c = parseFloat(u) + m + _, d = parseFloat(p) + m + _)), n = Tt(C, S[h], u + " " + p, c + " " + d, !1, "0px", n);
                        return n
                    },
                    prefix: !0,
                    formatter: _t("0px 0px 0px 0px", !1, !0)
                }), Et("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, r, n) {
                        return Tt(t.style, i, this.format(et(t, i, a, !1, "0px 0px")), this.format(e), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: _t("0px 0px", !1, !0)
                }), Et("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, r, n) {
                        var o, l, h, d, p, u, c = "background-position",
                            f = a || tt(t),
                            v = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== v.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((u = et(t, "backgroundImage").replace(O, "")) && "none" !== u)) {
                            for (o = v.split(" "), l = g.split(" "), H.setAttribute("src", u), h = 2; --h > -1;)(d = -1 !== (v = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (p = 0 === h ? t.offsetWidth - H.width : t.offsetHeight - H.height, o[h] = d ? parseFloat(v) / 100 * p + "px" : parseFloat(v) / p * 100 + "%");
                            v = o.join(" ")
                        }
                        return this.parseComplex(t.style, v, g, r, n)
                    },
                    formatter: ht
                }), Et("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return "co" === (t += "").substr(0, 2) ? t : ht(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), Et("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Et("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Et("transformStyle", {
                    prefix: !0
                }), Et("backfaceVisibility", {
                    prefix: !0
                }), Et("userSelect", {
                    prefix: !0
                }), Et("margin", {
                    parser: yt("marginTop,marginRight,marginBottom,marginLeft")
                }), Et("padding", {
                    parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Et("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, r, n) {
                        var o, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(et(t, this.p, a, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, n)
                    }
                }), Et("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Et("autoRound,strictUnits", {
                    parser: function(t, e, i, s, a) {
                        return a
                    }
                }), Et("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, r, n) {
                        var o = et(t, "borderTopWidth", a, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(T, "");
                        return "px" !== h && (o = parseFloat(o) / it(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", a, !1, "solid") + " " + et(t, "borderTopColor", a, !1, "#000")), l.join(" "), r, n)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
                    }
                }), Et("borderWidth", {
                    parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Et("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, a, r) {
                        var n = t.style,
                            o = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new wt(n, o, 0, 0, a, -1, i, !1, 0, n[o], e)
                    }
                });
                var jt = function(t) {
                    var e, i = this.t,
                        s = i.filter || et(this.data, "filter") || "",
                        a = this.s + this.c * t | 0;
                    100 === a && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = s.replace(E, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + a + ")"), -1 === s.indexOf("pacity") ? 0 === a && this.xn1 || (i.filter = s + " alpha(opacity=" + a + ")") : i.filter = s.replace(S, "opacity=" + a))
                };
                Et("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, r, n) {
                        var o = parseFloat(et(t, "opacity", a, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === et(t, "visibility", a) && 0 !== e && (o = 0), j ? r = new wt(l, "opacity", o, e - o, r) : ((r = new wt(l, "opacity", 100 * o, 100 * (e - o), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = n, r.setRatio = jt), h && ((r = new wt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                    }
                });
                var qt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(M, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ut = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Et("className", {
                    parser: function(t, e, s, r, n, o, l) {
                        var h, d, p, u, c, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if ((n = r._classNamePT = new wt(t, s, 0, 0, n, 2)).setRatio = Ut, n.pr = -11, i = !0, n.b = f, d = at(t, a), p = t._gsClassPT) {
                            for (u = {}, c = p.data; c;) u[c.p] = 1, c = c._next;
                            p.setRatio(1)
                        }
                        return t._gsClassPT = n, n.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", n.e), h = rt(t, d, at(t), l, u), t.setAttribute("class", f), n.data = h.firstMPT, t.style.cssText !== m && (t.style.cssText = m), n.xfirst = r.parse(t, h.difs, n, o)
                    }
                });
                var Zt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, a, r, n = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) n.cssText = "", a = !0;
                        else
                            for (s = (e = this.e.split(" ").join("").split(",")).length; --s > -1;) i = e[s], l[i] && (l[i].parse === o ? a = !0 : i = "transformOrigin" === i ? Dt : l[i].p), qt(n, i);
                        a && (qt(n, Ot), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Et("clearProps", {
                        parser: function(t, e, s, a, r) {
                            return (r = new wt(t, s, 0, 0, r, 2)).setRatio = Zt, r.e = e, r.pr = -10, r.data = a._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), St = h.length; St--;) Pt(h[St]);
                (h = n.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o, h) {
                    if (!t.nodeType) return !1;
                    this._target = v = t, this._tween = o, this._vars = e, g = h, d = e.autoRound, i = !1, s = e.suffixMap || n.suffixMap, a = tt(t), r = this._overwriteProps;
                    var c, m, _, y, b, w, x, T, S, E = t.style;
                    if (p && "" === E.zIndex && (("auto" === (c = et(t, "zIndex", a)) || "" === c) && this._addLazySet(E, "zIndex", 0)), "string" == typeof e && (y = E.cssText, c = at(t, a), E.cssText = y + ";" + e, c = rt(t, c, at(t)).difs, !j && C.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, E.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                        for (S = 3 === this._transformType, Ot ? u && (p = !0, "" === E.zIndex && (("auto" === (x = et(t, "zIndex", a)) || "" === x) && this._addLazySet(E, "zIndex", 0)), f && this._addLazySet(E, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : E.zoom = 1, _ = m; _ && _._next;) _ = _._next;
                        T = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, _), T.setRatio = Ot ? Wt : Vt, T.data = this._transform || Ht(t, a, !0), T.tween = o, T.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (w = m._next, _ = y; _ && _.pr > m.pr;) _ = _._next;
                            (m._prev = _ ? _._prev : b) ? m._prev._next = m: y = m, (m._next = _) ? _._prev = m : b = m, m = w
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var n, o, h, p, u, c, f, m, _, y, b = t.style;
                    for (n in e) {
                        if (c = e[n], o = l[n], "function" != typeof c || o && o.allowFunc || (c = c(g, v)), o) i = o.parse(t, c, n, this, i, r, e);
                        else {
                            if ("--" === n.substr(0, 2)) {
                                this._tween._propLookup[n] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(n) + "", c + "", n, !1, n);
                                continue
                            }
                            u = et(t, n, a) + "", _ = "string" == typeof c, "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || _ && P.test(c) ? (_ || (c = ((c = mt(c)).length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = Tt(b, n, u, c, !0, "transparent", i, 0, r)) : _ && R.test(c) ? i = Tt(b, n, u, c, !0, null, i, 0, r) : (f = (h = parseFloat(u)) || 0 === h ? u.substr((h + "").length) : "", ("" === u || "auto" === u) && ("width" === n || "height" === n ? (h = lt(t, n, a), f = "px") : "left" === n || "top" === n ? (h = st(t, n, a), f = "px") : (h = "opacity" !== n ? 0 : 1, f = "")), (y = _ && "=" === c.charAt(1)) ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), m = c.replace(T, "")) : (p = parseFloat(c), m = _ ? c.replace(T, "") : ""), "" === m && (m = n in s ? s[n] : f), c = p || 0 === p ? (y ? p + h : p) + m : e[n], f !== m && ("" !== m || "lineHeight" === n) && (p || 0 === p) && h && (h = it(t, n, h, f), "%" === m ? (h /= it(t, n, 100, "%") / 100, !0 !== e.strictUnits && (u = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= it(t, n, 1, m) : "px" !== m && (p = it(t, n, p, m), m = "px"), y && (p || 0 === p) && (c = p + h + m)), y && (p += h), !h && 0 !== h || !p && 0 !== p ? void 0 !== b[n] && (c || c + "" != "NaN" && null != c) ? (i = new wt(b, n, p || h || 0, 0, i, -1, n, !1, 0, u, c)).xs0 = "none" !== c || "display" !== n && -1 === n.indexOf("Style") ? c : u : U("invalid " + n + " tween value: " + e[n]) : (i = new wt(b, n, h, p - h, i, 0, n, !1 !== d && ("px" === m || "zIndex" === n), 0, u, c)).xs0 = m)
                        }
                        r && i && !i.plugin && (i.plugin = r)
                    }
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, a = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; a;) {
                                if (e = a.c * t + a.s, a.r ? e = a.r(e) : 1e-6 > e && e > -1e-6 && (e = 0), a.type)
                                    if (1 === a.type)
                                        if (2 === (s = a.l)) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2;
                                        else if (3 === s) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3;
                                else if (4 === s) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4;
                                else if (5 === s) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4 + a.xn4 + a.xs5;
                                else {
                                    for (i = a.xs0 + e + a.xs1, s = 1; s < a.l; s++) i += a["xn" + s] + a["xs" + (s + 1)];
                                    a.t[a.p] = i
                                } else -1 === a.type ? a.t[a.p] = a.xs0 : a.setRatio && a.setRatio(t);
                                else a.t[a.p] = e + a.xs0;
                                a = a._next
                            } else
                                for (; a;) 2 !== a.type ? a.t[a.p] = a.b : a.setRatio(t), a = a._next;
                        else
                            for (; a;) {
                                if (2 !== a.type)
                                    if (a.r && -1 !== a.type)
                                        if (e = a.r(a.s + a.c), a.type) {
                                            if (1 === a.type) {
                                                for (s = a.l, i = a.xs0 + e + a.xs1, s = 1; s < a.l; s++) i += a["xn" + s] + a["xs" + (s + 1)];
                                                a.t[a.p] = i
                                            }
                                        } else a.t[a.p] = e + a.xs0;
                                else a.t[a.p] = a.e;
                                else a.setRatio(t);
                                a = a._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Ht(this._target, a, !0), this._transformType = this._transform.svg && Mt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Kt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Kt, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
                }, h._kill = function(e) {
                    var i, s, a, r = e;
                    if (e.autoAlpha || e.alpha) {
                        for (s in r = {}, e) r[s] = e[s];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((a = i.xfirst) && a._prev ? this._linkCSSP(a._prev, i._next, a._prev._prev) : a === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, a._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, r)
                };
                var Qt = function(t, e, i) {
                    var s, a, r, n;
                    if (t.slice)
                        for (a = t.length; --a > -1;) Qt(t[a], e, i);
                    else
                        for (a = (s = t.childNodes).length; --a > -1;) n = (r = s[a]).type, r.style && (e.push(at(r)), i && i.push(r)), 1 !== n && 9 !== n && 11 !== n || !r.childNodes.length || Qt(r, e, i)
                };
                return n.cascadeTo = function(t, i, s) {
                    var a, r, n, o, l = e.to(t, i, s),
                        h = [l],
                        d = [],
                        p = [],
                        u = [],
                        c = e._internals.reservedProps;
                    for (t = l._targets || l.target, Qt(t, d, u), l.render(i, !0, !0), Qt(t, p), l.render(0, !0, !0), l._enabled(!0), a = u.length; --a > -1;)
                        if ((r = rt(u[a], d[a], p[a])).firstMPT) {
                            for (n in r = r.difs, s) c[n] && (r[n] = s[n]);
                            for (n in o = {}, r) o[n] = d[a][n];
                            h.push(e.fromTo(u[a], i, o, r))
                        }
                    return h
                }, t.activate([n]), n
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        var e = 1 > t ? Math.pow(10, (t + "").length - 2) : 1;
                        return function(i) {
                            return (Math.round(i / t) * t * e | 0) / e
                        }
                    },
                    i = function(t, e) {
                        for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
                    },
                    s = t.prototype;
                s._onInitAllProps = function() {
                    var t, s, a, r, n = this._tween,
                        o = n.vars.roundProps,
                        l = {},
                        h = n._propLookup.roundProps;
                    if ("object" != typeof o || o.push)
                        for ("string" == typeof o && (o = o.split(",")), a = o.length; --a > -1;) l[o[a]] = Math.round;
                    else
                        for (r in o) l[r] = e(o[r]);
                    for (r in l)
                        for (t = n._firstPT; t;) s = t._next, t.pg ? t.t._mod(l) : t.n === r && (2 === t.f && t.t ? i(t.t._firstPT, l[r]) : (this._add(t.t, r, t.s, t.c, l[r]), s && (s._prev = t._prev), t._prev ? t._prev._next = s : n._firstPT === t && (n._firstPT = s), t._next = t._prev = null, n._propLookup[r] = h)), t = s;
                    return !1
                }, s._add = function(t, e, i, s, a) {
                    this._addTween(t, e, i, i + s, e, a || Math.round), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, s) {
                    var a, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (a in e) "function" == typeof(r = e[a]) && (r = r(s, t)), this._addTween(t, "setAttribute", t.getAttribute(a) + "", r + "", a, !1, a), this._overwriteProps.push(a);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, s) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var a, r, n, o, l, h, d = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (a in e) "useRadians" !== a && ("function" == typeof(o = e[a]) && (o = o(s, t)), r = (h = (o + "").split("_"))[0], n = parseFloat("function" != typeof t[a] ? t[a] : t[a.indexOf("set") || "function" != typeof t["get" + a.substr(3)] ? a : "get" + a.substr(3)]()), l = (o = this.finals[a] = "string" == typeof r && "=" === r.charAt(1) ? n + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - n, h.length && (-1 !== (r = h.join("_")).indexOf("short") && ((l %= d) !== l % (d / 2) && (l = 0 > l ? l + d : l - d)), -1 !== r.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * d) % d - (l / d | 0) * d : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * d) % d - (l / d | 0) * d)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, a, n, n + l, a), this._overwriteProps.push(a)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, a, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    o = 2 * Math.PI,
                    l = Math.PI / 2,
                    h = n._class,
                    d = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            a = s.prototype = new t;
                        return a.constructor = s, a.getRatio = i, s
                    },
                    p = t.register || function() {},
                    u = function(t, e, i, s, a) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return p(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            a = s.prototype = new t;
                        return a.constructor = s, a.getRatio = i, a.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    m = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    v = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = v.prototype = new t;
                return g.constructor = v, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, v.ease = new v(.7, .7), g.config = v.config = function(t, e, i) {
                    return new v(t, e, i)
                }, (g = (e = h("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0)).prototype = new t).constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function(t, i) {
                    return new e(t, i)
                }, (g = (i = h("easing.ExpoScaleEase", function(t, e, i) {
                    this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
                }, !0)).prototype = new t).constructor = i, g.getRatio = function(t) {
                    return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                }, g.config = i.config = function(t, e, s) {
                    return new i(t, e, s)
                }, (g = (s = h("easing.RoughEase", function(e) {
                    for (var i, s, a, r, n, o, l = (e = e || {}).taper || "none", h = [], d = 0, p = 0 | (e.points || 20), u = p, f = !1 !== e.randomize, m = !0 === e.clamp, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --u > -1;) i = f ? Math.random() : 1 / p * u, s = v ? v.getRatio(i) : i, "none" === l ? a = g : "out" === l ? a = (r = 1 - i) * r * g : "in" === l ? a = i * i * g : .5 > i ? a = (r = 2 * i) * r * .5 * g : a = (r = 2 * (1 - i)) * r * .5 * g, f ? s += Math.random() * a - .5 * a : u % 2 ? s += .5 * a : s -= .5 * a, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[d++] = {
                        x: i,
                        y: s
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), u = p; --u > -1;) n = h[u], o = new c(n.x, n.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0)).prototype = new t).constructor = s, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new s(t)
                }, s.ease = new s, u("Bounce", d("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), d("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), d("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", d("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), d("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), d("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), u("Elastic", (a = function(e, i, s) {
                    var a = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        r = a.prototype = new t;
                    return r.constructor = a, r.getRatio = i, r.config = function(t, e) {
                        return new a(t, e)
                    }, a
                })("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), a("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), a("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", d("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), d("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), d("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", d("SineOut", function(t) {
                    return Math.sin(t * l)
                }), d("SineIn", function(t) {
                    return 1 - Math.cos(t * l)
                }), d("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), p(r.SlowMo, "SlowMo", "ease,"), p(s, "RoughEase", "ease,"), p(e, "SteppedEase", "ease,"), m
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            s = t.document,
            a = t.GreenSockGlobals = t.GreenSockGlobals || t,
            r = a[e];
        if (r) return "undefined" != typeof module && module.exports && (module.exports = r), r;
        var n, o, l, h, d, p = function(t) {
                var e, i = t.split("."),
                    s = a;
                for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                return s
            },
            u = p("com.greensock"),
            c = 1e-8,
            f = function(t) {
                var e, i = [],
                    s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            },
            m = function() {},
            v = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            g = {},
            _ = function(s, r, n, o) {
                this.sc = g[s] ? g[s].sc : [], g[s] = this, this.gsClass = null, this.func = n;
                var l = [];
                this.check = function(h) {
                    for (var d, u, c, f, m = r.length, v = m; --m > -1;)(d = g[r[m]] || new _(r[m], [])).gsClass ? (l[m] = d.gsClass, v--) : h && d.sc.push(this);
                    if (0 === v && n) {
                        if (c = (u = ("com.greensock." + s).split(".")).pop(), f = p(u.join("."))[c] = this.gsClass = n.apply(n, l), o)
                            if (a[c] = i[c] = f, "undefined" != typeof module && module.exports)
                                if (s === e)
                                    for (m in module.exports = i[e] = f, i) f[m] = i[m];
                                else i[e] && (i[e][c] = f);
                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                            return f
                        });
                        for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                    }
                }, this.check(!0)
            },
            y = t._gsDefine = function(t, e, i, s) {
                return new _(t, e, i, s)
            },
            b = u._class = function(t, e, i) {
                return e = e || function() {}, y(t, [], function() {
                    return e
                }, i), e
            };
        y.globals = a;
        var w = [0, 0, 1, 1],
            x = b("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? w.concat(e) : w
            }, !0),
            T = x.map = {},
            S = x.register = function(t, e, i, s) {
                for (var a, r, n, o, l = e.split(","), h = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (r = l[h], a = s ? b("easing." + r, null, !0) : u.easing[r] || {}, n = d.length; --n > -1;) o = d[n], T[r + "." + o] = T[o + r] = a[o] = t.getRatio ? t : t[o] || new t
            };
        for ((l = x.prototype)._calcEnd = !1, l.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, o = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) l = n[o] + ",Power" + o, S(new x(null, null, 1, o), l, "easeOut", !0), S(new x(null, null, 2, o), l, "easeIn" + (0 === o ? ",easeNone" : "")), S(new x(null, null, 3, o), l, "easeInOut");
        T.linear = u.easing.Linear.easeIn, T.swing = u.easing.Quad.easeInOut;
        var C = b("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (l = C.prototype).addEventListener = function(t, e, i, s, a) {
            a = a || 0;
            var r, n, o = this._listeners[t],
                l = 0;
            for (this !== h || d || h.wake(), null == o && (this._listeners[t] = o = []), n = o.length; --n > -1;)(r = o[n]).c === e && r.s === i ? o.splice(n, 1) : 0 === l && r.pr < a && (l = n + 1);
            o.splice(l, 0, {
                c: e,
                s: i,
                up: s,
                pr: a
            })
        }, l.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return void s.splice(i, 1)
        }, l.dispatchEvent = function(t) {
            var e, i, s, a = this._listeners[t];
            if (a)
                for ((e = a.length) > 1 && (a = a.slice(0)), i = this._eventTarget; --e > -1;)(s = a[e]) && (s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i))
        };
        var E = t.requestAnimationFrame,
            P = t.cancelAnimationFrame,
            M = Date.now || function() {
                return (new Date).getTime()
            },
            k = M();
        for (o = (n = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !E;) E = t[n[o] + "RequestAnimationFrame"], P = t[n[o] + "CancelAnimationFrame"] || t[n[o] + "CancelRequestAnimationFrame"];
        b("Ticker", function(t, e) {
            var i, a, r, n, o, l = this,
                p = M(),
                u = !(!1 === e || !E) && "auto",
                c = 500,
                f = 33,
                v = function(t) {
                    var e, s, h = M() - k;
                    h > c && (p += h - f), k += h, l.time = (k - p) / 1e3, e = l.time - o, (!i || e > 0 || !0 === t) && (l.frame++, o += e + (e >= n ? .004 : n - e), s = !0), !0 !== t && (r = a(v)), s && l.dispatchEvent("tick")
                };
            C.call(l), l.time = l.frame = 0, l.tick = function() {
                v(!0)
            }, l.lagSmoothing = function(t, e) {
                return arguments.length ? (c = t || 1e8, void(f = Math.min(e, c, 0))) : 1e8 > c
            }, l.sleep = function() {
                null != r && (u && P ? P(r) : clearTimeout(r), a = m, r = null, l === h && (d = !1))
            }, l.wake = function(t) {
                null !== r ? l.sleep() : t ? p += -k + (k = M()) : l.frame > 10 && (k = M() - c + 5), a = 0 === i ? m : u && E ? E : function(t) {
                    return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                }, l === h && (d = !0), v(2)
            }, l.fps = function(t) {
                return arguments.length ? (n = 1 / ((i = t) || 60), o = this.time + n, void l.wake()) : i
            }, l.useRAF = function(t) {
                return arguments.length ? (l.sleep(), u = t, void l.fps(i)) : u
            }, l.fps(t), setTimeout(function() {
                "auto" === u && l.frame < 5 && "hidden" !== (s || {}).visibilityState && l.useRAF(!1)
            }, 1500)
        }), (l = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
        var O = b("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, Z) {
                d || h.wake();
                var i = this.vars.useFrames ? U : Z;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        h = O.ticker = new u.Ticker, (l = O.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
        var z = function() {
            d && M() - k > 2e3 && ("hidden" !== (s || {}).visibilityState || !h.lagSmoothing()) && h.wake();
            var t = setTimeout(z, 2e3);
            t.unref && t.unref()
        };
        z(), l.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, l.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, l.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, l.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, l.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, l.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, l.render = function(t, e, i) {}, l.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, l.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - c
        }, l._enabled = function(t, e) {
            return d || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, l._kill = function(t, e) {
            return this._enabled(!1, !1)
        }, l.kill = function(t, e) {
            return this._kill(t, e), this
        }, l._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, l._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, l._callback = function(t) {
            var e = this.vars,
                i = e[t],
                s = e[t + "Params"],
                a = e[t + "Scope"] || e.callbackScope || this;
            switch (s ? s.length : 0) {
                case 0:
                    i.call(a);
                    break;
                case 1:
                    i.call(a, s[0]);
                    break;
                case 2:
                    i.call(a, s[0], s[1]);
                    break;
                default:
                    i.apply(a, s)
            }
        }, l.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var a = this.vars;
                if (1 === arguments.length) return a[t];
                null == e ? delete a[t] : (a[t] = e, a[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, a[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, l.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, l.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, l.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, l.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, l.totalTime = function(t, e, i) {
            if (d || h.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        a = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                        for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && Q(), this.render(t, e, !1), I.length && Q())
            }
            return this
        }, l.progress = l.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, l.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, l.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, l.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || c, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
        }, l.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, l.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (d || t || h.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var D = b("core.SimpleTimeline", function(t) {
            O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (l = D.prototype = new O).constructor = D, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(t, e, i, s) {
            var a, r;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), a = this._last, this._sortChildren)
                for (r = t._startTime; a && a._startTime > r;) a = a._prev;
            return a ? (t._next = a._next, a._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = a, this._recent = t, this._timeline && this._uncache(!0), this
        }, l._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, l.render = function(t, e, i) {
            var s, a = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; a;) s = a._next, (a._active || t >= a._startTime && !a._paused && !a._gc) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = s
        }, l.rawTime = function() {
            return d || h.wake(), this._totalTime
        };
        var A = b("TweenLite", function(e, i, s) {
                if (O.call(this, i, s), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                var a, r, n, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? q[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (o || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
                    for (this._targets = n = f(e), this._propLookup = [], this._siblings = [], a = 0; a < n.length; a++)(r = n[a]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (n.splice(a--, 1), this._targets = n = n.concat(f(r))) : (this._siblings[a] = J(r, this, !1), 1 === l && this._siblings[a].length > 1 && et(r, this, null, 1, this._siblings[a])) : "string" == typeof(r = n[a--] = A.selector(r)) && n.splice(a + 1, 1) : n.splice(a--, 1);
                else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -c, this.render(Math.min(0, -this._delay)))
            }, !0),
            L = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            };
        (l = A.prototype = new O).constructor = A, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, A.version = "2.1.3", A.defaultEase = l._ease = new x(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = h, A.autoSleep = 120, A.lagSmoothing = function(t, e) {
            h.lagSmoothing(t, e)
        }, A.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (A.selector = i, i(e)) : (s || (s = t.document), s ? s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
        };
        var I = [],
            R = {},
            $ = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            F = /[\+-]=-?[\.\d]/,
            N = function(t) {
                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            B = function(t) {
                return (1e3 * t | 0) / 1e3 + ""
            },
            X = function(t, e, i, s) {
                var a, r, n, o, l, h, d, p = [],
                    u = 0,
                    c = "",
                    f = 0;
                for (p.start = t, p.end = e, t = p[0] = t + "", e = p[1] = e + "", i && (i(p), t = p[0], e = p[1]), p.length = 0, a = t.match($) || [], r = e.match($) || [], s && (s._next = null, s.blob = 1, p._firstPT = p._applyPT = s), l = r.length, o = 0; l > o; o++) d = r[o], c += (h = e.substr(u, e.indexOf(d, u) - u)) || !o ? h : ",", u += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), d === a[o] || a.length <= o ? c += d : (c && (p.push(c), c = ""), n = parseFloat(a[o]), p.push(n), p._firstPT = {
                    _next: p._firstPT,
                    t: p,
                    p: p.length - 1,
                    s: n,
                    c: ("=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - n) || 0,
                    f: 0,
                    m: f && 4 > f ? Math.round : B
                }), u += d.length;
                return (c += e.substr(u)) && p.push(c), p.setRatio = N, F.test(e) && (p.end = null), p
            },
            Y = function(t, e, i, s, a, r, n, o, l) {
                "function" == typeof s && (s = s(l || 0, t));
                var h = typeof t[e],
                    d = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    p = "get" !== i ? i : d ? n ? t[d](n) : t[d]() : t[e],
                    u = "string" == typeof s && "=" === s.charAt(1),
                    c = {
                        t: t,
                        p: e,
                        s: p,
                        f: "function" === h,
                        pg: 0,
                        n: a || e,
                        m: r ? "function" == typeof r ? r : Math.round : 0,
                        pr: 0,
                        c: u ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - p || 0
                    };
                return ("number" != typeof p || "number" != typeof s && !u) && (n || isNaN(p) || !u && isNaN(s) || "boolean" == typeof p || "boolean" == typeof s ? (c.fp = n, c = {
                    t: X(p, u ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : s, o || A.defaultStringFilter, c),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: a || e,
                    pr: 0,
                    m: 0
                }) : (c.s = parseFloat(p), u || (c.c = parseFloat(s) - c.s || 0))), c.c ? ((c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c) : void 0
            },
            G = A._internals = {
                isArray: v,
                isSelector: L,
                lazyTweens: I,
                blobDif: X
            },
            H = A._plugins = {},
            V = G.tweenLookup = {},
            W = 0,
            j = G.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            },
            q = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            U = O._rootFramesTimeline = new D,
            Z = O._rootTimeline = new D,
            K = 30,
            Q = G.lazyRender = function() {
                var t, e, i = I.length;
                for (R = {}, t = 0; i > t; t++)(e = I[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                I.length = 0
            };
        Z._startTime = h.time, U._startTime = h.frame, Z._active = U._active = !0, setTimeout(Q, 1), O._updateRoot = A.render = function() {
            var t, e, i;
            if (I.length && Q(), Z.render((h.time - Z._startTime) * Z._timeScale, !1, !1), U.render((h.frame - U._startTime) * U._timeScale, !1, !1), I.length && Q(), h.frame >= K) {
                for (i in K = h.frame + (parseInt(A.autoSleep, 10) || 120), V) {
                    for (t = (e = V[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete V[i]
                }
                if ((!(i = Z._first) || i._paused) && A.autoSleep && !U._first && 1 === h._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || h.sleep()
                }
            }
        }, h.addEventListener("tick", O._updateRoot);
        var J = function(t, e, i) {
                var s, a, r = t._gsTweenID;
                if (V[r || (t._gsTweenID = r = "t" + W++)] || (V[r] = {
                        target: t,
                        tweens: []
                    }), e && ((s = V[r].tweens)[a = s.length] = e, i))
                    for (; --a > -1;) s[a] === e && s.splice(a, 1);
                return V[r].tweens
            },
            tt = function(t, e, i, s) {
                var a, r, n = t.vars.onOverwrite;
                return n && (a = n(t, e, i, s)), (n = A.onOverwrite) && (r = n(t, e, i, s)), !1 !== a && !1 !== r
            },
            et = function(t, e, i, s, a) {
                var r, n, o, l;
                if (1 === s || s >= 4) {
                    for (l = a.length, r = 0; l > r; r++)
                        if ((o = a[r]) !== e) o._gc || o._kill(null, t, e) && (n = !0);
                        else if (5 === s) break;
                    return n
                }
                var h, d = e._startTime + c,
                    p = [],
                    u = 0,
                    f = 0 === e._duration;
                for (r = a.length; --r > -1;)(o = a[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || it(e, 0, f), 0 === it(o, h, f) && (p[u++] = o)) : o._startTime <= d && o._startTime + o.totalDuration() / o._timeScale > d && ((f || !o._initted) && d - o._startTime <= 2 * c || (p[u++] = o)));
                for (r = u; --r > -1;)
                    if (l = (o = p[r])._firstPT, 2 === s && o._kill(i, t, e) && (n = !0), 2 !== s || !o._firstPT && o._initted && l) {
                        if (2 !== s && !tt(o, e)) continue;
                        o._enabled(!1, !1) && (n = !0)
                    }
                return n
            },
            it = function(t, e, i) {
                for (var s = t._timeline, a = s._timeScale, r = t._startTime; s._timeline;) {
                    if (r += s._startTime, a *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return (r /= a) > e ? r - e : i && r === e || !t._initted && 2 * c > r - e ? c : (r += t.totalDuration() / t._timeScale / a) > e + c ? 0 : r - e - c
            };
        l._init = function() {
            var t, e, i, s, a, r, n = this.vars,
                o = this._overwrittenProps,
                l = this._duration,
                h = !!n.immediateRender,
                d = n.ease,
                p = this._startAt;
            if (n.startAt) {
                for (s in p && (p.render(-1, !0), p.kill()), a = {}, n.startAt) a[s] = n.startAt[s];
                if (a.data = "isStart", a.overwrite = !1, a.immediateRender = !0, a.lazy = h && !1 !== n.lazy, a.startAt = a.delay = null, a.onUpdate = n.onUpdate, a.onUpdateParams = n.onUpdateParams, a.onUpdateScope = n.onUpdateScope || n.callbackScope || this, this._startAt = A.to(this.target || {}, 0, a), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (n.runBackwards && 0 !== l)
                if (p) p.render(-1, !0), p.kill(), this._startAt = null;
                else {
                    for (s in 0 !== this._time && (h = !1), i = {}, n) j[s] && "autoCSS" !== s || (i[s] = n[s]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== n.lazy, i.immediateRender = h, this._startAt = A.to(this.target, 0, i), h) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = d = d ? d instanceof x ? d : "function" == typeof d ? new x(d, n.easeParams) : T[d] || A.defaultEase : A.defaultEase, n.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && A._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = n.onUpdate, this._initted = !0
        }, l._initProps = function(e, i, s, a, r) {
            var n, o, l, h, d, p;
            if (null == e) return !1;
            for (n in R[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && H.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, s = {};
                    for (i in t) j[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                }(this.vars, e), this.vars)
                if (p = this.vars[n], j[n]) p && (p instanceof Array || p.push && v(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[n] = p = this._swapSelfInParams(p, this));
                else if (H[n] && (h = new H[n])._onInitTween(e, this.vars[n], this, r)) {
                for (this._firstPT = d = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: n,
                        pg: 1,
                        pr: h._priority,
                        m: 0
                    }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
            } else i[n] = Y.call(this, e, n, "get", p, n, 0, null, this.vars.stringFilter, r);
            return a && this._kill(a, e) ? this._initProps(e, i, s, a, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && et(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, a, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (R[e._gsTweenID] = !0), l)
        }, l.render = function(t, e, i) {
            var s, a, r, n, o = this,
                l = o._time,
                h = o._duration,
                d = o._rawPrevTime;
            if (t >= h - c && t >= 0) o._totalTime = o._time = h, o.ratio = o._ease._calcEnd ? o._ease.getRatio(1) : 1, o._reversed || (s = !0, a = "onComplete", i = i || o._timeline.autoRemoveChildren), 0 === h && (o._initted || !o.vars.lazy || i) && (o._startTime === o._timeline._duration && (t = 0), (0 > d || 0 >= t && t >= -c || d === c && "isPause" !== o.data) && d !== t && (i = !0, d > c && (a = "onReverseComplete")), o._rawPrevTime = n = !e || t || d === t ? t : c);
            else if (c > t) o._totalTime = o._time = 0, o.ratio = o._ease._calcEnd ? o._ease.getRatio(0) : 0, (0 !== l || 0 === h && d > 0) && (a = "onReverseComplete", s = o._reversed), t > -c ? t = 0 : 0 > t && (o._active = !1, 0 === h && (o._initted || !o.vars.lazy || i) && (d >= 0 && (d !== c || "isPause" !== o.data) && (i = !0), o._rawPrevTime = n = !e || t || d === t ? t : c)), (!o._initted || o._startAt && o._startAt.progress()) && (i = !0);
            else if (o._totalTime = o._time = t, o._easeType) {
                var p = t / h,
                    u = o._easeType,
                    f = o._easePower;
                (1 === u || 3 === u && p >= .5) && (p = 1 - p), 3 === u && (p *= 2), 1 === f ? p *= p : 2 === f ? p *= p * p : 3 === f ? p *= p * p * p : 4 === f && (p *= p * p * p * p), o.ratio = 1 === u ? 1 - p : 2 === u ? p : .5 > t / h ? p / 2 : 1 - p / 2
            } else o.ratio = o._ease.getRatio(t / h);
            if (o._time !== l || i) {
                if (!o._initted) {
                    if (o._init(), !o._initted || o._gc) return;
                    if (!i && o._firstPT && (!1 !== o.vars.lazy && o._duration || o.vars.lazy && !o._duration)) return o._time = o._totalTime = l, o._rawPrevTime = d, I.push(o), void(o._lazy = [t, e]);
                    o._time && !s ? o.ratio = o._ease.getRatio(o._time / h) : s && o._ease._calcEnd && (o.ratio = o._ease.getRatio(0 === o._time ? 0 : 1))
                }
                for (!1 !== o._lazy && (o._lazy = !1), o._active || !o._paused && o._time !== l && t >= 0 && (o._active = !0), 0 === l && (o._startAt && (t >= 0 ? o._startAt.render(t, !0, i) : a || (a = "_dummyGS")), o.vars.onStart && (0 !== o._time || 0 === h) && (e || o._callback("onStart"))), r = o._firstPT; r;) r.f ? r.t[r.p](r.c * o.ratio + r.s) : r.t[r.p] = r.c * o.ratio + r.s, r = r._next;
                o._onUpdate && (0 > t && o._startAt && -1e-4 !== t && o._startAt.render(t, !0, i), e || (o._time !== l || s || i) && o._callback("onUpdate")), a && (!o._gc || i) && (0 > t && o._startAt && !o._onUpdate && -1e-4 !== t && o._startAt.render(t, !0, i), s && (o._timeline.autoRemoveChildren && o._enabled(!1, !1), o._active = !1), !e && o.vars[a] && o._callback(a), 0 === h && o._rawPrevTime === c && n !== c && (o._rawPrevTime = 0))
            }
        }, l._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
            var s, a, r, n, o, l, h, d, p, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                c = this._firstPT;
            if ((v(e) || L(e)) && "number" != typeof e[0])
                for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
            else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;)
                        if (e === this._targets[s]) {
                            o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], a = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, a = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, d = t !== a && "all" !== a && t !== o && ("object" != typeof t || !t._tempKill), i && (A.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h) o[r] && (p || (p = []), p.push(r));
                        if ((p || !t) && !tt(this, i, e, p)) return !1
                    }
                    for (r in h)(n = o[r]) && (u && (n.f ? n.t[n.p](n.s) : n.t[n.p] = n.s, l = !0), n.pg && n.t._kill(h) && (l = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete o[r]), d && (a[r] = 1);
                    !this._firstPT && this._initted && c && this._enabled(!1, !1)
                }
            }
            return l
        }, l.invalidate = function() {
            this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this);
            var t = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(t, !1, !1 !== this.vars.lazy)), this
        }, l._enabled = function(t, e) {
            if (d || h.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = J(s[i], this, !0);
                else this._siblings = J(this.target, this, !0)
            }
            return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, A.to = function(t, e, i) {
            return new A(t, e, i)
        }, A.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
        }, A.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new A(t, e, s)
        }, A.delayedCall = function(t, e, i, s, a) {
            return new A(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: a,
                overwrite: 0
            })
        }, A.set = function(t, e) {
            return new A(t, 0, e)
        }, A.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, s, a, r;
            if (t = "string" != typeof t ? t : A.selector(t) || t, (v(t) || L(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(A.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (r = s[i], a = i; --a > -1;) r === s[a] && s.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (s = J(t).concat()).length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s || []
        }, A.killTweensOf = A.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = A.getTweensOf(t, e), a = s.length; --a > -1;) s[a]._kill(i, t)
        };
        var st = b("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype
        }, !0);
        if (l = st.prototype, st.version = "1.19.0", st.API = 2, l._firstPT = null, l._addTween = Y, l.setRatio = N, l._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, l._mod = l._roundProps = function(t) {
                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, A._onPluginEvent = function(t, e) {
                var i, s, a, r, n, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (n = o._next, s = a; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : r) ? o._prev._next = o: a = o, (o._next = s) ? s._prev = o : r = o, o = n
                    }
                    o = e._firstPT = a
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, st.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === st.API && (H[(new t[e])._propName] = t[e]);
                return !0
            }, y.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    a = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    n = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        st.call(this, i, s), this._overwriteProps = a || []
                    }, !0 === t.global),
                    o = n.prototype = new st(i);
                for (e in o.constructor = n, n.API = t.API, r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return n.version = t.version, st.activate([n]), n
            }, n = t._gsQueue) {
            for (o = 0; o < n.length; o++) n[o]();
            for (l in g) g[l].func || t.console.log("GSAP encountered missing dependency: " + l)
        }
        d = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
const ua = navigator.userAgent.toLowerCase(),
    av = navigator.appVersion.toLowerCase(),
    isWindowsPhone = /windows phone|iemobile|wpdesktop/.test(ua),
    isDroidPhone = !isWindowsPhone && /android.*mobile/.test(ua),
    isDroidTablet = !isWindowsPhone && !isDroidPhone && /android/i.test(ua),
    isDroid = isDroidPhone || isDroidTablet,
    isIos = !isWindowsPhone && /ip(hone|od|ad)/i.test(ua) && !window.MSStream,
    isIpad = !isWindowsPhone && /ipad/i.test(ua) && isIos,
    isTablet = isDroidTablet || isIpad,
    isMobile = isDroidPhone || isIos && !isIpad || isWindowsPhone,
    isDevice = isMobile || isTablet,
    isFirefox = ua.indexOf("firefox") > -1,
    isSafari = !!ua.match(/version\/[\d\.]+.*safari/),
    isOpera = ua.indexOf("opr") > -1,
    isIE11 = !window.ActiveXObject && "ActiveXObject" in window,
    isIE = av.indexOf("msie") > -1 || isIE11 || av.indexOf("edge") > -1,
    isEdge = ua.indexOf("edge") > -1,
    isChrome = null !== window.chrome && void 0 !== window.chrome && "google inc." == navigator.vendor.toLowerCase() && !isOpera && !isEdge,
    deviceSettings = {
        isDesktop: !isMobile && !isTablet,
        isAndroid: isDroid,
        isFirefox: isFirefox,
        isIE: isIE,
        isiPhone: isIos && !isTablet,
        isiPad: isIpad,
        isiOS: isIos,
        isMobile: isMobile,
        isChrome: isChrome,
        isSafari: isSafari,
        isTablet: isTablet
    };
window.checkDeviceSettings = (() => {
        const t = document.body,
            e = deviceSettings.isDesktop ? "isDesktop" : deviceSettings.isTablet ? "isTablet" : "isMobile";
        t.classList.add(e), deviceSettings.isChrome && t.classList.add("isChrome"), deviceSettings.isSafari && t.classList.add("isSafari"), deviceSettings.isTablet && t.classList.add("isTablet"), deviceSettings.isDesktop || Array.from(document.querySelectorAll("video")).forEach(t => {
            t.hasAttribute("data-mobile-video")
        })
    }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Swiper = e()
    }(this, function() {
        "use strict";
        var t = "undefined" == typeof document ? {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            e = "undefined" == typeof window ? {
                document: t,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {}
            } : window,
            i = function(t) {
                for (var e = 0; e < t.length; e += 1) this[e] = t[e];
                return this.length = t.length, this
            };

        function s(s, a) {
            var r = [],
                n = 0;
            if (s && !a && s instanceof i) return s;
            if (s)
                if ("string" == typeof s) {
                    var o, l, h = s.trim();
                    if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) {
                        var d = "div";
                        for (0 === h.indexOf("<li") && (d = "ul"), 0 === h.indexOf("<tr") && (d = "tbody"), 0 !== h.indexOf("<td") && 0 !== h.indexOf("<th") || (d = "tr"), 0 === h.indexOf("<tbody") && (d = "table"), 0 === h.indexOf("<option") && (d = "select"), (l = t.createElement(d)).innerHTML = h, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
                    } else
                        for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || t).querySelectorAll(s.trim()) : [t.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
                } else if (s.nodeType || s === e || s === t) r.push(s);
            else if (s.length > 0 && s[0].nodeType)
                for (n = 0; n < s.length; n += 1) r.push(s[n]);
            return new i(r)
        }

        function a(t) {
            for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]);
            return e
        }
        s.fn = i.prototype, s.Class = i, s.Dom7 = i;
        var r = {
            addClass: function(t) {
                if (void 0 === t) return this;
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(e[i]);
                return this
            },
            removeClass: function(t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(e[i]);
                return this
            },
            hasClass: function(t) {
                return !!this[0] && this[0].classList.contains(t)
            },
            toggleClass: function(t) {
                for (var e = t.split(" "), i = 0; i < e.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(e[i]);
                return this
            },
            attr: function(t, e) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                for (var s = 0; s < this.length; s += 1)
                    if (2 === i.length) this[s].setAttribute(t, e);
                    else
                        for (var a in t) this[s][a] = t[a], this[s].setAttribute(a, t[a]);
                return this
            },
            removeAttr: function(t) {
                for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                return this
            },
            data: function(t, e) {
                var i;
                if (void 0 !== e) {
                    for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e;
                    return this
                }
                if (i = this[0]) {
                    if (i.dom7ElementDataStorage && t in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[t];
                    var a = i.getAttribute("data-" + t);
                    return a || void 0
                }
            },
            transform: function(t) {
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransform = t, i.transform = t
                }
                return this
            },
            transition: function(t) {
                "string" != typeof t && (t += "ms");
                for (var e = 0; e < this.length; e += 1) {
                    var i = this[e].style;
                    i.webkitTransitionDuration = t, i.transitionDuration = t
                }
                return this
            },
            on: function() {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                var a = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3];

                function l(t) {
                    var e = t.target;
                    if (e) {
                        var i = t.target.dom7EventData || [];
                        if (i.indexOf(t) < 0 && i.unshift(t), s(e).is(r)) n.apply(e, i);
                        else
                            for (var a = s(e).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                    }
                }

                function h(t) {
                    var e = t && t.target && t.target.dom7EventData || [];
                    e.indexOf(t) < 0 && e.unshift(t), n.apply(this, e)
                }
                "function" == typeof e[1] && (a = (t = e)[0], n = t[1], o = t[2], r = void 0), o || (o = !1);
                for (var d, p = a.split(" "), u = 0; u < this.length; u += 1) {
                    var c = this[u];
                    if (r)
                        for (d = 0; d < p.length; d += 1) {
                            var f = p[d];
                            c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[f] || (c.dom7LiveListeners[f] = []), c.dom7LiveListeners[f].push({
                                listener: n,
                                proxyListener: l
                            }), c.addEventListener(f, l, o)
                        } else
                            for (d = 0; d < p.length; d += 1) {
                                var m = p[d];
                                c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[m] || (c.dom7Listeners[m] = []), c.dom7Listeners[m].push({
                                    listener: n,
                                    proxyListener: h
                                }), c.addEventListener(m, h, o)
                            }
                }
                return this
            },
            off: function() {
                for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
                var s = e[0],
                    a = e[1],
                    r = e[2],
                    n = e[3];
                "function" == typeof e[1] && (s = (t = e)[0], r = t[1], n = t[2], a = void 0), n || (n = !1);
                for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                    for (var h = o[l], d = 0; d < this.length; d += 1) {
                        var p = this[d],
                            u = void 0;
                        if (!a && p.dom7Listeners ? u = p.dom7Listeners[h] : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[h]), u && u.length)
                            for (var c = u.length - 1; c >= 0; c -= 1) {
                                var f = u[c];
                                r && f.listener === r ? (p.removeEventListener(h, f.proxyListener, n), u.splice(c, 1)) : r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (p.removeEventListener(h, f.proxyListener, n), u.splice(c, 1)) : r || (p.removeEventListener(h, f.proxyListener, n), u.splice(c, 1))
                            }
                    }
                return this
            },
            trigger: function() {
                for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
                for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                    for (var o = a[n], l = 0; l < this.length; l += 1) {
                        var h = this[l],
                            d = void 0;
                        try {
                            d = new e.CustomEvent(o, {
                                detail: r,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (e) {
                            (d = t.createEvent("Event")).initEvent(o, !0, !0), d.detail = r
                        }
                        h.dom7EventData = i.filter(function(t, e) {
                            return e > 0
                        }), h.dispatchEvent(d), h.dom7EventData = [], delete h.dom7EventData
                    }
                return this
            },
            transitionEnd: function(t) {
                var e, i = ["webkitTransitionEnd", "transitionend"],
                    s = this;

                function a(r) {
                    if (r.target === this)
                        for (t.call(this, r), e = 0; e < i.length; e += 1) s.off(i[e], a)
                }
                if (t)
                    for (e = 0; e < i.length; e += 1) s.on(i[e], a);
                return this
            },
            outerWidth: function(t) {
                if (this.length > 0) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(t) {
                if (this.length > 0) {
                    if (t) {
                        var e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function() {
                if (this.length > 0) {
                    var i = this[0],
                        s = i.getBoundingClientRect(),
                        a = t.body,
                        r = i.clientTop || a.clientTop || 0,
                        n = i.clientLeft || a.clientLeft || 0,
                        o = i === e ? e.scrollY : i.scrollTop,
                        l = i === e ? e.scrollX : i.scrollLeft;
                    return {
                        top: s.top + o - r,
                        left: s.left + l - n
                    }
                }
                return null
            },
            css: function(t, i) {
                var s;
                if (1 === arguments.length) {
                    if ("string" != typeof t) {
                        for (s = 0; s < this.length; s += 1)
                            for (var a in t) this[s].style[a] = t[a];
                        return this
                    }
                    if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(t)
                }
                if (2 === arguments.length && "string" == typeof t) {
                    for (s = 0; s < this.length; s += 1) this[s].style[t] = i;
                    return this
                }
                return this
            },
            each: function(t) {
                if (!t) return this;
                for (var e = 0; e < this.length; e += 1)
                    if (!1 === t.call(this[e], e, this[e])) return this;
                return this
            },
            html: function(t) {
                if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
                for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                return this
            },
            text: function(t) {
                if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
                return this
            },
            is: function(a) {
                var r, n, o = this[0];
                if (!o || void 0 === a) return !1;
                if ("string" == typeof a) {
                    if (o.matches) return o.matches(a);
                    if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                    if (o.msMatchesSelector) return o.msMatchesSelector(a);
                    for (r = s(a), n = 0; n < r.length; n += 1)
                        if (r[n] === o) return !0;
                    return !1
                }
                if (a === t) return o === t;
                if (a === e) return o === e;
                if (a.nodeType || a instanceof i) {
                    for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                        if (r[n] === o) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                var t, e = this[0];
                if (e) {
                    for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                    return t
                }
            },
            eq: function(t) {
                if (void 0 === t) return this;
                var e, s = this.length;
                return new i(t > s - 1 ? [] : t < 0 ? (e = s + t) < 0 ? [] : [this[e]] : [this[t]])
            },
            append: function() {
                for (var e, s = [], a = arguments.length; a--;) s[a] = arguments[a];
                for (var r = 0; r < s.length; r += 1) {
                    e = s[r];
                    for (var n = 0; n < this.length; n += 1)
                        if ("string" == typeof e) {
                            var o = t.createElement("div");
                            for (o.innerHTML = e; o.firstChild;) this[n].appendChild(o.firstChild)
                        } else if (e instanceof i)
                        for (var l = 0; l < e.length; l += 1) this[n].appendChild(e[l]);
                    else this[n].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                var s, a;
                for (s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = t.createElement("div");
                        for (r.innerHTML = e, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                    } else if (e instanceof i)
                    for (a = 0; a < e.length; a += 1) this[s].insertBefore(e[a], this[s].childNodes[0]);
                else this[s].insertBefore(e, this[s].childNodes[0]);
                return this
            },
            next: function(t) {
                return this.length > 0 ? t ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(t) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
            },
            nextAll: function(t) {
                var e = [],
                    a = this[0];
                if (!a) return new i([]);
                for (; a.nextElementSibling;) {
                    var r = a.nextElementSibling;
                    t ? s(r).is(t) && e.push(r) : e.push(r), a = r
                }
                return new i(e)
            },
            prev: function(t) {
                if (this.length > 0) {
                    var e = this[0];
                    return t ? e.previousElementSibling && s(e.previousElementSibling).is(t) ? new i([e.previousElementSibling]) : new i([]) : e.previousElementSibling ? new i([e.previousElementSibling]) : new i([])
                }
                return new i([])
            },
            prevAll: function(t) {
                var e = [],
                    a = this[0];
                if (!a) return new i([]);
                for (; a.previousElementSibling;) {
                    var r = a.previousElementSibling;
                    t ? s(r).is(t) && e.push(r) : e.push(r), a = r
                }
                return new i(e)
            },
            parent: function(t) {
                for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? s(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
                return s(a(e))
            },
            parents: function(t) {
                for (var e = [], i = 0; i < this.length; i += 1)
                    for (var r = this[i].parentNode; r;) t ? s(r).is(t) && e.push(r) : e.push(r), r = r.parentNode;
                return s(a(e))
            },
            closest: function(t) {
                var e = this;
                return void 0 === t ? new i([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
            },
            find: function(t) {
                for (var e = [], s = 0; s < this.length; s += 1)
                    for (var a = this[s].querySelectorAll(t), r = 0; r < a.length; r += 1) e.push(a[r]);
                return new i(e)
            },
            children: function(t) {
                for (var e = [], r = 0; r < this.length; r += 1)
                    for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) t ? 1 === n[o].nodeType && s(n[o]).is(t) && e.push(n[o]) : 1 === n[o].nodeType && e.push(n[o]);
                return new i(a(e))
            },
            filter: function(t) {
                for (var e = [], s = 0; s < this.length; s += 1) t.call(this[s], s, this[s]) && e.push(this[s]);
                return new i(e)
            },
            remove: function() {
                for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                return this
            },
            add: function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var i, a;
                for (i = 0; i < t.length; i += 1) {
                    var r = s(t[i]);
                    for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
                }
                return this
            },
            styles: function() {
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(r).forEach(function(t) {
            s.fn[t] = s.fn[t] || r[t]
        });
        var n = {
                deleteProps: function(t) {
                    var e = t;
                    Object.keys(e).forEach(function(t) {
                        try {
                            e[t] = null
                        } catch (t) {}
                        try {
                            delete e[t]
                        } catch (t) {}
                    })
                },
                nextTick: function(t, e) {
                    return void 0 === e && (e = 0), setTimeout(t, e)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(t, i) {
                    var s, a, r;
                    void 0 === i && (i = "x");
                    var n = e.getComputedStyle(t, null);
                    return e.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(t) {
                        return t.replace(",", ".")
                    }).join(", ")), r = new e.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = e.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = e.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
                },
                parseUrlQuery: function(t) {
                    var i, s, a, r, n = {},
                        o = t || e.location.href;
                    if ("string" == typeof o && o.length)
                        for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(t) {
                                return "" !== t
                            })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                    return n
                },
                isObject: function(t) {
                    return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
                },
                extend: function() {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    for (var i = Object(t[0]), s = 1; s < t.length; s += 1) {
                        var a = t[s];
                        if (null != a)
                            for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                                var h = r[o],
                                    d = Object.getOwnPropertyDescriptor(a, h);
                                void 0 !== d && d.enumerable && (n.isObject(i[h]) && n.isObject(a[h]) ? n.extend(i[h], a[h]) : !n.isObject(i[h]) && n.isObject(a[h]) ? (i[h] = {}, n.extend(i[h], a[h])) : i[h] = a[h])
                            }
                    }
                    return i
                }
            },
            o = {
                touch: e.Modernizr && !0 === e.Modernizr.touch || !!(e.navigator.maxTouchPoints > 0 || "ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints > 0,
                observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                passiveListener: function() {
                    var t = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (t) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            },
            l = function(t) {
                void 0 === t && (t = {});
                var e = this;
                e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function(t) {
                    e.on(t, e.params.on[t])
                })
            },
            h = {
                components: {
                    configurable: !0
                }
            };
        l.prototype.on = function(t, e, i) {
            var s = this;
            if ("function" != typeof e) return s;
            var a = i ? "unshift" : "push";
            return t.split(" ").forEach(function(t) {
                s.eventsListeners[t] || (s.eventsListeners[t] = []), s.eventsListeners[t][a](e)
            }), s
        }, l.prototype.once = function(t, e, i) {
            var s = this;
            if ("function" != typeof e) return s;

            function a() {
                for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
                s.off(t, a), a.f7proxy && delete a.f7proxy, e.apply(s, i)
            }
            return a.f7proxy = e, s.on(t, a, i)
        }, l.prototype.off = function(t, e) {
            var i = this;
            return i.eventsListeners ? (t.split(" ").forEach(function(t) {
                void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].length && i.eventsListeners[t].forEach(function(s, a) {
                    (s === e || s.f7proxy && s.f7proxy === e) && i.eventsListeners[t].splice(a, 1)
                })
            }), i) : i
        }, l.prototype.emit = function() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var i, s, a, r = this;
            return r.eventsListeners ? ("string" == typeof t[0] || Array.isArray(t[0]) ? (i = t[0], s = t.slice(1, t.length), a = r) : (i = t[0].events, s = t[0].data, a = t[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(t) {
                if (r.eventsListeners && r.eventsListeners[t]) {
                    var e = [];
                    r.eventsListeners[t].forEach(function(t) {
                        e.push(t)
                    }), e.forEach(function(t) {
                        t.apply(a, s)
                    })
                }
            }), r) : r
        }, l.prototype.useModulesParams = function(t) {
            var e = this;
            e.modules && Object.keys(e.modules).forEach(function(i) {
                var s = e.modules[i];
                s.params && n.extend(t, s.params)
            })
        }, l.prototype.useModules = function(t) {
            void 0 === t && (t = {});
            var e = this;
            e.modules && Object.keys(e.modules).forEach(function(i) {
                var s = e.modules[i],
                    a = t[i] || {};
                s.instance && Object.keys(s.instance).forEach(function(t) {
                    var i = s.instance[t];
                    e[t] = "function" == typeof i ? i.bind(e) : i
                }), s.on && e.on && Object.keys(s.on).forEach(function(t) {
                    e.on(t, s.on[t])
                }), s.create && s.create.bind(e)(a)
            })
        }, h.components.set = function(t) {
            this.use && this.use(t)
        }, l.installModule = function(t) {
            for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
            var s = this;
            s.prototype.modules || (s.prototype.modules = {});
            var a = t.name || Object.keys(s.prototype.modules).length + "_" + n.now();
            return s.prototype.modules[a] = t, t.proto && Object.keys(t.proto).forEach(function(e) {
                s.prototype[e] = t.proto[e]
            }), t.static && Object.keys(t.static).forEach(function(e) {
                s[e] = t.static[e]
            }), t.install && t.install.apply(s, e), s
        }, l.use = function(t) {
            for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
            var s = this;
            return Array.isArray(t) ? (t.forEach(function(t) {
                return s.installModule(t)
            }), s) : s.installModule.apply(s, [t].concat(e))
        }, Object.defineProperties(l, h);
        var d = {
            updateSize: function() {
                var t, e, i = this.$el;
                t = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, e = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === t && this.isHorizontal() || 0 === e && this.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), e = e - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                    width: t,
                    height: e,
                    size: this.isHorizontal() ? t : e
                }))
            },
            updateSlides: function() {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.size,
                    a = this.rtlTranslate,
                    r = this.wrongRTL,
                    o = this.virtual && t.virtual.enabled,
                    l = o ? this.virtual.slides.length : this.slides.length,
                    h = i.children("." + this.params.slideClass),
                    d = o ? this.virtual.slides.length : h.length,
                    p = [],
                    u = [],
                    c = [];

                function f(e) {
                    return !t.cssMode || e !== h.length - 1
                }
                var m = t.slidesOffsetBefore;
                "function" == typeof m && (m = t.slidesOffsetBefore.call(this));
                var v = t.slidesOffsetAfter;
                "function" == typeof v && (v = t.slidesOffsetAfter.call(this));
                var g = this.snapGrid.length,
                    _ = this.snapGrid.length,
                    y = t.spaceBetween,
                    b = -m,
                    w = 0,
                    x = 0;
                if (void 0 !== s) {
                    var T, S;
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * s), this.virtualSize = -y, a ? h.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : h.css({
                        marginRight: "",
                        marginBottom: ""
                    }), t.slidesPerColumn > 1 && (T = Math.floor(d / t.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var C, E = t.slidesPerColumn, P = T / E, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
                        S = 0;
                        var O = h.eq(k);
                        if (t.slidesPerColumn > 1) {
                            var z = void 0,
                                D = void 0,
                                A = void 0;
                            if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                var L = Math.floor(k / (t.slidesPerGroup * t.slidesPerColumn)),
                                    I = k - t.slidesPerColumn * t.slidesPerGroup * L,
                                    R = 0 === L ? t.slidesPerGroup : Math.min(Math.ceil((d - L * E * t.slidesPerGroup) / E), t.slidesPerGroup);
                                z = (D = I - (A = Math.floor(I / R)) * R + L * t.slidesPerGroup) + A * T / E, O.css({
                                    "-webkit-box-ordinal-group": z,
                                    "-moz-box-ordinal-group": z,
                                    "-ms-flex-order": z,
                                    "-webkit-order": z,
                                    order: z
                                })
                            } else "column" === t.slidesPerColumnFill ? (A = k - (D = Math.floor(k / E)) * E, (D > M || D === M && A === E - 1) && (A += 1) >= E && (A = 0, D += 1)) : D = k - (A = Math.floor(k / P)) * P;
                            O.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px")
                        }
                        if ("none" !== O.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var $ = e.getComputedStyle(O[0], null),
                                    F = O[0].style.transform,
                                    N = O[0].style.webkitTransform;
                                if (F && (O[0].style.transform = "none"), N && (O[0].style.webkitTransform = "none"), t.roundLengths) S = this.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var B = parseFloat($.getPropertyValue("width")),
                                        X = parseFloat($.getPropertyValue("padding-left")),
                                        Y = parseFloat($.getPropertyValue("padding-right")),
                                        G = parseFloat($.getPropertyValue("margin-left")),
                                        H = parseFloat($.getPropertyValue("margin-right")),
                                        V = $.getPropertyValue("box-sizing");
                                    S = V && "border-box" === V ? B + G + H : B + X + Y + G + H
                                } else {
                                    var W = parseFloat($.getPropertyValue("height")),
                                        j = parseFloat($.getPropertyValue("padding-top")),
                                        q = parseFloat($.getPropertyValue("padding-bottom")),
                                        U = parseFloat($.getPropertyValue("margin-top")),
                                        Z = parseFloat($.getPropertyValue("margin-bottom")),
                                        K = $.getPropertyValue("box-sizing");
                                    S = K && "border-box" === K ? W + U + Z : W + j + q + U + Z
                                }
                                F && (O[0].style.transform = F), N && (O[0].style.webkitTransform = N), t.roundLengths && (S = Math.floor(S))
                            } else S = (s - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (S = Math.floor(S)), h[k] && (this.isHorizontal() ? h[k].style.width = S + "px" : h[k].style.height = S + "px");
                            h[k] && (h[k].swiperSlideSize = S), c.push(S), t.centeredSlides ? (b = b + S / 2 + w / 2 + y, 0 === w && 0 !== k && (b = b - s / 2 - y), 0 === k && (b = b - s / 2 - y), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), x % t.slidesPerGroup == 0 && p.push(b), u.push(b)) : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && p.push(b), u.push(b), b = b + S + y), this.virtualSize += S + y, w = S, x += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                            width: this.virtualSize + t.spaceBetween + "px"
                        }), t.setWrapperSize && (this.isHorizontal() ? i.css({
                            width: this.virtualSize + t.spaceBetween + "px"
                        }) : i.css({
                            height: this.virtualSize + t.spaceBetween + "px"
                        })), t.slidesPerColumn > 1 && (this.virtualSize = (S + t.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
                            width: this.virtualSize + t.spaceBetween + "px"
                        }) : i.css({
                            height: this.virtualSize + t.spaceBetween + "px"
                        }), t.centeredSlides)) {
                        C = [];
                        for (var Q = 0; Q < p.length; Q += 1) {
                            var J = p[Q];
                            t.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                        }
                        p = C
                    }
                    if (!t.centeredSlides) {
                        C = [];
                        for (var tt = 0; tt < p.length; tt += 1) {
                            var et = p[tt];
                            t.roundLengths && (et = Math.floor(et)), p[tt] <= this.virtualSize - s && C.push(et)
                        }
                        p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? a ? h.filter(f).css({
                            marginLeft: y + "px"
                        }) : h.filter(f).css({
                            marginRight: y + "px"
                        }) : h.filter(f).css({
                            marginBottom: y + "px"
                        })), t.centeredSlides && t.centeredSlidesBounds) {
                        var it = 0;
                        c.forEach(function(e) {
                            it += e + (t.spaceBetween ? t.spaceBetween : 0)
                        });
                        var st = (it -= t.spaceBetween) - s;
                        p = p.map(function(t) {
                            return t < 0 ? -m : t > st ? st + v : t
                        })
                    }
                    if (t.centerInsufficientSlides) {
                        var at = 0;
                        if (c.forEach(function(e) {
                                at += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }), (at -= t.spaceBetween) < s) {
                            var rt = (s - at) / 2;
                            p.forEach(function(t, e) {
                                p[e] = t - rt
                            }), u.forEach(function(t, e) {
                                u[e] = t + rt
                            })
                        }
                    }
                    n.extend(this, {
                        slides: h,
                        snapGrid: p,
                        slidesGrid: u,
                        slidesSizesGrid: c
                    }), d !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== _ && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(t) {
                var e, i = [],
                    s = 0;
                if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides);
                    else
                        for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                            var a = this.activeIndex + e;
                            if (a > this.slides.length) break;
                            i.push(this.slides.eq(a)[0])
                        } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (e = 0; e < i.length; e += 1)
                    if (void 0 !== i[e]) {
                        var r = i[e].offsetHeight;
                        s = r > s ? r : s
                    }
                s && this.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function() {
                for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop
            },
            updateSlidesProgress: function(t) {
                void 0 === t && (t = this && this.translate || 0);
                var e = this.params,
                    i = this.slides,
                    a = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var r = -t;
                    a && (r = t), i.removeClass(e.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n],
                            l = (r + (e.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + e.spaceBetween);
                        if (e.watchSlidesVisibility || e.centeredSlides && e.autoHeight) {
                            var h = -(r - o.swiperSlideOffset),
                                d = h + this.slidesSizesGrid[n];
                            (h >= 0 && h < this.size - 1 || d > 1 && d <= this.size || h <= 0 && d >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(e.slideVisibleClass))
                        }
                        o.progress = a ? -l : l
                    }
                    this.visibleSlides = s(this.visibleSlides)
                }
            },
            updateProgress: function(t) {
                if (void 0 === t) {
                    var e = this.rtlTranslate ? -1 : 1;
                    t = this && this.translate && this.translate * e || 0
                }
                var i = this.params,
                    s = this.maxTranslate() - this.minTranslate(),
                    a = this.progress,
                    r = this.isBeginning,
                    o = this.isEnd,
                    l = r,
                    h = o;
                0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (t - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                    progress: a,
                    isBeginning: r,
                    isEnd: o
                }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(t), r && !l && this.emit("reachBeginning toEdge"), o && !h && this.emit("reachEnd toEdge"), (l && !r || h && !o) && this.emit("fromEdge"), this.emit("progress", a)
            },
            updateSlidesClasses: function() {
                var t, e = this.slides,
                    i = this.params,
                    s = this.$wrapperEl,
                    a = this.activeIndex,
                    r = this.realIndex,
                    n = this.virtual && i.virtual.enabled;
                e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (t = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : e.eq(a)).addClass(i.slideActiveClass), i.loop && (t.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                var o = t.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = e.eq(0)).addClass(i.slideNextClass);
                var l = t.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(t) {
                var e, i = this.rtlTranslate ? this.translate : -this.translate,
                    s = this.slidesGrid,
                    a = this.snapGrid,
                    r = this.params,
                    o = this.activeIndex,
                    l = this.realIndex,
                    h = this.snapIndex,
                    d = t;
                if (void 0 === d) {
                    for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? d = p : i >= s[p] && i < s[p + 1] && (d = p + 1) : i >= s[p] && (d = p);
                    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (a.indexOf(i) >= 0) e = a.indexOf(i);
                else {
                    var u = Math.min(r.slidesPerGroupSkip, d);
                    e = u + Math.floor((d - u) / r.slidesPerGroup)
                }
                if (e >= a.length && (e = a.length - 1), d !== o) {
                    var c = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    n.extend(this, {
                        snapIndex: e,
                        realIndex: c,
                        previousIndex: o,
                        activeIndex: d
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                } else e !== h && (this.snapIndex = e, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(t) {
                var e = this.params,
                    i = s(t.target).closest("." + e.slideClass)[0],
                    a = !1;
                if (i)
                    for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
                if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        };
        var p = {
            getTranslate: function(t) {
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                var e = this.params,
                    i = this.rtlTranslate,
                    s = this.translate,
                    a = this.$wrapperEl;
                if (e.virtualTranslate) return i ? -s : s;
                if (e.cssMode) return s;
                var r = n.getTranslate(a[0], t);
                return i && (r = -r), r || 0
            },
            setTranslate: function(t, e) {
                var i = this.rtlTranslate,
                    s = this.params,
                    a = this.$wrapperEl,
                    r = this.wrapperEl,
                    n = this.progress,
                    o = 0,
                    l = 0;
                this.isHorizontal() ? o = i ? -t : t : l = t, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
                var h = this.maxTranslate() - this.minTranslate();
                (0 === h ? 0 : (t - this.minTranslate()) / h) !== n && this.updateProgress(t), this.emit("setTranslate", this.translate, e)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(t, e, i, s, a) {
                var r;
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                var n = this,
                    o = n.params,
                    l = n.wrapperEl;
                if (n.animating && o.preventInteractionOnTransition) return !1;
                var h, d = n.minTranslate(),
                    p = n.maxTranslate();
                if (h = s && t > d ? d : s && t < p ? p : t, n.updateProgress(h), o.cssMode) {
                    var u = n.isHorizontal();
                    return 0 === e ? l[u ? "scrollLeft" : "scrollTop"] = -h : l.scrollTo ? l.scrollTo(((r = {})[u ? "left" : "top"] = -h, r.behavior = "smooth", r)) : l[u ? "scrollLeft" : "scrollTop"] = -h, !0
                }
                return 0 === e ? (n.setTransition(0), n.setTranslate(h), i && (n.emit("beforeTransitionStart", e, a), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(h), i && (n.emit("beforeTransitionStart", e, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(t) {
                    n && !n.destroyed && t.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
            }
        };
        var u = {
            setTransition: function(t, e) {
                this.params.cssMode || this.$wrapperEl.transition(t), this.emit("setTransition", t, e)
            },
            transitionStart: function(t, e) {
                void 0 === t && (t = !0);
                var i = this.activeIndex,
                    s = this.params,
                    a = this.previousIndex;
                if (!s.cssMode) {
                    s.autoHeight && this.updateAutoHeight();
                    var r = e;
                    if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), t && i !== a) {
                        if ("reset" === r) return void this.emit("slideResetTransitionStart");
                        this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                    }
                }
            },
            transitionEnd: function(t, e) {
                void 0 === t && (t = !0);
                var i = this.activeIndex,
                    s = this.previousIndex,
                    a = this.params;
                if (this.animating = !1, !a.cssMode) {
                    this.setTransition(0);
                    var r = e;
                    if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== s) {
                        if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                        this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                    }
                }
            }
        };
        var c = {
            slideTo: function(t, e, i, s) {
                var a;
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                var r = this,
                    n = t;
                n < 0 && (n = 0);
                var o = r.params,
                    l = r.snapGrid,
                    h = r.slidesGrid,
                    d = r.previousIndex,
                    p = r.activeIndex,
                    u = r.rtlTranslate,
                    c = r.wrapperEl;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                var f = Math.min(r.params.slidesPerGroupSkip, n),
                    m = f + Math.floor((n - f) / r.params.slidesPerGroup);
                m >= l.length && (m = l.length - 1), (p || o.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
                var v, g = -l[m];
                if (r.updateProgress(g), o.normalizeSlideIndex)
                    for (var _ = 0; _ < h.length; _ += 1) - Math.floor(100 * g) >= Math.floor(100 * h[_]) && (n = _);
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
                }
                if (v = n > p ? "next" : n < p ? "prev" : "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== v && (r.transitionStart(i, v), r.transitionEnd(i, v)), !1;
                if (o.cssMode) {
                    var y = r.isHorizontal();
                    return 0 === e ? c[y ? "scrollLeft" : "scrollTop"] = -g : c.scrollTo ? c.scrollTo(((a = {})[y ? "left" : "top"] = -g, a.behavior = "smooth", a)) : c[y ? "scrollLeft" : "scrollTop"] = -g, !0
                }
                return 0 === e ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, v), r.transitionEnd(i, v)) : (r.setTransition(e), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, v), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(t) {
                    r && !r.destroyed && t.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, v))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
            },
            slideToLoop: function(t, e, i, s) {
                void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                var a = t;
                return this.params.loop && (a += this.loopedSlides), this.slideTo(a, e, i, s)
            },
            slideNext: function(t, e, i) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var s = this.params,
                    a = this.animating,
                    r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (a) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + r, t, e, i)
            },
            slidePrev: function(t, e, i) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                var s = this.params,
                    a = this.animating,
                    r = this.snapGrid,
                    n = this.slidesGrid,
                    o = this.rtlTranslate;
                if (s.loop) {
                    if (a) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }

                function l(t) {
                    return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                }
                var h, d = l(o ? this.translate : -this.translate),
                    p = r.map(function(t) {
                        return l(t)
                    }),
                    u = (n.map(function(t) {
                        return l(t)
                    }), r[p.indexOf(d)], r[p.indexOf(d) - 1]);
                return void 0 === u && s.cssMode && r.forEach(function(t) {
                    !u && d >= t && (u = t)
                }), void 0 !== u && (h = n.indexOf(u)) < 0 && (h = this.activeIndex - 1), this.slideTo(h, t, e, i)
            },
            slideReset: function(t, e, i) {
                return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i)
            },
            slideToClosest: function(t, e, i, s) {
                void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === s && (s = .5);
                var a = this.activeIndex,
                    r = Math.min(this.params.slidesPerGroupSkip, a),
                    n = r + Math.floor((a - r) / this.params.slidesPerGroup),
                    o = this.rtlTranslate ? this.translate : -this.translate;
                if (o >= this.snapGrid[n]) {
                    var l = this.snapGrid[n];
                    o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
                } else {
                    var h = this.snapGrid[n - 1];
                    o - h <= (this.snapGrid[n] - h) * s && (a -= this.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, t, e, i)
            },
            slideToClickedSlide: function() {
                var t, e = this,
                    i = e.params,
                    a = e.$wrapperEl,
                    r = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
                    o = e.clickedIndex;
                if (i.loop) {
                    if (e.animating) return;
                    t = parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < e.loopedSlides - r / 2 || o > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() {
                        e.slideTo(o)
                    })) : e.slideTo(o) : o > e.slides.length - r ? (e.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() {
                        e.slideTo(o)
                    })) : e.slideTo(o)
                } else e.slideTo(o)
            }
        };
        var f = {
            loopCreate: function() {
                var e = this,
                    i = e.params,
                    a = e.$wrapperEl;
                a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var r = a.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                    if (n !== i.slidesPerGroup) {
                        for (var o = 0; o < n; o += 1) {
                            var l = s(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            a.append(l)
                        }
                        r = a.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                var h = [],
                    d = [];
                r.each(function(t, i) {
                    var a = s(i);
                    t < e.loopedSlides && d.push(i), t < r.length && t >= r.length - e.loopedSlides && h.push(i), a.attr("data-swiper-slide-index", t)
                });
                for (var p = 0; p < d.length; p += 1) a.append(s(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var u = h.length - 1; u >= 0; u -= 1) a.prepend(s(h[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                this.emit("beforeLoopFix");
                var t, e = this.activeIndex,
                    i = this.slides,
                    s = this.loopedSlides,
                    a = this.allowSlidePrev,
                    r = this.allowSlideNext,
                    n = this.snapGrid,
                    o = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                var l = -n[e] - this.getTranslate();
                e < s ? (t = i.length - 3 * s + e, t += s, this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)) : e >= i.length - s && (t = -i.length + e + s, t += s, this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l));
                this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
            },
            loopDestroy: function() {
                var t = this.$wrapperEl,
                    e = this.params,
                    i = this.slides;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        };
        var m = {
            setGrabCursor: function(t) {
                if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    var e = this.el;
                    e.style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        };
        var v, g, _, y, b, w, x, T, S, C, E, P, M, k, O, z = {
                appendSlide: function(t) {
                    var e = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof t && "length" in t)
                        for (var s = 0; s < t.length; s += 1) t[s] && e.append(t[s]);
                    else e.append(t);
                    i.loop && this.loopCreate(), i.observer && o.observer || this.update()
                },
                prependSlide: function(t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    e.loop && this.loopDestroy();
                    var a = s + 1;
                    if ("object" == typeof t && "length" in t) {
                        for (var r = 0; r < t.length; r += 1) t[r] && i.prepend(t[r]);
                        a = s + t.length
                    } else i.prepend(t);
                    e.loop && this.loopCreate(), e.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
                },
                addSlide: function(t, e) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex;
                    s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                    var r = this.slides.length;
                    if (t <= 0) this.prependSlide(e);
                    else if (t >= r) this.appendSlide(e);
                    else {
                        for (var n = a > t ? a + 1 : a, l = [], h = r - 1; h >= t; h -= 1) {
                            var d = this.slides.eq(h);
                            d.remove(), l.unshift(d)
                        }
                        if ("object" == typeof e && "length" in e) {
                            for (var p = 0; p < e.length; p += 1) e[p] && i.append(e[p]);
                            n = a > t ? a + e.length : a
                        } else i.append(e);
                        for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                        s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                    }
                },
                removeSlide: function(t) {
                    var e = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    e.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + e.slideClass));
                    var a, r = s;
                    if ("object" == typeof t && "length" in t) {
                        for (var n = 0; n < t.length; n += 1) a = t[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                        r = Math.max(r, 0)
                    } else a = t, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                    e.loop && this.loopCreate(), e.observer && o.observer || this.update(), e.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                },
                removeAllSlides: function() {
                    for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                    this.removeSlide(t)
                }
            },
            D = (v = e.navigator.platform, g = e.navigator.userAgent, _ = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!e.cordova && !e.phonegap),
                phonegap: !(!e.cordova && !e.phonegap),
                electron: !1
            }, y = e.screen.width, b = e.screen.height, w = g.match(/(Android);?[\s\/]+([\d.]+)?/), x = g.match(/(iPad).*OS\s([\d_]+)/), T = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !x && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, E = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, M = "Win32" === v, k = g.toLowerCase().indexOf("electron") >= 0, O = "MacIntel" === v, !x && O && o.touch && (1024 === y && 1366 === b || 834 === y && 1194 === b || 834 === y && 1112 === b || 768 === y && 1024 === b) && (x = g.match(/(Version)\/([\d.]+)/), O = !1), _.ie = C, _.edge = E, _.firefox = P, w && !M && (_.os = "android", _.osVersion = w[2], _.android = !0, _.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (x || S || T) && (_.os = "ios", _.ios = !0), S && !T && (_.osVersion = S[2].replace(/_/g, "."), _.iphone = !0), x && (_.osVersion = x[2].replace(/_/g, "."), _.ipad = !0), T && (_.osVersion = T[3] ? T[3].replace(/_/g, ".") : null, _.ipod = !0), _.ios && _.osVersion && g.indexOf("Version/") >= 0 && "10" === _.osVersion.split(".")[0] && (_.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), _.webView = !(!(S || x || T) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !e.navigator.standalone) || e.matchMedia && e.matchMedia("(display-mode: standalone)").matches, _.webview = _.webView, _.standalone = _.webView, _.desktop = !(_.ios || _.android) || k, _.desktop && (_.electron = k, _.macos = O, _.windows = M, _.macos && (_.os = "macos"), _.windows && (_.os = "windows")), _.pixelRatio = e.devicePixelRatio || 1, _);

        function A() {
            var t = this.params,
                e = this.el;
            if (!e || 0 !== e.offsetWidth) {
                t.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    s = this.allowSlidePrev,
                    a = this.snapGrid;
                this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
            }
        }
        var L = !1;

        function I() {}
        var R = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            $ = {
                update: d,
                translate: p,
                transition: u,
                slide: c,
                loop: f,
                grabCursor: m,
                manipulation: z,
                events: {
                    attachEvents: function() {
                        var i = this.params,
                            a = this.touchEvents,
                            r = this.el,
                            l = this.wrapperEl;
                        this.onTouchStart = function(i) {
                            var a = this.touchEventsData,
                                r = this.params,
                                o = this.touches;
                            if (!this.animating || !r.preventInteractionOnTransition) {
                                var l = i;
                                l.originalEvent && (l = l.originalEvent);
                                var h = s(l.target);
                                if (("wrapper" !== r.touchEventsTarget || h.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved)))
                                    if (r.noSwiping && h.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                                    else if (!r.swipeHandler || h.closest(r.swipeHandler)[0]) {
                                    o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                    var d = o.currentX,
                                        p = o.currentY,
                                        u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                        c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                                    if (!u || !(d <= c || d >= e.screen.width - c)) {
                                        if (n.extend(a, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0
                                            }), o.startX = d, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                                            var f = !0;
                                            h.is(a.formElements) && (f = !1), t.activeElement && s(t.activeElement).is(a.formElements) && t.activeElement !== h[0] && t.activeElement.blur();
                                            var m = f && this.allowTouchMove && r.touchStartPreventDefault;
                                            (r.touchStartForcePreventDefault || m) && l.preventDefault()
                                        }
                                        this.emit("touchStart", l)
                                    }
                                }
                            }
                        }.bind(this), this.onTouchMove = function(e) {
                            var i = this.touchEventsData,
                                a = this.params,
                                r = this.touches,
                                o = this.rtlTranslate,
                                l = e;
                            if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
                                if (!i.isTouchEvent || "mousemove" !== l.type) {
                                    var h = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                                        d = "touchmove" === l.type ? h.pageX : l.pageX,
                                        p = "touchmove" === l.type ? h.pageY : l.pageY;
                                    if (l.preventedByNestedSwiper) return r.startX = d, void(r.startY = p);
                                    if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (n.extend(r, {
                                        startX: d,
                                        startY: p,
                                        currentX: d,
                                        currentY: p
                                    }), i.touchStartTime = n.now()));
                                    if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                        if (this.isVertical()) {
                                            if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                                        } else if (d < r.startX && this.translate <= this.maxTranslate() || d > r.startX && this.translate >= this.minTranslate()) return;
                                    if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                                    if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                                        r.currentX = d, r.currentY = p;
                                        var u, c = r.currentX - r.startX,
                                            f = r.currentY - r.startY;
                                        if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(f, 2)) < this.params.threshold))
                                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + f * f >= 25 && (u = 180 * Math.atan2(Math.abs(f), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? u > a.touchAngle : 90 - u > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                            else if (i.startMoving) {
                                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                                            var m = this.isHorizontal() ? c : f;
                                            r.diff = m, m *= a.touchRatio, o && (m = -m), this.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
                                            var v = !0,
                                                g = a.resistanceRatio;
                                            if (a.touchReleaseOnEdges && (g = 0), m > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + m, g))) : m < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - m, g))), v && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                                if (!(Math.abs(m) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                            }
                                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                                time: i.touchStartTime
                                            }), i.velocities.push({
                                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                                time: n.now()
                                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                                        }
                                    }
                                }
                            } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
                        }.bind(this), this.onTouchEnd = function(t) {
                            var e = this,
                                i = e.touchEventsData,
                                s = e.params,
                                a = e.touches,
                                r = e.rtlTranslate,
                                o = e.$wrapperEl,
                                l = e.slidesGrid,
                                h = e.snapGrid,
                                d = t;
                            if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                            s.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                            var p, u = n.now(),
                                c = u - i.touchStartTime;
                            if (e.allowClick && (e.updateClickedSlide(d), e.emit("tap click", d), c < 300 && u - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", d)), i.lastClickTime = n.now(), n.nextTick(function() {
                                    e.destroyed || (e.allowClick = !0)
                                }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? e.translate : -e.translate : -i.currentTranslate, !s.cssMode)
                                if (s.freeMode) {
                                    if (p < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                                    if (p > -e.maxTranslate()) return void(e.slides.length < h.length ? e.slideTo(h.length - 1) : e.slideTo(e.slides.length - 1));
                                    if (s.freeModeMomentum) {
                                        if (i.velocities.length > 1) {
                                            var f = i.velocities.pop(),
                                                m = i.velocities.pop(),
                                                v = f.position - m.position,
                                                g = f.time - m.time;
                                            e.velocity = v / g, e.velocity /= 2, Math.abs(e.velocity) < s.freeModeMinimumVelocity && (e.velocity = 0), (g > 150 || n.now() - f.time > 300) && (e.velocity = 0)
                                        } else e.velocity = 0;
                                        e.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                        var _ = 1e3 * s.freeModeMomentumRatio,
                                            y = e.velocity * _,
                                            b = e.translate + y;
                                        r && (b = -b);
                                        var w, x, T = !1,
                                            S = 20 * Math.abs(e.velocity) * s.freeModeMomentumBounceRatio;
                                        if (b < e.maxTranslate()) s.freeModeMomentumBounce ? (b + e.maxTranslate() < -S && (b = e.maxTranslate() - S), w = e.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = e.maxTranslate(), s.loop && s.centeredSlides && (x = !0);
                                        else if (b > e.minTranslate()) s.freeModeMomentumBounce ? (b - e.minTranslate() > S && (b = e.minTranslate() + S), w = e.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = e.minTranslate(), s.loop && s.centeredSlides && (x = !0);
                                        else if (s.freeModeSticky) {
                                            for (var C, E = 0; E < h.length; E += 1)
                                                if (h[E] > -b) {
                                                    C = E;
                                                    break
                                                }
                                            b = -(b = Math.abs(h[C] - b) < Math.abs(h[C - 1] - b) || "next" === e.swipeDirection ? h[C] : h[C - 1])
                                        }
                                        if (x && e.once("transitionEnd", function() {
                                                e.loopFix()
                                            }), 0 !== e.velocity) {
                                            if (_ = r ? Math.abs((-b - e.translate) / e.velocity) : Math.abs((b - e.translate) / e.velocity), s.freeModeSticky) {
                                                var P = Math.abs((r ? -b : b) - e.translate),
                                                    M = e.slidesSizesGrid[e.activeIndex];
                                                _ = P < M ? s.speed : P < 2 * M ? 1.5 * s.speed : 2.5 * s.speed
                                            }
                                        } else if (s.freeModeSticky) return void e.slideToClosest();
                                        s.freeModeMomentumBounce && T ? (e.updateProgress(w), e.setTransition(_), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating = !0, o.transitionEnd(function() {
                                            e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(s.speed), e.setTranslate(w), o.transitionEnd(function() {
                                                e && !e.destroyed && e.transitionEnd()
                                            }))
                                        })) : e.velocity ? (e.updateProgress(b), e.setTransition(_), e.setTranslate(b), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, o.transitionEnd(function() {
                                            e && !e.destroyed && e.transitionEnd()
                                        }))) : e.updateProgress(b), e.updateActiveIndex(), e.updateSlidesClasses()
                                    } else if (s.freeModeSticky) return void e.slideToClosest();
                                    (!s.freeModeMomentum || c >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                                } else {
                                    for (var k = 0, O = e.slidesSizesGrid[0], z = 0; z < l.length; z += z < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                                        var D = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                        void 0 !== l[z + D] ? p >= l[z] && p < l[z + D] && (k = z, O = l[z + D] - l[z]) : p >= l[z] && (k = z, O = l[l.length - 1] - l[l.length - 2])
                                    }
                                    var A = (p - l[k]) / O,
                                        L = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                                    if (c > s.longSwipesMs) {
                                        if (!s.longSwipes) return void e.slideTo(e.activeIndex);
                                        "next" === e.swipeDirection && (A >= s.longSwipesRatio ? e.slideTo(k + L) : e.slideTo(k)), "prev" === e.swipeDirection && (A > 1 - s.longSwipesRatio ? e.slideTo(k + L) : e.slideTo(k))
                                    } else {
                                        if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
                                        !e.navigation || d.target !== e.navigation.nextEl && d.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(k + L), "prev" === e.swipeDirection && e.slideTo(k)) : d.target === e.navigation.nextEl ? e.slideTo(k + L) : e.slideTo(k)
                                    }
                                }
                        }.bind(this), i.cssMode && (this.onScroll = function() {
                            var t = this.wrapperEl;
                            this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -t.scrollLeft : -t.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                            var e = this.maxTranslate() - this.minTranslate();
                            (0 === e ? 0 : (this.translate - this.minTranslate()) / e) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
                        }.bind(this)), this.onClick = function(t) {
                            this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                        }.bind(this);
                        var h = !!i.nested;
                        if (!o.touch && o.pointerEvents) r.addEventListener(a.start, this.onTouchStart, !1), t.addEventListener(a.move, this.onTouchMove, h), t.addEventListener(a.end, this.onTouchEnd, !1);
                        else {
                            if (o.touch) {
                                var d = !("touchstart" !== a.start || !o.passiveListener || !i.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                r.addEventListener(a.start, this.onTouchStart, d), r.addEventListener(a.move, this.onTouchMove, o.passiveListener ? {
                                    passive: !1,
                                    capture: h
                                } : h), r.addEventListener(a.end, this.onTouchEnd, d), a.cancel && r.addEventListener(a.cancel, this.onTouchEnd, d), L || (t.addEventListener("touchstart", I), L = !0)
                            }(i.simulateTouch && !D.ios && !D.android || i.simulateTouch && !o.touch && D.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), t.addEventListener("mousemove", this.onTouchMove, h), t.addEventListener("mouseup", this.onTouchEnd, !1))
                        }(i.preventClicks || i.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), i.cssMode && l.addEventListener("scroll", this.onScroll), i.updateOnWindowResize ? this.on(D.ios || D.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : this.on("observerUpdate", A, !0)
                    },
                    detachEvents: function() {
                        var e = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            a = this.wrapperEl,
                            r = !!e.nested;
                        if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), t.removeEventListener(i.move, this.onTouchMove, r), t.removeEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (o.touch) {
                                var n = !("onTouchStart" !== i.start || !o.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                            }(e.simulateTouch && !D.ios && !D.android || e.simulateTouch && !o.touch && D.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), t.removeEventListener("mousemove", this.onTouchMove, r), t.removeEventListener("mouseup", this.onTouchEnd, !1))
                        }(e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), e.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(D.ios || D.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var t = this.activeIndex,
                            e = this.initialized,
                            i = this.loopedSlides;
                        void 0 === i && (i = 0);
                        var s = this.params,
                            a = this.$el,
                            r = s.breakpoints;
                        if (r && (!r || 0 !== Object.keys(r).length)) {
                            var o = this.getBreakpoint(r);
                            if (o && this.currentBreakpoint !== o) {
                                var l = o in r ? r[o] : void 0;
                                l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(t) {
                                    var e = l[t];
                                    void 0 !== e && (l[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
                                });
                                var h = l || this.originalParams,
                                    d = s.slidesPerColumn > 1,
                                    p = h.slidesPerColumn > 1;
                                d && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !d && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === h.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                                var u = h.direction && h.direction !== s.direction,
                                    c = s.loop && (h.slidesPerView !== s.slidesPerView || u);
                                u && e && this.changeDirection(), n.extend(this.params, h), n.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }), this.currentBreakpoint = o, c && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", h)
                            }
                        }
                    },
                    getBreakpoint: function(t) {
                        if (t) {
                            var i = !1,
                                s = Object.keys(t).map(function(t) {
                                    if ("string" == typeof t && 0 === t.indexOf("@")) {
                                        var i = parseFloat(t.substr(1));
                                        return {
                                            value: e.innerHeight * i,
                                            point: t
                                        }
                                    }
                                    return {
                                        value: t,
                                        point: t
                                    }
                                });
                            s.sort(function(t, e) {
                                return parseInt(t.value, 10) - parseInt(e.value, 10)
                            });
                            for (var a = 0; a < s.length; a += 1) {
                                var r = s[a],
                                    n = r.point;
                                r.value <= e.innerWidth && (i = n)
                            }
                            return i || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        var t = this.params,
                            e = this.isLocked,
                            i = this.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function() {
                        var t = this.classNames,
                            e = this.params,
                            i = this.rtl,
                            s = this.$el,
                            a = [];
                        a.push("initialized"), a.push(e.direction), e.freeMode && a.push("free-mode"), e.autoHeight && a.push("autoheight"), i && a.push("rtl"), e.slidesPerColumn > 1 && (a.push("multirow"), "column" === e.slidesPerColumnFill && a.push("multirow-column")), D.android && a.push("android"), D.ios && a.push("ios"), e.cssMode && a.push("css-mode"), a.forEach(function(i) {
                            t.push(e.containerModifierClass + i)
                        }), s.addClass(t.join(" "))
                    },
                    removeClasses: function() {
                        var t = this.$el,
                            e = this.classNames;
                        t.removeClass(e.join(" "))
                    }
                },
                images: {
                    loadImage: function(t, i, s, a, r, n) {
                        var o;

                        function l() {
                            n && n()
                        }
                        t.complete && r ? l() : i ? ((o = new e.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                    },
                    preloadImages: function() {
                        var t = this;

                        function e() {
                            null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                        }
                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var s = t.imagesToLoad[i];
                            t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e)
                        }
                    }
                }
            },
            F = {},
            N = function(t) {
                function e() {
                    for (var i, a, r, l = [], h = arguments.length; h--;) l[h] = arguments[h];
                    1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), t.call(this, r), Object.keys($).forEach(function(t) {
                        Object.keys($[t]).forEach(function(i) {
                            e.prototype[i] || (e.prototype[i] = $[t][i])
                        })
                    });
                    var d = this;
                    void 0 === d.modules && (d.modules = {}), Object.keys(d.modules).forEach(function(t) {
                        var e = d.modules[t];
                        if (e.params) {
                            var i = Object.keys(e.params)[0],
                                s = e.params[i];
                            if ("object" != typeof s || null === s) return;
                            if (!(i in r && "enabled" in s)) return;
                            !0 === r[i] && (r[i] = {
                                enabled: !0
                            }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                                enabled: !1
                            })
                        }
                    });
                    var p = n.extend({}, R);
                    d.useModulesParams(p), d.params = n.extend({}, p, F, r), d.originalParams = n.extend({}, d.params), d.passedParams = n.extend({}, r), d.$ = s;
                    var u = s(d.params.el);
                    if (a = u[0]) {
                        if (u.length > 1) {
                            var c = [];
                            return u.each(function(t, i) {
                                var s = n.extend({}, r, {
                                    el: i
                                });
                                c.push(new e(s))
                            }), c
                        }
                        var f, m, v;
                        return a.swiper = d, u.data("swiper", d), a && a.shadowRoot && a.shadowRoot.querySelector ? (f = s(a.shadowRoot.querySelector("." + d.params.wrapperClass))).children = function(t) {
                            return u.children(t)
                        } : f = u.children("." + d.params.wrapperClass), n.extend(d, {
                            $el: u,
                            el: a,
                            $wrapperEl: f,
                            wrapperEl: f[0],
                            classNames: [],
                            slides: s(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === d.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === d.params.direction
                            },
                            rtl: "rtl" === a.dir.toLowerCase() || "rtl" === u.css("direction"),
                            rtlTranslate: "horizontal" === d.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === u.css("direction")),
                            wrongRTL: "-webkit-box" === f.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: d.params.allowSlideNext,
                            allowSlidePrev: d.params.allowSlidePrev,
                            touchEvents: (m = ["touchstart", "touchmove", "touchend", "touchcancel"], v = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (v = ["pointerdown", "pointermove", "pointerup"]), d.touchEventsTouch = {
                                start: m[0],
                                move: m[1],
                                end: m[2],
                                cancel: m[3]
                            }, d.touchEventsDesktop = {
                                start: v[0],
                                move: v[1],
                                end: v[2]
                            }, o.touch || !d.params.simulateTouch ? d.touchEventsTouch : d.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video, label",
                                lastClickTime: n.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: d.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), d.useModules(), d.params.init && d.init(), d
                    }
                }
                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return e.prototype.slidesPerViewDynamic = function() {
                    var t = this.params,
                        e = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        r = 1;
                    if (t.centeredSlides) {
                        for (var n, o = e[a].swiperSlideSize, l = a + 1; l < e.length; l += 1) e[l] && !n && (r += 1, (o += e[l].swiperSlideSize) > s && (n = !0));
                        for (var h = a - 1; h >= 0; h -= 1) e[h] && !n && (r += 1, (o += e[h].swiperSlideSize) > s && (n = !0))
                    } else
                        for (var d = a + 1; d < e.length; d += 1) i[d] - i[a] < s && (r += 1);
                    return r
                }, e.prototype.update = function() {
                    var t = this;
                    if (t && !t.destroyed) {
                        var e = t.snapGrid,
                            i = t.params;
                        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (s(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
                    }

                    function s() {
                        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                }, e.prototype.changeDirection = function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this.params.direction;
                    return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + t), this.params.direction = t, this.slides.each(function(e, i) {
                        "vertical" === t ? i.style.width = "" : i.style.height = ""
                    }), this.emit("changeDirection"), e && this.update(), this)
                }, e.prototype.init = function() {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }, e.prototype.destroy = function(t, e) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        r = i.$wrapperEl,
                        o = i.slides;
                    return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), e && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(t) {
                        i.off(t)
                    }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null)
                }, e.extendDefaults = function(t) {
                    n.extend(F, t)
                }, i.extendedDefaults.get = function() {
                    return F
                }, i.defaults.get = function() {
                    return R
                }, i.Class.get = function() {
                    return t
                }, i.$.get = function() {
                    return s
                }, Object.defineProperties(e, i), e
            }(l),
            B = {
                name: "device",
                proto: {
                    device: D
                },
                static: {
                    device: D
                }
            },
            X = {
                name: "support",
                proto: {
                    support: o
                },
                static: {
                    support: o
                }
            },
            Y = function() {
                return {
                    isEdge: !!e.navigator.userAgent.match(/Edge/g),
                    isSafari: (t = e.navigator.userAgent.toLowerCase(), t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                };
                var t
            }(),
            G = {
                name: "browser",
                proto: {
                    browser: Y
                },
                static: {
                    browser: Y
                }
            },
            H = {
                name: "resize",
                create: function() {
                    var t = this;
                    n.extend(t, {
                        resize: {
                            resizeHandler: function() {
                                t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                t && !t.destroyed && t.initialized && t.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        e.addEventListener("resize", this.resize.resizeHandler), e.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        e.removeEventListener("resize", this.resize.resizeHandler), e.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            V = {
                func: e.MutationObserver || e.WebkitMutationObserver,
                attach: function(t, i) {
                    void 0 === i && (i = {});
                    var s = this,
                        a = new(0, V.func)(function(t) {
                            if (1 !== t.length) {
                                var i = function() {
                                    s.emit("observerUpdate", t[0])
                                };
                                e.requestAnimationFrame ? e.requestAnimationFrame(i) : e.setTimeout(i, 0)
                            } else s.emit("observerUpdate", t[0])
                        });
                    a.observe(t, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), s.observer.observers.push(a)
                },
                init: function() {
                    if (o.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    this.observer.observers.forEach(function(t) {
                        t.disconnect()
                    }), this.observer.observers = []
                }
            },
            W = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function() {
                    n.extend(this, {
                        observer: {
                            init: V.init.bind(this),
                            attach: V.attach.bind(this),
                            destroy: V.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            },
            j = {
                update: function(t) {
                    var e = this,
                        i = e.params,
                        s = i.slidesPerView,
                        a = i.slidesPerGroup,
                        r = i.centeredSlides,
                        o = e.params.virtual,
                        l = o.addSlidesBefore,
                        h = o.addSlidesAfter,
                        d = e.virtual,
                        p = d.from,
                        u = d.to,
                        c = d.slides,
                        f = d.slidesGrid,
                        m = d.renderSlide,
                        v = d.offset;
                    e.updateActiveIndex();
                    var g, _, y, b = e.activeIndex || 0;
                    g = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (_ = Math.floor(s / 2) + a + l, y = Math.floor(s / 2) + a + h) : (_ = s + (a - 1) + l, y = a + h);
                    var w = Math.max((b || 0) - y, 0),
                        x = Math.min((b || 0) + _, c.length - 1),
                        T = (e.slidesGrid[w] || 0) - (e.slidesGrid[0] || 0);

                    function S() {
                        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
                    }
                    if (n.extend(e.virtual, {
                            from: w,
                            to: x,
                            offset: T,
                            slidesGrid: e.slidesGrid
                        }), p === w && u === x && !t) return e.slidesGrid !== f && T !== v && e.slides.css(g, T + "px"), void e.updateProgress();
                    if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                        offset: T,
                        from: w,
                        to: x,
                        slides: function() {
                            for (var t = [], e = w; e <= x; e += 1) t.push(c[e]);
                            return t
                        }()
                    }), void S();
                    var C = [],
                        E = [];
                    if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else
                        for (var P = p; P <= u; P += 1)(P < w || P > x) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
                    for (var M = 0; M < c.length; M += 1) M >= w && M <= x && (void 0 === u || t ? E.push(M) : (M > u && E.push(M), M < p && C.push(M)));
                    E.forEach(function(t) {
                        e.$wrapperEl.append(m(c[t], t))
                    }), C.sort(function(t, e) {
                        return e - t
                    }).forEach(function(t) {
                        e.$wrapperEl.prepend(m(c[t], t))
                    }), e.$wrapperEl.children(".swiper-slide").css(g, T + "px"), S()
                },
                renderSlide: function(t, e) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
                    var a = i.renderSlide ? s(i.renderSlide.call(this, t, e)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                    return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = a), a
                },
                appendSlide: function(t) {
                    if ("object" == typeof t && "length" in t)
                        for (var e = 0; e < t.length; e += 1) t[e] && this.virtual.slides.push(t[e]);
                    else this.virtual.slides.push(t);
                    this.virtual.update(!0)
                },
                prependSlide: function(t) {
                    var e = this.activeIndex,
                        i = e + 1,
                        s = 1;
                    if (Array.isArray(t)) {
                        for (var a = 0; a < t.length; a += 1) t[a] && this.virtual.slides.unshift(t[a]);
                        i = e + t.length, s = t.length
                    } else this.virtual.slides.unshift(t);
                    if (this.params.virtual.cache) {
                        var r = this.virtual.cache,
                            n = {};
                        Object.keys(r).forEach(function(t) {
                            var e = r[t],
                                i = e.attr("data-swiper-slide-index");
                            i && e.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(t, 10) + s] = e
                        }), this.virtual.cache = n
                    }
                    this.virtual.update(!0), this.slideTo(i, 0)
                },
                removeSlide: function(t) {
                    if (null != t) {
                        var e = this.activeIndex;
                        if (Array.isArray(t))
                            for (var i = t.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(t[i], 1), this.params.virtual.cache && delete this.virtual.cache[t[i]], t[i] < e && (e -= 1), e = Math.max(e, 0);
                        else this.virtual.slides.splice(t, 1), this.params.virtual.cache && delete this.virtual.cache[t], t < e && (e -= 1), e = Math.max(e, 0);
                        this.virtual.update(!0), this.slideTo(e, 0)
                    }
                },
                removeAllSlides: function() {
                    this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
                }
            },
            q = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function() {
                    n.extend(this, {
                        virtual: {
                            update: j.update.bind(this),
                            appendSlide: j.appendSlide.bind(this),
                            prependSlide: j.prependSlide.bind(this),
                            removeSlide: j.removeSlide.bind(this),
                            removeAllSlides: j.removeAllSlides.bind(this),
                            renderSlide: j.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            n.extend(this.params, t), n.extend(this.originalParams, t), this.params.initialSlide || this.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            U = {
                handle: function(i) {
                    var s = this.rtlTranslate,
                        a = i;
                    a.originalEvent && (a = a.originalEvent);
                    var r = a.keyCode || a.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
                    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || t.activeElement && t.activeElement.nodeName && ("input" === t.activeElement.nodeName.toLowerCase() || "textarea" === t.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                            var n = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var o = e.innerWidth,
                                l = e.innerHeight,
                                h = this.$el.offset();
                            s && (h.left -= this.$el[0].scrollLeft);
                            for (var d = [
                                    [h.left, h.top],
                                    [h.left + this.width, h.top],
                                    [h.left, h.top + this.height],
                                    [h.left + this.width, h.top + this.height]
                                ], p = 0; p < d.length; p += 1) {
                                var u = d[p];
                                u[0] >= 0 && u[0] <= o && u[1] >= 0 && u[1] <= l && (n = !0)
                            }
                            if (!n) return
                        }
                        this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
                    }
                },
                enable: function() {
                    this.keyboard.enabled || (s(t).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function() {
                    this.keyboard.enabled && (s(t).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            Z = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function() {
                    n.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: U.enable.bind(this),
                            disable: U.disable.bind(this),
                            handle: U.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function() {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            };
        var K = {
                lastScrollTime: n.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function() {
                    return e.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                        var e = "onwheel" in t;
                        if (!e) {
                            var i = t.createElement("div");
                            i.setAttribute("onwheel", "return;"), e = "function" == typeof i.onwheel
                        }
                        return !e && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") && (e = t.implementation.hasFeature("Events.wheel", "3.0")), e
                    }() ? "wheel" : "mousewheel"
                },
                normalize: function(t) {
                    var e = 0,
                        i = 0,
                        s = 0,
                        a = 0;
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), s = 10 * e, a = 10 * i, "deltaY" in t && (a = t.deltaY), "deltaX" in t && (s = t.deltaX), t.shiftKey && !s && (s = a, a = 0), (s || a) && t.deltaMode && (1 === t.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !e && (e = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                        spinX: e,
                        spinY: i,
                        pixelX: s,
                        pixelY: a
                    }
                },
                handleMouseEnter: function() {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function() {
                    this.mouseEntered = !1
                },
                handle: function(t) {
                    var e = t,
                        i = this,
                        a = i.params.mousewheel;
                    i.params.cssMode && e.preventDefault();
                    var r = i.$el;
                    if ("container" !== i.params.mousewheel.eventsTarged && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(e.target) && !a.releaseOnEdges) return !0;
                    e.originalEvent && (e = e.originalEvent);
                    var o = 0,
                        l = i.rtlTranslate ? -1 : 1,
                        h = K.normalize(e);
                    if (a.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
                            o = h.pixelX * l
                        } else {
                            if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
                            o = h.pixelY
                        }
                    else o = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * l : -h.pixelY;
                    if (0 === o) return !0;
                    if (a.invert && (o = -o), i.params.freeMode) {
                        var d = {
                                time: n.now(),
                                delta: Math.abs(o),
                                direction: Math.sign(o)
                            },
                            p = i.mousewheel.lastEventBeforeSnap,
                            u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;
                        if (!u) {
                            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                            var c = i.getTranslate() + o * a.sensitivity,
                                f = i.isBeginning,
                                m = i.isEnd;
                            if (c >= i.minTranslate() && (c = i.minTranslate()), c <= i.maxTranslate() && (c = i.maxTranslate()), i.setTransition(0), i.setTranslate(c), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!f && i.isBeginning || !m && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                                clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                                var v = i.mousewheel.recentWheelEvents;
                                v.length >= 15 && v.shift();
                                var g = v.length ? v[v.length - 1] : void 0,
                                    _ = v[0];
                                if (v.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) v.splice(0);
                                else if (v.length >= 15 && d.time - _.time < 500 && _.delta - d.delta >= 1 && d.delta <= 6) {
                                    var y = o > 0 ? .8 : .2;
                                    i.mousewheel.lastEventBeforeSnap = d, v.splice(0), i.mousewheel.timeout = n.nextTick(function() {
                                        i.slideToClosest(i.params.speed, !0, void 0, y)
                                    }, 0)
                                }
                                i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function() {
                                    i.mousewheel.lastEventBeforeSnap = d, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                                }, 500))
                            }
                            if (u || i.emit("scroll", e), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), c === i.minTranslate() || c === i.maxTranslate()) return !0
                        }
                    } else {
                        var b = {
                                time: n.now(),
                                delta: Math.abs(o),
                                direction: Math.sign(o),
                                raw: t
                            },
                            w = i.mousewheel.recentWheelEvents;
                        w.length >= 2 && w.shift();
                        var x = w.length ? w[w.length - 1] : void 0;
                        if (w.push(b), x ? (b.direction !== x.direction || b.delta > x.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                },
                animateSlider: function(t) {
                    return t.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (t.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", t.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", t.raw)), this.mousewheel.lastScrollTime = (new e.Date).getTime(), !1)
                },
                releaseScroll: function(t) {
                    var e = this.params.mousewheel;
                    if (t.direction < 0) {
                        if (this.isEnd && !this.params.loop && e.releaseOnEdges) return !0
                    } else if (this.isBeginning && !this.params.loop && e.releaseOnEdges) return !0;
                    return !1
                },
                enable: function() {
                    var t = K.event();
                    if (this.params.cssMode) return this.wrapperEl.removeEventListener(t, this.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(t, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                },
                disable: function() {
                    var t = K.event();
                    if (this.params.cssMode) return this.wrapperEl.addEventListener(t, this.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(t, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                }
            },
            Q = {
                update: function() {
                    var t = this.params.navigation;
                    if (!this.params.loop) {
                        var e = this.navigation,
                            i = e.$nextEl,
                            s = e.$prevEl;
                        s && s.length > 0 && (this.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass))
                    }
                },
                onPrevClick: function(t) {
                    t.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                },
                onNextClick: function(t) {
                    t.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                },
                init: function() {
                    var t, e, i = this.params.navigation;
                    (i.nextEl || i.prevEl) && (i.nextEl && (t = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && t.length > 1 && 1 === this.$el.find(i.nextEl).length && (t = this.$el.find(i.nextEl))), i.prevEl && (e = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && e.length > 1 && 1 === this.$el.find(i.prevEl).length && (e = this.$el.find(i.prevEl))), t && t.length > 0 && t.on("click", this.navigation.onNextClick), e && e.length > 0 && e.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                        $nextEl: t,
                        nextEl: t && t[0],
                        $prevEl: e,
                        prevEl: e && e[0]
                    }))
                },
                destroy: function() {
                    var t = this.navigation,
                        e = t.$nextEl,
                        i = t.$prevEl;
                    e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            J = {
                update: function() {
                    var t = this.rtl,
                        e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            r = this.pagination.$el,
                            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === e.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                            var o, l, h, d = this.pagination.bullets;
                            if (e.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (e.dynamicMainBullets + 4) + "px"), e.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > e.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = e.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, h = ((l = o + (Math.min(d.length, e.dynamicMainBullets) - 1)) + o) / 2), d.removeClass(e.bulletActiveClass + " " + e.bulletActiveClass + "-next " + e.bulletActiveClass + "-next-next " + e.bulletActiveClass + "-prev " + e.bulletActiveClass + "-prev-prev " + e.bulletActiveClass + "-main"), r.length > 1) d.each(function(t, a) {
                                var r = s(a),
                                    n = r.index();
                                n === i && r.addClass(e.bulletActiveClass), e.dynamicBullets && (n >= o && n <= l && r.addClass(e.bulletActiveClass + "-main"), n === o && r.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next"))
                            });
                            else {
                                var p = d.eq(i),
                                    u = p.index();
                                if (p.addClass(e.bulletActiveClass), e.dynamicBullets) {
                                    for (var c = d.eq(o), f = d.eq(l), m = o; m <= l; m += 1) d.eq(m).addClass(e.bulletActiveClass + "-main");
                                    if (this.params.loop)
                                        if (u >= d.length - e.dynamicMainBullets) {
                                            for (var v = e.dynamicMainBullets; v >= 0; v -= 1) d.eq(d.length - v).addClass(e.bulletActiveClass + "-main");
                                            d.eq(d.length - e.dynamicMainBullets - 1).addClass(e.bulletActiveClass + "-prev")
                                        } else c.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), f.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next");
                                    else c.prev().addClass(e.bulletActiveClass + "-prev").prev().addClass(e.bulletActiveClass + "-prev-prev"), f.next().addClass(e.bulletActiveClass + "-next").next().addClass(e.bulletActiveClass + "-next-next")
                                }
                            }
                            if (e.dynamicBullets) {
                                var g = Math.min(d.length, e.dynamicMainBullets + 4),
                                    _ = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - h * this.pagination.bulletSize,
                                    y = t ? "right" : "left";
                                d.css(this.isHorizontal() ? y : "top", _ + "px")
                            }
                        }
                        if ("fraction" === e.type && (r.find("." + e.currentClass).text(e.formatFractionCurrent(i + 1)), r.find("." + e.totalClass).text(e.formatFractionTotal(n))), "progressbar" === e.type) {
                            var b;
                            b = e.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                            var w = (i + 1) / n,
                                x = 1,
                                T = 1;
                            "horizontal" === b ? x = w : T = w, r.find("." + e.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed)
                        }
                        "custom" === e.type && e.renderCustom ? (r.html(e.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)
                    }
                },
                render: function() {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            s = "";
                        if ("bullets" === t.type) {
                            for (var a = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) t.renderBullet ? s += t.renderBullet.call(this, r, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(s), this.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function() {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el) {
                        var i = s(e.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && 1 === t.$el.find(e.el).length && (i = t.$el.find(e.el)), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", "." + e.bulletClass, function(e) {
                            e.preventDefault();
                            var i = s(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                        }), n.extend(t.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.pagination.$el;
                        e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass)
                    }
                }
            },
            tt = {
                setTranslate: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.rtlTranslate,
                            i = this.progress,
                            s = t.dragSize,
                            a = t.trackSize,
                            r = t.$dragEl,
                            n = t.$el,
                            o = this.params.scrollbar,
                            l = s,
                            h = (a - s) * i;
                        e ? (h = -h) > 0 ? (l = s - h, h = 0) : -h + s > a && (l = a + h) : h < 0 ? (l = s + h, h = 0) : h + s > a && (l = a - h), this.isHorizontal() ? (r.transform("translate3d(" + h + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + h + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                            n[0].style.opacity = 0, n.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(t) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
                },
                updateSize: function() {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = t.$dragEl,
                            i = t.$el;
                        e[0].style.width = "", e[0].style.height = "";
                        var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            r = this.size / this.virtualSize,
                            o = r * (a / this.size);
                        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? e[0].style.width = s + "px" : e[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(t, {
                            trackSize: a,
                            divider: r,
                            moveDivider: o,
                            dragSize: s
                        }), t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                getPointerPosition: function(t) {
                    return this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
                },
                setDragPosition: function(t) {
                    var e, i = this.scrollbar,
                        s = this.rtlTranslate,
                        a = i.$el,
                        r = i.dragSize,
                        n = i.trackSize,
                        o = i.dragStartPos;
                    e = (i.getPointerPosition(t) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), e = Math.max(Math.min(e, 1), 0), s && (e = 1 - e);
                    var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * e;
                    this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function(t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el,
                        r = i.$dragEl;
                    this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = t.target === r[0] || t.target === r ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(t), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), e.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", t)
                },
                onDragMove: function(t) {
                    var e = this.scrollbar,
                        i = this.$wrapperEl,
                        s = e.$el,
                        a = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", t))
                },
                onDragEnd: function(t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), e.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function() {
                        a.css("opacity", 0), a.transition(400)
                    }, 1e3)), this.emit("scrollbarDragEnd", t), e.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            i = this.touchEventsTouch,
                            s = this.touchEventsDesktop,
                            a = this.params,
                            r = e.$el[0],
                            n = !(!o.passiveListener || !a.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!o.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), t.addEventListener(s.move, this.scrollbar.onDragMove, n), t.addEventListener(s.end, this.scrollbar.onDragEnd, l))
                    }
                },
                disableDraggable: function() {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            i = this.touchEventsTouch,
                            s = this.touchEventsDesktop,
                            a = this.params,
                            r = e.$el[0],
                            n = !(!o.passiveListener || !a.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            l = !(!o.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), t.removeEventListener(s.move, this.scrollbar.onDragMove, n), t.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
                    }
                },
                init: function() {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.$el,
                            i = this.params.scrollbar,
                            a = s(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === e.find(i.el).length && (a = e.find(i.el));
                        var r = a.find("." + this.params.scrollbar.dragClass);
                        0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(t, {
                            $el: a,
                            el: a[0],
                            $dragEl: r,
                            dragEl: r[0]
                        }), i.draggable && t.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            },
            et = {
                setTransform: function(t, e) {
                    var i = this.rtl,
                        a = s(t),
                        r = i ? -1 : 1,
                        n = a.attr("data-swiper-parallax") || "0",
                        o = a.attr("data-swiper-parallax-x"),
                        l = a.attr("data-swiper-parallax-y"),
                        h = a.attr("data-swiper-parallax-scale"),
                        d = a.attr("data-swiper-parallax-opacity");
                    if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * e * r + "%" : o * e * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * e + "%" : l * e + "px", null != d) {
                        var p = d - (d - 1) * (1 - Math.abs(e));
                        a[0].style.opacity = p
                    }
                    if (null == h) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                    else {
                        var u = h - (h - 1) * (1 - Math.abs(e));
                        a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
                    }
                },
                setTranslate: function() {
                    var t = this,
                        e = t.$el,
                        i = t.slides,
                        a = t.progress,
                        r = t.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, i) {
                        t.parallax.setTransform(i, a)
                    }), i.each(function(e, i) {
                        var n = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(e / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, i) {
                            t.parallax.setTransform(i, n)
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = this.params.speed);
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e, i) {
                        var a = s(i),
                            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), a.transition(r)
                    })
                }
            },
            it = {
                getDistanceBetweenTouches: function(t) {
                    if (t.targetTouches.length < 2) return 1;
                    var e = t.targetTouches[0].pageX,
                        i = t.targetTouches[0].pageY,
                        s = t.targetTouches[1].pageX,
                        a = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - e, 2) + Math.pow(a - i, 2))
                },
                onGestureStart: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        a = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, a.scaleStart = it.getDistanceBetweenTouches(t)
                    }
                    a.$slideEl && a.$slideEl.length || (a.$slideEl = s(t.target).closest("." + this.params.slideClass), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent("." + e.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
                },
                onGestureChange: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!o.gestures) {
                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, s.scaleMove = it.getDistanceBetweenTouches(t)
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = t.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < e.minRatio && (i.scale = e.minRatio + 1 - Math.pow(e.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(t) {
                    var e = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!o.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !D.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), e.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
                },
                onTouchStart: function(t) {
                    var e = this.zoom,
                        i = e.gesture,
                        s = e.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (D.android && t.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(t) {
                    var e = this.zoom,
                        i = e.gesture,
                        s = e.image,
                        a = e.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                        var r = s.width * e.scale,
                            o = s.height * e.scale;
                        if (!(r < i.slideWidth && o < i.slideHeight)) {
                            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !s.isMoved && !e.isScaling) {
                                if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                            }
                            t.preventDefault(), t.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var t = this.zoom,
                        e = t.gesture,
                        i = t.image,
                        s = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var a = 300,
                            r = 300,
                            n = s.x * a,
                            o = i.currentX + n,
                            l = s.y * r,
                            h = i.currentY + l;
                        0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((h - i.currentY) / s.y));
                        var d = Math.max(a, r);
                        i.currentX = o, i.currentY = h;
                        var p = i.width * t.scale,
                            u = i.height * t.scale;
                        i.minX = Math.min(e.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(e.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), e.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var t = this.zoom,
                        e = t.gesture;
                    e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0)
                },
                toggle: function(t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e.in(t)
                },
                in: function(t) {
                    var e, i, s, a, r, n, o, l, h, d, p, u, c, f, m, v, g = this.zoom,
                        _ = this.params.zoom,
                        y = g.gesture,
                        b = g.image;
                    (y.$slideEl || (y.$slideEl = this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), y.$imageWrapEl = y.$imageEl.parent("." + _.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + _.zoomedSlideClass), void 0 === b.touchesStart.x && t ? (e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (e = b.touchesStart.x, i = b.touchesStart.y), g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || _.maxRatio, g.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || _.maxRatio, t ? (m = y.$slideEl[0].offsetWidth, v = y.$slideEl[0].offsetHeight, s = y.$slideEl.offset().left + m / 2 - e, a = y.$slideEl.offset().top + v / 2 - i, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, h = o * g.scale, d = l * g.scale, c = -(p = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(v / 2 - d / 2, 0)), (r = s * g.scale) < p && (r = p), r > c && (r = c), (n = a * g.scale) < u && (n = u), n > f && (n = f)) : (r = 0, n = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
                },
                out: function() {
                    var t = this.zoom,
                        e = this.params.zoom,
                        i = t.gesture;
                    i.$slideEl || (i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + e.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function() {
                    var t = this.zoom;
                    if (!t.enabled) {
                        t.enabled = !0;
                        var e = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            },
                            i = !o.passiveListener || {
                                passive: !1,
                                capture: !0
                            },
                            s = "." + this.params.slideClass;
                        o.gestures ? (this.$wrapperEl.on("gesturestart", s, t.onGestureStart, e), this.$wrapperEl.on("gesturechange", s, t.onGestureChange, e), this.$wrapperEl.on("gestureend", s, t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, t.onGestureStart, e), this.$wrapperEl.on(this.touchEvents.move, s, t.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, t.onGestureEnd, e), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, t.onGestureEnd, e)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, i)
                    }
                },
                disable: function() {
                    var t = this.zoom;
                    if (t.enabled) {
                        this.zoom.enabled = !1;
                        var e = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            },
                            i = !o.passiveListener || {
                                passive: !1,
                                capture: !0
                            },
                            s = "." + this.params.slideClass;
                        o.gestures ? (this.$wrapperEl.off("gesturestart", s, t.onGestureStart, e), this.$wrapperEl.off("gesturechange", s, t.onGestureChange, e), this.$wrapperEl.off("gestureend", s, t.onGestureEnd, e)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, t.onGestureStart, e), this.$wrapperEl.off(this.touchEvents.move, s, t.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, t.onGestureEnd, e), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, t.onGestureEnd, e)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, i)
                    }
                }
            },
            st = {
                loadInSlide: function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this,
                        a = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                        !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(t, n) {
                            var o = s(n);
                            o.addClass(a.loadingClass);
                            var l = o.attr("data-background"),
                                h = o.attr("data-src"),
                                d = o.attr("data-srcset"),
                                p = o.attr("data-sizes");
                            i.loadImage(o[0], h || l, d, p, !1, function() {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), h && (o.attr("src", h), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && e) {
                                        var t = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(i.params.slideDuplicateClass)) {
                                            var s = i.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(s.index(), !1)
                                        } else {
                                            var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                            i.lazy.loadInSlide(n.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", r[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                                }
                            }), i.emit("lazyImageLoad", r[0], o[0])
                        })
                    }
                },
                load: function() {
                    var t = this,
                        e = t.$wrapperEl,
                        i = t.params,
                        a = t.slides,
                        r = t.activeIndex,
                        n = t.virtual && i.virtual.enabled,
                        o = i.lazy,
                        l = i.slidesPerView;

                    function h(t) {
                        if (n) {
                            if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0
                        } else if (a[t]) return !0;
                        return !1
                    }

                    function d(t) {
                        return n ? s(t).attr("data-swiper-slide-index") : s(t).index()
                    }
                    if ("auto" === l && (l = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility) e.children("." + i.slideVisibleClass).each(function(e, i) {
                        var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                        t.lazy.loadInSlide(a)
                    });
                    else if (l > 1)
                        for (var p = r; p < r + l; p += 1) h(p) && t.lazy.loadInSlide(p);
                    else t.lazy.loadInSlide(r);
                    if (o.loadPrevNext)
                        if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                            for (var u = o.loadPrevNextAmount, c = l, f = Math.min(r + c + Math.max(u, c), a.length), m = Math.max(r - Math.max(c, u), 0), v = r + l; v < f; v += 1) h(v) && t.lazy.loadInSlide(v);
                            for (var g = m; g < r; g += 1) h(g) && t.lazy.loadInSlide(g)
                        } else {
                            var _ = e.children("." + i.slideNextClass);
                            _.length > 0 && t.lazy.loadInSlide(d(_));
                            var y = e.children("." + i.slidePrevClass);
                            y.length > 0 && t.lazy.loadInSlide(d(y))
                        }
                }
            },
            at = {
                LinearSpline: function(t, e) {
                    var i, s, a, r, n, o = function(t, e) {
                        for (s = -1, i = t.length; i - s > 1;) t[a = i + s >> 1] <= e ? s = a : i = a;
                        return i
                    };
                    return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function(t) {
                        return t ? (n = o(this.x, t), r = n - 1, (t - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                    }, this
                },
                getInterpolateFunction: function(t) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new at.LinearSpline(this.slidesGrid, t.slidesGrid) : new at.LinearSpline(this.snapGrid, t.snapGrid))
                },
                setTranslate: function(t, e) {
                    var i, s, a = this,
                        r = a.controller.control;

                    function n(t) {
                        var e = a.rtlTranslate ? -a.translate : a.translate;
                        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(t), s = -a.controller.spline.interpolate(-e)), s && "container" !== a.params.controller.by || (i = (t.maxTranslate() - t.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (e - a.minTranslate()) * i + t.minTranslate()), a.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, a), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (Array.isArray(r))
                        for (var o = 0; o < r.length; o += 1) r[o] !== e && r[o] instanceof N && n(r[o]);
                    else r instanceof N && e !== r && n(r)
                },
                setTransition: function(t, e) {
                    var i, s = this,
                        a = s.controller.control;

                    function r(e) {
                        e.setTransition(t, s), 0 !== t && (e.transitionStart(), e.params.autoHeight && n.nextTick(function() {
                            e.updateAutoHeight()
                        }), e.$wrapperEl.transitionEnd(function() {
                            a && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd())
                        }))
                    }
                    if (Array.isArray(a))
                        for (i = 0; i < a.length; i += 1) a[i] !== e && a[i] instanceof N && r(a[i]);
                    else a instanceof N && e !== a && r(a)
                }
            },
            rt = {
                makeElFocusable: function(t) {
                    return t.attr("tabIndex", "0"), t
                },
                addElRole: function(t, e) {
                    return t.attr("role", e), t
                },
                addElLabel: function(t, e) {
                    return t.attr("aria-label", e), t
                },
                disableEl: function(t) {
                    return t.attr("aria-disabled", !0), t
                },
                enableEl: function(t) {
                    return t.attr("aria-disabled", !1), t
                },
                onEnterKey: function(t) {
                    var e = this.params.a11y;
                    if (13 === t.keyCode) {
                        var i = s(t.target);
                        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                    }
                },
                notify: function(t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""), e.html(t))
                },
                updateNavigation: function() {
                    if (!this.params.loop && this.navigation) {
                        var t = this.navigation,
                            e = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), e && e.length > 0 && (this.isEnd ? this.a11y.disableEl(e) : this.a11y.enableEl(e))
                    }
                },
                updatePagination: function() {
                    var t = this,
                        e = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, a) {
                        var r = s(a);
                        t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, e.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                    })
                },
                init: function() {
                    this.$el.append(this.a11y.liveRegion);
                    var t, e, i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function() {
                    var t, e;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl), t && t.off("keydown", this.a11y.onEnterKey), e && e.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            nt = {
                init: function() {
                    if (this.params.history) {
                        if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                        var t = this.history;
                        t.initialized = !0, t.paths = nt.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    this.history.paths = nt.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function() {
                    var t = e.location.pathname.slice(1).split("/").filter(function(t) {
                            return "" !== t
                        }),
                        i = t.length;
                    return {
                        key: t[i - 2],
                        value: t[i - 1]
                    }
                },
                setHistory: function(t, i) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var s = this.slides.eq(i),
                            a = nt.slugify(s.attr("data-history"));
                        e.location.pathname.includes(t) || (a = t + "/" + a);
                        var r = e.history.state;
                        r && r.value === a || (this.params.history.replaceState ? e.history.replaceState({
                            value: a
                        }, null, a) : e.history.pushState({
                            value: a
                        }, null, a))
                    }
                },
                slugify: function(t) {
                    return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(t, e, i) {
                    if (e)
                        for (var s = 0, a = this.slides.length; s < a; s += 1) {
                            var r = this.slides.eq(s);
                            if (nt.slugify(r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
                                var n = r.index();
                                this.slideTo(n, t, i)
                            }
                        } else this.slideTo(0, t, i)
                }
            },
            ot = {
                onHashCange: function() {
                    var e = t.location.hash.replace("#", "");
                    if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                        if (void 0 === i) return;
                        this.slideTo(i)
                    }
                },
                setHash: function() {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var i = this.slides.eq(this.activeIndex),
                                s = i.attr("data-hash") || i.attr("data-history");
                            t.location.hash = s || ""
                        }
                },
                init: function() {
                    if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var i = t.location.hash.replace("#", "");
                        if (i)
                            for (var a = 0, r = this.slides.length; a < r; a += 1) {
                                var n = this.slides.eq(a);
                                if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                    var o = n.index();
                                    this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                                }
                            }
                        this.params.hashNavigation.watchState && s(e).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    this.params.hashNavigation.watchState && s(e).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            lt = {
                run: function() {
                    var t = this,
                        e = t.slides.eq(t.activeIndex),
                        i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = n.nextTick(function() {
                        t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), t.params.cssMode && t.autoplay.running && t.autoplay.run()
                    }, i)
                },
                start: function() {
                    return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
                },
                stop: function() {
                    return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
                },
                pause: function(t) {
                    this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== t && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                }
            },
            ht = {
                setTranslate: function() {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) {
                        var i = this.slides.eq(e),
                            s = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (s -= this.translate);
                        var a = 0;
                        this.isHorizontal() || (a = s, s = 0);
                        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: r
                        }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                    }
                },
                setTransition: function(t) {
                    var e = this,
                        i = e.slides,
                        s = e.$wrapperEl;
                    if (i.transition(t), e.params.virtualTranslate && 0 !== t) {
                        var a = !1;
                        i.transitionEnd(function() {
                            if (!a && e && !e.destroyed) {
                                a = !0, e.animating = !1;
                                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) s.trigger(t[i])
                            }
                        })
                    }
                }
            },
            dt = {
                setTranslate: function() {
                    var t, e = this.$el,
                        i = this.$wrapperEl,
                        a = this.slides,
                        r = this.width,
                        n = this.height,
                        o = this.rtlTranslate,
                        l = this.size,
                        h = this.params.cubeEffect,
                        d = this.isHorizontal(),
                        p = this.virtual && this.params.virtual.enabled,
                        u = 0;
                    h.shadow && (d ? (0 === (t = i.find(".swiper-cube-shadow")).length && (t = s('<div class="swiper-cube-shadow"></div>'), i.append(t)), t.css({
                        height: r + "px"
                    })) : 0 === (t = e.find(".swiper-cube-shadow")).length && (t = s('<div class="swiper-cube-shadow"></div>'), e.append(t)));
                    for (var c = 0; c < a.length; c += 1) {
                        var f = a.eq(c),
                            m = c;
                        p && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                        var v = 90 * m,
                            g = Math.floor(v / 360);
                        o && (v = -v, g = Math.floor(-v / 360));
                        var _ = Math.max(Math.min(f[0].progress, 1), -1),
                            y = 0,
                            b = 0,
                            w = 0;
                        m % 4 == 0 ? (y = 4 * -g * l, w = 0) : (m - 1) % 4 == 0 ? (y = 0, w = 4 * -g * l) : (m - 2) % 4 == 0 ? (y = l + 4 * g * l, w = l) : (m - 3) % 4 == 0 && (y = -l, w = 3 * l + 4 * l * g), o && (y = -y), d || (b = y, y = 0);
                        var x = "rotateX(" + (d ? 0 : -v) + "deg) rotateY(" + (d ? v : 0) + "deg) translate3d(" + y + "px, " + b + "px, " + w + "px)";
                        if (_ <= 1 && _ > -1 && (u = 90 * m + 90 * _, o && (u = 90 * -m - 90 * _)), f.transform(x), h.slideShadows) {
                            var T = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                                S = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                            0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), f.append(T)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), f.append(S)), T.length && (T[0].style.opacity = Math.max(-_, 0)), S.length && (S[0].style.opacity = Math.max(_, 0))
                        }
                    }
                    if (i.css({
                            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                            "transform-origin": "50% 50% -" + l / 2 + "px"
                        }), h.shadow)
                        if (d) t.transform("translate3d(0px, " + (r / 2 + h.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.shadowScale + ")");
                        else {
                            var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                                E = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                                P = h.shadowScale,
                                M = h.shadowScale / E,
                                k = h.shadowOffset;
                            t.transform("scale3d(" + P + ", 1, " + M + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / M + "px) rotateX(-90deg)")
                        }
                    var O = Y.isSafari || Y.isUiWebView ? -l / 2 : 0;
                    i.transform("translate3d(0px,0," + O + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
                },
                setTransition: function(t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
                }
            },
            pt = {
                setTranslate: function() {
                    for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var a = t.eq(i),
                            r = a[0].progress;
                        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                        var n = -180 * r,
                            o = 0,
                            l = -a[0].swiperSlideOffset,
                            h = 0;
                        if (this.isHorizontal() ? e && (n = -n) : (h = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, this.params.flipEffect.slideShadows) {
                            var d = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                            0 === d.length && (d = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), d.length && (d[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                        }
                        a.transform("translate3d(" + l + "px, " + h + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                    }
                },
                setTransition: function(t) {
                    var e = this,
                        i = e.slides,
                        s = e.activeIndex,
                        a = e.$wrapperEl;
                    if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
                        var r = !1;
                        i.eq(s).transitionEnd(function() {
                            if (!r && e && !e.destroyed) {
                                r = !0, e.animating = !1;
                                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) a.trigger(t[i])
                            }
                        })
                    }
                }
            },
            ut = {
                setTranslate: function() {
                    for (var t = this.width, e = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), h = this.translate, d = l ? t / 2 - h : e / 2 - h, p = l ? n.rotate : -n.rotate, u = n.depth, c = 0, f = i.length; c < f; c += 1) {
                        var m = i.eq(c),
                            v = r[c],
                            g = (d - m[0].swiperSlideOffset - v / 2) / v * n.modifier,
                            _ = l ? p * g : 0,
                            y = l ? 0 : p * g,
                            b = -u * Math.abs(g),
                            w = n.stretch;
                        "string" == typeof w && -1 !== w.indexOf("%") && (w = parseFloat(n.stretch) / 100 * v);
                        var x = l ? 0 : w * g,
                            T = l ? w * g : 0;
                        Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(_) < .001 && (_ = 0), Math.abs(y) < .001 && (y = 0);
                        var S = "translate3d(" + T + "px," + x + "px," + b + "px)  rotateX(" + y + "deg) rotateY(" + _ + "deg)";
                        if (m.transform(S), m[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                            var C = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                E = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(C)), 0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(E)), C.length && (C[0].style.opacity = g > 0 ? g : 0), E.length && (E[0].style.opacity = -g > 0 ? -g : 0)
                        }
                    }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
                },
                setTransition: function(t) {
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                }
            },
            ct = {
                init: function() {
                    var t = this.params.thumbs,
                        e = this.constructor;
                    t.swiper instanceof e ? (this.thumbs.swiper = t.swiper, n.extend(this.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), n.extend(this.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : n.isObject(t.swiper) && (this.thumbs.swiper = new e(n.extend({}, t.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                },
                onThumbClick: function() {
                    var t = this.thumbs.swiper;
                    if (t) {
                        var e = t.clickedIndex,
                            i = t.clickedSlide;
                        if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == e)) {
                            var a;
                            if (a = t.params.loop ? parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10) : e, this.params.loop) {
                                var r = this.activeIndex;
                                this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                                var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                    o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                                a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                            }
                            this.slideTo(a)
                        }
                    }
                },
                update: function(t) {
                    var e = this.thumbs.swiper;
                    if (e) {
                        var i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView;
                        if (this.realIndex !== e.realIndex) {
                            var s, a = e.activeIndex;
                            if (e.params.loop) {
                                e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                                var r = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                    n = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                                s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                            } else s = this.realIndex;
                            e.visibleSlidesIndexes && e.visibleSlidesIndexes.indexOf(s) < 0 && (e.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), e.slideTo(s, t ? 0 : void 0))
                        }
                        var o = 1,
                            l = this.params.thumbs.slideThumbActiveClass;
                        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), e.slides.removeClass(l), e.params.loop || e.params.virtual && e.params.virtual.enabled)
                            for (var h = 0; h < o; h += 1) e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(l);
                        else
                            for (var d = 0; d < o; d += 1) e.slides.eq(this.realIndex + d).addClass(l)
                    }
                }
            },
            ft = [B, X, G, H, W, q, Z, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    n.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: K.enable.bind(this),
                            disable: K.disable.bind(this),
                            handle: K.handle.bind(this),
                            handleMouseEnter: K.handleMouseEnter.bind(this),
                            handleMouseLeave: K.handleMouseLeave.bind(this),
                            animateSlider: K.animateSlider.bind(this),
                            releaseScroll: K.releaseScroll.bind(this),
                            lastScrollTime: n.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: []
                        }
                    })
                },
                on: {
                    init: function() {
                        !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function() {
                        this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    n.extend(this, {
                        navigation: {
                            init: Q.init.bind(this),
                            update: Q.update.bind(this),
                            destroy: Q.destroy.bind(this),
                            onNextClick: Q.onNextClick.bind(this),
                            onPrevClick: Q.onPrevClick.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.navigation.init(), this.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(t) {
                        var e, i = this.navigation,
                            a = i.$nextEl,
                            r = i.$prevEl;
                        !this.params.navigation.hideOnClick || s(t.target).is(r) || s(t.target).is(a) || (a ? e = a.hasClass(this.params.navigation.hiddenClass) : r && (e = r.hasClass(this.params.navigation.hiddenClass)), !0 === e ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                    }
                }
            }, {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(t) {
                            return t
                        },
                        formatFractionTotal: function(t) {
                            return t
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    n.extend(this, {
                        pagination: {
                            init: J.init.bind(this),
                            render: J.render.bind(this),
                            update: J.update.bind(this),
                            destroy: J.destroy.bind(this),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function() {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function() {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function() {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function() {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(t) {
                        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(t.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                    }
                }
            }, {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function() {
                    n.extend(this, {
                        scrollbar: {
                            init: tt.init.bind(this),
                            destroy: tt.destroy.bind(this),
                            updateSize: tt.updateSize.bind(this),
                            setTranslate: tt.setTranslate.bind(this),
                            setTransition: tt.setTransition.bind(this),
                            enableDraggable: tt.enableDraggable.bind(this),
                            disableDraggable: tt.disableDraggable.bind(this),
                            setDragPosition: tt.setDragPosition.bind(this),
                            getPointerPosition: tt.getPointerPosition.bind(this),
                            onDragStart: tt.onDragStart.bind(this),
                            onDragMove: tt.onDragMove.bind(this),
                            onDragEnd: tt.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(t) {
                        this.scrollbar.setTransition(t)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            }, {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    n.extend(this, {
                        parallax: {
                            setTransform: et.setTransform.bind(this),
                            setTranslate: et.setTranslate.bind(this),
                            setTransition: et.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    init: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        this.params.parallax.enabled && this.parallax.setTranslate()
                    },
                    setTransition: function(t) {
                        this.params.parallax.enabled && this.parallax.setTransition(t)
                    }
                }
            }, {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var t = this,
                        e = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                        e[i] = it[i].bind(t)
                    }), n.extend(t, {
                        zoom: e
                    });
                    var i = 1;
                    Object.defineProperty(t.zoom, "scale", {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            if (i !== e) {
                                var s = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                                    a = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                                t.emit("zoomChange", e, s, a)
                            }
                            i = e
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(t) {
                        this.zoom.enabled && this.zoom.onTouchStart(t)
                    },
                    touchEnd: function(t) {
                        this.zoom.enabled && this.zoom.onTouchEnd(t)
                    },
                    doubleTap: function(t) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
                    },
                    transitionEnd: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    },
                    slideChange: function() {
                        this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                    }
                }
            }, {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    n.extend(this, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: st.load.bind(this),
                            loadInSlide: st.loadInSlide.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                    },
                    init: function() {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                    },
                    scroll: function() {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                    },
                    resize: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        this.params.lazy.enabled && this.lazy.load()
                    },
                    transitionStart: function() {
                        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                    },
                    transitionEnd: function() {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                    },
                    slideChange: function() {
                        this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                    }
                }
            }, {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    n.extend(this, {
                        controller: {
                            control: this.params.controller.control,
                            getInterpolateFunction: at.getInterpolateFunction.bind(this),
                            setTranslate: at.setTranslate.bind(this),
                            setTransition: at.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    update: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    resize: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    observerUpdate: function() {
                        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                    },
                    setTranslate: function(t, e) {
                        this.controller.control && this.controller.setTranslate(t, e)
                    },
                    setTransition: function(t, e) {
                        this.controller.control && this.controller.setTransition(t, e)
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var t = this;
                    n.extend(t, {
                        a11y: {
                            liveRegion: s('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }), Object.keys(rt).forEach(function(e) {
                        t.a11y[e] = rt[e].bind(t)
                    })
                },
                on: {
                    init: function() {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        this.params.a11y.enabled && this.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        this.params.a11y.enabled && this.a11y.updatePagination()
                    },
                    destroy: function() {
                        this.params.a11y.enabled && this.a11y.destroy()
                    }
                }
            }, {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    n.extend(this, {
                        history: {
                            init: nt.init.bind(this),
                            setHistory: nt.setHistory.bind(this),
                            setHistoryPopState: nt.setHistoryPopState.bind(this),
                            scrollToSlide: nt.scrollToSlide.bind(this),
                            destroy: nt.destroy.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.history.enabled && this.history.init()
                    },
                    destroy: function() {
                        this.params.history.enabled && this.history.destroy()
                    },
                    transitionEnd: function() {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                    },
                    slideChange: function() {
                        this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                    }
                }
            }, {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    n.extend(this, {
                        hashNavigation: {
                            initialized: !1,
                            init: ot.init.bind(this),
                            destroy: ot.destroy.bind(this),
                            setHash: ot.setHash.bind(this),
                            onHashCange: ot.onHashCange.bind(this)
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.init()
                    },
                    destroy: function() {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        this.hashNavigation.initialized && this.hashNavigation.setHash()
                    },
                    slideChange: function() {
                        this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                    }
                }
            }, {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function() {
                    var t = this;
                    n.extend(t, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: lt.run.bind(t),
                            start: lt.start.bind(t),
                            stop: lt.stop.bind(t),
                            pause: lt.pause.bind(t),
                            onVisibilityChange: function() {
                                "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
                            },
                            onTransitionEnd: function(e) {
                                t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                    },
                    beforeTransitionStart: function(t, e) {
                        this.autoplay.running && (e || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    touchEnd: function() {
                        this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                    },
                    destroy: function() {
                        this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                    }
                }
            }, {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    n.extend(this, {
                        fadeEffect: {
                            setTranslate: ht.setTranslate.bind(this),
                            setTransition: ht.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("fade" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            n.extend(this.params, t), n.extend(this.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate()
                    },
                    setTransition: function(t) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    n.extend(this, {
                        cubeEffect: {
                            setTranslate: dt.setTranslate.bind(this),
                            setTransition: dt.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("cube" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            n.extend(this.params, t), n.extend(this.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate()
                    },
                    setTransition: function(t) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    n.extend(this, {
                        flipEffect: {
                            setTranslate: pt.setTranslate.bind(this),
                            setTransition: pt.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        if ("flip" === this.params.effect) {
                            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            n.extend(this.params, t), n.extend(this.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        "flip" === this.params.effect && this.flipEffect.setTranslate()
                    },
                    setTransition: function(t) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(t)
                    }
                }
            }, {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    n.extend(this, {
                        coverflowEffect: {
                            setTranslate: ut.setTranslate.bind(this),
                            setTransition: ut.setTransition.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                    },
                    setTransition: function(t) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
                    }
                }
            }, {
                name: "thumbs",
                params: {
                    thumbs: {
                        multipleActiveThumbs: !0,
                        swiper: null,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-container-thumbs"
                    }
                },
                create: function() {
                    n.extend(this, {
                        thumbs: {
                            swiper: null,
                            init: ct.init.bind(this),
                            update: ct.update.bind(this),
                            onThumbClick: ct.onThumbClick.bind(this)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var t = this.params.thumbs;
                        t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                    },
                    slideChange: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    update: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    resize: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    observerUpdate: function() {
                        this.thumbs.swiper && this.thumbs.update()
                    },
                    setTransition: function(t) {
                        var e = this.thumbs.swiper;
                        e && e.setTransition(t)
                    },
                    beforeDestroy: function() {
                        var t = this.thumbs.swiper;
                        t && this.thumbs.swiperCreated && t && t.destroy()
                    }
                }
            }];
        return void 0 === N.use && (N.use = N.Class.use, N.installModule = N.Class.installModule), N.use(ft), N
    });