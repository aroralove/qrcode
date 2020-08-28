sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/sap/blogs/example/qrcode/sdk/instascan/instascan.min"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("com.sap.blogs.example.qrcode.controller.View1", {
		onAfterRendering: async function () {
            try {
               this.scanner = new Instascan.Scanner({
                  video: document.getElementById('videoCam'),
                  mirror: false,
                  continuous: false
               });
               this.availableCameras = await Instascan.Camera.getCameras();
               this.scanner.start(this.availableCameras);
            } catch (error) {
               if (error.name != "FsmError") {
                  console.log(error.message);
                  sap.m.MessageToast.show("Uh oh! Something went wrong. Please restart the app.");
               }
            }
            
         },

         onClickScan: async function (oEvent) {
            try {
               this.getView().byId("scanButton").setEnabled(false);
               let result = this.scanner.scan();
               if (result == null) {
                  sap.m.MessageToast.show("QR Code not found !");
               }
               else {
               	console.log(result.content);
                window.open(result.content);
               }
               this.getView().byId("scanButton").setEnabled(true);
            } catch (error) {
               sap.m.MessageToast.show("Uh oh! Not able to scan.");
            }
         },

	});
});