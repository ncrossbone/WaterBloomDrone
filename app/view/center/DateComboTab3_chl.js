Ext.define('WaterBloomDrone.view.center.DateComboTab3_chl', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel3_chl',
	xtype: 'datecombo-panel3-chl',
	
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
		id: 'lblDate3_chl',
		text: '클로로필a',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate3_chl',
		value: Ext.geumChlDefaultValue,
		editable: false,
		store: Ext.geumChlDate,
		//store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.geumChlDate.indexOf(newValue);

	        	var measureCombo = Ext.getCmp("cboDate3_Measure");
	        	var layerCombo = Ext.getCmp("cboDate3");
	        	
	        	if(newValue == "선택하세요."){
	        		measureCombo.setValue(Ext.geumWMCYMWDefaultValue);
	        		layerCombo.setValue(Ext.geumDroneDefaultValue);
	        	}
	        	else{
	        		measureCombo.setValue(Ext.geumWMCYMW[comboIdx]);
	        		layerCombo.setValue(Ext.geumDroneDate[comboIdx]);
	        		LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
	        	}
	        },
	        scope: this
	    }
	}]
});