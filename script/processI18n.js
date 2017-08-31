/* eslint-env node */
var path = require("path");
var fs = require("fs");

module.exports = function(fn) {
	function processI18n(lang) {
		var filePath = path.join(process.cwd(), "./src/i18n/" + lang + ".json");
		var i18n = require(filePath);

		i18n = fn(lang, i18n);

		if (i18n) {
			fs.writeFile(filePath, JSON.stringify(i18n, null, 2), "utf8", function (err) {
				if (err) {
					process.stderr.write(err);
					process.exit(2);
				}
			});
		} else {
			process.stderr.write("function returned no data");
			process.exit(1);
		}
	}

	["en", "fr"].forEach(processI18n);
};
