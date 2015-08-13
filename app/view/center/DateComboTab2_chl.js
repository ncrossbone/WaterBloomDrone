Ext.define('WaterBloomDrone.view.center.DateComboTab2_chl', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel2_chl',
	xtype: 'datecombo-panel2-chl',
	
	height: 44,
	width: 128,
	
	title: '클로로필a',
	header: false,
	
	//controller: 'datecombocontroller1',
	
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
		id: 'lblDate2_chl',
		text: '클로로필a',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate2_chl',
		value: Ext.northHanChlDefaultValue,
		editable: false,
		store: Ext.northHanChlDate,
		//store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
	        	/*
	        	comboIdx = Ext.nakdongDroneDate.indexOf(newValue);
	        	//console.info(Ext.nakdongWMCYMW[comboIdx]);
	        	var measureCombo = Ext.getCmp("cboDate1_Measure");
	        	measureCombo.setValue(Ext.nakdongWMCYMW[comboIdx]);
	        	*/
	        },
	        scope: this
	    }
	}]
});