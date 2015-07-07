Ext.define('WaterBloomDrone.view.main.Main', {
    extend: 'Ext.container.Container',
    
    requires: [
        'WaterBloomDrone.view.center.Center',
        'WaterBloomDrone.view.map.CoreMap',
		'WaterBloomDrone.view.center.SelectDate',
		'WaterBloomDrone.view.center.SelectDateController',
		'WaterBloomDrone.view.center.LayerButtonHeader',
		'WaterBloomDrone.view.center.LayerButton',
		'WaterBloomDrone.view.center.PopupManual'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
    	xtype: 'app-default-center',
    	region: 'center',
    	id: 'app_container'
    }],
    
    initComponent: function(){
    	
    	Ext.create('WaterBloomDrone.view.center.SelectDate', {renderTo: Ext.getBody()});
    	Ext.create('WaterBloomDrone.view.center.LayerButtonHeader', {renderTo: Ext.getBody()});
    	Ext.create('WaterBloomDrone.view.center.LayerButton', {renderTo: Ext.getBody()});
    	Ext.create('WaterBloomDrone.view.center.PopupManual', {renderTo: Ext.getBody()});
    	
    	//mapServiceUrl = "http://fireftp.iptime.org:6080/arcgis/rest/services/drone/MapServer";
    	//console.info(store);
    	
    	this.callParent();
    }
});
