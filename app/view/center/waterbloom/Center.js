Ext.define('KEF_DEV.view.center.waterbloom.Center', {
	
	extend: 'Ext.container.Container',
	
	xtype: 'app-default-waterbloom-center',
	
	items: [{
		xtype: 'app-map-waterbloom-coreMap',
		width: '100%',
		height: '100%'
	}]
	
});