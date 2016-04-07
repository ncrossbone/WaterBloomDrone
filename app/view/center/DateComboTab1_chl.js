Ext.define('WaterBloomDrone.view.center.DateComboTab1_chl', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel1_chl',
	xtype: 'datecombo-panel1-chl',
	
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
		id: 'lblDate1_chl',
		text: '클로로필a',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate1_chl',
		value: Ext.nakdongChlDefaultValue,
		editable: false,
		store: Ext.nakdongChlDate,
		//store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.nakdongChlDate.indexOf(newValue);

	        	var measureCombo = Ext.getCmp("cboDate1_Measure");
	        	var layerCombo = Ext.getCmp("cboDate1");
	        	
	        	if(newValue == "선택하세요."){
	        		measureCombo.setValue(Ext.nakdongWMCYMWDefaultValue);
	        		layerCombo.setValue(Ext.nakdongDroneDefaultValue);
	        	}
	        	else{
	        		measureCombo.setValue(Ext.nakdongWMCYMW[comboIdx]);
	        		layerCombo.setValue(Ext.nakdongDroneDate[comboIdx]);
	        	}
	        	
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
	        },
	        scope: this
	    }
	}]
});