Ext.require([
	'KRF_DEV.view.north.North',
	'KRF_DEV.view.west.West'
]);

/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('KRF_DEV.Application', {
    extend: 'Ext.app.Application',
    
    name: 'KRF_DEV',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    	/*
    	var north_container = Ext.getCmp('north_container');
    	
    	north_container.add({
    		xtype: 'app-default-north'
    	});
    	
    	var west_container = Ext.getCmp('west_container');
    	
    	west_container.add({
    		xtype: 'app-default-west'
    	});
    	*/
    }
});
