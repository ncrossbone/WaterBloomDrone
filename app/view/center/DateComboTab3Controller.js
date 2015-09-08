/**
* North Controller
*/
Ext.define('WaterBloomDrone.view.center.DateComboTab3Controller', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.datecombocontroller3',
	
	onClickFullExtent: function() {
		var me = Ext.getCmp('_mapDiv_3');
		
		var deferred = me.map.setExtent(me.initialExtent, true);
		deferred.then(function(value){
			me.map.setLevel(9);
		},function(error){
		});
	},
	
	onComboChange: function(){
		
		LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3", "");
	}
});