sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            
            formatter: formatter,
            onInit: function () {
                //Get the view
                var oView = this.getView();

                //Get i18n model from Component
                var oI18n = this.getOwnerComponent().getModel("i18n");

                //Bind i18n to View
                oView.setModel(oI18n,"i18n");

                //Instantiate JSONModel
                var oAddressModel = new JSONModel();

                // Define Data
                var oAddress = {
                    "EID": "jerlyn.m.gollayan",
                    "enabled": true,
                    "Address": {
                        "Street": "Camaya",
                        "City": "Mariveles",
                        "Zip": 2105,
                        "Country": "Philippines"
                    },
                    "SalesAmount": 100,
                    "CurrencyCode": "PHP"
                };

                //set the Data to Model
                oAddressModel.setData(oAddress);

                //Bind the Model to View
                oView.setModel(oAddressModel);
            },
            onSelectProduct: function(oEvent){
                //Get the Control List
                var oList = oEvent.getSource();

                //Get the Selected Item
                var oSelItem = oList.getSelectedItem();

                //Get the content binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Get the control to be used (SimpleForm in Panel4)
                var oForm = this.getView().byId("idProductDetails");

                //Bind the selected item to the control
                oForm.bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }
        });
    });