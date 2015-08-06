Ext.define('WaterBloomDrone.view.center.LayerToolbar', {
	
	extend: 'Ext.panel.Panel',
	id: 'LayerToolbar',
	xtype: 'layertoolbar-panel',
	
	height: 34,
	width: 100,
	
	requires: [
	    'WaterBloomDrone.view.center.LayerToolbarController'
	],
	
	controller: 'layertoolbarcontroller',
	
	layout: {
		type: 'hbox'
	},
	
	cls: 'khLee-x-panel-body-default',
	
	items: [{
		xtype: 'image',
		//text: '이용안내',
		id: 'btn12',
		src: './resources/images/button/bt_info.gif',
		style: 'cursor:pointer;border:0px;',
		listeners: {
	        el: {
	            click: 'onClickPopup'
	        }
	    },
		width: 50,
		height: 34
	}, {
		xtype: 'image',
		//text: '초기화',
		id: 'btn23',
		src: './resources/images/button/bt_reset.gif',
		style: 'cursor:pointer; border:0px;',
		listeners: {
	        el: {
	            click: 'onClickFullExtent'
	        }
	    },
		width: 50,
		height: 34
	}]
	
});