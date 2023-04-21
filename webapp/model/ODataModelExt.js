sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel"
], function (ODataModel) {
    "use strict";

    return ODataModel.extend("testodatamodelext.model.ODataModelExt", {
        constructor: function(serviceUrl, mParameters) {
            
            ODataModel.prototype.constructor.apply(this, arguments);
            
            this.attachRequestCompleted(function(oEvent) {
                var oResponse = oEvent.getParameter("response");
                console.log("Response:", oResponse);
            });

        }
    });

});