Ext.define('WaterBloomDrone.view.map.DynamicLayerAdmin1', {
	map:null, 
	layer:null,
	dynamicLayer1:null,
	dynamicLayer2:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
        
        /*
    	console.info(Ext.mapServiceUrl);
    	console.info(Ext.visibleLayers);
    	console.info(Ext.nakdongDroneDate);
    	console.info(Ext.nakdongDroneLayer);
    	console.info(Ext.northHanDroneDate);
		console.info(Ext.northHanDroneLayer);
		*/
    	
    	me.layer = new esri.layers.ArcGISDynamicMapServiceLayer(Ext.mapServiceUrl);
		me.layer.id = "DynamicLayer1";
		me.layer.visible = true;
		me.map.addLayer(me.layer);
		
		me.layer.setVisibility(true);
		me.layer.setVisibleLayers(Ext.visibleLayers);
    }
});