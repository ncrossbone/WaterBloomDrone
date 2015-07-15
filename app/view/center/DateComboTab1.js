Ext.define('WaterBloomDrone.view.center.DateComboTab1', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel1',
	xtype: 'datecombo-panel1',
	
	height: 24,
	width: 128,
	
	title: '촬영일자 선택',
	header: false,
	
	controller: 'datecombocontroller1',
	
	layout: {
		type: 'hbox'
	},
	
	//x: 500,
	//y: 500,
	
	items: [{
		xtype: 'combo',
		id: 'cboDate1',
		value: '2015-06-23',
		editable: false,
		store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
	        },
	        scope: this
	    }
	}]
});