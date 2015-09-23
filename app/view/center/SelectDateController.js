/**
* North Controller
*/
Ext.define('WaterBloomDrone.view.center.SelectDateController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.selectdatecontroller',
	
	onClickFullExtent: function() {
		/* 아래 두가지 중 한가지 택 일*/
		//var me = KRF_DEV.getApplication().coreMap;
		var me = Ext.getCmp('_mapDiv_');
		
		var deferred = me.map.setExtent(me.initialExtent, true);
		deferred.then(function(value){
			me.map.setLevel(9);
		},function(error){
		});
	},
	
	onComboChange: function(){
		
		LayerOnOffBtn(WaterBloomDrone.getApplication().coreMap);
	}
});