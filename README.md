identicon.js
============

GitHub-style identicons as PNGs or SVGs in JS.

This little library will produce the same shape and (nearly) the same color as GitHub when given the same hash value. Supports PNG and SVG output formats. Note that GitHub uses an internal database identifier for the hash, so you can't simply md5 the username and get the same result. The creative visual design is borrowed from [Jason Long](http://twitter.com/jasonlong) of Git and GitHub fame.

Demo
----
[View Demo](https://rawgithub.com/stewartlord/identicon.js/master/demo.html)

Installation
-----
```
npm install identicon.js --save
```

Options
----
* **hash** - [Optional] A hexadecimal string of 15+ characters that will be used to generate the image. Defaults to a random hash based on the current time.
* **options** - [Optional] An options object used to customize the generated image.
    * **foreground** - The foreground color is automatically derived from the hash value. Use this option to override that behavior and provide a rgba value array instead (e.g. [255,0,0,255] for red).
    * **background** - The background color expressed as an rgba value array to use for the image background. For example, use [255,0,0,255] for red. Defaults to an opaque light gray [240,240,240,255].
    * **margin** - The decimal fraction of the size to use for margin. For example, use 0.2 for a 20% margin. Defaults to 0.08 for an 8% margin.
    * **size** - The size in pixels of the height and width of the generated (square) image. Defaults to 64 pixels.

Usage
-----

##### Simple
Generate the Identicon by supplying a hash string and size.
```js

// create a base64 encoded PNG
var data = new Identicon('d3b07384d113edec49eaa6238ad5ff00', 420).toString();

// write to a data URI
document.write('<img width=420 height=420 src="data:image/png;base64,' + data + '">');
```

##### Advanced
To customize additional properties, generate the Identicon by supplying a hexadecimal string and an options object.
```js
// set up options
var hash = "c157a79031e1c40f85931829bc5fc552";  // 15+ hex chars
var options = {
      foreground: [0, 0, 0, 255],               // rgba black
      background: [255, 255, 255, 255],         // rgba white
      margin: 0.2,                              // 20% margin
      size: 420                                 // 420px square
      format: 'svg'                             // use SVG instead of PNG
    };

// create a base64 encoded SVG
var data = new Identicon(hash, options).toString();

// write to a data URI
document.write('<img width=420 height=420 src="data:image/svg+xml;base64,' + data + '">');
```


[PNG output requires PNGLib](http://www.xarg.org/download/pnglib.js)

Copyright 2016, [Stewart Lord](http://twitter.com/stewartlord)
Released under the [BSD license](http://www.opensource.org/licenses/bsd-license.php)
