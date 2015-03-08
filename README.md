# gulp-task-clean

Removes files and/or folders matching a [glob](https://github.com/isaacs/node-glob) pattern.

## Install

`npm install --save mosaic-gulp-task-clean`

## Usage

To use this task in another repository, simply require it and pass it to `gulp.task` like so:

```javascript
var gulp = require("gulp");
var clean = require("mosaic-gulp-task-clean");

// Clean the build folder in preparation of a new build
gulp.task("clean", clean("public"));
```

## License

MIT
