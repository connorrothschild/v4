import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape, a as add_attribute, h as each, m as set_store_value } from "./app-2f09f60b.js";
import { d as dateFormat } from "./utils-09998264.js";
import { S as Star } from "./Star-d8949469.js";
import { a as windowWidth } from "./global-472f6872.js";
import { T as TransitionInView } from "./TransitionInView-ff3b4530.js";
import { T as Transition, B as BackTo } from "./BackTo-23f10359.js";
import { s as seo } from "./store-30431d00.js";
import "bowser";
import "gsap";
import "gsap/dist/MorphSVGPlugin.js";
import "./IntersectionObserver-89b2e997.js";
import "gsap/dist/SplitText.js";
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function bisector(f) {
  let delta = f;
  let compare1 = f;
  let compare2 = f;
  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
  }
  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left, center, right };
}
function number$1(x) {
  return x === null ? NaN : +x;
}
const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$1).center;
var bisect = bisectRight;
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start, stop, count) {
  var reverse, i = -1, n, ticks2, step;
  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0)
    return [start];
  if (reverse = stop < start)
    n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start)
      ++r0;
    if (r1 * step > stop)
      --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks2[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start)
      ++r0;
    if (r1 / step > stop)
      --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks2[i] = (r0 + i) / step;
  }
  if (reverse)
    ticks2.reverse();
  return ticks2;
}
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop < start ? -step1 : step1;
}
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
var constant = (x) => () => x;
function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
}
var rgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start, end) {
    var r = color2((start = rgb$1(start)).r, (end = rgb$1(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x[i](t);
    return c;
  };
}
function date(a, b) {
  var d = new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
function constants(x) {
  return function() {
    return x;
  };
}
function number(x) {
  return +x;
}
var unit = [0, 1];
function identity$1(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate2) {
  var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range[i], range[i + 1]);
  }
  return function(x) {
    var i2 = bisect(domain, x, 1, j) - 1;
    return r[i2](d[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range = unit, interpolate$1 = interpolate, transform, untransform, unknown, clamp = identity$1, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$1)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity$1, identity$1);
}
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d)
    return x + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d)
    return x + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
var formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};
function identity(x) {
  return x;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
var Blog_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".post-container.svelte-1pm8o92.svelte-1pm8o92{display:block;width:100%;height:100%;border-radius:10px;background:var(--semitransparent-bg);padding:20px;margin:6px;overflow:hidden;border:1px solid var(--primary-color);transition:all 100ms linear, border 300ms ease;cursor:pointer}.perspective-container.svelte-1pm8o92.svelte-1pm8o92{display:block;height:100%;display:flex;position:relative;margin:-4px}.card-highlight.svelte-1pm8o92.svelte-1pm8o92{position:absolute;width:100%;height:100%;border-radius:50%;background:rgba(0, 0, 0, 0.01);filter:blur(20px);z-index:1;pointer-events:none}.post-card.svelte-1pm8o92.svelte-1pm8o92{display:flex;flex-direction:column;justify-content:space-between;height:100%;pointer-events:none}.post-date.svelte-1pm8o92.svelte-1pm8o92{text-transform:uppercase;letter-spacing:0.34px;font-size:1rem;font-family:var(--font-serif);color:var(--off-text-color);font-weight:200;margin-bottom:0.75rem}.post-title.svelte-1pm8o92.svelte-1pm8o92{font-size:1.5rem;margin-bottom:0.75rem;font-family:var(--font-sans);font-weight:500;line-height:1.2}.post-description.svelte-1pm8o92.svelte-1pm8o92{font-size:1.2rem;font-family:var(--font-sans);font-weight:200;line-height:1.15}.post-tags.svelte-1pm8o92.svelte-1pm8o92{margin-top:1rem;text-align:right}.post-tag.svelte-1pm8o92.svelte-1pm8o92{font-family:var(--font-sans);padding:3px 8px;background:rgba(var(--accent-color-rgb), 0.1);margin:2px;margin-right:2px;border-radius:3px;color:rgba(var(--accent-color-rgb), 1);font-size:0.85rem;font-weight:200;text-transform:uppercase;margin-right:0.25rem;letter-spacing:1px}.featured-star.svelte-1pm8o92.svelte-1pm8o92{position:absolute;top:0;right:0;padding:6px}.hovered.svelte-1pm8o92.svelte-1pm8o92{border:1px solid var(--accent-color)}.unhovered.svelte-1pm8o92.svelte-1pm8o92{filter:grayscale(1)}.unhovered.svelte-1pm8o92 .post-date.svelte-1pm8o92,.unhovered.svelte-1pm8o92 .post-title.svelte-1pm8o92,.unhovered.svelte-1pm8o92 .post-description.svelte-1pm8o92,.unhovered.svelte-1pm8o92 .post-tag.svelte-1pm8o92,.unhovered.svelte-1pm8o92 .featured-star.svelte-1pm8o92{color:transparent;opacity:0.5;text-shadow:0 0 2px var(--text-color)}.post-date.svelte-1pm8o92.svelte-1pm8o92,.post-title.svelte-1pm8o92.svelte-1pm8o92,.post-description.svelte-1pm8o92.svelte-1pm8o92,.post-tag.svelte-1pm8o92.svelte-1pm8o92,.featured-star.svelte-1pm8o92.svelte-1pm8o92{transition:opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),\n      text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99)}@media screen and (max-width: 400px){.post-date.svelte-1pm8o92.svelte-1pm8o92{font-size:0.85rem}.post-title.svelte-1pm8o92.svelte-1pm8o92{font-size:1.2rem;margin-bottom:1rem}.post-description.svelte-1pm8o92.svelte-1pm8o92{font-size:1rem}.post-tag.svelte-1pm8o92.svelte-1pm8o92{font-size:0.75rem}}",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getCardDimensions;
  let rotationX;
  let rotationY;
  let circleXPosition;
  let circleYPosition;
  let shadowX;
  let shadowY;
  let scale3dVal;
  let $$unsubscribe_windowWidth;
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  let { post } = $$props;
  let { slug } = $$props;
  let { anyHovered } = $$props;
  let { index } = $$props;
  let card, cardWidth, cardHeight, scrollYPosition = 0;
  let hovered = false;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.anyHovered === void 0 && $$bindings.anyHovered && anyHovered !== void 0)
    $$bindings.anyHovered(anyHovered);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  getCardDimensions = function(card2) {
    card2 ? card2.getBoundingClientRect().left : 0;
    card2 ? card2.getBoundingClientRect().top + scrollYPosition : 0;
  };
  {
    getCardDimensions(card);
  }
  {
    getCardDimensions(card);
  }
  linear().domain([0, cardWidth]).range([-4, 4]);
  linear().domain([cardHeight, 0]).range([-4, 4]);
  rotationX = 0;
  rotationY = 0;
  linear().domain([0, cardWidth]).range([-50, 50]);
  linear().domain([0, cardHeight]).range([-50, 50]);
  circleXPosition = 0;
  circleYPosition = 0;
  shadowX = 0;
  shadowY = 0;
  scale3dVal = 1;
  $$unsubscribe_windowWidth();
  return `

${validate_component(TransitionInView, "TransitionInView").$$render($$result, {}, {}, {
    default: () => `<a class="${"perspective-container no-underline svelte-1pm8o92"}" style="${"perspective: " + escape(cardWidth) + "px"}"${add_attribute("href", slug, 0)} sveltekit:prefetch${add_attribute("this", card, 0)}><div style="${"transform: rotateY(" + escape(rotationX) + "deg) rotateX(" + escape(rotationY) + "deg) scale3d(" + escape(scale3dVal) + ", " + escape(scale3dVal) + ", " + escape(scale3dVal) + "); box-shadow: " + escape(shadowX) + "px " + escape(shadowY) + "px 15px rgba(0, 0, 0, 0.1);"}" class="${"post-container no-underline " + escape(post.featured ? "featured" : "") + " " + escape(anyHovered ? "unhovered" : "") + " svelte-1pm8o92"}">${post.featured ? `<div class="${"featured-star svelte-1pm8o92"}">${validate_component(Star, "Star").$$render($$result, {
      width: "20",
      height: "20",
      fill: "var(--accent-color)",
      stroke: "none",
      hovered,
      index
    }, {}, {})}</div>` : ``}
      <div class="${"card-highlight svelte-1pm8o92"}" style="${"left: " + escape(circleXPosition) + "%; top: " + escape(circleYPosition) + "%"}"></div>
      <div class="${"post-card svelte-1pm8o92"}"><div class="${"post-info"}"><h2 class="${"post-date svelte-1pm8o92"}">${escape(dateFormat(post.date))}</h2>
          <h1 class="${"post-title svelte-1pm8o92"}">${escape(post.title)}</h1>
          <h2 class="${"post-description svelte-1pm8o92"}">${escape(post.description)}</h2></div>
        <div class="${"post-tags svelte-1pm8o92"}">${each(post.tags, (tag) => `<span class="${"post-tag svelte-1pm8o92"}">${escape(tag)}</span>`)}</div></div></div></a>`
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-l5v6ru{max-width:860px;margin:0 auto;padding:1rem;width:95%;margin-bottom:4rem;margin-top:var(--nav-height)}.posts-grid.svelte-l5v6ru{display:grid;grid-template-columns:repeat(2, 1fr);grid-auto-rows:1fr;grid-gap:10px}.button.svelte-l5v6ru{margin:12px 0 12px auto}.archives-title.svelte-l5v6ru{font-size:3rem;margin:1.5rem 1rem 1rem 1rem;border-top:1px solid rgba(var(--accent-color-rgb), 0.5);padding:2rem 0 0.5rem 0;font-weight:100;color:var(--pure-text-color);text-transform:uppercase;text-align:center}@media screen and (max-width: 668px){.posts-grid.svelte-l5v6ru{grid-template-columns:auto;grid-template-rows:repeat(1, 1fr);grid-auto-rows:auto}.archives-title.svelte-l5v6ru{font-size:9vw}}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch(`/posts.json`);
  const posts = await res.json();
  return { props: { posts } };
}
let title = "Blog | Connor Rothschild";
let description = "Some of my writing.";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seo, $$unsubscribe_seo;
  $$unsubscribe_seo = subscribe(seo, (value) => $seo = value);
  let { posts } = $$props;
  let filteredPosts = posts.filter((d) => !d.metadata.draft && !d.metadata.archived).sort((a, b) => {
    if (b.metadata.featured && !a.metadata.featured)
      return 1;
    if (!b.metadata.featured && a.metadata.featured)
      return -1;
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date))
      return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date))
      return -1;
  });
  posts.filter((d) => d.metadata.archived == true).sort((a, b) => Date.parse(b.metadata.date) - Date.parse(a.metadata.date));
  set_store_value(seo, $seo = {
    title,
    description,
    image: `https://og-image-eight-eta.vercel.app/${title}.png?subtitle=${description}&theme=light&md=true&hasImage=true`
  }, $seo);
  let anyHovered = false;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {})}
<main class="${"svelte-l5v6ru"}">
  ${validate_component(BackTo, "BackTo").$$render($$result, {
      href: "/",
      text: "Home",
      classes: "page-overline transition-subtitle centered"
    }, {}, {})}
  <h1 class="${"page-title transition-title overflow-hidden"}">Writing
    </h1>
  <div class="${"transition-content posts-grid svelte-l5v6ru"}">${each(filteredPosts, (post, index) => `${validate_component(Blog, "BlogSection").$$render($$result, {
      post: post.metadata,
      slug: post.path.replace(/\.[^/.]+$/, ""),
      index,
      anyHovered
    }, {
      anyHovered: ($$value) => {
        anyHovered = $$value;
        $$settled = false;
      }
    }, {})}`)}</div>
  ${``}
  <button class="${"button pulled-right block transition-content svelte-l5v6ru"}">${escape("Show the archives \u{1F62C}")}</button>
</main>`;
  } while (!$$settled);
  $$unsubscribe_seo();
  return $$rendered;
});
export { Post as default, load };
