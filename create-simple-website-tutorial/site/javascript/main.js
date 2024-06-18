!function () {
  var t = {
    807: function (t) {
      var e = !("undefined" == typeof window || !window.document
          || !window.document.createElement);
      t.exports = e
    },
    339: function () {
      window.addEventListener(window.ON_LOAD, (function () {
        for (var t = document.querySelectorAll(
            "[data-part1][data-part2][data-part3]"), e = 0, i = Array.from(t);
            e < i.length; e++) {
          var s = i[e], n = s.dataset,
              r = "".concat(n.part1, "@").concat(n.part2, ".").concat(n.part3),
              o = s.innerHTML || r;
          s.setAttribute("href", "mailto:".concat(r)), s.innerHTML = o
        }
      }))
    }
  }, e = {};

  function i(s) {
    var n = e[s];
    if (void 0 !== n) {
      return n.exports;
    }
    var r = e[s] = {exports: {}};
    return t[s](r, r.exports, i), r.exports
  }

  !function () {
    "use strict";
    var t = i(807);
    var e = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e)
        }, s = "object" == typeof global && global && global.Object === Object
            && global,
        n = "object" == typeof self && self && self.Object === Object && self,
        r = s || n || Function("return this")(), o = function () {
          return r.Date.now()
        }, l = /\s/;
    var a = function (t) {
      for (var e = t.length; e-- && l.test(t.charAt(e));) {
        ;
      }
      return e
    }, c = /^\s+/;
    var h = function (t) {
          return t ? t.slice(0, a(t) + 1).replace(c, "") : t
        }, u = r.Symbol, p = Object.prototype, d = p.hasOwnProperty, f = p.toString,
        v = u ? u.toStringTag : void 0;
    var m = function (t) {
      var e = d.call(t, v), i = t[v];
      try {
        t[v] = void 0;
        var s = !0
      } catch (t) {
      }
      var n = f.call(t);
      return s && (e ? t[v] = i : delete t[v]), n
    }, g = Object.prototype.toString;
    var y = function (t) {
      return g.call(t)
    }, b = u ? u.toStringTag : void 0;
    var E = function (t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]"
          : b && b in Object(t) ? m(t) : y(t)
    };
    var x = function (t) {
      return null != t && "object" == typeof t
    };
    var w = function (t) {
          return "symbol" == typeof t || x(t) && "[object Symbol]" == E(t)
        }, O = /^[-+]0x[0-9a-f]+$/i, S = /^0b[01]+$/i, A = /^0o[0-7]+$/i,
        C = parseInt;
    var k = function (t) {
      if ("number" == typeof t) {
        return t;
      }
      if (w(t)) {
        return NaN;
      }
      if (e(t)) {
        var i = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = e(i) ? i + "" : i
      }
      if ("string" != typeof t) {
        return 0 === t ? t : +t;
      }
      t = h(t);
      var s = S.test(t);
      return s || A.test(t) ? C(t.slice(2), s ? 2 : 8) : O.test(t) ? NaN : +t
    }, T = Math.max, N = Math.min;
    var L = function (t, i, s) {
      var n, r, l, a, c, h, u = 0, p = !1, d = !1, f = !0;
      if ("function" != typeof t) {
        throw new TypeError("Expected a function");
      }

      function v(e) {
        var i = n, s = r;
        return n = r = void 0, u = e, a = t.apply(s, i)
      }

      function m(t) {
        var e = t - h;
        return void 0 === h || e >= i || e < 0 || d && t - u >= l
      }

      function g() {
        var t = o();
        if (m(t)) {
          return y(t);
        }
        c = setTimeout(g, function (t) {
          var e = i - (t - h);
          return d ? N(e, l - (t - u)) : e
        }(t))
      }

      function y(t) {
        return c = void 0, f && n ? v(t) : (n = r = void 0, a)
      }

      function b() {
        var t = o(), e = m(t);
        if (n = arguments, r = this, h = t, e) {
          if (void 0 === c) {
            return function (t) {
              return u = t, c = setTimeout(g, i), p ? v(t) : a
            }(h);
          }
          if (d) {
            return clearTimeout(c), c = setTimeout(g, i), v(h)
          }
        }
        return void 0 === c && (c = setTimeout(g, i)), a
      }

      return i = k(i) || 0, e(s) && (p = !!s.leading, l = (d = "maxWait" in s)
          ? T(k(s.maxWait) || 0, i) : l, f = "trailing" in s ? !!s.trailing
          : f), b.cancel = function () {
        void 0 !== c && clearTimeout(c), u = 0, n = h = r = c = void 0
      }, b.flush = function () {
        return void 0 === c ? a : y(o())
      }, b
    };
    var M = function (t, i, s) {
      var n = !0, r = !0;
      if ("function" != typeof t) {
        throw new TypeError("Expected a function");
      }
      return e(s) && (n = "leading" in s ? !!s.leading : n, r = "trailing" in s
          ? !!s.trailing : r), L(t, i, {leading: n, maxWait: i, trailing: r})
    }, W = function () {
      return W = Object.assign || function (t) {
        for (var e, i = 1, s = arguments.length; i < s; i++) {
          for (var n in
              e = arguments[i]) {
            Object.prototype.hasOwnProperty.call(e, n)
            && (t[n] = e[n]);
          }
        }
        return t
      }, W.apply(this, arguments)
    }, D = null, z = null;

    function P() {
      if (null === D) {
        if ("undefined" == typeof document) {
          return D = 0;
        }
        var t = document.body, e = document.createElement("div");
        e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
        var i = e.getBoundingClientRect().right;
        t.removeChild(e), D = i
      }
      return D
    }

    function R(t) {
      return t && t.ownerDocument && t.ownerDocument.defaultView
          ? t.ownerDocument.defaultView : window
    }

    function H(t) {
      return t && t.ownerDocument ? t.ownerDocument : document
    }

    t && window.addEventListener("resize", (function () {
      z !== window.devicePixelRatio && (z = window.devicePixelRatio, D = null)
    }));
    var _ = function (t) {
      return Array.prototype.reduce.call(t, (function (t, e) {
        var i = e.name.match(/data-simplebar-(.+)/);
        if (i) {
          var s = i[1].replace(/\W+(.)/g, (function (t, e) {
            return e.toUpperCase()
          }));
          switch (e.value) {
            case"true":
              t[s] = !0;
              break;
            case"false":
              t[s] = !1;
              break;
            case void 0:
              t[s] = !0;
              break;
            default:
              t[s] = e.value
          }
        }
        return t
      }), {})
    };

    function B(t, e) {
      var i;
      t && (i = t.classList).add.apply(i, e.split(" "))
    }

    function I(t, e) {
      t && e.split(" ").forEach((function (e) {
        t.classList.remove(e)
      }))
    }

    function q(t) {
      return ".".concat(t.split(" ").join("."))
    }

    var j = Object.freeze({
      __proto__: null,
      addClasses: B,
      classNamesToQuery: q,
      getElementDocument: H,
      getElementWindow: R,
      getOptions: _,
      removeClasses: I
    }), V = R, F = H, Y = _, X = B, K = I, G = q, U = function () {
      function e(t, i) {
        void 0 === i && (i = {});
        var s = this;
        if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = !1, this.isMouseEntering = !1, this.isDragging = !1, this.scrollXTicking = !1, this.scrollYTicking = !1, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function () {
        }, this.onWindowResize = function () {
        }, this.onStopScrolling = function () {
        }, this.onMouseEntered = function () {
        }, this.onScroll = function () {
          var t = V(s.el);
          s.scrollXTicking || (t.requestAnimationFrame(
              s.scrollX), s.scrollXTicking = !0), s.scrollYTicking
          || (t.requestAnimationFrame(
              s.scrollY), s.scrollYTicking = !0), s.isScrolling
          || (s.isScrolling = !0, X(s.el,
              s.classNames.scrolling)), s.showScrollbar("x"), s.showScrollbar(
              "y"), s.onStopScrolling()
        }, this.scrollX = function () {
          s.axis.x.isOverflowing && s.positionScrollbar(
              "x"), s.scrollXTicking = !1
        }, this.scrollY = function () {
          s.axis.y.isOverflowing && s.positionScrollbar(
              "y"), s.scrollYTicking = !1
        }, this._onStopScrolling = function () {
          K(s.el, s.classNames.scrolling), s.options.autoHide
          && (s.hideScrollbar("x"), s.hideScrollbar("y")), s.isScrolling = !1
        }, this.onMouseEnter = function () {
          s.isMouseEntering || (X(s.el,
              s.classNames.mouseEntered), s.showScrollbar("x"), s.showScrollbar(
              "y"), s.isMouseEntering = !0), s.onMouseEntered()
        }, this._onMouseEntered = function () {
          K(s.el, s.classNames.mouseEntered), s.options.autoHide
          && (s.hideScrollbar("x"), s.hideScrollbar(
              "y")), s.isMouseEntering = !1
        }, this._onMouseMove = function (t) {
          s.mouseX = t.clientX, s.mouseY = t.clientY, (s.axis.x.isOverflowing
              || s.axis.x.forceVisible) && s.onMouseMoveForAxis(
              "x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible)
          && s.onMouseMoveForAxis("y")
        }, this.onMouseLeave = function () {
          s.onMouseMove.cancel(), (s.axis.x.isOverflowing
              || s.axis.x.forceVisible) && s.onMouseLeaveForAxis(
              "x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible)
          && s.onMouseLeaveForAxis("y"), s.mouseX = -1, s.mouseY = -1
        }, this._onWindowResize = function () {
          s.scrollbarWidth = s.getScrollbarWidth(), s.hideNativeScrollbar()
        }, this.onPointerEvent = function (t) {
          var e, i;
          s.axis.x.track.el && s.axis.y.track.el && s.axis.x.scrollbar.el
          && s.axis.y.scrollbar.el
          && (s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), (s.axis.x.isOverflowing
              || s.axis.x.forceVisible) && (e = s.isWithinBounds(
              s.axis.x.track.rect)), (s.axis.y.isOverflowing
              || s.axis.y.forceVisible) && (i = s.isWithinBounds(
              s.axis.y.track.rect)), (e || i)
          && (t.stopPropagation(), "pointerdown" === t.type && "touch"
          !== t.pointerType && (e
          && (s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(
              s.axis.x.scrollbar.rect) ? s.onDragStart(t, "x") : s.onTrackClick(
              t, "x")), i
          && (s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(
              s.axis.y.scrollbar.rect) ? s.onDragStart(t, "y") : s.onTrackClick(
              t, "y")))))
        }, this.drag = function (t) {
          var i, n, r, o, l, a, c, h, u, p, d;
          if (s.draggedAxis && s.contentWrapperEl) {
            var f = s.axis[s.draggedAxis].track,
                v = null !== (n = null === (i = f.rect) || void 0 === i ? void 0
                    : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== n ? n
                    : 0, m = s.axis[s.draggedAxis].scrollbar,
                g = null !== (o = null === (r = s.contentWrapperEl) || void 0
                === r ? void 0 : r[s.axis[s.draggedAxis].scrollSizeAttr])
                && void 0 !== o ? o : 0, y = parseInt(
                    null !== (a = null === (l = s.elStyles) || void 0 === l ? void 0
                        : l[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a ? a
                        : "0px", 10);
            t.preventDefault(), t.stopPropagation();
            var b = ("y" === s.draggedAxis ? t.pageY : t.pageX) - (null
                    !== (h = null === (c = f.rect) || void 0 === c ? void 0
                        : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h ? h : 0)
                    - s.axis[s.draggedAxis].dragOffset,
                E = (b = "x" === s.draggedAxis && s.isRtl ? (null !== (p = null
                === (u = f.rect) || void 0 === u ? void 0
                    : u[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== p ? p
                    : 0) - m.size - b : b) / (v - m.size) * (g - y);
            "x" === s.draggedAxis && s.isRtl && (E = (null
            === (d = e.getRtlHelpers()) || void 0 === d ? void 0
                : d.isScrollingToNegative) ? -E
                : E), s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = E
          }
        }, this.onEndDrag = function (t) {
          s.isDragging = !1;
          var e = F(s.el), i = V(s.el);
          t.preventDefault(), t.stopPropagation(), K(s.el,
              s.classNames.dragging), s.onStopScrolling(), e.removeEventListener(
              "mousemove", s.drag, !0), e.removeEventListener("mouseup",
              s.onEndDrag, !0), s.removePreventClickId = i.setTimeout(
              (function () {
                e.removeEventListener("click", s.preventClick,
                    !0), e.removeEventListener("dblclick", s.preventClick,
                    !0), s.removePreventClickId = null
              }))
        }, this.preventClick = function (t) {
          t.preventDefault(), t.stopPropagation()
        }, this.el = t, this.options = W(W({}, e.defaultOptions),
            i), this.classNames = W(W({}, e.defaultOptions.classNames),
            i.classNames), this.axis = {
          x: {
            scrollOffsetAttr: "scrollLeft",
            sizeAttr: "width",
            scrollSizeAttr: "scrollWidth",
            offsetSizeAttr: "offsetWidth",
            offsetAttr: "left",
            overflowAttr: "overflowX",
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: {size: null, el: null, rect: null, isVisible: !1},
            scrollbar: {size: null, el: null, rect: null, isVisible: !1}
          },
          y: {
            scrollOffsetAttr: "scrollTop",
            sizeAttr: "height",
            scrollSizeAttr: "scrollHeight",
            offsetSizeAttr: "offsetHeight",
            offsetAttr: "top",
            overflowAttr: "overflowY",
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: {size: null, el: null, rect: null, isVisible: !1},
            scrollbar: {size: null, el: null, rect: null, isVisible: !1}
          }
        }, "object" != typeof this.el || !this.el.nodeName) {
          throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                  this.el));
        }
        this.onMouseMove = M(this._onMouseMove, 64), this.onWindowResize = L(
            this._onWindowResize, 64, {leading: !0}), this.onStopScrolling = L(
            this._onStopScrolling,
            this.stopScrollDelay), this.onMouseEntered = L(this._onMouseEntered,
            this.stopScrollDelay), this.init()
      }

      return e.getRtlHelpers = function () {
        if (e.rtlHelpers) {
          return e.rtlHelpers;
        }
        var t = document.createElement("div");
        t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var i = t.firstElementChild,
            s = null == i ? void 0 : i.firstElementChild;
        if (!s) {
          return null;
        }
        document.body.appendChild(i), i.scrollLeft = 0;
        var n = e.getOffset(i), r = e.getOffset(s);
        i.scrollLeft = -999;
        var o = e.getOffset(s);
        return document.body.removeChild(i), e.rtlHelpers = {
          isScrollOriginAtZero: n.left !== r.left,
          isScrollingToNegative: r.left !== o.left
        }, e.rtlHelpers
      }, e.prototype.getScrollbarWidth = function () {
        try {
          return this.contentWrapperEl && "none" === getComputedStyle(
              this.contentWrapperEl, "::-webkit-scrollbar").display
          || "scrollbarWidth" in document.documentElement.style
          || "-ms-overflow-style" in document.documentElement.style ? 0 : P()
        } catch (t) {
          return P()
        }
      }, e.getOffset = function (t) {
        var e = t.getBoundingClientRect(), i = F(t), s = V(t);
        return {
          top: e.top + (s.pageYOffset || i.documentElement.scrollTop),
          left: e.left + (s.pageXOffset || i.documentElement.scrollLeft)
        }
      }, e.prototype.init = function () {
        t
        && (this.initDOM(), this.rtlHelpers = e.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
      }, e.prototype.initDOM = function () {
        var t, e;
        this.wrapperEl = this.el.querySelector(
            G(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode
            || this.el.querySelector(
                G(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode
            || this.el.querySelector(
                G(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(
            G(this.classNames.offset)), this.maskEl = this.el.querySelector(
            G(this.classNames.mask)), this.placeholderEl = this.findChild(
            this.wrapperEl,
            G(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(
            G(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(
            G(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(
            this.el, "".concat(G(this.classNames.track)).concat(
                G(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(
            this.el, "".concat(G(this.classNames.track)).concat(
                G(this.classNames.vertical))), this.axis.x.scrollbar.el = (null
            === (t = this.axis.x.track.el) || void 0 === t ? void 0
                : t.querySelector(G(this.classNames.scrollbar)))
            || null, this.axis.y.scrollbar.el = (null
            === (e = this.axis.y.track.el) || void 0 === e ? void 0
                : e.querySelector(G(this.classNames.scrollbar)))
            || null, this.options.autoHide || (X(this.axis.x.scrollbar.el,
            this.classNames.visible), X(this.axis.y.scrollbar.el,
            this.classNames.visible))
      }, e.prototype.initListeners = function () {
        var t, e = this, i = V(this.el);
        if (this.el.addEventListener("mouseenter",
            this.onMouseEnter), this.el.addEventListener("pointerdown",
            this.onPointerEvent, !0), this.el.addEventListener("mousemove",
            this.onMouseMove), this.el.addEventListener("mouseleave",
            this.onMouseLeave), null === (t = this.contentWrapperEl) || void 0
        === t || t.addEventListener("scroll",
            this.onScroll), i.addEventListener("resize",
            this.onWindowResize), this.contentEl) {
          if (window.ResizeObserver) {
            var s = !1, n = i.ResizeObserver || ResizeObserver;
            this.resizeObserver = new n((function () {
              s && i.requestAnimationFrame((function () {
                e.recalculate()
              }))
            })), this.resizeObserver.observe(
                this.el), this.resizeObserver.observe(
                this.contentEl), i.requestAnimationFrame((function () {
              s = !0
            }))
          }
          this.mutationObserver = new i.MutationObserver((function () {
            i.requestAnimationFrame((function () {
              e.recalculate()
            }))
          })), this.mutationObserver.observe(this.contentEl,
              {childList: !0, subtree: !0, characterData: !0})
        }
      }, e.prototype.recalculate = function () {
        if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl
            && this.wrapperEl && this.placeholderEl) {
          var t = V(this.el);
          this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl"
              === this.elStyles.direction;
          var e = this.contentEl.offsetWidth,
              i = this.heightAutoObserverEl.offsetHeight <= 1,
              s = this.heightAutoObserverEl.offsetWidth <= 1 || e > 0,
              n = this.contentWrapperEl.offsetWidth,
              r = this.elStyles.overflowX, o = this.elStyles.overflowY;
          this.contentEl.style.padding = "".concat(this.elStyles.paddingTop,
              " ").concat(this.elStyles.paddingRight, " ").concat(
              this.elStyles.paddingBottom, " ").concat(
              this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(
              this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight,
              " -").concat(this.elStyles.paddingBottom, " -").concat(
              this.elStyles.paddingLeft);
          var l = this.contentEl.scrollHeight, a = this.contentEl.scrollWidth;
          this.contentWrapperEl.style.height = i ? "auto"
              : "100%", this.placeholderEl.style.width = s ? "".concat(e || a,
              "px") : "auto", this.placeholderEl.style.height = "".concat(l,
              "px");
          var c = this.contentWrapperEl.offsetHeight;
          this.axis.x.isOverflowing = 0 !== e && a
              > e, this.axis.y.isOverflowing = l
              > c, this.axis.x.isOverflowing = "hidden" !== r
              && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden"
              !== o && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x"
              === this.options.forceVisible || !0
              === this.options.forceVisible, this.axis.y.forceVisible = "y"
              === this.options.forceVisible || !0
              === this.options.forceVisible, this.hideNativeScrollbar();
          var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
          this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > n
              - u, this.axis.y.isOverflowing = this.axis.y.isOverflowing && l
              > c - h, this.axis.x.scrollbar.size = this.getScrollbarSize(
              "x"), this.axis.y.scrollbar.size = this.getScrollbarSize(
              "y"), this.axis.x.scrollbar.el
          && (this.axis.x.scrollbar.el.style.width = "".concat(
              this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el
          && (this.axis.y.scrollbar.el.style.height = "".concat(
              this.axis.y.scrollbar.size, "px")), this.positionScrollbar(
              "x"), this.positionScrollbar("y"), this.toggleTrackVisibility(
              "x"), this.toggleTrackVisibility("y")
        }
      }, e.prototype.getScrollbarSize = function (t) {
        var e, i;
        if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing
        || !this.contentEl) {
          return 0;
        }
        var s, n = this.contentEl[this.axis[t].scrollSizeAttr],
            r = null !== (i = null === (e = this.axis[t].track.el) || void 0
            === e ? void 0 : e[this.axis[t].offsetSizeAttr]) && void 0 !== i ? i
                : 0, o = r / n;
        return s = Math.max(~~(o * r),
            this.options.scrollbarMinSize), this.options.scrollbarMaxSize
        && (s = Math.min(s, this.options.scrollbarMaxSize)), s
      }, e.prototype.positionScrollbar = function (t) {
        var i, s, n;
        void 0 === t && (t = "y");
        var r = this.axis[t].scrollbar;
        if (this.axis[t].isOverflowing && this.contentWrapperEl && r.el
            && this.elStyles) {
          var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
              l = (null === (i = this.axis[t].track.el) || void 0 === i ? void 0
                  : i[this.axis[t].offsetSizeAttr]) || 0,
              a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
              c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
          c = "x" === t && this.isRtl && (null === (s = e.getRtlHelpers())
          || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c, "x" === t
          && this.isRtl && (c = (null === (n = e.getRtlHelpers()) || void 0
          === n ? void 0 : n.isScrollingToNegative) ? c : -c);
          var h = c / (o - a), u = ~~((l - r.size) * h);
          u = "x" === t && this.isRtl ? -u + (l - r.size)
              : u, r.el.style.transform = "x" === t ? "translate3d(".concat(u,
              "px, 0, 0)") : "translate3d(0, ".concat(u, "px, 0)")
        }
      }, e.prototype.toggleTrackVisibility = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t].track.el, i = this.axis[t].scrollbar.el;
        e && i && this.contentWrapperEl && (this.axis[t].isOverflowing
        || this.axis[t].forceVisible
            ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll", this.el.classList.add(
                "".concat(this.classNames.scrollable, "-").concat(t)))
            : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden", this.el.classList.remove(
                "".concat(this.classNames.scrollable, "-").concat(
                    t))), this.axis[t].isOverflowing ? i.style.display = "block"
            : i.style.display = "none")
      }, e.prototype.showScrollbar = function (t) {
        void 0 === t && (t = "y"), this.axis[t].isOverflowing
        && !this.axis[t].scrollbar.isVisible && (X(this.axis[t].scrollbar.el,
            this.classNames.visible), this.axis[t].scrollbar.isVisible = !0)
      }, e.prototype.hideScrollbar = function (t) {
        void 0 === t && (t = "y"), this.isDragging || this.axis[t].isOverflowing
        && this.axis[t].scrollbar.isVisible && (K(this.axis[t].scrollbar.el,
            this.classNames.visible), this.axis[t].scrollbar.isVisible = !1)
      }, e.prototype.hideNativeScrollbar = function () {
        this.offsetEl && (this.offsetEl.style[this.isRtl ? "left"
            : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible
            ? "-".concat(this.scrollbarWidth, "px")
            : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing
        || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px")
            : "0px")
      }, e.prototype.onMouseMoveForAxis = function (t) {
        void 0 === t && (t = "y");
        var e = this.axis[t];
        e.track.el && e.scrollbar.el
        && (e.track.rect = e.track.el.getBoundingClientRect(), e.scrollbar.rect = e.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(
            e.track.rect) ? (this.showScrollbar(t), X(e.track.el,
            this.classNames.hover), this.isWithinBounds(e.scrollbar.rect) ? X(
            e.scrollbar.el, this.classNames.hover) : K(e.scrollbar.el,
            this.classNames.hover)) : (K(e.track.el,
            this.classNames.hover), this.options.autoHide && this.hideScrollbar(
            t)))
      }, e.prototype.onMouseLeaveForAxis = function (t) {
        void 0 === t && (t = "y"), K(this.axis[t].track.el,
            this.classNames.hover), K(this.axis[t].scrollbar.el,
            this.classNames.hover), this.options.autoHide && this.hideScrollbar(
            t)
      }, e.prototype.onDragStart = function (t, e) {
        var i;
        void 0 === e && (e = "y"), this.isDragging = !0;
        var s = F(this.el), n = V(this.el), r = this.axis[e].scrollbar,
            o = "y" === e ? t.pageY : t.pageX;
        this.axis[e].dragOffset = o - ((null === (i = r.rect) || void 0 === i
                ? void 0 : i[this.axis[e].offsetAttr])
            || 0), this.draggedAxis = e, X(this.el,
            this.classNames.dragging), s.addEventListener("mousemove",
            this.drag, !0), s.addEventListener("mouseup", this.onEndDrag,
            !0), null === this.removePreventClickId ? (s.addEventListener(
            "click", this.preventClick, !0), s.addEventListener("dblclick",
            this.preventClick, !0)) : (n.clearTimeout(
            this.removePreventClickId), this.removePreventClickId = null)
      }, e.prototype.onTrackClick = function (t, e) {
        var i, s, n, r, o = this;
        void 0 === e && (e = "y");
        var l = this.axis[e];
        if (this.options.clickOnTrack && l.scrollbar.el
            && this.contentWrapperEl) {
          t.preventDefault();
          var a = V(this.el);
          this.axis[e].scrollbar.rect = l.scrollbar.el.getBoundingClientRect();
          var c = null !== (s = null === (i = this.axis[e].scrollbar.rect)
              || void 0 === i ? void 0 : i[this.axis[e].offsetAttr]) && void 0 !== s
                  ? s : 0, h = parseInt(
                  null !== (r = null === (n = this.elStyles) || void 0 === n
                      ? void 0 : n[this.axis[e].sizeAttr]) && void 0 !== r ? r
                      : "0px", 10),
              u = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
              p = ("y" === e ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
              d = -1 === p ? u - h : u + h, f = function () {
                o.contentWrapperEl && (-1 === p ? u > d
                    && (u -= 40, o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = u, a.requestAnimationFrame(
                        f)) : u < d
                    && (u += 40, o.contentWrapperEl[o.axis[e].scrollOffsetAttr] = u, a.requestAnimationFrame(
                        f)))
              };
          f()
        }
      }, e.prototype.getContentElement = function () {
        return this.contentEl
      }, e.prototype.getScrollElement = function () {
        return this.contentWrapperEl
      }, e.prototype.removeListeners = function () {
        var t = V(this.el);
        this.el.removeEventListener("mouseenter",
            this.onMouseEnter), this.el.removeEventListener("pointerdown",
            this.onPointerEvent, !0), this.el.removeEventListener("mousemove",
            this.onMouseMove), this.el.removeEventListener("mouseleave",
            this.onMouseLeave), this.contentWrapperEl
        && this.contentWrapperEl.removeEventListener("scroll",
            this.onScroll), t.removeEventListener("resize",
            this.onWindowResize), this.mutationObserver
        && this.mutationObserver.disconnect(), this.resizeObserver
        && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel()
      }, e.prototype.unMount = function () {
        this.removeListeners()
      }, e.prototype.isWithinBounds = function (t) {
        return this.mouseX >= t.left && this.mouseX <= t.left + t.width
            && this.mouseY >= t.top && this.mouseY <= t.top + t.height
      }, e.prototype.findChild = function (t, e) {
        var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector
            || t.msMatchesSelector;
        return Array.prototype.filter.call(t.children, (function (t) {
          return i.call(t, e)
        }))[0]
      }, e.rtlHelpers = null, e.defaultOptions = {
        forceVisible: !1,
        clickOnTrack: !0,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: "scrollable content",
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
          scrolling: "simplebar-scrolling",
          scrollable: "simplebar-scrollable",
          mouseEntered: "simplebar-mouse-entered"
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: !0
      }, e.getOptions = Y, e.helpers = j, e
    }(), $ = function (t, e) {
      return $ = Object.setPrototypeOf || {__proto__: []} instanceof Array
          && function (t, e) {
            t.__proto__ = e
          } || function (t, e) {
            for (var i in e) {
              Object.prototype.hasOwnProperty.call(e, i)
              && (t[i] = e[i])
            }
          }, $(t, e)
    };
    var J = U.helpers, Z = J.getOptions, Q = J.addClasses, tt = function (t) {
      function e() {
        for (var i = [], s = 0; s < arguments.length; s++) {
          i[s] = arguments[s];
        }
        var n = t.apply(this, i) || this;
        return e.instances.set(i[0], n), n
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) {
          throw new TypeError(
              "Class extends value " + String(e)
              + " is not a constructor or null");
        }

        function i() {
          this.constructor = t
        }

        $(t, e), t.prototype = null === e ? Object.create(e)
            : (i.prototype = e.prototype, new i)
      }(e, t), e.initDOMLoadedElements = function () {
        document.removeEventListener("DOMContentLoaded",
            this.initDOMLoadedElements), window.removeEventListener("load",
            this.initDOMLoadedElements), Array.prototype.forEach.call(
            document.querySelectorAll("[data-simplebar]"), (function (t) {
              "init" === t.getAttribute("data-simplebar") || e.instances.has(t)
              || new e(t, Z(t.attributes))
            }))
      }, e.removeObserver = function () {
        var t;
        null === (t = e.globalObserver) || void 0 === t || t.disconnect()
      }, e.prototype.initDOM = function () {
        var t, e, i, s = this;
        if (!Array.prototype.filter.call(this.el.children, (function (t) {
          return t.classList.contains(s.classNames.wrapper)
        })).length) {
          for (this.wrapperEl = document.createElement(
              "div"), this.contentWrapperEl = document.createElement(
              "div"), this.offsetEl = document.createElement(
              "div"), this.maskEl = document.createElement(
              "div"), this.contentEl = document.createElement(
              "div"), this.placeholderEl = document.createElement(
              "div"), this.heightAutoObserverWrapperEl = document.createElement(
              "div"), this.heightAutoObserverEl = document.createElement(
              "div"), Q(this.wrapperEl, this.classNames.wrapper), Q(
              this.contentWrapperEl, this.classNames.contentWrapper), Q(
              this.offsetEl, this.classNames.offset), Q(this.maskEl,
              this.classNames.mask), Q(this.contentEl,
              this.classNames.contentEl), Q(this.placeholderEl,
              this.classNames.placeholder), Q(this.heightAutoObserverWrapperEl,
              this.classNames.heightAutoObserverWrapperEl), Q(
              this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
              this.el.firstChild;) {
            this.contentEl.appendChild(
                this.el.firstChild);
          }
          this.contentWrapperEl.appendChild(
              this.contentEl), this.offsetEl.appendChild(
              this.contentWrapperEl), this.maskEl.appendChild(
              this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(
              this.heightAutoObserverEl), this.wrapperEl.appendChild(
              this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(
              this.maskEl), this.wrapperEl.appendChild(
              this.placeholderEl), this.el.appendChild(this.wrapperEl), null
          === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute(
              "tabindex", "0"), null === (e = this.contentWrapperEl) || void 0
          === e || e.setAttribute("role", "region"), null
          === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute(
              "aria-label", this.options.ariaLabel)
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var n = document.createElement("div"),
              r = document.createElement("div");
          Q(n, this.classNames.track), Q(r,
              this.classNames.scrollbar), n.appendChild(
              r), this.axis.x.track.el = n.cloneNode(!0), Q(
              this.axis.x.track.el,
              this.classNames.horizontal), this.axis.y.track.el = n.cloneNode(
              !0), Q(this.axis.y.track.el,
              this.classNames.vertical), this.el.appendChild(
              this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
        }
        U.prototype.initDOM.call(this), this.el.setAttribute("data-simplebar",
            "init")
      }, e.prototype.unMount = function () {
        U.prototype.unMount.call(this), e.instances.delete(this.el)
      }, e.initHtmlApi = function () {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(
            this), "undefined" != typeof MutationObserver
        && (this.globalObserver = new MutationObserver(
            e.handleMutations), this.globalObserver.observe(document,
            {childList: !0, subtree: !0})), "complete" === document.readyState
        || "loading" !== document.readyState
        && !document.documentElement.doScroll ? window.setTimeout(
            this.initDOMLoadedElements) : (document.addEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements), window.addEventListener("load",
            this.initDOMLoadedElements))
      }, e.handleMutations = function (t) {
        t.forEach((function (t) {
          t.addedNodes.forEach((function (t) {
            1 === t.nodeType && (t.hasAttribute("data-simplebar")
                ? !e.instances.has(t) && document.documentElement.contains(t)
                && new e(t, Z(t.attributes)) : t.querySelectorAll(
                    "[data-simplebar]").forEach((function (t) {
                  "init" !== t.getAttribute("data-simplebar")
                  && !e.instances.has(t) && document.documentElement.contains(t)
                  && new e(t, Z(t.attributes))
                })))
          })), t.removedNodes.forEach((function (t) {
            var i;
            1 === t.nodeType && ("init" === t.getAttribute("data-simplebar")
                ? !document.documentElement.contains(t) && (null
                === (i = e.instances.get(t)) || void 0 === i || i.unMount())
                : Array.prototype.forEach.call(
                    t.querySelectorAll('[data-simplebar="init"]'),
                    (function (t) {
                      var i;
                      !document.documentElement.contains(t) && (null
                          === (i = e.instances.get(t)) || void 0 === i
                          || i.unMount())
                    })))
          }))
        }))
      }, e.instances = new WeakMap, e
    }(U);
    t && tt.initHtmlApi(), window.ON_LOAD = window.ON_LOAD
        || "load", window.ON_DOM_CONTENT_LOAD = window.ON_DOM_CONTENT_LOAD
        || "DOMContentLoaded";
    var et, it = function (t, e, i, s) {
      return new (i || (i = Promise))((function (n, r) {
        function o(t) {
          try {
            a(s.next(t))
          } catch (t) {
            r(t)
          }
        }

        function l(t) {
          try {
            a(s.throw(t))
          } catch (t) {
            r(t)
          }
        }

        function a(t) {
          var e;
          t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(
              (function (t) {
                t(e)
              }))).then(o, l)
        }

        a((s = s.apply(t, e || [])).next())
      }))
    }, st = function (t, e) {
      var i, s, n, r, o = {
        label: 0, sent: function () {
          if (1 & n[0]) {
            throw n[1];
          }
          return n[1]
        }, trys: [], ops: []
      };
      return r = {next: l(0), throw: l(1), return: l(2)}, "function"
      == typeof Symbol && (r[Symbol.iterator] = function () {
        return this
      }), r;

      function l(r) {
        return function (l) {
          return function (r) {
            if (i) {
              throw new TypeError("Generator is already executing.");
            }
            for (; o;) {
              try {
                if (i = 1, s && (n = 2 & r[0] ? s.return : r[0] ? s.throw
                    || ((n = s.return) && n.call(s), 0) : s.next)
                && !(n = n.call(
                    s, r[1])).done) {
                  return n;
                }
                switch (s = 0, n && (r = [2 & r[0], n.value]), r[0]) {
                  case 0:
                  case 1:
                    n = r;
                    break;
                  case 4:
                    return o.label++, {value: r[1], done: !1};
                  case 5:
                    o.label++, s = r[1], r = [0];
                    continue;
                  case 7:
                    r = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6
                    !== r[0] && 2 !== r[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                      o.label = r[1];
                      break
                    }
                    if (6 === r[0] && o.label < n[1]) {
                      o.label = n[1], n = r;
                      break
                    }
                    if (n && o.label < n[2]) {
                      o.label = n[2], o.ops.push(r);
                      break
                    }
                    n[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                r = e.call(t, o)
              } catch (t) {
                r = [6, t], s = 0
              } finally {
                i = n = 0
              }
            }
            if (5 & r[0]) {
              throw r[1];
            }
            return {value: r[0] ? r[1] : void 0, done: !0}
          }([r, l])
        }
      }
    }, nt = {bindReClickOnSameAnchorHash: !1}, rt = function () {
      function t(e) {
        this.componentElement = e, this.scrollToIfCovered(), t.bindReClickOnSameAnchorHash(), this.bindLocationHashChange()
      }

      return Object.defineProperty(t, "hashAnchor", {
        get: function () {
          return window.location.hash ? document.querySelector(
              window.location.hash) : null
        }, enumerable: !1, configurable: !0
      }), t.bindReClickOnSameAnchorHash = function () {
        if (nt.bindReClickOnSameAnchorHash) {
          return nt.bindReClickOnSameAnchorHash;
        }
        document.body.addEventListener("click", (function (t) {
          var e = t.target,
              i = "A" === (null == e ? void 0 : e.nodeName) ? e : null == e
                  ? void 0 : e.closest("A");
          i && (null == i ? void 0 : i.hash) === window.location.hash
          && window.dispatchEvent(new HashChangeEvent("hashchange"))
        })), nt.bindReClickOnSameAnchorHash = !0
      }, t.prototype.bindLocationHashChange = function () {
        var t = this;
        window.addEventListener("hashchange", (function () {
          t.onLocationHashChange()
        }))
      }, t.prototype.onLocationHashChange = function () {
        var e = this;
        setTimeout((function () {
          return it(e, void 0, void 0, (function () {
            return st(this, (function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.scrollToIfCovered(t.hashAnchor)];
                case 1:
                  return e.sent(), [2]
              }
            }))
          }))
        }))
      }, t.prototype.scrollToIfCovered = function (e) {
        return it(this, void 0, void 0, (function () {
          var i, s, n, r;
          return st(this, (function (o) {
            switch (o.label) {
              case 0:
                return (s = e) ? [3, 2] : [4,
                  void 0 !== et ? Promise.resolve(et) : new Promise(
                      (function (t) {
                        window.addEventListener(window.ON_LOAD,
                            (function () {
                              setTimeout((function () {
                                var e = document.querySelector(":target");
                                return et = Object.freeze(e), t(et)
                              }))
                            }))
                      }))];
              case 1:
                s = o.sent(), o.label = 2;
              case 2:
                return (i = s) ? i !== this.componentElement ? [2]
                    : (n = function (t, e) {
                      if (!t) {
                        return !1;
                      }
                      var i = t.getBoundingClientRect(), s = i.x, n = i.y,
                          r = document.elementFromPoint(s, n);
                      return !!r && t !== r && function (t, e) {
                        var i;
                        return e.some((function (e) {
                          if (t.nodeName === e) {
                            return i = t, !0;
                          }
                          var s = t.closest(e);
                          return s ? (i = s, !0) : void 0
                        })), i || !1
                      }(r, e)
                    }(i, t.DO_OFFSET_IF_COVERED_BY_TAGS), n ? (r = function (t,
                        e, i) {
                      void 0 === i && (i = 0);
                      var s = t.getBoundingClientRect().height;
                      return {
                        top: e.getBoundingClientRect().top - s
                            + window.pageYOffset - i
                      }
                    }(n, i), window.scrollTo(r), [2]) : [2]) : [2]
            }
          }))
        }))
      }, t.SELECTOR = ".title", t.DO_OFFSET_IF_COVERED_BY_TAGS = ["NAV",
        "HEADER"], t
    }();

    function ot() {
      return ot = Object.assign ? Object.assign.bind() : function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var s in i) {
            Object.prototype.hasOwnProperty.call(i, s)
            && (t[s] = i[s])
          }
        }
        return t
      }, ot.apply(this, arguments)
    }

    var lt = {
      strings: ["These are the default values...",
        "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: 1 / 0,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function (t) {
      },
      onComplete: function (t) {
      },
      preStringTyped: function (t, e) {
      },
      onStringTyped: function (t, e) {
      },
      onLastStringBackspaced: function (t) {
      },
      onTypingPaused: function (t, e) {
      },
      onTypingResumed: function (t, e) {
      },
      onReset: function (t) {
      },
      onStop: function (t, e) {
      },
      onStart: function (t, e) {
      },
      onDestroy: function (t) {
      }
    }, at = new (function () {
      function t() {
      }

      var e = t.prototype;
      return e.load = function (t, e, i) {
        if (t.el = "string" == typeof i ? document.querySelector(i)
            : i, t.options = ot({}, lt, e), t.isInput = "input"
            === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput
            && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr
            ? t.el.getAttribute(t.attr)
            : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(
            (function (t) {
              return t.trim()
            })), t.stringsElement = "string" == typeof t.options.stringsElement
            ? document.querySelector(t.options.stringsElement)
            : t.options.stringsElement, t.stringsElement) {
          t.strings = [], t.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
          var s = Array.prototype.slice.apply(t.stringsElement.children),
              n = s.length;
          if (n) {
            for (var r = 0; r < n; r += 1) {
              t.strings.push(
                  s[r].innerHTML.trim())
            }
          }
        }
        for (var o in
            t.strPos = 0, t.currentElContent = this.getCurrentElContent(
                t), t.currentElContent && t.currentElContent.length > 0
            && (t.strPos = t.currentElContent.length - 1, t.strings.unshift(
                t.currentElContent)), t.sequence = [], t.strings) {
          t.sequence[o] = o;
        }
        t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.pause = {
          status: !1,
          typewrite: !0,
          curString: "",
          curStrPos: 0
        }, t.typingComplete = !1, t.autoInsertCss = t.options.autoInsertCss, t.autoInsertCss
        && (this.appendCursorAnimationCss(t), this.appendFadeOutAnimationCss(t))
      }, e.getCurrentElContent = function (t) {
        return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value
            : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
      }, e.appendCursorAnimationCss = function (t) {
        var e = "data-typed-js-cursor-css";
        if (t.showCursor && !document.querySelector("[" + e + "]")) {
          var i = document.createElement("style");
          i.setAttribute(e,
              "true"), i.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(
              i)
        }
      }, e.appendFadeOutAnimationCss = function (t) {
        var e = "data-typed-fadeout-js-css";
        if (t.fadeOut && !document.querySelector("[" + e + "]")) {
          var i = document.createElement("style");
          i.setAttribute(e,
              "true"), i.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(
              i)
        }
      }, t
    }()), ct = new (function () {
      function t() {
      }

      var e = t.prototype;
      return e.typeHtmlChars = function (t, e, i) {
        if ("html" !== i.contentType) {
          return e;
        }
        var s = t.substring(e).charAt(0);
        if ("<" === s || "&" === s) {
          var n;
          for (n = "<" === s ? ">" : ";";
              t.substring(e + 1).charAt(0) !== n && !(1 + ++e > t.length);) {
            ;
          }
          e++
        }
        return e
      }, e.backSpaceHtmlChars = function (t, e, i) {
        if ("html" !== i.contentType) {
          return e;
        }
        var s = t.substring(e).charAt(0);
        if (">" === s || ";" === s) {
          var n;
          for (n = ">" === s ? "<" : "&";
              t.substring(e - 1).charAt(0) !== n && !(--e < 0);) {
            ;
          }
          e--
        }
        return e
      }, t
    }()), ht = function () {
      function t(t, e) {
        at.load(this, e, t), this.begin()
      }

      var e = t.prototype;
      return e.toggle = function () {
        this.pause.status ? this.start() : this.stop()
      }, e.stop = function () {
        this.typingComplete || this.pause.status || (this.toggleBlinking(
            !0), this.pause.status = !0, this.options.onStop(this.arrayPos,
            this))
      }, e.start = function () {
        this.typingComplete || this.pause.status
        && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(
            this.pause.curString, this.pause.curStrPos) : this.backspace(
            this.pause.curString, this.pause.curStrPos), this.options.onStart(
            this.arrayPos, this))
      }, e.destroy = function () {
        this.reset(!1), this.options.onDestroy(this)
      }, e.reset = function (t) {
        void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(
            ""), this.cursor && this.cursor.parentNode
        && (this.cursor.parentNode.removeChild(
            this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t
        && (this.insertCursor(), this.options.onReset(this), this.begin())
      }, e.begin = function () {
        var t = this;
        this.options.onBegin(
            this), this.typingComplete = !1, this.shuffleStringsIfNeeded(
            this), this.insertCursor(), this.bindInputFocusEvents
        && this.bindFocusEvents(), this.timeout = setTimeout((function () {
          0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]],
              t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]],
              t.strPos)
        }), this.startDelay)
      }, e.typewrite = function (t, e) {
        var i = this;
        this.fadeOut && this.el.classList.contains(this.fadeOutClass)
        && (this.el.classList.remove(this.fadeOutClass), this.cursor
        && this.cursor.classList.remove(this.fadeOutClass));
        var s = this.humanizer(this.typeSpeed), n = 1;
        !0 !== this.pause.status ? this.timeout = setTimeout((function () {
          e = ct.typeHtmlChars(t, e, i);
          var s = 0, r = t.substring(e);
          if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
            var o = 1;
            o += (r = /\d+/.exec(r)[0]).length, s = parseInt(
                r), i.temporaryPause = !0, i.options.onTypingPaused(i.arrayPos,
                i), t = t.substring(0, e) + t.substring(
                e + o), i.toggleBlinking(!0)
          }
          if ("`" === r.charAt(0)) {
            for (; "`" !== t.substring(e + n).charAt(0) && (n++, !(e + n
                > t.length));) {
              ;
            }
            var l = t.substring(0, e), a = t.substring(l.length + 1, e + n),
                c = t.substring(e + n + 1);
            t = l + a + c, n--
          }
          i.timeout = setTimeout((function () {
            i.toggleBlinking(!1), e >= t.length ? i.doneTyping(t, e)
                : i.keepTyping(t, e, n), i.temporaryPause
            && (i.temporaryPause = !1, i.options.onTypingResumed(i.arrayPos, i))
          }), s)
        }), s) : this.setPauseStatus(t, e, !0)
      }, e.keepTyping = function (t, e, i) {
        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(
            this.arrayPos, this));
        var s = t.substring(0, e += i);
        this.replaceText(s), this.typewrite(t, e)
      }, e.doneTyping = function (t, e) {
        var i = this;
        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(
            !0), this.arrayPos === this.strings.length - 1
        && (this.complete(), !1 === this.loop || this.curLoop
        === this.loopCount) || (this.timeout = setTimeout((function () {
          i.backspace(t, e)
        }), this.backDelay))
      }, e.backspace = function (t, e) {
        var i = this;
        if (!0 !== this.pause.status) {
          if (this.fadeOut) {
            return this.initFadeOut();
          }
          this.toggleBlinking(!1);
          var s = this.humanizer(this.backSpeed);
          this.timeout = setTimeout((function () {
            e = ct.backSpaceHtmlChars(t, e, i);
            var s = t.substring(0, e);
            if (i.replaceText(s), i.smartBackspace) {
              var n = i.strings[i.arrayPos + 1];
              i.stopNum = n && s === n.substring(0, e) ? e : 0
            }
            e > i.stopNum ? (e--, i.backspace(t, e)) : e <= i.stopNum
                && (i.arrayPos++, i.arrayPos === i.strings.length
                    ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin())
                    : i.typewrite(i.strings[i.sequence[i.arrayPos]], e))
          }), s)
        } else {
          this.setPauseStatus(t, e, !1)
        }
      }, e.complete = function () {
        this.options.onComplete(this), this.loop ? this.curLoop++
            : this.typingComplete = !0
      }, e.setPauseStatus = function (t, e, i) {
        this.pause.typewrite = i, this.pause.curString = t, this.pause.curStrPos = e
      }, e.toggleBlinking = function (t) {
        this.cursor && (this.pause.status || this.cursorBlinking !== t
            && (this.cursorBlinking = t, t ? this.cursor.classList.add(
                "typed-cursor--blink") : this.cursor.classList.remove(
                "typed-cursor--blink")))
      }, e.humanizer = function (t) {
        return Math.round(Math.random() * t / 2) + t
      }, e.shuffleStringsIfNeeded = function () {
        this.shuffle && (this.sequence = this.sequence.sort((function () {
          return Math.random() - .5
        })))
      }, e.initFadeOut = function () {
        var t = this;
        return this.el.className += " " + this.fadeOutClass, this.cursor
        && (this.cursor.className += " " + this.fadeOutClass), setTimeout(
            (function () {
              t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos
                  ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                  : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
            }), this.fadeOutDelay)
      }, e.replaceText = function (t) {
        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput
            ? this.el.value = t : "html" === this.contentType
                ? this.el.innerHTML = t : this.el.textContent = t
      }, e.bindFocusEvents = function () {
        var t = this;
        this.isInput && (this.el.addEventListener("focus", (function (e) {
          t.stop()
        })), this.el.addEventListener("blur", (function (e) {
          t.el.value && 0 !== t.el.value.length || t.start()
        })))
      }, e.insertCursor = function () {
        this.showCursor && (this.cursor
            || (this.cursor = document.createElement(
                "span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute(
                "aria-hidden",
                !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode
            && this.el.parentNode.insertBefore(this.cursor,
                this.el.nextSibling)))
      }, t
    }(), ut = function () {
      function t(t, e) {
        this.element = t, this.titleElement = e, this.showCursor = JSON.parse(
            t.dataset.showCursor), this.speed = Number(
            t.dataset.speed), this.delay = Number(
            t.dataset.delay), this.strings = JSON.parse(
            t.dataset.endings), this.init()
      }

      return t.prototype.init = function () {
        var e = this;
        new ht(this.element, {
          strings: this.strings,
          loop: !0,
          typeSpeed: this.speed,
          showCursor: this.showCursor,
          smartBackspace: !1,
          backDelay: this.delay,
          onBegin: function () {
            var t;
            null === (t = e.titleElement.getElementsByClassName(
                "typed-first")[0]) || void 0 === t || t.classList.add(
                "is-hidden")
          }
        }), t.setHeightOfTitle(
            this.titleElement), window.onresize = function () {
          t.setHeightOfTitle(e.titleElement)
        }
      }, t.setHeightOfTitle = function (t) {
        var e = Array.from(
            t.querySelectorAll(".container-with-endings > span")).map(
            (function (t) {
              return t.clientHeight
            }));
        t.querySelector(".title-container").style.height = Math.max.apply(Math,
            e) + "px"
      }, t.SELECTOR = ".typed-animation", t
    }();
    document.addEventListener(window.ON_DOM_CONTENT_LOAD, (function () {
      Array.from(document.querySelectorAll(rt.SELECTOR)).forEach((function (t) {
        new rt(t), Array.from(t.querySelectorAll(ut.SELECTOR)).forEach(
            (function (e) {
              new ut(e, t)
            }))
      }))
    })), window.addEventListener(window.ON_LOAD, (function () {
      Array.from(document.querySelectorAll(rt.SELECTOR)).forEach((function (t) {
        Array.from(t.querySelectorAll(ut.SELECTOR)).forEach((function () {
          ut.setHeightOfTitle(t)
        }))
      }))
    }));
    i(339)
  }()
}();
