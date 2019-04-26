/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-04-10T19:48Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	if ( documentElement.attachShadow ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		jQuery.event.add( el, type, returnTrue );
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = undefined;
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(

					// Support: IE <=9 - 11+
					// Extend with the prototype to reset the above stopImmediatePropagation()
					jQuery.extend( saved.shift(), jQuery.Event.prototype ),
					saved,
					this
				) );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/template.js":
/*!**********************************!*\
  !*** ./resources/js/template.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./template/core/libraries/jquery.min.js */ "./resources/js/template/core/libraries/jquery.min.js");

__webpack_require__(/*! ./template/ui/tether.min.js */ "./resources/js/template/ui/tether.min.js");

__webpack_require__(/*! ./template/core/libraries/bootstrap.min.js */ "./resources/js/template/core/libraries/bootstrap.min.js");

__webpack_require__(/*! ./template/ui/perfect-scrollbar.jquery.min.js */ "./resources/js/template/ui/perfect-scrollbar.jquery.min.js");

__webpack_require__(/*! ./template/ui/unison.min.js */ "./resources/js/template/ui/unison.min.js");

__webpack_require__(/*! ./template/ui/blockUI.min.js */ "./resources/js/template/ui/blockUI.min.js");

__webpack_require__(/*! ./template/ui/jquery.matchHeight-min.js */ "./resources/js/template/ui/jquery.matchHeight-min.js");

__webpack_require__(/*! ./template/ui/screenfull.min.js */ "./resources/js/template/ui/screenfull.min.js");

__webpack_require__(/*! ./template/extensions/pace.min.js */ "./resources/js/template/extensions/pace.min.js");

__webpack_require__(/*! ./template/charts/chart.min.js */ "./resources/js/template/charts/chart.min.js");

__webpack_require__(/*! ./template/core/app-menu.js */ "./resources/js/template/core/app-menu.js");

__webpack_require__(/*! ./template/core/app.js */ "./resources/js/template/core/app.js");

__webpack_require__(/*! ./template/scripts/pages/dashboard-lite.js */ "./resources/js/template/scripts/pages/dashboard-lite.js");

/***/ }),

