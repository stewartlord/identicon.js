identicon.js
============

GitHub-style identicons in JS with no server-side processing.

This little library will produce the same shape and (roughly) the same color as GitHub when given the same hash value. Note that GitHub uses an internal database identifier for the hash, so you can't simply md5 the username and get the same result. The hard work is done by [Robert Eisele's](http://twitter.com/roberteisele) [PNGlib](http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/). The creative visual design is borrowed from [Jason Long](http://twitter.com/jasonlong) of Git and GitHub fame.

Demo
----
[View Demo](https://rawgithub.com/stewartlord/identicon.js/master/demo.html)

Options
----
* **hash** - [Optional] A unicode string that will be used to generate the image. Defaults to a random hash based on the current time.
* **options** - [Optional] An options object used to customize the generated image.
    * **background** - The background color expressed as an rgba value array to use for the image background. For example, use [255,0,0,255] for red. Defaults to an opaque light gray [240,240,240,255].
    * **margin** - The decimal fraction of the size to use for margin. For example, use 0.2 for a 20% margin. Defaults to 0.08 for an 8% margin.
    * **size** - The size in pixels of the height and width of the generated (square) image. Defaults to 64 pixels.

Usage
-----

##### Simple
Generate the Identicon by supplying a hash string and size.
```js

// create a base64 encoded PNG
var data = new Identicon('hash', 420).toString();

// write to a data URI
document.write('<img width=420 height=420 src="data:image/png;base64,' + data + '">');
```

##### Advanced
To customize additional properties, generate the Identicon by supplying a hash string and an options object.
```js
// set up options
var hash = "myUnicodeUsername!";          // Any unicode string
var options = {
      background = [255, 255, 255, 255];  // rgba white
      margin = 0.2;                       // 20% margin
      size = 420;                         // 420px square
    };

// create a base64 encoded PNG
var data = new Identicon(hash, options).toString();

// write to a data URI
document.write('<img width=420 height=420 src="data:image/png;base64,' + data + '">');
```


[Requires PNGLib](http://www.xarg.org/download/pnglib.js)

Copyright 2013, [Stewart Lord](http://twitter.com/stewartlord)
Released under the [BSD license](http://www.opensource.org/licenses/bsd-license.php)
