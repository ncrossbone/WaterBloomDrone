Ext.define('WaterBloomDrone.view.main.Main_bak', {
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
    
    width: 300,
    height: 300,
    
    //floating: true,
    renderTo: Ext.getBody(),

    layout: {
        type: 'absolute'
    },

    items: [{
    	xtype: 'app-default-center',
    	region: 'center',
    	id: 'app_container'
    }],
    
    initComponent: function(){
    	
    	//Ext.create('WaterBloomDrone.view.center.Center', )
    	Ext.create('WaterBloomDrone.view.center.SelectDate', {renderTo: Ext.getBody()});
    	Ext.create('WaterBloomDrone.view.center.LayerButtonHeader', {renderTo: Ext.getBody()});
    	Ext.create('WaterBloomDrone.view.center.LayerButton', {renderTo: Ext.getBody()});
    	Ext.create('WaterBloomDrone.view.center.PopupManual', {renderTo: Ext.getBody()});
    	
    	this.callParent();
    	
    	//mapServiceUrl = "http://fireftp.iptime.org:6080/arcgis/rest/services/drone/MapServer";
    	//console.info(store);
    }
});