/***/ "./resources/js/template/charts/chart.min.js":
/*!***************************************************!*\
  !*** ./resources/js/template/charts/chart.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.3.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var e; }
}(function () {
  return function t(e, a, i) {
    function n(r, l) {
      if (!a[r]) {
        if (!e[r]) {
          var s = "function" == typeof require && require;
          if (!l && s) return require(r, !0);
          if (o) return o(r, !0);
          var d = new Error("Cannot find module '" + r + "'");
          throw d.code = "MODULE_NOT_FOUND", d;
        }

        var u = a[r] = {
          exports: {}
        };
        e[r][0].call(u.exports, function (t) {
          var a = e[r][1][t];
          return n(a ? a : t);
        }, u, u.exports, t, e, a, i);
      }

      return a[r].exports;
    }

    for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
      n(i[r]);
    }

    return n;
  }({
    1: [function (t, e, a) {}, {}],
    2: [function (t, e, a) {
      function i(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3})$/,
              a = /^#([a-fA-F0-9]{6})$/,
              i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              o = /(\w+)/,
              r = [0, 0, 0],
              l = 1,
              s = t.match(e);

          if (s) {
            s = s[1];

            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s[d] + s[d], 16);
            }
          } else if (s = t.match(a)) {
            s = s[1];

            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s.slice(2 * d, 2 * d + 2), 16);
            }
          } else if (s = t.match(i)) {
            for (var d = 0; d < r.length; d++) {
              r[d] = parseInt(s[d + 1]);
            }

            l = parseFloat(s[4]);
          } else if (s = t.match(n)) {
            for (var d = 0; d < r.length; d++) {
              r[d] = Math.round(2.55 * parseFloat(s[d + 1]));
            }

            l = parseFloat(s[4]);
          } else if (s = t.match(o)) {
            if ("transparent" == s[1]) return [0, 0, 0, 0];
            if (r = y[s[1]], !r) return;
          }

          for (var d = 0; d < r.length; d++) {
            r[d] = v(r[d], 0, 255);
          }

          return l = l || 0 == l ? v(l, 0, 1) : 1, r[3] = l, r;
        }
      }

      function n(t) {
        if (t) {
          var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);

          if (a) {
            var i = parseFloat(a[4]),
                n = v(parseInt(a[1]), 0, 360),
                o = v(parseFloat(a[2]), 0, 100),
                r = v(parseFloat(a[3]), 0, 100),
                l = v(isNaN(i) ? 1 : i, 0, 1);
            return [n, o, r, l];
          }
        }
      }

      function o(t) {
        if (t) {
          var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              a = t.match(e);

          if (a) {
            var i = parseFloat(a[4]),
                n = v(parseInt(a[1]), 0, 360),
                o = v(parseFloat(a[2]), 0, 100),
                r = v(parseFloat(a[3]), 0, 100),
                l = v(isNaN(i) ? 1 : i, 0, 1);
            return [n, o, r, l];
          }
        }
      }

      function r(t) {
        var e = i(t);
        return e && e.slice(0, 3);
      }

      function l(t) {
        var e = n(t);
        return e && e.slice(0, 3);
      }

      function s(t) {
        var e = i(t);
        return e ? e[3] : (e = n(t)) ? e[3] : (e = o(t)) ? e[3] : void 0;
      }

      function d(t) {
        return "#" + x(t[0]) + x(t[1]) + x(t[2]);
      }

      function u(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }

      function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function h(t, e) {
        if (1 > e || t[3] && t[3] < 1) return f(t, e);
        var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);
        return "rgb(" + a + "%, " + i + "%, " + n + "%)";
      }

      function f(t, e) {
        var a = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            n = Math.round(t[2] / 255 * 100);
        return "rgba(" + a + "%, " + i + "%, " + n + "%, " + (e || t[3] || 1) + ")";
      }

      function g(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }

      function p(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function m(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
      }

      function b(t) {
        return k[t.slice(0, 3)];
      }

      function v(t, e, a) {
        return Math.min(Math.max(e, t), a);
      }

      function x(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      var y = t(6);
      e.exports = {
        getRgba: i,
        getHsla: n,
        getRgb: r,
        getHsl: l,
        getHwb: o,
        getAlpha: s,
        hexString: d,
        rgbString: u,
        rgbaString: c,
        percentString: h,
        percentaString: f,
        hslString: g,
        hslaString: p,
        hwbString: m,
        keyword: b
      };
      var k = {};

      for (var S in y) {
        k[y[S]] = S;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, a) {
      var i = t(5),
          n = t(2),
          o = function o(t) {
        if (t instanceof o) return t;
        if (!(this instanceof o)) return new o(t);
        this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        };
        var e;
        if ("string" == typeof t) {
          if (e = n.getRgba(t)) this.setValues("rgb", e);else if (e = n.getHsla(t)) this.setValues("hsl", e);else {
            if (!(e = n.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
            this.setValues("hwb", e);
          }
        } else if ("object" == _typeof(t)) if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);else {
          if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
          this.setValues("cmyk", e);
        }
      };

      o.prototype = {
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return n.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return n.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return n.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return n.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return n.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return n.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return n.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return n.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], a = 0; a < t.length; a++) {
            var i = t[a] / 255;
            e[a] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              a = t.luminosity();
          return e > a ? (e + .05) / (a + .05) : (a + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb,
              e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
          return 128 > e;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; 3 > e; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              a = (e[0] + t) % 360;
          return e[0] = 0 > a ? 360 + a : a, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var a = this,
              i = t,
              n = void 0 === e ? .5 : e,
              o = 2 * n - 1,
              r = a.alpha() - i.alpha(),
              l = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              s = 1 - l;
          return this.rgb(l * a.red() + s * i.red(), l * a.green() + s * i.green(), l * a.blue() + s * i.blue()).alpha(a.alpha() * n + i.alpha() * (1 - n));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              a = new o(),
              i = this.values,
              n = a.values;

          for (var r in i) {
            i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? n[r] = t.slice(0) : "[object Number]" === e ? n[r] = t : console.error("unexpected color value:", t));
          }

          return a;
        }
      }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, o.prototype.getValues = function (t) {
        for (var e = this.values, a = {}, i = 0; i < t.length; i++) {
          a[t.charAt(i)] = e[t][i];
        }

        return 1 !== e.alpha && (a.a = e.alpha), a;
      }, o.prototype.setValues = function (t, e) {
        var a,
            n = this.values,
            o = this.spaces,
            r = this.maxes,
            l = 1;
        if ("alpha" === t) l = e;else if (e.length) n[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (a = 0; a < t.length; a++) {
            n[t][a] = e[t.charAt(a)];
          }

          l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var s = o[t];

          for (a = 0; a < t.length; a++) {
            n[t][a] = e[s[a]];
          }

          l = e.alpha;
        }
        if (n.alpha = Math.max(0, Math.min(1, void 0 === l ? n.alpha : l)), "alpha" === t) return !1;
        var d;

        for (a = 0; a < t.length; a++) {
          d = Math.max(0, Math.min(r[t][a], n[t][a])), n[t][a] = Math.round(d);
        }

        for (var u in o) {
          u !== t && (n[u] = i[t][u](n[t]));
        }

        return !0;
      }, o.prototype.setSpace = function (t, e) {
        var a = e[0];
        return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a), this);
      }, o.prototype.setChannel = function (t, e, a) {
        var i = this.values[t];
        return void 0 === a ? i[e] : a === i[e] ? this : (i[e] = a, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, a) {
      function i(t) {
        var e,
            a,
            i,
            n = t[0] / 255,
            o = t[1] / 255,
            r = t[2] / 255,
            l = Math.min(n, o, r),
            s = Math.max(n, o, r),
            d = s - l;
        return s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (l + s) / 2, a = s == l ? 0 : .5 >= i ? d / (s + l) : d / (2 - s - l), [e, 100 * a, 100 * i];
      }

      function n(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2],
            l = Math.min(n, o, r),
            s = Math.max(n, o, r),
            d = s - l;
        return a = 0 == s ? 0 : d / s * 1e3 / 10, s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = s / 255 * 1e3 / 10, [e, a, i];
      }

      function o(t) {
        var e = t[0],
            a = t[1],
            n = t[2],
            o = i(t)[0],
            r = 1 / 255 * Math.min(e, Math.min(a, n)),
            n = 1 - 1 / 255 * Math.max(e, Math.max(a, n));
        return [o, 100 * r, 100 * n];
      }

      function l(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 255,
            r = t[1] / 255,
            l = t[2] / 255;
        return n = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - n) / (1 - n) || 0, a = (1 - r - n) / (1 - n) || 0, i = (1 - l - n) / (1 - n) || 0, [100 * e, 100 * a, 100 * i, 100 * n];
      }

      function s(t) {
        return G[JSON.stringify(t)];
      }

      function d(t) {
        var e = t[0] / 255,
            a = t[1] / 255,
            i = t[2] / 255;
        e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
        var n = .4124 * e + .3576 * a + .1805 * i,
            o = .2126 * e + .7152 * a + .0722 * i,
            r = .0193 * e + .1192 * a + .9505 * i;
        return [100 * n, 100 * o, 100 * r];
      }

      function u(t) {
        var e,
            a,
            i,
            n = d(t),
            o = n[0],
            r = n[1],
            l = n[2];
        return o /= 95.047, r /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, a = 500 * (o - r), i = 200 * (r - l), [e, a, i];
      }

      function c(t) {
        return W(u(t));
      }

      function h(t) {
        var e,
            a,
            i,
            n,
            o,
            r = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100;
        if (0 == l) return o = 255 * s, [o, o, o];
        a = .5 > s ? s * (1 + l) : s + l - s * l, e = 2 * s - a, n = [0, 0, 0];

        for (var d = 0; 3 > d; d++) {
          i = r + 1 / 3 * -(d - 1), 0 > i && i++, i > 1 && i--, o = 1 > 6 * i ? e + 6 * (a - e) * i : 1 > 2 * i ? a : 2 > 3 * i ? e + (a - e) * (2 / 3 - i) * 6 : e, n[d] = 255 * o;
        }

        return n;
      }

      function f(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;
        return 0 === o ? [0, 0, 0] : (o *= 2, n *= 1 >= o ? o : 2 - o, a = (o + n) / 2, e = 2 * n / (o + n), [i, 100 * e, 100 * a]);
      }

      function p(t) {
        return o(h(t));
      }

      function m(t) {
        return l(h(t));
      }

      function v(t) {
        return s(h(t));
      }

      function x(t) {
        var e = t[0] / 60,
            a = t[1] / 100,
            i = t[2] / 100,
            n = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * i * (1 - a),
            l = 255 * i * (1 - a * o),
            s = 255 * i * (1 - a * (1 - o)),
            i = 255 * i;

        switch (n) {
          case 0:
            return [i, s, r];

          case 1:
            return [l, i, r];

          case 2:
            return [r, i, s];

          case 3:
            return [r, l, i];

          case 4:
            return [s, r, i];

          case 5:
            return [i, r, l];
        }
      }

      function y(t) {
        var e,
            a,
            i = t[0],
            n = t[1] / 100,
            o = t[2] / 100;
        return a = (2 - n) * o, e = n * o, e /= 1 >= a ? a : 2 - a, e = e || 0, a /= 2, [i, 100 * e, 100 * a];
      }

      function k(t) {
        return o(x(t));
      }

      function S(t) {
        return l(x(t));
      }

      function w(t) {
        return s(x(t));
      }

      function C(t) {
        var e,
            a,
            i,
            n,
            o = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100,
            d = l + s;

        switch (d > 1 && (l /= d, s /= d), e = Math.floor(6 * o), a = 1 - s, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), n = l + i * (a - l), e) {
          default:
          case 6:
          case 0:
            r = a, g = n, b = l;
            break;

          case 1:
            r = n, g = a, b = l;
            break;

          case 2:
            r = l, g = a, b = n;
            break;

          case 3:
            r = l, g = n, b = a;
            break;

          case 4:
            r = n, g = l, b = a;
            break;

          case 5:
            r = a, g = l, b = n;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function M(t) {
        return i(C(t));
      }

      function D(t) {
        return n(C(t));
      }

      function I(t) {
        return l(C(t));
      }

      function A(t) {
        return s(C(t));
      }

      function T(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100,
            l = t[3] / 100;
        return e = 1 - Math.min(1, n * (1 - l) + l), a = 1 - Math.min(1, o * (1 - l) + l), i = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * a, 255 * i];
      }

      function P(t) {
        return i(T(t));
      }

      function F(t) {
        return n(T(t));
      }

      function R(t) {
        return o(T(t));
      }

      function _(t) {
        return s(T(t));
      }

      function V(t) {
        var e,
            a,
            i,
            n = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
        return e = 3.2406 * n + -1.5372 * o + r * -.4986, a = n * -.9689 + 1.8758 * o + .0415 * r, i = .0557 * n + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), a = Math.min(Math.max(0, a), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * a, 255 * i];
      }

      function L(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];
        return n /= 95.047, o /= 100, r /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, a = 500 * (n - o), i = 200 * (o - r), [e, a, i];
      }

      function O(t) {
        return W(L(t));
      }

      function B(t) {
        var e,
            a,
            i,
            n,
            o = t[0],
            r = t[1],
            l = t[2];
        return 8 >= o ? (a = 100 * o / 903.3, n = 7.787 * (a / 100) + 16 / 116) : (a = 100 * Math.pow((o + 16) / 116, 3), n = Math.pow(a / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + n - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + n, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (n - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(n - l / 200, 3), [e, a, i];
      }

      function W(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];
        return e = Math.atan2(r, o), a = 360 * e / 2 / Math.PI, 0 > a && (a += 360), i = Math.sqrt(o * o + r * r), [n, i, a];
      }

      function z(t) {
        return V(B(t));
      }

      function N(t) {
        var e,
            a,
            i,
            n = t[0],
            o = t[1],
            r = t[2];
        return i = r / 360 * 2 * Math.PI, e = o * Math.cos(i), a = o * Math.sin(i), [n, e, a];
      }

      function H(t) {
        return B(N(t));
      }

      function E(t) {
        return z(N(t));
      }

      function U(t) {
        return Z[t];
      }

      function q(t) {
        return i(U(t));
      }

      function j(t) {
        return n(U(t));
      }

      function Y(t) {
        return o(U(t));
      }

      function K(t) {
        return l(U(t));
      }

      function X(t) {
        return u(U(t));
      }

      function J(t) {
        return d(U(t));
      }

      e.exports = {
        rgb2hsl: i,
        rgb2hsv: n,
        rgb2hwb: o,
        rgb2cmyk: l,
        rgb2keyword: s,
        rgb2xyz: d,
        rgb2lab: u,
        rgb2lch: c,
        hsl2rgb: h,
        hsl2hsv: f,
        hsl2hwb: p,
        hsl2cmyk: m,
        hsl2keyword: v,
        hsv2rgb: x,
        hsv2hsl: y,
        hsv2hwb: k,
        hsv2cmyk: S,
        hsv2keyword: w,
        hwb2rgb: C,
        hwb2hsl: M,
        hwb2hsv: D,
        hwb2cmyk: I,
        hwb2keyword: A,
        cmyk2rgb: T,
        cmyk2hsl: P,
        cmyk2hsv: F,
        cmyk2hwb: R,
        cmyk2keyword: _,
        keyword2rgb: U,
        keyword2hsl: q,
        keyword2hsv: j,
        keyword2hwb: Y,
        keyword2cmyk: K,
        keyword2lab: X,
        keyword2xyz: J,
        xyz2rgb: V,
        xyz2lab: L,
        xyz2lch: O,
        lab2xyz: B,
        lab2rgb: z,
        lab2lch: W,
        lch2lab: N,
        lch2xyz: H,
        lch2rgb: E
      };
      var Z = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          G = {};

      for (var Q in Z) {
        G[JSON.stringify(Z[Q])] = Q;
      }
    }, {}],
    5: [function (t, e, a) {
      var i = t(4),
          n = function n() {
        return new d();
      };

      for (var o in i) {
        n[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(o);

        var r = /(\w+)2(\w+)/.exec(o),
            l = r[1],
            s = r[2];
        n[l] = n[l] || {}, n[l][s] = n[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var a = i[t](e);
            if ("string" == typeof a || void 0 === a) return a;

            for (var n = 0; n < a.length; n++) {
              a[n] = Math.round(a[n]);
            }

            return a;
          };
        }(o);
      }

      var d = function d() {
        this.convs = {};
      };

      d.prototype.routeSpace = function (t, e) {
        var a = e[0];
        return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)), this.setValues(t, a));
      }, d.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, d.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var a = this.space,
              i = this.convs[a];
          e = n[a][t](i), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        d.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = n;
    }, {
      4: 4
    }],
    6: [function (t, e, a) {
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, a) {
      var i = t(27)();
      t(26)(i), t(22)(i), t(25)(i), t(21)(i), t(23)(i), t(24)(i), t(28)(i), t(32)(i), t(30)(i), t(31)(i), t(33)(i), t(29)(i), t(34)(i), t(35)(i), t(36)(i), t(37)(i), t(38)(i), t(41)(i), t(39)(i), t(40)(i), t(42)(i), t(43)(i), t(44)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i), window.Chart = e.exports = i;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      37: 37,
      38: 38,
      39: 39,
      40: 40,
      41: 41,
      42: 42,
      43: 43,
      44: 44,
      8: 8,
      9: 9
    }],
    8: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, a) {
          return a.type = "bar", new t(e, a);
        };
      };
    }, {}],
    9: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, a) {
          return a.type = "bubble", new t(e, a);
        };
      };
    }, {}],
    10: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, a) {
          return a.type = "doughnut", new t(e, a);
        };
      };
    }, {}],
    11: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, a) {
          return a.type = "line", new t(e, a);
        };
      };
    }, {}],
    12: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, a) {
          return a.type = "polarArea", new t(e, a);
        };
      };
    }, {}],
    13: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, a) {
          return a.options = t.helpers.configMerge({
            aspectRatio: 1
          }, a.options), a.type = "radar", new t(e, a);
        };
      };
    }, {}],
    14: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-1"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-1"
            }]
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              }
            }
          }
        };
        t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, a) {
          return a.type = "scatter", new t(e, a);
        };
      };
    }, {}],
    15: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.bar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }],
            yAxes: [{
              type: "linear"
            }]
          }
        }, t.controllers.bar = t.DatasetController.extend({
          dataElementType: t.elements.Rectangle,
          initialize: function initialize(e, a) {
            t.DatasetController.prototype.initialize.call(this, e, a), this.getMeta().bar = !0;
          },
          getBarCount: function getBarCount() {
            var t = this,
                a = 0;
            return e.each(t.chart.data.datasets, function (e, i) {
              var n = t.chart.getDatasetMeta(i);
              n.bar && t.chart.isDatasetVisible(i) && ++a;
            }, t), a;
          },
          update: function update(t) {
            var a = this;
            e.each(a.getMeta().data, function (e, i) {
              a.updateElement(e, i, t);
            }, a);
          },
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                l = n.getScaleForId(o.yAxisID),
                s = l.getBasePixel(),
                d = n.chart.options.elements.rectangle,
                u = t.custom || {},
                c = n.getDataset();
            e.extend(t, {
              _xScale: r,
              _yScale: l,
              _datasetIndex: n.index,
              _index: a,
              _model: {
                x: n.calculateBarX(a, n.index),
                y: i ? s : n.calculateBarY(a, n.index),
                label: n.chart.data.labels[a],
                datasetLabel: c.label,
                base: i ? s : n.calculateBarBase(n.index, a),
                width: n.calculateBarWidth(a),
                backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, a, d.backgroundColor),
                borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
                borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, a, d.borderColor),
                borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, a, d.borderWidth)
              }
            }), t.pivot();
          },
          calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = 0;

            if (n.options.stacked) {
              for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                var u = l[d],
                    c = r.getDatasetMeta(d);

                if (c.bar && c.yAxisID === n.id && r.isDatasetVisible(d)) {
                  var h = Number(u.data[e]);
                  o += 0 > s ? Math.min(h, 0) : Math.max(h, 0);
                }
              }

              return n.getPixelForValue(o);
            }

            return n.getBasePixel();
          },
          getRuler: function getRuler(t) {
            var e,
                a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = a.getBarCount();
            e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
            var r = e * n.options.categoryPercentage,
                l = (e - e * n.options.categoryPercentage) / 2,
                s = r / o;

            if (n.ticks.length !== a.chart.data.labels.length) {
              var d = n.ticks.length / a.chart.data.labels.length;
              s *= d;
            }

            var u = s * n.options.barPercentage,
                c = s - s * n.options.barPercentage;
            return {
              datasetCount: o,
              tickWidth: e,
              categoryWidth: r,
              categorySpacing: l,
              fullBarWidth: s,
              barWidth: u,
              barSpacing: c
            };
          },
          calculateBarWidth: function calculateBarWidth(t) {
            var e = this.getScaleForId(this.getMeta().xAxisID);
            if (e.options.barThickness) return e.options.barThickness;
            var a = this.getRuler(t);
            return e.options.stacked ? a.categoryWidth : a.barWidth;
          },
          getBarIndex: function getBarIndex(t) {
            var e,
                a,
                i = 0;

            for (a = 0; t > a; ++a) {
              e = this.chart.getDatasetMeta(a), e.bar && this.chart.isDatasetVisible(a) && ++i;
            }

            return i;
          },
          calculateBarX: function calculateBarX(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = a.getBarIndex(e),
                r = a.getRuler(t),
                l = n.getPixelForValue(null, t, e, a.chart.isCombo);
            return l -= a.chart.isCombo ? r.tickWidth / 2 : 0, n.options.stacked ? l + r.categoryWidth / 2 + r.categorySpacing : l + r.barWidth / 2 + r.categorySpacing + r.barWidth * o + r.barSpacing / 2 + r.barSpacing * o;
          },
          calculateBarY: function calculateBarY(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = Number(a.getDataset().data[t]);

            if (n.options.stacked) {
              for (var r = 0, l = 0, s = 0; e > s; s++) {
                var d = a.chart.data.datasets[s],
                    u = a.chart.getDatasetMeta(s);

                if (u.bar && u.yAxisID === n.id && a.chart.isDatasetVisible(s)) {
                  var c = Number(d.data[t]);
                  0 > c ? l += c || 0 : r += c || 0;
                }
              }

              return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o);
            }

            return n.getPixelForValue(o);
          },
          draw: function draw(t) {
            var a = this,
                i = t || 1;
            e.each(a.getMeta().data, function (t, e) {
              var n = a.getDataset().data[e];
              null === n || void 0 === n || isNaN(n) || t.transition(i).draw();
            }, a);
          },
          setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;
            o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(a.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(a.hoverBorderWidth, i, o.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model,
                r = this.chart.options.elements.rectangle;
            o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(a.backgroundColor, i, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(a.borderColor, i, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(a.borderWidth, i, r.borderWidth);
          }
        }), t.defaults.horizontalBar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom"
            }],
            yAxes: [{
              position: "left",
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          tooltips: {
            callbacks: {
              title: function title(t, e) {
                var a = "";
                return t.length > 0 && (t[0].yLabel ? a = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (a = e.labels[t[0].index])), a;
              },
              label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "";
                return a + ": " + t.xLabel;
              }
            }
          }
        }, t.controllers.horizontalBar = t.controllers.bar.extend({
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.getMeta(),
                r = n.getScaleForId(o.xAxisID),
                l = n.getScaleForId(o.yAxisID),
                s = r.getBasePixel(),
                d = t.custom || {},
                u = n.getDataset(),
                c = n.chart.options.elements.rectangle;
            e.extend(t, {
              _xScale: r,
              _yScale: l,
              _datasetIndex: n.index,
              _index: a,
              _model: {
                x: i ? s : n.calculateBarX(a, n.index),
                y: n.calculateBarY(a, n.index),
                label: n.chart.data.labels[a],
                datasetLabel: u.label,
                base: i ? s : n.calculateBarBase(n.index, a),
                height: n.calculateBarHeight(a),
                backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, a, c.backgroundColor),
                borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
                borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, a, c.borderColor),
                borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, a, c.borderWidth)
              },
              draw: function draw() {
                function t(t) {
                  return s[(u + t) % 4];
                }

                var e = this._chart.ctx,
                    a = this._view,
                    i = a.height / 2,
                    n = a.y - i,
                    o = a.y + i,
                    r = a.base - (a.base - a.x),
                    l = a.borderWidth / 2;
                a.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth;
                var s = [[a.base, o], [a.base, n], [r, n], [r, o]],
                    d = ["bottom", "left", "top", "right"],
                    u = d.indexOf(a.borderSkipped, 0);
                -1 === u && (u = 0), e.moveTo.apply(e, t(0));

                for (var c = 1; 4 > c; c++) {
                  e.lineTo.apply(e, t(c));
                }

                e.fill(), a.borderWidth && e.stroke();
              },
              inRange: function inRange(t, e) {
                var a = this._view,
                    i = !1;
                return a && (i = a.x < a.base ? e >= a.y - a.height / 2 && e <= a.y + a.height / 2 && t >= a.x && t <= a.base : e >= a.y - a.height / 2 && e <= a.y + a.height / 2 && t >= a.base && t <= a.x), i;
              }
            }), t.pivot();
          },
          calculateBarBase: function calculateBarBase(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = 0;

            if (n.options.stacked) {
              for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                var u = l[d],
                    c = r.getDatasetMeta(d);

                if (c.bar && c.xAxisID === n.id && r.isDatasetVisible(d)) {
                  var h = Number(u.data[e]);
                  o += 0 > s ? Math.min(h, 0) : Math.max(h, 0);
                }
              }

              return n.getPixelForValue(o);
            }

            return n.getBasePixel();
          },
          getRuler: function getRuler(t) {
            var e,
                a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = a.getBarCount();
            e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
            var r = e * n.options.categoryPercentage,
                l = (e - e * n.options.categoryPercentage) / 2,
                s = r / o;

            if (n.ticks.length !== a.chart.data.labels.length) {
              var d = n.ticks.length / a.chart.data.labels.length;
              s *= d;
            }

            var u = s * n.options.barPercentage,
                c = s - s * n.options.barPercentage;
            return {
              datasetCount: o,
              tickHeight: e,
              categoryHeight: r,
              categorySpacing: l,
              fullBarHeight: s,
              barHeight: u,
              barSpacing: c
            };
          },
          calculateBarHeight: function calculateBarHeight(t) {
            var e = this,
                a = e.getScaleForId(e.getMeta().yAxisID);
            if (a.options.barThickness) return a.options.barThickness;
            var i = e.getRuler(t);
            return a.options.stacked ? i.categoryHeight : i.barHeight;
          },
          calculateBarX: function calculateBarX(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.xAxisID),
                o = Number(a.getDataset().data[t]);

            if (n.options.stacked) {
              for (var r = 0, l = 0, s = 0; e > s; s++) {
                var d = a.chart.data.datasets[s],
                    u = a.chart.getDatasetMeta(s);

                if (u.bar && u.xAxisID === n.id && a.chart.isDatasetVisible(s)) {
                  var c = Number(d.data[t]);
                  0 > c ? l += c || 0 : r += c || 0;
                }
              }

              return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o);
            }

            return n.getPixelForValue(o);
          },
          calculateBarY: function calculateBarY(t, e) {
            var a = this,
                i = a.getMeta(),
                n = a.getScaleForId(i.yAxisID),
                o = a.getBarIndex(e),
                r = a.getRuler(t),
                l = n.getPixelForValue(null, t, e, a.chart.isCombo);
            return l -= a.chart.isCombo ? r.tickHeight / 2 : 0, n.options.stacked ? l + r.categoryHeight / 2 + r.categorySpacing : l + r.barHeight / 2 + r.categorySpacing + r.barHeight * o + r.barSpacing / 2 + r.barSpacing * o;
          }
        });
      };
    }, {}],
    16: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.bubble = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-0"
            }]
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                var a = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];
                return a + ": (" + i.x + ", " + i.y + ", " + i.r + ")";
              }
            }
          }
        }, t.controllers.bubble = t.DatasetController.extend({
          dataElementType: t.elements.Point,
          update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.data;
            e.each(n, function (e, i) {
              a.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(a, i, n) {
            var o = this,
                r = o.getMeta(),
                l = o.getScaleForId(r.xAxisID),
                s = o.getScaleForId(r.yAxisID),
                d = a.custom || {},
                u = o.getDataset(),
                c = u.data[i],
                h = o.chart.options.elements.point,
                f = o.index;
            e.extend(a, {
              _xScale: l,
              _yScale: s,
              _datasetIndex: f,
              _index: i,
              _model: {
                x: n ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == _typeof(c) ? c : NaN, i, f, o.chart.isCombo),
                y: n ? s.getBasePixel() : s.getPixelForValue(c, i, f),
                radius: n ? 0 : d.radius ? d.radius : o.getRadius(c),
                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius)
              }
            }), t.DatasetController.prototype.removeHoverStyle.call(o, a, h);
            var g = a._model;
            g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y), a.pivot();
          },
          getRadius: function getRadius(t) {
            return t.r || this.chart.options.elements.point.radius;
          },
          setHoverStyle: function setHoverStyle(a) {
            var i = this;
            t.DatasetController.prototype.setHoverStyle.call(i, a);
            var n = i.chart.data.datasets[a._datasetIndex],
                o = a._index,
                r = a.custom || {},
                l = a._model;
            l.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(n.data[o]);
          },
          removeHoverStyle: function removeHoverStyle(e) {
            var a = this;
            t.DatasetController.prototype.removeHoverStyle.call(a, e, a.chart.options.elements.point);
            var i = a.chart.data.datasets[e._datasetIndex].data[e._index],
                n = e.custom || {},
                o = e._model;
            o.radius = n.radius ? n.radius : a.getRadius(i);
          }
        });
      };
    }, {}],
    17: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults;
        a.doughnut = {
          animation: {
            animateRotate: !0,
            animateScale: !1
          },
          aspectRatio: 1,
          hover: {
            mode: "single"
          },
          legendCallback: function legendCallback(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var a = t.data,
                i = a.datasets,
                n = a.labels;
            if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
            }
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function generateLabels(t) {
                var a = t.data;
                return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      l = o.data[n],
                      s = l && l.custom || {},
                      d = e.getValueAtIndexOrDefault,
                      u = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                      h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                      f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                  return {
                    text: i,
                    fillStyle: c,
                    strokeStyle: h,
                    lineWidth: f,
                    hidden: isNaN(r.data[n]) || o.data[n].hidden,
                    index: n
                  };
                }) : [];
              }
            },
            onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;

              for (a = 0, i = (r.data.datasets || []).length; i > a; ++a) {
                n = r.getDatasetMeta(a), n.data[o] && (n.data[o].hidden = !n.data[o].hidden);
              }

              r.update();
            }
          },
          cutoutPercentage: 50,
          rotation: Math.PI * -.5,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index];
              }
            }
          }
        }, a.pie = e.clone(a.doughnut), e.extend(a.pie, {
          cutoutPercentage: 0
        }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, a = 0; t > a; ++a) {
              this.chart.isDatasetVisible(a) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = i.options,
                r = o.elements.arc,
                l = n.right - n.left - r.borderWidth,
                s = n.bottom - n.top - r.borderWidth,
                d = Math.min(l, s),
                u = {
              x: 0,
              y: 0
            },
                c = a.getMeta(),
                h = o.cutoutPercentage,
                f = o.circumference;

            if (f < 2 * Math.PI) {
              var g = o.rotation % (2 * Math.PI);
              g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
              var p = g + f,
                  m = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  b = {
                x: Math.cos(p),
                y: Math.sin(p)
              },
                  v = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  S = h / 100,
                  w = {
                x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), b.x * (b.x < 0 ? 1 : S)),
                y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), b.y * (b.y < 0 ? 1 : S))
              },
                  C = {
                x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), b.x * (b.x > 0 ? 1 : S)),
                y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), b.y * (b.y > 0 ? 1 : S))
              },
                  M = {
                width: .5 * (C.x - w.x),
                height: .5 * (C.y - w.y)
              };
              d = Math.min(l / M.width, s / M.height), u = {
                x: (C.x + w.x) * -.5,
                y: (C.y + w.y) * -.5
              };
            }

            i.borderWidth = a.getMaxBorderWidth(c.data), i.outerRadius = Math.max((d - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, c.total = a.calculateTotal(), a.outerRadius = i.outerRadius - i.radiusLength * a.getRingIndex(a.index), a.innerRadius = a.outerRadius - i.radiusLength, e.each(c.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = n.chart,
                r = o.chartArea,
                l = o.options,
                s = l.animation,
                d = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                c = l.rotation,
                h = l.rotation,
                f = n.getDataset(),
                g = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[a]) * (l.circumference / (2 * Math.PI)),
                p = i && s.animateScale ? 0 : n.innerRadius,
                m = i && s.animateScale ? 0 : n.outerRadius,
                b = e.getValueAtIndexOrDefault;
            e.extend(t, {
              _datasetIndex: n.index,
              _index: a,
              _model: {
                x: d + o.offsetX,
                y: u + o.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: g,
                outerRadius: m,
                innerRadius: p,
                label: b(f.label, a, o.data.labels[a])
              }
            });
            var v = t._model;
            this.removeHoverStyle(t), i && s.animateRotate || (0 === a ? v.startAngle = l.rotation : v.startAngle = n.getMeta().data[a - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                a = this.getDataset(),
                i = this.getMeta(),
                n = 0;
            return e.each(i.data, function (e, i) {
              t = a.data[i], isNaN(t) || e.hidden || (n += Math.abs(t));
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, a, i = 0, n = this.index, o = t.length, r = 0; o > r; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, a = t[r]._chart ? t[r]._chart.config.data.datasets[n].hoverBorderWidth : 0, i = e > i ? e : i, i = a > i ? a : i;
            }

            return i;
          }
        });
      };
    }, {}],
    18: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return a.getValueOrDefault(t.showLine, e.showLines);
        }

        var a = t.helpers;
        t.defaults.line = {
          showLines: !0,
          spanGaps: !1,
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              id: "y-axis-0"
            }]
          }
        }, t.controllers.line = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          addElementAndReset: function addElementAndReset(a) {
            var i = this,
                n = i.chart.options,
                o = i.getMeta();
            t.DatasetController.prototype.addElementAndReset.call(i, a), e(i.getDataset(), n) && 0 !== o.dataset._model.tension && i.updateBezierControlPoints();
          },
          update: function update(t) {
            var i,
                n,
                o,
                r = this,
                l = r.getMeta(),
                s = l.dataset,
                d = l.data || [],
                u = r.chart.options,
                c = u.elements.line,
                h = r.getScaleForId(l.yAxisID),
                f = r.getDataset(),
                g = e(f, u);

            for (g && (o = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = d, s._model = {
              spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
              tension: o.tension ? o.tension : a.getValueOrDefault(f.lineTension, c.tension),
              backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: o.steppedLine ? o.steppedLine : a.getValueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
              scaleTop: h.top,
              scaleBottom: h.bottom,
              scaleZero: h.getBasePixel()
            }, s.pivot()), i = 0, n = d.length; n > i; ++i) {
              r.updateElement(d[i], i, t);
            }

            for (g && 0 !== s._model.tension && r.updateBezierControlPoints(), i = 0, n = d.length; n > i; ++i) {
              d[i].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                o = t.custom || {};
            return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.getValueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                o = t.custom || {};
            return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.getValueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                o = t.custom || {};
            return o.borderWidth ? i = o.borderWidth : n.pointBorderWidth ? i = a.getValueAtIndexOrDefault(n.pointBorderWidth, e, i) : n.borderWidth && (i = n.borderWidth), i;
          },
          updateElement: function updateElement(t, e, i) {
            var n,
                o,
                r = this,
                l = r.getMeta(),
                s = t.custom || {},
                d = r.getDataset(),
                u = r.index,
                c = d.data[e],
                h = r.getScaleForId(l.yAxisID),
                f = r.getScaleForId(l.xAxisID),
                g = r.chart.options.elements.point,
                p = r.chart.data.labels || [],
                m = 1 === p.length || 1 === d.data.length || r.chart.isCombo;
            void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, u, m), o = i ? h.getBasePixel() : r.calculatePointY(c, e, u), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {
              x: n,
              y: o,
              skip: s.skip || isNaN(n) || isNaN(o),
              radius: s.radius || a.getValueAtIndexOrDefault(d.pointRadius, e, g.radius),
              pointStyle: s.pointStyle || a.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: l.dataset._model ? l.dataset._model.tension : 0,
              steppedLine: l.dataset._model ? l.dataset._model.steppedLine : !1,
              hitRadius: s.hitRadius || a.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, a) {
            var i,
                n,
                o,
                r = this,
                l = r.chart,
                s = r.getMeta(),
                d = r.getScaleForId(s.yAxisID),
                u = 0,
                c = 0;

            if (d.options.stacked) {
              for (i = 0; a > i; i++) {
                if (n = l.data.datasets[i], o = l.getDatasetMeta(i), "line" === o.type && o.yAxisID === d.id && l.isDatasetVisible(i)) {
                  var h = Number(d.getRightValue(n.data[e]));
                  0 > h ? c += h || 0 : u += h || 0;
                }
              }

              var f = Number(d.getRightValue(t));
              return 0 > f ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f);
            }

            return d.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            function t(t, e, a) {
              return Math.max(Math.min(t, a), e);
            }

            var e,
                i,
                n,
                o,
                r,
                l = this,
                s = l.getMeta(),
                d = l.chart.chartArea,
                u = s.data || [];
            if (s.dataset._model.spanGaps && (u = u.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === s.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(u);else for (e = 0, i = u.length; i > e; ++e) {
              n = u[e], o = n._model, r = a.splineCurve(a.previousItem(u, e)._model, o, a.nextItem(u, e)._model, s.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
            }
            if (l.chart.options.elements.line.capBezierPoints) for (e = 0, i = u.length; i > e; ++e) {
              o = u[e]._model, o.controlPointPreviousX = t(o.controlPointPreviousX, d.left, d.right), o.controlPointPreviousY = t(o.controlPointPreviousY, d.top, d.bottom), o.controlPointNextX = t(o.controlPointNextX, d.left, d.right), o.controlPointNextY = t(o.controlPointNextY, d.top, d.bottom);
            }
          },
          draw: function draw(t) {
            var a,
                i,
                n = this,
                o = n.getMeta(),
                r = o.data || [],
                l = t || 1;

            for (a = 0, i = r.length; i > a; ++a) {
              r[a].transition(l);
            }

            for (e(n.getDataset(), n.chart.options) && o.dataset.transition(l).draw(), a = 0, i = r.length; i > a; ++a) {
              r[a].draw();
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = t._model;
            o.radius = n.hoverRadius || a.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor || a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || a.getValueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n);
          }
        });
      };
    }, {}],
    19: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.polarArea = {
          scale: {
            type: "radialLinear",
            lineArc: !0,
            ticks: {
              beginAtZero: !0
            }
          },
          animation: {
            animateRotate: !0,
            animateScale: !0
          },
          startAngle: -.5 * Math.PI,
          aspectRatio: 1,
          legendCallback: function legendCallback(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var a = t.data,
                i = a.datasets,
                n = a.labels;
            if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '">'), n[o] && e.push(n[o]), e.push("</span></li>");
            }
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function generateLabels(t) {
                var a = t.data;
                return a.labels.length && a.datasets.length ? a.labels.map(function (i, n) {
                  var o = t.getDatasetMeta(0),
                      r = a.datasets[0],
                      l = o.data[n],
                      s = l.custom || {},
                      d = e.getValueAtIndexOrDefault,
                      u = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                      h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                      f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                  return {
                    text: i,
                    fillStyle: c,
                    strokeStyle: h,
                    lineWidth: f,
                    hidden: isNaN(r.data[n]) || o.data[n].hidden,
                    index: n
                  };
                }) : [];
              }
            },
            onClick: function onClick(t, e) {
              var a,
                  i,
                  n,
                  o = e.index,
                  r = this.chart;

              for (a = 0, i = (r.data.datasets || []).length; i > a; ++a) {
                n = r.getDatasetMeta(a), n.data[o].hidden = !n.data[o].hidden;
              }

              r.update();
            }
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              }
            }
          }
        }, t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          update: function update(t) {
            var a = this,
                i = a.chart,
                n = i.chartArea,
                o = a.getMeta(),
                r = i.options,
                l = r.elements.arc,
                s = Math.min(n.right - n.left, n.bottom - n.top);
            i.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), a.outerRadius = i.outerRadius - i.radiusLength * a.index, a.innerRadius = a.outerRadius - i.radiusLength, o.count = a.countVisibleElements(), e.each(o.data, function (e, i) {
              a.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(t, a, i) {
            for (var n = this, o = n.chart, r = n.getDataset(), l = o.options, s = l.animation, d = o.scale, u = e.getValueAtIndexOrDefault, c = o.data.labels, h = n.calculateCircumference(r.data[a]), f = d.xCenter, g = d.yCenter, p = 0, m = n.getMeta(), b = 0; a > b; ++b) {
              isNaN(r.data[b]) || m.data[b].hidden || ++p;
            }

            var v = l.startAngle,
                x = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[a]),
                y = v + h * p,
                k = y + (t.hidden ? 0 : h),
                S = s.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[a]);
            e.extend(t, {
              _datasetIndex: n.index,
              _index: a,
              _scale: d,
              _model: {
                x: f,
                y: g,
                innerRadius: 0,
                outerRadius: i ? S : x,
                startAngle: i && s.animateRotate ? v : y,
                endAngle: i && s.animateRotate ? v : k,
                label: u(c, a, c[a])
              }
            }), n.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                a = this.getMeta(),
                i = 0;
            return e.each(a.data, function (e, a) {
              isNaN(t.data[a]) || e.hidden || i++;
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {}],
    20: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.radar = {
          scale: {
            type: "radialLinear"
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }, t.controllers.radar = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          linkScales: e.noop,
          addElementAndReset: function addElementAndReset(e) {
            t.DatasetController.prototype.addElementAndReset.call(this, e), this.updateBezierControlPoints();
          },
          update: function update(t) {
            var a = this,
                i = a.getMeta(),
                n = i.dataset,
                o = i.data,
                r = n.custom || {},
                l = a.getDataset(),
                s = a.chart.options.elements.line,
                d = a.chart.scale;
            void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), e.extend(i.dataset, {
              _datasetIndex: a.index,
              _children: o,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : e.getValueOrDefault(l.lineTension, s.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth,
                borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor,
                fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle,
                scaleTop: d.top,
                scaleBottom: d.bottom,
                scaleZero: d.getBasePosition()
              }
            }), i.dataset.pivot(), e.each(o, function (e, i) {
              a.updateElement(e, i, t);
            }, a), a.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, a, i) {
            var n = this,
                o = t.custom || {},
                r = n.getDataset(),
                l = n.chart.scale,
                s = n.chart.options.elements.point,
                d = l.getPointPositionForValue(a, r.data[a]);
            e.extend(t, {
              _datasetIndex: n.index,
              _index: a,
              _scale: l,
              _model: {
                x: i ? l.xCenter : d.x,
                y: i ? l.yCenter : d.y,
                tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, n.chart.options.elements.line.tension),
                radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, a, s.radius),
                backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, a, s.backgroundColor),
                borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, a, s.borderColor),
                borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, a, s.borderWidth),
                pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, a, s.pointStyle),
                hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, a, s.hitRadius)
              }
            }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                a = this.getMeta();
            e.each(a.data, function (i, n) {
              var o = i._model,
                  r = e.splineCurve(e.previousItem(a.data, n, !0)._model, o, e.nextItem(a.data, n, !0)._model, o.tension);
              o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
            });
          },
          draw: function draw(t) {
            var a = this.getMeta(),
                i = t || 1;
            e.each(a.data, function (t) {
              t.transition(i);
            }), a.dataset.transition(i).draw(), e.each(a.data, function (t) {
              t.draw();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model;
            o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(a.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(a.pointHoverBorderColor, n, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(a.pointHoverBorderWidth, n, o.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                o = t._model,
                r = this.chart.options.elements.point;
            o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(a.radius, n, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(a.pointBackgroundColor, n, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(a.pointBorderColor, n, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(a.pointBorderWidth, n, r.borderWidth);
          }
        });
      };
    }, {}],
    21: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.global.animation = {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: e.noop,
          onComplete: e.noop
        }, t.Animation = t.Element.extend({
          currentStep: null,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, a, i) {
            var n = this;
            i || (t.animating = !0);

            for (var o = 0; o < n.animations.length; ++o) {
              if (n.animations[o].chartInstance === t) return void (n.animations[o].animationObject = e);
            }

            n.animations.push({
              chartInstance: t,
              animationObject: e
            }), 1 === n.animations.length && n.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var a = e.findIndex(this.animations, function (e) {
              return e.chartInstance === t;
            });
            -1 !== a && (this.animations.splice(a, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                a = 0;
            t.dropFrames > 1 && (a = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);

            for (var i = 0; i < t.animations.length;) {
              null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0), t.animations[i].animationObject.currentStep += 1 + a, t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps), t.animations[i].animationObject.render(t.animations[i].chartInstance, t.animations[i].animationObject), t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance, t.animations[i]), t.animations[i].chartInstance.animating = !1, t.animations.splice(i, 1)) : ++i;
            }

            var n = Date.now(),
                o = (n - e) / t.frameDuration;
            t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame();
          }
        };
      };
    }, {}],
    22: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.canvasHelpers = {};

        e.drawPoint = function (t, e, a, i, n) {
          var o, r, l, s, d, u;
          if ("object" == _typeof(e) && (o = e.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void t.drawImage(e, i - e.width / 2, n - e.height / 2);

          if (!(isNaN(a) || 0 >= a)) {
            switch (e) {
              default:
                t.beginPath(), t.arc(i, n, a, 0, 2 * Math.PI), t.closePath(), t.fill();
                break;

              case "triangle":
                t.beginPath(), r = 3 * a / Math.sqrt(3), d = r * Math.sqrt(3) / 2, t.moveTo(i - r / 2, n + d / 3), t.lineTo(i + r / 2, n + d / 3), t.lineTo(i, n - 2 * d / 3), t.closePath(), t.fill();
                break;

              case "rect":
                u = 1 / Math.SQRT2 * a, t.beginPath(), t.fillRect(i - u, n - u, 2 * u, 2 * u), t.strokeRect(i - u, n - u, 2 * u, 2 * u);
                break;

              case "rectRot":
                u = 1 / Math.SQRT2 * a, t.beginPath(), t.moveTo(i - u, n), t.lineTo(i, n + u), t.lineTo(i + u, n), t.lineTo(i, n - u), t.closePath(), t.fill();
                break;

              case "cross":
                t.beginPath(), t.moveTo(i, n + a), t.lineTo(i, n - a), t.moveTo(i - a, n), t.lineTo(i + a, n), t.closePath();
                break;

              case "crossRot":
                t.beginPath(), l = Math.cos(Math.PI / 4) * a, s = Math.sin(Math.PI / 4) * a, t.moveTo(i - l, n - s), t.lineTo(i + l, n + s), t.moveTo(i - l, n + s), t.lineTo(i + l, n - s), t.closePath();
                break;

              case "star":
                t.beginPath(), t.moveTo(i, n + a), t.lineTo(i, n - a), t.moveTo(i - a, n), t.lineTo(i + a, n), l = Math.cos(Math.PI / 4) * a, s = Math.sin(Math.PI / 4) * a, t.moveTo(i - l, n - s), t.lineTo(i + l, n + s), t.moveTo(i - l, n + s), t.lineTo(i + l, n - s), t.closePath();
                break;

              case "line":
                t.beginPath(), t.moveTo(i - a, n), t.lineTo(i + a, n), t.closePath();
                break;

              case "dash":
                t.beginPath(), t.moveTo(i, n), t.lineTo(i + a, n), t.closePath();
            }

            t.stroke();
          }
        };
      };
    }, {}],
    23: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function (a) {
          return this.chart = a, this.config = a.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", {
            get: function get() {
              return this.config.data;
            }
          }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this;
        }, e.extend(t.Controller.prototype, {
          initialize: function initialize() {
            var e = this;
            return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e;
          },
          clear: function clear() {
            return e.clear(this.chart), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(a) {
            var i = this,
                n = i.chart,
                o = n.canvas,
                r = e.getMaximumWidth(o),
                l = n.aspectRatio,
                s = i.options.maintainAspectRatio && isNaN(l) === !1 && isFinite(l) && 0 !== l ? r / l : e.getMaximumHeight(o),
                d = n.width !== r || n.height !== s;
            if (!d) return i;
            o.width = n.width = r, o.height = n.height = s, e.retinaScale(n);
            var u = {
              width: r,
              height: s
            };
            return t.plugins.notify("resize", [i, u]), i.options.onResize && i.options.onResize(i, u), a || (i.stop(), i.update(i.options.responsiveAnimationDuration)), i;
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                a = t.scales || {},
                i = t.scale;
            e.each(a.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), e.each(a.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), i && (i.id = i.id || "scale");
          },
          buildScales: function buildScales() {
            var a = this,
                i = a.options,
                n = a.scales = {},
                o = [];
            i.scales && (o = o.concat((i.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category"
              };
            }), (i.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear"
              };
            }))), i.scale && o.push({
              options: i.scale,
              dtype: "radialLinear",
              isDefault: !0
            }), e.each(o, function (i) {
              var o = i.options,
                  r = e.getValueOrDefault(o.type, i.dtype),
                  l = t.scaleService.getScaleConstructor(r);

              if (l) {
                var s = new l({
                  id: o.id,
                  options: o,
                  ctx: a.chart.ctx,
                  chart: a
                });
                n[s.id] = s, i.isDefault && (a.scale = s);
              }
            }), t.scaleService.addScalesToLayout(this);
          },
          updateLayout: function updateLayout() {
            t.layoutService.update(this, this.chart.width, this.chart.height);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var a = this,
                i = [],
                n = [];
            if (e.each(a.data.datasets, function (e, o) {
              var r = a.getDatasetMeta(o);
              r.type || (r.type = e.type || a.config.type), i.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](a, o), n.push(r.controller));
            }, a), i.length > 1) for (var o = 1; o < i.length; o++) {
              if (i[o] !== i[o - 1]) {
                a.isCombo = !0;
                break;
              }
            }
            return n;
          },
          resetElements: function resetElements() {
            var t = this;
            e.each(t.data.datasets, function (e, a) {
              t.getDatasetMeta(a).controller.reset();
            }, t);
          },
          update: function update(a, i) {
            var n = this;
            t.plugins.notify("beforeUpdate", [n]), n.tooltip._data = n.data;
            var o = n.buildOrUpdateControllers();
            e.each(n.data.datasets, function (t, e) {
              n.getDatasetMeta(e).controller.buildOrUpdateElements();
            }, n), t.layoutService.update(n, n.chart.width, n.chart.height), t.plugins.notify("afterScaleUpdate", [n]), e.each(o, function (t) {
              t.reset();
            }), n.updateDatasets(), t.plugins.notify("afterUpdate", [n]), n.render(a, i);
          },
          updateDatasets: function updateDatasets() {
            var e,
                a,
                i = this;

            if (t.plugins.notify("beforeDatasetsUpdate", [i])) {
              for (e = 0, a = i.data.datasets.length; a > e; ++e) {
                i.getDatasetMeta(e).controller.update();
              }

              t.plugins.notify("afterDatasetsUpdate", [i]);
            }
          },
          render: function render(a, i) {
            var n = this;
            t.plugins.notify("beforeRender", [n]);
            var o = n.options.animation;

            if (o && ("undefined" != typeof a && 0 !== a || "undefined" == typeof a && 0 !== o.duration)) {
              var r = new t.Animation();
              r.numSteps = (a || o.duration) / 16.66, r.easing = o.easing, r.render = function (t, a) {
                var i = e.easingEffects[a.easing],
                    n = a.currentStep / a.numSteps,
                    o = i(n);
                t.draw(o, n, a.currentStep);
              }, r.onAnimationProgress = o.onProgress, r.onAnimationComplete = o.onComplete, t.animationService.addAnimation(n, r, a, i);
            } else n.draw(), o && o.onComplete && o.onComplete.call && o.onComplete.call(n);

            return n;
          },
          draw: function draw(a) {
            var i = this,
                n = a || 1;
            i.clear(), t.plugins.notify("beforeDraw", [i, n]), e.each(i.boxes, function (t) {
              t.draw(i.chartArea);
            }, i), i.scale && i.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [i, n]), e.each(i.data.datasets, function (t, e) {
              i.isDatasetVisible(e) && i.getDatasetMeta(e).controller.draw(a);
            }, i, !0), t.plugins.notify("afterDatasetsDraw", [i, n]), i.tooltip.transition(n).draw(), t.plugins.notify("afterDraw", [i, n]);
          },
          getElementAtEvent: function getElementAtEvent(t) {
            var a = this,
                i = e.getRelativePosition(t, a.chart),
                n = [];
            return e.each(a.data.datasets, function (t, o) {
              if (a.isDatasetVisible(o)) {
                var r = a.getDatasetMeta(o);
                e.each(r.data, function (t) {
                  return t.inRange(i.x, i.y) ? (n.push(t), n) : void 0;
                });
              }
            }), n.slice(0, 1);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            var a = this,
                i = e.getRelativePosition(t, a.chart),
                n = [],
                o = function () {
              if (a.data.datasets) for (var t = 0; t < a.data.datasets.length; t++) {
                var e = a.getDatasetMeta(t);
                if (a.isDatasetVisible(t)) for (var n = 0; n < e.data.length; n++) {
                  if (e.data[n].inRange(i.x, i.y)) return e.data[n];
                }
              }
            }.call(a);

            return o ? (e.each(a.data.datasets, function (t, e) {
              if (a.isDatasetVisible(e)) {
                var i = a.getDatasetMeta(e),
                    r = i.data[o._index];
                r && !r._view.skip && n.push(r);
              }
            }, a), n) : n;
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            var a = this,
                i = e.getRelativePosition(t, a.chart),
                n = [],
                o = function () {
              if (a.data.datasets) for (var t = 0; t < a.data.datasets.length; t++) {
                var e = a.getDatasetMeta(t);
                if (a.isDatasetVisible(t)) for (var n = 0; n < e.data.length; n++) {
                  if (e.data[n].inLabelRange(i.x, i.y)) return e.data[n];
                }
              }
            }.call(a);

            return o ? (e.each(a.data.datasets, function (t, i) {
              if (a.isDatasetVisible(i)) {
                var r = a.getDatasetMeta(i),
                    l = e.findIndex(r.data, function (t) {
                  return o._model.x === t._model.x;
                });
                -1 === l || r.data[l]._view.skip || n.push(r.data[l]);
              }
            }, a), n) : n;
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e) {
            var a = this;

            switch (e) {
              case "single":
                return a.getElementAtEvent(t);

              case "label":
                return a.getElementsAtEvent(t);

              case "dataset":
                return a.getDatasetAtEvent(t);

              case "x-axis":
                return a.getElementsAtXAxis(t);

              default:
                return t;
            }
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            var e = this.getElementAtEvent(t);
            return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e;
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this,
                a = e.data.datasets[t];
            a._meta || (a._meta = {});
            var i = a._meta[e.id];
            return i || (i = a._meta[e.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, a = this.data.datasets.length; a > e; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroy: function destroy() {
            var a = this;
            a.stop(), a.clear(), e.unbindEvents(a, a.events), e.removeResizeListener(a.chart.canvas.parentNode);
            var i = a.chart.canvas;
            i.width = a.chart.width, i.height = a.chart.height, void 0 !== a.chart.originalDevicePixelRatio && a.chart.ctx.scale(1 / a.chart.originalDevicePixelRatio, 1 / a.chart.originalDevicePixelRatio), i.style.width = a.chart.originalCanvasStyleWidth, i.style.height = a.chart.originalCanvasStyleHeight, t.plugins.notify("destroy", [a]), delete t.instances[a.id];
          },
          toBase64Image: function toBase64Image() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e.chart,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e);
          },
          bindEvents: function bindEvents() {
            var t = this;
            e.bindEvents(t, t.options.events, function (e) {
              t.eventHandler(e);
            });
          },
          updateHoverStyle: function updateHoverStyle(t, e, a) {
            var i,
                n,
                o,
                r = a ? "setHoverStyle" : "removeHoverStyle";

            switch (e) {
              case "single":
                t = [t[0]];
                break;

              case "label":
              case "dataset":
              case "x-axis":
                break;

              default:
                return;
            }

            for (n = 0, o = t.length; o > n; ++n) {
              i = t[n], i && this.getDatasetMeta(i._datasetIndex).controller[r](i);
            }
          },
          eventHandler: function eventHandler(t) {
            var a = this,
                i = a.tooltip,
                n = a.options || {},
                o = n.hover,
                r = n.tooltips;
            return a.lastActive = a.lastActive || [], a.lastTooltipActive = a.lastTooltipActive || [], "mouseout" === t.type ? (a.active = [], a.tooltipActive = []) : (a.active = a.getElementsAtEventForMode(t, o.mode), a.tooltipActive = a.getElementsAtEventForMode(t, r.mode)), o.onHover && o.onHover.call(a, a.active), a.legend && a.legend.handleEvent && a.legend.handleEvent(t), ("mouseup" === t.type || "click" === t.type) && n.onClick && n.onClick.call(a, t, a.active), a.lastActive.length && a.updateHoverStyle(a.lastActive, o.mode, !1), a.active.length && o.mode && a.updateHoverStyle(a.active, o.mode, !0), (r.enabled || r.custom) && (i.initialize(), i._active = a.tooltipActive, i.update(!0)), i.pivot(), a.animating || e.arrayEquals(a.active, a.lastActive) && e.arrayEquals(a.tooltipActive, a.lastTooltipActive) || (a.stop(), (r.enabled || r.custom) && i.update(!0), a.render(o.animationDuration, !0)), a.lastActive = a.active, a.lastTooltipActive = a.tooltipActive, a;
          }
        });
      };
    }, {}],
    24: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = e.noop;
        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, e.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            var a = this;
            a.chart = t, a.index = e, a.linkScales(), a.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                a = t.getDataset();
            null === e.xAxisID && (e.xAxisID = a.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = a.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this,
                e = t.datasetElementType;
            return e && new e({
              _chart: t.chart.chart,
              _datasetIndex: t.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this,
                a = e.dataElementType;
            return a && new a({
              _chart: e.chart.chart,
              _datasetIndex: e.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                a = this,
                i = a.getMeta(),
                n = a.getDataset().data || [],
                o = i.data;

            for (t = 0, e = n.length; e > t; ++t) {
              o[t] = o[t] || a.createMetaData(i, t);
            }

            i.dataset = i.dataset || a.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this,
                a = e.createMetaData(t);
            e.getMeta().data.splice(t, 0, a), e.updateElement(a, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t = this.getMeta(),
                e = t.data,
                a = this.getDataset().data.length,
                i = e.length;
            if (i > a) e.splice(a, i - a);else if (a > i) for (var n = i; a > n; ++n) {
              this.addElementAndReset(n);
            }
          },
          update: a,
          draw: function draw(t) {
            var a = t || 1;
            e.each(this.getMeta().data, function (t) {
              t.transition(a).draw();
            });
          },
          removeHoverStyle: function removeHoverStyle(t, a) {
            var i = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                o = t.custom || {},
                r = e.getValueAtIndexOrDefault,
                l = t._model;
            l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, n, a.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, n, a.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, n, a.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var a = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                o = e.getValueAtIndexOrDefault,
                r = e.getHoverColor,
                l = t._model;
            l.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(a.hoverBackgroundColor, i, r(l.backgroundColor)), l.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(a.hoverBorderColor, i, r(l.borderColor)), l.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(a.hoverBorderWidth, i, l.borderWidth);
          }
        }), t.DatasetController.extend = e.inherits;
      };
    }, {}],
    25: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.elements = {}, t.Element = function (t) {
          e.extend(this, t), this.initialize.apply(this, arguments);
        }, e.extend(t.Element.prototype, {
          initialize: function initialize() {
            this.hidden = !1;
          },
          pivot: function pivot() {
            var t = this;
            return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t;
          },
          transition: function transition(t) {
            var a = this;
            return a._view || (a._view = e.clone(a._model)), 1 === t ? (a._view = a._model, a._start = null, a) : (a._start || a.pivot(), e.each(a._model, function (i, n) {
              if ("_" === n[0]) ;else if (a._view.hasOwnProperty(n)) {
                if (i === a._view[n]) ;else if ("string" == typeof i) try {
                  var o = e.color(a._model[n]).mix(e.color(a._start[n]), t);
                  a._view[n] = o.rgbString();
                } catch (r) {
                  a._view[n] = i;
                } else if ("number" == typeof i) {
                  var l = void 0 !== a._start[n] && isNaN(a._start[n]) === !1 ? a._start[n] : 0;
                  a._view[n] = (a._model[n] - l) * t + l;
                } else a._view[n] = i;
              } else "number" != typeof i || isNaN(a._view[n]) ? a._view[n] = i : a._view[n] = i * t;
            }, a), a);
          },
          tooltipPosition: function tooltipPosition() {
            return {
              x: this._model.x,
              y: this._model.y
            };
          },
          hasValue: function hasValue() {
            return e.isNumber(this._model.x) && e.isNumber(this._model.y);
          }
        }), t.Element.extend = e.inherits;
      };
    }, {}],
    26: [function (t, e, a) {
      "use strict";

      var i = t(3);

      e.exports = function (t) {
        function e(t, e, a) {
          var i;
          return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[a])) : i = t, i;
        }

        function a(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }

        function n(t, i, n) {
          var o = document.defaultView,
              r = t.parentNode,
              l = o.getComputedStyle(t)[i],
              s = o.getComputedStyle(r)[i],
              d = a(l),
              u = a(s),
              c = Number.POSITIVE_INFINITY;
          return d || u ? Math.min(d ? e(l, t, n) : c, u ? e(s, r, n) : c) : "none";
        }

        var o = t.helpers = {};
        o.each = function (t, e, a, i) {
          var n, r;
          if (o.isArray(t)) {
            if (r = t.length, i) for (n = r - 1; n >= 0; n--) {
              e.call(a, t[n], n);
            } else for (n = 0; r > n; n++) {
              e.call(a, t[n], n);
            }
          } else if ("object" == _typeof(t)) {
            var l = Object.keys(t);

            for (r = l.length, n = 0; r > n; n++) {
              e.call(a, t[l[n]], l[n]);
            }
          }
        }, o.clone = function (t) {
          var e = {};
          return o.each(t, function (t, a) {
            o.isArray(t) ? e[a] = t.slice(0) : "object" == _typeof(t) && null !== t ? e[a] = o.clone(t) : e[a] = t;
          }), e;
        }, o.extend = function (t) {
          for (var e = function e(_e, a) {
            t[a] = _e;
          }, a = 1, i = arguments.length; i > a; a++) {
            o.each(arguments[a], e);
          }

          return t;
        }, o.configMerge = function (e) {
          var a = o.clone(e);
          return o.each(Array.prototype.slice.call(arguments, 1), function (e) {
            o.each(e, function (e, i) {
              if ("scales" === i) a[i] = o.scaleMerge(a.hasOwnProperty(i) ? a[i] : {}, e);else if ("scale" === i) a[i] = o.configMerge(a.hasOwnProperty(i) ? a[i] : {}, t.scaleService.getScaleDefaults(e.type), e);else if (a.hasOwnProperty(i) && o.isArray(a[i]) && o.isArray(e)) {
                var n = a[i];
                o.each(e, function (t, e) {
                  e < n.length ? "object" == _typeof(n[e]) && null !== n[e] && "object" == _typeof(t) && null !== t ? n[e] = o.configMerge(n[e], t) : n[e] = t : n.push(t);
                });
              } else a.hasOwnProperty(i) && "object" == _typeof(a[i]) && null !== a[i] && "object" == _typeof(e) ? a[i] = o.configMerge(a[i], e) : a[i] = e;
            });
          }), a;
        }, o.scaleMerge = function (e, a) {
          var i = o.clone(e);
          return o.each(a, function (e, a) {
            "xAxes" === a || "yAxes" === a ? i.hasOwnProperty(a) ? o.each(e, function (e, n) {
              var r = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear"),
                  l = t.scaleService.getScaleDefaults(r);
              n >= i[a].length || !i[a][n].type ? i[a].push(o.configMerge(l, e)) : e.type && e.type !== i[a][n].type ? i[a][n] = o.configMerge(i[a][n], l, e) : i[a][n] = o.configMerge(i[a][n], e);
            }) : (i[a] = [], o.each(e, function (e) {
              var n = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear");
              i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n), e));
            })) : i.hasOwnProperty(a) && "object" == _typeof(i[a]) && null !== i[a] && "object" == _typeof(e) ? i[a] = o.configMerge(i[a], e) : i[a] = e;
          }), i;
        }, o.getValueAtIndexOrDefault = function (t, e, a) {
          return void 0 === t || null === t ? a : o.isArray(t) ? e < t.length ? t[e] : a : t;
        }, o.getValueOrDefault = function (t, e) {
          return void 0 === t ? e : t;
        }, o.indexOf = Array.prototype.indexOf ? function (t, e) {
          return t.indexOf(e);
        } : function (t, e) {
          for (var a = 0, i = t.length; i > a; ++a) {
            if (t[a] === e) return a;
          }

          return -1;
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
          var a = [];
          return o.each(t, function (t) {
            e(t) && a.push(t);
          }), a;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, a) {
          return t.findIndex(e, a);
        } : function (t, e, a) {
          a = void 0 === a ? t : a;

          for (var i = 0, n = t.length; n > i; ++i) {
            if (e.call(a, t[i], i, t)) return i;
          }

          return -1;
        }, o.findNextWhere = function (t, e, a) {
          (void 0 === a || null === a) && (a = -1);

          for (var i = a + 1; i < t.length; i++) {
            var n = t[i];
            if (e(n)) return n;
          }
        }, o.findPreviousWhere = function (t, e, a) {
          (void 0 === a || null === a) && (a = t.length);

          for (var i = a - 1; i >= 0; i--) {
            var n = t[i];
            if (e(n)) return n;
          }
        }, o.inherits = function (t) {
          var e = this,
              a = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = a;
          };

          return i.prototype = e.prototype, a.prototype = new i(), a.extend = o.inherits, t && o.extend(a.prototype, t), a.__super__ = e.prototype, a;
        }, o.noop = function () {}, o.uid = function () {
          var t = 0;
          return function () {
            return t++;
          };
        }(), o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, a) {
          return Math.abs(t - e) < a;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var a = e.x - t.x,
              i = e.y - t.y,
              n = Math.sqrt(a * a + i * i),
              o = Math.atan2(i, a);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: n
          };
        }, o.aliasPixel = function (t) {
          return t % 2 === 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, a, i) {
          var n = t.skip ? e : t,
              o = e,
              r = a.skip ? e : a,
              l = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2)),
              s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              d = l / (l + s),
              u = s / (l + s);
          d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;
          var c = i * d,
              h = i * u;
          return {
            previous: {
              x: o.x - c * (r.x - n.x),
              y: o.y - c * (r.y - n.y)
            },
            next: {
              x: o.x + h * (r.x - n.x),
              y: o.y + h * (r.y - n.y)
            }
          };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              a,
              i,
              n,
              r = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              l = r.length;

          for (e = 0; l > e; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = l - 1 > e ? r[e + 1] : null, n && !n.model.skip && (i.deltaK = (n.model.y - i.model.y) / (n.model.x - i.model.x)), !a || a.model.skip ? i.mK = i.deltaK : !n || n.model.skip ? i.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (a.deltaK + i.deltaK) / 2);
          }

          var s, d, u, c;

          for (e = 0; l - 1 > e; ++e) {
            i = r[e], n = r[e + 1], i.model.skip || n.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = n.mK = 0 : (s = i.mK / i.deltaK, d = n.mK / i.deltaK, c = Math.pow(s, 2) + Math.pow(d, 2), 9 >= c || (u = 3 / Math.sqrt(c), i.mK = s * u * i.deltaK, n.mK = d * u * i.deltaK)));
          }

          var h;

          for (e = 0; l > e; ++e) {
            i = r[e], i.model.skip || (a = e > 0 ? r[e - 1] : null, n = l - 1 > e ? r[e + 1] : null, a && !a.model.skip && (h = (i.model.x - a.model.x) / 3, i.model.controlPointPreviousX = i.model.x - h, i.model.controlPointPreviousY = i.model.y - h * i.mK), n && !n.model.skip && (h = (n.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + h, i.model.controlPointNextY = i.model.y + h * i.mK));
          }
        }, o.nextItem = function (t, e, a) {
          return a ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, a) {
          return a ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var a,
              i = Math.floor(o.log10(t)),
              n = t / Math.pow(10, i);
          return a = e ? 1.5 > n ? 1 : 3 > n ? 2 : 7 > n ? 5 : 10 : 1 >= n ? 1 : 2 >= n ? 2 : 5 >= n ? 5 : 10, a * Math.pow(10, i);
        };
        var r = o.easingEffects = {
          linear: function linear(t) {
            return t;
          },
          easeInQuad: function easeInQuad(t) {
            return t * t;
          },
          easeOutQuad: function easeOutQuad(t) {
            return -1 * t * (t - 2);
          },
          easeInOutQuad: function easeInOutQuad(t) {
            return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function easeInCubic(t) {
            return t * t * t;
          },
          easeOutCubic: function easeOutCubic(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
          },
          easeInOutCubic: function easeInOutCubic(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
          },
          easeOutQuart: function easeOutQuart(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
          },
          easeInOutQuart: function easeInOutQuart(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function easeInQuint(t) {
            return 1 * (t /= 1) * t * t * t * t;
          },
          easeOutQuint: function easeOutQuint(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
          },
          easeInOutQuint: function easeInOutQuint(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function easeInSine(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
          },
          easeOutSine: function easeOutSine(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
          },
          easeInOutSine: function easeInOutSine(t) {
            return -0.5 * (Math.cos(Math.PI * t / 1) - 1);
          },
          easeInExpo: function easeInExpo(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
          },
          easeOutExpo: function easeOutExpo(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
          },
          easeInOutExpo: function easeInOutExpo(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
          },
          easeInCirc: function easeInCirc(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
          },
          easeOutCirc: function easeOutCirc(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
          },
          easeInOutCirc: function easeInOutCirc(t) {
            return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function easeInElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)));
          },
          easeOutElastic: function easeOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / a) + 1);
          },
          easeInOutElastic: function easeInOutElastic(t) {
            var e = 1.70158,
                a = 0,
                i = 1;
            return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (a || (a = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a) * .5 + 1);
          },
          easeInBack: function easeInBack(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e);
          },
          easeOutBack: function easeOutBack(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
          },
          easeInOutBack: function easeInOutBack(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
          },
          easeInBounce: function easeInBounce(t) {
            return 1 - r.easeOutBounce(1 - t);
          },
          easeOutBounce: function easeOutBounce(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
          },
          easeInOutBounce: function easeInOutBounce(t) {
            return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5;
          }
        };
        o.requestAnimFrame = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60);
          };
        }(), o.cancelAnimFrame = function () {
          return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
            return window.clearTimeout(t, 1e3 / 60);
          };
        }(), o.getRelativePosition = function (t, e) {
          var a,
              i,
              n = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              l = r.getBoundingClientRect(),
              s = n.touches;
          s && s.length > 0 ? (a = s[0].clientX, i = s[0].clientY) : (a = n.clientX, i = n.clientY);
          var d = parseFloat(o.getStyle(r, "padding-left")),
              u = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = l.right - l.left - d - c,
              g = l.bottom - l.top - u - h;
          return a = Math.round((a - l.left - d) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - u) / g * r.height / e.currentDevicePixelRatio), {
            x: a,
            y: i
          };
        }, o.addEvent = function (t, e, a) {
          t.addEventListener ? t.addEventListener(e, a) : t.attachEvent ? t.attachEvent("on" + e, a) : t["on" + e] = a;
        }, o.removeEvent = function (t, e, a) {
          t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent ? t.detachEvent("on" + e, a) : t["on" + e] = o.noop;
        }, o.bindEvents = function (t, e, a) {
          var i = t.events = t.events || {};
          o.each(e, function (e) {
            i[e] = function () {
              a.apply(t, arguments);
            }, o.addEvent(t.chart.canvas, e, i[e]);
          });
        }, o.unbindEvents = function (t, e) {
          var a = t.chart.canvas;
          o.each(e, function (t, e) {
            o.removeEvent(a, e, t);
          });
        }, o.getConstraintWidth = function (t) {
          return n(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return n(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-left"), 10),
              i = parseInt(o.getStyle(e, "padding-right"), 10),
              n = e.clientWidth - a - i,
              r = o.getConstraintWidth(t);
          return isNaN(r) ? n : Math.min(n, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode,
              a = parseInt(o.getStyle(e, "padding-top"), 10),
              i = parseInt(o.getStyle(e, "padding-bottom"), 10),
              n = e.clientHeight - a - i,
              r = o.getConstraintHeight(t);
          return isNaN(r) ? n : Math.min(n, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t) {
          var e = t.ctx,
              a = t.canvas,
              i = a.width,
              n = a.height,
              o = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
          1 !== o && (a.height = n * o, a.width = i * o, e.scale(o, o), t.originalDevicePixelRatio = t.originalDevicePixelRatio || o), a.style.width = i + "px", a.style.height = n + "px";
        }, o.clear = function (t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, o.fontString = function (t, e, a) {
          return e + " " + t + "px " + a;
        }, o.longestText = function (t, e, a, i) {
          i = i || {};
          var n = i.data = i.data || {},
              r = i.garbageCollect = i.garbageCollect || [];
          i.font !== e && (n = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
          var l = 0;
          o.each(a, function (e) {
            void 0 !== e && null !== e && o.isArray(e) !== !0 ? l = o.measureText(t, n, r, l, e) : o.isArray(e) && o.each(e, function (e) {
              void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, n, r, l, e));
            });
          });
          var s = r.length / 2;

          if (s > a.length) {
            for (var d = 0; s > d; d++) {
              delete n[r[d]];
            }

            r.splice(0, s);
          }

          return l;
        }, o.measureText = function (t, e, a, i, n) {
          var o = e[n];
          return o || (o = e[n] = t.measureText(n).width, a.push(n)), o > i && (i = o), i;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;
          return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.drawRoundedRectangle = function (t, e, a, i, n, o) {
          t.beginPath(), t.moveTo(e + o, a), t.lineTo(e + i - o, a), t.quadraticCurveTo(e + i, a, e + i, a + o), t.lineTo(e + i, a + n - o), t.quadraticCurveTo(e + i, a + n, e + i - o, a + n), t.lineTo(e + o, a + n), t.quadraticCurveTo(e, a + n, e, a + n - o), t.lineTo(e, a + o), t.quadraticCurveTo(e, a, e + o, a), t.closePath();
        }, o.color = function (e) {
          return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e);
        }, o.addResizeListener = function (t, e) {
          var a = document.createElement("iframe"),
              i = "chartjs-hidden-iframe";
          a.classlist ? a.classlist.add(i) : a.setAttribute("class", i), a.tabIndex = -1;
          var n = a.style;
          n.width = "100%", n.display = "block", n.border = 0, n.height = 0, n.margin = 0, n.position = "absolute", n.left = 0, n.right = 0, n.top = 0, n.bottom = 0, t.insertBefore(a, t.firstChild), (a.contentWindow || a).onresize = function () {
            return e ? e() : void 0;
          };
        }, o.removeResizeListener = function (t) {
          var e = t.querySelector(".chartjs-hidden-iframe");
          e && e.parentNode.removeChild(e);
        }, o.isArray = Array.isArray ? function (t) {
          return Array.isArray(t);
        } : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, o.arrayEquals = function (t, e) {
          var a, i, n, r;
          if (!t || !e || t.length !== e.length) return !1;

          for (a = 0, i = t.length; i > a; ++a) {
            if (n = t[a], r = e[a], n instanceof Array && r instanceof Array) {
              if (!o.arrayEquals(n, r)) return !1;
            } else if (n !== r) return !1;
          }

          return !0;
        }, o.callCallback = function (t, e, a) {
          t && "function" == typeof t.call && t.apply(a, e);
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      3: 3
    }],
    27: [function (t, e, a) {
      "use strict";

      e.exports = function () {
        var t = function t(e, a) {
          var i = this,
              n = t.helpers;
          return i.config = a || {
            data: {
              datasets: []
            }
          }, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), i.ctx = e, i.canvas = e.canvas, e.canvas.style.display = e.canvas.style.display || "block", i.width = e.canvas.width || parseInt(n.getStyle(e.canvas, "width"), 10) || n.getMaximumWidth(e.canvas), i.height = e.canvas.height || parseInt(n.getStyle(e.canvas, "height"), 10) || n.getMaximumHeight(e.canvas), i.aspectRatio = i.width / i.height, (isNaN(i.aspectRatio) || isFinite(i.aspectRatio) === !1) && (i.aspectRatio = void 0 !== a.aspectRatio ? a.aspectRatio : 2), i.originalCanvasStyleWidth = e.canvas.style.width, i.originalCanvasStyleHeight = e.canvas.style.height, n.retinaScale(i), i.controller = new t.Controller(i), n.addResizeListener(e.canvas.parentNode, function () {
            i.controller && i.controller.config.options.responsive && i.controller.resize();
          }), i.controller ? i.controller : i;
        };

        return t.defaults = {
          global: {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
              onHover: null,
              mode: "single",
              animationDuration: 400
            },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            showLines: !0,
            elements: {},
            legendCallback: function legendCallback(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');

              for (var a = 0; a < t.data.datasets.length; a++) {
                e.push('<li><span style="background-color:' + t.data.datasets[a].backgroundColor + '"></span>'), t.data.datasets[a].label && e.push(t.data.datasets[a].label), e.push("</li>");
              }

              return e.push("</ul>"), e.join("");
            }
          }
        }, t.Chart = t, t;
      };
    }, {}],
    28: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.layoutService = {
          defaults: {},
          addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), t.boxes.push(e);
          },
          removeBox: function removeBox(t, e) {
            t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1);
          },
          update: function update(t, a, i) {
            function n(t) {
              var e,
                  a = t.isHorizontal();
              a ? (e = t.update(t.options.fullWidth ? p : k, y), S -= e.height) : (e = t.update(x, v), k -= e.width), w.push({
                horizontal: a,
                minSize: e,
                box: t
              });
            }

            function o(t) {
              var a = e.findNextWhere(w, function (e) {
                return e.box === t;
              });
              if (a) if (t.isHorizontal()) {
                var i = {
                  left: C,
                  right: M,
                  top: 0,
                  bottom: 0
                };
                t.update(t.options.fullWidth ? p : k, m / 2, i);
              } else t.update(a.minSize.width, S);
            }

            function r(t) {
              var a = e.findNextWhere(w, function (e) {
                return e.box === t;
              }),
                  i = {
                left: 0,
                right: 0,
                top: D,
                bottom: I
              };
              a && t.update(a.minSize.width, S, i);
            }

            function l(t) {
              t.isHorizontal() ? (t.left = t.options.fullWidth ? s : C, t.right = t.options.fullWidth ? a - s : C + k, t.top = F, t.bottom = F + t.height, F = t.bottom) : (t.left = P, t.right = P + t.width, t.top = D, t.bottom = D + S, P = t.right);
            }

            if (t) {
              var s = 0,
                  d = 0,
                  u = e.where(t.boxes, function (t) {
                return "left" === t.options.position;
              }),
                  c = e.where(t.boxes, function (t) {
                return "right" === t.options.position;
              }),
                  h = e.where(t.boxes, function (t) {
                return "top" === t.options.position;
              }),
                  f = e.where(t.boxes, function (t) {
                return "bottom" === t.options.position;
              }),
                  g = e.where(t.boxes, function (t) {
                return "chartArea" === t.options.position;
              });
              h.sort(function (t, e) {
                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0);
              }), f.sort(function (t, e) {
                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0);
              });
              var p = a - 2 * s,
                  m = i - 2 * d,
                  b = p / 2,
                  v = m / 2,
                  x = (a - b) / (u.length + c.length),
                  y = (i - v) / (h.length + f.length),
                  k = p,
                  S = m,
                  w = [];
              e.each(u.concat(c, h, f), n);
              var C = s,
                  M = s,
                  D = d,
                  I = d;
              e.each(u.concat(c), o), e.each(u, function (t) {
                C += t.width;
              }), e.each(c, function (t) {
                M += t.width;
              }), e.each(h.concat(f), o), e.each(h, function (t) {
                D += t.height;
              }), e.each(f, function (t) {
                I += t.height;
              }), e.each(u.concat(c), r), C = s, M = s, D = d, I = d, e.each(u, function (t) {
                C += t.width;
              }), e.each(c, function (t) {
                M += t.width;
              }), e.each(h, function (t) {
                D += t.height;
              }), e.each(f, function (t) {
                I += t.height;
              });
              var A = i - D - I,
                  T = a - C - M;
              (T !== k || A !== S) && (e.each(u, function (t) {
                t.height = A;
              }), e.each(c, function (t) {
                t.height = A;
              }), e.each(h, function (t) {
                t.options.fullWidth || (t.width = T);
              }), e.each(f, function (t) {
                t.options.fullWidth || (t.width = T);
              }), S = A, k = T);
              var P = s,
                  F = d;
              e.each(u.concat(h), l), P += k, F += S, e.each(c, l), e.each(f, l), t.chartArea = {
                left: C,
                top: D,
                right: C + k,
                bottom: D + S
              }, e.each(g, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, S);
              });
            }
          }
        };
      };
    }, {}],
    29: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = e.noop;
        t.defaults.global.legend = {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          onClick: function onClick(t, e) {
            var a = e.datasetIndex,
                i = this.chart,
                n = i.getDatasetMeta(a);
            n.hidden = null === n.hidden ? !i.data.datasets[a].hidden : null, i.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var a = t.data;
              return e.isArray(a.datasets) ? a.datasets.map(function (a, i) {
                return {
                  text: a.label,
                  fillStyle: e.isArray(a.backgroundColor) ? a.backgroundColor[0] : a.backgroundColor,
                  hidden: !t.isDatasetVisible(i),
                  lineCap: a.borderCapStyle,
                  lineDash: a.borderDash,
                  lineDashOffset: a.borderDashOffset,
                  lineJoin: a.borderJoinStyle,
                  lineWidth: a.borderWidth,
                  strokeStyle: a.borderColor,
                  pointStyle: a.pointStyle,
                  datasetIndex: i
                };
              }, this) : [];
            }
          }
        }, t.Legend = t.Element.extend({
          initialize: function initialize(t) {
            e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          },
          beforeUpdate: a,
          update: function update(t, e, a) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: a,
          beforeSetDimensions: a,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: a,
          beforeBuildLabels: a,
          buildLabels: function buildLabels() {
            var t = this;
            t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse();
          },
          afterBuildLabels: a,
          beforeFit: a,
          fit: function fit() {
            var a = this,
                i = a.options,
                n = i.labels,
                o = i.display,
                r = a.ctx,
                l = t.defaults.global,
                s = e.getValueOrDefault,
                d = s(n.fontSize, l.defaultFontSize),
                u = s(n.fontStyle, l.defaultFontStyle),
                c = s(n.fontFamily, l.defaultFontFamily),
                h = e.fontString(d, u, c),
                f = a.legendHitBoxes = [],
                g = a.minSize,
                p = a.isHorizontal();
            if (p ? (g.width = a.maxWidth, g.height = o ? 10 : 0) : (g.width = o ? 10 : 0, g.height = a.maxHeight), o) if (r.font = h, p) {
              var m = a.lineWidths = [0],
                  b = a.legendItems.length ? d + n.padding : 0;
              r.textAlign = "left", r.textBaseline = "top", e.each(a.legendItems, function (t, e) {
                var i = n.usePointStyle ? d * Math.sqrt(2) : n.boxWidth,
                    o = i + d / 2 + r.measureText(t.text).width;
                m[m.length - 1] + o + n.padding >= a.width && (b += d + n.padding, m[m.length] = a.left), f[e] = {
                  left: 0,
                  top: 0,
                  width: o,
                  height: d
                }, m[m.length - 1] += o + n.padding;
              }), g.height += b;
            } else {
              var v = n.padding,
                  x = a.columnWidths = [],
                  y = n.padding,
                  k = 0,
                  S = 0,
                  w = d + v;
              e.each(a.legendItems, function (t, e) {
                var a = n.usePointStyle ? 2 * n.boxWidth : n.boxWidth,
                    i = a + d / 2 + r.measureText(t.text).width;
                S + w > g.height && (y += k + n.padding, x.push(k), k = 0, S = 0), k = Math.max(k, i), S += w, f[e] = {
                  left: 0,
                  top: 0,
                  width: i,
                  height: d
                };
              }), y += k, x.push(k), g.width += y;
            }
            a.width = g.width, a.height = g.height;
          },
          afterFit: a,
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          draw: function draw() {
            var a = this,
                i = a.options,
                n = i.labels,
                o = t.defaults.global,
                r = o.elements.line,
                l = a.width,
                s = a.lineWidths;

            if (i.display) {
              var d,
                  u = a.ctx,
                  c = e.getValueOrDefault,
                  h = c(n.fontColor, o.defaultFontColor),
                  f = c(n.fontSize, o.defaultFontSize),
                  g = c(n.fontStyle, o.defaultFontStyle),
                  p = c(n.fontFamily, o.defaultFontFamily),
                  m = e.fontString(f, g, p);
              u.textAlign = "left", u.textBaseline = "top", u.lineWidth = .5, u.strokeStyle = h, u.fillStyle = h, u.font = m;

              var b = n.boxWidth,
                  v = a.legendHitBoxes,
                  x = function x(e, a, n) {
                if (!(isNaN(b) || 0 >= b)) {
                  u.save(), u.fillStyle = c(n.fillStyle, o.defaultColor), u.lineCap = c(n.lineCap, r.borderCapStyle), u.lineDashOffset = c(n.lineDashOffset, r.borderDashOffset), u.lineJoin = c(n.lineJoin, r.borderJoinStyle), u.lineWidth = c(n.lineWidth, r.borderWidth), u.strokeStyle = c(n.strokeStyle, o.defaultColor);
                  var l = 0 === c(n.lineWidth, r.borderWidth);

                  if (u.setLineDash && u.setLineDash(c(n.lineDash, r.borderDash)), i.labels && i.labels.usePointStyle) {
                    var s = f * Math.SQRT2 / 2,
                        d = s / Math.SQRT2,
                        h = e + d,
                        g = a + d;
                    t.canvasHelpers.drawPoint(u, n.pointStyle, s, h, g);
                  } else l || u.strokeRect(e, a, b, f), u.fillRect(e, a, b, f);

                  u.restore();
                }
              },
                  y = function y(t, e, a, i) {
                u.fillText(a.text, b + f / 2 + t, e), a.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(b + f / 2 + t, e + f / 2), u.lineTo(b + f / 2 + t + i, e + f / 2), u.stroke());
              },
                  k = a.isHorizontal();

              d = k ? {
                x: a.left + (l - s[0]) / 2,
                y: a.top + n.padding,
                line: 0
              } : {
                x: a.left + n.padding,
                y: a.top + n.padding,
                line: 0
              };
              var S = f + n.padding;
              e.each(a.legendItems, function (t, e) {
                var i = u.measureText(t.text).width,
                    o = n.usePointStyle ? f + f / 2 + i : b + f / 2 + i,
                    r = d.x,
                    c = d.y;
                k ? r + o >= l && (c = d.y += S, d.line++, r = d.x = a.left + (l - s[d.line]) / 2) : c + S > a.bottom && (r = d.x = r + a.columnWidths[d.line] + n.padding, c = d.y = a.top, d.line++), x(r, c, t), v[e].left = r, v[e].top = c, y(r, c, t, i), k ? d.x += o + n.padding : d.y += S;
              });
            }
          },
          handleEvent: function handleEvent(t) {
            var a = this,
                i = a.options,
                n = "mouseup" === t.type ? "click" : t.type;

            if ("mousemove" === n) {
              if (!i.onHover) return;
            } else {
              if ("click" !== n) return;
              if (!i.onClick) return;
            }

            var o = e.getRelativePosition(t, a.chart.chart),
                r = o.x,
                l = o.y;
            if (r >= a.left && r <= a.right && l >= a.top && l <= a.bottom) for (var s = a.legendHitBoxes, d = 0; d < s.length; ++d) {
              var u = s[d];

              if (r >= u.left && r <= u.left + u.width && l >= u.top && l <= u.top + u.height) {
                if ("click" === n) {
                  i.onClick.call(a, t, a.legendItems[d]);
                  break;
                }

                if ("mousemove" === n) {
                  i.onHover.call(a, t, a.legendItems[d]);
                  break;
                }
              }
            }
          }
        }), t.plugins.register({
          beforeInit: function beforeInit(e) {
            var a = e.options,
                i = a.legend;
            i && (e.legend = new t.Legend({
              ctx: e.chart.ctx,
              options: i,
              chart: e
            }), t.layoutService.addBox(e, e.legend));
          }
        });
      };
    }, {}],
    30: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers.noop;
        t.plugins = {
          _plugins: [],
          register: function register(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            });
          },
          unregister: function unregister(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var a = e.indexOf(t);
              -1 !== a && e.splice(a, 1);
            });
          },
          clear: function clear() {
            this._plugins = [];
          },
          count: function count() {
            return this._plugins.length;
          },
          getAll: function getAll() {
            return this._plugins;
          },
          notify: function notify(t, e) {
            var a,
                i,
                n = this._plugins,
                o = n.length;

            for (a = 0; o > a; ++a) {
              if (i = n[a], "function" == typeof i[t] && i[t].apply(i, e || []) === !1) return !1;
            }

            return !0;
          }
        }, t.PluginBase = t.Element.extend({
          beforeInit: e,
          afterInit: e,
          beforeUpdate: e,
          afterUpdate: e,
          beforeDraw: e,
          afterDraw: e,
          destroy: e
        }), t.pluginService = t.plugins;
      };
    }, {}],
    31: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.scale = {
          display: !0,
          position: "left",
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
          },
          scaleLabel: {
            labelString: "",
            display: !1
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 10,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: function callback(t) {
              return e.isArray(t) ? t : "" + t;
            }
          }
        }, t.Scale = t.Element.extend({
          beforeUpdate: function beforeUpdate() {
            e.callCallback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, a, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = a, n.margins = e.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n.beforeBuildTicks(), n.buildTicks(), n.afterBuildTicks(), n.beforeTickToLabelConversion(), n.convertTicksToLabels(), n.afterTickToLabelConversion(), n.beforeCalculateTickRotation(), n.calculateTickRotation(), n.afterCalculateTickRotation(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
          },
          afterUpdate: function afterUpdate() {
            e.callCallback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            e.callCallback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            e.callCallback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            e.callCallback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: e.noop,
          afterDataLimits: function afterDataLimits() {
            e.callCallback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            e.callCallback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: e.noop,
          afterBuildTicks: function afterBuildTicks() {
            e.callCallback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            e.callCallback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this;
            t.ticks = t.ticks.map(function (e, a, i) {
              return t.options.ticks.userCallback ? t.options.ticks.userCallback(e, a, i) : t.options.ticks.callback(e, a, i);
            }, t);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            e.callCallback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            e.callCallback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var a = this,
                i = a.ctx,
                n = t.defaults.global,
                o = a.options.ticks,
                r = e.getValueOrDefault(o.fontSize, n.defaultFontSize),
                l = e.getValueOrDefault(o.fontStyle, n.defaultFontStyle),
                s = e.getValueOrDefault(o.fontFamily, n.defaultFontFamily),
                d = e.fontString(r, l, s);
            i.font = d;
            var u,
                c = i.measureText(a.ticks[0]).width,
                h = i.measureText(a.ticks[a.ticks.length - 1]).width;

            if (a.labelRotation = o.minRotation || 0, a.paddingRight = 0, a.paddingLeft = 0, a.options.display && a.isHorizontal()) {
              a.paddingRight = h / 2 + 3, a.paddingLeft = c / 2 + 3, a.longestTextCache || (a.longestTextCache = {});

              for (var f, g, p = e.longestText(i, d, a.ticks, a.longestTextCache), m = p, b = a.getPixelForTick(1) - a.getPixelForTick(0) - 6; m > b && a.labelRotation < o.maxRotation;) {
                if (f = Math.cos(e.toRadians(a.labelRotation)), g = Math.sin(e.toRadians(a.labelRotation)), u = f * c, u + r / 2 > a.yLabelWidth && (a.paddingLeft = u + r / 2), a.paddingRight = r / 2, g * p > a.maxHeight) {
                  a.labelRotation--;
                  break;
                }

                a.labelRotation++, m = f * p;
              }
            }

            a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0), a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0));
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            e.callCallback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            e.callCallback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var a = this,
                i = a.minSize = {
              width: 0,
              height: 0
            },
                n = a.options,
                o = t.defaults.global,
                r = n.ticks,
                l = n.scaleLabel,
                s = n.gridLines,
                d = n.display,
                u = a.isHorizontal(),
                c = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                h = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                f = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
                g = e.fontString(c, h, f),
                p = e.getValueOrDefault(l.fontSize, o.defaultFontSize),
                m = n.gridLines.tickMarkLength;

            if (u ? i.width = a.isFullWidth() ? a.maxWidth - a.margins.left - a.margins.right : a.maxWidth : i.width = d && s.drawTicks ? m : 0, u ? i.height = d && s.drawTicks ? m : 0 : i.height = a.maxHeight, l.display && d && (u ? i.height += 1.5 * p : i.width += 1.5 * p), r.display && d) {
              a.longestTextCache || (a.longestTextCache = {});
              var b = e.longestText(a.ctx, g, a.ticks, a.longestTextCache),
                  v = e.numberOfLabelLines(a.ticks),
                  x = .5 * c;

              if (u) {
                a.longestLabelWidth = b;
                var y = Math.sin(e.toRadians(a.labelRotation)) * a.longestLabelWidth + c * v + x * v;
                i.height = Math.min(a.maxHeight, i.height + y), a.ctx.font = g;
                var k = a.ctx.measureText(a.ticks[0]).width,
                    S = a.ctx.measureText(a.ticks[a.ticks.length - 1]).width,
                    w = Math.cos(e.toRadians(a.labelRotation)),
                    C = Math.sin(e.toRadians(a.labelRotation));
                a.paddingLeft = 0 !== a.labelRotation ? w * k + 3 : k / 2 + 3, a.paddingRight = 0 !== a.labelRotation ? C * (c / 2) + 3 : S / 2 + 3;
              } else {
                var M = a.maxWidth - i.width,
                    D = r.mirror;
                D ? b = 0 : b += a.options.ticks.padding, M > b ? i.width += b : i.width = a.maxWidth, a.paddingTop = c / 2, a.paddingBottom = c / 2;
              }
            }

            a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0), a.paddingTop = Math.max(a.paddingTop - a.margins.top, 0), a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0), a.paddingBottom = Math.max(a.paddingBottom - a.margins.bottom, 0)), a.width = i.width, a.height = i.height;
          },
          afterFit: function afterFit() {
            e.callCallback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == _typeof(t) ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t;
          },
          getLabelForIndex: e.noop,
          getPixelForValue: e.noop,
          getValueForPixel: e.noop,
          getPixelForTick: function getPixelForTick(t, e) {
            var a = this;

            if (a.isHorizontal()) {
              var i = a.width - (a.paddingLeft + a.paddingRight),
                  n = i / Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  o = n * t + a.paddingLeft;
              e && (o += n / 2);
              var r = a.left + Math.round(o);
              return r += a.isFullWidth() ? a.margins.left : 0;
            }

            var l = a.height - (a.paddingTop + a.paddingBottom);
            return a.top + t * (l / (a.ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var a = e.width - (e.paddingLeft + e.paddingRight),
                  i = a * t + e.paddingLeft,
                  n = e.left + Math.round(i);
              return n += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            var t = this,
                e = t.min,
                a = t.max;
            return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0);
          },
          draw: function draw(a) {
            var i = this,
                n = i.options;

            if (n.display) {
              var o,
                  r,
                  l = i.ctx,
                  s = t.defaults.global,
                  d = n.ticks,
                  u = n.gridLines,
                  c = n.scaleLabel,
                  h = 0 !== i.labelRotation,
                  f = d.autoSkip,
                  g = i.isHorizontal();
              d.maxTicksLimit && (r = d.maxTicksLimit);
              var p = e.getValueOrDefault(d.fontColor, s.defaultFontColor),
                  m = e.getValueOrDefault(d.fontSize, s.defaultFontSize),
                  b = e.getValueOrDefault(d.fontStyle, s.defaultFontStyle),
                  v = e.getValueOrDefault(d.fontFamily, s.defaultFontFamily),
                  x = e.fontString(m, b, v),
                  y = u.tickMarkLength,
                  k = e.getValueOrDefault(u.borderDash, s.borderDash),
                  S = e.getValueOrDefault(u.borderDashOffset, s.borderDashOffset),
                  w = e.getValueOrDefault(c.fontColor, s.defaultFontColor),
                  C = e.getValueOrDefault(c.fontSize, s.defaultFontSize),
                  M = e.getValueOrDefault(c.fontStyle, s.defaultFontStyle),
                  D = e.getValueOrDefault(c.fontFamily, s.defaultFontFamily),
                  I = e.fontString(C, M, D),
                  A = e.toRadians(i.labelRotation),
                  T = Math.cos(A),
                  P = i.longestLabelWidth * T;
              l.fillStyle = p;
              var F = [];

              if (g) {
                if (o = !1, h && (P /= 2), (P + d.autoSkipPadding) * i.ticks.length > i.width - (i.paddingLeft + i.paddingRight) && (o = 1 + Math.floor((P + d.autoSkipPadding) * i.ticks.length / (i.width - (i.paddingLeft + i.paddingRight)))), r && i.ticks.length > r) for (; !o || i.ticks.length / (o || 1) > r;) {
                  o || (o = 1), o += 1;
                }
                f || (o = !1);
              }

              var R = "right" === n.position ? i.left : i.right - y,
                  _ = "right" === n.position ? i.left + y : i.right,
                  V = "bottom" === n.position ? i.top : i.bottom - y,
                  L = "bottom" === n.position ? i.top + y : i.bottom;

              if (e.each(i.ticks, function (t, r) {
                if (void 0 !== t && null !== t) {
                  var l = i.ticks.length === r + 1,
                      s = o > 1 && r % o > 0 || r % o === 0 && r + o >= i.ticks.length;

                  if ((!s || l) && void 0 !== t && null !== t) {
                    var c, f;
                    r === ("undefined" != typeof i.zeroLineIndex ? i.zeroLineIndex : 0) ? (c = u.zeroLineWidth, f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, r), f = e.getValueAtIndexOrDefault(u.color, r));
                    var p,
                        m,
                        b,
                        v,
                        x,
                        w,
                        C,
                        M,
                        D,
                        I,
                        T = "middle",
                        P = "middle";

                    if (g) {
                      h || (P = "top" === n.position ? "bottom" : "top"), T = h ? "right" : "center";
                      var O = i.getPixelForTick(r) + e.aliasPixel(c);
                      D = i.getPixelForTick(r, u.offsetGridLines) + d.labelOffset, I = h ? i.top + 12 : "top" === n.position ? i.bottom - y : i.top + y, p = b = x = C = O, m = V, v = L, w = a.top, M = a.bottom;
                    } else {
                      "left" === n.position ? d.mirror ? (D = i.right + d.padding, T = "left") : (D = i.right - d.padding, T = "right") : d.mirror ? (D = i.left - d.padding, T = "right") : (D = i.left + d.padding, T = "left");
                      var B = i.getPixelForTick(r);
                      B += e.aliasPixel(c), I = i.getPixelForTick(r, u.offsetGridLines), p = R, b = _, x = a.left, C = a.right, m = v = w = M = B;
                    }

                    F.push({
                      tx1: p,
                      ty1: m,
                      tx2: b,
                      ty2: v,
                      x1: x,
                      y1: w,
                      x2: C,
                      y2: M,
                      labelX: D,
                      labelY: I,
                      glWidth: c,
                      glColor: f,
                      glBorderDash: k,
                      glBorderDashOffset: S,
                      rotation: -1 * A,
                      label: t,
                      textBaseline: P,
                      textAlign: T
                    });
                  }
                }
              }), e.each(F, function (t) {
                if (u.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), u.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                  l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = x, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;
                  var a = t.label;
                  if (e.isArray(a)) for (var i = 0, n = -(a.length - 1) * m * .75; i < a.length; ++i) {
                    l.fillText("" + a[i], 0, n), n += 1.5 * m;
                  } else l.fillText(a, 0, 0);
                  l.restore();
                }
              }), c.display) {
                var O,
                    B,
                    W = 0;
                if (g) O = i.left + (i.right - i.left) / 2, B = "bottom" === n.position ? i.bottom - C / 2 : i.top + C / 2;else {
                  var z = "left" === n.position;
                  O = z ? i.left + C / 2 : i.right - C / 2, B = i.top + (i.bottom - i.top) / 2, W = z ? -.5 * Math.PI : .5 * Math.PI;
                }
                l.save(), l.translate(O, B), l.rotate(W), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = w, l.font = I, l.fillText(c.labelString, 0, 0), l.restore();
              }

              if (u.drawBorder) {
                l.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0), l.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);
                var N = i.left,
                    H = i.right,
                    E = i.top,
                    U = i.bottom,
                    q = e.aliasPixel(l.lineWidth);
                g ? (E = U = "top" === n.position ? i.bottom : i.top, E += q, U += q) : (N = H = "left" === n.position ? i.right : i.left, N += q, H += q), l.beginPath(), l.moveTo(N, E), l.lineTo(H, U), l.stroke();
              }
            }
          }
        });
      };
    }, {}],
    32: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, a, i) {
            this.constructors[t] = a, this.defaults[t] = e.clone(i);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(a) {
            return this.defaults.hasOwnProperty(a) ? e.scaleMerge(t.defaults.scale, this.defaults[a]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, a) {
            var i = this.defaults;
            i.hasOwnProperty(t) && (i[t] = e.extend(i[t], a));
          },
          addScalesToLayout: function addScalesToLayout(a) {
            e.each(a.scales, function (e) {
              t.layoutService.addBox(a, e);
            });
          }
        };
      };
    }, {}],
    33: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.global.title = {
          display: !1,
          position: "top",
          fullWidth: !0,
          fontStyle: "bold",
          padding: 10,
          text: ""
        };
        var a = e.noop;
        t.Title = t.Element.extend({
          initialize: function initialize(a) {
            var i = this;
            e.extend(i, a), i.options = e.configMerge(t.defaults.global.title, a.options), i.legendHitBoxes = [];
          },
          beforeUpdate: function beforeUpdate() {
            var a = this.chart.options;
            a && a.title && (this.options = e.configMerge(t.defaults.global.title, a.title));
          },
          update: function update(t, e, a) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = a, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: a,
          beforeSetDimensions: a,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: a,
          beforeBuildLabels: a,
          buildLabels: a,
          afterBuildLabels: a,
          beforeFit: a,
          fit: function fit() {
            var a = this,
                i = e.getValueOrDefault,
                n = a.options,
                o = t.defaults.global,
                r = n.display,
                l = i(n.fontSize, o.defaultFontSize),
                s = a.minSize;
            a.isHorizontal() ? (s.width = a.maxWidth, s.height = r ? l + 2 * n.padding : 0) : (s.width = r ? l + 2 * n.padding : 0, s.height = a.maxHeight), a.width = s.width, a.height = s.height;
          },
          afterFit: a,
          isHorizontal: function isHorizontal() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function draw() {
            var a = this,
                i = a.ctx,
                n = e.getValueOrDefault,
                o = a.options,
                r = t.defaults.global;

            if (o.display) {
              var l,
                  s,
                  d = n(o.fontSize, r.defaultFontSize),
                  u = n(o.fontStyle, r.defaultFontStyle),
                  c = n(o.fontFamily, r.defaultFontFamily),
                  h = e.fontString(d, u, c),
                  f = 0,
                  g = a.top,
                  p = a.left,
                  m = a.bottom,
                  b = a.right;
              i.fillStyle = n(o.fontColor, r.defaultFontColor), i.font = h, a.isHorizontal() ? (l = p + (b - p) / 2, s = g + (m - g) / 2) : (l = "left" === o.position ? p + d / 2 : b - d / 2, s = g + (m - g) / 2, f = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(l, s), i.rotate(f), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0), i.restore();
            }
          }
        }), t.plugins.register({
          beforeInit: function beforeInit(e) {
            var a = e.options,
                i = a.title;
            i && (e.titleBlock = new t.Title({
              ctx: e.chart.ctx,
              options: i,
              chart: e
            }), t.layoutService.addBox(e, e.titleBlock));
          }
        });
      };
    }, {}],
    34: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return e && (n.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function a(t) {
          if (!t.length) return !1;
          var e,
              a,
              i = [],
              n = [];

          for (e = 0, a = t.length; a > e; ++e) {
            var o = t[e];

            if (o && o.hasValue()) {
              var r = o.tooltipPosition();
              i.push(r.x), n.push(r.y);
            }
          }

          var l = 0,
              s = 0;

          for (e = 0; e < i.length; ++e) {
            i[e] && (l += i[e], s += n[e]);
          }

          return {
            x: Math.round(l / i.length),
            y: Math.round(s / i.length)
          };
        }

        function i(t) {
          var e = t._xScale,
              a = t._yScale || t._scale,
              i = t._index,
              n = t._datasetIndex;
          return {
            xLabel: e ? e.getLabelForIndex(i, n) : "",
            yLabel: a ? a.getLabelForIndex(i, n) : "",
            index: i,
            datasetIndex: n
          };
        }

        var n = t.helpers;
        t.defaults.global.tooltips = {
          enabled: !0,
          custom: null,
          mode: "single",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          yAlign: "center",
          xAlign: "center",
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          callbacks: {
            beforeTitle: n.noop,
            title: function title(t, e) {
              var a = "",
                  i = e.labels,
                  n = i ? i.length : 0;

              if (t.length > 0) {
                var o = t[0];
                o.xLabel ? a = o.xLabel : n > 0 && o.index < n && (a = i[o.index]);
              }

              return a;
            },
            afterTitle: n.noop,
            beforeBody: n.noop,
            beforeLabel: n.noop,
            label: function label(t, e) {
              var a = e.datasets[t.datasetIndex].label || "";
              return a + ": " + t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var a = e.getDatasetMeta(t.datasetIndex),
                  i = a.data[t.index],
                  n = i._view;
              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor
              };
            },
            afterLabel: n.noop,
            afterBody: n.noop,
            beforeFooter: n.noop,
            footer: n.noop,
            afterFooter: n.noop
          }
        }, t.Tooltip = t.Element.extend({
          initialize: function initialize() {
            var e = this,
                a = t.defaults.global,
                i = e._options,
                o = n.getValueOrDefault;
            n.extend(e, {
              _model: {
                xPadding: i.xPadding,
                yPadding: i.yPadding,
                xAlign: i.xAlign,
                yAlign: i.yAlign,
                bodyFontColor: i.bodyFontColor,
                _bodyFontFamily: o(i.bodyFontFamily, a.defaultFontFamily),
                _bodyFontStyle: o(i.bodyFontStyle, a.defaultFontStyle),
                _bodyAlign: i.bodyAlign,
                bodyFontSize: o(i.bodyFontSize, a.defaultFontSize),
                bodySpacing: i.bodySpacing,
                titleFontColor: i.titleFontColor,
                _titleFontFamily: o(i.titleFontFamily, a.defaultFontFamily),
                _titleFontStyle: o(i.titleFontStyle, a.defaultFontStyle),
                titleFontSize: o(i.titleFontSize, a.defaultFontSize),
                _titleAlign: i.titleAlign,
                titleSpacing: i.titleSpacing,
                titleMarginBottom: i.titleMarginBottom,
                footerFontColor: i.footerFontColor,
                _footerFontFamily: o(i.footerFontFamily, a.defaultFontFamily),
                _footerFontStyle: o(i.footerFontStyle, a.defaultFontStyle),
                footerFontSize: o(i.footerFontSize, a.defaultFontSize),
                _footerAlign: i.footerAlign,
                footerSpacing: i.footerSpacing,
                footerMarginTop: i.footerMarginTop,
                caretSize: i.caretSize,
                cornerRadius: i.cornerRadius,
                backgroundColor: i.backgroundColor,
                opacity: 0,
                legendColorBackground: i.multiKeyBackground
              }
            });
          },
          getTitle: function getTitle() {
            var t = this,
                a = t._options,
                i = a.callbacks,
                n = i.beforeTitle.apply(t, arguments),
                o = i.title.apply(t, arguments),
                r = i.afterTitle.apply(t, arguments),
                l = [];
            return l = e(l, n), l = e(l, o), l = e(l, r);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return n.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, a) {
            var i = this,
                o = i._options.callbacks,
                r = [];
            return n.each(t, function (t) {
              var n = {
                before: [],
                lines: [],
                after: []
              };
              e(n.before, o.beforeLabel.call(i, t, a)), e(n.lines, o.label.call(i, t, a)), e(n.after, o.afterLabel.call(i, t, a)), r.push(n);
            }), r;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return n.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this,
                a = t._options.callbacks,
                i = a.beforeFooter.apply(t, arguments),
                n = a.footer.apply(t, arguments),
                o = a.afterFooter.apply(t, arguments),
                r = [];
            return r = e(r, i), r = e(r, n), r = e(r, o);
          },
          update: function update(t) {
            var e,
                o,
                r = this,
                l = r._options,
                s = r._model,
                d = r._active,
                u = r._data,
                c = r._chartInstance;

            if (d.length) {
              s.opacity = 1;
              var h = [],
                  f = a(d),
                  g = [];

              for (e = 0, o = d.length; o > e; ++e) {
                g.push(i(d[e]));
              }

              l.itemSort && (g = g.sort(function (t, e) {
                return l.itemSort(t, e, u);
              })), d.length > 1 && n.each(g, function (t) {
                h.push(l.callbacks.labelColor.call(r, t, c));
              }), n.extend(s, {
                title: r.getTitle(g, u),
                beforeBody: r.getBeforeBody(g, u),
                body: r.getBody(g, u),
                afterBody: r.getAfterBody(g, u),
                footer: r.getFooter(g, u),
                x: Math.round(f.x),
                y: Math.round(f.y),
                caretPadding: n.getValueOrDefault(f.padding, 2),
                labelColors: h
              });
              var p = r.getTooltipSize(s);
              r.determineAlignment(p), n.extend(s, r.getBackgroundPoint(s, p));
            } else r._model.opacity = 0;

            return t && l.custom && l.custom.call(r, s), r;
          },
          getTooltipSize: function getTooltipSize(t) {
            var e = this._chart.ctx,
                a = {
              height: 2 * t.yPadding,
              width: 0
            },
                i = t.body,
                o = i.reduce(function (t, e) {
              return t + e.before.length + e.lines.length + e.after.length;
            }, 0);
            o += t.beforeBody.length + t.afterBody.length;
            var r = t.title.length,
                l = t.footer.length,
                s = t.titleFontSize,
                d = t.bodyFontSize,
                u = t.footerFontSize;
            a.height += r * s, a.height += (r - 1) * t.titleSpacing, a.height += r ? t.titleMarginBottom : 0, a.height += o * d, a.height += o ? (o - 1) * t.bodySpacing : 0, a.height += l ? t.footerMarginTop : 0, a.height += l * u, a.height += l ? (l - 1) * t.footerSpacing : 0;

            var c = 0,
                h = function h(t) {
              a.width = Math.max(a.width, e.measureText(t).width + c);
            };

            return e.font = n.fontString(s, t._titleFontStyle, t._titleFontFamily), n.each(t.title, h), e.font = n.fontString(d, t._bodyFontStyle, t._bodyFontFamily), n.each(t.beforeBody.concat(t.afterBody), h), c = i.length > 1 ? d + 2 : 0, n.each(i, function (t) {
              n.each(t.before, h), n.each(t.lines, h), n.each(t.after, h);
            }), c = 0, e.font = n.fontString(u, t._footerFontStyle, t._footerFontFamily), n.each(t.footer, h), a.width += 2 * t.xPadding, a;
          },
          determineAlignment: function determineAlignment(t) {
            var e = this,
                a = e._model,
                i = e._chart,
                n = e._chartInstance.chartArea;
            a.y < t.height ? a.yAlign = "top" : a.y > i.height - t.height && (a.yAlign = "bottom");
            var o,
                r,
                l,
                s,
                d,
                u = (n.left + n.right) / 2,
                c = (n.top + n.bottom) / 2;
            "center" === a.yAlign ? (o = function o(t) {
              return u >= t;
            }, r = function r(t) {
              return t > u;
            }) : (o = function o(e) {
              return e <= t.width / 2;
            }, r = function r(e) {
              return e >= i.width - t.width / 2;
            }), l = function l(e) {
              return e + t.width > i.width;
            }, s = function s(e) {
              return e - t.width < 0;
            }, d = function d(t) {
              return c >= t ? "top" : "bottom";
            }, o(a.x) ? (a.xAlign = "left", l(a.x) && (a.xAlign = "center", a.yAlign = d(a.y))) : r(a.x) && (a.xAlign = "right", s(a.x) && (a.xAlign = "center", a.yAlign = d(a.y)));
          },
          getBackgroundPoint: function getBackgroundPoint(t, e) {
            var a = {
              x: t.x,
              y: t.y
            },
                i = t.caretSize,
                n = t.caretPadding,
                o = t.cornerRadius,
                r = t.xAlign,
                l = t.yAlign,
                s = i + n,
                d = o + n;
            return "right" === r ? a.x -= e.width : "center" === r && (a.x -= e.width / 2), "top" === l ? a.y += s : "bottom" === l ? a.y -= e.height + s : a.y -= e.height / 2, "center" === l ? "left" === r ? a.x += s : "right" === r && (a.x -= s) : "left" === r ? a.x -= d : "right" === r && (a.x += d), a;
          },
          drawCaret: function drawCaret(t, e, a) {
            var i,
                o,
                r,
                l,
                s,
                d,
                u = this._view,
                c = this._chart.ctx,
                h = u.caretSize,
                f = u.cornerRadius,
                g = u.xAlign,
                p = u.yAlign,
                m = t.x,
                b = t.y,
                v = e.width,
                x = e.height;
            "center" === p ? ("left" === g ? (i = m, o = i - h, r = i) : (i = m + v, o = i + h, r = i), s = b + x / 2, l = s - h, d = s + h) : ("left" === g ? (i = m + f, o = i + h, r = o + h) : "right" === g ? (i = m + v - f, o = i - h, r = o - h) : (o = m + v / 2, i = o - h, r = o + h), "top" === p ? (l = b, s = l - h, d = l) : (l = b + x, s = l + h, d = l));
            var y = n.color(u.backgroundColor);
            c.fillStyle = y.alpha(a * y.alpha()).rgbString(), c.beginPath(), c.moveTo(i, l), c.lineTo(o, s), c.lineTo(r, d), c.closePath(), c.fill();
          },
          drawTitle: function drawTitle(t, e, a, i) {
            var o = e.title;

            if (o.length) {
              a.textAlign = e._titleAlign, a.textBaseline = "top";
              var r = e.titleFontSize,
                  l = e.titleSpacing,
                  s = n.color(e.titleFontColor);
              a.fillStyle = s.alpha(i * s.alpha()).rgbString(), a.font = n.fontString(r, e._titleFontStyle, e._titleFontFamily);
              var d, u;

              for (d = 0, u = o.length; u > d; ++d) {
                a.fillText(o[d], t.x, t.y), t.y += r + l, d + 1 === o.length && (t.y += e.titleMarginBottom - l);
              }
            }
          },
          drawBody: function drawBody(t, e, a, i) {
            var o = e.bodyFontSize,
                r = e.bodySpacing,
                l = e.body;
            a.textAlign = e._bodyAlign, a.textBaseline = "top";
            var s = n.color(e.bodyFontColor),
                d = s.alpha(i * s.alpha()).rgbString();
            a.fillStyle = d, a.font = n.fontString(o, e._bodyFontStyle, e._bodyFontFamily);

            var u = 0,
                c = function c(e) {
              a.fillText(e, t.x + u, t.y), t.y += o + r;
            };

            n.each(e.beforeBody, c);
            var h = l.length > 1;
            u = h ? o + 2 : 0, n.each(l, function (r, l) {
              n.each(r.before, c), n.each(r.lines, function (r) {
                h && (a.fillStyle = n.color(e.legendColorBackground).alpha(i).rgbaString(), a.fillRect(t.x, t.y, o, o), a.strokeStyle = n.color(e.labelColors[l].borderColor).alpha(i).rgbaString(), a.strokeRect(t.x, t.y, o, o), a.fillStyle = n.color(e.labelColors[l].backgroundColor).alpha(i).rgbaString(), a.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), a.fillStyle = d), c(r);
              }), n.each(r.after, c);
            }), u = 0, n.each(e.afterBody, c), t.y -= r;
          },
          drawFooter: function drawFooter(t, e, a, i) {
            var o = e.footer;

            if (o.length) {
              t.y += e.footerMarginTop, a.textAlign = e._footerAlign, a.textBaseline = "top";
              var r = n.color(e.footerFontColor);
              a.fillStyle = r.alpha(i * r.alpha()).rgbString(), a.font = n.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), n.each(o, function (i) {
                a.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
              });
            }
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var a = this.getTooltipSize(e),
                  i = {
                x: e.x,
                y: e.y
              },
                  o = Math.abs(e.opacity < .001) ? 0 : e.opacity;

              if (this._options.enabled) {
                var r = n.color(e.backgroundColor);
                t.fillStyle = r.alpha(o * r.alpha()).rgbString(), n.drawRoundedRectangle(t, i.x, i.y, a.width, a.height, e.cornerRadius), t.fill(), this.drawCaret(i, a, o), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, o), this.drawBody(i, e, t, o), this.drawFooter(i, e, t, o);
              }
            }
          }
        });
      };
    }, {}],
    35: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;
        a.elements.arc = {
          backgroundColor: a.defaultColor,
          borderColor: "#fff",
          borderWidth: 2
        }, t.elements.Arc = t.Element.extend({
          inLabelRange: function inLabelRange(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1;
          },
          inRange: function inRange(t, a) {
            var i = this._view;

            if (i) {
              for (var n = e.getAngleFromPoint(i, {
                x: t,
                y: a
              }), o = n.angle, r = n.distance, l = i.startAngle, s = i.endAngle; l > s;) {
                s += 2 * Math.PI;
              }

              for (; o > s;) {
                o -= 2 * Math.PI;
              }

              for (; l > o;) {
                o += 2 * Math.PI;
              }

              var d = o >= l && s >= o,
                  u = r >= i.innerRadius && r <= i.outerRadius;
              return d && u;
            }

            return !1;
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                a = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
              x: t.x + Math.cos(e) * a,
              y: t.y + Math.sin(e) * a
            };
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view,
                a = e.startAngle,
                i = e.endAngle;
            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, a, i), t.arc(e.x, e.y, e.innerRadius, i, a, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
          }
        });
      };
    }, {}],
    36: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global;
        t.defaults.global.elements.line = {
          tension: .4,
          backgroundColor: a.defaultColor,
          borderWidth: 3,
          borderColor: a.defaultColor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0
        }, t.elements.Line = t.Element.extend({
          draw: function draw() {
            function t(t, e) {
              var a = e._view;
              e._view.steppedLine === !0 ? (s.lineTo(a.x, t._view.y), s.lineTo(a.x, a.y)) : 0 === e._view.tension ? s.lineTo(a.x, a.y) : s.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, a.controlPointPreviousX, a.controlPointPreviousY, a.x, a.y);
            }

            var i = this,
                n = i._view,
                o = n.spanGaps,
                r = n.scaleZero,
                l = i._loop,
                s = i._chart.ctx;
            s.save();

            var d = i._children.slice(),
                u = -1;

            l && d.length && d.push(d[0]);
            var c, h, f, g;

            if (d.length && n.fill) {
              for (s.beginPath(), c = 0; c < d.length; ++c) {
                h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? (l ? s.moveTo(r.x, r.y) : s.moveTo(g.x, r), g.skip || (u = c, s.lineTo(g.x, g.y))) : (f = -1 === u ? f : d[u], g.skip ? o || u !== c - 1 || (l ? s.lineTo(r.x, r.y) : s.lineTo(f._view.x, r)) : (u !== c - 1 ? o && -1 !== u ? t(f, h) : l ? s.lineTo(g.x, g.y) : (s.lineTo(g.x, r), s.lineTo(g.x, g.y)) : t(f, h), u = c));
              }

              l || -1 === u || s.lineTo(d[u]._view.x, r), s.fillStyle = n.backgroundColor || a.defaultColor, s.closePath(), s.fill();
            }

            var p = a.elements.line;

            for (s.lineCap = n.borderCapStyle || p.borderCapStyle, s.setLineDash && s.setLineDash(n.borderDash || p.borderDash), s.lineDashOffset = n.borderDashOffset || p.borderDashOffset, s.lineJoin = n.borderJoinStyle || p.borderJoinStyle, s.lineWidth = n.borderWidth || p.borderWidth, s.strokeStyle = n.borderColor || a.defaultColor, s.beginPath(), u = -1, c = 0; c < d.length; ++c) {
              h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? g.skip || (s.moveTo(g.x, g.y), u = c) : (f = -1 === u ? f : d[u], g.skip || (u !== c - 1 && !o || -1 === u ? s.moveTo(g.x, g.y) : t(f, h), u = c));
            }

            s.stroke(), s.restore();
          }
        });
      };
    }, {}],
    37: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global,
            i = a.defaultColor;
        a.elements.point = {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: i,
          borderWidth: 1,
          borderColor: i,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }, t.elements.Point = t.Element.extend({
          inRange: function inRange(t, e) {
            var a = this._view;
            return a ? Math.pow(t - a.x, 2) + Math.pow(e - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2) : !1;
          },
          inLabelRange: function inLabelRange(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y,
              padding: t.radius + t.borderWidth
            };
          },
          draw: function draw() {
            var n = this._view,
                o = this._chart.ctx,
                r = n.pointStyle,
                l = n.radius,
                s = n.x,
                d = n.y;
            n.skip || (o.strokeStyle = n.borderColor || i, o.lineWidth = e.getValueOrDefault(n.borderWidth, a.elements.point.borderWidth), o.fillStyle = n.backgroundColor || i, t.canvasHelpers.drawPoint(o, r, l, s, d));
          }
        });
      };
    }, {}],
    38: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.defaults.global;
        e.elements.rectangle = {
          backgroundColor: e.defaultColor,
          borderWidth: 0,
          borderColor: e.defaultColor,
          borderSkipped: "bottom"
        }, t.elements.Rectangle = t.Element.extend({
          draw: function draw() {
            function t(t) {
              return s[(u + t) % 4];
            }

            var e = this._chart.ctx,
                a = this._view,
                i = a.width / 2,
                n = a.x - i,
                o = a.x + i,
                r = a.base - (a.base - a.y),
                l = a.borderWidth / 2;
            a.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = a.backgroundColor, e.strokeStyle = a.borderColor, e.lineWidth = a.borderWidth;
            var s = [[n, a.base], [n, r], [o, r], [o, a.base]],
                d = ["bottom", "left", "top", "right"],
                u = d.indexOf(a.borderSkipped, 0);
            -1 === u && (u = 0), e.moveTo.apply(e, t(0));

            for (var c = 1; 4 > c; c++) {
              e.lineTo.apply(e, t(c));
            }

            e.fill(), a.borderWidth && e.stroke();
          },
          height: function height() {
            var t = this._view;
            return t.base - t.y;
          },
          inRange: function inRange(t, e) {
            var a = this._view;
            return a ? a.y < a.base ? t >= a.x - a.width / 2 && t <= a.x + a.width / 2 && e >= a.y && e <= a.base : t >= a.x - a.width / 2 && t <= a.x + a.width / 2 && e >= a.base && e <= a.y : !1;
          },
          inLabelRange: function inLabelRange(t) {
            var e = this._view;
            return e ? t >= e.x - e.width / 2 && t <= e.x + e.width / 2 : !1;
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y
            };
          }
        });
      };
    }, {}],
    39: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = {
          position: "bottom"
        },
            i = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.getLabels();
            t.minIndex = 0, t.maxIndex = a.length - 1;
            var i;
            void 0 !== t.options.ticks.min && (i = e.indexOf(a, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(a, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data,
                n = a.isHorizontal();
            return i.xLabels && n || i.yLabels && !n ? a.getRightValue(i.datasets[e].data[t]) : a.ticks[t];
          },
          getPixelForValue: function getPixelForValue(t, e, a, i) {
            var n = this,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (n.options.gridLines.offsetGridLines ? 0 : 1), 1);

            if (void 0 !== t && isNaN(e)) {
              var r = n.getLabels(),
                  l = r.indexOf(t);
              e = -1 !== l ? l : e;
            }

            if (n.isHorizontal()) {
              var s = n.width - (n.paddingLeft + n.paddingRight),
                  d = s / o,
                  u = d * (e - n.minIndex) + n.paddingLeft;
              return (n.options.gridLines.offsetGridLines && i || n.maxIndex === n.minIndex && i) && (u += d / 2), n.left + Math.round(u);
            }

            var c = n.height - (n.paddingTop + n.paddingBottom),
                h = c / o,
                f = h * (e - n.minIndex) + n.paddingTop;
            return n.options.gridLines.offsetGridLines && i && (f += h / 2), n.top + Math.round(f);
          },
          getPixelForTick: function getPixelForTick(t, e) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e,
                a = this,
                i = Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1),
                n = a.isHorizontal(),
                o = n ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.paddingBottom),
                r = o / i;
            return t -= n ? a.left : a.top, a.options.gridLines.offsetGridLines && (t -= r / 2), t -= n ? a.paddingLeft : a.paddingTop, e = 0 >= t ? 0 : Math.round(t / r);
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", i, a);
      };
    }, {}],
    40: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = {
          position: "left",
          ticks: {
            callback: function callback(t, a, i) {
              var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
              Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
              var o = e.log10(Math.abs(n)),
                  r = "";

              if (0 !== t) {
                var l = -1 * Math.floor(o);
                l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
              } else r = "0";

              return r;
            }
          }
        },
            i = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return l ? t.xAxisID === a.id : t.yAxisID === a.id;
            }

            var a = this,
                i = a.options,
                n = a.chart,
                o = n.data,
                r = o.datasets,
                l = a.isHorizontal();

            if (a.min = null, a.max = null, i.stacked) {
              var s = {};
              e.each(r, function (o, r) {
                var l = n.getDatasetMeta(r);
                void 0 === s[l.type] && (s[l.type] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = s[l.type].positiveValues,
                    u = s[l.type].negativeValues;
                n.isDatasetVisible(r) && t(l) && e.each(o.data, function (t, e) {
                  var n = +a.getRightValue(t);
                  isNaN(n) || l.data[e].hidden || (d[e] = d[e] || 0, u[e] = u[e] || 0, i.relativePoints ? d[e] = 100 : 0 > n ? u[e] += n : d[e] += n);
                });
              }), e.each(s, function (t) {
                var i = t.positiveValues.concat(t.negativeValues),
                    n = e.min(i),
                    o = e.max(i);
                a.min = null === a.min ? n : Math.min(a.min, n), a.max = null === a.max ? o : Math.max(a.max, o);
              });
            } else e.each(r, function (i, o) {
              var r = n.getDatasetMeta(o);
              n.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);
                isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i));
              });
            });

            this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var a,
                i = this,
                n = i.options.ticks;
            if (i.isHorizontal()) a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.width / 50));else {
              var o = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);
              a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)));
            }
            return a;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                a,
                i = this,
                n = i.paddingLeft,
                o = i.paddingBottom,
                r = i.start,
                l = +i.getRightValue(t),
                s = i.end - r;
            return i.isHorizontal() ? (a = i.width - (n + i.paddingRight), e = i.left + a / s * (l - r), Math.round(e + n)) : (a = i.height - (i.paddingTop + o), e = i.bottom - o - a / s * (l - r), Math.round(e));
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal(),
                i = e.paddingLeft,
                n = e.paddingBottom,
                o = a ? e.width - (i + e.paddingRight) : e.height - (e.paddingTop + n),
                r = (a ? t - e.left - i : e.bottom - n - t) / o;
            return e.start + (e.end - e.start) * r;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", i, a);
      };
    }, {}],
    41: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = e.noop;
        t.LinearScaleBase = t.Scale.extend({
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                a = t.options,
                i = a.ticks;

            if (i.beginAtZero) {
              var n = e.sign(t.min),
                  o = e.sign(t.max);
              0 > n && 0 > o ? t.max = 0 : n > 0 && o > 0 && (t.min = 0);
            }

            void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--);
          },
          getTickLimit: a,
          handleDirectionalChanges: a,
          buildTicks: function buildTicks() {
            var t = this,
                a = t.options,
                i = t.ticks = [],
                n = a.ticks,
                o = e.getValueOrDefault,
                r = t.getTickLimit();
            r = Math.max(2, r);
            var l,
                s = n.fixedStepSize && n.fixedStepSize > 0 || n.stepSize && n.stepSize > 0;
            if (s) l = o(n.fixedStepSize, n.stepSize);else {
              var d = e.niceNum(t.max - t.min, !1);
              l = e.niceNum(d / (r - 1), !0);
            }
            var u = Math.floor(t.min / l) * l,
                c = Math.ceil(t.max / l) * l,
                h = (c - u) / l;
            h = e.almostEquals(h, Math.round(h), l / 1e3) ? Math.round(h) : Math.ceil(h), i.push(void 0 !== n.min ? n.min : u);

            for (var f = 1; h > f; ++f) {
              i.push(u + f * l);
            }

            i.push(void 0 !== n.max ? n.max : c), t.handleDirectionalChanges(), t.max = e.max(i), t.min = e.min(i), n.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {}],
    42: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = {
          position: "left",
          ticks: {
            callback: function callback(t, a, i) {
              var n = t / Math.pow(10, Math.floor(e.log10(t)));
              return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === a || a === i.length - 1 ? t.toExponential() : "";
            }
          }
        },
            i = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return d ? t.xAxisID === a.id : t.yAxisID === a.id;
            }

            var a = this,
                i = a.options,
                n = i.ticks,
                o = a.chart,
                r = o.data,
                l = r.datasets,
                s = e.getValueOrDefault,
                d = a.isHorizontal();

            if (a.min = null, a.max = null, a.minNotZero = null, i.stacked) {
              var u = {};
              e.each(l, function (n, r) {
                var l = o.getDatasetMeta(r);
                o.isDatasetVisible(r) && t(l) && (void 0 === u[l.type] && (u[l.type] = []), e.each(n.data, function (t, e) {
                  var n = u[l.type],
                      o = +a.getRightValue(t);
                  isNaN(o) || l.data[e].hidden || (n[e] = n[e] || 0, i.relativePoints ? n[e] = 100 : n[e] += o);
                }));
              }), e.each(u, function (t) {
                var i = e.min(t),
                    n = e.max(t);
                a.min = null === a.min ? i : Math.min(a.min, i), a.max = null === a.max ? n : Math.max(a.max, n);
              });
            } else e.each(l, function (i, n) {
              var r = o.getDatasetMeta(n);
              o.isDatasetVisible(n) && t(r) && e.each(i.data, function (t, e) {
                var i = +a.getRightValue(t);
                isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i), null === a.max ? a.max = i : i > a.max && (a.max = i), 0 !== i && (null === a.minNotZero || i < a.minNotZero) && (a.minNotZero = i));
              });
            });

            a.min = s(n.min, a.min), a.max = s(n.max, a.max), a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(e.log10(a.min)) - 1), a.max = Math.pow(10, Math.floor(e.log10(a.max)) + 1)) : (a.min = 1, a.max = 10));
          },
          buildTicks: function buildTicks() {
            for (var t = this, a = t.options, i = a.ticks, n = e.getValueOrDefault, o = t.ticks = [], r = n(i.min, Math.pow(10, Math.floor(e.log10(t.min)))); r < t.max;) {
              o.push(r);
              var l, s;
              0 === r ? (l = Math.floor(e.log10(t.minNotZero)), s = Math.round(t.minNotZero / Math.pow(10, l))) : (l = Math.floor(e.log10(r)), s = Math.floor(r / Math.pow(10, l)) + 1), 10 === s && (s = 1, ++l), r = s * Math.pow(10, l);
            }

            var d = n(i.max, r);
            o.push(d), t.isHorizontal() || o.reverse(), t.max = e.max(o), t.min = e.min(o), i.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var a,
                i,
                n,
                o = this,
                r = o.start,
                l = +o.getRightValue(t),
                s = o.paddingTop,
                d = o.paddingBottom,
                u = o.paddingLeft,
                c = o.options,
                h = c.ticks;
            return o.isHorizontal() ? (n = e.log10(o.end) - e.log10(r), 0 === l ? i = o.left + u : (a = o.width - (u + o.paddingRight), i = o.left + a / n * (e.log10(l) - e.log10(r)), i += u)) : (a = o.height - (s + d), 0 !== r || h.reverse ? 0 === o.end && h.reverse ? (n = e.log10(o.start) - e.log10(o.minNotZero), i = l === o.end ? o.top + s : l === o.minNotZero ? o.top + s + .02 * a : o.top + s + .02 * a + .98 * a / n * (e.log10(l) - e.log10(o.minNotZero))) : (n = e.log10(o.end) - e.log10(r), a = o.height - (s + d), i = o.bottom - d - a / n * (e.log10(l) - e.log10(r))) : (n = e.log10(o.end) - e.log10(o.minNotZero), i = l === r ? o.bottom - d : l === o.minNotZero ? o.bottom - d - .02 * a : o.bottom - d - .02 * a - .98 * a / n * (e.log10(l) - e.log10(o.minNotZero)))), i;
          },
          getValueForPixel: function getValueForPixel(t) {
            var a,
                i,
                n = this,
                o = e.log10(n.end) - e.log10(n.start);
            return n.isHorizontal() ? (i = n.width - (n.paddingLeft + n.paddingRight), a = n.start * Math.pow(10, (t - n.left - n.paddingLeft) * o / i)) : (i = n.height - (n.paddingTop + n.paddingBottom), a = Math.pow(10, (n.bottom - n.paddingBottom - t) * o / i) / n.start), a;
          }
        });
        t.scaleService.registerScaleType("logarithmic", i, a);
      };
    }, {}],
    43: [function (t, e, a) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            a = t.defaults.global,
            i = {
          display: !0,
          animate: !0,
          lineArc: !1,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2
          },
          pointLabels: {
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        },
            n = t.LinearScaleBase.extend({
          getValueCount: function getValueCount() {
            return this.chart.data.labels.length;
          },
          setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var o = e.min([t.height, t.width]),
                r = e.getValueOrDefault(n.fontSize, a.defaultFontSize);
            t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                a = t.chart;
            t.min = null, t.max = null, e.each(a.data.datasets, function (i, n) {
              if (a.isDatasetVisible(n)) {
                var o = a.getDatasetMeta(n);
                e.each(i.data, function (e, a) {
                  var i = +t.getRightValue(e);
                  isNaN(i) || o.data[a].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
                });
              }
            }), t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = e.getValueOrDefault(t.fontSize, a.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t,
                i,
                n,
                o,
                r,
                l,
                s,
                d,
                u,
                c,
                h,
                f,
                g = this.options.pointLabels,
                p = e.getValueOrDefault(g.fontSize, a.defaultFontSize),
                m = e.getValueOrDefault(g.fontStyle, a.defaultFontStyle),
                b = e.getValueOrDefault(g.fontFamily, a.defaultFontFamily),
                v = e.fontString(p, m, b),
                x = e.min([this.height / 2 - p - 5, this.width / 2]),
                y = this.width,
                k = 0;

            for (this.ctx.font = v, i = 0; i < this.getValueCount(); i++) {
              t = this.getPointPosition(i, x), n = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : "").width + 5;
              var S = this.getIndexAngle(i) + Math.PI / 2,
                  w = 360 * S / (2 * Math.PI) % 360;
              0 === w || 180 === w ? (o = n / 2, t.x + o > y && (y = t.x + o, r = i), t.x - o < k && (k = t.x - o, s = i)) : 180 > w ? t.x + n > y && (y = t.x + n, r = i) : t.x - n < k && (k = t.x - n, s = i);
            }

            u = k, c = Math.ceil(y - this.width), l = this.getIndexAngle(r), d = this.getIndexAngle(s), h = c / Math.sin(l + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(x - (f + h) / 2), this.setCenterPoint(f, h);
          },
          setCenterPoint: function setCenterPoint(t, e) {
            var a = this,
                i = a.width - e - a.drawingArea,
                n = t + a.drawingArea;
            a.xCenter = Math.round((n + i) / 2 + a.left), a.yCenter = Math.round(a.height / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            var e = 2 * Math.PI / this.getValueCount(),
                a = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                i = a * Math.PI * 2 / 360;
            return t * e - Math.PI / 2 + i;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var a = e.drawingArea / (e.max - e.min);
            return e.options.reverse ? (e.max - t) * a : (t - e.min) * a;
          },
          getPointPosition: function getPointPosition(t, e) {
            var a = this,
                i = a.getIndexAngle(t);
            return {
              x: Math.round(Math.cos(i) * e) + a.xCenter,
              y: Math.round(Math.sin(i) * e) + a.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this,
                e = t.min,
                a = t.max;
            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0);
          },
          draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                o = i.ticks,
                r = i.angleLines,
                l = i.pointLabels,
                s = e.getValueOrDefault;

            if (i.display) {
              var d = t.ctx,
                  u = s(o.fontSize, a.defaultFontSize),
                  c = s(o.fontStyle, a.defaultFontStyle),
                  h = s(o.fontFamily, a.defaultFontFamily),
                  f = e.fontString(u, c, h);

              if (e.each(t.ticks, function (r, l) {
                if (l > 0 || i.reverse) {
                  var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                      h = t.yCenter - c;
                  if (n.display && 0 !== l) if (d.strokeStyle = e.getValueAtIndexOrDefault(n.color, l - 1), d.lineWidth = e.getValueAtIndexOrDefault(n.lineWidth, l - 1), i.lineArc) d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke();else {
                    d.beginPath();

                    for (var g = 0; g < t.getValueCount(); g++) {
                      var p = t.getPointPosition(g, c);
                      0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y);
                    }

                    d.closePath(), d.stroke();
                  }

                  if (o.display) {
                    var m = s(o.fontColor, a.defaultFontColor);

                    if (d.font = f, o.showLabelBackdrop) {
                      var b = d.measureText(r).width;
                      d.fillStyle = o.backdropColor, d.fillRect(t.xCenter - b / 2 - o.backdropPaddingX, h - u / 2 - o.backdropPaddingY, b + 2 * o.backdropPaddingX, u + 2 * o.backdropPaddingY);
                    }

                    d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(r, t.xCenter, h);
                  }
                }
              }), !i.lineArc) {
                d.lineWidth = r.lineWidth, d.strokeStyle = r.color;

                for (var g = t.getDistanceFromCenterForValue(i.reverse ? t.min : t.max), p = s(l.fontSize, a.defaultFontSize), m = s(l.fontStyle, a.defaultFontStyle), b = s(l.fontFamily, a.defaultFontFamily), v = e.fontString(p, m, b), x = t.getValueCount() - 1; x >= 0; x--) {
                  if (r.display) {
                    var y = t.getPointPosition(x, g);
                    d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(y.x, y.y), d.stroke(), d.closePath();
                  }

                  var k = t.getPointPosition(x, g + 5),
                      S = s(l.fontColor, a.defaultFontColor);
                  d.font = v, d.fillStyle = S;
                  var w = t.pointLabels,
                      C = this.getIndexAngle(x) + Math.PI / 2,
                      M = 360 * C / (2 * Math.PI) % 360;
                  0 === M || 180 === M ? d.textAlign = "center" : 180 > M ? d.textAlign = "left" : d.textAlign = "right", 90 === M || 270 === M ? d.textBaseline = "middle" : M > 270 || 90 > M ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(w[x] ? w[x] : "", k.x, k.y);
                }
              }
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", n, i);
      };
    }, {}],
    44: [function (t, e, a) {
      "use strict";

      var i = t(1);
      i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
        var e = t.helpers,
            a = {
          units: [{
            name: "millisecond",
            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
          }, {
            name: "second",
            steps: [1, 2, 5, 10, 30]
          }, {
            name: "minute",
            steps: [1, 2, 5, 10, 30]
          }, {
            name: "hour",
            steps: [1, 2, 3, 6, 12]
          }, {
            name: "day",
            steps: [1, 2, 5]
          }, {
            name: "week",
            maxStep: 4
          }, {
            name: "month",
            maxStep: 3
          }, {
            name: "quarter",
            maxStep: 4
          }, {
            name: "year",
            maxStep: !1
          }]
        },
            n = {
          position: "bottom",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm:ss a",
              hour: "MMM D, hA",
              day: "ll",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1
          }
        },
            o = t.Scale.extend({
          initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            t.Scale.prototype.initialize.call(this);
          },
          getLabelMoment: function getLabelMoment(t, e) {
            return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null;
          },
          getLabelDiff: function getLabelDiff(t, e) {
            var a = this;
            return null === t || null === e ? null : (void 0 === a.labelDiffs && a.buildLabelDiffs(), "undefined" != typeof a.labelDiffs[t] ? a.labelDiffs[t][e] : null);
          },
          getMomentStartOf: function getMomentStartOf(t) {
            var e = this;
            return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit);
          },
          determineDataLimits: function determineDataLimits() {
            var t = this;
            t.labelMoments = [];
            var a = [];
            t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);
              i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i));
            }, t), t.firstTick = i.min.call(t, a), t.lastTick = i.max.call(t, a)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function (n, o) {
              var r = [],
                  l = t.chart.isDatasetVisible(o);
              "object" == _typeof(n.data[0]) && null !== n.data[0] ? e.each(n.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));
                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), r.push(a), l && (t.firstTick = null !== t.firstTick ? i.min(t.firstTick, a) : a, t.lastTick = null !== t.lastTick ? i.max(t.lastTick, a) : a));
              }, t) : r = a, t.labelMoments.push(r);
            }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || i()).clone(), t.lastTick = (t.lastTick || i()).clone();
          },
          buildLabelDiffs: function buildLabelDiffs() {
            var t = this;
            t.labelDiffs = [];
            var a = [];
            t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function (e) {
              var i = t.parseTime(e);
              i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), a.push(i.diff(t.firstTick, t.tickUnit, !0)));
            }, t), e.each(t.chart.data.datasets, function (i) {
              var n = [];
              "object" == _typeof(i.data[0]) && null !== i.data[0] ? e.each(i.data, function (e) {
                var a = t.parseTime(t.getRightValue(e));
                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), n.push(a.diff(t.firstTick, t.tickUnit, !0)));
              }, t) : n = a, t.labelDiffs.push(n);
            }, t);
          },
          buildTicks: function buildTicks() {
            var i = this;
            i.ctx.save();
            var n = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                o = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                r = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                l = e.fontString(n, o, r);
            if (i.ctx.font = l, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1);else {
              var s = i.isHorizontal() ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                  d = i.tickFormatFunction(i.firstTick, 0, []),
                  u = i.ctx.measureText(d).width,
                  c = Math.cos(e.toRadians(i.options.ticks.maxRotation)),
                  h = Math.sin(e.toRadians(i.options.ticks.maxRotation));
              u = u * c + n * h;
              var f = s / u;
              i.tickUnit = i.options.time.minUnit, i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];

              for (var g = 0, p = a.units[g]; g < a.units.length;) {
                if (i.unitScale = 1, e.isArray(p.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(p.steps)) {
                  for (var m = 0; m < p.steps.length; ++m) {
                    if (p.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                      i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, p.steps[m]);
                      break;
                    }
                  }

                  break;
                }

                if (p.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < p.maxStep) {
                  i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));
                  break;
                }

                ++g, p = a.units[g], i.tickUnit = p.name;
                var b = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                    v = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);
                i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + b + v, i.displayFormat = i.options.time.displayFormats[p.name];
              }
            }
            var x;

            if (i.options.time.min ? x = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), x = i.firstTick), !i.options.time.max) {
              var y = i.getMomentStartOf(i.lastTick),
                  k = y.diff(i.lastTick, i.tickUnit, !0);
              0 > k ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = y), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0);
            }

            i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());

            for (var S = 1; S <= i.scaleSizeInUnits; ++S) {
              var w = x.clone().add(S, i.tickUnit);
              if (i.options.time.max && w.diff(i.lastTick, i.tickUnit, !0) >= 0) break;
              S % i.unitScale === 0 && i.ticks.push(w);
            }

            var C = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);
            (0 !== C || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore(), i.labelDiffs = void 0;
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var a = this,
                i = a.chart.data.labels && t < a.chart.data.labels.length ? a.chart.data.labels[t] : "";
            return "object" == _typeof(a.chart.data.datasets[e].data[0]) && (i = a.getRightValue(a.chart.data.datasets[e].data[t])), a.options.time.tooltipFormat && (i = a.parseTime(i).format(a.options.time.tooltipFormat)), i;
          },
          tickFormatFunction: function tickFormatFunction(t, a, i) {
            var n = t.format(this.displayFormat),
                o = this.options.ticks,
                r = e.getValueOrDefault(o.callback, o.userCallback);
            return r ? r(n, a, i) : n;
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this;
            t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t);
          },
          getPixelForValue: function getPixelForValue(t, e, a) {
            var i = this,
                n = null;

            if (void 0 !== e && void 0 !== a && (n = i.getLabelDiff(a, e)), null === n && (t && t.isValid || (t = i.parseTime(i.getRightValue(t))), t && t.isValid && t.isValid() && (n = t.diff(i.firstTick, i.tickUnit, !0))), null !== n) {
              var o = 0 !== n ? n / i.scaleSizeInUnits : n;

              if (i.isHorizontal()) {
                var r = i.width - (i.paddingLeft + i.paddingRight),
                    l = r * o + i.paddingLeft;
                return i.left + Math.round(l);
              }

              var s = i.height - (i.paddingTop + i.paddingBottom),
                  d = s * o + i.paddingTop;
              return i.top + Math.round(d);
            }
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickMoments[t], null, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                a = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                n = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / a;
            return n *= e.scaleSizeInUnits, e.firstTick.clone().add(i.duration(n, e.tickUnit).asSeconds(), "seconds");
          },
          parseTime: function parseTime(t) {
            var e = this;
            return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : i(t, e.options.time.format);
          }
        });
        t.scaleService.registerScaleType("time", o, n);
      };
    }, {
      1: 1
    }]
  }, {}, [7])(7);
});

/***/ }),

