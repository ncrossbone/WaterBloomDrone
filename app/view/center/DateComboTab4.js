Ext.define('WaterBloomDrone.view.center.DateComboTab4', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel4',
	xtype: 'datecombo-panel4',
	
	height: 44,
	width: 128,
	
	title: '항공영상',
	header: false,
	floating: true,
	
	controller: 'datecombocontroller4',
	
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
		id: 'lblDate4',
		text: '항공영상',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate4',
		value: Ext.hangangDroneDefaultValue,
		editable: false,
		store: Ext.hangangDroneDate,
		//store: ['촬영일자선택', '2015-07-03', '2015-07-10'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.hangangDroneDate.indexOf(newValue);
	        	
	        	var measureCombo = Ext.getCmp("cboDate4_Measure");
	        	if(Ext.hangangWMCYMW[comboIdx] == "")
	        		measureCombo.setValue(Ext.hangangWMCYMWDefaultValue);
	        	else
	        		measureCombo.setValue(Ext.hangangWMCYMW[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate4_chl");
	        	if(Ext.hangangChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.hangangChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.hangangChlDate[comboIdx]);
	        	
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_4'), "DynamicLayer4");
	        },
	        scope: this
	    }
	}]
});