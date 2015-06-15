Ext.define('KRF_DEV.view.west.WestTabLayer', {
	
	extend: 'Ext.tab.Panel',
	
	xtype: 'app-westTabLayer',
	
	id: 'westTabLayer', // view.west.WestTabLayerController에서 사용
	
	requires: [
		'KRF_DEV.view.west.WestTabLayerController',
		'KRF_DEV.store.dev_test.WestTabLayerStore'
	],

	title: 'KRF 레이어',
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
		title: 'Layer1_new',
		xtype: 'treepanel',
		store : Ext.create('KRF_DEV.store.west.WestTabLayerStore1'),
		controller: 'westTabLayerController',
		id: 'DynamicLayer1', // view.map.DynamicLayerAdmin의 layer.id와 일치시키자..
		rootVisible: false,
		useArrows: true,
		border: 0,
		bufferedRenderer: false
		//rowLines: true
	}, {
		title: 'Layer2',
		xtype: 'treepanel',
		store : Ext.create('KRF_DEV.store.west.WestTabLayerStore2'),
		controller: 'westTabLayerController',
		id: 'DynamicLayer2', // view.map.DynamicLayerAdmin의 layer.id와 일치시키자..
		rootVisible: false,
		useArrows: true,
		border: 0,
		bufferedRenderer: false
		//rowLines: true
	}]
});