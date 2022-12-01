/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sampleproj/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
