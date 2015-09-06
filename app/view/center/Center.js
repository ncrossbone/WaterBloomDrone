Ext.define('WaterBloomDrone.view.center.Center', {
	
	extend: 'Ext.tab.Panel',
	
	xtype: 'app-default-center',
	
	requires: [
	    'WaterBloomDrone.view.map.CoreMapTab1',
	    'WaterBloomDrone.view.map.CoreMapTab2',
	    'WaterBloomDrone.view.map.CoreMapTab3',
	    'WaterBloomDrone.view.center.DateComboTab1',
	    'WaterBloomDrone.view.center.DateComboTab2',
	    'WaterBloomDrone.view.center.DateComboTab3',
	    'WaterBloomDrone.view.center.DateComboTab1Controller',
	    'WaterBloomDrone.view.center.DateComboTab2Controller',
	    'WaterBloomDrone.view.center.DateComboTab3Controller',
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
	}, {
		//title: '금강',
		//header: false,
		id: 'geum_map',
		items: [{
			xtype: 'app-map-coreMap-tab3',
			width: '100%',
			height: '100%'
		}]
	}],
	
	setControl: function(){
		var positionY = 38;
    	
    	var ctlDate1 = Ext.getCmp('DateComboPanel1');
		var ctlDate2 = Ext.getCmp('DateComboPanel2');
		var ctlDate3 = Ext.getCmp('DateComboPanel3');
		var ctlDate1_chl = Ext.getCmp('DateComboPanel1_chl');
		var ctlDate2_chl = Ext.getCmp('DateComboPanel2_chl');
		var ctlDate3_chl = Ext.getCmp('DateComboPanel3_chl');
		var ctlDate1_Measure = Ext.getCmp('DateComboPanel1_Measure');
		var ctlDate2_Measure = Ext.getCmp('DateComboPanel2_Measure');
		var ctlDate3_Measure = Ext.getCmp('DateComboPanel3_Measure');
		
		if(this.activeTab.id == 'nakdong_map'){
			//alert("1");
			ctlDate1.show();
			ctlDate2.hide();
			ctlDate3.hide();
			ctlDate1_chl.show();
			ctlDate2_chl.hide();
			ctlDate3_chl.hide();
			ctlDate1_Measure.show();
			ctlDate2_Measure.hide();
			ctlDate3_Measure.hide();
			
			LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		}
		
		if(this.activeTab.id == 'northhan_map'){
			//alert("2");
			ctlDate1.hide();
			ctlDate2.show();
			ctlDate3.hide();
			ctlDate1_chl.hide();
			ctlDate2_chl.show();
			ctlDate3_chl.hide();
			ctlDate1_Measure.hide();
			ctlDate2_Measure.show();
			ctlDate3_Measure.hide();
			
			LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		}
		
		if(this.activeTab.id == 'geum_map'){
			//alert("2");
			ctlDate1.hide();
			ctlDate2.hide();
			ctlDate3.show();
			ctlDate1_chl.hide();
			ctlDate2_chl.hide();
			ctlDate3_chl.show();
			ctlDate1_Measure.hide();
			ctlDate2_Measure.hide();
			ctlDate3_Measure.show();
			
			LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		}
		
		ctlDate1.setX(Ext.getBody().getViewSize().width - ctlDate1.width);
		ctlDate1.setY(positionY);
		ctlDate2.setX(Ext.getBody().getViewSize().width - ctlDate2.width);
		ctlDate2.setY(positionY);
		ctlDate3.setX(Ext.getBody().getViewSize().width - ctlDate3.width);
		ctlDate3.setY(positionY);
		
		ctlDate1_chl.setX(Ext.getBody().getViewSize().width - ctlDate1_chl.width);
		ctlDate1_chl.setY(positionY + ctlDate1.getHeight());
		ctlDate2_chl.setX(Ext.getBody().getViewSize().width - ctlDate2_chl.width);
		ctlDate2_chl.setY(positionY + ctlDate2.getHeight());
		ctlDate3_chl.setX(Ext.getBody().getViewSize().width - ctlDate3_chl.width);
		ctlDate3_chl.setY(positionY + ctlDate3.getHeight());
		
		ctlDate1_Measure.setX(Ext.getBody().getViewSize().width - ctlDate1_Measure.width);
		ctlDate1_Measure.setY(positionY + ctlDate1.getHeight() + ctlDate1_Measure.getHeight());
		ctlDate2_Measure.setX(Ext.getBody().getViewSize().width - ctlDate2_Measure.width);
		ctlDate2_Measure.setY(positionY + ctlDate2.getHeight() + ctlDate2_chl.getHeight());
		ctlDate3_Measure.setX(Ext.getBody().getViewSize().width - ctlDate3_Measure.width);
		ctlDate3_Measure.setY(positionY + ctlDate3.getHeight() + ctlDate3_chl.getHeight());
		
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
	},
	
	listeners: {
        'tabchange': function() {
        	this.setControl();
        }
    },
	
	initComponent: function(){
		this.callParent();

		// 낙동강 항공영상 select box
		var ctlDate1 = Ext.create('WaterBloomDrone.view.center.DateComboTab1', {
			renderTo: Ext.getBody()
		});
		
		// 낙동강 초분광(클로로필a) select box
		var ctlDate1_chl = Ext.create('WaterBloomDrone.view.center.DateComboTab1_chl', {
			renderTo: Ext.getBody()
		});
		
		// 낙동강 조류측정자료 select box
		var ctlDate1_Measure = Ext.create('WaterBloomDrone.view.center.DateComboTab1_Measure', {
			renderTo: Ext.getBody()
		});
		
		// 북한강 항공영상 select box
		var ctlDate2 = Ext.create('WaterBloomDrone.view.center.DateComboTab2', {
			renderTo: Ext.getBody()
		});
		
		// 북한강 초분광(클로로필a) select box
		var ctlDate2_chl = Ext.create('WaterBloomDrone.view.center.DateComboTab2_chl', {
			renderTo: Ext.getBody()
		});
		
		// 북한강 조류측정자료 select box
		var ctlDate2_Measure = Ext.create('WaterBloomDrone.view.center.DateComboTab2_Measure', {
			renderTo: Ext.getBody()
		});
		
		// 금강 항공영상 select box
		var ctlDate3 = Ext.create('WaterBloomDrone.view.center.DateComboTab3', {
			renderTo: Ext.getBody()
		});
		
		// 금강 초분광(클로로필a) select box
		var ctlDate3_chl = Ext.create('WaterBloomDrone.view.center.DateComboTab3_chl', {
			renderTo: Ext.getBody()
		});
		
		// 금강 조류측정자료 select box
		var ctlDate3_Measure = Ext.create('WaterBloomDrone.view.center.DateComboTab3_Measure', {
			renderTo: Ext.getBody()
		});
		
		var ctlLayerToolbar = Ext.create('WaterBloomDrone.view.center.LayerToolbar', {
			renderTo: Ext.getBody()
		});
		
		var ctlBtnHeader = Ext.create('WaterBloomDrone.view.center.LayerButtonHeader', {
			renderTo: Ext.getBody()
		});

		var ctlBtnBody = Ext.create('WaterBloomDrone.view.center.LayerButton', {
			renderTo: Ext.getBody()
		});
		
		var ctlPopup = Ext.create('WaterBloomDrone.view.center.PopupManual', {
			renderTo: Ext.getBody()
		});
		
		this.setControl();
	}
});

