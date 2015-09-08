Ext.define('WaterBloomDrone.view.center.DateComboTab1', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel1',
	xtype: 'datecombo-panel1',
	
	height: 44,
	width: 128,
	
	title: '항공영상',
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
		id: 'lblDate1',
		text: '항공영상',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate1',
		value: Ext.nakdongDroneDefaultValue,
		editable: false,
		store: Ext.nakdongDroneDate,
		//store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	
	        	comboIdx = Ext.nakdongDroneDate.indexOf(newValue);
	        	
	        	var measureCombo = Ext.getCmp("cboDate1_Measure");
	        	if(Ext.nakdongWMCYMW[comboIdx] == "")
	        		measureCombo.setValue(Ext.nakdongWMCYMWDefaultValue);
	        	else
	        		measureCombo.setValue(Ext.nakdongWMCYMW[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate1_chl");
	        	if(Ext.nakdongChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.nakdongChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.nakdongChlDate[comboIdx]);
	        	
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
	        },
	        scope: this
	    }
	}]
});