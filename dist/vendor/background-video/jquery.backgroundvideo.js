"use strict";

!function (t) {
  t.backgroundVideo = function (e, i) {
    var n = { videoid: "video_background", autoplay: !0, loop: !0, preload: !0 },
        o = this;o.settings = {};var s = function s() {
      o.settings = t.extend({}, n, i), o.el = e, d();
    },
        d = function d() {
      var e = "",
          i = "",
          n = "",
          s = "",
          d = o.settings.preload,
          l = o.settings.autoplay,
          v = o.settings.loop;i = d ? 'preload="auto"' : "", n = l ? 'autoplay="autoplay"' : "", s = v ? 'loop="true"' : "", e += '<video id="' + o.settings.videoid + '"' + i + n + s, o.settings.poster && (e += ' poster="' + o.settings.poster + '" '), e += 'style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';for (var a = 0; a < o.settings.types.length; a++) {
        e += '<source src="' + o.settings.path + o.settings.filename + "." + o.settings.types[a] + '" type="video/' + o.settings.types[a] + '" />';
      }e += "bgvideo</video>", o.el.html(e), o.videoEl = document.getElementById(o.settings.videoid), o.$videoEl = t(o.videoEl), o.$videoEl.fadeIn(2e3), g();
    },
        g = function g() {
      var t = l();o.$videoEl.width(t * o.settings.width), o.$videoEl.height(t * o.settings.height), "undefined" != typeof o.settings.align && v();
    },
        l = function l() {
      var e = t(window).width(),
          i = t(window).height(),
          n = e / i,
          s = o.settings.width / o.settings.height,
          d = i / o.settings.height;return n >= s && (d = e / o.settings.width), d;
    },
        v = function v() {
      var e = (t(window).width() >> 1) - (o.$videoEl.width() >> 1) | 0,
          i = (t(window).height() >> 1) - (o.$videoEl.height() >> 1) | 0;return "centerXY" == o.settings.align ? void o.$videoEl.css({ left: e, top: i }) : "centerX" == o.settings.align ? void o.$videoEl.css("left", e) : "centerY" == o.settings.align ? void o.$videoEl.css("top", i) : void 0;
    };s(), t(window).resize(function () {
      g();
    }), o.$videoEl.bind("ended", function () {
      this.play();
    });
  };
}(jQuery);
//# sourceMappingURL=jquery.backgroundvideo.js.map