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
		me.layer.setVisibleLayers(Ext.visibleLayers);
    }
});