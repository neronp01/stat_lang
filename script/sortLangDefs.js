/* eslint-env node */
var path = require("path");
var fs = require("fs");

var filePath = path.join(process.cwd(), "./src/lang.json");
var langs = require(filePath);

langs.langs.sort(function(a, b){
	return a.langId.localeCompare(b.langId);
});

fs.writeFile(filePath, JSON.stringify(langs, null, 2), "utf8", function (err) {
	if (err) {
		process.stderr.write(err);
		process.exit(2);
	}
});
