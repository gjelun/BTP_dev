/*global QUnit*/

sap.ui.define([
	"fiorimodulegjermund/controller/FioriAppGjermund.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FioriAppGjermund Controller");

	QUnit.test("I should test the FioriAppGjermund controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
