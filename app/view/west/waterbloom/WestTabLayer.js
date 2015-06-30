Ext.define('KRF_DEV.view.west.waterbloom.WestTabLayer', {
	
	extend: 'Ext.panel.Panel',
	
	xtype: 'app-waterbloom-westTabLayer',
	
	id: 'westTabLayer-waterbloom', // view.west.WestTabLayerController에서 사용
	
	requires: [
		'KRF_DEV.view.west.waterbloom.WestTabLayerController'
	],

	title: '레이어',
	header: false,
	
	autoScroll: true,
	
	tabBar: {
        border: false
    },
    
    width: '100%',
    height: '100%',
    
    defaults: {
        textAlign: 'center',
        bodyPadding: 5
    },
	
	items: [{
		title: '레이어',
		xtype: 'treepanel',
		scroll: false,
		viewConfig: {
			style: { overflow: 'auto', overflowX: 'hidden' }
		},
		store : Ext.create('KRF_DEV.store.west.WestTabLayerStore1'),
		controller: 'westTabLayerController-waterbloom',
		id: 'DynamicLayer1', // view.map.DynamicLayerAdmin의 layer.id와 일치시키자..
		rootVisible: false,
		useArrows: true,
		border: 0,
		bufferedRenderer: false,
		height: 300
		//rowLines: true
	}]
});