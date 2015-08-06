Ext.define('WaterBloomDrone.view.center.DateComboTab2', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel2',
	xtype: 'datecombo-panel2',
	
	height: 44,
	width: 128,
	
	title: '촬영일자 선택',
	header: false,
	floating: true,
	
	controller: 'datecombocontroller2',
	
	layout: {
		type: 'vbox',
		align: 'middle',
		pack: 'middle'
	},
	
	//x: 500,
	//y: 500,
	
	cls: 'khLee-x-box-target khLee-x-panel-body',
	
	items: [{
		xtype: 'label',
		id: 'lblDate2',
		text: '촬영일자',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate2',
		value: Ext.northHanDroneDefaultValue,
		editable: false,
		store: Ext.northHanDroneDate,
		//store: ['촬영일자선택', '2015-07-03', '2015-07-10'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
	        	
	        	comboIdx = Ext.northHanDroneDate.indexOf(newValue);
	        	//console.info(Ext.nakdongWMCYMW[comboIdx]);
	        	var measureCombo = Ext.getCmp("cboDate2_Measure");
	        	measureCombo.setValue(Ext.northHanWMCYMW[comboIdx]);
	        },
	        scope: this
	    }
	}]
});