/***/ "./resources/js/template/core/app-menu.js":
/*!************************************************!*\
  !*** ./resources/js/template/core/app-menu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*=========================================================================================
  File Name: app-menu.js
  Description: Menu navigation, custom scrollbar, hover scroll bar, multilevel menu
  initialization and manipulations
  ----------------------------------------------------------------------------------------
  Item Name: Robust - Responsive Admin Theme
  Version: 1.2
  Author: GeeksLabs
  Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  $.app = $.app || {};
  var $body = $('body');
  var $window = $(window);
  var menuWrapper_el = $('div[data-menu="menu-wrapper"]').html();
  var menuWrapperClasses = $('div[data-menu="menu-wrapper"]').attr('class'); // Main menu

  $.app.menu = {
    expanded: null,
    collapsed: null,
    hidden: null,
    container: null,
    horizontalMenu: false,
    manualScroller: {
      obj: null,
      init: function init() {
        var scroll_theme = $('.main-menu').hasClass('menu-dark') ? 'light' : 'dark'; // this.obj = $(".main-menu-content").perfectScrollbar({
        //   suppressScrollX: true,
        //   theme: scroll_theme
        // });
      },
      update: function update() {
        if (this.obj) {
          // Scroll to currently active menu on page load if data-scroll-to-active is true
          if ($('.main-menu').data('scroll-to-active') === true) {
            var position;

            if ($(".main-menu-content").find('li.active').parents('li').length > 0) {
              position = $(".main-menu-content").find('li.active').parents('li').last().position();
            } else {
              position = $(".main-menu-content").find('li.active').position();
            }

            setTimeout(function () {
              // $.app.menu.container.scrollTop(position.top);
              $.app.menu.container.stop().animate({
                scrollTop: position.top
              }, 300);
              $('.main-menu').data('scroll-to-active', 'false');
            }, 300);
          }

          $(".main-menu-content").perfectScrollbar('update');
        }
      },
      enable: function enable() {
        this.init();
      },
      disable: function disable() {
        if (this.obj) {
          $('.main-menu-content').perfectScrollbar('destroy');
        }
      },
      updateHeight: function updateHeight() {
        if (($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-overlay-menu') && $('.main-menu').hasClass('menu-fixed')) {
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight());
          this.update();
        }
      }
    },
    init: function init() {
      if ($('.main-menu-content').length > 0) {
        this.container = $('.main-menu-content');
        var menuObj = this;
        this.change();
      } else {
        // For 1 column layout menu won't be initialized so initiate drill down for mega menu
        // Drill down menu
        // ------------------------------
        this.drillDownMenu();
      }
    },
    drillDownMenu: function drillDownMenu(screenSize) {
      if ($('.drilldown-menu').length) {
        if (screenSize == 'sm' || screenSize == 'xs') {
          if ($('#navbar-mobile').attr('aria-expanded') == 'true') {
            $('.drilldown-menu').slidingMenu({
              backLabel: true
            });
          }
        } else {
          $('.drilldown-menu').slidingMenu({
            backLabel: true
          });
        }
      }
    },
    change: function change() {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      this.reset();
      var menuType = $body.data('menu');

      if (currentBreakpoint) {
        switch (currentBreakpoint.name) {
          case 'xl':
          case 'lg':
            if (menuType === 'vertical-overlay-menu') {
              this.hide();
            } else if (menuType === 'vertical-compact-menu') {
              this.open();
            } else {
              this.expand();
            }

            break;

          case 'md':
            if (menuType === 'vertical-overlay-menu' || menuType === 'vertical-mmenu') {
              this.hide();
            } else if (menuType === 'vertical-compact-menu') {
              this.open();
            } else {
              this.collapse();
            }

            break;

          case 'sm':
            this.hide();
            break;

          case 'xs':
            this.hide();
            break;
        }
      } // On the small and extra small screen make them overlay menu


      if (menuType === 'vertical-menu' || menuType === 'vertical-compact-menu' || menuType === 'vertical-content-menu') {
        this.toOverlayMenu(currentBreakpoint.name);
      } // Initialize drill down menu for vertical layouts, for horizontal layouts drilldown menu is intitialized in changemenu function


      if (menuType != 'horizontal-menu' && menuType != 'horizontal-top-icon-menu') {
        // Drill down menu
        // ------------------------------
        this.drillDownMenu(currentBreakpoint.name);
      } // Dropdown submenu on large screen on hover For Large screen only
      // ---------------------------------------------------------------


      if (currentBreakpoint.name == 'xl') {
        $('body[data-open="hover"] .dropdown').on('mouseenter', function () {
          if (!$(this).hasClass('open')) {
            $(this).addClass('open');
          } else {
            $(this).removeClass('open');
          }
        }).on('mouseleave', function (event) {
          $(this).removeClass('open');
        });
        $('body[data-open="hover"] .dropdown a').on('click', function (e) {
          if (menuType == 'horizontal-menu' || menuType == 'horizontal-top-icon-menu') {
            var $this = $(this);

            if ($this.hasClass('dropdown-toggle')) {
              return false;
            }
          }
        });
      } // Added data attribute brand-center for navbar-brand-center
      // TODO:AJ: Shift this feature in JADE.


      if ($('.header-navbar').hasClass('navbar-brand-center')) {
        $('.header-navbar').attr('data-nav', 'brand-center');
      }

      if (currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs') {
        $('.header-navbar[data-nav=brand-center]').removeClass('navbar-brand-center');
      } else {
        $('.header-navbar[data-nav=brand-center]').addClass('navbar-brand-center');
      } // Dropdown submenu on small screen on click
      // --------------------------------------------------


      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        if ($(this).siblings('ul.dropdown-menu').length > 0) {
          event.preventDefault();
        }

        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
      });
    },
    changeLogo: function changeLogo(menuType) {
      var logo = $('.brand-logo');

      if (menuType == 'expand') {
        logo.attr('src', logo.data('expand'));
      } else {
        logo.attr('src', logo.data('collapse'));
      }
    },
    transit: function transit(callback1, callback2) {
      var menuObj = this;
      $body.addClass('changing-menu');
      callback1.call(menuObj);

      if ($body.hasClass('vertical-layout')) {
        if ($body.hasClass('menu-open') || $body.hasClass('menu-expanded')) {
          $('.menu-toggle').addClass('is-active'); // Show menu header search when menu is normally visible

          if ($body.data('menu') === 'vertical-menu' || $body.data('menu') === 'vertical-content-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').show();
            }
          }
        } else {
          $('.menu-toggle').removeClass('is-active'); // Hide menu header search when only menu icons are visible

          if ($body.data('menu') === 'vertical-menu' || $body.data('menu') === 'vertical-content-menu') {
            if ($('.main-menu-header')) {
              $('.main-menu-header').hide();
            }
          }
        }
      }

      setTimeout(function () {
        callback2.call(menuObj);
        $body.removeClass('changing-menu');
        menuObj.update();
      }, 500);
    },
    open: function open() {
      if ($body.is('.vertical-mmenu')) {
        this.mMenu.enable();
      }

      this.transit(function () {
        $body.removeClass('menu-hide menu-collapsed').addClass('menu-open');
        this.hidden = false;
        this.expanded = true;
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && !$body.is('.vertical-mmenu') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight()); // this.manualScroller.update();
        }
      });
    },
    hide: function hide() {
      if ($body.is('.vertical-mmenu')) {
        this.mMenu.disable();
      }

      this.transit(function () {
        $body.removeClass('menu-open menu-expanded').addClass('menu-hide');
        this.hidden = true;
        this.expanded = false;
      }, function () {
        if (!$('.main-menu').hasClass('menu-native-scroll') && !$body.is('.vertical-mmenu') && $('.main-menu').hasClass('menu-fixed')) {
          this.manualScroller.enable();
        }
      });
    },
    expand: function expand() {
      if (this.expanded === false) {
        if ($body.data('menu') == 'vertical-menu') {
          this.changeLogo('expand');
        }

        this.transit(function () {
          $body.removeClass('menu-collapsed').addClass('menu-expanded');
          this.collapsed = false;
          this.expanded = true;
        }, function () {
          if ($body.is('.vertical-mmenu')) {
            this.mMenu.enable();
          } else if ($('.main-menu').hasClass('menu-native-scroll') || $body.data('menu') == 'vertical-mmenu' || $body.data('menu') == 'horizontal-menu' || $body.data('menu') == 'horizontal-top-icon-menu') {
            this.manualScroller.disable();
          } else {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }

          if ($body.data('menu') == 'vertical-menu' && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight()); // this.manualScroller.update();
          }
        });
      }
    },
    collapse: function collapse() {
      if (this.collapsed === false) {
        if ($body.data('menu') == 'vertical-menu') {
          this.changeLogo('collapse');
        }

        this.transit(function () {
          $body.removeClass('menu-expanded').addClass('menu-collapsed');
          this.collapsed = true;
          this.expanded = false;
        }, function () {
          if ($body.data('menu') == 'vertical-content-menu') {
            this.manualScroller.disable();
          }

          if (($body.data('menu') == 'horizontal-menu' || $body.data('menu') == 'horizontal-top-icon-menu') && $body.hasClass('vertical-overlay-menu')) {
            if ($('.main-menu').hasClass('menu-fixed')) this.manualScroller.enable();
          }

          if ($body.data('menu') == 'vertical-menu' && $('.main-menu').hasClass('menu-fixed')) {
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height()); // this.manualScroller.update();
          }
        });
      }
    },
    toOverlayMenu: function toOverlayMenu(screen) {
      var menu = $body.data('menu');

      if (screen == 'sm' || screen == 'xs') {
        if ($body.hasClass(menu)) {
          $body.removeClass(menu).addClass('vertical-overlay-menu');
        }

        if (menu == 'vertical-content-menu') {
          $('.main-menu').addClass('menu-fixed');
        }
      } else {
        if ($body.hasClass('vertical-overlay-menu')) {
          $body.removeClass('vertical-overlay-menu').addClass(menu);
        }

        if (menu == 'vertical-content-menu') {
          $('.main-menu').removeClass('menu-fixed');
        }
      }
    },
    toggle: function toggle() {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      var collapsed = this.collapsed;
      var expanded = this.expanded;
      var hidden = this.hidden;
      var menu = $body.data('menu');

      switch (currentBreakpoint.name) {
        case 'xl':
        case 'lg':
        case 'md':
          if (expanded === true) {
            if (menu == 'vertical-compact-menu' || menu == 'vertical-mmenu' || menu == 'vertical-overlay-menu') {
              this.hide();
            } else {
              this.collapse();
            }
          } else {
            if (menu == 'vertical-compact-menu' || menu == 'vertical-mmenu' || menu == 'vertical-overlay-menu') {
              this.open();
            } else {
              this.expand();
            }
          }

          break;

        case 'sm':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }

          break;

        case 'xs':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }

          break;
      } // Re-init sliding menu to update width


      this.drillDownMenu(currentBreakpoint.name);
    },
    update: function update() {
      this.manualScroller.update();
    },
    reset: function reset() {
      this.expanded = false;
      this.collapsed = false;
      this.hidden = false;
      $body.removeClass('menu-hide menu-open menu-collapsed menu-expanded');
    }
  }; // Navigation Menu

  $.app.nav = {
    container: $('.navigation-main'),
    initialized: false,
    navItem: $('.navigation-main').find('li').not('.navigation-category'),
    config: {
      speed: 300
    },
    init: function init(config) {
      this.initialized = true; // Set to true when initialized

      $.extend(this.config, config);

      if (!$body.is('.vertical-mmenu')) {
        this.bind_events();
      }
    },
    bind_events: function bind_events() {
      var menuObj = this;
      $('.navigation-main').on('mouseenter.app.menu', 'li', function () {
        var $this = $(this);
        $('.hover', '.navigation-main').removeClass('hover');

        if ($body.hasClass('menu-collapsed') || $body.data('menu') == 'vertical-compact-menu' && !$body.hasClass('vertical-overlay-menu')) {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove(); // Title

          var menuTitle = $this.find('span.menu-title').clone(),
              tempTitle,
              tempLink;

          if (!$this.hasClass('has-sub')) {
            tempTitle = $this.find('span.menu-title').text();
            tempLink = $this.children('a').attr('href');

            if (tempTitle !== '') {
              menuTitle = $("<a>");
              menuTitle.attr("href", tempLink);
              menuTitle.attr("title", tempTitle);
              menuTitle.text(tempTitle);
              menuTitle.addClass("menu-title");
            }
          } // menu_header_height = ($('.main-menu-header').length) ? $('.main-menu-header').height() : 0,
          // fromTop = menu_header_height + $this.position().top + parseInt($this.css( "border-top" ),10);


          var fromTop;

          if ($this.css("border-top")) {
            fromTop = $this.position().top + parseInt($this.css("border-top"), 10);
          } else {
            fromTop = $this.position().top;
          }

          if ($body.data('menu') !== 'vertical-compact-menu') {
            menuTitle.appendTo('.main-menu-content').css({
              position: 'fixed',
              top: fromTop
            });
          } // Content


          if ($this.hasClass('has-sub') && $this.hasClass('nav-item')) {
            var menuContent = $this.children('ul:first');
            menuObj.adjustSubmenu($this);
          }
        }

        $this.addClass('hover');
      }).on('mouseleave.app.menu', 'li', function () {// $(this).removeClass('hover');
      }).on('active.app.menu', 'li', function (e) {
        $(this).addClass('active');
        e.stopPropagation();
      }).on('deactive.app.menu', 'li.active', function (e) {
        $(this).removeClass('active');
        e.stopPropagation();
      }).on('open.app.menu', 'li', function (e) {
        var $listItem = $(this);
        $listItem.addClass('open');
        menuObj.expand($listItem); // If menu collapsible then do not take any action

        if ($('.main-menu').hasClass('menu-collapsible')) {
          return false;
        } // If menu accordion then close all except clicked once
        else {
            $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
            $listItem.siblings('.open').trigger('close.app.menu');
          }

        e.stopPropagation();
      }).on('close.app.menu', 'li.open', function (e) {
        var $listItem = $(this);
        $listItem.removeClass('open');
        menuObj.collapse($listItem);
        e.stopPropagation();
      }).on('click.app.menu', 'li', function (e) {
        var $listItem = $(this);

        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($body.hasClass('menu-collapsed') || $body.data('menu') == 'vertical-compact-menu' && $listItem.is('.has-sub') && !$body.hasClass('vertical-overlay-menu')) {
            e.preventDefault();
          } else {
            if ($listItem.has('ul')) {
              if ($listItem.is('.open')) {
                $listItem.trigger('close.app.menu');
              } else {
                $listItem.trigger('open.app.menu');
              }
            } else {
              if (!$listItem.is('.active')) {
                $listItem.siblings('.active').trigger('deactive.app.menu');
                $listItem.trigger('active.app.menu');
              }
            }
          }
        }

        e.stopPropagation();
      });
      $('.main-menu-content').on('mouseleave', function () {
        if ($body.hasClass('menu-collapsed') || $body.data('menu') == 'vertical-compact-menu') {
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();
        }

        $('.hover', '.navigation-main').removeClass('hover');
      }); // If list item has sub menu items then prevent redirection.

      $('.navigation-main li.has-sub > a').on('click', function (e) {
        e.preventDefault();
      });
      $('ul.menu-content').on('click', 'li', function (e) {
        var $listItem = $(this);

        if ($listItem.is('.disabled')) {
          e.preventDefault();
        } else {
          if ($listItem.has('ul')) {
            if ($listItem.is('.open')) {
              $listItem.removeClass('open');
              menuObj.collapse($listItem);
            } else {
              $listItem.addClass('open');
              menuObj.expand($listItem); // If menu collapsible then do not take any action

              if ($('.main-menu').hasClass('menu-collapsible')) {
                return false;
              } // If menu accordion then close all except clicked once
              else {
                  $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
                  $listItem.siblings('.open').trigger('close.app.menu');
                }

              e.stopPropagation();
            }
          } else {
            if (!$listItem.is('.active')) {
              $listItem.siblings('.active').trigger('deactive.app.menu');
              $listItem.trigger('active.app.menu');
            }
          }
        }

        e.stopPropagation();
      });
    },

    /**
     * Ensure an admin submenu is within the visual viewport.
     * @param {jQuery} $menuItem The parent menu item containing the submenu.
     */
    adjustSubmenu: function adjustSubmenu($menuItem) {
      var menuHeaderHeight,
          menutop,
          topPos,
          winHeight,
          bottomOffset,
          subMenuHeight,
          popOutMenuHeight,
          borderWidth,
          scroll_theme,
          $submenu = $menuItem.children('ul:first'),
          ul = $submenu.clone(true);
      menuHeaderHeight = $('.main-menu-header').height();
      menutop = $menuItem.position().top;
      winHeight = $window.height() - $('.header-navbar').height();
      borderWidth = 0;
      subMenuHeight = $submenu.height();

      if (parseInt($menuItem.css("border-top"), 10) > 0) {
        borderWidth = parseInt($menuItem.css("border-top"), 10);
      }

      popOutMenuHeight = winHeight - menutop - $menuItem.height() - 30;
      scroll_theme = $('.main-menu').hasClass('menu-dark') ? 'light' : 'dark';

      if ($body.data('menu') === 'vertical-compact-menu') {
        topPos = menutop + borderWidth;
        popOutMenuHeight = winHeight - menutop - 30;
      } else if ($body.data('menu') === 'vertical-content-menu') {
        topPos = menutop + $menuItem.height() + borderWidth;
        popOutMenuHeight = winHeight - $('.content-header').height() - $menuItem.height() - menutop - 60;
      } else {
        topPos = menutop + $menuItem.height() + borderWidth;
      }

      if ($body.data('menu') == 'vertical-content-menu') {
        ul.addClass('menu-popout').appendTo('.main-menu-content').css({
          'top': topPos,
          'position': 'fixed'
        });
      } else {
        ul.addClass('menu-popout').appendTo('.main-menu-content').css({
          'top': topPos,
          'position': 'fixed',
          'max-height': popOutMenuHeight
        });
        $('.main-menu-content > ul.menu-content').perfectScrollbar({
          theme: scroll_theme
        });
      }
    },
    collapse: function collapse($listItem, callback) {
      var $subList = $listItem.children('ul');
      $subList.show().slideUp($.app.nav.config.speed, function () {
        $(this).css('display', '');
        $(this).find('> li').removeClass('is-shown');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('collapsed.app.menu');
      });
    },
    expand: function expand($listItem, callback) {
      var $subList = $listItem.children('ul');
      var $children = $subList.children('li').addClass('is-hidden');
      $subList.hide().slideDown($.app.nav.config.speed, function () {
        $(this).css('display', '');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('expanded.app.menu');
      });
      setTimeout(function () {
        $children.addClass('is-shown');
        $children.removeClass('is-hidden');
      }, 0);
    },
    refresh: function refresh() {
      $.app.nav.container.find('.open').removeClass('open');
    }
  };
})(window, document, jQuery);

