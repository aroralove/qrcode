sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/library'
],  function(jQuery, library) {

	"use strict";

	/**
	 * Suite controls library.
	 *
	 * @namespace
	 * @name sdk.camera
	 * @author 
	 * @version ${version}
	 * @public
	 */

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "sdk.camera",
		noLibraryCSS: true,
		version: "${version}",
		dependencies : ["sap.ui.core", "sap.m"],
		types: [],
		interfaces: [],
		controls: [
			"sdk.camera.Camera"
		],
		elements: []
	});

	return sdk.camera;

}, /* bExport= */ false);
