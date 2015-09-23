/**
* North Controller
*/
Ext.define('WaterBloomDrone.view.center.DateComboTab4Controller', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.datecombocontroller4',
	
	onClickFullExtent: function() {
		var me = Ext.getCmp('_mapDiv_4');
		
		var deferred = me.map.setExtent(me.initialExtent, true);
		deferred.then(function(value){
			me.map.setLevel(9);
		},function(error){
		});
	},
	
	onComboChange: function(){
		LayerOnOffBtn(Ext.getCmp('_mapDiv_4'), "DynamicLayer4", "");
	}
});