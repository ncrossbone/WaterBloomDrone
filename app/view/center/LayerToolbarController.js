/**
* North Controller
*/
Ext.define('WaterBloomDrone.view.center.LayerToolbarController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.layertoolbarcontroller',
	
	onClickFullExtent: function() {
		var ctlTab = Ext.getCmp('app_center_container');
		var me = null;
		
		if(ctlTab.activeTab.id == 'nakdong_map'){
			me = Ext.getCmp('_mapDiv_1');
			//ctlTab.setActiveTab(0);
		}
		
		if(ctlTab.activeTab.id == 'northhan_map'){
			me = Ext.getCmp('_mapDiv_2');
			//ctlTab.setActiveTab(1);
		}
		
		console.info(me.level);
		
		var deferred = me.map.setExtent(me.initialExtent, true);
		deferred.then(function(value){
			me.map.centerAt(me.initialExtent.getCenter());
			me.map.setLevel(me.level);
		});
		
		/*
		var deferred = me.map.setExtent(me.initialExtent, true);
		deferred.then(function(value){
			me.map.setLevel(me.level);
		},function(error){
		});
		*/
	},
	
	onClickPopup: function() {
		var ctlPopup = Ext.getCmp('PopupManualPanel');
		
		ctlPopup.setX(0);
		//ctlPopup.setY(0);
		ctlPopup.setY(40);
		ctlPopup.show();
		
		var ctlPopup = Ext.getCmp('PopupManualPanel');
		
		ctlPopup.setX(0);
		//ctlPopup.setY(0);
		ctlPopup.setY(40);
		ctlPopup.show();
	}
});