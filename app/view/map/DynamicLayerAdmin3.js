Ext.define('WaterBloomDrone.view.map.DynamicLayerAdmin3', {
	map:null, 
	layer:null,
	dynamicLayer1:null,
	dynamicLayer2:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
        	
    	me.layer = new esri.layers.ArcGISDynamicMapServiceLayer(Ext.mapServiceUrl);
		me.layer.id = "DynamicLayer3";
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
		if(Ext.geumDroneLayerId != undefined && Ext.geumDroneLayerId.length > 0){
			for(var i = 0; i < Ext.geumDroneLayerId.length; i++){
				var geumDroneDate = Ext.getCmp("cboDate3").value;
				if(geumDroneDate == Ext.geumDroneDate[i]){
					visibleLayerIds.push(Ext.geumDroneLayerId[i]);
					//console.info(Ext.geumDroneLayerId[i]);
				}
			}
		}
		
		//console.info(visibleLayerIds);
		me.layer.setVisibleLayers(visibleLayerIds);
    }
});