/***/ }),

/***/ "./resources/js/template/core/app.js":
/*!*******************************************!*\
  !*** ./resources/js/template/core/app.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*=========================================================================================
  File Name: app.js
  Description: Template related app JS.
  ----------------------------------------------------------------------------------------
  Item Name: Robust - Responsive Admin Theme
  Version: 1.2
  Author: GeeksLabs
  Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  var $html = $('html');
  var $body = $('body');
  $(window).on('load', function () {
    var rtl;

    if ($('html').data('textdirection') == 'rtl') {
      rtl = true;
    }

    setTimeout(function () {
      $html.removeClass('loading').addClass('loaded');
    }, 1200);
    $.app.menu.init(); // Navigation configurations

    var config = {
      speed: 300 // set speed to expand / collpase menu

    };

    if ($.app.nav.initialized === false) {
      $.app.nav.init(config);
    }

    Unison.on('change', function (bp) {
      $.app.menu.change();
    }); // Tooltip Initialization

    $('[data-toggle="tooltip"]').tooltip({
      container: 'body'
    }); // Collapsible Card

    $('a[data-action="collapse"]').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.card').children('.card-body').collapse('toggle');
      $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('icon-minus4 icon-plus4');
    }); // Toggle fullscreen

    $('a[data-action="expand"]').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.card').find('[data-action="expand"] i').toggleClass('icon-expand2 icon-contract');
      $(this).closest('.card').toggleClass('card-fullscreen');
    }); //  Notifications & messages scrollable
    // if($('.scrollable-container').length > 0){
    //     $('.scrollable-container').perfectScrollbar({
    //         theme:"dark"
    //     });
    // }
    // Reload Card

    $('a[data-action="reload"]').on('click', function () {
      var block_ele = $(this).closest('.card'); // Block Element

      block_ele.block({
        message: '<div class="icon-spinner9 icon-spin icon-lg"></div>',
        timeout: 2000,
        //unblock after 2 seconds
        overlayCSS: {
          backgroundColor: '#FFF',
          cursor: 'wait'
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: 'none'
        }
      });
    }); // Close Card

    $('a[data-action="close"]').on('click', function () {
      $(this).closest('.card').removeClass().slideUp('fast');
    }); // Match the height of each card in a row

    setTimeout(function () {
      $('.row.match-height').each(function () {
        $(this).find('.card').not('.card .card').matchHeight(); // Not .card .card prevents collapsible cards from taking height
      });
    }, 500);
    $('.card .heading-elements a[data-action="collapse"]').on('click', function () {
      var $this = $(this),
          card = $this.closest('.card');
      var cardHeight;

      if (parseInt(card[0].style.height, 10) > 0) {
        cardHeight = card.css('height');
        card.css('height', '').attr('data-height', cardHeight);
      } else {
        if (card.data('height')) {
          cardHeight = card.data('height');
          card.css('height', cardHeight).attr('data-height', '');
        }
      }
    }); // Add open class to parent list item if subitem is active except compact menu

    var menuType = $body.data('menu');

    if (menuType != 'vertical-compact-menu' && menuType != 'horizontal-menu' && menuType != 'horizontal-top-icon-menu') {
      $(".main-menu-content").find('li.active').parents('li').addClass('open');
    }

    if (menuType == 'vertical-compact-menu' || menuType == 'horizontal-menu' || menuType == 'horizontal-top-icon-menu') {
      $(".main-menu-content").find('li.active').parents('li:not(.nav-item)').addClass('open');
      $(".main-menu-content").find('li.active').parents('li').addClass('active');
    } //card heading actions buttons small screen support


    $(".heading-elements-toggle").on("click", function () {
      $(this).parent().children(".heading-elements").toggleClass("visible");
    }); //  Dynamic height for the chartjs div for the chart animations to work

    var chartjsDiv = $('.chartjs'),
        canvasHeight = chartjsDiv.children('canvas').attr('height');
    chartjsDiv.css('height', canvasHeight);

    if ($('body').hasClass('boxed-layout')) {
      if ($('body').hasClass('vertical-overlay-menu') || $('body').hasClass('vertical-compact-menu')) {
        var menuWidth = $('.main-menu').width();
        var contentPosition = $('.app-content').position().left;
        var menuPositionAdjust = contentPosition - menuWidth;

        if ($('body').hasClass('menu-flipped')) {
          $('.main-menu').css('right', menuPositionAdjust + 'px');
        } else {
          $('.main-menu').css('left', menuPositionAdjust + 'px');
        }
      }
    }
  });
  $(document).on('click', '.menu-toggle', function (e) {
    e.preventDefault(); // Toggle menu

    $.app.menu.toggle();
    return false;
  });
  $(document).on('click', '.open-navbar-container', function (e) {
    var currentBreakpoint = Unison.fetch.now(); // Init drilldown on small screen

    $.app.menu.drillDownMenu(currentBreakpoint.name); // return false;
  });
  $(document).on('click', '.main-menu-footer .footer-toggle', function (e) {
    e.preventDefault();
    $(this).find('i').toggleClass('pe-is-i-angle-down pe-is-i-angle-up');
    $('.main-menu-footer').toggleClass('footer-close footer-open');
    return false;
  }); // Add Children Class

  $('.navigation').find('li').has('ul').addClass('has-sub');
  $('.carousel').carousel({
    interval: 2000
  }); // Page full screen

  $('.nav-link-expand').on('click', function (e) {
    if (typeof screenfull != 'undefined') {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }
  });

  if (typeof screenfull != 'undefined') {
    if (screenfull.enabled) {
      $(document).on(screenfull.raw.fullscreenchange, function () {
        if (screenfull.isFullscreen) {
          $('.nav-link-expand').find('i').toggleClass('icon-contract icon-expand2');
        } else {
          $('.nav-link-expand').find('i').toggleClass('icon-expand2 icon-contract');
        }
      });
    }
  } // Update manual scroller when window is resized


  $(window).resize(function () {
    $.app.menu.manualScroller.updateHeight();
  }); // TODO : Tabs dropdown fix, remove this code once fixed in bootstrap 4.

  $('.nav.nav-tabs a.dropdown-item', '.nav.nav-tabs a.dropdown-item').on('click', function () {
    var $this = $(this),
        href = $this.attr('href');
    var tabs = $this.closest('.nav');
    tabs.find('.nav-link').removeClass('active');
    $this.closest('.nav-item').find('.nav-link').addClass('active');
    $this.closest('.dropdown-menu').find('.dropdown-item').removeClass('active');
    $this.addClass('active');
    tabs.next().find(href).siblings('.tab-pane').removeClass('active in').attr('aria-expanded', false);
    $(href).addClass('active in').attr('aria-expanded', 'true');
  });
  $('#sidebar-page-navigation').on('click', 'a.nav-link', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this),
        href = $this.attr('href');
    var offset = $(href).offset();
    var scrollto = offset.top - 80; // minus fixed header height

    $('html, body').animate({
      scrollTop: scrollto
    }, 0);
    setTimeout(function () {
      $this.parent('.nav-item').siblings('.nav-item').children('.nav-link').removeClass('active');
      $this.addClass('active');
    }, 100);
  });
})(window, document, jQuery);

/***/ }),

