sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sampleproj.controller.View1", {
            onInit: function () {
                this.getOwnerComponent().getModel()
            },

            fnPress: function(oControlEvent) {
                //alert("Clicked on List");
                let eID = oControlEvent.getSource().mProperties.title;
                this.getOwnerComponent().getRouter().navTo("RouteView2", {empID: eID}, true);
            },

            btnClick: function(oEvt) {
                
                this.getOwnerComponent().getRouter().navTo("RouteView2", {empID: "AA"}, true);
                console.log("test");
            }
        });
    });
