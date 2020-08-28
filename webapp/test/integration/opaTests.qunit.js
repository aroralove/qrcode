/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/blogs/example/qrcode/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});