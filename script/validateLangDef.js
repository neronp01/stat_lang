/* eslint-env node */
var path = require("path");

var langDefIndex = require(path.join("../src/lang.json")).langs.map(function(l) {
	return l.langId;
});
var langs = Object.keys(require(path.join("../src/i18n/en.json")).en.lang);

var genericSuffix = "-x-";

var missing = langs
	.map(function(l) {
		return l.indexOf(genericSuffix) !== -1 ? l.substr(0, l.indexOf(genericSuffix)) : l;
	})
	.filter(function(l) {
		return langDefIndex.indexOf(l) === -1;
	})
	.filter(function(l, i, arr) {
		return arr.indexOf(l, i + 1) === -1;
	});

var unused = langDefIndex
	.filter(function(l) {
		return langs.indexOf(l) === -1;
	});

if (missing.length !== 0) {
	console.log("Missing language definition for the following language definitions: \n\t" + missing.join("\n\t"));
}
