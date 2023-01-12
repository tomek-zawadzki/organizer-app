// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _string = require("lodash-es/string");
var _stringDefault = parcelHelpers.interopDefault(_string);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
const menuBox = document.querySelector(".menu-close");
const menuItems = document.querySelectorAll(".menu__list--text");
const menuBtn = document.querySelector(".menu__title");
const openMenu = ()=>{
    menuBox.classList.toggle("menu");
    if (menuBox.classList.contains("menu-close")) menuBox.classList.remove("menu-close");
    else menuBox.classList.add("menu-close");
    menuItems.forEach((item)=>{
        if (item.classList.contains("hidden")) item.classList.remove("hidden");
        else item.classList.add("hidden");
    });
};
menuBtn.addEventListener("click", openMenu);
// QUOTE GENERATOR
const quoteText = document.querySelector(".quotes__text");
const quoteAuthor = document.querySelector(".quotes__author");
const changeQuoteBtn = document.querySelector(".quotes__change-btn");
const changeQuote = (data)=>{
    const random = Math.floor(Math.random() * data.length);
    quoteText.innerHTML = data[random].text;
    quoteAuthor.innerHTML = data[random].author;
};
const getQuote = async ()=>{
    try {
        const res = await fetch("https://type.fit/api/quotes");
        const json = await res.json();
        changeQuote(json);
    } catch (err) {
        console.error(err);
    }
};
getQuote();
changeQuoteBtn.addEventListener("click", getQuote);
// CHANGING MENU CARDS
const cardBtn = document.querySelectorAll(".menu__list--btn");
const cardNotes = document.querySelector(".notes");
const cardWallet = document.querySelector(".wallet");
const cardCalendar = document.querySelector(".calendar");
const cardTasks = document.querySelector(".tasks");
const cards = document.querySelectorAll(".card");
cardBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if (e.target.closest("li").classList.contains("item-tasks")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardTasks.classList.remove("hidden");
            cardTasks.classList.add("active-card");
        }
        if (e.target.closest("li").classList.contains("item-notes")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardNotes.classList.remove("hidden");
            cardNotes.classList.add("active-card");
        }
        if (e.target.closest("li").classList.contains("item-wallet")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardWallet.classList.remove("hidden");
            cardWallet.classList.add("active-card");
        }
        if (e.target.closest("li").classList.contains("item-calendar")) {
            cards.forEach((card)=>card.classList.remove("active-card"));
            cards.forEach((card)=>card.classList.add("hidden"));
            cardCalendar.classList.remove("hidden");
            cardCalendar.classList.add("active-card");
        }
    });
});
// TASK SECTION
const taskInput = document.querySelector(".tasks__input");
const taskBox = document.querySelector(".new-tasks-box");
const addTaskBtn = document.querySelector(".tasks__add-btn");
const acceptEditWindowBtn = document.querySelector(".edit-btn__accept");
const closeEditWindowBtn = document.querySelector(".edit-btn__close");
let editWidnow = document.querySelector(".tasks__edit");
let editInput = document.querySelector(".tasks__edit--input");
let taskPlace;
let newTask;
let idNumber = 0;
let taskToEdit;
const addNewTask = ()=>{
    if (taskInput.value !== "") {
        idNumber++;
        taskPlace = document.createElement("div");
        taskPlace.classList.add("tasks__new-task");
        taskPlace.setAttribute("id", `id-task-${idNumber}`);
        taskBox.appendChild(taskPlace);
        newTask = document.createElement("p");
        newTask.innerHTML = taskInput.value;
        newTask.classList.add("tasks__new-task--text");
        taskPlace.appendChild(newTask);
        createNewTaskBtns();
    } else console.log("wprowadz tekst");
    taskInput.value = "";
};
const createNewTaskBtns = ()=>{
    const btnsArea = document.createElement("div");
    btnsArea.classList.add("tasks__new-task--buttons");
    taskPlace.appendChild(btnsArea);
    const acceptBtn = document.createElement("button");
    acceptBtn.classList.add("tasks__new-task--accept-btn");
    acceptBtn.classList.add("tasks__new-task--btn");
    acceptBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    const editBtn = document.createElement("button");
    editBtn.classList.add("tasks__new-task--edit-btn");
    editBtn.classList.add("tasks__new-task--btn");
    editBtn.innerHTML = "edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("tasks__new-task--trash-btn");
    deleteBtn.classList.add("tasks__new-task--btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnsArea.appendChild(acceptBtn);
    btnsArea.appendChild(editBtn);
    btnsArea.appendChild(deleteBtn);
};
const deleteTask = (e)=>{
    const taskToDelete = e.target.closest(".tasks__new-task");
    taskToDelete.remove();
};
const openEditWindow = (e)=>{
    const oldTask = e.target.closest(".tasks__new-task").id;
    taskToEdit = document.getElementById(oldTask);
    editInput.value = taskToEdit.firstChild.textContent;
    editWidnow.style.display = "flex";
};
const actionClick = (e)=>{
    if (e.target.classList.value !== "") {
        if (e.target.closest("button").classList.contains("tasks__new-task--accept-btn")) e.target.closest("div").parentElement.firstElementChild.classList.toggle("task-finished");
        else if (e.target.closest("button").classList.contains("tasks__new-task--trash-btn")) deleteTask(e);
        else if (e.target.closest("button").classList.contains("tasks__new-task--edit-btn")) openEditWindow(e);
    }
};
const changeTask = ()=>{
    taskToEdit.firstChild.textContent = editInput.value;
    editWidnow.style.display = "none";
    editInput.innerHTML = "";
};
const closeEditWindow = ()=>{
    editWidnow.style.display = "none";
};
addTaskBtn.addEventListener("click", addNewTask);
taskBox.addEventListener("click", actionClick);
acceptEditWindowBtn.addEventListener("click", changeTask);
closeEditWindowBtn.addEventListener("click", closeEditWindow);
// NOTES SECTION
const notesBox = document.querySelector(".new-notes-box");
const noteTitle = document.querySelector(".form__note-title");
const noteContent = document.querySelector(".form__textarea");
const addNoteBtn = document.querySelector(".form__accept-btn");
let notePlace;
const addNewNote = ()=>{
    if (noteTitle.value !== "") {
        idNumber++;
        notePlace = document.createElement("div");
        notePlace.classList.add("notes__new-note");
        notePlace.setAttribute("id", `id-note-${idNumber}`);
        notesBox.appendChild(notePlace);
        newNote = document.createElement("p");
        newNote.innerHTML = noteTitle.value;
        newNote.classList.add("notes__new-note--title");
        notePlace.appendChild(newNote);
        createNewNoteBtns();
    } else console.log("wprowadz tekst");
    noteTitle.value = "";
};
const createNewNoteBtns = ()=>{
    const btnsNoteArea = document.createElement("div");
    btnsNoteArea.classList.add("notes__new-note--buttons");
    notePlace.appendChild(btnsNoteArea);
    const editNoteBtn = document.createElement("button");
    editNoteBtn.classList.add("note__new-note--edit-btn");
    editNoteBtn.classList.add("note__new-note--btn");
    editNoteBtn.innerHTML = "edit";
    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.classList.add("note__new-note--trash-btn");
    deleteNoteBtn.classList.add("note__new-note--btn");
    deleteNoteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    btnsNoteArea.appendChild(editNoteBtn);
    btnsNoteArea.appendChild(deleteNoteBtn);
};
addNoteBtn.addEventListener("click", addNewNote);
// Today
const todayDate = document.querySelector(".today__date--day");
const todayDayName = document.querySelector(".today__date--day-name");
const temperature = document.querySelector(".weather__temp");
// let getDate = new Date().toDateString();
const getDate = (0, _momentDefault.default)().format("DD.MM.YYYY");
const getDay = (0, _momentDefault.default)().format("dddd");
todayDate.textContent = getDate;
todayDayName.textContent = getDay;
const getWeather = async ()=>{
    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
        const data = await res.json();
        const currentDay = (0, _momentDefault.default)().format("YYYY-MM-DD");
        const currentTime = (0, _momentDefault.default)().format("HH");
        const properData = `${currentDay}T${currentTime}:00`;
        // temperature.textContent = data.hourly.temperature_2m;
        console.log(properData);
        console.log(data);
        data.hourly.time.forEach((time, i)=>{
            if (time === properData) {
                console.log(time, data.hourly.temperature_2m[i]);
                temperature.textContent = `${data.hourly.temperature_2m[i]} C`;
            }
        });
    } catch (err) {
        console.error(err);
    }
};
getWeather();
if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude  } = position.coords;
    const { longitude  } = position.coords;
    const coords = [
        latitude,
        longitude
    ];
    console.log(coords);
}, function() {
    alert("could not get your position");
});

},{"moment":"jwcsj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","lodash-es/string":"6lh38"}],"jwcsj":[function(require,module,exports) {
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(obj).length === 0;
        else {
            var k;
            for(k in obj){
                if (hasOwnProp(obj, k)) return false;
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
        var res = [], i, arrLen = arr.length;
        for(i = 0; i < arrLen; ++i)res.push(fn(arr[i], i));
        return res;
    }
    function extend(a, b) {
        for(var i in b)if (hasOwnProp(b, i)) a[i] = b[i];
        if (hasOwnProp(b, "toString")) a.toString = b.toString;
        if (hasOwnProp(b, "valueOf")) a.valueOf = b.valueOf;
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) m._pf = defaultParsingFlags();
        return m._pf;
    }
    var some;
    if (Array.prototype.some) some = Array.prototype.some;
    else some = function(fun) {
        var t = Object(this), len = t.length >>> 0, i;
        for(i = 0; i < len; i++){
            if (i in t && fun.call(this, t[i], i, t)) return true;
        }
        return false;
    };
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(m)) m._isValid = isNowValid;
            else return isNowValid;
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) extend(getParsingFlags(m), flags);
        else getParsingFlags(m).userInvalidated = true;
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to, from) {
        var i, prop, val, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from._isAMomentObject)) to._isAMomentObject = from._isAMomentObject;
        if (!isUndefined(from._i)) to._i = from._i;
        if (!isUndefined(from._f)) to._f = from._f;
        if (!isUndefined(from._l)) to._l = from._l;
        if (!isUndefined(from._strict)) to._strict = from._strict;
        if (!isUndefined(from._tzm)) to._tzm = from._tzm;
        if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
        if (!isUndefined(from._offset)) to._offset = from._offset;
        if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
        if (!isUndefined(from._locale)) to._locale = from._locale;
        if (momentPropertiesLen > 0) for(i = 0; i < momentPropertiesLen; i++){
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) to[prop] = val;
        }
        return to;
    }
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) this._d = new Date(NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) console.warn("Deprecation warning: " + msg);
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) hooks.deprecationHandler(null, msg);
            if (firstTime) {
                var args = [], arg, i, key, argLen = arguments.length;
                for(i = 0; i < argLen; i++){
                    arg = "";
                    if (typeof arguments[i] === "object") {
                        arg += "\n[" + i + "] ";
                        for(key in arguments[0])if (hasOwnProp(arguments[0], key)) arg += key + ": " + arguments[0][key] + ", ";
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else arg = arguments[i];
                    args.push(arg);
                }
                warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) hooks.deprecationHandler(name, msg);
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
    }
    function set(config) {
        var prop, i;
        for(i in config)if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) this[i] = prop;
            else this["_" + i] = prop;
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for(prop in childConfig)if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) res[prop] = childConfig[prop];
            else delete res[prop];
        }
        for(prop in parentConfig)if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
        return res;
    }
    function Locale(config) {
        if (config != null) this.set(config);
    }
    var keys;
    if (Object.keys) keys = Object.keys;
    else keys = function(obj) {
        var i, res = [];
        for(i in obj)if (hasOwnProp(obj, i)) res.push(i);
        return res;
    };
    var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === "string") func = function() {
            return this[callback]();
        };
        if (token) formatTokenFunctions[token] = func;
        if (padded) formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
        if (ordinal) formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, "");
        return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for(i = 0, length = array.length; i < length; i++)if (formatTokenFunctions[array[i]]) array[i] = formatTokenFunctions[array[i]];
        else array[i] = removeFormattingTokens(array[i]);
        return function(mom) {
            var output = "", i;
            for(i = 0; i < length; i++)output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) return m.localeData().invalidDate();
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while(i >= 0 && localFormattingTokens.test(format)){
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) return format;
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") return tok.slice(1);
            return tok;
        }).join("");
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
        return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? "future" : "past"];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for(prop in inputObject)if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
        }
        return normalizedInput;
    }
    var priorities = {};
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for(u in unitsObj)if (hasOwnProp(unitsObj, u)) units.push({
            unit: u,
            priority: priorities[u]
        });
        units.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
        if (number < 0) // -0 -> 0
        return Math.ceil(number) || 0;
        else return Math.floor(number);
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) value = absFloor(coercedNumber);
        return value;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else return get(this, unit);
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                value = toInt(value);
                mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) return this[units]();
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
            for(i = 0; i < prioritizedLen; i++)this[prioritized[i].unit](units[prioritized[i].unit]);
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units](value);
        }
        return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {};
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var tokens = {};
    function addParseToken(token, callback) {
        var i, func = callback, tokenLen;
        if (typeof token === "string") token = [
            token
        ];
        if (isNumber(callback)) func = function(input, array) {
            array[callback] = toInt(input);
        };
        tokenLen = token.length;
        for(i = 0; i < tokenLen; i++)tokens[token[i]] = func;
    }
    function addWeekParseToken(token, callback) {
        addParseToken(token, function(input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) tokens[token](input, config._a, config, token);
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
    else indexOf = function(o) {
        // I know
        var i;
        for(i = 0; i < this.length; ++i){
            if (this[i] === o) return i;
        }
        return -1;
    };
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) return NaN;
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    // FORMATTING
    addFormatToken("M", [
        "MM",
        2
    ], "Mo", function() {
        return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken("MMMM", 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias("month", "M");
    // PRIORITY
    addUnitPriority("month", 8);
    // PARSING
    addRegexToken("M", match1to2);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        "M",
        "MM"
    ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        "MMM",
        "MMMM"
    ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) array[MONTH] = month;
        else getParsingFlags(config).invalidMonth = input;
    });
    // LOCALES
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m, format) {
        if (!m) return isArray(this._months) ? this._months : this._months["standalone"];
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()];
    }
    function localeMonthsShort(m, format) {
        if (!m) return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for(i = 0; i < 12; ++i){
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === "MMM") {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else if (format === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
                this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            // test the regex
            if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) return i;
            else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) return i;
            else if (!strict && this._monthsParse[i].test(monthName)) return i;
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) // No op
        return mom;
        if (typeof value === "string") {
            if (/^\d+$/.test(value)) value = toInt(value);
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else return get(this, "Month");
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) computeMonthsParse.call(this);
            if (isStrict) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
        } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) this._monthsShortRegex = defaultMonthsShortRegex;
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) computeMonthsParse.call(this);
            if (isStrict) return this._monthsStrictRegex;
            else return this._monthsRegex;
        } else {
            if (!hasOwnProp(this, "_monthsRegex")) this._monthsRegex = defaultMonthsRegex;
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for(i = 0; i < 12; i++){
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for(i = 0; i < 24; i++)mixedPieces[i] = regexEscape(mixedPieces[i]);
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
    }
    // FORMATTING
    addFormatToken("Y", 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
    });
    addFormatToken(0, [
        "YY",
        2
    ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [
        "YYYY",
        4
    ], 0, "year");
    addFormatToken(0, [
        "YYYYY",
        5
    ], 0, "year");
    addFormatToken(0, [
        "YYYYYY",
        6,
        true
    ], 0, "year");
    // ALIASES
    addUnitAlias("year", "y");
    // PRIORITIES
    addUnitPriority("year", 1);
    // PARSING
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken([
        "YYYYY",
        "YYYYYY"
    ], YEAR);
    addParseToken("YYYY", function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function(input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) date.setFullYear(y);
        } else date = new Date(y, m, d, h, M, s, ms);
        return date;
    }
    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
        } else date = new Date(Date.UTC.apply(null, arguments));
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken("w", [
        "ww",
        2
    ], "wo", "week");
    addFormatToken("W", [
        "WW",
        2
    ], "Wo", "isoWeek");
    // ALIASES
    addUnitAlias("week", "w");
    addUnitAlias("isoWeek", "W");
    // PRIORITIES
    addUnitPriority("week", 5);
    addUnitPriority("isoWeek", 5);
    // PARSING
    addRegexToken("w", match1to2);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken([
        "w",
        "ww",
        "W",
        "WW"
    ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
    }
    // FORMATTING
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken("ddd", 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken("dddd", 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    // ALIASES
    addUnitAlias("day", "d");
    addUnitAlias("weekday", "e");
    addUnitAlias("isoWeekday", "E");
    // PRIORITY
    addUnitPriority("day", 11);
    addUnitPriority("weekday", 11);
    addUnitPriority("isoWeekday", 11);
    // PARSING
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        "dd",
        "ddd",
        "dddd"
    ], function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) week.d = weekday;
        else getParsingFlags(config).invalidWeekday = input;
    });
    addWeekParseToken([
        "d",
        "e",
        "E"
    ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== "string") return input;
        if (!isNaN(input)) return parseInt(input, 10);
        input = locale.weekdaysParse(input);
        if (typeof input === "number") return input;
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === "string") return locale.weekdaysParse(input) % 7 || 7;
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? "format" : "standalone"];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }
    function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for(i = 0; i < 7; ++i){
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === "dddd") {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === "ddd") {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === "dddd") {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === "ddd") {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            // test the regex
            if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) return i;
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) return i;
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
        } else return day;
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else return this.day() || 7;
    }
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
        } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) this._weekdaysRegex = defaultWeekdaysRegex;
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
        } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
        } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken("H", [
        "HH",
        2
    ], 0, "hour");
    addFormatToken("h", [
        "hh",
        2
    ], 0, hFormat);
    addFormatToken("k", [
        "kk",
        2
    ], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem("a", true);
    meridiem("A", false);
    // ALIASES
    addUnitAlias("hour", "h");
    // PRIORITY
    addUnitPriority("hour", 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2);
    addRegexToken("h", match1to2);
    addRegexToken("k", match1to2);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken([
        "H",
        "HH"
    ], HOUR);
    addParseToken([
        "k",
        "kk"
    ], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        "a",
        "A"
    ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        "h",
        "hh"
    ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) return isLower ? "pm" : "PM";
        else return isLower ? "am" : "AM";
    }
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for(i = 0; i < minl; i += 1){
            if (arr1[i] !== arr2[i]) return i;
        }
        return minl;
    }
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while(i < names.length){
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while(j > 0){
                locale = loadLocale(split.slice(0, j).join("-"));
                if (locale) return locale;
                if (next && next.length >= j && commonPrefix(split, next) >= j - 1) break;
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        return name.match("^[^/\\\\]*$") != null;
    }
    function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (locales[name] === undefined && true && module && module.exports && isLocaleNameSane(name)) try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) data = getLocale(key);
            else data = defineLocale(key, values);
            if (data) // moment.duration._locale = moment._locale = data;
            globalLocale = data;
            else if (typeof console !== "undefined" && console.warn) //warn user if arguments are passed but the locale could not be set
            console.warn("Locale " + key + " not found. Did you forget to load it?");
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) parentConfig = locales[config.parentLocale]._config;
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) parentConfig = locale._config;
                    else {
                        if (!localeFamilies[config.parentLocale]) localeFamilies[config.parentLocale] = [];
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
            else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
            } else if (locales[name] != null) delete locales[name];
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
        if (!key) return globalLocale;
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) return locale;
            key = [
                key
            ];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) overflow = DATE;
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) overflow = WEEK;
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) overflow = WEEKDAY;
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        [
            "YYYYYY-MM-DD",
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            "YYYY-MM-DD",
            /\d{4}-\d\d-\d\d/
        ],
        [
            "GGGG-[W]WW-E",
            /\d{4}-W\d\d-\d/
        ],
        [
            "GGGG-[W]WW",
            /\d{4}-W\d\d/,
            false
        ],
        [
            "YYYY-DDD",
            /\d{4}-\d{3}/
        ],
        [
            "YYYY-MM",
            /\d{4}-\d\d/,
            false
        ],
        [
            "YYYYYYMMDD",
            /[+-]\d{10}/
        ],
        [
            "YYYYMMDD",
            /\d{8}/
        ],
        [
            "GGGG[W]WWE",
            /\d{4}W\d{3}/
        ],
        [
            "GGGG[W]WW",
            /\d{4}W\d{2}/,
            false
        ],
        [
            "YYYYDDD",
            /\d{7}/
        ],
        [
            "YYYYMM",
            /\d{6}/,
            false
        ],
        [
            "YYYY",
            /\d{4}/,
            false
        ]
    ], // iso time formats and regexes
    isoTimes = [
        [
            "HH:mm:ss.SSSS",
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            "HH:mm:ss,SSSS",
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            "HH:mm:ss",
            /\d\d:\d\d:\d\d/
        ],
        [
            "HH:mm",
            /\d\d:\d\d/
        ],
        [
            "HHmmss.SSSS",
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            "HHmmss,SSSS",
            /\d\d\d\d\d\d,\d+/
        ],
        [
            "HHmmss",
            /\d\d\d\d\d\d/
        ],
        [
            "HHmm",
            /\d\d\d\d/
        ],
        [
            "HH",
            /\d\d/
        ]
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
            getParsingFlags(config).iso = true;
            for(i = 0, l = isoDatesLen; i < l; i++)if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for(i = 0, l = isoTimesLen; i < l; i++)if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || " ") + isoTimes[i][0];
                    break;
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = "Z";
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
        } else config._isValid = false;
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];
        if (secondStr) result.push(parseInt(secondStr, 10));
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) return 2000 + year;
        else if (year <= 999) return 1900 + year;
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) return obsOffsets[obsOffset];
        else if (militaryOffset) // the only allowed military tz is Z
        return 0;
        else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) return;
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else config._isValid = false;
    }
    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        configFromRFC2822(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        if (config._strict) config._isValid = false;
        else // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
    });
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) return a;
        if (b != null) return b;
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
        ];
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) return;
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) dayOfYearFromWeekInfo(config);
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) getParsingFlags(config)._overflowDayOfYear = true;
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for(i = 0; i < 3 && config._a[i] == null; ++i)config._a[i] = input[i] = currentDate[i];
        // Zero out whatever was not defaulted, including time
        for(; i < 7; i++)config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        if (config._nextDay) config._a[HOUR] = 24;
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) getParsingFlags(config).weekdayMismatch = true;
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) weekdayOverflow = true;
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
            } else // default to beginning of week
            weekday = dow;
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) getParsingFlags(config)._overflowWeeks = true;
        else if (weekdayOverflow != null) getParsingFlags(config)._overflowWeekday = true;
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {};
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {};
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = "" + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for(i = 0; i < tokenLen; i++){
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) getParsingFlags(config).unusedTokens.push(token);
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) getParsingFlags(config).bigHour = undefined;
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) // nothing to do
        return hour;
        if (locale.meridiemHour != null) return locale.meridiemHour(hour, meridiem);
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) hour += 12;
            if (!isPm && hour === 12) hour = 0;
            return hour;
        } else // this is not supposed to happen
        return hour;
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for(i = 0; i < configfLen; i++){
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) validFormatFound = true;
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
                if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) bestFormatIsValid = true;
                }
            } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) return;
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function(obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, "d");
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === "") return createInvalid({
            nullInput: true
        });
        if (typeof input === "string") config._i = input = config._locale.preparse(input);
        if (isMoment(input)) return new Moment(checkOverflow(input));
        else if (isDate(input)) config._d = input;
        else if (isArray(format)) configFromStringAndArray(config);
        else if (format) configFromStringAndFormat(config);
        else configFromInput(config);
        if (!isValid(config)) config._d = null;
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) config._d = new Date(hooks.now());
        else if (isDate(input)) config._d = new Date(input.valueOf());
        else if (typeof input === "string") configFromString(config);
        else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) configFromObject(config);
        else if (isNumber(input)) // from milliseconds
        config._d = new Date(input);
        else hooks.createFromInputFallback(config);
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) input = undefined;
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other < this ? this : other;
        else return createInvalid();
    }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other > this ? this : other;
        else return createInvalid();
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
        if (!moments.length) return createLocal();
        res = moments[0];
        for(i = 1; i < moments.length; ++i)if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
    }
    var now = function() {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
    ];
    function isDurationValid(m) {
        var key, unitHasDecimal = false, i, orderLen = ordering.length;
        for(key in m){
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) return false;
        }
        for(i = 0; i < orderLen; ++i)if (m[ordering[i]]) {
            if (unitHasDecimal) return false; // only allow non-integers for smallest unit
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) unitHasDecimal = true;
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) return Math.round(-1 * number) * -1;
        else return Math.round(number);
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for(i = 0; i < len; i++)if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) diffs++;
        return diffs + lengthDiff;
    }
    // FORMATTING
    function offset(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset(), sign = "+";
            if (offset < 0) {
                offset = -offset;
                sign = "-";
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }
    offset("Z", ":");
    offset("ZZ", "");
    // PARSING
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken([
        "Z",
        "ZZ"
    ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes;
        if (matches === null) return null;
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || [
            "-",
            0,
            0
        ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else return createLocal(input).local();
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {};
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) return input != null ? this : NaN;
        if (input != null) {
            if (typeof input === "string") {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
            } else if (Math.abs(input) < 16 && !keepMinutes) input = input * 60;
            if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) this.add(localAdjust, "m");
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) addSubtract(this, createDuration(input - offset, "m"), 1, false);
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else return this._isUTC ? offset : getDateOffset(this);
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== "string") input = -input;
            this.utcOffset(input, keepLocalTime);
            return this;
        } else return -this.utcOffset();
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) this.subtract(getDateOffset(this), "m");
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) this.utcOffset(this._tzm, false, true);
        else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) this.utcOffset(tZone);
            else this.utcOffset(0, true);
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) return false;
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else this._isDSTShifted = false;
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
        else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) duration[key] = +input;
            else duration.milliseconds = +input;
        } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === "-" ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (match = isoRegex.exec(input)) {
            sign = match[1] === "-" ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) // checks for null or undefined
        duration = {};
        else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) ret._locale = input._locale;
        if (isDuration(input) && hasOwnProp(input, "_isValid")) ret._isValid = input._isValid;
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(",", "."));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) --res.months;
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) return {
            milliseconds: 0,
            months: 0
        };
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) res = positiveMomentsDifference(base, other);
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                tmp = val;
                val = period;
                period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) // No op
        return;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) setMonth(mom, get(mom, "Month") + months * isAdding);
        if (days) set$1(mom, "Date", get(mom, "Date") + days * isAdding);
        if (milliseconds) mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        if (updateOffset) hooks.updateOffset(mom, days || months);
    }
    var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
    function isString(input) {
        return typeof input === "string" || input instanceof String;
    }
    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }
    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
        ], i, property, propertyLen = properties.length;
        for(i = 0; i < propertyLen; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
        }).length === 0;
        return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, "days", true);
        return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
    }
    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf("day"), format = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") return this.valueOf() > localInput.valueOf();
        else return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") return this.valueOf() < localInput.valueOf();
        else return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) return false;
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") return this.valueOf() === localInput.valueOf();
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) return NaN;
        that = cloneWithOffset(input, this);
        if (!that.isValid()) return NaN;
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch(units){
            case "year":
                output = monthDiff(this, that) / 12;
                break;
            case "month":
                output = monthDiff(this, that);
                break;
            case "quarter":
                output = monthDiff(this, that) / 3;
                break;
            case "second":
                output = (this - that) / 1e3;
                break; // 1000
            case "minute":
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case "hour":
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case "day":
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case "week":
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        if (a.date() < b.date()) // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) return null;
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) return this.toDate().toISOString();
            else return new Date(this.valueOf() + this.utcOffset() * 60000).toISOString().replace("Z", formatMoment(m, "Z"));
        }
        return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */ function inspect() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
        if (!inputString) inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;
        if (key === undefined) return this._locale._abbr;
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) this._locale = newLocaleData;
            return this;
        }
    }
    var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
        if (key === undefined) return this.localeData();
        else return this.locale(key);
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        else return new Date(y, m, d).valueOf();
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        else return Date.UTC(y, m, d);
    }
    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond" || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case "year":
                time = startOfDate(this.year(), 0, 1);
                break;
            case "quarter":
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case "week":
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case "hour":
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case "minute":
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case "second":
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond" || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case "year":
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case "minute":
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case "second":
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", [
        "y",
        1
    ], "yo", "eraYear");
    addFormatToken("y", [
        "yy",
        2
    ], 0, "eraYear");
    addFormatToken("y", [
        "yyy",
        3
    ], 0, "eraYear");
    addFormatToken("y", [
        "yyyy",
        4
    ], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken([
        "N",
        "NN",
        "NNN",
        "NNNN",
        "NNNNN"
    ], function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) getParsingFlags(config).era = era;
        else getParsingFlags(config).invalidEra = input;
    });
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken([
        "y",
        "yy",
        "yyy",
        "yyyy"
    ], YEAR);
    addParseToken([
        "yo"
    ], function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) match = input.match(config._locale._eraYearOrdinalRegex);
        if (config._locale.eraYearOrdinalParse) array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        else array[YEAR] = parseInt(input, 10);
    });
    function localeEras(m, format) {
        var i, l, date, eras = this._eras || getLocale("en")._eras;
        for(i = 0, l = eras.length; i < l; ++i){
            switch(typeof eras[i].since){
                case "string":
                    // truncate time
                    date = hooks(eras[i].since).startOf("day");
                    eras[i].since = date.valueOf();
                    break;
            }
            switch(typeof eras[i].until){
                case "undefined":
                    eras[i].until = Infinity;
                    break;
                case "string":
                    // truncate time
                    date = hooks(eras[i].until).startOf("day").valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }
    function localeErasParse(eraName, format, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for(i = 0, l = eras.length; i < l; ++i){
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) switch(format){
                case "N":
                case "NN":
                case "NNN":
                    if (abbr === eraName) return eras[i];
                    break;
                case "NNNN":
                    if (name === eraName) return eras[i];
                    break;
                case "NNNNN":
                    if (narrow === eraName) return eras[i];
                    break;
            }
            else if ([
                name,
                abbr,
                narrow
            ].indexOf(eraName) >= 0) return eras[i];
        }
    }
    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === undefined) return hooks(era.since).year();
        else return hooks(era.since).year() + (year - era.offset) * dir;
    }
    function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].name;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].name;
        }
        return "";
    }
    function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].narrow;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].narrow;
        }
        return "";
    }
    function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].abbr;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].abbr;
        }
        return "";
    }
    function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            // truncate time
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
        return this.year();
    }
    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) computeErasParse.call(this);
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) computeErasParse.call(this);
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) computeErasParse.call(this);
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for(i = 0, l = eras.length; i < l; ++i){
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
    }
    // FORMATTING
    addFormatToken(0, [
        "gg",
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        "GG",
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    // ALIASES
    addUnitAlias("weekYear", "gg");
    addUnitAlias("isoWeekYear", "GG");
    // PRIORITY
    addUnitPriority("weekYear", 1);
    addUnitPriority("isoWeekYear", 1);
    // PARSING
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken([
        "gggg",
        "ggggg",
        "GGGG",
        "GGGGG"
    ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        "gg",
        "GG"
    ], function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) return weekOfYear(this, dow, doy).year;
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) week = weeksTarget;
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken("Q", 0, "Qo", "quarter");
    // ALIASES
    addUnitAlias("quarter", "Q");
    // PRIORITY
    addUnitPriority("quarter", 7);
    // PARSING
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken("D", [
        "DD",
        2
    ], "Do", "date");
    // ALIASES
    addUnitAlias("date", "D");
    // PRIORITY
    addUnitPriority("date", 9);
    // PARSING
    addRegexToken("D", match1to2);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        "D",
        "DD"
    ], DATE);
    addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet("Date", true);
    // FORMATTING
    addFormatToken("DDD", [
        "DDDD",
        3
    ], "DDDo", "dayOfYear");
    // ALIASES
    addUnitAlias("dayOfYear", "DDD");
    // PRIORITY
    addUnitPriority("dayOfYear", 4);
    // PARSING
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken([
        "DDD",
        "DDDD"
    ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    // FORMATTING
    addFormatToken("m", [
        "mm",
        2
    ], 0, "minute");
    // ALIASES
    addUnitAlias("minute", "m");
    // PRIORITY
    addUnitPriority("minute", 14);
    // PARSING
    addRegexToken("m", match1to2);
    addRegexToken("mm", match1to2, match2);
    addParseToken([
        "m",
        "mm"
    ], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet("Minutes", false);
    // FORMATTING
    addFormatToken("s", [
        "ss",
        2
    ], 0, "second");
    // ALIASES
    addUnitAlias("second", "s");
    // PRIORITY
    addUnitPriority("second", 15);
    // PARSING
    addRegexToken("s", match1to2);
    addRegexToken("ss", match1to2, match2);
    addParseToken([
        "s",
        "ss"
    ], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet("Seconds", false);
    // FORMATTING
    addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        "SS",
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        "SSS",
        3
    ], 0, "millisecond");
    addFormatToken(0, [
        "SSSS",
        4
    ], 0, function() {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        "SSSSS",
        5
    ], 0, function() {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        "SSSSSS",
        6
    ], 0, function() {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        "SSSSSSS",
        7
    ], 0, function() {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        "SSSSSSSS",
        8
    ], 0, function() {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        "SSSSSSSSS",
        9
    ], 0, function() {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias("millisecond", "ms");
    // PRIORITY
    addUnitPriority("millisecond", 16);
    // PARSING
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token, getSetMillisecond;
    for(token = "SSSS"; token.length <= 9; token += "S")addRegexToken(token, matchUnsigned);
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1000);
    }
    for(token = "S"; token.length <= 9; token += "S")addParseToken(token, parseMs);
    getSetMillisecond = makeGetSet("Milliseconds", false);
    // FORMATTING
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
    };
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
    proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
    proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
    proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
    proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format, index, field, setter) {
        var locale = getLocale(), utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }
        format = format || "";
        if (index != null) return get$1(format, index, field, "month");
        var i, out = [];
        for(i = 0; i < 12; i++)out[i] = get$1(format, i, field, "month");
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === "boolean") {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || "";
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || "";
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
        if (index != null) return get$1(format, (index + shift) % 7, field, "day");
        for(i = 0; i < 7; i++)out[i] = get$1(format, (i + shift) % 7, field, "day");
        return out;
    }
    function listMonths(format, index) {
        return listMonthsImpl(format, index, "months");
    }
    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, "monthsShort");
    }
    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
        eras: [
            {
                since: "0001-01-01",
                until: Infinity,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD"
            },
            {
                since: "0000-12-31",
                until: -Infinity,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC"
            }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
    hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) return Math.floor(number);
        else return Math.ceil(number);
    }
    function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) return NaN;
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch(units){
                case "month":
                    return months;
                case "quarter":
                    return months / 3;
                case "year":
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch(units){
                case "week":
                    return days / 7 + milliseconds / 6048e5;
                case "day":
                    return days + milliseconds / 864e5;
                case "hour":
                    return days * 24 + milliseconds / 36e5;
                case "minute":
                    return days * 1440 + milliseconds / 6e4;
                case "second":
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case "millisecond":
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error("Unknown unit " + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) return NaN;
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
    }
    function makeGetter(name) {
        return function() {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
    function weeks() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as("s")), minutes = round(duration.as("m")), hours = round(duration.as("h")), days = round(duration.as("d")), months = round(duration.as("M")), weeks = round(duration.as("w")), years = round(duration.as("y")), a = seconds <= thresholds.ss && [
            "s",
            seconds
        ] || seconds < thresholds.s && [
            "ss",
            seconds
        ] || minutes <= 1 && [
            "m"
        ] || minutes < thresholds.m && [
            "mm",
            minutes
        ] || hours <= 1 && [
            "h"
        ] || hours < thresholds.h && [
            "hh",
            hours
        ] || days <= 1 && [
            "d"
        ] || days < thresholds.d && [
            "dd",
            days
        ];
        if (thresholds.w != null) a = a || weeks <= 1 && [
            "w"
        ] || weeks < thresholds.w && [
            "ww",
            weeks
        ];
        a = a || months <= 1 && [
            "M"
        ] || months < thresholds.M && [
            "MM",
            months
        ] || years <= 1 && [
            "y"
        ] || [
            "yy",
            years
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) return round;
        if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) return false;
        if (limit === undefined) return thresholds[threshold];
        thresholds[threshold] = limit;
        if (threshold === "s") thresholds.ss = limit - 1;
        return true;
    }
    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var withSuffix = false, th = thresholds, locale, output;
        if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") withSuffix = argWithSuffix;
        if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) th.ss = argThresholds.s - 1;
        }
        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);
        if (withSuffix) output = locale.pastFuture(+this, output);
        return locale.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) return this.localeData().invalidDate();
        var seconds = abs$1(this._milliseconds) / 1000, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return "P0D";
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years ? ymSign + years + "Y" : "") + (months ? ymSign + months + "M" : "") + (days ? daysSign + days + "D" : "") + (hours || minutes || seconds ? "T" : "") + (hours ? hmsSign + hours + "H" : "") + (minutes ? hmsSign + minutes + "M" : "") + (seconds ? hmsSign + s + "S" : "");
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
    proto$2.lang = lang;
    // FORMATTING
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    // PARSING
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.29.4";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    return hooks;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6lh38":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelCase", ()=>(0, _camelCaseJsDefault.default));
parcelHelpers.export(exports, "capitalize", ()=>(0, _capitalizeJsDefault.default));
parcelHelpers.export(exports, "deburr", ()=>(0, _deburrJsDefault.default));
parcelHelpers.export(exports, "endsWith", ()=>(0, _endsWithJsDefault.default));
parcelHelpers.export(exports, "escape", ()=>(0, _escapeJsDefault.default));
parcelHelpers.export(exports, "escapeRegExp", ()=>(0, _escapeRegExpJsDefault.default));
parcelHelpers.export(exports, "kebabCase", ()=>(0, _kebabCaseJsDefault.default));
parcelHelpers.export(exports, "lowerCase", ()=>(0, _lowerCaseJsDefault.default));
parcelHelpers.export(exports, "lowerFirst", ()=>(0, _lowerFirstJsDefault.default));
parcelHelpers.export(exports, "pad", ()=>(0, _padJsDefault.default));
parcelHelpers.export(exports, "padEnd", ()=>(0, _padEndJsDefault.default));
parcelHelpers.export(exports, "padStart", ()=>(0, _padStartJsDefault.default));
parcelHelpers.export(exports, "parseInt", ()=>(0, _parseIntJsDefault.default));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJsDefault.default));
parcelHelpers.export(exports, "replace", ()=>(0, _replaceJsDefault.default));
parcelHelpers.export(exports, "snakeCase", ()=>(0, _snakeCaseJsDefault.default));
parcelHelpers.export(exports, "split", ()=>(0, _splitJsDefault.default));
parcelHelpers.export(exports, "startCase", ()=>(0, _startCaseJsDefault.default));
parcelHelpers.export(exports, "startsWith", ()=>(0, _startsWithJsDefault.default));
parcelHelpers.export(exports, "template", ()=>(0, _templateJsDefault.default));
parcelHelpers.export(exports, "templateSettings", ()=>(0, _templateSettingsJsDefault.default));
parcelHelpers.export(exports, "toLower", ()=>(0, _toLowerJsDefault.default));
parcelHelpers.export(exports, "toUpper", ()=>(0, _toUpperJsDefault.default));
parcelHelpers.export(exports, "trim", ()=>(0, _trimJsDefault.default));
parcelHelpers.export(exports, "trimEnd", ()=>(0, _trimEndJsDefault.default));
parcelHelpers.export(exports, "trimStart", ()=>(0, _trimStartJsDefault.default));
parcelHelpers.export(exports, "truncate", ()=>(0, _truncateJsDefault.default));
parcelHelpers.export(exports, "unescape", ()=>(0, _unescapeJsDefault.default));
parcelHelpers.export(exports, "upperCase", ()=>(0, _upperCaseJsDefault.default));
parcelHelpers.export(exports, "upperFirst", ()=>(0, _upperFirstJsDefault.default));
parcelHelpers.export(exports, "words", ()=>(0, _wordsJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _stringDefaultJsDefault.default));
var _camelCaseJs = require("./camelCase.js");
var _camelCaseJsDefault = parcelHelpers.interopDefault(_camelCaseJs);
var _capitalizeJs = require("./capitalize.js");
var _capitalizeJsDefault = parcelHelpers.interopDefault(_capitalizeJs);
var _deburrJs = require("./deburr.js");
var _deburrJsDefault = parcelHelpers.interopDefault(_deburrJs);
var _endsWithJs = require("./endsWith.js");
var _endsWithJsDefault = parcelHelpers.interopDefault(_endsWithJs);
var _escapeJs = require("./escape.js");
var _escapeJsDefault = parcelHelpers.interopDefault(_escapeJs);
var _escapeRegExpJs = require("./escapeRegExp.js");
var _escapeRegExpJsDefault = parcelHelpers.interopDefault(_escapeRegExpJs);
var _kebabCaseJs = require("./kebabCase.js");
var _kebabCaseJsDefault = parcelHelpers.interopDefault(_kebabCaseJs);
var _lowerCaseJs = require("./lowerCase.js");
var _lowerCaseJsDefault = parcelHelpers.interopDefault(_lowerCaseJs);
var _lowerFirstJs = require("./lowerFirst.js");
var _lowerFirstJsDefault = parcelHelpers.interopDefault(_lowerFirstJs);
var _padJs = require("./pad.js");
var _padJsDefault = parcelHelpers.interopDefault(_padJs);
var _padEndJs = require("./padEnd.js");
var _padEndJsDefault = parcelHelpers.interopDefault(_padEndJs);
var _padStartJs = require("./padStart.js");
var _padStartJsDefault = parcelHelpers.interopDefault(_padStartJs);
var _parseIntJs = require("./parseInt.js");
var _parseIntJsDefault = parcelHelpers.interopDefault(_parseIntJs);
var _repeatJs = require("./repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _replaceJs = require("./replace.js");
var _replaceJsDefault = parcelHelpers.interopDefault(_replaceJs);
var _snakeCaseJs = require("./snakeCase.js");
var _snakeCaseJsDefault = parcelHelpers.interopDefault(_snakeCaseJs);
var _splitJs = require("./split.js");
var _splitJsDefault = parcelHelpers.interopDefault(_splitJs);
var _startCaseJs = require("./startCase.js");
var _startCaseJsDefault = parcelHelpers.interopDefault(_startCaseJs);
var _startsWithJs = require("./startsWith.js");
var _startsWithJsDefault = parcelHelpers.interopDefault(_startsWithJs);
var _templateJs = require("./template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
var _templateSettingsJs = require("./templateSettings.js");
var _templateSettingsJsDefault = parcelHelpers.interopDefault(_templateSettingsJs);
var _toLowerJs = require("./toLower.js");
var _toLowerJsDefault = parcelHelpers.interopDefault(_toLowerJs);
var _toUpperJs = require("./toUpper.js");
var _toUpperJsDefault = parcelHelpers.interopDefault(_toUpperJs);
var _trimJs = require("./trim.js");
var _trimJsDefault = parcelHelpers.interopDefault(_trimJs);
var _trimEndJs = require("./trimEnd.js");
var _trimEndJsDefault = parcelHelpers.interopDefault(_trimEndJs);
var _trimStartJs = require("./trimStart.js");
var _trimStartJsDefault = parcelHelpers.interopDefault(_trimStartJs);
var _truncateJs = require("./truncate.js");
var _truncateJsDefault = parcelHelpers.interopDefault(_truncateJs);
var _unescapeJs = require("./unescape.js");
var _unescapeJsDefault = parcelHelpers.interopDefault(_unescapeJs);
var _upperCaseJs = require("./upperCase.js");
var _upperCaseJsDefault = parcelHelpers.interopDefault(_upperCaseJs);
var _upperFirstJs = require("./upperFirst.js");
var _upperFirstJsDefault = parcelHelpers.interopDefault(_upperFirstJs);
var _wordsJs = require("./words.js");
var _wordsJsDefault = parcelHelpers.interopDefault(_wordsJs);
var _stringDefaultJs = require("./string.default.js");
var _stringDefaultJsDefault = parcelHelpers.interopDefault(_stringDefaultJs);

},{"./camelCase.js":"5LT3x","./capitalize.js":"fjGbu","./deburr.js":"1gWKb","./endsWith.js":"gk9ey","./escape.js":"jewOa","./escapeRegExp.js":"9N2xu","./kebabCase.js":"iRluj","./lowerCase.js":"jDilW","./lowerFirst.js":"jEIKy","./pad.js":"hWnaV","./padEnd.js":"awWS6","./padStart.js":"gs82C","./parseInt.js":"6RfGD","./repeat.js":"3bGyt","./replace.js":"gEhng","./snakeCase.js":"hhyXP","./split.js":"8Daxt","./startCase.js":"kavg0","./startsWith.js":"72IsP","./template.js":"5ckIj","./templateSettings.js":"7WtXU","./toLower.js":"7ENVt","./toUpper.js":"kHP21","./trim.js":"beJxb","./trimEnd.js":"lPcQO","./trimStart.js":"iM1JE","./truncate.js":"hqfH8","./unescape.js":"hksYY","./upperCase.js":"fwINY","./upperFirst.js":"gPoTx","./words.js":"kDdrN","./string.default.js":"adAXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5LT3x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _capitalizeJs = require("./capitalize.js");
var _capitalizeJsDefault = parcelHelpers.interopDefault(_capitalizeJs);
var _createCompounderJs = require("./_createCompounder.js");
var _createCompounderJsDefault = parcelHelpers.interopDefault(_createCompounderJs);
/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */ var camelCase = (0, _createCompounderJsDefault.default)(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? (0, _capitalizeJsDefault.default)(word) : word);
});
exports.default = camelCase;

},{"./capitalize.js":"fjGbu","./_createCompounder.js":"4ScHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjGbu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _upperFirstJs = require("./upperFirst.js");
var _upperFirstJsDefault = parcelHelpers.interopDefault(_upperFirstJs);
/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */ function capitalize(string) {
    return (0, _upperFirstJsDefault.default)((0, _toStringJsDefault.default)(string).toLowerCase());
}
exports.default = capitalize;

},{"./toString.js":"hF0LJ","./upperFirst.js":"gPoTx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hF0LJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? "" : (0, _baseToStringJsDefault.default)(value);
}
exports.default = toString;

},{"./_baseToString.js":"fQ5ds","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fQ5ds":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _arrayMapJs = require("./_arrayMap.js");
var _arrayMapJsDefault = parcelHelpers.interopDefault(_arrayMapJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if ((0, _isArrayJsDefault.default)(value)) // Recursively convert values (susceptible to call stack limits).
    return (0, _arrayMapJsDefault.default)(value, baseToString) + "";
    if ((0, _isSymbolJsDefault.default)(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
exports.default = baseToString;

},{"./_Symbol.js":"jx216","./_arrayMap.js":"gDCVM","./isArray.js":"ETPQ1","./isSymbol.js":"gCyRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jx216":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Built-in value references. */ var Symbol = (0, _rootJsDefault.default).Symbol;
exports.default = Symbol;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yvCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _freeGlobalJs = require("./_freeGlobal.js");
var _freeGlobalJsDefault = parcelHelpers.interopDefault(_freeGlobalJs);
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = (0, _freeGlobalJsDefault.default) || freeSelf || Function("return this")();
exports.default = root;

},{"./_freeGlobal.js":"98hMd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98hMd":[function(require,module,exports) {
/** Detect free variable `global` from Node.js. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
exports.default = freeGlobal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDCVM":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
exports.default = arrayMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ETPQ1":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var isArray = Array.isArray;
exports.default = isArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCyRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || (0, _isObjectLikeJsDefault.default)(value) && (0, _baseGetTagJsDefault.default)(value) == symbolTag;
}
exports.default = isSymbol;

},{"./_baseGetTag.js":"gVDfP","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVDfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _getRawTagJs = require("./_getRawTag.js");
var _getRawTagJsDefault = parcelHelpers.interopDefault(_getRawTagJs);
var _objectToStringJs = require("./_objectToString.js");
var _objectToStringJsDefault = parcelHelpers.interopDefault(_objectToStringJs);
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTagJsDefault.default)(value) : (0, _objectToStringJsDefault.default)(value);
}
exports.default = baseGetTag;

},{"./_Symbol.js":"jx216","./_getRawTag.js":"ijXom","./_objectToString.js":"fTkTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijXom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
exports.default = getRawTag;

},{"./_Symbol.js":"jx216","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTkTn":[function(require,module,exports) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
exports.default = objectToString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iad76":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObjectLike(value) {
    return value != null && typeof value == "object";
}
exports.default = isObjectLike;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPoTx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCaseFirstJs = require("./_createCaseFirst.js");
var _createCaseFirstJsDefault = parcelHelpers.interopDefault(_createCaseFirstJs);
/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */ var upperFirst = (0, _createCaseFirstJsDefault.default)("toUpperCase");
exports.default = upperFirst;

},{"./_createCaseFirst.js":"9xCNz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xCNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _hasUnicodeJs = require("./_hasUnicode.js");
var _hasUnicodeJsDefault = parcelHelpers.interopDefault(_hasUnicodeJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */ function createCaseFirst(methodName) {
    return function(string) {
        string = (0, _toStringJsDefault.default)(string);
        var strSymbols = (0, _hasUnicodeJsDefault.default)(string) ? (0, _stringToArrayJsDefault.default)(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? (0, _castSliceJsDefault.default)(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
exports.default = createCaseFirst;

},{"./_castSlice.js":"iOeHV","./_hasUnicode.js":"1jTtL","./_stringToArray.js":"1bAUZ","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iOeHV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseSliceJs = require("./_baseSlice.js");
var _baseSliceJsDefault = parcelHelpers.interopDefault(_baseSliceJs);
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : (0, _baseSliceJsDefault.default)(array, start, end);
}
exports.default = castSlice;

},{"./_baseSlice.js":"aUyi1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aUyi1":[function(require,module,exports) {
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length)result[index] = array[index + start];
    return result;
}
exports.default = baseSlice;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jTtL":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsZWJ = "\\u200d";
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
    return reHasUnicode.test(string);
}
exports.default = hasUnicode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bAUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asciiToArrayJs = require("./_asciiToArray.js");
var _asciiToArrayJsDefault = parcelHelpers.interopDefault(_asciiToArrayJs);
var _hasUnicodeJs = require("./_hasUnicode.js");
var _hasUnicodeJsDefault = parcelHelpers.interopDefault(_hasUnicodeJs);
var _unicodeToArrayJs = require("./_unicodeToArray.js");
var _unicodeToArrayJsDefault = parcelHelpers.interopDefault(_unicodeToArrayJs);
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
    return (0, _hasUnicodeJsDefault.default)(string) ? (0, _unicodeToArrayJsDefault.default)(string) : (0, _asciiToArrayJsDefault.default)(string);
}
exports.default = stringToArray;

},{"./_asciiToArray.js":"56Ehw","./_hasUnicode.js":"1jTtL","./_unicodeToArray.js":"dOs58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56Ehw":[function(require,module,exports) {
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asciiToArray(string) {
    return string.split("");
}
exports.default = asciiToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dOs58":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\ud83c[\udffb-\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
    rsNonAstral + rsCombo + "?",
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}
exports.default = unicodeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ScHH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayReduceJs = require("./_arrayReduce.js");
var _arrayReduceJsDefault = parcelHelpers.interopDefault(_arrayReduceJs);
var _deburrJs = require("./deburr.js");
var _deburrJsDefault = parcelHelpers.interopDefault(_deburrJs);
var _wordsJs = require("./words.js");
var _wordsJsDefault = parcelHelpers.interopDefault(_wordsJs);
/** Used to compose unicode capture groups. */ var rsApos = "['’]";
/** Used to match apostrophes. */ var reApos = RegExp(rsApos, "g");
/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */ function createCompounder(callback) {
    return function(string) {
        return (0, _arrayReduceJsDefault.default)((0, _wordsJsDefault.default)((0, _deburrJsDefault.default)(string).replace(reApos, "")), callback, "");
    };
}
exports.default = createCompounder;

},{"./_arrayReduce.js":"4xOgs","./deburr.js":"1gWKb","./words.js":"kDdrN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xOgs":[function(require,module,exports) {
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array == null ? 0 : array.length;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
exports.default = arrayReduce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1gWKb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _deburrLetterJs = require("./_deburrLetter.js");
var _deburrLetterJsDefault = parcelHelpers.interopDefault(_deburrLetterJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used to match Latin Unicode letters (excluding mathematical operators). */ var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
/** Used to compose unicode character classes. */ var rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
/** Used to compose unicode capture groups. */ var rsCombo = "[" + rsComboRange + "]";
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */ var reComboMark = RegExp(rsCombo, "g");
/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */ function deburr(string) {
    string = (0, _toStringJsDefault.default)(string);
    return string && string.replace(reLatin, (0, _deburrLetterJsDefault.default)).replace(reComboMark, "");
}
exports.default = deburr;

},{"./_deburrLetter.js":"eQfkX","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQfkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePropertyOfJs = require("./_basePropertyOf.js");
var _basePropertyOfJsDefault = parcelHelpers.interopDefault(_basePropertyOfJs);
/** Used to map Latin Unicode letters to basic Latin letters. */ var deburredLetters = {
    // Latin-1 Supplement block.
    "\xc0": "A",
    "\xc1": "A",
    "\xc2": "A",
    "\xc3": "A",
    "\xc4": "A",
    "\xc5": "A",
    "\xe0": "a",
    "\xe1": "a",
    "\xe2": "a",
    "\xe3": "a",
    "\xe4": "a",
    "\xe5": "a",
    "\xc7": "C",
    "\xe7": "c",
    "\xd0": "D",
    "\xf0": "d",
    "\xc8": "E",
    "\xc9": "E",
    "\xca": "E",
    "\xcb": "E",
    "\xe8": "e",
    "\xe9": "e",
    "\xea": "e",
    "\xeb": "e",
    "\xcc": "I",
    "\xcd": "I",
    "\xce": "I",
    "\xcf": "I",
    "\xec": "i",
    "\xed": "i",
    "\xee": "i",
    "\xef": "i",
    "\xd1": "N",
    "\xf1": "n",
    "\xd2": "O",
    "\xd3": "O",
    "\xd4": "O",
    "\xd5": "O",
    "\xd6": "O",
    "\xd8": "O",
    "\xf2": "o",
    "\xf3": "o",
    "\xf4": "o",
    "\xf5": "o",
    "\xf6": "o",
    "\xf8": "o",
    "\xd9": "U",
    "\xda": "U",
    "\xdb": "U",
    "\xdc": "U",
    "\xf9": "u",
    "\xfa": "u",
    "\xfb": "u",
    "\xfc": "u",
    "\xdd": "Y",
    "\xfd": "y",
    "\xff": "y",
    "\xc6": "Ae",
    "\xe6": "ae",
    "\xde": "Th",
    "\xfe": "th",
    "\xdf": "ss",
    // Latin Extended-A block.
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "s"
};
/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */ var deburrLetter = (0, _basePropertyOfJsDefault.default)(deburredLetters);
exports.default = deburrLetter;

},{"./_basePropertyOf.js":"bfcic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfcic":[function(require,module,exports) {
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function basePropertyOf(object) {
    return function(key) {
        return object == null ? undefined : object[key];
    };
}
exports.default = basePropertyOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kDdrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asciiWordsJs = require("./_asciiWords.js");
var _asciiWordsJsDefault = parcelHelpers.interopDefault(_asciiWordsJs);
var _hasUnicodeWordJs = require("./_hasUnicodeWord.js");
var _hasUnicodeWordJsDefault = parcelHelpers.interopDefault(_hasUnicodeWordJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _unicodeWordsJs = require("./_unicodeWords.js");
var _unicodeWordsJsDefault = parcelHelpers.interopDefault(_unicodeWordsJs);
/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */ function words(string, pattern, guard) {
    string = (0, _toStringJsDefault.default)(string);
    pattern = guard ? undefined : pattern;
    if (pattern === undefined) return (0, _hasUnicodeWordJsDefault.default)(string) ? (0, _unicodeWordsJsDefault.default)(string) : (0, _asciiWordsJsDefault.default)(string);
    return string.match(pattern) || [];
}
exports.default = words;

},{"./_asciiWords.js":"6cihw","./_hasUnicodeWord.js":"exUVe","./toString.js":"hF0LJ","./_unicodeWords.js":"dK1E9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cihw":[function(require,module,exports) {
/** Used to match words composed of alphanumeric characters. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function asciiWords(string) {
    return string.match(reAsciiWord) || [];
}
exports.default = asciiWords;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exUVe":[function(require,module,exports) {
/** Used to detect strings that need a more robust regexp to match words. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */ function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
}
exports.default = hasUnicodeWord;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dK1E9":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */ var rsApos = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\ud83c[\udffb-\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [
    rsDingbat,
    rsRegional,
    rsSurrPair
].join("|") + ")" + rsSeq;
/** Used to match complex or compound words. */ var reUnicodeWord = RegExp([
    rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [
        rsBreak,
        rsUpper,
        "$"
    ].join("|") + ")",
    rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [
        rsBreak,
        rsUpper + rsMiscLower,
        "$"
    ].join("|") + ")",
    rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
    rsUpper + "+" + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
].join("|"), "g");
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */ function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
}
exports.default = unicodeWords;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gk9ey":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseClampJs = require("./_baseClamp.js");
var _baseClampJsDefault = parcelHelpers.interopDefault(_baseClampJs);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */ function endsWith(string, target, position) {
    string = (0, _toStringJsDefault.default)(string);
    target = (0, _baseToStringJsDefault.default)(target);
    var length = string.length;
    position = position === undefined ? length : (0, _baseClampJsDefault.default)((0, _toIntegerJsDefault.default)(position), 0, length);
    var end = position;
    position -= target.length;
    return position >= 0 && string.slice(position, end) == target;
}
exports.default = endsWith;

},{"./_baseClamp.js":"3V7wr","./_baseToString.js":"fQ5ds","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3V7wr":[function(require,module,exports) {
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseClamp(number, lower, upper) {
    if (number === number) {
        if (upper !== undefined) number = number <= upper ? number : upper;
        if (lower !== undefined) number = number >= lower ? number : lower;
    }
    return number;
}
exports.default = baseClamp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tdUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFiniteJs = require("./toFinite.js");
var _toFiniteJsDefault = parcelHelpers.interopDefault(_toFiniteJs);
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = (0, _toFiniteJsDefault.default)(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
exports.default = toInteger;

},{"./toFinite.js":"FJR8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FJR8i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toNumberJs = require("./toNumber.js");
var _toNumberJsDefault = parcelHelpers.interopDefault(_toNumberJs);
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) return value === 0 ? value : 0;
    value = (0, _toNumberJsDefault.default)(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
exports.default = toFinite;

},{"./toNumber.js":"4CrK2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CrK2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseTrimJs = require("./_baseTrim.js");
var _baseTrimJsDefault = parcelHelpers.interopDefault(_baseTrimJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isSymbolJs = require("./isSymbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if ((0, _isSymbolJsDefault.default)(value)) return NAN;
    if ((0, _isObjectJsDefault.default)(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = (0, _isObjectJsDefault.default)(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = (0, _baseTrimJsDefault.default)(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
exports.default = toNumber;

},{"./_baseTrim.js":"4X9xl","./isObject.js":"dHhyW","./isSymbol.js":"gCyRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4X9xl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _trimmedEndIndexJs = require("./_trimmedEndIndex.js");
var _trimmedEndIndexJsDefault = parcelHelpers.interopDefault(_trimmedEndIndexJs);
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, (0, _trimmedEndIndexJsDefault.default)(string) + 1).replace(reTrimStart, "") : string;
}
exports.default = baseTrim;

},{"./_trimmedEndIndex.js":"lXShQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXShQ":[function(require,module,exports) {
/** Used to match a single whitespace character. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
exports.default = trimmedEndIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHhyW":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jewOa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _escapeHtmlCharJs = require("./_escapeHtmlChar.js");
var _escapeHtmlCharJsDefault = parcelHelpers.interopDefault(_escapeHtmlCharJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used to match HTML entities and HTML characters. */ var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */ function escape(string) {
    string = (0, _toStringJsDefault.default)(string);
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, (0, _escapeHtmlCharJsDefault.default)) : string;
}
exports.default = escape;

},{"./_escapeHtmlChar.js":"76eJN","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76eJN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePropertyOfJs = require("./_basePropertyOf.js");
var _basePropertyOfJsDefault = parcelHelpers.interopDefault(_basePropertyOfJs);
/** Used to map characters to HTML entities. */ var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};
/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */ var escapeHtmlChar = (0, _basePropertyOfJsDefault.default)(htmlEscapes);
exports.default = escapeHtmlChar;

},{"./_basePropertyOf.js":"bfcic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9N2xu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */ function escapeRegExp(string) {
    string = (0, _toStringJsDefault.default)(string);
    return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
}
exports.default = escapeRegExp;

},{"./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iRluj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCompounderJs = require("./_createCompounder.js");
var _createCompounderJsDefault = parcelHelpers.interopDefault(_createCompounderJs);
/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */ var kebabCase = (0, _createCompounderJsDefault.default)(function(result, word, index) {
    return result + (index ? "-" : "") + word.toLowerCase();
});
exports.default = kebabCase;

},{"./_createCompounder.js":"4ScHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDilW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCompounderJs = require("./_createCompounder.js");
var _createCompounderJsDefault = parcelHelpers.interopDefault(_createCompounderJs);
/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.lowerCase('--Foo-Bar--');
 * // => 'foo bar'
 *
 * _.lowerCase('fooBar');
 * // => 'foo bar'
 *
 * _.lowerCase('__FOO_BAR__');
 * // => 'foo bar'
 */ var lowerCase = (0, _createCompounderJsDefault.default)(function(result, word, index) {
    return result + (index ? " " : "") + word.toLowerCase();
});
exports.default = lowerCase;

},{"./_createCompounder.js":"4ScHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEIKy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCaseFirstJs = require("./_createCaseFirst.js");
var _createCaseFirstJsDefault = parcelHelpers.interopDefault(_createCaseFirstJs);
/**
 * Converts the first character of `string` to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.lowerFirst('Fred');
 * // => 'fred'
 *
 * _.lowerFirst('FRED');
 * // => 'fRED'
 */ var lowerFirst = (0, _createCaseFirstJsDefault.default)("toLowerCase");
exports.default = lowerFirst;

},{"./_createCaseFirst.js":"9xCNz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWnaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createPaddingJs = require("./_createPadding.js");
var _createPaddingJsDefault = parcelHelpers.interopDefault(_createPaddingJs);
var _stringSizeJs = require("./_stringSize.js");
var _stringSizeJsDefault = parcelHelpers.interopDefault(_stringSizeJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeFloor = Math.floor;
/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.pad('abc', 8);
 * // => '  abc   '
 *
 * _.pad('abc', 8, '_-');
 * // => '_-abc_-_'
 *
 * _.pad('abc', 3);
 * // => 'abc'
 */ function pad(string, length, chars) {
    string = (0, _toStringJsDefault.default)(string);
    length = (0, _toIntegerJsDefault.default)(length);
    var strLength = length ? (0, _stringSizeJsDefault.default)(string) : 0;
    if (!length || strLength >= length) return string;
    var mid = (length - strLength) / 2;
    return (0, _createPaddingJsDefault.default)(nativeFloor(mid), chars) + string + (0, _createPaddingJsDefault.default)(nativeCeil(mid), chars);
}
exports.default = pad;

},{"./_createPadding.js":"iWu8O","./_stringSize.js":"blHdy","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWu8O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRepeatJs = require("./_baseRepeat.js");
var _baseRepeatJsDefault = parcelHelpers.interopDefault(_baseRepeatJs);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _hasUnicodeJs = require("./_hasUnicode.js");
var _hasUnicodeJsDefault = parcelHelpers.interopDefault(_hasUnicodeJs);
var _stringSizeJs = require("./_stringSize.js");
var _stringSizeJsDefault = parcelHelpers.interopDefault(_stringSizeJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil;
/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */ function createPadding(length, chars) {
    chars = chars === undefined ? " " : (0, _baseToStringJsDefault.default)(chars);
    var charsLength = chars.length;
    if (charsLength < 2) return charsLength ? (0, _baseRepeatJsDefault.default)(chars, length) : chars;
    var result = (0, _baseRepeatJsDefault.default)(chars, nativeCeil(length / (0, _stringSizeJsDefault.default)(chars)));
    return (0, _hasUnicodeJsDefault.default)(chars) ? (0, _castSliceJsDefault.default)((0, _stringToArrayJsDefault.default)(result), 0, length).join("") : result.slice(0, length);
}
exports.default = createPadding;

},{"./_baseRepeat.js":"6nL7r","./_baseToString.js":"fQ5ds","./_castSlice.js":"iOeHV","./_hasUnicode.js":"1jTtL","./_stringSize.js":"blHdy","./_stringToArray.js":"1bAUZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nL7r":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var MAX_SAFE_INTEGER = 9007199254740991;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeFloor = Math.floor;
/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */ function baseRepeat(string, n) {
    var result = "";
    if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
    // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
    do {
        if (n % 2) result += string;
        n = nativeFloor(n / 2);
        if (n) string += string;
    }while (n);
    return result;
}
exports.default = baseRepeat;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blHdy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asciiSizeJs = require("./_asciiSize.js");
var _asciiSizeJsDefault = parcelHelpers.interopDefault(_asciiSizeJs);
var _hasUnicodeJs = require("./_hasUnicode.js");
var _hasUnicodeJsDefault = parcelHelpers.interopDefault(_hasUnicodeJs);
var _unicodeSizeJs = require("./_unicodeSize.js");
var _unicodeSizeJsDefault = parcelHelpers.interopDefault(_unicodeSizeJs);
/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */ function stringSize(string) {
    return (0, _hasUnicodeJsDefault.default)(string) ? (0, _unicodeSizeJsDefault.default)(string) : (0, _asciiSizeJsDefault.default)(string);
}
exports.default = stringSize;

},{"./_asciiSize.js":"isWYX","./_hasUnicode.js":"1jTtL","./_unicodeSize.js":"iPMpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isWYX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePropertyJs = require("./_baseProperty.js");
var _basePropertyJsDefault = parcelHelpers.interopDefault(_basePropertyJs);
/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */ var asciiSize = (0, _basePropertyJsDefault.default)("length");
exports.default = asciiSize;

},{"./_baseProperty.js":"gAjZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAjZk":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
exports.default = baseProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPMpd":[function(require,module,exports) {
/** Used to compose unicode character classes. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var rsAstralRange = "\ud800-\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */ var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\ud83c[\udffb-\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\ud83c[\udde6-\uddff]){2}", rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]", rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */ var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
    rsNonAstral,
    rsRegional,
    rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
    rsNonAstral + rsCombo + "?",
    rsCombo,
    rsRegional,
    rsSurrPair,
    rsAstral
].join("|") + ")";
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */ function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while(reUnicode.test(string))++result;
    return result;
}
exports.default = unicodeSize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awWS6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createPaddingJs = require("./_createPadding.js");
var _createPaddingJsDefault = parcelHelpers.interopDefault(_createPaddingJs);
var _stringSizeJs = require("./_stringSize.js");
var _stringSizeJsDefault = parcelHelpers.interopDefault(_stringSizeJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padEnd('abc', 6);
 * // => 'abc   '
 *
 * _.padEnd('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * _.padEnd('abc', 3);
 * // => 'abc'
 */ function padEnd(string, length, chars) {
    string = (0, _toStringJsDefault.default)(string);
    length = (0, _toIntegerJsDefault.default)(length);
    var strLength = length ? (0, _stringSizeJsDefault.default)(string) : 0;
    return length && strLength < length ? string + (0, _createPaddingJsDefault.default)(length - strLength, chars) : string;
}
exports.default = padEnd;

},{"./_createPadding.js":"iWu8O","./_stringSize.js":"blHdy","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gs82C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createPaddingJs = require("./_createPadding.js");
var _createPaddingJsDefault = parcelHelpers.interopDefault(_createPaddingJs);
var _stringSizeJs = require("./_stringSize.js");
var _stringSizeJsDefault = parcelHelpers.interopDefault(_stringSizeJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */ function padStart(string, length, chars) {
    string = (0, _toStringJsDefault.default)(string);
    length = (0, _toIntegerJsDefault.default)(length);
    var strLength = length ? (0, _stringSizeJsDefault.default)(string) : 0;
    return length && strLength < length ? (0, _createPaddingJsDefault.default)(length - strLength, chars) + string : string;
}
exports.default = padStart;

},{"./_createPadding.js":"iWu8O","./_stringSize.js":"blHdy","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6RfGD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeParseInt = (0, _rootJsDefault.default).parseInt;
/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
 * hexadecimal, in which case a `radix` of `16` is used.
 *
 * **Note:** This method aligns with the
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category String
 * @param {string} string The string to convert.
 * @param {number} [radix=10] The radix to interpret `value` by.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.parseInt('08');
 * // => 8
 *
 * _.map(['6', '08', '10'], _.parseInt);
 * // => [6, 8, 10]
 */ function parseInt(string, radix, guard) {
    if (guard || radix == null) radix = 0;
    else if (radix) radix = +radix;
    return nativeParseInt((0, _toStringJsDefault.default)(string).replace(reTrimStart, ""), radix || 0);
}
exports.default = parseInt;

},{"./_root.js":"8yvCA","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bGyt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRepeatJs = require("./_baseRepeat.js");
var _baseRepeatJsDefault = parcelHelpers.interopDefault(_baseRepeatJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Repeats the given string `n` times.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * _.repeat('*', 3);
 * // => '***'
 *
 * _.repeat('abc', 2);
 * // => 'abcabc'
 *
 * _.repeat('abc', 0);
 * // => ''
 */ function repeat(string, n, guard) {
    if (guard ? (0, _isIterateeCallJsDefault.default)(string, n, guard) : n === undefined) n = 1;
    else n = (0, _toIntegerJsDefault.default)(n);
    return (0, _baseRepeatJsDefault.default)((0, _toStringJsDefault.default)(string), n);
}
exports.default = repeat;

},{"./_baseRepeat.js":"6nL7r","./_isIterateeCall.js":"1jM1r","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jM1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!(0, _isObjectJsDefault.default)(object)) return false;
    var type = typeof index;
    if (type == "number" ? (0, _isArrayLikeJsDefault.default)(object) && (0, _isIndexJsDefault.default)(index, object.length) : type == "string" && index in object) return (0, _eqJsDefault.default)(object[index], value);
    return false;
}
exports.default = isIterateeCall;

},{"./eq.js":"7el3s","./isArrayLike.js":"8SdiO","./_isIndex.js":"5DS1K","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7el3s":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function eq(value, other) {
    return value === other || value !== value && other !== other;
}
exports.default = eq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SdiO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isLengthJs = require("./isLength.js");
var _isLengthJsDefault = parcelHelpers.interopDefault(_isLengthJs);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && (0, _isLengthJsDefault.default)(value.length) && !(0, _isFunctionJsDefault.default)(value);
}
exports.default = isArrayLike;

},{"./isFunction.js":"e5kis","./isLength.js":"bItM0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5kis":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!(0, _isObjectJsDefault.default)(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, _baseGetTagJsDefault.default)(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
exports.default = isFunction;

},{"./_baseGetTag.js":"gVDfP","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bItM0":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
exports.default = isLength;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DS1K":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
exports.default = isIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gEhng":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * _.replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */ function replace() {
    var args = arguments, string = (0, _toStringJsDefault.default)(args[0]);
    return args.length < 3 ? string : string.replace(args[1], args[2]);
}
exports.default = replace;

},{"./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhyXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCompounderJs = require("./_createCompounder.js");
var _createCompounderJsDefault = parcelHelpers.interopDefault(_createCompounderJs);
/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */ var snakeCase = (0, _createCompounderJsDefault.default)(function(result, word, index) {
    return result + (index ? "_" : "") + word.toLowerCase();
});
exports.default = snakeCase;

},{"./_createCompounder.js":"4ScHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Daxt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _hasUnicodeJs = require("./_hasUnicode.js");
var _hasUnicodeJsDefault = parcelHelpers.interopDefault(_hasUnicodeJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
var _isRegExpJs = require("./isRegExp.js");
var _isRegExpJsDefault = parcelHelpers.interopDefault(_isRegExpJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * _.split('a-b-c', '-', 2);
 * // => ['a', 'b']
 */ function split(string, separator, limit) {
    if (limit && typeof limit != "number" && (0, _isIterateeCallJsDefault.default)(string, separator, limit)) separator = limit = undefined;
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) return [];
    string = (0, _toStringJsDefault.default)(string);
    if (string && (typeof separator == "string" || separator != null && !(0, _isRegExpJsDefault.default)(separator))) {
        separator = (0, _baseToStringJsDefault.default)(separator);
        if (!separator && (0, _hasUnicodeJsDefault.default)(string)) return (0, _castSliceJsDefault.default)((0, _stringToArrayJsDefault.default)(string), 0, limit);
    }
    return string.split(separator, limit);
}
exports.default = split;

},{"./_baseToString.js":"fQ5ds","./_castSlice.js":"iOeHV","./_hasUnicode.js":"1jTtL","./_isIterateeCall.js":"1jM1r","./isRegExp.js":"1SK3N","./_stringToArray.js":"1bAUZ","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1SK3N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsRegExpJs = require("./_baseIsRegExp.js");
var _baseIsRegExpJsDefault = parcelHelpers.interopDefault(_baseIsRegExpJs);
var _baseUnaryJs = require("./_baseUnary.js");
var _baseUnaryJsDefault = parcelHelpers.interopDefault(_baseUnaryJs);
var _nodeUtilJs = require("./_nodeUtil.js");
var _nodeUtilJsDefault = parcelHelpers.interopDefault(_nodeUtilJs);
/* Node.js helper references. */ var nodeIsRegExp = (0, _nodeUtilJsDefault.default) && (0, _nodeUtilJsDefault.default).isRegExp;
/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */ var isRegExp = nodeIsRegExp ? (0, _baseUnaryJsDefault.default)(nodeIsRegExp) : (0, _baseIsRegExpJsDefault.default);
exports.default = isRegExp;

},{"./_baseIsRegExp.js":"eqQTi","./_baseUnary.js":"jBUGV","./_nodeUtil.js":"cxU0K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqQTi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var regexpTag = "[object RegExp]";
/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */ function baseIsRegExp(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _baseGetTagJsDefault.default)(value) == regexpTag;
}
exports.default = baseIsRegExp;

},{"./_baseGetTag.js":"gVDfP","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBUGV":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
exports.default = baseUnary;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxU0K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _freeGlobalJs = require("./_freeGlobal.js");
var _freeGlobalJsDefault = parcelHelpers.interopDefault(_freeGlobalJs);
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && (0, _freeGlobalJsDefault.default).process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
exports.default = nodeUtil;

},{"./_freeGlobal.js":"98hMd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kavg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCompounderJs = require("./_createCompounder.js");
var _createCompounderJsDefault = parcelHelpers.interopDefault(_createCompounderJs);
var _upperFirstJs = require("./upperFirst.js");
var _upperFirstJsDefault = parcelHelpers.interopDefault(_upperFirstJs);
/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */ var startCase = (0, _createCompounderJsDefault.default)(function(result, word, index) {
    return result + (index ? " " : "") + (0, _upperFirstJsDefault.default)(word);
});
exports.default = startCase;

},{"./_createCompounder.js":"4ScHH","./upperFirst.js":"gPoTx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72IsP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseClampJs = require("./_baseClamp.js");
var _baseClampJsDefault = parcelHelpers.interopDefault(_baseClampJs);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */ function startsWith(string, target, position) {
    string = (0, _toStringJsDefault.default)(string);
    position = position == null ? 0 : (0, _baseClampJsDefault.default)((0, _toIntegerJsDefault.default)(position), 0, string.length);
    target = (0, _baseToStringJsDefault.default)(target);
    return string.slice(position, position + target.length) == target;
}
exports.default = startsWith;

},{"./_baseClamp.js":"3V7wr","./_baseToString.js":"fQ5ds","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ckIj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignInWithJs = require("./assignInWith.js");
var _assignInWithJsDefault = parcelHelpers.interopDefault(_assignInWithJs);
var _attemptJs = require("./attempt.js");
var _attemptJsDefault = parcelHelpers.interopDefault(_attemptJs);
var _baseValuesJs = require("./_baseValues.js");
var _baseValuesJsDefault = parcelHelpers.interopDefault(_baseValuesJs);
var _customDefaultsAssignInJs = require("./_customDefaultsAssignIn.js");
var _customDefaultsAssignInJsDefault = parcelHelpers.interopDefault(_customDefaultsAssignInJs);
var _escapeStringCharJs = require("./_escapeStringChar.js");
var _escapeStringCharJsDefault = parcelHelpers.interopDefault(_escapeStringCharJs);
var _isErrorJs = require("./isError.js");
var _isErrorJsDefault = parcelHelpers.interopDefault(_isErrorJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _reInterpolateJs = require("./_reInterpolate.js");
var _reInterpolateJsDefault = parcelHelpers.interopDefault(_reInterpolateJs);
var _templateSettingsJs = require("./templateSettings.js");
var _templateSettingsJsDefault = parcelHelpers.interopDefault(_templateSettingsJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Error message constants. */ var INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
/** Used to match empty string literals in compiled template source. */ var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
/**
 * Used to validate the `validate` option in `_.template` variable.
 *
 * Forbids characters which could potentially change the meaning of the function argument definition:
 * - "()," (modification of function parameters)
 * - "=" (default value)
 * - "[]{}" (destructuring of function parameters)
 * - "/" (beginning of a comment)
 * - whitespace
 */ var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */ var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
/** Used to ensure capturing order of template delimiters. */ var reNoMatch = /($^)/;
/** Used to match unescaped characters in compiled string literals. */ var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */ function template(string, options, guard) {
    // Based on John Resig's `tmpl` implementation
    // (http://ejohn.org/blog/javascript-micro-templating/)
    // and Laura Doktorova's doT.js (https://github.com/olado/doT).
    var settings = (0, _templateSettingsJsDefault.default).imports._.templateSettings || (0, _templateSettingsJsDefault.default);
    if (guard && (0, _isIterateeCallJsDefault.default)(string, options, guard)) options = undefined;
    string = (0, _toStringJsDefault.default)(string);
    options = (0, _assignInWithJsDefault.default)({}, options, settings, (0, _customDefaultsAssignInJsDefault.default));
    var imports = (0, _assignInWithJsDefault.default)({}, options.imports, settings.imports, (0, _customDefaultsAssignInJsDefault.default)), importsKeys = (0, _keysJsDefault.default)(imports), importsValues = (0, _baseValuesJsDefault.default)(imports, importsKeys);
    var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
    // Compile the regexp to match each delimiter.
    var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === (0, _reInterpolateJsDefault.default) ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
    // Use a sourceURL for easier debugging.
    // The sourceURL gets injected into the source that's eval-ed, so be careful
    // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
    // and escape the comment, thus injecting code that gets evaled.
    var sourceURL = hasOwnProperty.call(options, "sourceURL") ? "//# sourceURL=" + (options.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);
        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, (0, _escapeStringCharJsDefault.default));
        // Replace delimiters with snippets.
        if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        index = offset + match.length;
        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
    });
    source += "';\n";
    // If `variable` is not specified wrap a with-statement around the generated
    // code to add the data object to the top of the scope chain.
    var variable = hasOwnProperty.call(options, "variable") && options.variable;
    if (!variable) source = "with (obj) {\n" + source + "\n}\n";
    else if (reForbiddenIdentifierChars.test(variable)) throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
    // Cleanup code by stripping empty strings.
    source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
    // Frame code as the function body.
    source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
    var result = (0, _attemptJsDefault.default)(function() {
        return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
    });
    // Provide the compiled function's source by its `toString` method or
    // the `source` property as a convenience for inlining compiled templates.
    result.source = source;
    if ((0, _isErrorJsDefault.default)(result)) throw result;
    return result;
}
exports.default = template;

},{"./assignInWith.js":"bvAnA","./attempt.js":"htctA","./_baseValues.js":"6sg61","./_customDefaultsAssignIn.js":"977Ol","./_escapeStringChar.js":"e4nRZ","./isError.js":"4sTrq","./_isIterateeCall.js":"1jM1r","./keys.js":"lbEZV","./_reInterpolate.js":"jeOed","./templateSettings.js":"7WtXU","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvAnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _copyObjectJs = require("./_copyObject.js");
var _copyObjectJsDefault = parcelHelpers.interopDefault(_copyObjectJs);
var _createAssignerJs = require("./_createAssigner.js");
var _createAssignerJsDefault = parcelHelpers.interopDefault(_createAssignerJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */ var assignInWith = (0, _createAssignerJsDefault.default)(function(object, source, srcIndex, customizer) {
    (0, _copyObjectJsDefault.default)(source, (0, _keysInJsDefault.default)(source), object, customizer);
});
exports.default = assignInWith;

},{"./_copyObject.js":"hBRv5","./_createAssigner.js":"ED1h3","./keysIn.js":"jms5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBRv5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assignValueJs = require("./_assignValue.js");
var _assignValueJsDefault = parcelHelpers.interopDefault(_assignValueJs);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) (0, _baseAssignValueJsDefault.default)(object, key, newValue);
        else (0, _assignValueJsDefault.default)(object, key, newValue);
    }
    return object;
}
exports.default = copyObject;

},{"./_assignValue.js":"lDCb2","./_baseAssignValue.js":"7kEZ2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDCb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseAssignValueJs = require("./_baseAssignValue.js");
var _baseAssignValueJsDefault = parcelHelpers.interopDefault(_baseAssignValueJs);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && (0, _eqJsDefault.default)(objValue, value)) || value === undefined && !(key in object)) (0, _baseAssignValueJsDefault.default)(object, key, value);
}
exports.default = assignValue;

},{"./_baseAssignValue.js":"7kEZ2","./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kEZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyJs = require("./_defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == "__proto__" && (0, _definePropertyJsDefault.default)) (0, _definePropertyJsDefault.default)(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
    });
    else object[key] = value;
}
exports.default = baseAssignValue;

},{"./_defineProperty.js":"8u8dH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8u8dH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var defineProperty = function() {
    try {
        var func = (0, _getNativeJsDefault.default)(Object, "defineProperty");
        func({}, "", {});
        return func;
    } catch (e) {}
}();
exports.default = defineProperty;

},{"./_getNative.js":"bQrQL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQrQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsNativeJs = require("./_baseIsNative.js");
var _baseIsNativeJsDefault = parcelHelpers.interopDefault(_baseIsNativeJs);
var _getValueJs = require("./_getValue.js");
var _getValueJsDefault = parcelHelpers.interopDefault(_getValueJs);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = (0, _getValueJsDefault.default)(object, key);
    return (0, _baseIsNativeJsDefault.default)(value) ? value : undefined;
}
exports.default = getNative;

},{"./_baseIsNative.js":"eZuBv","./_getValue.js":"dHb8j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZuBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isMaskedJs = require("./_isMasked.js");
var _isMaskedJsDefault = parcelHelpers.interopDefault(_isMaskedJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _toSourceJs = require("./_toSource.js");
var _toSourceJsDefault = parcelHelpers.interopDefault(_toSourceJs);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!(0, _isObjectJsDefault.default)(value) || (0, _isMaskedJsDefault.default)(value)) return false;
    var pattern = (0, _isFunctionJsDefault.default)(value) ? reIsNative : reIsHostCtor;
    return pattern.test((0, _toSourceJsDefault.default)(value));
}
exports.default = baseIsNative;

},{"./isFunction.js":"e5kis","./_isMasked.js":"8rXmg","./isObject.js":"dHhyW","./_toSource.js":"4wd66","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rXmg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJsDataJs = require("./_coreJsData.js");
var _coreJsDataJsDefault = parcelHelpers.interopDefault(_coreJsDataJs);
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec((0, _coreJsDataJsDefault.default) && (0, _coreJsDataJsDefault.default).keys && (0, _coreJsDataJsDefault.default).keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
exports.default = isMasked;

},{"./_coreJsData.js":"jb15d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jb15d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Used to detect overreaching core-js shims. */ var coreJsData = (0, _rootJsDefault.default)["__core-js_shared__"];
exports.default = coreJsData;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wd66":[function(require,module,exports) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
exports.default = toSource;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHb8j":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getValue(object, key) {
    return object == null ? undefined : object[key];
}
exports.default = getValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ED1h3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _isIterateeCallJs = require("./_isIterateeCall.js");
var _isIterateeCallJsDefault = parcelHelpers.interopDefault(_isIterateeCallJs);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */ function createAssigner(assigner) {
    return (0, _baseRestJsDefault.default)(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
        if (guard && (0, _isIterateeCallJsDefault.default)(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined : customizer;
            length = 1;
        }
        object = Object(object);
        while(++index < length){
            var source = sources[index];
            if (source) assigner(object, source, index, customizer);
        }
        return object;
    });
}
exports.default = createAssigner;

},{"./_baseRest.js":"1fKJX","./_isIterateeCall.js":"1jM1r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1fKJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _overRestJs = require("./_overRest.js");
var _overRestJsDefault = parcelHelpers.interopDefault(_overRestJs);
var _setToStringJs = require("./_setToString.js");
var _setToStringJsDefault = parcelHelpers.interopDefault(_setToStringJs);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return (0, _setToStringJsDefault.default)((0, _overRestJsDefault.default)(func, start, (0, _identityJsDefault.default)), func + "");
}
exports.default = baseRest;

},{"./identity.js":"1Y0KA","./_overRest.js":"d1Uaz","./_setToString.js":"3GXSg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Y0KA":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function identity(value) {
    return value;
}
exports.default = identity;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1Uaz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _applyJs = require("./_apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return (0, _applyJsDefault.default)(func, this, otherArgs);
    };
}
exports.default = overRest;

},{"./_apply.js":"kqJ3H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqJ3H":[function(require,module,exports) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
exports.default = apply;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GXSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseSetToStringJs = require("./_baseSetToString.js");
var _baseSetToStringJsDefault = parcelHelpers.interopDefault(_baseSetToStringJs);
var _shortOutJs = require("./_shortOut.js");
var _shortOutJsDefault = parcelHelpers.interopDefault(_shortOutJs);
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = (0, _shortOutJsDefault.default)((0, _baseSetToStringJsDefault.default));
exports.default = setToString;

},{"./_baseSetToString.js":"lc4dY","./_shortOut.js":"dmiNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lc4dY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _definePropertyJs = require("./_defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !(0, _definePropertyJsDefault.default) ? (0, _identityJsDefault.default) : function(func, string) {
    return (0, _definePropertyJsDefault.default)(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": (0, _constantJsDefault.default)(string),
        "writable": true
    });
};
exports.default = baseSetToString;

},{"./constant.js":"a5s7V","./_defineProperty.js":"8u8dH","./identity.js":"1Y0KA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5s7V":[function(require,module,exports) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constant(value) {
    return function() {
        return value;
    };
}
exports.default = constant;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmiNi":[function(require,module,exports) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
exports.default = shortOut;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jms5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeKeysJs = require("./_arrayLikeKeys.js");
var _arrayLikeKeysJsDefault = parcelHelpers.interopDefault(_arrayLikeKeysJs);
var _baseKeysInJs = require("./_baseKeysIn.js");
var _baseKeysInJsDefault = parcelHelpers.interopDefault(_baseKeysInJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return (0, _isArrayLikeJsDefault.default)(object) ? (0, _arrayLikeKeysJsDefault.default)(object, true) : (0, _baseKeysInJsDefault.default)(object);
}
exports.default = keysIn;

},{"./_arrayLikeKeys.js":"b4sHy","./_baseKeysIn.js":"cvYFp","./isArrayLike.js":"8SdiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b4sHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseTimesJs = require("./_baseTimes.js");
var _baseTimesJsDefault = parcelHelpers.interopDefault(_baseTimesJs);
var _isArgumentsJs = require("./isArguments.js");
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var _isArrayJs = require("./isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBufferJs = require("./isBuffer.js");
var _isBufferJsDefault = parcelHelpers.interopDefault(_isBufferJs);
var _isIndexJs = require("./_isIndex.js");
var _isIndexJsDefault = parcelHelpers.interopDefault(_isIndexJs);
var _isTypedArrayJs = require("./isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = (0, _isArrayJsDefault.default)(value), isArg = !isArr && (0, _isArgumentsJsDefault.default)(value), isBuff = !isArr && !isArg && (0, _isBufferJsDefault.default)(value), isType = !isArr && !isArg && !isBuff && (0, _isTypedArrayJsDefault.default)(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? (0, _baseTimesJsDefault.default)(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    (0, _isIndexJsDefault.default)(key, length)))) result.push(key);
    return result;
}
exports.default = arrayLikeKeys;

},{"./_baseTimes.js":"6yWeR","./isArguments.js":"9k91Y","./isArray.js":"ETPQ1","./isBuffer.js":"llpEE","./_isIndex.js":"5DS1K","./isTypedArray.js":"2LIMs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yWeR":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
exports.default = baseTimes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9k91Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsArgumentsJs = require("./_baseIsArguments.js");
var _baseIsArgumentsJsDefault = parcelHelpers.interopDefault(_baseIsArgumentsJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = (0, _baseIsArgumentsJsDefault.default)(function() {
    return arguments;
}()) ? (0, _baseIsArgumentsJsDefault.default) : function(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
exports.default = isArguments;

},{"./_baseIsArguments.js":"bnUuB","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnUuB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _baseGetTagJsDefault.default)(value) == argsTag;
}
exports.default = baseIsArguments;

},{"./_baseGetTag.js":"gVDfP","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llpEE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
var _stubFalseJs = require("./stubFalse.js");
var _stubFalseJsDefault = parcelHelpers.interopDefault(_stubFalseJs);
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? (0, _rootJsDefault.default).Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || (0, _stubFalseJsDefault.default);
exports.default = isBuffer;

},{"./_root.js":"8yvCA","./stubFalse.js":"fF5mf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fF5mf":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function stubFalse() {
    return false;
}
exports.default = stubFalse;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2LIMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsTypedArrayJs = require("./_baseIsTypedArray.js");
var _baseIsTypedArrayJsDefault = parcelHelpers.interopDefault(_baseIsTypedArrayJs);
var _baseUnaryJs = require("./_baseUnary.js");
var _baseUnaryJsDefault = parcelHelpers.interopDefault(_baseUnaryJs);
var _nodeUtilJs = require("./_nodeUtil.js");
var _nodeUtilJsDefault = parcelHelpers.interopDefault(_nodeUtilJs);
/* Node.js helper references. */ var nodeIsTypedArray = (0, _nodeUtilJsDefault.default) && (0, _nodeUtilJsDefault.default).isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? (0, _baseUnaryJsDefault.default)(nodeIsTypedArray) : (0, _baseIsTypedArrayJsDefault.default);
exports.default = isTypedArray;

},{"./_baseIsTypedArray.js":"jcEk3","./_baseUnary.js":"jBUGV","./_nodeUtil.js":"cxU0K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcEk3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isLengthJs = require("./isLength.js");
var _isLengthJsDefault = parcelHelpers.interopDefault(_isLengthJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return (0, _isObjectLikeJsDefault.default)(value) && (0, _isLengthJsDefault.default)(value.length) && !!typedArrayTags[(0, _baseGetTagJsDefault.default)(value)];
}
exports.default = baseIsTypedArray;

},{"./_baseGetTag.js":"gVDfP","./isLength.js":"bItM0","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvYFp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isPrototypeJs = require("./_isPrototype.js");
var _isPrototypeJsDefault = parcelHelpers.interopDefault(_isPrototypeJs);
var _nativeKeysInJs = require("./_nativeKeysIn.js");
var _nativeKeysInJsDefault = parcelHelpers.interopDefault(_nativeKeysInJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!(0, _isObjectJsDefault.default)(object)) return (0, _nativeKeysInJsDefault.default)(object);
    var isProto = (0, _isPrototypeJsDefault.default)(object), result = [];
    for(var key in object)if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
exports.default = baseKeysIn;

},{"./isObject.js":"dHhyW","./_isPrototype.js":"jOAyW","./_nativeKeysIn.js":"ciZAw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOAyW":[function(require,module,exports) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
exports.default = isPrototype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciZAw":[function(require,module,exports) {
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
exports.default = nativeKeysIn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"htctA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _applyJs = require("./_apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
var _baseRestJs = require("./_baseRest.js");
var _baseRestJsDefault = parcelHelpers.interopDefault(_baseRestJs);
var _isErrorJs = require("./isError.js");
var _isErrorJsDefault = parcelHelpers.interopDefault(_isErrorJs);
/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */ var attempt = (0, _baseRestJsDefault.default)(function(func, args) {
    try {
        return (0, _applyJsDefault.default)(func, undefined, args);
    } catch (e) {
        return (0, _isErrorJsDefault.default)(e) ? e : new Error(e);
    }
});
exports.default = attempt;

},{"./_apply.js":"kqJ3H","./_baseRest.js":"1fKJX","./isError.js":"4sTrq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sTrq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
var _isPlainObjectJs = require("./isPlainObject.js");
var _isPlainObjectJsDefault = parcelHelpers.interopDefault(_isPlainObjectJs);
/** `Object#toString` result references. */ var domExcTag = "[object DOMException]", errorTag = "[object Error]";
/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */ function isError(value) {
    if (!(0, _isObjectLikeJsDefault.default)(value)) return false;
    var tag = (0, _baseGetTagJsDefault.default)(value);
    return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !(0, _isPlainObjectJsDefault.default)(value);
}
exports.default = isError;

},{"./_baseGetTag.js":"gVDfP","./isObjectLike.js":"iad76","./isPlainObject.js":"dB5kc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB5kc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _getPrototypeJs = require("./_getPrototype.js");
var _getPrototypeJsDefault = parcelHelpers.interopDefault(_getPrototypeJs);
var _isObjectLikeJs = require("./isObjectLike.js");
var _isObjectLikeJsDefault = parcelHelpers.interopDefault(_isObjectLikeJs);
/** `Object#toString` result references. */ var objectTag = "[object Object]";
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!(0, _isObjectLikeJsDefault.default)(value) || (0, _baseGetTagJsDefault.default)(value) != objectTag) return false;
    var proto = (0, _getPrototypeJsDefault.default)(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
exports.default = isPlainObject;

},{"./_baseGetTag.js":"gVDfP","./_getPrototype.js":"b49GB","./isObjectLike.js":"iad76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b49GB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _overArgJs = require("./_overArg.js");
var _overArgJsDefault = parcelHelpers.interopDefault(_overArgJs);
/** Built-in value references. */ var getPrototype = (0, _overArgJsDefault.default)(Object.getPrototypeOf, Object);
exports.default = getPrototype;

},{"./_overArg.js":"lqvyN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqvyN":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
exports.default = overArg;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sg61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayMapJs = require("./_arrayMap.js");
var _arrayMapJsDefault = parcelHelpers.interopDefault(_arrayMapJs);
/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */ function baseValues(object, props) {
    return (0, _arrayMapJsDefault.default)(props, function(key) {
        return object[key];
    });
}
exports.default = baseValues;

},{"./_arrayMap.js":"gDCVM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"977Ol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */ function customDefaultsAssignIn(objValue, srcValue, key, object) {
    if (objValue === undefined || (0, _eqJsDefault.default)(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) return srcValue;
    return objValue;
}
exports.default = customDefaultsAssignIn;

},{"./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4nRZ":[function(require,module,exports) {
/** Used to escape characters for inclusion in compiled string literals. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var stringEscapes = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029"
};
/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */ function escapeStringChar(chr) {
    return "\\" + stringEscapes[chr];
}
exports.default = escapeStringChar;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbEZV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeKeysJs = require("./_arrayLikeKeys.js");
var _arrayLikeKeysJsDefault = parcelHelpers.interopDefault(_arrayLikeKeysJs);
var _baseKeysJs = require("./_baseKeys.js");
var _baseKeysJsDefault = parcelHelpers.interopDefault(_baseKeysJs);
var _isArrayLikeJs = require("./isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return (0, _isArrayLikeJsDefault.default)(object) ? (0, _arrayLikeKeysJsDefault.default)(object) : (0, _baseKeysJsDefault.default)(object);
}
exports.default = keys;

},{"./_arrayLikeKeys.js":"b4sHy","./_baseKeys.js":"7rx4g","./isArrayLike.js":"8SdiO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rx4g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isPrototypeJs = require("./_isPrototype.js");
var _isPrototypeJsDefault = parcelHelpers.interopDefault(_isPrototypeJs);
var _nativeKeysJs = require("./_nativeKeys.js");
var _nativeKeysJsDefault = parcelHelpers.interopDefault(_nativeKeysJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!(0, _isPrototypeJsDefault.default)(object)) return (0, _nativeKeysJsDefault.default)(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
exports.default = baseKeys;

},{"./_isPrototype.js":"jOAyW","./_nativeKeys.js":"4fIwW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fIwW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _overArgJs = require("./_overArg.js");
var _overArgJsDefault = parcelHelpers.interopDefault(_overArgJs);
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = (0, _overArgJsDefault.default)(Object.keys, Object);
exports.default = nativeKeys;

},{"./_overArg.js":"lqvyN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jeOed":[function(require,module,exports) {
/** Used to match template delimiters. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reInterpolate = /<%=([\s\S]+?)%>/g;
exports.default = reInterpolate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7WtXU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _escapeJs = require("./escape.js");
var _escapeJsDefault = parcelHelpers.interopDefault(_escapeJs);
var _reEscapeJs = require("./_reEscape.js");
var _reEscapeJsDefault = parcelHelpers.interopDefault(_reEscapeJs);
var _reEvaluateJs = require("./_reEvaluate.js");
var _reEvaluateJsDefault = parcelHelpers.interopDefault(_reEvaluateJs);
var _reInterpolateJs = require("./_reInterpolate.js");
var _reInterpolateJsDefault = parcelHelpers.interopDefault(_reInterpolateJs);
/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */ var templateSettings = {
    /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */ "escape": (0, _reEscapeJsDefault.default),
    /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */ "evaluate": (0, _reEvaluateJsDefault.default),
    /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */ "interpolate": (0, _reInterpolateJsDefault.default),
    /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */ "variable": "",
    /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */ "imports": {
        /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */ "_": {
            "escape": (0, _escapeJsDefault.default)
        }
    }
};
exports.default = templateSettings;

},{"./escape.js":"jewOa","./_reEscape.js":"6iOru","./_reEvaluate.js":"1LqKU","./_reInterpolate.js":"jeOed","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iOru":[function(require,module,exports) {
/** Used to match template delimiters. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reEscape = /<%-([\s\S]+?)%>/g;
exports.default = reEscape;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LqKU":[function(require,module,exports) {
/** Used to match template delimiters. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var reEvaluate = /<%([\s\S]+?)%>/g;
exports.default = reEvaluate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ENVt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */ function toLower(value) {
    return (0, _toStringJsDefault.default)(value).toLowerCase();
}
exports.default = toLower;

},{"./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHP21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Converts `string`, as a whole, to upper case just like
 * [String#toUpperCase](https://mdn.io/toUpperCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.toUpper('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * _.toUpper('fooBar');
 * // => 'FOOBAR'
 *
 * _.toUpper('__foo_bar__');
 * // => '__FOO_BAR__'
 */ function toUpper(value) {
    return (0, _toStringJsDefault.default)(value).toUpperCase();
}
exports.default = toUpper;

},{"./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beJxb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _baseTrimJs = require("./_baseTrim.js");
var _baseTrimJsDefault = parcelHelpers.interopDefault(_baseTrimJs);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _charsEndIndexJs = require("./_charsEndIndex.js");
var _charsEndIndexJsDefault = parcelHelpers.interopDefault(_charsEndIndexJs);
var _charsStartIndexJs = require("./_charsStartIndex.js");
var _charsStartIndexJsDefault = parcelHelpers.interopDefault(_charsStartIndexJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */ function trim(string, chars, guard) {
    string = (0, _toStringJsDefault.default)(string);
    if (string && (guard || chars === undefined)) return (0, _baseTrimJsDefault.default)(string);
    if (!string || !(chars = (0, _baseToStringJsDefault.default)(chars))) return string;
    var strSymbols = (0, _stringToArrayJsDefault.default)(string), chrSymbols = (0, _stringToArrayJsDefault.default)(chars), start = (0, _charsStartIndexJsDefault.default)(strSymbols, chrSymbols), end = (0, _charsEndIndexJsDefault.default)(strSymbols, chrSymbols) + 1;
    return (0, _castSliceJsDefault.default)(strSymbols, start, end).join("");
}
exports.default = trim;

},{"./_baseToString.js":"fQ5ds","./_baseTrim.js":"4X9xl","./_castSlice.js":"iOeHV","./_charsEndIndex.js":"cGXn0","./_charsStartIndex.js":"2iqx6","./_stringToArray.js":"1bAUZ","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGXn0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIndexOfJs = require("./_baseIndexOf.js");
var _baseIndexOfJsDefault = parcelHelpers.interopDefault(_baseIndexOfJs);
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */ function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;
    while(index-- && (0, _baseIndexOfJsDefault.default)(chrSymbols, strSymbols[index], 0) > -1);
    return index;
}
exports.default = charsEndIndex;

},{"./_baseIndexOf.js":"5Q55M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Q55M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseFindIndexJs = require("./_baseFindIndex.js");
var _baseFindIndexJsDefault = parcelHelpers.interopDefault(_baseFindIndexJs);
var _baseIsNaNJs = require("./_baseIsNaN.js");
var _baseIsNaNJsDefault = parcelHelpers.interopDefault(_baseIsNaNJs);
var _strictIndexOfJs = require("./_strictIndexOf.js");
var _strictIndexOfJsDefault = parcelHelpers.interopDefault(_strictIndexOfJs);
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    return value === value ? (0, _strictIndexOfJsDefault.default)(array, value, fromIndex) : (0, _baseFindIndexJsDefault.default)(array, (0, _baseIsNaNJsDefault.default), fromIndex);
}
exports.default = baseIndexOf;

},{"./_baseFindIndex.js":"12Lgh","./_baseIsNaN.js":"3FBze","./_strictIndexOf.js":"dm4sG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12Lgh":[function(require,module,exports) {
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) return index;
    }
    return -1;
}
exports.default = baseFindIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FBze":[function(require,module,exports) {
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function baseIsNaN(value) {
    return value !== value;
}
exports.default = baseIsNaN;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dm4sG":[function(require,module,exports) {
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) return index;
    }
    return -1;
}
exports.default = strictIndexOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2iqx6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIndexOfJs = require("./_baseIndexOf.js");
var _baseIndexOfJsDefault = parcelHelpers.interopDefault(_baseIndexOfJs);
/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */ function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1, length = strSymbols.length;
    while(++index < length && (0, _baseIndexOfJsDefault.default)(chrSymbols, strSymbols[index], 0) > -1);
    return index;
}
exports.default = charsStartIndex;

},{"./_baseIndexOf.js":"5Q55M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPcQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _charsEndIndexJs = require("./_charsEndIndex.js");
var _charsEndIndexJsDefault = parcelHelpers.interopDefault(_charsEndIndexJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _trimmedEndIndexJs = require("./_trimmedEndIndex.js");
var _trimmedEndIndexJsDefault = parcelHelpers.interopDefault(_trimmedEndIndexJs);
/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */ function trimEnd(string, chars, guard) {
    string = (0, _toStringJsDefault.default)(string);
    if (string && (guard || chars === undefined)) return string.slice(0, (0, _trimmedEndIndexJsDefault.default)(string) + 1);
    if (!string || !(chars = (0, _baseToStringJsDefault.default)(chars))) return string;
    var strSymbols = (0, _stringToArrayJsDefault.default)(string), end = (0, _charsEndIndexJsDefault.default)(strSymbols, (0, _stringToArrayJsDefault.default)(chars)) + 1;
    return (0, _castSliceJsDefault.default)(strSymbols, 0, end).join("");
}
exports.default = trimEnd;

},{"./_baseToString.js":"fQ5ds","./_castSlice.js":"iOeHV","./_charsEndIndex.js":"cGXn0","./_stringToArray.js":"1bAUZ","./toString.js":"hF0LJ","./_trimmedEndIndex.js":"lXShQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iM1JE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _charsStartIndexJs = require("./_charsStartIndex.js");
var _charsStartIndexJsDefault = parcelHelpers.interopDefault(_charsStartIndexJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimStart('  abc  ');
 * // => 'abc  '
 *
 * _.trimStart('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */ function trimStart(string, chars, guard) {
    string = (0, _toStringJsDefault.default)(string);
    if (string && (guard || chars === undefined)) return string.replace(reTrimStart, "");
    if (!string || !(chars = (0, _baseToStringJsDefault.default)(chars))) return string;
    var strSymbols = (0, _stringToArrayJsDefault.default)(string), start = (0, _charsStartIndexJsDefault.default)(strSymbols, (0, _stringToArrayJsDefault.default)(chars));
    return (0, _castSliceJsDefault.default)(strSymbols, start).join("");
}
exports.default = trimStart;

},{"./_baseToString.js":"fQ5ds","./_castSlice.js":"iOeHV","./_charsStartIndex.js":"2iqx6","./_stringToArray.js":"1bAUZ","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqfH8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseToStringJs = require("./_baseToString.js");
var _baseToStringJsDefault = parcelHelpers.interopDefault(_baseToStringJs);
var _castSliceJs = require("./_castSlice.js");
var _castSliceJsDefault = parcelHelpers.interopDefault(_castSliceJs);
var _hasUnicodeJs = require("./_hasUnicode.js");
var _hasUnicodeJsDefault = parcelHelpers.interopDefault(_hasUnicodeJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isRegExpJs = require("./isRegExp.js");
var _isRegExpJsDefault = parcelHelpers.interopDefault(_isRegExpJs);
var _stringSizeJs = require("./_stringSize.js");
var _stringSizeJsDefault = parcelHelpers.interopDefault(_stringSizeJs);
var _stringToArrayJs = require("./_stringToArray.js");
var _stringToArrayJsDefault = parcelHelpers.interopDefault(_stringToArrayJs);
var _toIntegerJs = require("./toInteger.js");
var _toIntegerJsDefault = parcelHelpers.interopDefault(_toIntegerJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/** Used as default options for `_.truncate`. */ var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */ function truncate(string, options) {
    var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
    if ((0, _isObjectJsDefault.default)(options)) {
        var separator = "separator" in options ? options.separator : separator;
        length = "length" in options ? (0, _toIntegerJsDefault.default)(options.length) : length;
        omission = "omission" in options ? (0, _baseToStringJsDefault.default)(options.omission) : omission;
    }
    string = (0, _toStringJsDefault.default)(string);
    var strLength = string.length;
    if ((0, _hasUnicodeJsDefault.default)(string)) {
        var strSymbols = (0, _stringToArrayJsDefault.default)(string);
        strLength = strSymbols.length;
    }
    if (length >= strLength) return string;
    var end = length - (0, _stringSizeJsDefault.default)(omission);
    if (end < 1) return omission;
    var result = strSymbols ? (0, _castSliceJsDefault.default)(strSymbols, 0, end).join("") : string.slice(0, end);
    if (separator === undefined) return result + omission;
    if (strSymbols) end += result.length - end;
    if ((0, _isRegExpJsDefault.default)(separator)) {
        if (string.slice(end).search(separator)) {
            var match, substring = result;
            if (!separator.global) separator = RegExp(separator.source, (0, _toStringJsDefault.default)(reFlags.exec(separator)) + "g");
            separator.lastIndex = 0;
            while(match = separator.exec(substring))var newEnd = match.index;
            result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
    } else if (string.indexOf((0, _baseToStringJsDefault.default)(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) result = result.slice(0, index);
    }
    return result + omission;
}
exports.default = truncate;

},{"./_baseToString.js":"fQ5ds","./_castSlice.js":"iOeHV","./_hasUnicode.js":"1jTtL","./isObject.js":"dHhyW","./isRegExp.js":"1SK3N","./_stringSize.js":"blHdy","./_stringToArray.js":"1bAUZ","./toInteger.js":"1tdUD","./toString.js":"hF0LJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hksYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _unescapeHtmlCharJs = require("./_unescapeHtmlChar.js");
var _unescapeHtmlCharJsDefault = parcelHelpers.interopDefault(_unescapeHtmlCharJs);
/** Used to match HTML entities and HTML characters. */ var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reHasEscapedHtml = RegExp(reEscapedHtml.source);
/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */ function unescape(string) {
    string = (0, _toStringJsDefault.default)(string);
    return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, (0, _unescapeHtmlCharJsDefault.default)) : string;
}
exports.default = unescape;

},{"./toString.js":"hF0LJ","./_unescapeHtmlChar.js":"bhMNQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhMNQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basePropertyOfJs = require("./_basePropertyOf.js");
var _basePropertyOfJsDefault = parcelHelpers.interopDefault(_basePropertyOfJs);
/** Used to map HTML entities to characters. */ var htmlUnescapes = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
};
/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */ var unescapeHtmlChar = (0, _basePropertyOfJsDefault.default)(htmlUnescapes);
exports.default = unescapeHtmlChar;

},{"./_basePropertyOf.js":"bfcic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fwINY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCompounderJs = require("./_createCompounder.js");
var _createCompounderJsDefault = parcelHelpers.interopDefault(_createCompounderJs);
/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.upperCase('--foo-bar');
 * // => 'FOO BAR'
 *
 * _.upperCase('fooBar');
 * // => 'FOO BAR'
 *
 * _.upperCase('__foo_bar__');
 * // => 'FOO BAR'
 */ var upperCase = (0, _createCompounderJsDefault.default)(function(result, word, index) {
    return result + (index ? " " : "") + word.toUpperCase();
});
exports.default = upperCase;

},{"./_createCompounder.js":"4ScHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adAXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _camelCaseJs = require("./camelCase.js");
var _camelCaseJsDefault = parcelHelpers.interopDefault(_camelCaseJs);
var _capitalizeJs = require("./capitalize.js");
var _capitalizeJsDefault = parcelHelpers.interopDefault(_capitalizeJs);
var _deburrJs = require("./deburr.js");
var _deburrJsDefault = parcelHelpers.interopDefault(_deburrJs);
var _endsWithJs = require("./endsWith.js");
var _endsWithJsDefault = parcelHelpers.interopDefault(_endsWithJs);
var _escapeJs = require("./escape.js");
var _escapeJsDefault = parcelHelpers.interopDefault(_escapeJs);
var _escapeRegExpJs = require("./escapeRegExp.js");
var _escapeRegExpJsDefault = parcelHelpers.interopDefault(_escapeRegExpJs);
var _kebabCaseJs = require("./kebabCase.js");
var _kebabCaseJsDefault = parcelHelpers.interopDefault(_kebabCaseJs);
var _lowerCaseJs = require("./lowerCase.js");
var _lowerCaseJsDefault = parcelHelpers.interopDefault(_lowerCaseJs);
var _lowerFirstJs = require("./lowerFirst.js");
var _lowerFirstJsDefault = parcelHelpers.interopDefault(_lowerFirstJs);
var _padJs = require("./pad.js");
var _padJsDefault = parcelHelpers.interopDefault(_padJs);
var _padEndJs = require("./padEnd.js");
var _padEndJsDefault = parcelHelpers.interopDefault(_padEndJs);
var _padStartJs = require("./padStart.js");
var _padStartJsDefault = parcelHelpers.interopDefault(_padStartJs);
var _parseIntJs = require("./parseInt.js");
var _parseIntJsDefault = parcelHelpers.interopDefault(_parseIntJs);
var _repeatJs = require("./repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _replaceJs = require("./replace.js");
var _replaceJsDefault = parcelHelpers.interopDefault(_replaceJs);
var _snakeCaseJs = require("./snakeCase.js");
var _snakeCaseJsDefault = parcelHelpers.interopDefault(_snakeCaseJs);
var _splitJs = require("./split.js");
var _splitJsDefault = parcelHelpers.interopDefault(_splitJs);
var _startCaseJs = require("./startCase.js");
var _startCaseJsDefault = parcelHelpers.interopDefault(_startCaseJs);
var _startsWithJs = require("./startsWith.js");
var _startsWithJsDefault = parcelHelpers.interopDefault(_startsWithJs);
var _templateJs = require("./template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
var _templateSettingsJs = require("./templateSettings.js");
var _templateSettingsJsDefault = parcelHelpers.interopDefault(_templateSettingsJs);
var _toLowerJs = require("./toLower.js");
var _toLowerJsDefault = parcelHelpers.interopDefault(_toLowerJs);
var _toUpperJs = require("./toUpper.js");
var _toUpperJsDefault = parcelHelpers.interopDefault(_toUpperJs);
var _trimJs = require("./trim.js");
var _trimJsDefault = parcelHelpers.interopDefault(_trimJs);
var _trimEndJs = require("./trimEnd.js");
var _trimEndJsDefault = parcelHelpers.interopDefault(_trimEndJs);
var _trimStartJs = require("./trimStart.js");
var _trimStartJsDefault = parcelHelpers.interopDefault(_trimStartJs);
var _truncateJs = require("./truncate.js");
var _truncateJsDefault = parcelHelpers.interopDefault(_truncateJs);
var _unescapeJs = require("./unescape.js");
var _unescapeJsDefault = parcelHelpers.interopDefault(_unescapeJs);
var _upperCaseJs = require("./upperCase.js");
var _upperCaseJsDefault = parcelHelpers.interopDefault(_upperCaseJs);
var _upperFirstJs = require("./upperFirst.js");
var _upperFirstJsDefault = parcelHelpers.interopDefault(_upperFirstJs);
var _wordsJs = require("./words.js");
var _wordsJsDefault = parcelHelpers.interopDefault(_wordsJs);
exports.default = {
    camelCase: (0, _camelCaseJsDefault.default),
    capitalize: (0, _capitalizeJsDefault.default),
    deburr: (0, _deburrJsDefault.default),
    endsWith: (0, _endsWithJsDefault.default),
    escape: (0, _escapeJsDefault.default),
    escapeRegExp: (0, _escapeRegExpJsDefault.default),
    kebabCase: (0, _kebabCaseJsDefault.default),
    lowerCase: (0, _lowerCaseJsDefault.default),
    lowerFirst: (0, _lowerFirstJsDefault.default),
    pad: (0, _padJsDefault.default),
    padEnd: (0, _padEndJsDefault.default),
    padStart: (0, _padStartJsDefault.default),
    parseInt: (0, _parseIntJsDefault.default),
    repeat: (0, _repeatJsDefault.default),
    replace: (0, _replaceJsDefault.default),
    snakeCase: (0, _snakeCaseJsDefault.default),
    split: (0, _splitJsDefault.default),
    startCase: (0, _startCaseJsDefault.default),
    startsWith: (0, _startsWithJsDefault.default),
    template: (0, _templateJsDefault.default),
    templateSettings: (0, _templateSettingsJsDefault.default),
    toLower: (0, _toLowerJsDefault.default),
    toUpper: (0, _toUpperJsDefault.default),
    trim: (0, _trimJsDefault.default),
    trimEnd: (0, _trimEndJsDefault.default),
    trimStart: (0, _trimStartJsDefault.default),
    truncate: (0, _truncateJsDefault.default),
    unescape: (0, _unescapeJsDefault.default),
    upperCase: (0, _upperCaseJsDefault.default),
    upperFirst: (0, _upperFirstJsDefault.default),
    words: (0, _wordsJsDefault.default)
};

},{"./camelCase.js":"5LT3x","./capitalize.js":"fjGbu","./deburr.js":"1gWKb","./endsWith.js":"gk9ey","./escape.js":"jewOa","./escapeRegExp.js":"9N2xu","./kebabCase.js":"iRluj","./lowerCase.js":"jDilW","./lowerFirst.js":"jEIKy","./pad.js":"hWnaV","./padEnd.js":"awWS6","./padStart.js":"gs82C","./parseInt.js":"6RfGD","./repeat.js":"3bGyt","./replace.js":"gEhng","./snakeCase.js":"hhyXP","./split.js":"8Daxt","./startCase.js":"kavg0","./startsWith.js":"72IsP","./template.js":"5ckIj","./templateSettings.js":"7WtXU","./toLower.js":"7ENVt","./toUpper.js":"kHP21","./trim.js":"beJxb","./trimEnd.js":"lPcQO","./trimStart.js":"iM1JE","./truncate.js":"hqfH8","./unescape.js":"hksYY","./upperCase.js":"fwINY","./upperFirst.js":"gPoTx","./words.js":"kDdrN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire7dd5")

//# sourceMappingURL=app.59a40e7a.js.map
