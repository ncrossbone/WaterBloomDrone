Ext.define('WaterBloomDrone.view.center.DateComboTab4_chl', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel4_chl',
	xtype: 'datecombo-panel4-chl',
	
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
		id: 'lblDate4_chl',
		text: '클로로필a',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate4_chl',
		value: Ext.hangangChlDefaultValue,
		editable: false,
		store: Ext.hangangChlDate,
		//store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.hangangChlDate.indexOf(newValue);

	        	var measureCombo = Ext.getCmp("cboDate4_Measure");
	        	var layerCombo = Ext.getCmp("cboDate4");
	        	
	        	if(newValue == "선택하세요."){
	        		measureCombo.setValue(Ext.hangangWMCYMWDefaultValue);
	        		layerCombo.setValue(Ext.hangangDroneDefaultValue);
	        	}
	        	else{
	        		measureCombo.setValue(Ext.hangangWMCYMW[comboIdx]);
	        		layerCombo.setValue(Ext.hangangDroneDate[comboIdx]);
	        	}
	        	
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_4'), "DynamicLayer4");
	        },
	        scope: this
	    }
	}]
});