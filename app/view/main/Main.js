Ext.define('KRF_DEV.view.main.Main', {
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
    	xtype: 'app-default-north',
    	region: 'north',
    	id: 'north_container',
    	weight: 10
    }, {
        xtype: 'app-default-west',
        region: 'west',
        id: 'west_container',
        weight: 10
    }, {
    	xtype: 'app-default-center',
    	region: 'center',
    	id: 'center_container'
    }]
});
