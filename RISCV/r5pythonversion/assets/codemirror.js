/*! venus 27-03-2020 */

! function(e, t) {
 "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.CodeMirror = t()
}(this, function() {
 "use strict";
 var e = navigator.userAgent,
  t = navigator.platform,
  g = /gecko\/\d/i.test(e),
  r = /MSIE \d/.test(e),
  n = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
  i = /Edge\/(\d+)/.exec(e),
  w = r || n || i,
  C = w && (r ? document.documentMode || 6 : +(i || n)[1]),
  b = !i && /WebKit\//.test(e),
  o = b && /Qt\/\d+\.\d+/.test(e),
  l = !i && /Chrome\//.test(e),
  v = /Opera\//.test(e),
  a = /Apple Computer/.test(navigator.vendor),
  s = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
  u = /PhantomJS/.test(e),
  c = !i && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
  h = /Android/.test(e),
  f = c || h || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
  x = c || /Mac/.test(t),
  d = /\bCrOS\b/.test(e),
  p = /win/i.test(t),
  m = v && e.match(/Version\/(\d*\.\d*)/);
 m && (m = Number(m[1])), m && 15 <= m && (b = !(v = !1));
 var y = x && (o || v && (null == m || m < 12.11)),
  S = g || w && 9 <= C;

 function L(e) {
  return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
 }
 var k, M = function(e, t) {
  var r = e.className,
   n = L(t).exec(r);
  if (n) {
   var i = r.slice(n.index + n[0].length);
   e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
  }
 };

 function T(e) {
  for (var t = e.childNodes.length; 0 < t; --t) e.removeChild(e.firstChild);
  return e
 }

 function N(e, t) {
  return T(e).appendChild(t)
 }

 function O(e, t, r, n) {
  var i = document.createElement(e);
  if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));
  else if (t)
   for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
  return i
 }

 function A(e, t, r, n) {
  var i = O(e, t, r, n);
  return i.setAttribute("role", "presentation"), i
 }

 function W(e, t) {
  if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
  do {
   if (11 == t.nodeType && (t = t.host), t == e) return !0
  } while (t = t.parentNode)
 }

 function D() {
  var t;
  try {
   t = document.activeElement
  } catch (e) {
   t = document.body || null
  }
  for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
  return t
 }

 function H(e, t) {
  var r = e.className;
  L(t).test(r) || (e.className += (r ? " " : "") + t)
 }

 function F(e, t) {
  for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !L(r[n]).test(t) && (t += " " + r[n]);
  return t
 }
 k = document.createRange ? function(e, t, r, n) {
  var i = document.createRange();
  return i.setEnd(n || e, r), i.setStart(e, t), i
 } : function(e, t, r) {
  var n = document.body.createTextRange();
  try {
   n.moveToElementText(e.parentNode)
  } catch (e) {
   return n
  }
  return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n
 };
 var E = function(e) {
  e.select()
 };

 function P(e) {
  var t = Array.prototype.slice.call(arguments, 1);
  return function() {
   return e.apply(null, t)
  }
 }

 function z(e, t, r) {
  for (var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
  return t
 }

 function I(e, t, r, n, i) {
  null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
  for (var o = n || 0, l = i || 0;;) {
   var s = e.indexOf("\t", o);
   if (s < 0 || t <= s) return l + (t - o);
   l += s - o, l += r - l % r, o = s + 1
  }
 }
 c ? E = function(e) {
  e.selectionStart = 0, e.selectionEnd = e.value.length
 } : w && (E = function(e) {
  try {
   e.select()
  } catch (e) {}
 });
 var R = function() {
  this.id = null
 };

 function B(e, t) {
  for (var r = 0; r < e.length; ++r)
   if (e[r] == t) return r;
  return -1
 }
 R.prototype.set = function(e, t) {
  clearTimeout(this.id), this.id = setTimeout(t, e)
 };
 var G = 30,
  U = {
   toString: function() {
    return "CodeMirror.Pass"
   }
  },
  V = {
   scroll: !1
  },
  K = {
   origin: "*mouse"
  },
  j = {
   origin: "+move"
  };

 function X(e, t, r) {
  for (var n = 0, i = 0;;) {
   var o = e.indexOf("\t", n); - 1 == o && (o = e.length);
   var l = o - n;
   if (o == e.length || t <= i + l) return n + Math.min(l, t - i);
   if (i += o - n, n = o + 1, t <= (i += r - i % r)) return n
  }
 }
 var _ = [""];

 function Y(e) {
  for (; _.length <= e;) _.push(q(_) + " ");
  return _[e]
 }

 function q(e) {
  return e[e.length - 1]
 }

 function $(e, t) {
  for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
  return r
 }

 function Z() {}

 function Q(e, t) {
  var r;
  return r = Object.create ? Object.create(e) : (Z.prototype = e, new Z), t && z(t, r), r
 }
 var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

 function ee(e) {
  return /\w/.test(e) || "" < e && (e.toUpperCase() != e.toLowerCase() || J.test(e))
 }

 function te(e, t) {
  return t ? !!(-1 < t.source.indexOf("\\w") && ee(e)) || t.test(e) : ee(e)
 }

 function re(e) {
  for (var t in e)
   if (e.hasOwnProperty(t) && e[t]) return !1;
  return !0
 }
 var ne = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

 function ie(e) {
  return 768 <= e.charCodeAt(0) && ne.test(e)
 }

 function oe(e, t, r) {
  for (;
   (r < 0 ? 0 < t : t < e.length) && ie(e.charAt(t));) t += r;
  return t
 }

 function le(e, t, r) {
  for (;;) {
   if (Math.abs(t - r) <= 1) return e(t) ? t : r;
   var n = Math.floor((t + r) / 2);
   e(n) ? r = n : t = n
  }
 }

 function se(e, t, r) {
  var n = this;
  this.input = r, n.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), n.scrollbarFiller.setAttribute("cm-not-content", "true"), n.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), n.gutterFiller.setAttribute("cm-not-content", "true"), n.lineDiv = A("div", null, "CodeMirror-code"), n.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), n.cursorDiv = O("div", null, "CodeMirror-cursors"), n.measure = O("div", null, "CodeMirror-measure"), n.lineMeasure = O("div", null, "CodeMirror-measure"), n.lineSpace = A("div", [n.measure, n.lineMeasure, n.selectionDiv, n.cursorDiv, n.lineDiv], null, "position: relative; outline: none");
  var i = A("div", [n.lineSpace], "CodeMirror-lines");
  n.mover = O("div", [i], null, "position: relative"), n.sizer = O("div", [n.mover], "CodeMirror-sizer"), n.sizerWidth = null, n.heightForcer = O("div", null, null, "position: absolute; height: " + G + "px; width: 1px;"), n.gutters = O("div", null, "CodeMirror-gutters"), n.lineGutter = null, n.scroller = O("div", [n.sizer, n.heightForcer, n.gutters], "CodeMirror-scroll"), n.scroller.setAttribute("tabIndex", "-1"), n.wrapper = O("div", [n.scrollbarFiller, n.gutterFiller, n.scroller], "CodeMirror"), w && C < 8 && (n.gutters.style.zIndex = -1, n.scroller.style.paddingRight = 0), b || g && f || (n.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(n.wrapper) : e(n.wrapper)), n.viewFrom = n.viewTo = t.first, n.reportedViewFrom = n.reportedViewTo = t.first, n.view = [], n.renderedView = null, n.externalMeasured = null, n.viewOffset = 0, n.lastWrapHeight = n.lastWrapWidth = 0, n.updateLineNumbers = null, n.nativeBarWidth = n.barHeight = n.barWidth = 0, n.scrollbarsClipped = !1, n.lineNumWidth = n.lineNumInnerWidth = n.lineNumChars = null, n.alignWidgets = !1, n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.maxLine = null, n.maxLineLength = 0, n.maxLineChanged = !1, n.wheelDX = n.wheelDY = n.wheelStartX = n.wheelStartY = null, n.shift = !1, n.selForContextMenu = null, n.activeTouch = null, r.init(n)
 }

 function ae(e, t) {
  if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
  for (var r = e; !r.lines;)
   for (var n = 0;; ++n) {
    var i = r.children[n],
     o = i.chunkSize();
    if (t < o) {
     r = i;
     break
    }
    t -= o
   }
  return r.lines[t]
 }

 function ue(e, r, n) {
  var i = [],
   o = r.line;
  return e.iter(r.line, n.line + 1, function(e) {
   var t = e.text;
   o == n.line && (t = t.slice(0, n.ch)), o == r.line && (t = t.slice(r.ch)), i.push(t), ++o
  }), i
 }

 function ce(e, t, r) {
  var n = [];
  return e.iter(t, r, function(e) {
   n.push(e.text)
  }), n
 }

 function he(e, t) {
  var r = t - e.height;
  if (r)
   for (var n = e; n; n = n.parent) n.height += r
 }

 function fe(e) {
  if (null == e.parent) return null;
  for (var t = e.parent, r = B(t.lines, e), n = t.parent; n; n = (t = n).parent)
   for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
  return r + t.first
 }

 function de(e, t) {
  var r = e.first;
  e: do {
   for (var n = 0; n < e.children.length; ++n) {
    var i = e.children[n],
     o = i.height;
    if (t < o) {
     e = i;
     continue e
    }
    t -= o, r += i.chunkSize()
   }
   return r
  } while (!e.lines);
  for (var l = 0; l < e.lines.length; ++l) {
   var s = e.lines[l].height;
   if (t < s) break;
   t -= s
  }
  return r + l
 }

 function pe(e, t) {
  return t >= e.first && t < e.first + e.size
 }

 function ge(e, t) {
  return String(e.lineNumberFormatter(t + e.firstLineNumber))
 }

 function ve(e, t, r) {
  if (void 0 === r && (r = null), !(this instanceof ve)) return new ve(e, t, r);
  this.line = e, this.ch = t, this.sticky = r
 }

 function me(e, t) {
  return e.line - t.line || e.ch - t.ch
 }

 function ye(e, t) {
  return e.sticky == t.sticky && 0 == me(e, t)
 }

 function be(e) {
  return ve(e.line, e.ch)
 }

 function xe(e, t) {
  return me(e, t) < 0 ? t : e
 }

 function we(e, t) {
  return me(e, t) < 0 ? e : t
 }

 function Ce(e, t) {
  return Math.max(e.first, Math.min(t, e.first + e.size - 1))
 }

 function Se(e, t) {
  if (t.line < e.first) return ve(e.first, 0);
  var r, n, i, o = e.first + e.size - 1;
  return t.line > o ? ve(o, ae(e, o).text.length) : (n = ae(e, (r = t).line).text.length, null == (i = r.ch) || n < i ? ve(r.line, n) : i < 0 ? ve(r.line, 0) : r)
 }

 function Le(e, t) {
  for (var r = [], n = 0; n < t.length; n++) r[n] = Se(e, t[n]);
  return r
 }
 var ke = !1,
  Me = !1;

 function Te(e, t, r) {
  this.marker = e, this.from = t, this.to = r
 }

 function Ne(e, t) {
  if (e)
   for (var r = 0; r < e.length; ++r) {
    var n = e[r];
    if (n.marker == t) return n
   }
 }

 function Oe(e, t) {
  for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
  return r
 }

 function Ae(e, t) {
  if (t.full) return null;
  var r = pe(e, t.from.line) && ae(e, t.from.line).markedSpans,
   n = pe(e, t.to.line) && ae(e, t.to.line).markedSpans;
  if (!r && !n) return null;
  var i = t.from.ch,
   o = t.to.ch,
   l = 0 == me(t.from, t.to),
   s = function(e, t, r) {
    var n;
    if (e)
     for (var i = 0; i < e.length; ++i) {
      var o = e[i],
       l = o.marker;
      if (null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
       var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
       (n || (n = [])).push(new Te(l, o.from, s ? null : o.to))
      }
     }
    return n
   }(r, i, l),
   a = function(e, t, r) {
    var n;
    if (e)
     for (var i = 0; i < e.length; ++i) {
      var o = e[i],
       l = o.marker;
      if (null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
       var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
       (n || (n = [])).push(new Te(l, s ? null : o.from - t, null == o.to ? null : o.to - t))
      }
     }
    return n
   }(n, o, l),
   u = 1 == t.text.length,
   c = q(t.text).length + (u ? i : 0);
  if (s)
   for (var h = 0; h < s.length; ++h) {
    var f = s[h];
    if (null == f.to) {
     var d = Ne(a, f.marker);
     d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i
    }
   }
  if (a)
   for (var p = 0; p < a.length; ++p) {
    var g = a[p];
    if (null != g.to && (g.to += c), null == g.from) Ne(s, g.marker) || (g.from = c, u && (s || (s = [])).push(g));
    else g.from += c, u && (s || (s = [])).push(g)
   }
  s && (s = We(s)), a && a != s && (a = We(a));
  var v = [s];
  if (!u) {
   var m, y = t.text.length - 2;
   if (0 < y && s)
    for (var b = 0; b < s.length; ++b) null == s[b].to && (m || (m = [])).push(new Te(s[b].marker, null, null));
   for (var x = 0; x < y; ++x) v.push(m);
   v.push(a)
  }
  return v
 }

 function We(e) {
  for (var t = 0; t < e.length; ++t) {
   var r = e[t];
   null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1)
  }
  return e.length ? e : null
 }

 function De(e) {
  var t = e.markedSpans;
  if (t) {
   for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
   e.markedSpans = null
  }
 }

 function He(e, t) {
  if (t) {
   for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
   e.markedSpans = t
  }
 }

 function Fe(e) {
  return e.inclusiveLeft ? -1 : 0
 }

 function Ee(e) {
  return e.inclusiveRight ? 1 : 0
 }

 function Pe(e, t) {
  var r = e.lines.length - t.lines.length;
  if (0 != r) return r;
  var n = e.find(),
   i = t.find(),
   o = me(n.from, i.from) || Fe(e) - Fe(t);
  if (o) return -o;
  var l = me(n.to, i.to) || Ee(e) - Ee(t);
  return l || t.id - e.id
 }

 function ze(e, t) {
  var r, n = Me && e.markedSpans;
  if (n)
   for (var i = void 0, o = 0; o < n.length; ++o)(i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || Pe(r, i.marker) < 0) && (r = i.marker);
  return r
 }

 function Ie(e) {
  return ze(e, !0)
 }

 function Re(e) {
  return ze(e, !1)
 }

 function Be(e, t, r, n, i) {
  var o = ae(e, t),
   l = Me && o.markedSpans;
  if (l)
   for (var s = 0; s < l.length; ++s) {
    var a = l[s];
    if (a.marker.collapsed) {
     var u = a.marker.find(0),
      c = me(u.from, r) || Fe(a.marker) - Fe(i),
      h = me(u.to, n) || Ee(a.marker) - Ee(i);
     if (!(0 <= c && h <= 0 || c <= 0 && 0 <= h) && (c <= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? 0 <= me(u.to, r) : 0 < me(u.to, r)) || 0 <= c && (a.marker.inclusiveRight && i.inclusiveLeft ? me(u.from, n) <= 0 : me(u.from, n) < 0))) return !0
    }
   }
 }

 function Ge(e) {
  for (var t; t = Ie(e);) e = t.find(-1, !0).line;
  return e
 }

 function Ue(e, t) {
  var r = ae(e, t),
   n = Ge(r);
  return r == n ? t : fe(n)
 }

 function Ve(e, t) {
  if (t > e.lastLine()) return t;
  var r, n = ae(e, t);
  if (!Ke(e, n)) return t;
  for (; r = Re(n);) n = r.find(1, !0).line;
  return fe(n) + 1
 }

 function Ke(e, t) {
  var r = Me && t.markedSpans;
  if (r)
   for (var n = void 0, i = 0; i < r.length; ++i)
    if ((n = r[i]).marker.collapsed) {
     if (null == n.from) return !0;
     if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && je(e, t, n)) return !0
    }
 }

 function je(e, t, r) {
  if (null == r.to) {
   var n = r.marker.find(1, !0);
   return je(e, n.line, Ne(n.line.markedSpans, r.marker))
  }
  if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
  for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
   if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && je(e, t, i)) return !0
 }

 function Xe(e) {
  for (var t = 0, r = (e = Ge(e)).parent, n = 0; n < r.lines.length; ++n) {
   var i = r.lines[n];
   if (i == e) break;
   t += i.height
  }
  for (var o = r.parent; o; o = (r = o).parent)
   for (var l = 0; l < o.children.length; ++l) {
    var s = o.children[l];
    if (s == r) break;
    t += s.height
   }
  return t
 }

 function _e(e) {
  if (0 == e.height) return 0;
  for (var t, r = e.text.length, n = e; t = Ie(n);) {
   var i = t.find(0, !0);
   n = i.from.line, r += i.from.ch - i.to.ch
  }
  for (n = e; t = Re(n);) {
   var o = t.find(0, !0);
   r -= n.text.length - o.from.ch, r += (n = o.to.line).text.length - o.to.ch
  }
  return r
 }

 function Ye(e) {
  var r = e.display,
   t = e.doc;
  r.maxLine = ae(t, t.first), r.maxLineLength = _e(r.maxLine), r.maxLineChanged = !0, t.iter(function(e) {
   var t = _e(e);
   t > r.maxLineLength && (r.maxLineLength = t, r.maxLine = e)
  })
 }
 var qe = null;

 function $e(e, t, r) {
  var n;
  qe = null;
  for (var i = 0; i < e.length; ++i) {
   var o = e[i];
   if (o.from < t && o.to > t) return i;
   o.to == t && (o.from != o.to && "before" == r ? n = i : qe = i), o.from == t && (o.from != o.to && "before" != r ? n = i : qe = i)
  }
  return null != n ? n : qe
 }
 var Ze = function() {
  var z = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
   I = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
  var R = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
   B = /[stwN]/,
   G = /[LRr]/,
   U = /[Lb1n]/,
   V = /[1n]/;

  function K(e, t, r) {
   this.level = e, this.from = t, this.to = r
  }
  return function(e, t) {
   var r = "ltr" == t ? "L" : "R";
   if (0 == e.length || "ltr" == t && !R.test(e)) return !1;
   for (var n, i = e.length, o = [], l = 0; l < i; ++l) o.push((n = e.charCodeAt(l)) <= 247 ? z.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? I.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L");
   for (var s = 0, a = r; s < i; ++s) {
    var u = o[s];
    "m" == u ? o[s] = a : a = u
   }
   for (var c = 0, h = r; c < i; ++c) {
    var f = o[c];
    "1" == f && "r" == h ? o[c] = "n" : G.test(f) && "r" == (h = f) && (o[c] = "R")
   }
   for (var d = 1, p = o[0]; d < i - 1; ++d) {
    var g = o[d];
    "+" == g && "1" == p && "1" == o[d + 1] ? o[d] = "1" : "," != g || p != o[d + 1] || "1" != p && "n" != p || (o[d] = p), p = g
   }
   for (var v = 0; v < i; ++v) {
    var m = o[v];
    if ("," == m) o[v] = "N";
    else if ("%" == m) {
     var y = void 0;
     for (y = v + 1; y < i && "%" == o[y]; ++y);
     for (var b = v && "!" == o[v - 1] || y < i && "1" == o[y] ? "1" : "N", x = v; x < y; ++x) o[x] = b;
     v = y - 1
    }
   }
   for (var w = 0, C = r; w < i; ++w) {
    var S = o[w];
    "L" == C && "1" == S ? o[w] = "L" : G.test(S) && (C = S)
   }
   for (var L = 0; L < i; ++L)
    if (B.test(o[L])) {
     var k = void 0;
     for (k = L + 1; k < i && B.test(o[k]); ++k);
     for (var M = "L" == (L ? o[L - 1] : r), T = M == ("L" == (k < i ? o[k] : r)) ? M ? "L" : "R" : r, N = L; N < k; ++N) o[N] = T;
     L = k - 1
    } for (var O, A = [], W = 0; W < i;)
    if (U.test(o[W])) {
     var D = W;
     for (++W; W < i && U.test(o[W]); ++W);
     A.push(new K(0, D, W))
    } else {
     var H = W,
      F = A.length;
     for (++W; W < i && "L" != o[W]; ++W);
     for (var E = H; E < W;)
      if (V.test(o[E])) {
       H < E && A.splice(F, 0, new K(1, H, E));
       var P = E;
       for (++E; E < W && V.test(o[E]); ++E);
       A.splice(F, 0, new K(2, P, E)), H = E
      } else ++E;
     H < W && A.splice(F, 0, new K(1, H, W))
    } return 1 == A[0].level && (O = e.match(/^\s+/)) && (A[0].from = O[0].length, A.unshift(new K(0, 0, O[0].length))), 1 == q(A).level && (O = e.match(/\s+$/)) && (q(A).to -= O[0].length, A.push(new K(0, i - O[0].length, i))), "rtl" == t ? A.reverse() : A
  }
 }();

 function Qe(e, t) {
  var r = e.order;
  return null == r && (r = e.order = Ze(e.text, t)), r
 }

 function Je(e, t, r) {
  var n = oe(e.text, t + r, r);
  return n < 0 || n > e.text.length ? null : n
 }

 function et(e, t, r) {
  var n = Je(e, t.ch, r);
  return null == n ? null : new ve(t.line, n, r < 0 ? "after" : "before")
 }

 function tt(e, t, r, n, i) {
  if (e) {
   var o = Qe(r, t.doc.direction);
   if (o) {
    var l, s = i < 0 ? q(o) : o[0],
     a = i < 0 == (1 == s.level) ? "after" : "before";
    if (0 < s.level) {
     var u = Hr(t, r);
     l = i < 0 ? r.text.length - 1 : 0;
     var c = Fr(t, u, l).top;
     l = le(function(e) {
      return Fr(t, u, e).top == c
     }, i < 0 == (1 == s.level) ? s.from : s.to - 1, l), "before" == a && (l = Je(r, l, 1))
    } else l = i < 0 ? s.to : s.from;
    return new ve(n, l, a)
   }
  }
  return new ve(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after")
 }

 function rt(o, l, s, e) {
  var a = Qe(l, o.doc.direction);
  if (!a) return et(l, s, e);
  s.ch >= l.text.length ? (s.ch = l.text.length, s.sticky = "before") : s.ch <= 0 && (s.ch = 0, s.sticky = "after");
  var t = $e(a, s.ch, s.sticky),
   r = a[t];
  if ("ltr" == o.doc.direction && r.level % 2 == 0 && (0 < e ? r.to > s.ch : r.from < s.ch)) return et(l, s, e);
  var u, c = function(e, t) {
    return Je(l, e instanceof ve ? e.ch : e, t)
   },
   n = function(e) {
    return o.options.lineWrapping ? (u = u || Hr(o, l), i = Kr(t = o, r = l, Fr(t, n = u, e), "line").top, Zr(t, r, n, i)) : {
     begin: 0,
     end: l.text.length
    };
    var t, r, n, i
   },
   i = n("before" == s.sticky ? c(s, -1) : s.ch);
  if ("rtl" == o.doc.direction || 1 == r.level) {
   var h = 1 == r.level == e < 0,
    f = c(s, h ? 1 : -1);
   if (null != f && (h ? f <= r.to && f <= i.end : f >= r.from && f >= i.begin)) {
    var d = h ? "before" : "after";
    return new ve(s.line, f, d)
   }
  }
  var p = function(e, t, r) {
    for (var n = function(e, t) {
      return t ? new ve(s.line, c(e, 1), "before") : new ve(s.line, e, "after")
     }; 0 <= e && e < a.length; e += t) {
     var i = a[e],
      o = 0 < t == (1 != i.level),
      l = o ? r.begin : c(r.end, -1);
     if (i.from <= l && l < i.to) return n(l, o);
     if (l = o ? i.from : c(i.to, -1), r.begin <= l && l < r.end) return n(l, o)
    }
   },
   g = p(t + e, e, i);
  if (g) return g;
  var v = 0 < e ? i.end : c(i.begin, -1);
  return null == v || 0 < e && v == l.text.length || !(g = p(0 < e ? 0 : a.length - 1, e, n(v))) ? null : g
 }
 var nt = [],
  it = function(e, t, r) {
   if (e.addEventListener) e.addEventListener(t, r, !1);
   else if (e.attachEvent) e.attachEvent("on" + t, r);
   else {
    var n = e._handlers || (e._handlers = {});
    n[t] = (n[t] || nt).concat(r)
   }
  };

 function ot(e, t) {
  return e._handlers && e._handlers[t] || nt
 }

 function lt(e, t, r) {
  if (e.removeEventListener) e.removeEventListener(t, r, !1);
  else if (e.detachEvent) e.detachEvent("on" + t, r);
  else {
   var n = e._handlers,
    i = n && n[t];
   if (i) {
    var o = B(i, r); - 1 < o && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
   }
  }
 }

 function st(e, t) {
  var r = ot(e, t);
  if (r.length)
   for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
 }

 function at(e, t, r) {
  return "string" == typeof t && (t = {
   type: t,
   preventDefault: function() {
    this.defaultPrevented = !0
   }
  }), st(e, r || t.type, e, t), pt(t) || t.codemirrorIgnore
 }

 function ut(e) {
  var t = e._handlers && e._handlers.cursorActivity;
  if (t)
   for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) - 1 == B(r, t[n]) && r.push(t[n])
 }

 function ct(e, t) {
  return 0 < ot(e, t).length
 }

 function ht(e) {
  e.prototype.on = function(e, t) {
   it(this, e, t)
  }, e.prototype.off = function(e, t) {
   lt(this, e, t)
  }
 }

 function ft(e) {
  e.preventDefault ? e.preventDefault() : e.returnValue = !1
 }

 function dt(e) {
  e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
 }

 function pt(e) {
  return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
 }

 function gt(e) {
  ft(e), dt(e)
 }

 function vt(e) {
  return e.target || e.srcElement
 }

 function mt(e) {
  var t = e.which;
  return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), x && e.ctrlKey && 1 == t && (t = 3), t
 }
 var yt, bt, xt = function() {
  if (w && C < 9) return !1;
  var e = O("div");
  return "draggable" in e || "dragDrop" in e
 }();

 function wt(e) {
  if (null == yt) {
   var t = O("span", "​");
   N(e, O("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (yt = t.offsetWidth <= 1 && 2 < t.offsetHeight && !(w && C < 8))
  }
  var r = yt ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
  return r.setAttribute("cm-text", ""), r
 }

 function Ct(e) {
  if (null != bt) return bt;
  var t = N(e, document.createTextNode("AخA")),
   r = k(t, 0, 1).getBoundingClientRect(),
   n = k(t, 1, 2).getBoundingClientRect();
  return T(e), !(!r || r.left == r.right) && (bt = n.right - r.right < 3)
 }
 var St, Lt = 3 != "\n\nb".split(/\n/).length ? function(e) {
   for (var t = 0, r = [], n = e.length; t <= n;) {
    var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
    var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
     l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1)
   }
   return r
  } : function(e) {
   return e.split(/\r\n?|\n/)
  },
  kt = window.getSelection ? function(e) {
   try {
    return e.selectionStart != e.selectionEnd
   } catch (e) {
    return !1
   }
  } : function(e) {
   var t;
   try {
    t = e.ownerDocument.selection.createRange()
   } catch (e) {}
   return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
  },
  Mt = "oncopy" in (St = O("div")) || (St.setAttribute("oncopy", "return;"), "function" == typeof St.oncopy),
  Tt = null;
 var Nt = {},
  Ot = {};

 function At(e) {
  if ("string" == typeof e && Ot.hasOwnProperty(e)) e = Ot[e];
  else if (e && "string" == typeof e.name && Ot.hasOwnProperty(e.name)) {
   var t = Ot[e.name];
   "string" == typeof t && (t = {
    name: t
   }), (e = Q(t, e)).name = t.name
  } else {
   if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return At("application/xml");
   if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return At("application/json")
  }
  return "string" == typeof e ? {
   name: e
  } : e || {
   name: "null"
  }
 }

 function Wt(e, t) {
  t = At(t);
  var r = Nt[t.name];
  if (!r) return Wt(e, "text/plain");
  var n = r(e, t);
  if (Dt.hasOwnProperty(t.name)) {
   var i = Dt[t.name];
   for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o])
  }
  if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps)
   for (var l in t.modeProps) n[l] = t.modeProps[l];
  return n
 }
 var Dt = {};

 function Ht(e, t) {
  z(t, Dt.hasOwnProperty(e) ? Dt[e] : Dt[e] = {})
 }

 function Ft(e, t) {
  if (!0 === t) return t;
  if (e.copyState) return e.copyState(t);
  var r = {};
  for (var n in t) {
   var i = t[n];
   i instanceof Array && (i = i.concat([])), r[n] = i
  }
  return r
 }

 function Et(e, t) {
  for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e;) t = r.state, e = r.mode;
  return r || {
   mode: e,
   state: t
  }
 }

 function Pt(e, t, r) {
  return !e.startState || e.startState(t, r)
 }
 var zt = function(e, t, r) {
  this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r
 };
 zt.prototype.eol = function() {
  return this.pos >= this.string.length
 }, zt.prototype.sol = function() {
  return this.pos == this.lineStart
 }, zt.prototype.peek = function() {
  return this.string.charAt(this.pos) || void 0
 }, zt.prototype.next = function() {
  if (this.pos < this.string.length) return this.string.charAt(this.pos++)
 }, zt.prototype.eat = function(e) {
  var t = this.string.charAt(this.pos);
  if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
 }, zt.prototype.eatWhile = function(e) {
  for (var t = this.pos; this.eat(e););
  return this.pos > t
 }, zt.prototype.eatSpace = function() {
  for (var e = this.pos;
   /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
  return this.pos > e
 }, zt.prototype.skipToEnd = function() {
  this.pos = this.string.length
 }, zt.prototype.skipTo = function(e) {
  var t = this.string.indexOf(e, this.pos);
  if (-1 < t) return this.pos = t, !0
 }, zt.prototype.backUp = function(e) {
  this.pos -= e
 }, zt.prototype.column = function() {
  return this.lastColumnPos < this.start && (this.lastColumnValue = I(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
 }, zt.prototype.indentation = function() {
  return I(this.string, null, this.tabSize) - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
 }, zt.prototype.match = function(e, t, r) {
  if ("string" != typeof e) {
   var n = this.string.slice(this.pos).match(e);
   return n && 0 < n.index ? null : (n && !1 !== t && (this.pos += n[0].length), n)
  }
  var i = function(e) {
   return r ? e.toLowerCase() : e
  };
  if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
 }, zt.prototype.current = function() {
  return this.string.slice(this.start, this.pos)
 }, zt.prototype.hideFirstChars = function(e, t) {
  this.lineStart += e;
  try {
   return t()
  } finally {
   this.lineStart -= e
  }
 }, zt.prototype.lookAhead = function(e) {
  var t = this.lineOracle;
  return t && t.lookAhead(e)
 };
 var It = function(e, t) {
   this.state = e, this.lookAhead = t
  },
  Rt = function(e, t, r, n) {
   this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0
  };

 function Bt(t, r, n, e) {
  var a = [t.state.modeGen],
   i = {};
  qt(t, r.text, t.doc.mode, n, function(e, t) {
   return a.push(e, t)
  }, i, e);
  for (var o = n.state, l = function(e) {
    var o = t.state.overlays[e],
     l = 1,
     s = 0;
    n.state = !0, qt(t, r.text, o.mode, n, function(e, t) {
     for (var r = l; s < e;) {
      var n = a[l];
      e < n && a.splice(l, 1, e, a[l + 1], n), l += 2, s = Math.min(e, n)
     }
     if (t)
      if (o.opaque) a.splice(r, l - r, e, "overlay " + t), l = r + 2;
      else
       for (; r < l; r += 2) {
        var i = a[r + 1];
        a[r + 1] = (i ? i + " " : "") + "overlay " + t
       }
    }, i)
   }, s = 0; s < t.state.overlays.length; ++s) l(s);
  return n.state = o, {
   styles: a,
   classes: i.bgClass || i.textClass ? i : null
  }
 }

 function Gt(e, t, r) {
  if (!t.styles || t.styles[0] != e.state.modeGen) {
   var n = Ut(e, fe(t)),
    i = t.text.length > e.options.maxHighlightLength && Ft(e.doc.mode, n.state),
    o = Bt(e, t, n);
   i && (n.state = i), t.stateAfter = n.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
  }
  return t.styles
 }

 function Ut(r, n, e) {
  var t = r.doc,
   i = r.display;
  if (!t.mode.startState) return new Rt(t, !0, n);
  var o = function(e, t, r) {
    for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; l < s; --s) {
     if (s <= o.first) return o.first;
     var a = ae(o, s - 1),
      u = a.stateAfter;
     if (u && (!r || s + (u instanceof It ? u.lookAhead : 0) <= o.modeFrontier)) return s;
     var c = I(a.text, null, e.options.tabSize);
     (null == i || c < n) && (i = s - 1, n = c)
    }
    return i
   }(r, n, e),
   l = o > t.first && ae(t, o - 1).stateAfter,
   s = l ? Rt.fromSaved(t, l, o) : new Rt(t, Pt(t.mode), o);
  return t.iter(o, n, function(e) {
   Vt(r, e.text, s);
   var t = s.line;
   e.stateAfter = t == n - 1 || t % 5 == 0 || t >= i.viewFrom && t < i.viewTo ? s.save() : null, s.nextLine()
  }), e && (t.modeFrontier = s.line), s
 }

 function Vt(e, t, r, n) {
  var i = e.doc.mode,
   o = new zt(t, e.options.tabSize, r);
  for (o.start = o.pos = n || 0, "" == t && Kt(i, r.state); !o.eol();) jt(i, o, r.state), o.start = o.pos
 }

 function Kt(e, t) {
  if (e.blankLine) return e.blankLine(t);
  if (e.innerMode) {
   var r = Et(e, t);
   return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
  }
 }

 function jt(e, t, r, n) {
  for (var i = 0; i < 10; i++) {
   n && (n[0] = Et(e, r).mode);
   var o = e.token(t, r);
   if (t.pos > t.start) return o
  }
  throw new Error("Mode " + e.name + " failed to advance stream.")
 }
 Rt.prototype.lookAhead = function(e) {
  var t = this.doc.getLine(this.line + e);
  return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
 }, Rt.prototype.nextLine = function() {
  this.line++, 0 < this.maxLookAhead && this.maxLookAhead--
 }, Rt.fromSaved = function(e, t, r) {
  return t instanceof It ? new Rt(e, Ft(e.mode, t.state), r, t.lookAhead) : new Rt(e, Ft(e.mode, t), r)
 }, Rt.prototype.save = function(e) {
  var t = !1 !== e ? Ft(this.doc.mode, this.state) : this.state;
  return 0 < this.maxLookAhead ? new It(t, this.maxLookAhead) : t
 };
 var Xt = function(e, t, r) {
  this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r
 };

 function _t(e, t, r, n) {
  var i, o, l = e.doc,
   s = l.mode,
   a = ae(l, (t = Se(l, t)).line),
   u = Ut(e, t.line, r),
   c = new zt(a.text, e.options.tabSize, u);
  for (n && (o = []);
   (n || c.pos < t.ch) && !c.eol();) c.start = c.pos, i = jt(s, c, u.state), n && o.push(new Xt(c, i, Ft(l.mode, u.state)));
  return n ? o : new Xt(c, i, u.state)
 }

 function Yt(e, t) {
  if (e)
   for (;;) {
    var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
    if (!r) break;
    e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
    var n = r[1] ? "bgClass" : "textClass";
    null == t[n] ? t[n] = r[2] : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2])
   }
  return e
 }

 function qt(e, t, r, n, i, o, l) {
  var s = r.flattenSpans;
  null == s && (s = e.options.flattenSpans);
  var a, u = 0,
   c = null,
   h = new zt(t, e.options.tabSize, n),
   f = e.options.addModeClass && [null];
  for ("" == t && Yt(Kt(r, n.state), o); !h.eol();) {
   if (a = h.pos > e.options.maxHighlightLength ? (s = !1, l && Vt(e, t, n, h.pos), h.pos = t.length, null) : Yt(jt(r, h, n.state, f), o), f) {
    var d = f[0].name;
    d && (a = "m-" + (a ? d + " " + a : d))
   }
   if (!s || c != a) {
    for (; u < h.start;) i(u = Math.min(h.start, u + 5e3), c);
    c = a
   }
   h.start = h.pos
  }
  for (; u < h.pos;) {
   var p = Math.min(h.pos, u + 5e3);
   i(p, c), u = p
  }
 }
 var $t = function(e, t, r) {
  this.text = e, He(this, t), this.height = r ? r(this) : 1
 };
 $t.prototype.lineNo = function() {
  return fe(this)
 }, ht($t);
 var Zt = {},
  Qt = {};

 function Jt(e, t) {
  if (!e || /^\s*$/.test(e)) return null;
  var r = t.addModeClass ? Qt : Zt;
  return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
 }

 function er(e, t) {
  var r = A("span", null, null, b ? "padding-right: .1px" : null),
   n = {
    pre: A("pre", [r], "CodeMirror-line"),
    content: r,
    col: 0,
    pos: 0,
    cm: e,
    trailingSpace: !1,
    splitSpaces: (w || b) && e.getOption("lineWrapping")
   };
  t.measure = {};
  for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
   var o = i ? t.rest[i - 1] : t.line,
    l = void 0;
   n.pos = 0, n.addToken = rr, Ct(e.display.measure) && (l = Qe(o, e.doc.direction)) && (n.addToken = nr(n.addToken, l)), n.map = [], or(o, n, Gt(e, o, t != e.display.externalMeasured && fe(o))), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = F(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = F(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(wt(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}))
  }
  if (b) {
   var s = n.content.lastChild;
   (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
  }
  return st(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = F(n.pre.className, n.textClass || "")), n
 }

 function tr(e) {
  var t = O("span", "•", "cm-invalidchar");
  return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
 }

 function rr(e, t, r, n, i, o, l) {
  if (t) {
   var s, a = e.splitSpaces ? function(e, t) {
     if (1 < e.length && !/  /.test(e)) return e;
     for (var r = t, n = "", i = 0; i < e.length; i++) {
      var o = e.charAt(i);
      " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), n += o, r = " " == o
     }
     return n
    }(t, e.trailingSpace) : t,
    u = e.cm.state.specialChars,
    c = !1;
   if (u.test(t)) {
    s = document.createDocumentFragment();
    for (var h = 0;;) {
     u.lastIndex = h;
     var f = u.exec(t),
      d = f ? f.index - h : t.length - h;
     if (d) {
      var p = document.createTextNode(a.slice(h, h + d));
      w && C < 9 ? s.appendChild(O("span", [p])) : s.appendChild(p), e.map.push(e.pos, e.pos + d, p), e.col += d, e.pos += d
     }
     if (!f) break;
     h += d + 1;
     var g = void 0;
     if ("\t" == f[0]) {
      var v = e.cm.options.tabSize,
       m = v - e.col % v;
      (g = s.appendChild(O("span", Y(m), "cm-tab"))).setAttribute("role", "presentation"), g.setAttribute("cm-text", "\t"), e.col += m
     } else "\r" == f[0] || "\n" == f[0] ? (g = s.appendChild(O("span", "\r" == f[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", f[0]) : ((g = e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text", f[0]), w && C < 9 ? s.appendChild(O("span", [g])) : s.appendChild(g)), e.col += 1;
     e.map.push(e.pos, e.pos + 1, g), e.pos++
    }
   } else e.col += t.length, s = document.createTextNode(a), e.map.push(e.pos, e.pos + t.length, s), w && C < 9 && (c = !0), e.pos += t.length;
   if (e.trailingSpace = 32 == a.charCodeAt(t.length - 1), r || n || i || c || l) {
    var y = r || "";
    n && (y += n), i && (y += i);
    var b = O("span", [s], y, l);
    return o && (b.title = o), e.content.appendChild(b)
   }
   e.content.appendChild(s)
  }
 }

 function nr(h, f) {
  return function(e, t, r, n, i, o, l) {
   r = r ? r + " cm-force-border" : "cm-force-border";
   for (var s = e.pos, a = s + t.length;;) {
    for (var u = void 0, c = 0; c < f.length && !((u = f[c]).to > s && u.from <= s); c++);
    if (u.to >= a) return h(e, t, r, n, i, o, l);
    h(e, t.slice(0, u.to - s), r, n, null, o, l), n = null, t = t.slice(u.to - s), s = u.to
   }
  }
 }

 function ir(e, t, r, n) {
  var i = !n && r.widgetNode;
  i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
 }

 function or(e, t, r) {
  var n = e.markedSpans,
   i = e.text,
   o = 0;
  if (n)
   for (var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = "", m = 0;;) {
    if (m == p) {
     a = u = c = h = s = "", f = null, m = 1 / 0;
     for (var y = [], b = void 0, x = 0; x < n.length; ++x) {
      var w = n[x],
       C = w.marker;
      "bookmark" == C.type && w.from == p && C.widgetNode ? y.push(C) : w.from <= p && (null == w.to || w.to > p || C.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && m > w.to && (m = w.to, u = ""), C.className && (a += " " + C.className), C.css && (s = (s ? s + ";" : "") + C.css), C.startStyle && w.from == p && (c += " " + C.startStyle), C.endStyle && w.to == m && (b || (b = [])).push(C.endStyle, w.to), C.title && !h && (h = C.title), C.collapsed && (!f || Pe(f.marker, C) < 0) && (f = w)) : w.from > p && m > w.from && (m = w.from)
     }
     if (b)
      for (var S = 0; S < b.length; S += 2) b[S + 1] == m && (u += " " + b[S]);
     if (!f || f.from == p)
      for (var L = 0; L < y.length; ++L) ir(t, 0, y[L]);
     if (f && (f.from || 0) == p) {
      if (ir(t, (null == f.to ? d + 1 : f.to) - p, f.marker, null == f.from), null == f.to) return;
      f.to == p && (f = !1)
     }
    }
    if (d <= p) break;
    for (var k = Math.min(d, m);;) {
     if (v) {
      var M = p + v.length;
      if (!f) {
       var T = k < M ? v.slice(0, k - p) : v;
       t.addToken(t, T, l ? l + a : a, c, p + T.length == m ? u : "", h, s)
      }
      if (k <= M) {
       v = v.slice(k - p), p = k;
       break
      }
      p = M, c = ""
     }
     v = i.slice(o, o = r[g++]), l = Jt(r[g++], t.cm.options)
    }
   } else
    for (var N = 1; N < r.length; N += 2) t.addToken(t, i.slice(o, o = r[N]), Jt(r[N + 1], t.cm.options))
 }

 function lr(e, t, r) {
  this.line = t, this.rest = function(e) {
   for (var t, r; t = Re(e);) e = t.find(1, !0).line, (r || (r = [])).push(e);
   return r
  }(t), this.size = this.rest ? fe(q(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = Ke(e, t)
 }

 function sr(e, t, r) {
  for (var n, i = [], o = t; o < r; o = n) {
   var l = new lr(e.doc, ae(e.doc, o), o);
   n = o + l.size, i.push(l)
  }
  return i
 }
 var ar = null;
 var ur = null;

 function cr(e, t) {
  var r = ot(e, t);
  if (r.length) {
   var n, i = Array.prototype.slice.call(arguments, 2);
   ar ? n = ar.delayedCallbacks : ur ? n = ur : (n = ur = [], setTimeout(hr, 0));
   for (var o = function(e) {
     n.push(function() {
      return r[e].apply(null, i)
     })
    }, l = 0; l < r.length; ++l) o(l)
  }
 }

 function hr() {
  var e = ur;
  ur = null;
  for (var t = 0; t < e.length; ++t) e[t]()
 }

 function fr(e, t, r, n) {
  for (var i = 0; i < t.changes.length; i++) {
   var o = t.changes[i];
   "text" == o ? gr(e, t) : "gutter" == o ? mr(e, t, r, n) : "class" == o ? vr(e, t) : "widget" == o && yr(e, t, n)
  }
  t.changes = null
 }

 function dr(e) {
  return e.node == e.text && (e.node = O("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), w && C < 8 && (e.node.style.zIndex = 2)), e.node
 }

 function pr(e, t) {
  var r = e.display.externalMeasured;
  return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : er(e, t)
 }

 function gr(e, t) {
  var r = t.text.className,
   n = pr(e, t);
  t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, vr(e, t)) : r && (t.text.className = r)
 }

 function vr(e, t) {
  ! function(e, t) {
   var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
   if (r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null);
   else if (r) {
    var n = dr(t);
    t.background = n.insertBefore(O("div", null, r), n.firstChild), e.display.input.setUneditable(t.background)
   }
  }(e, t), t.line.wrapClass ? dr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
  var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
  t.text.className = r || ""
 }

 function mr(e, t, r, n) {
  if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
   var i = dr(t);
   t.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
  }
  var o = t.line.gutterMarkers;
  if (e.options.lineNumbers || o) {
   var l = dr(t),
    s = t.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
   if (e.display.input.setUneditable(s), l.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(O("div", ge(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
    for (var a = 0; a < e.options.gutters.length; ++a) {
     var u = e.options.gutters[a],
      c = o.hasOwnProperty(u) && o[u];
     c && s.appendChild(O("div", [c], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[u] + "px; width: " + n.gutterWidth[u] + "px"))
    }
  }
 }

 function yr(e, t, r) {
  t.alignable && (t.alignable = null);
  for (var n = t.node.firstChild, i = void 0; n; n = i) i = n.nextSibling, "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
  br(e, t, r)
 }

 function br(e, t, r) {
  if (xr(e, t.line, t, r, !0), t.rest)
   for (var n = 0; n < t.rest.length; n++) xr(e, t.rest[n], t, r, !1)
 }

 function xr(e, t, r, n, i) {
  if (t.widgets)
   for (var o = dr(r), l = 0, s = t.widgets; l < s.length; ++l) {
    var a = s[l],
     u = O("div", [a.node], "CodeMirror-linewidget");
    a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), wr(a, u, r, n), e.display.input.setUneditable(u), i && a.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u), cr(a, "redraw")
   }
 }

 function wr(e, t, r, n) {
  if (e.noHScroll) {
   (r.alignable || (r.alignable = [])).push(t);
   var i = n.wrapperWidth;
   t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px"
  }
  e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
 }

 function Cr(e) {
  if (null != e.height) return e.height;
  var t = e.doc.cm;
  if (!t) return 0;
  if (!W(document.body, e.node)) {
   var r = "position: relative;";
   e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), N(t.display.measure, O("div", [e.node], null, r))
  }
  return e.height = e.node.parentNode.offsetHeight
 }

 function Sr(e, t) {
  for (var r = vt(t); r != e.wrapper; r = r.parentNode)
   if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0
 }

 function Lr(e) {
  return e.lineSpace.offsetTop
 }

 function kr(e) {
  return e.mover.offsetHeight - e.lineSpace.offsetHeight
 }

 function Mr(e) {
  if (e.cachedPaddingH) return e.cachedPaddingH;
  var t = N(e.measure, O("pre", "x")),
   r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
   n = {
    left: parseInt(r.paddingLeft),
    right: parseInt(r.paddingRight)
   };
  return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
 }

 function Tr(e) {
  return G - e.display.nativeBarWidth
 }

 function Nr(e) {
  return e.display.scroller.clientWidth - Tr(e) - e.display.barWidth
 }

 function Or(e) {
  return e.display.scroller.clientHeight - Tr(e) - e.display.barHeight
 }

 function Ar(e, t, r) {
  if (e.line == t) return {
   map: e.measure.map,
   cache: e.measure.cache
  };
  for (var n = 0; n < e.rest.length; n++)
   if (e.rest[n] == t) return {
    map: e.measure.maps[n],
    cache: e.measure.caches[n]
   };
  for (var i = 0; i < e.rest.length; i++)
   if (fe(e.rest[i]) > r) return {
    map: e.measure.maps[i],
    cache: e.measure.caches[i],
    before: !0
   }
 }

 function Wr(e, t, r, n) {
  return Fr(e, Hr(e, t), r, n)
 }

 function Dr(e, t) {
  if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[sn(e, t)];
  var r = e.display.externalMeasured;
  return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
 }

 function Hr(e, t) {
  var r = fe(t),
   n = Dr(e, r);
  n && !n.text ? n = null : n && n.changes && (fr(e, n, r, tn(e)), e.curOp.forceUpdate = !0), n || (n = function(e, t) {
   var r = fe(t = Ge(t)),
    n = e.display.externalMeasured = new lr(e.doc, t, r);
   n.lineN = r;
   var i = n.built = er(e, n);
   return n.text = i.pre, N(e.display.lineMeasure, i.pre), n
  }(e, t));
  var i = Ar(n, t, r);
  return {
   line: t,
   view: n,
   rect: null,
   map: i.map,
   cache: i.cache,
   before: i.before,
   hasHeights: !1
  }
 }

 function Fr(e, t, r, n, i) {
  t.before && (r = -1);
  var o, l = r + (n || "");
  return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (! function(e, t, r) {
   var n = e.options.lineWrapping,
    i = n && Nr(e);
   if (!t.measure.heights || n && t.measure.width != i) {
    var o = t.measure.heights = [];
    if (n) {
     t.measure.width = i;
     for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
      var a = l[s],
       u = l[s + 1];
      2 < Math.abs(a.bottom - u.bottom) && o.push((a.bottom + u.top) / 2 - r.top)
     }
    }
    o.push(r.bottom - r.top)
   }
  }(e, t.view, t.rect), t.hasHeights = !0), (o = function(e, t, r, n) {
   var i, o = zr(t.map, r, n),
    l = o.node,
    s = o.start,
    a = o.end,
    u = o.collapse;
   if (3 == l.nodeType) {
    for (var c = 0; c < 4; c++) {
     for (; s && ie(t.line.text.charAt(o.coverStart + s));) --s;
     for (; o.coverStart + a < o.coverEnd && ie(t.line.text.charAt(o.coverStart + a));) ++a;
     if ((i = w && C < 9 && 0 == s && a == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Ir(k(l, s, a).getClientRects(), n)).left || i.right || 0 == s) break;
     a = s, s -= 1, u = "right"
    }
    w && C < 11 && (i = function(e, t) {
     if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || ! function(e) {
       if (null != Tt) return Tt;
       var t = N(e, O("span", "x")),
        r = t.getBoundingClientRect(),
        n = k(t, 0, 1).getBoundingClientRect();
       return Tt = 1 < Math.abs(r.left - n.left)
      }(e)) return t;
     var r = screen.logicalXDPI / screen.deviceXDPI,
      n = screen.logicalYDPI / screen.deviceYDPI;
     return {
      left: t.left * r,
      right: t.right * r,
      top: t.top * n,
      bottom: t.bottom * n
     }
    }(e.display.measure, i))
   } else {
    var h;
    0 < s && (u = n = "right"), i = e.options.lineWrapping && 1 < (h = l.getClientRects()).length ? h["right" == n ? h.length - 1 : 0] : l.getBoundingClientRect()
   }
   if (w && C < 9 && !s && (!i || !i.left && !i.right)) {
    var f = l.parentNode.getClientRects()[0];
    i = f ? {
     left: f.left,
     right: f.left + en(e.display),
     top: f.top,
     bottom: f.bottom
    } : Pr
   }
   for (var d = i.top - t.rect.top, p = i.bottom - t.rect.top, g = (d + p) / 2, v = t.view.measure.heights, m = 0; m < v.length - 1 && !(g < v[m]); m++);
   var y = m ? v[m - 1] : 0,
    b = v[m],
    x = {
     left: ("right" == u ? i.right : i.left) - t.rect.left,
     right: ("left" == u ? i.left : i.right) - t.rect.left,
     top: y,
     bottom: b
    };
   i.left || i.right || (x.bogus = !0);
   e.options.singleCursorHeightPerLine || (x.rtop = d, x.rbottom = p);
   return x
  }(e, t, r, n)).bogus || (t.cache[l] = o)), {
   left: o.left,
   right: o.right,
   top: i ? o.rtop : o.top,
   bottom: i ? o.rbottom : o.bottom
  }
 }
 var Er, Pr = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
 };

 function zr(e, t, r) {
  for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
   if (s = e[u], a = e[u + 1], t < s ? (i = 0, o = 1, l = "left") : t < a ? o = (i = t - s) + 1 : (u == e.length - 3 || t == a && e[u + 3] > t) && (i = (o = a - s) - 1, a <= t && (l = "right")), null != i) {
    if (n = e[u + 2], s == a && r == (n.insertLeft ? "left" : "right") && (l = r), "left" == r && 0 == i)
     for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) n = e[2 + (u -= 3)], l = "left";
    if ("right" == r && i == a - s)
     for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) n = e[(u += 3) + 2], l = "right";
    break
   } return {
   node: n,
   start: i,
   end: o,
   collapse: l,
   coverStart: s,
   coverEnd: a
  }
 }

 function Ir(e, t) {
  var r = Pr;
  if ("left" == t)
   for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
  else
   for (var i = e.length - 1; 0 <= i && (r = e[i]).left == r.right; i--);
  return r
 }

 function Rr(e) {
  if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
   for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
 }

 function Br(e) {
  e.display.externalMeasure = null, T(e.display.lineMeasure);
  for (var t = 0; t < e.display.view.length; t++) Rr(e.display.view[t])
 }

 function Gr(e) {
  Br(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
 }

 function Ur() {
  return l && h ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
 }

 function Vr() {
  return l && h ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
 }

 function Kr(e, t, r, n, i) {
  if (!i && t.widgets)
   for (var o = 0; o < t.widgets.length; ++o)
    if (t.widgets[o].above) {
     var l = Cr(t.widgets[o]);
     r.top += l, r.bottom += l
    } if ("line" == n) return r;
  n || (n = "local");
  var s = Xe(t);
  if ("local" == n ? s += Lr(e.display) : s -= e.display.viewOffset, "page" == n || "window" == n) {
   var a = e.display.lineSpace.getBoundingClientRect();
   s += a.top + ("window" == n ? 0 : Vr());
   var u = a.left + ("window" == n ? 0 : Ur());
   r.left += u, r.right += u
  }
  return r.top += s, r.bottom += s, r
 }

 function jr(e, t, r) {
  if ("div" == r) return t;
  var n = t.left,
   i = t.top;
  if ("page" == r) n -= Ur(), i -= Vr();
  else if ("local" == r || !r) {
   var o = e.display.sizer.getBoundingClientRect();
   n += o.left, i += o.top
  }
  var l = e.display.lineSpace.getBoundingClientRect();
  return {
   left: n - l.left,
   top: i - l.top
  }
 }

 function Xr(e, t, r, n, i) {
  return n || (n = ae(e.doc, t.line)), Kr(e, n, Wr(e, n, t.ch, i), r)
 }

 function _r(n, e, i, o, l, s) {
  function a(e, t) {
   var r = Fr(n, l, e, t ? "right" : "left", s);
   return t ? r.left = r.right : r.right = r.left, Kr(n, o, r, i)
  }
  o = o || ae(n.doc, e.line), l || (l = Hr(n, o));
  var u = Qe(o, n.doc.direction),
   t = e.ch,
   r = e.sticky;
  if (t >= o.text.length ? (t = o.text.length, r = "before") : t <= 0 && (t = 0, r = "after"), !u) return a("before" == r ? t - 1 : t, "before" == r);

  function c(e, t, r) {
   return a(r ? e - 1 : e, u[t].level % 2 != 0 != r)
  }
  var h = $e(u, t, r),
   f = qe,
   d = c(t, h, "before" == r);
  return null != f && (d.other = c(t, f, "before" != r)), d
 }

 function Yr(e, t) {
  var r = 0;
  t = Se(e.doc, t), e.options.lineWrapping || (r = en(e.display) * t.ch);
  var n = ae(e.doc, t.line),
   i = Xe(n) + Lr(e.display);
  return {
   left: r,
   right: r,
   top: i,
   bottom: i + n.height
  }
 }

 function qr(e, t, r, n, i) {
  var o = ve(e, t, r);
  return o.xRel = i, n && (o.outside = !0), o
 }

 function $r(e, t, r) {
  var n = e.doc;
  if ((r += e.display.viewOffset) < 0) return qr(n.first, 0, null, !0, -1);
  var i = de(n, r),
   o = n.first + n.size - 1;
  if (o < i) return qr(n.first + n.size - 1, ae(n, o).text.length, null, !0, 1);
  t < 0 && (t = 0);
  for (var l = ae(n, i);;) {
   var s = Qr(e, l, i, t, r),
    a = Re(l),
    u = a && a.find(0, !0);
   if (!a || !(s.ch > u.from.ch || s.ch == u.from.ch && 0 < s.xRel)) return s;
   i = fe(l = u.to.line)
  }
 }

 function Zr(t, r, n, i) {
  var o = function(e) {
    return Kr(t, r, Fr(t, n, e), "line")
   },
   e = r.text.length,
   l = le(function(e) {
    return o(e - 1).bottom <= i
   }, e, 0);
  return {
   begin: l,
   end: e = le(function(e) {
    return o(e).top > i
   }, l, e)
  }
 }

 function Qr(r, n, e, i, o) {
  o -= Xe(n);
  var t, l = 0,
   s = n.text.length,
   a = Hr(r, n);
  if (Qe(n, r.doc.direction)) {
   var u;
   if (r.options.lineWrapping) l = (u = Zr(r, n, a, o)).begin, s = u.end;
   t = new ve(e, Math.floor(l + (s - l) / 2));
   var c, h, f = _r(r, t, "line", n, a).left,
    d = f < i ? 1 : -1,
    p = f - i,
    g = Math.ceil((s - l) / 4);
   e: do {
    c = p, h = t;
    for (var v = 0; v < g; ++v) {
     var m = t;
     if (null == (t = rt(r, n, t, d)) || t.ch < l || s <= ("before" == t.sticky ? t.ch - 1 : t.ch)) {
      t = m;
      break e
     }
    }
    if (p = _r(r, t, "line", n, a).left - i, 1 < g) {
     var y = Math.abs(p - c) / g;
     g = Math.min(g, Math.ceil(Math.abs(p) / y)), d = p < 0 ? 1 : -1
    }
   } while (0 != p && (1 < g || d < 0 != p < 0 && Math.abs(p) <= Math.abs(c)));
   if (Math.abs(p) > Math.abs(c)) {
    if (p < 0 == c < 0) throw new Error("Broke out of infinite loop in coordsCharInner");
    t = h
   }
  } else {
   var b = le(function(e) {
    var t = Kr(r, n, Fr(r, a, e), "line");
    return t.top > o ? (s = Math.min(e, s), !0) : !(t.bottom <= o) && (t.left > i || !(t.right < i) && i - t.left < t.right - i)
   }, l, s);
   t = new ve(e, b = oe(n.text, b, 1), b == s ? "before" : "after")
  }
  var x = _r(r, t, "line", n, a);
  return (o < x.top || x.bottom < o) && (t.outside = !0), t.xRel = i < x.left ? -1 : i > x.right ? 1 : 0, t
 }

 function Jr(e) {
  if (null != e.cachedTextHeight) return e.cachedTextHeight;
  if (null == Er) {
   Er = O("pre");
   for (var t = 0; t < 49; ++t) Er.appendChild(document.createTextNode("x")), Er.appendChild(O("br"));
   Er.appendChild(document.createTextNode("x"))
  }
  N(e.measure, Er);
  var r = Er.offsetHeight / 50;
  return 3 < r && (e.cachedTextHeight = r), T(e.measure), r || 1
 }

 function en(e) {
  if (null != e.cachedCharWidth) return e.cachedCharWidth;
  var t = O("span", "xxxxxxxxxx"),
   r = O("pre", [t]);
  N(e.measure, r);
  var n = t.getBoundingClientRect(),
   i = (n.right - n.left) / 10;
  return 2 < i && (e.cachedCharWidth = i), i || 10
 }

 function tn(e) {
  for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) r[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i, n[e.options.gutters[l]] = o.clientWidth;
  return {
   fixedPos: rn(t),
   gutterTotalWidth: t.gutters.offsetWidth,
   gutterLeft: r,
   gutterWidth: n,
   wrapperWidth: t.wrapper.clientWidth
  }
 }

 function rn(e) {
  return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
 }

 function nn(n) {
  var i = Jr(n.display),
   o = n.options.lineWrapping,
   l = o && Math.max(5, n.display.scroller.clientWidth / en(n.display) - 3);
  return function(e) {
   if (Ke(n.doc, e)) return 0;
   var t = 0;
   if (e.widgets)
    for (var r = 0; r < e.widgets.length; r++) e.widgets[r].height && (t += e.widgets[r].height);
   return o ? t + (Math.ceil(e.text.length / l) || 1) * i : t + i
  }
 }

 function on(e) {
  var t = e.doc,
   r = nn(e);
  t.iter(function(e) {
   var t = r(e);
   t != e.height && he(e, t)
  })
 }

 function ln(e, t, r, n) {
  var i = e.display;
  if (!r && "true" == vt(t).getAttribute("cm-not-content")) return null;
  var o, l, s = i.lineSpace.getBoundingClientRect();
  try {
   o = t.clientX - s.left, l = t.clientY - s.top
  } catch (t) {
   return null
  }
  var a, u = $r(e, o, l);
  if (n && 1 == u.xRel && (a = ae(e.doc, u.line).text).length == u.ch) {
   var c = I(a, a.length, e.options.tabSize) - a.length;
   u = ve(u.line, Math.max(0, Math.round((o - Mr(e.display).left) / en(e.display)) - c))
  }
  return u
 }

 function sn(e, t) {
  if (t >= e.display.viewTo) return null;
  if ((t -= e.display.viewFrom) < 0) return null;
  for (var r = e.display.view, n = 0; n < r.length; n++)
   if ((t -= r[n].size) < 0) return n
 }

 function an(e) {
  e.display.input.showSelection(e.display.input.prepareSelection())
 }

 function un(e, t) {
  for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++)
   if (!1 !== t || l != r.sel.primIndex) {
    var s = r.sel.ranges[l];
    if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
     var a = s.empty();
     (a || e.options.showCursorWhenSelecting) && cn(e, s.head, i), a || hn(e, s, o)
    }
   } return n
 }

 function cn(e, t, r) {
  var n = _r(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
   i = r.appendChild(O("div", " ", "CodeMirror-cursor"));
  if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
   var o = r.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
   o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
  }
 }

 function hn(i, e, t) {
  var r = i.display,
   o = i.doc,
   l = document.createDocumentFragment(),
   n = Mr(i.display),
   p = n.left,
   g = Math.max(r.sizerWidth, Nr(i) - r.sizer.offsetLeft) - n.right;

  function v(e, t, r, n) {
   t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), l.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? g - e : r) + "px;\n                             height: " + (n - t) + "px"))
  }

  function s(r, a, u) {
   var c, h, n = ae(o, r),
    f = n.text.length;

   function d(e, t) {
    return Xr(i, ve(r, e), "div", n, t)
   }
   return function(e, t, r, n) {
    if (!e) return n(t, r, "ltr");
    for (var i = !1, o = 0; o < e.length; ++o) {
     var l = e[o];
     (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr"), i = !0)
    }
    i || n(t, r, "ltr")
   }(Qe(n, o.direction), a || 0, null == u ? f : u, function(e, t, r) {
    var n, i, o, l = d(e, "left");
    if (e == t) i = o = (n = l).left;
    else {
     if (n = d(t - 1, "right"), "rtl" == r) {
      var s = l;
      l = n, n = s
     }
     i = l.left, o = n.right
    }
    null == a && 0 == e && (i = p), 3 < n.top - l.top && (v(i, l.top, null, l.bottom), i = p, l.bottom < n.top && v(i, l.bottom, null, n.top)), null == u && t == f && (o = g), (!c || l.top < c.top || l.top == c.top && l.left < c.left) && (c = l), (!h || n.bottom > h.bottom || n.bottom == h.bottom && n.right > h.right) && (h = n), i < p + 1 && (i = p), v(i, n.top, o - i, n.bottom)
   }), {
    start: c,
    end: h
   }
  }
  var a = e.from(),
   u = e.to();
  if (a.line == u.line) s(a.line, a.ch, u.ch);
  else {
   var c = ae(o, a.line),
    h = ae(o, u.line),
    f = Ge(c) == Ge(h),
    d = s(a.line, a.ch, f ? c.text.length + 1 : null).end,
    m = s(u.line, f ? 0 : null, u.ch).start;
   f && (d.top < m.top - 2 ? (v(d.right, d.top, null, d.bottom), v(p, m.top, m.left, m.bottom)) : v(d.right, d.top, m.left - d.right, d.bottom)), d.bottom < m.top && v(p, d.bottom, null, m.top)
  }
  t.appendChild(l)
 }

 function fn(e) {
  if (e.state.focused) {
   var t = e.display;
   clearInterval(t.blinker);
   var r = !0;
   t.cursorDiv.style.visibility = "", 0 < e.options.cursorBlinkRate ? t.blinker = setInterval(function() {
    return t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
   }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
  }
 }

 function dn(e) {
  e.state.focused || (e.display.input.focus(), gn(e))
 }

 function pn(e) {
  e.state.delayingBlurEvent = !0, setTimeout(function() {
   e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, vn(e))
  }, 100)
 }

 function gn(e, t) {
  e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (st(e, "focus", e, t), e.state.focused = !0, H(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), b && setTimeout(function() {
   return e.display.input.reset(!0)
  }, 20)), e.display.input.receivedFocus()), fn(e))
 }

 function vn(e, t) {
  e.state.delayingBlurEvent || (e.state.focused && (st(e, "blur", e, t), e.state.focused = !1, M(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
   e.state.focused || (e.display.shift = !1)
  }, 150))
 }

 function mn(e) {
  for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
   var i = t.view[n],
    o = void 0;
   if (!i.hidden) {
    if (w && C < 8) {
     var l = i.node.offsetTop + i.node.offsetHeight;
     o = l - r, r = l
    } else {
     var s = i.node.getBoundingClientRect();
     o = s.bottom - s.top
    }
    var a = i.line.height - o;
    if (o < 2 && (o = Jr(t)), (.005 < a || a < -.005) && (he(i.line, o), yn(i.line), i.rest))
     for (var u = 0; u < i.rest.length; u++) yn(i.rest[u])
   }
  }
 }

 function yn(e) {
  if (e.widgets)
   for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
 }

 function bn(e, t, r) {
  var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
  n = Math.floor(n - Lr(e));
  var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
   o = de(t, n),
   l = de(t, i);
  if (r && r.ensure) {
   var s = r.ensure.from.line,
    a = r.ensure.to.line;
   s < o ? l = de(t, Xe(ae(t, o = s)) + e.wrapper.clientHeight) : Math.min(a, t.lastLine()) >= l && (o = de(t, Xe(ae(t, a)) - e.wrapper.clientHeight), l = a)
  }
  return {
   from: o,
   to: Math.max(l, o + 1)
  }
 }

 function xn(e) {
  var t = e.display,
   r = t.view;
  if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
   for (var n = rn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
    if (!r[l].hidden) {
     e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o), r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
     var s = r[l].alignable;
     if (s)
      for (var a = 0; a < s.length; a++) s[a].style.left = o
    } e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
  }
 }

 function wn(e) {
  if (!e.options.lineNumbers) return !1;
  var t = e.doc,
   r = ge(e.options, t.first + t.size - 1),
   n = e.display;
  if (r.length == n.lineNumChars) return !1;
  var i = n.measure.appendChild(O("div", [O("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
   o = i.firstChild.offsetWidth,
   l = i.offsetWidth - o;
  return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1, n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", li(e), !0
 }

 function Cn(e, t) {
  var r = e.display,
   n = Jr(e.display);
  t.top < 0 && (t.top = 0);
  var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
   o = Or(e),
   l = {};
  t.bottom - t.top > o && (t.bottom = t.top + o);
  var s = e.doc.height + kr(r),
   a = t.top < n,
   u = t.bottom > s - n;
  if (t.top < i) l.scrollTop = a ? 0 : t.top;
  else if (t.bottom > i + o) {
   var c = Math.min(t.top, (u ? s : t.bottom) - o);
   c != i && (l.scrollTop = c)
  }
  var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft,
   f = Nr(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
   d = t.right - t.left > f;
  return d && (t.right = t.left + f), t.left < 10 ? l.scrollLeft = 0 : t.left < h ? l.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)) : t.right > f + h - 3 && (l.scrollLeft = t.right + (d ? 0 : 10) - f), l
 }

 function Sn(e, t) {
  null != t && (Mn(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
 }

 function Ln(e) {
  Mn(e);
  var t = e.getCursor();
  e.curOp.scrollToPos = {
   from: t,
   to: t,
   margin: e.options.cursorScrollMargin
  }
 }

 function kn(e, t, r) {
  null == t && null == r || Mn(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r)
 }

 function Mn(e) {
  var t = e.curOp.scrollToPos;
  t && (e.curOp.scrollToPos = null, Tn(e, Yr(e, t.from), Yr(e, t.to), t.margin))
 }

 function Tn(e, t, r, n) {
  var i = Cn(e, {
   left: Math.min(t.left, r.left),
   top: Math.min(t.top, r.top) - n,
   right: Math.max(t.right, r.right),
   bottom: Math.max(t.bottom, r.bottom) + n
  });
  kn(e, i.scrollLeft, i.scrollTop)
 }

 function Nn(e, t) {
  Math.abs(e.doc.scrollTop - t) < 2 || (g || oi(e, {
   top: t
  }), On(e, t, !0), g && oi(e), ei(e, 100))
 }

 function On(e, t, r) {
  t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
 }

 function An(e, t, r, n) {
  t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, xn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
 }

 function Wn(e) {
  var t = e.display,
   r = t.gutters.offsetWidth,
   n = Math.round(e.doc.height + kr(e.display));
  return {
   clientHeight: t.scroller.clientHeight,
   viewHeight: t.wrapper.clientHeight,
   scrollWidth: t.scroller.scrollWidth,
   clientWidth: t.scroller.clientWidth,
   viewWidth: t.wrapper.clientWidth,
   barLeft: e.options.fixedGutter ? r : 0,
   docHeight: n,
   scrollHeight: n + Tr(e) + t.barHeight,
   nativeBarWidth: t.nativeBarWidth,
   gutterWidth: r
  }
 }
 var Dn = function(e, t, r) {
  this.cm = r;
  var n = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
   i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
  e(n), e(i), it(n, "scroll", function() {
   n.clientHeight && t(n.scrollTop, "vertical")
  }), it(i, "scroll", function() {
   i.clientWidth && t(i.scrollLeft, "horizontal")
  }), this.checkedZeroWidth = !1, w && C < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
 };
 Dn.prototype.update = function(e) {
  var t = e.scrollWidth > e.clientWidth + 1,
   r = e.scrollHeight > e.clientHeight + 1,
   n = e.nativeBarWidth;
  if (r) {
   this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
   var i = e.viewHeight - (t ? n : 0);
   this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
  } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
  if (t) {
   this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
   var o = e.viewWidth - e.barLeft - (r ? n : 0);
   this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
  } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
  return !this.checkedZeroWidth && 0 < e.clientHeight && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
   right: r ? n : 0,
   bottom: t ? n : 0
  }
 }, Dn.prototype.setScrollLeft = function(e) {
  this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
 }, Dn.prototype.setScrollTop = function(e) {
  this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
 }, Dn.prototype.zeroWidthHack = function() {
  var e = x && !s ? "12px" : "18px";
  this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new R, this.disableVert = new R
 }, Dn.prototype.enableZeroWidthBar = function(r, n, i) {
  r.style.pointerEvents = "auto", n.set(1e3, function e() {
   var t = r.getBoundingClientRect();
   ("vert" == i ? document.elementFromPoint(t.right - 1, (t.top + t.bottom) / 2) : document.elementFromPoint((t.right + t.left) / 2, t.bottom - 1)) != r ? r.style.pointerEvents = "none" : n.set(1e3, e)
  })
 }, Dn.prototype.clear = function() {
  var e = this.horiz.parentNode;
  e.removeChild(this.horiz), e.removeChild(this.vert)
 };
 var Hn = function() {};

 function Fn(e, t) {
  t || (t = Wn(e));
  var r = e.display.barWidth,
   n = e.display.barHeight;
  En(e, t);
  for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && mn(e), En(e, Wn(e)), r = e.display.barWidth, n = e.display.barHeight
 }

 function En(e, t) {
  var r = e.display,
   n = r.scrollbars.update(t);
  r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
 }
 Hn.prototype.update = function() {
  return {
   bottom: 0,
   right: 0
  }
 }, Hn.prototype.setScrollLeft = function() {}, Hn.prototype.setScrollTop = function() {}, Hn.prototype.clear = function() {};
 var Pn = {
  native: Dn,
  null: Hn
 };

 function zn(r) {
  r.display.scrollbars && (r.display.scrollbars.clear(), r.display.scrollbars.addClass && M(r.display.wrapper, r.display.scrollbars.addClass)), r.display.scrollbars = new Pn[r.options.scrollbarStyle](function(e) {
   r.display.wrapper.insertBefore(e, r.display.scrollbarFiller), it(e, "mousedown", function() {
    r.state.focused && setTimeout(function() {
     return r.display.input.focus()
    }, 0)
   }), e.setAttribute("cm-not-content", "true")
  }, function(e, t) {
   "horizontal" == t ? An(r, e) : Nn(r, e)
  }, r), r.display.scrollbars.addClass && H(r.display.wrapper, r.display.scrollbars.addClass)
 }
 var In = 0;

 function Rn(e) {
  var t;
  e.curOp = {
   cm: e,
   viewChanged: !1,
   startHeight: e.doc.height,
   forceUpdate: !1,
   updateInput: null,
   typing: !1,
   changeObjs: null,
   cursorActivityHandlers: null,
   cursorActivityCalled: 0,
   selectionChanged: !1,
   updateMaxLine: !1,
   scrollLeft: null,
   scrollTop: null,
   scrollToPos: null,
   focus: !1,
   id: ++In
  }, t = e.curOp, ar ? ar.ops.push(t) : t.ownsGroup = ar = {
   ops: [t],
   delayedCallbacks: []
  }
 }

 function Bn(e) {
  ! function(e, t) {
   var r = e.ownsGroup;
   if (r) try {
    ! function(e) {
     var t = e.delayedCallbacks,
      r = 0;
     do {
      for (; r < t.length; r++) t[r].call(null);
      for (var n = 0; n < e.ops.length; n++) {
       var i = e.ops[n];
       if (i.cursorActivityHandlers)
        for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
      }
     } while (r < t.length)
    }(r)
   } finally {
    ar = null, t(r)
   }
  }(e.curOp, function(e) {
   for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
   ! function(e) {
    for (var t = e.ops, r = 0; r < t.length; r++) Gn(t[r]);
    for (var n = 0; n < t.length; n++)(i = t[n]).updatedDisplay = i.mustUpdate && ni(i.cm, i.update);
    var i;
    for (var o = 0; o < t.length; o++) Un(t[o]);
    for (var l = 0; l < t.length; l++) Vn(t[l]);
    for (var s = 0; s < t.length; s++) Kn(t[s])
   }(e)
  })
 }

 function Gn(e) {
  var t, r, n = e.cm,
   i = n.display;
  !(r = (t = n).display).scrollbarsClipped && r.scroller.offsetWidth && (r.nativeBarWidth = r.scroller.offsetWidth - r.scroller.clientWidth, r.heightForcer.style.height = Tr(t) + "px", r.sizer.style.marginBottom = -r.nativeBarWidth + "px", r.sizer.style.borderRightWidth = Tr(t) + "px", r.scrollbarsClipped = !0), e.updateMaxLine && Ye(n), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < i.viewFrom || e.scrollToPos.to.line >= i.viewTo) || i.maxLineChanged && n.options.lineWrapping, e.update = e.mustUpdate && new ri(n, e.mustUpdate && {
   top: e.scrollTop,
   ensure: e.scrollToPos
  }, e.forceUpdate)
 }

 function Un(e) {
  var t = e.cm,
   r = t.display;
  e.updatedDisplay && mn(t), e.barMeasure = Wn(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Wr(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Tr(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Nr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection(e.focus))
 }

 function Vn(e) {
  var t = e.cm;
  null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && An(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
  var r = e.focus && e.focus == D() && (!document.hasFocus || document.hasFocus());
  e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && Fn(t, e.barMeasure), e.updatedDisplay && si(t, e.barMeasure), e.selectionChanged && fn(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && dn(e.cm)
 }

 function Kn(e) {
  var t = e.cm,
   r = t.display,
   n = t.doc;
  (e.updatedDisplay && ii(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && On(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && An(t, e.scrollLeft, !0, !0), e.scrollToPos) && function(e, t) {
   if (!at(e, "scrollCursorIntoView")) {
    var r = e.display,
     n = r.sizer.getBoundingClientRect(),
     i = null;
    if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !u) {
     var o = O("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Lr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Tr(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
     e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
    }
   }
  }(t, function(e, t, r, n) {
   var i;
   null == n && (n = 0), e.options.lineWrapping || t != r || (r = "before" == (t = t.ch ? ve(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? ve(t.line, t.ch + 1, "before") : t);
   for (var o = 0; o < 5; o++) {
    var l = !1,
     s = _r(e, t),
     a = r && r != t ? _r(e, r) : s,
     u = Cn(e, i = {
      left: Math.min(s.left, a.left),
      top: Math.min(s.top, a.top) - n,
      right: Math.max(s.left, a.left),
      bottom: Math.max(s.bottom, a.bottom) + n
     }),
     c = e.doc.scrollTop,
     h = e.doc.scrollLeft;
    if (null != u.scrollTop && (Nn(e, u.scrollTop), 1 < Math.abs(e.doc.scrollTop - c) && (l = !0)), null != u.scrollLeft && (An(e, u.scrollLeft), 1 < Math.abs(e.doc.scrollLeft - h) && (l = !0)), !l) break
   }
   return i
  }(t, Se(n, e.scrollToPos.from), Se(n, e.scrollToPos.to), e.scrollToPos.margin));
  var i = e.maybeHiddenMarkers,
   o = e.maybeUnhiddenMarkers;
  if (i)
   for (var l = 0; l < i.length; ++l) i[l].lines.length || st(i[l], "hide");
  if (o)
   for (var s = 0; s < o.length; ++s) o[s].lines.length && st(o[s], "unhide");
  r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && st(t, "changes", t, e.changeObjs), e.update && e.update.finish()
 }

 function jn(e, t) {
  if (e.curOp) return t();
  Rn(e);
  try {
   return t()
  } finally {
   Bn(e)
  }
 }

 function Xn(e, t) {
  return function() {
   if (e.curOp) return t.apply(e, arguments);
   Rn(e);
   try {
    return t.apply(e, arguments)
   } finally {
    Bn(e)
   }
  }
 }

 function _n(e) {
  return function() {
   if (this.curOp) return e.apply(this, arguments);
   Rn(this);
   try {
    return e.apply(this, arguments)
   } finally {
    Bn(this)
   }
  }
 }

 function Yn(t) {
  return function() {
   var e = this.cm;
   if (!e || e.curOp) return t.apply(this, arguments);
   Rn(e);
   try {
    return t.apply(this, arguments)
   } finally {
    Bn(e)
   }
  }
 }

 function qn(e, t, r, n) {
  null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
  var i = e.display;
  if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Me && Ue(e.doc, t) < i.viewTo && Zn(e);
  else if (r <= i.viewFrom) Me && Ve(e.doc, r + n) > i.viewFrom ? Zn(e) : (i.viewFrom += n, i.viewTo += n);
  else if (t <= i.viewFrom && r >= i.viewTo) Zn(e);
  else if (t <= i.viewFrom) {
   var o = Qn(e, r, r + n, 1);
   o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : Zn(e)
  } else if (r >= i.viewTo) {
   var l = Qn(e, t, t, -1);
   l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : Zn(e)
  } else {
   var s = Qn(e, t, t, -1),
    a = Qn(e, r, r + n, 1);
   s && a ? (i.view = i.view.slice(0, s.index).concat(sr(e, s.lineN, a.lineN)).concat(i.view.slice(a.index)), i.viewTo += n) : Zn(e)
  }
  var u = i.externalMeasured;
  u && (r < u.lineN ? u.lineN += n : t < u.lineN + u.size && (i.externalMeasured = null))
 }

 function $n(e, t, r) {
  e.curOp.viewChanged = !0;
  var n = e.display,
   i = e.display.externalMeasured;
  if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
   var o = n.view[sn(e, t)];
   if (null != o.node) {
    var l = o.changes || (o.changes = []); - 1 == B(l, r) && l.push(r)
   }
  }
 }

 function Zn(e) {
  e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
 }

 function Qn(e, t, r, n) {
  var i, o = sn(e, t),
   l = e.display.view;
  if (!Me || r == e.doc.first + e.doc.size) return {
   index: o,
   lineN: r
  };
  for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
  if (s != t) {
   if (0 < n) {
    if (o == l.length - 1) return null;
    i = s + l[o].size - t, o++
   } else i = s - t;
   t += i, r += i
  }
  for (; Ue(e.doc, r) != r;) {
   if (o == (n < 0 ? 0 : l.length - 1)) return null;
   r += n * l[o - (n < 0 ? 1 : 0)].size, o += n
  }
  return {
   index: o,
   lineN: r
  }
 }

 function Jn(e) {
  for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
   var i = t[n];
   i.hidden || i.node && !i.changes || ++r
  }
  return r
 }

 function ei(e, t) {
  e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, P(ti, e))
 }

 function ti(a) {
  var u = a.doc;
  if (!(u.highlightFrontier >= a.display.viewTo)) {
   var c = +new Date + a.options.workTime,
    h = Ut(a, u.highlightFrontier),
    f = [];
   u.iter(h.line, Math.min(u.first + u.size, a.display.viewTo + 500), function(e) {
    if (h.line >= a.display.viewFrom) {
     var t = e.styles,
      r = e.text.length > a.options.maxHighlightLength ? Ft(u.mode, h.state) : null,
      n = Bt(a, e, h, !0);
     r && (h.state = r), e.styles = n.styles;
     var i = e.styleClasses,
      o = n.classes;
     o ? e.styleClasses = o : i && (e.styleClasses = null);
     for (var l = !t || t.length != e.styles.length || i != o && (!i || !o || i.bgClass != o.bgClass || i.textClass != o.textClass), s = 0; !l && s < t.length; ++s) l = t[s] != e.styles[s];
     l && f.push(h.line), e.stateAfter = h.save(), h.nextLine()
    } else e.text.length <= a.options.maxHighlightLength && Vt(a, e.text, h), e.stateAfter = h.line % 5 == 0 ? h.save() : null, h.nextLine();
    if (+new Date > c) return ei(a, a.options.workDelay), !0
   }), u.highlightFrontier = h.line, u.modeFrontier = Math.max(u.modeFrontier, h.line), f.length && jn(a, function() {
    for (var e = 0; e < f.length; e++) $n(a, f[e], "text")
   })
  }
 }
 var ri = function(e, t, r) {
  var n = e.display;
  this.viewport = t, this.visible = bn(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Nr(e), this.force = r, this.dims = tn(e), this.events = []
 };

 function ni(e, t) {
  var r = e.display,
   n = e.doc;
  if (t.editorIsHidden) return Zn(e), !1;
  if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == Jn(e)) return !1;
  wn(e) && (Zn(e), t.dims = tn(e));
  var i = n.first + n.size,
   o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
   l = Math.min(i, t.visible.to + e.options.viewportMargin);
  r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), Me && (o = Ue(e.doc, o), l = Ve(e.doc, l));
  var s, a, u, c, h = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
  a = o, u = l, 0 == (c = (s = e).display).view.length || a >= c.viewTo || u <= c.viewFrom ? (c.view = sr(s, a, u), c.viewFrom = a) : (c.viewFrom > a ? c.view = sr(s, a, c.viewFrom).concat(c.view) : c.viewFrom < a && (c.view = c.view.slice(sn(s, a))), c.viewFrom = a, c.viewTo < u ? c.view = c.view.concat(sr(s, c.viewTo, u)) : c.viewTo > u && (c.view = c.view.slice(0, sn(s, u)))), c.viewTo = u, r.viewOffset = Xe(ae(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
  var f = Jn(e);
  if (!h && 0 == f && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
  var d = function(e) {
   if (e.hasFocus()) return null;
   var t = D();
   if (!t || !W(e.display.lineDiv, t)) return null;
   var r = {
    activeElt: t
   };
   if (window.getSelection) {
    var n = window.getSelection();
    n.anchorNode && n.extend && W(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset)
   }
   return r
  }(e);
  return 4 < f && (r.lineDiv.style.display = "none"),
   function(r, e, t) {
    var n = r.display,
     i = r.options.lineNumbers,
     o = n.lineDiv,
     l = o.firstChild;

    function s(e) {
     var t = e.nextSibling;
     return b && x && r.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e), t
    }
    for (var a = n.view, u = n.viewFrom, c = 0; c < a.length; c++) {
     var h = a[c];
     if (h.hidden);
     else if (h.node && h.node.parentNode == o) {
      for (; l != h.node;) l = s(l);
      var f = i && null != e && e <= u && h.lineNumber;
      h.changes && (-1 < B(h.changes, "gutter") && (f = !1), fr(r, h, u, t)), f && (T(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(ge(r.options, u)))), l = h.node.nextSibling
     } else {
      var d = (v = u, m = t, void 0, y = pr(p = r, g = h), g.text = g.node = y.pre, y.bgClass && (g.bgClass = y.bgClass), y.textClass && (g.textClass = y.textClass), vr(p, g), mr(p, g, v, m), br(p, g, m), g.node);
      o.insertBefore(d, l)
     }
     u += h.size
    }
    var p, g, v, m, y;
    for (; l;) l = s(l)
   }(e, r.updateLineNumbers, t.dims), 4 < f && (r.lineDiv.style.display = ""), r.renderedView = r.view,
   function(e) {
    if (e && e.activeElt && e.activeElt != D() && (e.activeElt.focus(), e.anchorNode && W(document.body, e.anchorNode) && W(document.body, e.focusNode))) {
     var t = window.getSelection(),
      r = document.createRange();
     r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset)
    }
   }(d), T(r.cursorDiv), T(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, h && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, ei(e, 400)), !(r.updateLineNumbers = null)
 }

 function ii(e, t) {
  for (var r = t.viewport, n = !0;
   (n && e.options.lineWrapping && t.oldDisplayWidth != Nr(e) || (r && null != r.top && (r = {
    top: Math.min(e.doc.height + kr(e.display) - Or(e), r.top)
   }), t.visible = bn(e.display, e.doc, r), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && ni(e, t); n = !1) {
   mn(e);
   var i = Wn(e);
   an(e), Fn(e, i), si(e, i), t.force = !1
  }
  t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
 }

 function oi(e, t) {
  var r = new ri(e, t);
  if (ni(e, r)) {
   mn(e), ii(e, r);
   var n = Wn(e);
   an(e), Fn(e, n), si(e, n), r.finish()
  }
 }

 function li(e) {
  var t = e.display.gutters.offsetWidth;
  e.display.sizer.style.marginLeft = t + "px"
 }

 function si(e, t) {
  e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Tr(e) + "px"
 }

 function ai(e) {
  var t = e.display.gutters,
   r = e.options.gutters;
  T(t);
  for (var n = 0; n < r.length; ++n) {
   var i = r[n],
    o = t.appendChild(O("div", null, "CodeMirror-gutter " + i));
   "CodeMirror-linenumbers" == i && ((e.display.lineGutter = o).style.width = (e.display.lineNumWidth || 1) + "px")
  }
  t.style.display = n ? "" : "none", li(e)
 }

 function ui(e) {
  var t = B(e.gutters, "CodeMirror-linenumbers"); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : -1 < t && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
 }
 ri.prototype.signal = function(e, t) {
  ct(e, t) && this.events.push(arguments)
 }, ri.prototype.finish = function() {
  for (var e = 0; e < this.events.length; e++) st.apply(null, this.events[e])
 };
 var ci = 0,
  hi = null;

 function fi(e) {
  var t = e.wheelDeltaX,
   r = e.wheelDeltaY;
  return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
   x: t,
   y: r
  }
 }

 function di(e) {
  var t = fi(e);
  return t.x *= hi, t.y *= hi, t
 }

 function pi(e, t) {
  var r = fi(t),
   n = r.x,
   i = r.y,
   o = e.display,
   l = o.scroller,
   s = l.scrollWidth > l.clientWidth,
   a = l.scrollHeight > l.clientHeight;
  if (n && s || i && a) {
   if (i && x && b) e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
    for (var h = 0; h < c.length; h++)
     if (c[h].node == u) {
      e.display.currentWheelTarget = u;
      break e
     } if (n && !g && !v && null != hi) return i && a && Nn(e, Math.max(0, l.scrollTop + i * hi)), An(e, Math.max(0, l.scrollLeft + n * hi)), (!i || i && a) && ft(t), void(o.wheelStartX = null);
   if (i && null != hi) {
    var f = i * hi,
     d = e.doc.scrollTop,
     p = d + o.wrapper.clientHeight;
    f < 0 ? d = Math.max(0, d + f - 50) : p = Math.min(e.doc.height, p + f + 50), oi(e, {
     top: d,
     bottom: p
    })
   }
   ci < 20 && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft, o.wheelStartY = l.scrollTop, o.wheelDX = n, o.wheelDY = i, setTimeout(function() {
    if (null != o.wheelStartX) {
     var e = l.scrollLeft - o.wheelStartX,
      t = l.scrollTop - o.wheelStartY,
      r = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
     o.wheelStartX = o.wheelStartY = null, r && (hi = (hi * ci + r) / (ci + 1), ++ci)
    }
   }, 200)) : (o.wheelDX += n, o.wheelDY += i))
  }
 }
 w ? hi = -.53 : g ? hi = 15 : l ? hi = -.7 : a && (hi = -1 / 3);
 var gi = function(e, t) {
  this.ranges = e, this.primIndex = t
 };
 gi.prototype.primary = function() {
  return this.ranges[this.primIndex]
 }, gi.prototype.equals = function(e) {
  if (e == this) return !0;
  if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
  for (var t = 0; t < this.ranges.length; t++) {
   var r = this.ranges[t],
    n = e.ranges[t];
   if (!ye(r.anchor, n.anchor) || !ye(r.head, n.head)) return !1
  }
  return !0
 }, gi.prototype.deepCopy = function() {
  for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new vi(be(this.ranges[t].anchor), be(this.ranges[t].head));
  return new gi(e, this.primIndex)
 }, gi.prototype.somethingSelected = function() {
  for (var e = 0; e < this.ranges.length; e++)
   if (!this.ranges[e].empty()) return !0;
  return !1
 }, gi.prototype.contains = function(e, t) {
  t || (t = e);
  for (var r = 0; r < this.ranges.length; r++) {
   var n = this.ranges[r];
   if (0 <= me(t, n.from()) && me(e, n.to()) <= 0) return r
  }
  return -1
 };
 var vi = function(e, t) {
  this.anchor = e, this.head = t
 };

 function mi(e, t) {
  var r = e[t];
  e.sort(function(e, t) {
   return me(e.from(), t.from())
  }), t = B(e, r);
  for (var n = 1; n < e.length; n++) {
   var i = e[n],
    o = e[n - 1];
   if (0 <= me(o.to(), i.from())) {
    var l = we(o.from(), i.from()),
     s = xe(o.to(), i.to()),
     a = o.empty() ? i.from() == i.head : o.from() == o.head;
    n <= t && --t, e.splice(--n, 2, new vi(a ? s : l, a ? l : s))
   }
  }
  return new gi(e, t)
 }

 function yi(e, t) {
  return new gi([new vi(e, t || e)], 0)
 }

 function bi(e) {
  return e.text ? ve(e.from.line + e.text.length - 1, q(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
 }

 function xi(e, t) {
  if (me(e, t.from) < 0) return e;
  if (me(e, t.to) <= 0) return bi(t);
  var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
   n = e.ch;
  return e.line == t.to.line && (n += bi(t).ch - t.to.ch), ve(r, n)
 }

 function wi(e, t) {
  for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
   var i = e.sel.ranges[n];
   r.push(new vi(xi(i.anchor, t), xi(i.head, t)))
  }
  return mi(r, e.sel.primIndex)
 }

 function Ci(e, t, r) {
  return e.line == t.line ? ve(r.line, e.ch - t.ch + r.ch) : ve(r.line + (e.line - t.line), e.ch)
 }

 function Si(e) {
  e.doc.mode = Wt(e.options, e.doc.modeOption), Li(e)
 }

 function Li(e) {
  e.doc.iter(function(e) {
   e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
  }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ei(e, 100), e.state.modeGen++, e.curOp && qn(e)
 }

 function ki(e, t) {
  return 0 == t.from.ch && 0 == t.to.ch && "" == q(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
 }

 function Mi(e, n, t, i) {
  function o(e) {
   return t ? t[e] : null
  }

  function r(e, t, r) {
   ! function(e, t, r, n) {
    e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), De(e), He(e, r);
    var i = n ? n(e) : 1;
    i != e.height && he(e, i)
   }(e, t, r, i), cr(e, "change", e, n)
  }

  function l(e, t) {
   for (var r = [], n = e; n < t; ++n) r.push(new $t(u[n], o(n), i));
   return r
  }
  var s = n.from,
   a = n.to,
   u = n.text,
   c = ae(e, s.line),
   h = ae(e, a.line),
   f = q(u),
   d = o(u.length - 1),
   p = a.line - s.line;
  if (n.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
  else if (ki(e, n)) {
   var g = l(0, u.length - 1);
   r(h, h.text, d), p && e.remove(s.line, p), g.length && e.insert(s.line, g)
  } else if (c == h)
   if (1 == u.length) r(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
   else {
    var v = l(1, u.length - 1);
    v.push(new $t(f + c.text.slice(a.ch), d, i)), r(c, c.text.slice(0, s.ch) + u[0], o(0)), e.insert(s.line + 1, v)
   }
  else if (1 == u.length) r(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), o(0)), e.remove(s.line + 1, p);
  else {
   r(c, c.text.slice(0, s.ch) + u[0], o(0)), r(h, f + h.text.slice(a.ch), d);
   var m = l(1, u.length - 1);
   1 < p && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, m)
  }
  cr(e, "change", e, n)
 }

 function Ti(e, s, a) {
  ! function e(t, r, n) {
   if (t.linked)
    for (var i = 0; i < t.linked.length; ++i) {
     var o = t.linked[i];
     if (o.doc != r) {
      var l = n && o.sharedHist;
      a && !l || (s(o.doc, l), e(o.doc, t, l))
     }
    }
  }(e, null, !0)
 }

 function Ni(e, t) {
  if (t.cm) throw new Error("This document is already in use.");
  on((e.doc = t).cm = e), Si(e), Oi(e), e.options.lineWrapping || Ye(e), e.options.mode = t.modeOption, qn(e)
 }

 function Oi(e) {
  ("rtl" == e.doc.direction ? H : M)(e.display.lineDiv, "CodeMirror-rtl")
 }

 function Ai(e) {
  this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
 }

 function Wi(e, t) {
  var r = {
   from: be(t.from),
   to: bi(t),
   text: ue(e, t.from, t.to)
  };
  return Pi(e, r, t.from.line, t.to.line + 1), Ti(e, function(e) {
   return Pi(e, r, t.from.line, t.to.line + 1)
  }, !0), r
 }

 function Di(e) {
  for (; e.length;) {
   if (!q(e).ranges) break;
   e.pop()
  }
 }

 function Hi(e, t, r, n) {
  var i = e.history;
  i.undone.length = 0;
  var o, l, s, a = +new Date;
  if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = (s = i).lastOp == n ? (Di(s.done), q(s.done)) : s.done.length && !q(s.done).ranges ? q(s.done) : 1 < s.done.length && !s.done[s.done.length - 2].ranges ? (s.done.pop(), q(s.done)) : void 0)) l = q(o.changes), 0 == me(t.from, t.to) && 0 == me(t.from, l.to) ? l.to = bi(t) : o.changes.push(Wi(e, t));
  else {
   var u = q(i.done);
   for (u && u.ranges || Ei(e.sel, i.done), o = {
     changes: [Wi(e, t)],
     generation: i.generation
    }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
  }
  i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, l || st(e, "historyAdded")
 }

 function Fi(e, t, r, n) {
  var i, o, l, s, a, u = e.history,
   c = n && n.origin;
  r == u.lastSelOp || c && u.lastSelOrigin == c && (u.lastModTime == u.lastSelTime && u.lastOrigin == c || (i = e, o = c, l = q(u.done), s = t, "*" == (a = o.charAt(0)) || "+" == a && l.ranges.length == s.ranges.length && l.somethingSelected() == s.somethingSelected() && new Date - i.history.lastSelTime <= (i.cm ? i.cm.options.historyEventDelay : 500))) ? u.done[u.done.length - 1] = t : Ei(t, u.done), u.lastSelTime = +new Date, u.lastSelOrigin = c, u.lastSelOp = r, n && !1 !== n.clearRedo && Di(u.undone)
 }

 function Ei(e, t) {
  var r = q(t);
  r && r.ranges && r.equals(e) || t.push(e)
 }

 function Pi(t, r, e, n) {
  var i = r["spans_" + t.id],
   o = 0;
  t.iter(Math.max(t.first, e), Math.min(t.first + t.size, n), function(e) {
   e.markedSpans && ((i || (i = r["spans_" + t.id] = {}))[o] = e.markedSpans), ++o
  })
 }

 function zi(e) {
  if (!e) return null;
  for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
  return t ? t.length ? t : null : e
 }

 function Ii(e, t) {
  var r = function(e, t) {
    var r = t["spans_" + e.id];
    if (!r) return null;
    for (var n = [], i = 0; i < t.text.length; ++i) n.push(zi(r[i]));
    return n
   }(e, t),
   n = Ae(e, t);
  if (!r) return n;
  if (!n) return r;
  for (var i = 0; i < r.length; ++i) {
   var o = r[i],
    l = n[i];
   if (o && l) e: for (var s = 0; s < l.length; ++s) {
    for (var a = l[s], u = 0; u < o.length; ++u)
     if (o[u].marker == a.marker) continue e;
    o.push(a)
   } else l && (r[i] = l)
  }
  return r
 }

 function Ri(e, t, r) {
  for (var n = [], i = 0; i < e.length; ++i) {
   var o = e[i];
   if (o.ranges) n.push(r ? gi.prototype.deepCopy.call(o) : o);
   else {
    var l = o.changes,
     s = [];
    n.push({
     changes: s
    });
    for (var a = 0; a < l.length; ++a) {
     var u = l[a],
      c = void 0;
     if (s.push({
       from: u.from,
       to: u.to,
       text: u.text
      }), t)
      for (var h in u)(c = h.match(/^spans_(\d+)$/)) && -1 < B(t, Number(c[1])) && (q(s)[h] = u[h], delete u[h])
    }
   }
  }
  return n
 }

 function Bi(e, t, r, n) {
  if (n) {
   var i = e.anchor;
   if (r) {
    var o = me(t, i) < 0;
    o != me(r, i) < 0 ? (i = t, t = r) : o != me(t, r) < 0 && (t = r)
   }
   return new vi(i, t)
  }
  return new vi(r || t, t)
 }

 function Gi(e, t, r, n, i) {
  null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Xi(e, new gi([Bi(e.sel.primary(), t, r, i)], 0), n)
 }

 function Ui(e, t, r) {
  for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = Bi(e.sel.ranges[o], t[o], null, i);
  Xi(e, mi(n, e.sel.primIndex), r)
 }

 function Vi(e, t, r, n) {
  var i = e.sel.ranges.slice(0);
  i[t] = r, Xi(e, mi(i, e.sel.primIndex), n)
 }

 function Ki(e, t, r, n) {
  Xi(e, yi(t, r), n)
 }

 function ji(e, t, r) {
  var n = e.history.done,
   i = q(n);
  i && i.ranges ? _i(e, n[n.length - 1] = t, r) : Xi(e, t, r)
 }

 function Xi(e, t, r) {
  _i(e, t, r), Fi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
 }

 function _i(e, t, r) {
  var n, i, o, l;
  (ct(e, "beforeSelectionChange") || e.cm && ct(e.cm, "beforeSelectionChange")) && (n = e, o = r, l = {
   ranges: (i = t).ranges,
   update: function(e) {
    this.ranges = [];
    for (var t = 0; t < e.length; t++) this.ranges[t] = new vi(Se(n, e[t].anchor), Se(n, e[t].head))
   },
   origin: o && o.origin
  }, st(n, "beforeSelectionChange", n, l), n.cm && st(n.cm, "beforeSelectionChange", n.cm, l), t = l.ranges != i.ranges ? mi(l.ranges, l.ranges.length - 1) : i);
  var s = r && r.bias || (me(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
  Yi(e, $i(e, t, s, !0)), r && !1 === r.scroll || !e.cm || Ln(e.cm)
 }

 function Yi(e, t) {
  t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, ut(e.cm)), cr(e, "cursorActivity", e))
 }

 function qi(e) {
  Yi(e, $i(e, e.sel, null, !1))
 }

 function $i(e, t, r, n) {
  for (var i, o = 0; o < t.ranges.length; o++) {
   var l = t.ranges[o],
    s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
    a = Qi(e, l.anchor, s && s.anchor, r, n),
    u = Qi(e, l.head, s && s.head, r, n);
   (i || a != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new vi(a, u))
  }
  return i ? mi(i, t.primIndex) : t
 }

 function Zi(e, t, r, n, i) {
  var o = ae(e, t.line);
  if (o.markedSpans)
   for (var l = 0; l < o.markedSpans.length; ++l) {
    var s = o.markedSpans[l],
     a = s.marker;
    if ((null == s.from || (a.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (a.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
     if (i && (st(a, "beforeCursorEnter"), a.explicitlyCleared)) {
      if (o.markedSpans) {
       --l;
       continue
      }
      break
     }
     if (!a.atomic) continue;
     if (r) {
      var u = a.find(n < 0 ? 1 : -1),
       c = void 0;
      if ((n < 0 ? a.inclusiveRight : a.inclusiveLeft) && (u = Ji(e, u, -n, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = me(u, r)) && (n < 0 ? c < 0 : 0 < c)) return Zi(e, u, t, n, i)
     }
     var h = a.find(n < 0 ? -1 : 1);
     return (n < 0 ? a.inclusiveLeft : a.inclusiveRight) && (h = Ji(e, h, n, h.line == t.line ? o : null)), h ? Zi(e, h, t, n, i) : null
    }
   }
  return t
 }

 function Qi(e, t, r, n, i) {
  var o = n || 1,
   l = Zi(e, t, r, o, i) || !i && Zi(e, t, r, o, !0) || Zi(e, t, r, -o, i) || !i && Zi(e, t, r, -o, !0);
  return l || (e.cantEdit = !0, ve(e.first, 0))
 }

 function Ji(e, t, r, n) {
  return r < 0 && 0 == t.ch ? t.line > e.first ? Se(e, ve(t.line - 1)) : null : 0 < r && t.ch == (n || ae(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? ve(t.line + 1, 0) : null : new ve(t.line, t.ch + r)
 }

 function eo(e) {
  e.setSelection(ve(e.firstLine(), 0), ve(e.lastLine()), V)
 }

 function to(i, e, t) {
  var o = {
   canceled: !1,
   from: e.from,
   to: e.to,
   text: e.text,
   origin: e.origin,
   cancel: function() {
    return o.canceled = !0
   }
  };
  return t && (o.update = function(e, t, r, n) {
   e && (o.from = Se(i, e)), t && (o.to = Se(i, t)), r && (o.text = r), void 0 !== n && (o.origin = n)
  }), st(i, "beforeChange", i, o), i.cm && st(i.cm, "beforeChange", i.cm, o), o.canceled ? null : {
   from: o.from,
   to: o.to,
   text: o.text,
   origin: o.origin
  }
 }

 function ro(e, t, r) {
  if (e.cm) {
   if (!e.cm.curOp) return Xn(e.cm, ro)(e, t, r);
   if (e.cm.state.suppressEdits) return
  }
  if (!(ct(e, "beforeChange") || e.cm && ct(e.cm, "beforeChange")) || (t = to(e, t, !0))) {
   var n = ke && !r && function(e, t, r) {
    var n = null;
    if (e.iter(t.line, r.line + 1, function(e) {
      if (e.markedSpans)
       for (var t = 0; t < e.markedSpans.length; ++t) {
        var r = e.markedSpans[t].marker;
        !r.readOnly || n && -1 != B(n, r) || (n || (n = [])).push(r)
       }
     }), !n) return null;
    for (var i = [{
      from: t,
      to: r
     }], o = 0; o < n.length; ++o)
     for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!(me(u.to, s.from) < 0 || 0 < me(u.from, s.to))) {
       var c = [a, 1],
        h = me(u.from, s.from),
        f = me(u.to, s.to);
       (h < 0 || !l.inclusiveLeft && !h) && c.push({
        from: u.from,
        to: s.from
       }), (0 < f || !l.inclusiveRight && !f) && c.push({
        from: s.to,
        to: u.to
       }), i.splice.apply(i, c), a += c.length - 3
      }
     }
    return i
   }(e, t.from, t.to);
   if (n)
    for (var i = n.length - 1; 0 <= i; --i) no(e, {
     from: n[i].from,
     to: n[i].to,
     text: i ? [""] : t.text
    });
   else no(e, t)
  }
 }

 function no(e, r) {
  if (1 != r.text.length || "" != r.text[0] || 0 != me(r.from, r.to)) {
   var t = wi(e, r);
   Hi(e, r, t, e.cm ? e.cm.curOp.id : NaN), lo(e, r, t, Ae(e, r));
   var n = [];
   Ti(e, function(e, t) {
    t || -1 != B(n, e.history) || (co(e.history, r), n.push(e.history)), lo(e, r, null, Ae(e, r))
   })
  }
 }

 function io(i, o, e) {
  if (!i.cm || !i.cm.state.suppressEdits || e) {
   for (var l, t = i.history, r = i.sel, s = "undo" == o ? t.done : t.undone, n = "undo" == o ? t.undone : t.done, a = 0; a < s.length && (l = s[a], e ? !l.ranges || l.equals(i.sel) : l.ranges); a++);
   if (a != s.length) {
    for (t.lastOrigin = t.lastSelOrigin = null;
     (l = s.pop()).ranges;) {
     if (Ei(l, n), e && !l.equals(i.sel)) return void Xi(i, l, {
      clearRedo: !1
     });
     r = l
    }
    var u = [];
    Ei(r, n), n.push({
     changes: u,
     generation: t.generation
    }), t.generation = l.generation || ++t.maxGeneration;
    for (var c = ct(i, "beforeChange") || i.cm && ct(i.cm, "beforeChange"), h = function(e) {
      var r = l.changes[e];
      if (r.origin = o, c && !to(i, r, !1)) return s.length = 0, {};
      u.push(Wi(i, r));
      var t = e ? wi(i, r) : q(s);
      lo(i, r, t, Ii(i, r)), !e && i.cm && i.cm.scrollIntoView({
       from: r.from,
       to: bi(r)
      });
      var n = [];
      Ti(i, function(e, t) {
       t || -1 != B(n, e.history) || (co(e.history, r), n.push(e.history)), lo(e, r, null, Ii(e, r))
      })
     }, f = l.changes.length - 1; 0 <= f; --f) {
     var d = h(f);
     if (d) return d.v
    }
   }
  }
 }

 function oo(e, t) {
  if (0 != t && (e.first += t, e.sel = new gi($(e.sel.ranges, function(e) {
    return new vi(ve(e.anchor.line + t, e.anchor.ch), ve(e.head.line + t, e.head.ch))
   }), e.sel.primIndex), e.cm)) {
   qn(e.cm, e.first, e.first - t, t);
   for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) $n(e.cm, n, "gutter")
  }
 }

 function lo(e, t, r, n) {
  if (e.cm && !e.cm.curOp) return Xn(e.cm, lo)(e, t, r, n);
  if (t.to.line < e.first) oo(e, t.text.length - 1 - (t.to.line - t.from.line));
  else if (!(t.from.line > e.lastLine())) {
   if (t.from.line < e.first) {
    var i = t.text.length - 1 - (e.first - t.from.line);
    oo(e, i), t = {
     from: ve(e.first, 0),
     to: ve(t.to.line + i, t.to.ch),
     text: [q(t.text)],
     origin: t.origin
    }
   }
   var o = e.lastLine();
   t.to.line > o && (t = {
    from: t.from,
    to: ve(o, ae(e, o).text.length),
    text: [t.text[0]],
    origin: t.origin
   }), t.removed = ue(e, t.from, t.to), r || (r = wi(e, t)), e.cm ? function(e, t, r) {
    var n = e.doc,
     i = e.display,
     o = t.from,
     l = t.to,
     s = !1,
     a = o.line;
    e.options.lineWrapping || (a = fe(Ge(ae(n, o.line))), n.iter(a, l.line + 1, function(e) {
     if (e == i.maxLine) return s = !0
    })); - 1 < n.sel.contains(t.from, t.to) && ut(e);
    Mi(n, t, r, nn(e)), e.options.lineWrapping || (n.iter(a, o.line + t.text.length, function(e) {
     var t = _e(e);
     t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
    }), s && (e.curOp.updateMaxLine = !0));
    (function(e, t) {
     if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
      for (var r = e.first, n = t - 1; r < n; n--) {
       var i = ae(e, n).stateAfter;
       if (i && (!(i instanceof It) || n + i.lookAhead < t)) {
        r = n + 1;
        break
       }
      }
      e.highlightFrontier = Math.min(e.highlightFrontier, r)
     }
    })(n, o.line), ei(e, 400);
    var u = t.text.length - (l.line - o.line) - 1;
    t.full ? qn(e) : o.line != l.line || 1 != t.text.length || ki(e.doc, t) ? qn(e, o.line, l.line + 1, u) : $n(e, o.line, "text");
    var c = ct(e, "changes"),
     h = ct(e, "change");
    if (h || c) {
     var f = {
      from: o,
      to: l,
      text: t.text,
      removed: t.removed,
      origin: t.origin
     };
     h && cr(e, "change", e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
    }
    e.display.selForContextMenu = null
   }(e.cm, t, n) : Mi(e, t, n), _i(e, r, V)
  }
 }

 function so(e, t, r, n, i) {
  if (n || (n = r), me(n, r) < 0) {
   var o = n;
   n = r, r = o
  }
  "string" == typeof t && (t = e.splitLines(t)), ro(e, {
   from: r,
   to: n,
   text: t,
   origin: i
  })
 }

 function ao(e, t, r, n) {
  r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
 }

 function uo(e, t, r, n) {
  for (var i = 0; i < e.length; ++i) {
   var o = e[i],
    l = !0;
   if (o.ranges) {
    o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
    for (var s = 0; s < o.ranges.length; s++) ao(o.ranges[s].anchor, t, r, n), ao(o.ranges[s].head, t, r, n)
   } else {
    for (var a = 0; a < o.changes.length; ++a) {
     var u = o.changes[a];
     if (r < u.from.line) u.from = ve(u.from.line + n, u.from.ch), u.to = ve(u.to.line + n, u.to.ch);
     else if (t <= u.to.line) {
      l = !1;
      break
     }
    }
    l || (e.splice(0, i + 1), i = 0)
   }
  }
 }

 function co(e, t) {
  var r = t.from.line,
   n = t.to.line,
   i = t.text.length - (n - r) - 1;
  uo(e.done, r, n, i), uo(e.undone, r, n, i)
 }

 function ho(e, t, r, n) {
  var i = t,
   o = t;
  return "number" == typeof t ? o = ae(e, Ce(e, t)) : i = fe(t), null == i ? null : (n(o, i) && e.cm && $n(e.cm, i, r), o)
 }

 function fo(e) {
  this.lines = e, this.parent = null;
  for (var t = 0, r = 0; r < e.length; ++r) e[r].parent = this, t += e[r].height;
  this.height = t
 }

 function po(e) {
  this.children = e;
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
   var i = e[n];
   t += i.chunkSize(), r += i.height, i.parent = this
  }
  this.size = t, this.height = r, this.parent = null
 }
 vi.prototype.from = function() {
  return we(this.anchor, this.head)
 }, vi.prototype.to = function() {
  return xe(this.anchor, this.head)
 }, vi.prototype.empty = function() {
  return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
 }, fo.prototype = {
  chunkSize: function() {
   return this.lines.length
  },
  removeInner: function(e, t) {
   for (var r, n = e, i = e + t; n < i; ++n) {
    var o = this.lines[n];
    this.height -= o.height, (r = o).parent = null, De(r), cr(o, "delete")
   }
   this.lines.splice(e, t)
  },
  collapse: function(e) {
   e.push.apply(e, this.lines)
  },
  insertInner: function(e, t, r) {
   this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
   for (var n = 0; n < t.length; ++n) t[n].parent = this
  },
  iterN: function(e, t, r) {
   for (var n = e + t; e < n; ++e)
    if (r(this.lines[e])) return !0
  }
 }, po.prototype = {
  chunkSize: function() {
   return this.size
  },
  removeInner: function(e, t) {
   this.size -= t;
   for (var r = 0; r < this.children.length; ++r) {
    var n = this.children[r],
     i = n.chunkSize();
    if (e < i) {
     var o = Math.min(t, i - e),
      l = n.height;
     if (n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
     e = 0
    } else e -= i
   }
   if (this.size - t < 25 && (1 < this.children.length || !(this.children[0] instanceof fo))) {
    var s = [];
    this.collapse(s), this.children = [new fo(s)], this.children[0].parent = this
   }
  },
  collapse: function(e) {
   for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
  },
  insertInner: function(e, t, r) {
   this.size += t.length, this.height += r;
   for (var n = 0; n < this.children.length; ++n) {
    var i = this.children[n],
     o = i.chunkSize();
    if (e <= o) {
     if (i.insertInner(e, t, r), i.lines && 50 < i.lines.length) {
      for (var l = i.lines.length % 25 + 25, s = l; s < i.lines.length;) {
       var a = new fo(i.lines.slice(s, s += 25));
       i.height -= a.height, this.children.splice(++n, 0, a), a.parent = this
      }
      i.lines = i.lines.slice(0, l), this.maybeSpill()
     }
     break
    }
    e -= o
   }
  },
  maybeSpill: function() {
   if (!(this.children.length <= 10)) {
    var e = this;
    do {
     var t = new po(e.children.splice(e.children.length - 5, 5));
     if (e.parent) {
      e.size -= t.size, e.height -= t.height;
      var r = B(e.parent.children, e);
      e.parent.children.splice(r + 1, 0, t)
     } else {
      var n = new po(e.children);
      (n.parent = e).children = [n, t], e = n
     }
     t.parent = e.parent
    } while (10 < e.children.length);
    e.parent.maybeSpill()
   }
  },
  iterN: function(e, t, r) {
   for (var n = 0; n < this.children.length; ++n) {
    var i = this.children[n],
     o = i.chunkSize();
    if (e < o) {
     var l = Math.min(t, o - e);
     if (i.iterN(e, l, r)) return !0;
     if (0 == (t -= l)) break;
     e = 0
    } else e -= o
   }
  }
 };
 var go = function(e, t, r) {
  if (r)
   for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
  this.doc = e, this.node = t
 };

 function vo(e, t, r) {
  Xe(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Sn(e, r)
 }
 go.prototype.clear = function() {
  var e = this.doc.cm,
   t = this.line.widgets,
   r = this.line,
   n = fe(r);
  if (null != n && t) {
   for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
   t.length || (r.widgets = null);
   var o = Cr(this);
   he(r, Math.max(0, r.height - o)), e && (jn(e, function() {
    vo(e, r, -o), $n(e, n, "widget")
   }), cr(e, "lineWidgetCleared", e, this, n))
  }
 }, go.prototype.changed = function() {
  var e = this,
   t = this.height,
   r = this.doc.cm,
   n = this.line;
  this.height = null;
  var i = Cr(this) - t;
  i && (he(n, n.height + i), r && jn(r, function() {
   r.curOp.forceUpdate = !0, vo(r, n, i), cr(r, "lineWidgetChanged", r, e, fe(n))
  }))
 }, ht(go);
 var mo = 0,
  yo = function(e, t) {
   this.lines = [], this.type = t, this.doc = e, this.id = ++mo
  };

 function bo(t, n, i, e, r) {
  if (e && e.shared) return function(e, r, n, i, o) {
   (i = z(i)).shared = !1;
   var l = [bo(e, r, n, i, o)],
    s = l[0],
    a = i.widgetNode;
   return Ti(e, function(e) {
    a && (i.widgetNode = a.cloneNode(!0)), l.push(bo(e, Se(e, r), Se(e, n), i, o));
    for (var t = 0; t < e.linked.length; ++t)
     if (e.linked[t].isParent) return;
    s = q(l)
   }), new xo(l, s)
  }(t, n, i, e, r);
  if (t.cm && !t.cm.curOp) return Xn(t.cm, bo)(t, n, i, e, r);
  var o = new yo(t, r),
   l = me(n, i);
  if (e && z(e, o, !1), 0 < l || 0 == l && !1 !== o.clearWhenEmpty) return o;
  if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), e.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), e.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
   if (Be(t, n.line, n, i, o) || n.line != i.line && Be(t, i.line, n, i, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
   Me = !0
  }
  o.addToHistory && Hi(t, {
   from: n,
   to: i,
   origin: "markText"
  }, t.sel, NaN);
  var s, a = n.line,
   u = t.cm;
  if (t.iter(a, i.line + 1, function(e) {
    var t, r;
    u && o.collapsed && !u.options.lineWrapping && Ge(e) == u.display.maxLine && (s = !0), o.collapsed && a != n.line && he(e, 0), t = e, r = new Te(o, a == n.line ? n.ch : null, a == i.line ? i.ch : null), t.markedSpans = t.markedSpans ? t.markedSpans.concat([r]) : [r], r.marker.attachLine(t), ++a
   }), o.collapsed && t.iter(n.line, i.line + 1, function(e) {
    Ke(t, e) && he(e, 0)
   }), o.clearOnEnter && it(o, "beforeCursorEnter", function() {
    return o.clear()
   }), o.readOnly && (ke = !0, (t.history.done.length || t.history.undone.length) && t.clearHistory()), o.collapsed && (o.id = ++mo, o.atomic = !0), u) {
   if (s && (u.curOp.updateMaxLine = !0), o.collapsed) qn(u, n.line, i.line + 1);
   else if (o.className || o.title || o.startStyle || o.endStyle || o.css)
    for (var c = n.line; c <= i.line; c++) $n(u, c, "text");
   o.atomic && qi(u.doc), cr(u, "markerAdded", u, o)
  }
  return o
 }
 yo.prototype.clear = function() {
  var e = this;
  if (!this.explicitlyCleared) {
   var t = this.doc.cm,
    r = t && !t.curOp;
   if (r && Rn(t), ct(this, "clear")) {
    var n = this.find();
    n && cr(this, "clear", n.from, n.to)
   }
   for (var i = null, o = null, l = 0; l < this.lines.length; ++l) {
    var s = e.lines[l],
     a = Ne(s.markedSpans, e);
    t && !e.collapsed ? $n(t, fe(s), "text") : t && (null != a.to && (o = fe(s)), null != a.from && (i = fe(s))), s.markedSpans = Oe(s.markedSpans, a), null == a.from && e.collapsed && !Ke(e.doc, s) && t && he(s, Jr(t.display))
   }
   if (t && this.collapsed && !t.options.lineWrapping)
    for (var u = 0; u < this.lines.length; ++u) {
     var c = Ge(e.lines[u]),
      h = _e(c);
     h > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = h, t.display.maxLineChanged = !0)
    }
   null != i && t && this.collapsed && qn(t, i, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && qi(t.doc)), t && cr(t, "markerCleared", t, this, i, o), r && Bn(t), this.parent && this.parent.clear()
  }
 }, yo.prototype.find = function(e, t) {
  var r, n;
  null == e && "bookmark" == this.type && (e = 1);
  for (var i = 0; i < this.lines.length; ++i) {
   var o = this.lines[i],
    l = Ne(o.markedSpans, this);
   if (null != l.from && (r = ve(t ? o : fe(o), l.from), -1 == e)) return r;
   if (null != l.to && (n = ve(t ? o : fe(o), l.to), 1 == e)) return n
  }
  return r && {
   from: r,
   to: n
  }
 }, yo.prototype.changed = function() {
  var o = this,
   l = this.find(-1, !0),
   s = this,
   a = this.doc.cm;
  l && a && jn(a, function() {
   var e = l.line,
    t = fe(l.line),
    r = Dr(a, t);
   if (r && (Rr(r), a.curOp.selectionChanged = a.curOp.forceUpdate = !0), a.curOp.updateMaxLine = !0, !Ke(s.doc, e) && null != s.height) {
    var n = s.height;
    s.height = null;
    var i = Cr(s) - n;
    i && he(e, e.height + i)
   }
   cr(a, "markerChanged", a, o)
  })
 }, yo.prototype.attachLine = function(e) {
  if (!this.lines.length && this.doc.cm) {
   var t = this.doc.cm.curOp;
   t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
  }
  this.lines.push(e)
 }, yo.prototype.detachLine = function(e) {
  if (this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm) {
   var t = this.doc.cm.curOp;
   (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
  }
 }, ht(yo);
 var xo = function(e, t) {
  this.markers = e, this.primary = t;
  for (var r = 0; r < e.length; ++r) e[r].parent = this
 };

 function wo(e) {
  return e.findMarks(ve(e.first, 0), e.clipPos(ve(e.lastLine())), function(e) {
   return e.parent
  })
 }

 function Co(o) {
  for (var e = function(e) {
    var t = o[e],
     r = [t.primary.doc];
    Ti(t.primary.doc, function(e) {
     return r.push(e)
    });
    for (var n = 0; n < t.markers.length; n++) {
     var i = t.markers[n]; - 1 == B(r, i.doc) && (i.parent = null, t.markers.splice(n--, 1))
    }
   }, t = 0; t < o.length; t++) e(t)
 }
 xo.prototype.clear = function() {
  if (!this.explicitlyCleared) {
   this.explicitlyCleared = !0;
   for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
   cr(this, "clear")
  }
 }, xo.prototype.find = function(e, t) {
  return this.primary.find(e, t)
 }, ht(xo);
 var So = 0,
  Lo = function(e, t, r, n, i) {
   if (!(this instanceof Lo)) return new Lo(e, t, r, n, i);
   null == r && (r = 0), po.call(this, [new fo([new $t("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
   var o = ve(r, 0);
   this.sel = yi(o), this.history = new Ai(null), this.id = ++So, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Mi(this, {
    from: o,
    to: o,
    text: e
   }), Xi(this, yi(o), V)
  };
 Lo.prototype = Q(po.prototype, {
  constructor: Lo,
  iter: function(e, t, r) {
   r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
  },
  insert: function(e, t) {
   for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
   this.insertInner(e - this.first, t, r)
  },
  remove: function(e, t) {
   this.removeInner(e - this.first, t)
  },
  getValue: function(e) {
   var t = ce(this, this.first, this.first + this.size);
   return !1 === e ? t : t.join(e || this.lineSeparator())
  },
  setValue: Yn(function(e) {
   var t = ve(this.first, 0),
    r = this.first + this.size - 1;
   ro(this, {
    from: t,
    to: ve(r, ae(this, r).text.length),
    text: this.splitLines(e),
    origin: "setValue",
    full: !0
   }, !0), this.cm && kn(this.cm, 0, 0), Xi(this, yi(t), V)
  }),
  replaceRange: function(e, t, r, n) {
   so(this, e, t = Se(this, t), r = r ? Se(this, r) : t, n)
  },
  getRange: function(e, t, r) {
   var n = ue(this, Se(this, e), Se(this, t));
   return !1 === r ? n : n.join(r || this.lineSeparator())
  },
  getLine: function(e) {
   var t = this.getLineHandle(e);
   return t && t.text
  },
  getLineHandle: function(e) {
   if (pe(this, e)) return ae(this, e)
  },
  getLineNumber: function(e) {
   return fe(e)
  },
  getLineHandleVisualStart: function(e) {
   return "number" == typeof e && (e = ae(this, e)), Ge(e)
  },
  lineCount: function() {
   return this.size
  },
  firstLine: function() {
   return this.first
  },
  lastLine: function() {
   return this.first + this.size - 1
  },
  clipPos: function(e) {
   return Se(this, e)
  },
  getCursor: function(e) {
   var t = this.sel.primary();
   return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
  },
  listSelections: function() {
   return this.sel.ranges
  },
  somethingSelected: function() {
   return this.sel.somethingSelected()
  },
  setCursor: Yn(function(e, t, r) {
   Ki(this, Se(this, "number" == typeof e ? ve(e, t || 0) : e), null, r)
  }),
  setSelection: Yn(function(e, t, r) {
   Ki(this, Se(this, e), Se(this, t || e), r)
  }),
  extendSelection: Yn(function(e, t, r) {
   Gi(this, Se(this, e), t && Se(this, t), r)
  }),
  extendSelections: Yn(function(e, t) {
   Ui(this, Le(this, e), t)
  }),
  extendSelectionsBy: Yn(function(e, t) {
   Ui(this, Le(this, $(this.sel.ranges, e)), t)
  }),
  setSelections: Yn(function(e, t, r) {
   if (e.length) {
    for (var n = [], i = 0; i < e.length; i++) n[i] = new vi(Se(this, e[i].anchor), Se(this, e[i].head));
    null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Xi(this, mi(n, t), r)
   }
  }),
  addSelection: Yn(function(e, t, r) {
   var n = this.sel.ranges.slice(0);
   n.push(new vi(Se(this, e), Se(this, t || e))), Xi(this, mi(n, n.length - 1), r)
  }),
  getSelection: function(e) {
   for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
    var i = ue(this, r[n].from(), r[n].to());
    t = t ? t.concat(i) : i
   }
   return !1 === e ? t : t.join(e || this.lineSeparator())
  },
  getSelections: function(e) {
   for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
    var i = ue(this, r[n].from(), r[n].to());
    !1 !== e && (i = i.join(e || this.lineSeparator())), t[n] = i
   }
   return t
  },
  replaceSelection: function(e, t, r) {
   for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
   this.replaceSelections(n, t, r || "+input")
  },
  replaceSelections: Yn(function(e, t, r) {
   for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
    var l = i.ranges[o];
    n[o] = {
     from: l.from(),
     to: l.to(),
     text: this.splitLines(e[o]),
     origin: r
    }
   }
   for (var s = t && "end" != t && function(e, t, r) {
     for (var n = [], i = ve(e.first, 0), o = i, l = 0; l < t.length; l++) {
      var s = t[l],
       a = Ci(s.from, i, o),
       u = Ci(bi(s), i, o);
      if (i = s.to, o = u, "around" == r) {
       var c = e.sel.ranges[l],
        h = me(c.head, c.anchor) < 0;
       n[l] = new vi(h ? u : a, h ? a : u)
      } else n[l] = new vi(a, a)
     }
     return new gi(n, e.sel.primIndex)
    }(this, n, t), a = n.length - 1; 0 <= a; a--) ro(this, n[a]);
   s ? ji(this, s) : this.cm && Ln(this.cm)
  }),
  undo: Yn(function() {
   io(this, "undo")
  }),
  redo: Yn(function() {
   io(this, "redo")
  }),
  undoSelection: Yn(function() {
   io(this, "undo", !0)
  }),
  redoSelection: Yn(function() {
   io(this, "redo", !0)
  }),
  setExtending: function(e) {
   this.extend = e
  },
  getExtending: function() {
   return this.extend
  },
  historySize: function() {
   for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
   for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
   return {
    undo: t,
    redo: r
   }
  },
  clearHistory: function() {
   this.history = new Ai(this.history.maxGeneration)
  },
  markClean: function() {
   this.cleanGeneration = this.changeGeneration(!0)
  },
  changeGeneration: function(e) {
   return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
  },
  isClean: function(e) {
   return this.history.generation == (e || this.cleanGeneration)
  },
  getHistory: function() {
   return {
    done: Ri(this.history.done),
    undone: Ri(this.history.undone)
   }
  },
  setHistory: function(e) {
   var t = this.history = new Ai(this.history.maxGeneration);
   t.done = Ri(e.done.slice(0), null, !0), t.undone = Ri(e.undone.slice(0), null, !0)
  },
  setGutterMarker: Yn(function(e, r, n) {
   return ho(this, e, "gutter", function(e) {
    var t = e.gutterMarkers || (e.gutterMarkers = {});
    return !(t[r] = n) && re(t) && (e.gutterMarkers = null), !0
   })
  }),
  clearGutter: Yn(function(t) {
   var r = this;
   this.iter(function(e) {
    e.gutterMarkers && e.gutterMarkers[t] && ho(r, e, "gutter", function() {
     return e.gutterMarkers[t] = null, re(e.gutterMarkers) && (e.gutterMarkers = null), !0
    })
   })
  }),
  lineInfo: function(e) {
   var t;
   if ("number" == typeof e) {
    if (!pe(this, e)) return null;
    if (!(e = ae(this, t = e))) return null
   } else if (null == (t = fe(e))) return null;
   return {
    line: t,
    handle: e,
    text: e.text,
    gutterMarkers: e.gutterMarkers,
    textClass: e.textClass,
    bgClass: e.bgClass,
    wrapClass: e.wrapClass,
    widgets: e.widgets
   }
  },
  addLineClass: Yn(function(e, r, n) {
   return ho(this, e, "gutter" == r ? "gutter" : "class", function(e) {
    var t = "text" == r ? "textClass" : "background" == r ? "bgClass" : "gutter" == r ? "gutterClass" : "wrapClass";
    if (e[t]) {
     if (L(n).test(e[t])) return !1;
     e[t] += " " + n
    } else e[t] = n;
    return !0
   })
  }),
  removeLineClass: Yn(function(e, o, l) {
   return ho(this, e, "gutter" == o ? "gutter" : "class", function(e) {
    var t = "text" == o ? "textClass" : "background" == o ? "bgClass" : "gutter" == o ? "gutterClass" : "wrapClass",
     r = e[t];
    if (!r) return !1;
    if (null == l) e[t] = null;
    else {
     var n = r.match(L(l));
     if (!n) return !1;
     var i = n.index + n[0].length;
     e[t] = r.slice(0, n.index) + (n.index && i != r.length ? " " : "") + r.slice(i) || null
    }
    return !0
   })
  }),
  addLineWidget: Yn(function(e, t, r) {
   return i = e, o = new go(n = this, t, r), (l = n.cm) && o.noHScroll && (l.display.alignWidgets = !0), ho(n, i, "widget", function(e) {
    var t = e.widgets || (e.widgets = []);
    if (null == o.insertAt ? t.push(o) : t.splice(Math.min(t.length - 1, Math.max(0, o.insertAt)), 0, o), o.line = e, l && !Ke(n, e)) {
     var r = Xe(e) < n.scrollTop;
     he(e, e.height + Cr(o)), r && Sn(l, o.height), l.curOp.forceUpdate = !0
    }
    return !0
   }), cr(l, "lineWidgetAdded", l, o, "number" == typeof i ? i : fe(i)), o;
   var n, i, o, l
  }),
  removeLineWidget: function(e) {
   e.clear()
  },
  markText: function(e, t, r) {
   return bo(this, Se(this, e), Se(this, t), r, r && r.type || "range")
  },
  setBookmark: function(e, t) {
   var r = {
    replacedWith: t && (null == t.nodeType ? t.widget : t),
    insertLeft: t && t.insertLeft,
    clearWhenEmpty: !1,
    shared: t && t.shared,
    handleMouseEvents: t && t.handleMouseEvents
   };
   return bo(this, e = Se(this, e), e, r, "bookmark")
  },
  findMarksAt: function(e) {
   var t = [],
    r = ae(this, (e = Se(this, e)).line).markedSpans;
   if (r)
    for (var n = 0; n < r.length; ++n) {
     var i = r[n];
     (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
    }
   return t
  },
  findMarks: function(i, o, l) {
   i = Se(this, i), o = Se(this, o);
   var s = [],
    a = i.line;
   return this.iter(i.line, o.line + 1, function(e) {
    var t = e.markedSpans;
    if (t)
     for (var r = 0; r < t.length; r++) {
      var n = t[r];
      null != n.to && a == i.line && i.ch >= n.to || null == n.from && a != i.line || null != n.from && a == o.line && n.from >= o.ch || l && !l(n.marker) || s.push(n.marker.parent || n.marker)
     }++a
   }), s
  },
  getAllMarks: function() {
   var n = [];
   return this.iter(function(e) {
    var t = e.markedSpans;
    if (t)
     for (var r = 0; r < t.length; ++r) null != t[r].from && n.push(t[r].marker)
   }), n
  },
  posFromIndex: function(r) {
   var n, i = this.first,
    o = this.lineSeparator().length;
   return this.iter(function(e) {
    var t = e.text.length + o;
    if (r < t) return n = r, !0;
    r -= t, ++i
   }), Se(this, ve(i, n))
  },
  indexFromPos: function(e) {
   var t = (e = Se(this, e)).ch;
   if (e.line < this.first || e.ch < 0) return 0;
   var r = this.lineSeparator().length;
   return this.iter(this.first, e.line, function(e) {
    t += e.text.length + r
   }), t
  },
  copy: function(e) {
   var t = new Lo(ce(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
   return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
  },
  linkedDoc: function(e) {
   e || (e = {});
   var t = this.first,
    r = this.first + this.size;
   null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
   var n = new Lo(ce(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
   return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
     doc: n,
     sharedHist: e.sharedHist
    }), n.linked = [{
     doc: this,
     isParent: !0,
     sharedHist: e.sharedHist
    }],
    function(e, t) {
     for (var r = 0; r < t.length; r++) {
      var n = t[r],
       i = n.find(),
       o = e.clipPos(i.from),
       l = e.clipPos(i.to);
      if (me(o, l)) {
       var s = bo(e, o, l, n.primary, n.primary.type);
       n.markers.push(s), s.parent = n
      }
     }
    }(n, wo(this)), n
  },
  unlinkDoc: function(e) {
   if (e instanceof ml && (e = e.doc), this.linked)
    for (var t = 0; t < this.linked.length; ++t) {
     if (this.linked[t].doc == e) {
      this.linked.splice(t, 1), e.unlinkDoc(this), Co(wo(this));
      break
     }
    }
   if (e.history == this.history) {
    var r = [e.id];
    Ti(e, function(e) {
     return r.push(e.id)
    }, !0), e.history = new Ai(null), e.history.done = Ri(this.history.done, r), e.history.undone = Ri(this.history.undone, r)
   }
  },
  iterLinkedDocs: function(e) {
   Ti(this, e)
  },
  getMode: function() {
   return this.mode
  },
  getEditor: function() {
   return this.cm
  },
  splitLines: function(e) {
   return this.lineSep ? e.split(this.lineSep) : Lt(e)
  },
  lineSeparator: function() {
   return this.lineSep || "\n"
  },
  setDirection: Yn(function(e) {
   var t;
   ("rtl" != e && (e = "ltr"), e != this.direction) && (this.direction = e, this.iter(function(e) {
    return e.order = null
   }), this.cm && jn(t = this.cm, function() {
    Oi(t), qn(t)
   }))
  })
 }), Lo.prototype.eachLine = Lo.prototype.iter;
 var ko = 0;

 function Mo(e) {
  var i = this;
  if (To(i), !at(i, e) && !Sr(i.display, e)) {
   ft(e), w && (ko = +new Date);
   var o = ln(i, e, !0),
    t = e.dataTransfer.files;
   if (o && !i.isReadOnly())
    if (t && t.length && window.FileReader && window.File)
     for (var l = t.length, s = Array(l), a = 0, r = function(e, r) {
       if (!i.options.allowDropFileTypes || -1 != B(i.options.allowDropFileTypes, e.type)) {
        var n = new FileReader;
        n.onload = Xn(i, function() {
         var e = n.result;
         if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), s[r] = e, ++a == l) {
          var t = {
           from: o = Se(i.doc, o),
           to: o,
           text: i.doc.splitLines(s.join(i.doc.lineSeparator())),
           origin: "paste"
          };
          ro(i.doc, t), ji(i.doc, yi(o, bi(t)))
         }
        }), n.readAsText(e)
       }
      }, n = 0; n < l; ++n) r(t[n], n);
    else {
     if (i.state.draggingText && -1 < i.doc.sel.contains(o)) return i.state.draggingText(e), void setTimeout(function() {
      return i.display.input.focus()
     }, 20);
     try {
      var u = e.dataTransfer.getData("Text");
      if (u) {
       var c;
       if (i.state.draggingText && !i.state.draggingText.copy && (c = i.listSelections()), _i(i.doc, yi(o, o)), c)
        for (var h = 0; h < c.length; ++h) so(i.doc, "", c[h].anchor, c[h].head, "drag");
       i.replaceSelection(u, "around", "paste"), i.display.input.focus()
      }
     } catch (e) {}
    }
  }
 }

 function To(e) {
  e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
 }

 function No(e) {
  if (document.getElementsByClassName)
   for (var t = document.getElementsByClassName("CodeMirror"), r = 0; r < t.length; r++) {
    var n = t[r].CodeMirror;
    n && e(n)
   }
 }
 var Oo = !1;

 function Ao() {
  var e;
  Oo || (it(window, "resize", function() {
   null == e && (e = setTimeout(function() {
    e = null, No(Wo)
   }, 100))
  }), it(window, "blur", function() {
   return No(vn)
  }), Oo = !0)
 }

 function Wo(e) {
  var t = e.display;
  t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
 }
 for (var Do = {
   3: "Enter",
   8: "Backspace",
   9: "Tab",
   13: "Enter",
   16: "Shift",
   17: "Ctrl",
   18: "Alt",
   19: "Pause",
   20: "CapsLock",
   27: "Esc",
   32: "Space",
   33: "PageUp",
   34: "PageDown",
   35: "End",
   36: "Home",
   37: "Left",
   38: "Up",
   39: "Right",
   40: "Down",
   44: "PrintScrn",
   45: "Insert",
   46: "Delete",
   59: ";",
   61: "=",
   91: "Mod",
   92: "Mod",
   93: "Mod",
   106: "*",
   107: "=",
   109: "-",
   110: ".",
   111: "/",
   127: "Delete",
   173: "-",
   186: ";",
   187: "=",
   188: ",",
   189: "-",
   190: ".",
   191: "/",
   192: "`",
   219: "[",
   220: "\\",
   221: "]",
   222: "'",
   63232: "Up",
   63233: "Down",
   63234: "Left",
   63235: "Right",
   63272: "Delete",
   63273: "Home",
   63275: "End",
   63276: "PageUp",
   63277: "PageDown",
   63302: "Insert"
  }, Ho = 0; Ho < 10; Ho++) Do[Ho + 48] = Do[Ho + 96] = String(Ho);
 for (var Fo = 65; Fo <= 90; Fo++) Do[Fo] = String.fromCharCode(Fo);
 for (var Eo = 1; Eo <= 12; Eo++) Do[Eo + 111] = Do[Eo + 63235] = "F" + Eo;
 var Po = {};

 function zo(e) {
  var t, r, n, i, o = e.split(/-(?!$)/);
  e = o[o.length - 1];
  for (var l = 0; l < o.length - 1; l++) {
   var s = o[l];
   if (/^(cmd|meta|m)$/i.test(s)) i = !0;
   else if (/^a(lt)?$/i.test(s)) t = !0;
   else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
   else {
    if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
    n = !0
   }
  }
  return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
 }

 function Io(e) {
  var t = {};
  for (var r in e)
   if (e.hasOwnProperty(r)) {
    var n = e[r];
    if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
    if ("..." == n) {
     delete e[r];
     continue
    }
    for (var i = $(r.split(" "), zo), o = 0; o < i.length; o++) {
     var l = void 0,
      s = void 0;
     l = o == i.length - 1 ? (s = i.join(" "), n) : (s = i.slice(0, o + 1).join(" "), "...");
     var a = t[s];
     if (a) {
      if (a != l) throw new Error("Inconsistent bindings for " + s)
     } else t[s] = l
    }
    delete e[r]
   } for (var u in t) e[u] = t[u];
  return e
 }

 function Ro(e, t, r, n) {
  var i = (t = Vo(t)).call ? t.call(e, n) : t[e];
  if (!1 === i) return "nothing";
  if ("..." === i) return "multi";
  if (null != i && r(i)) return "handled";
  if (t.fallthrough) {
   if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Ro(e, t.fallthrough, r, n);
   for (var o = 0; o < t.fallthrough.length; o++) {
    var l = Ro(e, t.fallthrough[o], r, n);
    if (l) return l
   }
  }
 }

 function Bo(e) {
  var t = "string" == typeof e ? e : Do[e.keyCode];
  return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
 }

 function Go(e, t, r) {
  var n = e;
  return t.altKey && "Alt" != n && (e = "Alt-" + e), (y ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (y ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e
 }

 function Uo(e, t) {
  if (v && 34 == e.keyCode && e.char) return !1;
  var r = Do[e.keyCode];
  return null != r && !e.altGraphKey && Go(r, e, t)
 }

 function Vo(e) {
  return "string" == typeof e ? Po[e] : e
 }

 function Ko(t, e) {
  for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
   for (var o = e(r[i]); n.length && me(o.from, q(n).to) <= 0;) {
    var l = n.pop();
    if (me(l.from, o.from) < 0) {
     o.from = l.from;
     break
    }
   }
   n.push(o)
  }
  jn(t, function() {
   for (var e = n.length - 1; 0 <= e; e--) so(t.doc, "", n[e].from, n[e].to, "+delete");
   Ln(t)
  })
 }
 Po.basic = {
  Left: "goCharLeft",
  Right: "goCharRight",
  Up: "goLineUp",
  Down: "goLineDown",
  End: "goLineEnd",
  Home: "goLineStartSmart",
  PageUp: "goPageUp",
  PageDown: "goPageDown",
  Delete: "delCharAfter",
  Backspace: "delCharBefore",
  "Shift-Backspace": "delCharBefore",
  Tab: "defaultTab",
  "Shift-Tab": "indentAuto",
  Enter: "newlineAndIndent",
  Insert: "toggleOverwrite",
  Esc: "singleSelection"
 }, Po.pcDefault = {
  "Ctrl-A": "selectAll",
  "Ctrl-D": "deleteLine",
  "Ctrl-Z": "undo",
  "Shift-Ctrl-Z": "redo",
  "Ctrl-Y": "redo",
  "Ctrl-Home": "goDocStart",
  "Ctrl-End": "goDocEnd",
  "Ctrl-Up": "goLineUp",
  "Ctrl-Down": "goLineDown",
  "Ctrl-Left": "goGroupLeft",
  "Ctrl-Right": "goGroupRight",
  "Alt-Left": "goLineStart",
  "Alt-Right": "goLineEnd",
  "Ctrl-Backspace": "delGroupBefore",
  "Ctrl-Delete": "delGroupAfter",
  "Ctrl-S": "save",
  "Ctrl-F": "find",
  "Ctrl-G": "findNext",
  "Shift-Ctrl-G": "findPrev",
  "Shift-Ctrl-F": "replace",
  "Shift-Ctrl-R": "replaceAll",
  "Ctrl-[": "indentLess",
  "Ctrl-]": "indentMore",
  "Ctrl-U": "undoSelection",
  "Shift-Ctrl-U": "redoSelection",
  "Alt-U": "redoSelection",
  fallthrough: "basic"
 }, Po.emacsy = {
  "Ctrl-F": "goCharRight",
  "Ctrl-B": "goCharLeft",
  "Ctrl-P": "goLineUp",
  "Ctrl-N": "goLineDown",
  "Alt-F": "goWordRight",
  "Alt-B": "goWordLeft",
  "Ctrl-A": "goLineStart",
  "Ctrl-E": "goLineEnd",
  "Ctrl-V": "goPageDown",
  "Shift-Ctrl-V": "goPageUp",
  "Ctrl-D": "delCharAfter",
  "Ctrl-H": "delCharBefore",
  "Alt-D": "delWordAfter",
  "Alt-Backspace": "delWordBefore",
  "Ctrl-K": "killLine",
  "Ctrl-T": "transposeChars",
  "Ctrl-O": "openLine"
 }, Po.macDefault = {
  "Cmd-A": "selectAll",
  "Cmd-D": "deleteLine",
  "Cmd-Z": "undo",
  "Shift-Cmd-Z": "redo",
  "Cmd-Y": "redo",
  "Cmd-Home": "goDocStart",
  "Cmd-Up": "goDocStart",
  "Cmd-End": "goDocEnd",
  "Cmd-Down": "goDocEnd",
  "Alt-Left": "goGroupLeft",
  "Alt-Right": "goGroupRight",
  "Cmd-Left": "goLineLeft",
  "Cmd-Right": "goLineRight",
  "Alt-Backspace": "delGroupBefore",
  "Ctrl-Alt-Backspace": "delGroupAfter",
  "Alt-Delete": "delGroupAfter",
  "Cmd-S": "save",
  "Cmd-F": "find",
  "Cmd-G": "findNext",
  "Shift-Cmd-G": "findPrev",
  "Cmd-Alt-F": "replace",
  "Shift-Cmd-Alt-F": "replaceAll",
  "Cmd-[": "indentLess",
  "Cmd-]": "indentMore",
  "Cmd-Backspace": "delWrappedLineLeft",
  "Cmd-Delete": "delWrappedLineRight",
  "Cmd-U": "undoSelection",
  "Shift-Cmd-U": "redoSelection",
  "Ctrl-Up": "goDocStart",
  "Ctrl-Down": "goDocEnd",
  fallthrough: ["basic", "emacsy"]
 }, Po.default = x ? Po.macDefault : Po.pcDefault;
 var jo = {
  selectAll: eo,
  singleSelection: function(e) {
   return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), V)
  },
  killLine: function(r) {
   return Ko(r, function(e) {
    if (e.empty()) {
     var t = ae(r.doc, e.head.line).text.length;
     return e.head.ch == t && e.head.line < r.lastLine() ? {
      from: e.head,
      to: ve(e.head.line + 1, 0)
     } : {
      from: e.head,
      to: ve(e.head.line, t)
     }
    }
    return {
     from: e.from(),
     to: e.to()
    }
   })
  },
  deleteLine: function(t) {
   return Ko(t, function(e) {
    return {
     from: ve(e.from().line, 0),
     to: Se(t.doc, ve(e.to().line + 1, 0))
    }
   })
  },
  delLineLeft: function(e) {
   return Ko(e, function(e) {
    return {
     from: ve(e.from().line, 0),
     to: e.from()
    }
   })
  },
  delWrappedLineLeft: function(r) {
   return Ko(r, function(e) {
    var t = r.charCoords(e.head, "div").top + 5;
    return {
     from: r.coordsChar({
      left: 0,
      top: t
     }, "div"),
     to: e.from()
    }
   })
  },
  delWrappedLineRight: function(n) {
   return Ko(n, function(e) {
    var t = n.charCoords(e.head, "div").top + 5,
     r = n.coordsChar({
      left: n.display.lineDiv.offsetWidth + 100,
      top: t
     }, "div");
    return {
     from: e.from(),
     to: r
    }
   })
  },
  undo: function(e) {
   return e.undo()
  },
  redo: function(e) {
   return e.redo()
  },
  undoSelection: function(e) {
   return e.undoSelection()
  },
  redoSelection: function(e) {
   return e.redoSelection()
  },
  goDocStart: function(e) {
   return e.extendSelection(ve(e.firstLine(), 0))
  },
  goDocEnd: function(e) {
   return e.extendSelection(ve(e.lastLine()))
  },
  goLineStart: function(t) {
   return t.extendSelectionsBy(function(e) {
    return Xo(t, e.head.line)
   }, {
    origin: "+move",
    bias: 1
   })
  },
  goLineStartSmart: function(t) {
   return t.extendSelectionsBy(function(e) {
    return _o(t, e.head)
   }, {
    origin: "+move",
    bias: 1
   })
  },
  goLineEnd: function(t) {
   return t.extendSelectionsBy(function(e) {
    return function(e, t) {
     var r = ae(e.doc, t),
      n = function(e) {
       for (var t; t = Re(e);) e = t.find(1, !0).line;
       return e
      }(r);
     n != r && (t = fe(n));
     return tt(!0, e, r, t, -1)
    }(t, e.head.line)
   }, {
    origin: "+move",
    bias: -1
   })
  },
  goLineRight: function(r) {
   return r.extendSelectionsBy(function(e) {
    var t = r.cursorCoords(e.head, "div").top + 5;
    return r.coordsChar({
     left: r.display.lineDiv.offsetWidth + 100,
     top: t
    }, "div")
   }, j)
  },
  goLineLeft: function(r) {
   return r.extendSelectionsBy(function(e) {
    var t = r.cursorCoords(e.head, "div").top + 5;
    return r.coordsChar({
     left: 0,
     top: t
    }, "div")
   }, j)
  },
  goLineLeftSmart: function(n) {
   return n.extendSelectionsBy(function(e) {
    var t = n.cursorCoords(e.head, "div").top + 5,
     r = n.coordsChar({
      left: 0,
      top: t
     }, "div");
    return r.ch < n.getLine(r.line).search(/\S/) ? _o(n, e.head) : r
   }, j)
  },
  goLineUp: function(e) {
   return e.moveV(-1, "line")
  },
  goLineDown: function(e) {
   return e.moveV(1, "line")
  },
  goPageUp: function(e) {
   return e.moveV(-1, "page")
  },
  goPageDown: function(e) {
   return e.moveV(1, "page")
  },
  goCharLeft: function(e) {
   return e.moveH(-1, "char")
  },
  goCharRight: function(e) {
   return e.moveH(1, "char")
  },
  goColumnLeft: function(e) {
   return e.moveH(-1, "column")
  },
  goColumnRight: function(e) {
   return e.moveH(1, "column")
  },
  goWordLeft: function(e) {
   return e.moveH(-1, "word")
  },
  goGroupRight: function(e) {
   return e.moveH(1, "group")
  },
  goGroupLeft: function(e) {
   return e.moveH(-1, "group")
  },
  goWordRight: function(e) {
   return e.moveH(1, "word")
  },
  delCharBefore: function(e) {
   return e.deleteH(-1, "char")
  },
  delCharAfter: function(e) {
   return e.deleteH(1, "char")
  },
  delWordBefore: function(e) {
   return e.deleteH(-1, "word")
  },
  delWordAfter: function(e) {
   return e.deleteH(1, "word")
  },
  delGroupBefore: function(e) {
   return e.deleteH(-1, "group")
  },
  delGroupAfter: function(e) {
   return e.deleteH(1, "group")
  },
  indentAuto: function(e) {
   return e.indentSelection("smart")
  },
  indentMore: function(e) {
   return e.indentSelection("add")
  },
  indentLess: function(e) {
   return e.indentSelection("subtract")
  },
  insertTab: function(e) {
   return e.replaceSelection("\t")
  },
  insertSoftTab: function(e) {
   for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
    var o = r[i].from(),
     l = I(e.getLine(o.line), o.ch, n);
    t.push(Y(n - l % n))
   }
   e.replaceSelections(t)
  },
  defaultTab: function(e) {
   e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
  },
  transposeChars: function(l) {
   return jn(l, function() {
    for (var e = l.listSelections(), t = [], r = 0; r < e.length; r++)
     if (e[r].empty()) {
      var n = e[r].head,
       i = ae(l.doc, n.line).text;
      if (i)
       if (n.ch == i.length && (n = new ve(n.line, n.ch - 1)), 0 < n.ch) n = new ve(n.line, n.ch + 1), l.replaceRange(i.charAt(n.ch - 1) + i.charAt(n.ch - 2), ve(n.line, n.ch - 2), n, "+transpose");
       else if (n.line > l.doc.first) {
       var o = ae(l.doc, n.line - 1).text;
       o && (n = new ve(n.line, 1), l.replaceRange(i.charAt(0) + l.doc.lineSeparator() + o.charAt(o.length - 1), ve(n.line - 1, o.length - 1), n, "+transpose"))
      }
      t.push(new vi(n, n))
     } l.setSelections(t)
   })
  },
  newlineAndIndent: function(n) {
   return jn(n, function() {
    for (var e = n.listSelections(), t = e.length - 1; 0 <= t; t--) n.replaceRange(n.doc.lineSeparator(), e[t].anchor, e[t].head, "+input");
    e = n.listSelections();
    for (var r = 0; r < e.length; r++) n.indentLine(e[r].from().line, null, !0);
    Ln(n)
   })
  },
  openLine: function(e) {
   return e.replaceSelection("\n", "start")
  },
  toggleOverwrite: function(e) {
   return e.toggleOverwrite()
  }
 };

 function Xo(e, t) {
  var r = ae(e.doc, t),
   n = Ge(r);
  return n != r && (t = fe(n)), tt(!0, e, n, t, 1)
 }

 function _o(e, t) {
  var r = Xo(e, t.line),
   n = ae(e.doc, r.line),
   i = Qe(n, e.doc.direction);
  if (i && 0 != i[0].level) return r;
  var o = Math.max(0, n.text.search(/\S/)),
   l = t.line == r.line && t.ch <= o && t.ch;
  return ve(r.line, l ? 0 : o, r.sticky)
 }

 function Yo(e, t, r) {
  if ("string" == typeof t && !(t = jo[t])) return !1;
  e.display.input.ensurePolled();
  var n = e.display.shift,
   i = !1;
  try {
   e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != U
  } finally {
   e.display.shift = n, e.state.suppressEdits = !1
  }
  return i
 }
 var qo = new R;

 function $o(e, t, r, n) {
  var i = e.state.keySeq;
  if (i) {
   if (Bo(t)) return "handled";
   qo.set(50, function() {
    e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
   }), t = i + " " + t
  }
  var o = function(e, t, r) {
   for (var n = 0; n < e.state.keyMaps.length; n++) {
    var i = Ro(t, e.state.keyMaps[n], r, e);
    if (i) return i
   }
   return e.options.extraKeys && Ro(t, e.options.extraKeys, r, e) || Ro(t, e.options.keyMap, r, e)
  }(e, t, n);
  return "multi" == o && (e.state.keySeq = t), "handled" == o && cr(e, "keyHandled", e, t, r), "handled" != o && "multi" != o || (ft(r), fn(e)), i && !o && /\'$/.test(t) ? (ft(r), !0) : !!o
 }

 function Zo(t, e) {
  var r = Uo(e, !0);
  return !!r && (e.shiftKey && !t.state.keySeq ? $o(t, "Shift-" + r, e, function(e) {
   return Yo(t, e, !0)
  }) || $o(t, r, e, function(e) {
   if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion) return Yo(t, e)
  }) : $o(t, r, e, function(e) {
   return Yo(t, e)
  }))
 }
 var Qo = null;

 function Jo(e) {
  var t = this;
  if (t.curOp.focus = D(), !at(t, e)) {
   w && C < 11 && 27 == e.keyCode && (e.returnValue = !1);
   var r = e.keyCode;
   t.display.shift = 16 == r || e.shiftKey;
   var n = Zo(t, e);
   v && (Qo = n ? r : null, !n && 88 == r && !Mt && (x ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function(e) {
    var t = e.display.lineDiv;

    function r(e) {
     18 != e.keyCode && e.altKey || (M(t, "CodeMirror-crosshair"), lt(document, "keyup", r), lt(document, "mouseover", r))
    }
    H(t, "CodeMirror-crosshair"), it(document, "keyup", r), it(document, "mouseover", r)
   }(t)
  }
 }

 function el(e) {
  16 == e.keyCode && (this.doc.sel.shift = !1), at(this, e)
 }

 function tl(e) {
  var t = this;
  if (!(Sr(t.display, e) || at(t, e) || e.ctrlKey && !e.altKey || x && e.metaKey)) {
   var r = e.keyCode,
    n = e.charCode;
   if (v && r == Qo) return Qo = null, void ft(e);
   if (!v || e.which && !(e.which < 10) || !Zo(t, e)) {
    var i, o = String.fromCharCode(null == n ? r : n);
    if ("\b" != o)
     if (!$o(i = t, "'" + o + "'", e, function(e) {
       return Yo(i, e, !0)
      })) t.display.input.onKeyPress(e)
   }
  }
 }
 var rl, nl, il = function(e, t, r) {
  this.time = e, this.pos = t, this.button = r
 };

 function ol(e) {
  var t = this,
   r = t.display;
  if (!(at(t, e) || r.activeTouch && r.input.supportsTouch()))
   if (r.input.ensurePolled(), r.shift = e.shiftKey, Sr(r, e)) b || (r.scroller.draggable = !1, setTimeout(function() {
    return r.scroller.draggable = !0
   }, 100));
   else if (!al(t, e)) {
   var n, i, o, l = ln(t, e),
    s = mt(e),
    a = l ? (n = l, i = s, o = +new Date, nl && nl.compare(o, n, i) ? (rl = nl = null, "triple") : rl && rl.compare(o, n, i) ? (nl = new il(o, n, i), rl = null, "double") : (rl = new il(o, n, i), nl = null, "single")) : "single";
   window.focus(), 1 == s && t.state.selectingText && t.state.selectingText(e), l && function(r, e, n, t, i) {
    var o = "Click";
    "double" == t ? o = "Double" + o : "triple" == t && (o = "Triple" + o);
    return $o(r, Go(o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o, i), i, function(e) {
     if ("string" == typeof e && (e = jo[e]), !e) return !1;
     var t = !1;
     try {
      r.isReadOnly() && (r.state.suppressEdits = !0), t = e(r, n) != U
     } finally {
      r.state.suppressEdits = !1
     }
     return t
    })
   }(t, s, l, a, e) || (1 == s ? l ? function(e, t, r, n) {
    w ? setTimeout(P(dn, e), 0) : e.curOp.focus = D();
    var i, o = function(e, t, r) {
      var n = e.getOption("configureMouse"),
       i = n ? n(e, t, r) : {};
      if (null == i.unit) {
       var o = d ? r.shiftKey && r.metaKey : r.altKey;
       i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
      }(null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey);
      null == i.addNew && (i.addNew = x ? r.metaKey : r.ctrlKey);
      null == i.moveOnDrag && (i.moveOnDrag = !(x ? r.altKey : r.ctrlKey));
      return i
     }(e, r, n),
     l = e.doc.sel;
    e.options.dragDrop && xt && !e.isReadOnly() && "single" == r && -1 < (i = l.contains(t)) && (me((i = l.ranges[i]).from(), t) < 0 || 0 < t.xRel) && (0 < me(i.to(), t) || t.xRel < 0) ? function(t, r, n, i) {
     var o = t.display,
      l = !1,
      s = Xn(t, function(e) {
       b && (o.scroller.draggable = !1), t.state.draggingText = !1, lt(document, "mouseup", s), lt(document, "mousemove", a), lt(o.scroller, "dragstart", u), lt(o.scroller, "drop", s), l || (ft(e), i.addNew || Gi(t.doc, n, null, null, i.extend), b || w && 9 == C ? setTimeout(function() {
        document.body.focus(), o.input.focus()
       }, 20) : o.input.focus())
      }),
      a = function(e) {
       l = l || 10 <= Math.abs(r.clientX - e.clientX) + Math.abs(r.clientY - e.clientY)
      },
      u = function() {
       return l = !0
      };
     b && (o.scroller.draggable = !0);
     (t.state.draggingText = s).copy = !i.moveOnDrag, o.scroller.dragDrop && o.scroller.dragDrop();
     it(document, "mouseup", s), it(document, "mousemove", a), it(o.scroller, "dragstart", u), it(o.scroller, "drop", s), pn(t), setTimeout(function() {
      return o.input.focus()
     }, 20)
    }(e, n, t, o) : function(v, e, m, y) {
     var o = v.display,
      b = v.doc;
     ft(e);
     var x, w, C = b.sel,
      t = C.ranges;
     y.addNew && !y.extend ? (w = b.sel.contains(m), x = -1 < w ? t[w] : new vi(m, m)) : (x = b.sel.primary(), w = b.sel.primIndex);
     if ("rectangle" == y.unit) y.addNew || (x = new vi(m, m)), m = ln(v, e, !0, !0), w = -1;
     else {
      var r = ll(v, m, y.unit);
      x = y.extend ? Bi(x, r.anchor, r.head, y.extend) : r
     }
     y.addNew ? -1 == w ? (w = t.length, Xi(b, mi(t.concat([x]), w), {
      scroll: !1,
      origin: "*mouse"
     })) : 1 < t.length && t[w].empty() && "char" == y.unit && !y.extend ? (Xi(b, mi(t.slice(0, w).concat(t.slice(w + 1)), 0), {
      scroll: !1,
      origin: "*mouse"
     }), C = b.sel) : Vi(b, w, x, K) : (Xi(b, new gi([x], w = 0), K), C = b.sel);
     var S = m;
     var l = o.wrapper.getBoundingClientRect(),
      s = 0;

     function a(e) {
      var t = ++s,
       r = ln(v, e, !0, "rectangle" == y.unit);
      if (r)
       if (0 != me(r, S)) {
        v.curOp.focus = D(),
         function(e) {
          if (0 == me(S, e)) return;
          if (S = e, "rectangle" == y.unit) {
           for (var t = [], r = v.options.tabSize, n = I(ae(b, m.line).text, m.ch, r), i = I(ae(b, e.line).text, e.ch, r), o = Math.min(n, i), l = Math.max(n, i), s = Math.min(m.line, e.line), a = Math.min(v.lastLine(), Math.max(m.line, e.line)); s <= a; s++) {
            var u = ae(b, s).text,
             c = X(u, o, r);
            o == l ? t.push(new vi(ve(s, c), ve(s, c))) : u.length > c && t.push(new vi(ve(s, c), ve(s, X(u, l, r))))
           }
           t.length || t.push(new vi(m, m)), Xi(b, mi(C.ranges.slice(0, w).concat(t), w), {
            origin: "*mouse",
            scroll: !1
           }), v.scrollIntoView(e)
          } else {
           var h, f = x,
            d = ll(v, e, y.unit),
            p = f.anchor;
           p = 0 < me(d.anchor, p) ? (h = d.head, we(f.from(), d.anchor)) : (h = d.anchor, xe(f.to(), d.head));
           var g = C.ranges.slice(0);
           g[w] = new vi(Se(b, p), h), Xi(b, mi(g, w), K)
          }
         }(r);
        var n = bn(o, b);
        (r.line >= n.to || r.line < n.from) && setTimeout(Xn(v, function() {
         s == t && a(e)
        }), 150)
       } else {
        var i = e.clientY < l.top ? -20 : e.clientY > l.bottom ? 20 : 0;
        i && setTimeout(Xn(v, function() {
         s == t && (o.scroller.scrollTop += i, a(e))
        }), 50)
       }
     }

     function n(e) {
      v.state.selectingText = !1, s = 1 / 0, ft(e), o.input.focus(), lt(document, "mousemove", i), lt(document, "mouseup", u), b.history.lastSelOrigin = null
     }
     var i = Xn(v, function(e) {
       mt(e) ? a(e) : n(e)
      }),
      u = Xn(v, n);
     v.state.selectingText = u, it(document, "mousemove", i), it(document, "mouseup", u)
    }(e, n, t, o)
   }(t, l, a, e) : vt(e) == r.scroller && ft(e) : 2 == s ? (l && Gi(t.doc, l), setTimeout(function() {
    return r.input.focus()
   }, 20)) : 3 == s && (S ? ul(t, e) : pn(t)))
  }
 }

 function ll(e, t, r) {
  if ("char" == r) return new vi(t, t);
  if ("word" == r) return e.findWordAt(t);
  if ("line" == r) return new vi(ve(t.line, 0), Se(e.doc, ve(t.line + 1, 0)));
  var n = r(e, t);
  return new vi(n.from, n.to)
 }

 function sl(e, t, r, n) {
  var i, o;
  try {
   i = t.clientX, o = t.clientY
  } catch (t) {
   return !1
  }
  if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
  n && ft(t);
  var l = e.display,
   s = l.lineDiv.getBoundingClientRect();
  if (o > s.bottom || !ct(e, r)) return pt(t);
  o -= s.top - l.viewOffset;
  for (var a = 0; a < e.options.gutters.length; ++a) {
   var u = l.gutters.childNodes[a];
   if (u && u.getBoundingClientRect().right >= i) return st(e, r, e, de(e.doc, o), e.options.gutters[a], t), pt(t)
  }
 }

 function al(e, t) {
  return sl(e, t, "gutterClick", !0)
 }

 function ul(e, t) {
  var r, n;
  Sr(e.display, t) || (n = t, ct(r = e, "gutterContextMenu") && sl(r, n, "gutterContextMenu", !1)) || (at(e, t, "contextmenu") || e.display.input.onContextMenu(t))
 }

 function cl(e) {
  e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Gr(e)
 }
 il.prototype.compare = function(e, t, r) {
  return this.time + 400 > e && 0 == me(t, this.pos) && r == this.button
 };
 var hl = {
   toString: function() {
    return "CodeMirror.Init"
   }
  },
  fl = {},
  dl = {};

 function pl(e) {
  ai(e), qn(e), xn(e)
 }

 function gl(e, t, r) {
  if (!t != !(r && r != hl)) {
   var n = e.display.dragFunctions,
    i = t ? it : lt;
   i(e.display.scroller, "dragstart", n.start), i(e.display.scroller, "dragenter", n.enter), i(e.display.scroller, "dragover", n.over), i(e.display.scroller, "dragleave", n.leave), i(e.display.scroller, "drop", n.drop)
  }
 }

 function vl(e) {
  e.options.lineWrapping ? (H(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (M(e.display.wrapper, "CodeMirror-wrap"), Ye(e)), on(e), qn(e), Gr(e), setTimeout(function() {
   return Fn(e)
  }, 100)
 }

 function ml(e, t) {
  var r = this;
  if (!(this instanceof ml)) return new ml(e, t);
  this.options = t = t ? z(t) : {}, z(fl, t, !1), ui(t);
  var n = t.value;
  "string" == typeof n && (n = new Lo(n, t.mode, null, t.lineSeparator, t.direction)), this.doc = n;
  var i = new ml.inputStyles[t.inputStyle](this),
   o = this.display = new se(e, n, i);
  for (var l in ai(o.wrapper.CodeMirror = this), cl(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), zn(this), this.state = {
     keyMaps: [],
     overlays: [],
     modeGen: 0,
     overwrite: !1,
     delayingBlurEvent: !1,
     focused: !1,
     suppressEdits: !1,
     pasteIncoming: !1,
     cutIncoming: !1,
     selectingText: !1,
     draggingText: !1,
     highlight: new R,
     keySeq: null,
     specialChars: null
    }, t.autofocus && !f && o.input.focus(), w && C < 11 && setTimeout(function() {
     return r.display.input.reset(!0)
    }, 20),
    function(i) {
     var o = i.display;
     it(o.scroller, "mousedown", Xn(i, ol)), it(o.scroller, "dblclick", w && C < 11 ? Xn(i, function(e) {
      if (!at(i, e)) {
       var t = ln(i, e);
       if (t && !al(i, e) && !Sr(i.display, e)) {
        ft(e);
        var r = i.findWordAt(t);
        Gi(i.doc, r.anchor, r.head)
       }
      }
     }) : function(e) {
      return at(i, e) || ft(e)
     });
     S || it(o.scroller, "contextmenu", function(e) {
      return ul(i, e)
     });
     var r, n = {
      end: 0
     };

     function l() {
      o.activeTouch && (r = setTimeout(function() {
       return o.activeTouch = null
      }, 1e3), (n = o.activeTouch).end = +new Date)
     }

     function s(e, t) {
      if (null == t.left) return !0;
      var r = t.left - e.left,
       n = t.top - e.top;
      return 400 < r * r + n * n
     }
     it(o.scroller, "touchstart", function(e) {
      if (!at(i, e) && ! function(e) {
        if (1 != e.touches.length) return !1;
        var t = e.touches[0];
        return t.radiusX <= 1 && t.radiusY <= 1
       }(e)) {
       o.input.ensurePolled(), clearTimeout(r);
       var t = +new Date;
       o.activeTouch = {
        start: t,
        moved: !1,
        prev: t - n.end <= 300 ? n : null
       }, 1 == e.touches.length && (o.activeTouch.left = e.touches[0].pageX, o.activeTouch.top = e.touches[0].pageY)
      }
     }), it(o.scroller, "touchmove", function() {
      o.activeTouch && (o.activeTouch.moved = !0)
     }), it(o.scroller, "touchend", function(e) {
      var t = o.activeTouch;
      if (t && !Sr(o, e) && null != t.left && !t.moved && new Date - t.start < 300) {
       var r, n = i.coordsChar(o.activeTouch, "page");
       r = !t.prev || s(t, t.prev) ? new vi(n, n) : !t.prev.prev || s(t, t.prev.prev) ? i.findWordAt(n) : new vi(ve(n.line, 0), Se(i.doc, ve(n.line + 1, 0))), i.setSelection(r.anchor, r.head), i.focus(), ft(e)
      }
      l()
     }), it(o.scroller, "touchcancel", l), it(o.scroller, "scroll", function() {
      o.scroller.clientHeight && (Nn(i, o.scroller.scrollTop), An(i, o.scroller.scrollLeft, !0), st(i, "scroll", i))
     }), it(o.scroller, "mousewheel", function(e) {
      return pi(i, e)
     }), it(o.scroller, "DOMMouseScroll", function(e) {
      return pi(i, e)
     }), it(o.wrapper, "scroll", function() {
      return o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
     }), o.dragFunctions = {
      enter: function(e) {
       at(i, e) || gt(e)
      },
      over: function(e) {
       at(i, e) || (! function(e, t) {
        var r = ln(e, t);
        if (r) {
         var n = document.createDocumentFragment();
         cn(e, r, n), e.display.dragCursor || (e.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), N(e.display.dragCursor, n)
        }
       }(i, e), gt(e))
      },
      start: function(e) {
       return function(e, t) {
        if (w && (!e.state.draggingText || +new Date - ko < 100)) gt(t);
        else if (!at(e, t) && !Sr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !a)) {
         var r = O("img", null, null, "position: fixed; left: 0; top: 0;");
         r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", v && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), v && r.parentNode.removeChild(r)
        }
       }(i, e)
      },
      drop: Xn(i, Mo),
      leave: function(e) {
       at(i, e) || To(i)
      }
     };
     var e = o.input.getField();
     it(e, "keyup", function(e) {
      return el.call(i, e)
     }), it(e, "keydown", Xn(i, Jo)), it(e, "keypress", Xn(i, tl)), it(e, "focus", function(e) {
      return gn(i, e)
     }), it(e, "blur", function(e) {
      return vn(i, e)
     })
    }(this), Ao(), Rn(this), this.curOp.forceUpdate = !0, Ni(this, n), t.autofocus && !f || this.hasFocus() ? setTimeout(P(gn, this), 20) : vn(this), dl) dl.hasOwnProperty(l) && dl[l](r, t[l], hl);
  wn(this), t.finishInit && t.finishInit(this);
  for (var s = 0; s < yl.length; ++s) yl[s](r);
  Bn(this), b && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
 }
 ml.defaults = fl, ml.optionHandlers = dl;
 var yl = [];

 function bl(e, t, r, n) {
  var i, o = e.doc;
  null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = Ut(e, t).state : r = "prev");
  var l = e.options.tabSize,
   s = ae(o, t),
   a = I(s.text, null, l);
  s.stateAfter && (s.stateAfter = null);
  var u, c = s.text.match(/^\s*/)[0];
  if (n || /\S/.test(s.text)) {
   if ("smart" == r && ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == U || 150 < u)) {
    if (!n) return;
    r = "prev"
   }
  } else u = 0, r = "not";
  "prev" == r ? u = t > o.first ? I(ae(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r), u = Math.max(0, u);
  var h = "",
   f = 0;
  if (e.options.indentWithTabs)
   for (var d = Math.floor(u / l); d; --d) f += l, h += "\t";
  if (f < u && (h += Y(u - f)), h != c) return so(o, h, ve(t, 0), ve(t, c.length), "+input"), !(s.stateAfter = null);
  for (var p = 0; p < o.sel.ranges.length; p++) {
   var g = o.sel.ranges[p];
   if (g.head.line == t && g.head.ch < c.length) {
    var v = ve(t, c.length);
    Vi(o, p, new vi(v, v));
    break
   }
  }
 }
 ml.defineInitHook = function(e) {
  return yl.push(e)
 };
 var xl = null;

 function wl(e) {
  xl = e
 }

 function Cl(e, t, r, n, i) {
  var o = e.doc;
  e.display.shift = !1, n || (n = o.sel);
  var l, s = e.state.pasteIncoming || "paste" == i,
   a = Lt(t),
   u = null;
  if (s && 1 < n.ranges.length)
   if (xl && xl.text.join("\n") == t) {
    if (n.ranges.length % xl.text.length == 0) {
     u = [];
     for (var c = 0; c < xl.text.length; c++) u.push(o.splitLines(xl.text[c]))
    }
   } else a.length == n.ranges.length && e.options.pasteLinesPerSelection && (u = $(a, function(e) {
    return [e]
   }));
  for (var h = n.ranges.length - 1; 0 <= h; h--) {
   var f = n.ranges[h],
    d = f.from(),
    p = f.to();
   f.empty() && (r && 0 < r ? d = ve(d.line, d.ch - r) : e.state.overwrite && !s ? p = ve(p.line, Math.min(ae(o, p.line).text.length, p.ch + q(a).length)) : xl && xl.lineWise && xl.text.join("\n") == t && (d = p = ve(d.line, 0))), l = e.curOp.updateInput;
   var g = {
    from: d,
    to: p,
    text: u ? u[h % u.length] : a,
    origin: i || (s ? "paste" : e.state.cutIncoming ? "cut" : "+input")
   };
   ro(e.doc, g), cr(e, "inputRead", e, g)
  }
  t && !s && Ll(e, t), Ln(e), e.curOp.updateInput = l, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
 }

 function Sl(e, t) {
  var r = e.clipboardData && e.clipboardData.getData("Text");
  if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || jn(t, function() {
   return Cl(t, r, 0, null, "paste")
  }), !0
 }

 function Ll(e, t) {
  if (e.options.electricChars && e.options.smartIndent)
   for (var r = e.doc.sel, n = r.ranges.length - 1; 0 <= n; n--) {
    var i = r.ranges[n];
    if (!(100 < i.head.ch || n && r.ranges[n - 1].head.line == i.head.line)) {
     var o = e.getModeAt(i.head),
      l = !1;
     if (o.electricChars) {
      for (var s = 0; s < o.electricChars.length; s++)
       if (-1 < t.indexOf(o.electricChars.charAt(s))) {
        l = bl(e, i.head.line, "smart");
        break
       }
     } else o.electricInput && o.electricInput.test(ae(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = bl(e, i.head.line, "smart"));
     l && cr(e, "electricInput", e, i.head.line)
    }
   }
 }

 function kl(e) {
  for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
   var i = e.doc.sel.ranges[n].head.line,
    o = {
     anchor: ve(i, 0),
     head: ve(i + 1, 0)
    };
   r.push(o), t.push(e.getRange(o.anchor, o.head))
  }
  return {
   text: t,
   ranges: r
  }
 }

 function Ml(e, t) {
  e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
 }

 function Tl() {
  var e = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
   t = O("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
  return b ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), c && (e.style.border = "1px solid black"), Ml(e), t
 }

 function Nl(n, i, o, e, l) {
  var t = i,
   r = o,
   s = ae(n, i.line);

  function a(e) {
   var t, r;
   if (null == (t = l ? rt(n.cm, s, i, o) : et(s, i, o))) {
    if (e || (r = i.line + o) < n.first || r >= n.first + n.size || (i = new ve(r, i.ch, i.sticky), !(s = ae(n, r)))) return !1;
    i = tt(l, n.cm, s, i.line, o)
   } else i = t;
   return !0
  }
  if ("char" == e) a();
  else if ("column" == e) a(!0);
  else if ("word" == e || "group" == e)
   for (var u = null, c = "group" == e, h = n.cm && n.cm.getHelper(i, "wordChars"), f = !0; !(o < 0) || a(!f); f = !1) {
    var d = s.text.charAt(i.ch) || "\n",
     p = te(d, h) ? "w" : c && "\n" == d ? "n" : !c || /\s/.test(d) ? null : "p";
    if (!c || f || p || (p = "s"), u && u != p) {
     o < 0 && (o = 1, a(), i.sticky = "after");
     break
    }
    if (p && (u = p), 0 < o && !a(!f)) break
   }
  var g = Qi(n, i, t, r, !0);
  return ye(t, g) && (g.hitSide = !0), g
 }

 function Ol(e, t, r, n) {
  var i, o, l = e.doc,
   s = t.left;
  if ("page" == n) {
   var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
    u = Math.max(a - .5 * Jr(e.display), 3);
   i = (0 < r ? t.bottom : t.top) + r * u
  } else "line" == n && (i = 0 < r ? t.bottom + 3 : t.top - 3);
  for (;
   (o = $r(e, s, i)).outside;) {
   if (r < 0 ? i <= 0 : i >= l.height) {
    o.hitSide = !0;
    break
   }
   i += 5 * r
  }
  return o
 }
 var Al = function(e) {
  this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new R, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
 };

 function Wl(e, t) {
  var r = Dr(e, t.line);
  if (!r || r.hidden) return null;
  var n = ae(e.doc, t.line),
   i = Ar(r, n, t.line),
   o = Qe(n, e.doc.direction),
   l = "left";
  o && (l = $e(o, t.ch) % 2 ? "right" : "left");
  var s = zr(i.map, t.ch, l);
  return s.offset = "right" == s.collapse ? s.end : s.start, s
 }

 function Dl(e, t) {
  return t && (e.bad = !0), e
 }

 function Hl(e, t, r) {
  var n;
  if (t == e.display.lineDiv) {
   if (!(n = e.display.lineDiv.childNodes[r])) return Dl(e.clipPos(ve(e.display.viewTo - 1)), !0);
   t = null, r = 0
  } else
   for (n = t;; n = n.parentNode) {
    if (!n || n == e.display.lineDiv) return null;
    if (n.parentNode && n.parentNode == e.display.lineDiv) break
   }
  for (var i = 0; i < e.display.view.length; i++) {
   var o = e.display.view[i];
   if (o.node == n) return Fl(o, t, r)
  }
 }

 function Fl(u, e, t) {
  var r = u.text.firstChild,
   n = !1;
  if (!e || !W(r, e)) return Dl(ve(fe(u.line), 0), !0);
  if (e == r && (n = !0, e = r.childNodes[t], t = 0, !e)) {
   var i = u.rest ? q(u.rest) : u.line;
   return Dl(ve(fe(i), i.text.length), n)
  }
  var o = 3 == e.nodeType ? e : null,
   l = e;
  for (o || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (o = e.firstChild, t && (t = o.nodeValue.length)); l.parentNode != r;) l = l.parentNode;
  var c = u.measure,
   h = c.maps;

  function s(e, t, r) {
   for (var n = -1; n < (h ? h.length : 0); n++)
    for (var i = n < 0 ? c.map : h[n], o = 0; o < i.length; o += 3) {
     var l = i[o + 2];
     if (l == e || l == t) {
      var s = fe(n < 0 ? u.line : u.rest[n]),
       a = i[o] + r;
      return (r < 0 || l != e) && (a = i[o + (r ? 1 : 0)]), ve(s, a)
     }
    }
  }
  var a = s(o, l, t);
  if (a) return Dl(a, n);
  for (var f = l.nextSibling, d = o ? o.nodeValue.length - t : 0; f; f = f.nextSibling) {
   if (a = s(f, f.firstChild, 0)) return Dl(ve(a.line, a.ch - d), n);
   d += f.textContent.length
  }
  for (var p = l.previousSibling, g = t; p; p = p.previousSibling) {
   if (a = s(p, p.firstChild, -1)) return Dl(ve(a.line, a.ch + g), n);
   g += p.textContent.length
  }
 }
 Al.prototype.init = function(e) {
  var t = this,
   l = this,
   s = l.cm,
   a = l.div = e.lineDiv;

  function r(e) {
   if (!at(s, e)) {
    if (s.somethingSelected()) wl({
     lineWise: !1,
     text: s.getSelections()
    }), "cut" == e.type && s.replaceSelection("", null, "cut");
    else {
     if (!s.options.lineWiseCopyCut) return;
     var t = kl(s);
     wl({
      lineWise: !0,
      text: t.text
     }), "cut" == e.type && s.operation(function() {
      s.setSelections(t.ranges, 0, V), s.replaceSelection("", null, "cut")
     })
    }
    if (e.clipboardData) {
     e.clipboardData.clearData();
     var r = xl.text.join("\n");
     if (e.clipboardData.setData("Text", r), e.clipboardData.getData("Text") == r) return void e.preventDefault()
    }
    var n = Tl(),
     i = n.firstChild;
    s.display.lineSpace.insertBefore(n, s.display.lineSpace.firstChild), i.value = xl.text.join("\n");
    var o = document.activeElement;
    E(i), setTimeout(function() {
     s.display.lineSpace.removeChild(n), o.focus(), o == a && l.showPrimarySelection()
    }, 50)
   }
  }
  Ml(a, s.options.spellcheck), it(a, "paste", function(e) {
   at(s, e) || Sl(e, s) || C <= 11 && setTimeout(Xn(s, function() {
    return t.updateFromDOM()
   }), 20)
  }), it(a, "compositionstart", function(e) {
   t.composing = {
    data: e.data,
    done: !1
   }
  }), it(a, "compositionupdate", function(e) {
   t.composing || (t.composing = {
    data: e.data,
    done: !1
   })
  }), it(a, "compositionend", function(e) {
   t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
  }), it(a, "touchstart", function() {
   return l.forceCompositionEnd()
  }), it(a, "input", function() {
   t.composing || t.readFromDOMSoon()
  }), it(a, "copy", r), it(a, "cut", r)
 }, Al.prototype.prepareSelection = function() {
  var e = un(this.cm, !1);
  return e.focus = this.cm.state.focused, e
 }, Al.prototype.showSelection = function(e, t) {
  e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
 }, Al.prototype.showPrimarySelection = function() {
  var e = window.getSelection(),
   t = this.cm,
   r = t.doc.sel.primary(),
   n = r.from(),
   i = r.to();
  if (t.display.viewTo == t.display.viewFrom || n.line >= t.display.viewTo || i.line < t.display.viewFrom) e.removeAllRanges();
  else {
   var o = Hl(t, e.anchorNode, e.anchorOffset),
    l = Hl(t, e.focusNode, e.focusOffset);
   if (!o || o.bad || !l || l.bad || 0 != me(we(o, l), n) || 0 != me(xe(o, l), i)) {
    var s = t.display.view,
     a = n.line >= t.display.viewFrom && Wl(t, n) || {
      node: s[0].measure.map[2],
      offset: 0
     },
     u = i.line < t.display.viewTo && Wl(t, i);
    if (!u) {
     var c = s[s.length - 1].measure,
      h = c.maps ? c.maps[c.maps.length - 1] : c.map;
     u = {
      node: h[h.length - 1],
      offset: h[h.length - 2] - h[h.length - 3]
     }
    }
    if (a && u) {
     var f, d = e.rangeCount && e.getRangeAt(0);
     try {
      f = k(a.node, a.offset, u.offset, u.node)
     } catch (e) {}
     f && (!g && t.state.focused ? (e.collapse(a.node, a.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), d && null == e.anchorNode ? e.addRange(d) : g && this.startGracePeriod()), this.rememberSelection()
    } else e.removeAllRanges()
   }
  }
 }, Al.prototype.startGracePeriod = function() {
  var e = this;
  clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
   e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
    return e.cm.curOp.selectionChanged = !0
   })
  }, 20)
 }, Al.prototype.showMultipleSelections = function(e) {
  N(this.cm.display.cursorDiv, e.cursors), N(this.cm.display.selectionDiv, e.selection)
 }, Al.prototype.rememberSelection = function() {
  var e = window.getSelection();
  this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
 }, Al.prototype.selectionInEditor = function() {
  var e = window.getSelection();
  if (!e.rangeCount) return !1;
  var t = e.getRangeAt(0).commonAncestorContainer;
  return W(this.div, t)
 }, Al.prototype.focus = function() {
  "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
 }, Al.prototype.blur = function() {
  this.div.blur()
 }, Al.prototype.getField = function() {
  return this.div
 }, Al.prototype.supportsTouch = function() {
  return !0
 }, Al.prototype.receivedFocus = function() {
  var t = this;
  this.selectionInEditor() ? this.pollSelection() : jn(this.cm, function() {
   return t.cm.curOp.selectionChanged = !0
  }), this.polling.set(this.cm.options.pollInterval, function e() {
   t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
  })
 }, Al.prototype.selectionChanged = function() {
  var e = window.getSelection();
  return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
 }, Al.prototype.pollSelection = function() {
  if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
   var e = window.getSelection(),
    t = this.cm;
   if (h && l && this.cm.options.gutters.length && function(e) {
     for (var t = e; t; t = t.parentNode)
      if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
     return !1
    }(e.anchorNode)) return this.cm.triggerOnKeyDown({
    type: "keydown",
    keyCode: 8,
    preventDefault: Math.abs
   }), this.blur(), void this.focus();
   if (!this.composing) {
    this.rememberSelection();
    var r = Hl(t, e.anchorNode, e.anchorOffset),
     n = Hl(t, e.focusNode, e.focusOffset);
    r && n && jn(t, function() {
     Xi(t.doc, yi(r, n), V), (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
    })
   }
  }
 }, Al.prototype.pollContent = function() {
  null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
  var e, t, r, n = this.cm,
   i = n.display,
   o = n.doc.sel.primary(),
   l = o.from(),
   s = o.to();
  if (0 == l.ch && l.line > n.firstLine() && (l = ve(l.line - 1, ae(n.doc, l.line - 1).length)), s.ch == ae(n.doc, s.line).text.length && s.line < n.lastLine() && (s = ve(s.line + 1, 0)), l.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
  r = l.line == i.viewFrom || 0 == (e = sn(n, l.line)) ? (t = fe(i.view[0].line), i.view[0].node) : (t = fe(i.view[e].line), i.view[e - 1].node.nextSibling);
  var a, u, c = sn(n, s.line);
  if (u = c == i.view.length - 1 ? (a = i.viewTo - 1, i.lineDiv.lastChild) : (a = fe(i.view[c + 1].line) - 1, i.view[c + 1].node.previousSibling), !r) return !1;
  for (var h = n.doc.splitLines(function(a, e, t, u, c) {
    var r = "",
     h = !1,
     f = a.doc.lineSeparator();

    function d() {
     h && (r += f, h = !1)
    }

    function p(e) {
     e && (d(), r += e)
    }

    function g(e) {
     if (1 == e.nodeType) {
      var t = e.getAttribute("cm-text");
      if (null != t) return void p(t || e.textContent.replace(/\u200b/g, ""));
      var r, n = e.getAttribute("cm-marker");
      if (n) {
       var i = a.findMarks(ve(u, 0), ve(c + 1, 0), (s = +n, function(e) {
        return e.id == s
       }));
       return void(i.length && (r = i[0].find()) && p(ue(a.doc, r.from, r.to).join(f)))
      }
      if ("false" == e.getAttribute("contenteditable")) return;
      var o = /^(pre|div|p)$/i.test(e.nodeName);
      o && d();
      for (var l = 0; l < e.childNodes.length; l++) g(e.childNodes[l]);
      o && (h = !0)
     } else 3 == e.nodeType && p(e.nodeValue);
     var s
    }
    for (; g(e), e != t;) e = e.nextSibling;
    return r
   }(n, r, u, t, a)), f = ue(n.doc, ve(t, 0), ve(a, ae(n.doc, a).text.length)); 1 < h.length && 1 < f.length;)
   if (q(h) == q(f)) h.pop(), f.pop(), a--;
   else {
    if (h[0] != f[0]) break;
    h.shift(), f.shift(), t++
   } for (var d = 0, p = 0, g = h[0], v = f[0], m = Math.min(g.length, v.length); d < m && g.charCodeAt(d) == v.charCodeAt(d);) ++d;
  for (var y = q(h), b = q(f), x = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0)); p < x && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p;
  if (1 == h.length && 1 == f.length && t == l.line)
   for (; d && d > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) d--, p++;
  h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");
  var w = ve(t, d),
   C = ve(a, f.length ? q(f).length - p : 0);
  return 1 < h.length || h[0] || me(w, C) ? (so(n.doc, h, w, C, "+input"), !0) : void 0
 }, Al.prototype.ensurePolled = function() {
  this.forceCompositionEnd()
 }, Al.prototype.reset = function() {
  this.forceCompositionEnd()
 }, Al.prototype.forceCompositionEnd = function() {
  this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
 }, Al.prototype.readFromDOMSoon = function() {
  var e = this;
  null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
   if (e.readDOMTimeout = null, e.composing) {
    if (!e.composing.done) return;
    e.composing = null
   }
   e.updateFromDOM()
  }, 80))
 }, Al.prototype.updateFromDOM = function() {
  var e = this;
  !this.cm.isReadOnly() && this.pollContent() || jn(this.cm, function() {
   return qn(e.cm)
  })
 }, Al.prototype.setUneditable = function(e) {
  e.contentEditable = "false"
 }, Al.prototype.onKeyPress = function(e) {
  0 != e.charCode && (e.preventDefault(), this.cm.isReadOnly() || Xn(this.cm, Cl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
 }, Al.prototype.readOnlyChanged = function(e) {
  this.div.contentEditable = String("nocursor" != e)
 }, Al.prototype.onContextMenu = function() {}, Al.prototype.resetPosition = function() {}, Al.prototype.needsContentAttribute = !0;
 var El, Pl, zl, Il = function(e) {
  this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new R, this.hasSelection = !1, this.composing = null
 };
 Il.prototype.init = function(t) {
   var e = this,
    r = this,
    n = this.cm,
    i = this.wrapper = Tl(),
    o = this.textarea = i.firstChild;

   function l(e) {
    if (!at(n, e)) {
     if (n.somethingSelected()) wl({
      lineWise: !1,
      text: n.getSelections()
     });
     else {
      if (!n.options.lineWiseCopyCut) return;
      var t = kl(n);
      wl({
       lineWise: !0,
       text: t.text
      }), "cut" == e.type ? n.setSelections(t.ranges, null, V) : (r.prevInput = "", o.value = t.text.join("\n"), E(o))
     }
     "cut" == e.type && (n.state.cutIncoming = !0)
    }
   }
   t.wrapper.insertBefore(i, t.wrapper.firstChild), c && (o.style.width = "0px"), it(o, "input", function() {
    w && 9 <= C && e.hasSelection && (e.hasSelection = null), r.poll()
   }), it(o, "paste", function(e) {
    at(n, e) || Sl(e, n) || (n.state.pasteIncoming = !0, r.fastPoll())
   }), it(o, "cut", l), it(o, "copy", l), it(t.scroller, "paste", function(e) {
    Sr(t, e) || at(n, e) || (n.state.pasteIncoming = !0, r.focus())
   }), it(t.lineSpace, "selectstart", function(e) {
    Sr(t, e) || ft(e)
   }), it(o, "compositionstart", function() {
    var e = n.getCursor("from");
    r.composing && r.composing.range.clear(), r.composing = {
     start: e,
     range: n.markText(e, n.getCursor("to"), {
      className: "CodeMirror-composing"
     })
    }
   }), it(o, "compositionend", function() {
    r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
   })
  }, Il.prototype.prepareSelection = function() {
   var e = this.cm,
    t = e.display,
    r = e.doc,
    n = un(e);
   if (e.options.moveInputWithCursor) {
    var i = _r(e, r.sel.primary().head, "div"),
     o = t.wrapper.getBoundingClientRect(),
     l = t.lineDiv.getBoundingClientRect();
    n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
   }
   return n
  }, Il.prototype.showSelection = function(e) {
   var t = this.cm.display;
   N(t.cursorDiv, e.cursors), N(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
  }, Il.prototype.reset = function(e) {
   if (!this.contextMenuPending && !this.composing) {
    var t = this.cm;
    if (t.somethingSelected()) {
     this.prevInput = "";
     var r = t.getSelection();
     this.textarea.value = r, t.state.focused && E(this.textarea), w && 9 <= C && (this.hasSelection = r)
    } else e || (this.prevInput = this.textarea.value = "", w && 9 <= C && (this.hasSelection = null))
   }
  }, Il.prototype.getField = function() {
   return this.textarea
  }, Il.prototype.supportsTouch = function() {
   return !1
  }, Il.prototype.focus = function() {
   if ("nocursor" != this.cm.options.readOnly && (!f || D() != this.textarea)) try {
    this.textarea.focus()
   } catch (e) {}
  }, Il.prototype.blur = function() {
   this.textarea.blur()
  }, Il.prototype.resetPosition = function() {
   this.wrapper.style.top = this.wrapper.style.left = 0
  }, Il.prototype.receivedFocus = function() {
   this.slowPoll()
  }, Il.prototype.slowPoll = function() {
   var e = this;
   this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
    e.poll(), e.cm.state.focused && e.slowPoll()
   })
  }, Il.prototype.fastPoll = function() {
   var t = !1,
    r = this;
   r.pollingFast = !0, r.polling.set(20, function e() {
    r.poll() || t ? (r.pollingFast = !1, r.slowPoll()) : (t = !0, r.polling.set(60, e))
   })
  }, Il.prototype.poll = function() {
   var e = this,
    t = this.cm,
    r = this.textarea,
    n = this.prevInput;
   if (this.contextMenuPending || !t.state.focused || kt(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
   var i = r.value;
   if (i == n && !t.somethingSelected()) return !1;
   if (w && 9 <= C && this.hasSelection === i || x && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
   if (t.doc.sel == t.display.selForContextMenu) {
    var o = i.charCodeAt(0);
    if (8203 != o || n || (n = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
   }
   for (var l = 0, s = Math.min(n.length, i.length); l < s && n.charCodeAt(l) == i.charCodeAt(l);) ++l;
   return jn(t, function() {
    Cl(t, i.slice(l), n.length - l, null, e.composing ? "*compose" : null), 1e3 < i.length || -1 < i.indexOf("\n") ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
     className: "CodeMirror-composing"
    }))
   }), !0
  }, Il.prototype.ensurePolled = function() {
   this.pollingFast && this.poll() && (this.pollingFast = !1)
  }, Il.prototype.onKeyPress = function() {
   w && 9 <= C && (this.hasSelection = null), this.fastPoll()
  }, Il.prototype.onContextMenu = function(e) {
   var r = this,
    n = r.cm,
    i = n.display,
    o = r.textarea,
    t = ln(n, e),
    l = i.scroller.scrollTop;
   if (t && !v) {
    n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(t) && Xn(n, Xi)(n.doc, yi(t), V);
    var s = o.style.cssText,
     a = r.wrapper.style.cssText;
    r.wrapper.style.cssText = "position: absolute";
    var u, c = r.wrapper.getBoundingClientRect();
    if (o.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - c.top - 5) + "px; left: " + (e.clientX - c.left - 5) + "px;\n      z-index: 1000; background: " + (w ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", b && (u = window.scrollY), i.input.focus(), b && window.scrollTo(null, u), i.input.reset(), n.somethingSelected() || (o.value = r.prevInput = " "), r.contextMenuPending = !0, i.selForContextMenu = n.doc.sel, clearTimeout(i.detectingSelectAll), w && 9 <= C && f(), S) {
     gt(e);
     var h = function() {
      lt(window, "mouseup", h), setTimeout(d, 20)
     };
     it(window, "mouseup", h)
    } else setTimeout(d, 50)
   }

   function f() {
    if (null != o.selectionStart) {
     var e = n.somethingSelected(),
      t = "​" + (e ? o.value : "");
     o.value = "⇚", o.value = t, r.prevInput = e ? "" : "​", o.selectionStart = 1, o.selectionEnd = t.length, i.selForContextMenu = n.doc.sel
    }
   }

   function d() {
    if (r.contextMenuPending = !1, r.wrapper.style.cssText = a, o.style.cssText = s, w && C < 9 && i.scrollbars.setScrollTop(i.scroller.scrollTop = l), null != o.selectionStart) {
     (!w || w && C < 9) && f();
     var e = 0,
      t = function() {
       i.selForContextMenu == n.doc.sel && 0 == o.selectionStart && 0 < o.selectionEnd && "​" == r.prevInput ? Xn(n, eo)(n) : e++ < 10 ? i.detectingSelectAll = setTimeout(t, 500) : (i.selForContextMenu = null, i.input.reset())
      };
     i.detectingSelectAll = setTimeout(t, 200)
    }
   }
  }, Il.prototype.readOnlyChanged = function(e) {
   e || this.reset(), this.textarea.disabled = "nocursor" == e
  }, Il.prototype.setUneditable = function() {}, Il.prototype.needsContentAttribute = !1,
  function(i) {
   var o = i.optionHandlers;

   function e(e, t, n, r) {
    i.defaults[e] = t, n && (o[e] = r ? function(e, t, r) {
     r != hl && n(e, t, r)
    } : n)
   }
   i.defineOption = e, i.Init = hl, e("value", "", function(e, t) {
    return e.setValue(t)
   }, !0), e("mode", null, function(e, t) {
    e.doc.modeOption = t, Si(e)
   }, !0), e("indentUnit", 2, Si, !0), e("indentWithTabs", !1), e("smartIndent", !0), e("tabSize", 4, function(e) {
    Li(e), Gr(e), qn(e)
   }, !0), e("lineSeparator", null, function(e, n) {
    if (e.doc.lineSep = n) {
     var i = [],
      o = e.doc.first;
     e.doc.iter(function(e) {
      for (var t = 0;;) {
       var r = e.text.indexOf(n, t);
       if (-1 == r) break;
       t = r + n.length, i.push(ve(o, r))
      }
      o++
     });
     for (var t = i.length - 1; 0 <= t; t--) so(e.doc, n, i[t], ve(i[t].line, i[t].ch + n.length))
    }
   }), e("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, r) {
    e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != hl && e.refresh()
   }), e("specialCharPlaceholder", tr, function(e) {
    return e.refresh()
   }, !0), e("electricChars", !0), e("inputStyle", f ? "contenteditable" : "textarea", function() {
    throw new Error("inputStyle can not (yet) be changed in a running editor")
   }, !0), e("spellcheck", !1, function(e, t) {
    return e.getInputField().spellcheck = t
   }, !0), e("rtlMoveVisually", !p), e("wholeLineUpdateBefore", !0), e("theme", "default", function(e) {
    cl(e), pl(e)
   }, !0), e("keyMap", "default", function(e, t, r) {
    var n = Vo(t),
     i = r != hl && Vo(r);
    i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null)
   }), e("extraKeys", null), e("configureMouse", null), e("lineWrapping", !1, vl, !0), e("gutters", [], function(e) {
    ui(e.options), pl(e)
   }, !0), e("fixedGutter", !0, function(e, t) {
    e.display.gutters.style.left = t ? rn(e.display) + "px" : "0", e.refresh()
   }, !0), e("coverGutterNextToScrollbar", !1, function(e) {
    return Fn(e)
   }, !0), e("scrollbarStyle", "native", function(e) {
    zn(e), Fn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
   }, !0), e("lineNumbers", !1, function(e) {
    ui(e.options), pl(e)
   }, !0), e("firstLineNumber", 1, pl, !0), e("lineNumberFormatter", function(e) {
    return e
   }, pl, !0), e("showCursorWhenSelecting", !1, an, !0), e("resetSelectionOnContextMenu", !0), e("lineWiseCopyCut", !0), e("pasteLinesPerSelection", !0), e("readOnly", !1, function(e, t) {
    "nocursor" == t && (vn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
   }), e("disableInput", !1, function(e, t) {
    t || e.display.input.reset()
   }, !0), e("dragDrop", !0, gl), e("allowDropFileTypes", null), e("cursorBlinkRate", 530), e("cursorScrollMargin", 0), e("cursorHeight", 1, an, !0), e("singleCursorHeightPerLine", !0, an, !0), e("workTime", 100), e("workDelay", 100), e("flattenSpans", !0, Li, !0), e("addModeClass", !1, Li, !0), e("pollInterval", 100), e("undoDepth", 200, function(e, t) {
    return e.doc.history.undoDepth = t
   }), e("historyEventDelay", 1250), e("viewportMargin", 10, function(e) {
    return e.refresh()
   }, !0), e("maxHighlightLength", 1e4, Li, !0), e("moveInputWithCursor", !0, function(e, t) {
    t || e.display.input.resetPosition()
   }), e("tabindex", null, function(e, t) {
    return e.display.input.getField().tabIndex = t || ""
   }), e("autofocus", null), e("direction", "ltr", function(e, t) {
    return e.doc.setDirection(t)
   }, !0)
  }(ml), Pl = (El = ml).optionHandlers, zl = El.helpers = {}, El.prototype = {
   constructor: El,
   focus: function() {
    window.focus(), this.display.input.focus()
   },
   setOption: function(e, t) {
    var r = this.options,
     n = r[e];
    r[e] == t && "mode" != e || (r[e] = t, Pl.hasOwnProperty(e) && Xn(this, Pl[e])(this, t, n), st(this, "optionChange", this, e))
   },
   getOption: function(e) {
    return this.options[e]
   },
   getDoc: function() {
    return this.doc
   },
   addKeyMap: function(e, t) {
    this.state.keyMaps[t ? "push" : "unshift"](Vo(e))
   },
   removeKeyMap: function(e) {
    for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
     if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0
   },
   addOverlay: _n(function(e, t) {
    var r = e.token ? e : El.getMode(this.options, e);
    if (r.startState) throw new Error("Overlays may not be stateful.");
    ! function(e, t, r) {
     for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i;) n++;
     e.splice(n, 0, t)
    }(this.state.overlays, {
     mode: r,
     modeSpec: e,
     opaque: t && t.opaque,
     priority: t && t.priority || 0
    }, function(e) {
     return e.priority
    }), this.state.modeGen++, qn(this)
   }),
   removeOverlay: _n(function(e) {
    for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
     var n = t[r].modeSpec;
     if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, void qn(this)
    }
   }),
   indentLine: _n(function(e, t, r) {
    "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), pe(this.doc, e) && bl(this, e, t, r)
   }),
   indentSelection: _n(function(e) {
    for (var t = this, r = this.doc.sel.ranges, n = -1, i = 0; i < r.length; i++) {
     var o = r[i];
     if (o.empty()) o.head.line > n && (bl(t, o.head.line, e, !0), n = o.head.line, i == t.doc.sel.primIndex && Ln(t));
     else {
      var l = o.from(),
       s = o.to(),
       a = Math.max(n, l.line);
      n = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
      for (var u = a; u < n; ++u) bl(t, u, e);
      var c = t.doc.sel.ranges;
      0 == l.ch && r.length == c.length && 0 < c[i].from().ch && Vi(t.doc, i, new vi(l, c[i].to()), V)
     }
    }
   }),
   getTokenAt: function(e, t) {
    return _t(this, e, t)
   },
   getLineTokens: function(e, t) {
    return _t(this, ve(e), t, !0)
   },
   getTokenTypeAt: function(e) {
    e = Se(this.doc, e);
    var t, r = Gt(this, ae(this.doc, e.line)),
     n = 0,
     i = (r.length - 1) / 2,
     o = e.ch;
    if (0 == o) t = r[2];
    else
     for (;;) {
      var l = n + i >> 1;
      if ((l ? r[2 * l - 1] : 0) >= o) i = l;
      else {
       if (!(r[2 * l + 1] < o)) {
        t = r[2 * l + 2];
        break
       }
       n = l + 1
      }
     }
    var s = t ? t.indexOf("overlay ") : -1;
    return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
   },
   getModeAt: function(e) {
    var t = this.doc.mode;
    return t.innerMode ? El.innerMode(t, this.getTokenAt(e).state).mode : t
   },
   getHelper: function(e, t) {
    return this.getHelpers(e, t)[0]
   },
   getHelpers: function(e, t) {
    var r = [];
    if (!zl.hasOwnProperty(t)) return r;
    var n = zl[t],
     i = this.getModeAt(e);
    if ("string" == typeof i[t]) n[i[t]] && r.push(n[i[t]]);
    else if (i[t])
     for (var o = 0; o < i[t].length; o++) {
      var l = n[i[t][o]];
      l && r.push(l)
     } else i.helperType && n[i.helperType] ? r.push(n[i.helperType]) : n[i.name] && r.push(n[i.name]);
    for (var s = 0; s < n._global.length; s++) {
     var a = n._global[s];
     a.pred(i, this) && -1 == B(r, a.val) && r.push(a.val)
    }
    return r
   },
   getStateAfter: function(e, t) {
    var r = this.doc;
    return Ut(this, (e = Ce(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state
   },
   cursorCoords: function(e, t) {
    var r = this.doc.sel.primary();
    return _r(this, null == e ? r.head : "object" == typeof e ? Se(this.doc, e) : e ? r.from() : r.to(), t || "page")
   },
   charCoords: function(e, t) {
    return Xr(this, Se(this.doc, e), t || "page")
   },
   coordsChar: function(e, t) {
    return $r(this, (e = jr(this, e, t || "page")).left, e.top)
   },
   lineAtHeight: function(e, t) {
    return e = jr(this, {
     top: e,
     left: 0
    }, t || "page").top, de(this.doc, e + this.display.viewOffset)
   },
   heightAtLine: function(e, t, r) {
    var n, i = !1;
    if ("number" == typeof e) {
     var o = this.doc.first + this.doc.size - 1;
     e < this.doc.first ? e = this.doc.first : o < e && (e = o, i = !0), n = ae(this.doc, e)
    } else n = e;
    return Kr(this, n, {
     top: 0,
     left: 0
    }, t || "page", r || i).top + (i ? this.doc.height - Xe(n) : 0)
   },
   defaultTextHeight: function() {
    return Jr(this.display)
   },
   defaultCharWidth: function() {
    return en(this.display)
   },
   getViewport: function() {
    return {
     from: this.display.viewFrom,
     to: this.display.viewTo
    }
   },
   addWidget: function(e, t, r, n, i) {
    var o, l, s, a = this.display,
     u = (e = _r(this, Se(this.doc, e))).bottom,
     c = e.left;
    if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), a.sizer.appendChild(t), "over" == n) u = e.top;
    else if ("above" == n || "near" == n) {
     var h = Math.max(a.wrapper.clientHeight, this.doc.height),
      f = Math.max(a.sizer.clientWidth, a.lineSpace.clientWidth);
     ("above" == n || e.bottom + t.offsetHeight > h) && e.top > t.offsetHeight ? u = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= h && (u = e.bottom), c + t.offsetWidth > f && (c = f - t.offsetWidth)
    }
    t.style.top = u + "px", t.style.left = t.style.right = "", "right" == i ? (c = a.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? c = 0 : "middle" == i && (c = (a.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = c + "px"), r && (o = this, l = {
     left: c,
     top: u,
     right: c + t.offsetWidth,
     bottom: u + t.offsetHeight
    }, null != (s = Cn(o, l)).scrollTop && Nn(o, s.scrollTop), null != s.scrollLeft && An(o, s.scrollLeft))
   },
   triggerOnKeyDown: _n(Jo),
   triggerOnKeyPress: _n(tl),
   triggerOnKeyUp: el,
   triggerOnMouseDown: _n(ol),
   execCommand: function(e) {
    if (jo.hasOwnProperty(e)) return jo[e].call(null, this)
   },
   triggerElectric: _n(function(e) {
    Ll(this, e)
   }),
   findPosH: function(e, t, r, n) {
    var i = 1;
    t < 0 && (i = -1, t = -t);
    for (var o = Se(this.doc, e), l = 0; l < t && !(o = Nl(this.doc, o, i, r, n)).hitSide; ++l);
    return o
   },
   moveH: _n(function(t, r) {
    var n = this;
    this.extendSelectionsBy(function(e) {
     return n.display.shift || n.doc.extend || e.empty() ? Nl(n.doc, e.head, t, r, n.options.rtlMoveVisually) : t < 0 ? e.from() : e.to()
    }, j)
   }),
   deleteH: _n(function(r, n) {
    var e = this.doc.sel,
     i = this.doc;
    e.somethingSelected() ? i.replaceSelection("", null, "+delete") : Ko(this, function(e) {
     var t = Nl(i, e.head, r, n, !1);
     return r < 0 ? {
      from: t,
      to: e.head
     } : {
      from: e.head,
      to: t
     }
    })
   }),
   findPosV: function(e, t, r, n) {
    var i = 1,
     o = n;
    t < 0 && (i = -1, t = -t);
    for (var l = Se(this.doc, e), s = 0; s < t; ++s) {
     var a = _r(this, l, "div");
     if (null == o ? o = a.left : a.left = o, (l = Ol(this, a, i, r)).hitSide) break
    }
    return l
   },
   moveV: _n(function(n, i) {
    var o = this,
     l = this.doc,
     s = [],
     a = !this.display.shift && !l.extend && l.sel.somethingSelected();
    if (l.extendSelectionsBy(function(e) {
      if (a) return n < 0 ? e.from() : e.to();
      var t = _r(o, e.head, "div");
      null != e.goalColumn && (t.left = e.goalColumn), s.push(t.left);
      var r = Ol(o, t, n, i);
      return "page" == i && e == l.sel.primary() && Sn(o, Xr(o, r, "div").top - t.top), r
     }, j), s.length)
     for (var e = 0; e < l.sel.ranges.length; e++) l.sel.ranges[e].goalColumn = s[e]
   }),
   findWordAt: function(e) {
    var t = ae(this.doc, e.line).text,
     r = e.ch,
     n = e.ch;
    if (t) {
     var i = this.getHelper(e, "wordChars");
     "before" != e.sticky && n != t.length || !r ? ++n : --r;
     for (var o = t.charAt(r), l = te(o, i) ? function(e) {
       return te(e, i)
      } : /\s/.test(o) ? function(e) {
       return /\s/.test(e)
      } : function(e) {
       return !/\s/.test(e) && !te(e)
      }; 0 < r && l(t.charAt(r - 1));) --r;
     for (; n < t.length && l(t.charAt(n));) ++n
    }
    return new vi(ve(e.line, r), ve(e.line, n))
   },
   toggleOverwrite: function(e) {
    null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? H(this.display.cursorDiv, "CodeMirror-overwrite") : M(this.display.cursorDiv, "CodeMirror-overwrite"), st(this, "overwriteToggle", this, this.state.overwrite))
   },
   hasFocus: function() {
    return this.display.input.getField() == D()
   },
   isReadOnly: function() {
    return !(!this.options.readOnly && !this.doc.cantEdit)
   },
   scrollTo: _n(function(e, t) {
    kn(this, e, t)
   }),
   getScrollInfo: function() {
    var e = this.display.scroller;
    return {
     left: e.scrollLeft,
     top: e.scrollTop,
     height: e.scrollHeight - Tr(this) - this.display.barHeight,
     width: e.scrollWidth - Tr(this) - this.display.barWidth,
     clientHeight: Or(this),
     clientWidth: Nr(this)
    }
   },
   scrollIntoView: _n(function(e, t) {
    var r, n;
    null == e ? (e = {
     from: this.doc.sel.primary().head,
     to: null
    }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
     from: ve(e, 0),
     to: null
    } : null == e.from && (e = {
     from: e,
     to: null
    }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? (n = e, Mn(r = this), r.curOp.scrollToPos = n) : Tn(this, e.from, e.to, e.margin)
   }),
   setSize: _n(function(e, t) {
    var r = this,
     n = function(e) {
      return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
     };
    null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && Br(this);
    var i = this.display.viewFrom;
    this.doc.iter(i, this.display.viewTo, function(e) {
     if (e.widgets)
      for (var t = 0; t < e.widgets.length; t++)
       if (e.widgets[t].noHScroll) {
        $n(r, i, "widget");
        break
       }++ i
    }), this.curOp.forceUpdate = !0, st(this, "refresh", this)
   }),
   operation: function(e) {
    return jn(this, e)
   },
   startOperation: function() {
    return Rn(this)
   },
   endOperation: function() {
    return Bn(this)
   },
   refresh: _n(function() {
    var e = this.display.cachedTextHeight;
    qn(this), this.curOp.forceUpdate = !0, Gr(this), kn(this, this.doc.scrollLeft, this.doc.scrollTop), li(this), (null == e || .5 < Math.abs(e - Jr(this.display))) && on(this), st(this, "refresh", this)
   }),
   swapDoc: _n(function(e) {
    var t = this.doc;
    return t.cm = null, Ni(this, e), Gr(this), this.display.input.reset(), kn(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, cr(this, "swapDoc", this, t), t
   }),
   getInputField: function() {
    return this.display.input.getField()
   },
   getWrapperElement: function() {
    return this.display.wrapper
   },
   getScrollerElement: function() {
    return this.display.scroller
   },
   getGutterElement: function() {
    return this.display.gutters
   }
  }, ht(El), El.registerHelper = function(e, t, r) {
   zl.hasOwnProperty(e) || (zl[e] = El[e] = {
    _global: []
   }), zl[e][t] = r
  }, El.registerGlobalHelper = function(e, t, r, n) {
   El.registerHelper(e, t, n), zl[e]._global.push({
    pred: r,
    val: n
   })
  };
 var Rl, Bl = "iter insert remove copy getEditor constructor".split(" ");
 for (var Gl in Lo.prototype) Lo.prototype.hasOwnProperty(Gl) && B(Bl, Gl) < 0 && (ml.prototype[Gl] = function(e) {
  return function() {
   return e.apply(this.doc, arguments)
  }
 }(Lo.prototype[Gl]));
 return ht(Lo), ml.inputStyles = {
  textarea: Il,
  contenteditable: Al
 }, ml.defineMode = function(e) {
  ml.defaults.mode || "null" == e || (ml.defaults.mode = e),
   function(e, t) {
    2 < arguments.length && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Nt[e] = t
   }.apply(this, arguments)
 }, ml.defineMIME = function(e, t) {
  Ot[e] = t
 }, ml.defineMode("null", function() {
  return {
   token: function(e) {
    return e.skipToEnd()
   }
  }
 }), ml.defineMIME("text/plain", "null"), ml.defineExtension = function(e, t) {
  ml.prototype[e] = t
 }, ml.defineDocExtension = function(e, t) {
  Lo.prototype[e] = t
 }, ml.fromTextArea = function(t, e) {
  if ((e = e ? z(e) : {}).value = t.value, !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex), !e.placeholder && t.placeholder && (e.placeholder = t.placeholder), null == e.autofocus) {
   var r = D();
   e.autofocus = r == t || null != t.getAttribute("autofocus") && r == document.body
  }

  function n() {
   t.value = s.getValue()
  }
  var i;
  if (t.form && (it(t.form, "submit", n), !e.leaveSubmitMethodAlone)) {
   var o = t.form;
   i = o.submit;
   try {
    var l = o.submit = function() {
     n(), o.submit = i, o.submit(), o.submit = l
    }
   } catch (e) {}
  }
  e.finishInit = function(e) {
   e.save = n, e.getTextArea = function() {
    return t
   }, e.toTextArea = function() {
    e.toTextArea = isNaN, n(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (lt(t.form, "submit", n), "function" == typeof t.form.submit && (t.form.submit = i))
   }
  }, t.style.display = "none";
  var s = ml(function(e) {
   return t.parentNode.insertBefore(e, t.nextSibling)
  }, e);
  return s
 }, (Rl = ml).off = lt, Rl.on = it, Rl.wheelEventPixels = di, Rl.Doc = Lo, Rl.splitLines = Lt, Rl.countColumn = I, Rl.findColumn = X, Rl.isWordChar = ee, Rl.Pass = U, Rl.signal = st, Rl.Line = $t, Rl.changeEnd = bi, Rl.scrollbarModel = Pn, Rl.Pos = ve, Rl.cmpPos = me, Rl.modes = Nt, Rl.mimeModes = Ot, Rl.resolveMode = At, Rl.getMode = Wt, Rl.modeExtensions = Dt, Rl.extendMode = Ht, Rl.copyState = Ft, Rl.startState = Pt, Rl.innerMode = Et, Rl.commands = jo, Rl.keyMap = Po, Rl.keyName = Uo, Rl.isModifierKey = Bo, Rl.lookupKey = Ro, Rl.normalizeKeyMap = Io, Rl.StringStream = zt, Rl.SharedTextMarker = xo, Rl.TextMarker = yo, Rl.LineWidget = go, Rl.e_preventDefault = ft, Rl.e_stopPropagation = dt, Rl.e_stop = gt, Rl.addClass = H, Rl.contains = W, Rl.rmClass = M, Rl.keyNames = Do, ml.version = "5.28.0", ml
}),
function(e) {
 "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
}(function(a) {
 "use strict";
 var p = "CodeMirror-lint-markers";

 function l(e) {
  e.parentNode && e.parentNode.removeChild(e)
 }

 function c(e, t, r) {
  var n = function(e, t) {
   var r = document.createElement("div");

   function n(e) {
    if (!r.parentNode) return a.off(document, "mousemove", n);
    r.style.top = Math.max(0, e.clientY - r.offsetHeight - 5) + "px", r.style.left = e.clientX + 5 + "px"
   }
   return r.className = "CodeMirror-lint-tooltip", r.appendChild(t.cloneNode(!0)), document.body.appendChild(r), a.on(document, "mousemove", n), n(e), null != r.style.opacity && (r.style.opacity = 1), r
  }(e, t);

  function i() {
   var e;
   a.off(r, "mouseout", i), n && ((e = n).parentNode && (null == e.style.opacity && l(e), e.style.opacity = 0, setTimeout(function() {
    l(e)
   }, 600)), n = null)
  }
  var o = setInterval(function() {
   if (n)
    for (var e = r;; e = e.parentNode) {
     if (e && 11 == e.nodeType && (e = e.host), e == document.body) return;
     if (!e) {
      i();
      break
     }
    }
   if (!n) return clearInterval(o)
  }, 400);
  a.on(r, "mouseout", i)
 }

 function u(t, e, r) {
  this.marked = [], this.options = e, this.timeout = null, this.hasGutter = r, this.onMouseOver = function(e) {
   ! function(e, t) {
    var r = t.target || t.srcElement;
    if (!/\bCodeMirror-lint-mark-/.test(r.className)) return;
    for (var n = r.getBoundingClientRect(), i = (n.left + n.right) / 2, o = (n.top + n.bottom) / 2, l = e.findMarksAt(e.coordsChar({
      left: i,
      top: o
     }, "client")), s = [], a = 0; a < l.length; ++a) {
     var u = l[a].__annotation;
     u && s.push(u)
    }
    s.length && function(e, t) {
     for (var r = t.target || t.srcElement, n = document.createDocumentFragment(), i = 0; i < e.length; i++) {
      var o = e[i];
      n.appendChild(m(o))
     }
     c(t, n, r)
    }(s, t)
   }(t, e)
  }, this.waitingFor = 0
 }

 function g(e) {
  var t = e.state.lint;
  t.hasGutter && e.clearGutter(p);
  for (var r = 0; r < t.marked.length; ++r) t.marked[r].clear();
  t.marked.length = 0
 }

 function v(t, e, r, n) {
  var i = document.createElement("div"),
   o = i;
  return i.className = "CodeMirror-lint-marker-" + e, r && ((o = i.appendChild(document.createElement("div"))).className = "CodeMirror-lint-marker-multiple"), 0 != n && a.on(o, "mouseover", function(e) {
   c(e, t, o)
  }), i
 }

 function m(e) {
  var t = e.severity;
  t || (t = "error");
  var r = document.createElement("div");
  return r.className = "CodeMirror-lint-message-" + t, void 0 !== e.messageHTML ? r.innerHTML = e.messageHTML : r.appendChild(document.createTextNode(e.message)), r
 }

 function h(t) {
  var e = t.state.lint.options,
   r = e.options || e,
   n = e.getAnnotations || t.getHelper(a.Pos(0, 0), "lint");
  if (n)
   if (e.async || n.async) ! function(r, e, t) {
    var n = r.state.lint,
     i = ++n.waitingFor;

    function o() {
     i = -1, r.off("change", o)
    }
    r.on("change", o), e(r.getValue(), function(e, t) {
     r.off("change", o), n.waitingFor == i && (t && e instanceof a && (e = t), s(r, e))
    }, t, r)
   }(t, n, r);
   else {
    var i = n(t.getValue(), r, t);
    if (!i) return;
    i.then ? i.then(function(e) {
     s(t, e)
    }) : s(t, i)
   }
 }

 function s(e, t) {
  g(e);
  for (var r, n, i = e.state.lint, o = i.options, l = function(e) {
    for (var t = [], r = 0; r < e.length; ++r) {
     var n = e[r],
      i = n.from.line;
     (t[i] || (t[i] = [])).push(n)
    }
    return t
   }(t), s = 0; s < l.length; ++s) {
   var a = l[s];
   if (a) {
    for (var u = null, c = i.hasGutter && document.createDocumentFragment(), h = 0; h < a.length; ++h) {
     var f = a[h],
      d = f.severity;
     d || (d = "error"), n = d, u = "error" == (r = u) ? r : n, o.formatAnnotation && (f = o.formatAnnotation(f)), i.hasGutter && c.appendChild(m(f)), f.to && i.marked.push(e.markText(f.from, f.to, {
      className: "CodeMirror-lint-mark-" + d,
      __annotation: f
     }))
    }
    i.hasGutter && e.setGutterMarker(s, p, v(c, u, 1 < a.length, i.options.tooltips))
   }
  }
  o.onUpdateLinting && o.onUpdateLinting(t, l, e)
 }

 function f(e) {
  var t = e.state.lint;
  t && (clearTimeout(t.timeout), t.timeout = setTimeout(function() {
   h(e)
  }, t.options.delay || 500))
 }
 a.defineOption("lint", !1, function(e, t, r) {
  if (r && r != a.Init && (g(e), !1 !== e.state.lint.options.lintOnChange && e.off("change", f), a.off(e.getWrapperElement(), "mouseover", e.state.lint.onMouseOver), clearTimeout(e.state.lint.timeout), delete e.state.lint), t) {
   for (var n = e.getOption("gutters"), i = !1, o = 0; o < n.length; ++o) n[o] == p && (i = !0);
   var l = e.state.lint = new u(e, (s = t) instanceof Function ? {
    getAnnotations: s
   } : (s && !0 !== s || (s = {}), s), i);
   !1 !== l.options.lintOnChange && e.on("change", f), 0 != l.options.tooltips && "gutter" != l.options.tooltips && a.on(e.getWrapperElement(), "mouseover", l.onMouseOver), h(e)
  }
  var s
 }), a.defineExtension("performLint", function() {
  this.state.lint && h(this)
 })
}), CodeMirror.defineMode("riscv", function(e, t) {
 function r(e, t) {
  return new RegExp("^(?:" + e.join("|") + ")$", t)
 }
 var i = r(["add", "addi", "and", "andi", "auipc", "beq", "bge", "bgeu", "blt", "bltu", "bne", "div", "divu", "ecall", "jal", "jalr", "lb", "lbu", "lh", "lhu", "lui", "lw", "mul", "mulh", "mulhsu", "mulhu", "or", "ori", "rem", "remu", "sb", "sh", "sll", "slli", "slt", "slti", "sltiu", "sltu", "srai", "srl", "srli", "sub", "sw", "xor", "xori", "beqz", "bgez", "bgt", "bgtu", "bgtz", "ble", "bleu", "blez", "bltz", "bnez", "call", "jal", "jalr", "j", "jr", "la", "lb", "lbu", "lh", "lhu", "li", "lw", "mv", "neg", "nop", "ret", "not", "ret", "sb", "seqz", "sgtz", "sh", "sltz", "snez", "sw", "tail", "seq", "sge", "sgeu", "sgt", "sgtu", "sle", "sleu", "sne"], "i"),
  o = r(["x0", "x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12", "x13", "x14", "x15", "x16", "x17", "x18", "x19", "x20", "x21", "x22", "x23", "x24", "x25", "x26", "x27", "x28", "x29", "x30", "x31", "zero", "ra", "sp", "gp", "tp", "t0", "t1", "t2", "s0", "s1", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "t3", "t4", "t5", "t6"], ""),
  l = r([".data", ".text", ".globl", ".float", ".double", ".asciiz", ".word", ".byte"], "i");

 function s(e, t) {
  var i, r = e.next();
  return "#" == r ? (e.skipToEnd(), "comment") : '"' == r || "'" == r ? (t.cur = (i = r, function(e, t) {
   for (var r, n = !1; null != (r = e.next()) && (r != i || n);) n = !n && "\\" == r;
   return n || (t.cur = s), "string"
  }), t.cur(e, t)) : /\d/.test(r) ? (e.eatWhile(/[\w.%]/), "number") : /[.\w_]/.test(r) ? (e.eatWhile(/[\w\\\-_.]/), "variable") : null
 }
 return {
  startState: function(e) {
   return {
    basecol: e || 0,
    indentDepth: 0,
    cur: s
   }
  },
  token: function(e, t) {
   if (e.eatSpace()) return null;
   var r = t.cur(e, t),
    n = e.current();
   return "variable" == r && (l.test(n) ? r = "keyword" : i.test(n) ? r = "builtin" : o.test(n) && (r = "variable-2")), r
  }
 }
}), CodeMirror.registerHelper("lint", "riscv", function(e) {
 for (var t, r, n = [], i = window.venus_main.venus.assembler.Linter.lint(e), o = 0; o < i.length; o++) t = i[o], void 0, r = t.lineNumber, n.push({
  from: CodeMirror.Pos(r - 1, 0),
  to: CodeMirror.Pos(r, 0),
  severity: "error",
  message: t.message
 });
 return n
});