sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sampleproj.controller.View2", {
            onInit: function () {
                alert("View2 Opened");

                this.getOwnerComponent().getModel().read("/Orders", {
                    success: function(oData) {
                        var aData = oData.results;
                        var oOrderModel = new sap.ui.model.json.JSONModel();
                        oOrderModel.setData(aData);
                        this.getView().setModel(oOrderModel, "MyOrderList");
                    }.bind(this),
                    error: function(oError){
                
                    }
                
                });
            },

            fnPress: function(oControlEvent) {
                alert("Clicked on List");
            }
        });
    });
