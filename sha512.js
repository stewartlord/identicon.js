/**
 * Identicon.js 2.3.1
 * http://github.com/stewartlord/identicon.js
 *
 * PNGLib required for PNG output
 * http://www.xarg.org/download/pnglib.js
 *
 * Copyright 2017, Stewart Lord
 * Released under the BSD license
 * http://www.opensource.org/licenses/bsd-license.php
 */

var jsSHA = require("jssha");

var sha = {
    genHash: function(data){
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update(data);
        return shaObj.getHash("HEX");
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = sha;
}

window.sha = sha;
