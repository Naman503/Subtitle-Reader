(() => {
  "use strict";
  var e = {
      7722: (e, n, r) => {
        r.d(n, { Z: () => o });
        var a = r(3645),
          t = r.n(a)()(function (e) {
            return e[1];
          });
        t.push([
          e.id,
          ':root {\r\n    --color: #000;\r\n    --reverse-color: #ffffff;\r\n    --control-color: #1a73e8; /*#0850ac; #0d6efd;*/\r\n    --reverse-control-color: #fff;\r\n    --control-color-discard: #6c757d;\r\n    --control-color-discard-focus: #565e64;\r\n    --control-color-discard-focus-bg: #5c636a;\r\n    --color-dark: #222222;\r\n    --color-gray: #555555; /*#7c7c7c;*/\r\n    --color-red: #ee0000;\r\n    --border-color: #ced4da;\r\n    --bg-color: linear-gradient(to bottom, #7579ff, #b224ef);\r\n    --bg-light: #f9f9f9;\r\n    --base-padding: 1rem;\r\n    --logo-icon-width: 80px;\r\n    --font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\r\n    --font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\r\n    --bg-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\r\n}\r\n\r\n*, ::before, ::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 14px;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    min-width: 560px;\r\n    min-height: 200px;\r\n    font-size: 1rem;\r\n    line-height: 1.4;\r\n    color: var(--color-dark);\r\n    font-family: var(--font-sans-serif);\r\n    background: #7c7c7c;\r\n}\r\n\r\n#wrapper {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n\r\na {\r\n    font-size: .875rem;\r\n    text-decoration: none;\r\n    color: var(--control-color);\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.header, section figure, section .speech-controls {\r\n    padding: var(--base-padding);\r\n}\r\n\r\n/* Header */\r\n.header {\r\n    width: 35%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    margin-top: calc(80px - var(--base-padding));\r\n    color: #fff;\r\n    gap: 5rem;\r\n    padding-bottom: calc(var(--base-padding) / 2);\r\n}\r\n\r\n#wrapper .logo {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    row-gap: 1em;\r\n}\r\n\r\n.header .logo img {\r\n    height: var(--logo-icon-width);\r\n}\r\n\r\n.header .logo h3 {\r\n    font-size: 1.25rem;\r\n    font-weight: 400;\r\n    /*white-space: nowrap;*/\r\n    white-space: break-spaces;\r\n    text-align: center;\r\n}\r\n\r\n.header .extension-controls {\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    width: 100%;\r\n\r\n}\r\n\r\n/* UI Lang */\r\n.header label.ui_lang {\r\n    --bg: transparent;\r\n    background: var(--bg);\r\n    background-repeat: no-repeat;\r\n    background-size:contain;\r\n    padding-left: 25px;\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 200px;\r\n}\r\n.header label.ui_lang select {\r\n    width: 135px;\r\n}\r\n\r\n.btn-check {\r\n    position: absolute;\r\n    top: calc(calc(80px - 33.5px) / 2);\r\n    right: calc(calc(80px - 33.5px) / 2);\r\n}\r\n\r\n.btn-check input {\r\n    position: absolute;\r\n    clip: rect(0, 0, 0, 0);\r\n    pointer-events: none;\r\n}\r\n\r\n.btn-check label {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid var(--control-color);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    border-radius: .25rem;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n    color: inherit;\r\n}\r\n\r\n.btn-check input:checked + label,\r\n.btn-check label:hover {\r\n    color: var(--reverse-control-color);\r\n    background-color: var(--control-color);\r\n}\r\n\r\n.btn-check input:focus + label,\r\n.btn-check label:hover,\r\n.custom-language #add_custom_lang button:focus {\r\n    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .5);\r\n    outline: 0;\r\n}\r\n\r\n/* Now Playing */\r\n.header .now_playing {\r\n    font-size: .8rem;\r\n    color: #C1D8F5;\r\n    align-self: flex-start;\r\n    gap: calc(var(--base-padding) / 3);\r\n    opacity: 0;\r\n    font-optical-sizing: auto;\r\n}\r\n\r\n.header .now_playing #x_close_thread {\r\n    cursor: pointer;\r\n    color: var(--color-red);\r\n    border: 1px solid var(--reverse-color);\r\n    border-radius: 50%;\r\n}\r\n\r\n.header .now_playing #x_close_thread:hover {\r\n    border: none;\r\n}\r\n\r\n/* Section */\r\nsection {\r\n    margin: 80px 0 0;\r\n    color: #000;\r\n    border-top-left-radius: 30px;\r\n    box-shadow: 0 0 25px 0 #00000063;\r\n    background: var(--bg-light);\r\n}\r\n\r\nsection figure {\r\n    padding-top: calc(var(--base-padding) / 2);\r\n    text-align: center;\r\n    font-weight: 300;\r\n}\r\n\r\nsection figure blockquote {\r\n    font-size: 1.25rem;\r\n}\r\n\r\nsection figure figcaption {\r\n    font-size: .875rem;\r\n    color: var(--color-gray);\r\n}\r\n\r\nsection .speech-controls {\r\n    /*padding-top: calc(var(--base-padding) / 2);*/\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n\r\n/* Selects */\r\nsection .form-floating {\r\n    line-height: 1.5;\r\n    color: var(--color-dark);\r\n    -webkit-text-size-adjust: 100%;\r\n    -webkit-tap-highlight-color: transparent;\r\n    font-weight: lighter !important;\r\n    position: relative;\r\n    margin-bottom: .25rem !important;\r\n}\r\n\r\nsection .form-control {\r\n    text-transform: none;\r\n    word-wrap: normal;\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid var(--border-color);\r\n    appearance: none;\r\n    border-radius: .25rem;\r\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n    height: calc(3.5rem + 2px);\r\n    padding: 1rem .75rem;\r\n    padding-top: 1.625rem;\r\n    padding-bottom: .625rem;\r\n}\r\n\r\nsection .form-control:focus {\r\n    border-color: #86b7fe;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25);\r\n    height: calc(3.5rem + 2px);\r\n}\r\n\r\nsection .form-control + label {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    padding: 1rem .75rem;\r\n    pointer-events: none;\r\n    border: 1px solid transparent;\r\n    transform-origin: 0 0;\r\n    transition: opacity .1s ease-in-out, transform .1s ease-in-out;\r\n    opacity: .65;\r\n    transform: scale(.85) translateY(-.5rem) translateX(.15rem);\r\n}\r\n\r\n/* Custom Language */\r\n.custom-language {\r\n\r\n}\r\n\r\n.custom-language div:first-child {\r\n    text-align: right;\r\n    margin-bottom: calc(var(--base-padding) / 6);\r\n}\r\n\r\n.custom-language #add_custom_lang {\r\n    border: 1px solid var(--border-color);\r\n    border-radius: .25rem;\r\n    /*padding: calc(var(--base-padding) / 2) calc(var(--base-padding) * .75);*/\r\n    padding: calc(var(--base-padding) * .75);\r\n}\r\n\r\n.custom-language #add_custom_lang a {\r\n    display: block;\r\n    /*margin-bottom: calc(var(--base-padding) / 2);*/\r\n    margin-bottom: calc(var(--base-padding) * .75);\r\n}\r\n\r\n.custom-language #add_custom_lang a svg {\r\n    padding-top: 2px;\r\n    margin-left: -2px;\r\n}\r\n\r\n.custom-language #add_custom_lang .input-group {\r\n    font-family: var(--font-sans-serif);\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    width: 100%;\r\n    /*margin-bottom: calc(var(--base-padding) / 2);*/\r\n    margin-bottom: calc(var(--base-padding) * .75);\r\n    margin-left: -1px;\r\n}\r\n\r\n.custom-language #add_custom_lang span {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: .375rem .75rem;\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n    flex: 0 0 auto;\r\n    width: 25%;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n\r\n.custom-language #add_custom_lang input {\r\n    font-family: inherit;\r\n    padding: .375rem .75rem;\r\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n    flex: 1 1 auto;\r\n    width: 1%;\r\n    margin-left: -3px;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    height: auto;\r\n}\r\n\r\n.custom-language #add_custom_lang input.danger {\r\n    border-color: #b02a37;\r\n    box-shadow: 0 0 0 .25rem rgba(225, 83, 97, .5);\r\n}\r\n\r\n.custom-language #add_custom_lang .add-lang-btn {\r\n    justify-content: flex-end;\r\n    margin-bottom: 0;\r\n    gap: calc(var(--base-padding) / 2);\r\n}\r\n\r\n.custom-language #add_custom_lang button {\r\n    font-family: inherit;\r\n    text-transform: none;\r\n    -webkit-appearance: button;\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    user-select: none;\r\n    border: 1px solid var(--control-color);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    border-radius: .25rem;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n    color: var(--reverse-control-color);\r\n    background-color: var(--control-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.custom-language #add_custom_lang #btn_custom_discard {\r\n    border: 1px solid var(--control-color-discard);\r\n    background-color: var(--control-color-discard);\r\n}\r\n\r\n.custom-language #add_custom_lang #btn_custom_discard:focus {\r\n    -webkit-appearance: button;\r\n    border: 1px solid var(--control-color-discard-focus);\r\n    background-color: var(--control-color-discard-focus-bg);\r\n    box-shadow: 0 0 0 .25rem rgba(130, 138, 145, .5);\r\n}\r\n\r\n/* Range items */\r\nsection #range_items {\r\n    padding: calc(var(--base-padding) / 4) 0 0 0;\r\n}\r\n\r\nsection #range_items .input-group {\r\n    flex-wrap: wrap;\r\n    margin-bottom: .5rem !important;\r\n}\r\n\r\nsection #range_items label {\r\n    line-height: 1.5;\r\n    margin-bottom: calc(var(--base-padding) / 4);\r\n}\r\n\r\nsection #range_items label labelnum {\r\n    display: inline-block;\r\n    margin: 0 calc(var(--base-padding) / 5);\r\n}\r\n\r\nsection #range_items input {\r\n    width: 100%;\r\n    height: 1.5rem;\r\n    margin-left: -1px;\r\n    /*appearance: none;*/\r\n    background-color: transparent;\r\n}\r\n\r\nsection #range_items input:focus {\r\n    outline: 0;\r\n}\r\n\r\n/** Utils */\r\n.flex {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.t-shd {\r\n    text-shadow: 0.8px 0.5px 3px black;\r\n}\r\n\r\n.d-none {\r\n    display: none;\r\n}\r\n\r\n.opacity-show {\r\n    opacity: 1 !important;\r\n    transition: opacity 1s;\r\n}\r\n\r\n.version {\r\n    font-size: small;\r\n}\r\n\r\n/* Social Media Elements */\r\n\r\n.header .social_media {\r\n    /*position: absolute;*/\r\n    /*top: calc(var(--base-padding) * 1.5);*/\r\n    /*left: calc(var(--logo-icon-width) * 1.5);*/\r\n    /*top: 8px;*/\r\n    /*right: 5px;*/\r\n}\r\n\r\n.header .social_media a {\r\n    display: inline-block;\r\n    height: 20px;\r\n    width: 20px;\r\n    margin: 0 2px;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    transition: box-shadow 300ms;\r\n    border-radius: 50%;\r\n}\r\n\r\n.header .social_media a:hover {\r\n    box-shadow: 0 0 8px 0 #000000;\r\n}\r\n\r\n#speaking_control label {\r\n    display: flex;\r\n    column-gap: 3px;\r\n}\r\n#speaking_control input {\r\n    display: inline-block;\r\n    margin-top: 3px;\r\n}\r\n',
          "",
        ]);
        const o = t;
      },
      3645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var r = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(r, "}") : r;
              }).join("");
            }),
            (n.i = function (e, r, a) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var t = {};
              if (a)
                for (var o = 0; o < this.length; o++) {
                  var i = this[o][0];
                  null != i && (t[i] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (a && t[l[0]]) ||
                  (r &&
                    (l[2]
                      ? (l[2] = "".concat(r, " and ").concat(l[2]))
                      : (l[2] = r)),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      3379: (e, n, r) => {
        var a,
          t = function () {
            return (
              void 0 === a &&
                (a = Boolean(
                  window && document && document.all && !window.atob
                )),
              a
            );
          },
          o = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var r = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                e[n] = r;
              }
              return e[n];
            };
          })(),
          i = [];
        function s(e) {
          for (var n = -1, r = 0; r < i.length; r++)
            if (i[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function l(e, n) {
          for (var r = {}, a = [], t = 0; t < e.length; t++) {
            var o = e[t],
              l = n.base ? o[0] + n.base : o[0],
              c = r[l] || 0,
              d = "".concat(l, " ").concat(c);
            r[l] = c + 1;
            var g = s(d),
              u = { css: o[1], media: o[2], sourceMap: o[3] };
            -1 !== g
              ? (i[g].references++, i[g].updater(u))
              : i.push({ identifier: d, updater: b(u, n), references: 1 }),
              a.push(d);
          }
          return a;
        }
        function c(e) {
          var n = document.createElement("style"),
            a = e.attributes || {};
          if (void 0 === a.nonce) {
            var t = r.nc;
            t && (a.nonce = t);
          }
          if (
            (Object.keys(a).forEach(function (e) {
              n.setAttribute(e, a[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var i = o(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(n);
          }
          return n;
        }
        var d,
          g =
            ((d = []),
            function (e, n) {
              return (d[e] = n), d.filter(Boolean).join("\n");
            });
        function u(e, n, r, a) {
          var t = r
            ? ""
            : a.media
            ? "@media ".concat(a.media, " {").concat(a.css, "}")
            : a.css;
          if (e.styleSheet) e.styleSheet.cssText = g(n, t);
          else {
            var o = document.createTextNode(t),
              i = e.childNodes;
            i[n] && e.removeChild(i[n]),
              i.length ? e.insertBefore(o, i[n]) : e.appendChild(o);
          }
        }
        function p(e, n, r) {
          var a = r.css,
            t = r.media,
            o = r.sourceMap;
          if (
            (t ? e.setAttribute("media", t) : e.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (a +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = a;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(a));
          }
        }
        var m = null,
          h = 0;
        function b(e, n) {
          var r, a, t;
          if (n.singleton) {
            var o = h++;
            (r = m || (m = c(n))),
              (a = u.bind(null, r, o, !1)),
              (t = u.bind(null, r, o, !0));
          } else
            (r = c(n)),
              (a = p.bind(null, r, n)),
              (t = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(r);
              });
          return (
            a(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                a((e = n));
              } else t();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton = t());
          var r = l((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var a = 0; a < r.length; a++) {
                var t = s(r[a]);
                i[t].references--;
              }
              for (var o = l(e, n), c = 0; c < r.length; c++) {
                var d = s(r[c]);
                0 === i[d].references && (i[d].updater(), i.splice(d, 1));
              }
              r = o;
            }
          };
        };
      },
      4437: (e) => {
        e.exports = JSON.parse(
          '{"extension_name":{"message":"Speak Subtitles for YouTube"},"extension_description":{"message":"Extension convert text subtitles for YouTube into natural-sounding speech using AI technologies."},"text_description":{"message":"Voice subtitles for YouTube"},"text_description_small":{"message":"Translate, learn, communicate!"},"text_title":{"message":"Subtitles Reader"},"text_add_custom_lang":{"message":"Add Language"},"text_enable_on":{"message":"Switch On"},"text_enable_off":{"message":"Switch Off"},"text_voice":{"message":"Voice"},"text_translate_lang":{"message":"Subtitles Language"},"text_pitch":{"message":"Pitch"},"text_volume":{"message":"Volume"},"text_rate":{"message":"Default speed"},"text_rate_desc":{"message":"Voice speed"},"text_max_rate":{"message":"Maximum speed"},"text_name":{"message":"Name"},"text_code":{"message":"Code"},"text_cancel":{"message":"Cancel"},"text_save":{"message":"Save"},"text_enabled":{"message":"Enabled"},"text_disabled":{"message":"Disabled"},"text_subtitles":{"message":"Subtitles"},"text_speaking_control":{"message":"When the voice is lagging"},"text_speed_up_voice":{"message":"Speed up the voice"},"text_slow_down_video":{"message":"Slow down video"},"text_ui_lang":{"message":"UI Lang"}}'
        );
      },
      7692: (e) => {
        e.exports = JSON.parse(
          '{"af":"af - Afrikaans - Afrikaans","am":"am - አማርኛ - Amharic","ar":"ar - اللغة العربية - Arabic","az":"az - Azərbaycan dili - Azerbaijani","be":"be - Беларуская мова - Belarusian","bg":"bg - Български език - Bulgarian","bn":"bn - বাংলা - Bengali","bs":"bs - Bosanski jezik - Bosnian","ca":"ca - Català - Catalan","ceb":"ceb - Sugboanon - Cebuano","co":"co - Corsu - Corsican","cs":"cs - Čeština, český jazyk - Czech","cy":"cy - Cymraeg - Welsh","da":"da - Dansk - Danish","de":"de - Deutsch - German","el":"el - Ελληνικά - Greek","en":"en - English - English","eo":"eo - Esperanto - Esperanto","es":"es - Español - Spanish","et":"et - Eesti keel - Estonian","eu":"eu - euskara - Basque","fa":"fa - زبان فارسی - Persian","fi":"fi - Suomi - Finnish","fr":"fr - Français - French","fy":"fy - Fryske talen - Frisian","ga":"ga - Gaeilge - Irish","gd":"gd - Scots leid - Scots Gaelic","gl":"gl - Galego - Galician","gu":"gu - ગુજરાતી - Gujarati","ha":"ha - Hausa - Hausa","haw":"haw - ʻŌlelo Hawaiʻi - Hawaiian","hi":"hi - हिन्दी - Hindi","hmn":"hmn - H\'Mông - Hmong","hr":"hr - Hrvatski jezik - Croatian","ht":"ht - Kreyòl ayisyen - Haitian Creole","hu":"hu - Magyar nyelv - Hungarian","hy":"hy - հայերեն - Armenian","id":"id - Bahasa Indonesia - Indonesian","ig":"ig - Igbo - Igbo","is":"is - Íslenska - Icelandic","it":"it - Italiano - Italian","iw":"iw - עִבְרִית - Hebrew","ja":"ja - 日本語 - Japanese","jw":"jw - Basa Jawa - Javanese","ka":"ka - ქართული ენა - Georgian","kk":"kk - қазақ тілі - Kazakh","km":"km - ភាសាខ្មែរ - Khmer","kn":"kn - ಕನ್ನಡ - Kannada","ko":"ko - 한국어 - Korean","ku":"ku - Kurmancî - Kurdish (Kurmanji)","ky":"ky - Кыргыз тили - Kyrgyz","la":"la - Lingua latina - Latin","lb":"lb - Lëtzebuergesch - Luxembourgish","lo":"lo - ພາສາລາວ - Lao","lt":"lt - Lietuvių kalba - Lithuanian","lv":"lv - Latviešu valoda - Latvian","mg":"mg - Malagasy - Malagasy","mi":"mi - Māori - Maori","mk":"mk - Македонски јазик - Macedonian","ml":"ml - മലയാളം - Malayalam","mn":"mn - монгол хэл ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ - Mongolian","mr":"mr - मराठी - Marathi","ms":"ms - Bahasa Melayu - Malay","mt":"mt - Malti - Maltese","my":"my - ဗမာစာ - Myanmar (Burmese)","ne":"ne - नेपाली - Nepali","nl":"nl - Nederlands - Dutch","no":"no - Norsk - Norwegian","ny":"ny - Chinyanja - Chichewa","or":"or - ଓଡ଼ିଆ - Odia (Oriya)","pa":"pa - ਪੰਜਾਬੀ - Punjabi","pl":"pl - Język polski - Polish","ps":"ps - پښتو - Pashto","pt":"pt - Português - Portuguese","ro":"ro - Limba română - Romanian","ru":"ru - Русский язык - Russian","rw":"rw - Kinyarwanda - Kinyarwanda","sd":"sd - سنڌي - Sindhi","si":"si - සිංහල - Sinhala","sk":"sk - Slovenský jazyk - Slovak","sl":"sl - Slovenski jezik - Slovenian","sm":"sm - Gagana Samoa - Samoan","sn":"sn - chiShona - Shona","so":"so - Af-Soomaali - Somali","sq":"sq - Gjuha shqipe - Albanian","sr":"sr - Српски језик (Srpski jezik) - Serbian","st":"st - SeSotho - Sesotho","su":"su - Bahasa Sudan - Sundanese","sv":"sv - Svenska - Swedish","sw":"sw - Kiswahili - Swahili","ta":"ta - தமிழ் - Tamil","te":"te - తెలుగు - Telugu","tg":"tg - Забони тоҷикӣ - Tajik","th":"th - ภาษาไทย - Thai","tk":"tk - Türkmen dili - Turkmen","tl":"tl - Filipino - Filipino","tr":"tr - Türk dili - Turkish","tt":"tt - Татар теле, татарча - Tatar","ug":"ug - ئۇيغۇرچە, Уйғурчә - Uyghur","uk":"uk - Українська мова - Ukrainian","ur":"ur - اردو, لشکری - Urdu","uz":"uz - Oʻzbek tili, Ўзбек тили - Uzbek","vi":"vi - Tiếng Việt - Vietnamese","xh":"xh - isiXhosa - Xhosa","yi":"yi - אידיש - Yiddish","yo":"yo - (Èdèe) Yorùbá - Yoruba","zh":"zh - 中文 - Chinese","zu":"zu - isiZulu - Zulu"}'
        );
      },
    },
    n = {};
  function r(a) {
    var t = n[a];
    if (void 0 !== t) return t.exports;
    var o = (n[a] = { id: a, exports: {} });
    return e[a](o, o.exports, r), o.exports;
  }
  (r.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return r.d(n, { a: n }), n;
  }),
    (r.d = (e, n) => {
      for (var a in n)
        r.o(n, a) &&
          !r.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
    }),
    (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = r(3379),
        n = r.n(e),
        a = r(7722),
        t = { insert: "head", singleton: !1 };
      n()(a.Z, t);
      a.Z.locals;
      const o = navigator.language;
      o.split("-")[0];
      class i {
        static voices = [];
        static groups = [];
        static log(e) {
          const { level: n, msg: r } = this.getMessages(e);
          this.echo(n, r), this.sendGTag(n, r);
        }
        static echo(e, n) {
          0;
        }
        static getMessages(e) {
          const n = { level: "warn", msg: "" };
          if (e.length) {
            const [r, ...a] = e;
            return (
              (n.level = console[r] ? r : "log"),
              (n.msg = console[r]
                ? a.length
                  ? 1 === a.length
                    ? a[0]
                    : a
                  : r
                : 1 === e.length
                ? r
                : e),
              n
            );
          }
          return n;
        }
        static group(e) {
          const [n, r, a] = e;
          this.groups.includes(n)
            ? a || this.echo(`log group ${n} already exists!`)
            : (this.groups.push(n),
              this.echo(r ? "groupCollapsed" : "group", n));
        }
        static groupEnd(e) {
          e
            ? (this.groups.map((e) => this.echo("groupEnd")),
              (this.groups = []))
            : (this.groups.pop(), this.echo("groupEnd"));
        }
        static sendGTag(e, n) {
          const r = `${i.getVoice()?.voiceURI}, ${l.translate_lang}/${o}`;
          ["error", "warn"].includes(e) &&
            "function" == typeof gtag &&
            gtag("event", "error" === e ? "error" : "warn", {
              event_category: `${n}`,
              event_label: `${r}`,
              value: "error" === e ? 1 : 0,
              non_interaction: !0,
            });
        }
        static getVoice(e) {
          return "undefined" != typeof window
            ? i.voices?.length
              ? i.voices[void 0 !== e ? e : l.speech_voice]
              : (i.setVoices(), i.voices?.[l.speech_voice])
            : { voiceURI: "N/A" };
        }
        static setVoices() {
          return (
            "undefined" != typeof window &&
              (i.voices?.length ||
                (i.voices = window?.speechSynthesis?.getVoices())),
            i
          );
        }
      }
      const s = (...e) => i.log(e);
      (s.group =
        (...e) =>
        (e) =>
          e),
        (s.groupEnd = (e) => (e) => e),
        i.setVoices();
      const l = {
        enable: 1,
        speech_voice: 0,
        translate_lang: o.split("-")[0],
        rate: 1.2,
        max_rate: 1.4,
        volume: 1,
        pitch: 1,
        speaking_control: "voice",
        custom_translate_lang: { name: "", code: "" },
        ui_lang: o.split("-")[0],
        voices_map: {},
      };
      r(7692);
      ((e) => {
        const n = r(7692),
          a = r(4437),
          t = speechSynthesis,
          o = {},
          i = [],
          s = {
            on: chrome.i18n.getMessage("text_enabled"),
            off: chrome.i18n.getMessage("text_disabled"),
            i18nLangField: "text_enabled",
            updateLang(e, n) {
              (s.on = e), (s.off = n), s.setStatus(o.enable);
            },
            setStatus(e) {
              var n;
              (c('label[for="enable"]').textContent = e ? s.on : s.off),
                (n = { text: e ? "On" : "Off" })?.text &&
                  chrome.action.setBadgeText(
                    ((e) => (
                      ["On", "Off"].includes(e.text) &&
                        chrome.action.setBadgeBackgroundColor({
                          color: [0, 0, 0, +!("On" === e.text)],
                        }),
                      e
                    ))(n)
                  );
            },
          },
          c = (e, n) => (n instanceof Element ? n : document).querySelector(e);
        (async (e) =>
          await new Promise((e, n) => {
            chrome.storage.sync.get("options", (r) => {
              chrome.runtime.lastError
                ? n(chrome.runtime.lastError)
                : (Object.assign(l, r?.options), e(l));
            });
          }))().then((e) => {
          Object.assign(o, e),
            setTimeout(async (e) => {
              Object.assign(i, t.getVoices()),
                d(),
                g(),
                h(),
                await p(),
                u(),
                b(),
                chrome.runtime.sendMessage(
                  { question: "now_playing" },
                  function (e) {
                    "now_playing" === e.answer && f(e?.msg);
                  }
                );
            });
        });
        const d = (e) => {
            const n = [];
            i.forEach((e, r) => {
              const a = document.createElement("option");
              (a.value = r.toString()),
                (a.textContent = `(${e.lang}) ${e.name}`),
                e.default && (a.dataset.default = "true"),
                n.push(a);
            }),
              n
                .sort((e, n) =>
                  e.textContent.slice(1, 3) > n.textContent.slice(1, 3)
                    ? 1
                    : e.textContent.slice(1, 3) < n.textContent.slice(1, 3)
                    ? -1
                    : 0
                )
                .forEach((e) => c("#speech_voice").append(e));
          },
          g = (e) => {
            const r = (e, n, r) => {
              const a = document.createElement("option");
              return (
                (a.value = e),
                (a.textContent = n.toString()),
                r && (a.id = r),
                a
              );
            };
            if (e)
              c("select#translate_lang option#custom")
                ? ((c("select#translate_lang option#custom").value = e.code),
                  (c("select#translate_lang option#custom").textContent =
                    e.name))
                : c("select#translate_lang").append(
                    r(e.code, `${e.code} - ${e.name}`, "custom")
                  ),
                (c("select#translate_lang").value = o?.translate_lang);
            else
              for (const [e, a] of Object.entries(n))
                c("select#translate_lang").append(r(e, a));
          },
          u = (e) => {
            for (let [e, n] of Object.entries(o)) {
              const r = c(`#${e}`);
              if (r) {
                if ("enable" === e) (r.checked = !!n), s.setStatus(n);
                else if (null === n && "speech_voice" === e) {
                  const e = chrome.i18n.getUILanguage();
                  r.querySelectorAll("option").forEach((n) => {
                    n.textContent.includes(`(${e}`) &&
                      (null === o.speech_voice || n?.dataset?.default) &&
                      ((o.speech_voice = n.value),
                      (r.value = n.value),
                      chrome.storage.sync.set({ options: o }));
                  });
                } else
                  "speaking_control" === e
                    ? (r.querySelector(`[name=${e}][value=${n}]`).checked = !0)
                    : (r.value = n);
                "range" === r.type && v(e, n), r.addEventListener("input", x);
              } else
                "custom_translate_lang" === e &&
                  n?.code?.length &&
                  n?.name?.length &&
                  ((c("#custom_lang_code").value = n?.code),
                  (c("#custom_lang_name").value = n?.name),
                  g(n));
            }
          },
          p = async () => {
            const e = document.createElement("label");
            (e.className = "ui_lang"),
              (e.dataset.langField = "text_ui_lang"),
              (e.title = a.text_ui_lang.message),
              (e.style =
                '--bg: url("./assets/media/yandex-translate_wb.png");'),
              c(".header").appendChild(e);
            const r = document.createElement("select");
            e.appendChild(r);
            for (const [e, a] of Object.entries(n)) {
              const n = document.createElement("option");
              (n.textContent = a),
                (n.value = e),
                r.appendChild(n),
                e === o.ui_lang && ((r.value = e), m(e));
            }
            r.addEventListener("change", ({ target: { value: e } }) => {
              (o.ui_lang = e), chrome.storage.sync.set({ options: o }), m(e);
            });
          },
          m = (e) => {
            console.log(e);
            fetch(`./_locales/${e}/messages.json`)
              .then((e) => e.json())
              .then((e) => {
                s.updateLang(e.text_enabled.message, e.text_disabled.message),
                  document
                    .querySelectorAll("[data-lang-field]")
                    .forEach((n) => {
                      let r = e[n.dataset.langField]?.message;
                      r &&
                        ("text_ui_lang" === n.dataset.langField
                          ? (n.title = r)
                          : n.dataset.langField === s.i18nLangField
                          ? s.setStatus(o.enable)
                          : (n.innerHTML =
                              r + (c("labelnum", n)?.outerHTML || "")));
                    });
              });
          },
          h = () => {
            document.querySelectorAll("[data-lang-field]").forEach((e) => {
              let n = chrome.i18n.getMessage(e.dataset.langField);
              n &&
                (e.dataset.langField === s.i18nLangField
                  ? s.setStatus(o.enable)
                  : (e.innerHTML = n));
            });
          },
          b = (e) => {
            const n = document.createElement("div");
            (n.className = "social_media"), c(".header .logo").append(n);
          };
        document.body.style.direction = chrome.i18n.getMessage("@@bidi_dir");
        const f = (e) => {
            (e ||= ""),
              c(".now_playing").classList.toggle("opacity-show", e),
              e && (c(".now_playing span").innerHTML = e),
              (c("#x_close_thread").style.display = "none");
          },
          v = (e, n) => {
            (n = `${Math.round(100 * n)}%`),
              ((
                c(`label[for=${e}] labelnum`) ||
                c(`label[for=${e}]`).appendChild(
                  document.createElement("labelnum")
                )
              ).textContent = n);
          };
        let _ = (e) => {
          c("#add_custom_lang").classList.toggle("d-none"),
            c("#range_items").classList.toggle("d-none"),
            c("#speaking_control").classList.toggle("d-none");
        };
        wrapper.onchange = ({ target: { value: e } }) => {};
        const x = ({ target: e }) => {
          let n = e.value;
          "enable" === e.id
            ? ((n = e.checked ? 1 : 0), s.setStatus(n))
            : "range" === e.type &&
              (["rate", "max_rate"].includes(e.id) &&
                ("rate" === e.id
                  ? n > c("#max_rate").value &&
                    ((c("#max_rate").value = n),
                    v("max_rate", n),
                    (o.max_rate = n))
                  : n < c("#rate").value &&
                    ((c("#rate").value = n), v("rate", n), (o.rate = n))),
              v(e.id, n)),
            "speaking_control" === e.name ? (o[e.name] = n) : (o[e.id] = n),
            chrome.storage.sync.set({ options: o });
        };
        c("#link_custom_language").addEventListener("click", (e) => {
          e.preventDefault(), _();
        }),
          c("#btn_custom_discard").addEventListener("click", (e) => {
            e.preventDefault(),
              c("#custom_lang_code").classList.remove("danger"),
              c("#custom_lang_name").classList.remove("danger"),
              _();
          }),
          c("#btn_custom_save").addEventListener("click", (e) => {
            const n = c("#custom_lang_code"),
              r = c("#custom_lang_name");
            n?.value?.length && r?.value?.length
              ? ((o.custom_translate_lang.code = n.value),
                (o.custom_translate_lang.name = r.value),
                (o.translate_lang = n.value),
                g({ code: n.value, name: r.value }),
                chrome.storage.sync.set({ options: o }),
                _())
              : (n.classList.toggle("danger", !n?.value?.length),
                r.classList.toggle("danger", !r?.value?.length));
          });
      })();
    })();
})();
