Ext.define('WaterBloomDrone.view.center.DateComboTab2_Measure', {
	
	extend: 'Ext.panel.Panel',
	id: 'DateComboPanel2_Measure',
	xtype: 'datecombo-panel2-measure',
	
	height: 44,
	width: 128,
	
	title: '측정일자 선택',
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
		text: '측정일자',
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
	        	layerCombo.setValue(Ext.northHanDroneDate[comboIdx]);
	        	
	        	var mapCtl = Ext.getCmp('_mapDiv_2')
	        	var layer = mapCtl.map.getLayer("FeatureLayer2");
	        	mapCtl.map.removeLayer(layer);
	        	var layer = mapCtl.map.getLayer("labels");
	        	mapCtl.map.removeLayer(layer);
	        	mapCtl.featureLayerAdmin = Ext.create('WaterBloomDrone.view.map.FeatureLayerAdmin2', mapCtl.map);
	        },
	        scope: this
	    }
	}]
});