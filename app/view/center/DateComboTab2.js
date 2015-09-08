Ext.define('WaterBloomDrone.view.center.DateComboTab2', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel2',
	xtype: 'datecombo-panel2',
	
	height: 44,
	width: 128,
	
	title: '항공영상',
	header: false,
	floating: true,
	
	controller: 'datecombocontroller2',
	
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
		id: 'lblDate2',
		text: '항공영상',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate2',
		value: Ext.northHanDroneDefaultValue,
		editable: false,
		store: Ext.northHanDroneDate,
		//store: ['촬영일자선택', '2015-07-03', '2015-07-10'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.northHanDroneDate.indexOf(newValue);
	        	
	        	var measureCombo = Ext.getCmp("cboDate2_Measure");
	        	if(Ext.northHanWMCYMW[comboIdx] == "")
	        		measureCombo.setValue(Ext.northHanWMCYMWDefaultValue);
	        	else
	        		measureCombo.setValue(Ext.northHanWMCYMW[comboIdx]);
	        	
	        	var chlCombo = Ext.getCmp("cboDate2_chl");
	        	if(Ext.northHanChlDate[comboIdx] == "")
	        		chlCombo.setValue(Ext.northHanChlDefaultValue);
	        	else
	        		chlCombo.setValue(Ext.northHanChlDate[comboIdx]);
	        	
	        	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
	        },
	        scope: this
	    }
	}]
});