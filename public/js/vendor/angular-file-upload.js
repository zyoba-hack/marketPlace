/*! 2.0.5 */ ! function () {
  function a(a, b) {
    window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
  }

  function b(a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
      f(function () {
        for (var b = [], g = 0; g < a.length; g++) b.push(a.item(g));
        c && (d.fileModel = b, c && c.$setViewValue(null != b && 0 == b.length ? "" : b)), f(function () {
          d.change({
            $files: b,
            $event: e
          })
        })
      })
    }
    a.multiple() && (b.attr("multiple", "true"), c.multiple = "true");
    var h = a.accept();
    if (h && (b.attr("accept", h), c.accept = h), "input" !== b[0].tagName.toLowerCase() || "file" !== (b.attr("type") && b.attr("type").toLowerCase())) {
      var i = angular.element('<input type="file">');
      c.multiple && i.attr("multiple", c.multiple), c.accept && i.attr("accept", c.accept), i.css("width", "1px").css("height", "1px").css("opacity", 0).css("position", "absolute").css("filter", "alpha(opacity=0)").css("padding", 0).css("margin", 0).css("overflow", "hidden").attr("tabindex", "-1").attr("ng-file-generated-elem", !0), b.append(i), b.__afu_fileClickDelegate__ = function () {
        i[0].click()
      }, b.bind("click", b.__afu_fileClickDelegate__), b.css("overflow", "hidden"), b = i
    }
    0 != a.resetOnClick() && b.bind("click", function (e) {
      b[0].value && g([], c, d, a, e), b[0].value = null
    }), d && a.$parent.$watch(c.ngModel, function (a) {
      null == a && (b[0].value = null)
    }), "" != c.ngFileSelect && (a.change = a.select), b.bind("change", function (b) {
      var e;
      e = b.__files_ || b.target.files, g(e, c, d, a, b)
    })
  }

  function c(a, b, c, g, h, i, j) {
    function k(a, b, c) {
      var d = !0;
      if (r) {
        var e = c.dataTransfer.items;
        if (null != e)
          for (var f = 0; f < e.length && d; f++) d = d && ("file" == e[f].kind || "" == e[f].kind) && (null != e[f].type.match(r) || null != e[f].name && null != e[f].name.match(r))
      }
      var g = a.dragOverClass({
        $event: c
      });
      return g && (g.delay && (p = g.delay), g.accept && (g = d ? g.accept : g.reject)), g || b.dragOverClass || "dragover"
    }

    function l(a, b, c, d) {
      function f(a) {
        !r || a.type.match(r) || null != a.name && a.name.match(r) ? h.push(a) : k.push(a)
      }

      function g(a, b, c) {
        if (null != b)
          if (b.isDirectory) {
            f({
              name: b.name,
              type: "directory",
              path: (c ? c : "") + b.name
            });
            var d = b.createReader();
            s++, d.readEntries(function (d) {
              try {
                for (var e = 0; e < d.length; e++) g(a, d[e], (c ? c : "") + b.name + "/")
              } finally {
                s--
              }
            })
          } else s++, b.file(function (a) {
            s--, a.path = (c ? c : "") + a.name, f(a)
          })
      }
      var h = [],
        k = [],
        l = a.dataTransfer.items;
      if (l && l.length > 0 && "file" != j.protocol())
        for (var m = 0; m < l.length; m++) {
          if (l[m].webkitGetAsEntry && l[m].webkitGetAsEntry() && l[m].webkitGetAsEntry().isDirectory) {
            var n = l[m].webkitGetAsEntry();
            if (n.isDirectory && !c) continue;
            null != n && (e(n.name) ? g(h, n) : l[m].webkitGetAsEntry().isDirectory || f(l[m].getAsFile()))
          } else {
            var o = l[m].getAsFile();
            null != o && f(o)
          }
          if (!d && h.length > 0) break
        } else {
          var p = a.dataTransfer.files;
          if (null != p)
            for (var m = 0; m < p.length && (f(p.item(m)), d || !(h.length > 0)); m++);
        }
      var q = 0;
      ! function t(a) {
        i(function () {
          if (s) 10 * q++ < 2e4 && t(10);
          else {
            if (!d && h.length > 1) {
              for (var a = 0;
                "directory" == h[a].type;) a++;
              h = [h[a]]
            }
            b(h, k)
          }
        }, a || 0)
      }();
      var s = 0
    }
    var m = d();
    if (c.dropAvailable && i(function () {
        a.dropAvailable = m
      }), !m) return 0 != a.hideOnDropNotAvailable() && b.css("display", "none"), void 0;
    var n = null,
      o = a.stopPropagation(),
      p = 1,
      q = a.accept() || c.accept || c.ngAccept,
      r = q ? new RegExp(f(q)) : null;
    b[0].addEventListener("dragover", function (d) {
      d.preventDefault(), o && d.stopPropagation(), i.cancel(n), a.actualDragOverClass || (a.actualDragOverClass = k(a, c, d)), b.addClass(a.actualDragOverClass)
    }, !1), b[0].addEventListener("dragenter", function (a) {
      a.preventDefault(), o && a.stopPropagation()
    }, !1), b[0].addEventListener("dragleave", function () {
      n = i(function () {
        b.removeClass(a.actualDragOverClass), a.actualDragOverClass = null
      }, p || 1)
    }, !1), "" != c.ngFileDrop && (a.change = a.drop), b[0].addEventListener("drop", function (d) {
      d.preventDefault(), o && d.stopPropagation(), b.removeClass(a.actualDragOverClass), a.actualDragOverClass = null, l(d, function (b, e) {
        g && (a.fileModel = b, g && g.$setViewValue(null != b && 0 == b.length ? "" : b)), c.ngFileRejectedModel && (a.fileRejectedModel = e), i(function () {
          a.change({
            $files: b,
            $rejectedFiles: e,
            $event: d
          })
        })
      }, 0 != a.allowDir(), c.multiple || a.multiple() || "true" == c.ngMultiple)
    }, !1)
  }

  function d() {
    var a = document.createElement("div");
    return "draggable" in a && "ondrop" in a
  }

  function e(a) {
    return /^[\000-\177]*$/.test(a)
  }

  function f(a) {
    if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) return a.substring(1, a.length - 1);
    var b = a.split(","),
      c = "";
    if (b.length > 1)
      for (var d = 0; d < b.length; d++) c += "(" + f(b[d]) + ")", d < b.length - 1 && (c += "|");
    else c = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", c = c.replace(/\\\*/g, ".*").replace(/\\\?/g, ".");
    return c
  }
  window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim && a("setRequestHeader", function (a) {
    return function (b, c) {
      if ("__setXHR_" === b) {
        var d = c(this);
        d instanceof Function && d(this)
      } else a.apply(this, arguments)
    }
  });
  var g = angular.module("angularFileUpload", []);
  g.version = "2.0.5", g.service("$upload", ["$http", "$q", "$timeout", function (a, b, c) {
    function d(d) {
      d.method = d.method || "POST", d.headers = d.headers || {}, d.transformRequest = d.transformRequest || function (b, c) {
        return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c)
      };
      var e = b.defer(),
        f = e.promise;
      return d.headers.__setXHR_ = function () {
        return function (a) {
          a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
            a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
              f.progress_fn(a)
            })
          }, !1), a.upload.addEventListener("load", function (a) {
            a.lengthComputable && (a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
              f.progress_fn(a)
            }))
          }, !1))
        }
      }, a(d).then(function (a) {
        e.resolve(a)
      }, function (a) {
        e.reject(a)
      }, function (a) {
        e.notify(a)
      }), f.success = function (a) {
        return f.then(function (b) {
          a(b.data, b.status, b.headers, d)
        }), f
      }, f.error = function (a) {
        return f.then(null, function (b) {
          a(b.data, b.status, b.headers, d)
        }), f
      }, f.progress = function (a) {
        return f.progress_fn = a, f.then(null, null, function (b) {
          a(b)
        }), f
      }, f.abort = function () {
        return d.__XHR && c(function () {
          d.__XHR.abort()
        }), f
      }, f.xhr = function (a) {
        return d.xhrFn = function (b) {
          return function () {
            b && b.apply(f, arguments), a.apply(f, arguments)
          }
        }(d.xhrFn), f
      }, f
    }
    this.upload = function (b) {
      b.headers = b.headers || {}, b.headers["Content-Type"] = void 0, b.transformRequest = b.transformRequest || a.defaults.transformRequest;
      var c = new FormData,
        e = b.transformRequest,
        f = b.data;
      return b.transformRequest = function (a, c) {
        if (f)
          if (b.formDataAppender)
            for (var d in f) {
              var g = f[d];
              b.formDataAppender(a, d, g)
            } else
              for (var d in f) {
                var g = f[d];
                if ("function" == typeof e) g = e(g, c);
                else
                  for (var h = 0; h < e.length; h++) {
                    var i = e[h];
                    "function" == typeof i && (g = i(g, c))
                  }
                void 0 != g && a.append(d, g)
              }
          if (null != b.file) {
            var j = b.fileFormDataName || "file";
            if ("[object Array]" === Object.prototype.toString.call(b.file))
              for (var k = "[object String]" === Object.prototype.toString.call(j), h = 0; h < b.file.length; h++) a.append(k ? j : j[h], b.file[h], b.fileName && b.fileName[h] || b.file[h].name);
            else a.append(j, b.file, b.fileName || b.file.name)
          }
        return a
      }, b.data = c, d(b)
    }, this.http = function (a) {
      return d(a)
    }
  }]), g.directive("ngFileSelect", ["$parse", "$timeout", function (a, c) {
    return {
      restrict: "AEC",
      require: "?ngModel",
      scope: {
        fileModel: "=ngModel",
        change: "&ngFileChange",
        select: "&ngFileSelect",
        resetOnClick: "&resetOnClick",
        multiple: "&ngMultiple",
        accept: "&ngAccept"
      },
      link: function (d, e, f, g) {
        b(d, e, f, g, a, c)
      }
    }
  }]), g.directive("ngFileDrop", ["$parse", "$timeout", "$location", function (a, b, d) {
    return {
      restrict: "AEC",
      require: "?ngModel",
      scope: {
        fileModel: "=ngModel",
        fileRejectedModel: "=ngFileRejectedModel",
        change: "&ngFileChange",
        drop: "&ngFileDrop",
        allowDir: "&allowDir",
        dragOverClass: "&dragOverClass",
        dropAvailable: "=dropAvailable",
        stopPropagation: "&stopPropagation",
        hideOnDropNotAvailable: "&hideOnDropNotAvailable",
        multiple: "&ngMultiple",
        accept: "&ngAccept"
      },
      link: function (e, f, g, h) {
        c(e, f, g, h, a, b, d)
      }
    }
  }]), g.directive("ngNoFileDrop", function () {
    return function (a, b) {
      d() && b.css("display", "none")
    }
  }), g.directive("ngFileDropAvailable", ["$parse", "$timeout", function (a, b) {
    return function (c, e, f) {
      if (d()) {
        var g = a(f.ngFileDropAvailable);
        b(function () {
          g(c)
        })
      }
    }
  }])
}(),
function () {
  function a(a, b) {
    window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
  }

  function b(a, b, c) {
    try {
      Object.defineProperty(a, b, {
        get: c
      })
    } catch (d) {}
  }
  var c = function () {
    try {
      var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      if (a) return !0
    } catch (b) {
      if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"]) return !0
    }
    return !1
  };
  if (window.XMLHttpRequest && !window.FormData || window.FileAPI && FileAPI.forceLoad) {
    var d = function (a) {
      if (!a.__listeners) {
        a.upload || (a.upload = {}), a.__listeners = [];
        var b = a.upload.addEventListener;
        a.upload.addEventListener = function (c, d) {
          a.__listeners[c] = d, b && b.apply(this, arguments)
        }
      }
    };
    a("open", function (a) {
      return function (b, c, e) {
        d(this), this.__url = c;
        try {
          a.apply(this, [b, c, e])
        } catch (f) {
          f.message.indexOf("Access is denied") > -1 && a.apply(this, [b, "_fix_for_ie_crossdomain__", e])
        }
      }
    }), a("getResponseHeader", function (a) {
      return function (b) {
        return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(b) : null == a ? null : a.apply(this, [b])
      }
    }), a("getAllResponseHeaders", function (a) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == a ? null : a.apply(this)
      }
    }), a("abort", function (a) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this)
      }
    }), a("setRequestHeader", function (a) {
      return function (b, c) {
        if ("__setXHR_" === b) {
          d(this);
          var e = c(this);
          e instanceof Function && e(this)
        } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[b] = c, a.apply(this, arguments)
      }
    }), a("send", function (a) {
      return function () {
        var d = this;
        if (arguments[0] && arguments[0].__isFileAPIShim) {
          var e = arguments[0],
            f = {
              url: d.__url,
              jsonp: !1,
              cache: !0,
              complete: function (a, c) {
                d.__completed = !0, !a && d.__listeners.load && d.__listeners.load({
                  type: "load",
                  loaded: d.__loaded,
                  total: d.__total,
                  target: d,
                  lengthComputable: !0
                }), !a && d.__listeners.loadend && d.__listeners.loadend({
                  type: "loadend",
                  loaded: d.__loaded,
                  total: d.__total,
                  target: d,
                  lengthComputable: !0
                }), "abort" === a && d.__listeners.abort && d.__listeners.abort({
                  type: "abort",
                  loaded: d.__loaded,
                  total: d.__total,
                  target: d,
                  lengthComputable: !0
                }), void 0 !== c.status && b(d, "status", function () {
                  return 0 == c.status && a && "abort" !== a ? 500 : c.status
                }), void 0 !== c.statusText && b(d, "statusText", function () {
                  return c.statusText
                }), b(d, "readyState", function () {
                  return 4
                }), void 0 !== c.response && b(d, "response", function () {
                  return c.response
                });
                var e = c.responseText || (a && 0 == c.status && "abort" !== a ? a : void 0);
                b(d, "responseText", function () {
                  return e
                }), b(d, "response", function () {
                  return e
                }), a && b(d, "err", function () {
                  return a
                }), d.__fileApiXHR = c, d.onreadystatechange && d.onreadystatechange(), d.onload && d.onload()
              },
              fileprogress: function (a) {
                if (a.target = d, d.__listeners.progress && d.__listeners.progress(a), d.__total = a.total, d.__loaded = a.loaded, a.total === a.loaded) {
                  var b = this;
                  setTimeout(function () {
                    d.__completed || (d.getAllResponseHeaders = function () {}, b.complete(null, {
                      status: 204,
                      statusText: "No Content"
                    }))
                  }, 1e4)
                }
              },
              headers: d.__requestHeaders
            };
          f.data = {}, f.files = {};
          for (var g = 0; g < e.data.length; g++) {
            var h = e.data[g];
            null != h.val && null != h.val.name && null != h.val.size && null != h.val.type ? f.files[h.key] = h.val : f.data[h.key] = h.val
          }
          setTimeout(function () {
            if (!c()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
            d.__fileApiXHR = FileAPI.upload(f)
          }, 1)
        } else a.apply(d, arguments)
      }
    }), window.XMLHttpRequest.__isFileAPIShim = !0;
    var e = function (a) {
        if (!c()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
        var b = angular.element(a);
        if (!b.attr("disabled") && !b.hasClass("js-fileapi-wrapper") && (null != b.attr("ng-file-select") || null != b.attr("data-ng-file-select") || b.attr("ng-file-generated-elem") && (null != b.parent().attr("ng-file-select") || null != b.parent().attr("data-ng-file-select"))))
          if (FileAPI.wrapInsideDiv) {
            var d = document.createElement("div");
            d.innerHTML = '<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>', d = d.firstChild;
            var e = a.parentNode;
            e.insertBefore(d, a), e.removeChild(a), d.appendChild(a)
          } else b.addClass("js-fileapi-wrapper"), b.attr("ng-file-generated-elem") && (("" === b.parent().css("position") || "static" === b.parent().css("position")) && b.parent().css("position", "relative"), b.css("top", 0).css("bottom", 0).css("left", 0).css("right", 0).css("width", "100%").css("height", "100%").css("padding", 0).css("margin", 0), b.parent().unbind("click", b.parent().__afu_fileClickDelegate__))
      },
      f = function (a) {
        return function (b) {
          for (var c = FileAPI.getFiles(b), d = 0; d < c.length; d++) void 0 === c[d].size && (c[d].size = 0), void 0 === c[d].name && (c[d].name = "file"), void 0 === c[d].type && (c[d].type = "undefined");
          b.target || (b.target = {}), b.target.files = c, b.target.files != c && (b.__files_ = c), (b.__files_ || b.target.files).item = function (a) {
            return (b.__files_ || b.target.files)[a] || null
          }, a && a.apply(this, [b])
        }
      },
      g = function (a, b) {
        return ("change" === b.toLowerCase() || "onchange" === b.toLowerCase()) && "file" == a.getAttribute("type")
      };
    HTMLInputElement.prototype.addEventListener && (HTMLInputElement.prototype.addEventListener = function (a) {
        return function (b, c, d, h) {
          g(this, b) ? (e(this), a.apply(this, [b, f(c), d, h])) : a.apply(this, [b, c, d, h])
        }
      }(HTMLInputElement.prototype.addEventListener)), HTMLInputElement.prototype.attachEvent && (HTMLInputElement.prototype.attachEvent = function (a) {
        return function (b, c) {
          g(this, b) ? (e(this), window.jQuery ? angular.element(this).bind("change", f(null)) : a.apply(this, [b, f(c)])) : a.apply(this, [b, c])
        }
      }(HTMLInputElement.prototype.attachEvent)), window.FormData = FormData = function () {
        return {
          append: function (a, b, c) {
            this.data.push({
              key: a,
              val: b,
              name: c
            })
          },
          data: [],
          __isFileAPIShim: !0
        }
      },
      function () {
        if (window.FileAPI || (window.FileAPI = {}), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
          var a, b, d, e, f, g = document.createElement("script"),
            h = document.getElementsByTagName("script");
          if (window.FileAPI.jsUrl) a = window.FileAPI.jsUrl;
          else if (window.FileAPI.jsPath) b = window.FileAPI.jsPath;
          else
            for (d = 0; d < h.length; d++)
              if (f = h[d].src, e = f.search(/\/angular\-file\-upload[\-a-zA-z0-9\.]*\.js/), e > -1) {
                b = f.substring(0, e + 1);
                break
              }
          null == FileAPI.staticPath && (FileAPI.staticPath = b), g.setAttribute("src", a || b + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(g), FileAPI.hasFlash = c()
        }
      }(), FileAPI.disableFileInput = function (a, b) {
        b ? a.removeClass("js-fileapi-wrapper") : a.addClass("js-fileapi-wrapper")
      }
  }
  window.FileReader || (window.FileReader = function () {
    var a = this,
      b = !1;
    this.listeners = {}, this.addEventListener = function (b, c) {
      a.listeners[b] = a.listeners[b] || [], a.listeners[b].push(c)
    }, this.removeEventListener = function (b, c) {
      a.listeners[b] && a.listeners[b].splice(a.listeners[b].indexOf(c), 1)
    }, this.dispatchEvent = function (b) {
      var c = a.listeners[b.type];
      if (c)
        for (var d = 0; d < c.length; d++) c[d].call(a, b)
    }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
    var c = function (b, c) {
        var d = {
          type: b,
          target: a,
          loaded: c.loaded,
          total: c.total,
          error: c.error
        };
        return null != c.result && (d.target.result = c.result), d
      },
      d = function (d) {
        if (b || (b = !0, a.onloadstart && this.onloadstart(c("loadstart", d))), "load" === d.type) {
          a.onloadend && a.onloadend(c("loadend", d));
          var e = c("load", d);
          a.onload && a.onload(e), a.dispatchEvent(e)
        } else if ("progress" === d.type) {
          var e = c("progress", d);
          a.onprogress && a.onprogress(e), a.dispatchEvent(e)
        } else {
          var e = c("error", d);
          a.onerror && a.onerror(e), a.dispatchEvent(e)
        }
      };
    this.readAsArrayBuffer = function (a) {
      FileAPI.readAsBinaryString(a, d)
    }, this.readAsBinaryString = function (a) {
      FileAPI.readAsBinaryString(a, d)
    }, this.readAsDataURL = function (a) {
      FileAPI.readAsDataURL(a, d)
    }, this.readAsText = function (a) {
      FileAPI.readAsText(a, d)
    }
  })
}();