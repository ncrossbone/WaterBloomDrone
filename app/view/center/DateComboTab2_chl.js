Ext.define('WaterBloomDrone.view.center.DateComboTab2_chl', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel2_chl',
	xtype: 'datecombo-panel2-chl',
	
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
		id: 'lblDate2_chl',
		text: '클로로필a',
		height: 22
	}, {
		xtype: 'combo',
		id: 'cboDate2_chl',
		value: Ext.northHanChlDefaultValue,
		editable: false,
		store: Ext.northHanChlDate,
		//store: ['촬영일자선택', '2015-06-23', '2015-07-04'],
		format: 'Y-m-d',
		height: 22,
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	comboIdx = Ext.northHanChlDate.indexOf(newValue);

	        	var measureCombo = Ext.getCmp("cboDate2_Measure");
	        	var layerCombo = Ext.getCmp("cboDate2");
	        	
	        	if(newValue == "선택하세요."){
	        		measureCombo.setValue(Ext.northHanWMCYMWDefaultValue);
	        		layerCombo.setValue(Ext.northHanDroneDefaultValue);
	        	}
	        	else{
	        		measureCombo.setValue(Ext.northHanWMCYMW[comboIdx]);
	        		layerCombo.setValue(Ext.northHanDroneDate[comboIdx]);
	        		LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
	        	}
	        },
	        scope: this
	    }
	}]
});