var page = require('webpage').create();
var args = require('system').args;

var url = args[1];
var output = args[2];

page.viewportSize = { width: 1440, height: 900 };
page.clipRect = { top: 0, left: 0, width: 1440, height: 900 };
page.open(url, function () {
    page.render(output);
    console.log(output);
    phantom.exit();
});