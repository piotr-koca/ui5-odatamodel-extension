/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "testodatamodelext/model/models",
        "testodatamodelext/model/ODataModelExt"
    ],
    function (UIComponent, Device, models, ODataModelExt) {
        "use strict";

        return UIComponent.extend("testodatamodelext.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                var sUrl = "/V2/Northwind/Northwind.svc/";

                // var oDataModel = new sap.ui.model.odata.v2.ODataModel(sUrl, true);
                // oDataModel.attachRequestCompleted(function(oEvent) {
                //     var oResponse = oEvent.getParameter("response");
                //     console.log("Response:", oResponse);
                // });

                var oDataModel = new ODataModelExt(sUrl, true);

                this.setModel(oDataModel);
            }
        });
    }
);