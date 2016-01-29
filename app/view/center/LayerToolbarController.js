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
		
		if(ctlTab.activeTab.id == 'geum_map'){
			me = Ext.getCmp('_mapDiv_3');
			//ctlTab.setActiveTab(2);
		}
		
		if(ctlTab.activeTab.id == "hangang_map"){
			me = Ext.getCmp('_mapDiv_4');
		}
		
		if(me.map != null && me.map != undefined){
			var deferred = me.map.setExtent(me.initialExtent, true);
			deferred.then(function(value){
				me.map.centerAt(me.initialExtent.getCenter());
				me.map.setLevel(me.level);
			});
		}
	},
	
	onClickPopup: function() {
		var ctlPopup = Ext.getCmp('PopupManualPanel');
		ctlPopup.setX(0);
		ctlPopup.setY(40);
		ctlPopup.show();
	}
});