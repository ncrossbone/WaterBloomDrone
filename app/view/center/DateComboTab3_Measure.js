Ext.define('WaterBloomDrone.view.center.DateComboTab3_Measure', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel3_Measure',
	xtype: 'datecombo-panel3-measure',
	
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
		id: 'lblDate3_Measure',
		text: '조류측정자료',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate3_Measure',
		value: Ext.geumWMCYMWDefaultValue,
		editable: false,
		store: Ext.geumWMCYMW,
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	
	        	comboIdx = Ext.geumWMCYMW.indexOf(newValue);
	        	
	        	var layerCombo = Ext.getCmp("cboDate3");
	        	if(Ext.geumDroneDate[comboIdx] == "")
	        		layerCombo.setValue(Ext.geumDroneDefaultValue);
	        	else
	        		layerCombo.setValue(Ext.geumDroneDate[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate3_chl");
	        	if(Ext.geumChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.geumChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.geumChlDate[comboIdx]);
	        	
	        	Ext.setFeatureLayer();
	        },
	        scope: this
	    }
	}]
});