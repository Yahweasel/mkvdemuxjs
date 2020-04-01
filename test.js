#!/usr/bin/env node
const fs = require("fs");
const mkvdemuxjs = require("./mkvdemux.js");
const mkv = new mkvdemuxjs.MkvDemux();
const test = fs.readFileSync("test.mkv").buffer;

mkv.push(test);

(function() {
    var el;
    while (el = mkv.demux()) {
        if (el.track)
            console.log(el);
        if (el.frames)
            console.log(el.frames[0]);
    }
})();
