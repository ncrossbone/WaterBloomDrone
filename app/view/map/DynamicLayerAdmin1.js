Ext.define('WaterBloomDrone.view.map.DynamicLayerAdmin1', {
	map:null, 
	layer:null,
	dynamicLayer1:null,
	dynamicLayer2:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
    	
    	me.layer = new esri.layers.ArcGISDynamicMapServiceLayer(Ext.mapServiceUrl);
		me.layer.id = "DynamicLayer1";
		me.layer.visible = true;
		me.map.addLayer(me.layer);
		
		me.layer.setVisibility(true);
		//console.info(Ext.visibleLayers);
		
		var visibleLayerIds = [];
		
		for(var i = 0; i < Ext.visibleLayers.length; i++){
			visibleLayerIds.push(Ext.visibleLayers[i]);
		}
		
		//var visibleLayerIds = Ext.visibleLayers;
		if(Ext.nakdongDroneLayerId != undefined && Ext.nakdongDroneLayerId.length > 0){
			for(var i = 0; i < Ext.nakdongDroneLayerId.length; i++){
				var nakdongDroneDate = Ext.getCmp("cboDate1").value;
				if(nakdongDroneDate == Ext.nakdongDroneDate[i])
					visibleLayerIds.push(Ext.nakdongDroneLayerId[i]);
			}
		}
		//console.info(Ext.visibleLayers);
		me.layer.setVisibleLayers(visibleLayerIds);
    }
});