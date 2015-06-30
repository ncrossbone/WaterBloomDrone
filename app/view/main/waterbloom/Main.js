Ext.define('KRF_DEV.view.main.waterbloom.Main', {
    extend: 'Ext.container.Container',
    
    requires: [
		'KRF_DEV.view.main.MainModel',
		'KRF_DEV.view.north.North',
		'KRF_DEV.view.west.West',
		'KRF_DEV.view.west.WestTabLayer',
		'KEF_DEV.view.center.Center',
        'KRF_DEV.view.common.Window',
        'KRF_DEV.view.common.Grid',
        'KRF_DEV.view.common.MapToolbar',
        'KRF_DEV.view.map.CoreMap'
    ],

    xtype: 'app-main',
    
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
    	xtype: 'app-default-waterbloom-north',
    	region: 'north',
    	id: 'north_container'
    }, {
        xtype: 'app-default-waterbloom-west',
        region: 'west',
        id: 'west_container'
    }, {
    	xtype: 'app-default-waterbloom-center',
    	region: 'center',
    	id: 'center_container',
    	weight: 10
    }],
    
    initComponent: function(){
    	this.callParent();
    	//console.info(this.items);
    	Ext.create('KRF_DEV.view.center.waterbloom.SelectDate', {renderTo: Ext.getBody()});
    	//Ext.create('KRF_DEV.view.common.MapToolbar');
    }
});
