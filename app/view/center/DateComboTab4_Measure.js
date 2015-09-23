Ext.define('WaterBloomDrone.view.center.DateComboTab4_Measure', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel4_Measure',
	xtype: 'datecombo-panel4-measure',
	
	height: 44,
	width: 128,
	
	title: '조류측정자료',
	header: false,
	
	// controller: 'datecombocontroller1_measure',
	
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
		id: 'lblDate4_Measure',
		text: '조류측정자료',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate4_Measure',
		value: Ext.hangangWMCYMWDefaultValue,
		editable: false,
		store: Ext.hangangWMCYMW,
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	
	        	comboIdx = Ext.hangangWMCYMW.indexOf(newValue);
	        	
	        	var layerCombo = Ext.getCmp("cboDate4");
	        	if(Ext.hangangDroneDate[comboIdx] == "")
	        		layerCombo.setValue(Ext.hangangDroneDefaultValue);
	        	else
	        		layerCombo.setValue(Ext.hangangDroneDate[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate4_chl");
	        	if(Ext.hangangChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.hangangChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.hangangChlDate[comboIdx]);
	        	
	        	Ext.setFeatureLayer();
	        },
	        scope: this
	    }
	}]
});