/***/ "./resources/js/template/core/libraries/bootstrap.min.js":
/*!***************************************************************!*\
  !*** ./resources/js/template/core/libraries/bootstrap.min.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
}(jQuery), +function () {
  function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      r = function (t) {
    function e(t) {
      return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    function n(t) {
      return (t[0] || t).nodeType;
    }

    function i() {
      return {
        bindType: a.end,
        delegateType: a.end,
        handle: function handle(e) {
          return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
        }
      };
    }

    function o() {
      if (window.QUnit) return !1;
      var t = document.createElement("bootstrap");

      for (var e in h) {
        if (void 0 !== t.style[e]) return {
          end: h[e]
        };
      }

      return !1;
    }

    function r(e) {
      var n = this,
          i = !1;
      return t(this).one(c.TRANSITION_END, function () {
        i = !0;
      }), setTimeout(function () {
        i || c.triggerTransitionEnd(n);
      }, e), this;
    }

    function s() {
      a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i());
    }

    var a = !1,
        l = 1e6,
        h = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    },
        c = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(Math.random() * l);
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");
        return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e;
      },
      reflow: function reflow(t) {
        new Function("bs", "return bs")(t.offsetHeight);
      },
      triggerTransitionEnd: function triggerTransitionEnd(e) {
        t(e).trigger(a.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(a);
      },
      typeCheckConfig: function typeCheckConfig(t, i, o) {
        for (var r in o) {
          if (o.hasOwnProperty(r)) {
            var s = o[r],
                a = i[r],
                l = void 0;
            if (l = a && n(a) ? "element" : e(a), !new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'));
          }
        }
      }
    };
    return s(), c;
  }(jQuery),
      s = (function (t) {
    var e = "alert",
        i = "4.0.0-alpha.5",
        s = "bs.alert",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 150,
        u = {
      DISMISS: '[data-dismiss="alert"]'
    },
        d = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + l
    },
        f = {
      ALERT: "alert",
      FADE: "fade",
      IN: "in"
    },
        _ = function () {
      function e(t) {
        n(this, e), this._element = t;
      }

      return e.prototype.close = function (t) {
        t = t || this._element;

        var e = this._getRootElement(t),
            n = this._triggerCloseEvent(e);

        n.isDefaultPrevented() || this._removeElement(e);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, s), this._element = null;
      }, e.prototype._getRootElement = function (e) {
        var n = r.getSelectorFromElement(e),
            i = !1;
        return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i;
      }, e.prototype._triggerCloseEvent = function (e) {
        var n = t.Event(d.CLOSE);
        return t(e).trigger(n), n;
      }, e.prototype._removeElement = function (e) {
        return t(e).removeClass(f.IN), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, t.proxy(this._destroyElement, this, e)).emulateTransitionEnd(c) : void this._destroyElement(e);
      }, e.prototype._destroyElement = function (e) {
        t(e).detach().trigger(d.CLOSED).remove();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data(s);
          o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this);
        });
      }, e._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, o(e, null, [{
        key: "VERSION",
        get: function get() {
          return i;
        }
      }]), e;
    }();

    return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _())), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
      return t.fn[e] = h, _._jQueryInterface;
    }, _;
  }(jQuery), function (t) {
    var e = "button",
        i = "4.0.0-alpha.5",
        r = "bs.button",
        s = "." + r,
        a = ".data-api",
        l = t.fn[e],
        h = {
      ACTIVE: "active",
      BUTTON: "btn",
      FOCUS: "focus"
    },
        c = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: "input",
      ACTIVE: ".active",
      BUTTON: ".btn"
    },
        u = {
      CLICK_DATA_API: "click" + s + a,
      FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)
    },
        d = function () {
      function e(t) {
        n(this, e), this._element = t;
      }

      return e.prototype.toggle = function () {
        var e = !0,
            n = t(this._element).closest(c.DATA_TOGGLE)[0];

        if (n) {
          var i = t(this._element).find(c.INPUT)[0];

          if (i) {
            if ("radio" === i.type) if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;else {
              var o = t(n).find(c.ACTIVE)[0];
              o && t(o).removeClass(h.ACTIVE);
            }
            e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(this._element).trigger("change")), i.focus();
          }
        } else this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE));

        e && t(this._element).toggleClass(h.ACTIVE);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, r), this._element = null;
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data(r);
          i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]();
        });
      }, o(e, null, [{
        key: "VERSION",
        get: function get() {
          return i;
        }
      }]), e;
    }();

    return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
      e.preventDefault();
      var n = e.target;
      t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle");
    }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
      var n = t(e.target).closest(c.BUTTON)[0];
      t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type));
    }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
      return t.fn[e] = l, d._jQueryInterface;
    }, d;
  }(jQuery), function (t) {
    var e = "carousel",
        s = "4.0.0-alpha.5",
        a = "bs.carousel",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 600,
        d = 37,
        f = 39,
        _ = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    },
        p = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    },
        g = {
      NEXT: "next",
      PREVIOUS: "prev"
    },
        m = {
      SLIDE: "slide" + l,
      SLID: "slid" + l,
      KEYDOWN: "keydown" + l,
      MOUSEENTER: "mouseenter" + l,
      MOUSELEAVE: "mouseleave" + l,
      LOAD_DATA_API: "load" + l + h,
      CLICK_DATA_API: "click" + l + h
    },
        E = {
      CAROUSEL: "carousel",
      ACTIVE: "active",
      SLIDE: "slide",
      RIGHT: "right",
      LEFT: "left",
      ITEM: "carousel-item"
    },
        v = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".next, .prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    },
        T = function () {
      function h(e, i) {
        n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners();
      }

      return h.prototype.next = function () {
        this._isSliding || this._slide(g.NEXT);
      }, h.prototype.nextWhenVisible = function () {
        document.hidden || this.next();
      }, h.prototype.prev = function () {
        this._isSliding || this._slide(g.PREVIOUS);
      }, h.prototype.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, h.prototype.cycle = function (e) {
        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(t.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval));
      }, h.prototype.to = function (e) {
        var n = this;
        this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];

        var i = this._getItemIndex(this._activeElement);

        if (!(e > this._items.length - 1 || 0 > e)) {
          if (this._isSliding) return void t(this._element).one(m.SLID, function () {
            return n.to(e);
          });
          if (i === e) return this.pause(), void this.cycle();
          var o = e > i ? g.NEXT : g.PREVIOUS;

          this._slide(o, this._items[e]);
        }
      }, h.prototype.dispose = function () {
        t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, h.prototype._getConfig = function (n) {
        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, p), n;
      }, h.prototype._addEventListeners = function () {
        this._config.keyboard && t(this._element).on(m.KEYDOWN, t.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, t.proxy(this.pause, this)).on(m.MOUSELEAVE, t.proxy(this.cycle, this));
      }, h.prototype._keydown = function (t) {
        if (t.preventDefault(), !/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case d:
            this.prev();
            break;

          case f:
            this.next();
            break;

          default:
            return;
        }
      }, h.prototype._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e);
      }, h.prototype._getItemByDirection = function (t, e) {
        var n = t === g.NEXT,
            i = t === g.PREVIOUS,
            o = this._getItemIndex(e),
            r = this._items.length - 1,
            s = i && 0 === o || n && o === r;

        if (s && !this._config.wrap) return e;
        var a = t === g.PREVIOUS ? -1 : 1,
            l = (o + a) % this._items.length;
        return -1 === l ? this._items[this._items.length - 1] : this._items[l];
      }, h.prototype._triggerSlideEvent = function (e, n) {
        var i = t.Event(m.SLIDE, {
          relatedTarget: e,
          direction: n
        });
        return t(this._element).trigger(i), i;
      }, h.prototype._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);

          var n = this._indicatorsElement.children[this._getItemIndex(e)];

          n && t(n).addClass(E.ACTIVE);
        }
      }, h.prototype._slide = function (e, n) {
        var i = this,
            o = t(this._element).find(v.ACTIVE_ITEM)[0],
            s = n || o && this._getItemByDirection(e, o),
            a = Boolean(this._interval),
            l = e === g.NEXT ? E.LEFT : E.RIGHT;

        if (s && t(s).hasClass(E.ACTIVE)) return void (this._isSliding = !1);

        var h = this._triggerSlideEvent(s, l);

        if (!h.isDefaultPrevented() && o && s) {
          this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
          var c = t.Event(m.SLID, {
            relatedTarget: s,
            direction: l
          });
          r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(e), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function () {
            t(s).removeClass(l).removeClass(e), t(s).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE).removeClass(e).removeClass(l), i._isSliding = !1, setTimeout(function () {
              return t(i._element).trigger(c);
            }, 0);
          }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(c)), a && this.cycle();
        }
      }, h._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(a),
              o = t.extend({}, _, t(this).data());
          "object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);
          var r = "string" == typeof e ? e : o.slide;
          if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
            if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
            n[r]();
          } else o.interval && (n.pause(), n.cycle());
        });
      }, h._dataApiClickHandler = function (e) {
        var n = r.getSelectorFromElement(this);

        if (n) {
          var i = t(n)[0];

          if (i && t(i).hasClass(E.CAROUSEL)) {
            var o = t.extend({}, t(i).data(), t(this).data()),
                s = this.getAttribute("data-slide-to");
            s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault();
          }
        }
      }, o(h, null, [{
        key: "VERSION",
        get: function get() {
          return s;
        }
      }, {
        key: "Default",
        get: function get() {
          return _;
        }
      }]), h;
    }();

    return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function () {
      t(v.DATA_RIDE).each(function () {
        var e = t(this);

        T._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
      return t.fn[e] = c, T._jQueryInterface;
    }, T;
  }(jQuery), function (t) {
    var e = "collapse",
        s = "4.0.0-alpha.5",
        a = "bs.collapse",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 600,
        d = {
      toggle: !0,
      parent: ""
    },
        f = {
      toggle: "boolean",
      parent: "string"
    },
        _ = {
      SHOW: "show" + l,
      SHOWN: "shown" + l,
      HIDE: "hide" + l,
      HIDDEN: "hidden" + l,
      CLICK_DATA_API: "click" + l + h
    },
        p = {
      IN: "in",
      COLLAPSE: "collapse",
      COLLAPSING: "collapsing",
      COLLAPSED: "collapsed"
    },
        g = {
      WIDTH: "width",
      HEIGHT: "height"
    },
        m = {
      ACTIVES: ".card > .in, .card > .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
        E = function () {
      function l(e, i) {
        n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      return l.prototype.toggle = function () {
        t(this._element).hasClass(p.IN) ? this.hide() : this.show();
      }, l.prototype.show = function () {
        var e = this;

        if (!this._isTransitioning && !t(this._element).hasClass(p.IN)) {
          var n = void 0,
              i = void 0;

          if (this._parent) {
            var o = t(this._parent).attr("id");
            n = t.makeArray(t("#" + o).find(m.ACTIVES)), n.length || (n = null);
          }

          if (!(n && (i = t(n).data(a), i && i._isTransitioning))) {
            var s = t.Event(_.SHOW);

            if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
              n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));

              var h = this._getDimension();

              t(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[h] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);

              var c = function c() {
                t(e._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), e._element.style[h] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN);
              };

              if (!r.supportsTransitionEnd()) return void c();
              var d = h[0].toUpperCase() + h.slice(1),
                  f = "scroll" + d;
              t(this._element).one(r.TRANSITION_END, c).emulateTransitionEnd(u), this._element.style[h] = this._element[f] + "px";
            }
          }
        }
      }, l.prototype.hide = function () {
        var e = this;

        if (!this._isTransitioning && t(this._element).hasClass(p.IN)) {
          var n = t.Event(_.HIDE);

          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension(),
                o = i === g.WIDTH ? "offsetWidth" : "offsetHeight";

            this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);

            var s = function s() {
              e.setTransitioning(!1), t(e._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(_.HIDDEN);
            };

            return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s();
          }
        }
      }, l.prototype.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, l.prototype.dispose = function () {
        t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, l.prototype._getConfig = function (n) {
        return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n;
      }, l.prototype._getDimension = function () {
        var e = t(this._element).hasClass(g.WIDTH);
        return e ? g.WIDTH : g.HEIGHT;
      }, l.prototype._getParent = function () {
        var e = this,
            n = t(this._config.parent)[0],
            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return t(n).find(i).each(function (t, n) {
          e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n]);
        }), n;
      }, l.prototype._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(p.IN);
          e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(p.COLLAPSED, !i).attr("aria-expanded", i);
        }
      }, l._getTargetFromElement = function (e) {
        var n = r.getSelectorFromElement(e);
        return n ? t(n)[0] : null;
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this),
              o = n.data(a),
              r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);

          if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
            o[e]();
          }
        });
      }, o(l, null, [{
        key: "VERSION",
        get: function get() {
          return s;
        }
      }, {
        key: "Default",
        get: function get() {
          return d;
        }
      }]), l;
    }();

    return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
      e.preventDefault();

      var n = E._getTargetFromElement(this),
          i = t(n).data(a),
          o = i ? "toggle" : t(this).data();

      E._jQueryInterface.call(t(n), o);
    }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function () {
      return t.fn[e] = c, E._jQueryInterface;
    }, E;
  }(jQuery), function (t) {
    var e = "dropdown",
        i = "4.0.0-alpha.5",
        s = "bs.dropdown",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 27,
        u = 38,
        d = 40,
        f = 3,
        _ = {
      HIDE: "hide" + a,
      HIDDEN: "hidden" + a,
      SHOW: "show" + a,
      SHOWN: "shown" + a,
      CLICK: "click" + a,
      CLICK_DATA_API: "click" + a + l,
      KEYDOWN_DATA_API: "keydown" + a + l
    },
        p = {
      BACKDROP: "dropdown-backdrop",
      DISABLED: "disabled",
      OPEN: "open"
    },
        g = {
      BACKDROP: ".dropdown-backdrop",
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: ".dropdown form",
      ROLE_MENU: '[role="menu"]',
      ROLE_LISTBOX: '[role="listbox"]',
      NAVBAR_NAV: ".navbar-nav",
      VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
    },
        m = function () {
      function e(t) {
        n(this, e), this._element = t, this._addEventListeners();
      }

      return e.prototype.toggle = function () {
        if (this.disabled || t(this).hasClass(p.DISABLED)) return !1;

        var n = e._getParentFromElement(this),
            i = t(n).hasClass(p.OPEN);

        if (e._clearMenus(), i) return !1;

        if ("ontouchstart" in document.documentElement && !t(n).closest(g.NAVBAR_NAV).length) {
          var o = document.createElement("div");
          o.className = p.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus);
        }

        var r = {
          relatedTarget: this
        },
            s = t.Event(_.SHOW, r);
        return t(n).trigger(s), s.isDefaultPrevented() ? !1 : (this.focus(), this.setAttribute("aria-expanded", "true"), t(n).toggleClass(p.OPEN), t(n).trigger(t.Event(_.SHOWN, r)), !1);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, s), t(this._element).off(a), this._element = null;
      }, e.prototype._addEventListeners = function () {
        t(this._element).on(_.CLICK, this.toggle);
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data(s);

          if (i || t(this).data(s, i = new e(this)), "string" == typeof n) {
            if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
            i[n].call(this);
          }
        });
      }, e._clearMenus = function (n) {
        if (!n || n.which !== f) {
          var i = t(g.BACKDROP)[0];
          i && i.parentNode.removeChild(i);

          for (var o = t.makeArray(t(g.DATA_TOGGLE)), r = 0; r < o.length; r++) {
            var s = e._getParentFromElement(o[r]),
                a = {
              relatedTarget: o[r]
            };

            if (t(s).hasClass(p.OPEN) && !(n && "click" === n.type && /input|textarea/i.test(n.target.tagName) && t.contains(s, n.target))) {
              var l = t.Event(_.HIDE, a);
              t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(p.OPEN).trigger(t.Event(_.HIDDEN, a)));
            }
          }
        }
      }, e._getParentFromElement = function (e) {
        var n = void 0,
            i = r.getSelectorFromElement(e);
        return i && (n = t(i)[0]), n || e.parentNode;
      }, e._dataApiKeydownHandler = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(p.DISABLED))) {
          var i = e._getParentFromElement(this),
              o = t(i).hasClass(p.OPEN);

          if (!o && n.which !== c || o && n.which === c) {
            if (n.which === c) {
              var r = t(i).find(g.DATA_TOGGLE)[0];
              t(r).trigger("focus");
            }

            return void t(this).trigger("click");
          }

          var s = t.makeArray(t(g.VISIBLE_ITEMS));

          if (s = s.filter(function (t) {
            return t.offsetWidth || t.offsetHeight;
          }), s.length) {
            var a = s.indexOf(n.target);
            n.which === u && a > 0 && a--, n.which === d && a < s.length - 1 && a++, 0 > a && (a = 0), s[a].focus();
          }
        }
      }, o(e, null, [{
        key: "VERSION",
        get: function get() {
          return i;
        }
      }]), e;
    }();

    return t(document).on(_.KEYDOWN_DATA_API, g.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, g.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, g.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, g.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, g.FORM_CHILD, function (t) {
      t.stopPropagation();
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = h, m._jQueryInterface;
    }, m;
  }(jQuery), function (t) {
    var e = "modal",
        s = "4.0.0-alpha.5",
        a = "bs.modal",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 300,
        d = 150,
        f = 27,
        _ = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        p = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
        g = {
      HIDE: "hide" + l,
      HIDDEN: "hidden" + l,
      SHOW: "show" + l,
      SHOWN: "shown" + l,
      FOCUSIN: "focusin" + l,
      RESIZE: "resize" + l,
      CLICK_DISMISS: "click.dismiss" + l,
      KEYDOWN_DISMISS: "keydown.dismiss" + l,
      MOUSEUP_DISMISS: "mouseup.dismiss" + l,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
      CLICK_DATA_API: "click" + l + h
    },
        m = {
      SCROLLBAR_MEASURER: "modal-scrollbar-measure",
      BACKDROP: "modal-backdrop",
      OPEN: "modal-open",
      FADE: "fade",
      IN: "in"
    },
        E = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
    },
        v = function () {
      function h(e, i) {
        n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }

      return h.prototype.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, h.prototype.show = function (e) {
        var n = this,
            i = t.Event(g.SHOW, {
          relatedTarget: e
        });
        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(g.CLICK_DISMISS, E.DATA_DISMISS, t.proxy(this.hide, this)), t(this._dialog).on(g.MOUSEDOWN_DISMISS, function () {
          t(n._element).one(g.MOUSEUP_DISMISS, function (e) {
            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(t.proxy(this._showElement, this, e)));
      }, h.prototype.hide = function (e) {
        e && e.preventDefault();
        var n = t.Event(g.HIDE);
        t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(g.FOCUSIN), t(this._element).removeClass(m.IN), t(this._element).off(g.CLICK_DISMISS), t(this._dialog).off(g.MOUSEDOWN_DISMISS), r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._element).one(r.TRANSITION_END, t.proxy(this._hideModal, this)).emulateTransitionEnd(u) : this._hideModal());
      }, h.prototype.dispose = function () {
        t.removeData(this._element, a), t(window).off(l), t(document).off(l), t(this._element).off(l), t(this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
      }, h.prototype._getConfig = function (n) {
        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, p), n;
      }, h.prototype._showElement = function (e) {
        var n = this,
            i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.IN), this._config.focus && this._enforceFocus();

        var o = t.Event(g.SHOWN, {
          relatedTarget: e
        }),
            s = function s() {
          n._config.focus && n._element.focus(), t(n._element).trigger(o);
        };

        i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s();
      }, h.prototype._enforceFocus = function () {
        var e = this;
        t(document).off(g.FOCUSIN).on(g.FOCUSIN, function (n) {
          document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus();
        });
      }, h.prototype._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? t(this._element).on(g.KEYDOWN_DISMISS, function (t) {
          t.which === f && e.hide();
        }) : this._isShown || t(this._element).off(g.KEYDOWN_DISMISS);
      }, h.prototype._setResizeEvent = function () {
        this._isShown ? t(window).on(g.RESIZE, t.proxy(this._handleUpdate, this)) : t(window).off(g.RESIZE);
      }, h.prototype._hideModal = function () {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function () {
          t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(g.HIDDEN);
        });
      }, h.prototype._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, h.prototype._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(m.FADE) ? m.FADE : "";

        if (this._isShown && this._config.backdrop) {
          var o = r.supportsTransitionEnd() && i;
          if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(g.CLICK_DISMISS, function (t) {
            return n._ignoreBackdropClick ? void (n._ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()));
          }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.IN), !e) return;
          if (!o) return void e();
          t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(m.IN);

          var s = function s() {
            n._removeBackdrop(), e && e();
          };

          r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s();
        } else e && e();
      }, h.prototype._handleUpdate = function () {
        this._adjustDialog();
      }, h.prototype._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, h.prototype._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, h.prototype._checkScrollbar = function () {
        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, h.prototype._setScrollbar = function () {
        var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);
        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px");
      }, h.prototype._resetScrollbar = function () {
        document.body.style.paddingRight = this._originalBodyPadding;
      }, h.prototype._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);
        var e = t.offsetWidth - t.clientWidth;
        return document.body.removeChild(t), e;
      }, h._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = t(this).data(a),
              r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);

          if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
            o[e](n);
          } else r.show && o.show(n);
        });
      }, o(h, null, [{
        key: "VERSION",
        get: function get() {
          return s;
        }
      }, {
        key: "Default",
        get: function get() {
          return _;
        }
      }]), h;
    }();

    return t(document).on(g.CLICK_DATA_API, E.DATA_TOGGLE, function (e) {
      var n = this,
          i = void 0,
          o = r.getSelectorFromElement(this);
      o && (i = t(o)[0]);
      var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());
      "A" === this.tagName && e.preventDefault();
      var l = t(i).one(g.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(g.HIDDEN, function () {
          t(n).is(":visible") && n.focus();
        });
      });

      v._jQueryInterface.call(t(i), s, this);
    }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
      return t.fn[e] = c, v._jQueryInterface;
    }, v;
  }(jQuery), function (t) {
    var e = "scrollspy",
        s = "4.0.0-alpha.5",
        a = "bs.scrollspy",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = {
      offset: 10,
      method: "auto",
      target: ""
    },
        d = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
        f = {
      ACTIVATE: "activate" + l,
      SCROLL: "scroll" + l,
      LOAD_DATA_API: "load" + l + h
    },
        _ = {
      DROPDOWN_ITEM: "dropdown-item",
      DROPDOWN_MENU: "dropdown-menu",
      NAV_LINK: "nav-link",
      NAV: "nav",
      ACTIVE: "active"
    },
        p = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      LIST_ITEM: ".list-item",
      LI: "li",
      LI_DROPDOWN: "li.dropdown",
      NAV_LINKS: ".nav-link",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
        g = {
      OFFSET: "offset",
      POSITION: "position"
    },
        m = function () {
      function h(e, i) {
        n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, t.proxy(this._process, this)), this.refresh(), this._process();
      }

      return h.prototype.refresh = function () {
        var e = this,
            n = this._scrollElement !== this._scrollElement.window ? g.POSITION : g.OFFSET,
            i = "auto" === this._config.method ? n : this._config.method,
            o = i === g.POSITION ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
        var s = t.makeArray(t(this._selector));
        s.map(function (e) {
          var n = void 0,
              s = r.getSelectorFromElement(e);
          return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, h.prototype.dispose = function () {
        t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, h.prototype._getConfig = function (n) {
        if (n = t.extend({}, u, n), "string" != typeof n.target) {
          var i = t(n.target).attr("id");
          i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }

        return r.typeCheckConfig(e, n, d), n;
      }, h.prototype._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
      }, h.prototype._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, h.prototype._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._scrollElement.offsetHeight;

        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        }

        if (this._activeTarget && t < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var o = this._offsets.length; o--;) {
          var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);
          r && this._activate(this._targets[o]);
        }
      }, h.prototype._activate = function (e) {
        this._activeTarget = e, this._clear();

        var n = this._selector.split(",");

        n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]');
        });
        var i = t(n.join(","));
        i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(p.LI).children(p.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, {
          relatedTarget: e
        });
      }, h.prototype._clear = function () {
        t(this._selector).filter(p.ACTIVE).removeClass(_.ACTIVE);
      }, h._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(a),
              o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e || null;

          if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
            n[e]();
          }
        });
      }, o(h, null, [{
        key: "VERSION",
        get: function get() {
          return s;
        }
      }, {
        key: "Default",
        get: function get() {
          return u;
        }
      }]), h;
    }();

    return t(window).on(f.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(p.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);

        m._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = c, m._jQueryInterface;
    }, m;
  }(jQuery), function (t) {
    var e = "tab",
        i = "4.0.0-alpha.5",
        s = "bs.tab",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 150,
        u = {
      HIDE: "hide" + a,
      HIDDEN: "hidden" + a,
      SHOW: "show" + a,
      SHOWN: "shown" + a,
      CLICK_DATA_API: "click" + a + l
    },
        d = {
      DROPDOWN_MENU: "dropdown-menu",
      ACTIVE: "active",
      FADE: "fade",
      IN: "in"
    },
        f = {
      A: "a",
      LI: "li",
      DROPDOWN: ".dropdown",
      UL: "ul:not(.dropdown-menu)",
      FADE_CHILD: "> .nav-item .fade, > .fade",
      ACTIVE: ".active",
      ACTIVE_CHILD: "> .nav-item > .active, > .active",
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
      DROPDOWN_TOGGLE: ".dropdown-toggle",
      DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
    },
        _ = function () {
      function e(t) {
        n(this, e), this._element = t;
      }

      return e.prototype.show = function () {
        var e = this;

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !t(this._element).hasClass(d.ACTIVE)) {
          var n = void 0,
              i = void 0,
              o = t(this._element).closest(f.UL)[0],
              s = r.getSelectorFromElement(this._element);
          o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);
          var a = t.Event(u.HIDE, {
            relatedTarget: this._element
          }),
              l = t.Event(u.SHOW, {
            relatedTarget: i
          });

          if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
            s && (n = t(s)[0]), this._activate(this._element, o);

            var h = function h() {
              var n = t.Event(u.HIDDEN, {
                relatedTarget: e._element
              }),
                  o = t.Event(u.SHOWN, {
                relatedTarget: i
              });
              t(i).trigger(n), t(e._element).trigger(o);
            };

            n ? this._activate(n, n.parentNode, h) : h();
          }
        }
      }, e.prototype.dispose = function () {
        t.removeClass(this._element, s), this._element = null;
      }, e.prototype._activate = function (e, n, i) {
        var o = t(n).find(f.ACTIVE_CHILD)[0],
            s = i && r.supportsTransitionEnd() && (o && t(o).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
            a = t.proxy(this._transitionComplete, this, e, o, s, i);
        o && s ? t(o).one(r.TRANSITION_END, a).emulateTransitionEnd(c) : a(), o && t(o).removeClass(d.IN);
      }, e.prototype._transitionComplete = function (e, n, i, o) {
        if (n) {
          t(n).removeClass(d.ACTIVE);
          var s = t(n).find(f.DROPDOWN_ACTIVE_CHILD)[0];
          s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1);
        }

        if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.IN)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
          var a = t(e).closest(f.DROPDOWN)[0];
          a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0);
        }

        o && o();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data(s);

          if (o || (o = o = new e(this), i.data(s, o)), "string" == typeof n) {
            if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
            o[n]();
          }
        });
      }, o(e, null, [{
        key: "VERSION",
        get: function get() {
          return i;
        }
      }]), e;
    }();

    return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
      e.preventDefault(), _._jQueryInterface.call(t(this), "show");
    }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
      return t.fn[e] = h, _._jQueryInterface;
    }, _;
  }(jQuery), function (t) {
    if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");

    var e = "tooltip",
        s = "4.0.0-alpha.5",
        a = "bs.tooltip",
        l = "." + a,
        h = t.fn[e],
        c = 150,
        u = "bs-tether",
        d = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: "0 0",
      constraints: []
    },
        f = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "string",
      constraints: "array"
    },
        _ = {
      TOP: "bottom center",
      RIGHT: "middle left",
      BOTTOM: "top center",
      LEFT: "middle right"
    },
        p = {
      IN: "in",
      OUT: "out"
    },
        g = {
      HIDE: "hide" + l,
      HIDDEN: "hidden" + l,
      SHOW: "show" + l,
      SHOWN: "shown" + l,
      INSERTED: "inserted" + l,
      CLICK: "click" + l,
      FOCUSIN: "focusin" + l,
      FOCUSOUT: "focusout" + l,
      MOUSEENTER: "mouseenter" + l,
      MOUSELEAVE: "mouseleave" + l
    },
        m = {
      FADE: "fade",
      IN: "in"
    },
        E = {
      TOOLTIP: ".tooltip",
      TOOLTIP_INNER: ".tooltip-inner"
    },
        v = {
      element: !1,
      enabled: !1
    },
        T = {
      HOVER: "hover",
      FOCUS: "focus",
      CLICK: "click",
      MANUAL: "manual"
    },
        I = function () {
      function h(t, e) {
        n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }

      return h.prototype.enable = function () {
        this._isEnabled = !0;
      }, h.prototype.disable = function () {
        this._isEnabled = !1;
      }, h.prototype.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, h.prototype.toggle = function (e) {
        if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);
          i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(m.IN)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, h.prototype.dispose = function () {
        clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
      }, h.prototype.show = function () {
        var e = this,
            n = t.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(n);
          var i = t.contains(this.element.ownerDocument.documentElement, this.element);
          if (n.isDefaultPrevented() || !i) return;
          var o = this.getTipElement(),
              s = r.getUID(this.constructor.NAME);
          o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);

          var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              l = this._getAttachment(a);

          t(o).data(this.constructor.DATA_KEY, this).appendTo(document.body), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
            attachment: l,
            element: o,
            target: this.element,
            classes: v,
            classPrefix: u,
            offset: this.config.offset,
            constraints: this.config.constraints,
            addTargetClasses: !1
          }), r.reflow(o), this._tether.position(), t(o).addClass(m.IN);

          var c = function c() {
            var n = e._hoverState;
            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === p.OUT && e._leave(null, e);
          };

          if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return void t(this.tip).one(r.TRANSITION_END, c).emulateTransitionEnd(h._TRANSITION_DURATION);
          c();
        }
      }, h.prototype.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            o = t.Event(this.constructor.Event.HIDE),
            s = function s() {
          n._hoverState !== p.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), e && e();
        };

        t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.IN), r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c) : s(), this._hoverState = "");
      }, h.prototype.isWithContent = function () {
        return Boolean(this.getTitle());
      }, h.prototype.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0];
      }, h.prototype.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE).removeClass(m.IN), this.cleanupTether();
      }, h.prototype.setElementContent = function (e, n) {
        var o = this.config.html;
        "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n);
      }, h.prototype.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, h.prototype.cleanupTether = function () {
        this._tether && this._tether.destroy();
      }, h.prototype._getAttachment = function (t) {
        return _[t.toUpperCase()];
      }, h.prototype._setListeners = function () {
        var e = this,
            n = this.config.trigger.split(" ");
        n.forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, t.proxy(e.toggle, e));else if (n !== T.MANUAL) {
            var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            t(e.element).on(i, e.config.selector, t.proxy(e._enter, e)).on(o, e.config.selector, t.proxy(e._leave, e));
          }
        }), this.config.selector ? this.config = t.extend({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, h.prototype._fixTitle = function () {
        var t = i(this.element.getAttribute("data-original-title"));
        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, h.prototype._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;
        return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.IN) || n._hoverState === p.IN ? void (n._hoverState = p.IN) : (clearTimeout(n._timeout), n._hoverState = p.IN, n.config.delay && n.config.delay.show ? void (n._timeout = setTimeout(function () {
          n._hoverState === p.IN && n.show();
        }, n.config.delay.show)) : void n.show());
      }, h.prototype._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;
        return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), n._isWithActiveTrigger() ? void 0 : (clearTimeout(n._timeout), n._hoverState = p.OUT, n.config.delay && n.config.delay.hide ? void (n._timeout = setTimeout(function () {
          n._hoverState === p.OUT && n.hide();
        }, n.config.delay.hide)) : void n.hide());
      }, h.prototype._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }

        return !1;
      }, h.prototype._getConfig = function (n) {
        return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
          show: n.delay,
          hide: n.delay
        }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, h.prototype._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }
        return t;
      }, h._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(a),
              o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) ? e : null;

          if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
            n[e]();
          }
        });
      }, o(h, null, [{
        key: "VERSION",
        get: function get() {
          return s;
        }
      }, {
        key: "Default",
        get: function get() {
          return d;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return a;
        }
      }, {
        key: "Event",
        get: function get() {
          return g;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return l;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return f;
        }
      }]), h;
    }();

    return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = h, I._jQueryInterface;
    }, I;
  }(jQuery));

  (function (r) {
    var a = "popover",
        l = "4.0.0-alpha.5",
        h = "bs.popover",
        c = "." + h,
        u = r.fn[a],
        d = r.extend({}, s.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
        f = r.extend({}, s.DefaultType, {
      content: "(string|element|function)"
    }),
        _ = {
      FADE: "fade",
      IN: "in"
    },
        p = {
      TITLE: ".popover-title",
      CONTENT: ".popover-content"
    },
        g = {
      HIDE: "hide" + c,
      HIDDEN: "hidden" + c,
      SHOW: "show" + c,
      SHOWN: "shown" + c,
      INSERTED: "inserted" + c,
      CLICK: "click" + c,
      FOCUSIN: "focusin" + c,
      FOCUSOUT: "focusout" + c,
      MOUSEENTER: "mouseenter" + c,
      MOUSELEAVE: "mouseleave" + c
    },
        m = function (s) {
      function u() {
        return n(this, u), t(this, s.apply(this, arguments));
      }

      return e(u, s), u.prototype.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, u.prototype.getTipElement = function () {
        return this.tip = this.tip || r(this.config.template)[0];
      }, u.prototype.setContent = function () {
        var t = r(this.getTipElement());
        this.setElementContent(t.find(p.TITLE), this.getTitle()), this.setElementContent(t.find(p.CONTENT), this._getContent()), t.removeClass(_.FADE).removeClass(_.IN), this.cleanupTether();
      }, u.prototype._getContent = function () {
        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
      }, u._jQueryInterface = function (t) {
        return this.each(function () {
          var e = r(this).data(h),
              n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;

          if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
            e[t]();
          }
        });
      }, o(u, null, [{
        key: "VERSION",
        get: function get() {
          return l;
        }
      }, {
        key: "Default",
        get: function get() {
          return d;
        }
      }, {
        key: "NAME",
        get: function get() {
          return a;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return h;
        }
      }, {
        key: "Event",
        get: function get() {
          return g;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return c;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return f;
        }
      }]), u;
    }(s);

    return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function () {
      return r.fn[a] = u, m._jQueryInterface;
    }, m;
  })(jQuery);
}();

/***/ }),

