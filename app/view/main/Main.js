/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('KRF_DEV.view.main.Main', {
    extend: 'Ext.container.Container',
    
    // Controller, Model 등
    requires: [
        'KRF_DEV.view.main.MainController',
        'KRF_DEV.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
    	xtype: 'app-default-north',
    	region: 'north',
    	id: 'north_container'
    }, {
        xtype: 'app-default-west',
        region: 'west',
        id: 'west_container'
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});
