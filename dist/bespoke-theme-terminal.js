/*!
 * bespoke-theme-terminal v1.0.0
 *
 * Copyright 2014, 
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.terminal=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
    var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.bespoke-parent{height:100vh;width:100vw;margin:0 auto;-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;overflow:hidden;font-size:3vh;position:relative;background-color:#004883;background-image:-webkit-linear-gradient(0,rgba(255,255,255,.07)50%,transparent 50%),-webkit-linear-gradient(0,rgba(255,255,255,.13)50%,transparent 50%),-webkit-linear-gradient(0,transparent 50%,rgba(255,255,255,.17)50%),-webkit-linear-gradient(0,transparent 50%,rgba(255,255,255,.19)50%);background-image:linear-gradient(90deg,rgba(255,255,255,.07)50%,transparent 50%),linear-gradient(90deg,rgba(255,255,255,.13)50%,transparent 50%),linear-gradient(90deg,transparent 50%,rgba(255,255,255,.17)50%),linear-gradient(90deg,transparent 50%,rgba(255,255,255,.19)50%);background-size:17px,73px,83px,211px}.bespoke-theme-terminal-content{position:absolute;width:100%;left:0;right:0;bottom:0;margin:0 auto;text-align:center}.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{max-height:90.5vh;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:.5vh;border-radius:.5vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:left;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transition:background-color 1s,max-height 1s,min-height 1s,min-width 1s;transition:background-color 1s,max-height 1s,min-height 1s,min-width 1s;background-color:rgba(255,255,255,.9)}.bespoke-slide>*,.bespoke-slide li{margin-top:1.5vh;margin-bottom:1.5vh}.bespoke-slide ul{margin:0}.bespoke-slide.fullscreen,.bespoke-slide:first-child{width:124vh;height:90.5vh;-webkit-transition:min-width 1s,background-color 1s,min-height 1s;transition:min-width 1s,background-color 1s,min-height 1s}.bespoke-before.fullscreen,.bespoke-before:first-child{height:auto;width:auto}.bespoke-after{max-height:0;margin:0;padding:0;overflow:hidden;pointer-events:none;visibility:hidden;position:absolute}.bespoke-before *,.bespoke-before li{margin:0;font-size:inherit}.bespoke-before{background:rgba(240,240,240,.8);font-size:70%;max-width:62vh;padding:.5vh}.bespoke-active{min-height:45.25vh;width:124vh;min-width:124vh;clear:both;margin-left:auto;margin-right:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:4vh;border-radius:2vh}.bespoke-bullet{-webkit-transition:opacity .2s;transition:opacity .2s}.bespoke-bullet-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;opacity:0;-webkit-transition:opacity 1s;transition:opacity 1s}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.5vh;background-color:rgba(0,0,0,.5)}.bespoke-progress-bar{position:absolute;height:100%;background-color:#fff;-webkit-transition:all .5s;transition:all .5s}.emphatic{background:#222}";
    insertCss(css, { prepend: true });
    
    return function(deck) {
	classes()(deck);

	//wrap the slides in additional div that scrolls up
	var parent = deck.parent;
	var content = document.createElement('div');
        content.className = 'bespoke-theme-terminal-content';
	while(parent.hasChildNodes()) content.appendChild(parent.firstChild);
	parent.appendChild(content);
    };
};

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});