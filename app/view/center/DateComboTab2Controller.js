/**
* North Controller
*/
Ext.define('WaterBloomDrone.view.center.DateComboTab2Controller', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.datecombocontroller2',
	
	onClickFullExtent: function() {
		var me = Ext.getCmp('_mapDiv_2');
		
		var deferred = me.map.setExtent(me.initialExtent, true);
		deferred.then(function(value){
			me.map.setLevel(9);
		},function(error){
		});
	},
	
	onComboChange: function(){
		
		LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2", "");
	}
});