/***/ "./resources/js/template/core/libraries/jquery.min.js":
/*!************************************************************!*\
  !*** ./resources/js/template/core/libraries/jquery.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return d.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a, b) {
      return n.each(this, a, b);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(a) {
      return null != a && a === a.window;
    },
    isNumeric: function isNumeric(a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
    },
    isPlainObject: function isPlainObject(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? h[i.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(a) {
      var b,
          c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);

      if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    },
    merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }

      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
      if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }
      return e.apply([], i);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, e, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = "length" in a && a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + O),
      PSEUDO: new RegExp("^" + P),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ba = /'|\\/g,
        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        da = function da(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ea = function ea() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;

      if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;
            if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }

        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;

            while (l--) {
              o[l] = s + ra(o[l]);
            }

            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
          }

          if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(R, "$1"), b, d, e);
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ia(a) {
      return a[u] = !0, a;
    }

    function ja(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ka(a, b) {
      var c = a.split("|"),
          e = a.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        var b = g.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];
        if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return la(a, b);
        c = a;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          i.unshift(c);
        }

        while (h[d] === i[d]) {
          d++;
        }

        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ca, da).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;

            if (q) {
              if (f) {
                while (p) {
                  l = b;

                  while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];

                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }

              return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
          return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }),
        contains: ia(function (a) {
          return a = a.replace(ca, da), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Z.test(a.nodeName);
        },
        input: function input(a) {
          return Y.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: oa(function () {
          return [0];
        }),
        last: oa(function (a, b) {
          return [b - 1];
        }),
        eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = ma(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = na(b);
    }

    function qa() {}

    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };

    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function sa(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
            if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        ga(a, b[d], c);
      }

      return c;
    }

    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }

      return g;
    }

    function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : va(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
        return a === b;
      }, h, !0), l = sa(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
          }

          m.push(c);
        }
      }

      return ta(m);
    }

    function ya(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;

        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;

            while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = v);
          }

          c && ((l = !o && l) && p--, _f && r.push(l));
        }

        if (p += q, c && q !== p) {
          m = 0;

          while (o = b[m++]) {
            o(r, s, g, h);
          }

          if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = F.call(i));
            }
            s = va(s);
          }

          H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
        }

        return k && (w = v, j = t), r;
      };

      return c ? ia(f) : f;
    }

    return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, ya(e, d)), f.selector = a;
      }

      return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = X.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext,
      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (w.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));

      for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }

      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    },
    filter: function filter(a) {
      return this.pushStack(x(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(x(this, a || [], !0));
    },
    is: function is(a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var y,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = n.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;

    if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);

      if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
          n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }
        return this;
      }

      return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/,
      C = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.extend({
    dir: function dir(a, b, c) {
      var d = [],
          e = void 0 !== c;

      while ((a = a[b]) && 9 !== a.nodeType) {
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      }

      return d;
    },
    sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }

      return c;
    }
  }), n.fn.extend({
    has: function has(a) {
      var b = n(a, this),
          c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {
      ;
    }

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return n.dir(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return n.dir(a, "parentNode", c);
    },
    next: function next(a) {
      return D(a, "nextSibling");
    },
    prev: function prev(a) {
      return D(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return n.dir(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return n.dir(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return n.dir(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return n.dir(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return n.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var E = /\S+/g,
      F = {};

  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = !1;
          break;
        }
      }

      d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
    },
        k = {
      add: function add() {
        if (h) {
          var c = h.length;
          !function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);
              "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
            });
          }(arguments), d ? f = h.length : b && (e = c, j(b));
        }

        return this;
      },
      remove: function remove() {
        return h && n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, h, c)) > -1) {
            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
      },
      empty: function empty() {
        return h = [], f = 0, this;
      },
      disable: function disable() {
        return h = i = b = void 0, this;
      },
      disabled: function disabled() {
        return !h;
      },
      lock: function lock() {
        return i = void 0, b || k.disable(), this;
      },
      locked: function locked() {
        return !i;
      },
      fireWith: function fireWith(a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
      },
      fire: function fire() {
        return k.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!c;
      }
    };

    return k;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
    }
  });

  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
  }

  n.ready.promise = function (b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
  }, n.ready.promise();

  var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        n.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };

  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function get() {
        return {};
      }
    }), this.expando = n.expando + K.uid++;
  }

  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function key(a) {
      if (!K.accepts(a)) return 0;
      var b = {},
          c = a[this.expando];

      if (!c) {
        c = K.uid++;

        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }

      return this.cache[c] || (this.cache[c] = {}), c;
    },
    set: function set(a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];
      if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
        f[d] = b[d];
      }
      return f;
    },
    get: function get(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b];
    },
    access: function access(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function remove(a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;

        while (c--) {
          delete g[d[c]];
        }
      }
    },
    hasData: function hasData(a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function discard(a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    }
  };
  var L = new K(),
      M = new K(),
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}

      M.set(a, b, c);
    } else c = void 0;
    return c;
  }

  n.extend({
    hasData: function hasData(a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function data(a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function removeData(a, b) {
      M.remove(a, b);
    },
    _data: function _data(a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function _removeData(a, b) {
      L.remove(a, b);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }

          L.set(f, "hasDataAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c,
            d = n.camelCase(a);

        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c) return c;
          if (c = M.get(f, d), void 0 !== c) return c;
          if (c = P(f, d, void 0), void 0 !== c) return c;
        } else this.each(function () {
          var c = M.get(this, d);
          M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function removeData(a) {
      return this.each(function () {
        M.remove(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return L.get(a, c) || L.access(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          L.remove(a, [b + "queue", c]);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  });

  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      R = ["Top", "Right", "Bottom", "Left"],
      S = function S(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  },
      T = /^(?:checkbox|radio)$/i;

  !function () {
    var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement("div")),
        c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
      W = /^(?:mouse|pointer|contextmenu)|click/,
      X = /^(?:focusinfocus|focusoutblur)$/,
      Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
    return !0;
  }

  function $() {
    return !1;
  }

  function _() {
    try {
      return l.activeElement;
    } catch (a) {}
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.get(a);

      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return _typeof(n) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(E) || [""], j = b.length;

        while (j--) {
          h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = L.hasData(a) && L.get(a);

      if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;

        while (j--) {
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;

            while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }

            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
      }
    },
    trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          m,
          o,
          p = [d || l],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];

      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
            p.push(g), h = g;
          }

          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }

        f = 0;

        while ((g = p[f++]) && !b.isPropagationStopped()) {
          b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        }

        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (L.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
        if (i.disabled !== !0 || "click" !== a.type) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;

      while (b--) {
        c = d[b], a[c] = f[c];
      }

      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d, e) {
      var f, g;

      if ("object" == _typeof(a)) {
        "string" != typeof b && (c = c || b, b = void 0);

        for (g in a) {
          this.on(g, b, c, a[g], e);
        }

        return this;
      }

      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;
      return 1 === e && (f = d, d = function d(a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ba = /<([\w:]+)/,
      ca = /<|&#?\w+;/,
      da = /<(?:script|style|link)/i,
      ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fa = /^$|\/(?:java|ecma)script/i,
      ga = /^true\/(.*)/,
      ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ia = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

  function ja(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function ka(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }

  function la(a) {
    var b = ga.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
  }

  function na(a, b) {
    var c, d, e, f, g, h, i, j;

    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};

        for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }

      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
    }
  }

  function oa(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }

  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }

  n.extend({
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
        pa(f[d], g[d]);
      }
      if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
        na(f[d], g[d]);
      } else na(a, h);
      return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
    },
    buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
        if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
          f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];

          while (j--) {
            f = f.lastChild;
          }

          n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
        } else l.push(b.createTextNode(e));
      }

      k.textContent = "", m = 0;

      while (e = l[m++]) {
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
          j = 0;

          while (e = f[j++]) {
            fa.test(e.type || "") && c.push(e);
          }
        }
      }

      return k;
    },
    cleanData: function cleanData(a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events) for (d in b.events) {
            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          }
          L.cache[e] && delete L.cache[e];
        }

        delete M.cache[c[M.expando]];
      }
    }
  }), n.fn.extend({
    text: function text(a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function remove(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
      }

      return this;
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return J(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;

        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(aa, "<$1></$2>");

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function detach(a) {
      return this.remove(a, !0);
    },
    domManip: function domManip(a, b) {
      a = e.apply([], a);
      var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });

      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
          h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
        }

        if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
          h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
        }
      }

      return this;
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      }

      return this.pushStack(d);
    };
  });
  var qa,
      ra = {};

  function sa(b, c) {
    var d,
        e = n(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return e.detach(), f;
  }

  function ta(a) {
    var b = l,
        c = ra[a];
    return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
  }

  var ua = /^margin/,
      va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      wa = function wa(b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  };

  function xa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }

  function ya(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  !function () {
    var b,
        c,
        d = l.documentElement,
        e = l.createElement("div"),
        f = l.createElement("div");

    if (f.style) {
      var _g = function _g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
      };

      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function pixelPosition() {
          return _g(), b;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == c && _g(), c;
        },
        reliableMarginRight: function reliableMarginRight() {
          var b,
              c = f.appendChild(l.createElement("div"));
          return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
        }
      });
    }
  }(), n.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  };
  var za = /^(none|table(?!-c[ea]).+)/,
      Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
      Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
      Ca = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Da = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ea = ["Webkit", "O", "Moz", "ms"];

  function Fa(a, b) {
    if (b in a) return b;
    var c = b[0].toUpperCase() + b.slice(1),
        d = b,
        e = Ea.length;

    while (e--) {
      if (b = Ea[e] + c, b in a) return b;
    }

    return d;
  }

  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function Ha(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    }

    return g;
  }

  function Ia(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = wa(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);

    if (0 >= e || null == e) {
      if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = xa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
          return Ia(a, b, d);
        }) : Ia(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && wa(a);
        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, {
      display: "inline-block"
    }, xa, [a, "marginRight"]) : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
  }), n.fn.extend({
    css: function css(a, b) {
      return J(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = wa(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return Ja(this, !0);
    },
    hide: function hide() {
      return Ja(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }

  n.Tween = Ka, Ka.prototype = {
    constructor: Ka,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = Ka.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = Ka.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
    }
  }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }
  }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }
  }, n.fx = Ka.prototype.init, n.fx.step = {};
  var La,
      Ma,
      Na = /^(?:toggle|show|hide)$/,
      Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Pa = /queueHooks$/,
      Qa = [Va],
      Ra = {
    "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = Oa.exec(b),
          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
          g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
          h = 1,
          i = 20;

      if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;

        do {
          h = h || ".5", g /= h, n.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }

      return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }]
  };

  function Sa() {
    return setTimeout(function () {
      La = void 0;
    }), La = n.now();
  }

  function Ta(a, b) {
    var c,
        d = 0,
        e = {
      height: a
    };

    for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = R[d], e["margin" + c] = e["padding" + c] = a;
    }

    return b && (e.opacity = e.width = a), e;
  }

  function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function Va(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && S(a),
        q = L.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], Na.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }

        m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        L.remove(a, "fxshow");

        for (b in m) {
          n.style(a, b, m[b]);
        }
      });

      for (d in m) {
        g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function Wa(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function Xa(a, b, c) {
    var d,
        e,
        f = 0,
        g = Qa.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {}
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: La || Sa(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (Wa(k, j.opts.specialEasing); g > f; f++) {
      if (d = Qa[f].call(j, a, k, j.opts)) return d;
    }

    return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(Xa, {
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
      }
    },
    prefilter: function prefilter(a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = Xa(this, n.extend({}, a), f);
        (e || L.get(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = L.get(this);
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Pa.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = L.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: Ta("show"),
    slideUp: Ta("hide"),
    slideToggle: Ta("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;

    for (La = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }

    c.length || n.fx.stop(), La = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    clearInterval(Ma), Ma = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);

      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
    a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
  }();
  var Ya,
      Za,
      $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function attr(a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    }
  }), Za = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $a[b] || n.find.attr;

    $a[b] = function (a, b, d) {
      var e, f;
      return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
    };
  });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className));
      });
      if (h) for (b = (a || "").match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
          f = 0;

          while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }

          g = n.trim(d), c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className));
      });
      if (h) for (b = (a || "").match(E) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
          f = 0;

          while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }

          g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = n(this),
              f = a.match(E) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
      }

      return !1;
    }
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a));
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          }

          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  });
  var cb = n.now(),
      db = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || "string" != typeof a) return null;

    try {
      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
    } catch (d) {
      b = void 0;
    }

    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
  };
  var eb = /#.*$/,
      fb = /([?&])_=[^&]*/,
      gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ib = /^(?:GET|HEAD)$/,
      jb = /^\/\//,
      kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      lb = {},
      mb = {},
      nb = "*/".concat("*"),
      ob = a.location.href,
      pb = kb.exec(ob.toLowerCase()) || [];

  function qb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function rb(a, b, c, d) {
    var e = {},
        f = a === mb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function sb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }

    return d && n.extend(!0, a, d), a;
  }

  function tb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }

        g || (g = e);
      }

      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function ub(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: "GET",
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": nb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function ajax(a, b) {
      "object" == _typeof(a) && (b = a, a = void 0), b = b || {};
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === t) {
            if (!f) {
              f = {};

              while (b = gb.exec(e)) {
                f[b[1].toLowerCase()] = b[2];
              }
            }

            b = f[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? e : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || u;
          return c && c.abort(b), x(0, b), this;
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
      i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);

      for (j in k.headers) {
        v.setRequestHeader(j, k.headers[j]);
      }

      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";

      for (j in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[j](k[j]);
      }

      if (c = rb(mb, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));

        try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");

      function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
      }

      return v;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;

        while (a.firstElementChild) {
          a = a.firstElementChild;
        }

        return a;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b));
      } : function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var vb = /%20/g,
      wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == _typeof(e) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }
    return d.join("&").replace(vb, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(xb, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(xb, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  };
  var Bb = 0,
      Cb = {},
      Db = {
    0: 200,
    1223: 204
  },
      Eb = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Cb) {
      Cb[a]();
    }
  }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
    var _b2;

    return k.cors || Eb && !a.crossDomain ? {
      send: function send(c, d) {
        var e,
            f = a.xhr(),
            g = ++Bb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
          f[e] = a.xhrFields[e];
        }
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");

        for (e in c) {
          f.setRequestHeader(e, c[e]);
        }

        _b2 = function b(a) {
          return function () {
            _b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");

        try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (_b2) throw h;
        }
      },
      abort: function abort() {
        _b2 && _b2();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c;

      return {
        send: function send(d, e) {
          b = n("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", _c = function c(a) {
            b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(b[0]);
        },
        abort: function abort() {
          _c && _c();
        }
      };
    }
  });
  var Fb = [],
      Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = Fb.pop() || n.expando + "_" + cb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a),
        e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };
  var Hb = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  var Ib = a.document.documentElement;

  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = this[0],
          e = {
        top: 0,
        left: 0
      },
          f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = {
          top: 0,
          left: 0
        };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || Ib;

        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || Ib;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (b, c) {
    var d = "pageYOffset" === c;

    n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Jb(b);
        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return n;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Kb = a.jQuery,
      Lb = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
  }, _typeof(b) === U && (a.jQuery = a.$ = n), n;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/template/extensions/pace.min.js":
