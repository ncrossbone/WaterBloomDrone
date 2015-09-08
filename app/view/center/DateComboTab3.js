Ext.define('WaterBloomDrone.view.center.DateComboTab3', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel3',
	xtype: 'datecombo-panel3',
	
	height: 44,
	width: 128,
	
	title: '항공영상',
	header: false,
	floating: true,
	
	controller: 'datecombocontroller3',
	
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
		id: 'lblDate3',
		text: '항공영상',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate3',
		value: Ext.geumDroneDefaultValue,
		editable: false,
		store: Ext.geumDroneDate,
		//store: ['촬영일자선택', '2015-07-03', '2015-07-10'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.geumDroneDate.indexOf(newValue);
	        	
	        	var measureCombo = Ext.getCmp("cboDate3_Measure");
	        	if(Ext.geumWMCYMW[comboIdx] == "")
	        		measureCombo.setValue(Ext.geumWMCYMWDefaultValue);
	        	else
	        		measureCombo.setValue(Ext.geumWMCYMW[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate3_chl");
	        	if(Ext.geumChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.geumChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.geumChlDate[comboIdx]);
	        	
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
	        },
	        scope: this
	    }
	}]
});