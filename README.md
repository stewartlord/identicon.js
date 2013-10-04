identicon.js
============

GitHub-style identicons in JS with no server-side processing.

This little library will produce the same shape and roughly the same color as GitHub when given the same hash value. Note that GitHub uses an internal database identifier for the hash, so you can't simply md5 the username and get the same result. The hard work is done by [Robert Eisele's](http://xarg.com) [PNGlib](http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/). The creative visual design is borrowed from [Jason Long](http://twitter.com/jasonlong) of Git and GitHub fame.

Demo
----
[View Demo](https://rawgithub.com/stewartlord/identicon.js/master/demo.html)

Usage
-----
```js
// base64 encoded PNG
var data = new Identicon(hash, 420).toString();`
```

[Requires PNGLib](http://www.xarg.org/download/pnglib.js)

Copyright 2013, [Stewart Lord](http://twitter.com/stewartlord)
Released under the [BSD license](http://www.opensource.org/licenses/bsd-license.php BSD License)