/*!******************************************************!*\
  !*** ./resources/js/template/extensions/pace.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! pace 1.0.0 */
(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      _v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function Z(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) {
      Y.call(b, d) && (a[d] = b[d]);
    }

    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
  },
      $ = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  for (u = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, C = function C() {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
    return setTimeout(a, 50);
  }, t = function t(a) {
    return clearTimeout(a);
  }), G = function G(a) {
    var b, _c;

    return b = C(), (_c = function c() {
      var d;
      return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
        return E(_c);
      })) : setTimeout(_c, 33 - d);
    })();
  }, F = function F() {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, _v = function v() {
    var a, b, c, d, e, f, g;

    for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
      if (c = d[f]) for (a in c) {
        Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _v(b[a], e) : b[a] = e);
      }
    }

    return b;
  }, q = function q(a) {
    var b, c, d, e, f;

    for (c = b = 0, e = 0, f = a.length; f > e; e++) {
      d = a[e], c += Math.abs(d), b++;
    }

    return c / b;
  }, x = function x(a, b) {
    var c, d, e;

    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;

      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}

    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;

      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];

        for (c = 0, e = []; c < this.bindings[a].length;) {
          e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        }

        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;

      if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) {
          h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        }

        return i;
      }
    }, a;
  }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
    K = U[Q], D[K] === !0 && (D[K] = u[K]);
  }

  i = function (a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments);
    }

    return Z(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }

    return a.prototype.getElement = function () {
      var a;

      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }

      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }

      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;

      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
        b = g[e], a.children[0].style[b] = d;
      }

      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }

    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;

      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
          c = f[d], g.push(c.call(this, b));
        }

        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
    var c, d, e, f;
    f = [];

    for (d in b.prototype) {
      try {
        e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
      } catch (g) {
        c = g;
      }
    }

    return f;
  }, A = [], j.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
  }, j.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
  }, J = function J(a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";

    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
    }

    return !1;
  }, k = function (a) {
    function b() {
      var a,
          c = this;
      b.__super__.constructor.apply(this, arguments), a = function a(_a) {
        var b;
        return b = _a.open, _a.open = function (d, e) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: _a
          }), b.apply(_a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new P(b), a(c), c;
      };

      try {
        w(window.XMLHttpRequest, P);
      } catch (d) {}

      if (null != O) {
        window.XDomainRequest = function () {
          var b;
          return b = new O(), a(b), b;
        };

        try {
          w(window.XDomainRequest, O);
        } catch (d) {}
      }

      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d;
        };

        try {
          w(window.WebSocket, N);
        } catch (d) {}
      }
    }

    return Z(b, a), b;
  }(h), R = null, y = function y() {
    return null == R && (R = new k()), R;
  }, I = function I(a) {
    var b, c, d, e;

    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0;
      } else if (b.test(a)) return !0;
    }

    return !1;
  }, y().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, k;

      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break;
          }

          k.push(void 0);
        }

        return k;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }

    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
    }, a;
  }(), o = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
        b = g[d], a.addEventListener(b, function () {
          return h.progress = 100;
        }, !1);
      } else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }

    return a;
  }(), n = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f = this;

      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
        b = e[c], a.addEventListener(b, function () {
          return f.progress = 100;
        }, !1);
      }
    }

    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;

      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
        b = f[c], this.elements.push(new e(b));
      }
    }

    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }

    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, D.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
          b,
          c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }

    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
          b,
          c,
          d,
          e,
          f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }

    return a;
  }(), m = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
    }

    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
    return D.restartOnPushState ? j.restart() : void 0;
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
    return z(), T.apply(window.history, arguments);
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
    return z(), W.apply(window.history, arguments);
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function B() {
    var a, c, d, e, f, g, h, i;

    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
      a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    }

    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
      K = i[d], L.push(new K(D));
    }

    return j.bar = r = new b(), H = [], M = new m();
  })(), j.stop = function () {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
  }, j.restart = function () {
    return j.trigger("restart"), j.stop(), j.start();
  }, j.go = function () {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;

      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
          g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
        }
      }

      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
        return r.finish(), j.running = !1, j.trigger("hide");
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
    });
  }, j.start = function (a) {
    _v(D, a), j.running = !0;

    try {
      r.render();
    } catch (b) {
      i = b;
    }

    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return j;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}).call(this);

/***/ }),

/***/ "./resources/js/template/scripts/pages/dashboard-lite.js":
/*!***************************************************************!*\
  !*** ./resources/js/template/scripts/pages/dashboard-lite.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var parts = window.location.pathname.split('/');
var urlPath = parts.pop() || parts.pop();

if (urlPath == "public") {
  /*=========================================================================================
      File Name: dashboard-lite.js
      Description: intialize advance cards
      ----------------------------------------------------------------------------------------
      Item Name: Robust - Responsive Admin Theme
      Version: 1.2
      Author: GeeksLabs
      Author URL: http://www.themeforest.net/user/geekslabs
  ==========================================================================================*/
  (function (window, document, $) {
    'use strict';
    /**********************************************************
    *                    Projects Task Status                  *
    **********************************************************/
    //Get the context of the Chart canvas element we want to select

    var ctx2 = $("#line-stacked-area"); // Chart Options

    var userPageVisitOptions = {
      responsive: true,
      maintainAspectRatio: false,
      pointDotStrokeWidth: 4,
      legend: {
        display: false,
        labels: {
          fontColor: '#FFF',
          boxWidth: 10
        },
        position: 'top'
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: "rgba(255,255,255, 0.3)",
            drawTicks: false,
            drawBorder: false
          },
          ticks: {
            display: false,
            min: 0,
            max: 70,
            maxTicksLimit: 4
          }
        }]
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Legend'
      }
    };
    /****************************************************
    *               Employee Satisfaction               *
    ****************************************************/
    //Get the context of the Chart canvas element we want to select

    var ctx1 = document.getElementById("emp-satisfaction").getContext("2d"); // Create Linear Gradient

    var white_gradient = ctx1.createLinearGradient(0, 0, 0, 400);
    white_gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
    white_gradient.addColorStop(1, 'rgba(255,255,255,0)'); // Chart Options

    var empSatOptions = {
      responsive: true,
      maintainAspectRatio: false,
      datasetStrokeWidth: 3,
      pointDotStrokeWidth: 4,
      tooltipFillColor: "rgba(0,0,0,0.8)",
      legend: {
        display: false
      },
      hover: {
        mode: 'label'
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false,
          ticks: {
            min: 0,
            max: 85
          }
        }]
      },
      title: {
        display: false,
        fontColor: "#FFF",
        fullWidth: false,
        fontSize: 40,
        text: '82%'
      }
    }; // Chart Data

    var empSatData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Employees",
        data: [28, 35, 36, 48, 46, 42, 60],
        backgroundColor: white_gradient,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        strokeColor: "#ff6c23",
        pointColor: "#fff",
        pointBorderColor: "rgba(255,255,255,1)",
        pointBackgroundColor: "#3BAFDA",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }]
    };
    var empSatconfig = {
      type: 'line',
      // Chart Options
      options: empSatOptions,
      // Chart Data
      data: empSatData
    }; // Create the chart

    var areaChart = new Chart(ctx1, empSatconfig); // Chart Data

    var userPageVisitData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Android",
        data: [18, 15, 30, 25, 28, 35, 14, 18, 12, 20, 18, 24],
        backgroundColor: 'transparent',
        borderColor: "#FF6E40",
        pointColor: "#fff",
        pointBorderColor: "#FF6E40",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 3
      }, {
        label: "iOS",
        data: [30, 35, 60, 40, 45, 55, 32, 45, 58, 53, 45, 60],
        backgroundColor: 'transparent',
        borderColor: "#1DE9B6",
        pointColor: "#fff",
        pointBorderColor: "#1DE9B6",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 3
      }]
    };
    var userPageVisitConfig = {
      type: 'line',
      // Chart Options
      options: userPageVisitOptions,
      // Chart Data
      data: userPageVisitData
    }; // Create the chart

    var stackedAreaChart = new Chart(ctx2, userPageVisitConfig); // Live chart update random data for the new entry

    setInterval(function () {
      setStackedAreaChartData(stackedAreaChart.data.datasets[0].data, 5, 25);
      setStackedAreaChartData(stackedAreaChart.data.datasets[1].data, 35, 60);
    }, 3500);

    function setStackedAreaChartData(data, minValue, maxValue) {
      data.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
      data.shift();
      stackedAreaChart.update();
    }
  })(window, document, jQuery);
}

/***/ }),

/***/ "./resources/js/template/ui/blockUI.min.js":
/*!*************************************************!*\
  !*** ./resources/js/template/ui/blockUI.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function () {
  "use strict";

  function e(e) {
    function t(t, n) {
      var s,
          h,
          k = t == window,
          y = n && void 0 !== n.message ? n.message : void 0;

      if (n = e.extend({}, e.blockUI.defaults, n || {}), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
        if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = void 0 === y ? n.message : y, k && p && o(window, {
          fadeOut: 0
        }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
          var m = y.jquery ? y[0] : y,
              v = {};
          e(t).data("blockUI.history", v), v.el = m, v.parent = m.parentNode, v.display = m.style.display, v.position = m.style.position, v.parent && v.parent.removeChild(m);
        }

        e(t).data("blockUI.onUnblock", n.onUnblock);
        var g,
            I,
            w,
            U,
            x = n.baseZ;
        g = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && g.css("opacity", 0);
        var C = [g, I, w],
            S = e(k ? "body" : t);
        e.each(C, function () {
          this.appendTo(S);
        }), n.theme && n.draggable && e.fn.draggable && w.draggable({
          handle: ".ui-dialog-titlebar",
          cancel: "li"
        });
        var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);

        if (u || O) {
          if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(t, "borderTopWidth"),
              T = d(t, "borderLeftWidth"),
              M = E ? "(0 - " + E + ")" : 0,
              B = T ? "(0 - " + T + ")" : 0;
          e.each(C, function (e, t) {
            var o = t[0].style;
            if (o.position = "absolute", 2 > e) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;else if (!n.centerY && k) {
              var i = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                  s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';
              o.setExpression("top", s);
            }
          });
        }

        if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && g.show(), n.fadeIn) {
          var j = n.onBlock ? n.onBlock : c,
              H = n.showOverlay && !y ? j : c,
              z = y ? j : c;
          n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z);
        } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();

        if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : a(w[0], n.centerX, n.centerY), n.timeout) {
          var W = setTimeout(function () {
            k ? e.unblockUI(n) : e(t).unblock(n);
          }, n.timeout);
          e(t).data("blockUI.timeout", W);
        }
      }
    }

    function o(t, o) {
      var s,
          l = t == window,
          a = e(t),
          d = a.data("blockUI.history"),
          c = a.data("blockUI.timeout");
      c && (clearTimeout(c), a.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
      var r;
      r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
        0 === --s && n(r, d, o, t);
      })) : n(r, d, o, t);
    }

    function n(t, o, n, i) {
      var s = e(i);

      if (!s.data("blockUI.isBlocked")) {
        t.each(function (e, t) {
          this.parentNode && this.parentNode.removeChild(this);
        }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
        var l = e(document.body),
            a = l.width(),
            d = l[0].style.width;
        l.width(a - 1).width(a), l[0].style.width = d;
      }
    }

    function i(t, o, n) {
      var i = o == window,
          l = e(o);

      if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
        var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
        t ? e(document).bind(a, n, s) : e(document).unbind(a, s);
      }
    }

    function s(t) {
      if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
        var o = b,
            n = !t.shiftKey && t.target === o[o.length - 1],
            i = t.shiftKey && t.target === o[0];
        if (n || i) return setTimeout(function () {
          l(i);
        }, 10), !1;
      }

      var s = t.data,
          a = e(t.target);
      return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length;
    }

    function l(e) {
      if (b) {
        var t = b[e === !0 ? b.length - 1 : 0];
        t && t.focus();
      }
    }

    function a(e, t, o) {
      var n = e.parentNode,
          i = e.style,
          s = (n.offsetWidth - e.offsetWidth) / 2 - d(n, "borderLeftWidth"),
          l = (n.offsetHeight - e.offsetHeight) / 2 - d(n, "borderTopWidth");
      t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0");
    }

    function d(t, o) {
      return parseInt(e.css(t, o), 10) || 0;
    }

    e.fn._fadeIn = e.fn.fadeIn;

    var c = e.noop || function () {},
        r = /MSIE/.test(navigator.userAgent),
        u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
        f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));

    e.blockUI = function (e) {
      t(window, e);
    }, e.unblockUI = function (e) {
      o(window, e);
    }, e.growlUI = function (t, o, n, i) {
      var s = e('<div class="growlUI"></div>');
      t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), void 0 === n && (n = 3e3);

      var l = function l(t) {
        t = t || {}, e.blockUI({
          message: s,
          fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
          fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
          timeout: "undefined" != typeof t.timeout ? t.timeout : n,
          centerY: !1,
          showOverlay: !1,
          onUnblock: i,
          css: e.blockUI.defaults.growlCSS
        });
      };

      l();
      s.css("opacity");
      s.mouseover(function () {
        l({
          fadeIn: 0,
          timeout: 3e4
        });
        var t = e(".blockMsg");
        t.stop(), t.fadeTo(300, 1);
      }).mouseout(function () {
        e(".blockMsg").fadeOut(1e3);
      });
    }, e.fn.block = function (o) {
      if (this[0] === window) return e.blockUI(o), this;
      var n = e.extend({}, e.blockUI.defaults, o || {});
      return this.each(function () {
        var t = e(this);
        n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
          fadeOut: 0
        });
      }), this.each(function () {
        "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o);
      });
    }, e.fn.unblock = function (t) {
      return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
        o(this, t);
      });
    }, e.blockUI.version = 2.7, e.blockUI.defaults = {
      message: "<h1>Please wait...</h1>",
      title: null,
      draggable: !0,
      theme: !1,
      css: {
        padding: 0,
        margin: 0,
        width: "30%",
        top: "40%",
        left: "35%",
        textAlign: "center",
        color: "#000",
        border: "3px solid #aaa",
        backgroundColor: "#fff",
        cursor: "wait"
      },
      themedCSS: {
        width: "30%",
        top: "40%",
        left: "35%"
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: .6,
        cursor: "wait"
      },
      cursorReset: "default",
      growlCSS: {
        width: "350px",
        top: "10px",
        left: "",
        right: "10px",
        border: "none",
        padding: "5px",
        opacity: .6,
        cursor: "default",
        color: "#fff",
        backgroundColor: "#000",
        "-webkit-border-radius": "10px",
        "-moz-border-radius": "10px",
        "border-radius": "10px"
      },
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
      forceIframe: !1,
      baseZ: 1e3,
      centerX: !0,
      centerY: !0,
      allowBodyStretch: !0,
      bindEvents: !0,
      constrainTabKey: !0,
      fadeIn: 200,
      fadeOut: 400,
      timeout: 0,
      showOverlay: !0,
      focusInput: !0,
      focusableElements: ":input:enabled:visible",
      onBlock: null,
      onUnblock: null,
      onOverlayClick: null,
      quirksmodeOffsetHack: 4,
      blockMsgClass: "blockMsg",
      ignoreIfBlocked: !1
    };
    var p = null,
        b = [];
  }

   true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
}();

/***/ }),

/***/ "./resources/js/template/ui/jquery.matchHeight-min.js":
/*!************************************************************!*\
  !*** ./resources/js/template/ui/jquery.matchHeight-min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (t) {
  var e = -1,
      o = -1,
      i = function i(t) {
    return parseFloat(t) || 0;
  },
      a = function a(e) {
    var o = 1,
        a = t(e),
        n = null,
        r = [];
    return a.each(function () {
      var e = t(this),
          a = e.offset().top - i(e.css("margin-top")),
          s = r.length > 0 ? r[r.length - 1] : null;
      null === s ? r.push(e) : Math.floor(Math.abs(n - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = a;
    }), r;
  },
      n = function n(e) {
    var o = {
      byRow: !0,
      property: "height",
      target: null,
      remove: !1
    };
    return "object" == _typeof(e) ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o);
  },
      r = t.fn.matchHeight = function (e) {
    var o = n(e);

    if (o.remove) {
      var i = this;
      return this.css(o.property, ""), t.each(r._groups, function (t, e) {
        e.elements = e.elements.not(i);
      }), this;
    }

    return this.length <= 1 && !o.target ? this : (r._groups.push({
      elements: this,
      options: o
    }), r._apply(this, o), this);
  };

  r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = a, r._parse = i, r._parseOptions = n, r._apply = function (e, o) {
    var s = n(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        d = h.parents().filter(":hidden");
    return d.each(function () {
      var e = t(this);
      e.data("style-cache", e.attr("style"));
    }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
      var e = t(this),
          o = e.css("display");
      "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
        display: o,
        "padding-top": "0",
        "padding-bottom": "0",
        "margin-top": "0",
        "margin-bottom": "0",
        "border-top-width": "0",
        "border-bottom-width": "0",
        height: "100px",
        overflow: "hidden"
      });
    }), l = a(h), h.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || "");
    })), t.each(l, function (e, o) {
      var a = t(o),
          n = 0;
      if (s.target) n = s.target.outerHeight(!1);else {
        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
        a.each(function () {
          var e = t(this),
              o = e.attr("style"),
              i = e.css("display");
          "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
          var a = {
            display: i
          };
          a[s.property] = "", e.css(a), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "");
        });
      }
      a.each(function () {
        var e = t(this),
            o = 0;
        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, n - o + "px"));
      });
    }), d.each(function () {
      var e = t(this);
      e.attr("style", e.data("style-cache") || null);
    }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this;
  }, r._applyDataApi = function () {
    var e = {};
    t("[data-match-height], [data-mh]").each(function () {
      var o = t(this),
          i = o.attr("data-mh") || o.attr("data-match-height");
      i in e ? e[i] = e[i].add(o) : e[i] = o;
    }), t.each(e, function () {
      this.matchHeight(!0);
    });
  };

  var s = function s(e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
      r._apply(this.elements, this.options);
    }), r._afterUpdate && r._afterUpdate(e, r._groups);
  };

  r._update = function (i, a) {
    if (a && "resize" === a.type) {
      var n = t(window).width();
      if (n === e) return;
      e = n;
    }

    i ? -1 === o && (o = setTimeout(function () {
      s(a), o = -1;
    }, r._throttle)) : s(a);
  }, t(r._applyDataApi), t(window).bind("load", function (t) {
    r._update(!1, t);
  }), t(window).bind("resize orientationchange", function (t) {
    r._update(!0, t);
  });
});

/***/ }),

/***/ "./resources/js/template/ui/perfect-scrollbar.jquery.min.js":
/*!******************************************************************!*\
  !*** ./resources/js/template/ui/perfect-scrollbar.jquery.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* perfect-scrollbar v0.6.11 */
