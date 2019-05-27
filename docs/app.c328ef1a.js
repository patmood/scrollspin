// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.js":[function(require,module,exports) {
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var frames = ['frames/frame_000.gif', 'frames/frame_001.gif', 'frames/frame_002.gif', 'frames/frame_003.gif', 'frames/frame_004.gif', 'frames/frame_005.gif', 'frames/frame_006.gif', 'frames/frame_007.gif', 'frames/frame_008.gif', 'frames/frame_009.gif', 'frames/frame_010.gif', 'frames/frame_011.gif', 'frames/frame_012.gif', 'frames/frame_013.gif', 'frames/frame_014.gif', 'frames/frame_015.gif', 'frames/frame_016.gif', 'frames/frame_017.gif', 'frames/frame_018.gif', 'frames/frame_019.gif', 'frames/frame_020.gif', 'frames/frame_021.gif', 'frames/frame_022.gif', 'frames/frame_023.gif', 'frames/frame_024.gif', 'frames/frame_025.gif', 'frames/frame_026.gif', 'frames/frame_027.gif', 'frames/frame_028.gif', 'frames/frame_029.gif', 'frames/frame_030.gif', 'frames/frame_031.gif', 'frames/frame_032.gif', 'frames/frame_033.gif', 'frames/frame_034.gif', 'frames/frame_035.gif', 'frames/frame_036.gif', 'frames/frame_037.gif', 'frames/frame_038.gif', 'frames/frame_039.gif', 'frames/frame_040.gif', 'frames/frame_041.gif', 'frames/frame_042.gif', 'frames/frame_043.gif', 'frames/frame_044.gif', 'frames/frame_045.gif', 'frames/frame_046.gif', 'frames/frame_047.gif', 'frames/frame_048.gif', 'frames/frame_049.gif', 'frames/frame_050.gif', 'frames/frame_051.gif', 'frames/frame_052.gif', 'frames/frame_053.gif', 'frames/frame_054.gif', 'frames/frame_055.gif', 'frames/frame_056.gif', 'frames/frame_057.gif', 'frames/frame_058.gif', 'frames/frame_059.gif', 'frames/frame_060.gif', 'frames/frame_061.gif', 'frames/frame_062.gif', 'frames/frame_063.gif', 'frames/frame_064.gif', 'frames/frame_065.gif', 'frames/frame_066.gif', 'frames/frame_067.gif', 'frames/frame_068.gif', 'frames/frame_069.gif', 'frames/frame_070.gif', 'frames/frame_071.gif', 'frames/frame_072.gif', 'frames/frame_073.gif', 'frames/frame_074.gif', 'frames/frame_075.gif', 'frames/frame_076.gif', 'frames/frame_077.gif', 'frames/frame_078.gif', 'frames/frame_079.gif', 'frames/frame_080.gif', 'frames/frame_081.gif', 'frames/frame_082.gif', 'frames/frame_083.gif', 'frames/frame_084.gif', 'frames/frame_085.gif', 'frames/frame_086.gif', 'frames/frame_087.gif', 'frames/frame_088.gif', 'frames/frame_089.gif', 'frames/frame_090.gif', 'frames/frame_091.gif', 'frames/frame_092.gif', 'frames/frame_093.gif', 'frames/frame_094.gif', 'frames/frame_095.gif', 'frames/frame_096.gif', 'frames/frame_097.gif', 'frames/frame_098.gif', 'frames/frame_099.gif', 'frames/frame_100.gif', 'frames/frame_101.gif', 'frames/frame_102.gif', 'frames/frame_103.gif', 'frames/frame_104.gif', 'frames/frame_105.gif', 'frames/frame_106.gif', 'frames/frame_107.gif', 'frames/frame_108.gif', 'frames/frame_109.gif', 'frames/frame_110.gif', 'frames/frame_111.gif', 'frames/frame_112.gif', 'frames/frame_113.gif', 'frames/frame_114.gif', 'frames/frame_115.gif', 'frames/frame_116.gif', 'frames/frame_117.gif', 'frames/frame_118.gif', 'frames/frame_119.gif', 'frames/frame_120.gif', 'frames/frame_121.gif', 'frames/frame_122.gif', 'frames/frame_123.gif', 'frames/frame_124.gif', 'frames/frame_125.gif', 'frames/frame_126.gif', 'frames/frame_127.gif', 'frames/frame_128.gif', 'frames/frame_129.gif', 'frames/frame_130.gif', 'frames/frame_131.gif', 'frames/frame_132.gif', 'frames/frame_133.gif', 'frames/frame_134.gif', 'frames/frame_135.gif', 'frames/frame_136.gif', 'frames/frame_137.gif', 'frames/frame_138.gif', 'frames/frame_139.gif', 'frames/frame_140.gif', 'frames/frame_141.gif', 'frames/frame_142.gif', 'frames/frame_143.gif', 'frames/frame_144.gif', 'frames/frame_145.gif', 'frames/frame_146.gif', 'frames/frame_147.gif', 'frames/frame_148.gif', 'frames/frame_149.gif', 'frames/frame_150.gif', 'frames/frame_151.gif', 'frames/frame_152.gif', 'frames/frame_153.gif', 'frames/frame_154.gif', 'frames/frame_155.gif', 'frames/frame_156.gif', 'frames/frame_157.gif', 'frames/frame_158.gif', 'frames/frame_159.gif', 'frames/frame_160.gif', 'frames/frame_161.gif', 'frames/frame_162.gif', 'frames/frame_163.gif', 'frames/frame_164.gif', 'frames/frame_165.gif', 'frames/frame_166.gif', 'frames/frame_167.gif', 'frames/frame_168.gif', 'frames/frame_169.gif', 'frames/frame_170.gif', 'frames/frame_171.gif', 'frames/frame_172.gif', 'frames/frame_173.gif', 'frames/frame_174.gif', 'frames/frame_175.gif', 'frames/frame_176.gif', 'frames/frame_177.gif', 'frames/frame_178.gif', 'frames/frame_179.gif', 'frames/frame_180.gif', 'frames/frame_181.gif', 'frames/frame_182.gif', 'frames/frame_183.gif', 'frames/frame_184.gif', 'frames/frame_185.gif', 'frames/frame_186.gif', 'frames/frame_187.gif', 'frames/frame_188.gif', 'frames/frame_189.gif', 'frames/frame_190.gif', 'frames/frame_191.gif', 'frames/frame_192.gif', 'frames/frame_193.gif', 'frames/frame_194.gif', 'frames/frame_195.gif', 'frames/frame_196.gif', 'frames/frame_197.gif', 'frames/frame_198.gif', 'frames/frame_199.gif', 'frames/frame_200.gif', 'frames/frame_201.gif', 'frames/frame_202.gif', 'frames/frame_203.gif', 'frames/frame_204.gif', 'frames/frame_205.gif', 'frames/frame_206.gif', 'frames/frame_207.gif', 'frames/frame_208.gif', 'frames/frame_209.gif', 'frames/frame_210.gif', 'frames/frame_211.gif', 'frames/frame_212.gif', 'frames/frame_213.gif', 'frames/frame_214.gif', 'frames/frame_215.gif', 'frames/frame_216.gif', 'frames/frame_217.gif', 'frames/frame_218.gif', 'frames/frame_219.gif', 'frames/frame_220.gif', 'frames/frame_221.gif', 'frames/frame_222.gif', 'frames/frame_223.gif', 'frames/frame_224.gif', 'frames/frame_225.gif', 'frames/frame_226.gif', 'frames/frame_227.gif', 'frames/frame_228.gif', 'frames/frame_229.gif', 'frames/frame_230.gif', 'frames/frame_231.gif', 'frames/frame_232.gif', 'frames/frame_233.gif', 'frames/frame_234.gif', 'frames/frame_235.gif', 'frames/frame_236.gif', 'frames/frame_237.gif', 'frames/frame_238.gif', 'frames/frame_239.gif', 'frames/frame_240.gif', 'frames/frame_241.gif', 'frames/frame_242.gif', 'frames/frame_243.gif', 'frames/frame_244.gif', 'frames/frame_245.gif', 'frames/frame_246.gif', 'frames/frame_247.gif', 'frames/frame_248.gif', 'frames/frame_249.gif', 'frames/frame_250.gif', 'frames/frame_251.gif', 'frames/frame_252.gif', 'frames/frame_253.gif', 'frames/frame_254.gif', 'frames/frame_255.gif', 'frames/frame_256.gif', 'frames/frame_257.gif', 'frames/frame_258.gif', 'frames/frame_259.gif', 'frames/frame_260.gif', 'frames/frame_261.gif', 'frames/frame_262.gif', 'frames/frame_263.gif', 'frames/frame_264.gif', 'frames/frame_265.gif', 'frames/frame_266.gif', 'frames/frame_267.gif', 'frames/frame_268.gif', 'frames/frame_269.gif', 'frames/frame_270.gif', 'frames/frame_271.gif', 'frames/frame_272.gif', 'frames/frame_273.gif', 'frames/frame_274.gif', 'frames/frame_275.gif', 'frames/frame_276.gif', 'frames/frame_277.gif', 'frames/frame_278.gif', 'frames/frame_279.gif', 'frames/frame_280.gif', 'frames/frame_281.gif', 'frames/frame_282.gif', 'frames/frame_283.gif', 'frames/frame_284.gif', 'frames/frame_285.gif', 'frames/frame_286.gif', 'frames/frame_287.gif', 'frames/frame_288.gif', 'frames/frame_289.gif', 'frames/frame_290.gif', 'frames/frame_291.gif', 'frames/frame_292.gif', 'frames/frame_293.gif', 'frames/frame_294.gif', 'frames/frame_295.gif', 'frames/frame_296.gif', 'frames/frame_297.gif', 'frames/frame_298.gif', 'frames/frame_299.gif'];

