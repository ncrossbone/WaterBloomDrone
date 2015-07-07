Ext.define('WaterBloomDrone.view.center.Center', {
	
	extend: 'Ext.container.Container',
	
	xtype: 'app-default-center',
	
	items: [{
		xtype: 'app-map-coreMap',
		width: '100%',
		height: '100%'
	}]
	
});