!function t(e, n, r) {
  function o(l, a) {
    if (!n[l]) {
      if (!e[l]) {
        var s = "function" == typeof require && require;
        if (!a && s) return require(l, !0);
        if (i) return i(l, !0);
        var c = new Error("Cannot find module '" + l + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      var u = n[l] = {
        exports: {}
      };
      e[l][0].call(u.exports, function (t) {
        var n = e[l][1][t];
        return o(n ? n : t);
      }, u, u.exports, t, e, n, r);
    }

    return n[l].exports;
  }

  for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) {
    o(r[l]);
  }

  return o;
}({
  1: [function (t, e, n) {
    "use strict";

    function r(t) {
      t.fn.perfectScrollbar = function (t) {
        return this.each(function () {
          if ("object" == _typeof(t) || "undefined" == typeof t) {
            var e = t;
            i.get(this) || o.initialize(this, e);
          } else {
            var n = t;
            "update" === n ? o.update(this) : "destroy" === n && o.destroy(this);
          }
        });
      };
    }

    var o = t("../main"),
        i = t("../plugin/instances");
    if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var l; }
    e.exports = r;
  }, {
    "../main": 7,
    "../plugin/instances": 18
  }],
  2: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = t.className.split(" ");
      n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ");
    }

    function o(t, e) {
      var n = t.className.split(" "),
          r = n.indexOf(e);
      r >= 0 && n.splice(r, 1), t.className = n.join(" ");
    }

    n.add = function (t, e) {
      t.classList ? t.classList.add(e) : r(t, e);
    }, n.remove = function (t, e) {
      t.classList ? t.classList.remove(e) : o(t, e);
    }, n.list = function (t) {
      return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ");
    };
  }, {}],
  3: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      return window.getComputedStyle(t)[e];
    }

    function o(t, e, n) {
      return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t;
    }

    function i(t, e) {
      for (var n in e) {
        var r = e[n];
        "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r;
      }

      return t;
    }

    var l = {};
    l.e = function (t, e) {
      var n = document.createElement(t);
      return n.className = e, n;
    }, l.appendTo = function (t, e) {
      return e.appendChild(t), t;
    }, l.css = function (t, e, n) {
      return "object" == _typeof(e) ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n);
    }, l.matches = function (t, e) {
      return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0;
    }, l.remove = function (t) {
      "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }, l.queryChildren = function (t, e) {
      return Array.prototype.filter.call(t.childNodes, function (t) {
        return l.matches(t, e);
      });
    }, e.exports = l;
  }, {}],
  4: [function (t, e, n) {
    "use strict";

    var r = function r(t) {
      this.element = t, this.events = {};
    };

    r.prototype.bind = function (t, e) {
      "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1);
    }, r.prototype.unbind = function (t, e) {
      var n = "undefined" != typeof e;
      this.events[t] = this.events[t].filter(function (r) {
        return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1);
      }, this);
    }, r.prototype.unbindAll = function () {
      for (var t in this.events) {
        this.unbind(t);
      }
    };

    var o = function o() {
      this.eventElements = [];
    };

    o.prototype.eventElement = function (t) {
      var e = this.eventElements.filter(function (e) {
        return e.element === t;
      })[0];
      return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e;
    }, o.prototype.bind = function (t, e, n) {
      this.eventElement(t).bind(e, n);
    }, o.prototype.unbind = function (t, e, n) {
      this.eventElement(t).unbind(e, n);
    }, o.prototype.unbindAll = function () {
      for (var t = 0; t < this.eventElements.length; t++) {
        this.eventElements[t].unbindAll();
      }
    }, o.prototype.once = function (t, e, n) {
      var r = this.eventElement(t),
          o = function o(t) {
        r.unbind(e, o), n(t);
      };

      r.bind(e, o);
    }, e.exports = o;
  }, {}],
  5: [function (t, e, n) {
    "use strict";

    e.exports = function () {
      function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }

      return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    }();
  }, {}],
  6: [function (t, e, n) {
    "use strict";

    var r = t("./class"),
        o = t("./dom"),
        i = n.toInt = function (t) {
      return parseInt(t, 10) || 0;
    },
        l = n.clone = function (t) {
      if (null === t) return null;
      if (t.constructor === Array) return t.map(l);

      if ("object" == _typeof(t)) {
        var e = {};

        for (var n in t) {
          e[n] = l(t[n]);
        }

        return e;
      }

      return t;
    };

    n.extend = function (t, e) {
      var n = l(t);

      for (var r in e) {
        n[r] = l(e[r]);
      }

      return n;
    }, n.isEditable = function (t) {
      return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]");
    }, n.removePsClasses = function (t) {
      for (var e = r.list(t), n = 0; n < e.length; n++) {
        var o = e[n];
        0 === o.indexOf("ps-") && r.remove(t, o);
      }
    }, n.outerWidth = function (t) {
      return i(o.css(t, "width")) + i(o.css(t, "paddingLeft")) + i(o.css(t, "paddingRight")) + i(o.css(t, "borderLeftWidth")) + i(o.css(t, "borderRightWidth"));
    }, n.startScrolling = function (t, e) {
      r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"));
    }, n.stopScrolling = function (t, e) {
      r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"));
    }, n.env = {
      isWebKit: "WebkitAppearance" in document.documentElement.style,
      supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: null !== window.navigator.msMaxTouchPoints
    };
  }, {
    "./class": 2,
    "./dom": 3
  }],
  7: [function (t, e, n) {
    "use strict";

    var r = t("./plugin/destroy"),
        o = t("./plugin/initialize"),
        i = t("./plugin/update");
    e.exports = {
      initialize: o,
      update: i,
      destroy: r
    };
  }, {
    "./plugin/destroy": 9,
    "./plugin/initialize": 17,
    "./plugin/update": 21
  }],
  8: [function (t, e, n) {
    "use strict";

    e.exports = {
      handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      stopPropagationOnClick: !0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: "default"
    };
  }, {}],
  9: [function (t, e, n) {
    "use strict";

    var r = t("../lib/helper"),
        o = t("../lib/dom"),
        i = t("./instances");

    e.exports = function (t) {
      var e = i.get(t);
      e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), i.remove(t));
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18
  }],
  10: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(t) {
        return t.getBoundingClientRect();
      }

      var r = function r(t) {
        t.stopPropagation();
      };

      e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) {
        var i = o.toInt(e.scrollbarYHeight / 2),
            s = e.railYRatio * (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i),
            c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
            u = s / c;
        0 > u ? u = 0 : u > 1 && (u = 1), a(t, "top", (e.contentHeight - e.containerHeight) * u), l(t), r.stopPropagation();
      }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) {
        var i = o.toInt(e.scrollbarXWidth / 2),
            s = e.railXRatio * (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i),
            c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
            u = s / c;
        0 > u ? u = 0 : u > 1 && (u = 1), a(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), l(t), r.stopPropagation();
      });
    }

    var o = t("../../lib/helper"),
        i = t("../instances"),
        l = t("../update-geometry"),
        a = t("../update-scroll");

    e.exports = function (t) {
      var e = i.get(t);
      r(t, e);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  11: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n) {
        var o = r + n * e.railXRatio,
            l = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
        0 > o ? e.scrollbarXLeft = 0 : o > l ? e.scrollbarXLeft = l : e.scrollbarXLeft = o;
        var a = i.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
        c(t, "left", a);
      }

      var r = null,
          o = null,
          a = function a(e) {
        n(e.pageX - o), s(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        i.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", a);
      };

      e.event.bind(e.scrollbarX, "mousedown", function (n) {
        o = n.pageX, r = i.toInt(l.css(e.scrollbarX, "left")) * e.railXRatio, i.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
      });
    }

    function o(t, e) {
      function n(n) {
        var o = r + n * e.railYRatio,
            l = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
        0 > o ? e.scrollbarYTop = 0 : o > l ? e.scrollbarYTop = l : e.scrollbarYTop = o;
        var a = i.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
        c(t, "top", a);
      }

      var r = null,
          o = null,
          a = function a(e) {
        n(e.pageY - o), s(t), e.stopPropagation(), e.preventDefault();
      },
          u = function u() {
        i.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", a);
      };

      e.event.bind(e.scrollbarY, "mousedown", function (n) {
        o = n.pageY, r = i.toInt(l.css(e.scrollbarY, "top")) * e.railYRatio, i.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
      });
    }

    var i = t("../../lib/helper"),
        l = t("../../lib/dom"),
        a = t("../instances"),
        s = t("../update-geometry"),
        c = t("../update-scroll");

    e.exports = function (t) {
      var e = a.get(t);
      r(t, e), o(t, e);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;

        if (0 === n) {
          if (!e.scrollbarYActive) return !1;
          if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation;
        }

        var i = t.scrollLeft;

        if (0 === r) {
          if (!e.scrollbarXActive) return !1;
          if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
        }

        return !0;
      }

      var r = !1;
      e.event.bind(t, "mouseenter", function () {
        r = !0;
      }), e.event.bind(t, "mouseleave", function () {
        r = !1;
      });
      var l = !1;
      e.event.bind(e.ownerDocument, "keydown", function (c) {
        if (!c.isDefaultPrevented || !c.isDefaultPrevented()) {
          var u = i.matches(e.scrollbarX, ":focus") || i.matches(e.scrollbarY, ":focus");

          if (r || u) {
            var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;

            if (d) {
              if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;else for (; d.shadowRoot;) {
                d = d.shadowRoot.activeElement;
              }
              if (o.isEditable(d)) return;
            }

            var p = 0,
                f = 0;

            switch (c.which) {
              case 37:
                p = -30;
                break;

              case 38:
                f = 30;
                break;

              case 39:
                p = 30;
                break;

              case 40:
                f = -30;
                break;

              case 33:
                f = 90;
                break;

              case 32:
                f = c.shiftKey ? 90 : -90;
                break;

              case 34:
                f = -90;
                break;

              case 35:
                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                break;

              case 36:
                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                break;

              default:
                return;
            }

            s(t, "top", t.scrollTop - f), s(t, "left", t.scrollLeft + p), a(t), l = n(p, f), l && c.preventDefault();
          }
        }
      });
    }

    var o = t("../../lib/helper"),
        i = t("../../lib/dom"),
        l = t("../instances"),
        a = t("../update-geometry"),
        s = t("../update-scroll");

    e.exports = function (t) {
      var e = l.get(t);
      r(t, e);
    };
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n(n, r) {
        var o = t.scrollTop;

        if (0 === n) {
          if (!e.scrollbarYActive) return !1;
          if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation;
        }

        var i = t.scrollLeft;

        if (0 === r) {
          if (!e.scrollbarXActive) return !1;
          if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
        }

        return !0;
      }

      function r(t) {
        var e = t.deltaX,
            n = -1 * t.deltaY;
        return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n];
      }

      function o(e, n) {
        var r = t.querySelector("textarea:hover, .ps-child:hover");

        if (r) {
          if ("TEXTAREA" !== r.tagName && !window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;
          var o = r.scrollHeight - r.clientHeight;
          if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0;
          var i = r.scrollLeft - r.clientWidth;
          if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0)) return !0;
        }

        return !1;
      }

      function a(a) {
        var c = r(a),
            u = c[0],
            d = c[1];
        o(u, d) || (s = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), s = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), i(t), s = s || n(u, d), s && (a.stopPropagation(), a.preventDefault()));
      }

      var s = !1;
      "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", a) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", a);
    }

    var o = t("../instances"),
        i = t("../update-geometry"),
        l = t("../update-scroll");

    e.exports = function (t) {
      var e = o.get(t);
      r(t, e);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  14: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      e.event.bind(t, "scroll", function () {
        i(t);
      });
    }

    var o = t("../instances"),
        i = t("../update-geometry");

    e.exports = function (t) {
      var e = o.get(t);
      r(t, e);
    };
  }, {
    "../instances": 18,
    "../update-geometry": 19
  }],
  15: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      function n() {
        var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
        return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer;
      }

      function r() {
        c || (c = setInterval(function () {
          return i.get(t) ? (a(t, "top", t.scrollTop + u.top), a(t, "left", t.scrollLeft + u.left), void l(t)) : void clearInterval(c);
        }, 50));
      }

      function s() {
        c && (clearInterval(c), c = null), o.stopScrolling(t);
      }

      var c = null,
          u = {
        top: 0,
        left: 0
      },
          d = !1;
      e.event.bind(e.ownerDocument, "selectionchange", function () {
        t.contains(n()) ? d = !0 : (d = !1, s());
      }), e.event.bind(window, "mouseup", function () {
        d && (d = !1, s());
      }), e.event.bind(window, "mousemove", function (e) {
        if (d) {
          var n = {
            x: e.pageX,
            y: e.pageY
          },
              i = {
            left: t.offsetLeft,
            right: t.offsetLeft + t.offsetWidth,
            top: t.offsetTop,
            bottom: t.offsetTop + t.offsetHeight
          };
          n.x < i.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > i.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? s() : r();
        }
      });
    }

    var o = t("../../lib/helper"),
        i = t("../instances"),
        l = t("../update-geometry"),
        a = t("../update-scroll");

    e.exports = function (t) {
      var e = i.get(t);
      r(t, e);
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function (t, e, n) {
    "use strict";

    function r(t, e, n, r) {
      function o(n, r) {
        var o = t.scrollTop,
            i = t.scrollLeft,
            l = Math.abs(n),
            a = Math.abs(r);

        if (a > l) {
          if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation;
        } else if (l > a && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i)) return !e.settings.swipePropagation;

        return !0;
      }

      function s(e, n) {
        a(t, "top", t.scrollTop - n), a(t, "left", t.scrollLeft - e), l(t);
      }

      function c() {
        Y = !0;
      }

      function u() {
        Y = !1;
      }

      function d(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function p(t) {
        return t.targetTouches && 1 === t.targetTouches.length ? !0 : !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE);
      }

      function f(t) {
        if (p(t)) {
          w = !0;
          var e = d(t);
          v.pageX = e.pageX, v.pageY = e.pageY, g = new Date().getTime(), null !== y && clearInterval(y), t.stopPropagation();
        }
      }

      function h(t) {
        if (!w && e.settings.swipePropagation && f(t), !Y && w && p(t)) {
          var n = d(t),
              r = {
            pageX: n.pageX,
            pageY: n.pageY
          },
              i = r.pageX - v.pageX,
              l = r.pageY - v.pageY;
          s(i, l), v = r;
          var a = new Date().getTime(),
              c = a - g;
          c > 0 && (m.x = i / c, m.y = l / c, g = a), o(i, l) && (t.stopPropagation(), t.preventDefault());
        }
      }

      function b() {
        !Y && w && (w = !1, clearInterval(y), y = setInterval(function () {
          return i.get(t) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (s(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(y);
        }, 10));
      }

      var v = {},
          g = 0,
          m = {},
          y = null,
          Y = !1,
          w = !1;
      n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)));
    }

    var o = t("../../lib/helper"),
        i = t("../instances"),
        l = t("../update-geometry"),
        a = t("../update-scroll");

    e.exports = function (t) {
      if (o.env.supportsTouch || o.env.supportsIePointer) {
        var e = i.get(t);
        r(t, e, o.env.supportsTouch, o.env.supportsIePointer);
      }
    };
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function (t, e, n) {
    "use strict";

    var r = t("../lib/helper"),
        o = t("../lib/class"),
        i = t("./instances"),
        l = t("./update-geometry"),
        a = {
      "click-rail": t("./handler/click-rail"),
      "drag-scrollbar": t("./handler/drag-scrollbar"),
      keyboard: t("./handler/keyboard"),
      wheel: t("./handler/mouse-wheel"),
      touch: t("./handler/touch"),
      selection: t("./handler/selection")
    },
        s = t("./handler/native-scroll");

    e.exports = function (t, e) {
      e = "object" == _typeof(e) ? e : {}, o.add(t, "ps-container");
      var n = i.add(t);
      n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function (e) {
        a[e](t);
      }), s(t), l(t);
    };
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function (t, e, n) {
    "use strict";

    function r(t) {
      function e() {
        s.add(t, "ps-focus");
      }

      function n() {
        s.remove(t, "ps-focus");
      }

      var r = this;
      r.settings = a.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function () {
        var e = t.scrollLeft,
            n = null;
        return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n;
      }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d(), r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = a.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : a.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = a.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + a.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = a.toInt(u.css(r.scrollbarXRail, "marginLeft")) + a.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = a.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : a.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? a.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = a.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + a.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = a.toInt(u.css(r.scrollbarYRail, "marginTop")) + a.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null;
    }

    function o(t) {
      return t.getAttribute("data-ps-id");
    }

    function i(t, e) {
      t.setAttribute("data-ps-id", e);
    }

    function l(t) {
      t.removeAttribute("data-ps-id");
    }

    var a = t("../lib/helper"),
        s = t("../lib/class"),
        c = t("./default-setting"),
        u = t("../lib/dom"),
        d = t("../lib/event-manager"),
        p = t("../lib/guid"),
        f = {};
    n.add = function (t) {
      var e = p();
      return i(t, e), f[e] = new r(t), f[e];
    }, n.remove = function (t) {
      delete f[o(t)], l(t);
    }, n.get = function (t) {
      return f[o(t)];
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function (t, e, n) {
    "use strict";

    function r(t, e) {
      return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }

    function o(t, e) {
      var n = {
        width: e.railXWidth
      };
      e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, a.css(e.scrollbarXRail, n);
      var r = {
        top: t.scrollTop,
        height: e.railYHeight
      };
      e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, a.css(e.scrollbarYRail, r), a.css(e.scrollbarX, {
        left: e.scrollbarXLeft,
        width: e.scrollbarXWidth - e.railBorderXWidth
      }), a.css(e.scrollbarY, {
        top: e.scrollbarYTop,
        height: e.scrollbarYHeight - e.railBorderYWidth
      });
    }

    var i = t("../lib/helper"),
        l = t("../lib/class"),
        a = t("../lib/dom"),
        s = t("./instances"),
        c = t("./update-scroll");

    e.exports = function (t) {
      var e = s.get(t);
      e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
      var n;
      t.contains(e.scrollbarXRail) || (n = a.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
        a.remove(t);
      }), a.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = a.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
        a.remove(t);
      }), a.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, i.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = i.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, i.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = i.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? l.add(t, "ps-active-x") : (l.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? l.add(t, "ps-active-y") : (l.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0));
    };
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function (t, e, n) {
    "use strict";

    var r,
        o,
        i = t("./instances"),
        l = document.createEvent("Event"),
        a = document.createEvent("Event"),
        s = document.createEvent("Event"),
        c = document.createEvent("Event"),
        u = document.createEvent("Event"),
        d = document.createEvent("Event"),
        p = document.createEvent("Event"),
        f = document.createEvent("Event"),
        h = document.createEvent("Event"),
        b = document.createEvent("Event");
    l.initEvent("ps-scroll-up", !0, !0), a.initEvent("ps-scroll-down", !0, !0), s.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), b.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, n) {
      if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
      if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
      if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
      "top" === e && 0 >= n && (t.scrollTop = n = 0, t.dispatchEvent(h)), "left" === e && 0 >= n && (t.scrollLeft = n = 0, t.dispatchEvent(p));
      var v = i.get(t);
      "top" === e && n >= v.contentHeight - v.containerHeight && (n = v.contentHeight - v.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(b)), "left" === e && n >= v.contentWidth - v.containerWidth && (n = v.contentWidth - v.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(f)), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && r > n && t.dispatchEvent(l), "top" === e && n > r && t.dispatchEvent(a), "left" === e && o > n && t.dispatchEvent(s), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(d));
    };
  }, {
    "./instances": 18
  }],
  21: [function (t, e, n) {
    "use strict";

    var r = t("../lib/helper"),
        o = t("../lib/dom"),
        i = t("./instances"),
        l = t("./update-geometry"),
        a = t("./update-scroll");

    e.exports = function (t) {
      var e = i.get(t);
      e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), l(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""));
    };
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]);

/***/ }),

/***/ "./resources/js/template/ui/screenfull.min.js":
/*!****************************************************!*\
  !*** ./resources/js/template/ui/screenfull.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v3.0.0 - 2015-11-24
* (c) Sindre Sorhus; MIT License
*/
!function () {
  "use strict";

  var a =  true && module.exports,
      b = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      c = function () {
    for (var a, b, c = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], d = 0, e = c.length, f = {}; e > d; d++) {
      if (a = c[d], a && a[1] in document) {
        for (d = 0, b = a.length; b > d; d++) {
          f[c[0][d]] = a[d];
        }

        return f;
      }
    }

    return !1;
  }(),
      d = {
    request: function request(a) {
      var d = c.requestFullscreen;
      a = a || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[d]() : a[d](b && Element.ALLOW_KEYBOARD_INPUT);
    },
    exit: function exit() {
      document[c.exitFullscreen]();
    },
    toggle: function toggle(a) {
      this.isFullscreen ? this.exit() : this.request(a);
    },
    raw: c
  };

  return c ? (Object.defineProperties(d, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[c.fullscreenElement]);
      }
    },
    element: {
      enumerable: !0,
      get: function get() {
        return document[c.fullscreenElement];
      }
    },
    enabled: {
      enumerable: !0,
      get: function get() {
        return Boolean(document[c.fullscreenEnabled]);
      }
    }
  }), void (a ? module.exports = d : window.screenfull = d)) : void (a ? module.exports = !1 : window.screenfull = !1);
}();

/***/ }),

/***/ "./resources/js/template/ui/tether.min.js":
/*!************************************************!*\
  !*** ./resources/js/template/ui/tether.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, o) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function n(t) {
    var e = getComputedStyle(t) || {},
        o = e.position;
    if ("fixed" === o) return t;

    for (var i = t; i = i.parentNode;) {
      var n = void 0;

      try {
        n = getComputedStyle(i);
      } catch (r) {}

      if ("undefined" == typeof n || null === n) return i;
      var s = n,
          a = s.overflow,
          f = s.overflowX,
          h = s.overflowY;
      if (/(auto|scroll)/.test(a + h + f) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(n.position) >= 0)) return i;
    }

    return document.body;
  }

  function r(t) {
    var e = void 0;
    t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
    var o = e.documentElement,
        i = {},
        n = t.getBoundingClientRect();

    for (var r in n) {
      i[r] = n[r];
    }

    var s = x(e);
    return i.top -= s.top, i.left -= s.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i;
  }

  function s(t) {
    return t.offsetParent || document.documentElement;
  }

  function a() {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var e = document.createElement("div");
    f(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }), e.appendChild(t), document.body.appendChild(e);
    var o = t.offsetWidth;
    e.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = e.clientWidth), document.body.removeChild(e);
    var n = o - i;
    return {
      width: n,
      height: n
    };
  }

  function f() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
    return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e) for (var o in e) {
        ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }
    }), t;
  }

  function h(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e);
    });else {
      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          i = p(t).replace(o, " ");
      u(t, i);
    }
  }

  function l(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e);
    });else {
      h(t, e);
      var o = p(t) + (" " + e);
      u(t, o);
    }
  }

  function d(t, e) {
    if ("undefined" != typeof t.classList) return t.classList.contains(e);
    var o = p(t);
    return new RegExp("(^| )" + e + "( |$)", "gi").test(o);
  }

  function p(t) {
    return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className;
  }

  function u(t, e) {
    t.setAttribute("class", e);
  }

  function c(t, e, o) {
    o.forEach(function (o) {
      -1 === e.indexOf(o) && d(t, o) && h(t, o);
    }), e.forEach(function (e) {
      d(t, e) || l(t, e);
    });
  }

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function g(t, e) {
    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
    return t + o >= e && e >= t - o;
  }

  function m() {
    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date();
  }

  function v() {
    for (var t = {
      top: 0,
      left: 0
    }, e = arguments.length, o = Array(e), i = 0; e > i; i++) {
      o[i] = arguments[i];
    }

    return o.forEach(function (e) {
      var o = e.top,
          i = e.left;
      "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i;
    }), t;
  }

  function y(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }

  function b(t, e) {
    return "scrollParent" === e ? e = t.scrollParent : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
      var t = r(e),
          o = t,
          i = getComputedStyle(e);
      e = [o.left, o.top, t.width + o.left, t.height + o.top], U.forEach(function (t, o) {
        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"]);
      });
    }(), e;
  }

  var w = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, o, i) {
      return o && t(e.prototype, o), i && t(e, i), e;
    };
  }(),
      C = void 0;

  "undefined" == typeof C && (C = {
    modules: []
  });

  var O = function () {
    var t = 0;
    return function () {
      return ++t;
    };
  }(),
      E = {},
      x = function x(t) {
    var e = t._tetherZeroElement;
    "undefined" == typeof e && (e = t.createElement("div"), e.setAttribute("data-tether-id", O()), f(e.style, {
      top: 0,
      left: 0,
      position: "absolute"
    }), t.body.appendChild(e), t._tetherZeroElement = e);
    var o = e.getAttribute("data-tether-id");

    if ("undefined" == typeof E[o]) {
      E[o] = {};
      var i = e.getBoundingClientRect();

      for (var n in i) {
        E[o][n] = i[n];
      }

      T(function () {
        delete E[o];
      });
    }

    return E[o];
  },
      A = [],
      T = function T(t) {
    A.push(t);
  },
      S = function S() {
    for (var t = void 0; t = A.pop();) {
      t();
    }
  },
      W = function () {
    function t() {
      i(this, t);
    }

    return w(t, [{
      key: "on",
      value: function value(t, e, o) {
        var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
          handler: e,
          ctx: o,
          once: i
        });
      }
    }, {
      key: "once",
      value: function value(t, e, o) {
        this.on(t, e, o, !0);
      }
    }, {
      key: "off",
      value: function value(t, e) {
        if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t];else for (var o = 0; o < this.bindings[t].length;) {
          this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o;
        }
      }
    }, {
      key: "trigger",
      value: function value(t) {
        if ("undefined" != typeof this.bindings && this.bindings[t]) {
          for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; o > n; n++) {
            i[n - 1] = arguments[n];
          }

          for (; e < this.bindings[t].length;) {
            var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                f = r.once,
                h = a;
            "undefined" == typeof h && (h = this), s.apply(h, i), f ? this.bindings[t].splice(e, 1) : ++e;
          }
        }
      }
    }]), t;
  }();

  C.Utils = {
    getScrollParent: n,
    getBounds: r,
    getOffsetParent: s,
    extend: f,
    addClass: l,
    removeClass: h,
    hasClass: d,
    updateClasses: c,
    defer: T,
    flush: S,
    uniqueId: O,
    Evented: W,
    getScrollBarSize: a
  };

  var M = function () {
    function t(t, e) {
      var o = [],
          i = !0,
          n = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0) {
          ;
        }
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      w = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, o, i) {
      return o && t(e.prototype, o), i && t(e, i), e;
    };
  }();

  if ("undefined" == typeof C) throw new Error("You must include the utils.js file before tether.js");

  var P = C.Utils,
      n = P.getScrollParent,
      r = P.getBounds,
      s = P.getOffsetParent,
      f = P.extend,
      l = P.addClass,
      h = P.removeClass,
      c = P.updateClasses,
      T = P.defer,
      S = P.flush,
      a = P.getScrollBarSize,
      k = function () {
    if ("undefined" == typeof document) return "";

    for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
      var i = e[o];
      if (void 0 !== t.style[i]) return i;
    }
  }(),
      B = [],
      _ = function _() {
    B.forEach(function (t) {
      t.position(!1);
    }), S();
  };

  !function () {
    var t = null,
        e = null,
        o = null,
        i = function n() {
      return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void (o = setTimeout(n, 250))) : void ("undefined" != typeof t && m() - t < 10 || ("undefined" != typeof o && (clearTimeout(o), o = null), t = m(), _(), e = m() - t));
    };

    "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
      window.addEventListener(t, i);
    });
  }();

  var z = {
    center: "center",
    left: "right",
    right: "left"
  },
      L = {
    middle: "middle",
    top: "bottom",
    bottom: "top"
  },
      F = {
    top: 0,
    left: 0,
    middle: "50%",
    center: "50%",
    bottom: "100%",
    right: "100%"
  },
      Y = function Y(t, e) {
    var o = t.left,
        i = t.top;
    return "auto" === o && (o = z[e.left]), "auto" === i && (i = L[e.top]), {
      left: o,
      top: i
    };
  },
      H = function H(t) {
    var e = t.left,
        o = t.top;
    return "undefined" != typeof F[t.left] && (e = F[t.left]), "undefined" != typeof F[t.top] && (o = F[t.top]), {
      left: e,
      top: o
    };
  },
      X = function X(t) {
    var e = t.split(" "),
        o = M(e, 2),
        i = o[0],
        n = o[1];
    return {
      top: i,
      left: n
    };
  },
      j = X,
      N = function () {
    function t(e) {
      var o = this;
      i(this, t), this.position = this.position.bind(this), B.push(this), this.history = [], this.setOptions(e, !1), C.modules.forEach(function (t) {
        "undefined" != typeof t.initialize && t.initialize.call(o);
      }), this.position();
    }

    return w(t, [{
      key: "getClass",
      value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;
        return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
      }
    }, {
      key: "setOptions",
      value: function value(t) {
        var e = this,
            o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
            i = {
          offset: "0 0",
          targetOffset: "0 0",
          targetAttachment: "auto auto",
          classPrefix: "tether"
        };
        this.options = f(i, t);
        var r = this.options,
            s = r.element,
            a = r.target,
            h = r.targetModifier;
        if (this.element = s, this.target = a, this.targetModifier = h, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
          if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
          "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
        }), l(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
        this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = X(this.options.offset), this.targetOffset = X(this.options.targetOffset), "undefined" != typeof this.scrollParent && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = n(this.target), this.options.enabled !== !1 && this.enable(o);
      }
    }, {
      key: "getTargetBounds",
      value: function value() {
        if ("undefined" == typeof this.targetModifier) return r(this.target);

        if ("visible" === this.targetModifier) {
          if (this.target === document.body) return {
            top: pageYOffset,
            left: pageXOffset,
            height: innerHeight,
            width: innerWidth
          };
          var t = r(this.target),
              e = {
            height: t.height,
            width: t.width,
            top: t.top,
            left: t.left
          };
          return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e;
        }

        if ("scroll-handle" === this.targetModifier) {
          var t = void 0,
              o = this.target;
          o === document.body ? (o = document.documentElement, t = {
            left: pageXOffset,
            top: pageYOffset,
            height: innerHeight,
            width: innerWidth
          }) : t = r(o);
          var i = getComputedStyle(o),
              n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
              s = 0;
          n && (s = 15);
          var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - s,
              e = {
            width: 15,
            height: .975 * a * (a / o.scrollHeight),
            left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
          },
              f = 0;
          408 > a && this.target === document.body && (f = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
          var h = this.target.scrollTop / (o.scrollHeight - a);
          return e.top = h * (a - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e;
        }
      }
    }, {
      key: "clearCache",
      value: function value() {
        this._cache = {};
      }
    }, {
      key: "cache",
      value: function value(t, e) {
        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
      }
    }, {
      key: "enable",
      value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
        this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), t && this.position();
      }
    }, {
      key: "disable",
      value: function value() {
        h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position);
      }
    }, {
      key: "destroy",
      value: function value() {
        var t = this;
        this.disable(), B.forEach(function (e, o) {
          return e === t ? void B.splice(o, 1) : void 0;
        });
      }
    }, {
      key: "updateAttachClasses",
      value: function value(t, e) {
        var o = this;
        t = t || this.attachment, e = e || this.targetAttachment;
        var i = ["left", "top", "bottom", "right", "middle", "center"];
        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
        var n = this._addAttachClasses;
        t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
        var r = [];
        i.forEach(function (t) {
          r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t);
        }), T(function () {
          "undefined" != typeof o._addAttachClasses && (c(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && c(o.target, o._addAttachClasses, r), delete o._addAttachClasses);
        });
      }
    }, {
      key: "position",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];

        if (this.enabled) {
          this.clearCache();
          var o = Y(this.targetAttachment, this.attachment);
          this.updateAttachClasses(this.attachment, o);
          var i = this.cache("element-bounds", function () {
            return r(t.element);
          }),
              n = i.width,
              f = i.height;

          if (0 === n && 0 === f && "undefined" != typeof this.lastSize) {
            var h = this.lastSize;
            n = h.width, f = h.height;
          } else this.lastSize = {
            width: n,
            height: f
          };

          var l = this.cache("target-bounds", function () {
            return t.getTargetBounds();
          }),
              d = l,
              p = y(H(this.attachment), {
            width: n,
            height: f
          }),
              u = y(H(o), d),
              c = y(this.offset, {
            width: n,
            height: f
          }),
              g = y(this.targetOffset, d);
          p = v(p, c), u = v(u, g);

          for (var m = l.left + u.left - p.left, b = l.top + u.top - p.top, w = 0; w < C.modules.length; ++w) {
            var O = C.modules[w],
                E = O.position.call(this, {
              left: m,
              top: b,
              targetAttachment: o,
              targetPos: l,
              elementPos: i,
              offset: p,
              targetOffset: u,
              manualOffset: c,
              manualTargetOffset: g,
              scrollbarSize: A,
              attachment: this.attachment
            });
            if (E === !1) return !1;
            "undefined" != typeof E && "object" == _typeof(E) && (b = E.top, m = E.left);
          }

          var x = {
            page: {
              top: b,
              left: m
            },
            viewport: {
              top: b - pageYOffset,
              bottom: pageYOffset - b - f + innerHeight,
              left: m - pageXOffset,
              right: pageXOffset - m - n + innerWidth
            }
          },
              A = void 0;
          return document.body.scrollWidth > window.innerWidth && (A = this.cache("scrollbar-size", a), x.viewport.bottom -= A.height), document.body.scrollHeight > window.innerHeight && (A = this.cache("scrollbar-size", a), x.viewport.right -= A.width), -1 !== ["", "static"].indexOf(document.body.style.position) && -1 !== ["", "static"].indexOf(document.body.parentElement.style.position) || (x.page.bottom = document.body.scrollHeight - b - f, x.page.right = document.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
            var e = t.cache("target-offsetparent", function () {
              return s(t.target);
            }),
                o = t.cache("target-offsetparent-bounds", function () {
              return r(e);
            }),
                i = getComputedStyle(e),
                n = o,
                a = {};

            if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
              a[t.toLowerCase()] = parseFloat(i["border" + t + "Width"]);
            }), o.right = document.body.scrollWidth - o.left - n.width + a.right, o.bottom = document.body.scrollHeight - o.top - n.height + a.bottom, x.page.top >= o.top + a.top && x.page.bottom >= o.bottom && x.page.left >= o.left + a.left && x.page.right >= o.right) {
              var f = e.scrollTop,
                  h = e.scrollLeft;
              x.offset = {
                top: x.page.top - o.top + f - a.top,
                left: x.page.left - o.left + h - a.left
              };
            }
          }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), e && S(), !0;
        }
      }
    }, {
      key: "move",
      value: function value(t) {
        var e = this;

        if ("undefined" != typeof this.element.parentNode) {
          var o = {};

          for (var i in t) {
            o[i] = {};

            for (var n in t[i]) {
              for (var r = !1, a = 0; a < this.history.length; ++a) {
                var h = this.history[a];

                if ("undefined" != typeof h[i] && !g(h[i][n], t[i][n])) {
                  r = !0;
                  break;
                }
              }

              r || (o[i][n] = !0);
            }
          }

          var l = {
            top: "",
            left: "",
            right: "",
            bottom: ""
          },
              d = function d(t, o) {
            var i = "undefined" != typeof e.options.optimizations,
                n = i ? e.options.optimizations.gpu : null;

            if (n !== !1) {
              var r = void 0,
                  s = void 0;
              t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[k] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== k && (l[k] += " translateZ(0)");
            } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px";
          },
              p = !1;

          if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
            l.position = "absolute";
            var i = e.cache("target-offsetparent", function () {
              return s(e.target);
            });
            s(e.element) !== i && T(function () {
              e.element.parentNode.removeChild(e.element), i.appendChild(e.element);
            }), d(o.offset, t.offset), p = !0;
          }() : (l.position = "absolute", d({
            top: !0,
            left: !0
          }, t.page)), !p) {
            for (var u = !0, c = this.element.parentNode; c && "BODY" !== c.tagName;) {
              if ("static" !== getComputedStyle(c).position) {
                u = !1;
                break;
              }

              c = c.parentNode;
            }

            u || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element));
          }

          var m = {},
              v = !1;

          for (var n in l) {
            var y = l[n],
                b = this.element.style[n];
            "" !== b && "" !== y && ["top", "left", "bottom", "right"].indexOf(n) >= 0 && (b = parseFloat(b), y = parseFloat(y)), b !== y && (v = !0, m[n] = y);
          }

          v && T(function () {
            f(e.element.style, m);
          });
        }
      }
    }]), t;
  }();

  N.modules = [], C.position = _;

  var R = f(N, C),
      M = function () {
    function t(t, e) {
      var o = [],
          i = !0,
          n = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0) {
          ;
        }
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      P = C.Utils,
      r = P.getBounds,
      f = P.extend,
      c = P.updateClasses,
      T = P.defer,
      U = ["left", "top", "right", "bottom"];

  C.modules.push({
    position: function position(t) {
      var e = this,
          o = t.top,
          i = t.left,
          n = t.targetAttachment;
      if (!this.options.constraints) return !0;
      var s = this.cache("element-bounds", function () {
        return r(e.element);
      }),
          a = s.height,
          h = s.width;

      if (0 === h && 0 === a && "undefined" != typeof this.lastSize) {
        var l = this.lastSize;
        h = l.width, a = l.height;
      }

      var d = this.cache("target-bounds", function () {
        return e.getTargetBounds();
      }),
          p = d.height,
          u = d.width,
          g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
            o = t.pinnedClass;
        e && g.push(e), o && g.push(o);
      }), g.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          g.push(t + "-" + e);
        });
      });
      var m = [],
          v = f({}, n),
          y = f({}, this.attachment);
      return this.options.constraints.forEach(function (t) {
        var r = t.to,
            s = t.attachment,
            f = t.pin;
        "undefined" == typeof s && (s = "");
        var l = void 0,
            d = void 0;

        if (s.indexOf(" ") >= 0) {
          var c = s.split(" "),
              g = M(c, 2);
          d = g[0], l = g[1];
        } else l = d = s;

        var w = b(e, r);
        "target" !== d && "both" !== d || (o < w[1] && "top" === v.top && (o += p, v.top = "bottom"), o + a > w[3] && "bottom" === v.top && (o -= p, v.top = "top")), "together" === d && (o < w[1] && "top" === v.top && ("bottom" === y.top ? (o += p, v.top = "bottom", o += a, y.top = "top") : "top" === y.top && (o += p, v.top = "bottom", o -= a, y.top = "bottom")), o + a > w[3] && "bottom" === v.top && ("top" === y.top ? (o -= p, v.top = "top", o -= a, y.top = "bottom") : "bottom" === y.top && (o -= p, v.top = "top", o += a, y.top = "top")), "middle" === v.top && (o + a > w[3] && "top" === y.top ? (o -= a, y.top = "bottom") : o < w[1] && "bottom" === y.top && (o += a, y.top = "top"))), "target" !== l && "both" !== l || (i < w[0] && "left" === v.left && (i += u, v.left = "right"), i + h > w[2] && "right" === v.left && (i -= u, v.left = "left")), "together" === l && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += u, v.left = "right", i += h, y.left = "left") : "left" === y.left && (i += u, v.left = "right", i -= h, y.left = "right") : i + h > w[2] && "right" === v.left ? "left" === y.left ? (i -= u, v.left = "left", i -= h, y.left = "right") : "right" === y.left && (i -= u, v.left = "left", i += h, y.left = "left") : "center" === v.left && (i + h > w[2] && "left" === y.left ? (i -= h, y.left = "right") : i < w[0] && "right" === y.left && (i += h, y.left = "left"))), "element" !== d && "both" !== d || (o < w[1] && "bottom" === y.top && (o += a, y.top = "top"), o + a > w[3] && "top" === y.top && (o -= a, y.top = "bottom")), "element" !== l && "both" !== l || (i < w[0] && ("right" === y.left ? (i += h, y.left = "left") : "center" === y.left && (i += h / 2, y.left = "left")), i + h > w[2] && ("left" === y.left ? (i -= h, y.left = "right") : "center" === y.left && (i -= h / 2, y.left = "right"))), "string" == typeof f ? f = f.split(",").map(function (t) {
          return t.trim();
        }) : f === !0 && (f = ["top", "left", "right", "bottom"]), f = f || [];
        var C = [],
            O = [];
        o < w[1] && (f.indexOf("top") >= 0 ? (o = w[1], C.push("top")) : O.push("top")), o + a > w[3] && (f.indexOf("bottom") >= 0 ? (o = w[3] - a, C.push("bottom")) : O.push("bottom")), i < w[0] && (f.indexOf("left") >= 0 ? (i = w[0], C.push("left")) : O.push("left")), i + h > w[2] && (f.indexOf("right") >= 0 ? (i = w[2] - h, C.push("right")) : O.push("right")), C.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), C.forEach(function (e) {
            m.push(t + "-" + e);
          });
        }(), O.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), O.forEach(function (e) {
            m.push(t + "-" + e);
          });
        }(), (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (y.left = v.left = !1), (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || e.updateAttachClasses(y, v);
      }), T(function () {
        e.options.addTargetClasses !== !1 && c(e.target, m, g), c(e.element, m, g);
      }), {
        top: o,
        left: i
      };
    }
  });
  var P = C.Utils,
      r = P.getBounds,
      c = P.updateClasses,
      T = P.defer;
  C.modules.push({
    position: function position(t) {
      var e = this,
          o = t.top,
          i = t.left,
          n = this.cache("element-bounds", function () {
        return r(e.element);
      }),
          s = n.height,
          a = n.width,
          f = this.getTargetBounds(),
          h = o + s,
          l = i + a,
          d = [];
      o <= f.bottom && h >= f.top && ["left", "right"].forEach(function (t) {
        var e = f[t];
        e !== i && e !== l || d.push(t);
      }), i <= f.right && l >= f.left && ["top", "bottom"].forEach(function (t) {
        var e = f[t];
        e !== o && e !== h || d.push(t);
      });
      var p = [],
          u = [],
          g = ["left", "top", "right", "bottom"];
      return p.push(this.getClass("abutted")), g.forEach(function (t) {
        p.push(e.getClass("abutted") + "-" + t);
      }), d.length && u.push(this.getClass("abutted")), d.forEach(function (t) {
        u.push(e.getClass("abutted") + "-" + t);
      }), T(function () {
        e.options.addTargetClasses !== !1 && c(e.target, u, p), c(e.element, u, p);
      }), !0;
    }
  });

  var M = function () {
    function t(t, e) {
      var o = [],
          i = !0,
          n = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0) {
          ;
        }
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  return C.modules.push({
    position: function position(t) {
      var e = t.top,
          o = t.left;

      if (this.options.shift) {
        var i = this.options.shift;
        "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
          top: e,
          left: o
        }));
        var n = void 0,
            r = void 0;

        if ("string" == typeof i) {
          i = i.split(" "), i[1] = i[1] || i[0];
          var s = i,
              a = M(s, 2);
          n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10);
        } else n = i.top, r = i.left;

        return e += n, o += r, {
          top: e,
          left: o
        };
      }
    }
  }), R;
});

/***/ }),

/***/ "./resources/js/template/ui/unison.min.js":
/*!************************************************!*\
  !*** ./resources/js/template/ui/unison.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Unison = function () {
  "use strict";

  var a,
      b = window,
      c = document,
      d = c.head,
      e = {},
      f = !1,
      g = {
    parseMQ: function parseMQ(a) {
      var c = b.getComputedStyle(a, null).getPropertyValue("font-family");
      return c.replace(/"/g, "").replace(/'/g, "");
    },
    debounce: function debounce(a, b, c) {
      var d;
      return function () {
        var e = this,
            f = arguments;
        clearTimeout(d), d = setTimeout(function () {
          d = null, c || a.apply(e, f);
        }, b), c && !d && a.apply(e, f);
      };
    },
    isObject: function isObject(a) {
      return "object" == _typeof(a);
    },
    isUndefined: function isUndefined(a) {
      return "undefined" == typeof a;
    }
  },
      h = {
    on: function on(a, b) {
      g.isObject(e[a]) || (e[a] = []), e[a].push(b);
    },
    emit: function emit(a, b) {
      if (g.isObject(e[a])) for (var c = e[a].slice(), d = 0; d < c.length; d++) {
        c[d].call(this, b);
      }
    }
  },
      i = {
    all: function all() {
      for (var a = {}, b = g.parseMQ(c.querySelector("title")).split(","), d = 0; d < b.length; d++) {
        var e = b[d].trim().split(" ");
        a[e[0]] = e[1];
      }

      return f ? a : null;
    },
    now: function now(a) {
      var b = g.parseMQ(d).split(" "),
          c = {
        name: b[0],
        width: b[1]
      };
      return f ? g.isUndefined(a) ? c : a(c) : null;
    },
    update: function update() {
      i.now(function (b) {
        b.name !== a && (h.emit(b.name), h.emit("change", b), a = b.name);
      });
    }
  };
  return b.onresize = g.debounce(i.update, 100), c.addEventListener("DOMContentLoaded", function () {
    f = "none" !== b.getComputedStyle(d, null).getPropertyValue("clear"), i.update();
  }), {
    fetch: {
      all: i.all,
      now: i.now
    },
    on: h.on,
    emit: h.emit,
    util: {
      debounce: g.debounce,
      isObject: g.isObject
    }
  };
}();

/***/ }),

/***/ "./resources/sass/template.scss":
/*!**************************************!*\
  !*** ./resources/sass/template.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi ./resources/js/template.js ./resources/sass/template.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\Workana\ElPollero\resources\js\template.js */"./resources/js/template.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\Workana\ElPollero\resources\sass\template.scss */"./resources/sass/template.scss");


/***/ })

/******/ });