Ext.on('resize', function(){
	var ctl1 = Ext.getCmp('DateComboPanel1');
	var ctl2 = Ext.getCmp('DateComboPanel2');
	var ctl3 = Ext.getCmp('DateComboPanel3');
    
    if(ctl1 == undefined || ctl2 == undefined  || ctl3 == undefined)
    	return;

    ctl1.setX(Ext.getBody().getViewSize().width - ctl1.width, false);
    ctl2.setX(Ext.getBody().getViewSize().width - ctl2.width, false);
    ctl3.setX(Ext.getBody().getViewSize().width - ctl3.width, false);
    
    var ctl_chl1 = Ext.getCmp('DateComboTab1_chl');
	var ctl_chl2 = Ext.getCmp('DateComboTab2_chl');
	var ctl_chl3 = Ext.getCmp('DateComboTab3_chl');
    
    if(ctl_chl1 == undefined || ctl_chl2 == undefined  || ctl_chl3 == undefined)
    	return;

    ctl_chl1.setX(Ext.getBody().getViewSize().width - ctl_chl1.width, false);
    ctl_chl2.setX(Ext.getBody().getViewSize().width - ctl_chl2.width, false);
    ctl_chl3.setX(Ext.getBody().getViewSize().width - ctl_chl3.width, false);
    
    var ctl_measure1 = Ext.getCmp('DateComboTab1_Measure');
	var ctl_measure2 = Ext.getCmp('DateComboTab2_Measure');
	var ctl_measure3 = Ext.getCmp('DateComboTab3_Measure');
    
    if(ctl_measure1 == undefined || ctl_measure2 == undefined  || ctl_measure3 == undefined)
    	return;

    ctl_measure1.setX(Ext.getBody().getViewSize().width - ctl_measure1.width, false);
    ctl_measure2.setX(Ext.getBody().getViewSize().width - ctl_measure2.width, false);
    ctl_measure3.setX(Ext.getBody().getViewSize().width - ctl_measure3.width, false);
});