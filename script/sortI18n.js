/* eslint-env node */
var sortLangs = function(lang, data) {
	var genericFlag = "-x-";
	var root = data[lang].lang;

	var langs = Object.keys(root).sort(function(a,b) {
		if (a.indexOf(genericFlag) !== -1 && b.indexOf(genericFlag) === -1)
			return 1;
		if (a.indexOf(genericFlag) === -1 && b.indexOf(genericFlag) !== -1)
			return -1;

		return a.localeCompare(b);
	});

	var object = {};

	for (var l = 0; l < langs.length; l++) {
		object[langs[l]] = root[langs[l]];
	}

	data[lang].lang = object;

	return data;
};

require("./processI18n")(sortLangs);
