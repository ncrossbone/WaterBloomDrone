Ext.define('WaterBloomDrone.view.map.DynamicLayerAdmin2', {
	map:null, 
	layer:null,
	dynamicLayer1:null,
	dynamicLayer2:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
        	
    	me.layer = new esri.layers.ArcGISDynamicMapServiceLayer(Ext.mapServiceUrl);
		me.layer.id = "DynamicLayer2";
		me.layer.visible = true;
		me.map.addLayer(me.layer);
		
		me.layer.setVisibility(true);
		//console.info(Ext.visibleLayers);
		
		var visibleLayerIds = [];
		
		for(var i = 0; i < Ext.visibleLayers.length; i++){
			visibleLayerIds.push(Ext.visibleLayers[i]);
		}
		
		//var visibleLayerIds = Ext.visibleLayers;
		if(Ext.northHanDroneLayerId != undefined && Ext.northHanDroneLayerId.length > 0){
			for(var i = 0; i < Ext.northHanDroneLayerId.length; i++){
				var northHanDroneDate = Ext.getCmp("cboDate2").value;
				if(northHanDroneDate == Ext.northHanDroneDate[i])
					visibleLayerIds.push(Ext.northHanDroneLayerId[i]);
			}
		}
		
		me.layer.setVisibleLayers(visibleLayerIds);
    }
});