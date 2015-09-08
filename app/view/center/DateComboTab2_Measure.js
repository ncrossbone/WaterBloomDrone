Ext.define('WaterBloomDrone.view.center.DateComboTab2_Measure', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel2_Measure',
	xtype: 'datecombo-panel2-measure',
	
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
		id: 'lblDate2_Measure',
		text: '조류측정자료',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate2_Measure',
		value: Ext.northHanWMCYMWDefaultValue,
		editable: false,
		store: Ext.northHanWMCYMW,
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	
	        	comboIdx = Ext.northHanWMCYMW.indexOf(newValue);
	        	
	        	var layerCombo = Ext.getCmp("cboDate2");
	        	if(Ext.northHanDroneDate[comboIdx] == "")
	        		layerCombo.setValue(Ext.northHanDroneDefaultValue);
	        	else
	        		layerCombo.setValue(Ext.northHanDroneDate[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate2_chl");
	        	if(Ext.northHanChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.northHanChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.northHanChlDate[comboIdx]);
	        	
	        	Ext.setFeatureLayer();
	        },
	        scope: this
	    }
	}]
});