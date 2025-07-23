import { useState as Vt, useRef as tt, useCallback as I, useEffect as Sn } from "react";
var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function On(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var et = { exports: {} };
et.exports;
var kt;
function Cn() {
  return kt || (kt = 1, function(p, G) {
    var nt = 200, Y = "__lodash_hash_undefined__", g = 1, U = 2, P = 9007199254740991, h = "[object Arguments]", L = "[object Array]", K = "[object AsyncFunction]", y = "[object Boolean]", w = "[object Date]", m = "[object Error]", $ = "[object Function]", W = "[object GeneratorFunction]", O = "[object Map]", R = "[object Number]", _t = "[object Null]", j = "[object Object]", rt = "[object Promise]", yt = "[object Proxy]", it = "[object RegExp]", J = "[object Set]", at = "[object String]", f = "[object Symbol]", b = "[object Undefined]", vt = "[object WeakMap]", xt = "[object ArrayBuffer]", st = "[object DataView]", te = "[object Float32Array]", ee = "[object Float64Array]", ne = "[object Int8Array]", re = "[object Int16Array]", ie = "[object Int32Array]", ae = "[object Uint8Array]", se = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", fe = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, ce = /^\[object .+?Constructor\]$/, le = /^(?:0|[1-9]\d*)$/, a = {};
    a[te] = a[ee] = a[ne] = a[re] = a[ie] = a[ae] = a[se] = a[ue] = a[fe] = !0, a[h] = a[L] = a[xt] = a[y] = a[st] = a[w] = a[m] = a[$] = a[O] = a[R] = a[j] = a[it] = a[J] = a[at] = a[vt] = !1;
    var Et = typeof ht == "object" && ht && ht.Object === Object && ht, de = typeof self == "object" && self && self.Object === Object && self, C = Et || de || Function("return this")(), It = G && !G.nodeType && G, Pt = It && !0 && p && !p.nodeType && p, Lt = Pt && Pt.exports === It, Tt = Lt && Et.process, Rt = function() {
      try {
        return Tt && Tt.binding && Tt.binding("util");
      } catch {
      }
    }(), jt = Rt && Rt.isTypedArray;
    function pe(t, e) {
      for (var n = -1, r = t == null ? 0 : t.length, s = 0, i = []; ++n < r; ) {
        var o = t[n];
        e(o, n, t) && (i[s++] = o);
      }
      return i;
    }
    function ge(t, e) {
      for (var n = -1, r = e.length, s = t.length; ++n < r; )
        t[s + n] = e[n];
      return t;
    }
    function he(t, e) {
      for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
        if (e(t[n], n, t))
          return !0;
      return !1;
    }
    function _e(t, e) {
      for (var n = -1, r = Array(t); ++n < t; )
        r[n] = e(n);
      return r;
    }
    function ye(t) {
      return function(e) {
        return t(e);
      };
    }
    function ve(t, e) {
      return t.has(e);
    }
    function Te(t, e) {
      return t?.[e];
    }
    function be(t) {
      var e = -1, n = Array(t.size);
      return t.forEach(function(r, s) {
        n[++e] = [s, r];
      }), n;
    }
    function Ae(t, e) {
      return function(n) {
        return t(e(n));
      };
    }
    function we(t) {
      var e = -1, n = Array(t.size);
      return t.forEach(function(r) {
        n[++e] = r;
      }), n;
    }
    var me = Array.prototype, Se = Function.prototype, ut = Object.prototype, bt = C["__core-js_shared__"], Dt = Se.toString, S = ut.hasOwnProperty, Mt = function() {
      var t = /[^.]+$/.exec(bt && bt.keys && bt.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }(), zt = ut.toString, Oe = RegExp(
      "^" + Dt.call(S).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Gt = Lt ? C.Buffer : void 0, ft = C.Symbol, Ut = C.Uint8Array, Bt = ut.propertyIsEnumerable, Ce = me.splice, B = ft ? ft.toStringTag : void 0, Ft = Object.getOwnPropertySymbols, xe = Gt ? Gt.isBuffer : void 0, Ee = Ae(Object.keys, Object), At = X(C, "DataView"), Z = X(C, "Map"), wt = X(C, "Promise"), mt = X(C, "Set"), St = X(C, "WeakMap"), Q = X(Object, "create"), Ie = q(At), Pe = q(Z), Le = q(wt), Re = q(mt), je = q(St), Ht = ft ? ft.prototype : void 0, Ot = Ht ? Ht.valueOf : void 0;
    function F(t) {
      var e = -1, n = t == null ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function De() {
      this.__data__ = Q ? Q(null) : {}, this.size = 0;
    }
    function Me(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }
    function ze(t) {
      var e = this.__data__;
      if (Q) {
        var n = e[t];
        return n === Y ? void 0 : n;
      }
      return S.call(e, t) ? e[t] : void 0;
    }
    function Ge(t) {
      var e = this.__data__;
      return Q ? e[t] !== void 0 : S.call(e, t);
    }
    function Ue(t, e) {
      var n = this.__data__;
      return this.size += this.has(t) ? 0 : 1, n[t] = Q && e === void 0 ? Y : e, this;
    }
    F.prototype.clear = De, F.prototype.delete = Me, F.prototype.get = ze, F.prototype.has = Ge, F.prototype.set = Ue;
    function x(t) {
      var e = -1, n = t == null ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function Be() {
      this.__data__ = [], this.size = 0;
    }
    function Fe(t) {
      var e = this.__data__, n = ct(e, t);
      if (n < 0)
        return !1;
      var r = e.length - 1;
      return n == r ? e.pop() : Ce.call(e, n, 1), --this.size, !0;
    }
    function He(t) {
      var e = this.__data__, n = ct(e, t);
      return n < 0 ? void 0 : e[n][1];
    }
    function qe(t) {
      return ct(this.__data__, t) > -1;
    }
    function Ne(t, e) {
      var n = this.__data__, r = ct(n, t);
      return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
    }
    x.prototype.clear = Be, x.prototype.delete = Fe, x.prototype.get = He, x.prototype.has = qe, x.prototype.set = Ne;
    function H(t) {
      var e = -1, n = t == null ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function Ke() {
      this.size = 0, this.__data__ = {
        hash: new F(),
        map: new (Z || x)(),
        string: new F()
      };
    }
    function $e(t) {
      var e = lt(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }
    function We(t) {
      return lt(this, t).get(t);
    }
    function Je(t) {
      return lt(this, t).has(t);
    }
    function Xe(t, e) {
      var n = lt(this, t), r = n.size;
      return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
    }
    H.prototype.clear = Ke, H.prototype.delete = $e, H.prototype.get = We, H.prototype.has = Je, H.prototype.set = Xe;
    function ot(t) {
      var e = -1, n = t == null ? 0 : t.length;
      for (this.__data__ = new H(); ++e < n; )
        this.add(t[e]);
    }
    function Ye(t) {
      return this.__data__.set(t, Y), this;
    }
    function Ze(t) {
      return this.__data__.has(t);
    }
    ot.prototype.add = ot.prototype.push = Ye, ot.prototype.has = Ze;
    function D(t) {
      var e = this.__data__ = new x(t);
      this.size = e.size;
    }
    function Qe() {
      this.__data__ = new x(), this.size = 0;
    }
    function Ve(t) {
      var e = this.__data__, n = e.delete(t);
      return this.size = e.size, n;
    }
    function ke(t) {
      return this.__data__.get(t);
    }
    function tn(t) {
      return this.__data__.has(t);
    }
    function en(t, e) {
      var n = this.__data__;
      if (n instanceof x) {
        var r = n.__data__;
        if (!Z || r.length < nt - 1)
          return r.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new H(r);
      }
      return n.set(t, e), this.size = n.size, this;
    }
    D.prototype.clear = Qe, D.prototype.delete = Ve, D.prototype.get = ke, D.prototype.has = tn, D.prototype.set = en;
    function nn(t, e) {
      var n = dt(t), r = !n && vn(t), s = !n && !r && Ct(t), i = !n && !r && !s && Zt(t), o = n || r || s || i, c = o ? _e(t.length, String) : [], l = c.length;
      for (var u in t)
        S.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
        (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
        pn(u, l))) && c.push(u);
      return c;
    }
    function ct(t, e) {
      for (var n = t.length; n--; )
        if (Wt(t[n][0], e))
          return n;
      return -1;
    }
    function rn(t, e, n) {
      var r = e(t);
      return dt(t) ? r : ge(r, n(t));
    }
    function V(t) {
      return t == null ? t === void 0 ? b : _t : B && B in Object(t) ? ln(t) : yn(t);
    }
    function qt(t) {
      return k(t) && V(t) == h;
    }
    function Nt(t, e, n, r, s) {
      return t === e ? !0 : t == null || e == null || !k(t) && !k(e) ? t !== t && e !== e : an(t, e, n, r, Nt, s);
    }
    function an(t, e, n, r, s, i) {
      var o = dt(t), c = dt(e), l = o ? L : M(t), u = c ? L : M(e);
      l = l == h ? j : l, u = u == h ? j : u;
      var _ = l == j, A = u == j, d = l == u;
      if (d && Ct(t)) {
        if (!Ct(e))
          return !1;
        o = !0, _ = !1;
      }
      if (d && !_)
        return i || (i = new D()), o || Zt(t) ? Kt(t, e, n, r, s, i) : on(t, e, l, n, r, s, i);
      if (!(n & g)) {
        var v = _ && S.call(t, "__wrapped__"), T = A && S.call(e, "__wrapped__");
        if (v || T) {
          var z = v ? t.value() : t, E = T ? e.value() : e;
          return i || (i = new D()), s(z, E, n, r, i);
        }
      }
      return d ? (i || (i = new D()), cn(t, e, n, r, s, i)) : !1;
    }
    function sn(t) {
      if (!Yt(t) || hn(t))
        return !1;
      var e = Jt(t) ? Oe : ce;
      return e.test(q(t));
    }
    function un(t) {
      return k(t) && Xt(t.length) && !!a[V(t)];
    }
    function fn(t) {
      if (!_n(t))
        return Ee(t);
      var e = [];
      for (var n in Object(t))
        S.call(t, n) && n != "constructor" && e.push(n);
      return e;
    }
    function Kt(t, e, n, r, s, i) {
      var o = n & g, c = t.length, l = e.length;
      if (c != l && !(o && l > c))
        return !1;
      var u = i.get(t);
      if (u && i.get(e))
        return u == e;
      var _ = -1, A = !0, d = n & U ? new ot() : void 0;
      for (i.set(t, e), i.set(e, t); ++_ < c; ) {
        var v = t[_], T = e[_];
        if (r)
          var z = o ? r(T, v, _, e, t, i) : r(v, T, _, t, e, i);
        if (z !== void 0) {
          if (z)
            continue;
          A = !1;
          break;
        }
        if (d) {
          if (!he(e, function(E, N) {
            if (!ve(d, N) && (v === E || s(v, E, n, r, i)))
              return d.push(N);
          })) {
            A = !1;
            break;
          }
        } else if (!(v === T || s(v, T, n, r, i))) {
          A = !1;
          break;
        }
      }
      return i.delete(t), i.delete(e), A;
    }
    function on(t, e, n, r, s, i, o) {
      switch (n) {
        case st:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          t = t.buffer, e = e.buffer;
        case xt:
          return !(t.byteLength != e.byteLength || !i(new Ut(t), new Ut(e)));
        case y:
        case w:
        case R:
          return Wt(+t, +e);
        case m:
          return t.name == e.name && t.message == e.message;
        case it:
        case at:
          return t == e + "";
        case O:
          var c = be;
        case J:
          var l = r & g;
          if (c || (c = we), t.size != e.size && !l)
            return !1;
          var u = o.get(t);
          if (u)
            return u == e;
          r |= U, o.set(t, e);
          var _ = Kt(c(t), c(e), r, s, i, o);
          return o.delete(t), _;
        case f:
          if (Ot)
            return Ot.call(t) == Ot.call(e);
      }
      return !1;
    }
    function cn(t, e, n, r, s, i) {
      var o = n & g, c = $t(t), l = c.length, u = $t(e), _ = u.length;
      if (l != _ && !o)
        return !1;
      for (var A = l; A--; ) {
        var d = c[A];
        if (!(o ? d in e : S.call(e, d)))
          return !1;
      }
      var v = i.get(t);
      if (v && i.get(e))
        return v == e;
      var T = !0;
      i.set(t, e), i.set(e, t);
      for (var z = o; ++A < l; ) {
        d = c[A];
        var E = t[d], N = e[d];
        if (r)
          var Qt = o ? r(N, E, d, e, t, i) : r(E, N, d, t, e, i);
        if (!(Qt === void 0 ? E === N || s(E, N, n, r, i) : Qt)) {
          T = !1;
          break;
        }
        z || (z = d == "constructor");
      }
      if (T && !z) {
        var pt = t.constructor, gt = e.constructor;
        pt != gt && "constructor" in t && "constructor" in e && !(typeof pt == "function" && pt instanceof pt && typeof gt == "function" && gt instanceof gt) && (T = !1);
      }
      return i.delete(t), i.delete(e), T;
    }
    function $t(t) {
      return rn(t, An, dn);
    }
    function lt(t, e) {
      var n = t.__data__;
      return gn(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
    }
    function X(t, e) {
      var n = Te(t, e);
      return sn(n) ? n : void 0;
    }
    function ln(t) {
      var e = S.call(t, B), n = t[B];
      try {
        t[B] = void 0;
        var r = !0;
      } catch {
      }
      var s = zt.call(t);
      return r && (e ? t[B] = n : delete t[B]), s;
    }
    var dn = Ft ? function(t) {
      return t == null ? [] : (t = Object(t), pe(Ft(t), function(e) {
        return Bt.call(t, e);
      }));
    } : wn, M = V;
    (At && M(new At(new ArrayBuffer(1))) != st || Z && M(new Z()) != O || wt && M(wt.resolve()) != rt || mt && M(new mt()) != J || St && M(new St()) != vt) && (M = function(t) {
      var e = V(t), n = e == j ? t.constructor : void 0, r = n ? q(n) : "";
      if (r)
        switch (r) {
          case Ie:
            return st;
          case Pe:
            return O;
          case Le:
            return rt;
          case Re:
            return J;
          case je:
            return vt;
        }
      return e;
    });
    function pn(t, e) {
      return e = e ?? P, !!e && (typeof t == "number" || le.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    function gn(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
    }
    function hn(t) {
      return !!Mt && Mt in t;
    }
    function _n(t) {
      var e = t && t.constructor, n = typeof e == "function" && e.prototype || ut;
      return t === n;
    }
    function yn(t) {
      return zt.call(t);
    }
    function q(t) {
      if (t != null) {
        try {
          return Dt.call(t);
        } catch {
        }
        try {
          return t + "";
        } catch {
        }
      }
      return "";
    }
    function Wt(t, e) {
      return t === e || t !== t && e !== e;
    }
    var vn = qt(/* @__PURE__ */ function() {
      return arguments;
    }()) ? qt : function(t) {
      return k(t) && S.call(t, "callee") && !Bt.call(t, "callee");
    }, dt = Array.isArray;
    function Tn(t) {
      return t != null && Xt(t.length) && !Jt(t);
    }
    var Ct = xe || mn;
    function bn(t, e) {
      return Nt(t, e);
    }
    function Jt(t) {
      if (!Yt(t))
        return !1;
      var e = V(t);
      return e == $ || e == W || e == K || e == yt;
    }
    function Xt(t) {
      return typeof t == "number" && t > -1 && t % 1 == 0 && t <= P;
    }
    function Yt(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    function k(t) {
      return t != null && typeof t == "object";
    }
    var Zt = jt ? ye(jt) : un;
    function An(t) {
      return Tn(t) ? nn(t) : fn(t);
    }
    function wn() {
      return [];
    }
    function mn() {
      return !1;
    }
    p.exports = bn;
  }(et, et.exports)), et.exports;
}
var xn = Cn();
const En = /* @__PURE__ */ On(xn);
function Pn(p, G = {}) {
  const nt = G.commitDelay ?? 500, Y = G.historyLimit ?? 50, g = G.onCommit, [U, P] = Vt(p), [h, L] = Vt(p), K = tt([]), y = tt([]), w = tt([]), m = tt(null), $ = tt(!1), W = (f, b) => {
    f.push(b), f.length > Y && f.shift();
  }, O = I(() => {
    if ($.current) return;
    const f = K.current;
    if (f.length === 0) return;
    const b = f[f.length - 1];
    En(U, b) || (W(y.current, U), w.current = [], P(b), g?.(b)), K.current = [];
  }, [U, g]), R = I(() => {
    m.current && clearTimeout(m.current), O();
  }, [O]);
  Sn(() => (m.current && clearTimeout(m.current), m.current = setTimeout(O, nt), () => {
    m.current && clearTimeout(m.current);
  }), [h, nt, O]);
  const _t = I((f) => {
    K.current.push(f), L(f);
  }, []), j = I(() => {
    if (R(), y.current.length === 0) return;
    const f = y.current.pop();
    W(w.current, h), P(f), L(f), g?.(f);
  }, [R, h, g]), rt = I(() => {
    if (R(), w.current.length === 0) return;
    const f = w.current.pop();
    W(y.current, h), P(f), L(f), g?.(f);
  }, [R, h, g]), yt = I(() => {
    $.current = !0;
  }, []), it = I(() => {
    $.current = !1;
  }, []), J = I(
    (f) => {
      const b = f ?? p;
      y.current = [], w.current = [], K.current = [], P(b), L(b), g?.(b);
    },
    [p, g]
  ), at = I(() => {
    y.current.length !== 0 && (y.current.pop(), W(y.current, h), P(h), w.current = [], g?.(h));
  }, [h, g]);
  return {
    /** Current state shown in the view (may be uncommitted) */
    state: h,
    /** Last committed state (stable undo/redo point) */
    committed: U,
    /** Function to update state (debounced commit) */
    set: _t,
    /** Undo to previous committed state */
    undo: j,
    /** Redo to next committed state */
    redo: rt,
    /** Immediately commit pending state changes */
    flush: R,
    /** Pause automatic committing of pending changes */
    pause: yt,
    /** Resume automatic committing after pause */
    resume: it,
    /** Reset all stacks and state to initial or provided value */
    reset: J,
    /** Merge last two commits into one (batch update) */
    mergeLast: at,
    /** Whether undo is currently possible */
    canUndo: y.current.length > 0,
    /** Whether redo is currently possible */
    canRedo: w.current.length > 0
  };
}
export {
  Pn as useUndoRedo
};
