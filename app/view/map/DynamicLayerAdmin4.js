Ext.define('WaterBloomDrone.view.map.DynamicLayerAdmin4', {
	map:null, 
	layer:null,
	dynamicLayer1:null,
	dynamicLayer2:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
        	
    	me.layer = new esri.layers.ArcGISDynamicMapServiceLayer(Ext.mapServiceUrl);
		me.layer.id = "DynamicLayer4";
		me.layer.visible = true;
		me.map.addLayer(me.layer);
		
		me.layer.setVisibility(true);
		//console.info(Ext.visibleLayers);
		
		var visibleLayerIds = [];
		
		for(var i = 0; i < Ext.visibleLayers.length; i++){
			visibleLayerIds.push(Ext.visibleLayers[i]);
		}
		
		//var visibleLayerIds = Ext.visibleLayers;
		//console.info(visibleLayerIds);
		if(Ext.hangangDroneLayerId != undefined && Ext.hangangDroneLayerId.length > 0){
			for(var i = 0; i < Ext.hangangDroneLayerId.length; i++){
				var hangangDroneDate = Ext.getCmp("cboDate4").value;
				if(hangangDroneDate == Ext.hangangDroneDate[i]){
					visibleLayerIds.push(Ext.hangangDroneLayerId[i]);
				}
			}
		}
		
		me.layer.setVisibleLayers(visibleLayerIds);
    }
});