function rafThrottle(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    window.requestAnimationFrame(function () {
      fn.apply(this, [].concat(args));
    });
  };
}

var ScrollSpin =
/*#__PURE__*/
function () {
  function ScrollSpin(el) {
    var frames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ScrollSpin);

    var DEFAULT_OPTIONS = {
      frameDistance: 20
    };
    this.el = el;
    this.img = document.createElement('img');
    this.img.src = frames[0];
    this.el.appendChild(this.img);
    this.frames = frames;
    this.options = _objectSpread({}, DEFAULT_OPTIONS, options); // Bind methods

    this.update = this.update.bind(this);
    this.preload();
    window.addEventListener('scroll', rafThrottle(this.update));
  }

  _createClass(ScrollSpin, [{
    key: "preload",
    value: function preload() {
      this.images = this.frames.map(function (f) {
        var img = new Image();
        img.src = f;
        return img;
      });
    }
  }, {
    key: "update",
    value: function update() {
      var totalFrames = this.frames.length;
      var index = Math.floor(window.scrollY / this.options.frameDistance) % totalFrames;
      this.img.src = this.frames[index];
    }
  }]);

  return ScrollSpin;
}();

var ss = new ScrollSpin(document.getElementById('scrollspin'), frames);
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56860" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=app.c328ef1a.js.map