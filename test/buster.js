/*jshint node:true*/
module.exports["troopjs-bundle"] = {
	"environment" : "browser",

	"rootPath" : "../",

	"libs" : [
		"support/config.requirejs.js",
		"support/requirejs/require.js"
	],

	"resources" : [
		"lib/**/*.*",
		"support/**/*.*"
	],

	"tests" : [
		"lib/troopjs-*/test/**/*.js"
	]
};