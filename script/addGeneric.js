/* eslint-env node, es6 */
const nieSuffix = "-x-nie";
const nosSuffix = "-x-nos";
const nieEn = ", n.i.e.";
const nieFr = ", n.i.a.";
const nosEn = ", n.o.s.";
const nosFr = ", n.d.a.";


var addGeneric = function(lang, data) {
	var niei18nSuffix = lang === "en" ? nieEn : nieFr;
	var nosi18nSuffix = lang === "en" ? nosEn : nosFr;

	var langRoot = data[lang].lang;
	var familyRoot = data[lang].family

	var families = Object.keys(familyRoot);

	families.shift();

	for (var f = 0; f < families.length; f++) {
		var fam = families[f];

		langRoot[fam + nieSuffix] = familyRoot[fam] + niei18nSuffix;
		langRoot[fam + nosSuffix] = familyRoot[fam] + nosi18nSuffix;
	}

	return data;
};

require("./processI18n")(addGeneric);
