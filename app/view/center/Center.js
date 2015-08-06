Ext.define('WaterBloomDrone.view.center.Center', {
	
	extend: 'Ext.tab.Panel',
	
	xtype: 'app-default-center',
	
	requires: [
	    'WaterBloomDrone.view.map.CoreMapTab1',
	    'WaterBloomDrone.view.map.CoreMapTab2',
	    'WaterBloomDrone.view.center.DateComboTab1',
	    'WaterBloomDrone.view.center.DateComboTab2',
	    'WaterBloomDrone.view.center.DateComboTab1Controller',
	    'WaterBloomDrone.view.center.DateComboTab2Controller',
	    'WaterBloomDrone.view.center.PopupManual'
	],
	
	activeTab: 0,
	
	border: 0,
	
	tabBar: {
    	height: 0
    },
	
	items: [{
		//title: '<img src="./resources/images/button/tap_01_ov.png" />',
		//header: false,
		id: 'nakdong_map',
		items: [{
			xtype: 'app-map-coreMap-tab1',
			width: '100%',
			height: '100%'
		}]
	}, {
		//title: '북한강',
		//header: false,
		id: 'northhan_map',
		items: [{
			xtype: 'app-map-coreMap-tab2',
			width: '100%',
			height: '100%'
		}]
	}],
	
	/*
	items: [{
		xtype: 'app-map-coreMap',
		width: '100%',
		height: '100%'
	}]
	*/
	
	listeners: {
        'tabchange': function() {
        	//console.info(this.activeTab.id);
        	
        	var positionY = 38;
        	
        	var ctlDate1 = Ext.getCmp('DateComboPanel1');
    		var ctlDate2 = Ext.getCmp('DateComboPanel2');
    		var ctlDate1_Measure = Ext.getCmp('DateComboPanel1_Measure');
    		var ctlDate2_Measure = Ext.getCmp('DateComboPanel2_Measure');
    		
    		if(this.activeTab.id == 'nakdong_map'){
    			ctlDate1.show();
    			ctlDate2.hide();
    			ctlDate1_Measure.show();
    			ctlDate2_Measure.hide();
    		}
    		
    		if(this.activeTab.id == 'northhan_map'){
    			ctlDate1.hide();
    			ctlDate2.show();
    			ctlDate1_Measure.hide();
    			ctlDate2_Measure.show();
    			ctlDate2_Measure.setY(positionY);
    		}
    		
    		var ctlLayerToolbar = Ext.getCmp('LayerToolbar');
    		
    		ctlLayerToolbar.setX(0);
    		ctlLayerToolbar.setY(positionY);
    		
    		var ctlBtnHeader = Ext.getCmp('LayerButtonHeader');
    		
    		ctlBtnHeader.setX(0);
    		ctlBtnHeader.setY(positionY + ctlLayerToolbar.height);

    		var ctlBtnBody = Ext.getCmp('LayerButtonPanel');
    		
    		ctlBtnBody.setX(0);
    		ctlBtnBody.setY(positionY + ctlBtnHeader.height + ctlLayerToolbar.height);
    		
    		var ctlPopup = Ext.getCmp('PopupManualPanel');
    		
    		ctlPopup.setX(0);
    		ctlPopup.setY(positionY);
    		
    		//ctlDate2.hide();
        }
    },
	
	initComponent: function(){
		this.callParent();
		
		//console.info(Ext.layerIds);
		
		var positionY = 38;
		
		var ctlDate1 = Ext.create('WaterBloomDrone.view.center.DateComboTab1', {
			renderTo: Ext.getBody(),
			//height: 44
		});
		
		ctlDate1.setX(Ext.getBody().getViewSize().width - ctlDate1.width);
		ctlDate1.setY(positionY);
		
		var ctlDate1_Measure = Ext.create('WaterBloomDrone.view.center.DateComboTab1_Measure', {
			renderTo: Ext.getBody()
		});
		
		ctlDate1_Measure.setX(Ext.getBody().getViewSize().width - ctlDate1.width - ctlDate1_Measure.width - 3);
		ctlDate1_Measure.setY(positionY);
		
		var ctlDate2 = Ext.create('WaterBloomDrone.view.center.DateComboTab2', {
			renderTo: Ext.getBody(),
			//height: 22
		});
		
		ctlDate2.setX(Ext.getBody().getViewSize().width - ctlDate2.width);
		ctlDate2.setY(positionY);
		
		ctlDate2.hide();
		
		var ctlDate2_Measure = Ext.create('WaterBloomDrone.view.center.DateComboTab2_Measure', {
			renderTo: Ext.getBody()
		});
		
		ctlDate2_Measure.setX(Ext.getBody().getViewSize().width - ctlDate2.width - ctlDate2_Measure.width - 3);
		ctlDate2_Measure.setY(positionY);
		
		ctlDate2_Measure.hide();
		
		var ctlLayerToolbar = Ext.create('WaterBloomDrone.view.center.LayerToolbar', {
			renderTo: Ext.getBody()
		});
		
		ctlLayerToolbar.setX(0);
		ctlLayerToolbar.setY(positionY);
		
		var ctlBtnHeader = Ext.create('WaterBloomDrone.view.center.LayerButtonHeader', {
			renderTo: Ext.getBody()
		});
		
		ctlBtnHeader.setX(0);
		ctlBtnHeader.setY(positionY + ctlLayerToolbar.height);

		var ctlBtnBody = Ext.create('WaterBloomDrone.view.center.LayerButton', {
			renderTo: Ext.getBody()
		});
		
		ctlBtnBody.setX(0);
		ctlBtnBody.setY(positionY + ctlBtnHeader.height + ctlLayerToolbar.height);
		
		var ctlPopup = Ext.create('WaterBloomDrone.view.center.PopupManual', {
			renderTo: Ext.getBody()
		});
		
		ctlPopup.setX(0);
		ctlPopup.setY(positionY);
	}
});

Ext.on('resize', function(){
	var ctl1 = Ext.getCmp('DateComboPanel1');
	var ctl2 = Ext.getCmp('DateComboPanel2');
    
    if(ctl1 == undefined || ctl2 == undefined)
    	return;

    ctl1.setX(Ext.getBody().getViewSize().width - ctl1.width, false);
    //ctl1.setY(30, false);
    
    ctl2.setX(Ext.getBody().getViewSize().width - ctl2.width, false);
    //ctl2.setY(30, false);
});